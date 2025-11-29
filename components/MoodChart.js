import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const MoodChart = ({ data }) => {
    // data format: [{ date: '2023-10-27', mood: 4 }, ...]

    if (!data || data.length === 0) {
        return (
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-xl border border-gray-100">
                <p className="text-gray-400">No mood data available yet.</p>
            </div>
        );
    }

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const moodVal = payload[0].value;
            let moodEmoji = '😐';
            if (moodVal >= 4.5) moodEmoji = '🤩';
            else if (moodVal >= 4) moodEmoji = '🙂';
            else if (moodVal >= 3) moodEmoji = '😐';
            else if (moodVal >= 2) moodEmoji = '😕';
            else moodEmoji = '😢';

            return (
                <div className="bg-white p-3 border border-gray-100 shadow-lg rounded-lg">
                    <p className="text-sm font-bold text-gray-700">{label}</p>
                    <p className="text-sm text-blue-600">
                        Mood: {moodVal} <span className="text-lg ml-1">{moodEmoji}</span>
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis
                        dataKey="date"
                        tick={{ fontSize: 12, fill: '#9CA3AF' }}
                        axisLine={false}
                        tickLine={false}
                        minTickGap={30}
                    />
                    <YAxis
                        domain={[1, 5]}
                        ticks={[1, 2, 3, 4, 5]}
                        tick={{ fontSize: 12, fill: '#9CA3AF' }}
                        axisLine={false}
                        tickLine={false}
                        width={30}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <ReferenceLine y={3} stroke="#E5E7EB" strokeDasharray="3 3" />
                    <Line
                        type="monotone"
                        dataKey="mood"
                        stroke="#4F46E5"
                        strokeWidth={3}
                        dot={{ r: 4, fill: '#4F46E5', strokeWidth: 2, stroke: '#fff' }}
                        activeDot={{ r: 6, fill: '#4F46E5' }}
                        animationDuration={1500}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default MoodChart;
