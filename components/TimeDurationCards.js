import React, { useState, useEffect } from 'react';

const ONE_MIN_ACTIONS = [
    { title: "Breathe", icon: "🌬️", desc: "Take 3 deep breaths.", type: 'breathe' },
    { title: "Hydrate", icon: "💧", desc: "Drink a glass of water.", type: 'hydrate' },
    { title: "Stretch", icon: "🙆", desc: "Stand up and stretch.", type: 'stretch' },
    { title: "Smile", icon: "😊", desc: "Force a smile for 10s.", type: 'smile' }
];

export default function TimeDurationCards({ onAction }) {
    const [oneMinAction, setOneMinAction] = useState(ONE_MIN_ACTIONS[0]);

    useEffect(() => {
        // Rotate 1-min action every 10 seconds or on mount
        const interval = setInterval(() => {
            const random = ONE_MIN_ACTIONS[Math.floor(Math.random() * ONE_MIN_ACTIONS.length)];
            setOneMinAction(random);
        }, 10000); // Rotate every 10s
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {/* 1 Minute Card */}
            <div
                onClick={() => onAction && onAction('one_min', oneMinAction)}
                className="bg-blue-50 rounded-xl p-4 border border-blue-100 flex flex-col items-center text-center hover:shadow-md transition-shadow cursor-pointer hover:scale-[1.02] transform duration-200 group"
            >
                <div className="text-sm font-bold text-blue-400 uppercase mb-1">1 Minute</div>
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{oneMinAction.icon}</div>
                <h3 className="font-bold text-gray-800">{oneMinAction.title}</h3>
                <p className="text-xs text-gray-500">{oneMinAction.desc}</p>
            </div>

            {/* 5 Minute Card */}
            <div
                onClick={() => onAction && onAction('journal')}
                className="bg-purple-50 rounded-xl p-4 border border-purple-100 flex flex-col items-center text-center hover:shadow-md transition-shadow cursor-pointer hover:scale-[1.02] transform duration-200 group"
            >
                <div className="text-sm font-bold text-purple-400 uppercase mb-1">5 Minutes</div>
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">📝</div>
                <h3 className="font-bold text-gray-800">Quick Journal</h3>
                <p className="text-xs text-gray-500">Write down 3 things you're grateful for.</p>
            </div>

            {/* 10+ Minute Card */}
            <div
                onClick={() => onAction && onAction('focus')}
                className="bg-orange-50 rounded-xl p-4 border border-orange-100 flex flex-col items-center text-center hover:shadow-md transition-shadow cursor-pointer hover:scale-[1.02] transform duration-200 group"
            >
                <div className="text-sm font-bold text-orange-400 uppercase mb-1">10+ Minutes</div>
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">🧘</div>
                <h3 className="font-bold text-gray-800">Deep Focus</h3>
                <p className="text-xs text-gray-500">Meditate, read, or take a long walk.</p>
            </div>
        </div>
    );
}
