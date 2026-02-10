'use client';

import { getForumStats } from '@/lib/forum/forum-service';
import { LOCAL_RESOURCES } from '@/lib/forum/forum-data';
import { useState, useEffect } from 'react';
import { ForumStats, LocalResource } from '@/lib/types/forum';
import {
    Users, MessageSquare, MessageCircle, Activity,
    ExternalLink, Phone, Building, Shield,
    Wrench, Heart, ChevronDown, CalendarCheck
} from 'lucide-react';
import Link from 'next/link';
import NewsletterSignup from '@/components/crm/NewsletterSignup';
import UpcomingMeetings from '@/components/events/UpcomingMeetings';

const categoryIcons: Record<string, React.ReactNode> = {
    government: <Building className="w-4 h-4 text-blue-400" />,
    emergency: <Shield className="w-4 h-4 text-red-400" />,
    services: <Wrench className="w-4 h-4 text-amber-400" />,
    community: <Heart className="w-4 h-4 text-pink-400" />,
};

const categoryLabels: Record<string, string> = {
    government: 'Government',
    emergency: 'Emergency',
    services: 'Services',
    community: 'Community',
};

export default function ForumSidebar() {
    const [stats, setStats] = useState<ForumStats>({ totalTopics: 0, totalReplies: 0, totalUsers: 0, activeToday: 0 });
    const [expandedResource, setExpandedResource] = useState<string | null>('government');

    useEffect(() => {
        const fetchStats = async () => {
            const data = await getForumStats();
            setStats(data);
        };
        fetchStats();
    }, []);

    // Group resources by category
    const grouped = LOCAL_RESOURCES.reduce<Record<string, LocalResource[]>>((acc, r) => {
        if (!acc[r.category]) acc[r.category] = [];
        acc[r.category].push(r);
        return acc;
    }, {});

    return (
        <div className="space-y-6">
            {/* Book Consultation CTA */}
            <Link
                href="/services#book"
                className="block bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 rounded-xl p-5 hover:border-gold/50 transition-colors group"
            >
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                        <CalendarCheck className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-gold text-sm">Book Your Consultation</h4>
                        <p className="text-cream/50 text-xs">Strategic communication experts</p>
                    </div>
                </div>
            </Link>

            {/* Upcoming Meetings */}
            <UpcomingMeetings limit={5} />

            {/* Community Stats */}
            <div className="bg-navy border border-gold/20 rounded-xl p-5">
                <h3 className="font-display text-sm font-semibold text-gold uppercase tracking-wider mb-4">
                    Community Activity
                </h3>
                <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-navy-dark/50 rounded-lg border border-gold/10">
                        <MessageSquare className="w-5 h-5 text-gold mx-auto mb-1" />
                        <p className="text-lg font-bold text-white">{stats.totalTopics}</p>
                        <p className="text-xs text-cream/40">Topics</p>
                    </div>
                    <div className="text-center p-3 bg-navy-dark/50 rounded-lg border border-gold/10">
                        <MessageCircle className="w-5 h-5 text-gold mx-auto mb-1" />
                        <p className="text-lg font-bold text-white">{stats.totalReplies}</p>
                        <p className="text-xs text-cream/40">Replies</p>
                    </div>
                    <div className="text-center p-3 bg-navy-dark/50 rounded-lg border border-gold/10">
                        <Users className="w-5 h-5 text-gold mx-auto mb-1" />
                        <p className="text-lg font-bold text-white">{stats.totalUsers}</p>
                        <p className="text-xs text-cream/40">Members</p>
                    </div>
                    <div className="text-center p-3 bg-navy-dark/50 rounded-lg border border-gold/10">
                        <Activity className="w-5 h-5 text-green-400 mx-auto mb-1" />
                        <p className="text-lg font-bold text-white">{stats.activeToday}</p>
                        <p className="text-xs text-cream/40">Active Today</p>
                    </div>
                </div>
            </div>

            {/* Community Guidelines */}
            <div className="bg-navy border border-gold/20 rounded-xl p-5">
                <h3 className="font-display text-sm font-semibold text-gold uppercase tracking-wider mb-3">
                    Community Guidelines
                </h3>
                <ul className="text-cream/60 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                        <span className="text-gold mt-0.5">•</span>
                        Be respectful and civil in all discussions
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-gold mt-0.5">•</span>
                        Stay on topic and relevant to Ellis County
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-gold mt-0.5">•</span>
                        No personal attacks or harassment
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-gold mt-0.5">•</span>
                        Back up claims with credible sources
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-gold mt-0.5">•</span>
                        Report inappropriate content using the flag button
                    </li>
                </ul>
            </div>

            {/* Newsletter Signup */}
            <NewsletterSignup variant="sidebar" optInMethod="forum_sidebar" />

            {/* Local Resources */}
            <div className="bg-navy border border-gold/20 rounded-xl p-5">
                <h3 className="font-display text-sm font-semibold text-gold uppercase tracking-wider mb-4">
                    Local Resources
                </h3>
                <div className="space-y-2">
                    {Object.entries(grouped).map(([category, resources]) => (
                        <div key={category} className="border border-gold/10 rounded-lg overflow-hidden">
                            <button
                                onClick={() => setExpandedResource(expandedResource === category ? null : category)}
                                className="w-full flex items-center justify-between p-3 text-left hover:bg-gold/5 transition-colors"
                            >
                                <div className="flex items-center gap-2">
                                    {categoryIcons[category]}
                                    <span className="text-sm font-semibold text-white">{categoryLabels[category]}</span>
                                    <span className="text-xs text-cream/30">({resources.length})</span>
                                </div>
                                <ChevronDown className={`w-4 h-4 text-gold transition-transform ${expandedResource === category ? 'rotate-180' : ''}`} />
                            </button>

                            {expandedResource === category && (
                                <div className="border-t border-gold/10 p-2 space-y-1">
                                    {resources.map((resource) => (
                                        <a
                                            key={resource.name}
                                            href={resource.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-start gap-2 p-2 rounded-lg hover:bg-gold/5 transition-colors group"
                                        >
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm text-cream/80 group-hover:text-gold transition-colors font-medium truncate">
                                                    {resource.name}
                                                </p>
                                                <p className="text-xs text-cream/40 truncate">{resource.description}</p>
                                                {resource.phone && (
                                                    <p className="text-xs text-cream/40 flex items-center gap-1 mt-0.5">
                                                        <Phone className="w-3 h-3" /> {resource.phone}
                                                    </p>
                                                )}
                                            </div>
                                            <ExternalLink className="w-3 h-3 text-cream/30 group-hover:text-gold flex-shrink-0 mt-1" />
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
