import React, { useState, useEffect, useRef } from 'react';

const EXERCISE_DURATION = 300; // 5 minutes in seconds
const STEPS = [
    { name: 'Get Ready', duration: 5, instruction: "Find a comfortable position and gently close your eyes." },
    { name: 'Inhale', duration: 4, instruction: "Breathe in slowly through your nose..." },
    { name: 'Hold', duration: 7, instruction: "Hold your breath..." },
    { name: 'Exhale', duration: 8, instruction: "...and breathe out slowly through your mouth." },
];

export const GuidedExerciseModal = ({ onClose, exerciseTitle }) => {
    const [timeLeft, setTimeLeft] = useState(EXERCISE_DURATION);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [stepTimeLeft, setStepTimeLeft] = useState(STEPS[0].duration);

    const [isPlaying, setIsPlaying] = useState(false);
    const audioContextRef = useRef(null);
    const oscillatorRef = useRef(null);

    // Main timer for the whole session
    useEffect(() => {
        if (timeLeft <= 0) {
            onClose();
            return;
        }
        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft, onClose]);

    // Timer for each step in the breathing cycle
    useEffect(() => {
        if (stepTimeLeft <= 0) {
            const nextStepIndex = currentStepIndex === 0 ? 1 : ((currentStepIndex) % (STEPS.length - 1)) + 1;
            setCurrentStepIndex(nextStepIndex);
            setStepTimeLeft(STEPS[nextStepIndex].duration);
        }

        const stepTimer = setInterval(() => {
            setStepTimeLeft(prev => prev - 1);
        }, 1000);

        return () => clearInterval(stepTimer);
    }, [stepTimeLeft, currentStepIndex]);

    const toggleAudio = () => {
        if (isPlaying) {
            oscillatorRef.current?.stop();
            audioContextRef.current?.close().then(() => {
                audioContextRef.current = null;
            });
            setIsPlaying(false);
        } else {
            const context = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = context.createOscillator();
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(100, context.currentTime); // Low hum

            const gainNode = context.createGain();
            gainNode.gain.setValueAtTime(0.1, context.currentTime); // Low volume

            oscillator.connect(gainNode);
            gainNode.connect(context.destination);

            oscillator.start();
            oscillatorRef.current = oscillator;
            audioContextRef.current = context;
            setIsPlaying(true);
        }
    };

    // Cleanup audio on unmount
    useEffect(() => {
        return () => {
            if (oscillatorRef.current) oscillatorRef.current.stop();
            if (audioContextRef.current) audioContextRef.current.close();
        }
    }, []);

    const progress = ((EXERCISE_DURATION - timeLeft) / EXERCISE_DURATION) * 100;
    const currentStep = STEPS[currentStepIndex];

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-white rounded-xl p-8 max-w-lg w-full animate-fade-in text-center shadow-2xl border border-gray-100">
                <h2 className="text-3xl font-bold mb-4 text-brand-primary">{exerciseTitle || 'Guided Breathing'}</h2>
                <div className="my-8 h-32 flex flex-col justify-center">
                    <p className="text-6xl font-black text-brand-primary mb-2 transition-all duration-1000 transform">{stepTimeLeft}</p>
                    <p className="text-xl text-gray-700 font-medium animate-pulse">{currentStep.instruction}</p>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3 mb-8 overflow-hidden">
                    <div className="bg-gradient-to-r from-brand-primary to-green-400 h-3 rounded-full transition-all duration-1000 ease-linear" style={{ width: `${progress}%` }}></div>
                </div>

                <div className="flex justify-center items-center gap-6">
                    <div className="flex flex-col items-center gap-3">
                        <button onClick={toggleAudio} className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all shadow-md ${isPlaying ? 'bg-indigo-600 text-white scale-105 shadow-indigo-200' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`} aria-label={isPlaying ? "Stop audio" : "Play calming audio"}>
                            {isPlaying ? (
                                <>
                                    <span className="animate-pulse">🔊</span>
                                    <span className="font-bold">Playing 8D Audio</span>
                                </>
                            ) : (
                                <>
                                    <span>🎧</span>
                                    <span className="font-bold">Enable 8D Audio</span>
                                </>
                            )}
                        </button>
                        {!isPlaying && <span className="text-xs text-brand-primary font-medium opacity-70">Headphones recommended for 8D effect</span>}
                    </div>
                    <button onClick={onClose} className="bg-gray-800 text-white px-8 py-3 rounded-full font-bold hover:bg-gray-900 transition-colors shadow-lg">
                        End Exercise
                    </button>
                </div>
            </div>
        </div>
    );
};
