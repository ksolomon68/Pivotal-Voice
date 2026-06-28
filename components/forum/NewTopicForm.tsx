'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/forum/AuthContext';
import { getCategories, createTopic } from '@/lib/forum/forum-service';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { X, Send, Eye, EyeOff, Tag, AlertCircle } from 'lucide-react';

interface NewTopicFormProps {
    isOpen: boolean;
    onClose: () => void;
    defaultCategory?: string;
}

export default function NewTopicForm({ isOpen, onClose, defaultCategory }: NewTopicFormProps) {
    const { user } = useAuth();
    const router = useRouter();
    const [categories, setCategories] = useState<any[]>([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [categoryId, setCategoryId] = useState(defaultCategory || '');
    const [tags, setTags] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCats = async () => {
            const data = await getCategories();
            setCategories(data);
        };
        fetchCats();
    }, []);

    if (!isOpen || !user) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!title.trim() || !body.trim() || !categoryId) {
            setError('Title, body, and category are required.');
            return;
        }

        if (title.length < 10) {
            setError('Title must be at least 10 characters.');
            return;
        }

        if (body.length < 20) {
            setError('Post body must be at least 20 characters.');
            return;
        }

        const tagList = tags
            .split(',')
            .map(t => t.trim().toLowerCase().replace(/[^a-z0-9-]/g, ''))
            .filter(Boolean)
            .slice(0, 5);

        const newTopic = await createTopic({
            title: title.trim(),
            body: body.trim(),
            category_id: categoryId,
            author_id: user.id,
            author_name: isAnonymous ? 'Anonymous' : user.displayName,
            is_pinned: false,
            is_locked: false,
            is_anonymous: isAnonymous,
            tags: tagList,
        });

        if (newTopic) {
            // Navigate to the new topic
            router.push(`/forum/topic/${newTopic.id}`);
            onClose();
        } else {
            setError('Failed to create topic. Please try again.');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-start justify-center overflow-y-auto py-8 px-4"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-2xl bg-navy-dark border border-gold/30 rounded-2xl overflow-hidden shadow-2xl"
            >
                {/* Header */}
                <div className="p-6 pb-4 flex items-center justify-between border-b border-gold/20">
                    <h2 className="font-display text-xl font-bold text-white">Start a New Discussion</h2>
                    <button onClick={onClose} className="p-2 text-cream/60 hover:text-white transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {error && (
                    <div className="mx-6 mt-4 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    {/* Category */}
                    <div>
                        <label className="text-xs font-semibold text-gold uppercase tracking-wider mb-2 block">Category *</label>
                        <select
                            value={categoryId}
                            onChange={(e) => setCategoryId(e.target.value)}
                            className="input w-full"
                            required
                        >
                            <option value="">Select a category...</option>
                            {categories.map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))}
                        </select>
                    </div>

                    {/* Title */}
                    <div>
                        <label className="text-xs font-semibold text-gold uppercase tracking-wider mb-2 block">Title *</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="input w-full"
                            placeholder="What's on your mind? Be specific and descriptive."
                            required
                            minLength={10}
                            maxLength={200}
                        />
                        <p className="text-cream/30 text-xs mt-1">{title.length}/200 characters</p>
                    </div>

                    {/* Body */}
                    <div>
                        <label className="text-xs font-semibold text-gold uppercase tracking-wider mb-2 block">Discussion *</label>
                        <textarea
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            className="input w-full min-h-[200px]"
                            placeholder="Share your thoughts, questions, or ideas. Provide context and details so the community can engage meaningfully."
                            required
                            minLength={20}
                        />
                        <p className="text-cream/30 text-xs mt-1">{body.length} characters</p>
                    </div>

                    {/* Tags */}
                    <div>
                        <label className="text-xs font-semibold text-gold uppercase tracking-wider mb-2 block flex items-center gap-1">
                            <Tag className="w-3 h-3" /> Tags (optional)
                        </label>
                        <input
                            type="text"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            className="input w-full"
                            placeholder="e.g. roads, taxes, school-board (comma separated, max 5)"
                        />
                    </div>

                    {/* Anonymous toggle + Submit */}
                    <div className="flex items-center justify-between pt-4 border-t border-gold/15">
                        <label className="flex items-center gap-2 cursor-pointer text-sm text-cream/50 hover:text-cream/70 transition-colors">
                            {isAnonymous ? <EyeOff className="w-4 h-4 text-amber-400" /> : <Eye className="w-4 h-4" />}
                            <input
                                type="checkbox"
                                checked={isAnonymous}
                                onChange={(e) => setIsAnonymous(e.target.checked)}
                                className="sr-only"
                            />
                            Post anonymously
                        </label>

                        <div className="flex gap-3">
                            <button type="button" onClick={onClose} className="btn-secondary">Cancel</button>
                            <button type="submit" className="btn-primary flex items-center gap-2">
                                <Send className="w-4 h-4" /> Post Discussion
                            </button>
                        </div>
                    </div>

                    <p className="text-cream/30 text-xs text-center">
                        By posting, you agree to our community guidelines. Be respectful and stay on topic.
                    </p>
                </form>
            </motion.div>
        </motion.div>
    );
}
