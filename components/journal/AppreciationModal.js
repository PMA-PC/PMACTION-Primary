import React, { useState } from 'react';

export default function AppreciationModal({ isOpen, onClose, onSave }) {
    const [text, setText] = useState('');

    if (!isOpen) return null;

    const handleSubmit = () => {
        if (!text.trim()) return;
        onSave({
            type: 'appreciation',
            text: text.trim(),
            timestamp: new Date().toISOString()
        });
        setText('');
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-fade-in-up">
                <div className="bg-yellow-600 p-6 text-white flex justify-between items-center">
                    <h2 className="text-2xl font-bold">⭐ Add Appreciation</h2>
                    <button onClick={onClose} className="text-white hover:bg-yellow-700 p-2 rounded-full transition">
                        ✕
                    </button>
                </div>

                <div className="p-6">
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="I appreciate..."
                        className="w-full h-40 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 outline-none resize-none text-gray-700"
                        autoFocus
                    />
                </div>

                <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
                    <button onClick={onClose} className="px-6 py-2 text-gray-500 font-bold hover:text-gray-700 mr-4">
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={!text.trim()}
                        className="px-8 py-2 bg-yellow-600 text-white rounded-xl font-bold shadow-lg hover:bg-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95 transition-all"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
