module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/lib/supabase/client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-ssr] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://cndaaiaygxhmuvqtgxhk.supabase.co") || '';
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNuZGFhaWF5Z3hobXV2cXRneGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2OTQyMzMsImV4cCI6MjA4NjI3MDIzM30.a0gw6nI_sBsR8GN0O14rwzNwXOa4XK6sg60mooySmwE") || '';
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
 */ const noopLock = async (_name, _acquireTimeout, fn)=>fn();
const clientOptions = {
    auth: {
        persistSession: true,
        detectSessionInUrl: false,
        lock: noopLock
    }
};
const supabase = ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey, clientOptions) : "TURBOPACK unreachable";
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
}),
"[project]/lib/forum/AuthContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/client.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function AuthProvider({ children }) {
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        user: null,
        isLoading: true
    });
    // Force profile sync on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // mounted flag prevents calling setState on an unmounted component,
        // which is the primary cause of the AbortError "signal is aborted without reason".
        let mounted = true;
        let settled = false;
        // Fallback: if auth never resolves (e.g. Supabase unreachable), unblock the UI after 8s
        const timeout = setTimeout(()=>{
            if (!settled && mounted) {
                console.warn('AuthContext: session check timed out, proceeding as logged out');
                settled = true;
                setState({
                    user: null,
                    isLoading: false
                });
            }
        }, 8000);
        const buildUser = (profile)=>({
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
                isAdmin: profile.is_admin,
                isModerator: profile.is_moderator,
                followedTopics: profile.followed_topics || [],
                notifications: profile.notifications || []
            });
        const syncSession = async ()=>{
            try {
                const { data: { session }, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
                if (error) {
                    // Clear stale/invalid refresh tokens from client storage
                    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
                    throw error;
                }
                if (!mounted) return; // component unmounted while awaiting — bail out cleanly
                if (session?.user) {
                    const { data: profile } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('*').eq('id', session.user.id).single();
                    if (!mounted) return; // unmounted while awaiting profile fetch
                    if (profile) {
                        settled = true;
                        clearTimeout(timeout);
                        setState({
                            user: buildUser(profile),
                            isLoading: false
                        });
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
            setState({
                user: null,
                isLoading: false
            });
        };
        syncSession();
        const { data: { subscription } } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.onAuthStateChange(async (event, session)=>{
            try {
                if (event === 'SIGNED_IN' && session) {
                    const { data: profile } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('*').eq('id', session.user.id).single();
                    if (!mounted) return;
                    if (profile) {
                        setState({
                            user: buildUser(profile),
                            isLoading: false
                        });
                    } else {
                        setState({
                            user: null,
                            isLoading: false
                        });
                    }
                } else if (event === 'SIGNED_OUT') {
                    if (!mounted) return;
                    setState({
                        user: null,
                        isLoading: false
                    });
                }
            } catch (err) {
                if (!mounted) return;
                if (err instanceof Error && (err.name === 'AbortError' || err.message?.includes('aborted'))) {
                    return;
                }
                console.error('AuthContext onAuthStateChange error:', err);
                setState({
                    user: null,
                    isLoading: false
                });
            }
        });
        return ()=>{
            mounted = false;
            clearTimeout(timeout);
            subscription.unsubscribe();
        };
    }, []);
    const login = async (email, password)=>{
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
            email,
            password
        });
        if (error) return {
            success: false,
            error: error.message
        };
        return {
            success: true
        };
    };
    const register = async (data)=>{
        // Pass all profile fields in user metadata so the DB trigger
        // handle_new_user() can create the profile row immediately on insert,
        // bypassing RLS (which requires auth.uid() — unavailable before email confirmation).
        const { data: authData, error: authError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.signUp({
            email: data.email,
            password: data.password,
            options: {
                data: {
                    display_name: data.displayName,
                    city: data.city ?? null,
                    bio: data.bio ?? null,
                    is_business_owner: data.isBusinessOwner ?? false,
                    years_in_county: data.yearsInCounty ?? null
                }
            }
        });
        if (authError) return {
            success: false,
            error: authError.message
        };
        if (!authData.user) return {
            success: false,
            error: 'User creation failed.'
        };
        return {
            success: true
        };
    };
    const resetPassword = async (email)=>{
        const redirectTo = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined;
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.resetPasswordForEmail(email, {
            redirectTo
        });
        if (error) return {
            success: false,
            error: error.message
        };
        return {
            success: true
        };
    };
    const logout = async ()=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
    };
    const updateProfile = async (updates)=>{
        if (!state.user) return;
        // Map updates to snake_case
        const mappedUpdates = {};
        if (updates.displayName) mappedUpdates.display_name = updates.displayName;
        if (updates.city !== undefined) mappedUpdates.city = updates.city;
        if (updates.bio !== undefined) mappedUpdates.bio = updates.bio;
        if (updates.isBusinessOwner !== undefined) mappedUpdates.is_business_owner = updates.isBusinessOwner;
        if (updates.yearsInCounty !== undefined) mappedUpdates.years_in_county = updates.yearsInCounty;
        if (updates.followedTopics) mappedUpdates.followed_topics = updates.followedTopics;
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('profiles').update(mappedUpdates).eq('id', state.user.id).select().single();
        if (data && !error) {
            setState((prev)=>({
                    ...prev,
                    user: {
                        ...prev.user,
                        ...updates
                    }
                }));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            ...state,
            login,
            register,
            logout,
            updateProfile,
            resetPassword
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/forum/AuthContext.tsx",
        lineNumber: 222,
        columnNumber: 9
    }, this);
}
function useAuth() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/components/layout/ClientWrappers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientWrappers",
    ()=>ClientWrappers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
;
"use client";
;
;
;
const NewsletterPopup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/components/crm/NewsletterPopup.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
function isChunkLoadError(reason) {
    if (!reason || typeof reason !== 'object') return false;
    const err = reason;
    return err.name === 'ChunkLoadError' || err.message?.includes('Loading chunk') === true || err.message?.includes('Failed to load chunk') === true || err.message?.includes('ChunkLoadError') === true;
}
function ClientWrappers() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleUnhandledRejection = (event)=>{
            const reason = event.reason;
            if (reason && (reason.name === 'AbortError' || reason.message?.includes('signal is aborted') || reason.message?.includes('aborted without reason'))) {
                event.preventDefault();
                console.warn('Suppressed unhandled AbortError:', reason);
                return;
            }
            // Auto-reload once on ChunkLoadError to recover from stale cached chunk references
            if (isChunkLoadError(reason)) {
                event.preventDefault();
                const RELOAD_KEY = 'pv_chunk_reload';
                const lastReload = sessionStorage.getItem(RELOAD_KEY);
                const now = Date.now();
                // Only reload if we haven't tried in the last 30 seconds
                if (!lastReload || now - parseInt(lastReload) > 30000) {
                    console.warn('ChunkLoadError detected — reloading to recover stale chunks:', reason);
                    sessionStorage.setItem(RELOAD_KEY, String(now));
                    window.location.reload();
                } else {
                    console.error('ChunkLoadError persists after reload — not retrying:', reason);
                }
            }
        };
        window.addEventListener('unhandledrejection', handleUnhandledRejection);
        return ()=>window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NewsletterPopup, {}, void 0, false, {
        fileName: "[project]/components/layout/ClientWrappers.tsx",
        lineNumber: 55,
        columnNumber: 12
    }, this);
}
}),
"[project]/lib/elections/election-status.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Election Status Utility
 * Compares current date against election-dates-2026.json.
 * Returns a "Priority Alert" if within 14 days of an election.
 */ __turbopack_context__.s([
    "getElectionStatus",
    ()=>getElectionStatus,
    "getNearestPollingPlace",
    ()=>getNearestPollingPlace
]);
const PRIORITY_WINDOW_DAYS = 14;
function getElectionStatus(elections) {
    const now = new Date();
    // Use noon to avoid timezone-edge issues
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0);
    // Filter to future elections + today, sorted ascending
    const upcoming = elections.map((e)=>({
            election: e,
            date: new Date(e.date + 'T12:00:00')
        })).filter(({ date })=>date >= today).sort((a, b)=>a.date.getTime() - b.date.getTime());
    if (upcoming.length === 0) {
        return {
            hasAlert: false,
            alertLevel: 'none',
            daysUntil: -1,
            election: null,
            message: 'No upcoming elections.'
        };
    }
    const { election, date: nextDate } = upcoming[0];
    const msPerDay = 1000 * 60 * 60 * 24;
    const daysUntil = Math.round((nextDate.getTime() - today.getTime()) / msPerDay);
    if (daysUntil === 0) {
        return {
            hasAlert: true,
            alertLevel: 'today',
            daysUntil: 0,
            election,
            message: `🗳️ TODAY is ${election.name}! Polls are open ${election.italyPollingPlace.hours}.`
        };
    }
    if (daysUntil <= PRIORITY_WINDOW_DAYS) {
        return {
            hasAlert: true,
            alertLevel: 'priority',
            daysUntil,
            election,
            message: `⚠️ ${election.name} is in ${daysUntil} day${daysUntil === 1 ? '' : 's'} — ${election.date}`
        };
    }
    // More than 14 days away — no banner, but return info
    return {
        hasAlert: false,
        alertLevel: 'upcoming',
        daysUntil,
        election,
        message: `Next election: ${election.name} on ${election.date}`
    };
}
function getNearestPollingPlace(zip, election) {
    // For Italy TX (76651) always return the Italy polling place
    if (zip === '76651') return election.italyPollingPlace;
    return {
        name: election.location,
        address: election.address,
        hours: election.pollingHours
    };
}
}),
"[project]/data/election-dates-2026.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":"primary-2026","name":"Republican Primary Election","date":"2026-03-03","location":"Ellis County Courthouse Annex","address":"200 South College Street, Waxahachie, TX 75165","zip":"75165","pollingHours":"7:00 AM – 7:00 PM","status":"live","description":"March 3 Republican & Democratic Primary. Ellis County voters select party nominees for county, state, and federal offices.","italyPollingPlace":{"name":"Italy Community Center","address":"400 N College St, Italy, TX 76651","hours":"7:00 AM – 7:00 PM"}},{"id":"joint-election-may-2026","name":"City of Italy & Italy ISD Joint Election","date":"2026-05-02","location":"Italy City Hall","address":"130 S College St, Italy, TX 76651","zip":"76651","pollingHours":"7:00 AM – 7:00 PM","status":"upcoming","description":"Joint uniform election for Italy City Council and Italy ISD Board of Trustees seats.","italyPollingPlace":{"name":"Italy City Hall","address":"130 S College St, Italy, TX 76651","hours":"7:00 AM – 7:00 PM"}},{"id":"runoff-2026","name":"Primary Runoff Election","date":"2026-05-26","location":"Ellis County Courthouse Annex","address":"200 South College Street, Waxahachie, TX 75165","zip":"75165","pollingHours":"7:00 AM – 7:00 PM","status":"upcoming","description":"Runoff election if no candidate earns a majority in the March Primary. Only held if required.","italyPollingPlace":{"name":"Italy Community Center","address":"400 N College St, Italy, TX 76651","hours":"7:00 AM – 7:00 PM"}},{"id":"general-2026","name":"General Election","date":"2026-11-03","location":"Ellis County Courthouse Annex","address":"200 South College Street, Waxahachie, TX 75165","zip":"75165","pollingHours":"7:00 AM – 7:00 PM","status":"planned","description":"November General Election for all offices. All Ellis County registered voters may participate.","italyPollingPlace":{"name":"Italy Community Center","address":"400 N College St, Italy, TX 76651","hours":"7:00 AM – 7:00 PM"}}]);}),
"[project]/components/elections/ElectionAlertBanner.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ElectionAlertBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$triangle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/alert-triangle.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$elections$2f$election$2d$status$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/elections/election-status.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$election$2d$dates$2d$2026$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/data/election-dates-2026.json (json)");
'use client';
;
;
;
;
;
const DISMISS_KEY = 'pv_election_alert_dismissed';
function ElectionAlertBanner() {
    const [alert, setAlert] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dismissed, setDismissed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Check localStorage for dismiss state
        try {
            const raw = localStorage.getItem(DISMISS_KEY);
            if (raw) {
                const { date, id } = JSON.parse(raw);
                const status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$elections$2f$election$2d$status$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getElectionStatus"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$election$2d$dates$2d$2026$2e$json__$28$json$29$__["default"]);
                // Only dismiss if the same election was dismissed today
                if (date === new Date().toISOString().split('T')[0] && id === status.election?.id) {
                    setDismissed(true);
                    return;
                }
            }
        } catch  {
        // localStorage blocked — show banner anyway
        }
        const status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$elections$2f$election$2d$status$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getElectionStatus"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$election$2d$dates$2d$2026$2e$json__$28$json$29$__["default"]);
        if (status.hasAlert) setAlert(status);
    }, []);
    const handleDismiss = ()=>{
        setDismissed(true);
        try {
            localStorage.setItem(DISMISS_KEY, JSON.stringify({
                date: new Date().toISOString().split('T')[0],
                id: alert?.election?.id
            }));
        } catch  {}
    };
    if (!alert || dismissed) return null;
    const isToday = alert.alertLevel === 'today';
    const pollingPlace = alert.election?.italyPollingPlace;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative z-50 w-full py-3 px-4 ${isToday ? 'bg-gradient-to-r from-red-600 to-red-700' : 'bg-gradient-to-r from-gold/90 to-amber-500'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-custom flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start sm:items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$triangle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                            className: `w-5 h-5 flex-shrink-0 mt-0.5 sm:mt-0 ${isToday ? 'text-white' : 'text-navy-dark'}`
                        }, void 0, false, {
                            fileName: "[project]/components/elections/ElectionAlertBanner.tsx",
                            lineNumber: 60,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `font-semibold text-sm ${isToday ? 'text-white' : 'text-navy-dark'}`,
                                    children: isToday ? 'ELECTION DAY — Polls Are Open Now!' : `Priority Alert: ${alert.election?.name}`
                                }, void 0, false, {
                                    fileName: "[project]/components/elections/ElectionAlertBanner.tsx",
                                    lineNumber: 62,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-sm ml-2 ${isToday ? 'text-red-100' : 'text-navy/80'}`,
                                    children: isToday ? `Polls open ${pollingPlace?.hours ?? '7:00 AM – 7:00 PM'}` : `${alert.daysUntil} day${alert.daysUntil === 1 ? '' : 's'} away — ${alert.election?.date}`
                                }, void 0, false, {
                                    fileName: "[project]/components/elections/ElectionAlertBanner.tsx",
                                    lineNumber: 65,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/elections/ElectionAlertBanner.tsx",
                            lineNumber: 61,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/elections/ElectionAlertBanner.tsx",
                    lineNumber: 59,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 ml-8 sm:ml-0",
                    children: [
                        pollingPlace && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(pollingPlace.address)}`,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: `flex items-center gap-1 text-xs font-medium underline underline-offset-2 ${isToday ? 'text-white hover:text-red-100' : 'text-navy-dark hover:text-navy'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/elections/ElectionAlertBanner.tsx",
                                    lineNumber: 84,
                                    columnNumber: 29
                                }, this),
                                pollingPlace.name,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                    className: "w-3 h-3 opacity-60"
                                }, void 0, false, {
                                    fileName: "[project]/components/elections/ElectionAlertBanner.tsx",
                                    lineNumber: 86,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/elections/ElectionAlertBanner.tsx",
                            lineNumber: 77,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleDismiss,
                            "aria-label": "Dismiss election alert",
                            className: `p-1 rounded hover:opacity-70 transition-opacity ${isToday ? 'text-white' : 'text-navy-dark'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/components/elections/ElectionAlertBanner.tsx",
                                lineNumber: 94,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/elections/ElectionAlertBanner.tsx",
                            lineNumber: 89,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/elections/ElectionAlertBanner.tsx",
                    lineNumber: 75,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/elections/ElectionAlertBanner.tsx",
            lineNumber: 57,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/elections/ElectionAlertBanner.tsx",
        lineNumber: 51,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__71ff77e6._.js.map