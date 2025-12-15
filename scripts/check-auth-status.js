require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function checkAuth() {
    console.log("🕵️ Checking Auth Constraints...");
    const email = `status.check.${Date.now()}@gmail.com`;
    const password = 'Password123!';

    console.log(`1. Signing Up ${email}...`);
    const { data: upData, error: upError } = await supabase.auth.signUp({ email, password });

    if (upError) console.error("❌ SignUp Error:", upError.message);
    else {
        console.log("✅ SignUp OK. Session present?", !!upData.session);
        if (!upData.session) console.warn("   ⚠️ Session is NULL (Email Confirmation likely required)");
    }

    console.log(`2. Attempting Sign In (Immediate)...`);
    const { data: inData, error: inError } = await supabase.auth.signInWithPassword({ email, password });

    if (inError) console.error("❌ SignIn Error:", inError.message);
    else {
        console.log("✅ SignIn OK. Session present?", !!inData.session);
    }
}

checkAuth();
