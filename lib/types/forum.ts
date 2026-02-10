// Forum TypeScript interfaces

export interface ForumUser {
    id: string;
    email: string;
    displayName: string;
    passwordHash: string;
    avatar?: string;
    joinDate: string;
    city?: string;
    isBusinessOwner?: boolean;
    yearsInCounty?: number;
    bio?: string;
    reputation: number;
    topicCount: number;
    replyCount: number;
    isAdmin?: boolean;
    isModerator?: boolean;
    followedTopics: string[];
    notifications: ForumNotification[];
}

export interface ForumCategory {
    id: string;
    name: string;
    description: string;
    icon: string;
    topicCount: number;
    color: string;
    order: number;
}

export type SortOption = 'newest' | 'active' | 'popular' | 'trending';

export interface Topic {
    id: string;
    title: string;
    body: string;
    categoryId: string;
    authorId: string;
    authorName: string;
    createdAt: string;
    updatedAt: string;
    upvotes: number;
    downvotes: number;
    replyCount: number;
    viewCount: number;
    isPinned: boolean;
    isLocked: boolean;
    isAnonymous: boolean;
    tags: string[];
    lastReplyAt?: string;
    lastReplyBy?: string;
    voters: Record<string, 'up' | 'down'>;
    editHistory?: { editedAt: string; previousBody: string }[];
}

export interface Reply {
    id: string;
    topicId: string;
    parentReplyId?: string;
    body: string;
    authorId: string;
    authorName: string;
    createdAt: string;
    updatedAt: string;
    upvotes: number;
    downvotes: number;
    isAnonymous: boolean;
    voters: Record<string, 'up' | 'down'>;
    editHistory?: { editedAt: string; previousBody: string }[];
    isDeleted?: boolean;
}

export interface Report {
    id: string;
    contentType: 'topic' | 'reply';
    contentId: string;
    reporterId: string;
    reason: string;
    details?: string;
    createdAt: string;
    status: 'pending' | 'reviewed' | 'dismissed' | 'actioned';
}

export interface ForumNotification {
    id: string;
    type: 'reply' | 'mention' | 'vote' | 'follow';
    message: string;
    topicId: string;
    createdAt: string;
    read: boolean;
}

export interface ForumStats {
    totalTopics: number;
    totalReplies: number;
    totalUsers: number;
    activeToday: number;
}

export interface LocalResource {
    name: string;
    description: string;
    url: string;
    phone?: string;
    category: 'government' | 'emergency' | 'services' | 'community';
}
