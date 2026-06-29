import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

/**
 * Custom lock implementation that bypasses the Web Locks API.
 *
 * Root cause of "AbortError: signal is aborted without reason":
 * Supabase GoTrueClient uses navigator.locks.request() (Web Locks API) internally
 * to prevent concurrent auth state changes. When a component unmounts mid-login
 * (e.g. during navigation or React Strict Mode double-mount), the browser releases
 * the lock and aborts the in-flight auth fetch with this error.
 *
 * The no-op lock below executes the function immediately without acquiring a real
 * browser lock, which is safe for a standard single-tab web application.
 */
const noopLock = async <R>(
    _name: string,
    _acquireTimeout: number,
    fn: () => Promise<R>
): Promise<R> => fn();

const clientOptions = {
    auth: {
        persistSession: true,
        detectSessionInUrl: false,
        lock: noopLock,
    },
};

// Create a dummy client if credentials are missing to prevent crashing during SSR
export const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey, clientOptions)
    : createClient('https://placeholder.supabase.co', 'placeholder', clientOptions);

if (!supabaseUrl || !supabaseAnonKey) {
    if (typeof window !== 'undefined') {
        console.warn('Supabase credentials missing. Data persistence will be unavailable.');
    } else {
        console.error('SERVER SIDE: Supabase credentials missing. Please check your .env.local file.');
    }
}
