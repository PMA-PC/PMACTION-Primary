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

    async function testConnection() {
        console.log('Testing Supabase connection...');
        // Try to fetch session (should be null but not error)
        const { data, error } = await supabase.auth.getSession();

        if (error) {
            console.error('❌ Connection Error:', error.message);
        } else {
            console.log('✅ Connection Successful!');
            console.log('Auth Service is responding.');
        }
    }

    testConnection();

} catch (err) {
    console.error('Script failed:', err);
}
