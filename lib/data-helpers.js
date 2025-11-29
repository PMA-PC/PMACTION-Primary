/**
 * Exports user journal data to a text file
 * @param {Object} journalData - The journal data to export
 * @param {string} filename - Optional filename
 */
export const exportFullJournal = (journalData, filename = 'my-journal-export.txt') => {
    if (!journalData) {
        console.error('No journal data provided for export');
        return;
    }

    try {
        let content = `PMAction Journal Export\nGenerated: ${new Date().toLocaleString()}\n\n`;
        content += `============================================\n\n`;

        // Handle array of entries or object of entries
        const entries = Array.isArray(journalData)
            ? journalData
            : Object.values(journalData);

        if (entries.length === 0) {
            content += 'No journal entries found.\n';
        } else {
            entries.forEach(entry => {
                const date = entry.date || entry.created_at || 'Unknown Date';
                const mood = entry.mood_score ? `Mood Score: ${entry.mood_score}` : '';
                const emotion = entry.emotion_data
                    ? `Emotion: ${entry.emotion_data.primary} ${entry.emotion_data.secondary ? `(${entry.emotion_data.secondary.join(', ')})` : ''}`
                    : '';

                content += `Date: ${new Date(date).toLocaleDateString()}\n`;
                if (mood) content += `${mood}\n`;
                if (emotion) content += `${emotion}\n`;
                content += `--------------------------------------------\n`;
                content += `${entry.content || entry.journal_content || '(No content)'}\n`;
                content += `\n============================================\n\n`;
            });
        }

        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error exporting journal:', error);
        alert('Failed to export journal data.');
    }
};

/**
 * Triggers the browser print dialog
 */
export const printDashboard = () => {
    window.print();
};
