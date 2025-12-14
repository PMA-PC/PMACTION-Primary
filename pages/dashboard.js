import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useApp } from '../lib/context';
import { supabase } from '../lib/supabaseClient';
import { motion } from 'framer-motion';
import AddWinModal from '../components/AddWinModal';
import LevelUpModal from '../components/LevelUpModal';
import RecommendationWidget from '../components/RecommendationWidget';
import SmartFocusCard from '../components/SmartFocusCard';
import SelfCareHub from '../components/SelfCareHub';
import ActiveChallengeCard from '../components/ActiveChallengeCard';
import CrisisModal from '../components/CrisisModal';
import DailyQuote from '../components/DailyQuote';
import SmartInsight from '../components/SmartInsight';
import TimeDurationCards from '../components/TimeDurationCards';
import ContentRecommendationCard from '../components/ContentRecommendationCard';
import { AICoachModal } from '../components/AICoachModal';
// New Interactive Modals
import { GuidedExerciseModal } from '../components/GuidedExerciseModal';
import FocusTimerModal from '../components/FocusTimerModal';

const DashboardPage = () => {
    const router = useRouter();
    const { user, stats, dailyLogs, wins, userProfile, addWin, activeChallenge } = useApp();
    const [isWinModalOpen, setIsWinModalOpen] = useState(false);
    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);
    const [isSelfCareHubOpen, setIsSelfCareHubOpen] = useState(false);
    const [isCrisisModalOpen, setIsCrisisModalOpen] = useState(false);
    const [isAICoachOpen, setIsAICoachOpen] = useState(false);

    // Quick Action States
    const [isExerciseOpen, setIsExerciseOpen] = useState(false);
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [isFocusTimerOpen, setIsFocusTimerOpen] = useState(false);

    const [newLevel, setNewLevel] = useState(1);
    const [modalTab, setModalTab] = useState(null); // 'journal', 'self_care', etc.
    const [greeting, setGreeting] = useState({ text: 'Welcome back', tip: 'Ready to focus?' });

    // Time-aware Smart Greeting Logic
    useEffect(() => {
        const updateGreeting = () => {
            const hour = new Date().getHours();
            if (hour >= 5 && hour < 12) {
                setGreeting({ text: 'Good Morning', tip: 'High focus window. Tackle the big rock.' });
            } else if (hour >= 12 && hour < 17) {
                setGreeting({ text: 'Good Afternoon', tip: 'Energy dip? Try a 10-min reset.' });
            } else if (hour >= 17 && hour < 22) {
                setGreeting({ text: 'Good Evening', tip: 'Wind down and reflect on wins.' });
            } else {
                setGreeting({ text: 'Late Night', tip: 'Sleep is the best productivity tool.' });
            }
        };
        updateGreeting();
        const interval = setInterval(updateGreeting, 60000); // Update every minute
        return () => clearInterval(interval);
    }, []);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/login');
    };

    const handleAddWin = async (winData) => {
        const result = await addWin(winData);
        if (result?.success) {
            if (result.leveledUp) {
                setNewLevel(result.newLevel);
                setIsLevelUpModalOpen(true);
            }
        }
        return result;
    };

    const handleTimeCardAction = (actionType, payload) => {
        if (actionType === 'one_min') {
            // Setup Payload for Guided Exercise
            setSelectedExercise({
                name: payload.title,
                instruction: payload.desc // Map desc to instruction to match internal format if needed
            });
            setIsExerciseOpen(true);
        } else if (actionType === 'journal') {
            setModalTab('journal');
            setIsWinModalOpen(true);
        } else if (actionType === 'focus') {
            setIsFocusTimerOpen(true);
        }
    };

    const handleFocusComplete = async (minutes) => {
        setIsFocusTimerOpen(false);
        // Log the win automatically
        await handleAddWin({
            type: 'activity',
            label: 'Deep Focus Session',
            icon: '🧘',
            xp: minutes * 2, // 2 XP per minute
            benefit: `Completed ${minutes} minutes of deep focus.`
        });
        // Maybe show a specific success toast/modal here
    };

    const handleSelfCareLog = async (activity) => {
        const winData = {
            type: 'journal', // Log as journal entry for consistency
            win_type: 'self_care',
            content: `Completed self-care activity: ${activity.label}`,
            label: activity.label,
            icon: '🧘',
            xp: activity.xp
        };
        await handleAddWin(winData);
        setIsSelfCareHubOpen(false);
    };

    // Calculate progress to next level
    const currentLevel = userProfile?.level || 1;
    const currentXp = userProfile?.xp || 0;
    const progressPercent = Math.min(100, (currentXp % 100) / 100 * 100);

    return (
        <div className="min-h-screen mesh-gradient-bg pb-20 md:pb-0">
            <Head>
                <title>Dashboard | PMAction</title>
                <meta name="description" content="Your personal dashboard for mental well-being" />
            </Head>

            <AddWinModal
                isOpen={isWinModalOpen}
                onClose={() => {
                    setIsWinModalOpen(false);
                    setModalTab(null);
                }}
                onAddWin={handleAddWin}
                initialTab={modalTab}
            />

            <SelfCareHub
                isOpen={isSelfCareHubOpen}
                onClose={() => setIsSelfCareHubOpen(false)}
                onLogActivity={handleSelfCareLog}
            />

            <LevelUpModal
                isOpen={isLevelUpModalOpen}
                onClose={() => setIsLevelUpModalOpen(false)}
                newLevel={newLevel}
                rewards={{ gold: 50 }}
            />

            {isCrisisModalOpen && (
                <CrisisModal onClose={() => setIsCrisisModalOpen(false)} />
            )}

            {isAICoachOpen && (
                <AICoachModal onClose={() => setIsAICoachOpen(false)} />
            )}

            {isExerciseOpen && (
                <GuidedExerciseModal
                    exerciseTitle={selectedExercise?.name}
                    onClose={() => setIsExerciseOpen(false)}
                />
            )}

            {isFocusTimerOpen && (
                <FocusTimerModal
                    onClose={() => setIsFocusTimerOpen(false)}
                    onComplete={handleFocusComplete}
                />
            )}

            {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}

            {/* Navigation (Liquid Glass) */}
            <nav className="glass-panel sticky top-0 z-50 mb-8 rounded-b-2xl mx-4 mt-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold text-blue-600">PMAction</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="hidden md:flex items-center mr-4 bg-blue-50 px-3 py-1 rounded-full">
                                <span className="text-sm font-bold text-blue-800 mr-2">Level {currentLevel}</span>
                                <div className="w-24 h-2 bg-blue-200 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-blue-500 transition-all duration-500"
                                        style={{ width: `${progressPercent}%` }}
                                    />
                                </div>
                            </div>
                            <button
                                onClick={() => setIsFocusMode(!isFocusMode)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all transform hover:scale-105 shadow-sm border ${isFocusMode
                                        ? 'bg-blue-600 text-white border-blue-600 ring-2 ring-blue-200'
                                        : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                                    }`}
                            >
                                {isFocusMode ? (
                                    <>
                                        <span className="animate-pulse">🟢</span> Focus Mode ON
                                    </>
                                ) : (
                                    <>
                                        <span className="text-gray-400">⚪</span> Focus Mode OFF
                                    </>
                                )}
                            </button>
                            <button onClick={() => router.push('/challenges')} className="text-sm font-medium text-gray-500 hover:text-gray-700 mr-4">Challenges</button>
                            <button onClick={() => router.push('/report')} className="text-sm font-medium text-gray-500 hover:text-gray-700 mr-4">Reports</button>
                            <button onClick={() => window.location.href = '/settings'} className="text-sm font-medium text-gray-500 hover:text-gray-700 mr-4">Settings</button>
                            <button onClick={() => router.push('/advocacy')} className="text-sm font-medium text-gray-500 hover:text-gray-700 mr-4">Advocacy</button>
                            <button onClick={handleLogout} className="text-sm font-medium text-gray-500 hover:text-gray-700">Logout</button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Header: Daily Quote */}
                    <DailyQuote />

                    {/* Top Section: Navigation Buttons (2 Columns Mobile, 4 Desktop) */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
                        {/* Challenge Library (New) */}
                        {/* Challenge Library (New) */}
                        <motion.button
                            whileHover={{ scale: 1.05, rotateX: 5 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => router.push('/challenges')}
                            className="p-4 glass-panel rounded-2xl flex flex-col items-center justify-center text-center min-h-[120px] backdrop-blur-md bg-white/40 border-white/50"
                        >
                            <span className="text-4xl mb-2">🚀</span>
                            <span className="font-bold text-lg text-indigo-900">Challenge Library</span>
                        </motion.button>

                        {/* Mood Check-In */}
                        {(() => {
                            const hasMood = wins.some(w => w.label === 'Mood Check-in');
                            return (
                                <button
                                    onClick={() => {
                                        setModalTab('mood');
                                        setIsWinModalOpen(true);
                                    }}
                                    className={`p-4 bg-white border-2 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all group flex flex-col items-center justify-center text-center min-h-[120px] ${hasMood ? 'border-green-500 bg-green-50' : 'border-fuchsia-500'}`}
                                >
                                    <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">{hasMood ? '✅' : '🎭'}</span>
                                    <span className={`font-bold text-lg ${hasMood ? 'text-green-700' : 'text-fuchsia-700'}`}>{hasMood ? 'Mood Checked' : 'Check Mood'}</span>
                                </button>
                            );
                        })()}

                        {/* Self-Care */}
                        {(() => {
                            const hasSelfCare = wins.some(w => w.win_type === 'self_care');
                            return (
                                <button
                                    onClick={() => setIsSelfCareHubOpen(true)}
                                    className={`p-4 bg-white border-2 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all group flex flex-col items-center justify-center text-center min-h-[120px] ${hasSelfCare ? 'border-green-500 bg-green-50' : 'border-purple-500'}`}
                                >
                                    <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">{hasSelfCare ? '✅' : '🧘'}</span>
                                    <span className={`font-bold text-lg ${hasSelfCare ? 'text-green-700' : 'text-purple-700'}`}>{hasSelfCare ? 'Self-Care Done' : 'Self-Care'}</span>
                                </button>
                            );
                        })()}

                        {/* Advocacy & Blogs */}
                        <button
                            onClick={() => router.push('/advocacy')}
                            className="p-4 bg-indigo-50 border-2 border-indigo-500 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all group flex flex-col items-center justify-center text-center min-h-[120px]"
                        >
                            <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">📰</span>
                            <span className="font-bold text-lg text-indigo-700">Advocacy & Blogs</span>
                        </button>
                    </div>

                    {/* Main Content Grid: Gamification Stats & Active Challenge */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                        {/* Left Column: Gamification Stats */}
                        <div className="lg:col-span-2 space-y-6">

                            {/* Stats Card with Smart Greeting (Liquid Glass Hero) */}
                            <div className="glass-panel rounded-3xl p-8 relative overflow-hidden border-white/40">
                                {/* Decorative Background Element */}
                                <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-purple-400/30 to-blue-400/30 rounded-full blur-3xl"></div>

                                <div className="relative z-10 mb-8">
                                    <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-2 drop-shadow-sm">
                                        {greeting.text}, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">{userProfile?.nickname || 'User'}</span>.
                                    </h2>
                                    <p className="text-gray-600 font-medium text-lg flex items-center gap-3">
                                        <span className="inline-block w-3 h-3 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.6)] animate-pulse"></span>
                                        {greeting.tip}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="p-4 bg-white/40 rounded-2xl text-center backdrop-blur-sm border border-white/50 shadow-inner">
                                        <div className="text-3xl font-bold text-indigo-600">{currentLevel}</div>
                                        <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Level</div>
                                    </div>
                                    <div className="p-4 bg-white/40 rounded-2xl text-center backdrop-blur-sm border border-white/50 shadow-inner">
                                        <div className="text-3xl font-bold text-purple-600">{userProfile?.xp || 0}</div>
                                        <div className="text-xs font-bold text-purple-400 uppercase tracking-wider">Total XP</div>
                                    </div>
                                    <div className="p-4 bg-white/40 rounded-2xl text-center backdrop-blur-sm border border-white/50 shadow-inner">
                                        <div className="text-3xl font-bold text-orange-600">{userProfile?.streak_days || 0}</div>
                                        <div className="text-xs font-bold text-orange-400 uppercase tracking-wider">Streak</div>
                                    </div>
                                    <div className="p-4 bg-white/40 rounded-2xl text-center backdrop-blur-sm border border-white/50 shadow-inner">
                                        <div className="text-3xl font-bold text-green-600">{wins.length}</div>
                                        <div className="text-xs font-bold text-green-400 uppercase tracking-wider">Wins</div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Recommendations (Blogs/Challenges) */}
                            <ContentRecommendationCard />

                            {/* Recent Wins / History */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Victories</h2>
                                <div className="space-y-3">
                                    {wins.slice(0, 3).map((win, idx) => (
                                        <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                                            <span className="text-2xl">{win.icon || '🏆'}</span>
                                            <div>
                                                <p className="font-bold text-gray-800">{win.label}</p>
                                                <p className="text-xs text-gray-500">{new Date(win.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                            </div>
                                            <span className="ml-auto font-bold text-blue-600">+{win.xp} XP</span>
                                        </div>
                                    ))}
                                    {wins.length === 0 && (
                                        <p className="text-gray-400 text-center py-4">No wins yet today. Go get one!</p>
                                    )}
                                </div>
                            </div>

                            {/* Smart Insight (Moved to bottom of left column) */}
                            <SmartInsight onOpenCoach={() => setIsAICoachOpen(true)} />
                        </div>

                        {/* Right Column: Time Cards, Smart Focus & Active Challenge */}
                        <div className="space-y-6">
                            {/* Time Duration Cards (1, 5, 10+ min) */}
                            <TimeDurationCards
                                onAction={handleTimeCardAction}
                            />

                            <SmartFocusCard
                                dailyStatus={{
                                    win: wins.length > 0,
                                    mood: wins.some(w => w.label === 'Mood Check-in'),
                                    selfCare: wins.some(w => w.win_type === 'self_care')
                                }}
                                onAction={(action) => {
                                    if (action === 'win') setIsWinModalOpen(true);
                                    if (action === 'mood') { setModalTab('mood'); setIsWinModalOpen(true); }
                                    if (action === 'self_care') setIsSelfCareHubOpen(true);
                                }}
                            />

                            {/* Active Challenge Card (Below Smart Focus) */}
                            <ActiveChallengeCard challenge={activeChallenge} />
                        </div>
                    </div>

                    {/* Floating Action Button (Liquid Glass Ripple) */}
                    <motion.button
                        initial={{ scale: 0, rotate: 180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                            setModalTab('journal');
                            setIsWinModalOpen(true);
                        }}
                        className="fixed bottom-8 right-8 px-6 py-4 glass-panel bg-gradient-to-r from-blue-600/90 to-indigo-600/90 rounded-full shadow-[0_10px_40px_rgba(79,70,229,0.4)] flex items-center gap-3 text-white font-bold z-50 ring-4 ring-white/30 backdrop-blur-xl"
                        aria-label="Log a Win"
                    >
                        <span className="text-2xl">➕</span>
                        <span className="text-lg">PMA Log</span>
                        <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-20"></div>
                    </motion.button>
                </motion.div>
            </main>
        </div>
    );
};

export default DashboardPage;
