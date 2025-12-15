require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function debugLogin() {
    console.log("🕵️ Debugging Login Behavior...");
    const email = `login_test_${Date.now()}@test.com`;
    const password = 'Password123!';

    // 1. Sign Up
    console.log(`\n1. Signing Up: ${email}`);
    const { data: upData, error: upError } = await supabase.auth.signUp({ email, password });

    if (upError) {
        console.error("❌ SignUp Failed:", upError.message);
        // If rate limited, we can't test.
        return;
    }
    console.log("✅ SignUp Result:", upData.session ? "Session Created" : "NO Session (Confirmation Needed)");

    // 2. Sign In (Immediate)
    console.log(`\n2. Attempting Sign In (with unconfirmed email)...`);
    const { data: inData, error: inError } = await supabase.auth.signInWithPassword({ email, password });

    if (inError) {
        console.error("❌ SignIn Returned Error:", inError.message);
        console.log("   (UI should show this error)");
    } else {
        console.log("✅ SignIn Returned Success (No Error)");
        console.log("   Session present?", !!inData.session);
        if (!inData.session) {
            console.warn("⚠️ CRITICAL: Success but NO SESSION. UI logic might hang here!");
        }
    }
}

debugLogin();
