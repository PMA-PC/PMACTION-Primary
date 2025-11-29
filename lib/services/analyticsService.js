export const analyticsService = {
    // Process daily logs to get mood history for charts
    getMoodHistory: (dailyLogs) => {
        // dailyLogs is { "2023-10-27": { mood_score: 4, ... }, ... }
        return Object.entries(dailyLogs)
            .map(([date, data]) => ({
                date,
                mood: data.mood_score || 0
            }))
            .sort((a, b) => new Date(a.date) - new Date(b.date));
    },

    // Process wins to calculate cumulative XP over time
    getXPGrowth: (wins) => {
        // wins is array of { created_at, xp_earned, ... }
        const sortedWins = [...wins].sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

        let cumulativeXP = 0;
        const xpData = [];

        // Group by day for cleaner chart
        const winsByDay = {};
        sortedWins.forEach(win => {
            const date = new Date(win.created_at).toLocaleDateString();
            if (!winsByDay[date]) winsByDay[date] = 0;
            winsByDay[date] += (win.xp_earned || 0);
        });

        Object.entries(winsByDay).forEach(([date, xp]) => {
            cumulativeXP += xp;
            xpData.push({
                date,
                xp: cumulativeXP,
                daily_xp: xp
            });
        });

        return xpData;
    },

    // Calculate habit completion rates
    getHabitStats: (habits, dailyLogs) => {
        // habits: [{id, name}, ...]
        // dailyLogs: { date: { habits_completed: [id, id] } }

        const stats = habits.map(habit => {
            let completedCount = 0;
            const totalDays = Object.keys(dailyLogs).length;

            Object.values(dailyLogs).forEach(log => {
                if (log.habits_completed?.includes(habit.id)) {
                    completedCount++;
                }
            });

            return {
                name: habit.name,
                completed: completedCount,
                rate: totalDays > 0 ? Math.round((completedCount / totalDays) * 100) : 0
            };
        });

        return stats.sort((a, b) => b.rate - a.rate);
    }
};
