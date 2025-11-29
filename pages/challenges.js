import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useApp } from '../lib/context';
import { supabase } from '../lib/supabaseClient';

export default function ChallengesPage() {
    const { user } = useApp();
    const router = useRouter();
    const [challenges, setChallenges] = useState([]);
    const [userChallenges, setUserChallenges] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, [user]);

    const fetchData = async () => {
        try {
            setLoading(true);
            // Fetch available challenges
            const { data: challengesData, error: challengesError } = await supabase
                .from('challenges')
                .select('*')
                .eq('is_published', true)
                .order('created_at', { ascending: false });

            if (challengesError) throw challengesError;

            let userChallengesData = [];
            if (user) {
                // Fetch user's active challenges only if logged in
                const { data: ucData, error: userChallengesError } = await supabase
                    .from('user_challenges')
                    .select('*, challenges(*)')
                    .eq('user_id', user.id);

                if (userChallengesError) throw userChallengesError;
                userChallengesData = ucData || [];
            }

            setChallenges(challengesData || []);
            setUserChallenges(userChallengesData);
        } catch (error) {
            console.error('Error fetching challenges:', error);
        } finally {
            setLoading(false);
        }
    };

    const isJoined = (challengeId) => {
        return userChallenges.some(uc => uc.challenge_id === challengeId);
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-12">
            <Head>
                <title>Challenges | PMAction</title>
            </Head>

            {/* Header */}
            <div className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-900">Wellness Challenges</h1>
                    <button
                        onClick={() => router.push('/dashboard')}
                        className="text-gray-600 hover:text-gray-900 font-medium"
                    >
                        Back to Dashboard
                    </button>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {loading ? (
                    <div className="text-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto"></div>
                        <p className="mt-4 text-gray-500">Loading challenges...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {challenges.map((challenge) => {
                            const joined = isJoined(challenge.id);
                            return (
                                <div key={challenge.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                                    <div className={`h-32 bg-gradient-to-r ${challenge.color_gradient || 'from-blue-500 to-indigo-600'} p-6 flex items-center justify-center`}>
                                        <span className="text-6xl">{challenge.icon || '🎯'}</span>
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800 capitalize">
                                                {challenge.category}
                                            </span>
                                            {joined && (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                    Joined
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{challenge.title}</h3>
                                        <p className="text-gray-600 text-sm mb-6 flex-1">{challenge.description}</p>

                                        <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                                            <span className="flex items-center">
                                                📅 {challenge.duration_days} Days
                                            </span>
                                            <span className="flex items-center">
                                                ⚡ {challenge.difficulty}
                                            </span>
                                        </div>

                                        <button
                                            onClick={() => router.push(`/challenge/${challenge.slug}`)}
                                            className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${joined
                                                ? 'bg-white border-2 border-teal-600 text-teal-600 hover:bg-teal-50'
                                                : 'bg-teal-600 text-white hover:bg-teal-700'
                                                }`}
                                        >
                                            {joined ? 'Continue Challenge' : 'View Details'}
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </main>
        </div>
    );
}
