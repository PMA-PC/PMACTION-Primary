-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Challenges Table (Definitions)
CREATE TABLE challenges (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  duration_days INTEGER NOT NULL,
  difficulty TEXT CHECK (difficulty IN ('Beginner', 'Intermediate', 'Advanced')),
  category TEXT NOT NULL,
  image_url TEXT,
  content_json JSONB NOT NULL, -- Stores daily tasks structure
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. User Challenges (Enrollment & Progress)
CREATE TABLE user_challenges (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  challenge_id UUID REFERENCES challenges(id) ON DELETE CASCADE NOT NULL,
  status TEXT CHECK (status IN ('active', 'completed', 'abandoned')) DEFAULT 'active',
  current_day INTEGER DEFAULT 1,
  start_date TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Challenge Logs (Daily Completion)
CREATE TABLE challenge_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_challenge_id UUID REFERENCES user_challenges(id) ON DELETE CASCADE NOT NULL,
  day_number INTEGER NOT NULL,
  notes TEXT,
  completed_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Quizzes Table (Definitions)
CREATE TABLE quizzes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  type TEXT CHECK (type IN ('diagnostic', 'personality', 'knowledge')),
  questions_json JSONB NOT NULL,
  results_json JSONB NOT NULL, -- Logic for mapping scores/answers to results
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. User Quiz Results (History)
CREATE TABLE user_quiz_results (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  quiz_id UUID REFERENCES quizzes(id) ON DELETE CASCADE NOT NULL,
  score INTEGER,
  result_type TEXT, -- e.g., "The Fighter" or "High Risk"
  answers_json JSONB, -- Store user's specific answers
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS Policies
ALTER TABLE challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE challenge_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE quizzes ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_quiz_results ENABLE ROW LEVEL SECURITY;

-- Public read access for content definitions
CREATE POLICY "Public challenges are viewable by everyone" ON challenges FOR SELECT USING (true);
CREATE POLICY "Public quizzes are viewable by everyone" ON quizzes FOR SELECT USING (true);

-- User specific access for progress/results
CREATE POLICY "Users can view own challenge progress" ON user_challenges FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own challenge progress" ON user_challenges FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own challenge progress" ON user_challenges FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can view own challenge logs" ON challenge_logs FOR SELECT USING (
  EXISTS (SELECT 1 FROM user_challenges WHERE id = challenge_logs.user_challenge_id AND user_id = auth.uid())
);
CREATE POLICY "Users can insert own challenge logs" ON challenge_logs FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM user_challenges WHERE id = user_challenge_id AND user_id = auth.uid())
);

CREATE POLICY "Users can view own quiz results" ON user_quiz_results FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own quiz results" ON user_quiz_results FOR INSERT WITH CHECK (auth.uid() = user_id);

-- SEED DATA

-- Seed Challenge: 7-Day Mindfulness Starter
INSERT INTO challenges (title, description, duration_days, difficulty, category, content_json)
VALUES (
  '7-Day Mindfulness Starter',
  'Learn the basics of mindfulness in just 10 minutes a day. Reduce stress and improve focus.',
  7,
  'Beginner',
  'Mindfulness',
  '[
    {
      "day": 1,
      "title": "The Power of Pause",
      "description": "Today we learn to simply stop and breathe.",
      "points": 20,
      "steps": ["Find a quiet seat.", "Set a timer for 5 minutes.", "Focus only on your breath."]
    },
    {
      "day": 2,
      "title": "Body Scan",
      "description": "Connect with your physical sensations.",
      "points": 20,
      "steps": ["Lie down comfortably.", "Scan from toes to head.", "Notice tension and release it."]
    },
    {
      "day": 3,
      "title": "Mindful Eating",
      "description": "Experience food with all your senses.",
      "points": 20,
      "steps": ["Choose a small snack.", "Look, smell, and touch before eating.", "Chew slowly and notice flavors."]
    }
  ]'::jsonb
);

-- Seed Quiz: Stress Style (Personality)
INSERT INTO quizzes (title, description, type, questions_json, results_json)
VALUES (
  'What is your Stress Style?',
  'Find out how you react to pressure and how to cope.',
  'personality',
  '[
    {
      "id": "q1",
      "text": "When a deadline approaches, I usually...",
      "options": [
        { "label": "Work harder and faster", "value": "fight" },
        { "label": "Shut down and procrastinate", "value": "freeze" },
        { "label": "Ask others for help", "value": "fawn" },
        { "label": "Try to escape or avoid it", "value": "flight" }
      ]
    },
    {
      "id": "q2",
      "text": "When someone criticizes me, I feel...",
      "options": [
        { "label": "Angry and defensive", "value": "fight" },
        { "label": "Numb and silent", "value": "freeze" },
        { "label": "Eager to please/apologize", "value": "fawn" },
        { "label": "Anxious and want to leave", "value": "flight" }
      ]
    }
  ]'::jsonb,
  '{
    "fight": {
      "title": "The Fighter",
      "description": "You tackle stress head-on, but risk burnout. Try cooling breath exercises.",
      "recommendations": ["7-Day Mindfulness Starter"]
    },
    "freeze": {
      "title": "The Freezer",
      "description": "You get overwhelmed easily. Try breaking tasks into tiny steps.",
      "recommendations": ["7-Day Mindfulness Starter"]
    },
    "flight": {
      "title": "The Fleer",
      "description": "You tend to avoid conflict. Try grounding exercises.",
      "recommendations": ["7-Day Mindfulness Starter"]
    },
    "fawn": {
      "title": "The Fawn",
      "description": "You prioritize others over yourself. Try boundary setting.",
      "recommendations": ["7-Day Mindfulness Starter"]
    }
  }'::jsonb
);
