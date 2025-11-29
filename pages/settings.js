import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NotificationManager from '../components/NotificationManager';

export default function SettingsPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
            <Head>
                <title>Settings | PMAction</title>
            </Head>

            <nav className="bg-white shadow-sm sticky top-0 z-10">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center cursor-pointer" onClick={() => router.push('/dashboard')}>
                            <span className="text-2xl mr-2">⬅️</span>
                            <h1 className="text-xl font-bold text-gray-900">Settings</h1>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-8">
                {/* Notifications Section */}
                <NotificationManager />

                {/* Help & Resources */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-shadow" onClick={() => router.push('/faq')}>
                    <div className="p-6 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl text-blue-600">
                                ❓
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900">Help & Resources</h2>
                                <p className="text-sm text-gray-500 font-medium">Learn about XP, Levels, and more</p>
                            </div>
                        </div>
                        <span className="text-gray-400">➜</span>
                    </div>
                </div>

                {/* Account Section (Placeholder) */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-100 bg-gray-50">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xl text-gray-600">
                                👤
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900">Account</h2>
                                <p className="text-sm text-gray-500 font-medium">Manage your profile and data</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <button className="text-red-600 font-bold text-sm hover:underline">
                            Sign Out
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
