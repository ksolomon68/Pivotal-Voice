'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, MapPin, Building, Clock, Newspaper } from 'lucide-react';
import { useAuth } from '@/lib/forum/AuthContext';
import { addSubscriber } from '@/lib/crm/newsletter-service';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialTab?: 'login' | 'register';
}

export default function AuthModal({ isOpen, onClose, initialTab = 'login' }: AuthModalProps) {
    const { login, register } = useAuth();
    const [tab, setTab] = useState<'login' | 'register'>(initialTab);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Login fields
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    // Register fields
    const [regEmail, setRegEmail] = useState('');
    const [regDisplayName, setRegDisplayName] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [regConfirm, setRegConfirm] = useState('');
    const [regCity, setRegCity] = useState('');
    const [regBusiness, setRegBusiness] = useState(false);
    const [regYears, setRegYears] = useState('');
    const [regBio, setRegBio] = useState('');
    const [regNewsletter, setRegNewsletter] = useState(true);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        const result = await login(loginEmail, loginPassword);
        if (result.success) {
            onClose();
        } else {
            setError(result.error || 'Login failed');
        }
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (regPassword !== regConfirm) {
            setError('Passwords do not match.');
            return;
        }

        const result = await register({
            email: regEmail,
            displayName: regDisplayName,
            password: regPassword,
            city: regCity || undefined,
            isBusinessOwner: regBusiness || undefined,
            yearsInCounty: regYears ? parseInt(regYears) : undefined,
            bio: regBio || undefined,
        });

        if (result.success) {
            // Subscribe to newsletter if opted in
            if (regNewsletter && regEmail) {
                await addSubscriber({
                    email: regEmail,
                    name: regDisplayName,
                    zipCode: '',
                    interests: [],
                    city: regCity || undefined,
                    optInMethod: 'registration',
                });
            }
            setSuccess('Account created! Welcome to the community.');
            setTimeout(() => onClose(), 1000);
        } else {
            setError(result.error || 'Registration failed');
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                    className="w-full max-w-md bg-navy-dark border border-gold/30 rounded-2xl overflow-hidden shadow-2xl"
                >
                    {/* Header */}
                    <div className="p-6 pb-4 flex items-center justify-between border-b border-gold/20">
                        <h2 className="font-display text-xl font-bold text-white">
                            {tab === 'login' ? 'Welcome Back' : 'Join the Community'}
                        </h2>
                        <button onClick={onClose} className="p-2 text-cream/60 hover:text-white transition-colors">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Tabs */}
                    <div className="flex border-b border-gold/20">
                        <button
                            onClick={() => { setTab('login'); setError(''); }}
                            className={`flex-1 py-3 text-sm font-semibold text-center transition-colors ${tab === 'login' ? 'text-gold border-b-2 border-gold' : 'text-cream/50 hover:text-cream'}`}
                        >
                            Sign In
                        </button>
                        <button
                            onClick={() => { setTab('register'); setError(''); }}
                            className={`flex-1 py-3 text-sm font-semibold text-center transition-colors ${tab === 'register' ? 'text-gold border-b-2 border-gold' : 'text-cream/50 hover:text-cream'}`}
                        >
                            Create Account
                        </button>
                    </div>

                    {/* Error / Success */}
                    {error && (
                        <div className="mx-6 mt-4 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                            {error}
                        </div>
                    )}
                    {success && (
                        <div className="mx-6 mt-4 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm">
                            {success}
                        </div>
                    )}

                    {/* Login Form */}
                    {tab === 'login' && (
                        <form onSubmit={handleLogin} className="p-6 space-y-4">
                            <div>
                                <label className="text-xs font-semibold text-cream/60 uppercase tracking-wider mb-1 block">Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
                                    <input
                                        type="email"
                                        value={loginEmail}
                                        onChange={(e) => setLoginEmail(e.target.value)}
                                        className="input pl-10 w-full"
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-cream/60 uppercase tracking-wider mb-1 block">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
                                    <input
                                        type="password"
                                        value={loginPassword}
                                        onChange={(e) => setLoginPassword(e.target.value)}
                                        className="input pl-10 w-full"
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>
                            </div>
                            <button type="submit" className="btn-primary w-full">Sign In</button>
                            <p className="text-cream/40 text-xs text-center">
                                Demo accounts: use any seed user email (e.g. marcus.w@email.com) with any password
                            </p>
                        </form>
                    )}

                    {/* Register Form */}
                    {tab === 'register' && (
                        <form onSubmit={handleRegister} className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
                            <div>
                                <label className="text-xs font-semibold text-cream/60 uppercase tracking-wider mb-1 block">Email *</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
                                    <input type="email" value={regEmail} onChange={(e) => setRegEmail(e.target.value)} className="input pl-10 w-full" placeholder="your@email.com" required />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-cream/60 uppercase tracking-wider mb-1 block">Display Name *</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
                                    <input type="text" value={regDisplayName} onChange={(e) => setRegDisplayName(e.target.value)} className="input pl-10 w-full" placeholder="How you'll appear in discussions" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="text-xs font-semibold text-cream/60 uppercase tracking-wider mb-1 block">Password *</label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
                                        <input type="password" value={regPassword} onChange={(e) => setRegPassword(e.target.value)} className="input pl-10 w-full" placeholder="Min 6 chars" required minLength={6} />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-cream/60 uppercase tracking-wider mb-1 block">Confirm *</label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
                                        <input type="password" value={regConfirm} onChange={(e) => setRegConfirm(e.target.value)} className="input pl-10 w-full" placeholder="Re-enter" required />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-2 border-t border-gold/15">
                                <p className="text-cream/40 text-xs mb-3">Optional — help the community know you</p>
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-cream/60 uppercase tracking-wider mb-1 block">City / Area</label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
                                    <select value={regCity} onChange={(e) => setRegCity(e.target.value)} className="input pl-10 w-full">
                                        <option value="">Select your area</option>
                                        <option value="Waxahachie">Waxahachie</option>
                                        <option value="Midlothian">Midlothian</option>
                                        <option value="Ennis">Ennis</option>
                                        <option value="Red Oak">Red Oak</option>
                                        <option value="Palmer">Palmer</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Milford">Milford</option>
                                        <option value="Ferris">Ferris</option>
                                        <option value="Maypearl">Maypearl</option>
                                        <option value="Bardwell">Bardwell</option>
                                        <option value="Rural Ellis County">Rural Ellis County</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" checked={regBusiness} onChange={(e) => setRegBusiness(e.target.checked)} className="rounded border-gold/30 text-gold focus:ring-gold" />
                                    <span className="text-cream/70 text-sm flex items-center gap-1"><Building className="w-4 h-4 text-gold/50" /> Business Owner</span>
                                </label>
                                <div>
                                    <div className="relative">
                                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
                                        <input type="number" value={regYears} onChange={(e) => setRegYears(e.target.value)} className="input pl-10 w-full" placeholder="Years in county" min="0" max="100" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-cream/60 uppercase tracking-wider mb-1 block">Bio</label>
                                <textarea
                                    value={regBio}
                                    onChange={(e) => setRegBio(e.target.value)}
                                    className="input w-full min-h-[60px]"
                                    placeholder="Tell us about yourself..."
                                    maxLength={200}
                                />
                            </div>
                            <div className="pt-2 border-t border-gold/15">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" checked={regNewsletter} onChange={(e) => setRegNewsletter(e.target.checked)} className="rounded border-gold/30 text-gold focus:ring-gold" />
                                    <span className="text-cream/70 text-sm flex items-center gap-1"><Newspaper className="w-4 h-4 text-gold/50" /> Subscribe to newsletter</span>
                                </label>
                            </div>
                            <button type="submit" className="btn-primary w-full">Create Account</button>
                        </form>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
