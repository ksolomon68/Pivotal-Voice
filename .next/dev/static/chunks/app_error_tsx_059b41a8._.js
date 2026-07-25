(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/error.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Error
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Error({ error, reset }) {
    _s();
    const isChunkError = error?.name === 'ChunkLoadError' || error?.message?.includes('Loading chunk') || error?.message?.includes('Failed to load chunk');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Error.useEffect": ()=>{
            console.error('[PageError]', error);
            if (isChunkError) {
                const RELOAD_KEY = 'pv_chunk_reload';
                const lastReload = sessionStorage.getItem(RELOAD_KEY);
                const now = Date.now();
                if (!lastReload || now - parseInt(lastReload) > 30000) {
                    sessionStorage.setItem(RELOAD_KEY, String(now));
                    window.location.reload();
                }
            }
        }
    }["Error.useEffect"], [
        error,
        isChunkError
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: '#0d1625',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                textAlign: 'center',
                maxWidth: 520
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: {
                        color: '#d4af37',
                        fontSize: '1.5rem',
                        marginBottom: '1rem',
                        fontFamily: 'sans-serif'
                    },
                    children: "Page Error"
                }, void 0, false, {
                    fileName: "[project]/app/error.tsx",
                    lineNumber: 34,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: 'rgba(245,240,232,0.6)',
                        marginBottom: '1rem',
                        fontSize: '0.9rem',
                        fontFamily: 'sans-serif'
                    },
                    children: isChunkError ? 'A page resource failed to load. Refreshing automatically…' : 'This page encountered an error. You can try again or return home.'
                }, void 0, false, {
                    fileName: "[project]/app/error.tsx",
                    lineNumber: 37,
                    columnNumber: 17
                }, this),
                !isChunkError && (error?.message || error?.digest) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: 'rgba(245,240,232,0.35)',
                        marginBottom: '1.5rem',
                        fontSize: '0.75rem',
                        fontFamily: 'monospace',
                        background: 'rgba(255,255,255,0.05)',
                        padding: '0.5rem 0.75rem',
                        borderRadius: '0.375rem',
                        wordBreak: 'break-all'
                    },
                    children: [
                        error.digest ? `[${error.digest}] ` : '',
                        error.message
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/error.tsx",
                    lineNumber: 43,
                    columnNumber: 21
                }, this),
                !isChunkError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        gap: '1rem',
                        justifyContent: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: reset,
                            style: {
                                background: '#d4af37',
                                color: '#0d1625',
                                border: 'none',
                                padding: '0.75rem 1.5rem',
                                borderRadius: '0.5rem',
                                fontWeight: 600,
                                cursor: 'pointer'
                            },
                            children: "Try Again"
                        }, void 0, false, {
                            fileName: "[project]/app/error.tsx",
                            lineNumber: 49,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/",
                            style: {
                                background: 'transparent',
                                color: '#d4af37',
                                border: '1px solid #d4af37',
                                padding: '0.75rem 1.5rem',
                                borderRadius: '0.5rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                textDecoration: 'none'
                            },
                            children: "Go Home"
                        }, void 0, false, {
                            fileName: "[project]/app/error.tsx",
                            lineNumber: 55,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/error.tsx",
                    lineNumber: 48,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/error.tsx",
            lineNumber: 33,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/error.tsx",
        lineNumber: 32,
        columnNumber: 9
    }, this);
}
_s(Error, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Error;
var _c;
__turbopack_context__.k.register(_c, "Error");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_error_tsx_059b41a8._.js.map