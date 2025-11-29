import React, { useState } from 'react';

const ACCOMPLISHMENT_TYPES = [
    { emoji: '💪', label: 'Gym/Exercise' },
    { emoji: '🚶', label: 'Went for a walk' },
    { emoji: '📞', label: 'Voice call' },
    { emoji: '💬', label: 'Text conversation' },
    { emoji: '🎯', label: 'Set a boundary' },
    { emoji: '📚', label: 'Learned something' }
];

export default function AccomplishmentModal({ isOpen, onClose, onSave }) {
    const [selectedType, setSelectedType] = useState(null);
    const [details, setDetails] = useState('');

    if (!isOpen) return null;

    const handleSubmit = () => {
        if (!selectedType || !details.trim()) return;
        onSave({
            type: 'accomplishment',
            accomplishment_type: selectedType.label,
            icon: selectedType.emoji,
            details: details.trim(),
            timestamp: new Date().toISOString()
        });
        setSelectedType(null);
        setDetails('');
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-fade-in-up">
                <div className="bg-green-600 p-6 text-white flex justify-between items-center">
                    <h2 className="text-2xl font-bold">🎉 Log Accomplishment</h2>
                    <button onClick={onClose} className="text-white hover:bg-green-700 p-2 rounded-full transition">
                        ✕
                    </button>
                </div>

                <div className="p-6 space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Type</label>
                        <div className="grid grid-cols-2 gap-3">
                            {ACCOMPLISHMENT_TYPES.map(type => (
                                <button
                                    key={type.label}
                                    onClick={() => setSelectedType(type)}
                                    className={`flex items-center p-3 rounded-xl border-2 transition-all text-left ${selectedType?.label === type.label
                                            ? 'border-green-500 bg-green-50 shadow-sm'
                                            : 'border-gray-100 hover:border-green-200 hover:bg-gray-50'
                                        }`}
                                >
                                    <span className="text-2xl mr-3">{type.emoji}</span>
                                    <span className="font-semibold text-gray-700">{type.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Details</label>
                        <textarea
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                            placeholder="What did you accomplish?"
                            className="w-full h-24 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none resize-none text-gray-700"
                        />
                    </div>
                </div>

                <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
                    <button onClick={onClose} className="px-6 py-2 text-gray-500 font-bold hover:text-gray-700 mr-4">
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={!selectedType || !details.trim()}
                        className="px-8 py-2 bg-green-600 text-white rounded-xl font-bold shadow-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95 transition-all"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
