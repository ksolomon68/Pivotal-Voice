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
"[project]/app/api/submit-resource/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/resend/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
;
async function POST(req) {
    try {
        const { name, email, title, description, link } = await req.json();
        if (!email || !title || !description) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Missing required fields'
            }, {
                status: 400
            });
        }
        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
            console.error('RESEND_API_KEY is not set');
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Email service not configured'
            }, {
                status: 500
            });
        }
        const resend = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Resend"](apiKey);
        const { data, error } = await resend.emails.send({
            from: 'Pivotal Voice <resources@pivotalvoice.org>',
            to: [
                'resources@pivotalvoice.org'
            ],
            subject: `New Resource Submission: ${title}`,
            html: `
            <!DOCTYPE html>
            <html>
            <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
            <body style="margin:0;padding:0;background:#0a0f1e;font-family:Georgia,serif;color:#ffffff;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0f1e;padding:40px 20px;">
                <tr><td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="background:#0d1526;border:1px solid rgba(212,175,55,0.2);border-radius:12px;overflow:hidden;max-width:600px;width:100%;">
            
                    <!-- Header -->
                    <tr><td style="background:linear-gradient(135deg,#0a0f1e,#111827);padding:40px;border-bottom:1px solid rgba(212,175,55,0.15);">
                      <p style="margin:0 0 8px;color:#d4af37;font-size:11px;letter-spacing:3px;text-transform:uppercase;font-family:Arial,sans-serif;">Pivotal Voice Admin</p>
                      <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;line-height:1.3;">New Resource Submission</h1>
                    </td></tr>
            
                    <!-- Body -->
                    <tr><td style="padding:36px 40px;color:rgba(245,235,210,0.85);font-size:15px;line-height:1.6;">
                      <p style="margin:0 0 20px;">A new resource has been submitted for review on the Pivotal Voice Resource Library.</p>
                      
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;border-collapse:collapse;">
                        <tr>
                          <td style="padding:8px 0;font-weight:bold;color:#d4af37;width:120px;vertical-align:top;">Submitted By:</td>
                          <td style="padding:8px 0;color:#ffffff;">${name || 'Anonymous'} (${email})</td>
                        </tr>
                        <tr>
                          <td style="padding:8px 0;font-weight:bold;color:#d4af37;vertical-align:top;">Title:</td>
                          <td style="padding:8px 0;color:#ffffff;font-weight:600;">${title}</td>
                        </tr>
                        <tr>
                          <td style="padding:8px 0;font-weight:bold;color:#d4af37;vertical-align:top;">Link/Source:</td>
                          <td style="padding:8px 0;color:#ffffff;">${link ? `<a href="${link}" style="color:#d4af37;text-decoration:none;">${link}</a>` : 'Not provided'}</td>
                        </tr>
                        <tr>
                          <td style="padding:8px 0;font-weight:bold;color:#d4af37;vertical-align:top;">Description:</td>
                          <td style="padding:8px 0;color:#ffffff;white-space:pre-wrap;">${description}</td>
                        </tr>
                      </table>
            
                      <hr style="border:none;border-top:1px solid rgba(212,175,55,0.1);margin:24px 0;">
                      <p style="margin:0;font-size:13px;color:rgba(245,235,210,0.4);">This is an automated notification from the Pivotal Voice website.</p>
                    </td></tr>
            
                  </table>
                </td></tr>
              </table>
            </body>
            </html>
            `
        });
        if (error) {
            console.error('Failed to send resource submission email:', error);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to send submission email',
                detail: error
            }, {
                status: 500
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true
        });
    } catch (err) {
        console.error('Error handling resource submission:', err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal Server Error'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__bf912291._.js.map