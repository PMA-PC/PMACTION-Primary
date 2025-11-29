-- Fix RLS Policy for challenge_completions table
-- This allows users to INSERT their own task completions

DROP POLICY IF EXISTS "completions_own" ON challenge_completions;

-- Separate policies for different operations
CREATE POLICY "completions_select" ON challenge_completions 
    FOR SELECT USING (auth.uid() IN (SELECT user_id FROM user_challenges WHERE id = user_challenge_id));

CREATE POLICY "completions_insert" ON challenge_completions 
    FOR INSERT WITH CHECK (auth.uid() IN (SELECT user_id FROM user_challenges WHERE id = user_challenge_id));

CREATE POLICY "completions_update" ON challenge_completions 
    FOR UPDATE USING (auth.uid() IN (SELECT user_id FROM user_challenges WHERE id = user_challenge_id));

CREATE POLICY "completions_delete" ON challenge_completions 
    FOR DELETE USING (auth.uid() IN (SELECT user_id FROM user_challenges WHERE id = user_challenge_id));
