// pages/onboarding/goals.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useOnboarding } from '../../context/OnboardingContext';

const GOALS = [
    {
        id: 'habits',
        icon: '🎯',
        title: 'Build Better Habits',
        description: 'Create positive routines that stick'
    },
    {
        id: 'wellbeing',
        icon: '🧠',
        title: 'Improve Mental Wellbeing',
        description: 'Enhance your overall mental health'
    },
    {
        id: 'stress',
        icon: '😌',
        title: 'Reduce Stress and Anxiety',
        description: 'Find calm in daily life'
    },
    {
        id: 'emotional-intelligence',
        icon: '💡',
        title: 'Better Understand Emotional Intelligence',
        description: 'Develop self-awareness and empathy'
    },
    {
        id: 'gratitude',
        icon: '🙏',
        title: 'Increase Gratitude',
        description: 'Cultivate appreciation and positivity'
    },
    {
        id: 'mindfulness',
        icon: '🧘',
        title: 'Practice Mindfulness',
        description: 'Live more in the present moment'
    },
    {
        id: 'build-relationships',
        icon: '❤️',
        title: 'Build Better Relationships',
        description: 'Strengthen connections with others'
    },
    {
        id: 'life-skills',
        icon: '🌱',
        title: 'Improve Life Skills',
        description: 'Build practical skills for daily living'
    },
    {
        id: 'relationships',
        icon: '🤝',
        title: 'Better Understanding of Mental Health',
        description: 'For partner, work, or friends'
    },
    {
        id: 'therapy-notes',
        icon: '📝',
        title: 'Notes for You or Your Therapist',
        description: 'Track insights and progress'
    },
    {
        id: 'self-care',
        icon: '🛁',
        title: 'Prioritize Self-Care',
        description: 'Make time for yourself'
    }
];

const GoalsPage = () => {
    const router = useRouter();
    const { data, update } = useOnboarding();
    const [selectedGoals, setSelectedGoals] = useState(data.goals || []);

    const toggleGoal = (goalId) => {
        setSelectedGoals(prev => {
            if (prev.includes(goalId)) {
                return prev.filter(id => id !== goalId);
            } else {
                return [...prev, goalId];
            }
        });
    };

    const handleContinue = () => {
        update({ goals: selectedGoals });
        router.push('/onboarding/personal-details');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-teal-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <Head>
                <title>What Brings You Here? | PMAction</title>
                <meta name="description" content="Select your goals for mental wellness" />
            </Head>

            {/* Animated Background Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"
                    animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ top: '10%', left: '10%' }}
                />
                <motion.div
                    className="absolute w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"
                    animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ top: '60%', right: '10%' }}
                />
                <motion.div
                    className="absolute w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"
                    animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ bottom: '10%', left: '50%' }}
                />
            </div>

            <div className="w-full max-w-6xl space-y-8 relative z-10">
                {/* Progress Steps */}
                <div className="flex justify-center space-x-4 mb-8">
                    {[1, 2, 3, 4].map((step) => (
                        <div
                            key={step}
                            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${step === 1
                                ? 'bg-teal-600 text-white shadow-lg scale-110'
                                : 'bg-white text-gray-400 border-2 border-gray-200'
                                }`}
                        >
                            {step}
                        </div>
                    ))}
                </div>

                <div className="text-center mb-12">
                    <motion.h1
                        className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        What Brings You Here?
                    </motion.h1>
                    <motion.p
                        className="text-2xl font-bold text-teal-600 italic mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        "Own Your Perfect Imperfections"
                    </motion.p>
                    <motion.p
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Select all the goals that resonate with you. We'll personalize your experience based on what matters most.
                    </motion.p>
                </div>

                {/* Goals Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    {GOALS.map((goal, index) => {
                        const isSelected = selectedGoals.includes(goal.id);
                        return (
                            <motion.button
                                key={goal.id}
                                onClick={() => toggleGoal(goal.id)}
                                className={`relative p-6 rounded-2xl border-2 text-left h-full flex flex-col transition-all duration-300 ${isSelected
                                    ? 'bg-gradient-to-br from-teal-50 to-white border-teal-500 shadow-xl shadow-teal-100/50 transform scale-[1.02]'
                                    : 'bg-white border-gray-100 hover:border-teal-200 hover:shadow-lg hover:-translate-y-1'
                                    }`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* Selection Indicator */}
                                <div className={`absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${isSelected ? 'bg-teal-500 scale-100' : 'bg-gray-100 scale-0'}`}>
                                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>

                                <div className="text-4xl mb-4 p-3 bg-gray-50 rounded-xl w-fit">{goal.icon}</div>
                                <h3 className={`text-lg font-bold mb-2 transition-colors ${isSelected ? 'text-teal-800' : 'text-gray-900'}`}>{goal.title}</h3>
                                <p className="text-sm text-gray-500 font-medium leading-relaxed">{goal.description}</p>
                            </motion.button>
                        );
                    })}
                </motion.div>

                {/* Navigation Buttons - Sticky Footer */}
                <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-gray-200 flex items-center justify-between z-50">
                    <button
                        onClick={() => router.back()}
                        className="text-gray-500 font-bold hover:text-gray-700 px-4"
                    >
                        Back
                    </button>
                    <motion.button
                        onClick={handleContinue}
                        disabled={selectedGoals.length === 0}
                        className={`px-8 py-3 rounded-xl font-bold shadow-lg transition-all duration-300 ${selectedGoals.length > 0
                            ? 'bg-gradient-to-r from-teal-600 to-teal-500 text-white hover:shadow-teal-200/50 hover:shadow-xl hover:translate-y-[-2px]'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            }`}
                        whileTap={selectedGoals.length > 0 ? { scale: 0.98 } : {}}
                    >
                        {selectedGoals.length > 0 ? `Continue (${selectedGoals.length})` : 'Select a Goal'}
                    </motion.button>
                </div>
                {/* Spacer for sticky footer */}
                <div className="h-24"></div>
            </div>
        </div>
    );
};

export default GoalsPage;
