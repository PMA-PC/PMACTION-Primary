import React, { useState, useEffect } from 'react';

export default function RemindersWidget() {
    const [reminders, setReminders] = useState([]);
    const [newReminder, setNewReminder] = useState('');
    const [reminderTime, setReminderTime] = useState('');
    const [isDaily, setIsDaily] = useState(false);

    // Load from local storage on mount
    useEffect(() => {
        const saved = localStorage.getItem('pmaction_reminders');
        if (saved) {
            setReminders(JSON.parse(saved));
        }
    }, []);

    // Save to local storage on change
    useEffect(() => {
        localStorage.setItem('pmaction_reminders', JSON.stringify(reminders));
    }, [reminders]);

    const addReminder = (e) => {
        e.preventDefault();
        if (!newReminder.trim()) return;

        const reminder = {
            id: Date.now(),
            text: newReminder.trim(),
            time: reminderTime,
            isDaily: isDaily,
            completed: false,
            lastCompletedDate: null
        };

        setReminders([...reminders, reminder]);
        setNewReminder('');
        setReminderTime('');
        setIsDaily(false);
    };

    const toggleReminder = (id) => {
        setReminders(reminders.map(r => {
            if (r.id === id) {
                const now = new Date().toISOString().split('T')[0];
                return {
                    ...r,
                    completed: !r.completed,
                    lastCompletedDate: !r.completed ? now : null
                };
            }
            return r;
        }));
    };

    const deleteReminder = (id) => {
        setReminders(reminders.filter(r => r.id !== id));
    };

    // Reset daily reminders if it's a new day
    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setReminders(prev => prev.map(r => {
            if (r.isDaily && r.lastCompletedDate !== today) {
                return { ...r, completed: false };
            }
            return r;
        }));
    }, []);

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <span>🔔</span> Reminders
                </h2>
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                    Private • Not AI Analyzed
                </span>
            </div>

            <form onSubmit={addReminder} className="mb-4">
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={newReminder}
                            onChange={(e) => setNewReminder(e.target.value)}
                            placeholder="Add a task..."
                            className="flex-1 p-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        <button
                            type="submit"
                            disabled={!newReminder.trim()}
                            className="bg-blue-600 text-white px-3 rounded-lg font-bold hover:bg-blue-700 disabled:opacity-50"
                        >
                            +
                        </button>
                    </div>
                    <div className="flex items-center gap-4">
                        <input
                            type="time"
                            value={reminderTime}
                            onChange={(e) => setReminderTime(e.target.value)}
                            className="p-1 px-2 border border-gray-200 rounded-lg text-xs bg-gray-50 text-gray-700 font-medium focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="isDaily"
                                checked={isDaily}
                                onChange={(e) => setIsDaily(e.target.checked)}
                                className="rounded text-blue-600 focus:ring-blue-500"
                            />
                            <label htmlFor="isDaily" className="text-xs text-gray-500 cursor-pointer select-none">
                                Repeat Daily
                            </label>
                        </div>
                    </div>
                </div>
            </form>

            <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                {reminders.length === 0 ? (
                    <p className="text-center text-gray-400 text-sm py-4">No reminders set.</p>
                ) : (
                    reminders.map(reminder => (
                        <div
                            key={reminder.id}
                            className={`group flex items-center justify-between p-3 rounded-xl border transition-all ${reminder.completed
                                ? 'bg-gray-50 border-gray-100'
                                : 'bg-white border-gray-100 hover:border-blue-200 hover:shadow-sm'
                                }`}
                        >
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                                <button
                                    onClick={() => toggleReminder(reminder.id)}
                                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${reminder.completed
                                        ? 'bg-green-500 border-green-500 text-white'
                                        : 'border-gray-300 hover:border-blue-400'
                                        }`}
                                >
                                    {reminder.completed && <span className="text-xs">✓</span>}
                                </button>
                                <div className="flex flex-col min-w-0">
                                    <div className="flex items-center gap-2">
                                        <span className={`text-sm truncate ${reminder.completed ? 'text-gray-400 line-through' : 'text-gray-700 font-medium'}`}>
                                            {reminder.text}
                                        </span>
                                        {reminder.time && (
                                            <span className={`text-xs px-1.5 py-0.5 rounded ${reminder.completed ? 'bg-gray-100 text-gray-400' : 'bg-blue-50 text-blue-600 font-medium'}`}>
                                                @{reminder.time}
                                            </span>
                                        )}
                                    </div>
                                    {reminder.isDaily && (
                                        <span className="text-[10px] text-blue-500 font-bold uppercase tracking-wider">
                                            Daily
                                        </span>
                                    )}
                                </div>
                            </div>
                            <button
                                onClick={() => deleteReminder(reminder.id)}
                                className="text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all px-2"
                            >
                                ×
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
