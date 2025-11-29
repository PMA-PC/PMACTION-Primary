import React, { useState } from 'react';

export default function QuoteModal({ isOpen, onClose, onSave }) {
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');

    if (!isOpen) return null;

    const handleSubmit = () => {
        if (!text.trim()) return;
        onSave({
            type: 'quote',
            text: text.trim(),
            author: author.trim(),
            timestamp: new Date().toISOString()
        });
        setText('');
        setAuthor('');
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-fade-in-up">
                <div className="bg-indigo-600 p-6 text-white flex justify-between items-center">
                    <h2 className="text-2xl font-bold">💭 Save Quote</h2>
                    <button onClick={onClose} className="text-white hover:bg-indigo-700 p-2 rounded-full transition">
                        ✕
                    </button>
                </div>

                <div className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Quote</label>
                        <textarea
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Enter inspiring quote..."
                            className="w-full h-32 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none resize-none text-gray-700"
                            autoFocus
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Author (optional)</label>
                        <input
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            placeholder="e.g., Maya Angelou"
                            className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                        />
                    </div>
                </div>

                <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
                    <button onClick={onClose} className="px-6 py-2 text-gray-500 font-bold hover:text-gray-700 mr-4">
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={!text.trim()}
                        className="px-8 py-2 bg-indigo-600 text-white rounded-xl font-bold shadow-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95 transition-all"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
