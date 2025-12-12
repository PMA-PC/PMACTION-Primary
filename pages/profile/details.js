import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function DetailedProfile() {
    const [formData, setFormData] = useState({
        agingParents: false,
        hasChildren: false,
        childrenCount: '',
        childrenAges: '',
        relationshipStatus: '',
        occupation: '',
        isStudent: false,
        hobbies: '',
    });
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        const savedProfile = localStorage.getItem('pmaction_user_profile');
        if (savedProfile) {
            setFormData(JSON.parse(savedProfile));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('pmaction_user_profile', JSON.stringify(formData));
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <Head>
                <title>Detailed Profile | PMAction</title>
            </Head>

            <div className="max-w-2xl mx-auto">
                <div className="mb-8">
                    <Link href="/dashboard" className="text-sm text-gray-500 hover:text-green-600 flex items-center gap-1 mb-4 transition-colors">
                        ← Back to Dashboard
                    </Link>
                    <h1 className="text-3xl font-bold text-gray-900">Your Context Profile</h1>
                    <p className="mt-2 text-gray-600">
                        Help us understand your life better. This information allows PMAction (and future AI features) to provide more relevant suggestions.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white shadow rounded-2xl p-8 space-y-8">

                    {/* Family Context */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">Family Context</h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <label className="text-gray-700 font-medium">Caring for Aging Parents?</label>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="agingParents"
                                        checked={formData.agingParents}
                                        onChange={handleChange}
                                        className="h-5 w-5 text-green-600 rounded focus:ring-green-500 border-gray-300"
                                    />
                                    <span className="ml-2 text-gray-600 text-sm">Yes</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="text-gray-700 font-medium">Do you have children?</label>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="hasChildren"
                                        checked={formData.hasChildren}
                                        onChange={handleChange}
                                        className="h-5 w-5 text-green-600 rounded focus:ring-green-500 border-gray-300"
                                    />
                                    <span className="ml-2 text-gray-600 text-sm">Yes</span>
                                </div>
                            </div>

                            {formData.hasChildren && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="pl-4 border-l-2 border-green-100 space-y-3"
                                >
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">How many children?</label>
                                        <input
                                            type="number"
                                            name="childrenCount"
                                            value={formData.childrenCount}
                                            onChange={handleChange}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2 border"
                                            placeholder="e.g. 2"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Ages (comma separated)</label>
                                        <input
                                            type="text"
                                            name="childrenAges"
                                            value={formData.childrenAges}
                                            onChange={handleChange}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2 border"
                                            placeholder="e.g. 5, 8, 12"
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </section>

                    {/* Relationship Context */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">Relationship</h2>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Relationship Status</label>
                            <select
                                name="relationshipStatus"
                                value={formData.relationshipStatus}
                                onChange={handleChange}
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                            >
                                <option value="">Select...</option>
                                <option value="Single">Single</option>
                                <option value="In a Relationship">In a Relationship</option>
                                <option value="Married">Married</option>
                                <option value="Divorced">Divorced</option>
                                <option value="Widowed">Widowed</option>
                                <option value="It's Complicated">It's Complicated</option>
                            </select>
                        </div>
                    </section>

                    {/* Career & Work */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">Work & Study</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Current Occupation / Field</label>
                                <input
                                    type="text"
                                    name="occupation"
                                    value={formData.occupation}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2 border"
                                    placeholder="e.g. Software Engineer, Teacher, Retired"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <label className="text-gray-700 font-medium">Are you currently a student?</label>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="isStudent"
                                        checked={formData.isStudent}
                                        onChange={handleChange}
                                        className="h-5 w-5 text-green-600 rounded focus:ring-green-500 border-gray-300"
                                    />
                                    <span className="ml-2 text-gray-600 text-sm">Yes</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Hobbies */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">Interests</h2>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Hobbies & Passions (comma separated)</label>
                            <textarea
                                name="hobbies"
                                value={formData.hobbies}
                                onChange={handleChange}
                                rows={3}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2 border"
                                placeholder="e.g. Hiking, Coding, Painting, Gaming"
                            />
                        </div>
                    </section>

                    <div className="pt-4 flex items-center justify-between">
                        <p className="text-xs text-gray-500 italic">
                            Information is stored locally on your device properly.
                        </p>
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                        >
                            {saved ? 'Saved!' : 'Save Profile'}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
