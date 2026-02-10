'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
    Users, Mail, TrendingUp, Download, Search, Filter,
    BarChart3, Eye, MousePointer, UserMinus, UserPlus,
    ArrowLeft, RefreshCw, ChevronDown
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
    getSubscribers, getCRMStats, getCampaigns, exportSubscribersCSV,
    downloadCSV, initializeNewsletterData, unsubscribeById, resubscribe,
    getSubscribersByCity, getSubscribersByInterest,
} from '@/lib/crm/newsletter-service';
import type { NewsletterSubscriber, EmailCampaign } from '@/lib/types/newsletter';

type Tab = 'overview' | 'subscribers' | 'campaigns' | 'events';

export default function AdminPage() {
    const [tab, setTab] = useState<Tab>('overview');
    const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);
    const [campaigns, setCampaigns] = useState<EmailCampaign[]>([]);
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'unsubscribed'>('all');
    const [cityFilter, setCityFilter] = useState('');
    const [stats, setStats] = useState<any>(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        initializeNewsletterData();
        loadData();
    }, []);

    const loadData = async () => {
        const [subs, camps, crmStats] = await Promise.all([
            getSubscribers(),
            getCampaigns(),
            getCRMStats()
        ]);
        setSubscribers(subs);
        setCampaigns(camps);
        setStats(crmStats);
        setReady(true);
    };

    const filteredSubscribers = useMemo(() => {
        let subs = subscribers;
        if (statusFilter !== 'all') subs = subs.filter(s => s.status === statusFilter);
        if (cityFilter) subs = subs.filter(s => s.city?.toLowerCase() === cityFilter.toLowerCase());
        if (search) {
            const q = search.toLowerCase();
            subs = subs.filter(s => s.name.toLowerCase().includes(q) || s.email.toLowerCase().includes(q) || s.city?.toLowerCase().includes(q));
        }
        return subs;
    }, [subscribers, statusFilter, cityFilter, search]);

    const handleExport = () => {
        const csv = exportSubscribersCSV(filteredSubscribers);
        downloadCSV(`pv_subscribers_${new Date().toISOString().split('T')[0]}.csv`, csv);
    };

    const toggleStatus = async (id: string, currentStatus: string) => {
        if (currentStatus === 'active') await unsubscribeById(id);
        else await resubscribe(id);
        loadData();
    };

    if (!ready) return null;

    return (
        <div className="min-h-screen bg-dark-bg">
            <Header />
            <main className="max-w-7xl mx-auto px-4 pt-24 pb-16">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <Link href="/forum" className="flex items-center gap-1 text-xs text-white/40 hover:text-white/60 transition-colors mb-2">
                            <ArrowLeft className="w-3 h-3" /> Back to Forum
                        </Link>
                        <h1 className="text-2xl font-bold text-white">CRM Dashboard</h1>
                        <p className="text-sm text-white/50 mt-1">Manage newsletter subscribers and engagement</p>
                    </div>
                    <button onClick={loadData} className="flex items-center gap-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white/60 text-sm hover:border-white/20 transition-colors">
                        <RefreshCw className="w-4 h-4" /> Refresh
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex gap-1 mb-6 bg-white/5 p-1 rounded-lg w-fit">
                    {(['overview', 'subscribers', 'campaigns'] as Tab[]).map(t => (
                        <button
                            key={t}
                            onClick={() => setTab(t)}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors capitalize ${tab === t ? 'bg-gold text-black' : 'text-white/60 hover:text-white'
                                }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>

                {/* Overview Tab */}
                {tab === 'overview' && (
                    <div className="space-y-6">
                        {/* Stats cards */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { label: 'Total Subscribers', value: stats.totalSubscribers, icon: Users, color: 'text-blue-400' },
                                { label: 'Active', value: stats.activeSubscribers, icon: UserPlus, color: 'text-green-400' },
                                { label: 'Avg Open Rate', value: `${stats.avgOpenRate}%`, icon: Eye, color: 'text-amber-400' },
                                { label: 'Avg Click Rate', value: `${stats.avgClickRate}%`, icon: MousePointer, color: 'text-purple-400' },
                            ].map((s, i) => (
                                <motion.div
                                    key={s.label}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-4 rounded-xl bg-white/5 border border-white/10"
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <s.icon className={`w-4 h-4 ${s.color}`} />
                                        <span className="text-xs text-white/50">{s.label}</span>
                                    </div>
                                    <p className="text-2xl font-bold text-white">{s.value}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Growth + Segments */}
                        <div className="grid md:grid-cols-2 gap-4">
                            {/* Growth */}
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4 text-green-400" /> Growth
                                </h3>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs">
                                        <span className="text-white/60">This week</span>
                                        <span className="text-green-400 font-semibold">+{stats.signupsThisWeek}</span>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <span className="text-white/60">This month</span>
                                        <span className="text-green-400 font-semibold">+{stats.signupsThisMonth}</span>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <span className="text-white/60">Unsubscribed</span>
                                        <span className="text-red-400 font-semibold">{stats.unsubscribed}</span>
                                    </div>
                                </div>
                            </div>

                            {/* City Segments */}
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                                    <BarChart3 className="w-4 h-4 text-blue-400" /> By Location
                                </h3>
                                <div className="space-y-2">
                                    {stats.cityBreakdown.slice(0, 6).map((c: any) => (
                                        <div key={c.city} className="flex items-center gap-2">
                                            <div className="flex-1 text-xs text-white/60">{c.city}</div>
                                            <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                                                <div className="h-full bg-blue-500/50 rounded-full" style={{ width: `${(c.count / stats.activeSubscribers) * 100}%` }} />
                                            </div>
                                            <span className="text-xs text-white/40 min-w-[24px] text-right">{c.count}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Top Interests */}
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                            <h3 className="text-sm font-semibold text-white mb-3">Top Interests</h3>
                            <div className="flex flex-wrap gap-2">
                                {stats.topInterests.map((t: any) => (
                                    <span key={t.interest} className="px-3 py-1 rounded-full bg-gold/10 text-gold text-xs border border-gold/20">
                                        {t.interest} ({t.count})
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Subscribers Tab */}
                {tab === 'subscribers' && (
                    <div className="space-y-4">
                        {/* Toolbar */}
                        <div className="flex items-center gap-3 flex-wrap">
                            <div className="flex-1 min-w-[200px] relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                                <input
                                    type="text" placeholder="Search subscribers..."
                                    value={search} onChange={e => setSearch(e.target.value)}
                                    className="w-full pl-9 pr-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-gold/50"
                                />
                            </div>
                            <select
                                value={statusFilter} onChange={e => setStatusFilter(e.target.value as typeof statusFilter)}
                                className="px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white text-sm focus:outline-none"
                            >
                                <option value="all" className="bg-[#1a1a2e]">All Status</option>
                                <option value="active" className="bg-[#1a1a2e]">Active</option>
                                <option value="unsubscribed" className="bg-[#1a1a2e]">Unsubscribed</option>
                            </select>
                            <select
                                value={cityFilter} onChange={e => setCityFilter(e.target.value)}
                                className="px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white text-sm focus:outline-none"
                            >
                                <option value="" className="bg-[#1a1a2e]">All Cities</option>
                                {Array.from(new Set(subscribers.map(s => s.city).filter(Boolean))).sort().map(c => (
                                    <option key={c} value={c} className="bg-[#1a1a2e]">{c}</option>
                                ))}
                            </select>
                            <button onClick={handleExport} className="flex items-center gap-1 px-4 py-2 rounded-lg bg-gold text-black text-sm font-semibold hover:bg-gold/90 transition-colors">
                                <Download className="w-4 h-4" /> Export CSV
                            </button>
                        </div>

                        <p className="text-xs text-white/40">{filteredSubscribers.length} subscriber{filteredSubscribers.length !== 1 ? 's' : ''}</p>

                        {/* Table */}
                        <div className="overflow-x-auto rounded-xl border border-white/10">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-white/5 border-b border-white/10">
                                        <th className="text-left px-4 py-3 text-xs text-white/50 font-medium">Name</th>
                                        <th className="text-left px-4 py-3 text-xs text-white/50 font-medium">Email</th>
                                        <th className="text-left px-4 py-3 text-xs text-white/50 font-medium">City</th>
                                        <th className="text-left px-4 py-3 text-xs text-white/50 font-medium">Frequency</th>
                                        <th className="text-left px-4 py-3 text-xs text-white/50 font-medium">Status</th>
                                        <th className="text-left px-4 py-3 text-xs text-white/50 font-medium">Signup</th>
                                        <th className="text-left px-4 py-3 text-xs text-white/50 font-medium">Source</th>
                                        <th className="text-left px-4 py-3 text-xs text-white/50 font-medium">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredSubscribers.map(sub => (
                                        <tr key={sub.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                            <td className="px-4 py-3 text-white font-medium">{sub.name}</td>
                                            <td className="px-4 py-3 text-white/70">{sub.email}</td>
                                            <td className="px-4 py-3 text-white/60">{sub.city || '—'}</td>
                                            <td className="px-4 py-3">
                                                <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/60 capitalize">
                                                    {sub.preferences.frequency}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${sub.status === 'active' ? 'bg-green-500/15 text-green-400' : 'bg-red-500/15 text-red-400'
                                                    }`}>
                                                    {sub.status}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-xs text-white/40">{new Date(sub.signupDate).toLocaleDateString()}</td>
                                            <td className="px-4 py-3 text-xs text-white/40 capitalize">{sub.optInMethod.replace('_', ' ')}</td>
                                            <td className="px-4 py-3">
                                                <button
                                                    onClick={() => toggleStatus(sub.id, sub.status)}
                                                    className={`text-xs px-2 py-1 rounded transition-colors ${sub.status === 'active'
                                                        ? 'text-red-400 hover:bg-red-500/10'
                                                        : 'text-green-400 hover:bg-green-500/10'
                                                        }`}
                                                >
                                                    {sub.status === 'active' ? 'Unsubscribe' : 'Resubscribe'}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* Campaigns Tab */}
                {tab === 'campaigns' && (
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-white">Email Campaign History</h3>
                        <div className="space-y-3">
                            {campaigns.map(camp => (
                                <div key={camp.id} className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium capitalize ${camp.type === 'weekly_digest' ? 'bg-blue-500/15 text-blue-400 border-blue-500/30' :
                                                camp.type === 'monthly_newsletter' ? 'bg-purple-500/15 text-purple-400 border-purple-500/30' :
                                                    camp.type === 'event_reminder' ? 'bg-green-500/15 text-green-400 border-green-500/30' :
                                                        'bg-amber-500/15 text-amber-400 border-amber-500/30'
                                                }`}>
                                                {camp.type.replace(/_/g, ' ')}
                                            </span>
                                            <h4 className="text-sm font-medium text-white mt-1">{camp.subject}</h4>
                                            <p className="text-xs text-white/40 mt-0.5">Sent {new Date(camp.sentAt).toLocaleDateString()} at {new Date(camp.sentAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 mt-3 pt-3 border-t border-white/5">
                                        <div className="text-center">
                                            <p className="text-lg font-bold text-white">{camp.recipientCount}</p>
                                            <p className="text-[10px] text-white/40">Sent</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-lg font-bold text-green-400">{Math.round((camp.openCount / camp.recipientCount) * 100)}%</p>
                                            <p className="text-[10px] text-white/40">Open Rate</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-lg font-bold text-blue-400">{Math.round((camp.clickCount / camp.recipientCount) * 100)}%</p>
                                            <p className="text-[10px] text-white/40">Click Rate</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-lg font-bold text-red-400">{camp.unsubscribeCount}</p>
                                            <p className="text-[10px] text-white/40">Unsubs</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}
