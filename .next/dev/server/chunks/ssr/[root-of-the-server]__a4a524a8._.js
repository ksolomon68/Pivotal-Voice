module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[project]/components/layout/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-ssr] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-in.js [app-ssr] (ecmascript) <export default as LogIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forum$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/forum/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
;
'use client';
;
;
;
;
;
;
;
;
;
const AuthModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/components/forum/AuthModal.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const navigation = [
    {
        name: 'Calendar',
        href: '/calendar'
    },
    {
        name: 'Debates',
        href: '/debates'
    },
    {
        name: 'Podcast',
        href: '/podcast'
    },
    {
        name: 'Services',
        href: '/services'
    },
    {
        name: 'Candidates',
        href: '/candidates'
    },
    {
        name: 'Forum',
        href: '/forum'
    },
    {
        name: 'Resources',
        href: '/resources'
    }
];
function Header() {
    const { user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forum$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrollProgress, setScrollProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showAuthModal, setShowAuthModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [authTab, setAuthTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('login');
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const openAuth = (tab)=>{
        setAuthTab(tab);
        setShowAuthModal(true);
        setMobileMenuOpen(false);
    };
    const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const scrollTop = window.scrollY;
        setScrolled(scrollTop > 20);
        // Scroll progress
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight > 0) {
            setScrollProgress(scrollTop / docHeight * 100);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        window.addEventListener('scroll', handleScroll, {
            passive: true
        });
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, [
        handleScroll
    ]);
    // Close mobile menu on route change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMobileMenuOpen(false);
    }, [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "scroll-progress",
                style: {
                    width: `${scrollProgress}%`
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/layout/Header.tsx",
                lineNumber: 63,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `sticky top-0 z-50 navbar-glass transition-all duration-500 ${scrolled ? 'scrolled' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Header.tsx",
                        lineNumber: 74,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "container-custom",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between h-16 sm:h-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "flex items-center gap-3 group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            animate: {
                                                y: [
                                                    0,
                                                    -4,
                                                    0
                                                ]
                                            },
                                            transition: {
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: 'easeInOut'
                                            },
                                            className: "relative w-12 h-12",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/images/logo.png",
                                                alt: "Pivotal Voice",
                                                fill: true,
                                                className: "object-contain rounded-full",
                                                priority: true
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Header.tsx",
                                                lineNumber: 89,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Header.tsx",
                                            lineNumber: 80,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-display text-sm sm:text-lg font-bold text-white leading-tight tracking-tight",
                                                    children: "Pivotal Voice"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Header.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] sm:text-[10px] text-gold/70 font-medium tracking-wider uppercase",
                                                    children: "Ellis County"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Header.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layout/Header.tsx",
                                            lineNumber: 97,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/Header.tsx",
                                    lineNumber: 79,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden lg:flex items-center gap-1",
                                    children: navigation.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.href,
                                            className: `nav-link px-3 py-2 text-sm ${pathname === item.href ? 'active' : ''}`,
                                            children: item.name
                                        }, item.name, false, {
                                            fileName: "[project]/components/layout/Header.tsx",
                                            lineNumber: 110,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Header.tsx",
                                    lineNumber: 108,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            "aria-label": "Search",
                                            className: "p-2.5 text-cream/60 hover:text-gold rounded-full hover:bg-gold/10 transition-all duration-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Header.tsx",
                                                lineNumber: 127,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Header.tsx",
                                            lineNumber: 123,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/services#book",
                                            className: "hidden md:inline-flex btn-primary text-sm !px-5 !py-2.5",
                                            children: "Book Consultation"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Header.tsx",
                                            lineNumber: 130,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: user?.isAdmin ? '/admin' : '/admin/login',
                                            "aria-label": user?.isAdmin ? 'Admin dashboard' : 'Admin login',
                                            className: "hidden md:flex p-2.5 text-cream/60 hover:text-gold rounded-full hover:bg-gold/10 transition-all duration-300",
                                            children: user?.isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Header.tsx",
                                                lineNumber: 142,
                                                columnNumber: 50
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Header.tsx",
                                                lineNumber: 142,
                                                columnNumber: 92
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Header.tsx",
                                            lineNumber: 137,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                                            className: "lg:hidden p-2.5 text-cream/60 hover:text-gold rounded-full hover:bg-gold/10 transition-all duration-300",
                                            "aria-label": "Toggle menu",
                                            "aria-expanded": mobileMenuOpen,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                mode: "wait",
                                                children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        rotate: -90,
                                                        opacity: 0
                                                    },
                                                    animate: {
                                                        rotate: 0,
                                                        opacity: 1
                                                    },
                                                    exit: {
                                                        rotate: 90,
                                                        opacity: 0
                                                    },
                                                    transition: {
                                                        duration: 0.2
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "w-6 h-6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/Header.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 45
                                                    }, this)
                                                }, "close", false, {
                                                    fileName: "[project]/components/layout/Header.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 41
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        rotate: 90,
                                                        opacity: 0
                                                    },
                                                    animate: {
                                                        rotate: 0,
                                                        opacity: 1
                                                    },
                                                    exit: {
                                                        rotate: -90,
                                                        opacity: 0
                                                    },
                                                    transition: {
                                                        duration: 0.2
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                                        className: "w-6 h-6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/Header.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 45
                                                    }, this)
                                                }, "menu", false, {
                                                    fileName: "[project]/components/layout/Header.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Header.tsx",
                                                lineNumber: 152,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Header.tsx",
                                            lineNumber: 146,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/Header.tsx",
                                    lineNumber: 122,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Header.tsx",
                            lineNumber: 77,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Header.tsx",
                        lineNumber: 76,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                duration: 0.3
                            },
                            className: "lg:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-navy-dark/98 backdrop-blur-xl z-40 flex flex-col overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "container-custom py-6 flex flex-col flex-1 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-6 pb-5 border-b border-gold/10 flex-shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-10 h-10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/images/logo.png",
                                                    alt: "Pivotal Voice",
                                                    fill: true,
                                                    className: "object-contain rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Header.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Header.tsx",
                                                lineNumber: 193,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-display text-lg font-bold text-white",
                                                children: "Pivotal Voice"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Header.tsx",
                                                lineNumber: 201,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/layout/Header.tsx",
                                        lineNumber: 192,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                        className: "space-y-1 flex-1 overflow-y-auto",
                                        children: navigation.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    x: -20
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                transition: {
                                                    duration: 0.3,
                                                    delay: index * 0.06
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: item.href,
                                                    className: `block py-3 px-5 text-lg font-display font-medium rounded-xl transition-all duration-300 ${pathname === item.href ? 'text-gold bg-gold/10' : 'text-cream hover:text-gold hover:bg-gold/5'}`,
                                                    onClick: ()=>setMobileMenuOpen(false),
                                                    children: item.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Header.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 45
                                                }, this)
                                            }, item.name, false, {
                                                fileName: "[project]/components/layout/Header.tsx",
                                                lineNumber: 209,
                                                columnNumber: 41
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Header.tsx",
                                        lineNumber: 207,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            duration: 0.4,
                                            delay: 0.5
                                        },
                                        className: "pt-4 border-t border-gold/10 space-y-3 flex-shrink-0",
                                        children: [
                                            user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-3 p-3 bg-navy-dark/60 border border-gold/15 rounded-xl",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-8 h-8 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm font-bold text-gold",
                                                                            children: user.displayName[0]
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/layout/Header.tsx",
                                                                            lineNumber: 245,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/layout/Header.tsx",
                                                                        lineNumber: 244,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-cream/80 text-sm font-medium truncate max-w-[140px]",
                                                                        children: user.displayName
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/layout/Header.tsx",
                                                                        lineNumber: 247,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/layout/Header.tsx",
                                                                lineNumber: 243,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    logout();
                                                                    setMobileMenuOpen(false);
                                                                },
                                                                className: "flex items-center gap-1 text-sm text-cream/50 hover:text-red-400 transition-colors ml-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/layout/Header.tsx",
                                                                        lineNumber: 253,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    "Sign Out"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/layout/Header.tsx",
                                                                lineNumber: 249,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/layout/Header.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 45
                                                    }, this),
                                                    user.isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/admin",
                                                        onClick: ()=>setMobileMenuOpen(false),
                                                        className: "w-full text-center py-2 bg-gold/10 hover:bg-gold/20 text-gold rounded-lg text-xs font-semibold transition-all border border-gold/20",
                                                        children: "Admin Dashboard"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/Header.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/layout/Header.tsx",
                                                lineNumber: 241,
                                                columnNumber: 41
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>openAuth('login'),
                                                        className: "flex-1 btn-secondary text-sm flex items-center justify-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__["LogIn"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layout/Header.tsx",
                                                                lineNumber: 273,
                                                                columnNumber: 49
                                                            }, this),
                                                            " Sign In"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/layout/Header.tsx",
                                                        lineNumber: 269,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>openAuth('register'),
                                                        className: "flex-1 btn-primary text-sm flex items-center justify-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layout/Header.tsx",
                                                                lineNumber: 279,
                                                                columnNumber: 49
                                                            }, this),
                                                            " Join"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/layout/Header.tsx",
                                                        lineNumber: 275,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/layout/Header.tsx",
                                                lineNumber: 268,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/services#book",
                                                className: "block w-full text-center btn-primary",
                                                onClick: ()=>setMobileMenuOpen(false),
                                                children: "Book Consultation"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Header.tsx",
                                                lineNumber: 283,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/layout/Header.tsx",
                                        lineNumber: 233,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Header.tsx",
                                lineNumber: 190,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Header.tsx",
                            lineNumber: 183,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Header.tsx",
                        lineNumber: 181,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Header.tsx",
                lineNumber: 69,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthModal, {
                isOpen: showAuthModal,
                onClose: ()=>setShowAuthModal(false),
                initialTab: authTab
            }, void 0, false, {
                fileName: "[project]/components/layout/Header.tsx",
                lineNumber: 297,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/lib/crm/newsletter-service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addSubscriber",
    ()=>addSubscriber,
    "dismissPopup",
    ()=>dismissPopup,
    "downloadCSV",
    ()=>downloadCSV,
    "exportSubscribersCSV",
    ()=>exportSubscribersCSV,
    "getCRMStats",
    ()=>getCRMStats,
    "getCampaigns",
    ()=>getCampaigns,
    "getSubscriberByEmail",
    ()=>getSubscriberByEmail,
    "getSubscriberById",
    ()=>getSubscriberById,
    "getSubscribers",
    ()=>getSubscribers,
    "getSubscribersByCity",
    ()=>getSubscribersByCity,
    "getSubscribersByInterest",
    ()=>getSubscribersByInterest,
    "initializeNewsletterData",
    ()=>initializeNewsletterData,
    "isPopupDismissed",
    ()=>isPopupDismissed,
    "resubscribe",
    ()=>resubscribe,
    "unsubscribeById",
    ()=>unsubscribeById,
    "updateSubscriberPreferences",
    ()=>updateSubscriberPreferences
]);
// CRM & Newsletter Service — Supabase-backed
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/client.ts [app-ssr] (ecmascript)");
;
// ─── Helpers ────────────────────────────────────────────────
function mapSubscriber(data) {
    return {
        id: data.id,
        email: data.email,
        name: data.name,
        zipCode: data.zip_code,
        city: data.city,
        interests: data.interests || [],
        preferences: data.preferences || {
            frequency: data.frequency || 'weekly',
            topics: data.interests || [],
            emailNotifications: {
                newTopicsInCategories: true,
                repliesToPosts: true,
                trendingDiscussions: true,
                eventReminders: true,
                weeklyDigest: true,
                monthlyNewsletter: true
            }
        },
        status: data.status,
        signupDate: data.signup_date,
        optInMethod: data.opt_in_method,
        consentTimestamp: data.consent_timestamp,
        unsubscribeToken: data.unsubscribe_token,
        engagementHistory: data.engagement_history || [],
        forumUserId: data.forum_user_id
    };
}
async function getSubscribers() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('subscribers').select('*');
    if (error) {
        console.error('Error fetching subscribers:', error);
        return [];
    }
    return (data || []).map(mapSubscriber);
}
async function addSubscriber(data) {
    const { data: existing } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('subscribers').select('*').eq('email', data.email.toLowerCase()).maybeSingle();
    if (existing) {
        if (existing.status === 'unsubscribed') {
            const { data: updated, error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('subscribers').update({
                status: 'active',
                updated_at: new Date().toISOString()
            }).eq('id', existing.id).select().single();
            if (updateError) return {
                error: updateError.message
            };
            return mapSubscriber(updated);
        }
        return {
            error: 'This email is already subscribed.'
        };
    }
    const { data: newSub, error: insertError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('subscribers').insert([
        {
            email: data.email.toLowerCase(),
            name: data.name,
            zip_code: data.zipCode,
            city: data.city,
            interests: data.interests,
            opt_in_method: data.optInMethod,
            forum_user_id: data.forumUserId,
            frequency: data.frequency || 'weekly',
            status: 'active',
            signup_date: new Date().toISOString(),
            consent_timestamp: new Date().toISOString()
        }
    ]).select().single();
    if (insertError) {
        console.error('Error inserting subscriber:', insertError);
        return {
            error: insertError.message
        };
    }
    return mapSubscriber(newSub);
}
async function getSubscriberById(id) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('subscribers').select('*').eq('id', id).single();
    return data ? mapSubscriber(data) : undefined;
}
async function getSubscriberByEmail(email) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('subscribers').select('*').eq('email', email.toLowerCase()).maybeSingle();
    return data ? mapSubscriber(data) : undefined;
}
async function updateSubscriberPreferences(id, prefs) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('subscribers').update({
        ...prefs,
        updated_at: new Date().toISOString()
    }).eq('id', id);
    if (error) console.error('Error updating preferences:', error);
}
async function unsubscribeById(id) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('subscribers').update({
        status: 'unsubscribed',
        updated_at: new Date().toISOString()
    }).eq('id', id);
    return !error;
}
async function getCRMStats() {
    const { data: subs, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('subscribers').select('*');
    if (error || !subs) return {
        totalSubscribers: 0,
        activeSubscribers: 0,
        unsubscribed: 0,
        avgOpenRate: 0,
        avgClickRate: 0,
        signupsThisWeek: 0,
        signupsThisMonth: 0,
        topInterests: [],
        cityBreakdown: []
    };
    const active = subs.filter((s)=>s.status === 'active');
    const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const monthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    const interestMap = {};
    active.forEach((s)=>(s.interests || []).forEach((i)=>{
            interestMap[i] = (interestMap[i] || 0) + 1;
        }));
    const cityMap = {};
    active.forEach((s)=>{
        const city = s.city || 'Unknown';
        cityMap[city] = (cityMap[city] || 0) + 1;
    });
    return {
        totalSubscribers: subs.length,
        activeSubscribers: active.length,
        unsubscribed: subs.length - active.length,
        avgOpenRate: 42,
        avgClickRate: 18,
        signupsThisWeek: subs.filter((s)=>new Date(s.signup_date) > weekAgo).length,
        signupsThisMonth: subs.filter((s)=>new Date(s.signup_date) > monthAgo).length,
        topInterests: Object.entries(interestMap).map(([interest, count])=>({
                interest,
                count
            })).sort((a, b)=>b.count - a.count).slice(0, 10),
        cityBreakdown: Object.entries(cityMap).map(([city, count])=>({
                city,
                count
            })).sort((a, b)=>b.count - a.count)
    };
}
async function resubscribe(id) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('subscribers').update({
        status: 'active',
        updated_at: new Date().toISOString()
    }).eq('id', id);
    return !error;
}
async function getCampaigns() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('email_campaigns').select('*').order('sent_at', {
        ascending: false
    });
    if (error) {
        console.error('Error fetching campaigns:', error);
        return [];
    }
    return (data || []).map((row)=>({
            id: row.id,
            type: row.type,
            subject: row.subject,
            sentAt: row.sent_at,
            recipientCount: row.recipient_count,
            openCount: row.open_count,
            clickCount: row.click_count,
            unsubscribeCount: row.unsubscribe_count
        }));
}
function exportSubscribersCSV(subscribers) {
    const headers = [
        'Name',
        'Email',
        'City',
        'Zip Code',
        'Status',
        'Signup Date',
        'Interests'
    ];
    const rows = subscribers.map((s)=>[
            s.name,
            s.email,
            s.city || '',
            s.zipCode,
            s.status,
            new Date(s.signupDate).toLocaleDateString(),
            (s.interests || []).join(', ')
        ]);
    return [
        headers,
        ...rows
    ].map((row)=>row.map((cell)=>`"${cell}"`).join(',')).join('\n');
}
function downloadCSV(filename, content) {
    const blob = new Blob([
        content
    ], {
        type: 'text/csv;charset=utf-8;'
    });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
function initializeNewsletterData() {
// No-op for Supabase version - handled by loadData in components
}
async function getSubscribersByCity(city) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('subscribers').select('*').eq('city', city);
    if (error) return [];
    return (data || []).map(mapSubscriber);
}
async function getSubscribersByInterest(interest) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('subscribers').select('*').contains('interests', [
        interest
    ]);
    if (error) return [];
    return (data || []).map(mapSubscriber);
}
function isPopupDismissed() {
    if ("TURBOPACK compile-time truthy", 1) return true;
    //TURBOPACK unreachable
    ;
}
function dismissPopup() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
}),
"[project]/components/layout/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-ssr] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/youtube.js [app-ssr] (ecmascript) <export default as Youtube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-ssr] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2f$newsletter$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/crm/newsletter-service.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const platformLinks = [
    {
        name: 'Calendar',
        href: '/calendar'
    },
    {
        name: 'Debates',
        href: '/debates'
    },
    {
        name: 'Podcast',
        href: '/podcast'
    },
    {
        name: 'Forum',
        href: '/forum'
    },
    {
        name: 'Candidates',
        href: '/candidates'
    }
];
const serviceLinks = [
    {
        name: 'Reputation Management',
        href: '/services#reputation'
    },
    {
        name: 'Crisis Communications',
        href: '/services#crisis'
    },
    {
        name: 'Speechwriting',
        href: '/services#speechwriting'
    },
    {
        name: 'Digital Strategy',
        href: '/services#digital'
    }
];
const socialLinks = [
    {
        name: 'Facebook',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"],
        href: 'https://www.facebook.com/pivotalvoice'
    },
    {
        name: 'YouTube',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"],
        href: 'https://www.youtube.com/@pivotalvoice'
    },
    {
        name: 'Instagram',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"],
        href: 'https://www.instagram.com/pivotal_voice/'
    }
];
function Footer() {
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [subStatus, setSubStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('idle');
    const handleSubscribe = async (e)=>{
        e.preventDefault();
        if (!email) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2f$newsletter$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addSubscriber"])({
                email,
                name: '',
                zipCode: '',
                interests: [],
                optInMethod: 'homepage'
            });
            setSubStatus('ok');
            setEmail('');
        } catch  {
            setSubStatus('err');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative bg-navy-dark border-t border-gold/10 mt-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent"
            }, void 0, false, {
                fileName: "[project]/components/layout/Footer.tsx",
                lineNumber: 49,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-custom py-12 sm:py-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "flex items-center gap-3 group mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-12 h-12",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/images/logo.png",
                                                    alt: "Pivotal Voice",
                                                    fill: true,
                                                    className: "object-contain rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Footer.tsx",
                                                lineNumber: 57,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-display text-lg font-bold text-white leading-tight",
                                                        children: "Pivotal Voice"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/Footer.tsx",
                                                        lineNumber: 66,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-gold/70 font-medium tracking-wider uppercase",
                                                        children: "Ellis County"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/Footer.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/layout/Footer.tsx",
                                                lineNumber: 65,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 56,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-cream/50 text-sm leading-relaxed mb-6",
                                        children: "A non-partisan platform dedicated to creating meaningful dialogue on the issues that shape Ellis County's future."
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 74,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: socialLinks.map((social)=>{
                                            const Icon = social.icon;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: social.href,
                                                "aria-label": social.name,
                                                className: "w-10 h-10 rounded-full bg-navy border border-gold/20 flex items-center justify-center text-cream/50 hover:text-gold hover:border-gold hover:rotate-[360deg] transition-all duration-700",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 41
                                                }, this)
                                            }, social.name, false, {
                                                fileName: "[project]/components/layout/Footer.tsx",
                                                lineNumber: 84,
                                                columnNumber: 37
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 80,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Footer.tsx",
                                lineNumber: 55,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display text-sm font-bold text-gold/80 uppercase tracking-wider mb-5",
                                        children: "Platform"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 99,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3",
                                        children: platformLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: link.href,
                                                    className: "text-cream/60 hover:text-gold transition-colors duration-300 text-sm flex items-center gap-2 group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-0 group-hover:w-2 h-[1px] bg-gold transition-all duration-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layout/Footer.tsx",
                                                            lineNumber: 109,
                                                            columnNumber: 41
                                                        }, this),
                                                        link.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 37
                                                }, this)
                                            }, link.name, false, {
                                                fileName: "[project]/components/layout/Footer.tsx",
                                                lineNumber: 104,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 102,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Footer.tsx",
                                lineNumber: 98,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display text-sm font-bold text-gold/80 uppercase tracking-wider mb-5",
                                        children: "Services"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 119,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3",
                                        children: serviceLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: link.href,
                                                    className: "text-cream/60 hover:text-gold transition-colors duration-300 text-sm flex items-center gap-2 group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-0 group-hover:w-2 h-[1px] bg-gold transition-all duration-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layout/Footer.tsx",
                                                            lineNumber: 129,
                                                            columnNumber: 41
                                                        }, this),
                                                        link.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 37
                                                }, this)
                                            }, link.name, false, {
                                                fileName: "[project]/components/layout/Footer.tsx",
                                                lineNumber: 124,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 122,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Footer.tsx",
                                lineNumber: 118,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display text-sm font-bold text-gold/80 uppercase tracking-wider mb-5",
                                        children: "Stay Connected"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 139,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/contact",
                                                className: "text-cream/60 hover:text-gold transition-colors duration-300 text-sm block",
                                                children: "Contact Us"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Footer.tsx",
                                                lineNumber: 143,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-cream/50 text-sm mb-3",
                                                        children: "Subscribe to our newsletter"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/Footer.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 33
                                                    }, this),
                                                    subStatus === 'ok' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-green-400 text-sm",
                                                        children: "You're subscribed!"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/Footer.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 37
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                        onSubmit: handleSubscribe,
                                                        className: "flex flex-col sm:flex-row gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "email",
                                                                placeholder: "Your email",
                                                                value: email,
                                                                onChange: (e)=>setEmail(e.target.value),
                                                                required: true,
                                                                className: "input text-sm flex-1 min-w-0 !py-2.5 !px-4 sm:!rounded-l-xl sm:!rounded-r-none sm:!border-r-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layout/Footer.tsx",
                                                                lineNumber: 159,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "submit",
                                                                className: "btn-primary text-sm !px-4 !py-2.5 sm:!rounded-l-none sm:!rounded-r-xl whitespace-nowrap w-full sm:w-auto",
                                                                children: "Subscribe"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layout/Footer.tsx",
                                                                lineNumber: 167,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/layout/Footer.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 37
                                                    }, this),
                                                    subStatus === 'err' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-red-400 text-xs mt-1",
                                                        children: "Something went wrong — please try again."
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/Footer.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/layout/Footer.tsx",
                                                lineNumber: 151,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 142,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Footer.tsx",
                                lineNumber: 138,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Footer.tsx",
                        lineNumber: 53,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-8"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Footer.tsx",
                        lineNumber: 184,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-cream/40 text-sm",
                                children: [
                                    "© ",
                                    new Date().getFullYear(),
                                    " Pivotal Voice. All rights reserved."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Footer.tsx",
                                lineNumber: 188,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap justify-center gap-4 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/privacy",
                                        className: "text-cream/40 hover:text-gold transition-colors duration-300",
                                        children: "Privacy Policy"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 192,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/terms",
                                        className: "text-cream/40 hover:text-gold transition-colors duration-300",
                                        children: "Terms of Service"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 195,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-cream/30",
                                        children: "Non-Partisan Platform"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 198,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Footer.tsx",
                                lineNumber: 191,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Footer.tsx",
                        lineNumber: 187,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Footer.tsx",
                lineNumber: 51,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/Footer.tsx",
        lineNumber: 47,
        columnNumber: 9
    }, this);
}
}),
"[project]/lib/types/civic-events.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Civic Events TypeScript interfaces
__turbopack_context__.s([
    "EVENT_TYPE_COLORS",
    ()=>EVENT_TYPE_COLORS,
    "EVENT_TYPE_LABELS",
    ()=>EVENT_TYPE_LABELS
]);
const EVENT_TYPE_LABELS = {
    commissioners_court: 'Commissioners Court',
    city_council: 'City Council',
    school_board: 'School Board',
    planning_zoning: 'Planning & Zoning',
    economic_dev: 'Economic Development',
    party_meeting: 'Party Meeting',
    candidate_forum: 'Candidate Forum',
    town_hall: 'Town Hall',
    voter_registration: 'Voter Registration',
    debate: 'Debate',
    meet_greet: 'Meet & Greet',
    community_event: 'Community Event',
    election_date: 'Election Day'
};
const EVENT_TYPE_COLORS = {
    commissioners_court: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
    city_council: 'bg-green-500/15 text-green-400 border-green-500/30',
    school_board: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
    planning_zoning: 'bg-teal-500/15 text-teal-400 border-teal-500/30',
    economic_dev: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    party_meeting: 'bg-red-500/15 text-red-400 border-red-500/30',
    candidate_forum: 'bg-gold/15 text-gold border-gold/30',
    town_hall: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    voter_registration: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
    debate: 'bg-orange-500/15 text-orange-400 border-orange-500/30',
    meet_greet: 'bg-pink-500/15 text-pink-400 border-pink-500/30',
    community_event: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30',
    election_date: 'bg-red-600/20 text-red-300 border-red-500/40'
};
}),
"[project]/lib/events/civic-events-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Civic Events Seed Data — Ellis County, TX
__turbopack_context__.s([
    "EVENT_SOURCES",
    ()=>EVENT_SOURCES,
    "LOCAL_MEETUP_EVENTS",
    ()=>LOCAL_MEETUP_EVENTS,
    "SEED_CIVIC_EVENTS",
    ()=>SEED_CIVIC_EVENTS
]);
const EVENT_SOURCES = [
    {
        id: 'src-1',
        name: 'Ellis County Official Website',
        url: 'https://www.co.ellis.tx.us',
        type: 'government',
        lastChecked: '2026-04-11T06:00:00Z',
        status: 'active',
        eventsCount: 12
    },
    {
        id: 'src-2',
        name: 'City of Waxahachie',
        url: 'https://www.waxahachie.com',
        type: 'government',
        lastChecked: '2026-04-11T06:00:00Z',
        status: 'active',
        eventsCount: 8
    },
    {
        id: 'src-3',
        name: 'City of Midlothian',
        url: 'https://www.midlothian.tx.us',
        type: 'government',
        lastChecked: '2026-04-11T06:00:00Z',
        status: 'active',
        eventsCount: 6
    },
    {
        id: 'src-4',
        name: 'City of Red Oak',
        url: 'https://www.redoaktx.org',
        type: 'government',
        lastChecked: '2026-04-11T06:00:00Z',
        status: 'active',
        eventsCount: 4
    },
    {
        id: 'src-5',
        name: 'City of Ennis',
        url: 'https://www.ennis-texas.com',
        type: 'government',
        lastChecked: '2026-04-11T06:00:00Z',
        status: 'active',
        eventsCount: 4
    },
    {
        id: 'src-6',
        name: 'Waxahachie ISD',
        url: 'https://www.wisd.org',
        type: 'education',
        lastChecked: '2026-04-11T06:00:00Z',
        status: 'active',
        eventsCount: 4
    },
    {
        id: 'src-7',
        name: 'Midlothian ISD',
        url: 'https://www.misd.gs',
        type: 'education',
        lastChecked: '2026-04-11T06:00:00Z',
        status: 'active',
        eventsCount: 3
    },
    {
        id: 'src-8',
        name: 'Red Oak ISD',
        url: 'https://www.redoakisd.org',
        type: 'education',
        lastChecked: '2026-04-11T06:00:00Z',
        status: 'active',
        eventsCount: 3
    },
    {
        id: 'src-9',
        name: 'Ennis ISD',
        url: 'https://www.ennisisd.org',
        type: 'education',
        lastChecked: '2026-04-11T06:00:00Z',
        status: 'active',
        eventsCount: 2
    },
    {
        id: 'src-10',
        name: 'Texas Secretary of State',
        url: 'https://www.sos.texas.gov/elections',
        type: 'state',
        lastChecked: '2026-04-11T06:00:00Z',
        status: 'active',
        eventsCount: 5
    },
    {
        id: 'src-11',
        name: 'Ellis County Republican Party',
        url: 'https://www.elliscountygop.org',
        type: 'party',
        lastChecked: '2026-04-11T18:00:00Z',
        status: 'active',
        eventsCount: 3
    },
    {
        id: 'src-12',
        name: 'Ellis County Democratic Party',
        url: 'https://www.elliscountydemocrats.org',
        type: 'party',
        lastChecked: '2026-04-11T18:00:00Z',
        status: 'active',
        eventsCount: 3
    },
    {
        id: 'src-13',
        name: 'Ballotpedia',
        url: 'https://ballotpedia.org/Ellis_County,_Texas',
        type: 'state',
        lastChecked: '2026-04-11T06:00:00Z',
        status: 'active',
        eventsCount: 2
    },
    {
        id: 'src-14',
        name: 'City of Ferris',
        url: 'https://www.ferristexas.org',
        type: 'government',
        lastChecked: '2026-04-10T06:00:00Z',
        status: 'stale',
        eventsCount: 2
    },
    {
        id: 'src-15',
        name: 'City of Palmer',
        url: 'https://www.palmertexas.com',
        type: 'government',
        lastChecked: '2026-04-09T06:00:00Z',
        status: 'stale',
        eventsCount: 1
    }
];
const SEED_CIVIC_EVENTS = [
    // ─── ELECTION DATES ──────────────────────────────────────────
    {
        id: 'ce-elect-1',
        title: '2026 Texas Primary Election Day',
        description: 'Texas Republican and Democratic Primary Election. Ellis County voters will choose party nominees for US Senate, US House, Texas Legislature, and local county offices including County Judge, District Attorney, and Commissioners. Polls open 7am–7pm.',
        date: '2026-05-05',
        startTime: '07:00',
        endTime: '19:00',
        timezone: 'America/Chicago',
        location: {
            name: 'Ellis County Election Precincts',
            address: 'Various Locations',
            city: 'Ellis County',
            state: 'TX',
            zip: '75165',
            mapUrl: 'https://www.co.ellis.tx.us/elections'
        },
        eventType: 'election_date',
        governingBody: 'Ellis County Elections Administration',
        participationInstructions: 'Bring valid Texas photo ID. Find your polling location at VoterPortal.SOS.State.TX.US. Early voting runs April 27 – May 1.',
        agendaUrl: 'https://www.sos.texas.gov/elections',
        rsvpCount: 0,
        rsvpUsers: [],
        isFeatured: true,
        isRecurring: false,
        tags: [
            'election',
            'primary',
            '2026',
            'texas',
            'voting'
        ],
        sourceUrl: 'https://www.sos.texas.gov/elections',
        sourceName: 'Texas Secretary of State',
        lastVerified: '2026-04-11T06:00:00Z',
        createdAt: '2026-04-01T10:00:00Z',
        updatedAt: '2026-04-11T06:00:00Z',
        isUserSubmitted: false,
        approvalStatus: 'approved'
    },
    {
        id: 'ce-elect-2',
        title: '2026 Texas Primary Runoff Election',
        description: 'Texas Primary Runoff Election for any races where no candidate received more than 50% of the primary vote. Covers federal, state, and county offices. Polls open 7am–7pm.',
        date: '2026-07-14',
        startTime: '07:00',
        endTime: '19:00',
        timezone: 'America/Chicago',
        location: {
            name: 'Ellis County Election Precincts',
            address: 'Various Locations',
            city: 'Ellis County',
            state: 'TX',
            zip: '75165',
            mapUrl: 'https://www.co.ellis.tx.us/elections'
        },
        eventType: 'election_date',
        governingBody: 'Ellis County Elections Administration',
        participationInstructions: 'Must have voted in the primary to participate in that party\'s runoff. Bring valid Texas photo ID.',
        agendaUrl: 'https://www.sos.texas.gov/elections',
        rsvpCount: 0,
        rsvpUsers: [],
        isFeatured: true,
        isRecurring: false,
        tags: [
            'election',
            'runoff',
            '2026',
            'texas',
            'voting'
        ],
        sourceUrl: 'https://www.sos.texas.gov/elections',
        sourceName: 'Texas Secretary of State',
        lastVerified: '2026-04-11T06:00:00Z',
        createdAt: '2026-04-01T10:00:00Z',
        updatedAt: '2026-04-11T06:00:00Z',
        isUserSubmitted: false,
        approvalStatus: 'approved'
    },
    {
        id: 'ce-elect-3',
        title: '2026 Texas General Election Day',
        description: 'Texas General Election covering US Senate seat, all US House seats, Texas Governor (for any vacancy), state legislature, county judge, commissioners, district attorney, sheriff, and judges. Polls open 7am–7pm. Early voting runs October 19–30.',
        date: '2026-11-03',
        startTime: '07:00',
        endTime: '19:00',
        timezone: 'America/Chicago',
        location: {
            name: 'Ellis County Election Precincts',
            address: 'Various Locations',
            city: 'Ellis County',
            state: 'TX',
            zip: '75165',
            mapUrl: 'https://www.co.ellis.tx.us/elections'
        },
        eventType: 'election_date',
        governingBody: 'Ellis County Elections Administration',
        participationInstructions: 'Voter registration deadline is October 5. Bring valid Texas photo ID. Find your polling place at VoterPortal.SOS.State.TX.US.',
        agendaUrl: 'https://www.sos.texas.gov/elections',
        rsvpCount: 0,
        rsvpUsers: [],
        isFeatured: true,
        isRecurring: false,
        tags: [
            'election',
            'general-election',
            '2026',
            'texas',
            'voting',
            'november'
        ],
        sourceUrl: 'https://www.sos.texas.gov/elections',
        sourceName: 'Texas Secretary of State',
        lastVerified: '2026-04-11T06:00:00Z',
        createdAt: '2026-04-01T10:00:00Z',
        updatedAt: '2026-04-11T06:00:00Z',
        isUserSubmitted: false,
        approvalStatus: 'approved'
    },
    {
        id: 'ce-elect-4',
        title: 'Election Early Voting — May Primary',
        description: 'Early voting period for the May 2026 Texas Primary Election. Vote at any Ellis County early voting location during this window. No need to visit your assigned precinct.',
        date: '2026-04-27',
        startTime: '07:00',
        endTime: '19:00',
        timezone: 'America/Chicago',
        location: {
            name: 'Ellis County Early Voting Locations',
            address: 'Various — See sos.texas.gov',
            city: 'Ellis County',
            state: 'TX',
            zip: '75165',
            mapUrl: 'https://www.co.ellis.tx.us/elections'
        },
        eventType: 'election_date',
        governingBody: 'Ellis County Elections Administration',
        participationInstructions: 'Early voting runs April 27 – May 1. Any registered Ellis County voter may vote at any early voting site.',
        rsvpCount: 0,
        rsvpUsers: [],
        isFeatured: false,
        isRecurring: false,
        tags: [
            'early-voting',
            'primary',
            '2026',
            'voting'
        ],
        sourceUrl: 'https://www.sos.texas.gov/elections',
        sourceName: 'Texas Secretary of State',
        lastVerified: '2026-04-11T06:00:00Z',
        createdAt: '2026-04-01T10:00:00Z',
        updatedAt: '2026-04-11T06:00:00Z',
        isUserSubmitted: false,
        approvalStatus: 'approved'
    },
    // ─── Debates & Candidate Forums ───────────────────────────────
    {
        id: 'ce-debate-1',
        title: 'Candidate Debate — Ellis County Judge',
        description: 'Live candidate debate between the Republican and Democratic nominees for Ellis County Judge. Three-minute opening statements, issue-based questions, and audience Q&A. Hosted by Pivotal Voice in partnership with the Ellis County Bar Association.',
        date: '2026-09-22',
        startTime: '18:30',
        endTime: '20:30',
        timezone: 'America/Chicago',
        location: {
            name: 'Waxahachie Civic Center',
            address: '2200 Civic Center Ln',
            city: 'Waxahachie',
            state: 'TX',
            zip: '75165',
            mapUrl: 'https://maps.google.com/?q=2200+Civic+Center+Ln+Waxahachie+TX'
        },
        eventType: 'debate',
        governingBody: 'Pivotal Voice / Ellis County Bar Association',
        participationInstructions: 'Submit questions at pivotalvoice.com/events or on 3x5 cards at the venue. Doors open at 6:00 PM. Free admission.',
        zoomUrl: 'https://zoom.us/j/elliscountyjudgedebate',
        rsvpCount: 52,
        rsvpUsers: [],
        isFeatured: true,
        isRecurring: false,
        tags: [
            'debate',
            'county-judge',
            'waxahachie',
            'general-election'
        ],
        sourceUrl: 'https://pivotalvoice.com/events',
        sourceName: 'Pivotal Voice',
        lastVerified: '2026-04-11T06:00:00Z',
        createdAt: '2026-04-01T10:00:00Z',
        updatedAt: '2026-04-11T06:00:00Z',
        isUserSubmitted: false,
        approvalStatus: 'approved'
    },
    {
        id: 'ce-debate-2',
        title: 'Candidate Debate — Texas State Rep. District 10',
        description: 'Head-to-head debate between candidates for Texas House of Representatives District 10. Topics include water policy, school funding, and property tax reform. Moderated by local journalists.',
        date: '2026-10-06',
        startTime: '19:00',
        endTime: '21:00',
        timezone: 'America/Chicago',
        location: {
            name: 'Midlothian Conference Center',
            address: '1 Community Circle Dr',
            city: 'Midlothian',
            state: 'TX',
            zip: '76065',
            mapUrl: 'https://maps.google.com/?q=1+Community+Circle+Dr+Midlothian+TX'
        },
        eventType: 'debate',
        governingBody: 'Pivotal Voice / League of Women Voters',
        participationInstructions: 'Open to all residents of HD-10. Submit questions online by October 4.',
        rsvpCount: 38,
        rsvpUsers: [],
        isFeatured: true,
        isRecurring: false,
        tags: [
            'debate',
            'state-rep',
            'district-10',
            'midlothian'
        ],
        sourceUrl: 'https://pivotalvoice.com/events',
        sourceName: 'Pivotal Voice',
        lastVerified: '2026-04-11T06:00:00Z',
        createdAt: '2026-04-01T10:00:00Z',
        updatedAt: '2026-04-11T06:00:00Z',
        isUserSubmitted: false,
        approvalStatus: 'approved'
    },
    {
        id: 'ce-forum-1',
        title: 'Candidate Forum — Waxahachie City Council District 3',
        description: 'Moderated candidate forum for the District 3 city council race. Three candidates will present their platforms and answer questions from voters and the moderating panel.',
        date: '2026-04-28',
        startTime: '18:30',
        endTime: '20:30',
        timezone: 'America/Chicago',
        location: {
            name: 'Waxahachie Civic Center',
            address: '2200 Civic Center Ln',
            city: 'Waxahachie',
            state: 'TX',
            zip: '75165',
            mapUrl: 'https://maps.google.com/?q=2200+Civic+Center+Ln+Waxahachie+TX'
        },
        eventType: 'candidate_forum',
        governingBody: 'Pivotal Voice / League of Women Voters',
        participationInstructions: 'Submit questions in advance at pivotalvoice.com or write them on cards at the event. Doors open at 6:00 PM.',
        rsvpCount: 45,
        rsvpUsers: [],
        isFeatured: true,
        isRecurring: false,
        tags: [
            'city-council',
            'candidate-forum',
            'waxahachie',
            'district-3'
        ],
        sourceUrl: 'https://pivotalvoice.com/events',
        sourceName: 'Pivotal Voice',
        lastVerified: '2026-04-11T06:00:00Z',
        createdAt: '2026-04-01T10:00:00Z',
        updatedAt: '2026-04-11T06:00:00Z',
        isUserSubmitted: false,
        approvalStatus: 'approved'
    },
    {
        id: 'ce-forum-2',
        title: 'Meet & Greet — State Rep. District 10 Candidates',
        description: 'Informal meet and greet with candidates running for Texas State Representative District 10. Light refreshments provided. Great opportunity to ask direct questions.',
        date: '2026-04-22',
        startTime: '14:00',
        endTime: '16:00',
        timezone: 'America/Chicago',
        location: {
            name: 'Midlothian Community Park Pavilion',
            address: '4000 Community Center Dr',
            city: 'Midlothian',
            state: 'TX',
            zip: '76065',
            mapUrl: 'https://maps.google.com/?q=4000+Community+Center+Dr+Midlothian+TX'
        },
        eventType: 'meet_greet',
        participationInstructions: 'Open to all community members. Family-friendly event.',
        rsvpCount: 28,
        rsvpUsers: [],
        isFeatured: true,
        isRecurring: false,
        tags: [
            'state-rep',
            'meet-greet',
            'midlothian',
            'district-10'
        ],
        sourceUrl: 'https://www.elliscountygop.org',
        sourceName: 'Ellis County Republican Party',
        lastVerified: '2026-04-11T18:00:00Z',
        createdAt: '2026-04-01T10:00:00Z',
        updatedAt: '2026-04-11T06:00:00Z',
        isUserSubmitted: false,
        approvalStatus: 'approved'
    },
    // ─── Town Halls ──────────────────────────────────────────────
    {
        id: 'ce-town-1',
        title: 'Town Hall — Property Tax Reform',
        description: 'Town hall hosted by County Commissioner Precinct 2 on property tax reform proposals and the impact on Ellis County homeowners. Public Q&A session included.',
        date: '2026-04-23',
        startTime: '18:00',
        endTime: '20:00',
        timezone: 'America/Chicago',
        location: {
            name: 'Red Oak Community Center',
            address: '100 Community Dr',
            city: 'Red Oak',
            state: 'TX',
            zip: '75154',
            mapUrl: 'https://maps.google.com/?q=Red+Oak+Community+Center+TX'
        },
        eventType: 'town_hall',
        governingBody: 'Ellis County Commissioner Precinct 2',
        zoomUrl: 'https://zoom.us/j/property-tax-townhall',
        participationInstructions: 'In-person and virtual attendance options. Submit questions online at co.ellis.tx.us or ask during the Q&A period.',
        rsvpCount: 38,
        rsvpUsers: [],
        isFeatured: true,
        isRecurring: false,
        tags: [
            'property-tax',
            'town-hall',
            'red-oak',
            'budget'
        ],
        sourceUrl: 'https://www.co.ellis.tx.us',
        sourceName: 'Ellis County Official Website',
        lastVerified: '2026-04-11T06:00:00Z',
        createdAt: '2026-04-01T10:00:00Z',
        updatedAt: '2026-04-11T06:00:00Z',
        isUserSubmitted: false,
        approvalStatus: 'approved'
    },
    {
        id: 'ce-town-2',
        title: 'Town Hall — I-35E Expansion Impact on Ellis County',
        description: 'Public town hall on TxDOT\'s proposed I-35E expansion and its impact on Midlothian and Red Oak neighborhoods. TXDOT representatives will present plans and answer resident questions.',
        date: '2026-05-12',
        startTime: '18:30',
        endTime: '20:30',
        timezone: 'America/Chicago',
        location: {
            name: 'Midlothian Conference Center',
            address: '1 Community Circle Dr',
            city: 'Midlothian',
            state: 'TX',
            zip: '76065',
            mapUrl: 'https://maps.google.com/?q=1+Community+Circle+Dr+Midlothian+TX'
        },
        eventType: 'town_hall',
        governingBody: 'TxDOT / Ellis County Commissioners',
        participationInstructions: 'Public comment period open. Written comments also accepted at txdot.gov. All residents welcome.',
        rsvpCount: 61,
        rsvpUsers: [],
        isFeatured: true,
        isRecurring: false,
        tags: [
            'i-35e',
            'infrastructure',
            'txdot',
            'midlothian',
            'town-hall'
        ],
        sourceUrl: 'https://www.co.ellis.tx.us',
        sourceName: 'Ellis County Official Website',
        lastVerified: '2026-04-11T06:00:00Z',
        createdAt: '2026-04-01T10:00:00Z',
        updatedAt: '2026-04-11T06:00:00Z',
        isUserSubmitted: false,
        approvalStatus: 'approved'
    },
    {
        id: 'ce-town-3',
        title: 'Town Hall — Water Supply & Drought Planning',
        description: 'Ellis County and area city managers will present the county\'s 10-year water supply plan. Includes drought contingency measures, reservoir capacity, and impact on residential development.',
        date: '2026-06-09',
        startTime: '18:00',
        endTime: '20:00',
        timezone: 'America/Chicago',
        location: {
            name: 'Waxahachie Civic Center',
            address: '2200 Civic Center Ln',
            city: 'Waxahachie',
            state: 'TX',
            zip: '75165',
            mapUrl: 'https://maps.google.com/?q=2200+Civic+Center+Ln+Waxahachie+TX'
        },
        eventType: 'town_hall',
        governingBody: 'Ellis County Water District',
        zoomUrl: 'https://zoom.us/j/elliscountywaterhall',
        participationInstructions: 'Open to all county residents. Sign up to speak at the public comment period at co.ellis.tx.us.',
        rsvpCount: 44,
        rsvpUsers: [],
        isFeatured: false,
        isRecurring: false,
        tags: [
            'water',
            'drought',
            'planning',
            'waxahachie',
            'town-hall'
        ],
        sourceUrl: 'https://www.co.ellis.tx.us',
        sourceName: 'Ellis County Official Website',
        lastVerified: '2026-04-11T06:00:00Z',
        createdAt: '2026-04-01T10:00:00Z',
        updatedAt: '2026-04-11T06:00:00Z',
        isUserSubmitted: false,
        approvalStatus: 'approved'
    },
    // ─── Ellis County Commissioners Court ────────────────────────
    {
        id: 'ce-1',
        title: 'Ellis County Commissioners Court — Regular Session',
        description: 'Regular session of the Ellis County Commissioners Court. Agenda items include county budget amendments, road maintenance contracts, and EMS service agreements.',
        date: '2026-04-13',
        startTime: '10:00',
        endTime: '12:00',
        timezone: 'America/Chicago',
        location: {
            name: 'Ellis County Courthouse',
            address: '101 W Main St',
            city: 'Waxahachie',
            state: 'TX',
            zip: '75165',
            mapUrl: 'https://maps.google.com/?q=101+W+Main+St+Waxahachie+TX'
        },
        eventType: 'commissioners_court',
        governingBody: 'Ellis County Commissioners Court',
        agendaUrl: 'https://www.co.ellis.tx.us/AgendaCenter',
        minutesUrl: 'https://www.co.ellis.tx.us/Archive',
        participationInstructions: 'Public comment period at the beginning of each session. Sign up at the clerk\'s desk before the meeting begins. Each speaker gets 3 minutes.',
        rsvpCount: 12,
        rsvpUsers: [],
        isFeatured: true,
        isRecurring: true,
        recurringSchedule: '2nd and 4th Monday',
        tags: [
            'budget',
            'roads',
            'ems'
        ],
        sourceUrl: 'https://www.co.ellis.tx.us',
        sourceName: 'Ellis County Official Website',
        lastVerified: '2026-04-11T06:00:00Z',
        createdAt: '2026-01-15T10:00:00Z',
        updatedAt: '2026-04-11T14:00:00Z',
        isUserSubmitted: false,
        approvalStatus: 'approved'
    },
    {
        id: 'ce-2',
        title: 'Ellis County Commissioners Court — Budget Workshop',
        description: 'Special budget workshop to review proposed FY2027 budget priorities, including infrastructure spending, law enforcement staffing, and public health initiatives.',
        date: '2026-04-27',
        startTime: '09:00',
        endTime: '12:00',
        timezone: 'America/Chicago',
        location: {
            name: 'Ellis County Courthouse',
            address: '101 W Main St',
            city: 'Waxahachie',
            state: 'TX',
            zip: '75165',
            mapUrl: ' https://maps.google.com/?q=101+W+Main+St+Waxahachie+TX'
        },
        eventType: 'commissioners_court',
        governingBody: 'Ellis County Commissioners Court',
        agendaUrl: 'https://www.co.ellis.tx.us/AgendaCenter',
        participationInstructions: 'This is a workshop session. Public comment is not typically taken during workshops, but observers are welcome.',
        rsvpCount: 8,
        rsvpUsers: [],
        isFeatured: false,
        isRecurring: false,
        tags: [
            'budget',
            'infrastructure',
            'public-health'
        ],
        sourceUrl: 'https://www.co.ellis.tx.us',
        sourceName: 'Ellis County Official Website',
        lastVerified: '2026-04-11T06:00:00Z',
        createdAt: '2026-04-01T10:00:00Z',
        updatedAt: '2026-04-11T14:00:00Z',
        isUserSubmitted: false,
        approvalStatus: 'approved'
    },
    {
        id: 'ce-cc-may',
        title: 'Ellis County Commissioners Court — Regular Session',
        description: 'Regular bi-monthly session. Agenda includes May election logistics, county road resurfacing contracts Precincts 2 & 3, and EMS quarterly report.',
        date: '2026-05-11',
        startTime: '10:00',
        endTime: '12:00',
        timezone: 'America/Chicago',
        location: {
            name: 'Ellis County Courthouse',
            address: '101 W Main St',
            city: 'Waxahachie',
            state: 'TX',
            zip: '75165',
            mapUrl: 'https://maps.google.com/?q=101+W+Main+St+Waxahachie+TX'
        },
        eventType: 'commissioners_court',
        governingBody: 'Ellis County Commissioners Court',
        agendaUrl: 'https://www.co.ellis.tx.us/AgendaCenter',
        participationInstructions: 'Public comment at start of session. Sign up at clerk\'s desk before 10:00 AM.',
        rsvpCount: 9,
        rsvpUsers: [],
        isFeatured: false,
        isRecurring: true,
        recurringSchedule: '2nd and 4th Monday',
        tags: [
            'budget',
            'roads',
            'elections'
        ],
        sourceUrl: 'https://www.co.ellis.tx.us',
        sourceName: 'Ellis County Official Website',
        lastVerified: '2026-04-11T06:00:00Z',
        createdAt: '2026-04-01T10:00:00Z',
        updatedAt: '2026-04-11T06:00:00Z',
        isUserSubmitted: false,
        approvalStatus: 'approved'
    },
    // ─── City Council Meetings ───────────────────────────────────
    {
        id: 'ce-3',
        title: 'Waxahachie City Council — Regular Meeting',
        description: 'Regular meeting of the Waxahachie City Council. Key items: downtown parking ordinance update, utility rate review, and parks master plan presentation.',
        date: '2026-04-20',
        startTime: '19:00',
        endTime: '21:00',
        timezone: 'America/Chicago',
        location: {
            name: 'Waxahachie City Hall',
            address: '401 S Rogers St',
            city: 'Waxahachie',
            state: 'TX',
            zip: '75165',
            mapUrl: 'https://maps.google.com/?q=401+S+Rogers+St+Waxahachie+TX'
        },
        eventType: 'city_council',
        governingBody: 'Waxahachie City Council',
        agendaUrl: 'https://www.waxahachie.com/AgendaCenter',
        zoomUrl: 'https://zoom.us/j/waxahachie-council',
        participationInstructions: 'Public comment at the beginning. Sign up online by 4:00 PM on meeting day or in person at City Hall. Virtual attendance available via Zoom.',
        rsvpCount: 18,
        rsvpUsers: [],
        isFeatured: false,
        isRecurring: true,
        recurringSchedule: '1st and 3rd Monday',
        tags: [
            'parking',
            'utilities',
            'parks'
        ],
        sourceUrl: 'https://www.waxahachie.com',
        sourceName: 'City of Waxahachie',
        lastVerified: '2026-04-11T06:00:00Z',
        createdAt: '2026-01-20T10:00:00Z',
        updatedAt: '2026-04-11T14:00:00Z',
        isUserSubmitted: false,
        approvalStatus: 'approved'
    },
    {
        id: 'ce-4',
        title: 'Midlothian City Council — Regular Meeting',
        description: 'Regular session. Agenda includes zoning variance requests for Heritage Crossing development, water infrastructure bond discussion, and fire department staffing.',
        date: '2026-04-14',
        startTime: '18:30',
        endTime: '20:30',
        timezone: 'America/Chicago',
        location: {
            name: 'Midlothian City Hall',
            address: '104 W Ave E',
            city: 'Midlothian',
            state: 'TX',
            zip: '76065',
            mapUrl: 'https://maps.google.com/?q=104+W+Ave+E+Midlothian+TX'
        },
        eventType: 'city_council',
        governingBody: 'Midlothian City Council',
        agendaUrl: 'https://www.midlothian.tx.us/AgendaCenter',
        participationInstructions: 'Citizens may address the Council during the public hearing portion. Register at the podium before the meeting.',
        rsvpCount: 14,
        rsvpUsers: [],
        isFeatured: false,
        isRecurring: true,
        recurringSchedule: '2nd and 4th Tuesday',
        tags: [
            'zoning',
            'water',
            'fire-department'
        ],
        sourceUrl: 'https://www.midlothian.tx.us',
        sourceName: 'City of Midlothian',
        lastVerified: '2026-04-11T06:00:00Z',
        createdAt: '2026-01-20T10:00:00Z',
        updatedAt: '2026-04-11T14:00:00Z',
        isUserSubmitted: false,
        approvalStatus: 'approved'
    },
    {
        id: 'ce-5',
        title: 'Red Oak City Council — Regular Meeting',
        description: 'Regular meeting. Agenda: comprehensive plan update, annexation discussion for Ovilla Road corridor, and police department capital improvements.',
        date: '2026-04-23',
        startTime: '19:00',
        endTime: '21:00',
        timezone: 'America/Chicago',
        location: {
            name: 'Red Oak Municipal Center',
            address: '200 Lakeview Pkwy',
            city: 'Red Oak',
            state: 'TX',
            zip: '75154',
            mapUrl: 'https://maps.google.com/?q=200+Lakeview+Pkwy+Red+Oak+TX'
        },
        eventType: 'city_council',
        governingBody: 'Red Oak City Council',
        agendaUrl: 'https://www.redoaktx.org/AgendaCenter',
        participationInstructions: 'Public comment cards available at the entrance. Submit before the meeting starts.',
        rsvpCount: 9,
        rsvpUsers: [],
        isFeatured: false,
        isRecurring: true,
        recurringSchedule: '2nd and 4th Thursday',
        tags: [
            'comprehensive-plan',
            'annexation',
            'police'
        ],
        sourceUrl: 'https://www.redoaktx.org',
        sourceName: 'City of Red Oak',
        lastVerified: '2026-04-11T06:00:00Z',
        createdAt: '2026-01-20T10:00:00Z',
        updatedAt: '2026-04-11T14:00:00Z',
        isUserSubmitted: false,
        approvalStatus: 'approved'
    },
    {
        id: 'ce-6',
        title: 'Ennis City Council — Regular Meeting',
        description: 'Regular session covering downtown revitalization grants, wastewater treatment plant expansion, and Bluebonnet Trail festival planning.',
        date: '2026-04-21',
        startTime: '18:00',
        endTime: '20:00',
        timezone: 'America/Chicago',
        location: {
            name: 'Ennis City Hall',
            address: '115 W Brown St',
            city: 'Ennis',
            state: 'TX',
            zip: '75119',
            mapUrl: 'https://maps.google.com/?q=115+W+Brown+St+Ennis+TX'
        },
        eventType: 'city_council',
        governingBody: 'Ennis City Council',
        agendaUrl: 'https://www.ennis-texas.com/agendas',
        participationInstructions: 'Public hearing comments welcome. Sign up with the city secretary before the meeting.',
        rsvpCount: 7,
        rsvpUsers: [],
        isFeatured: false,
        isRecurring: true,
        recurringSchedule: '1st and 3rd Tuesday',
        tags: [
            'downtown',
            'wastewater',
            'festival'
        ],
        sourceUrl: 'https://www.ennis-texas.com',
        sourceName: 'City of Ennis',
        lastVerified: '2026-04-11T06:00:00Z',
        createdAt: '2026-01-20T10:00:00Z',
        updatedAt: '2026-04-11T14:00:00Z',
        isUserSubmitted: false,
        approvalStatus: 'approved'
    },
    {
        id: 'ce-7',
        title: 'Ferris City Council — Regular Meeting',
        description: 'Agenda includes I-45 corridor development, water system upgrades, and animal control ordinance revisions.',
        date: '2026-04-20',
        startTime: '19:00',
        endTime: '20:30',
        timezone: 'America/Chicago',
        location: {
            name: 'Ferris City Hall',
            address: '110 S Central St',
            city: 'Ferris',
            state: 'TX',
            zip: '75125',
            mapUrl: 'https://maps.google.com/?q=110+S+Central+St+Ferris+TX'
        },
        eventType: 'city_council',
        governingBody: 'Ferris City Council',
        participationInstructions: 'Public comments at start of meeting.',
        rsvpCount: 4,
        rsvpUsers: [],
        isFeatured: false,
        isRecurring: true,
        recurringSchedule: '3rd Monday',
        tags: [
            'i-45',
            'water',
            'ordinances'
        ],
        sourceUrl: 'https://www.ferristexas.org',
        sourceName: 'City of Ferris',
        lastVerified: '2026-04-11T06:00:00Z',
        createdAt: '2026-01-20T10:00:00Z',
        updatedAt: '2026-04-11T14:00:00Z',
        isUserSubmitted: false,
        approvalStatus: 'approved'
    },
    {
        id: 'ce-8',
        title: 'Palmer City Council — Regular Meeting',
        description: 'Regular meeting addressing road maintenance, volunteer fire department budget, and community center improvements.',
        date: '2026-04-16',
        startTime: '18:30',
        endTime: '20:00',
        timezone: 'America/Chicago',
        location: {
            name: 'Palmer City Hall',
            address: '302 Shelton St',
            city: 'Palmer',
            state: 'TX',
            zip: '75152',
            mapUrl: 'https://maps.google.com/?q=302+Shelton+St+Palmer+TX'
        },
        eventType: 'city_council',
        governingBody: 'Palmer City Council',
        participationInstructions: 'Open public comment period.',
        rsvpCount: 3,
        rsvpUsers: [],
        isFeatured: false,
        isRecurring: true,
        recurringSchedule: '3rd Thursday',
        tags: [
            'roads',
            'fire-department',
            'community-center'
        ],
        sourceUrl: 'https://www.palmertexas.com',
        sourceName: 'City of Palmer',
        lastVerified: '2026-04-11T06:00:00Z',
        createdAt: '2026-01-20T10:00:00Z',
        updatedAt: '2026-04-11T14:00:00Z',
        isUserSubmitted: false,
        approvalStatus: 'approved'
    },
    {
        id: 'ce-9',
        title: 'Italy City Council — Regular Meeting',
        description: 'Agenda covers street repair program, utility billing updates, and economic development incentive review.',
        date: '2026-04-20',
        startTime: '18:00',
        endTime: '19:30',
        timezone: 'America/Chicago',
        location: {
            name: 'Italy City Hall',
            address: '100 N Ward St',
            city: 'Italy',
            state: 'TX',
            zip: '76651',
            mapUrl: 'https://maps.google.com/?q=100+N+Ward+St+Italy+TX'
        },
        eventType: 'city_council',
        governingBody: 'Italy City Council',
        rsvpCount: 2,
        rsvpUsers: [],
        isFeatured: false,
        isRecurring: true,
        recurringSchedule: '3rd Monday',
        tags: [
            'streets',
            'utilities',
            'economic-dev'
        ],
        sourceUrl: 'https://www.italytx.org',
        sourceName: 'City of Italy',
        lastVerified: '2026-04-11T06:00:00Z',
        createdAt: '2026-01-20T10:00:00Z',
        updatedAt: '2026-04-11T14:00:00Z',
        isUserSubmitted: false,
        approvalStatus: 'approved'
    },
    {
        id: 'ce-10',
        title: 'Ovilla City Council — Regular Meeting',
        description: 'Topics include rural preservation ordinance discussion, volunteer opportunities, and park trail expansion.',
        date: '2026-04-21',
        startTime: '19:00',
        endTime: '20:30',
        timezone: 'America/Chicago',
        location: {
            name: 'Ovilla City Hall',
            address: '105 N Cockrell Hill Rd',
            city: 'Ovilla',
            state: 'TX',
            zip: '75154',
            mapUrl: 'https://maps.google.com/?q=105+N+Cockrell+Hill+Rd+Ovilla+TX'
        },
        eventType: 'city_council',
        governingBody: 'Ovilla City Council',
        rsvpCount: 5,
        rsvpUsers: [],
        isFeatured: false,
        isRecurring: true,
        recurringSchedule: '3rd Tuesday',
        tags: [
            'rural-preservation',
            'parks',
            'volunteer'
        ],
        sourceUrl: 'https://www.ovillatx.gov',
        sourceName: 'City of Ovilla',
        lastVerified: '2026-04-11T06:00:00Z',
        createdAt: '2026-01-20T10:00:00Z',
        updatedAt: '2026-04-11T14:00:00Z',
        isUserSubmitted: false,
        approvalStatus: 'approved'
    },
    // ─── School Board Meetings ───────────────────────────────────
    {
        id: 'ce-11',
        title: 'Waxahachie ISD Board — Regular Meeting',
        description: 'Board meeting: teacher hiring update, bond proposal for new elementary school, and STAAR score analysis. Public comment at 6:30 PM.',
        date: '2026-04-20',
        startTime: '18:30',
        endTime: '21:00',
        timezone: 'America/Chicago',
        location: {
            name: 'WISD Administration Building',
            address: '411 N Gibson St',
            city: 'Waxahachie',
            state: 'TX',
            zip: '75165',
            mapUrl: 'https://maps.google.com/?q=411+N+Gibson+St+Waxahachie+TX'
        },
        eventType: 'school_board',
        governingBody: 'Waxahachie ISD Board of Trustees',
        agendaUrl: 'https://www.wisd.org/Page/BoardAgendas',
        zoomUrl: 'https://zoom.us/j/wisd-board',
        participationInstructions: 'Public comment period at 6:30 PM. Register online by noon on meeting day or in person. Each speaker gets 3 minutes.',
        rsvpCount: 22,
        rsvpUsers: [],
        isFeatured: false,
        isRecurring: true,
        recurringSchedule: '3rd Monday',
        tags: [
            'teachers',
            'bond',
            'staar-scores'
        ],
        sourceUrl: 'https://www.wisd.org',
        sourceName: 'Waxahachie ISD',
        lastVerified: '2026-04-11T06:00:00Z',
        createdAt: '2026-01-20T10:00:00Z',
        updatedAt: '2026-04-11T14:00:00Z',
        isUserSubmitted: false,
        approvalStatus: 'approved'
    },
    {
        id: 'ce-12',
        title: 'Midlothian ISD Board — Regular Meeting',
        description: 'Agenda includes CTE program expansion, facilities assessment, and student enrollment projections for 2026-27.',
        date: '2026-04-16',
        startTime: '18:00',
        endTime: '20:30',
        timezone: 'America/Chicago',
        location: {
            name: 'MISD Administration Building',
            address: '100 Walter Stephenson Rd',
            city: 'Midlothian',
            state: 'TX',
            zip: '76065',
            mapUrl: 'https://maps.google.com/?q=100+Walter+Stephenson+Rd+Midlothian+TX'
        },
        eventType: 'school_board',
        governingBody: 'Midlothian ISD Board of Trustees',
        agendaUrl: 'https://www.misd.gs/BoardAgendas',
        participationInstructions: 'Open public comment. Sign up in the lobby before 6:00 PM.',
        rsvpCount: 16,
        rsvpUsers: [],
        isFeatured: false,
        isRecurring: true,
        recurringSchedule: '3rd Thursday',
        tags: [
            'cte',
            'facilities',
            'enrollment'
        ],
        sourceUrl: 'https://www.misd.gs',
        sourceName: 'Midlothian ISD',
        lastVerified: '2026-04-11T06:00:00Z',
        createdAt: '2026-01-20T10:00:00Z',
        updatedAt: '2026-04-11T14:00:00Z',
        isUserSubmitted: false,
        approvalStatus: 'approved'
    },
    {
        id: 'ce-13',
        title: 'Red Oak ISD Board — Regular Meeting',
        description: 'Topics include athletic facility improvements, teacher retention incentives, and budget amendments.',
        date: '2026-04-20',
        startTime: '18:00',
        endTime: '20:00',
        timezone: 'America/Chicago',
        location: {
            name: 'ROISD Administration Building',
            address: '3108 S Houston School Rd',
            city: 'Red Oak',
            state: 'TX',
            zip: '75154',
            mapUrl: 'https://maps.google.com/?q=3108+S+Houston+School+Rd+Red+Oak+TX'
        },
        eventType: 'school_board',
        governingBody: 'Red Oak ISD Board of Trustees',
        rsvpCount: 11,
        rsvpUsers: [],
        isFeatured: false,
        isRecurring: true,
        recurringSchedule: '3rd Monday',
        tags: [
            'athletics',
            'teacher-retention',
            'budget'
        ],
        sourceUrl: 'https://www.redoakisd.org',
        sourceName: 'Red Oak ISD',
        lastVerified: '2026-04-11T06:00:00Z',
        createdAt: '2026-01-20T10:00:00Z',
        updatedAt: '2026-04-11T14:00:00Z',
        isUserSubmitted: false,
        approvalStatus: 'approved'
    },
    {
        id: 'ce-14',
        title: 'Ennis ISD Board — Regular Meeting',
        description: 'Board agenda: dual-language program update, maintenance bond reauthorization, and food service contract.',
        date: '2026-04-16',
        startTime: '18:30',
        endTime: '20:00',
        timezone: 'America/Chicago',
        location: {
            name: 'Ennis ISD Administration',
            address: '303 W Knox St',
            city: 'Ennis',
            state: 'TX',
            zip: '75119',
            mapUrl: 'https://maps.google.com/?q=303+W+Knox+St+Ennis+TX'
        },
        eventType: 'school_board',
        governingBody: 'Ennis ISD Board of Trustees',
        rsvpCount: 8,
        rsvpUsers: [],
        isFeatured: false,
        isRecurring: true,
        recurringSchedule: '3rd Thursday',
        tags: [
            'dual-language',
            'maintenance',
            'food-service'
        ],
        sourceUrl: 'https://www.ennisisd.org',
        sourceName: 'Ennis ISD',
        lastVerified: '2026-04-11T06:00:00Z',
        createdAt: '2026-01-20T10:00:00Z',
        updatedAt: '2026-04-11T14:00:00Z',
        isUserSubmitted: false,
        approvalStatus: 'approved'
    },
    {
        id: 'ce-15',
        title: 'Ferris ISD Board — Regular Meeting',
        description: 'Discussion on school security upgrades, staff compensation study, and technology refresh.',
        date: '2026-04-15',
        startTime: '18:00',
        endTime: '19:30',
        timezone: 'America/Chicago',
        location: {
            name: 'Ferris ISD Admin',
            address: '216 E 8th St',
            city: 'Ferris',
            state: 'TX',
            zip: '75125'
        },
        eventType: 'school_board',
        governingBody: 'Ferris ISD Board of Trustees',
        rsvpCount: 5,
        rsvpUsers: [],
        isFeatured: false,
        isRecurring: true,
        recurringSchedule: '3rd Wednesday',
        tags: [
            'security',
            'compensation',
            'technology'
        ],
        isUserSubmitted: false,
        approvalStatus: 'approved',
        lastVerified: '2026-04-11T06:00:00Z',
        createdAt: '2026-01-20T10:00:00Z',
        updatedAt: '2026-04-11T14:00:00Z'
    },
    // ─── Planning & Zoning ────────────────────────────────────────
    {
        id: 'ce-16',
        title: 'Waxahachie Planning & Zoning Commission',
        description: 'Public hearing on proposed mixed-use development at US-77/I-35E interchange, residential subdivision plats, and sign ordinance amendments.',
        date: '2026-04-16',
        startTime: '18:00',
        endTime: '20:00',
        timezone: 'America/Chicago',
        location: {
            name: 'Waxahachie City Hall',
            address: '401 S Rogers St',
            city: 'Waxahachie',
            state: 'TX',
            zip: '75165',
            mapUrl: 'https://maps.google.com/?q=401+S+Rogers+St+Waxahachie+TX'
        },
        eventType: 'planning_zoning',
        governingBody: 'Waxahachie P&Z Commission',
        agendaUrl: 'https://www.waxahachie.com/PlanningZoning',
        participationInstructions: 'This is a public hearing. All affected property owners and interested citizens may speak on agenda items.',
        publicCommentDeadline: '2026-04-16T16:00:00Z',
        rsvpCount: 15,
        rsvpUsers: [],
        isFeatured: false,
        isRecurring: true,
        recurringSchedule: '2nd Thursday',
        tags: [
            'mixed-use',
            'development',
            'zoning'
        ],
        sourceUrl: 'https://www.waxahachie.com',
        sourceName: 'City of Waxahachie',
        lastVerified: '2026-04-11T06:00:00Z',
        createdAt: '2026-01-20T10:00:00Z',
        updatedAt: '2026-04-11T14:00:00Z',
        isUserSubmitted: false,
        approvalStatus: 'approved'
    },
    {
        id: 'ce-17',
        title: 'Midlothian Economic Development Corporation — Quarterly Meeting',
        description: 'Quarterly report on business attraction, retention efforts, and incentive agreements. Presentation on broadband expansion initiative.',
        date: '2026-04-28',
        startTime: '17:30',
        endTime: '19:00',
        timezone: 'America/Chicago',
        location: {
            name: 'Midlothian Conference Center',
            address: '1 Community Circle Dr',
            city: 'Midlothian',
            state: 'TX',
            zip: '76065',
            mapUrl: 'https://maps.google.com/?q=1+Community+Circle+Dr+Midlothian+TX'
        },
        eventType: 'economic_dev',
        governingBody: 'Midlothian EDC',
        participationInstructions: 'Open to the public. Q&A session after presentations.',
        rsvpCount: 10,
        rsvpUsers: [],
        isFeatured: false,
        isRecurring: true,
        recurringSchedule: 'Quarterly',
        tags: [
            'business',
            'broadband',
            'incentives'
        ],
        sourceUrl: 'https://www.midlothian.tx.us',
        sourceName: 'City of Midlothian',
        lastVerified: '2026-04-11T06:00:00Z',
        createdAt: '2026-04-01T10:00:00Z',
        updatedAt: '2026-04-11T14:00:00Z',
        isUserSubmitted: false,
        approvalStatus: 'approved'
    },
    // ─── Political Party Meetings ─────────────────────────────────
    {
        id: 'ce-18',
        title: 'Ellis County Republican Party — Monthly Meeting',
        description: 'Monthly meeting featuring candidate introductions for upcoming city council races and primary election preparation.',
        date: '2026-04-09',
        startTime: '19:00',
        endTime: '21:00',
        timezone: 'America/Chicago',
        location: {
            name: 'Waxahachie Civic Center',
            address: '2200 Civic Center Ln',
            city: 'Waxahachie',
            state: 'TX',
            zip: '75165',
            mapUrl: 'https://maps.google.com/?q=2200+Civic+Center+Ln+Waxahachie+TX'
        },
        eventType: 'party_meeting',
        governingBody: 'Ellis County Republican Party',
        participationInstructions: 'Open to all registered Republicans. Membership not required to attend.',
        rsvpCount: 35,
        rsvpUsers: [],
        isFeatured: false,
        isRecurring: true,
        recurringSchedule: '2nd Thursday',
        tags: [
            'republican',
            'primary',
            'candidates'
        ],
        sourceUrl: 'https://www.elliscountygop.org',
        sourceName: 'Ellis County Republican Party',
        lastVerified: '2026-04-11T18:00:00Z',
        createdAt: '2026-01-20T10:00:00Z',
        updatedAt: '2026-04-11T14:00:00Z',
        isUserSubmitted: false,
        approvalStatus: 'approved'
    },
    {
        id: 'ce-19',
        title: 'Ellis County Democratic Party — Monthly Meeting',
        description: 'Monthly meeting with voter mobilization strategy, precinct captain training, and guest speaker on education policy.',
        date: '2026-04-16',
        startTime: '19:00',
        endTime: '21:00',
        timezone: 'America/Chicago',
        location: {
            name: 'Ennis Public Library',
            address: '501 W Ennis Ave',
            city: 'Ennis',
            state: 'TX',
            zip: '75119',
            mapUrl: 'https://maps.google.com/?q=501+W+Ennis+Ave+Ennis+TX'
        },
        eventType: 'party_meeting',
        governingBody: 'Ellis County Democratic Party',
        participationInstructions: 'Open to all Democrats and interested community members.',
        rsvpCount: 22,
        rsvpUsers: [],
        isFeatured: false,
        isRecurring: true,
        recurringSchedule: '3rd Thursday',
        tags: [
            'democrat',
            'voter-mobilization',
            'education'
        ],
        sourceUrl: 'https://www.elliscountydemocrats.org',
        sourceName: 'Ellis County Democratic Party',
        lastVerified: '2026-04-11T18:00:00Z',
        createdAt: '2026-01-20T10:00:00Z',
        updatedAt: '2026-04-11T14:00:00Z',
        isUserSubmitted: false,
        approvalStatus: 'approved'
    },
    // ─── Voter Registration ───────────────────────────────────────
    {
        id: 'ce-23',
        title: 'Voter Registration Drive — Ennis',
        description: 'Free voter registration and education event. Bilingual registration assistance available. Bring your Texas ID or last 4 of SSN.',
        date: '2026-04-18',
        startTime: '10:00',
        endTime: '14:00',
        timezone: 'America/Chicago',
        location: {
            name: 'Ennis Public Library',
            address: '501 W Ennis Ave',
            city: 'Ennis',
            state: 'TX',
            zip: '75119',
            mapUrl: 'https://maps.google.com/?q=501+W+Ennis+Ave+Ennis+TX'
        },
        eventType: 'voter_registration',
        participationInstructions: 'No appointment needed. Bring a valid Texas driver\'s license or ID, or the last 4 digits of your SSN. Bilingual staff available.',
        rsvpCount: 15,
        rsvpUsers: [],
        isFeatured: false,
        isRecurring: false,
        tags: [
            'voter-registration',
            'bilingual',
            'ennis'
        ],
        sourceUrl: 'https://www.sos.texas.gov/elections',
        sourceName: 'Texas Secretary of State',
        lastVerified: '2026-04-11T06:00:00Z',
        createdAt: '2026-04-01T10:00:00Z',
        updatedAt: '2026-04-11T06:00:00Z',
        isUserSubmitted: false,
        approvalStatus: 'approved'
    },
    {
        id: 'ce-24',
        title: 'Voter Registration Drive — Waxahachie Farmers Market',
        description: 'Community voter registration event at the farmers market. Register, check your status, or update your address. Deadline to register for May primary is April 4.',
        date: '2026-04-25',
        startTime: '08:00',
        endTime: '12:00',
        timezone: 'America/Chicago',
        location: {
            name: 'Waxahachie Downtown Farmers Market',
            address: '400 S Rogers St',
            city: 'Waxahachie',
            state: 'TX',
            zip: '75165',
            mapUrl: 'https://maps.google.com/?q=400+S+Rogers+St+Waxahachie+TX'
        },
        eventType: 'voter_registration',
        participationInstructions: 'Stop by the registration booth anytime. Volunteers will assist you with the process.',
        rsvpCount: 8,
        rsvpUsers: [],
        isFeatured: false,
        isRecurring: false,
        tags: [
            'voter-registration',
            'farmers-market',
            'waxahachie'
        ],
        sourceUrl: 'https://www.sos.texas.gov/elections',
        sourceName: 'Texas Secretary of State',
        lastVerified: '2026-04-11T06:00:00Z',
        createdAt: '2026-04-01T10:00:00Z',
        updatedAt: '2026-04-11T06:00:00Z',
        isUserSubmitted: false,
        approvalStatus: 'approved'
    },
    // ─── Community Events ─────────────────────────────────────────
    {
        id: 'lm-02',
        title: 'Ellis County Conservatives — Coffee & Politics',
        description: 'Morning discussion group focusing on conservative values in local government. Guest speaker: Ellis County Tax Assessor-Collector.',
        date: '2026-04-25',
        startTime: '09:00',
        endTime: '10:30',
        timezone: 'America/Chicago',
        location: {
            name: 'White Rhino Coffee',
            address: '414 W Main St',
            city: 'Waxahachie',
            state: 'TX',
            zip: '75165',
            mapUrl: 'https://maps.google.com/?q=White+Rhino+Coffee+Waxahachie+TX'
        },
        eventType: 'community_event',
        governingBody: 'Ellis County Conservatives',
        participationInstructions: 'Free to attend. Coffee available for purchase.',
        rsvpCount: 25,
        rsvpUsers: [],
        isFeatured: true,
        isRecurring: true,
        recurringSchedule: '4th Saturday',
        tags: [
            'conservative',
            'coffee',
            'discussion'
        ],
        lastVerified: '2026-04-11T10:00:00Z',
        createdAt: '2026-04-11T10:00:00Z',
        updatedAt: '2026-04-11T10:00:00Z',
        isUserSubmitted: false,
        approvalStatus: 'approved'
    },
    {
        id: 'lm-03',
        title: 'Progressive Voters League — Community Organizing Workshop',
        description: 'Learn effective strategies for community organizing, canvassing, and voter outreach ahead of the May primary.',
        date: '2026-04-19',
        startTime: '13:00',
        endTime: '16:00',
        timezone: 'America/Chicago',
        location: {
            name: 'Sims Library',
            address: '515 W Main St',
            city: 'Waxahachie',
            state: 'TX',
            zip: '75165',
            mapUrl: 'https://maps.google.com/?q=Sims+Library+Waxahachie+TX'
        },
        eventType: 'community_event',
        governingBody: 'Progressive Voters League',
        participationInstructions: 'Registration recommended but not required. Materials provided.',
        rsvpCount: 18,
        rsvpUsers: [],
        isFeatured: false,
        isRecurring: false,
        tags: [
            'progressive',
            'organizing',
            'workshop',
            'get-out-the-vote'
        ],
        lastVerified: '2026-04-11T10:00:00Z',
        createdAt: '2026-04-11T10:00:00Z',
        updatedAt: '2026-04-11T10:00:00Z',
        isUserSubmitted: false,
        approvalStatus: 'approved'
    },
    {
        id: 'lm-04',
        title: 'Young Republicans — Happy Hour Mixer',
        description: 'Networking event for young professionals interested in Republican politics. Come meet like-minded individuals and discuss the upcoming May primary.',
        date: '2026-04-30',
        startTime: '17:30',
        endTime: '19:30',
        timezone: 'America/Chicago',
        location: {
            name: 'College Street Pub',
            address: '210 N College St',
            city: 'Waxahachie',
            state: 'TX',
            zip: '75165',
            mapUrl: 'https://maps.google.com/?q=College+Street+Pub+Waxahachie+TX'
        },
        eventType: 'party_meeting',
        governingBody: 'Ellis County Young Republicans',
        participationInstructions: 'Ages 21-40 welcome. Cash bar.',
        rsvpCount: 30,
        rsvpUsers: [],
        isFeatured: false,
        isRecurring: true,
        recurringSchedule: 'Last Thursday',
        tags: [
            'young-republicans',
            'networking',
            'social'
        ],
        lastVerified: '2026-04-11T10:00:00Z',
        createdAt: '2026-04-11T10:00:00Z',
        updatedAt: '2026-04-11T10:00:00Z',
        isUserSubmitted: false,
        approvalStatus: 'approved'
    }
];
const LOCAL_MEETUP_EVENTS = [];
}),
"[project]/lib/events/civic-events-service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "downloadICS",
    ()=>downloadICS,
    "getApprovedEvents",
    ()=>getApprovedEvents,
    "getCivicEventById",
    ()=>getCivicEventById,
    "getCivicEvents",
    ()=>getCivicEvents,
    "getGoogleCalendarUrl",
    ()=>getGoogleCalendarUrl,
    "getOutlookCalendarUrl",
    ()=>getOutlookCalendarUrl,
    "getTodayEvents",
    ()=>getTodayEvents,
    "getUpcomingEvents",
    ()=>getUpcomingEvents,
    "submitEvent",
    ()=>submitEvent,
    "toggleRSVP",
    ()=>toggleRSVP
]);
// Civic Events Service — Supabase-backed
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$events$2f$civic$2d$events$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/events/civic-events-data.ts [app-ssr] (ecmascript)");
;
;
// ─── Map DB Row to CivicEvent ───────────────────────────────
function mapDbRow(row) {
    // The live DB stores location as a JSONB object; handle both flat columns and JSONB
    const loc = row.location && typeof row.location === 'object' ? row.location : {};
    return {
        id: row.id,
        title: row.title,
        description: row.description || '',
        date: row.date,
        startTime: row.start_time?.slice(0, 5) || '00:00',
        endTime: row.end_time?.slice(0, 5),
        timezone: row.timezone || 'America/Chicago',
        location: {
            name: loc.name || row.location_name || '',
            address: loc.address || row.location_address || '',
            city: loc.city || row.location_city || '',
            state: loc.state || row.location_state || 'TX',
            zip: loc.zip || row.location_zip || '',
            mapUrl: loc.mapUrl || row.location_map_url
        },
        eventType: row.event_type || 'community_event',
        governingBody: row.governing_body,
        agendaUrl: row.agenda_url,
        minutesUrl: row.minutes_url,
        zoomUrl: row.zoom_url,
        participationInstructions: row.participation_instructions,
        publicCommentDeadline: row.public_comment_deadline,
        rsvpUsers: (row.event_rsvps || []).map((r)=>r.user_id),
        rsvpCount: row.event_rsvps ? row.event_rsvps.length : row.rsvp_count || 0,
        isFeatured: row.is_featured || false,
        isRecurring: row.is_recurring || false,
        recurringSchedule: row.recurring_schedule,
        tags: row.tags || [],
        sourceUrl: row.source_url,
        sourceName: row.source_name,
        lastVerified: row.last_verified || row.updated_at || new Date().toISOString(),
        createdAt: row.created_at,
        updatedAt: row.updated_at,
        isUserSubmitted: row.is_user_submitted || false,
        submittedBy: row.submitted_by,
        approvalStatus: row.approval_status || 'approved'
    };
}
async function getCivicEvents() {
    try {
        const res = await fetch('/api/civic-events');
        if (!res.ok) throw new Error('Failed to fetch events from API');
        const data = await res.json();
        return data.events || [];
    } catch (error) {
        console.error('Error fetching events from API:', error);
        // Fallback to local events if the API fails
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$events$2f$civic$2d$events$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LOCAL_MEETUP_EVENTS"];
    }
}
async function getCivicEventById(id) {
    // Check local events first
    const localEvent = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$events$2f$civic$2d$events$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LOCAL_MEETUP_EVENTS"].find((e)=>e.id === id);
    if (localEvent) {
        return localEvent;
    }
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('civic_events').select('*, event_rsvps(user_id)').eq('id', id).single();
    if (!data) return undefined;
    return mapDbRow(data);
}
async function getApprovedEvents() {
    const events = await getCivicEvents();
    return events.filter((e)=>e.approvalStatus === 'approved');
}
async function toggleRSVP(eventId, userId) {
    const { data: existing } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('event_rsvps').select('*').eq('event_id', eventId).eq('user_id', userId).single();
    if (existing) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('event_rsvps').delete().eq('event_id', eventId).eq('user_id', userId);
        return false;
    } else {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('event_rsvps').insert([
            {
                event_id: eventId,
                user_id: userId
            }
        ]);
        return true;
    }
}
async function submitEvent(data) {
    // Map camelCase fields from frontend to snake_case for the database
    const dbPayload = {
        title: data.title,
        description: data.description,
        date: data.date,
        start_time: data.startTime,
        end_time: data.endTime,
        location_name: data.location,
        location_city: data.city,
        event_type: data.eventType,
        submitted_by: data.submittedBy,
        approval_status: 'pending',
        created_at: new Date().toISOString()
    };
    const { data: newEvent, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('civic_events').insert([
        dbPayload
    ]).select().single();
    if (error) {
        console.error('Error submitting event:', error);
        return null;
    }
    return mapDbRow(newEvent);
}
async function getUpcomingEvents(limit = 10) {
    const events = await getCivicEvents();
    const today = new Date().toISOString().split('T')[0];
    return events.filter((e)=>e.date >= today).slice(0, limit);
}
async function getTodayEvents() {
    const events = await getCivicEvents();
    const today = new Date().toISOString().split('T')[0];
    return events.filter((e)=>e.date === today);
}
function getGoogleCalendarUrl(event) {
    const start = new Date(event.date + 'T' + event.startTime).toISOString().replace(/-|:|\.\d+/g, '');
    const end = event.endTime ? new Date(event.date + 'T' + event.endTime).toISOString().replace(/-|:|\.\d+/g, '') : new Date(new Date(event.date + 'T' + event.startTime).getTime() + 60 * 60 * 1000).toISOString().replace(/-|:|\.\d+/g, '');
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${start}/${end}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location.name)}`;
}
function getOutlookCalendarUrl(event) {
    const start = new Date(event.date + 'T' + event.startTime).toISOString();
    const end = event.endTime ? new Date(event.date + 'T' + event.endTime).toISOString() : new Date(new Date(event.date + 'T' + event.startTime).getTime() + 60 * 60 * 1000).toISOString();
    return `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(event.title)}&startdt=${start}&enddt=${end}&body=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location.name)}`;
}
function downloadICS(event) {
    const start = new Date(event.date + 'T' + event.startTime).toISOString().replace(/-|:|\.\d+/g, '');
    const end = event.endTime ? new Date(event.date + 'T' + event.endTime).toISOString().replace(/-|:|\.\d+/g, '') : new Date(new Date(event.date + 'T' + event.startTime).getTime() + 60 * 60 * 1000).toISOString().replace(/-|:|\.\d+/g, '');
    const icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'BEGIN:VEVENT',
        `DTSTART:${start}`,
        `DTEND:${end}`,
        `SUMMARY:${event.title}`,
        `DESCRIPTION:${event.description}`,
        `LOCATION:${event.location.name}`,
        'END:VEVENT',
        'END:VCALENDAR'
    ].join('\r\n');
    const blob = new Blob([
        icsContent
    ], {
        type: 'text/calendar;charset=utf-8'
    });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${event.title.replace(/\s+/g, '_')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
}),
"[project]/components/events/CivicEventCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CivicEventCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-ssr] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-plus.js [app-ssr] (ecmascript) <export default as CalendarPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$civic$2d$events$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/civic-events.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$events$2f$civic$2d$events$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/events/civic-events-service.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function CivicEventCard({ event, userId, onRSVPChange, compact = false }) {
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCalendar, setShowCalendar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRSVPed, setIsRSVPed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(userId ? event.rsvpUsers.includes(userId) : false);
    const eventDate = new Date(event.date + 'T' + (event.startTime || '00:00'));
    const isToday = event.date === new Date().toISOString().split('T')[0];
    const now = new Date();
    const endOfWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    const isThisWeek = eventDate >= now && eventDate <= endOfWeek;
    const handleRSVP = async ()=>{
        if (!userId) return;
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$events$2f$civic$2d$events$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleRSVP"])(event.id, userId);
        setIsRSVPed(result);
        onRSVPChange?.();
    };
    const formatTime = (time)=>{
        if (!time) return '';
        const parts = time.split(':');
        if (parts.length < 2) return time;
        const [h, m] = parts.map(Number);
        if (isNaN(h) || isNaN(m)) return time;
        const ampm = h >= 12 ? 'PM' : 'AM';
        return `${h % 12 || 12}:${m.toString().padStart(2, '0')} ${ampm}`;
    };
    const formatDate = (dateStr)=>{
        return new Date(dateStr + 'T12:00:00').toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });
    };
    if (compact) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center min-w-[48px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-gold font-semibold uppercase",
                            children: new Date(event.date + 'T12:00:00').toLocaleDateString('en-US', {
                                month: 'short'
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/events/CivicEventCard.tsx",
                            lineNumber: 55,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-lg font-bold text-white",
                            children: new Date(event.date + 'T12:00:00').getDate()
                        }, void 0, false, {
                            fileName: "[project]/components/events/CivicEventCard.tsx",
                            lineNumber: 58,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/events/CivicEventCard.tsx",
                    lineNumber: 54,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 min-w-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-white font-medium truncate",
                            children: event.title
                        }, void 0, false, {
                            fileName: "[project]/components/events/CivicEventCard.tsx",
                            lineNumber: 63,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-white/50 flex items-center gap-1 mt-0.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 65,
                                    columnNumber: 25
                                }, this),
                                " ",
                                formatTime(event.startTime),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mx-1",
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 66,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 67,
                                    columnNumber: 25
                                }, this),
                                " ",
                                event.location.city
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/events/CivicEventCard.tsx",
                            lineNumber: 64,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/events/CivicEventCard.tsx",
                    lineNumber: 62,
                    columnNumber: 17
                }, this),
                isToday && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[10px] px-1.5 py-0.5 rounded-full bg-red-500/20 text-red-400 font-semibold h-fit",
                    children: "TODAY"
                }, void 0, false, {
                    fileName: "[project]/components/events/CivicEventCard.tsx",
                    lineNumber: 70,
                    columnNumber: 29
                }, this),
                !isToday && isThisWeek && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[10px] px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-semibold h-fit",
                    children: "THIS WEEK"
                }, void 0, false, {
                    fileName: "[project]/components/events/CivicEventCard.tsx",
                    lineNumber: 71,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/events/CivicEventCard.tsx",
            lineNumber: 53,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        layout: true,
        className: `rounded-xl border transition-colors ${isToday ? 'border-red-500/40 bg-red-500/5' : 'border-white/10 bg-white/5 hover:border-white/20'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center min-w-[56px] p-2 rounded-lg bg-white/5 border border-white/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gold font-semibold uppercase",
                                    children: new Date(event.date + 'T12:00:00').toLocaleDateString('en-US', {
                                        month: 'short'
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 87,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xl font-bold text-white",
                                    children: new Date(event.date + 'T12:00:00').getDate()
                                }, void 0, false, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 90,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[10px] text-white/40",
                                    children: new Date(event.date + 'T12:00:00').toLocaleDateString('en-US', {
                                        weekday: 'short'
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 93,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/events/CivicEventCard.tsx",
                            lineNumber: 86,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 flex-wrap mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-[10px] px-2 py-0.5 rounded-full border font-medium ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$civic$2d$events$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVENT_TYPE_COLORS"][event.eventType]}`,
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$civic$2d$events$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVENT_TYPE_LABELS"][event.eventType]
                                        }, void 0, false, {
                                            fileName: "[project]/components/events/CivicEventCard.tsx",
                                            lineNumber: 101,
                                            columnNumber: 29
                                        }, this),
                                        isToday && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 font-semibold border border-red-500/30",
                                            children: "🔴 TODAY"
                                        }, void 0, false, {
                                            fileName: "[project]/components/events/CivicEventCard.tsx",
                                            lineNumber: 104,
                                            columnNumber: 41
                                        }, this),
                                        !isToday && isThisWeek && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-semibold border border-amber-500/30",
                                            children: "THIS WEEK"
                                        }, void 0, false, {
                                            fileName: "[project]/components/events/CivicEventCard.tsx",
                                            lineNumber: 105,
                                            columnNumber: 56
                                        }, this),
                                        event.isFeatured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] px-2 py-0.5 rounded-full bg-gold/20 text-gold font-semibold border border-gold/30",
                                            children: "⭐ FEATURED"
                                        }, void 0, false, {
                                            fileName: "[project]/components/events/CivicEventCard.tsx",
                                            lineNumber: 106,
                                            columnNumber: 50
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 100,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-semibold text-white leading-tight",
                                    children: event.title
                                }, void 0, false, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 109,
                                    columnNumber: 25
                                }, this),
                                event.governingBody && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-white/40 mt-0.5",
                                    children: event.governingBody
                                }, void 0, false, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 112,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mt-2 text-xs text-white/60",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 33
                                                }, this),
                                                formatTime(event.startTime),
                                                event.endTime && ` – ${formatTime(event.endTime)}`
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/events/CivicEventCard.tsx",
                                            lineNumber: 117,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 33
                                                }, this),
                                                event.location.name,
                                                ", ",
                                                event.location.city
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/events/CivicEventCard.tsx",
                                            lineNumber: 122,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 116,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/events/CivicEventCard.tsx",
                            lineNumber: 98,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/events/CivicEventCard.tsx",
                    lineNumber: 84,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 mt-3 pt-3 border-t border-white/5",
                    children: [
                        userId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleRSVP,
                            className: `flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${isRSVPed ? 'bg-gold/20 text-gold border border-gold/30' : 'bg-white/5 text-white/60 border border-white/10 hover:border-white/20'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 140,
                                    columnNumber: 29
                                }, this),
                                isRSVPed ? 'Attending' : "I'm Attending",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white/40 ml-1",
                                    children: [
                                        "(",
                                        event.rsvpCount,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 142,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/events/CivicEventCard.tsx",
                            lineNumber: 133,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowCalendar(!showCalendar),
                            className: "flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs text-white/60 bg-white/5 border border-white/10 hover:border-white/20 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarPlus$3e$__["CalendarPlus"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 150,
                                    columnNumber: 25
                                }, this),
                                "Add to Calendar"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/events/CivicEventCard.tsx",
                            lineNumber: 146,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setExpanded(!expanded),
                            className: "flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs text-white/60 bg-white/5 border border-white/10 hover:border-white/20 transition-colors ml-auto",
                            children: [
                                expanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 158,
                                    columnNumber: 37
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 158,
                                    columnNumber: 73
                                }, this),
                                expanded ? 'Less' : 'Details'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/events/CivicEventCard.tsx",
                            lineNumber: 154,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/events/CivicEventCard.tsx",
                    lineNumber: 131,
                    columnNumber: 17
                }, this),
                showCalendar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        height: 0
                    },
                    animate: {
                        opacity: 1,
                        height: 'auto'
                    },
                    className: "mt-2 flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$events$2f$civic$2d$events$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGoogleCalendarUrl"])(event),
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs text-white/70 bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition-colors",
                            children: "Google Calendar"
                        }, void 0, false, {
                            fileName: "[project]/components/events/CivicEventCard.tsx",
                            lineNumber: 170,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$events$2f$civic$2d$events$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOutlookCalendarUrl"])(event),
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs text-white/70 bg-blue-600/10 border border-blue-600/20 hover:bg-blue-600/20 transition-colors",
                            children: "Outlook"
                        }, void 0, false, {
                            fileName: "[project]/components/events/CivicEventCard.tsx",
                            lineNumber: 178,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$events$2f$civic$2d$events$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["downloadICS"])(event),
                            className: "flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs text-white/70 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors",
                            children: "Download .ics"
                        }, void 0, false, {
                            fileName: "[project]/components/events/CivicEventCard.tsx",
                            lineNumber: 186,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/events/CivicEventCard.tsx",
                    lineNumber: 165,
                    columnNumber: 21
                }, this),
                expanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        height: 0
                    },
                    animate: {
                        opacity: 1,
                        height: 'auto'
                    },
                    className: "mt-3 pt-3 border-t border-white/5 space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-white/60 leading-relaxed",
                            children: event.description
                        }, void 0, false, {
                            fileName: "[project]/components/events/CivicEventCard.tsx",
                            lineNumber: 202,
                            columnNumber: 25
                        }, this),
                        event.participationInstructions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 rounded-lg bg-green-500/10 border border-green-500/20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold text-green-400 mb-1",
                                    children: "How to Participate"
                                }, void 0, false, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 206,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-white/60",
                                    children: event.participationInstructions
                                }, void 0, false, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 207,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/events/CivicEventCard.tsx",
                            lineNumber: 205,
                            columnNumber: 29
                        }, this),
                        event.publicCommentDeadline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 rounded-lg bg-amber-500/10 border border-amber-500/20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-amber-400",
                                children: [
                                    "⏰ Public comment deadline: ",
                                    new Date(event.publicCommentDeadline).toLocaleString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/events/CivicEventCard.tsx",
                                lineNumber: 213,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/events/CivicEventCard.tsx",
                            lineNumber: 212,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: [
                                event.location.mapUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: event.location.mapUrl,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center gap-1 px-2 py-1 rounded text-[10px] text-white/50 bg-white/5 hover:bg-white/10 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/components/events/CivicEventCard.tsx",
                                            lineNumber: 222,
                                            columnNumber: 37
                                        }, this),
                                        " View Map"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 221,
                                    columnNumber: 33
                                }, this),
                                event.agendaUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: event.agendaUrl,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center gap-1 px-2 py-1 rounded text-[10px] text-white/50 bg-white/5 hover:bg-white/10 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/components/events/CivicEventCard.tsx",
                                            lineNumber: 227,
                                            columnNumber: 37
                                        }, this),
                                        " Agenda"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 226,
                                    columnNumber: 33
                                }, this),
                                event.minutesUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: event.minutesUrl,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center gap-1 px-2 py-1 rounded text-[10px] text-white/50 bg-white/5 hover:bg-white/10 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/components/events/CivicEventCard.tsx",
                                            lineNumber: 232,
                                            columnNumber: 37
                                        }, this),
                                        " Past Minutes"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 231,
                                    columnNumber: 33
                                }, this),
                                event.zoomUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: event.zoomUrl,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center gap-1 px-2 py-1 rounded text-[10px] text-white/50 bg-white/5 hover:bg-white/10 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/components/events/CivicEventCard.tsx",
                                            lineNumber: 237,
                                            columnNumber: 37
                                        }, this),
                                        " Join Zoom"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 236,
                                    columnNumber: 33
                                }, this),
                                event.forumTopicId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `/forum/topic/${event.forumTopicId}`,
                                    className: "flex items-center gap-1 px-2 py-1 rounded text-[10px] text-gold/70 bg-gold/10 hover:bg-gold/20 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/components/events/CivicEventCard.tsx",
                                            lineNumber: 242,
                                            columnNumber: 37
                                        }, this),
                                        " Discussion"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 241,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/events/CivicEventCard.tsx",
                            lineNumber: 219,
                            columnNumber: 25
                        }, this),
                        event.isRecurring && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] text-white/30",
                            children: [
                                "🔄 Recurring: ",
                                event.recurringSchedule
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/events/CivicEventCard.tsx",
                            lineNumber: 248,
                            columnNumber: 29
                        }, this),
                        event.sourceUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] text-white/30 flex items-center gap-1",
                            children: [
                                "Source: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: event.sourceUrl,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-white/40 hover:text-white/60 underline",
                                    children: event.sourceName || event.sourceUrl
                                }, void 0, false, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 255,
                                    columnNumber: 41
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mx-1",
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 256,
                                    columnNumber: 33
                                }, this),
                                "Last verified: ",
                                new Date(event.lastVerified).toLocaleDateString()
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/events/CivicEventCard.tsx",
                            lineNumber: 254,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/events/CivicEventCard.tsx",
                    lineNumber: 197,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/events/CivicEventCard.tsx",
            lineNumber: 82,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/events/CivicEventCard.tsx",
        lineNumber: 77,
        columnNumber: 9
    }, this);
}
}),
"[project]/components/events/EventSubmitForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EventSubmitForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-2.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check-circle.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$events$2f$civic$2d$events$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/events/civic-events-service.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const CITIES = [
    'Waxahachie',
    'Midlothian',
    'Red Oak',
    'Ennis',
    'Ferris',
    'Palmer',
    'Italy',
    'Milford',
    'Ovilla',
    'Oak Leaf',
    'Pecan Hill',
    'Garrett',
    'Bardwell',
    'Other'
];
const EVENT_TYPES = [
    {
        value: 'city_council',
        label: 'City Council Meeting'
    },
    {
        value: 'school_board',
        label: 'School Board Meeting'
    },
    {
        value: 'commissioners_court',
        label: 'Commissioners Court'
    },
    {
        value: 'planning_zoning',
        label: 'Planning & Zoning'
    },
    {
        value: 'economic_dev',
        label: 'Economic Development'
    },
    {
        value: 'town_hall',
        label: 'Town Hall'
    },
    {
        value: 'candidate_forum',
        label: 'Candidate Forum'
    },
    {
        value: 'voter_registration',
        label: 'Voter Registration'
    },
    {
        value: 'debate',
        label: 'Debate'
    },
    {
        value: 'meet_greet',
        label: 'Meet & Greet'
    },
    {
        value: 'party_meeting',
        label: 'Party Meeting'
    },
    {
        value: 'community_event',
        label: 'Community Event'
    }
];
function EventSubmitForm({ userId, onClose, onSubmitted }) {
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [startTime, setStartTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [endTime, setEndTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [city, setCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [eventType, setEventType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('community_event');
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError('');
        if (!title || !description || !date || !startTime || !location || !city) {
            setError('Please fill in all required fields.');
            return;
        }
        setSubmitting(true);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$events$2f$civic$2d$events$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["submitEvent"])({
            title,
            description,
            date,
            startTime,
            endTime: endTime || undefined,
            location,
            city,
            eventType,
            submittedBy: userId
        });
        setSubmitting(false);
        setSuccess(true);
        onSubmitted?.();
    };
    if (success) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            className: "p-6 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                    className: "w-12 h-12 text-green-400 mx-auto mb-3"
                }, void 0, false, {
                    fileName: "[project]/components/events/EventSubmitForm.tsx",
                    lineNumber: 77,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-semibold text-white",
                    children: "Event Submitted!"
                }, void 0, false, {
                    fileName: "[project]/components/events/EventSubmitForm.tsx",
                    lineNumber: 78,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-white/60 mt-1",
                    children: "Your event will appear on the calendar after admin approval."
                }, void 0, false, {
                    fileName: "[project]/components/events/EventSubmitForm.tsx",
                    lineNumber: 79,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "mt-4 px-4 py-2 rounded-lg bg-gold text-black text-sm font-semibold hover:bg-gold/90 transition-colors",
                    children: "Close"
                }, void 0, false, {
                    fileName: "[project]/components/events/EventSubmitForm.tsx",
                    lineNumber: 80,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/events/EventSubmitForm.tsx",
            lineNumber: 72,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-white",
                        children: "Submit an Event"
                    }, void 0, false, {
                        fileName: "[project]/components/events/EventSubmitForm.tsx",
                        lineNumber: 90,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "p-1 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/components/events/EventSubmitForm.tsx",
                            lineNumber: 92,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/events/EventSubmitForm.tsx",
                        lineNumber: 91,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/events/EventSubmitForm.tsx",
                lineNumber: 89,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-white/50 mb-4",
                children: "Submit a civic event for the Ellis County calendar. Events require admin approval before appearing."
            }, void 0, false, {
                fileName: "[project]/components/events/EventSubmitForm.tsx",
                lineNumber: 95,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs text-white/60 mb-1 block",
                                children: "Event Title *"
                            }, void 0, false, {
                                fileName: "[project]/components/events/EventSubmitForm.tsx",
                                lineNumber: 99,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: title,
                                onChange: (e)=>setTitle(e.target.value),
                                placeholder: "e.g. Waxahachie City Council Special Session",
                                className: "w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-gold/50"
                            }, void 0, false, {
                                fileName: "[project]/components/events/EventSubmitForm.tsx",
                                lineNumber: 100,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/events/EventSubmitForm.tsx",
                        lineNumber: 98,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs text-white/60 mb-1 block",
                                        children: "Event Type *"
                                    }, void 0, false, {
                                        fileName: "[project]/components/events/EventSubmitForm.tsx",
                                        lineNumber: 109,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: eventType,
                                        onChange: (e)=>setEventType(e.target.value),
                                        className: "w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white text-sm focus:outline-none focus:border-gold/50",
                                        children: EVENT_TYPES.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: t.value,
                                                className: "bg-[#1a1a2e]",
                                                children: t.label
                                            }, t.value, false, {
                                                fileName: "[project]/components/events/EventSubmitForm.tsx",
                                                lineNumber: 115,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/events/EventSubmitForm.tsx",
                                        lineNumber: 110,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/events/EventSubmitForm.tsx",
                                lineNumber: 108,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs text-white/60 mb-1 block",
                                        children: "City *"
                                    }, void 0, false, {
                                        fileName: "[project]/components/events/EventSubmitForm.tsx",
                                        lineNumber: 120,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: city,
                                        onChange: (e)=>setCity(e.target.value),
                                        className: "w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white text-sm focus:outline-none focus:border-gold/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                className: "bg-[#1a1a2e]",
                                                children: "Select city"
                                            }, void 0, false, {
                                                fileName: "[project]/components/events/EventSubmitForm.tsx",
                                                lineNumber: 125,
                                                columnNumber: 29
                                            }, this),
                                            CITIES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: c,
                                                    className: "bg-[#1a1a2e]",
                                                    children: c
                                                }, c, false, {
                                                    fileName: "[project]/components/events/EventSubmitForm.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 33
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/events/EventSubmitForm.tsx",
                                        lineNumber: 121,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/events/EventSubmitForm.tsx",
                                lineNumber: 119,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/events/EventSubmitForm.tsx",
                        lineNumber: 107,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs text-white/60 mb-1 block",
                                        children: "Date *"
                                    }, void 0, false, {
                                        fileName: "[project]/components/events/EventSubmitForm.tsx",
                                        lineNumber: 135,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        value: date,
                                        onChange: (e)=>setDate(e.target.value),
                                        className: "w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white text-sm focus:outline-none focus:border-gold/50"
                                    }, void 0, false, {
                                        fileName: "[project]/components/events/EventSubmitForm.tsx",
                                        lineNumber: 136,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/events/EventSubmitForm.tsx",
                                lineNumber: 134,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs text-white/60 mb-1 block",
                                        children: "Start Time *"
                                    }, void 0, false, {
                                        fileName: "[project]/components/events/EventSubmitForm.tsx",
                                        lineNumber: 142,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "time",
                                        value: startTime,
                                        onChange: (e)=>setStartTime(e.target.value),
                                        className: "w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white text-sm focus:outline-none focus:border-gold/50"
                                    }, void 0, false, {
                                        fileName: "[project]/components/events/EventSubmitForm.tsx",
                                        lineNumber: 143,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/events/EventSubmitForm.tsx",
                                lineNumber: 141,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs text-white/60 mb-1 block",
                                        children: "End Time"
                                    }, void 0, false, {
                                        fileName: "[project]/components/events/EventSubmitForm.tsx",
                                        lineNumber: 149,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "time",
                                        value: endTime,
                                        onChange: (e)=>setEndTime(e.target.value),
                                        className: "w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white text-sm focus:outline-none focus:border-gold/50"
                                    }, void 0, false, {
                                        fileName: "[project]/components/events/EventSubmitForm.tsx",
                                        lineNumber: 150,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/events/EventSubmitForm.tsx",
                                lineNumber: 148,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/events/EventSubmitForm.tsx",
                        lineNumber: 133,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs text-white/60 mb-1 block",
                                children: "Location *"
                            }, void 0, false, {
                                fileName: "[project]/components/events/EventSubmitForm.tsx",
                                lineNumber: 158,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: location,
                                onChange: (e)=>setLocation(e.target.value),
                                placeholder: "e.g. Waxahachie City Hall, 401 S Rogers St",
                                className: "w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-gold/50"
                            }, void 0, false, {
                                fileName: "[project]/components/events/EventSubmitForm.tsx",
                                lineNumber: 159,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/events/EventSubmitForm.tsx",
                        lineNumber: 157,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs text-white/60 mb-1 block",
                                children: "Description *"
                            }, void 0, false, {
                                fileName: "[project]/components/events/EventSubmitForm.tsx",
                                lineNumber: 167,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: description,
                                onChange: (e)=>setDescription(e.target.value),
                                placeholder: "Describe the event, agenda items, and how the public can participate...",
                                rows: 3,
                                className: "w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-gold/50 resize-none"
                            }, void 0, false, {
                                fileName: "[project]/components/events/EventSubmitForm.tsx",
                                lineNumber: 168,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/events/EventSubmitForm.tsx",
                        lineNumber: 166,
                        columnNumber: 17
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-red-400",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/components/events/EventSubmitForm.tsx",
                        lineNumber: 176,
                        columnNumber: 27
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: submitting,
                        className: "w-full py-2.5 rounded-lg bg-gold text-black font-semibold text-sm hover:bg-gold/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2",
                        children: submitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "w-4 h-4 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/components/events/EventSubmitForm.tsx",
                                    lineNumber: 182,
                                    columnNumber: 37
                                }, this),
                                " Submitting..."
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/events/EventSubmitForm.tsx",
                                    lineNumber: 182,
                                    columnNumber: 103
                                }, this),
                                " Submit Event"
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/components/events/EventSubmitForm.tsx",
                        lineNumber: 178,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/events/EventSubmitForm.tsx",
                lineNumber: 97,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/events/EventSubmitForm.tsx",
        lineNumber: 88,
        columnNumber: 9
    }, this);
}
}),
"[project]/lib/utils/ics.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "downloadICS",
    ()=>downloadICS,
    "formatTime12h",
    ()=>formatTime12h,
    "generateICSEvent",
    ()=>generateICSEvent,
    "generateICSFeed",
    ()=>generateICSFeed
]);
function formatTime12h(time24) {
    const [hourStr, minute] = time24.split(':');
    let hour = parseInt(hourStr, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    if (hour === 0) hour = 12;
    else if (hour > 12) hour -= 12;
    return `${hour}:${minute} ${ampm}`;
}
function generateICSEvent(event) {
    const dtStart = `${event.date.replace(/-/g, '')}T${event.startTime.replace(':', '')}00`;
    const dtEnd = `${event.date.replace(/-/g, '')}T${event.endTime.replace(':', '')}00`;
    const location = `${event.venue.name}, ${event.venue.address}, ${event.venue.city}, ${event.venue.state} ${event.venue.zip}`;
    const description = event.description.replace(/\n/g, '\\n');
    return [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Pivotal Voice//Ellis County Events//EN',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        'BEGIN:VEVENT',
        `DTSTART;TZID=America/Chicago:${dtStart}`,
        `DTEND;TZID=America/Chicago:${dtEnd}`,
        `SUMMARY:${event.title}`,
        `DESCRIPTION:${description}`,
        `LOCATION:${location}`,
        `URL:${event.sourceUrl}`,
        `UID:${event.id}@pivotalvoice.com`,
        `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}`,
        event.registrationUrl ? `X-REGISTRATION-URL:${event.registrationUrl}` : '',
        'STATUS:CONFIRMED',
        'END:VEVENT',
        'END:VCALENDAR'
    ].filter(Boolean).join('\r\n');
}
function generateICSFeed(events) {
    const vEvents = events.map((event)=>{
        const dtStart = `${event.date.replace(/-/g, '')}T${event.startTime.replace(':', '')}00`;
        const dtEnd = `${event.date.replace(/-/g, '')}T${event.endTime.replace(':', '')}00`;
        const location = `${event.venue.name}, ${event.venue.address}, ${event.venue.city}, ${event.venue.state} ${event.venue.zip}`;
        const description = event.description.replace(/\n/g, '\\n');
        return [
            'BEGIN:VEVENT',
            `DTSTART;TZID=America/Chicago:${dtStart}`,
            `DTEND;TZID=America/Chicago:${dtEnd}`,
            `SUMMARY:${event.title}`,
            `DESCRIPTION:${description}`,
            `LOCATION:${location}`,
            `URL:${event.sourceUrl}`,
            `UID:${event.id}@pivotalvoice.com`,
            `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}`,
            'STATUS:CONFIRMED',
            'END:VEVENT'
        ].join('\r\n');
    });
    return [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Pivotal Voice//Ellis County Events//EN',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        'X-WR-CALNAME:Pivotal Voice – Ellis County Political Events',
        ...vEvents,
        'END:VCALENDAR'
    ].join('\r\n');
}
function downloadICS(icsContent, filename) {
    const blob = new Blob([
        icsContent
    ], {
        type: 'text/calendar;charset=utf-8'
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}
}),
"[project]/app/calendar/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CalendarPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$events$2f$CivicEventCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/events/CivicEventCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$events$2f$EventSubmitForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/events/EventSubmitForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$vote$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Vote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/vote.js [app-ssr] (ecmascript) <export default as Vote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/landmark.js [app-ssr] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/alert-circle.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$ics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/ics.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/parseISO.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isAfter$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isAfter.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isBefore.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfDay.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addDays.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
// ─── Category order & icons ────────────────────────────────────────────────────
const CATEGORY_ORDER = [
    {
        type: '__all__',
        label: 'All Events',
        emoji: '📋'
    },
    {
        type: 'election_date',
        label: 'Elections',
        emoji: '🗳️'
    },
    {
        type: 'debate',
        label: 'Debates',
        emoji: '⚖️'
    },
    {
        type: 'candidate_forum',
        label: 'Candidate Forums',
        emoji: '🎤'
    },
    {
        type: 'town_hall',
        label: 'Town Halls',
        emoji: '🏛️'
    },
    {
        type: 'city_council',
        label: 'City Council',
        emoji: '🏙️'
    },
    {
        type: 'commissioners_court',
        label: 'Commissioners Court',
        emoji: '⚖️'
    },
    {
        type: 'school_board',
        label: 'School Board',
        emoji: '🎓'
    },
    {
        type: 'planning_zoning',
        label: 'Planning & Zoning',
        emoji: '🏗️'
    },
    {
        type: 'economic_dev',
        label: 'Economic Dev',
        emoji: '💼'
    },
    {
        type: 'voter_registration',
        label: 'Voter Registration',
        emoji: '📝'
    },
    {
        type: 'party_meeting',
        label: 'Party Meetings',
        emoji: '🐘🐴'
    },
    {
        type: 'meet_greet',
        label: 'Meet & Greets',
        emoji: '🤝'
    },
    {
        type: 'community_event',
        label: 'Community',
        emoji: '🎉'
    }
];
const CITIES = [
    'All Cities',
    'Waxahachie',
    'Midlothian',
    'Red Oak',
    'Ennis',
    'Ferris',
    'Palmer',
    'Italy',
    'Ovilla'
];
function CalendarPage() {
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isFallback, setIsFallback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // filters
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('__all__');
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedCity, setSelectedCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('All Cities');
    const [hideUpcoming, setHideUpcoming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // show upcoming by default
    const [showSubmitForm, setShowSubmitForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const disclaimer = 'Pivotal Voice does not endorse any candidate or party. Event information is sourced from publicly available records.';
    // ─── Fetch ──────────────────────────────────────────────────────────────────
    const fetchEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setLoading(true);
        setError(null);
        try {
            const res = await fetch('/api/civic-events');
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const json = await res.json();
            setEvents(json.events || []);
            setIsFallback(json.fallback || false);
        } catch (err) {
            setError('Unable to load live events. Showing cached data.');
            // last-resort: import static fallback
            const { SEED_CIVIC_EVENTS } = await __turbopack_context__.A("[project]/lib/events/civic-events-data.ts [app-ssr] (ecmascript, async loader)");
            setEvents(SEED_CIVIC_EVENTS);
            setIsFallback(true);
        } finally{
            setLoading(false);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchEvents();
    }, [
        fetchEvents
    ]);
    // ─── Derived data ─────────────────────────────────────────────────────────
    const today = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfDay"])(new Date());
    const filteredEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return events.filter((e)=>{
            const eventDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseISO"])(e.date);
            // upcoming only (default)
            if (!hideUpcoming && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBefore"])(eventDate, today)) return false;
            // category
            if (activeCategory !== '__all__' && e.eventType !== activeCategory) return false;
            // city
            if (selectedCity !== 'All Cities' && e.location.city !== selectedCity) return false;
            // search
            if (searchQuery.trim()) {
                const q = searchQuery.toLowerCase();
                const haystack = [
                    e.title,
                    e.description,
                    e.governingBody || '',
                    e.location.name,
                    e.location.city,
                    ...e.tags || []
                ].join(' ').toLowerCase();
                if (!haystack.includes(q)) return false;
            }
            return true;
        });
    }, [
        events,
        activeCategory,
        searchQuery,
        selectedCity,
        hideUpcoming,
        today
    ]);
    const featuredEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>filteredEvents.filter((e)=>e.isFeatured && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isAfter$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAfter"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseISO"])(e.date), today)), [
        filteredEvents,
        today
    ]);
    const thisWeekEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const weekEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDays"])(today, 7);
        return events.filter((e)=>{
            const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseISO"])(e.date);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isAfter$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAfter"])(d, today) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBefore"])(d, weekEnd);
        });
    }, [
        events,
        today
    ]);
    // per-category counts for filter pills
    const categoryCounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const counts = {
            __all__: 0
        };
        const upcoming = events.filter((e)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isAfter$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAfter"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseISO"])(e.date), today));
        counts.__all__ = upcoming.length;
        for (const e of upcoming){
            counts[e.eventType] = (counts[e.eventType] || 0) + 1;
        }
        return counts;
    }, [
        events,
        today
    ]);
    // stats
    const electionCount = events.filter((e)=>e.eventType === 'election_date' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isAfter$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAfter"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseISO"])(e.date), today)).length;
    const debateCount = events.filter((e)=>(e.eventType === 'debate' || e.eventType === 'candidate_forum') && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isAfter$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAfter"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseISO"])(e.date), today)).length;
    const councilCount = events.filter((e)=>e.eventType === 'city_council' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isAfter$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAfter"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseISO"])(e.date), today)).length;
    const upcomingCount = events.filter((e)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isAfter$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAfter"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseISO"])(e.date), today)).length;
    // ─── Render ───────────────────────────────────────────────────────────────
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/calendar/page.tsx",
                lineNumber: 142,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "min-h-screen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "relative bg-gradient-to-b from-navy via-navy to-navy-dark border-b border-gold/15 py-16 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.08)_0%,_transparent_65%)]"
                            }, void 0, false, {
                                fileName: "[project]/app/calendar/page.tsx",
                                lineNumber: 147,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(59,130,246,0.04)_0%,_transparent_60%)]"
                            }, void 0, false, {
                                fileName: "[project]/app/calendar/page.tsx",
                                lineNumber: 148,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "container-custom relative z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center max-w-3xl mx-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-16 h-16 bg-gold/10 border border-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                    className: "w-8 h-8 text-gold"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/calendar/page.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/calendar/page.tsx",
                                                lineNumber: 151,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-hero font-bold text-white mb-4",
                                                children: "Civic Events Calendar"
                                            }, void 0, false, {
                                                fileName: "[project]/app/calendar/page.tsx",
                                                lineNumber: 154,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg text-cream/60 max-w-2xl mx-auto",
                                                children: "Every town hall, election date, debate, city council meeting, school board session, and community event in Ellis County — all in one place."
                                            }, void 0, false, {
                                                fileName: "[project]/app/calendar/page.tsx",
                                                lineNumber: 157,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/calendar/page.tsx",
                                        lineNumber: 150,
                                        columnNumber: 25
                                    }, this),
                                    !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 max-w-2xl mx-auto",
                                        children: [
                                            {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$vote$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Vote$3e$__["Vote"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/calendar/page.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 45
                                                }, this),
                                                value: electionCount,
                                                label: 'Upcoming Elections'
                                            },
                                            {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/calendar/page.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 45
                                                }, this),
                                                value: debateCount,
                                                label: 'Debates & Forums'
                                            },
                                            {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/calendar/page.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 45
                                                }, this),
                                                value: councilCount,
                                                label: 'Council Meetings'
                                            },
                                            {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/calendar/page.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 45
                                                }, this),
                                                value: upcomingCount,
                                                label: 'Total Upcoming'
                                            }
                                        ].map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white/5 border border-white/10 rounded-xl p-4 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-gold mb-1 flex justify-center",
                                                        children: stat.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/calendar/page.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold text-white font-display",
                                                        children: stat.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/calendar/page.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-cream/50 mt-0.5",
                                                        children: stat.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/calendar/page.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, stat.label, true, {
                                                fileName: "[project]/app/calendar/page.tsx",
                                                lineNumber: 171,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/calendar/page.tsx",
                                        lineNumber: 164,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/calendar/page.tsx",
                                lineNumber: 149,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/calendar/page.tsx",
                        lineNumber: 146,
                        columnNumber: 17
                    }, this),
                    thisWeekEvents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 border-b border-gold/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container-custom py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                            className: "w-5 h-5 text-gold flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/app/calendar/page.tsx",
                                            lineNumber: 187,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-display text-base font-bold text-white",
                                            children: "This Week"
                                        }, void 0, false, {
                                            fileName: "[project]/app/calendar/page.tsx",
                                            lineNumber: 188,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-red-500/20 text-red-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-red-500/30",
                                            children: [
                                                thisWeekEvents.length,
                                                " EVENT",
                                                thisWeekEvents.length !== 1 ? 'S' : ''
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/calendar/page.tsx",
                                            lineNumber: 189,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/calendar/page.tsx",
                                    lineNumber: 186,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 overflow-x-auto pb-2 scrollbar-hide",
                                    children: thisWeekEvents.slice(0, 8).map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-shrink-0 bg-navy/60 border border-gold/20 rounded-lg p-3 min-w-[220px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5 mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "w-3 h-3 text-gold"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/calendar/page.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-cream/60 text-xs",
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseISO"])(event.date), 'EEE, MMM d'),
                                                                " · ",
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$ics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTime12h"])(event.startTime),
                                                                " CT"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/calendar/page.tsx",
                                                            lineNumber: 201,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/calendar/page.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white text-xs font-semibold truncate",
                                                    children: event.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/calendar/page.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-cream/40 text-[10px] flex items-center gap-1 mt-0.5 truncate",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                            className: "w-2.5 h-2.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/calendar/page.tsx",
                                                            lineNumber: 207,
                                                            columnNumber: 45
                                                        }, this),
                                                        " ",
                                                        event.location.city
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/calendar/page.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, event.id, true, {
                                            fileName: "[project]/app/calendar/page.tsx",
                                            lineNumber: 195,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/calendar/page.tsx",
                                    lineNumber: 193,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/calendar/page.tsx",
                            lineNumber: 185,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/calendar/page.tsx",
                        lineNumber: 184,
                        columnNumber: 21
                    }, this),
                    featuredEvents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-navy-dark/40 border-b border-gold/10 py-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container-custom",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            className: "w-5 h-5 text-gold"
                                        }, void 0, false, {
                                            fileName: "[project]/app/calendar/page.tsx",
                                            lineNumber: 221,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-white font-display font-bold text-lg",
                                            children: "Featured Events"
                                        }, void 0, false, {
                                            fileName: "[project]/app/calendar/page.tsx",
                                            lineNumber: 222,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/calendar/page.tsx",
                                    lineNumber: 220,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                                    children: featuredEvents.slice(0, 3).map((event, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 16
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                duration: 0.35,
                                                delay: index * 0.05
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$events$2f$CivicEventCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                event: event
                                            }, void 0, false, {
                                                fileName: "[project]/app/calendar/page.tsx",
                                                lineNumber: 232,
                                                columnNumber: 41
                                            }, this)
                                        }, event.id, false, {
                                            fileName: "[project]/app/calendar/page.tsx",
                                            lineNumber: 226,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/calendar/page.tsx",
                                    lineNumber: 224,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/calendar/page.tsx",
                            lineNumber: 219,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/calendar/page.tsx",
                        lineNumber: 218,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "section",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container-custom",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-3 mb-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/40"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/calendar/page.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Search events, locations, topics…",
                                                    value: searchQuery,
                                                    onChange: (e)=>setSearchQuery(e.target.value),
                                                    className: "w-full bg-navy border border-white/10 rounded-lg pl-9 pr-8 py-2.5 text-sm text-white placeholder-cream/40 focus:outline-none focus:border-gold/40 transition-colors"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/calendar/page.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 33
                                                }, this),
                                                searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSearchQuery(''),
                                                    className: "absolute right-2.5 top-1/2 -translate-y-1/2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "w-3.5 h-3.5 text-cream/40 hover:text-cream/70 transition-colors"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/calendar/page.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/calendar/page.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/calendar/page.tsx",
                                            lineNumber: 247,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/40 pointer-events-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/calendar/page.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: selectedCity,
                                                    onChange: (e)=>setSelectedCity(e.target.value),
                                                    className: "bg-navy border border-white/10 rounded-lg pl-9 pr-8 py-2.5 text-sm text-white focus:outline-none focus:border-gold/40 transition-colors appearance-none cursor-pointer",
                                                    children: CITIES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: c
                                                        }, c, false, {
                                                            fileName: "[project]/app/calendar/page.tsx",
                                                            lineNumber: 271,
                                                            columnNumber: 56
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/calendar/page.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: "absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-cream/40 pointer-events-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/calendar/page.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/calendar/page.tsx",
                                            lineNumber: 264,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setHideUpcoming(!hideUpcoming),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border transition-all whitespace-nowrap', hideUpcoming ? 'bg-white/5 border-white/10 text-cream/60 hover:border-white/20' : 'bg-gold/10 border-gold/30 text-gold'),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/calendar/page.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 33
                                                }, this),
                                                hideUpcoming ? 'Show All Dates' : 'Upcoming Only'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/calendar/page.tsx",
                                            lineNumber: 277,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: fetchEvents,
                                            disabled: loading,
                                            className: "flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-sm text-cream/50 border border-white/10 hover:border-white/20 transition-colors",
                                            title: "Refresh events",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('w-4 h-4', loading && 'animate-spin')
                                            }, void 0, false, {
                                                fileName: "[project]/app/calendar/page.tsx",
                                                lineNumber: 297,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/calendar/page.tsx",
                                            lineNumber: 291,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/calendar/page.tsx",
                                    lineNumber: 245,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-hide",
                                    children: CATEGORY_ORDER.map((cat)=>{
                                        const count = categoryCounts[cat.type] || 0;
                                        if (cat.type !== '__all__' && count === 0) return null;
                                        const isActive = activeCategory === cat.type;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveCategory(cat.type),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200', isActive ? 'bg-gold text-navy border-gold shadow-[0_0_12px_rgba(212,175,55,0.3)]' : 'bg-white/5 text-cream/70 border-white/10 hover:border-white/25 hover:text-white'),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: cat.emoji
                                                }, void 0, false, {
                                                    fileName: "[project]/app/calendar/page.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: cat.label
                                                }, void 0, false, {
                                                    fileName: "[project]/app/calendar/page.tsx",
                                                    lineNumber: 319,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('text-[10px] px-1.5 py-0.5 rounded-full font-bold', isActive ? 'bg-navy/30 text-navy' : 'bg-white/10 text-cream/50'),
                                                    children: count
                                                }, void 0, false, {
                                                    fileName: "[project]/app/calendar/page.tsx",
                                                    lineNumber: 320,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, cat.type, true, {
                                            fileName: "[project]/app/calendar/page.tsx",
                                            lineNumber: 308,
                                            columnNumber: 37
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/calendar/page.tsx",
                                    lineNumber: 302,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-cream/50 text-sm",
                                            children: [
                                                "Showing ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gold font-semibold",
                                                    children: filteredEvents.length
                                                }, void 0, false, {
                                                    fileName: "[project]/app/calendar/page.tsx",
                                                    lineNumber: 334,
                                                    columnNumber: 41
                                                }, this),
                                                " event",
                                                filteredEvents.length !== 1 ? 's' : '',
                                                activeCategory !== '__all__' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-1",
                                                    children: [
                                                        "in ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white",
                                                            children: CATEGORY_ORDER.find((c)=>c.type === activeCategory)?.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/calendar/page.tsx",
                                                            lineNumber: 336,
                                                            columnNumber: 63
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/calendar/page.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 37
                                                }, this),
                                                selectedCity !== 'All Cities' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-1",
                                                    children: [
                                                        "· ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white",
                                                            children: selectedCity
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/calendar/page.tsx",
                                                            lineNumber: 339,
                                                            columnNumber: 62
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/calendar/page.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/calendar/page.tsx",
                                            lineNumber: 333,
                                            columnNumber: 29
                                        }, this),
                                        (activeCategory !== '__all__' || searchQuery || selectedCity !== 'All Cities') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setActiveCategory('__all__');
                                                setSearchQuery('');
                                                setSelectedCity('All Cities');
                                            },
                                            className: "text-xs text-cream/40 hover:text-cream/70 flex items-center gap-1 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/calendar/page.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 37
                                                }, this),
                                                " Clear filters"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/calendar/page.tsx",
                                            lineNumber: 343,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/calendar/page.tsx",
                                    lineNumber: 332,
                                    columnNumber: 25
                                }, this),
                                isFallback && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-lg px-4 py-2.5 mb-5 text-sm text-amber-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                            className: "w-4 h-4 flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/app/calendar/page.tsx",
                                            lineNumber: 355,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Showing locally-cached event data. Live sync will resume shortly."
                                        }, void 0, false, {
                                            fileName: "[project]/app/calendar/page.tsx",
                                            lineNumber: 356,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/calendar/page.tsx",
                                    lineNumber: 354,
                                    columnNumber: 29
                                }, this),
                                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                                    children: Array.from({
                                        length: 9
                                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl border border-white/10 bg-white/5 p-4 animate-pulse",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-14 h-14 rounded-lg bg-white/10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/calendar/page.tsx",
                                                        lineNumber: 366,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-2.5 bg-white/10 rounded w-1/3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/calendar/page.tsx",
                                                                lineNumber: 368,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-3.5 bg-white/10 rounded w-3/4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/calendar/page.tsx",
                                                                lineNumber: 369,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-2.5 bg-white/10 rounded w-1/2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/calendar/page.tsx",
                                                                lineNumber: 370,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/calendar/page.tsx",
                                                        lineNumber: 367,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/calendar/page.tsx",
                                                lineNumber: 365,
                                                columnNumber: 41
                                            }, this)
                                        }, i, false, {
                                            fileName: "[project]/app/calendar/page.tsx",
                                            lineNumber: 364,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/calendar/page.tsx",
                                    lineNumber: 362,
                                    columnNumber: 29
                                }, this),
                                !loading && filteredEvents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-10",
                                    children: activeCategory === '__all__' ? // Group by eventType
                                    CATEGORY_ORDER.slice(1).map((cat)=>{
                                        const catEvents = filteredEvents.filter((e)=>e.eventType === cat.type);
                                        if (catEvents.length === 0) return null;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xl",
                                                            children: cat.emoji
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/calendar/page.tsx",
                                                            lineNumber: 389,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-white font-display font-bold text-base",
                                                            children: cat.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/calendar/page.tsx",
                                                            lineNumber: 390,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-cream/40 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full",
                                                            children: catEvents.length
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/calendar/page.tsx",
                                                            lineNumber: 391,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 h-px bg-white/10"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/calendar/page.tsx",
                                                            lineNumber: 394,
                                                            columnNumber: 53
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/calendar/page.tsx",
                                                    lineNumber: 388,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                                                    children: catEvents.map((event, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            initial: {
                                                                opacity: 0,
                                                                y: 12
                                                            },
                                                            animate: {
                                                                opacity: 1,
                                                                y: 0
                                                            },
                                                            transition: {
                                                                duration: 0.3,
                                                                delay: idx * 0.03
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$events$2f$CivicEventCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                event: event
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/calendar/page.tsx",
                                                                lineNumber: 404,
                                                                columnNumber: 61
                                                            }, this)
                                                        }, event.id, false, {
                                                            fileName: "[project]/app/calendar/page.tsx",
                                                            lineNumber: 398,
                                                            columnNumber: 57
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/calendar/page.tsx",
                                                    lineNumber: 396,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, cat.type, true, {
                                            fileName: "[project]/app/calendar/page.tsx",
                                            lineNumber: 387,
                                            columnNumber: 45
                                        }, this);
                                    }) : // Single flat grid for a specific category
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                                        children: filteredEvents.map((event, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 12
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                transition: {
                                                    duration: 0.3,
                                                    delay: idx * 0.03
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$events$2f$CivicEventCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    event: event
                                                }, void 0, false, {
                                                    fileName: "[project]/app/calendar/page.tsx",
                                                    lineNumber: 421,
                                                    columnNumber: 49
                                                }, this)
                                            }, event.id, false, {
                                                fileName: "[project]/app/calendar/page.tsx",
                                                lineNumber: 415,
                                                columnNumber: 45
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/calendar/page.tsx",
                                        lineNumber: 413,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/calendar/page.tsx",
                                    lineNumber: 380,
                                    columnNumber: 29
                                }, this),
                                !loading && filteredEvents.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            className: "w-14 h-14 text-gold/30 mx-auto mb-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/calendar/page.tsx",
                                            lineNumber: 432,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-display font-semibold text-white mb-2",
                                            children: "No events found"
                                        }, void 0, false, {
                                            fileName: "[project]/app/calendar/page.tsx",
                                            lineNumber: 433,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-cream/50 mb-6 max-w-sm mx-auto",
                                            children: 'Try adjusting your filters, search query, or toggle "Show All Dates" to include past events.'
                                        }, void 0, false, {
                                            fileName: "[project]/app/calendar/page.tsx",
                                            lineNumber: 434,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setActiveCategory('__all__');
                                                setSearchQuery('');
                                                setSelectedCity('All Cities');
                                                setHideUpcoming(false);
                                            },
                                            className: "btn-primary",
                                            children: "Clear All Filters"
                                        }, void 0, false, {
                                            fileName: "[project]/app/calendar/page.tsx",
                                            lineNumber: 437,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/calendar/page.tsx",
                                    lineNumber: 431,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/calendar/page.tsx",
                            lineNumber: 242,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/calendar/page.tsx",
                        lineNumber: 241,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-navy-dark/50 border-t border-gold/10 py-14",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container-custom max-w-3xl mx-auto text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-section font-bold text-white mb-3",
                                    children: "Know of an event we missed?"
                                }, void 0, false, {
                                    fileName: "[project]/app/calendar/page.tsx",
                                    lineNumber: 451,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-cream/60 mb-6",
                                    children: "Help keep Ellis County informed — submit a civic event for review and we'll add it to the calendar."
                                }, void 0, false, {
                                    fileName: "[project]/app/calendar/page.tsx",
                                    lineNumber: 452,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowSubmitForm(true),
                                    className: "btn-primary flex items-center gap-2 mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/calendar/page.tsx",
                                            lineNumber: 456,
                                            columnNumber: 29
                                        }, this),
                                        " Submit an Event"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/calendar/page.tsx",
                                    lineNumber: 455,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/calendar/page.tsx",
                            lineNumber: 450,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/calendar/page.tsx",
                        lineNumber: 449,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "border-t border-gold/10 bg-navy-dark/80 py-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container-custom",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3 max-w-3xl mx-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "w-4 h-4 text-gold flex-shrink-0 mt-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/calendar/page.tsx",
                                        lineNumber: 465,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-cream/50 leading-relaxed",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-cream/80",
                                                children: "Non-Partisan Notice:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/calendar/page.tsx",
                                                lineNumber: 467,
                                                columnNumber: 33
                                            }, this),
                                            " ",
                                            disclaimer,
                                            ' ',
                                            "Event data is aggregated from publicly available sources and verified where possible. Election dates are sourced from the Texas Secretary of State. If you believe any information is inaccurate, please contact us."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/calendar/page.tsx",
                                        lineNumber: 466,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/calendar/page.tsx",
                                lineNumber: 464,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/calendar/page.tsx",
                            lineNumber: 463,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/calendar/page.tsx",
                        lineNumber: 462,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/calendar/page.tsx",
                lineNumber: 143,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/calendar/page.tsx",
                lineNumber: 475,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showSubmitForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: ()=>setShowSubmitForm(false),
                    className: "fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.95,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            scale: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            scale: 0.95
                        },
                        onClick: (e)=>e.stopPropagation(),
                        className: "w-full max-w-lg bg-navy-dark border border-gold/30 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$events$2f$EventSubmitForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            userId: "guest",
                            onClose: ()=>setShowSubmitForm(false),
                            onSubmitted: async ()=>{
                                setShowSubmitForm(false);
                                await fetchEvents();
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/calendar/page.tsx",
                            lineNumber: 494,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/calendar/page.tsx",
                        lineNumber: 487,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/calendar/page.tsx",
                    lineNumber: 480,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/calendar/page.tsx",
                lineNumber: 478,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a4a524a8._.js.map