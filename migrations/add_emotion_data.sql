-- Migration: Add emotion tracking fields to journal_entries
-- This adds emotion_data JSONB column while keeping mood_score for backward compatibility

-- Add new emotion_data column
ALTER TABLE journal_entries 
ADD COLUMN IF NOT EXISTS emotion_data JSONB;

-- Add index for querying emotion data
CREATE INDEX IF NOT EXISTS idx_journal_entries_emotion_data 
ON journal_entries USING gin(emotion_data);

-- Optional: Migrate existing mood_score data to emotion_data
-- This converts old 1-5 scores to the new emotion format
UPDATE journal_entries
SET emotion_data = CASE 
    WHEN mood_score = 1 THEN '{"primary": "sad", "secondary": ["down"]}'::jsonb
    WHEN mood_score = 2 THEN '{"primary": "anxious", "secondary": ["worried"]}'::jsonb
    WHEN mood_score = 3 THEN '{"primary": "neutral", "secondary": ["okay"]}'::jsonb
    WHEN mood_score = 4 THEN '{"primary": "happy", "secondary": ["content"]}'::jsonb
    WHEN mood_score = 5 THEN '{"primary": "happy", "secondary": ["joyful"]}'::jsonb
    ELSE NULL
END
WHERE emotion_data IS NULL AND mood_score IS NOT NULL;

-- Add comment for documentation
COMMENT ON COLUMN journal_entries.emotion_data IS 'Stores detailed emotion tracking data: {"primary": "happy", "secondary": ["joyful", "content"]}';
