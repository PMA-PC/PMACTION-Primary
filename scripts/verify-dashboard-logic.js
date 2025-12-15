require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function verifyDashboardLogic() {
    console.log("📊 Verifying Dashboard Data Logic...");

    // 1. Get the test user we know exists (from previous script output or seed)
    // We'll search for the user by email
    const { data: users, error: userError } = await supabase.from('profiles').select('id, email').ilike('email', '%test.persistence%').limit(1);

    if (!users || users.length === 0) {
        console.error("❌ No test user found.");
        return;
    }

    const user = users[0];
    console.log(`👤 Found User: ${user.email} (${user.id})`);

    // 2. Simulate Fetch Profile (Points, Level)
    const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

    console.log(`   Points: ${profile.total_points}`);
    console.log(`   Level: ${profile.current_level}`);

    // 3. Simulate Fetch Active Challenge
    const { data: userChalls } = await supabase
        .from('user_challenges')
        .select('*, challenges(slug, title)')
        .eq('user_id', user.id)
        .eq('status', 'active')
        .order('start_date', { ascending: false })
        .limit(1);

    if (userChalls && userChalls.length > 0) {
        const active = userChalls[0];
        console.log(`🏆 Active Challenge Fetched: ${active.challenges.title}`);
        console.log(`   Slug: ${active.challenges.slug}`);

        // Simulate Logic Mapping
        let jsId = null;
        if (active.challenges?.slug === 'mindfulness-journey') jsId = 'mindfulness_journey_7_day';

        if (jsId === 'mindfulness_journey_7_day') {
            console.log(`✅ Logic Mapping Success: Mapped '${active.challenges.slug}' to JS ID '${jsId}'`);
        } else {
            console.error(`❌ Logic Mapping Failed: Could not map '${active.challenges?.slug}'`);
        }
    } else {
        console.error("❌ No Active Challenge found (Enrollment failed?)");
    }
}

verifyDashboardLogic();
