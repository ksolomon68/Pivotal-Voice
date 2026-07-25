(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/global-error.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlobalError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function GlobalError({ error, reset }) {
    _s();
    const isChunkError = error?.name === 'ChunkLoadError' || error?.message?.includes('Loading chunk') || error?.message?.includes('Failed to load chunk');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobalError.useEffect": ()=>{
            console.error('[GlobalError]', error);
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
    }["GlobalError.useEffect"], [
        error,
        isChunkError
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            style: {
                background: '#0d1625',
                color: '#f5f0e8',
                fontFamily: 'sans-serif',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                margin: 0
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    maxWidth: 480,
                    padding: '2rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            color: '#d4af37',
                            fontSize: '1.5rem',
                            marginBottom: '1rem'
                        },
                        children: "Something went wrong"
                    }, void 0, false, {
                        fileName: "[project]/app/global-error.tsx",
                        lineNumber: 35,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: 'rgba(245,240,232,0.6)',
                            marginBottom: '1.5rem',
                            fontSize: '0.9rem'
                        },
                        children: isChunkError ? 'A page resource failed to load. Refreshing automatically…' : 'An unexpected error occurred. Please try refreshing the page.'
                    }, void 0, false, {
                        fileName: "[project]/app/global-error.tsx",
                        lineNumber: 38,
                        columnNumber: 21
                    }, this),
                    !isChunkError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: reset,
                        style: {
                            background: '#d4af37',
                            color: '#0d1625',
                            border: 'none',
                            padding: '0.75rem 2rem',
                            borderRadius: '0.5rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            fontSize: '1rem'
                        },
                        children: "Try Again"
                    }, void 0, false, {
                        fileName: "[project]/app/global-error.tsx",
                        lineNumber: 44,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/global-error.tsx",
                lineNumber: 34,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/global-error.tsx",
            lineNumber: 33,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/global-error.tsx",
        lineNumber: 32,
        columnNumber: 9
    }, this);
}
_s(GlobalError, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = GlobalError;
var _c;
__turbopack_context__.k.register(_c, "GlobalError");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_global-error_tsx_29b32c6b._.js.map