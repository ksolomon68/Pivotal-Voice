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
const supabase = ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey) : "TURBOPACK unreachable";
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
        createdAt: row.created_at
    };
}
// Memory storage for mock sessions when Supabase is not configured
let mockSessions = [
    {
        id: 'mock-session-1',
        title: 'Ellis County Growth and Infrastructure Discussion',
        description: 'Join Commissioner Smith to discuss the new road construction and zoning updates.',
        hostId: 'mock-host-1',
        hostName: 'Commissioner Smith',
        status: 'live',
        livekitRoomName: 'room_mock-session-1',
        startedAt: new Date().toISOString(),
        viewerCount: 24,
        createdAt: new Date().toISOString()
    },
    {
        id: 'mock-session-2',
        title: 'Upcoming School Board Election Forum',
        description: 'Q&A session with the candidates running for the Ellis County School Board.',
        hostId: 'mock-host-2',
        hostName: 'Moderator Sarah',
        status: 'scheduled',
        livekitRoomName: 'room_mock-session-2',
        scheduledAt: new Date(Date.now() + 24 * 60 * 60 * 1000 * 2).toISOString(),
        // 2 days from now
        viewerCount: 0,
        createdAt: new Date().toISOString()
    }
];
const isMockMode = !("TURBOPACK compile-time value", "https://cndaaiaygxhmuvqtgxhk.supabase.co") || !("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNuZGFhaWF5Z3hobXV2cXRneGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2OTQyMzMsImV4cCI6MjA4NjI3MDIzM30.a0gw6nI_sBsR8GN0O14rwzNwXOa4XK6sg60mooySmwE");
async function createSession(hostId, hostName, title, description, scheduledAt) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const tempId = crypto.randomUUID();
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('broadcast_sessions').insert({
        host_id: hostId,
        host_name: hostName,
        title,
        description,
        scheduled_at: scheduledAt || null,
        livekit_room_name: `room_${tempId}`,
        guest_invite_token: crypto.randomUUID()
    }).select().single();
    if (error) throw new Error(error.message);
    return mapRow(data);
}
async function getSession(id) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('broadcast_sessions').select('*').eq('id', id).single();
    if (error || !data) return null;
    return mapRow(data);
}
async function getSessionByInviteToken(token) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('broadcast_sessions').select('*').eq('guest_invite_token', token).single();
    if (error || !data) return null;
    return mapRow(data);
}
async function getLiveSessions() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('broadcast_sessions').select('*').eq('status', 'live').order('started_at', {
        ascending: false
    });
    if (error || !data) return [];
    return data.map(mapRow);
}
async function getScheduledSessions() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('broadcast_sessions').select('*').eq('status', 'scheduled').order('scheduled_at', {
        ascending: true
    });
    if (error || !data) return [];
    return data.map(mapRow);
}
async function updateSessionStatus(id, status) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const updates = {
        status
    };
    if (status === 'live') updates.started_at = new Date().toISOString();
    if (status === 'ended') updates.ended_at = new Date().toISOString();
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('broadcast_sessions').update(updates).eq('id', id);
    if (error) throw new Error(error.message);
}
async function incrementViewerCount(id) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].rpc('increment_viewer_count', {
        session_id: id
    });
}
async function decrementViewerCount(id) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].rpc('decrement_viewer_count', {
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
    const isMockMode = !("TURBOPACK compile-time value", "https://cndaaiaygxhmuvqtgxhk.supabase.co") || !("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNuZGFhaWF5Z3hobXV2cXRneGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2OTQyMzMsImV4cCI6MjA4NjI3MDIzM30.a0gw6nI_sBsR8GN0O14rwzNwXOa4XK6sg60mooySmwE");
    let userId = 'mock-host-1';
    let displayName = 'Commissioner Smith';
    if ("TURBOPACK compile-time truthy", 1) {
        const authHeader = req.headers.get('Authorization');
        if (!authHeader?.startsWith('Bearer ')) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Unauthorized'
            }, {
                status: 401
            });
        }
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
        const jwt = authHeader.slice(7);
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
        userId = user.id;
        displayName = profile.display_name;
    }
    const body = await req.json();
    const { title, description, scheduledAt } = body;
    if (!title?.trim()) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Title is required'
        }, {
            status: 400
        });
    }
    try {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$broadcast$2f$broadcast$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createSession"])(userId, displayName, title.trim(), description?.trim() || undefined, scheduledAt || undefined);
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