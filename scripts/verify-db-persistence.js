require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials in .env.local');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testPersistence() {
    console.log('🤖 Starting Database Persistence Verification...');

    // 1. Auth / User Creation
    const email = `test.persistence.${Date.now()}@gmail.com`;
    const password = 'Password123!';

    console.log(`\n📧 Attempting Signup: ${email}`);

    const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
    });

    if (authError) {
        console.error('❌ Auth Failed:', authError.message);
        return;
    }

    const userId = authData.user?.id;
    if (!userId) {
        console.error('❌ No User ID returned (Check email confirmation settings)');
        // Try to proceed if we can get a session, but usually sign up requires retrieval
        return;
    }
    console.log(`✅ User Created: ${userId}`);

    // 2. Profile Update (Concerns)
    console.log('\n👤 Updating Profile (Onboarding Data)...');
    const onboardingData = {
        concerns: ['anxiety', 'stress'],
        ageRange: '25-34'
    };

    const { error: profileError } = await supabase
        .from('profiles')
        .update({
            onboarding_data: onboardingData,
            notification_preferences: { daily_reminder: true, reminder_time: 'morning' },
            onboarding_complete: false
        })
        .eq('id', userId);

    if (profileError) console.error('❌ Profile Update Failed:', profileError.message);
    else console.log('✅ Profile Update Successful');

    // 3. Assessment Insert
    console.log('\n📝 Inserting Assessment Result...');

    // Get Assessment ID
    const { data: assessment } = await supabase
        .from('assessments')
        .select('id')
        .eq('slug', 'wellness-check')
        .single();

    if (!assessment) {
        console.error('❌ Assessment "wellness-check" not found in DB (Seed data missing?)');
    } else {
        console.log(`   Found Assessment ID: ${assessment.id}`);
        const { error: assessError } = await supabase.from('user_assessments').insert({
            user_id: userId,
            assessment_id: assessment.id,
            responses: { "0": 1, "1": 2 }, // Mock answers
            total_score: 3,
            completed_at: new Date().toISOString()
        });

        if (assessError) console.error('❌ Assessment Insert Failed:', assessError.message);
        else console.log('✅ Assessment Insert Successful');
    }

    // 4. Challenge Enrollment
    console.log('\n🏆 Enrolling in Challenge...');
    const { data: challenge } = await supabase
        .from('challenges')
        .select('id')
        .eq('slug', 'mindfulness-journey') // Matches our seed
        .single();

    if (!challenge) {
        console.error('❌ Challenge "mindfulness-journey" not found (Seed data missing?)');
    } else {
        console.log(`   Found Challenge ID: ${challenge.id}`);
        const { error: challengeError } = await supabase.from('user_challenges').insert({
            user_id: userId,
            challenge_id: challenge.id,
            start_date: new Date().toISOString(),
            status: 'active'
        });

        if (challengeError) console.error('❌ Challenge Enrollment Failed:', challengeError.message);
        else console.log('✅ Challenge Enrollment Successful');
    }

    // 5. Final Verify
    console.log('\n🔎 Verifying Data Read...');
    const { data: profile } = await supabase.from('profiles').select('*').eq('id', userId).single();
    const { data: myChallenges } = await supabase.from('user_challenges').select('*').eq('user_id', userId);

    console.log('--- Final Status ---');
    console.log(`User: ${profile?.email}`);
    console.log(`Onboarding Data: ${JSON.stringify(profile?.onboarding_data)}`);
    console.log(`Enrolled Challenges: ${myChallenges?.length || 0}`);
}

testPersistence();
