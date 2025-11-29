import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function FAQPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
            <Head>
                <title>Help & Resources | PMAction</title>
            </Head>

            <nav className="bg-white shadow-sm sticky top-0 z-10">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center cursor-pointer" onClick={() => router.push('/settings')}>
                            <span className="text-2xl mr-2">⬅️</span>
                            <h1 className="text-xl font-bold text-gray-900">Help & Resources</h1>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-8">

                {/* Intro */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-extrabold text-gray-900">How PMAction Works</h1>
                    <p className="text-gray-600 mt-2">Everything you need to know about your journey.</p>
                </div>

                {/* XP System */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-50 bg-blue-50">
                        <div className="flex items-center gap-3">
                            <span className="text-3xl">⭐</span>
                            <h2 className="text-xl font-bold text-blue-900">XP (Experience Points)</h2>
                        </div>
                    </div>
                    <div className="p-6 text-gray-700 space-y-4">
                        <p>
                            XP represents your progress in building positive habits. You earn XP by logging wins, completing challenges, and maintaining streaks.
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-2">
                            <li><strong>Log a Win:</strong> +10 to +50 XP (depending on difficulty)</li>
                            <li><strong>Daily Check-in:</strong> +20 XP</li>
                            <li><strong>Complete Challenge:</strong> +100 to +500 XP</li>
                        </ul>
                    </div>
                </div>

                {/* Levels */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-50 bg-purple-50">
                        <div className="flex items-center gap-3">
                            <span className="text-3xl">👑</span>
                            <h2 className="text-xl font-bold text-purple-900">Levels</h2>
                        </div>
                    </div>
                    <div className="p-6 text-gray-700 space-y-4">
                        <p>
                            As you gain XP, you level up! Higher levels unlock new badges, challenges, and customization options (coming soon).
                        </p>
                        <p className="text-sm text-gray-500 italic">
                            Currently, you level up every 100 XP.
                        </p>
                    </div>
                </div>

                {/* Gold */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-50 bg-yellow-50">
                        <div className="flex items-center gap-3">
                            <span className="text-3xl">💰</span>
                            <h2 className="text-xl font-bold text-yellow-900">Gold</h2>
                        </div>
                    </div>
                    <div className="p-6 text-gray-700 space-y-4">
                        <p>
                            Gold is a currency you earn alongside XP. In the future, you'll be able to spend Gold in the <strong>Shop</strong> to buy:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-2">
                            <li>Custom themes for your dashboard</li>
                            <li>New avatars</li>
                            <li>"Freeze Streak" potions</li>
                        </ul>
                    </div>
                </div>

                {/* Health (HP) */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-50 bg-red-50">
                        <div className="flex items-center gap-3">
                            <span className="text-3xl">❤️</span>
                            <h2 className="text-xl font-bold text-red-900">Health (HP)</h2>
                        </div>
                    </div>
                    <div className="p-6 text-gray-700 space-y-4">
                        <p>
                            Your Health represents your daily energy and resilience.
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-2">
                            <li><strong>Decay:</strong> HP drops slightly every day if you don't log any activity.</li>
                            <li><strong>Restore:</strong> Logging "Self-Care" activities (like sleep, nutrition, mindfulness) restores HP.</li>
                        </ul>
                        <p className="font-bold text-red-600 mt-2">
                            Don't let it hit 0!
                        </p>
                    </div>
                </div>

            </main>
        </div>
    );
}
