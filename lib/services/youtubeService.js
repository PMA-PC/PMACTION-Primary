
/**
 * YouTube Service to fetch playlist items
 */

export const fetchPlaylistItems = async (playlistId, accessToken) => {
    if (!accessToken) {
        throw new Error("No access token provided. Please sign in with Google.");
    }

    const response = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || "Failed to fetch playlist items");
    }

    const data = await response.json();
    return data.items.map(item => ({
        id: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        publishedAt: item.snippet.publishedAt,
        channelTitle: item.snippet.channelTitle
    }));
};

export const fetchMyPlaylists = async (accessToken) => {
    if (!accessToken) {
        throw new Error("No access token provided.");
    }

    const response = await fetch(
        `https://www.googleapis.com/youtube/v3/playlists?part=snippet&mine=true&maxResults=20`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || "Failed to fetch playlists");
    }

    const data = await response.json();
    return data.items.map(item => ({
        id: item.id,
        title: item.snippet.title
    }));
}
