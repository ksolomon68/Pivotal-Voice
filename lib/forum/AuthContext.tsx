'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/lib/supabase/client';
import { ForumUser } from '@/lib/types/forum';

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
        const syncSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session?.user) {
                const { data: profile } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('id', session.user.id)
                    .single();

                if (profile) {
                    setState({
                        user: {
                            id: profile.id,
                            email: profile.email,
                            displayName: profile.display_name,
                            joinDate: profile.join_date,
                            city: profile.city,
                            isBusinessOwner: profile.is_business_owner,
                            yearsInCounty: profile.years_in_county,
                            bio: profile.bio,
                            reputation: profile.reputation,
                            topicCount: profile.topic_count,
                            replyCount: profile.reply_count,
                            followedTopics: profile.followed_topics || [],
                            notifications: profile.notifications || [],
                        },
                        isLoading: false
                    });
                    return;
                }
            }
            setState({ user: null, isLoading: false });
        };

        syncSession();

        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
            if (event === 'SIGNED_IN' && session) {
                const { data: profile } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('id', session.user.id)
                    .single();

                if (profile) {
                    setState({
                        user: {
                            id: profile.id,
                            email: profile.email,
                            displayName: profile.display_name,
                            joinDate: profile.join_date,
                            city: profile.city,
                            isBusinessOwner: profile.is_business_owner,
                            yearsInCounty: profile.years_in_county,
                            bio: profile.bio,
                            reputation: profile.reputation,
                            topicCount: profile.topic_count,
                            replyCount: profile.reply_count,
                            followedTopics: profile.followed_topics || [],
                            notifications: profile.notifications || [],
                        },
                        isLoading: false
                    });
                }
            } else if (event === 'SIGNED_OUT') {
                setState({ user: null, isLoading: false });
            }
        });

        return () => subscription.unsubscribe();
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
            console.error('Profile creation error:', profileError);
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
