module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/supabase/client.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
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
const supabase = ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey, clientOptions) : "TURBOPACK unreachable";
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
}),
"[project]/lib/broadcast/broadcast-service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSession",
    ()=>createSession,
    "decrementViewerCount",
    ()=>decrementViewerCount,
    "getLiveSessions",
    ()=>getLiveSessions,
    "getScheduledSessions",
    ()=>getScheduledSessions,
    "getSession",
    ()=>getSession,
    "getSessionByInviteToken",
    ()=>getSessionByInviteToken,
    "incrementViewerCount",
    ()=>incrementViewerCount,
    "updateSessionFacebookUrl",
    ()=>updateSessionFacebookUrl,
    "updateSessionStatus",
    ()=>updateSessionStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/client.ts [app-route] (ecmascript)");
;
function mapRow(row) {
    return {
        id: row.id,
        title: row.title,
        description: row.description,
        hostId: row.host_id,
        hostName: row.host_name,
        status: row.status,
        livekitRoomName: row.livekit_room_name,
        guestInviteToken: row.guest_invite_token,
        scheduledAt: row.scheduled_at,
        startedAt: row.started_at,
        endedAt: row.ended_at,
        viewerCount: row.viewer_count,
        thumbnailUrl: row.thumbnail_url,
        youtubeVideoId: row.youtube_video_id,
        streamyardBroadcastId: row.streamyard_broadcast_id,
        facebookVideoUrl: row.facebook_video_url,
        createdAt: row.created_at
    };
}
async function createSession(hostId, hostName, title, description, scheduledAt, youtubeVideoId, streamyardBroadcastId, facebookVideoUrl, supabaseClient = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"]) {
    const tempId = crypto.randomUUID();
    const { data, error } = await supabaseClient.from('broadcast_sessions').insert({
        host_id: hostId,
        host_name: hostName,
        title,
        description,
        scheduled_at: scheduledAt || null,
        livekit_room_name: `room_${tempId}`,
        guest_invite_token: crypto.randomUUID(),
        youtube_video_id: youtubeVideoId || null,
        streamyard_broadcast_id: streamyardBroadcastId || null,
        facebook_video_url: facebookVideoUrl || null
    }).select().single();
    if (error) throw new Error(error.message);
    return mapRow(data);
}
async function getSession(id) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('broadcast_sessions').select('*').eq('id', id).single();
    if (error) {
        console.error('[broadcast] getSession error:', error.code, error.message, error.details, 'id:', id);
        return null;
    }
    if (!data) return null;
    return mapRow(data);
}
async function getSessionByInviteToken(token) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('broadcast_sessions').select('*').eq('guest_invite_token', token).single();
    if (error || !data) return null;
    return mapRow(data);
}
async function getLiveSessions() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('broadcast_sessions').select('*').eq('status', 'live').order('started_at', {
        ascending: false
    });
    if (error || !data) return [];
    return data.map(mapRow);
}
async function getScheduledSessions() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('broadcast_sessions').select('*').eq('status', 'scheduled').order('scheduled_at', {
        ascending: true
    });
    if (error || !data) return [];
    return data.map(mapRow);
}
async function updateSessionFacebookUrl(id, facebookVideoUrl, supabaseClient = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"]) {
    const { error } = await supabaseClient.from('broadcast_sessions').update({
        facebook_video_url: facebookVideoUrl || null
    }).eq('id', id);
    if (error) throw new Error(error.message);
}
async function updateSessionStatus(id, status, supabaseClient = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"]) {
    const updates = {
        status
    };
    if (status === 'live') updates.started_at = new Date().toISOString();
    if (status === 'ended') updates.ended_at = new Date().toISOString();
    const { error } = await supabaseClient.from('broadcast_sessions').update(updates).eq('id', id);
    if (error) throw new Error(error.message);
}
async function incrementViewerCount(id, supabaseClient = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"]) {
    await supabaseClient.rpc('increment_viewer_count', {
        session_id: id
    });
}
async function decrementViewerCount(id, supabaseClient = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"]) {
    await supabaseClient.rpc('decrement_viewer_count', {
        session_id: id
    });
}
}),
"[project]/app/api/broadcast/sessions/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$broadcast$2f$broadcast$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/broadcast/broadcast-service.ts [app-route] (ecmascript)");
;
;
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://cndaaiaygxhmuvqtgxhk.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNuZGFhaWF5Z3hobXV2cXRneGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2OTQyMzMsImV4cCI6MjA4NjI3MDIzM30.a0gw6nI_sBsR8GN0O14rwzNwXOa4XK6sg60mooySmwE");
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
async function GET() {
    const [live, scheduled] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$broadcast$2f$broadcast$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getLiveSessions"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$broadcast$2f$broadcast$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getScheduledSessions"])()
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        live,
        scheduled
    });
}
async function POST(req) {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader?.startsWith('Bearer ')) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Unauthorized'
        }, {
            status: 401
        });
    }
    const jwt = authHeader.slice(7);
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey, {
        global: {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        }
    });
    const { data: { user }, error: authError } = await supabase.auth.getUser(jwt);
    if (authError || !user) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Unauthorized'
        }, {
            status: 401
        });
    }
    const { data: profile } = await supabase.from('profiles').select('is_admin, display_name').eq('id', user.id).single();
    if (!profile?.is_admin) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Forbidden'
        }, {
            status: 403
        });
    }
    const body = await req.json();
    const { title, description, scheduledAt, youtubeVideoId, streamyardBroadcastId, facebookVideoUrl } = body;
    if (!title?.trim()) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Title is required'
        }, {
            status: 400
        });
    }
    try {
        // Use service-role client for the insert so RLS is bypassed server-side.
        // Auth + admin check already happened above, so this is safe.
        const writeClient = supabaseServiceKey ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseServiceKey) : supabase;
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$broadcast$2f$broadcast$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createSession"])(user.id, profile.display_name, title.trim(), description?.trim() || undefined, scheduledAt || undefined, youtubeVideoId?.trim() || undefined, streamyardBroadcastId?.trim() || undefined, facebookVideoUrl?.trim() || undefined, writeClient);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(session, {
            status: 201
        });
    } catch (err) {
        const message = err instanceof Error ? err.message : 'Failed to create session';
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__eb8cefe5._.js.map