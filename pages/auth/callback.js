// pages/auth/callback.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../lib/supabaseClient';

const AuthCallback = () => {
    const router = useRouter();
    const [status, setStatus] = useState('Processing...');

    useEffect(() => {
        const handleCallback = async () => {
            try {
                // Get the session from the URL hash
                const { data: { session }, error: sessionError } = await supabase.auth.getSession();

                if (sessionError) throw sessionError;

                if (!session) {
                    throw new Error('No session found');
                }

                // Retrieve onboarding data from localStorage
                const onboardingDataStr = localStorage.getItem('onboardingData');
                if (!onboardingDataStr) {
                    throw new Error('No onboarding data found');
                }

                const onboardingData = JSON.parse(onboardingDataStr);

                // Create or update profile with onboarding data
                const { error: profileError } = await supabase
                    .from('profiles')
                    .upsert({
                        id: session.user.id,
                        email: session.user.email,
                        display_name: onboardingData.displayName,
                        age_group: onboardingData.ageGroup,
                        timezone: onboardingData.timezone,
                        goals: onboardingData.goals,
                        notification_preferences: onboardingData.notifications,
                        onboarding_complete: true,
                        updated_at: new Date().toISOString(),
                    });

                if (profileError) throw profileError;

                // Clear onboarding data from localStorage
                localStorage.removeItem('onboardingData');

                setStatus('Success! Redirecting to dashboard...');

                // Redirect to dashboard
                setTimeout(() => {
                    router.push('/dashboard');
                }, 1000);

            } catch (error) {
                console.error('Callback error:', error);
                setStatus(`Error: ${error.message}`);

                // Redirect back to signup page after error
                setTimeout(() => {
                    router.push('/onboarding/signup');
                }, 3000);
            }
        };

        handleCallback();
    }, [router]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-50 to-purple-50 flex items-center justify-center">
            <div className="text-center">
                <div className="w-16 h-16 border-4 border-teal-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-xl font-semibold text-gray-900">{status}</p>
            </div>
        </div>
    );
};

export default AuthCallback;
