-- ============================================================================
-- LEGACY CONTENT MIGRATION SEED SCRIPT
-- ============================================================================
-- This script populates the 'challenges' and 'challenge_tasks' tables with
-- content extracted from the legacy 'codependency' and 'audhd' archives.
--
-- INSTRUCTIONS:
-- 1. Open your Supabase Dashboard.
-- 2. Go to the SQL Editor.
-- 3. Paste this entire script and run it.
-- ============================================================================

-- 1. 7-Day Codependency Recovery Intensive
INSERT INTO challenges (slug, title, description, category, difficulty, duration_days, age_groups, total_tasks, is_published, cover_image_url)
VALUES (
    'codependency-7-day',
    '7-Day Codependency Recovery Intensive',
    'Break Free from Codependency, Blame, and Shame. A focused 7-day program to help you reclaim your identity and build healthy boundaries.',
    'relationships',
    'intermediate',
    7,
    ARRAY['adult', 'young-adult'],
    7,
    true,
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1000&q=80'
) ON CONFLICT (slug) DO NOTHING;

-- Get the ID of the inserted challenge
DO $$
DECLARE
    v_challenge_id INTEGER;
BEGIN
    SELECT id INTO v_challenge_id FROM challenges WHERE slug = 'codependency-7-day';

    -- Day 1
    INSERT INTO challenge_tasks (challenge_id, day_number, title, instructions, reflection_prompt, estimated_minutes, resource_links)
    VALUES (
        v_challenge_id,
        1,
        'Understanding Codependency & Shame',
        E'Welcome to Day 1. Today we explore the foundations of codependency and its connection to shame.

**Key Concepts:**
- Codependency is losing your sense of self in relationships.
- It often stems from childhood experiences with emotionally unavailable caregivers.
- Shame ("I am bad") drives codependent behaviors like people-pleasing.
- Empathy is the antidote to shame.

**Modules:**
1. What is Codependency?
2. Understanding Shame & Its Impact
3. The Codependency-Shame Connection',
        'Complete your shame trigger journal. Identify and write down 3 specific codependent patterns you notice in your relationships.',
        45,
        '[{"title": "Module 1: What is Codependency?", "url": "#"}, {"title": "Module 2: Understanding Shame", "url": "#"}]'::jsonb
    ) ON CONFLICT (challenge_id, day_number) DO UPDATE SET 
        title = EXCLUDED.title,
        instructions = EXCLUDED.instructions,
        reflection_prompt = EXCLUDED.reflection_prompt;

    -- Day 2
    INSERT INTO challenge_tasks (challenge_id, day_number, title, instructions, reflection_prompt, estimated_minutes, resource_links)
    VALUES (
        v_challenge_id,
        2,
        'Blame & Cognitive Distortions',
        E'Today we tackle the thinking patterns that keep us stuck.

**Key Concepts:**
- Blame-shifting prevents accountability.
- You are responsible for your feelings; others are responsible for theirs.
- Cognitive Distortions (like "All-or-nothing thinking") fuel codependency.

**Modules:**
1. Understanding Blame
2. Recognizing Cognitive Distortions',
        'Throughout today, catch and write down 5 cognitive distortions you notice in your thinking. For each one, challenge it with a more balanced thought.',
        45,
        '[{"title": "Module 1: Understanding Blame", "url": "#"}]'::jsonb
    ) ON CONFLICT (challenge_id, day_number) DO UPDATE SET 
        title = EXCLUDED.title,
        instructions = EXCLUDED.instructions,
        reflection_prompt = EXCLUDED.reflection_prompt;

    -- Day 3
    INSERT INTO challenge_tasks (challenge_id, day_number, title, instructions, reflection_prompt, estimated_minutes, resource_links)
    VALUES (
        v_challenge_id,
        3,
        'Building Boundaries & Self-Identity',
        E'Boundaries are the "property lines" of your self.

**Key Concepts:**
- Boundaries protect your well-being.
- Saying "no" is an act of self-care.
- Be clear, direct, and calm when setting boundaries.

**Modules:**
1. Understanding Healthy Boundaries
2. Setting and Maintaining Boundaries',
        'Set and communicate one new boundary today. Document: What boundary did you set? How did you communicate it? What happened? How did you feel?',
        45,
        '[{"title": "Module 1: Healthy Boundaries", "url": "#"}]'::jsonb
    ) ON CONFLICT (challenge_id, day_number) DO UPDATE SET 
        title = EXCLUDED.title,
        instructions = EXCLUDED.instructions,
        reflection_prompt = EXCLUDED.reflection_prompt;

    -- Day 4
    INSERT INTO challenge_tasks (challenge_id, day_number, title, instructions, reflection_prompt, estimated_minutes, resource_links)
    VALUES (
        v_challenge_id,
        4,
        'Shame Resilience & Self-Compassion',
        E'Building resilience against shame requires self-compassion.

**Key Concepts:**
- Shame thrives in secrecy; share it to break its power.
- Self-compassion means treating yourself like a friend.
- Your imperfections make you human, not unworthy.

**Modules:**
1. Developing Shame Resilience
2. Practicing Self-Compassion',
        'Practice self-compassion 5 times today when you notice self-criticism. Share one shame story with a trusted person.',
        45,
        '[{"title": "Module 1: Shame Resilience", "url": "#"}]'::jsonb
    ) ON CONFLICT (challenge_id, day_number) DO UPDATE SET 
        title = EXCLUDED.title,
        instructions = EXCLUDED.instructions,
        reflection_prompt = EXCLUDED.reflection_prompt;

    -- Day 5
    INSERT INTO challenge_tasks (challenge_id, day_number, title, instructions, reflection_prompt, estimated_minutes, resource_links)
    VALUES (
        v_challenge_id,
        5,
        'Emotional Regulation & Distress Tolerance',
        E'Learn to manage difficult emotions without being overwhelmed.

**Key Concepts:**
- Name it to tame it.
- Use the STOP skill: Stop, Take a breath, Observe, Proceed.
- Build a self-soothing toolkit for all 5 senses.

**Modules:**
1. Understanding Your Emotions
2. Distress Tolerance Skills',
        'Use 3 different distress tolerance skills today. Track your emotional patterns every 2 hours.',
        45,
        '[{"title": "Module 1: Emotional Regulation", "url": "#"}]'::jsonb
    ) ON CONFLICT (challenge_id, day_number) DO UPDATE SET 
        title = EXCLUDED.title,
        instructions = EXCLUDED.instructions,
        reflection_prompt = EXCLUDED.reflection_prompt;

    -- Day 6
    INSERT INTO challenge_tasks (challenge_id, day_number, title, instructions, reflection_prompt, estimated_minutes, resource_links)
    VALUES (
        v_challenge_id,
        6,
        'Effective Communication (DEAR MAN)',
        E'Master the art of asking for what you need.

**Key Concepts:**
- Assertive communication respects both you and the other person.
- DEAR MAN: Describe, Express, Assert, Reinforce, Mindful, Appear confident, Negotiate.

**Modules:**
1. Assertive Communication
2. The DEAR MAN Skill',
        'Practice the DEAR MAN skill in a real situation to make a request or set a boundary.',
        45,
        '[{"title": "Module 1: DEAR MAN", "url": "#"}]'::jsonb
    ) ON CONFLICT (challenge_id, day_number) DO UPDATE SET 
        title = EXCLUDED.title,
        instructions = EXCLUDED.instructions,
        reflection_prompt = EXCLUDED.reflection_prompt;

    -- Day 7
    INSERT INTO challenge_tasks (challenge_id, day_number, title, instructions, reflection_prompt, estimated_minutes, resource_links)
    VALUES (
        v_challenge_id,
        7,
        'Integration & Moving Forward',
        E'Create your roadmap for the future.

**Key Concepts:**
- Recovery is a journey, not a destination.
- Create a 90-day action plan.
- Celebrate your progress and skills gained.

**Modules:**
1. Creating Your Recovery Roadmap
2. Celebrating Your Progress',
        'Create your personal recovery action plan: 3 main goals for the next 90 days.',
        60,
        '[{"title": "Module 1: Recovery Roadmap", "url": "#"}]'::jsonb
    ) ON CONFLICT (challenge_id, day_number) DO UPDATE SET 
        title = EXCLUDED.title,
        instructions = EXCLUDED.instructions,
        reflection_prompt = EXCLUDED.reflection_prompt;

END $$;

-- 2. 30-Day Relationship Recovery Program (Sample - First 7 Days)
INSERT INTO challenges (slug, title, description, category, difficulty, duration_days, age_groups, total_tasks, is_published, cover_image_url)
VALUES (
    'audhd-relationship-30-day',
    '30-Day Relationship Recovery Program',
    'Personalized for AuDHD couples. Navigate neurodivergent relationship dynamics, heal from codependency, and build a thriving partnership.',
    'relationships',
    'advanced',
    30,
    ARRAY['adult'],
    30,
    true,
    'https://images.unsplash.com/photo-1621252179027-94459d27d3ee?auto=format&fit=crop&w=1000&q=80'
) ON CONFLICT (slug) DO NOTHING;

-- Get the ID of the inserted challenge
DO $$
DECLARE
    v_challenge_id INTEGER;
BEGIN
    SELECT id INTO v_challenge_id FROM challenges WHERE slug = 'audhd-relationship-30-day';

    -- Day 1
    INSERT INTO challenge_tasks (challenge_id, day_number, title, instructions, reflection_prompt, estimated_minutes, resource_links)
    VALUES (
        v_challenge_id,
        1,
        'AuDHD & Codependency',
        'Understanding how Autism and ADHD impact relationship dynamics.\n\n**Key Concepts:**\n- The "Parent/Child" dynamic in AuDHD relationships.\n- Sensory overwhelm and its role in conflict.\n- Reclaiming identity outside of the diagnosis.',
        'Journal: How does your neurodivergence affect your relationship roles?',
        45,
        '[{"title": "Module 1: AuDHD Dynamics", "url": "#"}]'::jsonb
    ) ON CONFLICT (challenge_id, day_number) DO UPDATE SET 
        title = EXCLUDED.title,
        instructions = EXCLUDED.instructions,
        reflection_prompt = EXCLUDED.reflection_prompt;
        
    -- Note: For brevity in this seed file, we are only adding Day 1 for the 30-day course. 
    -- The user can expand this later using the CMS features we will build.

END $$;
