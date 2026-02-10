// CRM & Newsletter Service — Supabase-backed
import { supabase } from '@/lib/supabase/client';
import {
    NewsletterSubscriber, CRMStats,
    OptInMethod, EmailCampaign
} from '@/lib/types/newsletter';

// ─── Helpers ────────────────────────────────────────────────

function mapSubscriber(data: any): NewsletterSubscriber {
    return {
        id: data.id,
        email: data.email,
        name: data.name,
        zipCode: data.zip_code,
        city: data.city,
        interests: data.interests || [],
        preferences: data.preferences || {
            frequency: data.frequency || 'weekly',
            topics: data.interests || [],
            emailNotifications: {
                newTopicsInCategories: true,
                repliesToPosts: true,
                trendingDiscussions: true,
                eventReminders: true,
                weeklyDigest: true,
                monthlyNewsletter: true,
            },
        },
        status: data.status,
        signupDate: data.signup_date,
        optInMethod: data.opt_in_method,
        consentTimestamp: data.consent_timestamp,
        unsubscribeToken: data.unsubscribe_token,
        engagementHistory: data.engagement_history || [],
        forumUserId: data.forum_user_id,
    };
}

// ─── Subscribers ────────────────────────────────────────────

export async function getSubscribers(): Promise<NewsletterSubscriber[]> {
    const { data, error } = await supabase
        .from('subscribers')
        .select('*');

    if (error) {
        console.error('Error fetching subscribers:', error);
        return [];
    }
    return (data || []).map(mapSubscriber);
}

export async function addSubscriber(data: {
    email: string;
    name: string;
    zipCode: string;
    interests: string[];
    city?: string;
    optInMethod: OptInMethod;
    forumUserId?: string;
    frequency?: string;
}): Promise<NewsletterSubscriber | { error: string }> {
    const { data: existing } = await supabase
        .from('subscribers')
        .select('*')
        .eq('email', data.email.toLowerCase())
        .maybeSingle();

    if (existing) {
        if (existing.status === 'unsubscribed') {
            const { data: updated, error: updateError } = await supabase
                .from('subscribers')
                .update({ status: 'active', updated_at: new Date().toISOString() })
                .eq('id', existing.id)
                .select()
                .single();

            if (updateError) return { error: updateError.message };
            return mapSubscriber(updated);
        }
        return { error: 'This email is already subscribed.' };
    }

    const { data: newSub, error: insertError } = await supabase
        .from('subscribers')
        .insert([{
            email: data.email.toLowerCase(),
            name: data.name,
            zip_code: data.zipCode,
            city: data.city,
            interests: data.interests,
            opt_in_method: data.optInMethod,
            forum_user_id: data.forumUserId,
            frequency: data.frequency || 'weekly',
            status: 'active',
            signup_date: new Date().toISOString(),
            consent_timestamp: new Date().toISOString()
        }])
        .select()
        .single();

    if (insertError) {
        console.error('Error inserting subscriber:', insertError);
        return { error: insertError.message };
    }

    return mapSubscriber(newSub);
}

export async function getSubscriberById(id: string): Promise<NewsletterSubscriber | undefined> {
    const { data } = await supabase
        .from('subscribers')
        .select('*')
        .eq('id', id)
        .single();
    return data as NewsletterSubscriber | undefined;
}

export async function updateSubscriberPreferences(id: string, prefs: any): Promise<void> {
    const { error } = await supabase
        .from('subscribers')
        .update({ ...prefs, updated_at: new Date().toISOString() })
        .eq('id', id);

    if (error) console.error('Error updating preferences:', error);
}

export async function unsubscribeById(id: string): Promise<boolean> {
    const { error } = await supabase
        .from('subscribers')
        .update({ status: 'unsubscribed', updated_at: new Date().toISOString() })
        .eq('id', id);

    return !error;
}

// ─── Stats (Simplified for Supabase) ─────────────────────────

export async function getCRMStats(): Promise<CRMStats> {
    const { data: subs, error } = await supabase.from('subscribers').select('*');
    if (error || !subs) return {
        totalSubscribers: 0, activeSubscribers: 0, unsubscribed: 0,
        avgOpenRate: 0, avgClickRate: 0, signupsThisWeek: 0, signupsThisMonth: 0,
        topInterests: [], cityBreakdown: []
    };

    const active = subs.filter(s => s.status === 'active');
    const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const monthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

    const interestMap: Record<string, number> = {};
    active.forEach(s => (s.interests || []).forEach((i: string) => {
        interestMap[i] = (interestMap[i] || 0) + 1;
    }));

    const cityMap: Record<string, number> = {};
    active.forEach(s => {
        const city = s.city || 'Unknown';
        cityMap[city] = (cityMap[city] || 0) + 1;
    });

    return {
        totalSubscribers: subs.length,
        activeSubscribers: active.length,
        unsubscribed: subs.length - active.length,
        avgOpenRate: 42, // Simulated
        avgClickRate: 18, // Simulated
        signupsThisWeek: subs.filter(s => new Date(s.signup_date) > weekAgo).length,
        signupsThisMonth: subs.filter(s => new Date(s.signup_date) > monthAgo).length,
        topInterests: Object.entries(interestMap).map(([interest, count]) => ({ interest, count })).sort((a, b) => b.count - a.count).slice(0, 10),
        cityBreakdown: Object.entries(cityMap).map(([city, count]) => ({ city, count })).sort((a, b) => b.count - a.count),
    };
}
export async function resubscribe(id: string): Promise<boolean> {
    const { error } = await supabase
        .from('subscribers')
        .update({ status: 'active', updated_at: new Date().toISOString() })
        .eq('id', id);

    return !error;
}

export async function getCampaigns(): Promise<EmailCampaign[]> {
    // Return mock data for now as we don't have a campaigns table yet
    return [
        {
            id: '1',
            subject: 'Weekly Ellis County Digest',
            type: 'weekly_digest',
            sentAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
            recipientCount: 1240,
            openCount: 520,
            clickCount: 180,
            unsubscribeCount: 12,
        },
        {
            id: '2',
            subject: 'Monthly Civic Updates - February',
            type: 'monthly_newsletter',
            sentAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
            recipientCount: 1180,
            openCount: 640,
            clickCount: 220,
            unsubscribeCount: 8,
        }
    ];
}

export function exportSubscribersCSV(subscribers: NewsletterSubscriber[]): string {
    const headers = ['Name', 'Email', 'City', 'Zip Code', 'Status', 'Signup Date', 'Interests'];
    const rows = subscribers.map(s => [
        s.name,
        s.email,
        s.city || '',
        s.zipCode,
        s.status,
        new Date(s.signupDate).toLocaleDateString(),
        (s.interests || []).join(', ')
    ]);
    return [headers, ...rows].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
}

export function downloadCSV(filename: string, content: string): void {
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

export function initializeNewsletterData(): void {
    // No-op for Supabase version - handled by loadData in components
}

export async function getSubscribersByCity(city: string): Promise<NewsletterSubscriber[]> {
    const { data, error } = await supabase
        .from('subscribers')
        .select('*')
        .eq('city', city);

    if (error) return [];
    return (data || []).map(mapSubscriber);
}

export async function getSubscribersByInterest(interest: string): Promise<NewsletterSubscriber[]> {
    const { data, error } = await supabase
        .from('subscribers')
        .select('*')
        .contains('interests', [interest]);

    if (error) return [];
    return (data || []).map(mapSubscriber);
}
export function isPopupDismissed(): boolean {
    if (typeof window === 'undefined') return true;
    return localStorage.getItem('pv_newsletter_dismissed') === 'true';
}

export function dismissPopup(): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem('pv_newsletter_dismissed', 'true');
}
