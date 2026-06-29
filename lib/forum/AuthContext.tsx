'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/lib/supabase/client';
import { ForumUser, ForumNotification } from '@/lib/types/forum';

interface AuthState {
    user: ForumUser | null;
    isLoading: boolean;
}

interface AuthContextValue extends AuthState {
    login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
    register: (data: RegisterData) => Promise<{ success: boolean; error?: string }>;
    logout: () => Promise<void>;
    updateProfile: (updates: Partial<ForumUser>) => Promise<void>;
}

interface RegisterData {
    email: string;
    displayName: string;
    password: string;
    city?: string;
    isBusinessOwner?: boolean;
    yearsInCounty?: number;
    bio?: string;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState<AuthState>({ user: null, isLoading: true });

    // Force profile sync on mount
    useEffect(() => {
        // mounted flag prevents calling setState on an unmounted component,
        // which is the primary cause of the AbortError "signal is aborted without reason".
        let mounted = true;
        let settled = false;

        // Fallback: if auth never resolves (e.g. Supabase unreachable), unblock the UI after 8s
        const timeout = setTimeout(() => {
            if (!settled && mounted) {
                console.warn('AuthContext: session check timed out, proceeding as logged out');
                settled = true;
                setState({ user: null, isLoading: false });
            }
        }, 8000);

        const buildUser = (profile: Record<string, unknown>) => ({
            id: profile.id as string,
            email: profile.email as string,
            displayName: profile.display_name as string,
            joinDate: profile.join_date as string,
            city: profile.city as string | undefined,
            isBusinessOwner: profile.is_business_owner as boolean,
            yearsInCounty: profile.years_in_county as number | undefined,
            bio: profile.bio as string | undefined,
            reputation: profile.reputation as number,
            topicCount: profile.topic_count as number,
            replyCount: profile.reply_count as number,
            isAdmin: profile.is_admin as boolean,
            isModerator: profile.is_moderator as boolean,
            followedTopics: (profile.followed_topics as string[]) || [],
            notifications: (profile.notifications as ForumNotification[]) || [],
        });

        const syncSession = async () => {
            try {
                const { data: { session }, error } = await supabase.auth.getSession();
                if (error) {
                    // Clear stale/invalid refresh tokens from client storage
                    await supabase.auth.signOut();
                    throw error;
                }
                if (!mounted) return; // component unmounted while awaiting — bail out cleanly

                if (session?.user) {
                    const { data: profile } = await supabase
                        .from('profiles')
                        .select('*')
                        .eq('id', session.user.id)
                        .single();

                    if (!mounted) return; // unmounted while awaiting profile fetch

                    if (profile) {
                        settled = true;
                        clearTimeout(timeout);
                        setState({ user: buildUser(profile as Record<string, unknown>), isLoading: false });
                        return;
                    }
                }
            } catch (err) {
                if (!mounted) return;
                // AbortError is expected on component unmount — don't log it as an error
                if (err instanceof Error && (err.name === 'AbortError' || err.message?.includes('aborted'))) {
                    return;
                }
                console.error('AuthContext syncSession error:', err);
            }
            if (!mounted) return;
            settled = true;
            clearTimeout(timeout);
            setState({ user: null, isLoading: false });
        };

        syncSession();

        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
            try {
                if (event === 'SIGNED_IN' && session) {
                    const { data: profile } = await supabase
                        .from('profiles')
                        .select('*')
                        .eq('id', session.user.id)
                        .single();

                    if (!mounted) return;

                    if (profile) {
                        setState({ user: buildUser(profile as Record<string, unknown>), isLoading: false });
                    } else {
                        setState({ user: null, isLoading: false });
                    }
                } else if (event === 'SIGNED_OUT') {
                    if (!mounted) return;
                    setState({ user: null, isLoading: false });
                }
            } catch (err) {
                if (!mounted) return;
                if (err instanceof Error && (err.name === 'AbortError' || err.message?.includes('aborted'))) {
                    return;
                }
                console.error('AuthContext onAuthStateChange error:', err);
                setState({ user: null, isLoading: false });
            }
        });

        return () => {
            mounted = false;
            clearTimeout(timeout);
            subscription.unsubscribe();
        };
    }, []);

    const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) return { success: false, error: error.message };
        return { success: true };
    };

    const register = async (data: RegisterData): Promise<{ success: boolean; error?: string }> => {
        // 1. Sign up user via Supabase Auth
        const { data: authData, error: authError } = await supabase.auth.signUp({
            email: data.email,
            password: data.password,
            options: {
                data: {
                    display_name: data.displayName,
                }
            }
        });

        if (authError) return { success: false, error: authError.message };
        if (!authData.user) return { success: false, error: 'User creation failed.' };

        // 2. Create profile entry (Manual sync as fallback for missing DB triggers)
        const { error: profileError } = await supabase.from('profiles').insert([{
            id: authData.user.id,
            email: data.email,
            display_name: data.displayName,
            city: data.city,
            is_business_owner: data.isBusinessOwner,
            years_in_county: data.yearsInCounty,
            bio: data.bio
        }]);

        if (profileError) {
            console.error('Profile creation error:', {
                message: profileError.message,
                details: profileError.details,
                hint: profileError.hint,
                code: profileError.code
            });
            // We don't fail registration if profile insert fails here, 
            // but ideally we'd have a DB trigger.
        }

        return { success: true };
    };

    const logout = async () => {
        await supabase.auth.signOut();
    };

    const updateProfile = async (updates: Partial<ForumUser>) => {
        if (!state.user) return;

        // Map updates to snake_case
        const mappedUpdates: any = {};
        if (updates.displayName) mappedUpdates.display_name = updates.displayName;
        if (updates.city !== undefined) mappedUpdates.city = updates.city;
        if (updates.bio !== undefined) mappedUpdates.bio = updates.bio;
        if (updates.isBusinessOwner !== undefined) mappedUpdates.is_business_owner = updates.isBusinessOwner;
        if (updates.yearsInCounty !== undefined) mappedUpdates.years_in_county = updates.yearsInCounty;
        if (updates.followedTopics) mappedUpdates.followed_topics = updates.followedTopics;

        const { data, error } = await supabase
            .from('profiles')
            .update(mappedUpdates)
            .eq('id', state.user.id)
            .select()
            .single();

        if (data && !error) {
            setState(prev => ({
                ...prev,
                user: {
                    ...prev.user!,
                    ...updates
                }
            }));
        }
    };

    return (
        <AuthContext.Provider value={{ ...state, login, register, logout, updateProfile }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
