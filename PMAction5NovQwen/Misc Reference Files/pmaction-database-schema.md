# PMAction Database Schema - Phase 2 Implementation

## Overview
This schema supports the transition from local storage (Phase 1) to cloud database (Phase 2) with HIPAA compliance.

---

## DATABASE SETUP (PostgreSQL)

```sql
-- ================================================
-- USERS & AUTHENTICATION
-- ================================================

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW(),
  last_login TIMESTAMP,
  is_active BOOLEAN DEFAULT TRUE,
  region VARCHAR(10) DEFAULT 'US',
  CONSTRAINT email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$')
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_active ON users(is_active);

-- ================================================
-- FEELINGS CHECK-INS
-- ================================================

CREATE TABLE feelings_check_ins (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  timestamp TIMESTAMP DEFAULT NOW(),
  primary_feeling VARCHAR(50) NOT NULL,
  subcategory VARCHAR(50),
  specific_feelings TEXT[], -- Array of specific feeling words
  body_location TEXT,
  triggers TEXT[], -- Array of trigger hashtags
  notes TEXT,
  sentiment_score FLOAT, -- -1.0 to 1.0 from AI analysis
  
  CONSTRAINT valid_feeling CHECK (primary_feeling IN (
    'Happy', 'Sad', 'Angry', 'Fearful', 'Surprised', 'Disgusted', 'Calm'
  ))
);

CREATE INDEX idx_check_ins_user_time ON feelings_check_ins(user_id, timestamp DESC);

-- ================================================
-- HABITS
-- ================================================

CREATE TABLE habits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  icon VARCHAR(10),
  routine_type VARCHAR(20), -- 'morning', 'afternoon', 'evening', 'anytime'
  frequency VARCHAR(20) DEFAULT 'daily',
  target_count INTEGER DEFAULT 1,
  created_at TIMESTAMP DEFAULT NOW(),
  is_active BOOLEAN DEFAULT TRUE
);

CREATE TABLE habit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  habit_id UUID REFERENCES habits(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  completion_date DATE NOT NULL,
  completed_at TIMESTAMP DEFAULT NOW(),
  notes TEXT,
  
  UNIQUE(habit_id, completion_date)
);

CREATE INDEX idx_habit_logs_user_date ON habit_logs(user_id, completion_date DESC);

-- ================================================
-- TRAINING PROGRAMS
-- ================================================

CREATE TABLE training_programs (
  id VARCHAR(50) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  category VARCHAR(50),
  duration_days INTEGER NOT NULL,
  difficulty VARCHAR(20), -- 'Beginner', 'Intermediate', 'Advanced'
  time_commitment VARCHAR(50),
  description TEXT,
  icon VARCHAR(10),
  content JSONB NOT NULL, -- Stores daily activities
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE user_programs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  program_id VARCHAR(50) REFERENCES training_programs(id),
  started_at TIMESTAMP DEFAULT NOW(),
  current_day INTEGER DEFAULT 0,
  completed_at TIMESTAMP,
  status VARCHAR(20) DEFAULT 'active', -- 'active', 'completed', 'abandoned'
  
  CONSTRAINT valid_status CHECK (status IN ('active', 'completed', 'abandoned'))
);

CREATE TABLE program_activity_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_program_id UUID REFERENCES user_programs(id) ON DELETE CASCADE,
  day_number INTEGER NOT NULL,
  completed_at TIMESTAMP DEFAULT NOW(),
  journal_response TEXT,
  
  UNIQUE(user_program_id, day_number)
);

CREATE INDEX idx_user_programs_active ON user_programs(user_id, status) WHERE status = 'active';

-- ================================================
-- JOURNAL ENTRIES (PHASE 1 MIGRATION)
-- ================================================

CREATE TABLE journal_entries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  entry_date DATE NOT NULL,
  entry_text TEXT NOT NULL,
  tags TEXT[],
  sentiment_score FLOAT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_journal_user_date ON journal_entries(user_id, entry_date DESC);

-- ================================================
-- PHASE 2: CLINICAL ASSESSMENTS (NOT IN PHASE 1)
-- ================================================

CREATE TABLE clinical_assessments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  assessment_type VARCHAR(20) NOT NULL, -- 'PHQ-9', 'GAD-7'
  score INTEGER,
  severity VARCHAR(20),
  responses JSONB NOT NULL, -- Encrypted JSON of answers
  taken_at TIMESTAMP DEFAULT NOW(),
  
  CONSTRAINT valid_assessment CHECK (assessment_type IN ('PHQ-9', 'GAD-7', 'custom')),
  CONSTRAINT valid_severity CHECK (severity IN ('minimal', 'mild', 'moderate', 'severe'))
);

CREATE INDEX idx_assessments_user_type_time ON clinical_assessments(user_id, assessment_type, taken_at DESC);

-- ================================================
-- USER PREFERENCES & SETTINGS
-- ================================================

CREATE TABLE user_preferences (
  user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  reminder_time TIME,
  reminder_frequency VARCHAR(20) DEFAULT 'daily',
  notifications_enabled BOOLEAN DEFAULT TRUE,
  theme VARCHAR(20) DEFAULT 'dark',
  language VARCHAR(10) DEFAULT 'en',
  timezone VARCHAR(50) DEFAULT 'UTC',
  updated_at TIMESTAMP DEFAULT NOW()
);

-- ================================================
-- DATA IMPORT FROM PHASE 1 (LOCAL STORAGE)
-- ================================================

-- Function to import Phase 1 JSON data
CREATE OR REPLACE FUNCTION import_phase1_data(
  p_user_id UUID,
  p_json_data JSONB
) RETURNS VOID AS $$
DECLARE
  check_in JSONB;
  habit_record JSONB;
  habit_log JSONB;
  program JSONB;
BEGIN
  -- Import check-ins
  FOR check_in IN SELECT * FROM jsonb_array_elements(p_json_data->'checkIns')
  LOOP
    INSERT INTO feelings_check_ins (user_id, timestamp, primary_feeling, notes)
    VALUES (
      p_user_id,
      (check_in->>'timestamp')::TIMESTAMP,
      check_in->>'feeling',
      check_in->>'notes'
    );
  END LOOP;
  
  -- Import habits
  FOR habit_record IN SELECT * FROM jsonb_array_elements(p_json_data->'habits')
  LOOP
    INSERT INTO habits (user_id, name, icon)
    VALUES (
      p_user_id,
      habit_record->>'name',
      habit_record->>'icon'
    );
  END LOOP;
  
  -- Additional imports as needed...
END;
$$ LANGUAGE plpgsql;

-- ================================================
-- ANALYTICS & REPORTING VIEWS
-- ================================================

-- Daily active users
CREATE VIEW daily_active_users AS
SELECT 
  DATE(timestamp) as date,
  COUNT(DISTINCT user_id) as active_users
FROM feelings_check_ins
GROUP BY DATE(timestamp)
ORDER BY date DESC;

-- User engagement metrics
CREATE VIEW user_engagement AS
SELECT 
  u.id,
  u.email,
  COUNT(DISTINCT fc.id) as total_check_ins,
  COUNT(DISTINCT hl.id) as total_habit_logs,
  COUNT(DISTINCT up.id) as programs_started,
  COUNT(DISTINCT CASE WHEN up.status = 'completed' THEN up.id END) as programs_completed,
  MAX(fc.timestamp) as last_check_in
FROM users u
LEFT JOIN feelings_check_ins fc ON u.id = fc.user_id
LEFT JOIN habit_logs hl ON u.id = hl.user_id
LEFT JOIN user_programs up ON u.id = up.user_id
GROUP BY u.id, u.email;

-- Habit adherence rates
CREATE VIEW habit_adherence AS
SELECT 
  h.user_id,
  h.name,
  COUNT(hl.id) as times_completed,
  MAX(hl.completion_date) as last_completed,
  (
    SELECT COUNT(DISTINCT completion_date) 
    FROM habit_logs 
    WHERE habit_id = h.id
  ) as streak_days
FROM habits h
LEFT JOIN habit_logs hl ON h.id = hl.habit_id
WHERE h.is_active = TRUE
GROUP BY h.id, h.user_id, h.name;

-- ================================================
-- SECURITY: ROW LEVEL SECURITY
-- ================================================

-- Enable RLS on all user tables
ALTER TABLE feelings_check_ins ENABLE ROW LEVEL SECURITY;
ALTER TABLE habits ENABLE ROW LEVEL SECURITY;
ALTER TABLE habit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE journal_entries ENABLE ROW LEVEL SECURITY;

-- Users can only see their own data
CREATE POLICY user_check_ins_policy ON feelings_check_ins
  FOR ALL USING (user_id = current_setting('app.user_id')::UUID);

CREATE POLICY user_habits_policy ON habits
  FOR ALL USING (user_id = current_setting('app.user_id')::UUID);

CREATE POLICY user_habit_logs_policy ON habit_logs
  FOR ALL USING (user_id = current_setting('app.user_id')::UUID);

CREATE POLICY user_programs_policy ON user_programs
  FOR ALL USING (user_id = current_setting('app.user_id')::UUID);

CREATE POLICY user_journal_policy ON journal_entries
  FOR ALL USING (user_id = current_setting('app.user_id')::UUID);

-- ================================================
-- SEED DATA: TRAINING PROGRAMS
-- ================================================

INSERT INTO training_programs (id, title, category, duration_days, difficulty, time_commitment, description, icon, content) VALUES
('mindfulness-7day', '7-Day Mindfulness Journey', 'Mindfulness', 7, 'Beginner', '10-15 min/day', 'Build present-moment awareness through daily meditation practices', '🧘', 
  '[
    {
      "day": 1,
      "title": "Introduction to Mindfulness",
      "duration": 5,
      "prompt": "What do you notice about your breath right now?",
      "task": "Set aside 5 minutes in your day for quiet observation",
      "journalPrompt": "How did it feel to slow down?"
    },
    {
      "day": 2,
      "title": "Body Scan Meditation",
      "duration": 10,
      "prompt": "Starting from your toes, notice any sensations without judgment",
      "task": "Perform a body scan when you wake up or before bed",
      "journalPrompt": "Which parts of your body hold the most tension?"
    },
    {
      "day": 3,
      "title": "Mindful Breathing",
      "duration": 5,
      "prompt": "Focus only on the breath - in for 4, hold for 4, out for 4, hold for 4",
      "task": "Practice 3 rounds of box breathing",
      "journalPrompt": "How did controlling your breath affect your state of mind?"
    },
    {
      "day": 4,
      "title": "Walking Meditation",
      "duration": 10,
      "prompt": "Notice each step - heel, ball, toe. Feel the ground beneath you",
      "task": "Walk slowly for 10 minutes, focusing on physical sensations",
      "journalPrompt": "What did you notice that you usually miss?"
    },
    {
      "day": 5,
      "title": "Mindful Eating",
      "duration": 15,
      "prompt": "Notice colors, textures, tastes, and the experience of chewing",
      "task": "Eat without screens or distractions",
      "journalPrompt": "How was this different from your usual meals?"
    },
    {
      "day": 6,
      "title": "Loving-Kindness Meditation",
      "duration": 5,
      "prompt": "May I be happy, may I be healthy, may I be at peace",
      "task": "Practice for 5 minutes, extending kindness to loved ones",
      "journalPrompt": "How did it feel to wish yourself well?"
    },
    {
      "day": 7,
      "title": "Reflection & Integration",
      "duration": 10,
      "prompt": "What practices resonated most? Which will you continue?",
      "task": "Create a personal mindfulness routine",
      "journalPrompt": "What changed in your week? What will you take forward?"
    }
  ]'::JSONB
),
('communication-7day', 'Building Healthy Communication', 'Relationships', 7, 'Intermediate', '15-20 min/day', 'Improve relationship skills and conflict resolution', '💬',
  '[
    {
      "day": 1,
      "title": "Active Listening Practice",
      "duration": 10,
      "prompt": "Listen to understand, not to respond",
      "task": "Have a 10-minute conversation where you only listen",
      "journalPrompt": "What did you learn by just listening?"
    }
  ]'::JSONB
);

-- ================================================
-- BACKUP & RECOVERY
-- ================================================

-- Automated daily backups (configure in cloud provider)
-- Retention: 30 days for operational, 7 years for HIPAA compliance

-- Point-in-time recovery setup
ALTER DATABASE pmaction SET wal_level = replica;

-- ================================================
-- MONITORING QUERIES
-- ================================================

-- Check database size
SELECT pg_size_pretty(pg_database_size('pmaction')) as db_size;

-- Check table sizes
SELECT 
  relname as table_name,
  pg_size_pretty(pg_total_relation_size(relid)) as total_size
FROM pg_catalog.pg_statio_user_tables
ORDER BY pg_total_relation_size(relid) DESC;

-- Active connections
SELECT count(*) FROM pg_stat_activity WHERE datname = 'pmaction';

-- Slow queries (requires pg_stat_statements extension)
SELECT 
  query,
  calls,
  total_time / calls as avg_time_ms,
  min_time as min_ms,
  max_time as max_ms
FROM pg_stat_statements
ORDER BY avg_time_ms DESC
LIMIT 10;
```

---

## MIGRATION SCRIPT: PHASE 1 TO PHASE 2

```javascript
// migration.js - Convert localStorage to database

const fs = require('fs');
const { Pool } = require('pg');

// Database connection
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: { rejectUnauthorized: false }
});

async function migrateUserData(userId, localStorageData) {
  const client = await pool.connect();
  
  try {
    await client.query('BEGIN');
    
    // Migrate check-ins
    for (const checkIn of localStorageData.checkIns) {
      await client.query(`
        INSERT INTO feelings_check_ins (user_id, timestamp, primary_feeling, notes)
        VALUES ($1, $2, $3, $4)
      `, [userId, checkIn.timestamp, checkIn.feeling, checkIn.notes || null]);
    }
    
    // Migrate habits
    for (const habit of localStorageData.habits) {
      const result = await client.query(`
        INSERT INTO habits (user_id, name, icon)
        VALUES ($1, $2, $3)
        RETURNING id
      `, [userId, habit.name, habit.icon]);
      
      const habitId = result.rows[0].id;
      
      // Migrate habit logs (if tracked)
      if (habit.completions) {
        for (const completion of habit.completions) {
          await client.query(`
            INSERT INTO habit_logs (habit_id, user_id, completion_date)
            VALUES ($1, $2, $3)
          `, [habitId, userId, completion.date]);
        }
      }
    }
    
    // Migrate program progress
    for (const program of localStorageData.programs || []) {
      if (program.currentDay > 0) {
        await client.query(`
          INSERT INTO user_programs (user_id, program_id, current_day, status)
          VALUES ($1, $2, $3, $4)
        `, [
          userId, 
          program.id, 
          program.currentDay,
          program.currentDay >= program.activities.length ? 'completed' : 'active'
        ]);
      }
    }
    
    await client.query('COMMIT');
    console.log(`✓ Successfully migrated data for user ${userId}`);
    
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Migration error:', error);
    throw error;
  } finally {
    client.release();
  }
}

module.exports = { migrateUserData };
```

---

## API ENDPOINTS (Phase 2)

```javascript
// Express.js API routes

const express = require('express');
const router = express.Router();

// Feelings check-ins
router.post('/api/check-ins', async (req, res) => {
  const { feeling, notes, triggers } = req.body;
  const userId = req.user.id; // From auth middleware
  
  const result = await pool.query(`
    INSERT INTO feelings_check_ins (user_id, primary_feeling, notes, triggers)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `, [userId, feeling, notes, triggers]);
  
  res.json(result.rows[0]);
});

router.get('/api/check-ins', async (req, res) => {
  const userId = req.user.id;
  const { limit = 50, offset = 0 } = req.query;
  
  const result = await pool.query(`
    SELECT * FROM feelings_check_ins
    WHERE user_id = $1
    ORDER BY timestamp DESC
    LIMIT $2 OFFSET $3
  `, [userId, limit, offset]);
  
  res.json(result.rows);
});

// Habits
router.post('/api/habits', async (req, res) => {
  const { name, icon, routineType } = req.body;
  const userId = req.user.id;
  
  const result = await pool.query(`
    INSERT INTO habits (user_id, name, icon, routine_type)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `, [userId, name, icon, routineType]);
  
  res.json(result.rows[0]);
});

router.post('/api/habits/:id/log', async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  const today = new Date().toISOString().split('T')[0];
  
  const result = await pool.query(`
    INSERT INTO habit_logs (habit_id, user_id, completion_date)
    VALUES ($1, $2, $3)
    ON CONFLICT (habit_id, completion_date) DO NOTHING
    RETURNING *
  `, [id, userId, today]);
  
  res.json(result.rows[0] || { message: 'Already logged today' });
});

// Programs
router.get('/api/programs', async (req, res) => {
  const result = await pool.query(`
    SELECT * FROM training_programs
    WHERE is_active = TRUE
    ORDER BY category, difficulty
  `);
  
  res.json(result.rows);
});

router.post('/api/programs/:id/start', async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  
  const result = await pool.query(`
    INSERT INTO user_programs (user_id, program_id)
    VALUES ($1, $2)
    RETURNING *
  `, [userId, id]);
  
  res.json(result.rows[0]);
});

router.post('/api/programs/:id/complete-day', async (req, res) => {
  const { id } = req.params;
  const { journalResponse } = req.body;
  const userId = req.user.id;
  
  // Get current program state
  const programResult = await pool.query(`
    SELECT * FROM user_programs
    WHERE id = $1 AND user_id = $2
  `, [id, userId]);
  
  if (!programResult.rows[0]) {
    return res.status(404).json({ error: 'Program not found' });
  }
  
  const currentDay = programResult.rows[0].current_day;
  
  // Log activity completion
  await pool.query(`
    INSERT INTO program_activity_logs (user_program_id, day_number, journal_response)
    VALUES ($1, $2, $3)
  `, [id, currentDay, journalResponse]);
  
  // Increment day
  await pool.query(`
    UPDATE user_programs
    SET current_day = current_day + 1
    WHERE id = $1
  `, [id]);
  
  res.json({ success: true, nextDay: currentDay + 1 });
});

module.exports = router;
```

---

## DEPLOYMENT CHECKLIST

### Pre-Deployment
- [ ] Database provisioned on cloud provider
- [ ] SSL certificate installed
- [ ] Environment variables configured
- [ ] Database migrations run successfully
- [ ] Seed data loaded
- [ ] Backup system configured
- [ ] Monitoring alerts set up

### Security
- [ ] Row-level security policies tested
- [ ] SQL injection prevention verified
- [ ] API rate limiting enabled
- [ ] CORS configured properly
- [ ] Encryption at rest enabled
- [ ] Encryption in transit (TLS 1.3)

### Compliance
- [ ] BAA signed with cloud provider
- [ ] Audit logging enabled
- [ ] Data retention policies configured
- [ ] Privacy policy updated
- [ ] Terms of service updated

### Testing
- [ ] Load testing completed
- [ ] Security audit passed
- [ ] Data migration tested
- [ ] Backup/restore tested
- [ ] Failover tested

---

**Schema Version:** 1.0  
**Compatible With:** PostgreSQL 13+  
**Last Updated:** [Current Date]  
**Status:** Ready for Phase 2 Implementation