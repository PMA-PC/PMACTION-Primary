import React, { useState, useEffect, useRef } from 'react';

export default function FocusTimerModal({ onClose, onComplete }) {
    const [duration, setDuration] = useState(15 * 60); // Default 15 minutes
    const [timeLeft, setTimeLeft] = useState(15 * 60);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        if (isActive && !isPaused && timeLeft > 0) {
            timerRef.current = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            clearInterval(timerRef.current);
            setIsActive(false);
            if (onComplete) onComplete(Math.floor(duration / 60)); // Pass minutes completed
        }

        return () => clearInterval(timerRef.current);
    }, [isActive, isPaused, timeLeft, onComplete, duration]);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePause = () => {
        setIsPaused(true);
    };

    const handleReset = () => {
        setIsActive(false);
        setIsPaused(false);
        setTimeLeft(duration);
    };

    const handleDurationChange = (minutes) => {
        const seconds = minutes * 60;
        setDuration(seconds);
        setTimeLeft(seconds);
        setIsActive(false);
        setIsPaused(false);
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const progress = ((duration - timeLeft) / duration) * 100;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-fade-in-up flex flex-col items-center p-8 border border-orange-100">

                {/* Header */}
                <div className="text-center mb-8">
                    <div className="text-6xl mb-2">🧘</div>
                    <h2 className="text-3xl font-bold text-gray-800">Deep Focus</h2>
                    <p className="text-orange-500 font-medium">Zone in and flow.</p>
                </div>

                {/* Timer Display */}
                <div className="relative w-64 h-64 flex items-center justify-center mb-8">
                    {/* Ring Background */}
                    <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                        <circle
                            cx="128"
                            cy="128"
                            r="120"
                            stroke="currentColor"
                            strokeWidth="12"
                            fill="transparent"
                            className="text-gray-100"
                        />
                        <circle
                            cx="128"
                            cy="128"
                            r="120"
                            stroke="currentColor"
                            strokeWidth="12"
                            fill="transparent"
                            strokeDasharray={2 * Math.PI * 120}
                            strokeDashoffset={2 * Math.PI * 120 * (1 - progress / 100)}
                            className="text-orange-500 transition-all duration-1000 ease-linear"
                            strokeLinecap="round"
                        />
                    </svg>

                    <div className="text-5xl font-mono font-bold text-gray-800 z-10">
                        {formatTime(timeLeft)}
                    </div>
                </div>

                {/* Controls */}
                <div className="flex gap-4 mb-8">
                    {!isActive ? (
                        <button
                            onClick={handleStart}
                            className="px-8 py-3 bg-orange-500 text-white rounded-full font-bold text-lg hover:bg-orange-600 shadow-lg hover:scale-105 transition-all"
                        >
                            {isPaused ? 'Resume' : 'Start Focus'}
                        </button>
                    ) : (
                        isPaused ? (
                            <button
                                onClick={handleStart}
                                className="px-8 py-3 bg-orange-500 text-white rounded-full font-bold text-lg hover:bg-orange-600 shadow-lg"
                            >
                                Resume
                            </button>
                        ) : (
                            <button
                                onClick={handlePause}
                                className="px-8 py-3 bg-orange-100 text-orange-600 rounded-full font-bold text-lg hover:bg-orange-200"
                            >
                                Pause
                            </button>
                        )
                    )}

                    <button
                        onClick={handleReset}
                        className="px-4 py-3 text-gray-400 hover:text-gray-600 font-bold"
                        aria-label="Reset Timer"
                    >
                        Reset
                    </button>
                </div>

                {/* Duration Presets */}
                {!isActive && (
                    <div className="flex flex-col items-center mb-6 w-full">
                        <div className="flex gap-2 mb-4">
                            {[10, 15, 25, 45].map(mins => (
                                <button
                                    key={mins}
                                    onClick={() => handleDurationChange(mins)}
                                    className={`px-3 py-1 rounded-lg text-sm font-bold border transition-colors ${duration === mins * 60 ? 'bg-orange-50 border-orange-500 text-orange-600' : 'bg-transparent border-gray-200 text-gray-500 hover:border-orange-300'}`}
                                >
                                    {mins}m
                                </button>
                            ))}
                        </div>

                        {/* Soundscape Toggle */}
                        <div className="w-full max-w-xs bg-gray-50 rounded-xl p-3 flex items-center justify-between border border-gray-100">
                            <div className="flex items-center gap-2">
                                <div className="bg-white p-2 rounded-full shadow-sm text-lg">🎧</div>
                                <div className="text-left">
                                    <div className="text-xs font-bold text-gray-800">8D Focus Audio</div>
                                    <div className="text-[10px] text-gray-500">Headphones Recommended</div>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                            </label>
                        </div>
                    </div>
                )}

                <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600 text-sm font-medium mt-2"
                >
                    Close
                </button>

            </div>
        </div>
    );
}
