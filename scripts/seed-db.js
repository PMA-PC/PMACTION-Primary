require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
// Note: For seeding, normally we want service_role key to bypass RLS, 
// but if RLS allows public/anon insert on these tables (which it shouldn't for Challenges/Assessments), we might have an issue.
// However, let's try with the Service Role key if available in process.env? 
// Checking user env usually doesn't have service role.
// If I only have Anon Key, I might be blocked from inserting into 'challenges'/'assessments' if RLS is strict (read only).
// Let's assume for a dev/test env, maybe I can insert? Or I need to use the SERVICE key.

// Let's check if there is a SERVICE_ROLE key in .env.local, typically not for frontend.
// If not, I'm stuck unless the tables are public write (unlikely).
// WAIT: The user instructions say "You DO have the ability to run commands directly on the USER's system".
// Maybe I can find the service key in the .env.local file?

const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
    console.log('🌱 Seeding Database...');

    // 1. Wellness Check Assessment
    const { error: assessError } = await supabase.from('assessments').upsert({
        slug: 'wellness-check',
        name: 'Quick Wellness Check',
        description: 'A brief check-in to understand your current mental well-being.',
        category: 'wellness',
        total_questions: 8,
        scoring_method: 'sum',
        interpretation_ranges: { "0-5": "Wellness", "6-10": "Mild Symptoms", "11-15": "Moderate Symptoms", "16+": "Severe Symptoms" },
        is_published: true
    }, { onConflict: 'slug' }).select();

    if (assessError) console.error('❌ Assessment Seed Failed:', assessError.message);
    else console.log('✅ Assessment Seeded');

    // 2. Mindfulness Journey Challenge
    const { error: chalError } = await supabase.from('challenges').upsert({
        slug: 'mindfulness-journey',
        title: '7-Day Mindfulness Journey',
        description: 'Build present-moment awareness through daily meditation practices.',
        category: 'mindfulness',
        difficulty: 'beginner',
        duration_days: 7,
        age_groups: ['adult'],
        total_tasks: 7,
        icon: '🧘',
        is_published: true
    }, { onConflict: 'slug' }).select();

    if (chalError) console.error('❌ Challenge 1 Seed Failed:', chalError.message);
    else console.log('✅ Challenge 1 Seeded');

    // 3. Communication Journey Challenge
    const { error: chalError2 } = await supabase.from('challenges').upsert({
        slug: 'communication-journey',
        title: 'Building Healthy Communication',
        description: 'Improve relationship skills and conflict resolution.',
        category: 'relationships',
        difficulty: 'intermediate',
        duration_days: 7,
        age_groups: ['adult'],
        total_tasks: 7,
        icon: '💬',
        is_published: true
    }, { onConflict: 'slug' }).select();

    if (chalError2) console.error('❌ Challenge 2 Seed Failed:', chalError2.message);
    else console.log('✅ Challenge 2 Seeded');
}

seed();
