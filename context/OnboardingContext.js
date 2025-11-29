import { createContext, useContext, useState, useEffect } from 'react';

const OnboardingContext = createContext();

export const OnboardingProvider = ({ children }) => {
    // Initial default state
    const defaultState = {
        // Step 1: Goals
        goals: [],

        // Step 2: Personal Details
        displayName: '',
        ageGroup: '',
        location: '',
        gender: '',
        relationshipStatus: '',
        hasChildren: '',

        // Step 3: Notifications & Gamification
        notifications: {
            dailyReminder: true,
            reminderTime: '09:00',
            email: true,
            push: true,
            habitTracking: {
                exercise: true,
                mindfulness: true,
                journaling: true,
                sleep: true,
                nutrition: true,
            }
        },
    };

    const [data, setData] = useState(defaultState);

    // Load from localStorage on mount
    useEffect(() => {
        const savedData = localStorage.getItem('onboarding_progress');
        if (savedData) {
            try {
                setData(JSON.parse(savedData));
            } catch (e) {
                console.error('Failed to parse onboarding data', e);
            }
        }
    }, []);

    // Save to localStorage whenever data changes
    useEffect(() => {
        if (JSON.stringify(data) !== JSON.stringify(defaultState)) {
            localStorage.setItem('onboarding_progress', JSON.stringify(data));
        }
    }, [data]);

    const update = (partial) => {
        setData((prev) => {
            const newData = { ...prev, ...partial };
            return newData;
        });
    };

    const reset = () => {
        setData(defaultState);
        localStorage.removeItem('onboarding_progress');
    };

    return (
        <OnboardingContext.Provider value={{ data, update, reset }}>
            {children}
        </OnboardingContext.Provider>
    );
};

export const useOnboarding = () => useContext(OnboardingContext);
