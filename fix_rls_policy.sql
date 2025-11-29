-- Fix RLS Policy for user_challenges table
-- This allows users to INSERT their own challenge joins

DROP POLICY IF EXISTS "user_challenges_own" ON user_challenges;

-- Separate policies for different operations
CREATE POLICY "user_challenges_select" ON user_challenges 
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "user_challenges_insert" ON user_challenges 
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "user_challenges_update" ON user_challenges 
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "user_challenges_delete" ON user_challenges 
    FOR DELETE USING (auth.uid() = user_id);
