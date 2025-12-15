require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function verifyDashboard() {
    console.log("🚀 Verifying Dashboard E2E (Debug Mode)...");

    // 1. Create User
    const email = `active.user.debug.${Date.now()}@gmail.com`;
    const password = 'Password123!';
    const { data: { user }, error: authError } = await supabase.auth.signUp({ email, password });

    if (authError || !user) {
        console.error("❌ Signup Failed:", authError?.message);
        return;
    }
    console.log(`👤 User Created: ${user.id}`);

    // Init Points Manually (since we suspect trigger is missing)
    const { error: pointsError } = await supabase.from('user_points').insert({
        user_id: user.id,
        total_points: 0,
        current_level: 1
    });
    if (pointsError) console.error("⚠️ User Points Init Failed:", pointsError.message);
    else console.log("✅ User Points Initialized");

    // 2. Enroll in Challenge
    // Get ID
    const { data: challenge, error: chalError } = await supabase.from('challenges').select('id').eq('slug', 'mindfulness-journey').single();
    if (chalError || !challenge) {
        console.error("❌ Challenge Lookup Failed:", chalError?.message);
        return;
    }
    console.log(`   Challenge ID: ${challenge.id}`);

    // Insert User Challenge
    const { data: enrollment, error: enrollError } = await supabase.from('user_challenges').insert({
        user_id: user.id,
        challenge_id: challenge.id,
        start_date: new Date().toISOString(),
        status: 'active'
    }).select();

    if (enrollError) {
        console.error("❌ Enrollment Failed:", enrollError.message);
    } else {
        console.log("🏆 Enrolled in Mindfulness Journey:", enrollment ? "Rows Returned" : "No Rows??");
    }

    // 3. Verify Dashboard Data
    console.log("🔎 Querying Dashboard Data...");

    // A. Profile + Points
    const { data: profileWithPoints } = await supabase
        .from('profiles')
        .select('*, user_points(total_points, current_level)')
        .eq('id', user.id)
        .single();

    if (profileWithPoints) {
        console.log(`   Points: ${profileWithPoints.user_points?.total_points} (Level ${profileWithPoints.user_points?.current_level})`);
        if (profileWithPoints.user_points === null) console.error("   ❌ user_points join is null!");
    } else {
        console.error("   ❌ Profile not found!");
    }

    // B. Active Challenge Query
    const { data: userChalls, error: queryError } = await supabase
        .from('user_challenges')
        .select('*, challenges(slug, title)')
        .eq('user_id', user.id)
        .eq('status', 'active'); // Removed ordering/limit for debugging

    if (queryError) {
        console.error("❌ Challenge Query Error:", queryError.message);
    } else if (userChalls && userChalls.length > 0) {
        const active = userChalls[0];
        console.log(`✅ Active Challenge Found: ${active.challenges?.title}`);
        console.log(`   Slug: ${active.challenges?.slug}`);
        if (!active.challenges) console.error("   ❌ Join 'challenges' returned null! RLS blocking join?");
    } else {
        console.error("❌ Active Challenge NOT found (Length 0).");
    }
}

verifyDashboard();
