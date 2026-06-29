'use client';

import { useState, useEffect } from 'react';
import { Megaphone, Calendar, ExternalLink, Loader2 } from 'lucide-react';

interface CommunityNewsItem {
    id: string;
    title: string;
    date?: string;
    source: string;
    sourceUrl: string;
    category: 'meeting' | 'announcement' | 'alert' | 'general';
    city: string;
}

const CITIES = ['All', 'Waxahachie', 'Midlothian', 'Red Oak', 'Ennis', 'Ferris', 'Palmer', 'Italy', 'Ovilla'] as const;
type CityTab = typeof CITIES[number];

const CITY_SOURCES: Partial<Record<CityTab, { label: string; url: string }[]>> = {
    Italy: [
        { label: 'Italy ISD', url: 'https://www.italyisd.org/events' },
        { label: 'City of Italy', url: 'http://ci.italy.tx.us/community/calendar' },
    ],
    Waxahachie: [
        { label: 'City of Waxahachie', url: 'https://www.waxahachie.com' },
        { label: 'Waxahachie ISD', url: 'https://www.wisd.org' },
    ],
    Midlothian: [
        { label: 'City of Midlothian', url: 'https://www.midlothian.tx.us' },
        { label: 'Midlothian ISD', url: 'https://www.midlothianisd.net' },
    ],
    'Red Oak': [
        { label: 'City of Red Oak', url: 'https://www.redoaktexas.gov' },
        { label: 'Red Oak ISD', url: 'https://www.redoakisd.org' },
    ],
    Ennis: [
        { label: 'City of Ennis', url: 'https://www.ennistx.gov' },
        { label: 'Ennis ISD', url: 'https://www.ennisisd.org' },
    ],
    Ferris: [
        { label: 'City of Ferris', url: 'https://www.ferriscitytexas.com' },
        { label: 'Ferris ISD', url: 'https://www.ferrisisd.org' },
    ],
    Palmer: [
        { label: 'City of Palmer', url: 'https://cityofpalmertexas.com' },
        { label: 'Palmer ISD', url: 'https://www.palmerisd.net' },
    ],
    Ovilla: [
        { label: 'City of Ovilla', url: 'https://www.ovillatx.gov' },
    ],
};

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
    const [activeCity, setActiveCity] = useState<CityTab>('All');

    useEffect(() => {
        const controller = new AbortController();
        let mounted = true;

        fetch('/api/community-feed', { signal: controller.signal })
            .then(r => r.json())
            .then(data => {
                if (!mounted) return;
                setItems(data.items || []);
                setSource(data.source || 'fallback');
            })
            .catch((err) => {
                if (err.name === 'AbortError') return; // expected on unmount
            })
            .finally(() => { if (mounted) setLoading(false); });

        return () => {
            mounted = false;
            controller.abort();
        };
    }, []);

    const filteredItems = activeCity === 'All'
        ? items
        : items.filter(item => item.city === activeCity);

    const cityLinks = activeCity !== 'All' ? (CITY_SOURCES[activeCity] ?? []) : [];

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
                        {cityLinks.length > 0 && (
                            <div className="flex gap-3 text-xs text-cream/40">
                                {cityLinks.map(link => (
                                    <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
                                        className="hover:text-gold transition-colors flex items-center gap-1">
                                        {link.label} <ExternalLink className="w-3 h-3" />
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* City Tabs */}
                    <div className="flex gap-1 mb-4 overflow-x-auto pb-1 scrollbar-none">
                        {CITIES.map(city => (
                            <button
                                key={city}
                                onClick={() => setActiveCity(city)}
                                className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                                    activeCity === city
                                        ? 'bg-gold text-charcoal'
                                        : 'bg-white/5 text-cream/60 hover:bg-white/10 hover:text-cream'
                                }`}
                            >
                                {city}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    {loading ? (
                        <div className="space-y-3">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="h-12 rounded-lg bg-white/5 animate-pulse" />
                            ))}
                        </div>
                    ) : filteredItems.length === 0 ? (
                        <p className="text-sm text-cream/40 text-center py-4">
                            No updates available for {activeCity}.
                        </p>
                    ) : (
                        <ul className="space-y-2">
                            {filteredItems.map(item => (
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
                                            {activeCity === 'All' && (
                                                <span className="text-xs text-cream/25">· {item.city}</span>
                                            )}
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
