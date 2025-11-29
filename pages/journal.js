import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useApp } from '../lib/context';
import { exportFullJournal } from '../lib/data-helpers';
import AppreciationModal from '../components/journal/AppreciationModal';
import AccomplishmentModal from '../components/journal/AccomplishmentModal';
import BoundaryModal from '../components/journal/BoundaryModal';
import QuoteModal from '../components/journal/QuoteModal';
import { motion, AnimatePresence } from 'framer-motion';

const TABS = {
    FEELINGS: 'feelings',
    APPRECIATION: 'appreciation',
    ACCOMPLISHMENTS: 'accomplishments',
    BOUNDARIES: 'boundaries',
    QUOTES: 'quotes'
};

export default function Journal() {
    const { user, dailyLogs, saveDailyLog, wins, addWin, loading } = useApp();
    const router = useRouter();
    const today = new Date().toISOString().split('T')[0];

    const [activeTab, setActiveTab] = useState(TABS.FEELINGS);
    const [emotionData, setEmotionData] = useState(null);
    const [journalContent, setJournalContent] = useState('');
    const [isSaving, setIsSaving] = useState(false);

    // Modals
    const [showAppreciationModal, setShowAppreciationModal] = useState(false);
    const [showAccomplishmentModal, setShowAccomplishmentModal] = useState(false);
    const [showBoundaryModal, setShowBoundaryModal] = useState(false);
    const [showQuoteModal, setShowQuoteModal] = useState(false);

    // Load today's log
    useEffect(() => {
        const log = dailyLogs[today];
        if (log) {
            if (log.emotion_data) {
                setEmotionData(log.emotion_data);
            } else if (log.mood_score) {
                const moodToEmotion = {
                    1: { primary: 'sad', secondary: ['down'] },
                    2: { primary: 'anxious', secondary: ['worried'] },
                    3: { primary: 'neutral', secondary: ['okay'] },
                    4: { primary: 'happy', secondary: ['content'] },
                    5: { primary: 'happy', secondary: ['joyful'] }
                };
                setEmotionData(moodToEmotion[log.mood_score] || null);
            }
            setJournalContent(log.journal_content || '');
        }
    }, [dailyLogs, today]);

    const handleSaveJournal = async () => {
        setIsSaving(true);
        try {
            await saveDailyLog(today, {
                emotion_data: emotionData,
                journal_content: journalContent
            });
            // Also log as a win if it's substantial
            if (journalContent.length > 10) {
                await addWin({
                    win_type: 'journal',
                    label: 'Daily Journal',
                    icon: '📝',
                    xp_earned: 15
                });
            }
        } catch (error) {
            alert('Failed to save log.');
        } finally {
            setIsSaving(false);
        }
    };

    const handleSaveWinEntry = async (data) => {
        try {
            await addWin({
                win_type: data.type, // 'appreciation', 'accomplishment', 'boundary', 'quote'
                label: data.type.charAt(0).toUpperCase() + data.type.slice(1),
                icon: data.icon || (data.type === 'appreciation' ? '🙏' : data.type === 'boundary' ? '🛡️' : '💭'),
                content: data, // Store full object in content
                xp_earned: 20
            });
        } catch (error) {
            console.error('Failed to save entry:', error);
            alert('Failed to save entry');
        }
    };

    const getFilteredWins = (type) => {
        return wins.filter(w => w.win_type === type || (type === 'appreciation' && w.win_type === 'gratitude'));
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
            <Head>
                <title>Journal | PMAction</title>
            </Head>

            {/* Modals */}
            <AppreciationModal isOpen={showAppreciationModal} onClose={() => setShowAppreciationModal(false)} onSave={handleSaveWinEntry} />
            <AccomplishmentModal isOpen={showAccomplishmentModal} onClose={() => setShowAccomplishmentModal(false)} onSave={handleSaveWinEntry} />
            <BoundaryModal isOpen={showBoundaryModal} onClose={() => setShowBoundaryModal(false)} onSave={handleSaveWinEntry} />
            <QuoteModal isOpen={showQuoteModal} onClose={() => setShowQuoteModal(false)} onSave={handleSaveWinEntry} />

            <main className="max-w-4xl mx-auto py-8 px-4">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Activity Logs</h1>
                    <button
                        onClick={() => exportFullJournal(dailyLogs)}
                        className="text-sm font-medium text-blue-600 hover:text-blue-800"
                    >
                        📥 Export Data
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
                    {Object.values(TABS).map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-xl font-semibold whitespace-nowrap transition-all ${activeTab === tab
                                ? 'bg-teal-600 text-white shadow-md'
                                : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="space-y-6">
                    {activeTab === TABS.FEELINGS && (
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <h2 className="text-xl font-bold mb-4">Daily Check-in</h2>
                            <textarea
                                value={journalContent}
                                onChange={(e) => setJournalContent(e.target.value)}
                                placeholder="How are you feeling today?"
                                className="w-full h-40 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none resize-none mb-4"
                            />
                            <div className="flex justify-end">
                                <button
                                    onClick={handleSaveJournal}
                                    disabled={isSaving}
                                    className="bg-teal-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-teal-700 transition disabled:opacity-50"
                                >
                                    {isSaving ? 'Saving...' : 'Save Entry'}
                                </button>
                            </div>
                        </div>
                    )}

                    {activeTab === TABS.APPRECIATION && (
                        <div>
                            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-100 mb-6">
                                <h3 className="text-xl font-bold text-yellow-800 mb-2">"Can't Never Could, Be Better!"</h3>
                                <p className="text-yellow-700">Focus on the good.</p>
                            </div>
                            <button
                                onClick={() => setShowAppreciationModal(true)}
                                className="w-full py-4 border-2 border-dashed border-gray-300 rounded-2xl text-gray-500 font-bold hover:border-yellow-400 hover:text-yellow-600 hover:bg-yellow-50 transition mb-6"
                            >
                                + Add Appreciation
                            </button>
                            <div className="space-y-4">
                                {getFilteredWins('appreciation').map(win => (
                                    <div key={win.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                                        <p className="text-lg mb-2">{win.content.text || win.content}</p>
                                        <p className="text-xs text-gray-400">{new Date(win.created_at).toLocaleString()}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === TABS.ACCOMPLISHMENTS && (
                        <div>
                            <button
                                onClick={() => setShowAccomplishmentModal(true)}
                                className="w-full py-4 border-2 border-dashed border-gray-300 rounded-2xl text-gray-500 font-bold hover:border-green-400 hover:text-green-600 hover:bg-green-50 transition mb-6"
                            >
                                + Log Accomplishment
                            </button>
                            <div className="space-y-4">
                                {getFilteredWins('accomplishment').map(win => (
                                    <div key={win.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                                        <div className="text-3xl">{win.icon}</div>
                                        <div>
                                            <div className="font-bold text-gray-800">{win.label}</div>
                                            <p className="text-gray-600">{win.content.details}</p>
                                            <p className="text-xs text-gray-400 mt-2">{new Date(win.created_at).toLocaleString()}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === TABS.BOUNDARIES && (
                        <div>
                            <button
                                onClick={() => setShowBoundaryModal(true)}
                                className="w-full py-4 border-2 border-dashed border-gray-300 rounded-2xl text-gray-500 font-bold hover:border-purple-400 hover:text-purple-600 hover:bg-purple-50 transition mb-6"
                            >
                                + Log Boundary
                            </button>
                            <div className="space-y-4">
                                {getFilteredWins('boundary').map(win => (
                                    <div key={win.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="font-bold text-lg text-gray-800">{win.content.description}</div>
                                            <div className="text-yellow-400 text-sm">{'⭐'.repeat(win.content.rating)}</div>
                                        </div>
                                        <p className="text-sm text-gray-500 mb-2">With: <span className="font-semibold">{win.content.person}</span></p>
                                        <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">{win.content.outcome}</p>
                                        <p className="text-xs text-gray-400 mt-3">{new Date(win.created_at).toLocaleString()}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === TABS.QUOTES && (
                        <div>
                            <button
                                onClick={() => setShowQuoteModal(true)}
                                className="w-full py-4 border-2 border-dashed border-gray-300 rounded-2xl text-gray-500 font-bold hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50 transition mb-6"
                            >
                                + Save Quote
                            </button>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {getFilteredWins('quote').map(win => (
                                    <div key={win.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between h-full">
                                        <p className="text-lg italic text-gray-800 mb-4">"{win.content.text}"</p>
                                        <div>
                                            {win.content.author && <p className="text-sm font-bold text-gray-600">— {win.content.author}</p>}
                                            <p className="text-xs text-gray-400 mt-2">{new Date(win.created_at).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
