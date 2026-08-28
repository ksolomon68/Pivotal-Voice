'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Clock, Send, Loader2, CheckCircle, AlertCircle, Phone, Podcast, MessageSquare, ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useAuth } from '@/lib/forum/AuthContext';

const SUBJECT_OPTIONS = [
    'Nominate someone to be on the show',
    'General Inquiry',
    'Interview Request / Press Inquiry',
    'Feedback & Suggestions',
    'Advertising & Sponsorship',
    'Technical Support',
] as const;

export default function ContactPage() {
    const { user } = useAuth();
    
    // Form states
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    
    // Nomination states
    const [nomineeName, setNomineeName] = useState('');
    const [nomineeBio, setNomineeBio] = useState('');
    const [nomineeContact, setNomineeContact] = useState('');
    
    // Status states
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    // Pre-fill user data if authenticated
    useEffect(() => {
        if (user) {
            setName(user.displayName || '');
            setEmail(user.email || '');
        }
    }, [user]);

    const isNomination = subject === 'Nominate someone to be on the show';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Basic validation
        if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
            setError('Please fill in all required fields.');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        // Nomination validation
        if (isNomination) {
            if (!nomineeName.trim() || !nomineeBio.trim()) {
                setError('Please provide the nominee\'s name and context.');
                return;
            }
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    subject,
                    message,
                    ...(isNomination && {
                        nomineeName,
                        nomineeBio,
                        nomineeContact,
                    }),
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong. Please try again.');
            }

            setSuccess(true);
            // Reset state
            setPhone('');
            setSubject('');
            setMessage('');
            setNomineeName('');
            setNomineeBio('');
            setNomineeContact('');
        } catch (err: any) {
            console.error('Contact submission error:', err);
            setError(err.message || 'Failed to send message. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Header />
            <main className="min-h-screen bg-navy-dark text-cream relative" id="main-content">
                {/* Background glow effects */}
                <div className="absolute top-0 inset-x-0 h-96 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.05)_0%,_transparent_60%)] pointer-events-none" />
                <div className="absolute bottom-0 inset-x-0 h-96 bg-[radial-gradient(ellipse_at_bottom,_rgba(29,74,124,0.05)_0%,_transparent_60%)] pointer-events-none" />

                <div className="container-custom py-16 sm:py-24 relative z-10">
                    {/* Header Section */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-xs sm:text-sm font-semibold tracking-widest text-gold uppercase mb-3 block">
                                Get In Touch
                            </span>
                            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
                                Connect With Pivotal Voice
                            </h1>
                            <p className="text-lg sm:text-xl text-cream/70 leading-relaxed">
                                Your voice is pivotal to the community. Have a question, story tip, or a guest nomination for the show? We are listening.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
                        {/* Info Column (Left) */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-5 space-y-8"
                        >
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm space-y-6">
                                <h3 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <MessageSquare className="w-5 h-5 text-gold" /> Contact Info
                                </h3>
                                <p className="text-sm text-cream/60 leading-relaxed">
                                    Pivotal Voice is Ellis County&apos;s platform for civic engagement. We read every message and aim to respond within 24 hours.
                                </p>

                                <div className="space-y-4 pt-4">
                                    {/* Email */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/25 flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-5 h-5 text-gold" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-semibold text-gold uppercase tracking-wider">Email Address</h4>
                                            <a href="mailto:info@pivotalvoice.org" className="text-white hover:text-gold transition-colors text-sm break-all font-medium">
                                                info@pivotalvoice.org
                                            </a>
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/25 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-5 h-5 text-gold" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-semibold text-gold uppercase tracking-wider">Location</h4>
                                            <span className="text-white text-sm font-medium">
                                                Ellis County, Texas
                                            </span>
                                        </div>
                                    </div>

                                    {/* Active Hours */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/25 flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-5 h-5 text-gold" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-semibold text-gold uppercase tracking-wider">Office Hours</h4>
                                            <span className="text-white text-sm font-medium">
                                                Mon – Fri, 9:00 AM – 5:00 PM CST
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Podcast Promotion Card */}
                            <div className="bg-gradient-to-br from-gold/10 to-navy border border-gold/20 rounded-2xl p-8 relative overflow-hidden group">
                                <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-500">
                                    <Podcast className="w-40 h-40 text-gold" />
                                </div>
                                <h3 className="font-display text-lg font-bold text-white mb-2 flex items-center gap-2">
                                    <Podcast className="w-5 h-5 text-gold" /> Have a Guest Nomination?
                                </h3>
                                <p className="text-xs text-cream/70 leading-relaxed mb-4">
                                    We&apos;re always looking for inspiring candidates, local business owners, community advocates, and leaders to share their stories on the Pivotal Voice Podcast.
                                </p>
                                <div className="text-xs font-medium text-gold flex items-center gap-1.5">
                                    Select the nomination subject in the form to begin <ArrowRight className="w-3.5 h-3.5" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Form Column (Right) */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="lg:col-span-7"
                        >
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
                                <AnimatePresence mode="wait">
                                    {!success ? (
                                        <motion.div
                                            key="contact-form"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <h3 className="font-display text-xl font-bold text-white mb-6">Send Us a Message</h3>
                                            
                                            <form onSubmit={handleSubmit} className="space-y-5">
                                                {/* Name & Email Group */}
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    <div>
                                                        <label htmlFor="name" className="block text-xs font-semibold text-cream/80 mb-2 uppercase tracking-wider">
                                                            Your Name <span className="text-gold">*</span>
                                                        </label>
                                                        <input
                                                            id="name"
                                                            type="text"
                                                            placeholder="John Doe"
                                                            required
                                                            value={name}
                                                            onChange={e => setName(e.target.value)}
                                                            className="w-full px-3 py-2.5 rounded-lg bg-white/10 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="email" className="block text-xs font-semibold text-cream/80 mb-2 uppercase tracking-wider">
                                                            Email Address <span className="text-gold">*</span>
                                                        </label>
                                                        <input
                                                            id="email"
                                                            type="email"
                                                            placeholder="john@example.com"
                                                            required
                                                            value={email}
                                                            onChange={e => setEmail(e.target.value)}
                                                            className="w-full px-3 py-2.5 rounded-lg bg-white/10 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Phone & Subject Group */}
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    <div>
                                                        <label htmlFor="phone" className="block text-xs font-semibold text-cream/80 mb-2 uppercase tracking-wider">
                                                            Phone Number <span className="text-white/20">(Optional)</span>
                                                        </label>
                                                        <input
                                                            id="phone"
                                                            type="tel"
                                                            placeholder="(555) 000-0000"
                                                            value={phone}
                                                            onChange={e => setPhone(e.target.value)}
                                                            className="w-full px-3 py-2.5 rounded-lg bg-white/10 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="subject" className="block text-xs font-semibold text-cream/80 mb-2 uppercase tracking-wider">
                                                            Subject <span className="text-gold">*</span>
                                                        </label>
                                                        <select
                                                            id="subject"
                                                            required
                                                            value={subject}
                                                            onChange={e => setSubject(e.target.value)}
                                                            className="w-full px-3 py-2.5 rounded-lg bg-[#0f1729] border border-white/10 text-sm focus:outline-none focus:border-gold/50 transition-colors appearance-none text-white cursor-pointer"
                                                            style={{ color: subject ? 'white' : 'rgba(255,255,255,0.4)' }}
                                                        >
                                                            <option value="" disabled className="text-white/45">Select a subject...</option>
                                                            {SUBJECT_OPTIONS.map(opt => (
                                                                <option key={opt} value={opt} className="text-white bg-[#0f1729]">{opt}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>

                                                {/* Conditional Nomination Fields */}
                                                <AnimatePresence>
                                                    {isNomination && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="overflow-hidden space-y-4 border-l-2 border-gold/40 pl-4 py-1"
                                                        >
                                                            <div>
                                                                <label htmlFor="nomineeName" className="block text-xs font-semibold text-gold mb-2 uppercase tracking-wider">
                                                                    Nominee&apos;s Name <span className="text-red-400">*</span>
                                                                </label>
                                                                <input
                                                                    id="nomineeName"
                                                                    type="text"
                                                                    placeholder="Who are you nominating?"
                                                                    required={isNomination}
                                                                    value={nomineeName}
                                                                    onChange={e => setNomineeName(e.target.value)}
                                                                    className="w-full px-3 py-2.5 rounded-lg bg-gold/5 border border-gold/20 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                                                                />
                                                            </div>
                                                            <div>
                                                                <label htmlFor="nomineeBio" className="block text-xs font-semibold text-gold mb-2 uppercase tracking-wider">
                                                                    Bio & Role Context <span className="text-red-400">*</span>
                                                                </label>
                                                                <textarea
                                                                    id="nomineeBio"
                                                                    placeholder="Tell us about their role, achievements, or why they would be a great guest."
                                                                    required={isNomination}
                                                                    rows={3}
                                                                    value={nomineeBio}
                                                                    onChange={e => setNomineeBio(e.target.value)}
                                                                    className="w-full px-3 py-2.5 rounded-lg bg-gold/5 border border-gold/20 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                                                                />
                                                            </div>
                                                            <div>
                                                                <label htmlFor="nomineeContact" className="block text-xs font-semibold text-gold mb-2 uppercase tracking-wider">
                                                                    Nominee Contact Info <span className="text-white/30">(Optional)</span>
                                                                </label>
                                                                <input
                                                                    id="nomineeContact"
                                                                    type="text"
                                                                    placeholder="Email address, phone number, or social media link"
                                                                    value={nomineeContact}
                                                                    onChange={e => setNomineeContact(e.target.value)}
                                                                    className="w-full px-3 py-2.5 rounded-lg bg-gold/5 border border-gold/20 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                                                                />
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>

                                                {/* Message Textarea */}
                                                <div>
                                                    <label htmlFor="message" className="block text-xs font-semibold text-cream/80 mb-2 uppercase tracking-wider">
                                                        {isNomination ? 'Additional Notes / Your Message' : 'Your Message'} <span className="text-gold">*</span>
                                                    </label>
                                                    <textarea
                                                        id="message"
                                                        placeholder={isNomination ? "Any additional context or message for the production team..." : "What's on your mind?..."}
                                                        required
                                                        rows={5}
                                                        value={message}
                                                        onChange={e => setMessage(e.target.value)}
                                                        className="w-full px-3 py-2.5 rounded-lg bg-white/10 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                                                    />
                                                </div>

                                                {/* Error banner */}
                                                {error && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        className="flex items-center gap-2 p-3 rounded-lg bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-medium"
                                                    >
                                                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                                        <span>{error}</span>
                                                    </motion.div>
                                                )}

                                                {/* Submit Button */}
                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="w-full py-3.5 rounded-lg bg-gold hover:bg-gold/90 text-navy-dark font-bold text-sm transition-all disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-gold/20"
                                                >
                                                    {isSubmitting ? (
                                                        <>
                                                            <Loader2 className="w-4 h-4 animate-spin" />
                                                            Sending Message...
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Send className="w-4 h-4" />
                                                            Send Message
                                                        </>
                                                    )}
                                                </button>
                                            </form>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="success-screen"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.4 }}
                                            className="text-center py-10"
                                        >
                                            <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <CheckCircle className="w-10 h-10 text-green-400 animate-pulse" />
                                            </div>
                                            <h3 className="font-display text-2xl font-bold text-white mb-3">Message Sent!</h3>
                                            <p className="text-cream/70 text-sm max-w-md mx-auto mb-8 leading-relaxed">
                                                Thank you for reaching out. We have received your message and will review it promptly. If a response is required, we will contact you shortly.
                                            </p>
                                            <button
                                                onClick={() => setSuccess(false)}
                                                className="px-6 py-2.5 rounded-lg border border-gold text-gold hover:bg-gold/10 font-semibold text-xs transition-colors cursor-pointer"
                                            >
                                                Send Another Message
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
