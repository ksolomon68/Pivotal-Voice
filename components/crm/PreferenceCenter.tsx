'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Settings, Clock, Bell, Tag, Save, CheckCircle, Loader2 } from 'lucide-react';
import { getSubscriberByEmail, updateSubscriberPreferences } from '@/lib/crm/newsletter-service';
import type { SubscriberPreferences, UpdateFrequency } from '@/lib/types/newsletter';

const TOPIC_OPTIONS = [
    { id: 'taxes', label: 'Property Taxes & Budget' },
    { id: 'infrastructure', label: 'Infrastructure & Roads' },
    { id: 'education', label: 'Education & Schools' },
    { id: 'safety', label: 'Public Safety & EMS' },
    { id: 'growth', label: 'Growth & Development' },
    { id: 'healthcare', label: 'Healthcare Access' },
    { id: 'agriculture', label: 'Agriculture & Farming' },
    { id: 'environment', label: 'Environment & Water' },
    { id: 'economic', label: 'Economic Development' },
    { id: 'quality', label: 'Quality of Life & Parks' },
];

const FREQUENCY_OPTIONS: { value: UpdateFrequency; label: string; description: string }[] = [
    { value: 'realtime', label: 'Real-Time Alerts', description: 'Get notified immediately when important events happen' },
    { value: 'daily', label: 'Daily Digest', description: 'One email per day with all updates' },
    { value: 'weekly', label: 'Weekly Summary', description: 'A weekly roundup every Monday morning' },
];

interface PreferenceCenterProps {
    userEmail: string;
    onClose?: () => void;
}

export default function PreferenceCenter({ userEmail, onClose }: PreferenceCenterProps) {
    const [preferences, setPreferences] = useState<SubscriberPreferences | null>(null);
    const [subscriberId, setSubscriberId] = useState<string | null>(null);
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        const sub = getSubscriberByEmail(userEmail);
        if (sub) {
            setPreferences({ ...sub.preferences });
            setSubscriberId(sub.id);
        }
    }, [userEmail]);

    const handleSave = async () => {
        if (!subscriberId || !preferences) return;
        setSaving(true);
        await new Promise(r => setTimeout(r, 600));
        updateSubscriberPreferences(subscriberId, preferences);
        setSaving(false);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    if (!preferences) {
        return (
            <div className="p-6 text-center text-white/50 text-sm">
                No subscription found for this email.
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-6"
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Settings className="w-5 h-5 text-gold" />
                    <h3 className="text-lg font-semibold text-white">Email Preferences</h3>
                </div>
                {onClose && (
                    <button onClick={onClose} className="text-white/40 hover:text-white text-sm">Close</button>
                )}
            </div>

            {/* Update Frequency */}
            <div>
                <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-gold/70" />
                    <h4 className="text-sm font-semibold text-white">Update Frequency</h4>
                </div>
                <div className="space-y-2">
                    {FREQUENCY_OPTIONS.map(opt => (
                        <label
                            key={opt.value}
                            className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors ${preferences.frequency === opt.value
                                    ? 'bg-gold/15 border border-gold/30'
                                    : 'bg-white/5 border border-white/10 hover:border-white/20'
                                }`}
                        >
                            <input
                                type="radio"
                                name="frequency"
                                checked={preferences.frequency === opt.value}
                                onChange={() => setPreferences({ ...preferences, frequency: opt.value })}
                                className="mt-0.5 accent-[#d4a843]"
                            />
                            <div>
                                <p className="text-sm font-medium text-white">{opt.label}</p>
                                <p className="text-xs text-white/50">{opt.description}</p>
                            </div>
                        </label>
                    ))}
                </div>
            </div>

            {/* Topics */}
            <div>
                <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-4 h-4 text-gold/70" />
                    <h4 className="text-sm font-semibold text-white">Topic Preferences</h4>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    {TOPIC_OPTIONS.map(opt => (
                        <label
                            key={opt.id}
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-colors text-xs ${preferences.topics.includes(opt.id)
                                    ? 'bg-gold/15 text-gold border border-gold/30'
                                    : 'bg-white/5 text-white/60 border border-white/10 hover:border-white/20'
                                }`}
                        >
                            <input
                                type="checkbox"
                                checked={preferences.topics.includes(opt.id)}
                                onChange={() => {
                                    setPreferences({
                                        ...preferences,
                                        topics: preferences.topics.includes(opt.id)
                                            ? preferences.topics.filter(t => t !== opt.id)
                                            : [...preferences.topics, opt.id],
                                    });
                                }}
                                className="sr-only"
                            />
                            {opt.label}
                        </label>
                    ))}
                </div>
            </div>

            {/* Email Notifications */}
            <div>
                <div className="flex items-center gap-2 mb-3">
                    <Bell className="w-4 h-4 text-gold/70" />
                    <h4 className="text-sm font-semibold text-white">Email Notifications</h4>
                </div>
                <div className="space-y-2">
                    {[
                        { key: 'newTopicsInCategories' as const, label: 'New topics in my categories' },
                        { key: 'repliesToPosts' as const, label: 'Replies to my posts' },
                        { key: 'trendingDiscussions' as const, label: 'Trending discussions' },
                        { key: 'eventReminders' as const, label: 'Event reminders (24-48h before)' },
                        { key: 'weeklyDigest' as const, label: 'Weekly community digest' },
                        { key: 'monthlyNewsletter' as const, label: 'Monthly Pivotal Voice newsletter' },
                    ].map(opt => (
                        <label key={opt.key} className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 border border-white/10 cursor-pointer hover:border-white/20 transition-colors">
                            <span className="text-xs text-white/70">{opt.label}</span>
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    checked={preferences.emailNotifications[opt.key]}
                                    onChange={() => {
                                        setPreferences({
                                            ...preferences,
                                            emailNotifications: {
                                                ...preferences.emailNotifications,
                                                [opt.key]: !preferences.emailNotifications[opt.key],
                                            },
                                        });
                                    }}
                                    className="sr-only peer"
                                />
                                <div className="w-9 h-5 rounded-full bg-white/10 peer-checked:bg-gold/50 transition-colors" />
                                <div className="absolute left-0.5 top-0.5 w-4 h-4 rounded-full bg-white/50 peer-checked:bg-gold peer-checked:translate-x-4 transition-all" />
                            </div>
                        </label>
                    ))}
                </div>
            </div>

            {/* Save */}
            <button
                onClick={handleSave}
                disabled={saving}
                className="w-full py-2.5 rounded-lg bg-gold text-black font-semibold text-sm hover:bg-gold/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
                {saving ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Saving...</>
                ) : saved ? (
                    <><CheckCircle className="w-4 h-4" /> Saved!</>
                ) : (
                    <><Save className="w-4 h-4" /> Save Preferences</>
                )}
            </button>
        </motion.div>
    );
}
