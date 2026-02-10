'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ForumUser } from '@/lib/types/forum';
import { getForumUsers, addForumUser, updateForumUser } from './forum-service';

const SESSION_KEY = 'pv_forum_session';

interface AuthState {
    user: ForumUser | null;
    isLoading: boolean;
}

interface AuthContextValue extends AuthState {
    login: (email: string, password: string) => { success: boolean; error?: string };
    register: (data: RegisterData) => { success: boolean; error?: string };
    logout: () => void;
    updateProfile: (updates: Partial<ForumUser>) => void;
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

// Simple hash function for client-side password hashing (NOT production-grade, but functional for localStorage demo)
function simpleHash(str: string): string {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32-bit int
    }
    return 'hash_' + Math.abs(hash).toString(36) + '_' + str.length;
}

export function AuthProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState<AuthState>({ user: null, isLoading: true });

    // Restore session on mount
    useEffect(() => {
        const sessionId = localStorage.getItem(SESSION_KEY);
        if (sessionId) {
            const users = getForumUsers();
            const user = users.find(u => u.id === sessionId);
            if (user) {
                setState({ user, isLoading: false });
                return;
            }
        }
        setState({ user: null, isLoading: false });
    }, []);

    const login = (email: string, password: string): { success: boolean; error?: string } => {
        const users = getForumUsers();
        const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());

        if (!user) {
            return { success: false, error: 'No account found with that email address.' };
        }

        const hash = simpleHash(password);
        if (user.passwordHash && user.passwordHash !== hash) {
            return { success: false, error: 'Incorrect password.' };
        }

        // Seed users have empty passwordHash, allow login with any password
        if (!user.passwordHash) {
            // Set the password on first login for seed users
            updateForumUser(user.id, { passwordHash: hash });
        }

        localStorage.setItem(SESSION_KEY, user.id);
        setState({ user, isLoading: false });
        return { success: true };
    };

    const register = (data: RegisterData): { success: boolean; error?: string } => {
        if (!data.email || !data.displayName || !data.password) {
            return { success: false, error: 'Email, display name, and password are required.' };
        }

        if (data.password.length < 6) {
            return { success: false, error: 'Password must be at least 6 characters.' };
        }

        const users = getForumUsers();
        if (users.find(u => u.email.toLowerCase() === data.email.toLowerCase())) {
            return { success: false, error: 'An account with this email already exists.' };
        }

        if (users.find(u => u.displayName.toLowerCase() === data.displayName.toLowerCase())) {
            return { success: false, error: 'This display name is already taken.' };
        }

        const newUser: ForumUser = {
            id: `user-${Date.now()}`,
            email: data.email,
            displayName: data.displayName,
            passwordHash: simpleHash(data.password),
            joinDate: new Date().toISOString(),
            city: data.city,
            isBusinessOwner: data.isBusinessOwner,
            yearsInCounty: data.yearsInCounty,
            bio: data.bio,
            reputation: 0,
            topicCount: 0,
            replyCount: 0,
            followedTopics: [],
            notifications: [],
        };

        addForumUser(newUser);
        localStorage.setItem(SESSION_KEY, newUser.id);
        setState({ user: newUser, isLoading: false });
        return { success: true };
    };

    const logout = () => {
        localStorage.removeItem(SESSION_KEY);
        setState({ user: null, isLoading: false });
    };

    const updateProfile = (updates: Partial<ForumUser>) => {
        if (!state.user) return;
        const updated = updateForumUser(state.user.id, updates);
        if (updated) {
            setState({ user: updated, isLoading: false });
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
