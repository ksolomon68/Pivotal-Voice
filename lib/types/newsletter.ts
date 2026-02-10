// CRM & Newsletter TypeScript interfaces

export type UpdateFrequency = 'daily' | 'weekly' | 'realtime';
export type SubscriberStatus = 'active' | 'unsubscribed' | 'bounced';
export type OptInMethod = 'forum_sidebar' | 'homepage' | 'popup' | 'registration' | 'admin_import';

export interface SubscriberPreferences {
    frequency: UpdateFrequency;
    topics: string[];  // forum category IDs
    emailNotifications: {
        newTopicsInCategories: boolean;
        repliesToPosts: boolean;
        trendingDiscussions: boolean;
        eventReminders: boolean;
        weeklyDigest: boolean;
        monthlyNewsletter: boolean;
    };
}

export interface NewsletterSubscriber {
    id: string;
    email: string;
    name: string;
    zipCode: string;
    city?: string;
    interests: string[];
    preferences: SubscriberPreferences;
    status: SubscriberStatus;
    signupDate: string;
    optInMethod: OptInMethod;
    consentTimestamp: string;
    unsubscribeToken: string;
    lastEmailSent?: string;
    lastEmailOpened?: string;
    lastEmailClicked?: string;
    engagementHistory: EngagementEvent[];
    forumUserId?: string; // link to forum account if exists
}

export interface EngagementEvent {
    type: 'email_sent' | 'email_opened' | 'email_clicked' | 'unsubscribed' | 'resubscribed';
    timestamp: string;
    details?: string;
}

export interface CRMStats {
    totalSubscribers: number;
    activeSubscribers: number;
    unsubscribed: number;
    avgOpenRate: number;
    avgClickRate: number;
    signupsThisWeek: number;
    signupsThisMonth: number;
    topInterests: { interest: string; count: number }[];
    cityBreakdown: { city: string; count: number }[];
}

export interface EmailCampaign {
    id: string;
    type: 'weekly_digest' | 'monthly_newsletter' | 'event_reminder' | 'trending_alert';
    subject: string;
    sentAt: string;
    recipientCount: number;
    openCount: number;
    clickCount: number;
    unsubscribeCount: number;
}

export interface UserSubmittedEvent {
    id: string;
    title: string;
    description: string;
    date: string;
    startTime: string;
    endTime?: string;
    location: string;
    city: string;
    eventType: string;
    submittedBy: string;
    submittedAt: string;
    status: 'pending' | 'approved' | 'rejected';
    reviewedBy?: string;
    reviewedAt?: string;
}
