'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bell } from 'lucide-react';
import { isPopupDismissed, dismissPopup } from '@/lib/crm/newsletter-service';
import NewsletterSignup from './NewsletterSignup';

export default function NewsletterPopup() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        // Don't show if already dismissed or user is logged in (forum)
        if (isPopupDismissed()) return;
        try {
            const forumUser = localStorage.getItem('pv_forum_current_user');
            if (forumUser) return;
        } catch {
            return; // localStorage blocked — don't show popup
        }

        const timer = setTimeout(() => setShow(true), 30000); // 30 seconds
        return () => clearTimeout(timer);
    }, []);

    const handleDismiss = () => {
        dismissPopup();
        setShow(false);
    };

    return (
        <AnimatePresence>
            {show && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                        onClick={handleDismiss}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 16 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="fixed left-4 right-4 top-1/2 -translate-y-1/2 z-[101] sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:w-full sm:max-w-sm"
                    >
                        <div className="relative bg-gradient-to-b from-[#1a1a2e] to-[#0d0d1a] border border-white/10 rounded-2xl p-4 shadow-2xl shadow-gold/5 max-h-[85dvh] overflow-y-auto">
                            {/* Close button */}
                            <button
                                onClick={handleDismiss}
                                className="absolute top-3 right-3 p-1 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Header */}
                            <div className="text-center mb-3">
                                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center mx-auto mb-2 border border-gold/20">
                                    <Bell className="w-5 h-5 text-gold" />
                                </div>
                                <h3 className="text-lg font-bold text-white leading-snug">
                                    Stay Connected with Ellis County
                                </h3>
                                <p className="text-white/50 text-xs mt-1">
                                    Weekly updates on local meetings, decisions, and community discussions.
                                </p>
                            </div>

                            {/* Signup form */}
                            <NewsletterSignup
                                variant="inline"
                                optInMethod="popup"
                                onSuccess={() => setTimeout(handleDismiss, 2000)}
                            />

                            {/* Skip link */}
                            <button
                                onClick={handleDismiss}
                                className="block w-full text-center text-white/30 text-xs mt-3 hover:text-white/50 transition-colors"
                            >
                                No thanks, maybe later
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
