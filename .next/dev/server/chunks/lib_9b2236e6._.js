module.exports = [
"[project]/lib/supabase/client.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "") || '';
const supabaseAnonKey = ("TURBOPACK compile-time value", "") || '';
const supabase = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])('https://placeholder.supabase.co', 'placeholder');
if ("TURBOPACK compile-time truthy", 1) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        console.error('SERVER SIDE: Supabase credentials missing. Please check your .env.local file.');
    }
}
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
const isMockMode = !("TURBOPACK compile-time value", "") || !("TURBOPACK compile-time value", "");
async function createSession(hostId, hostName, title, description, scheduledAt) {
    if ("TURBOPACK compile-time truthy", 1) {
        const tempId = Math.random().toString(36).substring(2, 15);
        const newSession = {
            id: tempId,
            hostId,
            hostName,
            title,
            description,
            scheduledAt,
            status: scheduledAt ? 'scheduled' : 'live',
            livekitRoomName: `room_${tempId}`,
            guestInviteToken: Math.random().toString(36).substring(2, 15),
            viewerCount: 0,
            createdAt: new Date().toISOString()
        };
        mockSessions.push(newSession);
        return newSession;
    }
    //TURBOPACK unreachable
    ;
    const tempId = undefined;
    const data = undefined, error = undefined;
}
async function getSession(id) {
    if ("TURBOPACK compile-time truthy", 1) {
        return mockSessions.find((s)=>s.id === id) || null;
    }
    //TURBOPACK unreachable
    ;
    const data = undefined, error = undefined;
}
async function getSessionByInviteToken(token) {
    if ("TURBOPACK compile-time truthy", 1) {
        return mockSessions.find((s)=>s.guestInviteToken === token) || null;
    }
    //TURBOPACK unreachable
    ;
    const data = undefined, error = undefined;
}
async function getLiveSessions() {
    if ("TURBOPACK compile-time truthy", 1) {
        return mockSessions.filter((s)=>s.status === 'live');
    }
    //TURBOPACK unreachable
    ;
    const data = undefined, error = undefined;
}
async function getScheduledSessions() {
    if ("TURBOPACK compile-time truthy", 1) {
        return mockSessions.filter((s)=>s.status === 'scheduled');
    }
    //TURBOPACK unreachable
    ;
    const data = undefined, error = undefined;
}
async function updateSessionStatus(id, status) {
    if ("TURBOPACK compile-time truthy", 1) {
        const session = mockSessions.find((s)=>s.id === id);
        if (session) {
            session.status = status;
            if (status === 'live') session.startedAt = new Date().toISOString();
            if (status === 'ended') session.endedAt = new Date().toISOString();
        }
        return;
    }
    //TURBOPACK unreachable
    ;
    const updates = undefined;
    const error = undefined;
}
async function incrementViewerCount(id) {
    if ("TURBOPACK compile-time truthy", 1) {
        const session = mockSessions.find((s)=>s.id === id);
        if (session) {
            session.viewerCount += 1;
        }
        return;
    }
    //TURBOPACK unreachable
    ;
}
async function decrementViewerCount(id) {
    if ("TURBOPACK compile-time truthy", 1) {
        const session = mockSessions.find((s)=>s.id === id);
        if (session) {
            session.viewerCount = Math.max(session.viewerCount - 1, 0);
        }
        return;
    }
    //TURBOPACK unreachable
    ;
}
}),
];

//# sourceMappingURL=lib_9b2236e6._.js.map