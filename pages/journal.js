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
                        <motion.button
                            key={tab}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-xl font-bold whitespace-nowrap transition-all border-2 ${activeTab === tab
                                ? 'bg-teal-600 border-teal-600 text-white shadow-lg shadow-teal-200'
                                : 'bg-white border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-200'
                                }`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </motion.button>
                    ))}
                </div>

                {/* Content Area */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-6"
                    >
                        {activeTab === TABS.FEELINGS && (
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full -mr-16 -mt-16 blur-xl opacity-50 pointer-events-none"></div>
                                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <span>🧘</span> Daily Check-in
                                </h2>
                                <textarea
                                    value={journalContent}
                                    onChange={(e) => setJournalContent(e.target.value)}
                                    placeholder="How are you feeling today?"
                                    className="w-full h-40 p-4 border-2 border-gray-100 rounded-xl focus:border-teal-500 focus:ring-0 outline-none resize-none mb-4 bg-gray-50/50 transition-colors"
                                />
                                <div className="flex justify-end">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleSaveJournal}
                                        disabled={isSaving}
                                        className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-teal-200 hover:shadow-xl transition-all disabled:opacity-50"
                                    >
                                        {isSaving ? 'Saving...' : 'Save Entry'}
                                    </motion.button>
                                </div>
                            </div>
                        )}

                        {activeTab === TABS.APPRECIATION && (
                            <div>
                                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-100 mb-6 relative overflow-hidden">
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold text-amber-900 mb-2">"Can't Never Could, Be Better!"</h3>
                                        <p className="text-amber-800 font-medium">Focus on the good.</p>
                                    </div>
                                    <div className="absolute right-0 bottom-0 text-6xl opacity-10 transform translate-y-2">🙏</div>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setShowAppreciationModal(true)}
                                    className="w-full py-4 border-2 border-dashed border-gray-300 rounded-2xl text-gray-500 font-bold hover:border-amber-400 hover:text-amber-600 hover:bg-amber-50 transition mb-6 flex items-center justify-center gap-2"
                                >
                                    <span>➕</span> Add Appreciation
                                </motion.button>
                                <div className="space-y-4">
                                    {getFilteredWins('appreciation').map(win => (
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            key={win.id}
                                            className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                                        >
                                            <p className="text-lg mb-2 font-medium text-gray-800">{win.content.text || win.content}</p>
                                            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">{new Date(win.created_at).toLocaleString()}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === TABS.ACCOMPLISHMENTS && (
                            <div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setShowAccomplishmentModal(true)}
                                    className="w-full py-4 border-2 border-dashed border-gray-300 rounded-2xl text-gray-500 font-bold hover:border-green-400 hover:text-green-600 hover:bg-green-50 transition mb-6 flex items-center justify-center gap-2"
                                >
                                    <span>➕</span> Log Accomplishment
                                </motion.button>
                                <div className="space-y-4">
                                    {getFilteredWins('accomplishment').map(win => (
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            key={win.id}
                                            className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow"
                                        >
                                            <div className="text-3xl bg-green-50 w-12 h-12 rounded-full flex items-center justify-center border border-green-100">{win.icon}</div>
                                            <div>
                                                <div className="font-bold text-gray-800 text-lg">{win.label}</div>
                                                <p className="text-gray-600 leading-relaxed">{win.content.details}</p>
                                                <p className="text-xs text-gray-400 mt-2 font-bold uppercase tracking-wider">{new Date(win.created_at).toLocaleString()}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === TABS.BOUNDARIES && (
                            <div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setShowBoundaryModal(true)}
                                    className="w-full py-4 border-2 border-dashed border-gray-300 rounded-2xl text-gray-500 font-bold hover:border-purple-400 hover:text-purple-600 hover:bg-purple-50 transition mb-6 flex items-center justify-center gap-2"
                                >
                                    <span>➕</span> Log Boundary
                                </motion.button>
                                <div className="space-y-4">
                                    {getFilteredWins('boundary').map(win => (
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            key={win.id}
                                            className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
                                        >
                                            <div className="flex justify-between items-start mb-2">
                                                <div className="font-bold text-lg text-gray-800 group-hover:text-purple-700 transition-colors">{win.content.description}</div>
                                                <div className="text-yellow-400 text-sm bg-yellow-50 px-2 py-1 rounded-lg border border-yellow-100">{'⭐'.repeat(win.content.rating)}</div>
                                            </div>
                                            <p className="text-sm text-gray-500 mb-3 font-medium">With: <span className="text-gray-900">{win.content.person}</span></p>
                                            <p className="text-gray-700 bg-purple-50/50 p-3 rounded-lg border border-purple-100/50 italic">{win.content.outcome}</p>
                                            <p className="text-xs text-gray-400 mt-3 font-bold uppercase tracking-wider">{new Date(win.created_at).toLocaleString()}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === TABS.QUOTES && (
                            <div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setShowQuoteModal(true)}
                                    className="w-full py-4 border-2 border-dashed border-gray-300 rounded-2xl text-gray-500 font-bold hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50 transition mb-6 flex items-center justify-center gap-2"
                                >
                                    <span>➕</span> Save Quote
                                </motion.button>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {getFilteredWins('quote').map(win => (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            key={win.id}
                                            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between h-full hover:shadow-lg transition-all relative overflow-hidden"
                                        >
                                            <div className="absolute top-0 left-0 text-6xl text-indigo-50 font-serif transform -translate-x-2 -translate-y-4">"</div>
                                            <p className="text-lg italic text-gray-800 mb-6 relative z-10 leading-relaxed">"{win.content.text}"</p>
                                            <div className="relative z-10 border-t border-gray-100 pt-4">
                                                {win.content.author && <p className="text-sm font-bold text-indigo-600 uppercase tracking-wider">— {win.content.author}</p>}
                                                <p className="text-[10px] text-gray-400 mt-1 font-bold">{new Date(win.created_at).toLocaleDateString()}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
}
