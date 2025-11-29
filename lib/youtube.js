export const fetchYouTubePlaylists = async (accessToken) => {
    try {
        // Fetch "Liked Videos" (special playlist ID 'LL' is not always directly accessible via playlists API, 
        // but videos?myRating=like is the standard way)

        // Fetch "Watch Later" (often not exposed directly in API v3 for privacy, 
        // but we can try to find a playlist named "Watch Later" or similar if the user has one publicly/unlisted)
        // Note: The official "Watch Later" playlist is often restricted. 
        // We will focus on "Liked Videos" first as it's more reliable via `videos?myRating=like`.

        const response = await fetch('https://www.googleapis.com/youtube/v3/channels?part=contentDetails&mine=true', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        if (!response.ok) throw new Error('Failed to fetch channel details');

        const data = await response.json();
        const uploadsPlaylistId = data.items[0]?.contentDetails?.relatedPlaylists?.uploads;

        // We can also try to fetch user's playlists
        const playlistsResponse = await fetch('https://www.googleapis.com/youtube/v3/playlists?part=snippet&mine=true&maxResults=50', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const playlistsData = await playlistsResponse.json();

        return {
            uploadsId: uploadsPlaylistId,
            playlists: playlistsData.items || []
        };
    } catch (error) {
        console.error('Error fetching YouTube playlists:', error);
        return { playlists: [] };
    }
};

export const fetchLikedVideos = async (accessToken) => {
    try {
        const response = await fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&myRating=like&maxResults=10', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        if (!response.ok) throw new Error('Failed to fetch liked videos');

        const data = await response.json();
        return data.items.map(item => ({
            id: item.id,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url,
            channel: item.snippet.channelTitle,
            publishedAt: item.snippet.publishedAt,
            url: `https://www.youtube.com/watch?v=${item.id}`
        }));
    } catch (error) {
        console.error('Error fetching liked videos:', error);
        return [];
    }
};

export const fetchPlaylistItems = async (accessToken, playlistId) => {
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=10`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        if (!response.ok) throw new Error('Failed to fetch playlist items');

        const data = await response.json();
        return data.items.map(item => ({
            id: item.snippet.resourceId.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url,
            channel: item.snippet.channelTitle,
            publishedAt: item.snippet.publishedAt,
            url: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`
        }));
    } catch (error) {
        console.error('Error fetching playlist items:', error);
        return [];
    }
};
