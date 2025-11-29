import React from 'react';

const MoodHeatmap = ({ data }) => {
    // data format: [{ date: '2023-10-27', mood: 4 }, ...]

    // Helper to get color based on mood
    const getMoodColor = (mood) => {
        if (!mood) return 'bg-gray-100'; // No data
        if (mood >= 4.5) return 'bg-green-500'; // Amazing
        if (mood >= 4) return 'bg-green-400'; // Good
        if (mood >= 3) return 'bg-yellow-400'; // Okay
        if (mood >= 2) return 'bg-orange-400'; // Bad
        return 'bg-red-500'; // Terrible
    };

    // Generate last 30 days for the heatmap
    const generateDays = () => {
        const days = [];
        const today = new Date();
        for (let i = 29; i >= 0; i--) {
            const d = new Date();
            d.setDate(today.getDate() - i);
            const dateStr = d.toLocaleDateString(); // Simplified for matching

            // Find mood for this day
            // Note: In a real app, ensure date formats match perfectly (e.g., YYYY-MM-DD)
            // Here we assume data.date matches d.toLocaleDateString() or we need to normalize
            const entry = data.find(item => {
                const itemDate = new Date(item.date);
                return itemDate.getDate() === d.getDate() &&
                    itemDate.getMonth() === d.getMonth();
            });

            days.push({
                date: d,
                mood: entry ? entry.mood : null
            });
        }
        return days;
    };

    const days = generateDays();

    return (
        <div className="w-full">
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                {days.map((day, index) => (
                    <div
                        key={index}
                        className={`w-8 h-8 rounded-md ${getMoodColor(day.mood)} transition-all hover:scale-110 relative group cursor-default`}
                    >
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                            {day.date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                            {day.mood && ` - Mood: ${day.mood}`}
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-4 flex items-center gap-4 text-xs text-gray-500 justify-center sm:justify-start">
                <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded bg-red-500"></div> Low
                </div>
                <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded bg-yellow-400"></div> Med
                </div>
                <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded bg-green-500"></div> High
                </div>
            </div>
        </div>
    );
};

export default MoodHeatmap;
