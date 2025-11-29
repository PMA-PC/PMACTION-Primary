export const pdfService = {
    // Helper to format data for the report
    // In a client-side print (react-to-print), the browser handles the generation.
    // This service can be used to prepare specific summary text or format dates.

    generateReportSummary: (userProfile, stats, moodHistory) => {
        const averageMood = moodHistory.length > 0
            ? (moodHistory.reduce((acc, curr) => acc + curr.mood, 0) / moodHistory.length).toFixed(1)
            : 'N/A';

        return {
            generatedAt: new Date().toLocaleString(),
            userName: userProfile?.nickname || 'User',
            currentLevel: userProfile?.level || 1,
            totalXP: userProfile?.xp || 0,
            averageMood: averageMood,
            totalEntries: moodHistory.length
        };
    }
};
