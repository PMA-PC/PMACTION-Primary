-- ============================================================================
-- MISSING DAYS CONTENT - Days 27 & 30 for AuDHD Course
-- ============================================================================
-- Run this after running the main seed_legacy_content.sql file

DO $$
DECLARE
    v_challenge_id INTEGER;
BEGIN
    SELECT id INTO v_challenge_id FROM challenges WHERE slug = 'audhd-relationship-30-day';

    -- Day 27: Mindfulness & Present Moment Awareness
    INSERT INTO challenge_tasks (challenge_id, day_number, title, instructions, reflection_prompt, estimated_minutes, resource_links)
    VALUES (
        v_challenge_id,
        27,
        'Mindfulness & Present Moment Awareness',
        E'A day of integration through mindfulness practice.

**Today''s Focus:**
A brief pause to integrate your learning through present moment awareness.

**Micro-Mindfulness (Choose one):**
- **3-Minute Breathing Space**: Pause and anchor to your breath.
- **5-Senses Check-in**: Notice 5 things you see, 4 feel, 3 hear, 2 smell, 1 taste.
- **Mindful Walking**: Pay attention to the sensation of your feet for 5 minutes.

**Quick Reflection:**
- What is one pattern you''ve noticed this month?
- How does it feel to pause right now?

**Existential Thought:**
"Meaning comes not from avoiding suffering, but from how we respond to it." - Viktor Frankl',
        'Complete one short mindfulness practice (3-5 mins) and write a brief reflection.',
        20,
        '[{"title": "Guided Body Scan", "url": "#"}, {"title": "Logotherapy Overview", "url": "#"}]'::jsonb
    ) ON CONFLICT (challenge_id, day_number) DO UPDATE SET 
        title = EXCLUDED.title,
        instructions = EXCLUDED.instructions,
        reflection_prompt = EXCLUDED.reflection_prompt;

    -- Day 30: Final Integration & Path Forward
    INSERT INTO challenge_tasks (challenge_id, day_number, title, instructions, reflection_prompt, estimated_minutes, resource_links)
    VALUES (
        v_challenge_id,
        30,
        'Final Integration & Your Path Forward',
        E'Congratulations on completing this transformative journey! 🎓

**Final Assessment:**
Take the comprehensive final quiz to assess your understanding and identify areas for continued growth.

**Transformation Inventory:**
Before and After - Document your growth:

**30 Days Ago I was:**
- Main relationship pattern:
- Biggest struggle:
- Self-awareness level (1-10):
- Boundary skills (1-10):
- Emotional regulation (1-10):

**Today I am:**
- How my patterns have shifted:
- New skills I''ve developed:
- Current self-awareness (1-10):
- Current boundary skills (1-10):
- Current emotional regulation (1-10):

**90-Day Action Plan:**
Create your roadmap for the next 90 days:

1. **Daily Practices** (non-negotiables):
   - Morning routine:
   - Boundary practice:
   - Evening reflection:

2. **Weekly Goals:**
   - Week 1-4:
   - Week 5-8:
   - Week 9-12:

3. **Support System:**
   - Therapy/counseling:
   - Peer support/groups:
   - Accountability partner:
   - Community resources:

4. **Red Flags to Watch:**
   - My relapse warning signs:
   - Emergency plan if I slip:

**Recommended Next Steps:**

Based on your journey, consider deepening your practice with:

- **Trauma-Focused Work**: If childhood trauma emerged as central, explore EMDR or trauma-focused therapy
- **Couples Counseling**: For relationship healing (EFT or Gottman Method)
- **DBT Skills Training**: For emotion regulation mastery
- **12-Step or Support Groups**: For ongoing peer support (CoDA, Al-Anon)
- **Advanced Attachment Work**: Focus on earning secure attachment
- **Mindfulness Programs**: MBSR (Mindfulness-Based Stress Reduction)

**Your Legacy:**
What will you pass forward from this experience?

**Final Reflection:**
Write a letter to your future self (6 months from now), acknowledging your courage, documenting your growth, and committing to continued recovery.',
        'Complete your Final Assessment Quiz and 90-Day Action Plan. Write your letter to your future self.',
        120,
        '[{"title": "Final Assessment Quiz", "url": "/assessments/final-audhd"}, {"title": "Resources Directory", "url": "/resources"}]'::jsonb
    ) ON CONFLICT (challenge_id, day_number) DO UPDATE SET 
        title = EXCLUDED.title,
        instructions = EXCLUDED.instructions,
        reflection_prompt = EXCLUDED.reflection_prompt;

END $$;
