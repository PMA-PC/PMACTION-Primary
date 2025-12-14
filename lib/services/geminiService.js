import { GoogleGenAI } from "@google/genai";

let ai;

// Lazy initializer for the AI client to prevent startup crashes.
function getAiClient() {
    if (!ai) {
        ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY || process.env.API_KEY });
    }
    return ai;
}

/**
 * Gets a daily affirmation from the Gemini API.
 */
export const getDailyAffirmation = async () => {
    try {
        const client = getAiClient();
        const response = await client.models.generateContent({
            model: 'gemini-2.0-flash',
            contents: 'Generate a short, positive affirmation for the day.',
            config: {
                // To encourage variety
                temperature: 0.9,
            }
        });
        // Use .text property to get the string output directly
        return response.text().trim().replace(/"/g, ''); // Remove quotes
    } catch (error) {
        console.error("Error fetching daily affirmation:", error);
        return "You are capable of amazing things."; // Fallback affirmation
    }
};

/**
 * Generates a blog post on a given topic.
 */
export const generateBlogPost = async (topic) => {
    try {
        const client = getAiClient();
        const prompt = `Write a short, uplifting blog post about "${topic}". Start with a title on the first line, like "# My Title".
        The tone should be supportive and informative.
        
        You MUST include the following sections at the end:
        
        **Actionable Item**
        Give one specific, easy-to-do action that supports the concept.
        
        **Quick Examples**
        Give 2 or 3 quick, 30-second examples of how to apply this.
        
        **Journal Prompt**
        Provide a specific question for the user to reflect on or a commitment they can make.`;
        const response = await client.models.generateContent({
            model: 'gemini-2.0-flash',
            contents: prompt,
        });
        return response.text();
    } catch (error) {
        console.error("Error generating blog post:", error);
        throw error; // Let the UI handle the error state
    }
};

/**
 * Generates educational content about a mental health topic for a specific audience.
 */
export const generateEducationalContent = async (topic, audience) => {
    try {
        const client = getAiClient();
        const prompt = `Write a brief, easy-to-understand educational piece about "${topic}". The target audience is "${audience}". The tone should be empathetic, supportive, and informative, avoiding clinical jargon. Focus on explaining the topic, common symptoms or feelings, and a message of hope and where to find help. Do not provide medical advice.`;
        const response = await client.models.generateContent({
            model: 'gemini-2.0-flash',
            contents: prompt,
        });
        return response.text();
    } catch (error) {
        console.error("Error generating educational content:", error);
        return `We're sorry, but we couldn't generate content for "${topic}" right now. Please check back later.`;
    }
};

/**
 * Generates a simple, actionable plan based on a user's input.
 */
export const generateActionPlan = async (skill) => {
    try {
        const client = getAiClient();
        const prompt = `Create a simple, step-by-step guided exercise for a user who wants help with "${skill}". Return ONLY valid JSON with this structure: { "title": "string", "steps": ["string", "string"] }. Do not wrap in markdown code blocks.`;

        const response = await client.models.generateContent({
            model: 'gemini-2.0-flash',
            contents: prompt,
            config: {
                responseMimeType: "application/json"
            }
        });

        const jsonString = response.text();
        const parsed = JSON.parse(jsonString);

        if (parsed.title && Array.isArray(parsed.steps)) {
            return parsed;
        } else {
            // Fallback if JSON is not in the expected format
            console.error("Generated JSON for action plan is not in the expected format:", parsed);
            return {
                title: `An Exercise for ${skill}`,
                steps: ["Take a deep breath.", "Focus on your current surroundings.", "Acknowledge your feelings without judgment.", "Think of one small, positive action you can take right now."]
            };
        }

    } catch (error) {
        console.error("Error generating action plan:", error);
        return {
            title: `Error Generating Exercise`,
            steps: [`We could not generate an exercise for "${skill}" at this moment. Please try again.`]
        };
    }
};

/**
 * Generates self-care ideas for the SelfCarePage.
 */
export const generateSelfCareIdeas = async (prompt) => {
    const client = getAiClient();
    const response = await client.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: `Generate 3 simple, actionable self-care ideas for someone who is feeling ${prompt}. Return ONLY valid JSON with this structure: { "ideas": [{ "title": "string", "steps": ["string"] }] }.`,
        config: {
            responseMimeType: 'application/json'
        }
    });
    const parsed = JSON.parse(response.text());
    return parsed.ideas;
};

/**
 * Creates a new chat instance for the AICoachModal.
 */
export const createChat = () => {
    const client = getAiClient();
    return client.chats.create({
        model: 'gemini-2.0-flash',
        config: {
            systemInstruction: 'You are a friendly and supportive AI wellness coach. Your goal is to listen, offer encouragement, and provide general wellness tips. Do not provide medical advice. Keep your responses concise.',
        }
    });
};

/**
 * Performs a deep dive analysis on a topic using Gemini.
 */
export const getGeminiDeepDive = async (prompt) => {
    try {
        const client = getAiClient();
        const response = await client.models.generateContent({
            model: 'gemini-2.0-flash',
            contents: prompt,
        });
        return response.text();
    } catch (error) {
        console.error("Error performing deep dive:", error);
        throw error; // Re-throw to be handled by the component
    }
};

// --- NEW METHODS ---

/**
 * Generates a new quiz on a specific topic.
 */
export const generateQuiz = async (topic) => {
    try {
        const client = getAiClient();
        const prompt = `Create a short, engaging 5-question self-assessment quiz about "${topic}". 
        Return ONLY valid JSON with this structure:
        {
            "id": "gen-${Date.now()}",
            "title": "${topic} Assessment",
            "description": "A quick check-in on your ${topic}.",
            "timeToComplete": "2 mins",
            "source": "AI Generated",
            "questions": ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5"],
            "scoring": [
                { "range": [0, 5], "level": "Low", "interpretation": "Seems low.", "recommendation": "Keep it up." },
                { "range": [6, 15], "level": "Medium", "interpretation": "Moderate levels.", "recommendation": "Monitor closely." },
                { "range": [16, 25], "level": "High", "interpretation": "High levels.", "recommendation": "Seek support." }
            ]
        }`;

        const response = await client.models.generateContent({
            model: 'gemini-2.0-flash',
            contents: prompt,
            config: { responseMimeType: "application/json" }
        });
        return JSON.parse(response.text());
    } catch (error) {
        console.error("Error generating quiz:", error);
        return null;
    }
};

/**
 * Generates a gratitude journal prompt.
 */
export const generateGratitudePrompt = async () => {
    try {
        const client = getAiClient();
        const response = await client.models.generateContent({
            model: 'gemini-2.0-flash',
            contents: "Generate a unique, thought-provoking gratitude journal prompt. Return raw text only.",
        });
        return response.text();
    } catch (error) {
        console.error("Error generating gratitude prompt:", error);
        return "What is one thing that made you smile today?";
    }
};

/**
 * Generates personalized insights based on user data.
 */
export const generatePersonalizedInsights = async ({ moods, history, reading }) => {
    try {
        const client = getAiClient();
        const prompt = `Analyze this user data and provide 3 personalized mental wellness insights/suggestions.
        
        Recent Moods: ${JSON.stringify(moods?.slice(0, 5) || [])}
        Assessment History: ${JSON.stringify(history?.slice(0, 3) || [])}
        Reading Interests: ${JSON.stringify(reading?.slice(0, 3) || [])}

        Format as a markdown list. Be encouraging and specific. Use bolding for key terms.`;

        const response = await client.models.generateContent({
            model: 'gemini-2.0-flash',
            contents: prompt,
        });
        return response.text();
    } catch (error) {
        console.error("Error generating insights:", error);
        return "Not enough data to generate insights yet. Keep logging your moods and activities!";
        return "Not enough data to generate insights yet. Keep logging your moods and activities!";
    }
};

/**
 * Generates blog posts based on YouTube video data, grouped by theme.
 */
export const generateBlogFromVideoData = async (videos) => {
    try {
        const client = getAiClient();
        const videoSummaries = videos.map(v => `- Title: ${v.title}. Description: ${v.description ? v.description.substring(0, 200) + '...' : 'No description'}`).join('\n');

        const prompt = `I have a list of YouTube videos that I've watched or saved. 
        
        **Goal:** Analyze these videos, group them by distinct themes (e.g., "ADHD Strategies", "Relationship Advice", "Coding tutorials"), and generate a separate, insightful blog post for EACH theme.
        
        Here are the videos:
        ${videoSummaries}
        
        **Instructions:**
        1.  **Cluster:** Group videos by topic. If a topic has only 1 insignificant video, skip it. Focus on clusters of 2+ videos or single, deep-dive topics.
        2.  **Generate:** For each cluster, write a blog post (400-600 words) synthesizing the lessons.
        3.  **Format:** Return ONLY valid JSON with no markdown wrapping. Structure:
        {
            "posts": [
                {
                    "title": "# Title Here",
                    "content": "Full markdown content here...",
                    "tags": ["Topic Name", "YouTube Insight"]
                }
            ]
        }
        
        **Content Structure for each post:**
        *   **Introduction:** Hook the reader.
        *   **Key Insights:** Synthesize the videos.
        *   **Actionable Advice:** What can the reader DO?
        *   **Video Reference:** "Inspired by videos on [Topic]..."`;

        const response = await client.models.generateContent({
            model: 'gemini-2.0-flash',
            contents: prompt,
            config: { responseMimeType: "application/json" }
        });

        return JSON.parse(response.text());
    } catch (error) {
        console.error("Error generating video blog:", error);
        throw error;
    }
};

/**
 * Generates personalized content recommendations (Blog Topics & Challenge Ideas) based on user profile.
 */
export const generateContentRecommendations = async ({ moods, recentWins, interests }) => {
    try {
        const client = getAiClient();
        const prompt = `Analyze this user profile and generate 3 specific recommendations.
        
        User Context:
        - Recent Moods: ${JSON.stringify(moods?.slice(0, 5) || [])}
        - Recent Wins/Activities: ${JSON.stringify(recentWins?.slice(0, 5) || [])}
        - Interests/Tags: ${JSON.stringify(interests || [])}

        Return ONLY valid JSON with this structure:
        {
            "articleTopic": "Specific Blog Title based on mood/interests",
            "articleReason": "Why this is recommended (1 sentence)",
            "challengeId": "One of these IDs: [focus_flow_builder_2, physiology_first, crisis_control, thought_detective, ceo_brain, social_navigator, authentic_self]",
            "challengeReason": "Why this challenge fits their current state"
        }`;

        const response = await client.models.generateContent({
            model: 'gemini-2.0-flash',
            contents: prompt,
            config: { responseMimeType: "application/json" }
        });

        return JSON.parse(response.text());
    } catch (error) {
        console.error("Error generating recommendations:", error);
        return null; // Fallback to random in UI
    }
};
