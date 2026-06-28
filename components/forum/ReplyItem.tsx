'use client';

import { Reply } from '@/lib/types/forum';
import { useAuth } from '@/lib/forum/AuthContext';
import { voteReply, deleteReply, updateReply, createReport } from '@/lib/forum/forum-service';
import { useState } from 'react';
import { ThumbsUp, ThumbsDown, Flag, Edit3, Trash2, Clock, CornerDownRight, X, Check } from 'lucide-react';

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

interface ReplyItemProps {
    reply: Reply;
    depth: number;
    childReplies: Reply[];
    allReplies: Reply[];
    onReplyTo: (replyId: string) => void;
    onDataChange: () => void;
}

export default function ReplyItem({ reply, depth, childReplies, allReplies, onReplyTo, onDataChange }: ReplyItemProps) {
    const { user } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [editBody, setEditBody] = useState(reply.body);
    const [showReport, setShowReport] = useState(false);
    const [reportReason, setReportReason] = useState('');

    const score = reply.upvotes - reply.downvotes;
    const isAuthor = user?.id === reply.authorId;
    const userVote = user ? reply.voters[user.id] : undefined;
    const maxDepth = 4;

    const handleVote = async (direction: 'up' | 'down') => {
        if (!user) return;
        await voteReply(reply.id, user.id, direction);
        onDataChange();
    };

    const handleEdit = async () => {
        await updateReply(reply.id, editBody);
        setIsEditing(false);
        onDataChange();
    };

    const handleDelete = async () => {
        if (confirm('Are you sure you want to delete this reply?')) {
            await deleteReply(reply.id);
            onDataChange();
        }
    };

    const handleReport = async () => {
        if (!user || !reportReason) return;
        await createReport({ content_type: 'reply', content_id: reply.id, reporter_id: user.id, reason: reportReason });
        setShowReport(false);
        setReportReason('');
        alert('Report submitted. Thank you for helping keep our community safe.');
    };

    return (
        <div className={`${depth > 0 ? `ml-4 sm:ml-8 pl-4 border-l-2 border-gold/${Math.max(10, 30 - depth * 8)}` : ''}`}>
            <div className={`bg-navy${depth > 0 ? '-dark/30' : ''} border border-gold/${depth > 0 ? '10' : '15'} rounded-lg p-4 mb-3 ${reply.isDeleted ? 'opacity-50' : ''}`}>
                {/* Author + timestamp */}
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-sm">
                        <div className="w-7 h-7 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center">
                            <span className="text-xs font-bold text-gold">
                                {(reply.isAnonymous ? 'A' : reply.authorName[0]).toUpperCase()}
                            </span>
                        </div>
                        <span className="font-semibold text-cream/80">
                            {reply.isAnonymous ? 'Anonymous' : reply.authorName}
                        </span>
                        <span className="text-cream/30">·</span>
                        <span className="text-cream/40 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {timeAgo(reply.createdAt)}
                        </span>
                        {reply.editHistory && reply.editHistory.length > 0 && (
                            <span className="text-cream/30 text-xs">(edited)</span>
                        )}
                    </div>
                </div>

                {/* Body */}
                {isEditing ? (
                    <div className="mb-3">
                        <textarea
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)}
                            className="input w-full min-h-[80px] text-sm"
                        />
                        <div className="flex gap-2 mt-2">
                            <button onClick={handleEdit} className="btn-primary text-xs flex items-center gap-1">
                                <Check className="w-3 h-3" /> Save
                            </button>
                            <button onClick={() => { setIsEditing(false); setEditBody(reply.body); }} className="btn-secondary text-xs flex items-center gap-1">
                                <X className="w-3 h-3" /> Cancel
                            </button>
                        </div>
                    </div>
                ) : (
                    <p className="text-cream/70 text-sm leading-relaxed mb-3 whitespace-pre-wrap">{reply.body}</p>
                )}

                {/* Actions */}
                {!reply.isDeleted && (
                    <div className="flex flex-wrap items-center gap-3 text-xs">
                        {/* Voting */}
                        <div className="flex items-center gap-1">
                            <button
                                onClick={() => handleVote('up')}
                                className={`p-1 rounded transition-colors ${userVote === 'up' ? 'text-green-400' : 'text-cream/40 hover:text-green-400'}`}
                                disabled={!user}
                            >
                                <ThumbsUp className="w-3.5 h-3.5" />
                            </button>
                            <span className={`font-semibold ${score > 0 ? 'text-green-400' : score < 0 ? 'text-red-400' : 'text-cream/50'}`}>
                                {score}
                            </span>
                            <button
                                onClick={() => handleVote('down')}
                                className={`p-1 rounded transition-colors ${userVote === 'down' ? 'text-red-400' : 'text-cream/40 hover:text-red-400'}`}
                                disabled={!user}
                            >
                                <ThumbsDown className="w-3.5 h-3.5" />
                            </button>
                        </div>

                        {/* Reply to */}
                        {user && depth < maxDepth && (
                            <button
                                onClick={() => onReplyTo(reply.id)}
                                className="flex items-center gap-1 text-cream/40 hover:text-gold transition-colors"
                            >
                                <CornerDownRight className="w-3.5 h-3.5" /> Reply
                            </button>
                        )}

                        {/* Author actions */}
                        {isAuthor && (
                            <>
                                <button onClick={() => setIsEditing(true)} className="flex items-center gap-1 text-cream/40 hover:text-blue-400 transition-colors">
                                    <Edit3 className="w-3.5 h-3.5" /> Edit
                                </button>
                                <button onClick={handleDelete} className="flex items-center gap-1 text-cream/40 hover:text-red-400 transition-colors">
                                    <Trash2 className="w-3.5 h-3.5" /> Delete
                                </button>
                            </>
                        )}

                        {/* Report */}
                        {user && !isAuthor && (
                            <button onClick={() => setShowReport(!showReport)} className="flex items-center gap-1 text-cream/30 hover:text-amber-400 transition-colors">
                                <Flag className="w-3.5 h-3.5" /> Report
                            </button>
                        )}
                    </div>
                )}

                {/* Report form */}
                {showReport && (
                    <div className="mt-3 p-3 bg-navy-dark/50 rounded border border-gold/15">
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

            {/* Child replies */}
            {childReplies.map(child => (
                <ReplyItem
                    key={child.id}
                    reply={child}
                    depth={depth + 1}
                    childReplies={allReplies.filter(r => r.parentReplyId === child.id)}
                    allReplies={allReplies}
                    onReplyTo={onReplyTo}
                    onDataChange={onDataChange}
                />
            ))}
        </div>
    );
}
