require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function verifyDashboard() {
    console.log("🚀 Verifying Dashboard E2E...");

    // 1. Create User
    const email = `active.user.${Date.now()}@gmail.com`;
    const password = 'Password123!';
    const { data: { user }, error: authError } = await supabase.auth.signUp({ email, password });

    if (authError || !user) {
        console.error("❌ Signup Failed:", authError?.message);
        return;
    }
    console.log(`👤 User Created: ${user.id}`);

    // Update Profile (Trigger Points creation?)
    // Note: seed script might not have triggers for points if they are in schema. 
    // Schema has 'user_points', but does it auto-create? 
    // Schema lines 520+ had stored procedures... wait.
    // Line 596 of schema snippet (in 'award_points' function) had insert logic.
    // But does user creation trigger it?
    // Usually triggers are on 'profiles' insert.
    // Let's assume we need to INIT points if not there, OR check if table has row.
    // For now, let's just enroll, which might not affect points table unless trigger.

    // 2. Enroll in Challenge (Mindfulness Journey)
    const { data: challenge } = await supabase.from('challenges').select('id').eq('slug', 'mindfulness-journey').single();
    if (!challenge) {
        console.error("❌ Challenge not found for enrollment.");
        return;
    }

    await supabase.from('user_challenges').insert({
        user_id: user.id,
        challenge_id: challenge.id,
        start_date: new Date().toISOString(),
        status: 'active'
    });
    console.log("🏆 Enrolled in Mindfulness Journey");

    // 3. Verify Dashboard Data (Simulate Client Fetch)

    // A. Profile + Points
    const { data: profileWithPoints } = await supabase
        .from('profiles')
        .select('*, user_points(total_points, current_level)')
        .eq('id', user.id)
        .single();

    // Note: If user_points doesn't exist, this join returns null for it.
    console.log("📊 Profile Fetch Result:", profileWithPoints ? "Success" : "Failed");
    if (profileWithPoints) {
        console.log(`   Email: ${profileWithPoints.email}`);
        console.log(`   Points Object:`, profileWithPoints.user_points);
        // If null, it means we forgot to initialize user_points rows for new users in schema triggers!
    }

    // B. Active Challenge Query
    const { data: userChalls } = await supabase
        .from('user_challenges')
        .select('*, challenges(slug, title)')
        .eq('user_id', user.id)
        .eq('status', 'active')
        .order('start_date', { ascending: false })
        .limit(1);

    if (userChalls && userChalls.length > 0) {
        const active = userChalls[0];
        console.log(`✅ Active Challenge Found: ${active.challenges.title}`);
        console.log(`   Slug: ${active.challenges.slug}`);
    } else {
        console.error("❌ Active Challenge NOT found on Dashboard Query.");
    }
}

verifyDashboard();
