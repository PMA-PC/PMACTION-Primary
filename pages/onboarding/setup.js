// pages/onboarding/setup.js
import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useOnboarding } from '../../context/OnboardingContext';

const SetupPage = () => {
    const router = useRouter();
    const { data, update } = useOnboarding();

    const [notifications, setNotifications] = useState(data.notifications || {
        dailyReminder: true,
        reminderTime: '09:00',
        email: true,
        push: true,
        habitTracking: {
            exercise: true,
            mindfulness: true,
            journaling: true,
            sleep: true,
            nutrition: true,
        }
    });

    const [newHabit, setNewHabit] = useState('');

    const updateNotification = (key, value) => {
        setNotifications(prev => ({ ...prev, [key]: value }));
    };

    const updateHabitTracking = (habit, value) => {
        setNotifications(prev => ({
            ...prev,
            habitTracking: { ...prev.habitTracking, [habit]: value }
        }));
    };

    const handleAddHabit = (e) => {
        e.preventDefault();
        if (newHabit.trim()) {
            // Create a key-friendly version of the habit name
            const habitKey = newHabit.toLowerCase().replace(/[^a-z0-9]/g, '_');
            // If checking existence in future, use Object.keys(notifications.habitTracking)

            setNotifications(prev => ({
                ...prev,
                habitTracking: {
                    ...prev.habitTracking,
                    [newHabit]: true // Use full text as key for simplicity in display
                }
            }));
            setNewHabit('');
        }
    };

    const handleContinue = () => {
        update({ notifications });
        router.push('/onboarding/signup');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-teal-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <Head>
                <title>Setup & Gamification | PMAction</title>
                <meta name="description" content="Configure your notifications and learn about gamification" />
            </Head>

            {/* Animated Background Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"
                    animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ top: '10%', left: '10%' }}
                />
                <motion.div
                    className="absolute w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"
                    animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ top: '60%', right: '10%' }}
                />
                <motion.div
                    className="absolute w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"
                    animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ bottom: '10%', left: '50%' }}
                />
            </div>

            <div className="w-full max-w-7xl space-y-8 relative z-10">
                {/* Progress Steps */}
                <div className="flex justify-center space-x-4 mb-8">
                    {[1, 2, 3, 4].map((step) => (
                        <div
                            key={step}
                            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${step === 3
                                ? 'bg-teal-600 text-white shadow-lg scale-110'
                                : step < 3
                                    ? 'bg-purple-500 text-white'
                                    : 'bg-white text-gray-400 border-2 border-gray-200'
                                }`}
                        >
                            {step}
                        </div>
                    ))}
                </div>

                <div className="text-center mb-12">
                    <motion.h1
                        className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Let's Get You Set Up!
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Configure your notifications and discover how gamification makes building habits fun
                    </motion.p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Left Column: Notifications */}
                    <motion.div
                        className="bg-white rounded-3xl shadow-xl p-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Notification Preferences</h2>
                        </div>

                        <div className="space-y-6">
                            {/* Daily Reminder */}
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                <div className="flex-1">
                                    <label htmlFor="dailyReminder" className="font-semibold text-gray-900 block">
                                        Daily Reminder
                                    </label>
                                    <p className="text-sm text-gray-600">Get a daily nudge to check in</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        id="dailyReminder"
                                        checked={notifications.dailyReminder}
                                        onChange={(e) => updateNotification('dailyReminder', e.target.checked)}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                                </label>
                            </div>

                            {/* Reminder Time */}
                            {notifications.dailyReminder && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="pl-4"
                                >
                                    <label htmlFor="reminderTime" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Reminder Time
                                    </label>
                                    <input
                                        type="time"
                                        id="reminderTime"
                                        value={notifications.reminderTime}
                                        onChange={(e) => updateNotification('reminderTime', e.target.value)}
                                        className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-teal-500 transition-colors"
                                    />
                                </motion.div>
                            )}

                            {/* Email Notifications */}
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                <div className="flex-1">
                                    <label htmlFor="emailNotif" className="font-semibold text-gray-900 block">
                                        Email Notifications
                                    </label>
                                    <p className="text-sm text-gray-600">Weekly progress summaries</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        id="emailNotif"
                                        checked={notifications.email}
                                        onChange={(e) => updateNotification('email', e.target.checked)}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                                </label>
                            </div>

                            {/* Push Notifications */}
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                <div className="flex-1">
                                    <label htmlFor="pushNotif" className="font-semibold text-gray-900 block">
                                        Push Notifications
                                    </label>
                                    <p className="text-sm text-gray-600">Real-time updates and reminders</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        id="pushNotif"
                                        checked={notifications.push}
                                        onChange={(e) => updateNotification('push', e.target.checked)}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                                </label>
                            </div>

                            {/* Habit Tracking Notifications */}
                            <div className="pt-4 border-t-2 border-gray-100">
                                <h3 className="font-bold text-gray-900 mb-4">Habit Tracking Reminders</h3>
                                <div className="space-y-3 mb-4">
                                    {Object.entries(notifications.habitTracking).map(([habit, enabled]) => (
                                        <div key={habit} className="flex items-center justify-between">
                                            <label htmlFor={`habit-${habit}`} className="text-gray-700 capitalize">
                                                {habit}
                                            </label>
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    id={`habit-${habit}`}
                                                    checked={enabled}
                                                    onChange={(e) => updateHabitTracking(habit, e.target.checked)}
                                                    className="sr-only peer"
                                                />
                                                <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-teal-600"></div>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                                {/* Add Custom Habit */}
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="Add custom habit (e.g., Read 5 mins)..."
                                        value={newHabit}
                                        onChange={(e) => setNewHabit(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleAddHabit(e)}
                                        className="flex-1 px-4 py-2 text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:border-teal-500"
                                    />
                                    <button
                                        onClick={handleAddHabit}
                                        type="button"
                                        className="px-4 py-2 bg-teal-600 text-white text-sm font-bold rounded-lg hover:bg-teal-700 transition-colors"
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Gamification */}
                    <motion.div
                        className="bg-gradient-to-br from-purple-600 to-teal-600 rounded-3xl shadow-xl p-6 text-white h-full flex flex-col justify-between"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <div>
                            <div className="flex flex-col items-center gap-2 mb-6 text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <span className="text-3xl">🎮</span>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">Gamification Features</h2>
                                    <p className="text-purple-100 text-sm mt-1">
                                        Make your mental wellness journey fun and rewarding!
                                    </p>
                                </div>
                            </div>

                            {/* 2x2 Grid of Features */}
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                {/* Badges */}
                                <div className="bg-white bg-opacity-25 rounded-xl p-3 backdrop-blur-sm">
                                    <div className="flex flex-col items-center text-center gap-2">
                                        <span className="text-2xl">🏆</span>
                                        <h3 className="font-bold text-sm text-gray-900">Badges</h3>
                                        <p className="text-xs text-gray-700">
                                            Unlock achievements
                                        </p>
                                    </div>
                                </div>

                                {/* Streaks */}
                                <div className="bg-white bg-opacity-25 rounded-xl p-3 backdrop-blur-sm">
                                    <div className="flex flex-col items-center text-center gap-2">
                                        <span className="text-2xl">🔥</span>
                                        <h3 className="font-bold text-sm text-gray-900">Streaks</h3>
                                        <p className="text-xs text-gray-700">
                                            Build momentum
                                        </p>
                                    </div>
                                </div>

                                {/* Points */}
                                <div className="bg-white bg-opacity-25 rounded-xl p-3 backdrop-blur-sm">
                                    <div className="flex flex-col items-center text-center gap-2">
                                        <span className="text-2xl">⭐</span>
                                        <h3 className="font-bold text-sm text-gray-900">Points</h3>
                                        <p className="text-xs text-gray-700">
                                            Earn rewards
                                        </p>
                                    </div>
                                </div>

                                {/* Levels */}
                                <div className="bg-white bg-opacity-25 rounded-xl p-3 backdrop-blur-sm">
                                    <div className="flex flex-col items-center text-center gap-2">
                                        <span className="text-2xl">👑</span>
                                        <h3 className="font-bold text-sm text-gray-900">Levels</h3>
                                        <p className="text-xs text-gray-700">
                                            Progress & grow
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Why Daily Use Matters - Card Format */}
                        <div className="mt-4 pt-6 border-t border-white border-opacity-20">
                            <h3 className="text-lg font-bold mb-4 text-center text-white">Why Daily Use Matters</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {/* Consistency Card */}
                                <div className="bg-white bg-opacity-25 rounded-xl p-3 backdrop-blur-sm">
                                    <div className="flex flex-col items-center text-center gap-2">
                                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <h4 className="font-bold text-sm text-gray-900">Consistency</h4>
                                        <p className="text-xs text-gray-700">Daily actions create change</p>
                                    </div>
                                </div>

                                {/* Track Patterns Card */}
                                <div className="bg-white bg-opacity-25 rounded-xl p-3 backdrop-blur-sm">
                                    <div className="flex flex-col items-center text-center gap-2">
                                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                            </svg>
                                        </div>
                                        <h4 className="font-bold text-sm text-gray-900">Track Patterns</h4>
                                        <p className="text-xs text-gray-700">Identify mood trends</p>
                                    </div>
                                </div>

                                {/* AI Insights Card */}
                                <div className="bg-white bg-opacity-25 rounded-xl p-3 backdrop-blur-sm">
                                    <div className="flex flex-col items-center text-center gap-2">
                                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                            </svg>
                                        </div>
                                        <h4 className="font-bold text-sm text-gray-900">AI Insights</h4>
                                        <p className="text-xs text-gray-700">Better recommendations</p>
                                    </div>
                                </div>

                                {/* Community Impact Card (Fills Dead Space) */}
                                <div className="bg-white bg-opacity-25 rounded-xl p-3 backdrop-blur-sm">
                                    <div className="flex flex-col items-center text-center gap-2">
                                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </div>
                                        <h4 className="font-bold text-sm text-gray-900">Community</h4>
                                        <p className="text-xs text-gray-700">Join 10k+ others</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-4 max-w-2xl mx-auto">
                    <button
                        onClick={() => router.push('/onboarding/personal-details')}
                        className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                    >
                        Back
                    </button>
                    <button
                        onClick={handleContinue}
                        className="flex-1 px-6 py-4 bg-gradient-to-r from-teal-600 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SetupPage;
