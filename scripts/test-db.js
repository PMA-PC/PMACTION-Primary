const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

// Read .env.local manually
try {
    const envPath = path.resolve(__dirname, '../.env.local');
    if (!fs.existsSync(envPath)) {
        console.error('.env.local file not found!');
        process.exit(1);
    }
    const envContent = fs.readFileSync(envPath, 'utf8');
    const env = {};
    envContent.split('\n').forEach(line => {
        const [key, value] = line.split('=');
        if (key && value) env[key.trim()] = value.trim();
    });

    const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
        console.error('Missing Supabase credentials in .env.local');
        process.exit(1);
    }

    console.log('Found credentials for:', supabaseUrl);

    const supabase = createClient(supabaseUrl, supabaseKey);

    async function testSignup() {
        const uniqueEmail = `testuser_${Date.now()}@example.com`;
        console.log(`Attempting signup for ${uniqueEmail}...`);

        const { data, error } = await supabase.auth.signUp({
            email: uniqueEmail,
            password: 'password123'
        });

        if (error) {
            console.error('❌ Signup Failed:', error.message);
            // Don't exit process here, just log error
        } else {
            console.log('✅ Signup Successful!');
            console.log('User ID:', data.user?.id);
            console.log('Session:', data.session ? 'Active' : 'None (Email confirmation likely required)');
        }
    }

    testSignup();

} catch (err) {
    console.error('Script failed:', err);
}
