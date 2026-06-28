'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle, Loader2, ChevronDown, ChevronUp } from 'lucide-react';
import { addSubscriber } from '@/lib/crm/newsletter-service';
import type { OptInMethod } from '@/lib/types/newsletter';

const INTEREST_OPTIONS = [
    { id: 'taxes', label: 'Property Taxes' },
    { id: 'infrastructure', label: 'Infrastructure & Roads' },
    { id: 'education', label: 'Education & Schools' },
    { id: 'safety', label: 'Public Safety & EMS' },
    { id: 'growth', label: 'Growth & Development' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'agriculture', label: 'Agriculture & Farming' },
    { id: 'environment', label: 'Environment & Water' },
    { id: 'economic', label: 'Economic Development' },
    { id: 'quality', label: 'Quality of Life' },
];

interface NewsletterSignupProps {
    variant?: 'sidebar' | 'homepage' | 'inline';
    optInMethod?: OptInMethod;
    forumUserId?: string;
    onSuccess?: () => void;
}

export default function NewsletterSignup({ variant = 'sidebar', optInMethod = 'forum_sidebar', forumUserId, onSuccess }: NewsletterSignupProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [interests, setInterests] = useState<string[]>([]);
    const [showInterests, setShowInterests] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const toggleInterest = (id: string) => {
        setInterests(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!name.trim() || !email.trim() || !zipCode.trim()) {
            setError('Please fill in all required fields.');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        if (!/^\d{5}$/.test(zipCode)) {
            setError('Please enter a valid 5-digit zip code.');
            return;
        }

        setIsSubmitting(true);

        const result = await addSubscriber({
            email, name, zipCode,
            interests: interests.length > 0 ? interests : ['general'],
            optInMethod, forumUserId,
        });

        if ('error' in result) {
            setError(result.error);
            setIsSubmitting(false);
            return;
        }

        setSuccess(true);
        setIsSubmitting(false);
        onSuccess?.();
    };

    if (success) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-center ${variant === 'homepage' ? 'max-w-md mx-auto' : ''}`}
            >
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-green-400 font-semibold text-sm">You&apos;re subscribed!</p>
                <p className="text-white/60 text-xs mt-1">Check your inbox for a confirmation email.</p>
            </motion.div>
        );
    }

    const isHomepage = variant === 'homepage';

    return (
        <div className={`rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm ${isHomepage ? 'p-6 max-w-lg mx-auto' : 'p-4'}`}>
            <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-gold" />
                </div>
                <div>
                    <h4 className={`font-semibold text-white ${isHomepage ? 'text-lg' : 'text-sm'}`}>
                        Stay Informed
                    </h4>
                    <p className="text-white/50 text-xs">Get Ellis County updates in your inbox</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-2">
                <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-gold/50 transition-colors"
                />
                <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-gold/50 transition-colors"
                />
                <input
                    type="text"
                    placeholder="Zip code"
                    value={zipCode}
                    onChange={e => setZipCode(e.target.value)}
                    maxLength={5}
                    className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-gold/50 transition-colors"
                />

                {/* Collapsible interest selector */}
                <button
                    type="button"
                    onClick={() => setShowInterests(!showInterests)}
                    className="flex items-center gap-1 text-xs text-gold/80 hover:text-gold transition-colors"
                >
                    {showInterests ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    Select your interests {interests.length > 0 && `(${interests.length})`}
                </button>

                <AnimatePresence>
                    {showInterests && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="grid grid-cols-2 gap-1.5 pt-1">
                                {INTEREST_OPTIONS.map(opt => (
                                    <label
                                        key={opt.id}
                                        className={`flex items-center gap-1.5 px-2 py-1 rounded-md text-xs cursor-pointer transition-colors ${interests.includes(opt.id)
                                            ? 'bg-gold/20 text-gold border border-gold/30'
                                            : 'bg-white/5 text-white/60 border border-white/10 hover:border-white/20'
                                            }`}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={interests.includes(opt.id)}
                                            onChange={() => toggleInterest(opt.id)}
                                            className="sr-only"
                                        />
                                        {opt.label}
                                    </label>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {error && (
                    <p className="text-red-400 text-xs">{error}</p>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2 rounded-lg bg-gold text-black font-semibold text-sm hover:bg-gold/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                    {isSubmitting ? (
                        <><Loader2 className="w-4 h-4 animate-spin" /> Subscribing...</>
                    ) : (
                        'Subscribe to Updates'
                    )}
                </button>

                <p className="text-white/30 text-[10px] text-center leading-tight">
                    By subscribing, you agree to receive email updates. Unsubscribe anytime with one click. We respect your privacy and comply with CAN-SPAM regulations.
                </p>
            </form>
        </div>
    );
}
