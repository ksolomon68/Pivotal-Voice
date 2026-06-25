'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
    Users, Mail, TrendingUp, Download, Search,
    BarChart3, Eye, MousePointer, UserMinus, UserPlus,
    RefreshCw, ChevronDown, Podcast, Calendar, Shield,
    ShieldCheck, LogOut, Copy, Check, ExternalLink,
    Plus, Clock, Radio, CheckCircle, XCircle,
} from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/lib/forum/AuthContext';
import { supabase } from '@/lib/supabase/client';
import {
    getSubscribers, getCRMStats, getCampaigns, exportSubscribersCSV,
    downloadCSV, initializeNewsletterData, unsubscribeById, resubscribe,
} from '@/lib/crm/newsletter-service';
import { createSession, getLiveSessions, getScheduledSessions } from '@/lib/broadcast/broadcast-service';
import type { NewsletterSubscriber, EmailCampaign } from '@/lib/types/newsletter';
import type { BroadcastSession } from '@/lib/types/broadcast';

type Tab = 'overview' | 'users' | 'podcasts' | 'subscribers' | 'campaigns';

interface ProfileRow {
    id: string;
    display_name: string;
    email: string;
    city?: string;
    join_date: string;
    is_admin: boolean;
    is_moderator: boolean;
    topic_count: number;
    reply_count: number;
    reputation: number;
}

export default function AdminPage() {
    const { user, logout } = useAuth();
    const [tab, setTab] = useState<Tab>('overview');

    // CRM state
    const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);
    const [campaigns, setCampaigns] = useState<EmailCampaign[]>([]);
    const [stats, setStats] = useState<any>(null);
    const [crmReady, setCrmReady] = useState(false);

    // Users state
    const [profiles, setProfiles] = useState<ProfileRow[]>([]);
    const [userSearch, setUserSearch] = useState('');
    const [usersLoading, setUsersLoading] = useState(false);
    const [togglingId, setTogglingId] = useState<string | null>(null);

    // Podcast state
    const [liveSessions, setLiveSessions] = useState<BroadcastSession[]>([]);
    const [scheduledSessions, setScheduledSessions] = useState<BroadcastSession[]>([]);
    const [podcastsLoading, setPodcastsLoading] = useState(false);
    const [showNewForm, setShowNewForm] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newDesc, setNewDesc] = useState('');
    const [newDate, setNewDate] = useState('');
    const [newTime, setNewTime] = useState('');
    const [creating, setCreating] = useState(false);
    const [copiedId, setCopiedId] = useState<string | null>(null);

    // CRM filter state
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'unsubscribed'>('all');

    const loadCRM = useCallback(async () => {
        initializeNewsletterData();
        const [subs, camps, crmStats] = await Promise.all([
            getSubscribers(), getCampaigns(), getCRMStats(),
        ]);
        setSubscribers(subs);
        setCampaigns(camps);
        setStats(crmStats);
        setCrmReady(true);
    }, []);

    const loadUsers = useCallback(async () => {
        setUsersLoading(true);
        const { data, error } = await supabase
            .from('profiles')
            .select('id, display_name, email, city, join_date, is_admin, is_moderator, topic_count, reply_count, reputation')
            .order('join_date', { ascending: false });
        if (!error && data) setProfiles(data as ProfileRow[]);
        setUsersLoading(false);
    }, []);

    const loadPodcasts = useCallback(async () => {
        setPodcastsLoading(true);
        const [live, scheduled] = await Promise.all([getLiveSessions(), getScheduledSessions()]);
        setLiveSessions(live);
        setScheduledSessions(scheduled);
        setPodcastsLoading(false);
    }, []);

    useEffect(() => { loadCRM(); }, [loadCRM]);

    useEffect(() => {
        if (tab === 'users') loadUsers();
        if (tab === 'podcasts') loadPodcasts();
    }, [tab, loadUsers, loadPodcasts]);

    const filteredSubscribers = useMemo(() => {
        let subs = subscribers;
        if (statusFilter !== 'all') subs = subs.filter(s => s.status === statusFilter);
        if (search) {
            const q = search.toLowerCase();
            subs = subs.filter(s =>
                s.name.toLowerCase().includes(q) ||
                s.email.toLowerCase().includes(q) ||
                s.city?.toLowerCase().includes(q)
            );
        }
        return subs;
    }, [subscribers, statusFilter, search]);

    const filteredProfiles = useMemo(() => {
        if (!userSearch) return profiles;
        const q = userSearch.toLowerCase();
        return profiles.filter(p =>
            p.display_name.toLowerCase().includes(q) ||
            p.email.toLowerCase().includes(q) ||
            p.city?.toLowerCase().includes(q)
        );
    }, [profiles, userSearch]);

    const toggleRole = async (profileId: string, field: 'is_admin' | 'is_moderator', current: boolean) => {
        if (profileId === user?.id && field === 'is_admin') return; // can't demote yourself
        setTogglingId(profileId + field);
        const { error } = await supabase
            .from('profiles')
            .update({ [field]: !current })
            .eq('id', profileId);
        if (!error) {
            setProfiles(prev => prev.map(p =>
                p.id === profileId ? { ...p, [field]: !current } : p
            ));
        }
        setTogglingId(null);
    };

    const handleCreateSession = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) return;
        setCreating(true);
        try {
            const scheduledAt = newDate && newTime
                ? new Date(`${newDate}T${newTime}`).toISOString()
                : undefined;
            await createSession(user.id, user.displayName, newTitle, newDesc || undefined, scheduledAt);
            setNewTitle(''); setNewDesc(''); setNewDate(''); setNewTime('');
            setShowNewForm(false);
            loadPodcasts();
        } catch (err) {
            console.error(err);
        }
        setCreating(false);
    };

    const copyInviteLink = (token: string, id: string) => {
        const url = `${window.location.origin}/podcast/studio/${id}?invite=${token}`;
        navigator.clipboard.writeText(url);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const tabs: { key: Tab; label: string; icon: React.ReactNode }[] = [
        { key: 'overview', label: 'Overview', icon: <BarChart3 className="w-4 h-4" /> },
        { key: 'users', label: 'Users', icon: <Users className="w-4 h-4" /> },
        { key: 'podcasts', label: 'Podcasts', icon: <Podcast className="w-4 h-4" /> },
        { key: 'subscribers', label: 'Subscribers', icon: <Mail className="w-4 h-4" /> },
        { key: 'campaigns', label: 'Campaigns', icon: <TrendingUp className="w-4 h-4" /> },
    ];

    return (
        <div className="min-h-screen bg-navy-dark">
            {/* Top bar */}
            <div className="sticky top-0 z-40 border-b border-gold/15 bg-navy-dark/95 backdrop-blur">
                <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="text-gold font-display font-bold text-sm">Pivotal Voice</Link>
                        <span className="text-cream/20">/</span>
                        <span className="text-cream/60 text-sm">Admin</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-cream/50 text-sm hidden sm:block">{user?.displayName}</span>
                        <button
                            onClick={logout}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-cream/50 hover:text-red-400 hover:bg-red-500/10 text-xs transition-colors"
                        >
                            <LogOut className="w-3.5 h-3.5" /> Sign out
                        </button>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 pt-8 pb-16">
                <h1 className="text-2xl font-display font-bold text-white mb-6">Dashboard</h1>

                {/* Tabs */}
                <div className="flex gap-1 mb-8 bg-navy border border-gold/10 p-1 rounded-xl overflow-x-auto">
                    {tabs.map(t => (
                        <button
                            key={t.key}
                            onClick={() => setTab(t.key)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${tab === t.key
                                ? 'bg-gold text-navy font-semibold'
                                : 'text-cream/60 hover:text-white hover:bg-white/5'
                            }`}
                        >
                            {t.icon}{t.label}
                        </button>
                    ))}
                </div>

                {/* ── OVERVIEW TAB ── */}
                {tab === 'overview' && crmReady && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { label: 'Total Subscribers', value: stats.totalSubscribers, icon: Users, color: 'text-blue-400' },
                                { label: 'Active', value: stats.activeSubscribers, icon: UserPlus, color: 'text-green-400' },
                                { label: 'Avg Open Rate', value: `${stats.avgOpenRate}%`, icon: Eye, color: 'text-amber-400' },
                                { label: 'Avg Click Rate', value: `${stats.avgClickRate}%`, icon: MousePointer, color: 'text-purple-400' },
                            ].map((s, i) => (
                                <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                                    className="p-4 rounded-xl bg-navy border border-gold/10">
                                    <div className="flex items-center gap-2 mb-2">
                                        <s.icon className={`w-4 h-4 ${s.color}`} />
                                        <span className="text-xs text-cream/50">{s.label}</span>
                                    </div>
                                    <p className="text-2xl font-bold text-white">{s.value}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-navy border border-gold/10">
                                <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4 text-green-400" /> Growth
                                </h3>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs">
                                        <span className="text-cream/60">This week</span>
                                        <span className="text-green-400 font-semibold">+{stats.signupsThisWeek}</span>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <span className="text-cream/60">This month</span>
                                        <span className="text-green-400 font-semibold">+{stats.signupsThisMonth}</span>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <span className="text-cream/60">Unsubscribed</span>
                                        <span className="text-red-400 font-semibold">{stats.unsubscribed}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 rounded-xl bg-navy border border-gold/10">
                                <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                                    <BarChart3 className="w-4 h-4 text-blue-400" /> By Location
                                </h3>
                                <div className="space-y-2">
                                    {stats.cityBreakdown.slice(0, 5).map((c: any) => (
                                        <div key={c.city} className="flex items-center gap-2">
                                            <div className="flex-1 text-xs text-cream/60">{c.city}</div>
                                            <div className="w-24 h-1.5 bg-white/5 rounded-full overflow-hidden">
                                                <div className="h-full bg-blue-500/50 rounded-full" style={{ width: `${(c.count / stats.activeSubscribers) * 100}%` }} />
                                            </div>
                                            <span className="text-xs text-cream/40 w-5 text-right">{c.count}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="p-4 rounded-xl bg-navy border border-gold/10">
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

                {/* ── USERS TAB ── */}
                {tab === 'users' && (
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="relative flex-1 max-w-sm">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/30" />
                                <input
                                    type="text"
                                    placeholder="Search users…"
                                    value={userSearch}
                                    onChange={e => setUserSearch(e.target.value)}
                                    className="input w-full pl-9"
                                />
                            </div>
                            <button onClick={loadUsers} className="flex items-center gap-1 px-3 py-2 rounded-lg bg-navy border border-gold/10 text-cream/50 text-sm hover:text-cream transition-colors">
                                <RefreshCw className="w-4 h-4" />
                            </button>
                        </div>

                        {usersLoading ? (
                            <div className="text-center py-12 text-cream/40">Loading users…</div>
                        ) : (
                            <>
                                <p className="text-xs text-cream/40">{filteredProfiles.length} users</p>
                                <div className="overflow-x-auto rounded-xl border border-gold/10">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="bg-navy border-b border-gold/10">
                                                <th className="text-left px-4 py-3 text-xs text-cream/40 font-medium">Name</th>
                                                <th className="text-left px-4 py-3 text-xs text-cream/40 font-medium">Email</th>
                                                <th className="text-left px-4 py-3 text-xs text-cream/40 font-medium hidden md:table-cell">City</th>
                                                <th className="text-left px-4 py-3 text-xs text-cream/40 font-medium hidden md:table-cell">Joined</th>
                                                <th className="text-center px-4 py-3 text-xs text-cream/40 font-medium">Topics</th>
                                                <th className="text-center px-4 py-3 text-xs text-cream/40 font-medium">Admin</th>
                                                <th className="text-center px-4 py-3 text-xs text-cream/40 font-medium">Mod</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredProfiles.map(p => (
                                                <tr key={p.id} className="border-b border-gold/5 hover:bg-gold/5 transition-colors">
                                                    <td className="px-4 py-3 text-white font-medium">{p.display_name}</td>
                                                    <td className="px-4 py-3 text-cream/60 text-xs">{p.email}</td>
                                                    <td className="px-4 py-3 text-cream/50 text-xs hidden md:table-cell">{p.city || '—'}</td>
                                                    <td className="px-4 py-3 text-cream/40 text-xs hidden md:table-cell">
                                                        {new Date(p.join_date).toLocaleDateString()}
                                                    </td>
                                                    <td className="px-4 py-3 text-center text-cream/50 text-xs">{p.topic_count}</td>
                                                    <td className="px-4 py-3 text-center">
                                                        <button
                                                            onClick={() => toggleRole(p.id, 'is_admin', p.is_admin)}
                                                            disabled={p.id === user?.id || togglingId === p.id + 'is_admin'}
                                                            title={p.id === user?.id ? "Can't change your own admin status" : ''}
                                                            className={`inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors ${p.is_admin
                                                                ? 'bg-gold/20 text-gold hover:bg-gold/10'
                                                                : 'bg-white/5 text-cream/30 hover:bg-white/10'
                                                            } disabled:opacity-40 disabled:cursor-not-allowed`}
                                                        >
                                                            <ShieldCheck className="w-4 h-4" />
                                                        </button>
                                                    </td>
                                                    <td className="px-4 py-3 text-center">
                                                        <button
                                                            onClick={() => toggleRole(p.id, 'is_moderator', p.is_moderator)}
                                                            disabled={togglingId === p.id + 'is_moderator'}
                                                            className={`inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors ${p.is_moderator
                                                                ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/10'
                                                                : 'bg-white/5 text-cream/30 hover:bg-white/10'
                                                            } disabled:opacity-40`}
                                                        >
                                                            <Shield className="w-4 h-4" />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        )}
                    </div>
                )}

                {/* ── PODCASTS TAB ── */}
                {tab === 'podcasts' && (
                    <div className="space-y-6">
                        {/* Schedule new */}
                        <div className="rounded-xl border border-gold/20 bg-navy overflow-hidden">
                            <button
                                onClick={() => setShowNewForm(v => !v)}
                                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gold/5 transition-colors"
                            >
                                <span className="flex items-center gap-2 text-white font-medium">
                                    <Plus className="w-4 h-4 text-gold" /> Schedule a Broadcast
                                </span>
                                <ChevronDown className={`w-4 h-4 text-cream/40 transition-transform ${showNewForm ? 'rotate-180' : ''}`} />
                            </button>

                            {showNewForm && (
                                <form onSubmit={handleCreateSession} className="px-5 pb-5 space-y-4 border-t border-gold/10 pt-4">
                                    <div>
                                        <label className="block text-xs text-cream/50 mb-1">Title *</label>
                                        <input
                                            type="text"
                                            placeholder="Episode title"
                                            value={newTitle}
                                            onChange={e => setNewTitle(e.target.value)}
                                            required
                                            className="input w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs text-cream/50 mb-1">Description</label>
                                        <textarea
                                            placeholder="Brief description (optional)"
                                            value={newDesc}
                                            onChange={e => setNewDesc(e.target.value)}
                                            rows={2}
                                            className="input w-full resize-none"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-xs text-cream/50 mb-1">Date</label>
                                            <input
                                                type="date"
                                                value={newDate}
                                                onChange={e => setNewDate(e.target.value)}
                                                className="input w-full"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs text-cream/50 mb-1">Time</label>
                                            <input
                                                type="time"
                                                value={newTime}
                                                onChange={e => setNewTime(e.target.value)}
                                                className="input w-full"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <button type="submit" disabled={creating} className="btn-primary">
                                            {creating ? 'Creating…' : 'Create Session'}
                                        </button>
                                        <button type="button" onClick={() => setShowNewForm(false)} className="btn-secondary">
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>

                        {/* Live sessions */}
                        {liveSessions.length > 0 && (
                            <div>
                                <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                                    <Radio className="w-4 h-4 text-red-400 animate-pulse" /> Live Now
                                </h3>
                                <div className="space-y-3">
                                    {liveSessions.map(s => (
                                        <SessionRow key={s.id} session={s} copiedId={copiedId} onCopy={copyInviteLink} />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Scheduled sessions */}
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-gold" /> Scheduled
                                </h3>
                                <button onClick={loadPodcasts} className="text-xs text-cream/40 hover:text-cream flex items-center gap-1">
                                    <RefreshCw className="w-3 h-3" /> Refresh
                                </button>
                            </div>
                            {podcastsLoading ? (
                                <div className="text-center py-8 text-cream/40">Loading…</div>
                            ) : scheduledSessions.length === 0 ? (
                                <div className="text-center py-10 rounded-xl border border-gold/10 bg-navy">
                                    <Podcast className="w-10 h-10 text-gold/20 mx-auto mb-3" />
                                    <p className="text-cream/40 text-sm">No upcoming sessions. Schedule one above.</p>
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    {scheduledSessions.map(s => (
                                        <SessionRow key={s.id} session={s} copiedId={copiedId} onCopy={copyInviteLink} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* ── SUBSCRIBERS TAB ── */}
                {tab === 'subscribers' && (
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 flex-wrap">
                            <div className="flex-1 min-w-[200px] relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/30" />
                                <input
                                    type="text"
                                    placeholder="Search subscribers…"
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    className="input w-full pl-9"
                                />
                            </div>
                            <select
                                value={statusFilter}
                                onChange={e => setStatusFilter(e.target.value as typeof statusFilter)}
                                className="input"
                            >
                                <option value="all">All Status</option>
                                <option value="active">Active</option>
                                <option value="unsubscribed">Unsubscribed</option>
                            </select>
                            <button
                                onClick={() => downloadCSV(`pv_subscribers_${new Date().toISOString().split('T')[0]}.csv`, exportSubscribersCSV(filteredSubscribers))}
                                className="flex items-center gap-1 px-4 py-2 rounded-lg bg-gold text-navy text-sm font-semibold hover:bg-gold/90 transition-colors"
                            >
                                <Download className="w-4 h-4" /> Export CSV
                            </button>
                        </div>
                        <p className="text-xs text-cream/40">{filteredSubscribers.length} subscribers</p>
                        <div className="overflow-x-auto rounded-xl border border-gold/10">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-navy border-b border-gold/10">
                                        {['Name', 'Email', 'City', 'Status', 'Joined', 'Action'].map(h => (
                                            <th key={h} className="text-left px-4 py-3 text-xs text-cream/40 font-medium">{h}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredSubscribers.map(sub => (
                                        <tr key={sub.id} className="border-b border-gold/5 hover:bg-gold/5 transition-colors">
                                            <td className="px-4 py-3 text-white font-medium">{sub.name}</td>
                                            <td className="px-4 py-3 text-cream/60 text-xs">{sub.email}</td>
                                            <td className="px-4 py-3 text-cream/50 text-xs">{sub.city || '—'}</td>
                                            <td className="px-4 py-3">
                                                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${sub.status === 'active' ? 'bg-green-500/15 text-green-400' : 'bg-red-500/15 text-red-400'}`}>
                                                    {sub.status}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-xs text-cream/40">{new Date(sub.signupDate).toLocaleDateString()}</td>
                                            <td className="px-4 py-3">
                                                <button
                                                    onClick={async () => {
                                                        if (sub.status === 'active') await unsubscribeById(sub.id);
                                                        else await resubscribe(sub.id);
                                                        loadCRM();
                                                    }}
                                                    className={`text-xs px-2 py-1 rounded transition-colors ${sub.status === 'active' ? 'text-red-400 hover:bg-red-500/10' : 'text-green-400 hover:bg-green-500/10'}`}
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

                {/* ── CAMPAIGNS TAB ── */}
                {tab === 'campaigns' && (
                    <div className="space-y-3">
                        {campaigns.map(camp => (
                            <div key={camp.id} className="p-4 rounded-xl bg-navy border border-gold/10">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium capitalize ${camp.type === 'weekly_digest' ? 'bg-blue-500/15 text-blue-400 border-blue-500/30' :
                                            camp.type === 'monthly_newsletter' ? 'bg-purple-500/15 text-purple-400 border-purple-500/30' :
                                                'bg-green-500/15 text-green-400 border-green-500/30'}`}>
                                            {camp.type.replace(/_/g, ' ')}
                                        </span>
                                        <h4 className="text-sm font-medium text-white mt-1">{camp.subject}</h4>
                                        <p className="text-xs text-cream/40 mt-0.5">
                                            Sent {new Date(camp.sentAt).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-6 mt-3 pt-3 border-t border-gold/5 text-center">
                                    <div>
                                        <p className="text-base font-bold text-white">{camp.recipientCount}</p>
                                        <p className="text-[10px] text-cream/40">Sent</p>
                                    </div>
                                    <div>
                                        <p className="text-base font-bold text-green-400">{Math.round((camp.openCount / camp.recipientCount) * 100)}%</p>
                                        <p className="text-[10px] text-cream/40">Open Rate</p>
                                    </div>
                                    <div>
                                        <p className="text-base font-bold text-blue-400">{Math.round((camp.clickCount / camp.recipientCount) * 100)}%</p>
                                        <p className="text-[10px] text-cream/40">Click Rate</p>
                                    </div>
                                    <div>
                                        <p className="text-base font-bold text-red-400">{camp.unsubscribeCount}</p>
                                        <p className="text-[10px] text-cream/40">Unsubs</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}

function SessionRow({ session, copiedId, onCopy }: {
    session: BroadcastSession;
    copiedId: string | null;
    onCopy: (token: string, id: string) => void;
}) {
    const statusColors: Record<string, string> = {
        live: 'bg-red-500/15 text-red-400 border-red-500/30',
        scheduled: 'bg-gold/15 text-gold border-gold/30',
        ended: 'bg-white/10 text-cream/40 border-white/10',
    };

    return (
        <div className="p-4 rounded-xl bg-navy border border-gold/10">
            <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium uppercase ${statusColors[session.status]}`}>
                            {session.status}
                        </span>
                        <h4 className="text-sm font-medium text-white truncate">{session.title}</h4>
                    </div>
                    {session.description && (
                        <p className="text-xs text-cream/50 mb-2">{session.description}</p>
                    )}
                    {session.scheduledAt && (
                        <p className="text-xs text-cream/40 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(session.scheduledAt).toLocaleString()}
                        </p>
                    )}
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                    {session.guestInviteToken && (
                        <button
                            onClick={() => onCopy(session.guestInviteToken!, session.id)}
                            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gold/10 text-gold text-xs border border-gold/20 hover:bg-gold/20 transition-colors"
                        >
                            {copiedId === session.id ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                            {copiedId === session.id ? 'Copied!' : 'Invite Link'}
                        </button>
                    )}
                    {session.status !== 'ended' && (
                        <Link
                            href={`/podcast/studio/${session.id}`}
                            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-navy-dark text-cream/70 text-xs border border-gold/15 hover:border-gold/40 transition-colors"
                        >
                            <ExternalLink className="w-3 h-3" /> Studio
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
