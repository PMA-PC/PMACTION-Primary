import React from 'react';
import { useRouter } from 'next/router';
import { CHALLENGES } from '../lib/challengesData';
import ChallengeTaskModal from './ChallengeTaskModal';

const ActiveChallengeCard = ({ challenge }) => {
    const router = useRouter();
    const [showModal, setShowModal] = React.useState(false);

    if (!challenge) {
        return (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">No Active Challenge</h3>
                <p className="text-gray-500 text-sm mb-4">Join a challenge to boost your focus and earn badges.</p>
                <button
                    onClick={() => router.push('/challenges')}
                    className="w-full py-2 bg-blue-50 text-blue-600 font-bold rounded-xl hover:bg-blue-100 transition-colors"
                >
                    Browse Challenges
                </button>
            </div>
        );
    }

    // Find full challenge details
    const challengeDetails = CHALLENGES.find(c => c.id === challenge.id);
    if (!challengeDetails) return null;

    // Calculate progress
    const startDate = new Date(challenge.startDate);
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const currentDay = Math.min(Math.max(diffDays, 1), challengeDetails.duration);
    const totalDays = challengeDetails.duration;
    const progress = Math.round((currentDay / totalDays) * 100);

    // Get today's task
    const currentTask = challengeDetails.tasks[currentDay] || { title: 'Rest Day', description: 'Take a break and reflect.' };

    const handleTaskComplete = (task) => {
        // Here we would ideally call an API to mark the task as complete
        console.log('Task completed:', task);
        // For now, we can just close the modal, the specific implementation depends on backend
    };

    return (
        <>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white">
                    <div className="flex justify-between items-start">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-wide opacity-80">Current Challenge</span>
                            <h3 className="text-lg font-bold mt-1">{challengeDetails.title}</h3>
                        </div>
                        <span className="bg-white/20 px-2 py-1 rounded text-xs font-bold">
                            Day {currentDay}/{totalDays}
                        </span>
                    </div>

                    <div className="mt-4">
                        <div className="flex justify-between text-xs font-medium mb-1 opacity-90">
                            <span>Progress</span>
                            <span>{progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-black/20 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-white transition-all duration-500"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                </div>

                <div className="p-4">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-xl">
                            📝
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 font-bold uppercase">Today's Task</p>
                            <p className="text-sm font-bold text-gray-800">{currentTask.title}</p>
                        </div>
                    </div>

                    <button
                        className="w-full py-2 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                        onClick={() => setShowModal(true)}
                    >
                        <span>Start Task</span>
                        <span>→</span>
                    </button>
                </div>
            </div>

            {/* Task Details Modal */}
            <ChallengeTaskModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                task={currentTask}
                challengeTitle={challengeDetails.title}
                onComplete={handleTaskComplete}
            />
        </>
    );
};

export default ActiveChallengeCard;
