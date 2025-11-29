import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useApp } from '../lib/context';
import { supabase } from '../lib/supabaseClient';
import { fetchLikedVideos, fetchYouTubePlaylists, fetchPlaylistItems } from '../lib/youtube';

export default function Library() {
    const router = useRouter();
    const { user } = useApp();
    const [savedItems, setSavedItems] = useState([]);
    const [newItemUrl, setNewItemUrl] = useState('');
    const [newItemTitle, setNewItemTitle] = useState('');
    const [newItemType, setNewItemType] = useState('article');
    const [isAdding, setIsAdding] = useState(false);

    // YouTube State
    const [activeTab, setActiveTab] = useState('saved'); // 'saved', 'youtube'
    const [youtubeConnected, setYoutubeConnected] = useState(false);
    const [likedVideos, setLikedVideos] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    const [loadingYoutube, setLoadingYoutube] = useState(false);

    // Load from local storage
    useEffect(() => {
        const saved = localStorage.getItem('pmaction_library');
        if (saved) {
            setSavedItems(JSON.parse(saved));
        }
    }, []);

    // Save to local storage
    useEffect(() => {
        localStorage.setItem('pmaction_library', JSON.stringify(savedItems));
    }, [savedItems]);

    // Check YouTube Connection and Fetch Data
    useEffect(() => {
        if (activeTab === 'youtube' && user) {
            checkYouTubeConnection();
        }
    }, [activeTab, user]);

    const checkYouTubeConnection = async () => {
        setLoadingYoutube(true);
        try {
            const { data: { session } } = await supabase.auth.getSession();
            if (session?.provider_token) {
                setYoutubeConnected(true);
                // Fetch Data
                const liked = await fetchLikedVideos(session.provider_token);
                setLikedVideos(liked);

                const playlistData = await fetchYouTubePlaylists(session.provider_token);
                setPlaylists(playlistData.playlists);
            } else {
                setYoutubeConnected(false);
            }
        } catch (error) {
            console.error('Error checking YouTube:', error);
        } finally {
            setLoadingYoutube(false);
        }
    };

    const handleAddItem = (e) => {
        e.preventDefault();
        if (!newItemTitle.trim()) return;

        const item = {
            id: Date.now(),
            title: newItemTitle.trim(),
            url: newItemUrl.trim() || '#',
            type: newItemType,
            dateAdded: new Date().toISOString()
        };

        setSavedItems([item, ...savedItems]);
        setNewItemTitle('');
        setNewItemUrl('');
        setIsAdding(false);
    };

    const deleteItem = (id) => {
        setSavedItems(savedItems.filter(item => item.id !== id));
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
            <Head>
                <title>Library | PMAction</title>
            </Head>

            <nav className="bg-white shadow-sm sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center cursor-pointer" onClick={() => router.push('/dashboard')}>
                            <span className="text-2xl mr-2">⬅️</span>
                            <h1 className="text-xl font-bold text-gray-900">Library</h1>
                        </div>
                        {activeTab === 'saved' && (
                            <button
                                onClick={() => setIsAdding(!isAdding)}
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition"
                            >
                                {isAdding ? 'Cancel' : '+ Add Item'}
                            </button>
                        )}
                    </div>
                </div>
            </nav>

            <main className="max-w-4xl mx-auto py-8 px-4">
                {/* Tabs */}
                <div className="flex gap-4 mb-8 border-b border-gray-200">
                    <button
                        onClick={() => setActiveTab('saved')}
                        className={`pb-4 px-2 font-bold transition-colors ${activeTab === 'saved' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        Saved Items
                    </button>
                    <button
                        onClick={() => setActiveTab('youtube')}
                        className={`pb-4 px-2 font-bold transition-colors ${activeTab === 'youtube' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        YouTube Activity
                    </button>
                </div>

                {activeTab === 'saved' && (
                    <>
                        {isAdding && (
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8 animate-fade-in-up">
                                <h2 className="text-lg font-bold mb-4">Save New Item</h2>
                                <form onSubmit={handleAddItem} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">Title</label>
                                        <input
                                            type="text"
                                            value={newItemTitle}
                                            onChange={(e) => setNewItemTitle(e.target.value)}
                                            placeholder="Article or Quiz Title"
                                            className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                            autoFocus
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">URL (Optional)</label>
                                        <input
                                            type="url"
                                            value={newItemUrl}
                                            onChange={(e) => setNewItemUrl(e.target.value)}
                                            placeholder="https://..."
                                            className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">Type</label>
                                        <div className="flex gap-4">
                                            {['article', 'quiz', 'video', 'book'].map(type => (
                                                <label key={type} className="flex items-center cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="type"
                                                        value={type}
                                                        checked={newItemType === type}
                                                        onChange={(e) => setNewItemType(e.target.value)}
                                                        className="mr-2 text-blue-600 focus:ring-blue-500"
                                                    />
                                                    <span className="capitalize text-gray-700">{type}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex justify-end pt-4">
                                        <button
                                            type="submit"
                                            disabled={!newItemTitle.trim()}
                                            className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-blue-700 disabled:opacity-50 transition"
                                        >
                                            Save Item
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}

                        {savedItems.length === 0 ? (
                            <div className="text-center py-12">
                                <div className="text-6xl mb-4">📚</div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Your Library is Empty</h3>
                                <p className="text-gray-500">Save articles, quizzes, and resources here for later.</p>
                            </div>
                        ) : (
                            <div className="grid gap-4">
                                {savedItems.map(item => (
                                    <div key={item.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between group hover:border-blue-200 transition-all">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl">
                                                {item.type === 'article' ? '📄' :
                                                    item.type === 'quiz' ? '❓' :
                                                        item.type === 'video' ? '▶️' : '📖'}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-800 text-lg">
                                                    {item.url !== '#' ? (
                                                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">
                                                            {item.title}
                                                        </a>
                                                    ) : (
                                                        item.title
                                                    )}
                                                </h3>
                                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                                    <span className="capitalize bg-gray-100 px-2 py-0.5 rounded text-xs font-bold">{item.type}</span>
                                                    <span>• Added {new Date(item.dateAdded).toLocaleDateString()}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => deleteItem(item.id)}
                                            className="text-gray-300 hover:text-red-500 p-2 opacity-0 group-hover:opacity-100 transition-all"
                                            title="Remove"
                                        >
                                            🗑️
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}

                {activeTab === 'youtube' && (
                    <div className="space-y-8">
                        {!youtubeConnected ? (
                            <div className="text-center py-12 bg-white rounded-2xl shadow-sm border border-gray-100">
                                <div className="text-6xl mb-4">📺</div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Connect YouTube</h3>
                                <p className="text-gray-500 mb-6">Sign in with Google to see your Liked Videos and Playlists.</p>
                                <p className="text-xs text-gray-400">Note: You may need to sign out and sign back in to grant permissions.</p>
                            </div>
                        ) : loadingYoutube ? (
                            <div className="text-center py-12">
                                <div className="w-8 h-8 border-4 border-red-200 border-t-red-600 rounded-full animate-spin mx-auto mb-4"></div>
                                <p className="text-gray-500">Loading YouTube data...</p>
                            </div>
                        ) : (
                            <>
                                {/* Liked Videos */}
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <span className="text-red-600">👍</span> Liked Videos
                                    </h2>
                                    {likedVideos.length === 0 ? (
                                        <p className="text-gray-500 italic">No liked videos found.</p>
                                    ) : (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {likedVideos.map(video => (
                                                <a
                                                    key={video.id}
                                                    href={video.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all group"
                                                >
                                                    <div className="relative aspect-video bg-gray-100">
                                                        {video.thumbnail && (
                                                            <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                                                        )}
                                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all flex items-center justify-center">
                                                            <span className="text-white opacity-0 group-hover:opacity-100 text-4xl">▶️</span>
                                                        </div>
                                                    </div>
                                                    <div className="p-4">
                                                        <h3 className="font-bold text-gray-800 line-clamp-2 mb-1">{video.title}</h3>
                                                        <p className="text-xs text-gray-500">{video.channel}</p>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Playlists */}
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <span className="text-red-600">📑</span> Playlists
                                    </h2>
                                    {playlists.length === 0 ? (
                                        <p className="text-gray-500 italic">No playlists found.</p>
                                    ) : (
                                        <div className="space-y-3">
                                            {playlists.map(playlist => (
                                                <div key={playlist.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                                                    <div className="flex items-center gap-4">
                                                        <div className="text-2xl">📑</div>
                                                        <div>
                                                            <h3 className="font-bold text-gray-800">{playlist.snippet.title}</h3>
                                                            <p className="text-xs text-gray-500">{playlist.contentDetails.itemCount} videos</p>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href={`https://www.youtube.com/playlist?list=${playlist.id}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-600 font-bold text-sm hover:underline"
                                                    >
                                                        View Playlist
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                )}
            </main>
        </div>
    );
}
