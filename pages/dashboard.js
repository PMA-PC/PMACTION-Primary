import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useApp } from './index';
import { supabase } from '../lib/supabaseClient';

const DashboardPage = () => {
    const router = useRouter();
    const { user, gamification, challenges, habits, journalEntries, moodLogs } = useApp();

    // Mock data fallback if context is empty (for development)
    const mockChallenges = challenges || [
        { id: 1, title: 'Morning Mindfulness', description: 'Start your day with 5 minutes of meditation.' },
        { id: 2, title: 'Gratitude Journal', description: 'Write down three things you are grateful for.' },
        { id: 3, title: 'Digital Detox', description: 'Take a break from screens for 1 hour.' }
    ];

    const mockHabits = habits || [
        { id: 1, name: 'Drink Water', streak: 7 },
        { id: 2, name: 'Exercise', streak: 3 },
        { id: 3, name: 'Read', streak: 1 }
    ];

    const mockJournalEntries = journalEntries || [
        { id: 1, date: '2025-11-05', content: 'Today was a good day. I felt calm and focused.' },
        { id: 2, date: '2025-11-04', content: 'I struggled with anxiety today, but I used my coping skills.' }
    ];

    const mockMoodLogs = moodLogs || [
        { id: 1, date: '2025-11-05', mood: 'Happy', note: 'Good sleep and a productive day.' },
        { id: 2, date: '2025-11-04', mood: 'Anxious', note: 'Work stress, but managed to take a walk.' }
    ];

    // Auth check
    useEffect(() => {
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                router.push('/login');
            }
        };
        checkSession();
    }, [router]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/login');
    };

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Head>
                <title>Dashboard | PMAction</title>
                <meta name="description" content="Your personal dashboard for mental well-being" />
            </Head>

            {/* Navigation */}
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold text-teal-600">PMAction</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-700">Welcome, {user.email}</span>
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-900">Welcome, {user?.display_name || 'User'}!</h1>
                    <p className="mt-2 text-gray-600">Your Personalized Mental Well-being Hub</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                        <h3 className="text-sm font-medium text-gray-500 mb-2">Points</h3>
                        <p className="text-3xl font-bold text-teal-600">{gamification?.points || 0}</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                        <h3 className="text-sm font-medium text-gray-500 mb-2">Level</h3>
                        <p className="text-3xl font-bold text-teal-600">{gamification?.level || 1}</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                        <h3 className="text-sm font-medium text-gray-500 mb-2">Streak</h3>
                        <p className="text-3xl font-bold text-teal-600">{gamification?.streak || 0} days</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                        <h3 className="text-sm font-medium text-gray-500 mb-2">Badges</h3>
                        <p className="text-3xl font-bold text-teal-600">{gamification?.badges_earned?.length || 0}</p>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Active Challenges */}
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Active Challenges</h2>
                        <ul className="space-y-4">
                            {mockChallenges.map(challenge => (
                                <li key={challenge.id} className="p-4 bg-gray-50 rounded-lg border-l-4 border-teal-500">
                                    <strong className="block text-gray-900">{challenge.title}</strong>
                                    <p className="text-sm text-gray-600">{challenge.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Habits */}
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Your Habits</h2>
                        <ul className="space-y-4">
                            {mockHabits.map(habit => (
                                <li key={habit.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                    <strong className="text-gray-900">{habit.name}</strong>
                                    <span className="text-sm text-teal-600 font-medium">Streak: {habit.streak} days</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Journal Entries */}
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Journal Entries</h2>
                        <ul className="space-y-4">
                            {mockJournalEntries.map(entry => (
                                <li key={entry.id} className="p-4 bg-gray-50 rounded-lg">
                                    <div className="text-xs text-gray-500 mb-1">{entry.date}</div>
                                    <p className="text-gray-700">{entry.content}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mood Log */}
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Mood Log</h2>
                        <ul className="space-y-4">
                            {mockMoodLogs.map(log => (
                                <li key={log.id} className="p-4 bg-gray-50 rounded-lg">
                                    <div className="flex justify-between items-center mb-2">
                                        <strong className="text-gray-900">{log.mood}</strong>
                                        <span className="text-xs text-gray-500">{log.date}</span>
                                    </div>
                                    <p className="text-sm text-gray-600">{log.note}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap justify-center gap-4">
                    <button
                        className="px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors shadow-md"
                        onClick={() => router.push('/challenges')}
                    >
                        View All Challenges
                    </button>
                    <button
                        className="px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
                        onClick={() => router.push('/journal')}
                    >
                        Write in Journal
                    </button>
                    <button
                        className="px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
                        onClick={() => router.push('/habits')}
                    >
                        Track Habits
                    </button>
                </div>
            </main>
        </div>
    );
};

export default DashboardPage;
