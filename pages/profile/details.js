import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function ProfileDetails() {
    const router = useRouter();
    const [profile, setProfile] = useState({
        relationshipStatus: '',
        hasChildren: false,
        childrenCount: 0,
        occupation: '',
        hobbies: '',
        agingParents: false
    });
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('pmaction_user_profile_details');
        if (saved) {
            setProfile(JSON.parse(saved));
        }
    }, []);

    const handleChange = (field, value) => {
        setProfile(prev => ({ ...prev, [field]: value }));
    };

    const handleSave = () => {
        setIsSaving(true);
        localStorage.setItem('pmaction_user_profile_details', JSON.stringify(profile));

        // Simulate API call
        setTimeout(() => {
            setIsSaving(false);
            router.push('/dashboard');
        }, 800);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
            <Head>
                <title>Complete Profile | PMAction</title>
            </Head>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white max-w-lg w-full rounded-2xl shadow-xl p-8 border border-gray-100"
            >
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">About You</h1>
                    <p className="text-gray-500">Help us personalize your experience.</p>
                </div>

                <div className="space-y-6">
                    {/* Relationship Status */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Relationship Status</label>
                        <select
                            value={profile.relationshipStatus}
                            onChange={(e) => handleChange('relationshipStatus', e.target.value)}
                            className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        >
                            <option value="">Select...</option>
                            <option value="Single">Single</option>
                            <option value="Partnered">Partnered</option>
                            <option value="Married">Married</option>
                            <option value="Divorced">Divorced</option>
                        </select>
                    </div>

                    {/* Children */}
                    <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                        <div className="flex items-center justify-between mb-2">
                            <span className="font-bold text-blue-900">Do you have children?</span>
                            <div className="flex gap-4">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        checked={profile.hasChildren}
                                        onChange={() => handleChange('hasChildren', true)}
                                        className="text-blue-600 focus:ring-blue-500"
                                    />
                                    Yes
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        checked={!profile.hasChildren}
                                        onChange={() => handleChange('hasChildren', false)}
                                        className="text-blue-600 focus:ring-blue-500"
                                    />
                                    No
                                </label>
                            </div>
                        </div>
                        {profile.hasChildren && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                                <label className="text-xs text-blue-700 font-bold uppercase tracking-wide mb-1 block">How many?</label>
                                <input
                                    type="number"
                                    min="1"
                                    value={profile.childrenCount}
                                    onChange={(e) => handleChange('childrenCount', parseInt(e.target.value))}
                                    className="w-full p-2 rounded-lg border border-blue-200 focus:outline-none focus:border-blue-500"
                                />
                            </motion.div>
                        )}
                    </div>

                    {/* Occupation */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Occupation / Status</label>
                        <input
                            type="text"
                            placeholder="e.g. Designer, Student, Retired"
                            value={profile.occupation}
                            onChange={(e) => handleChange('occupation', e.target.value)}
                            className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        />
                    </div>

                    {/* Hobbies */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Hobbies & Interests</label>
                        <textarea
                            placeholder="e.g. Hiking, Gaming, Reading..."
                            value={profile.hobbies}
                            onChange={(e) => handleChange('hobbies', e.target.value)}
                            className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none transition-all h-24 resize-none"
                        />
                    </div>

                    {/* Aging Parents */}
                    <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => handleChange('agingParents', !profile.agingParents)}>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${profile.agingParents ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
                            {profile.agingParents && <span className="text-white text-xs">✓</span>}
                        </div>
                        <span className="text-gray-700 font-medium">I am caring for aging parents</span>
                    </div>

                    <button
                        onClick={handleSave}
                        disabled={isSaving}
                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all disabled:opacity-50 disabled:scale-100"
                    >
                        {isSaving ? 'Saving Profile...' : 'Save & Continue'}
                    </button>

                    <button onClick={() => router.push('/settings')} className="w-full text-center text-gray-400 text-sm hover:text-gray-600">
                        Cancel
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
