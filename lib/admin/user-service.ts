import { supabase } from '@/lib/supabase/client';
import { ForumUser } from '@/lib/types/forum';

export async function getAllUsers(): Promise<ForumUser[]> {
    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('join_date', { ascending: false });

    if (error) {
        console.error('Error fetching users:', error);
        return [];
    }

    return (data || []).map(profile => ({
        id: profile.id,
        email: profile.email,
        displayName: profile.display_name,
        joinDate: profile.join_date,
        city: profile.city,
        isBusinessOwner: profile.is_business_owner,
        yearsInCounty: profile.years_in_county,
        bio: profile.bio,
        reputation: profile.reputation,
        topicCount: profile.topic_count,
        replyCount: profile.reply_count,
        isAdmin: profile.is_admin,
        isModerator: profile.is_moderator,
        followedTopics: profile.followed_topics || [],
        notifications: profile.notifications || [],
    }));
}

export async function toggleAdminRole(userId: string, currentStatus: boolean): Promise<boolean> {
    const { error } = await supabase
        .from('profiles')
        .update({ is_admin: !currentStatus })
        .eq('id', userId);

    if (error) {
        console.error('Error toggling admin role:', error);
        return false;
    }
    return true;
}
