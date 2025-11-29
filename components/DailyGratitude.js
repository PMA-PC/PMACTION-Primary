import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../lib/context';

const AI_PROMPTS = [
    "What made you smile today?",
    "Who is someone you are thankful for and why?",
    "What is a small win you had recently?",
    "What is something in nature you appreciate?",
    "What is a challenge you overcame that you're proud of?",
    "Today, I am happy that I was able to wake up and _____.",
    "I am thankful that _____.",
    "What is a comfort food or drink you enjoy?",
    "Recall a happy memory from this week.",
    "What is a skill or talent you have that you appreciate?"
];

export default function DailyGratitude({ onClose }) {
    const { saveDailyLog, user } = useApp();
    const [entry, setEntry] = useState('');
    const [prompts, setPrompts] = useState([]);
    const [isSaving, setIsSaving] = useState(false);
    const [saved, setSaved] = useState(false);

    const handleGetHelp = () => {
        // Randomly select 2 unique prompts
        const shuffled = [...AI_PROMPTS].sort(() => 0.5 - Math.random());
        setPrompts(shuffled.slice(0, 2));
    };

    const handleSave = async () => {
        if (!entry.trim()) return;
        setIsSaving(true);
        try {
            const today = new Date().toISOString().split('T')[0];
            // We'll append to daily log. 
            // Note: In a real app, we might want to fetch existing log first to not overwrite other fields,
            // but saveDailyLog usually handles upsert/merge logic or we rely on the backend.
            // Assuming saveDailyLog merges or we are just saving this specific field if the context supports it.
            // For now, let's assume we can pass this object.

            await saveDailyLog(today, {
                gratitude_entry: entry,
                gratitude_timestamp: new Date().toISOString()
            });

            setSaved(true);
            setTimeout(() => {
                if (onClose) onClose();
            }, 1500);
        } catch (error) {
            console.error("Failed to save gratitude:", error);
            alert("Failed to save. Please try again.");
        } finally {
            setIsSaving(false);
        }
    };

    if (saved) {
        return (
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-5xl mb-4"
                >
                    🙏
                </motion.div>
                <h3 className="text-2xl font-bold text-teal-600 mb-2">Gratitude Saved!</h3>
                <p className="text-gray-600">Starting your day with positivity.</p>
            </div>
        );
    }

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full mx-auto border border-teal-100">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <span className="text-2xl">☀️</span> Daily Gratitude
                </h3>
                {onClose && (
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        ✕
                    </button>
                )}
            </div>

            <p className="text-gray-600 mb-4 text-sm">
                Take a moment to reflect on what you are grateful for today.
            </p>

            <textarea
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
                placeholder="I am grateful for..."
                className="w-full h-32 p-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none mb-4 text-gray-700"
            />

            <AnimatePresence>
                {prompts.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mb-4 overflow-hidden"
                    >
                        <p className="text-xs font-bold text-teal-600 uppercase tracking-wide mb-2">Try one of these:</p>
                        <div className="space-y-2">
                            {prompts.map((prompt, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setEntry(prev => prev + (prev ? "\n" : "") + prompt + " ")}
                                    className="block w-full text-left p-3 bg-teal-50 hover:bg-teal-100 text-teal-800 text-sm rounded-lg transition-colors"
                                >
                                    {prompt}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex gap-3">
                <button
                    onClick={handleGetHelp}
                    className="flex-1 py-2 px-4 bg-indigo-50 text-indigo-600 font-medium rounded-lg hover:bg-indigo-100 transition-colors text-sm flex items-center justify-center gap-2"
                >
                    <span>🤖</span> Need Help?
                </button>
                <button
                    onClick={handleSave}
                    disabled={!entry.trim() || isSaving}
                    className={`flex-1 py-2 px-4 font-bold rounded-lg text-white transition-colors ${!entry.trim() || isSaving
                            ? 'bg-gray-300 cursor-not-allowed'
                            : 'bg-teal-600 hover:bg-teal-700 shadow-md'
                        }`}
                >
                    {isSaving ? 'Saving...' : 'Save Entry'}
                </button>
            </div>
        </div>
    );
}
