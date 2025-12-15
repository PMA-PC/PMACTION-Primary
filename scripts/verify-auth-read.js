require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function verifyAuthRead() {
    console.log("🕵️ testing Authenticated Read Access...");

    // 1. Sign In
    const email = `test.persistence.${Date.now()}@gmail.com`; // New user
    const password = 'Password123!';

    // Note: Logging in as existing user `test.persistence.1765740581481@gmail.com` to avoid clutter?
    // Let's create new to be clean.
    const { data: { user }, error: authError } = await supabase.auth.signUp({
        email,
        password
    });

    if (authError) {
        console.error("❌ Auth Failed:", authError.message);
        return;
    }
    console.log(`👤 Signed In as ${user.id}`);

    // 2. Try to Read Challenges
    console.log("📖 Reading Challenges (as Auth User)...");
    const { data: challenges, error: readError } = await supabase.from('challenges').select('*');

    if (readError) {
        console.error("❌ READ Failed:", readError.message);
    } else if (!challenges || challenges.length === 0) {
        console.error("❌ READ Successful but returned 0 rows (RLS Hiding?)");
    } else {
        console.log(`✅ READ Success. Found ${challenges.length} challenges.`);
        challenges.forEach(c => console.log(`   - [${c.id}] ${c.slug}`));
    }
}

verifyAuthRead();
