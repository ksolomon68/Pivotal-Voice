'use client';

import { Topic } from '@/lib/types/forum';
import { getCategoryById } from '@/lib/forum/forum-service';
import { motion } from 'framer-motion';
import { ThumbsUp, ThumbsDown, MessageCircle, Eye, Pin, Lock, Clock } from 'lucide-react';
import Link from 'next/link';

function timeAgo(dateStr: string): string {
    const now = Date.now();
    const then = new Date(dateStr).getTime();
    const diff = now - then;

    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minutes < 1) return 'just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

const categoryColors: Record<string, string> = {
    blue: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
    green: 'bg-green-500/15 text-green-400 border-green-500/30',
    gold: 'bg-gold/15 text-gold border-gold/30',
    purple: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
    red: 'bg-red-500/15 text-red-400 border-red-500/30',
    teal: 'bg-teal-500/15 text-teal-400 border-teal-500/30',
    emerald: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    pink: 'bg-pink-500/15 text-pink-400 border-pink-500/30',
    orange: 'bg-orange-500/15 text-orange-400 border-orange-500/30',
    cyan: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
};

interface TopicCardProps {
    topic: Topic;
    index: number;
}

export default function TopicCard({ topic, index }: TopicCardProps) {
    const category = getCategoryById(topic.categoryId);
    const score = topic.upvotes - topic.downvotes;
    const colorClass = category ? categoryColors[category.color] || categoryColors.gold : categoryColors.gold;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
        >
            <Link
                href={`/forum/topic/${topic.id}`}
                className="block bg-navy border border-gold/15 rounded-xl p-4 sm:p-5 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300 group"
            >
                <div className="flex items-start gap-4">
                    {/* Vote count */}
                    <div className="hidden sm:flex flex-col items-center gap-0.5 min-w-[50px] pt-1">
                        <ThumbsUp className="w-4 h-4 text-cream/40" />
                        <span className={`text-lg font-bold ${score > 0 ? 'text-green-400' : score < 0 ? 'text-red-400' : 'text-cream/50'}`}>
                            {score}
                        </span>
                        <ThumbsDown className="w-4 h-4 text-cream/40" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                        {/* Meta row */}
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                            {category && (
                                <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${colorClass}`}>
                                    {category.name}
                                </span>
                            )}
                            {topic.isPinned && (
                                <span className="inline-flex items-center gap-1 text-xs text-amber-400">
                                    <Pin className="w-3 h-3" /> Pinned
                                </span>
                            )}
                            {topic.isLocked && (
                                <span className="inline-flex items-center gap-1 text-xs text-cream/40">
                                    <Lock className="w-3 h-3" /> Locked
                                </span>
                            )}
                        </div>

                        {/* Title */}
                        <h3 className="font-display text-base sm:text-lg font-semibold text-white group-hover:text-gold transition-colors mb-1 line-clamp-2">
                            {topic.title}
                        </h3>

                        {/* Preview body */}
                        <p className="text-cream/50 text-sm line-clamp-1 mb-3">
                            {topic.body}
                        </p>

                        {/* Tags */}
                        {topic.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mb-3">
                                {topic.tags.slice(0, 4).map(tag => (
                                    <span key={tag} className="px-2 py-0.5 bg-navy-dark/80 text-cream/40 rounded text-xs border border-gold/10">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Footer */}
                        <div className="flex flex-wrap items-center gap-3 text-xs text-cream/40">
                            <span className="text-cream/60">
                                {topic.isAnonymous ? 'Anonymous' : topic.authorName}
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {timeAgo(topic.createdAt)}
                            </span>
                            <span className="flex items-center gap-1">
                                <MessageCircle className="w-3 h-3" />
                                {topic.replyCount} {topic.replyCount === 1 ? 'reply' : 'replies'}
                            </span>
                            <span className="flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                {topic.viewCount} views
                            </span>

                            {/* Mobile vote display */}
                            <span className="sm:hidden flex items-center gap-1">
                                <ThumbsUp className="w-3 h-3" />
                                {score}
                            </span>

                            {topic.lastReplyBy && (
                                <span className="text-cream/30">
                                    Last reply by <span className="text-cream/50">{topic.lastReplyBy}</span> · {timeAgo(topic.lastReplyAt || topic.createdAt)}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
