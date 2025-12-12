-- Fix for "Could not find the 'goals' column of 'profiles'" error
-- Run this in your Supabase SQL Editor

-- 1. Add the missing 'goals' column to the profiles table
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS goals TEXT[];

-- 2. Grant permissions (just in case)
GRANT ALL ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;

-- 3. If you are using a View called 'user_profiles', you might need to recreate it to include the new column.
-- Uncomment and run the below if 'user_profiles' is a View and needs the column.
-- CREATE OR REPLACE VIEW user_profiles AS SELECT * FROM profiles;
