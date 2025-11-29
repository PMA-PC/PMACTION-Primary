import React, { useState } from 'react';

export default function BoundaryModal({ isOpen, onClose, onSave }) {
    const [description, setDescription] = useState('');
    const [person, setPerson] = useState('');
    const [outcome, setOutcome] = useState('');
    const [rating, setRating] = useState(0);

    if (!isOpen) return null;

    const handleSubmit = () => {
        if (!description.trim() || !person.trim() || !outcome.trim() || rating === 0) return;
        onSave({
            type: 'boundary',
            description: description.trim(),
            person: person.trim(),
            outcome: outcome.trim(),
            rating: rating,
            timestamp: new Date().toISOString()
        });
        setDescription('');
        setPerson('');
        setOutcome('');
        setRating(0);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-fade-in-up">
                <div className="bg-purple-600 p-6 text-white flex justify-between items-center">
                    <h2 className="text-2xl font-bold">🛡️ Log Boundary</h2>
                    <button onClick={onClose} className="text-white hover:bg-purple-700 p-2 rounded-full transition">
                        ✕
                    </button>
                </div>

                <div className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Boundary Description</label>
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="e.g., I said no to working late"
                            className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">With whom?</label>
                        <input
                            type="text"
                            value={person}
                            onChange={(e) => setPerson(e.target.value)}
                            placeholder="Person or situation"
                            className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Outcome</label>
                        <textarea
                            value={outcome}
                            onChange={(e) => setOutcome(e.target.value)}
                            placeholder="How did it go?"
                            className="w-full h-24 p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none resize-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Success Rating</label>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map(star => (
                                <button
                                    key={star}
                                    onClick={() => setRating(star)}
                                    className={`w-10 h-10 rounded-lg border-2 transition-all text-xl flex items-center justify-center ${rating >= star
                                            ? 'border-yellow-400 bg-yellow-50'
                                            : 'border-gray-200 hover:border-yellow-200'
                                        }`}
                                >
                                    ⭐
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
                    <button onClick={onClose} className="px-6 py-2 text-gray-500 font-bold hover:text-gray-700 mr-4">
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={!description.trim() || !person.trim() || !outcome.trim() || rating === 0}
                        className="px-8 py-2 bg-purple-600 text-white rounded-xl font-bold shadow-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95 transition-all"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
