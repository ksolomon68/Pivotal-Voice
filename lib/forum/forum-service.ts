// Forum Service — Supabase-backed
import { supabase } from '@/lib/supabase/client';
import { Topic, Reply, ForumCategory } from '@/lib/types/forum';
import { FORUM_CATEGORIES, SEED_TOPICS, SEED_REPLIES, SEED_USERS } from './forum-data';

export type SortOption = 'active' | 'newest' | 'popular' | 'trending';

// ─── Helpers ────────────────────────────────────────────────

function mapTopic(data: any): Topic {
    return {
        id: data.id,
        title: data.title,
        body: data.body,
        categoryId: data.category_id,
        authorId: data.author_id,
        authorName: data.author_name,
        createdAt: data.created_at,
        updatedAt: data.updated_at,
        upvotes: data.upvotes || 0,
        downvotes: data.downvotes || 0,
        replyCount: data.reply_count || 0,
        viewCount: data.view_count || 0,
        isPinned: data.is_pinned || false,
        isLocked: data.is_locked || false,
        isAnonymous: data.is_anonymous || false,
        tags: data.tags || [],
        lastReplyAt: data.last_reply_at,
        lastReplyBy: data.last_reply_by,
        voters: data.voters || {},
    };
}

function mapReply(data: any): Reply {
    return {
        id: data.id,
        topicId: data.topic_id,
        authorId: data.author_id,
        authorName: data.author_name,
        body: data.body,
        createdAt: data.created_at,
        updatedAt: data.updated_at,
        upvotes: data.upvotes || 0,
        downvotes: data.downvotes || 0,
        isDeleted: data.is_deleted || false,
        isAnonymous: data.is_anonymous || false,
        voters: data.voters || {},
    };
}

// ─── Categories ────────────────────────────────────────────

export async function getCategories(): Promise<ForumCategory[]> {
    const { data, error } = await supabase
        .from('forum_categories')
        .select('*')
        .order('order', { ascending: true });

    if (error || !data || data.length === 0) {
        if (error) console.error('Error fetching categories:', error);
        return FORUM_CATEGORIES;
    }
    return data.map(cat => ({
        ...cat,
        topicCount: cat.topic_count
    }));
}

export async function getCategoryById(id: string): Promise<ForumCategory | undefined> {
    const { data } = await supabase
        .from('forum_categories')
        .select('*')
        .eq('id', id)
        .single();
    if (!data) return FORUM_CATEGORIES.find(c => c.id === id);
    return {
        ...data,
        topicCount: data.topic_count
    };
}

// ─── Topics ────────────────────────────────────────────────

export async function getTopics(): Promise<Topic[]> {
    const { data, error } = await supabase
        .from('topics')
        .select('*')
        .order('created_at', { ascending: false });

    if (error || !data || data.length === 0) {
        if (error) console.error('Error fetching topics:', error);
        return SEED_TOPICS;
    }
    return data.map(mapTopic);
}

export async function getTopicById(id: string): Promise<Topic | undefined> {
    const { data } = await supabase
        .from('topics')
        .select('*')
        .eq('id', id)
        .single();
    if (!data) return SEED_TOPICS.find(t => t.id === id);
    return mapTopic(data);
}

export async function getTopicsByCategory(categoryId: string): Promise<Topic[]> {
    const { data } = await supabase
        .from('topics')
        .select('*')
        .eq('category_id', categoryId)
        .order('created_at', { ascending: false });

    if (!data || data.length === 0) {
        return SEED_TOPICS.filter(t => t.categoryId === categoryId);
    }
    return data.map(mapTopic);
}

export async function createTopic(topic: any): Promise<Topic | null> {
    const { data, error } = await supabase
        .from('topics')
        .insert([{
            ...topic,
            upvotes: 0,
            downvotes: 0,
            reply_count: 0,
            view_count: 0,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        }])
        .select()
        .single();

    if (error) {
        console.error('Error creating topic:', error);
        return null;
    }
    return mapTopic(data);
}

export async function incrementTopicViews(id: string) {
    const { data: topic } = await supabase.from('topics').select('view_count').eq('id', id).single();
    if (topic) {
        await supabase.from('topics').update({ view_count: topic.view_count + 1 }).eq('id', id);
    }
}

// ─── Search & Sort ──────────────────────────────────────────

export async function searchTopics(query: string): Promise<Topic[]> {
    const { data } = await supabase
        .from('topics')
        .select('*')
        .or(`title.ilike.%${query}%,body.ilike.%${query}%`)
        .order('created_at', { ascending: false });
    return (data || []).map(mapTopic);
}

export function sortTopics(topics: Topic[], sort: SortOption): Topic[] {
    const sorted = [...topics];
    switch (sort) {
        case 'newest':
            return sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        case 'popular':
            return sorted.sort((a, b) => b.upvotes - a.upvotes);
        case 'trending':
            return sorted.sort((a, b) => (b.upvotes + b.replyCount) - (a.upvotes + a.replyCount));
        case 'active':
        default:
            return sorted.sort((a, b) => {
                const bTime = new Date(b.lastReplyAt || b.createdAt).getTime();
                const aTime = new Date(a.lastReplyAt || a.createdAt).getTime();
                return bTime - aTime;
            });
    }
}

// ─── Replies ───────────────────────────────────────────────

export async function getRepliesByTopic(topicId: string): Promise<Reply[]> {
    const { data } = await supabase
        .from('replies')
        .select('*')
        .eq('topic_id', topicId)
        .order('created_at', { ascending: true });
    if (!data || data.length === 0) {
        return SEED_REPLIES.filter(r => r.topicId === topicId);
    }
    return data.map(mapReply);
}

export async function createReply(reply: any): Promise<Reply | null> {
    const { data, error } = await supabase
        .from('replies')
        .insert([{
            ...reply,
            upvotes: 0,
            downvotes: 0,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        }])
        .select()
        .single();

    if (error) {
        console.error('Error creating reply:', error);
        return null;
    }

    // Update topic reply count
    const { data: topic } = await supabase.from('topics').select('reply_count').eq('id', reply.topic_id).single();
    if (topic) {
        await supabase.from('topics').update({
            reply_count: topic.reply_count + 1,
            last_reply_at: new Date().toISOString(),
            last_reply_by: reply.author_name
        }).eq('id', reply.topic_id);
    }

    return mapReply(data);
}

export async function voteReply(replyId: string, userId: string, direction: 'up' | 'down') {
    const { data: reply } = await supabase.from('replies').select('upvotes, downvotes, voters').eq('id', replyId).single();
    if (!reply) return;

    let { upvotes, downvotes, voters } = reply;
    voters = voters || {};
    const currentVote = voters[userId];

    if (currentVote === direction) {
        delete voters[userId];
        if (direction === 'up') upvotes--; else downvotes--;
    } else {
        if (currentVote) {
            if (currentVote === 'up') upvotes--; else downvotes--;
        }
        voters[userId] = direction;
        if (direction === 'up') upvotes++; else downvotes++;
    }

    await supabase.from('replies').update({ upvotes, downvotes, voters }).eq('id', replyId);
}

export async function deleteReply(id: string) {
    // We could do a soft delete or hard delete. The UI has an isDeleted flag.
    await supabase.from('replies').update({ is_deleted: true, body: '[deleted]', updated_at: new Date().toISOString() }).eq('id', id);
}

export async function updateReply(id: string, body: string) {
    await supabase.from('replies').update({ body, updated_at: new Date().toISOString() }).eq('id', id);
}

// ─── User ──────────────────────────────────────────────────

export async function getForumUserById(id: string) {
    const { data } = await supabase.from('profiles').select('*').eq('id', id).single();
    return data;
}

// ─── Actions ────────────────────────────────────────────────

export async function voteTopic(topicId: string, userId: string, direction: 'up' | 'down') {
    // This is simplified; real voting needs a join table 'voters' or similar
    const { data: topic } = await supabase.from('topics').select('upvotes, downvotes, voters').eq('id', topicId).single();
    if (!topic) return;

    let { upvotes, downvotes, voters } = topic;
    const currentVote = voters[userId];

    if (currentVote === direction) {
        delete voters[userId];
        if (direction === 'up') upvotes--; else downvotes--;
    } else {
        if (currentVote) {
            if (currentVote === 'up') upvotes--; else downvotes--;
        }
        voters[userId] = direction;
        if (direction === 'up') upvotes++; else downvotes++;
    }

    await supabase.from('topics').update({ upvotes, downvotes, voters }).eq('id', topicId);
}

export async function deleteTopic(id: string) {
    await supabase.from('topics').delete().eq('id', id);
}

export async function updateTopic(id: string, updates: any) {
    await supabase.from('topics').update({ ...updates, updated_at: new Date().toISOString() }).eq('id', id);
}

export async function toggleFollowTopic(userId: string, topicId: string): Promise<boolean> {
    const { data: profile } = await supabase.from('profiles').select('followed_topics').eq('id', userId).single();
    if (!profile) return false;

    let followed = profile.followed_topics || [];
    const idx = followed.indexOf(topicId);
    let isFollowing = false;

    if (idx >= 0) {
        followed.splice(idx, 1);
    } else {
        followed.push(topicId);
        isFollowing = true;
    }

    await supabase.from('profiles').update({ followed_topics: followed }).eq('id', userId);
    return isFollowing;
}

export async function createReport(report: any) {
    await supabase.from('reports').insert([report]);
}

// ─── Stats ─────────────────────────────────────────────────

export async function getForumStats() {
    const { count: topicCount } = await supabase.from('topics').select('*', { count: 'exact', head: true });
    const { count: replyCount } = await supabase.from('replies').select('*', { count: 'exact', head: true });
    const { count: userCount } = await supabase.from('profiles').select('*', { count: 'exact', head: true });

    // Fall back to seed data counts when Supabase has no data
    if (!topicCount && !replyCount && !userCount) {
        return {
            totalTopics: SEED_TOPICS.length,
            totalReplies: SEED_REPLIES.length,
            totalUsers: SEED_USERS.length,
            activeToday: Math.min(SEED_USERS.length, 14)
        };
    }

    return {
        totalTopics: topicCount || 0,
        totalReplies: replyCount || 0,
        totalUsers: userCount || 0,
        activeToday: Math.max(Math.floor((userCount || 0) * 0.4), 1)
    };
}
