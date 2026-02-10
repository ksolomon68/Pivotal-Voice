// CRM & Newsletter Service — localStorage-backed
import {
    NewsletterSubscriber, SubscriberPreferences, CRMStats,
    EngagementEvent, EmailCampaign, UpdateFrequency, OptInMethod
} from '@/lib/types/newsletter';

const STORAGE_KEY = 'pv_newsletter_subscribers';
const CAMPAIGNS_KEY = 'pv_email_campaigns';
const POPUP_DISMISSED_KEY = 'pv_newsletter_popup_dismissed';

function generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

function generateToken(): string {
    return Array.from({ length: 32 }, () => Math.random().toString(36)[2]).join('');
}

// ─── Subscribers ────────────────────────────────────────────

export function getSubscribers(): NewsletterSubscriber[] {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

function saveSubscribers(subs: NewsletterSubscriber[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(subs));
}

export function addSubscriber(data: {
    email: string;
    name: string;
    zipCode: string;
    interests: string[];
    city?: string;
    optInMethod: OptInMethod;
    forumUserId?: string;
    frequency?: UpdateFrequency;
}): NewsletterSubscriber | { error: string } {
    const subs = getSubscribers();
    const existing = subs.find(s => s.email.toLowerCase() === data.email.toLowerCase());

    if (existing) {
        if (existing.status === 'unsubscribed') {
            existing.status = 'active';
            existing.engagementHistory.push({
                type: 'resubscribed',
                timestamp: new Date().toISOString(),
            });
            saveSubscribers(subs);
            return existing;
        }
        return { error: 'This email is already subscribed.' };
    }

    const now = new Date().toISOString();
    const subscriber: NewsletterSubscriber = {
        id: generateId(),
        email: data.email,
        name: data.name,
        zipCode: data.zipCode,
        city: data.city || getCityFromZip(data.zipCode),
        interests: data.interests,
        preferences: {
            frequency: data.frequency || 'weekly',
            topics: data.interests,
            emailNotifications: {
                newTopicsInCategories: true,
                repliesToPosts: true,
                trendingDiscussions: true,
                eventReminders: true,
                weeklyDigest: true,
                monthlyNewsletter: true,
            },
        },
        status: 'active',
        signupDate: now,
        optInMethod: data.optInMethod,
        consentTimestamp: now,
        unsubscribeToken: generateToken(),
        engagementHistory: [],
        forumUserId: data.forumUserId,
    };

    subs.push(subscriber);
    saveSubscribers(subs);
    return subscriber;
}

export function getSubscriberById(id: string): NewsletterSubscriber | undefined {
    return getSubscribers().find(s => s.id === id);
}

export function getSubscriberByEmail(email: string): NewsletterSubscriber | undefined {
    return getSubscribers().find(s => s.email.toLowerCase() === email.toLowerCase());
}

export function updateSubscriberPreferences(id: string, prefs: Partial<SubscriberPreferences>): void {
    const subs = getSubscribers();
    const sub = subs.find(s => s.id === id);
    if (sub) {
        sub.preferences = { ...sub.preferences, ...prefs };
        if (prefs.emailNotifications) {
            sub.preferences.emailNotifications = { ...sub.preferences.emailNotifications, ...prefs.emailNotifications };
        }
        saveSubscribers(subs);
    }
}

export function unsubscribe(token: string): boolean {
    const subs = getSubscribers();
    const sub = subs.find(s => s.unsubscribeToken === token);
    if (sub && sub.status === 'active') {
        sub.status = 'unsubscribed';
        sub.engagementHistory.push({
            type: 'unsubscribed',
            timestamp: new Date().toISOString(),
        });
        saveSubscribers(subs);
        return true;
    }
    return false;
}

export function unsubscribeById(id: string): boolean {
    const subs = getSubscribers();
    const sub = subs.find(s => s.id === id);
    if (sub && sub.status === 'active') {
        sub.status = 'unsubscribed';
        sub.engagementHistory.push({
            type: 'unsubscribed',
            timestamp: new Date().toISOString(),
        });
        saveSubscribers(subs);
        return true;
    }
    return false;
}

export function resubscribe(id: string): boolean {
    const subs = getSubscribers();
    const sub = subs.find(s => s.id === id);
    if (sub && sub.status === 'unsubscribed') {
        sub.status = 'active';
        sub.engagementHistory.push({
            type: 'resubscribed',
            timestamp: new Date().toISOString(),
        });
        saveSubscribers(subs);
        return true;
    }
    return false;
}

// ─── Segmentation ───────────────────────────────────────────

export function getSubscribersByCity(city: string): NewsletterSubscriber[] {
    return getSubscribers().filter(s => s.city?.toLowerCase() === city.toLowerCase() && s.status === 'active');
}

export function getSubscribersByInterest(interest: string): NewsletterSubscriber[] {
    return getSubscribers().filter(s => s.interests.includes(interest) && s.status === 'active');
}

export function getSubscribersByFrequency(freq: UpdateFrequency): NewsletterSubscriber[] {
    return getSubscribers().filter(s => s.preferences.frequency === freq && s.status === 'active');
}

export type ActivityLevel = 'high' | 'medium' | 'low' | 'inactive';

export function getSubscribersByActivity(level: ActivityLevel): NewsletterSubscriber[] {
    return getSubscribers().filter(s => {
        if (s.status !== 'active') return false;
        const history = s.engagementHistory;
        const recentOpens = history.filter(h =>
            h.type === 'email_opened' &&
            new Date(h.timestamp).getTime() > Date.now() - 30 * 24 * 60 * 60 * 1000
        ).length;
        switch (level) {
            case 'high': return recentOpens >= 4;
            case 'medium': return recentOpens >= 2 && recentOpens < 4;
            case 'low': return recentOpens >= 1 && recentOpens < 2;
            case 'inactive': return recentOpens === 0;
        }
    });
}

// ─── CSV Export ──────────────────────────────────────────────

export function exportSubscribersCSV(subscribers?: NewsletterSubscriber[]): string {
    const subs = subscribers || getSubscribers();
    const headers = ['Email', 'Name', 'City', 'Zip Code', 'Interests', 'Frequency', 'Status', 'Signup Date', 'Opt-In Method', 'Consent Timestamp'];
    const rows = subs.map(s => [
        s.email,
        s.name,
        s.city || '',
        s.zipCode,
        s.interests.join('; '),
        s.preferences.frequency,
        s.status,
        new Date(s.signupDate).toLocaleDateString(),
        s.optInMethod,
        new Date(s.consentTimestamp).toISOString(),
    ]);
    return [headers, ...rows].map(r => r.map(c => `"${c}"`).join(',')).join('\n');
}

export function downloadCSV(filename: string, csv: string): void {
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}

// ─── Stats ──────────────────────────────────────────────────

export function getCRMStats(): CRMStats {
    const subs = getSubscribers();
    const active = subs.filter(s => s.status === 'active');
    const now = Date.now();
    const weekAgo = now - 7 * 24 * 60 * 60 * 1000;
    const monthAgo = now - 30 * 24 * 60 * 60 * 1000;

    // Interest breakdown
    const interestMap: Record<string, number> = {};
    active.forEach(s => s.interests.forEach(i => {
        interestMap[i] = (interestMap[i] || 0) + 1;
    }));
    const topInterests = Object.entries(interestMap)
        .map(([interest, count]) => ({ interest, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 10);

    // City breakdown
    const cityMap: Record<string, number> = {};
    active.forEach(s => {
        const city = s.city || 'Unknown';
        cityMap[city] = (cityMap[city] || 0) + 1;
    });
    const cityBreakdown = Object.entries(cityMap)
        .map(([city, count]) => ({ city, count }))
        .sort((a, b) => b.count - a.count);

    // Simulated engagement rates
    const totalEngagements = subs.reduce((sum, s) => sum + s.engagementHistory.length, 0);
    const openEvents = subs.reduce((sum, s) => sum + s.engagementHistory.filter(e => e.type === 'email_opened').length, 0);
    const clickEvents = subs.reduce((sum, s) => sum + s.engagementHistory.filter(e => e.type === 'email_clicked').length, 0);
    const sentEvents = subs.reduce((sum, s) => sum + s.engagementHistory.filter(e => e.type === 'email_sent').length, 0);

    return {
        totalSubscribers: subs.length,
        activeSubscribers: active.length,
        unsubscribed: subs.filter(s => s.status === 'unsubscribed').length,
        avgOpenRate: sentEvents > 0 ? Math.round((openEvents / sentEvents) * 100) : 42,
        avgClickRate: sentEvents > 0 ? Math.round((clickEvents / sentEvents) * 100) : 18,
        signupsThisWeek: subs.filter(s => new Date(s.signupDate).getTime() > weekAgo).length,
        signupsThisMonth: subs.filter(s => new Date(s.signupDate).getTime() > monthAgo).length,
        topInterests,
        cityBreakdown,
    };
}

// ─── Campaigns (simulated) ──────────────────────────────────

export function getCampaigns(): EmailCampaign[] {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(CAMPAIGNS_KEY);
    if (data) return JSON.parse(data);

    // Seed with simulated past campaigns
    const campaigns: EmailCampaign[] = [
        {
            id: 'camp-1',
            type: 'weekly_digest',
            subject: 'Ellis County Weekly Digest — Feb 3-9',
            sentAt: '2026-02-09T08:00:00Z',
            recipientCount: 156,
            openCount: 72,
            clickCount: 31,
            unsubscribeCount: 1,
        },
        {
            id: 'camp-2',
            type: 'weekly_digest',
            subject: 'Ellis County Weekly Digest — Jan 27-Feb 2',
            sentAt: '2026-02-02T08:00:00Z',
            recipientCount: 148,
            openCount: 65,
            clickCount: 28,
            unsubscribeCount: 0,
        },
        {
            id: 'camp-3',
            type: 'event_reminder',
            subject: 'Reminder: Commissioners Court Meeting Tomorrow',
            sentAt: '2026-02-08T14:00:00Z',
            recipientCount: 89,
            openCount: 52,
            clickCount: 23,
            unsubscribeCount: 0,
        },
        {
            id: 'camp-4',
            type: 'monthly_newsletter',
            subject: 'Pivotal Voice January Newsletter',
            sentAt: '2026-01-31T10:00:00Z',
            recipientCount: 142,
            openCount: 78,
            clickCount: 45,
            unsubscribeCount: 2,
        },
        {
            id: 'camp-5',
            type: 'trending_alert',
            subject: 'Trending: I-35E Expansion Debate Heats Up',
            sentAt: '2026-02-05T16:30:00Z',
            recipientCount: 67,
            openCount: 41,
            clickCount: 22,
            unsubscribeCount: 0,
        },
    ];
    localStorage.setItem(CAMPAIGNS_KEY, JSON.stringify(campaigns));
    return campaigns;
}

// ─── Popup Dismissal ────────────────────────────────────────

export function isPopupDismissed(): boolean {
    if (typeof window === 'undefined') return true;
    const dismissed = localStorage.getItem(POPUP_DISMISSED_KEY);
    if (!dismissed) return false;
    // Check if 30 days have passed
    const dismissedTime = parseInt(dismissed, 10);
    return Date.now() - dismissedTime < 30 * 24 * 60 * 60 * 1000;
}

export function dismissPopup(): void {
    localStorage.setItem(POPUP_DISMISSED_KEY, Date.now().toString());
}

// ─── Seed Data ──────────────────────────────────────────────

export function initializeNewsletterData(): void {
    if (typeof window === 'undefined') return;
    if (localStorage.getItem(STORAGE_KEY)) return;

    const seedSubscribers: NewsletterSubscriber[] = [
        { id: 'nsub-1', email: 'sarah.j@email.com', name: 'Sarah Johnson', zipCode: '75165', city: 'Waxahachie', interests: ['taxes', 'education', 'growth'], preferences: { frequency: 'weekly', topics: ['taxes', 'education', 'growth'], emailNotifications: { newTopicsInCategories: true, repliesToPosts: true, trendingDiscussions: true, eventReminders: true, weeklyDigest: true, monthlyNewsletter: true } }, status: 'active', signupDate: '2026-01-05T10:00:00Z', optInMethod: 'registration', consentTimestamp: '2026-01-05T10:00:00Z', unsubscribeToken: generateToken(), engagementHistory: [{ type: 'email_sent', timestamp: '2026-02-02T08:00:00Z' }, { type: 'email_opened', timestamp: '2026-02-02T10:15:00Z' }, { type: 'email_clicked', timestamp: '2026-02-02T10:17:00Z' }] },
        { id: 'nsub-2', email: 'mike.r@email.com', name: 'Michael Rodriguez', zipCode: '76065', city: 'Midlothian', interests: ['infrastructure', 'safety', 'economic'], preferences: { frequency: 'daily', topics: ['infrastructure', 'safety', 'economic'], emailNotifications: { newTopicsInCategories: true, repliesToPosts: true, trendingDiscussions: false, eventReminders: true, weeklyDigest: false, monthlyNewsletter: true } }, status: 'active', signupDate: '2026-01-10T14:30:00Z', optInMethod: 'homepage', consentTimestamp: '2026-01-10T14:30:00Z', unsubscribeToken: generateToken(), engagementHistory: [{ type: 'email_sent', timestamp: '2026-02-09T08:00:00Z' }, { type: 'email_opened', timestamp: '2026-02-09T09:00:00Z' }] },
        { id: 'nsub-3', email: 'patricia.w@email.com', name: 'Patricia Williams', zipCode: '75154', city: 'Red Oak', interests: ['education', 'quality', 'healthcare'], preferences: { frequency: 'weekly', topics: ['education', 'quality', 'healthcare'], emailNotifications: { newTopicsInCategories: true, repliesToPosts: false, trendingDiscussions: true, eventReminders: true, weeklyDigest: true, monthlyNewsletter: true } }, status: 'active', signupDate: '2026-01-12T09:00:00Z', optInMethod: 'forum_sidebar', consentTimestamp: '2026-01-12T09:00:00Z', unsubscribeToken: generateToken(), engagementHistory: [{ type: 'email_sent', timestamp: '2026-02-02T08:00:00Z' }, { type: 'email_opened', timestamp: '2026-02-03T11:00:00Z' }] },
        { id: 'nsub-4', email: 'james.t@email.com', name: 'James Thompson', zipCode: '75119', city: 'Ennis', interests: ['agriculture', 'environment', 'taxes'], preferences: { frequency: 'weekly', topics: ['agriculture', 'environment', 'taxes'], emailNotifications: { newTopicsInCategories: true, repliesToPosts: true, trendingDiscussions: false, eventReminders: true, weeklyDigest: true, monthlyNewsletter: true } }, status: 'active', signupDate: '2026-01-15T16:00:00Z', optInMethod: 'popup', consentTimestamp: '2026-01-15T16:00:00Z', unsubscribeToken: generateToken(), engagementHistory: [] },
        { id: 'nsub-5', email: 'linda.m@email.com', name: 'Linda Martinez', zipCode: '75125', city: 'Ferris', interests: ['safety', 'healthcare', 'infrastructure'], preferences: { frequency: 'realtime', topics: ['safety', 'healthcare', 'infrastructure'], emailNotifications: { newTopicsInCategories: true, repliesToPosts: true, trendingDiscussions: true, eventReminders: true, weeklyDigest: false, monthlyNewsletter: true } }, status: 'active', signupDate: '2026-01-18T11:00:00Z', optInMethod: 'registration', consentTimestamp: '2026-01-18T11:00:00Z', unsubscribeToken: generateToken(), engagementHistory: [{ type: 'email_sent', timestamp: '2026-02-09T08:00:00Z' }, { type: 'email_opened', timestamp: '2026-02-09T08:30:00Z' }, { type: 'email_clicked', timestamp: '2026-02-09T08:32:00Z' }] },
        { id: 'nsub-6', email: 'robert.g@email.com', name: 'Robert Garcia', zipCode: '76065', city: 'Midlothian', interests: ['growth', 'economic', 'infrastructure'], preferences: { frequency: 'weekly', topics: ['growth', 'economic', 'infrastructure'], emailNotifications: { newTopicsInCategories: false, repliesToPosts: true, trendingDiscussions: true, eventReminders: true, weeklyDigest: true, monthlyNewsletter: true } }, status: 'unsubscribed', signupDate: '2026-01-08T13:00:00Z', optInMethod: 'homepage', consentTimestamp: '2026-01-08T13:00:00Z', unsubscribeToken: generateToken(), engagementHistory: [{ type: 'email_sent', timestamp: '2026-01-15T08:00:00Z' }, { type: 'unsubscribed', timestamp: '2026-01-20T09:00:00Z' }] },
        { id: 'nsub-7', email: 'donna.b@email.com', name: 'Donna Brown', zipCode: '76084', city: 'Ovilla', interests: ['quality', 'environment', 'education'], preferences: { frequency: 'weekly', topics: ['quality', 'environment', 'education'], emailNotifications: { newTopicsInCategories: true, repliesToPosts: true, trendingDiscussions: false, eventReminders: true, weeklyDigest: true, monthlyNewsletter: true } }, status: 'active', signupDate: '2026-01-22T10:00:00Z', optInMethod: 'forum_sidebar', consentTimestamp: '2026-01-22T10:00:00Z', unsubscribeToken: generateToken(), engagementHistory: [] },
        { id: 'nsub-8', email: 'william.h@email.com', name: 'William Harris', zipCode: '75165', city: 'Waxahachie', interests: ['taxes', 'growth', 'safety'], preferences: { frequency: 'daily', topics: ['taxes', 'growth', 'safety'], emailNotifications: { newTopicsInCategories: true, repliesToPosts: true, trendingDiscussions: true, eventReminders: true, weeklyDigest: false, monthlyNewsletter: true } }, status: 'active', signupDate: '2026-01-25T15:00:00Z', optInMethod: 'registration', consentTimestamp: '2026-01-25T15:00:00Z', unsubscribeToken: generateToken(), engagementHistory: [{ type: 'email_sent', timestamp: '2026-02-09T08:00:00Z' }, { type: 'email_opened', timestamp: '2026-02-09T12:00:00Z' }] },
    ];

    saveSubscribers(seedSubscribers);
    getCampaigns(); // seed campaigns too
}

// ─── Helpers ────────────────────────────────────────────────

function getCityFromZip(zip: string): string | undefined {
    const zipMap: Record<string, string> = {
        '75165': 'Waxahachie', '76065': 'Midlothian', '75154': 'Red Oak',
        '75119': 'Ennis', '75125': 'Ferris', '76084': 'Ovilla',
        '76064': 'Maypearl', '75152': 'Palmer', '76651': 'Italy',
        '76670': 'Milford', '75120': 'Ennis', '76009': 'Alvarado',
        '75146': 'Lancaster', '75104': 'Cedar Hill',
    };
    return zipMap[zip];
}
