import React, { useState } from 'react';
import { useApp } from '../lib/context';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Habits() {
    const { user, habits, addHabit, deleteHabit, loading } = useApp();
    const router = useRouter();

    const [newHabitTitle, setNewHabitTitle] = useState('');
    const [newHabitIcon, setNewHabitIcon] = useState('📝');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Redirect if not authenticated
    // React.useEffect(() => {
    //     if (!loading && !user) {
    //         router.push('/login');
    //     }
    // }, [user, loading, router]);

    const handleAddHabit = async (e) => {
        e.preventDefault();
        if (!newHabitTitle.trim()) return;

        setIsSubmitting(true);
        try {
            await addHabit(newHabitTitle, newHabitIcon);
            setNewHabitTitle('');
            setNewHabitIcon('📝');
        } catch (error) {
            alert('Failed to add habit. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDeleteHabit = async (id) => {
        if (confirm('Are you sure you want to delete this habit?')) {
            try {
                await deleteHabit(id);
            } catch (error) {
                alert('Failed to delete habit.');
            }
        }
    };

    const icons = ['📝', '💧', '🏃', '🧘', '🥗', '📚', '💤', '💪', '🎨', '🎵'];

    if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Manage Habits</h1>
                    <Link href="/journal" className="text-blue-600 hover:text-blue-800 font-medium">
                        &larr; Back to Journal
                    </Link>
                </div>

                {/* Add New Habit Form */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Create New Habit</h2>
                    <form onSubmit={handleAddHabit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Habit Name</label>
                            <input
                                type="text"
                                value={newHabitTitle}
                                onChange={(e) => setNewHabitTitle(e.target.value)}
                                placeholder="e.g., Drink Water, Read 30 mins"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Choose Icon</label>
                            <div className="flex flex-wrap gap-2">
                                {icons.map(icon => (
                                    <button
                                        key={icon}
                                        type="button"
                                        onClick={() => setNewHabitIcon(icon)}
                                        className={`text-2xl p-3 rounded-lg transition-colors ${newHabitIcon === icon
                                            ? 'bg-blue-100 ring-2 ring-blue-200'
                                            : 'hover:bg-gray-100'
                                            }`}
                                    >
                                        {icon}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting || !newHabitTitle.trim()}
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Adding...' : 'Add Habit'}
                        </button>
                    </form>
                </div>

                {/* Existing Habits List */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Habits</h2>
                    {habits.length === 0 ? (
                        <p className="text-gray-500 italic text-center py-8">You haven't added any habits yet.</p>
                    ) : (
                        <div className="space-y-3">
                            {habits.map(habit => (
                                <div key={habit.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors bg-white">
                                    <div className="flex items-center">
                                        <span className="text-3xl mr-4">{habit.icon}</span>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{habit.title}</h3>
                                            <p className="text-sm text-gray-500 capitalize">{habit.frequency || 'Daily'}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleDeleteHabit(habit.id)}
                                        className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition"
                                        title="Delete Habit"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
