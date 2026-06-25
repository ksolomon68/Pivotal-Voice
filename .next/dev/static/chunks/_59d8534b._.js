(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/supabase/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://cndaaiaygxhmuvqtgxhk.supabase.co") || '';
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNuZGFhaWF5Z3hobXV2cXRneGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2OTQyMzMsImV4cCI6MjA4NjI3MDIzM30.a0gw6nI_sBsR8GN0O14rwzNwXOa4XK6sg60mooySmwE") || '';
const supabase = ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey) : "TURBOPACK unreachable";
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/forum/AuthContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function AuthProvider({ children }) {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        user: null,
        isLoading: true
    });
    // Force profile sync on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const syncSession = {
                "AuthProvider.useEffect.syncSession": async ()=>{
                    const { data: { session } } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
                    if (session?.user) {
                        const { data: profile } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('*').eq('id', session.user.id).single();
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
                                    isAdmin: profile.is_admin,
                                    isModerator: profile.is_moderator,
                                    followedTopics: profile.followed_topics || [],
                                    notifications: profile.notifications || []
                                },
                                isLoading: false
                            });
                            return;
                        }
                    }
                    setState({
                        user: null,
                        isLoading: false
                    });
                }
            }["AuthProvider.useEffect.syncSession"];
            syncSession();
            const { data: { subscription } } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.onAuthStateChange({
                "AuthProvider.useEffect": async (event, session)=>{
                    if (event === 'SIGNED_IN' && session) {
                        const { data: profile } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('*').eq('id', session.user.id).single();
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
                                    isAdmin: profile.is_admin,
                                    isModerator: profile.is_moderator,
                                    followedTopics: profile.followed_topics || [],
                                    notifications: profile.notifications || []
                                },
                                isLoading: false
                            });
                        }
                    } else if (event === 'SIGNED_OUT') {
                        setState({
                            user: null,
                            isLoading: false
                        });
                    }
                }
            }["AuthProvider.useEffect"]);
            return ({
                "AuthProvider.useEffect": ()=>subscription.unsubscribe()
            })["AuthProvider.useEffect"];
        }
    }["AuthProvider.useEffect"], []);
    const login = async (email, password)=>{
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
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
        // 1. Sign up user via Supabase Auth
        const { data: authData, error: authError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signUp({
            email: data.email,
            password: data.password,
            options: {
                data: {
                    display_name: data.displayName
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
        // 2. Create profile entry (Manual sync as fallback for missing DB triggers)
        const { error: profileError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('profiles').insert([
            {
                id: authData.user.id,
                email: data.email,
                display_name: data.displayName,
                city: data.city,
                is_business_owner: data.isBusinessOwner,
                years_in_county: data.yearsInCounty,
                bio: data.bio
            }
        ]);
        if (profileError) {
            console.error('Profile creation error:', profileError);
        // We don't fail registration if profile insert fails here, 
        // but ideally we'd have a DB trigger.
        }
        return {
            success: true
        };
    };
    const logout = async ()=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
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
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('profiles').update(mappedUpdates).eq('id', state.user.id).select().single();
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            ...state,
            login,
            register,
            logout,
            updateProfile
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/forum/AuthContext.tsx",
        lineNumber: 217,
        columnNumber: 10
    }, this);
}
_s(AuthProvider, "2Io9rBMt4BzSUXtsvf0/eK9II/A=");
_c = AuthProvider;
function useAuth() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/ClientWrappers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientWrappers",
    ()=>ClientWrappers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
"use client";
;
;
const NewsletterPopup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/crm/NewsletterPopup.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/components/crm/NewsletterPopup.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = NewsletterPopup;
function ClientWrappers() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NewsletterPopup, {}, void 0, false, {
        fileName: "[project]/components/layout/ClientWrappers.tsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
_c1 = ClientWrappers;
var _c, _c1;
__turbopack_context__.k.register(_c, "NewsletterPopup");
__turbopack_context__.k.register(_c1, "ClientWrappers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/elections/election-status.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/election-dates-2026.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":"primary-2026","name":"Republican Primary Election","date":"2026-03-03","location":"Ellis County Courthouse Annex","address":"200 South College Street, Waxahachie, TX 75165","zip":"75165","pollingHours":"7:00 AM – 7:00 PM","status":"live","description":"March 3 Republican & Democratic Primary. Ellis County voters select party nominees for county, state, and federal offices.","italyPollingPlace":{"name":"Italy Community Center","address":"400 N College St, Italy, TX 76651","hours":"7:00 AM – 7:00 PM"}},{"id":"joint-election-may-2026","name":"City of Italy & Italy ISD Joint Election","date":"2026-05-02","location":"Italy City Hall","address":"130 S College St, Italy, TX 76651","zip":"76651","pollingHours":"7:00 AM – 7:00 PM","status":"upcoming","description":"Joint uniform election for Italy City Council and Italy ISD Board of Trustees seats.","italyPollingPlace":{"name":"Italy City Hall","address":"130 S College St, Italy, TX 76651","hours":"7:00 AM – 7:00 PM"}},{"id":"runoff-2026","name":"Primary Runoff Election","date":"2026-05-26","location":"Ellis County Courthouse Annex","address":"200 South College Street, Waxahachie, TX 75165","zip":"75165","pollingHours":"7:00 AM – 7:00 PM","status":"upcoming","description":"Runoff election if no candidate earns a majority in the March Primary. Only held if required.","italyPollingPlace":{"name":"Italy Community Center","address":"400 N College St, Italy, TX 76651","hours":"7:00 AM – 7:00 PM"}},{"id":"general-2026","name":"General Election","date":"2026-11-03","location":"Ellis County Courthouse Annex","address":"200 South College Street, Waxahachie, TX 75165","zip":"75165","pollingHours":"7:00 AM – 7:00 PM","status":"planned","description":"November General Election for all offices. All Ellis County registered voters may participate.","italyPollingPlace":{"name":"Italy Community Center","address":"400 N College St, Italy, TX 76651","hours":"7:00 AM – 7:00 PM"}}]);}),
"[project]/components/elections/ElectionAlertBanner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ElectionAlertBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/alert-triangle.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$elections$2f$election$2d$status$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/elections/election-status.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$election$2d$dates$2d$2026$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/data/election-dates-2026.json (json)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const DISMISS_KEY = 'pv_election_alert_dismissed';
function ElectionAlertBanner() {
    _s();
    const [alert, setAlert] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dismissed, setDismissed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ElectionAlertBanner.useEffect": ()=>{
            // Check localStorage for dismiss state
            try {
                const raw = localStorage.getItem(DISMISS_KEY);
                if (raw) {
                    const { date, id } = JSON.parse(raw);
                    const status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$elections$2f$election$2d$status$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getElectionStatus"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$election$2d$dates$2d$2026$2e$json__$28$json$29$__["default"]);
                    // Only dismiss if the same election was dismissed today
                    if (date === new Date().toISOString().split('T')[0] && id === status.election?.id) {
                        setDismissed(true);
                        return;
                    }
                }
            } catch  {
            // localStorage blocked — show banner anyway
            }
            const status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$elections$2f$election$2d$status$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getElectionStatus"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$election$2d$dates$2d$2026$2e$json__$28$json$29$__["default"]);
            if (status.hasAlert) setAlert(status);
        }
    }["ElectionAlertBanner.useEffect"], []);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative z-50 w-full py-3 px-4 ${isToday ? 'bg-gradient-to-r from-red-600 to-red-700' : 'bg-gradient-to-r from-gold/90 to-amber-500'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-custom flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start sm:items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                            className: `w-5 h-5 flex-shrink-0 mt-0.5 sm:mt-0 ${isToday ? 'text-white' : 'text-navy-dark'}`
                        }, void 0, false, {
                            fileName: "[project]/components/elections/ElectionAlertBanner.tsx",
                            lineNumber: 49,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `font-semibold text-sm ${isToday ? 'text-white' : 'text-navy-dark'}`,
                                    children: isToday ? 'ELECTION DAY — Polls Are Open Now!' : `Priority Alert: ${alert.election?.name}`
                                }, void 0, false, {
                                    fileName: "[project]/components/elections/ElectionAlertBanner.tsx",
                                    lineNumber: 51,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-sm ml-2 ${isToday ? 'text-red-100' : 'text-navy/80'}`,
                                    children: isToday ? `Polls open ${pollingPlace?.hours ?? '7:00 AM – 7:00 PM'}` : `${alert.daysUntil} day${alert.daysUntil === 1 ? '' : 's'} away — ${alert.election?.date}`
                                }, void 0, false, {
                                    fileName: "[project]/components/elections/ElectionAlertBanner.tsx",
                                    lineNumber: 54,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/elections/ElectionAlertBanner.tsx",
                            lineNumber: 50,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/elections/ElectionAlertBanner.tsx",
                    lineNumber: 48,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 ml-8 sm:ml-0",
                    children: [
                        pollingPlace && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(pollingPlace.address)}`,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: `flex items-center gap-1 text-xs font-medium underline underline-offset-2 ${isToday ? 'text-white hover:text-red-100' : 'text-navy-dark hover:text-navy'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/elections/ElectionAlertBanner.tsx",
                                    lineNumber: 63,
                                    columnNumber: 29
                                }, this),
                                pollingPlace.name,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                    className: "w-3 h-3 opacity-60"
                                }, void 0, false, {
                                    fileName: "[project]/components/elections/ElectionAlertBanner.tsx",
                                    lineNumber: 65,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/elections/ElectionAlertBanner.tsx",
                            lineNumber: 62,
                            columnNumber: 38
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleDismiss,
                            "aria-label": "Dismiss election alert",
                            className: `p-1 rounded hover:opacity-70 transition-opacity ${isToday ? 'text-white' : 'text-navy-dark'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/components/elections/ElectionAlertBanner.tsx",
                                lineNumber: 68,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/elections/ElectionAlertBanner.tsx",
                            lineNumber: 67,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/elections/ElectionAlertBanner.tsx",
                    lineNumber: 61,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/elections/ElectionAlertBanner.tsx",
            lineNumber: 46,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/elections/ElectionAlertBanner.tsx",
        lineNumber: 45,
        columnNumber: 10
    }, this);
}
_s(ElectionAlertBanner, "g1/721OjqD2ZNogUYjK7uxk0rfw=");
_c = ElectionAlertBanner;
var _c;
__turbopack_context__.k.register(_c, "ElectionAlertBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_59d8534b._.js.map