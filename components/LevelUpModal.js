import React, { useEffect, useState } from 'react';

export default function LevelUpModal({ isOpen, onClose, newLevel, rewards }) {
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setShowConfetti(true);
            // Reset confetti after animation
            const timer = setTimeout(() => setShowConfetti(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl shadow-2xl max-w-sm w-full overflow-hidden relative transform transition-all scale-100">

                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-orange-50 to-yellow-100 opacity-50"></div>

                {/* Content */}
                <div className="relative p-8 text-center">

                    {/* Level Badge */}
                    <div className="mx-auto mb-6 relative">
                        <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg mx-auto animate-bounce-slow">
                            <span className="text-4xl font-black text-white drop-shadow-md">{newLevel}</span>
                        </div>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full border border-yellow-200">
                            LEVEL UP!
                        </div>
                    </div>

                    <h2 className="text-2xl font-black text-gray-800 mb-2">Congratulations!</h2>
                    <p className="text-gray-600 mb-6">You've reached a new level of mastery.</p>

                    {/* Rewards Section */}
                    <div className="bg-white/80 rounded-xl p-4 mb-8 border border-yellow-100 shadow-sm">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Rewards Earned</h3>
                        <div className="flex items-center justify-center space-x-4">
                            <div className="flex flex-col items-center">
                                <span className="text-2xl">💰</span>
                                <span className="font-bold text-gray-800">+{rewards?.gold || 50} Gold</span>
                            </div>
                            <div className="w-px h-8 bg-gray-200"></div>
                            <div className="flex flex-col items-center">
                                <span className="text-2xl">✨</span>
                                <span className="font-bold text-gray-800">New Badge</span>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="w-full py-3 px-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                    >
                        Awesome!
                    </button>
                </div>

                {/* CSS Animation for slow bounce */}
                <style jsx>{`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(-5%); }
            50% { transform: translateY(5%); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 3s infinite ease-in-out;
          }
        `}</style>
            </div>
        </div>
    );
}
