require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function debugAccess() {
    console.log("🕵️ Debugging Table Access...");

    // 1. Try to SELECT from challenges
    console.log("\n1. Reading Challenges...");
    const { data: challenges, error: readError } = await supabase.from('challenges').select('*');
    if (readError) {
        console.error("❌ READ Failed:", readError.message);
    } else {
        console.log(`✅ READ Success. Found ${challenges.length} challenges.`);
        challenges.forEach(c => console.log(`   - [${c.id}] ${c.slug} (${c.title})`));
    }

    // 2. Try to INSERT into challenges
    console.log("\n2. Inserting Dummy Challenge...");
    const dummySlug = `debug-challenge-${Date.now()}`;
    const { data: inserted, error: writeError } = await supabase.from('challenges').insert({
        slug: dummySlug,
        title: 'Debug Challenge',
        description: 'Testing write access',
        category: 'wellness',
        difficulty: 'beginner',
        duration_days: 1,
        age_groups: ['adult'],
        total_tasks: 1,
        is_published: false
    }).select();

    if (writeError) {
        console.error("❌ WRITE Failed:", writeError.message);
    } else {
        console.log("✅ WRITE Success:", inserted);
    }
}

debugAccess();
