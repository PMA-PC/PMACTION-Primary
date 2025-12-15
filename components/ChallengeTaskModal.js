import React, { useState } from 'react';
import { applyBionicReading } from '../lib/utils/textFormatting';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChallengeTaskModal({ isOpen, onClose, task, challengeTitle, onComplete }) {
    const [isCompleted, setIsCompleted] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [difficulty, setDifficulty] = useState(3); // 1-5 scale

    // Reset state when task changes or modal opens
    React.useEffect(() => {
        if (isOpen) {
            setIsCompleted(false);
            setUserInput('');
            setDifficulty(3);
        }
    }, [isOpen, task]);

    if (!isOpen || !task) return null;

    const handleComplete = () => {
        setIsCompleted(true);
        setTimeout(() => {
            onComplete({ ...task, userInput, difficulty });
            onClose();
        }, 1500);
    };

    // Render Input Section based on Task Type
    const renderInteraction = () => {
        if (task.type === 'journal' || task.type === 'reflection') {
            return (
                <div className="space-y-4">
                    <label className="block text-sm font-bold text-gray-400 uppercase tracking-wide">
                        Your Response
                    </label>
                    <textarea
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Write your thoughts here..."
                        className="w-full h-32 bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-all"
                    />
                </div>
            );
        }
        if (task.type === 'timer' || task.type === 'timer_multi') {
            return (
                <div className="space-y-4 text-center">
                    <p className="text-gray-300">Set your timer for <b>{task.duration || 15} minutes</b>.</p>
                    <div className="w-full bg-white/10 rounded-xl p-4 border border-white/20">
                        <span className="text-2xl">⏱️ Ready to Focus?</span>
                    </div>
                </div>
            );
        }
        // Default action check
        return (
            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl border border-white/20">
                <input
                    type="checkbox"
                    className="w-6 h-6 rounded border-gray-600 text-green-500 focus:ring-green-500 bg-gray-700"
                    onChange={(e) => setUserInput(e.target.checked ? 'Completed' : '')}
                />
                <span className="text-gray-200 font-medium">I have completed this action.</span>
            </div>
        );
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
                                <span className="text-xs font-bold tracking-[0.2em] text-green-400 uppercase">Active Task</span>
                            </div>
                            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-widest">{challengeTitle}</h2>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                        >
                            <span className="sr-only">Close</span>
                            ✕
                        </button>
                    </div>

                    {/* Main Scrollable Content */}
                    <div className="flex-1 overflow-y-auto relative z-10">
                        <div className="max-w-3xl mx-auto p-6 md:p-12 pb-32">

                            {/* Task Title */}
                            <motion.h1
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl font-black mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
                            >
                                {task.title}
                            </motion.h1>

                            {/* Info Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Type</div>
                                    <div className="font-bold text-indigo-400 capitalize">{task.type}</div>
                                </div>
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Reward</div>
                                    <div className="font-bold text-yellow-400">{task.xp} XP</div>
                                </div>
                            </div>

                            {/* Content Section (Why it's important) */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="prose prose-invert prose-lg max-w-none mb-12"
                            >
                                {task.content ? (
                                    <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                                        {task.content.split('\n\n').map((paragraph, idx) => (
                                            <p key={idx}>{applyBionicReading(paragraph)}</p>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="p-6 rounded-2xl bg-yellow-900/20 border border-yellow-700/50 text-yellow-200">
                                        <p className="text-lg">{task.description}</p>
                                    </div>
                                )}
                            </motion.div>

                            <hr className="border-white/10 mb-10" />

                            {/* User Interaction Section */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="space-y-8"
                            >
                                {renderInteraction()}

                                {/* Difficulty Slider */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-400 uppercase tracking-wide mb-4">
                                        How challenging was this? (1 = Easy, 5 = Hard)
                                    </label>
                                    <input
                                        type="range"
                                        min="1"
                                        max="5"
                                        value={difficulty}
                                        onChange={(e) => setDifficulty(e.target.value)}
                                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                                    />
                                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                                        <span>Just right</span>
                                        <span>Very Hard</span>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    onClick={handleComplete}
                                    disabled={isCompleted || (task.type === 'journal' && userInput.length < 5)}
                                    className={`w-full py-4 text-lg font-bold rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2
                                        ${isCompleted
                                            ? 'bg-green-500 text-white cursor-default'
                                            : 'bg-white text-gray-900 hover:bg-gray-100 hover:scale-[1.02]'
                                        }
                                        disabled:opacity-50 disabled:cursor-not-allowed
                                    `}
                                >
                                    {isCompleted ? (
                                        <>
                                            <span className="text-2xl">🎉</span> Task Complete!
                                        </>
                                    ) : (
                                        <>
                                            <span>Complete Task</span>
                                            <span>→</span>
                                        </>
                                    )}
                                </button>
                            </motion.div>

                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
