'use client';

import { useState, useEffect } from 'react';
import { Megaphone, Calendar, ExternalLink, Loader2 } from 'lucide-react';

interface CommunityNewsItem {
    id: string;
    title: string;
    date?: string;
    source: 'Italy ISD' | 'City of Italy';
    sourceUrl: string;
    category: 'meeting' | 'announcement' | 'alert' | 'general';
}

const categoryColors = {
    meeting: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    alert: 'text-red-400 bg-red-400/10 border-red-400/20',
    announcement: 'text-gold bg-gold/10 border-gold/20',
    general: 'text-cream/60 bg-white/5 border-white/10',
};

export default function CommunityNewsFeed() {
    const [items, setItems] = useState<CommunityNewsItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [source, setSource] = useState<'live' | 'fallback'>('fallback');

    useEffect(() => {
        fetch('/api/community-feed')
            .then(r => r.json())
            .then(data => {
                setItems(data.items || []);
                setSource(data.source || 'fallback');
            })
            .catch(() => {/* silently fail — no items shown */ })
            .finally(() => setLoading(false));
    }, []);

    if (!loading && items.length === 0) return null;

    return (
        <section className="py-section-sm">
            <div className="container-custom">
                <div className="glass-card p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <Megaphone className="w-5 h-5 text-gold" />
                            <h3 className="font-display text-lg font-semibold text-white">
                                Community Updates
                            </h3>
                            {source === 'live' && (
                                <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/15 border border-green-500/30 text-green-400 text-xs font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                    Live
                                </span>
                            )}
                        </div>
                        <div className="flex gap-3 text-xs text-cream/40">
                            <a href="https://www.italyisd.org/events" target="_blank" rel="noopener noreferrer"
                                className="hover:text-gold transition-colors flex items-center gap-1">
                                Italy ISD <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="http://ci.italy.tx.us/community/calendar" target="_blank" rel="noopener noreferrer"
                                className="hover:text-gold transition-colors flex items-center gap-1">
                                City of Italy <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    </div>

                    {/* Content */}
                    {loading ? (
                        <div className="space-y-3">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="h-12 rounded-lg bg-white/5 animate-pulse" />
                            ))}
                        </div>
                    ) : (
                        <ul className="space-y-2">
                            {items.map(item => (
                                <li key={item.id}
                                    className="flex items-start gap-3 p-3 rounded-xl bg-white/3 border border-white/5 hover:border-gold/20 transition-colors">
                                    <span className={`flex-shrink-0 mt-0.5 px-2 py-0.5 rounded text-[10px] font-semibold border ${categoryColors[item.category]}`}>
                                        {item.category.toUpperCase()}
                                    </span>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm text-white font-medium leading-snug truncate">
                                            {item.title}
                                        </p>
                                        <div className="flex items-center gap-2 mt-0.5">
                                            {item.date && (
                                                <span className="flex items-center gap-1 text-xs text-cream/50">
                                                    <Calendar className="w-3 h-3" />
                                                    {item.date}
                                                </span>
                                            )}
                                            <span className="text-xs text-cream/30">· {item.source}</span>
                                        </div>
                                    </div>
                                    <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer"
                                        className="flex-shrink-0 text-cream/30 hover:text-gold transition-colors mt-0.5">
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </section>
    );
}
