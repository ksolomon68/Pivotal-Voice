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
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/node:util [external] (node:util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}),
"[project]/app/api/broadcast/token/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$server$2d$sdk$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/livekit-server-sdk/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$server$2d$sdk$2f$dist$2f$AccessToken$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/livekit-server-sdk/dist/AccessToken.js [app-route] (ecmascript)");
;
;
;
const supabaseUrl = ("TURBOPACK compile-time value", "");
const supabaseAnonKey = ("TURBOPACK compile-time value", "");
const livekitApiKey = process.env.LIVEKIT_API_KEY;
const livekitApiSecret = process.env.LIVEKIT_API_SECRET;
const livekitUrl = ("TURBOPACK compile-time value", "wss://pivotal-voice-uxwewle5.livekit.cloud");
async function POST(req) {
    const body = await req.json();
    const { sessionId, role, displayName, inviteToken } = body;
    if (!sessionId || !role) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Missing required fields'
        }, {
            status: 400
        });
    }
    const isMockMode = !("TURBOPACK compile-time value", "") || !("TURBOPACK compile-time value", "");
    let session = null;
    if ("TURBOPACK compile-time truthy", 1) {
        const { getSession } = await __turbopack_context__.A("[project]/lib/broadcast/broadcast-service.ts [app-route] (ecmascript, async loader)");
        const s = await getSession(sessionId);
        if (s) {
            session = {
                id: s.id,
                host_id: s.hostId,
                guest_invite_token: s.guestInviteToken,
                livekit_room_name: s.livekitRoomName
            };
        }
    } else //TURBOPACK unreachable
    ;
    if (!session) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Session not found'
        }, {
            status: 404
        });
    }
    let identity = '';
    let participantName = '';
    let canPublish = false;
    let canPublishData = false;
    if (role === 'host') {
        if ("TURBOPACK compile-time truthy", 1) {
            identity = `host_mock-host-1`;
            participantName = 'Commissioner Smith';
            canPublish = true;
            canPublishData = true;
        } else //TURBOPACK unreachable
        ;
    } else if (role === 'guest') {
        if (!inviteToken || inviteToken !== session.guest_invite_token) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Invalid invite token'
            }, {
                status: 403
            });
        }
        if (!displayName?.trim()) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Display name required'
            }, {
                status: 400
            });
        }
        identity = `guest_${Math.random().toString(36).substring(2, 15)}`;
        participantName = displayName.trim();
        canPublish = true;
        canPublishData = false;
    } else if (role === 'viewer') {
        identity = `viewer_${Math.random().toString(36).substring(2, 15)}`;
        participantName = displayName?.trim() || 'Viewer';
        canPublish = false;
        canPublishData = false;
    } else {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Invalid role'
        }, {
            status: 400
        });
    }
    if (!livekitApiKey || !livekitApiSecret) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            token: `mock-token-${identity}`,
            roomName: session.livekit_room_name,
            livekitUrl: livekitUrl || 'wss://placeholder.livekit.cloud'
        });
    }
    const token = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$server$2d$sdk$2f$dist$2f$AccessToken$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AccessToken"](livekitApiKey, livekitApiSecret, {
        identity,
        name: participantName,
        ttl: '4h'
    });
    token.addGrant({
        roomJoin: true,
        room: session.livekit_room_name,
        canPublish,
        canSubscribe: true,
        canPublishData
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        token: await token.toJwt(),
        roomName: session.livekit_room_name,
        livekitUrl
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2150e11d._.js.map