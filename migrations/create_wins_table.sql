-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Drop existing tables to ensure clean schema (WARNING: This deletes data)
DROP TABLE IF EXISTS wins CASCADE;
DROP TABLE IF EXISTS user_profiles CASCADE;

-- 1. User Profiles (Gamification Stats)
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  xp INTEGER DEFAULT 0,
  level INTEGER DEFAULT 1,
  gold INTEGER DEFAULT 0,
  hp INTEGER DEFAULT 100,
  current_streak INTEGER DEFAULT 0,
  longest_streak INTEGER DEFAULT 0,
  last_win_date TIMESTAMPTZ,
  next_level_xp INTEGER DEFAULT 100,
  character_class TEXT CHECK (character_class IN ('warrior', 'mage', 'rogue', 'healer')),
  avatar_items JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id)
);

-- 2. Wins Table (Consolidated Positive Actions)
CREATE TABLE wins (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  win_type TEXT CHECK (win_type IN ('activity', 'journal', 'gratitude', 'mindfulness', 'habit', 'cbt')) NOT NULL,
  
  -- Activity Wins
  activity_type TEXT, -- e.g., 'water', 'gym', 'walk'
  
  -- Journal/Gratitude/CBT Wins
  content TEXT,
  tags TEXT[],
  journal_subtype TEXT CHECK (journal_subtype IN ('general', 'gratitude', 'cbt')),
  
  -- CBT Specific
  negative_thought TEXT,
  evidence_for TEXT,
  evidence_against TEXT,
  balanced_thought TEXT,
  
  -- Mindfulness Wins
  exercise_id TEXT,
  reflection TEXT,
  
  -- Common Fields
  emotion_data JSONB,
  notes TEXT,
  xp_earned INTEGER DEFAULT 0,
  gold_earned INTEGER DEFAULT 0,
  
  completed_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. RLS Policies
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE wins ENABLE ROW LEVEL SECURITY;

-- User Profiles Policies
CREATE POLICY "Users can view own profile" ON user_profiles
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own profile" ON user_profiles
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own profile" ON user_profiles
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Wins Policies
CREATE POLICY "Users can view own wins" ON wins
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own wins" ON wins
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own wins" ON wins
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own wins" ON wins
  FOR DELETE USING (auth.uid() = user_id);
