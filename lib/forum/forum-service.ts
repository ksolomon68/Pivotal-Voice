import { Topic, Reply, Report, ForumUser, ForumCategory, ForumNotification, SortOption } from '@/lib/types/forum';
import { SEED_TOPICS, SEED_REPLIES, SEED_USERS, FORUM_CATEGORIES } from './forum-data';

const STORAGE_KEYS = {
    TOPICS: 'pv_forum_topics',
    REPLIES: 'pv_forum_replies',
    USERS: 'pv_forum_users',
    REPORTS: 'pv_forum_reports',
    CATEGORIES: 'pv_forum_categories',
    INITIALIZED: 'pv_forum_init',
};

// ─── Helpers ───────────────────────────────────────────────
function getItem<T>(key: string, fallback: T): T {
    if (typeof window === 'undefined') return fallback;
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch {
        return fallback;
    }
}

function setItem(key: string, value: unknown) {
    if (typeof window === 'undefined') return;
    localStorage.setItem(key, JSON.stringify(value));
}

// ─── Initialize ────────────────────────────────────────────
export function initializeForumData() {
    if (typeof window === 'undefined') return;
    const initialized = localStorage.getItem(STORAGE_KEYS.INITIALIZED);
    if (initialized) return;

    // Update category topic counts from seed data
    const cats = FORUM_CATEGORIES.map(cat => ({
        ...cat,
        topicCount: SEED_TOPICS.filter(t => t.categoryId === cat.id).length,
    }));

    setItem(STORAGE_KEYS.TOPICS, SEED_TOPICS);
    setItem(STORAGE_KEYS.REPLIES, SEED_REPLIES);
    setItem(STORAGE_KEYS.USERS, SEED_USERS);
    setItem(STORAGE_KEYS.CATEGORIES, cats);
    setItem(STORAGE_KEYS.REPORTS, []);
    localStorage.setItem(STORAGE_KEYS.INITIALIZED, 'true');
}

// ─── Categories ────────────────────────────────────────────
export function getCategories(): ForumCategory[] {
    return getItem<ForumCategory[]>(STORAGE_KEYS.CATEGORIES, FORUM_CATEGORIES);
}

export function getCategoryById(id: string): ForumCategory | undefined {
    return getCategories().find(c => c.id === id);
}

// ─── Topics ────────────────────────────────────────────────
export function getTopics(): Topic[] {
    return getItem<Topic[]>(STORAGE_KEYS.TOPICS, []);
}

export function getTopicById(id: string): Topic | undefined {
    return getTopics().find(t => t.id === id);
}

export function getTopicsByCategory(categoryId: string): Topic[] {
    return getTopics().filter(t => t.categoryId === categoryId);
}

export function sortTopics(topics: Topic[], sort: SortOption): Topic[] {
    const sorted = [...topics];
    switch (sort) {
        case 'newest':
            sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            break;
        case 'active':
            sorted.sort((a, b) => {
                const aDate = a.lastReplyAt || a.createdAt;
                const bDate = b.lastReplyAt || b.createdAt;
                return new Date(bDate).getTime() - new Date(aDate).getTime();
            });
            break;
        case 'popular':
            sorted.sort((a, b) => (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes));
            break;
        case 'trending':
            // Trending = high engagement relative to age
            sorted.sort((a, b) => {
                const aAge = Math.max(1, (Date.now() - new Date(a.createdAt).getTime()) / (1000 * 60 * 60));
                const bAge = Math.max(1, (Date.now() - new Date(b.createdAt).getTime()) / (1000 * 60 * 60));
                const aScore = (a.upvotes + a.replyCount * 2) / Math.pow(aAge, 0.5);
                const bScore = (b.upvotes + b.replyCount * 2) / Math.pow(bAge, 0.5);
                return bScore - aScore;
            });
            break;
    }
    // Pinned always first
    const pinned = sorted.filter(t => t.isPinned);
    const unpinned = sorted.filter(t => !t.isPinned);
    return [...pinned, ...unpinned];
}

export function searchTopics(query: string): Topic[] {
    const q = query.toLowerCase();
    return getTopics().filter(t =>
        t.title.toLowerCase().includes(q) ||
        t.body.toLowerCase().includes(q) ||
        t.tags.some(tag => tag.toLowerCase().includes(q)) ||
        t.authorName.toLowerCase().includes(q)
    );
}

export function createTopic(topic: Omit<Topic, 'id' | 'createdAt' | 'updatedAt' | 'upvotes' | 'downvotes' | 'replyCount' | 'viewCount' | 'voters' | 'editHistory'>): Topic {
    const topics = getTopics();
    const newTopic: Topic = {
        ...topic,
        id: `topic-${Date.now()}`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        upvotes: 0,
        downvotes: 0,
        replyCount: 0,
        viewCount: 0,
        voters: {},
    };
    topics.unshift(newTopic);
    setItem(STORAGE_KEYS.TOPICS, topics);

    // Update category count
    const cats = getCategories().map(c =>
        c.id === topic.categoryId ? { ...c, topicCount: c.topicCount + 1 } : c
    );
    setItem(STORAGE_KEYS.CATEGORIES, cats);

    return newTopic;
}

export function updateTopic(id: string, updates: Partial<Topic>): Topic | null {
    const topics = getTopics();
    const idx = topics.findIndex(t => t.id === id);
    if (idx === -1) return null;

    const existing = topics[idx];
    // If body changed, add to edit history
    if (updates.body && updates.body !== existing.body) {
        const editHistory = existing.editHistory || [];
        editHistory.push({ editedAt: new Date().toISOString(), previousBody: existing.body });
        updates.editHistory = editHistory;
    }

    topics[idx] = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    setItem(STORAGE_KEYS.TOPICS, topics);
    return topics[idx];
}

export function incrementTopicViews(id: string) {
    const topics = getTopics();
    const idx = topics.findIndex(t => t.id === id);
    if (idx !== -1) {
        topics[idx].viewCount++;
        setItem(STORAGE_KEYS.TOPICS, topics);
    }
}

export function voteTopic(topicId: string, userId: string, direction: 'up' | 'down'): Topic | null {
    const topics = getTopics();
    const idx = topics.findIndex(t => t.id === topicId);
    if (idx === -1) return null;

    const topic = topics[idx];
    const prevVote = topic.voters[userId];

    // Remove previous vote
    if (prevVote === 'up') topic.upvotes--;
    if (prevVote === 'down') topic.downvotes--;

    // Toggle or set new vote
    if (prevVote === direction) {
        delete topic.voters[userId];
    } else {
        topic.voters[userId] = direction;
        if (direction === 'up') topic.upvotes++;
        if (direction === 'down') topic.downvotes++;
    }

    topics[idx] = topic;
    setItem(STORAGE_KEYS.TOPICS, topics);
    return topic;
}

export function deleteTopic(id: string): boolean {
    const topics = getTopics();
    const topic = topics.find(t => t.id === id);
    if (!topic) return false;

    const filtered = topics.filter(t => t.id !== id);
    setItem(STORAGE_KEYS.TOPICS, filtered);

    // Update category count
    const cats = getCategories().map(c =>
        c.id === topic.categoryId ? { ...c, topicCount: Math.max(0, c.topicCount - 1) } : c
    );
    setItem(STORAGE_KEYS.CATEGORIES, cats);

    // Delete associated replies
    const replies = getReplies().filter(r => r.topicId !== id);
    setItem(STORAGE_KEYS.REPLIES, replies);

    return true;
}

// ─── Replies ───────────────────────────────────────────────
export function getReplies(): Reply[] {
    return getItem<Reply[]>(STORAGE_KEYS.REPLIES, []);
}

export function getRepliesByTopic(topicId: string): Reply[] {
    return getReplies().filter(r => r.topicId === topicId);
}

export function createReply(reply: Omit<Reply, 'id' | 'createdAt' | 'updatedAt' | 'upvotes' | 'downvotes' | 'voters'>): Reply {
    const replies = getReplies();
    const newReply: Reply = {
        ...reply,
        id: `reply-${Date.now()}`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        upvotes: 0,
        downvotes: 0,
        voters: {},
    };
    replies.push(newReply);
    setItem(STORAGE_KEYS.REPLIES, replies);

    // Update topic reply count and last reply info
    const topics = getTopics();
    const topicIdx = topics.findIndex(t => t.id === reply.topicId);
    if (topicIdx !== -1) {
        topics[topicIdx].replyCount++;
        topics[topicIdx].lastReplyAt = newReply.createdAt;
        topics[topicIdx].lastReplyBy = reply.isAnonymous ? 'Anonymous' : reply.authorName;
        setItem(STORAGE_KEYS.TOPICS, topics);
    }

    return newReply;
}

export function updateReply(id: string, body: string): Reply | null {
    const replies = getReplies();
    const idx = replies.findIndex(r => r.id === id);
    if (idx === -1) return null;

    const existing = replies[idx];
    const editHistory = existing.editHistory || [];
    editHistory.push({ editedAt: new Date().toISOString(), previousBody: existing.body });

    replies[idx] = {
        ...existing,
        body,
        updatedAt: new Date().toISOString(),
        editHistory,
    };
    setItem(STORAGE_KEYS.REPLIES, replies);
    return replies[idx];
}

export function deleteReply(id: string): boolean {
    const replies = getReplies();
    const idx = replies.findIndex(r => r.id === id);
    if (idx === -1) return false;

    // Soft delete: mark as deleted so thread structure is preserved
    replies[idx] = { ...replies[idx], isDeleted: true, body: '[This comment has been deleted]' };
    setItem(STORAGE_KEYS.REPLIES, replies);
    return true;
}

export function voteReply(replyId: string, userId: string, direction: 'up' | 'down'): Reply | null {
    const replies = getReplies();
    const idx = replies.findIndex(r => r.id === replyId);
    if (idx === -1) return null;

    const reply = replies[idx];
    const prevVote = reply.voters[userId];

    if (prevVote === 'up') reply.upvotes--;
    if (prevVote === 'down') reply.downvotes--;

    if (prevVote === direction) {
        delete reply.voters[userId];
    } else {
        reply.voters[userId] = direction;
        if (direction === 'up') reply.upvotes++;
        if (direction === 'down') reply.downvotes++;
    }

    replies[idx] = reply;
    setItem(STORAGE_KEYS.REPLIES, replies);
    return reply;
}

// ─── Reports ───────────────────────────────────────────────
export function createReport(report: Omit<Report, 'id' | 'createdAt' | 'status'>): Report {
    const reports = getItem<Report[]>(STORAGE_KEYS.REPORTS, []);
    const newReport: Report = {
        ...report,
        id: `report-${Date.now()}`,
        createdAt: new Date().toISOString(),
        status: 'pending',
    };
    reports.push(newReport);
    setItem(STORAGE_KEYS.REPORTS, reports);
    return newReport;
}

// ─── Users ─────────────────────────────────────────────────
export function getForumUsers(): ForumUser[] {
    return getItem<ForumUser[]>(STORAGE_KEYS.USERS, []);
}

export function getForumUserById(id: string): ForumUser | undefined {
    return getForumUsers().find(u => u.id === id);
}

export function updateForumUser(id: string, updates: Partial<ForumUser>): ForumUser | null {
    const users = getForumUsers();
    const idx = users.findIndex(u => u.id === id);
    if (idx === -1) return null;
    users[idx] = { ...users[idx], ...updates };
    setItem(STORAGE_KEYS.USERS, users);
    return users[idx];
}

export function addForumUser(user: ForumUser): void {
    const users = getForumUsers();
    users.push(user);
    setItem(STORAGE_KEYS.USERS, users);
}

// ─── Notifications ─────────────────────────────────────────
export function addNotification(userId: string, notification: Omit<ForumNotification, 'id' | 'createdAt' | 'read'>): void {
    const users = getForumUsers();
    const idx = users.findIndex(u => u.id === userId);
    if (idx === -1) return;

    const notif: ForumNotification = {
        ...notification,
        id: `notif-${Date.now()}`,
        createdAt: new Date().toISOString(),
        read: false,
    };

    users[idx].notifications = [notif, ...(users[idx].notifications || [])].slice(0, 50);
    setItem(STORAGE_KEYS.USERS, users);
}

export function markNotificationsRead(userId: string): void {
    const users = getForumUsers();
    const idx = users.findIndex(u => u.id === userId);
    if (idx === -1) return;
    users[idx].notifications = (users[idx].notifications || []).map(n => ({ ...n, read: true }));
    setItem(STORAGE_KEYS.USERS, users);
}

// ─── Stats ─────────────────────────────────────────────────
export function getForumStats() {
    const topics = getTopics();
    const replies = getReplies();
    const users = getForumUsers();
    return {
        totalTopics: topics.length,
        totalReplies: replies.length,
        totalUsers: users.length,
        activeToday: topics.filter(t => {
            const hours = (Date.now() - new Date(t.createdAt).getTime()) / (1000 * 60 * 60);
            return hours < 24;
        }).length,
    };
}

// ─── Follow Topics ─────────────────────────────────────────
export function toggleFollowTopic(userId: string, topicId: string): boolean {
    const users = getForumUsers();
    const idx = users.findIndex(u => u.id === userId);
    if (idx === -1) return false;

    const followed = users[idx].followedTopics || [];
    if (followed.includes(topicId)) {
        users[idx].followedTopics = followed.filter(id => id !== topicId);
    } else {
        users[idx].followedTopics = [...followed, topicId];
    }
    setItem(STORAGE_KEYS.USERS, users);
    return users[idx].followedTopics.includes(topicId);
}
