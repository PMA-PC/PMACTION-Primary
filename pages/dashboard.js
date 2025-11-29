import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
                        </div >
                        <h3 className="text-sm font-bold text-blue-100 uppercase tracking-wider mb-2">Total XP</h3>
                        <p className="text-5xl font-black tracking-tight">{userProfile?.xp || 0}</p>
                        <div className="mt-4 text-xs font-medium text-blue-200 bg-blue-700/30 inline-block px-3 py-1 rounded-full">
                            Level {currentLevel}
                        </div>
                    </div >

                    <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-6 rounded-3xl shadow-lg text-white transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="text-8xl">💰</span>
                        </div>
                        <h3 className="text-sm font-bold text-yellow-100 uppercase tracking-wider mb-2">Gold</h3>
                        <p className="text-5xl font-black tracking-tight flex items-center">
                            {userProfile?.gold || 0}
                        </p>
                        <div className="mt-4 text-xs font-medium text-yellow-100 bg-yellow-600/20 inline-block px-3 py-1 rounded-full">
                            Spend in Shop
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-red-500 to-pink-600 p-6 rounded-3xl shadow-lg text-white transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="text-8xl">❤️</span>
                        </div>
                        <h3 className="text-sm font-bold text-red-100 uppercase tracking-wider mb-2">Health</h3>
                        <div className="flex items-baseline">
                            <p className="text-5xl font-black tracking-tight">{userProfile?.hp || 100}</p>
                            <span className="text-lg ml-2 opacity-80">/ 100</span>
                        </div>
                        <div className="mt-4 w-full bg-black/20 rounded-full h-2">
                            <div className="bg-white h-2 rounded-full" style={{ width: `${userProfile?.hp || 100}%` }}></div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-3xl shadow-lg text-white transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="text-8xl">🔥</span>
                        </div>
                        <h3 className="text-sm font-bold text-orange-100 uppercase tracking-wider mb-2">Streak</h3>
                        <p className="text-5xl font-black tracking-tight flex items-center">
                            {userProfile?.current_streak || 0}
                        </p>
                        <div className="mt-4 text-xs font-medium text-orange-100 bg-orange-700/20 inline-block px-3 py-1 rounded-full">
                            Days in a row
                        </div>
                    </div>
                </div >

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Wins & Challenges */}
        <div className="lg:col-span-2 space-y-8">
            {/* Today's Wins */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-800">Today's Wins</h2>
                    <span className="text-sm font-medium text-gray-500">{wins.length} wins today</span>
                </div>

                {wins.length === 0 ? (
                    <div className="p-8 text-center">
                        <div className="text-4xl mb-3">🌱</div>
                        <p className="text-gray-500 font-medium mb-4">No wins logged yet today.</p>
                        <button
                            onClick={() => setIsWinModalOpen(true)}
                            className="text-blue-600 font-bold hover:underline"
                        >
                            Start by drinking water or taking a breath!
                        </button>
                    </div>
                ) : (
                    <div className="divide-y divide-gray-50">
                        {wins.map((win) => (
                            <div key={win.id} className="p-4 flex items-center hover:bg-gray-50 transition-colors">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-xl mr-4">
                                    {win.win_type === 'activity' ? (win.icon || '✅') :
                                        win.win_type === 'journal' ? '📝' :
                                            win.win_type === 'gratitude' ? '🙏' :
                                                win.win_type === 'mindfulness' ? '🧘' : '🏆'}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-800">
                                        {win.label ||
                                            (win.win_type === 'journal' ? 'Journal Entry' :
                                                win.win_type === 'gratitude' ? 'Gratitude Practice' :
                                                    win.win_type === 'mindfulness' ? 'Mindfulness Session' : 'Win')}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        {new Date(win.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <span className="inline-block px-2 py-1 bg-yellow-50 text-yellow-700 text-xs font-bold rounded-md border border-yellow-100">
                                        +{win.xp_earned} XP
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Active Challenges (Placeholder) */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl shadow-lg text-white p-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h2 className="text-xl font-bold mb-1">Weekly Challenge</h2>
                        <p className="text-purple-100 text-sm">Ends in 3 days</p>
                    </div>
                    <span className="bg-white/20 px-3 py-1 rounded-lg text-xs font-bold backdrop-blur-sm">
                        250 XP
                    </span>
                </div>
                <div className="mb-4">
                    <h3 className="font-bold text-lg mb-2">Mindfulness Master</h3>
                    <p className="text-purple-100 text-sm mb-4">Complete 5 mindfulness sessions this week.</p>
                    <div className="w-full bg-black/20 rounded-full h-2">
                        <div className="bg-white h-2 rounded-full w-2/5"></div>
                    </div>
                    <div className="flex justify-between text-xs font-bold mt-1 text-purple-200">
                        <span>2 / 5 completed</span>
                        <span>40%</span>
                    </div>
                </div>
                <button className="w-full py-2 bg-white text-purple-600 font-bold rounded-lg hover:bg-purple-50 transition-colors">
                    View Details
                </button>
            </div>
        </div>

        {/* Right Column: Journal & Mood */}
        <div className="space-y-8">
            {/* Reminders Widget */}
            {/* Why Daily Use Matters - Redesigned */}
            <div className="bg-gradient-to-br from-violet-600 to-purple-700 rounded-3xl shadow-lg p-6 text-white relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                        <span className="bg-white/20 p-2 rounded-lg mr-3">🚀</span>
                        Why Daily Use Matters
                    </h2>
                    <div className="space-y-4">
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex items-start gap-4 hover:bg-white/20 transition-colors">
                            <div className="bg-white text-purple-600 w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0">
                                1
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Consistency is Key</h3>
                                <p className="text-purple-100 text-sm">Small daily actions build powerful long-term habits.</p>
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex items-start gap-4 hover:bg-white/20 transition-colors">
                            <div className="bg-white text-purple-600 w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0">
                                2
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Track Patterns</h3>
                                <p className="text-purple-100 text-sm">Spot trends in your mood and energy levels.</p>
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex items-start gap-4 hover:bg-white/20 transition-colors">
                            <div className="bg-white text-purple-600 w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0">
                                3
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Unlock Insights</h3>
                                <p className="text-purple-100 text-sm">Get personalized recommendations based on your data.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Decorative Background Circles */}
                <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-purple-500/30 rounded-full blur-2xl"></div>
            </div>

            {/* Focus Areas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Daily Check-in */}
                <button
                    onClick={() => {
                        setModalTab('journal');
                        setIsWinModalOpen(true);
                    }}
                    className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-blue-300 hover:shadow-md transition-all text-left group relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="text-6xl">📝</span>
                    </div>
                    <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform origin-left">📝</span>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Daily Check-in</h3>
                    <p className="text-sm text-gray-500">Log your mood, wins, and thoughts.</p>
                </button>

                {/* Self-Care */}
                <button
                    onClick={() => {
                        setModalTab('self_care');
                        setIsWinModalOpen(true);
                    }}
                    className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-purple-300 hover:shadow-md transition-all text-left group relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="text-6xl">🧘</span>
                    </div>
                    <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform origin-left">🧘</span>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Self-Care</h3>
                    <p className="text-sm text-gray-500">Find an activity for you.</p>
                </button>

                {/* Resources */}
                <button
                    onClick={() => router.push('/library')}
                    className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-indigo-300 hover:shadow-md transition-all text-left group relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="text-6xl">📚</span>
                    </div>
                    <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform origin-left">📚</span>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Resources</h3>
                    <p className="text-sm text-gray-500">Explore articles and quizzes.</p>
                </button>
            </div>

            {/* Recent Journal */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Thoughts</h2>
                {recentJournalEntries.length === 0 ? (
                    <p className="text-gray-500 text-sm italic">No entries yet.</p>
                ) : (
                    <div className="space-y-4">
                        {recentJournalEntries.map(entry => (
                            <div key={entry.date} className="p-3 bg-gray-50 rounded-xl">
                                <div className="text-xs text-gray-400 font-bold mb-1">{entry.date}</div>
                                <p className="text-gray-600 text-sm line-clamp-3">{entry.journal_content}</p>
                            </div>
                        ))}
                    </div>
                )}
                <button
                    onClick={() => router.push('/journal')}
                    className="w-full mt-4 py-2 text-sm font-bold text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                    View All Entries
                </button>
            </div>
        </div>
    </div>
            </main >
        </div >
    );
};

export default DashboardPage;
