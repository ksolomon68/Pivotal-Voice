'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Search, User, LayoutDashboard, LogIn, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/lib/forum/AuthContext';
import dynamic from 'next/dynamic';

const AuthModal = dynamic(() => import('@/components/forum/AuthModal'), { ssr: false });

const navigation = [
    { name: 'Calendar', href: '/calendar' },
    { name: 'Debates', href: '/debates' },
    { name: 'Podcast', href: '/podcast' },
    { name: 'Services', href: '/services' },
    { name: 'Candidates', href: '/candidates' },
    { name: 'Forum', href: '/forum' },
    { name: 'Resources', href: '/resources' },
];

export default function Header() {
    const { user, logout } = useAuth();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [authTab, setAuthTab] = useState<'login' | 'register'>('login');
    const pathname = usePathname();

    const openAuth = (tab: 'login' | 'register') => {
        setAuthTab(tab);
        setShowAuthModal(true);
        setMobileMenuOpen(false);
    };

    const handleScroll = useCallback(() => {
        const scrollTop = window.scrollY;
        setScrolled(scrollTop > 20);

        // Scroll progress
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight > 0) {
            setScrollProgress((scrollTop / docHeight) * 100);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    return (
        <>
            {/* Scroll Progress Bar */}
            <div
                className="scroll-progress"
                style={{ width: `${scrollProgress}%` }}
                aria-hidden="true"
            />

            <header
                className={`sticky top-0 z-50 navbar-glass transition-all duration-500 ${scrolled ? 'scrolled' : ''
                    }`}
            >
                {/* Gold accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                <nav className="container-custom">
                    <div className="flex items-center justify-between h-16 sm:h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <motion.div
                                animate={{ y: [0, -4, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                className="relative w-12 h-12"
                            >
                                <Image
                                    src="/images/logo.png"
                                    alt="Pivotal Voice"
                                    fill
                                    className="object-contain rounded-full"
                                    priority
                                />
                            </motion.div>
                            <div className="flex flex-col">
                                <span className="font-display text-sm sm:text-lg font-bold text-white leading-tight tracking-tight">
                                    Pivotal Voice
                                </span>
                                <span className="text-[9px] sm:text-[10px] text-gold/70 font-medium tracking-wider uppercase">
                                    Ellis County
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`nav-link px-3 py-2 text-sm ${pathname === item.href ? 'active' : ''
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* Right side actions */}
                        <div className="flex items-center gap-3">
                            <button
                                aria-label="Search"
                                className="p-2.5 text-cream/60 hover:text-gold rounded-full hover:bg-gold/10 transition-all duration-300"
                            >
                                <Search className="w-5 h-5" />
                            </button>

                            <Link
                                href="/services#book"
                                className="hidden md:inline-flex btn-primary text-sm !px-5 !py-2.5"
                            >
                                Book Consultation
                            </Link>

                            <Link
                                href={user?.isAdmin ? '/admin' : '/admin/login'}
                                aria-label={user?.isAdmin ? 'Admin dashboard' : 'Admin login'}
                                className="hidden md:flex p-2.5 text-cream/60 hover:text-gold rounded-full hover:bg-gold/10 transition-all duration-300"
                            >
                                {user?.isAdmin ? <LayoutDashboard className="w-5 h-5" /> : <User className="w-5 h-5" />}
                            </Link>

                            {/* Mobile menu button */}
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="lg:hidden p-2.5 text-cream/60 hover:text-gold rounded-full hover:bg-gold/10 transition-all duration-300"
                                aria-label="Toggle menu"
                                aria-expanded={mobileMenuOpen}
                            >
                                <AnimatePresence mode="wait">
                                    {mobileMenuOpen ? (
                                        <motion.div
                                            key="close"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <X className="w-6 h-6" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="menu"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Menu className="w-6 h-6" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Mobile menu — Full screen overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-navy-dark/98 backdrop-blur-xl z-40 flex flex-col overflow-hidden"
                        >
                            <div className="container-custom py-6 flex flex-col flex-1 overflow-hidden">
                                {/* Logo in mobile menu */}
                                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-gold/10 flex-shrink-0">
                                    <div className="relative w-10 h-10">
                                        <Image
                                            src="/images/logo.png"
                                            alt="Pivotal Voice"
                                            fill
                                            className="object-contain rounded-full"
                                        />
                                    </div>
                                    <span className="font-display text-lg font-bold text-white">
                                        Pivotal Voice
                                    </span>
                                </div>

                                {/* Navigation Links — scrollable if needed */}
                                <nav className="space-y-1 flex-1 overflow-y-auto">
                                    {navigation.map((item, index) => (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                duration: 0.3,
                                                delay: index * 0.06,
                                            }}
                                        >
                                            <Link
                                                href={item.href}
                                                className={`block py-3 px-5 text-lg font-display font-medium rounded-xl transition-all duration-300 ${pathname === item.href
                                                    ? 'text-gold bg-gold/10'
                                                    : 'text-cream hover:text-gold hover:bg-gold/5'
                                                    }`}
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>

                                {/* Bottom CTAs */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.5 }}
                                    className="pt-4 border-t border-gold/10 space-y-3 flex-shrink-0"
                                >
                                    {/* Auth row */}
                                    {user ? (
                                        <div className="flex items-center justify-between px-2 py-2 bg-navy-dark/60 border border-gold/15 rounded-xl">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-gold">{user.displayName[0]}</span>
                                                </div>
                                                <span className="text-cream/80 text-sm font-medium truncate max-w-[140px]">{user.displayName}</span>
                                            </div>
                                            <button
                                                onClick={() => { logout(); setMobileMenuOpen(false); }}
                                                className="flex items-center gap-1 text-sm text-cream/50 hover:text-red-400 transition-colors ml-2"
                                            >
                                                <LogOut className="w-4 h-4" />
                                                Sign Out
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => openAuth('login')}
                                                className="flex-1 btn-secondary text-sm flex items-center justify-center gap-1.5"
                                            >
                                                <LogIn className="w-4 h-4" /> Sign In
                                            </button>
                                            <button
                                                onClick={() => openAuth('register')}
                                                className="flex-1 btn-primary text-sm flex items-center justify-center gap-1.5"
                                            >
                                                <User className="w-4 h-4" /> Join
                                            </button>
                                        </div>
                                    )}
                                    {user?.isAdmin && (
                                        <Link
                                            href="/admin"
                                            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gold/10 border border-gold/30 text-gold text-sm font-semibold hover:bg-gold/20 transition-colors"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <LayoutDashboard className="w-4 h-4" />
                                            Admin Dashboard
                                        </Link>
                                    )}
                                    <Link
                                        href="/services#book"
                                        className="block w-full text-center btn-primary"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Book Consultation
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            <AuthModal
                isOpen={showAuthModal}
                onClose={() => setShowAuthModal(false)}
                initialTab={authTab}
            />
        </>
    );
}
