import React, { useState } from 'react';
import GeminiDeepDive from './GeminiDeepDive';
import { applyBionicReading } from '../lib/utils/textFormatting';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChallengeTaskModal({ isOpen, onClose, task, challengeTitle, onComplete }) {
    const [isCompleted, setIsCompleted] = useState(false);

    if (!isOpen || !task) return null;

    const handleComplete = () => {
        setIsCompleted(true);
        setTimeout(() => {
            onComplete(task);
            onClose();
        }, 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex flex-col bg-gray-950 text-white overflow-hidden"
                >
                    {/* Background Ambient Glow */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-indigo-900/20 blur-[100px] pointer-events-none" />

                    {/* Header Bar */}
                    <div className="relative z-10 flex items-center justify-between p-6 border-b border-white/10 bg-gray-900/50 backdrop-blur-md">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                <span className="text-xs font-bold tracking-[0.2em] text-green-400 uppercase">Focus Mode Active</span>
                            </div>
                            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-widest">{challengeTitle}</h2>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                        >
                            <span className="sr-only">Close Focus Mode</span>
                            ✕
                        </button>
                    </div>

                    {/* Main Scrollable Content */}
                    <div className="flex-1 overflow-y-auto relative z-10">
                        <div className="max-w-3xl mx-auto p-6 md:p-12">

                            {/* Task Title */}
                            <motion.h1
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl font-black mb-8 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
                            >
                                {task.title}
                            </motion.h1>

                            {/* Info Grid */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
                            >
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Type</div>
                                    <div className="font-bold text-indigo-400 capitalize">{task.type}</div>
                                </div>
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Reward</div>
                                    <div className="font-bold text-yellow-400">{task.xp} XP</div>
                                </div>
                            </motion.div>

                            {/* Bionic Reading Content */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="prose prose-invert prose-lg max-w-none mb-16"
                            >
                                {task.content ? (
                                    <div className="space-y-6 text-gray-300 leading-relaxed text-xl">
                                        {task.content.split('\n\n').map((paragraph, idx) => (
                                            <p key={idx}>{applyBionicReading(paragraph)}</p>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="p-6 rounded-2xl bg-yellow-900/20 border border-yellow-700/50 text-yellow-200">
                                        <p className="font-bold mb-2">Incoming Transmission...</p>
                                        <p className="text-lg">{task.description}</p>
                                        <p className="text-sm mt-4 opacity-70 italic">Full deep dive content loading...</p>
                                    </div>
                                )}
                            </motion.div>

                            {/* Deep Dive Module - styled for dark mode needed? Yes, checking compatibility. */}
                            <div className="border-t border-white/10 pt-12">
                                <GeminiDeepDive currentDayContent={{ title: task.title, intro: task.description }} darkMode={true} />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="relative z-20 p-6 border-t border-white/10 bg-gray-900/80 backdrop-blur-xl">
                        <div className="max-w-3xl mx-auto">
                            {!isCompleted ? (
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleComplete}
                                    className="w-full py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-black text-xl rounded-2xl shadow-[0_0_20px_rgba(79,70,229,0.5)] hover:shadow-[0_0_40px_rgba(79,70,229,0.6)] transition-all flex items-center justify-center gap-3"
                                >
                                    <span>COMPLETE MISSION</span>
                                    <span className="text-indigo-200 text-lg">+{task.xp} XP</span>
                                </motion.button>
                            ) : (
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="w-full py-5 bg-green-500/20 border border-green-500/50 text-green-400 font-black text-xl rounded-2xl flex items-center justify-center gap-3"
                                >
                                    <span className="text-2xl">🎉</span>
                                    <span>MISSION ACCOMPLISHED</span>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
