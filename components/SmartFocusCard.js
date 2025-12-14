import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export default function SmartFocusCard({ dailyStatus, onAction }) {
    const router = useRouter();
    const [timeOfDay, setTimeOfDay] = useState('morning'); // morning, midday, evening

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) setTimeOfDay('morning');
        else if (hour < 17) setTimeOfDay('midday');
        else setTimeOfDay('evening');
    }, []);

    // Logic to determine what to show
    // If the "primary" task for the time of day is done, show the next one.
    let currentFocus = 'morning';

    if (timeOfDay === 'morning') {
        if (dailyStatus.win) currentFocus = 'midday'; // If morning win done, move to midday
    }
    if (timeOfDay === 'midday' || currentFocus === 'midday') {
        if (dailyStatus.selfCare) currentFocus = 'evening'; // If self-care done, move to evening
    }
    if (timeOfDay === 'evening' || currentFocus === 'evening') {
        if (dailyStatus.mood) currentFocus = 'complete'; // If mood done, all done!
    }

    // Content Definitions
    const content = {
        morning: {
            title: 'Morning Win',
            subtitle: 'Start small to win big.',
            icon: '🌅',
            actionLabel: 'Log a Small Win',
            action: () => onAction('win'),
            color: 'from-orange-400 to-pink-500'
        },
        midday: {
            title: 'Midday Reset',
            subtitle: 'Take a moment for yourself.',
            icon: '☀️',
            actionLabel: 'Do Self-Care',
            action: () => onAction('self_care'),
            color: 'from-blue-400 to-teal-400'
        },
        evening: {
            title: 'Evening Reflection',
            subtitle: 'How was your day?',
            icon: '🌙',
            actionLabel: 'Check Mood',
            action: () => onAction('mood'),
            color: 'from-indigo-500 to-purple-600'
        },
        complete: {
            title: 'All Caught Up!',
            subtitle: 'You are crushing it today.',
            icon: '🎉',
            actionLabel: 'View Reports',
            action: () => router.push('/report'),
            color: 'from-green-400 to-emerald-600'
        }
    };

    const activeContent = content[currentFocus] || content.morning;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            className={`relative overflow-hidden rounded-2xl shadow-2xl text-white p-6 border border-white/20 bg-gradient-to-br ${activeContent.color}`}
        >
            <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] z-0"></div>
            <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h2 className="text-2xl font-bold mb-1 flex items-center gap-2 drop-shadow-md">
                            {activeContent.icon} {activeContent.title}
                        </h2>
                        <p className="text-white/90 text-sm font-medium">{activeContent.subtitle}</p>
                    </div>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md border border-white/30 shadow-sm">
                        {currentFocus === 'complete' ? '✨ DONE' : '🎯 FOCUS'}
                    </span>
                </div>

                <button
                    onClick={activeContent.action}
                    className="w-full py-4 bg-white/90 text-gray-900 font-bold rounded-xl hover:bg-white transition-all shadow-lg flex items-center justify-center gap-2 group"
                >
                    {activeContent.actionLabel}
                    <span className="group-hover:translate-x-1 transition-transform">➜</span>
                </button>
            </div>
        </motion.div>
    );
}
