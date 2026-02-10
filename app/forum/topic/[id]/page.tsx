'use client';

import { useState, useEffect, useCallback, use } from 'react';
import { motion } from 'framer-motion';
import {
    ArrowLeft, ThumbsUp, ThumbsDown, Clock, Eye, MessageCircle,
    Pin, Lock, Edit3, Trash2, Flag, Bookmark, BookmarkCheck,
    Share2, LogIn
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ReplyItem from '@/components/forum/ReplyItem';
import ReplyComposer from '@/components/forum/ReplyComposer';
import AuthModal from '@/components/forum/AuthModal';
import { useAuth } from '@/lib/forum/AuthContext';
import {
    getTopicById, getCategoryById, getRepliesByTopic,
    voteTopic, incrementTopicViews, createReply, deleteTopic,
    updateTopic, toggleFollowTopic, createReport, getForumUserById
} from '@/lib/forum/forum-service';
import { Topic, Reply, ForumCategory } from '@/lib/types/forum';

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
    return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

const categoryColorMap: Record<string, string> = {
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

export default function TopicDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const topicId = resolvedParams.id;
    const { user } = useAuth();
    const router = useRouter();
    const [topic, setTopic] = useState<Topic | null>(null);
    const [category, setCategory] = useState<ForumCategory | null>(null);
    const [replies, setReplies] = useState<Reply[]>([]);
    const [replyingTo, setReplyingTo] = useState<string | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editBody, setEditBody] = useState('');
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [showReport, setShowReport] = useState(false);
    const [reportReason, setReportReason] = useState('');
    const [isFollowing, setIsFollowing] = useState(false);

    const refreshData = useCallback(() => {
        const t = getTopicById(topicId);
        if (t) {
            setTopic(t);
            setCategory(getCategoryById(t.categoryId) || null);
            setReplies(getRepliesByTopic(topicId));
        }
    }, [topicId]);

    useEffect(() => {
        refreshData();
        incrementTopicViews(topicId);
    }, [topicId, refreshData]);

    useEffect(() => {
        if (user && topic) {
            setIsFollowing(user.followedTopics?.includes(topic.id) || false);
        }
    }, [user, topic]);

    if (!topic) {
        return (
            <>
                <Header />
                <main className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <MessageCircle className="w-16 h-16 text-gold/30 mx-auto mb-4" />
                        <h2 className="text-white font-display text-2xl mb-2">Topic Not Found</h2>
                        <p className="text-cream/50 mb-4">This topic may have been deleted or moved.</p>
                        <Link href="/forum" className="btn-primary">Back to Forum</Link>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    const score = topic.upvotes - topic.downvotes;
    const userVote = user ? topic.voters[user.id] : undefined;
    const isAuthor = user?.id === topic.authorId;
    const author = getForumUserById(topic.authorId);
    const topLevelReplies = replies.filter(r => !r.parentReplyId);

    const handleVote = (direction: 'up' | 'down') => {
        if (!user) { setShowAuthModal(true); return; }
        voteTopic(topic.id, user.id, direction);
        refreshData();
    };

    const handleReply = (body: string, isAnonymous: boolean, parentReplyId?: string) => {
        if (!user) return;
        createReply({
            topicId: topic.id,
            parentReplyId,
            body,
            authorId: user.id,
            authorName: isAnonymous ? 'Anonymous' : user.displayName,
            isAnonymous,
        });
        setReplyingTo(null);
        refreshData();
    };

    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this topic and all its replies? This cannot be undone.')) {
            deleteTopic(topic.id);
            router.push('/forum');
        }
    };

    const handleEdit = () => {
        updateTopic(topic.id, { body: editBody });
        setIsEditing(false);
        refreshData();
    };

    const handleFollow = () => {
        if (!user) { setShowAuthModal(true); return; }
        const nowFollowing = toggleFollowTopic(user.id, topic.id);
        setIsFollowing(nowFollowing);
    };

    const handleReport = () => {
        if (!user || !reportReason) return;
        createReport({ contentType: 'topic', contentId: topic.id, reporterId: user.id, reason: reportReason });
        setShowReport(false);
        setReportReason('');
        alert('Report submitted. Thank you for helping keep our community safe.');
    };

    const handleShare = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        } catch {
            // Fallback
        }
    };

    return (
        <>
            <Header />
            <main className="min-h-screen">
                {/* Breadcrumb */}
                <div className="bg-navy-dark border-b border-gold/10 py-3">
                    <div className="container-custom">
                        <div className="flex items-center gap-2 text-sm">
                            <Link href="/forum" className="text-cream/40 hover:text-gold transition-colors flex items-center gap-1">
                                <ArrowLeft className="w-4 h-4" /> Forum
                            </Link>
                            {category && (
                                <>
                                    <span className="text-cream/20">/</span>
                                    <Link href={`/forum?category=${category.id}`} className="text-cream/40 hover:text-gold transition-colors">
                                        {category.name}
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Topic */}
                <section className="py-8">
                    <div className="container-custom max-w-4xl">
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                            {/* Topic header */}
                            <div className="bg-navy border border-gold/20 rounded-xl p-5 sm:p-8 mb-6">
                                {/* Meta */}
                                <div className="flex flex-wrap items-center gap-2 mb-4">
                                    {category && (
                                        <span className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-medium border ${categoryColorMap[category.color] || categoryColorMap.gold}`}>
                                            {category.name}
                                        </span>
                                    )}
                                    {topic.isPinned && (
                                        <span className="inline-flex items-center gap-1 text-xs text-amber-400 bg-amber-400/10 border border-amber-400/30 px-2 py-1 rounded">
                                            <Pin className="w-3 h-3" /> Pinned
                                        </span>
                                    )}
                                    {topic.isLocked && (
                                        <span className="inline-flex items-center gap-1 text-xs text-cream/50 bg-cream/5 border border-cream/20 px-2 py-1 rounded">
                                            <Lock className="w-3 h-3" /> Locked
                                        </span>
                                    )}
                                </div>

                                {/* Title */}
                                <h1 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                                    {topic.title}
                                </h1>

                                {/* Author info */}
                                <div className="flex items-center gap-3 mb-6 p-3 bg-navy-dark/50 rounded-lg border border-gold/10">
                                    <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center">
                                        <span className="text-sm font-bold text-gold">
                                            {(topic.isAnonymous ? 'A' : topic.authorName[0]).toUpperCase()}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-cream/80 font-semibold text-sm">
                                            {topic.isAnonymous ? 'Anonymous' : topic.authorName}
                                        </p>
                                        <div className="flex items-center gap-2 text-xs text-cream/40">
                                            {author && !topic.isAnonymous && (
                                                <>
                                                    {author.city && <span>{author.city}</span>}
                                                    <span>·</span>
                                                    <span>Reputation {author.reputation}</span>
                                                    <span>·</span>
                                                </>
                                            )}
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {timeAgo(topic.createdAt)}
                                            </span>
                                            {topic.editHistory && topic.editHistory.length > 0 && (
                                                <span className="text-cream/30">(edited)</span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Body */}
                                {isEditing ? (
                                    <div className="mb-6">
                                        <textarea
                                            value={editBody}
                                            onChange={(e) => setEditBody(e.target.value)}
                                            className="input w-full min-h-[200px]"
                                        />
                                        <div className="flex gap-2 mt-3">
                                            <button onClick={handleEdit} className="btn-primary text-sm">Save Changes</button>
                                            <button onClick={() => setIsEditing(false)} className="btn-secondary text-sm">Cancel</button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-cream/70 leading-relaxed mb-6 whitespace-pre-wrap">
                                        {topic.body}
                                    </div>
                                )}

                                {/* Tags */}
                                {topic.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {topic.tags.map(tag => (
                                            <span key={tag} className="px-2.5 py-1 bg-navy-dark/80 text-cream/50 rounded-md text-xs border border-gold/10">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Actions bar */}
                                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gold/15">
                                    {/* Voting */}
                                    <div className="flex items-center gap-1 bg-navy-dark/50 rounded-lg border border-gold/10 p-1">
                                        <button
                                            onClick={() => handleVote('up')}
                                            className={`p-2 rounded-md transition-colors ${userVote === 'up' ? 'bg-green-500/15 text-green-400' : 'text-cream/40 hover:text-green-400 hover:bg-green-500/10'}`}
                                        >
                                            <ThumbsUp className="w-4 h-4" />
                                        </button>
                                        <span className={`px-2 font-bold text-sm ${score > 0 ? 'text-green-400' : score < 0 ? 'text-red-400' : 'text-cream/50'}`}>
                                            {score}
                                        </span>
                                        <button
                                            onClick={() => handleVote('down')}
                                            className={`p-2 rounded-md transition-colors ${userVote === 'down' ? 'bg-red-500/15 text-red-400' : 'text-cream/40 hover:text-red-400 hover:bg-red-500/10'}`}
                                        >
                                            <ThumbsDown className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <div className="flex items-center gap-2 text-xs text-cream/40">
                                        <span className="flex items-center gap-1"><Eye className="w-4 h-4" /> {topic.viewCount}</span>
                                        <span className="flex items-center gap-1"><MessageCircle className="w-4 h-4" /> {topic.replyCount}</span>
                                    </div>

                                    <div className="flex-1" />

                                    {/* Follow */}
                                    <button
                                        onClick={handleFollow}
                                        className={`flex items-center gap-1 text-xs px-3 py-1.5 rounded-md border transition-colors ${isFollowing ? 'bg-gold/10 text-gold border-gold/30' : 'text-cream/40 border-gold/10 hover:text-gold hover:border-gold/30'}`}
                                    >
                                        {isFollowing ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                                        {isFollowing ? 'Following' : 'Follow'}
                                    </button>

                                    {/* Share */}
                                    <button onClick={handleShare} className="flex items-center gap-1 text-xs text-cream/40 hover:text-gold px-2 py-1.5 transition-colors">
                                        <Share2 className="w-4 h-4" /> Share
                                    </button>

                                    {/* Author actions */}
                                    {isAuthor && (
                                        <>
                                            <button onClick={() => { setIsEditing(true); setEditBody(topic.body); }} className="flex items-center gap-1 text-xs text-cream/40 hover:text-blue-400 transition-colors">
                                                <Edit3 className="w-4 h-4" /> Edit
                                            </button>
                                            <button onClick={handleDelete} className="flex items-center gap-1 text-xs text-cream/40 hover:text-red-400 transition-colors">
                                                <Trash2 className="w-4 h-4" /> Delete
                                            </button>
                                        </>
                                    )}

                                    {/* Report */}
                                    {user && !isAuthor && (
                                        <button onClick={() => setShowReport(!showReport)} className="flex items-center gap-1 text-xs text-cream/30 hover:text-amber-400 transition-colors">
                                            <Flag className="w-4 h-4" /> Report
                                        </button>
                                    )}
                                </div>

                                {/* Report form */}
                                {showReport && (
                                    <div className="mt-4 p-4 bg-navy-dark/50 rounded-lg border border-gold/15">
                                        <select value={reportReason} onChange={(e) => setReportReason(e.target.value)} className="input text-sm w-full mb-2">
                                            <option value="">Select reason...</option>
                                            <option value="spam">Spam or advertising</option>
                                            <option value="harassment">Harassment or personal attack</option>
                                            <option value="misinformation">Misinformation</option>
                                            <option value="off-topic">Off-topic / irrelevant</option>
                                            <option value="other">Other</option>
                                        </select>
                                        <div className="flex gap-2">
                                            <button onClick={handleReport} disabled={!reportReason} className="btn-primary text-xs">Submit Report</button>
                                            <button onClick={() => setShowReport(false)} className="btn-secondary text-xs">Cancel</button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Replies section */}
                            <div className="mb-6">
                                <h2 className="font-display text-lg font-bold text-white mb-4">
                                    {replies.length} {replies.length === 1 ? 'Reply' : 'Replies'}
                                </h2>

                                <div className="space-y-1">
                                    {topLevelReplies.map(reply => (
                                        <ReplyItem
                                            key={reply.id}
                                            reply={reply}
                                            depth={0}
                                            childReplies={replies.filter(r => r.parentReplyId === reply.id)}
                                            allReplies={replies}
                                            onReplyTo={(replyId) => setReplyingTo(replyId)}
                                            onDataChange={refreshData}
                                        />
                                    ))}
                                </div>

                                {/* Inline reply composer for nested replies */}
                                {replyingTo && (
                                    <div className="mt-4">
                                        <ReplyComposer
                                            topicId={topic.id}
                                            parentReplyId={replyingTo}
                                            onSubmit={handleReply}
                                            onCancel={() => setReplyingTo(null)}
                                            placeholder="Write your reply..."
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Main reply composer */}
                            {!topic.isLocked && (
                                <div>
                                    {user ? (
                                        <ReplyComposer
                                            topicId={topic.id}
                                            onSubmit={handleReply}
                                            placeholder="Share your thoughts on this topic..."
                                        />
                                    ) : (
                                        <div className="bg-navy border border-gold/20 rounded-xl p-8 text-center">
                                            <LogIn className="w-10 h-10 text-gold/40 mx-auto mb-3" />
                                            <h3 className="font-display text-lg text-white mb-2">Join the Discussion</h3>
                                            <p className="text-cream/50 text-sm mb-4">Sign in or create an account to reply to this topic.</p>
                                            <button onClick={() => setShowAuthModal(true)} className="btn-primary">
                                                Sign In to Reply
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}

                            {topic.isLocked && (
                                <div className="bg-navy border border-cream/10 rounded-xl p-6 text-center">
                                    <Lock className="w-8 h-8 text-cream/30 mx-auto mb-2" />
                                    <p className="text-cream/50 text-sm">This topic has been locked by a moderator. No new replies can be added.</p>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />

            <AuthModal isOpen={showAuthModal} onClose={() => { setShowAuthModal(false); refreshData(); }} />
        </>
    );
}
