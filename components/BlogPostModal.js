import { generateBlogPost } from '../lib/services/geminiService';
import { useState, useEffect } from 'react';
import Spinner from './Spinner';

const BlogPostModal = ({ onClose, post }) => {
    const [content, setContent] = useState(post.content);
    const [isLoading, setIsLoading] = useState(post.isGenerated && post.content.includes("Click to read"));

    useEffect(() => {
        const fetchContent = async () => {
            if (post.isGenerated && post.content.includes("Click to read")) {
                setIsLoading(true);
                try {
                    const generatedMarkdown = await generateBlogPost(post.title);
                    setContent(generatedMarkdown);
                } catch (error) {
                    setContent("Sorry, we couldn't generate this article right now.");
                } finally {
                    setIsLoading(false);
                }
            }
        };
        fetchContent();
    }, [post]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center animate-fade-in p-4">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-7 relative prose max-h-[90vh] overflow-y-auto">
                <button
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl"
                    onClick={onClose}
                    aria-label="Close"
                >&times;</button>
                {post.imageUrl && (
                    <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full rounded mb-4 object-cover max-h-[180px]"
                    />
                )}
                <h2 className="font-bold text-2xl mb-2 text-gray-900">{post.title}</h2>
                <div className="text-gray-500 text-xs mb-4">
                    {post.author ? `By ${post.author}` : ''} {post.date ? `• ${post.date}` : ''}
                </div>

                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-12">
                        <Spinner size="h-8 w-8" color="text-blue-500" />
                        <p className="mt-4 text-gray-500 animate-pulse">Consulting the AI Coach...</p>
                    </div>
                ) : (
                    <div
                        className="mb-3 text-gray-700 leading-relaxed whitespace-pre-line"
                        dangerouslySetInnerHTML={{ __html: content }} // In real app, use a markdown parser here
                    />
                )}

                {post.tags && (
                    <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.map(tag => (
                            <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded font-medium">#{tag}</span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogPostModal;
