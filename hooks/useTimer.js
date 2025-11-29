import { useState, useEffect, useRef } from 'react';

export const useTimer = (initialTime = 25 * 60) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        // Initialize audio
        audioRef.current = new Audio('/audio/ding.mp3');

        // Preload audio to ensure it plays immediately
        audioRef.current.load();

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    useEffect(() => {
        let interval = null;

        if (isActive && !isPaused && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((time) => time - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);
            setIsPaused(false);
            if (audioRef.current) {
                audioRef.current.play().catch(e => console.log('Audio play failed:', e));
            }
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, isPaused, timeLeft]);

    const startTimer = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const pauseTimer = () => {
        setIsPaused(true);
    };

    const resetTimer = (newTime = initialTime) => {
        setIsActive(false);
        setIsPaused(false);
        setTimeLeft(newTime);
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return {
        timeLeft,
        isActive,
        isPaused,
        startTimer,
        pauseTimer,
        resetTimer,
        formatTime,
        setTimeLeft
    };
};
