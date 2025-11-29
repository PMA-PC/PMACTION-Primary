import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

// Create Context
const AppContext = createContext();

// Custom Hook
export const useApp = () => useContext(AppContext);

// Define the AppProvider component
export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [appState, setAppState] = useState({});
    const [habits, setHabits] = useState([]);
    const [dailyLogs, setDailyLogs] = useState({}); // Abstraction: { [date]: { mood_score, journal_content, habits_completed: [] } }
    const [stats, setStats] = useState({ points: 0, streak: 0, level: 1 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check active session
        const getSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setUser(session?.user ?? null);
            setLoading(false);
        };
        getSession();

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, []);

    // Fetch data when user is logged in
    const [wins, setWins] = useState([]);
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        if (user) {
            fetchHabits(); // Keeping for backward compatibility
            fetchStats(); // Keeping for backward compatibility
            fetchUserProfile();
            const today = new Date().toISOString().split('T')[0];
            fetchDailyLog(today);
            fetchWins(today);
        } else {
            setHabits([]);
            setDailyLogs({});
            setStats({ points: 0, streak: 0, level: 1 });
            setWins([]);
            setUserProfile(null);
        }
    }, [user]);

    const fetchUserProfile = async () => {
        try {
            const { data, error } = await supabase
                .from('user_profiles')
                .select('*')
                .eq('user_id', user.id)
                .single();

            if (error && error.code !== 'PGRST116') throw error; // Ignore not found

            if (data) {
                setUserProfile(data);
            } else {
                // Create profile if not exists
                const { data: newProfile, error: createError } = await supabase
                    .from('user_profiles')
                    .insert([{ user_id: user.id }])
                    .select()
                    .single();

                if (!createError) setUserProfile(newProfile);
            }
        } catch (error) {
            console.error('Error fetching user profile:', error.message);
        }
    };

    const fetchWins = async (date) => {
        try {
            const { data, error } = await supabase
                .from('wins')
                .select('*')
                .eq('user_id', user.id)
                .gte('created_at', `${date}T00:00:00`)
                .lte('created_at', `${date}T23:59:59`)
                .order('created_at', { ascending: false });

            if (error) throw error;
            setWins(data || []);
        } catch (error) {
            console.error('Error fetching wins:', error.message);
        }
    };

    const addWin = async (winData) => {
        if (!user) return;

        try {
            // 1. Insert Win
            const { data: newWin, error: winError } = await supabase
                .from('wins')
                .insert([{ ...winData, user_id: user.id }])
                .select()
                .single();

            if (winError) throw winError;

            // 1.5 Sync with Journal Entries if type is journal
            if (winData.type === 'journal' && winData.content) {
                const today = new Date().toISOString().split('T')[0];
                await saveDailyLog(today, {
                    journal_content: winData.content
                });
            }

            // 2. Calculate Gamification Updates
            const xpGained = winData.xp_earned || 10;
            let newXP = (userProfile?.xp || 0) + xpGained;
            let newLevel = userProfile?.level || 1;
            let leveledUp = false;

            // Level Up Logic (Simple: Level * 100 XP required)
            const xpRequired = newLevel * 100;
            if (newXP >= xpRequired) {
                newLevel += 1;
                newXP -= xpRequired; // Carry over excess XP? Or just keep total? Let's keep total for now, but level based on thresholds.
                // Actually, let's use a simple cumulative XP model for now to match MKO #1 simplicity
                // Level = 1 + floor(TotalXP / 100)
                const calculatedLevel = 1 + Math.floor(newXP / 100);
                if (calculatedLevel > newLevel) {
                    newLevel = calculatedLevel;
                    leveledUp = true;
                }
            }

            // Streak Logic
            const today = new Date().toISOString().split('T')[0];
            const lastWinDate = userProfile?.last_win_date ? userProfile.last_win_date.split('T')[0] : null;
            let currentStreak = userProfile?.current_streak || 0;

            if (lastWinDate === today) {
                // Already won today, streak stays same
            } else {
                const yesterday = new Date();
                yesterday.setDate(yesterday.getDate() - 1);
                const yesterdayStr = yesterday.toISOString().split('T')[0];

                if (lastWinDate === yesterdayStr) {
                    currentStreak += 1;
                } else {
                    currentStreak = 1; // Reset or start new
                }
            }

            // 3. Update Profile
            const { data: updatedProfile, error: profileError } = await supabase
                .from('user_profiles')
                .update({
                    xp: newXP,
                    level: newLevel,
                })
                .eq('user_id', user.id)
                .select()
                .single();

            if (!profileError) setUserProfile(updatedProfile);

            // 3. Refresh Wins
            setWins(prev => [newWin, ...prev]);

            return newWin;
        } catch (error) {
            console.error('Error adding win:', error.message);
            throw error;
        }
    };

    const fetchHabits = async () => {
        try {
            const { data, error } = await supabase
                .from('habits')
                .select('*')
                .eq('user_id', user.id)
                .order('created_at', { ascending: false });

            if (error) throw error;
            setHabits(data || []);
        } catch (error) {
            console.error('Error fetching habits:', error.message);
        }
    };

    const fetchStats = async () => {
        try {
            const { data, error } = await supabase
                .from('user_profiles')
                .select('xp, level, current_streak')
                .eq('user_id', user.id)
                .single();

            if (error && error.code !== 'PGRST116') throw error;

            if (data) {
                setStats({
                    points: data.xp || 0,
                    streak: data.current_streak || 0,
                    level: data.level || 1
                });
            }
        } catch (error) {
            console.error('Error fetching stats:', error.message);
        }
    };

    const fetchDailyLog = async (date) => {
        try {
            // Fetch journal entry
            const { data: journalData, error: journalError } = await supabase
                .from('journal_entries')
                .select('*')
                .eq('user_id', user.id)
                .gte('created_at', `${date}T00:00:00`)
                .lte('created_at', `${date}T23:59:59`)
                .maybeSingle();

            if (journalError && journalError.code !== 'PGRST116') throw journalError;

            // Fetch habit logs
            const { data: habitLogsData, error: habitLogsError } = await supabase
                .from('habit_logs')
                .select('habit_id')
                .eq('user_id', user.id)
                .eq('log_date', date);

            if (habitLogsError) throw habitLogsError;

            const logData = {
                emotion_data: journalData?.emotion_data || null,
                mood_score: journalData?.mood_score || null,
                journal_content: journalData?.content || '',
                habits_completed: habitLogsData ? habitLogsData.map(l => l.habit_id) : []
            };

            setDailyLogs(prev => ({ ...prev, [date]: logData }));
        } catch (error) {
            console.error('Error fetching daily log:', error.message);
        }
    };

    const addHabit = async (habitData) => {
        if (!user) return;

        try {
            const { data, error } = await supabase
                .from('habits')
                .insert([{ ...habitData, user_id: user.id }])
                .select()
                .single();

            if (error) throw error;

            setHabits(prev => [data, ...prev]);
            return data;
        } catch (error) {
            console.error('Error adding habit:', error.message);
            throw error;
        }
    };

    const deleteHabit = async (habitId) => {
        if (!user) return;

        try {
            const { error } = await supabase
                .from('habits')
                .delete()
                .eq('id', habitId)
                .eq('user_id', user.id);

            if (error) throw error;

            setHabits(prev => prev.filter(h => h.id !== habitId));
        } catch (error) {
            console.error('Error deleting habit:', error.message);
            throw error;
        }
    };

    const saveDailyLog = async (date, updates) => {
        try {
            // updates contains: { emotion_data, journal_content, habits_completed }
            // emotion_data format: { primary: 'happy', secondary: ['joyful', 'content'] }

            // 1. Save Journal Entry (Upsert)
            const { data: existingEntry } = await supabase
                .from('journal_entries')
                .select('id')
                .eq('user_id', user.id)
                .gte('created_at', `${date}T00:00:00`)
                .lte('created_at', `${date}T23:59:59`)
                .maybeSingle();

            if (updates.journal_content || updates.emotion_data || updates.mood_score) {
                const entryData = {
                    user_id: user.id,
                    content: updates.journal_content || '',
                    emotion_data: updates.emotion_data || null,
                    mood_score: updates.mood_score || null,
                };

                if (existingEntry) {
                    await supabase
                        .from('journal_entries')
                        .update(entryData)
                        .eq('id', existingEntry.id);
                } else {
                    await supabase
                        .from('journal_entries')
                        .insert([entryData]);
                }
            }

            // 2. Save Habit Logs (Legacy support)
            if (updates.habits_completed) {
                const { data: existingLogs } = await supabase
                    .from('habit_logs')
                    .select('habit_id')
                    .eq('user_id', user.id)
                    .eq('log_date', date);

                const existingIds = existingLogs ? existingLogs.map(l => l.habit_id) : [];
                const newIds = updates.habits_completed;
                const toAdd = newIds.filter(id => !existingIds.includes(id));
                const toRemove = existingIds.filter(id => !newIds.includes(id));

                if (toAdd.length > 0) {
                    const logsToAdd = toAdd.map(habitId => ({
                        user_id: user.id,
                        habit_id: habitId,
                        log_date: date,
                        completed: true
                    }));
                    await supabase.from('habit_logs').insert(logsToAdd);
                }

                if (toRemove.length > 0) {
                    await supabase
                        .from('habit_logs')
                        .delete()
                        .eq('user_id', user.id)
                        .eq('log_date', date)
                        .in('habit_id', toRemove);
                }
            }

            // Refresh local state
            await fetchDailyLog(date);
            await fetchStats();

        } catch (error) {
            console.error('Error saving daily log:', error.message);
            throw error;
        }
    };

    const value = {
        user,
        appState,
        setAppState,
        habits,
        dailyLogs,
        stats,
        wins, // New
        userProfile, // New
        loading,
        fetchHabits,
        fetchDailyLog,
        fetchWins, // New
        addHabit,
        deleteHabit,
        saveDailyLog,
        addWin // New
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
