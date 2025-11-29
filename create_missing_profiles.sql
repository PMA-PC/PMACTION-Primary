-- Manually create profiles for existing users who don't have them yet
-- This is a one-time fix for users who signed up before the trigger was created

INSERT INTO public.profiles (id, email, created_at)
SELECT id, email, created_at
FROM auth.users
WHERE id NOT IN (SELECT id FROM public.profiles)
ON CONFLICT (id) DO NOTHING;
