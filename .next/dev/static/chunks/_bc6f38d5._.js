(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/layout/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-in.js [app-client] (ecmascript) <export default as LogIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forum$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/forum/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const AuthModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/forum/AuthModal.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/components/forum/AuthModal.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = AuthModal;
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
    _s();
    const { user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forum$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrollProgress, setScrollProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showAuthModal, setShowAuthModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [authTab, setAuthTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('login');
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const openAuth = (tab)=>{
        setAuthTab(tab);
        setShowAuthModal(true);
        setMobileMenuOpen(false);
    };
    const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Header.useCallback[handleScroll]": ()=>{
            const scrollTop = window.scrollY;
            setScrolled(scrollTop > 20);
            // Scroll progress
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (docHeight > 0) {
                setScrollProgress(scrollTop / docHeight * 100);
            }
        }
    }["Header.useCallback[handleScroll]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            return ({
                "Header.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        handleScroll
    ]);
    // Close mobile menu on route change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            setMobileMenuOpen(false);
        }
    }["Header.useEffect"], [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `sticky top-0 z-50 navbar-glass transition-all duration-500 ${scrolled ? 'scrolled' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Header.tsx",
                        lineNumber: 74,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "container-custom",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between h-16 sm:h-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "flex items-center gap-3 group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-display text-sm sm:text-lg font-bold text-white leading-tight tracking-tight",
                                                    children: "Pivotal Voice"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Header.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden lg:flex items-center gap-1",
                                    children: navigation.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            "aria-label": "Search",
                                            className: "p-2.5 text-cream/60 hover:text-gold rounded-full hover:bg-gold/10 transition-all duration-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/services#book",
                                            className: "hidden md:inline-flex btn-primary text-sm !px-5 !py-2.5",
                                            children: "Book Consultation"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Header.tsx",
                                            lineNumber: 130,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: user?.isAdmin ? '/admin' : '/admin/login',
                                            "aria-label": user?.isAdmin ? 'Admin dashboard' : 'Admin login',
                                            className: "hidden md:flex p-2.5 text-cream/60 hover:text-gold rounded-full hover:bg-gold/10 transition-all duration-300",
                                            children: user?.isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Header.tsx",
                                                lineNumber: 142,
                                                columnNumber: 50
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                                            className: "lg:hidden p-2.5 text-cream/60 hover:text-gold rounded-full hover:bg-gold/10 transition-all duration-300",
                                            "aria-label": "Toggle menu",
                                            "aria-expanded": mobileMenuOpen,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                mode: "wait",
                                                children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "container-custom py-6 flex flex-col flex-1 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-6 pb-5 border-b border-gold/10 flex-shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-10 h-10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                        className: "space-y-1 flex-1 overflow-y-auto",
                                        children: navigation.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                            user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-3 p-3 bg-navy-dark/60 border border-gold/15 rounded-xl",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-8 h-8 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    logout();
                                                                    setMobileMenuOpen(false);
                                                                },
                                                                className: "flex items-center gap-1 text-sm text-cream/50 hover:text-red-400 transition-colors ml-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
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
                                                    user.isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>openAuth('login'),
                                                        className: "flex-1 btn-secondary text-sm flex items-center justify-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__["LogIn"], {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>openAuth('register'),
                                                        className: "flex-1 btn-primary text-sm flex items-center justify-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthModal, {
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
_s(Header, "UofB/UbdzfGd4dqPUE5zShhn7h4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forum$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c1 = Header;
var _c, _c1;
__turbopack_context__.k.register(_c, "AuthModal");
__turbopack_context__.k.register(_c1, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/crm/newsletter-service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/client.ts [app-client] (ecmascript)");
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
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('subscribers').select('*');
    if (error) {
        console.error('Error fetching subscribers:', error);
        return [];
    }
    return (data || []).map(mapSubscriber);
}
async function addSubscriber(data) {
    const { data: existing } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('subscribers').select('*').eq('email', data.email.toLowerCase()).maybeSingle();
    if (existing) {
        if (existing.status === 'unsubscribed') {
            const { data: updated, error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('subscribers').update({
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
    const { data: newSub, error: insertError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('subscribers').insert([
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
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('subscribers').select('*').eq('id', id).single();
    return data ? mapSubscriber(data) : undefined;
}
async function getSubscriberByEmail(email) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('subscribers').select('*').eq('email', email.toLowerCase()).maybeSingle();
    return data ? mapSubscriber(data) : undefined;
}
async function updateSubscriberPreferences(id, prefs) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('subscribers').update({
        ...prefs,
        updated_at: new Date().toISOString()
    }).eq('id', id);
    if (error) console.error('Error updating preferences:', error);
}
async function unsubscribeById(id) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('subscribers').update({
        status: 'unsubscribed',
        updated_at: new Date().toISOString()
    }).eq('id', id);
    return !error;
}
async function getCRMStats() {
    const { data: subs, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('subscribers').select('*');
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
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('subscribers').update({
        status: 'active',
        updated_at: new Date().toISOString()
    }).eq('id', id);
    return !error;
}
async function getCampaigns() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('email_campaigns').select('*').order('sent_at', {
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
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('subscribers').select('*').eq('city', city);
    if (error) return [];
    return (data || []).map(mapSubscriber);
}
async function getSubscribersByInterest(interest) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('subscribers').select('*').contains('interests', [
        interest
    ]);
    if (error) return [];
    return (data || []).map(mapSubscriber);
}
function isPopupDismissed() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        return localStorage.getItem('pv_newsletter_dismissed') === 'true';
    } catch  {
        return true; // localStorage blocked (Firefox private mode, strict privacy, etc.)
    }
}
function dismissPopup() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        localStorage.setItem('pv_newsletter_dismissed', 'true');
    } catch  {
    // localStorage blocked — silently ignore
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/youtube.js [app-client] (ecmascript) <export default as Youtube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2f$newsletter$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/crm/newsletter-service.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"],
        href: 'https://www.facebook.com/pivotalvoice'
    },
    {
        name: 'YouTube',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"],
        href: 'https://www.youtube.com/@pivotalvoice'
    },
    {
        name: 'Instagram',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"],
        href: 'https://www.instagram.com/pivotal_voice/'
    }
];
function Footer() {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [subStatus, setSubStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const handleSubscribe = async (e)=>{
        e.preventDefault();
        if (!email) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2f$newsletter$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addSubscriber"])({
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative bg-navy-dark border-t border-gold/10 mt-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent"
            }, void 0, false, {
                fileName: "[project]/components/layout/Footer.tsx",
                lineNumber: 49,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-custom py-12 sm:py-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "flex items-center gap-3 group mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-12 h-12",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-display text-lg font-bold text-white leading-tight",
                                                        children: "Pivotal Voice"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/Footer.tsx",
                                                        lineNumber: 66,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-cream/50 text-sm leading-relaxed mb-6",
                                        children: "A non-partisan platform dedicated to creating meaningful dialogue on the issues that shape Ellis County's future."
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 74,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: socialLinks.map((social)=>{
                                            const Icon = social.icon;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: social.href,
                                                "aria-label": social.name,
                                                className: "w-10 h-10 rounded-full bg-navy border border-gold/20 flex items-center justify-center text-cream/50 hover:text-gold hover:border-gold hover:rotate-[360deg] transition-all duration-700",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display text-sm font-bold text-gold/80 uppercase tracking-wider mb-5",
                                        children: "Platform"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 99,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3",
                                        children: platformLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: link.href,
                                                    className: "text-cream/60 hover:text-gold transition-colors duration-300 text-sm flex items-center gap-2 group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display text-sm font-bold text-gold/80 uppercase tracking-wider mb-5",
                                        children: "Services"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 119,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3",
                                        children: serviceLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: link.href,
                                                    className: "text-cream/60 hover:text-gold transition-colors duration-300 text-sm flex items-center gap-2 group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display text-sm font-bold text-gold/80 uppercase tracking-wider mb-5",
                                        children: "Stay Connected"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 139,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/contact",
                                                className: "text-cream/60 hover:text-gold transition-colors duration-300 text-sm block",
                                                children: "Contact Us"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Footer.tsx",
                                                lineNumber: 143,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-cream/50 text-sm mb-3",
                                                        children: "Subscribe to our newsletter"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/Footer.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 33
                                                    }, this),
                                                    subStatus === 'ok' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-green-400 text-sm",
                                                        children: "You're subscribed!"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/Footer.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 37
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                        onSubmit: handleSubscribe,
                                                        className: "flex flex-col sm:flex-row gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                    subStatus === 'err' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-8"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Footer.tsx",
                        lineNumber: 184,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap justify-center gap-4 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/privacy",
                                        className: "text-cream/40 hover:text-gold transition-colors duration-300",
                                        children: "Privacy Policy"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 192,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/terms",
                                        className: "text-cream/40 hover:text-gold transition-colors duration-300",
                                        children: "Terms of Service"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 195,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(Footer, "9ixfvBm/E0PTcSgGPjUMoCpHUeo=");
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/resources.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getResourceById",
    ()=>getResourceById,
    "getResourceBySlug",
    ()=>getResourceBySlug,
    "resources",
    ()=>resources
]);
const resources = [
    {
        id: 1,
        slug: 'ellis-county-voter-guide-2026',
        title: 'Ellis County Voter Guide 2026',
        description: 'Full breakdown of every race and proposition on the Ellis County ballot — candidates, positions, and what each measure means for your community.',
        type: 'PDF',
        category: 'Voter Information',
        audience: [
            'Voters'
        ],
        featured: true,
        downloads: 342,
        tags: [
            'Ellis County',
            '2026 Election',
            'Ballot Guide'
        ],
        content: `## What's on the Ballot

The 2026 Ellis County ballot includes races for County Judge, County Commissioner (Precincts 1 & 3), Sheriff, Tax Assessor-Collector, and several judicial seats, plus two bond propositions.

## How to Use This Guide

- **Research each candidate** using their official websites, public statements, and voting records where applicable.
- **Read every proposition twice** — once as written, once in plain language below.
- **Early voting** runs October 19–28. Election Day is November 3, 2026.

## Key Races

**County Judge** — The County Judge presides over Commissioners Court and oversees the county budget. This is the most powerful administrative role in Ellis County government.

**County Commissioner Pct. 1 & 3** — Commissioners vote on road projects, county contracts, tax rates, and emergency management funding.

**Sheriff** — Oversees the Ellis County Sheriff's Office, jail operations, and law enforcement policy.

## Bond Propositions

**Proposition A — Road & Bridge Improvements ($45M)**
Funds resurfacing of 120 miles of county roads and replacement of 8 aging bridges. Estimated tax impact: ~$0.03 per $100 valuation.

**Proposition B — Ellis County Jail Expansion ($28M)**
Adds 200 beds and a mental health diversion unit to the current facility. No new tax rate increase proposed — funded through existing debt capacity.

## Where to Vote

Find your polling location at [VoteTexas.gov](https://www.votetexas.gov) or call the Ellis County Elections Office at (972) 825-5195.

## Voter ID Requirements

Texas requires photo ID to vote. Acceptable forms include: Texas Driver License, Texas ID Card, Texas Handgun License, U.S. Military ID, U.S. Passport, or Citizenship Certificate with photo. Expired IDs accepted if within 4 years of expiration.`
    },
    {
        id: 2,
        slug: 'texas-voter-registration-step-by-step',
        title: 'Texas Voter Registration: Step-by-Step',
        description: 'Deadlines, ID requirements, address changes, and how to check your registration status online — everything a first-time voter needs.',
        type: 'Checklist',
        category: 'Voter Information',
        audience: [
            'Voters'
        ],
        featured: true,
        downloads: 289,
        tags: [
            'Registration',
            'Texas',
            'First-Time Voters'
        ],
        content: `## Registration Deadlines

- **By mail or in person:** 30 days before Election Day
- **Online (via DPS):** 30 days before Election Day
- **2026 General Election deadline:** October 5, 2026

## Step-by-Step Checklist

**Step 1 — Confirm eligibility**
☐ U.S. citizen
☐ Texas resident
☐ 18+ on Election Day (17-year-olds may register if they turn 18 by Election Day)
☐ Not convicted of a felony (or have completed sentence/probation)
☐ Not declared mentally incapacitated by a court

**Step 2 — Register**
☐ Complete Form VR-2 (available at county clerk's office, DPS, or libraries)
☐ Or register online at [TXsecofstate.state.tx.us](https://www.sos.texas.gov) if you have a Texas DL/ID

**Step 3 — Verify your registration**
☐ Check status at [VoteTexas.gov](https://www.votetexas.gov)
☐ Your Voter Registration Certificate arrives by mail within 30 days

**Step 4 — Update if you move**
☐ Moving within Texas? Re-register with your new address
☐ Moving to a new county? Must re-register in the new county

## Check Your Status

Visit [VoteTexas.gov](https://www.votetexas.gov) → "Am I Registered?" → Enter your name, DOB, and county.

## Questions?

Ellis County Elections Office
(972) 825-5195 | 109 S. Jackson St., Waxahachie, TX 75165`
    },
    {
        id: 3,
        slug: 'know-your-voter-rights-texas',
        title: 'Know Your Voter Rights in Texas',
        description: 'A plain-language summary of your legal rights at the polls: assistance provisions, ID rules, provisional ballots, and how to report problems.',
        type: 'PDF',
        category: 'Voter Information',
        audience: [
            'Voters'
        ],
        downloads: 198,
        tags: [
            'Voter Rights',
            'Texas Law',
            'Election Day'
        ],
        content: `## Your Rights at the Polls

### Right to a Provisional Ballot
If your name doesn't appear on the voter rolls, you have the right to cast a **provisional ballot**. Poll workers must offer it — you don't have to ask. Your ballot will be counted once your eligibility is confirmed within 6 days.

### Right to Assistance
You may receive help from a person of your choice (not your employer or union rep) if you have a disability or cannot read. The assistant must sign an oath and cannot influence your vote.

### Right to a Private Vote
No one — poll worker, party observer, or companion — may pressure, influence, or watch you mark your ballot.

### Right to a Working Voting Machine
If a machine malfunctions, poll workers must provide a working machine or offer a paper ballot alternative.

### Right to Return if in Line at Close
If you are in line when polls close at 7:00 PM, you have the right to vote. Poll workers cannot send you away.

## What to Do If Your Rights Are Violated

1. **Ask to speak to the presiding election judge** at your polling location.
2. **Document everything** — time, names, what was said.
3. **Call the Texas Secretary of State:** 1-800-252-VOTE (8683)
4. **Report online:** [sos.texas.gov](https://www.sos.texas.gov)
5. **Contact the Ellis County Elections Office:** (972) 825-5195

## ID Troubleshooting

No acceptable ID? You may sign a **Reasonable Impediment Declaration** and cast a regular ballot using a supporting document (utility bill, bank statement, government document with name and address).`
    },
    {
        id: 4,
        slug: 'how-to-attend-county-commissioners-meeting',
        title: 'How to Attend a County Commissioners Meeting',
        description: 'Step-by-step guide to participating in local government — agenda access, public comment sign-up, decorum rules, and follow-up strategies.',
        type: 'PDF',
        category: 'Civic Engagement',
        audience: [
            'Voters'
        ],
        featured: true,
        downloads: 156,
        tags: [
            'Local Government',
            'Public Comment',
            'Ellis County'
        ],
        content: `## When & Where

Ellis County Commissioners Court meets the **second and fourth Monday of each month at 10:00 AM** in the historic Ellis County Courthouse, 101 W. Main St., Waxahachie, TX 75165. Meetings are open to the public.

## Before the Meeting

**Step 1 — Get the agenda**
Agendas are posted 72 hours in advance on the [Ellis County website](https://elliscounty.com). Review items relevant to you.

**Step 2 — Sign up for public comment**
Arrive 15–20 minutes early and sign the public comment sheet at the clerk's table. Speakers are typically called in order.

**Step 3 — Prepare your remarks**
You will have **3 minutes**. Practice out loud. Cover: who you are, what you want, and what you want them to do about it. Bring 5 copies of any written materials to hand to commissioners and the clerk.

## During the Meeting

- Address the **County Judge** (presiding officer), not individual commissioners.
- Speak clearly and stay within your time limit — the clerk will signal when time is almost up.
- Be specific: reference the agenda item number, dollar amount, or policy name.
- Avoid personal attacks — focus on the issue.

## After the Meeting

- **Follow up in writing** — email your comments to the County Clerk within 48 hours so they're on record.
- **Track the vote** — minutes are posted online within 10 days.
- **Build relationships** — introduce yourself to commissioners and their staff after the meeting.

## Ellis County Commissioner Contacts

| Precinct | Commissioner | Contact |
|----------|-------------|---------|
| Pct. 1 | Check elliscounty.com | (972) 825-5000 |
| Pct. 2 | Check elliscounty.com | (972) 825-5000 |
| Pct. 3 | Check elliscounty.com | (972) 825-5000 |
| Pct. 4 | Check elliscounty.com | (972) 825-5000 |`
    },
    {
        id: 5,
        slug: 'open-records-request-template-texas-pia',
        title: 'Open Records Request Template (Texas PIA)',
        description: 'A ready-to-send FOIA/PIA letter you can customize to request government documents from any Texas agency or county office.',
        type: 'Template',
        category: 'Government Transparency',
        audience: [
            'Voters'
        ],
        downloads: 134,
        tags: [
            'FOIA',
            'PIA',
            'Open Records',
            'Transparency'
        ],
        content: `## About the Texas Public Information Act

The Texas Public Information Act (PIA) gives you the right to request records from any Texas government body — counties, cities, school districts, state agencies, and more. Agencies must respond within **10 business days**.

## Template Letter

---

**[Your Name]**
[Your Address]
[City, State ZIP]
[Date]

**Open Records Officer**
[Agency Name]
[Agency Address]

**Re: Public Information Request under Texas Government Code Chapter 552**

Dear Open Records Officer:

Pursuant to the Texas Public Information Act, I hereby request copies of the following public records:

> [Describe the records you want as specifically as possible — include date ranges, subject matter, department, or document type. Example: "All contracts between Ellis County and [Vendor Name] from January 1, 2023 to present, including any amendments or addenda."]

I request that these records be provided in electronic format (PDF or Excel) via email to [your email address], if available. If any portion of this request is denied, please cite the specific statutory exemption and provide a written explanation.

If there are any fees associated with this request, please notify me in advance if they will exceed $[dollar amount, e.g. $25].

Thank you for your prompt attention to this matter.

Sincerely,
[Your Name]
[Phone Number]
[Email Address]

---

## Tips for a Strong Request

- **Be specific** — vague requests get vague responses or delays.
- **Ask for electronic format** — saves time and usually avoids copy fees.
- **Keep a copy** — send via email so you have a timestamped record.
- **Follow up on Day 10** if you haven't heard back.
- **Escalate if denied** — contact the Texas Attorney General's Open Records Division at (512) 478-6736.`
    },
    {
        id: 6,
        slug: 'evaluating-candidates-10-questions',
        title: 'Evaluating Candidates: 10 Questions to Ask',
        description: 'A nonpartisan framework for researching candidates — voting records, endorsements, funding sources, and consistency of public statements.',
        type: 'Guide',
        category: 'Voter Information',
        audience: [
            'Voters'
        ],
        downloads: 211,
        tags: [
            'Candidate Research',
            'Nonpartisan',
            'Due Diligence'
        ],
        content: `## The 10 Questions

**1. What is their relevant experience?**
Look for prior elected office, public service, professional background, or community leadership. Experience in the subject matter of the role matters.

**2. What are their top 3 priorities?**
Every candidate should be able to name them without hesitation. Vague answers ("I'll listen to constituents") are a red flag.

**3. Who is funding their campaign?**
Search campaign finance reports at the Texas Ethics Commission ([ethics.state.tx.us](https://www.ethics.state.tx.us)). Large donors often signal policy priorities.

**4. Who has endorsed them — and who hasn't?**
Endorsements from known organizations tell you whose interests a candidate represents. Note who is conspicuously absent.

**5. What do they say about the budget?**
For local races, ask: Do they support or oppose the current tax rate? What would they cut or fund?

**6. Have they shown up?**
Check attendance records for any prior board, council, or committee service. Public service requires showing up.

**7. Do their public statements match their record?**
Search local news archives. Look for flip-flops, contradictions, or positions that evolved without explanation.

**8. How do they handle disagreement?**
Watch debates, forums, or public meetings. Do they engage respectfully or get defensive and dismissive?

**9. What's their plan — not just their problem?**
Any candidate can identify problems. Ask: What specifically will you do about it in your first 90 days?

**10. Are they accessible?**
Did they respond to your email or voicemail? Will they do public forums? Accessibility before the election predicts accessibility in office.

## Where to Research

- **Texas Ethics Commission:** Campaign finance — ethics.state.tx.us
- **Ellis County Clerk:** Local filings — elliscounty.com
- **Waxahachie Daily Light:** Local news archives
- **Vote411.org:** Candidate questionnaires (nonpartisan)`
    },
    {
        id: 7,
        slug: 'decoding-local-government-budget',
        title: 'Decoding a Local Government Budget',
        description: 'Learn how to read a county or city budget, identify spending priorities, and ask the right questions at budget hearings.',
        type: 'Guide',
        category: 'Government Transparency',
        audience: [
            'Voters'
        ],
        downloads: 88,
        tags: [
            'Budget',
            'Local Government',
            'Accountability'
        ],
        content: `## Why Budgets Matter

The budget is the most honest document in local government. Every stated priority either has funding behind it or it doesn't. Learning to read one takes about an hour — and it changes how you see every candidate promise.

## Budget Anatomy

**General Fund** — The main operating budget. Funds day-to-day services: law enforcement, roads, parks, administration.

**Debt Service Fund** — Payments on bonds previously issued. Watch the trend: rising debt service limits future flexibility.

**Capital Improvement Plan (CIP)** — Multi-year plan for major infrastructure projects (roads, buildings, equipment). Usually separate from the operating budget.

**Special Revenue Funds** — Restricted money (grants, fees) that can only be spent on specific purposes.

## The Numbers to Focus On

| Line Item | What to Ask |
|-----------|-------------|
| Total Revenue | Is it growing? What's the source mix (taxes vs. fees vs. state)? |
| Personnel Costs | What % of the budget is salaries/benefits? Is it rising? |
| Debt Service | What % is committed to debt payments? |
| Fund Balance | Is the reserve healthy (10–20% of expenditures is a common benchmark)? |
| Year-over-Year Change | What grew the most? What was cut? |

## Questions to Ask at Budget Hearings

1. What assumptions are built into the revenue projections?
2. What is the current fund balance and what is the target?
3. What services were reduced or eliminated to balance this budget?
4. What is the total outstanding debt and projected payoff timeline?
5. How does our per-capita spending compare to peer counties?

## Where to Find Ellis County Budget Documents

Visit [elliscounty.com](https://elliscounty.com) → Departments → Auditor → Budget Documents. Adopted budgets are public record.`
    },
    {
        id: 8,
        slug: 'community-organizing-101',
        title: 'Community Organizing 101',
        description: 'Practical tactics for building coalitions, running effective meetings, amplifying constituent voices, and sustaining momentum between elections.',
        type: 'Guide',
        category: 'Civic Engagement',
        audience: [
            'Voters'
        ],
        downloads: 103,
        tags: [
            'Organizing',
            'Coalition Building',
            'Grassroots'
        ],
        content: `## The Core Principles

**Power comes from relationships.** Organizing is not mass broadcasting — it's one-on-one conversations that build trust and commitment over time.

**People act on self-interest.** Find out what matters to each person and connect your issue to that. Don't assume shared values mean shared priorities.

**Visible action creates momentum.** A petition with 50 signatures and 20 people at a public meeting is more powerful than 500 email signups that never show up.

## Building Your Coalition

**Step 1 — Map your stakeholders**
List everyone affected by the issue: neighbors, local business owners, faith communities, parent groups, civic clubs. Rate each by (a) how much they care and (b) how much influence they have.

**Step 2 — Start with your champions**
Identify 5–10 people who are already motivated. These are your core team. Recruit them for 1-hour conversations, not mass emails.

**Step 3 — Expand through their networks**
Ask each core team member: "Who else do you know who cares about this?" You're building a network of networks, not a list.

## Running Effective Meetings

- **Start and end on time** — always. It signals respect.
- **Publish an agenda 24 hours in advance.**
- **Assign a facilitator and a note-taker** — different people.
- **End every meeting with clear action items:** who does what by when.
- **Follow up within 24 hours** with meeting notes and next steps.

## Sustaining Momentum

- **Celebrate small wins publicly** — they prove progress is possible.
- **Rotate leadership** — avoid single points of failure.
- **Keep a shared calendar** of meetings, hearings, and deadlines.
- **Stay in touch between actions** — monthly check-in emails or texts keep people connected.

## Amplifying Your Voice

- **Show up in numbers** at public meetings — quantity matters.
- **Write letters to local media** — the Waxahachie Daily Light publishes community letters.
- **Use social media to document** public meetings and government actions.
- **Partner with Pivotal Voice** for strategic communications support.`
    },
    {
        id: 9,
        slug: 'texas-candidate-filing-checklist',
        title: 'Texas Candidate Filing Checklist',
        description: 'Every form, fee, deadline, and disclosure requirement for filing as a candidate in Texas — from county offices to state races.',
        type: 'Checklist',
        category: 'Candidate Toolkit',
        audience: [
            'Candidates'
        ],
        featured: true,
        downloads: 267,
        tags: [
            'Filing',
            'Texas SOS',
            'Compliance',
            'Deadlines'
        ],
        content: `## 2026 Filing Deadlines

- **Filing period opens:** January 2, 2026
- **Filing period closes:** February 2, 2026 (5:00 PM)
- **Primary Election:** March 3, 2026
- **Primary Runoff (if needed):** May 26, 2026
- **General Election:** November 3, 2026

## What You Need to File

### For County/Local Offices (Democratic or Republican Primary)

☐ **Application for a Place on the Primary Ballot** (Form available from your county party chair)
☐ **Filing fee** (varies by office — check with county party) OR **Petition in Lieu of Filing Fee**
☐ **Personal Financial Statement** (if required for the office)
☐ **Campaign Treasurer Appointment (Form CTA)** — must be filed with TEC *before* you accept any contributions or make any expenditures

### For State Offices

☐ All of the above, filed with the **Texas Secretary of State** or your party's **State Executive Committee**
☐ **Petition signatures** may be required for some offices in lieu of filing fee

## Texas Ethics Commission (TEC) Requirements

You must file a **Campaign Treasurer Appointment (Form CTA)** before you do anything else. This is the most common mistake first-time candidates make.

**Reporting deadlines for 2026:**
- 30-day pre-primary report: Due February 2, 2026
- 8-day pre-primary report: Due February 23, 2026
- Runoff reports (if applicable)
- 30-day pre-general report: Due October 4, 2026
- 8-day pre-general report: Due October 26, 2026
- January semiannual report: Due January 15, 2027

## Common First-Timer Mistakes

❌ Accepting a contribution before appointing a campaign treasurer
❌ Missing a reporting deadline (late fines start at $500/day)
❌ Using personal funds for campaign expenses without documenting them as loans
❌ Failing to disclose in-kind contributions (donated services, food, printing)

## Resources

- **Texas Ethics Commission:** [ethics.state.tx.us](https://www.ethics.state.tx.us) | (512) 463-5800
- **Texas Secretary of State:** [sos.texas.gov](https://www.sos.texas.gov)
- **Ellis County Elections Office:** (972) 825-5195`
    },
    {
        id: 10,
        slug: 'campaign-messaging-framework',
        title: 'Campaign Messaging Framework',
        description: 'The Pivotal Voice blueprint for crafting a compelling campaign narrative: core message, contrast messaging, proof points, and audience segmentation.',
        type: 'Guide',
        category: 'Candidate Toolkit',
        audience: [
            'Candidates'
        ],
        featured: true,
        downloads: 312,
        tags: [
            'Messaging',
            'Narrative',
            'Brand',
            'PR Strategy'
        ],
        content: `## The Pivotal Voice Messaging Architecture

Every winning campaign message has four layers. Build them in order — don't skip ahead.

---

### Layer 1: Your Core Message (25 words or fewer)

Your core message answers three questions in a single breath:
1. **Who are you** (relevant identity/experience)?
2. **What do you stand for** (your central value or priority)?
3. **Why does it matter** (the stakes for voters)?

**Formula:** *"As a [relevant identity], I believe [core value], because [what's at stake for voters]."*

**Example:** *"As a small business owner and Ellis County native, I believe our county government should work for families — not special interests."*

Write 10 versions. Read them aloud. The one that sounds most like you *and* most like what voters care about wins.

---

### Layer 2: Your Proof Points (3–5 facts)

Proof points make your core message credible. They are **specific, verifiable, and visual**.

Bad proof point: *"I've served this community for years."*
Good proof point: *"I coached youth baseball in Midlothian for 12 years and led the push to repair Rotary Park."*

Build a bank of 10–15 proof points. Use the 3 strongest for every audience. Rotate others by context.

---

### Layer 3: Contrast Messaging

Contrast is not attack. It's clarifying the choice.

**Formula:** *"My opponent believes X. I believe Y. Here's the difference it makes."*

Never go personal. Always go specific. Ground every contrast in a vote, a statement, or a public record.

---

### Layer 4: Audience Segmentation

Your message doesn't change — your emphasis does.

| Audience | Emphasize |
|----------|-----------|
| Base voters | Shared values, motivation to turn out |
| Persuadables | Your record, contrast with opponent |
| Low-propensity voters | Personal story, local stakes |
| Donors | Vision, viability, ROI of their support |

---

## The Message Box

Draw a 2x2 grid. Fill in:
- What you say about yourself
- What you say about your opponent
- What your opponent says about themselves
- What your opponent says about you

Every message you create should reinforce your quadrant and undermine theirs.

---

*Need help building your message? Pivotal Voice offers full messaging strategy sessions. [Contact us.](https://pivotalvoice.org/services)*`
    },
    {
        id: 11,
        slug: '90-day-campaign-launch-plan',
        title: '90-Day Campaign Launch Plan',
        description: 'A week-by-week roadmap covering announcement strategy, coalition outreach, earned media, fundraising milestones, and digital presence.',
        type: 'PDF',
        category: 'Campaign Strategy',
        audience: [
            'Candidates'
        ],
        featured: true,
        downloads: 241,
        tags: [
            'Launch',
            'Campaign Plan',
            'Timeline'
        ],
        content: `## The 90-Day Framework

The first 90 days of a campaign establish your narrative, build your team, and prove viability to donors and press. Miss this window and you spend the rest of the race catching up.

---

## Days 1–30: Foundation

**Week 1 — Declare and Control the Story**
- File your paperwork and appoint your campaign treasurer (required before any fundraising)
- Draft and rehearse your announcement statement (50 words for press, 2 minutes for video)
- Brief your inner circle before going public — no one learns about your candidacy from a news alert
- Post announcement video on social media; send press release to local outlets

**Week 2 — Build Your Kitchen Cabinet**
- Identify 10–15 advisors (not paid staff): a lawyer, an accountant, a local business leader, a faith community voice, a longtime activist
- Hold individual 30-minute calls with each — listen more than you talk
- Ask each: "Who else should I be talking to?"

**Week 3 — Launch Fundraising**
- Set a 30-day fundraising goal (realistic but ambitious)
- Call 50 personal contacts — friends, family, former colleagues
- Do not email until you've called; personal asks convert at 3–5x the rate

**Week 4 — Digital Infrastructure**
- Launch website (bio, issues, donate button, email signup)
- Set up campaign Facebook and Instagram
- Start collecting email addresses at every interaction

---

## Days 31–60: Coalition Building

**Week 5–6 — Community Listening Tour**
- Host 6–8 small living room conversations (10–20 people each)
- Ask: "What's the one thing you wish county government would fix?"
- Take notes. These become your proof points and policy platform.

**Week 7–8 — Earned Media Push**
- Pitch your first op-ed to the Waxahachie Daily Light
- Request meetings with editorial boards
- Attend 2–3 public events per week; introduce yourself to everyone

---

## Days 61–90: Momentum and Visibility

**Week 9–10 — Endorsement Strategy**
- Identify the 5 endorsements that matter most in your race
- Prepare your endorsement ask: brief, specific, and in person
- Announce endorsements in batches for maximum media coverage

**Week 11–12 — Field and Visibility**
- Launch yard sign distribution to early supporters
- Begin door-knocking in high-turnout precincts
- Set up voter contact tracking (spreadsheet or basic CRM)

---

## 90-Day Milestones Checklist

☐ Filed paperwork and appointed campaign treasurer
☐ Announcement made with press coverage
☐ 30-day fundraising goal hit
☐ Website live with donate button
☐ 500+ email subscribers
☐ 3+ endorsements secured
☐ Op-ed published in local press
☐ 200+ doors knocked`
    },
    {
        id: 12,
        slug: 'press-release-template-pack',
        title: 'Press Release Template Pack',
        description: 'Five plug-and-play templates: campaign announcement, endorsement, policy position, event, and rapid response. Includes headline formulas and AP style guide.',
        type: 'Template',
        category: 'Media Relations',
        audience: [
            'Candidates',
            'All'
        ],
        downloads: 445,
        tags: [
            'Press Release',
            'Templates',
            'Media',
            'AP Style'
        ],
        content: `## How to Use These Templates

Replace all [BRACKETED TEXT] with your information. Always write in third person. Lead with the most newsworthy fact — not the background. Keep to one page (400 words max). End with "###".

---

## Template 1: Campaign Announcement

**FOR IMMEDIATE RELEASE**
Contact: [Campaign Manager Name] | [Phone] | [Email]

**[CANDIDATE NAME] Announces Campaign for [OFFICE]**
*[One-sentence subheadline that captures the core message]*

WAXAHACHIE, Texas — [CANDIDATE NAME], [brief descriptor: e.g., "a third-generation Ellis County farmer and former city council member"], today announced [his/her/their] candidacy for [OFFICE].

"[2–3 sentence quote from candidate capturing core message and reason for running.]"

[CANDIDATE] has [brief experience summary in 2–3 sentences]. [He/She/They] will seek the [Party] nomination in the [Month Year] primary.

The campaign will focus on [2–3 key issues].

For more information, visit [website] or contact [name] at [email/phone].

###

---

## Template 2: Endorsement

**FOR IMMEDIATE RELEASE**

**[ENDORSER] Endorses [CANDIDATE] for [OFFICE]**

WAXAHACHIE, Texas — [ENDORSER NAME/ORGANIZATION] today announced [its/their/his/her] endorsement of [CANDIDATE NAME] for [OFFICE].

"[Endorsement quote from endorser — specific and personal.]" — [Endorser Name, Title]

"[Candidate reaction quote — grateful and forward-looking.]" — [Candidate Name]

[One paragraph on why this endorsement matters — who endorser is, their credibility on this issue or in this community.]

###

---

## Template 3: Policy Position

**FOR IMMEDIATE RELEASE**

**[CANDIDATE] Releases Plan to [ADDRESS ISSUE]**

WAXAHACHIE, Texas — [CANDIDATE NAME], candidate for [OFFICE], today released [his/her/their] plan to [address issue in plain language].

"[Quote establishing why this issue matters to voters and to candidate personally.]"

The plan includes: [3–5 bullet points, specific and actionable].

[One paragraph of supporting evidence, data, or local context that makes the plan credible.]

###

---

## AP Style Quick Reference

- Spell out numbers one through nine; use numerals for 10 and above
- Months: Jan., Feb., Aug., Sept., Oct., Nov., Dec. (others spelled out)
- No Oxford comma
- Titles before names: County Judge Jane Smith (not Jane Smith, County Judge)
- Percent: 42% (not 42 percent in body copy)
- Always use AM/PM (7 p.m., not 7pm)`
    },
    {
        id: 13,
        slug: 'debate-preparation-workbook',
        title: 'Debate Preparation Workbook',
        description: 'A structured workbook for organizing policy positions, anticipating attacks, preparing rebuttals, and mastering the two-minute format.',
        type: 'Guide',
        category: 'Public Speaking',
        audience: [
            'Candidates'
        ],
        downloads: 178,
        tags: [
            'Debate',
            'Prep',
            'Policy',
            'Rebuttal'
        ],
        content: `## The Three Things Voters Remember

Research consistently shows voters remember three things from a debate: how you made them feel, one specific thing you said, and whether you seemed like the kind of person they'd trust. Prepare for all three — not just the facts.

---

## Part 1: Message Discipline

Write your core message at the top of this page and memorize it. Every answer — no matter the question — should connect back to this message within 60 seconds.

**The bridge technique:** Acknowledge the question, then bridge to your message.
- "That's an important point, and it connects to something I hear from voters every day…"
- "I'll address that, and I also want voters to know…"
- "The real question behind that is…"

---

## Part 2: Policy Position Cards

For each major issue, prepare a card with:

| Issue | Your Position (1 sentence) | Proof Point | Contrast with Opponent |
|-------|---------------------------|-------------|------------------------|
| [Issue] | | | |

Limit yourself to your top 5 issues. Depth beats breadth in a debate format.

---

## Part 3: Anticipating Attacks

List the 5 toughest things your opponent could say about you:

1. _______________
2. _______________
3. _______________
4. _______________
5. _______________

For each, write a **one-sentence response** that:
- Doesn't repeat the attack
- Redirects to your strength
- Is 15 seconds or shorter

---

## Part 4: The Two-Minute Format

Most local debates give 2 minutes per answer. Structure:
- **0:00–0:20** — Direct answer to the question
- **0:20–1:00** — Proof point or story that supports your answer
- **1:00–1:40** — Contrast with your opponent or the status quo
- **1:40–2:00** — Close with your core message

Practice with a timer. Out loud. Every time.

---

## Part 5: Closing Statement (2 Minutes)

Write your closing now and memorize it. Structure:
1. Thank the hosts and voters (10 seconds)
2. The single most important thing you want voters to know (30 seconds)
3. A personal story that illustrates your values (45 seconds)
4. A clear ask: "I'm asking for your vote" (10 seconds)
5. Restate your core message (25 seconds)`
    },
    {
        id: 14,
        slug: 'texas-campaign-finance-tec-compliance',
        title: 'Texas Campaign Finance: TEC Compliance Guide',
        description: 'Plain-language overview of Texas Ethics Commission rules — contribution limits, reporting schedules, and common violations to avoid.',
        type: 'PDF',
        category: 'Candidate Toolkit',
        audience: [
            'Candidates'
        ],
        downloads: 199,
        tags: [
            'TEC',
            'Finance',
            'Compliance',
            'Texas Law'
        ],
        content: `## The Golden Rule of Texas Campaign Finance

**File your Campaign Treasurer Appointment (Form CTA) before you do anything else.** You cannot legally accept a contribution or make a campaign expenditure until this form is on file with the Texas Ethics Commission. This is the single most common mistake first-time candidates make.

---

## What Requires Reporting

In Texas, you must report all **political contributions** and **political expenditures**. These include:

- Cash, checks, credit card payments
- In-kind contributions (donated goods or services at fair market value)
- Political loans (from you or others)
- All campaign spending, including reimbursements

---

## Contribution Sources — What's Allowed and Prohibited

**Allowed:**
- Individuals (no limit for most local races)
- PACs and political committees
- Candidate's personal funds (reported as a loan or contribution)
- Corporate contributions to local non-judicial races *(verify current rules)*

**Prohibited:**
- Foreign nationals
- Federal contractors (for federal races)
- Contributions made in another person's name ("straw donors")

---

## Reporting Thresholds & Schedules

Candidates who raise or spend **$500 or more** must file periodic reports.

**2026 Primary Election Reports:**
| Report | Covers | Due Date |
|--------|--------|----------|
| 30-Day Pre-Primary | Through Jan 31 | Feb 2, 2026 |
| 8-Day Pre-Primary | Feb 1–22 | Feb 23, 2026 |
| 30-Day Post-Primary | Mar 4–Apr 2 | Apr 4, 2026 |

**General Election Reports:**
| Report | Covers | Due Date |
|--------|--------|----------|
| 30-Day Pre-General | Through Oct 3 | Oct 4, 2026 |
| 8-Day Pre-General | Oct 4–25 | Oct 26, 2026 |
| January Semiannual | Through Dec 31 | Jan 15, 2027 |

---

## Common Violations and Fines

| Violation | Fine |
|-----------|------|
| Late filing | $500 minimum; escalates daily |
| Failure to file | Civil penalty up to $10,000 |
| Accepting prohibited contribution | Up to $10,000 + return of funds |
| Reporting false information | Criminal charge possible |

---

## Free Resources

- **TEC Filing System (online):** [ethics.state.tx.us](https://www.ethics.state.tx.us)
- **TEC Ethics Hotline:** (512) 463-5800
- **TEC Training Videos:** Available on their website, free`
    },
    {
        id: 15,
        slug: 'digital-campaign-playbook',
        title: 'Digital Campaign Playbook',
        description: 'Strategy for Facebook, Instagram, X, and NextDoor — organic content calendars, paid ad frameworks, and community engagement tactics for local races.',
        type: 'Guide',
        category: 'Campaign Strategy',
        audience: [
            'Candidates'
        ],
        downloads: 326,
        tags: [
            'Social Media',
            'Digital',
            'Advertising',
            'Local Race'
        ],
        content: `## Platform Strategy for Local Races

Local races are won on **earned trust**, not viral moments. Your digital strategy should build relationships, not follower counts.

---

## Facebook — Your Primary Platform

Facebook remains the dominant platform for voters 35+ and for local community groups — your primary electorate.

**What works:**
- Live videos from public events (raw and unpolished is fine)
- Photo albums from door-knocking and community events
- Sharing local news and tagging local outlets
- Responding to every comment within 24 hours

**Posting cadence:** 5–7x per week during campaign season

**Paid ads:** Facebook's geographic targeting is excellent for local races. A $500/month budget targeting your district by zip code can reach 15,000–30,000 people. Use your best-performing organic posts as ads.

---

## Instagram — Visual Storytelling

Use Instagram for behind-the-scenes content and to reach younger voters (18–35).

**Content pillars:**
1. **Community** — local places, events, people you meet while campaigning
2. **Policy** — simple graphics with one key fact or position
3. **Personal** — family, hobbies, what drives you
4. **Action** — events, volunteer asks, voter registration deadlines

**Posting cadence:** 4–5x per week (Stories daily)

---

## NextDoor — Underused and Powerful

NextDoor reaches homeowners by neighborhood — often your highest-turnout voters.

- Create a candidate profile
- Participate authentically in local conversations before promoting yourself
- Announce events and share policy positions relevant to neighborhood issues

---

## X (Twitter) — Press Relations Tool

X is most useful for **media and influencer relations**, not voter outreach in local races.

- Follow and engage with local journalists
- Live-tweet public meetings and debates
- Share press releases and media clips

---

## Content Calendar Template (Weekly)

| Day | Content |
|-----|---------|
| Monday | Policy graphic (issue + your position) |
| Tuesday | Behind-the-scenes from the campaign trail |
| Wednesday | Community story or local news share |
| Thursday | Volunteer or event ask |
| Friday | Personal post (what drives you, family, values) |
| Weekend | Event coverage or voter contact update |

---

## Dos and Don'ts

✅ Respond to criticism calmly and factually
✅ Tag local media when you do something newsworthy
✅ Use video — it gets 3x the organic reach of photos
❌ Delete negative comments (screenshot, respond, leave up)
❌ Post about your opponent more than yourself
❌ Go dark for more than 3 days at a stretch`
    },
    {
        id: 16,
        slug: 'crisis-communications-rapid-response-playbook',
        title: 'Crisis Communications Rapid Response Playbook',
        description: 'Step-by-step protocol for the first 24 hours of a crisis: who speaks, what you say, when you say it, and how to protect your reputation long-term.',
        type: 'PDF',
        category: 'Crisis & Reputation',
        audience: [
            'Candidates'
        ],
        featured: true,
        downloads: 183,
        tags: [
            'Crisis',
            'Rapid Response',
            'Reputation',
            'PR'
        ],
        content: `## The First 30 Minutes

The first 30 minutes of a crisis determine 80% of the narrative. Your job is not to have all the answers — it's to demonstrate that you are aware, in control, and taking action.

**Immediate steps:**
1. **Do not post anything.** Not a statement, not a "thoughts and prayers," nothing. You need 30 minutes to think.
2. **Call your campaign manager and a trusted advisor.** No decisions alone.
3. **Get the facts.** What do you actually know vs. what are you assuming?
4. **Identify who else knows.** Is media already aware? Have you been contacted for comment?

---

## The First 2 Hours

**Assess the severity:**

| Level | Definition | Response Timeline |
|-------|------------|-------------------|
| 1 — Minor | Single complaint, no media | 24 hours |
| 2 — Moderate | Media inquiry, social buzz | 4 hours |
| 3 — Major | Breaking news, viral spread | 1 hour |
| 4 — Critical | Criminal allegations, call to withdraw | Immediate |

**Draft your initial statement.** It should:
- Acknowledge that you're aware of the situation
- Express appropriate concern
- State what you're doing (investigating, cooperating, etc.)
- NOT admit fault unless you have complete facts

---

## The Statement Formula

> "I am aware of [the situation/reports/allegations]. [Expression of appropriate concern]. I am [what you're doing: reviewing the facts / cooperating fully / speaking with those involved]. I will have more to say once I have complete information. [Optional: brief character statement]."

**What to avoid:**
- "No comment" (sounds like guilt)
- Attacking the source before you have facts
- Promising information you can't deliver
- Apologizing for something you didn't do

---

## The First 24 Hours

- Designate **one spokesperson only.** Everyone else says: "I'm not the right person to speak to this — please contact [name]."
- **Monitor all channels** — social media, local news, opposition accounts
- **Prepare for the follow-up question:** "What are you doing about it?"
- **Brief your top supporters** personally before they read it in the news

---

## Long-Term Reputation Repair

After the immediate crisis passes:
1. **Return to your message.** Don't let the crisis become your identity.
2. **Do something visible and positive** in the community within 2 weeks.
3. **Don't relitigate.** Answer questions once, clearly, and move on.
4. **Document your response** for future reference — what worked, what didn't.

---

*Facing a crisis now? Pivotal Voice offers 24/7 crisis communications support for campaigns. [Contact us immediately.](https://pivotalvoice.org/services)*`
    },
    {
        id: 17,
        slug: 'earned-media-strategy-local-candidates',
        title: 'Earned Media Strategy for Local Candidates',
        description: 'How to build relationships with local journalists, pitch stories, land op-eds, and maximize free coverage without a big ad budget.',
        type: 'Guide',
        category: 'Media Relations',
        audience: [
            'Candidates'
        ],
        downloads: 259,
        tags: [
            'Earned Media',
            'Press',
            'Local News',
            'Outreach'
        ],
        content: `## Why Earned Media Matters More in Local Races

In a congressional race, paid media dominates. In a county commissioner race, a single front-page story in the Waxahachie Daily Light reaches more of your actual voters than $10,000 in Facebook ads. Local earned media is your highest-ROI communications channel.

---

## Know Your Local Media Landscape

**Ellis County outlets to target:**
- Waxahachie Daily Light (primary daily)
- Ellis County Press
- Midlothian Mirror
- KBEC Radio (local news)
- NBC 5 / CBS 11 / ABC 8 (Dallas TV — for significant stories)
- Local Facebook groups and NextDoor (not traditional media, but influential)

**Build a media contact list.** Name, beat, email, phone, Twitter. Know who covers local government vs. who covers features.

---

## Building Journalist Relationships

Start before you need them.

- **Follow and engage** with local reporters on social media — share and comment on their stories
- **Tip them on stories** unrelated to your campaign — be a resource
- **Invite them to events** with no ask attached
- **Respond immediately** when they reach out — journalists work on deadlines

---

## The Perfect Story Pitch

A story pitch is not a press release. It's a one-paragraph email answering: why is this interesting, why now, and why should readers care?

**Formula:**
> "[One-sentence hook with the most interesting fact.] [One sentence of context.] [Why this matters to Ellis County readers.] [Logistics: when/where can you talk or observe?]"

**Pitching tips:**
- Call after emailing — a 60-second voicemail doubles your response rate
- Pitch Monday–Wednesday for best pickup
- Offer exclusives when you have real news; it builds loyalty
- Don't pitch the same story to competing outlets simultaneously

---

## Op-Ed Strategy

Op-eds establish you as a thought leader, not just a candidate.

**Topics that get published:**
- Your expert take on a local issue (write about what you know)
- A specific, actionable solution to a visible problem
- A response to something in the news (timely hook)

**Op-ed format (600–800 words):**
1. Hook — a local story, statistic, or moment that opens the issue
2. Problem — what's wrong and why it matters here
3. Your solution — specific and concrete
4. Your credibility — why you're qualified to weigh in
5. Call to action — what should readers or officials do?

Submit to: [editor@waxahachiedailylight.com](mailto:editor@waxahachiedailylight.com)

---

## Media Momentum Calendar

| Month | Earned Media Target |
|-------|---------------------|
| Launch | Announcement story in Daily Light |
| Month 2 | Op-ed on your signature issue |
| Month 3 | Feature story (profile/personal narrative) |
| Pre-primary | Endorsement announcement coverage |
| Final stretch | Debate coverage, GOTV story |`
    },
    {
        id: 18,
        slug: 'on-camera-interview-masterclass',
        title: 'On-Camera Interview Masterclass',
        description: 'Video series covering body language, bridging techniques, staying on message, and handling hostile questions in TV and video interviews.',
        type: 'Video',
        category: 'Public Speaking',
        audience: [
            'Candidates',
            'All'
        ],
        downloads: 89,
        tags: [
            'Media Training',
            'Video',
            'On-Camera',
            'Interview'
        ],
        content: `## What This Series Covers

This video masterclass is designed for candidates and public figures preparing for television interviews, video town halls, and recorded digital content. Each module is 8–12 minutes.

---

## Module 1: The Fundamentals of On-Camera Presence

**What the camera sees that you don't:**
- Eye contact is with the lens, not the interviewer (for remote interviews)
- The camera flattens expressions — you must over-emote by 20% to read as natural
- Background matters: what's behind you communicates character
- Lighting from above creates shadows; lighting from in front creates credibility

**Body language baseline:**
- Sit slightly forward, not back
- Hands visible, not clenched
- Shoulders down and relaxed
- Slight head tilt signals listening; upright head signals authority — know when to use each

---

## Module 2: Message Discipline Under Pressure

**The FLAG technique:**
- **F**lag the question ("That's an important one…")
- **L**ink to your message ("What I think voters really want to know is…")
- **A**nswer with your core message
- **G**ive evidence (proof point or story)

**Practice drill:** Have someone throw you 10 random questions. Answer every one by bridging to your core message within 45 seconds. Record yourself. Watch it back.

---

## Module 3: Handling Hostile Questions

**Types of hostile questions:**
1. The false premise ("Given that you voted against schools…")
2. The either/or trap ("Do you support X or Y?")
3. The hypothetical ("If [worst-case scenario] happened…")
4. The repeat ("But you didn't answer the question…")

**Responding to each:**
1. Correct the premise, then answer: "Actually, my record shows… and here's what I believe."
2. Reject the binary: "I don't accept that framing. Here's a better way to think about it."
3. Decline the hypothetical: "I focus on what's real and actionable for voters today."
4. Hold your ground: "I answered it — let me be even clearer." Then repeat your answer.

---

## Module 4: The 30-Second Answer

Most broadcast interviews use clips of 20–30 seconds. Structure every answer to deliver a complete thought in 30 seconds — regardless of how much time you're given.

**30-second formula:**
- Position (5 sec) → Evidence (15 sec) → Stakes (10 sec)

**Example:** *"I support expanding the county road budget. We've seen a 40% increase in traffic on FM 664 in five years with zero infrastructure investment. If we don't act now, we're looking at higher accident rates and lower property values."*

---

## Module 5: Remote Interview Setup

With virtual interviews now standard, your setup IS your brand.

**Checklist:**
☐ Camera at eye level (laptop on books if needed)
☐ Light source in front of you, not behind
☐ Neutral, professional background (bookshelf, plain wall)
☐ Wired internet connection, not WiFi
☐ Earbuds with built-in mic, not laptop speakers
☐ Test audio and video 10 minutes before

---

*Want live media coaching? Pivotal Voice offers one-on-one on-camera training sessions. [Book a session.](https://pivotalvoice.org/services)*`
    },
    {
        id: 19,
        slug: 'voter-contact-script-library',
        title: 'Voter Contact Script Library',
        description: 'Tested door-knock, phone bank, and text banking scripts for introduction calls, persuasion conversations, and GOTV final pushes.',
        type: 'Template',
        category: 'Campaign Strategy',
        audience: [
            'Candidates'
        ],
        downloads: 374,
        tags: [
            'GOTV',
            'Door Knock',
            'Phone Bank',
            'Scripts'
        ],
        content: `## How to Use These Scripts

Scripts are starting points, not straitjackets. Read them enough times that they sound natural coming out of your mouth — then put the paper away. Voters can tell when you're reading.

The most important skill in voter contact is **listening**. Ask, then be quiet. The voter's answer tells you everything.

---

## Door-Knock Scripts

### Introduction (Supporter or Unknown)

*"Hi, is [VOTER NAME] home? Great — my name is [YOUR NAME], and I'm running for [OFFICE] here in Ellis County. I'm just out talking to neighbors today — do you have 2 minutes?"*

[If yes] *"I'd love to hear what's most on your mind about [county/city]. What issues matter most to you?"*

[Listen. Connect their answer to your message if possible.]

*"That's exactly why I'm running. [Brief core message — 2 sentences.] Can I count on your support?"*

[If supportive] *"Wonderful — I'd love to put a yard sign up if you're open to it. And here's my card if you have questions."*

---

### Persuasion Door-Knock

*"Hi [NAME], my name is [YOUR NAME], candidate for [OFFICE]. I know you're busy — I just want to ask: what would make the biggest difference for you and your family in [Ellis County/Midlothian/Waxahachie]?"*

[Listen. Don't interrupt.]

*"I hear that a lot. Here's what I'm committed to doing about it: [specific, brief]."*

*"Are there any concerns about me or the race I can address for you?"*

[Listen and respond honestly.]

*"I'd really appreciate your vote on [Election Day/during early voting Oct 19–28]. Can I count on you?"*

---

## Phone Bank Scripts

### Intro Call (Unknown Voter)

*"Hi, may I speak with [VOTER NAME]? … Hi [NAME], my name is [VOLUNTEER NAME], and I'm calling on behalf of [CANDIDATE NAME], who's running for [OFFICE]. Do you have about 60 seconds?"*

[If yes] *"[CANDIDATE] is focused on [1 key issue] for Ellis County. Are those issues important to you?"*

[If supportive] *"Great — can we count on your vote?"*
[If unsure] *"What would help you make up your mind? I can send you some information."*

---

### GOTV Call (Known Supporter)

*"Hi [NAME], this is [VOLUNTEER] calling for [CANDIDATE]. We have you down as a supporter — we just want to make sure you're set to vote! [Early voting is Oct 19–28 / Election Day is November 3.] Do you know where your polling place is?"*

[If no] *"No problem — it's [location]. Is there anything that might keep you from voting?"*

[Address barrier if possible.]

*"Wonderful — your vote makes a real difference. Thank you so much!"*

---

## Text Banking Scripts

### Initial Text

> Hi [NAME], this is [VOLUNTEER] with the [CANDIDATE] campaign for [OFFICE]. Early voting starts Oct 19 in Ellis County! Do you plan to vote? Reply YES, NO, or HELP for polling info. Reply STOP to opt out.

### Follow-up (No response after 48 hrs)

> Hey [NAME] — just a reminder that Election Day is Nov 3. [CANDIDATE] is fighting for [1 issue] in Ellis County. Every vote counts! Need your polling place? Just reply.

### GOTV Final Day

> Today's the day! Polls close at 7 PM. If you're in line by 7, you have the right to vote. [CANDIDATE] is counting on you. 🗳️`
    },
    {
        id: 20,
        slug: 'public-speaking-masterclass',
        title: 'Public Speaking Masterclass',
        description: 'Video series on effective public speaking for local leaders — from town halls to televised forums.',
        type: 'Video',
        category: 'Public Speaking',
        audience: [
            'Candidates',
            'All'
        ],
        downloads: 142,
        tags: [
            'Public Speaking',
            'Presentation',
            'Leadership'
        ],
        content: `## About This Series

This masterclass is built for local leaders, candidates, and community advocates who need to speak persuasively in front of live audiences — from 10 people in a living room to 500 at a televised forum.

---

## Module 1: Structuring Any Speech in 10 Minutes

Every effective speech follows the same skeleton:

1. **Open with a hook** (story, statistic, or question) — 15–30 seconds
2. **State your thesis** ("Here's what I want you to leave with today") — 15 seconds
3. **Three supporting points** with one story or fact each — 2–3 minutes each
4. **Anticipate and answer the objection** ("You might be wondering…") — 1 minute
5. **Close with a call to action and your opening hook** — 30–45 seconds

The close should mirror the open. If you opened with a story about a local family, return to that family in your closing. It creates emotional resonance and a sense of completion.

---

## Module 2: Managing Nerves

Nerves are not your enemy — unmanaged nerves are.

**The physiology of stage fright:**
Adrenaline increases heart rate, sharpens focus, and gives you energy. That's the same feeling as excitement. Your job is to reframe it: "I'm not nervous. I'm ready."

**Practical techniques:**
- **Power pose** for 2 minutes before speaking (arms wide, chest open, feet apart)
- **Slow exhale** — 4 counts in, 7 counts hold, 8 counts out — reduces cortisol immediately
- **Arrive early** and walk the space before the audience arrives
- **Make eye contact with one friendly face** in the first 30 seconds

---

## Module 3: Town Hall Facilitation

If you're hosting rather than presenting:

- **Publish the agenda and ground rules** in advance
- **Open with why this meeting matters** — set the stakes clearly
- **Call on people by name** if possible — it personalizes the room
- **Paraphrase before answering:** "What I hear you asking is…" — it buys time and signals listening
- **Don't let one person dominate** — "Let's make sure we hear from others too"
- **Close with specific next steps** — who does what by when

---

## Module 4: The Conversational Register

The biggest mistake public speakers make is sounding like they're giving a speech.

The most effective speakers sound like they're having a conversation — with 200 people at once.

**Techniques:**
- Use contractions ("I'm" not "I am"; "we'll" not "we will")
- Ask rhetorical questions ("You've probably wondered why…")
- Pause after key points — silence signals importance
- Vary your pace — slow down for emphasis, speed up for lists
- Make direct eye contact with individuals, not the back wall

---

## Module 5: Handling Q&A

Q&A is where prepared speakers get undone. Treat every question as:

1. **A chance to reinforce your message**, not just answer the question
2. **A signal of what voters care about**, not an attack to defend against

**The formula for any Q&A answer:**
- Acknowledge the question (5 seconds)
- Answer it directly (20 seconds)
- Bridge to your broader point (10 seconds)
- Close with your core message (10 seconds)

If you don't know the answer: *"That's an important question and I want to give you an accurate answer — let me follow up with you directly. Can I get your contact information after?"*`
    }
];
function getResourceBySlug(slug) {
    return resources.find((r)=>r.slug === slug);
}
function getResourceById(id) {
    return resources.find((r)=>r.id === id);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/resources/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResourcesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic-2.js [app-client] (ecmascript) <export default as Mic2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$vote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Vote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/vote.js [app-client] (ecmascript) <export default as Vote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/newspaper.js [app-client] (ecmascript) <export default as Newspaper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/megaphone.js [app-client] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bar$2d$chart$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bar-chart-2.js [app-client] (ecmascript) <export default as BarChart2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check-circle.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$resources$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/resources.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const categoryConfig = [
    {
        label: 'Voter Information',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$vote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Vote$3e$__["Vote"],
        description: 'Registration deadlines, polling locations, ballot breakdowns, and rights.',
        audience: 'Voters'
    },
    {
        label: 'Candidate Toolkit',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"],
        description: 'Campaign planning, filing requirements, FEC compliance, and messaging guides.',
        audience: 'Candidates'
    },
    {
        label: 'Media Relations',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__["Newspaper"],
        description: 'Press release templates, interview prep, and newsroom contact strategies.',
        audience: 'All'
    },
    {
        label: 'Public Speaking',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic2$3e$__["Mic2"],
        description: 'Debate coaching, town hall facilitation, and speech structure frameworks.',
        audience: 'All'
    },
    {
        label: 'Civic Engagement',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        description: 'Guides to attending public meetings, submitting comments, and organizing.',
        audience: 'Voters'
    },
    {
        label: 'Government Transparency',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
        description: 'Open records requests, FOIA templates, and public accountability tools.',
        audience: 'Voters'
    },
    {
        label: 'Campaign Strategy',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bar$2d$chart$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart2$3e$__["BarChart2"],
        description: 'Polling interpretation, opposition research basics, and digital outreach.',
        audience: 'Candidates'
    },
    {
        label: 'Crisis & Reputation',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"],
        description: 'Rapid response playbooks, crisis messaging, and reputation management.',
        audience: 'Candidates'
    }
];
const typeIcon = (type)=>{
    if (type === 'Video') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"];
    if (type === 'Template') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"];
    if (type === 'Checklist') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"];
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"];
};
const audienceBadge = {
    All: 'bg-cream/10 text-cream/80',
    Voters: 'bg-blue-500/20 text-blue-300',
    Candidates: 'bg-gold/20 text-gold'
};
function DownloadModal({ resource, onClose }) {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!email) return;
        setLoading(true);
        try {
            const res = await fetch('/api/send-resource', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    resourceTitle: resource.title,
                    resourceCategory: resource.category,
                    resourceType: resource.type,
                    resourceSlug: resource.slug
                })
            });
            if (!res.ok) {
                const body = await res.json().catch(()=>({}));
                console.error('send-resource error status:', res.status, 'body:', body);
                throw new Error(body.error || body.detail?.message || 'Send failed');
            }
            setSubmitted(true);
        } catch (err) {
            const msg = err instanceof Error ? err.message : 'Unknown error';
            alert(`Something went wrong: ${msg}`);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/70 backdrop-blur-sm",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/app/resources/page.tsx",
                lineNumber: 76,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0.95,
                    y: 10
                },
                animate: {
                    opacity: 1,
                    scale: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    scale: 0.95,
                    y: 10
                },
                transition: {
                    duration: 0.2
                },
                className: "relative bg-navy border border-gold/30 rounded-2xl p-8 w-full max-w-md shadow-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "absolute top-4 right-4 text-cream/40 hover:text-cream transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/app/resources/page.tsx",
                            lineNumber: 85,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/resources/page.tsx",
                        lineNumber: 84,
                        columnNumber: 17
                    }, this),
                    !submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 bg-gold/10 border border-gold/30 rounded-xl flex items-center justify-center mb-4",
                                children: resource.type === 'Video' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    className: "w-6 h-6 text-gold"
                                }, void 0, false, {
                                    fileName: "[project]/app/resources/page.tsx",
                                    lineNumber: 91,
                                    columnNumber: 58
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                    className: "w-6 h-6 text-gold"
                                }, void 0, false, {
                                    fileName: "[project]/app/resources/page.tsx",
                                    lineNumber: 91,
                                    columnNumber: 99
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/resources/page.tsx",
                                lineNumber: 90,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-display text-lg font-semibold text-white mb-1",
                                children: resource.type === 'Video' ? 'Watch This Resource' : 'Get This Resource'
                            }, void 0, false, {
                                fileName: "[project]/app/resources/page.tsx",
                                lineNumber: 93,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gold/70 text-xs font-medium uppercase tracking-wide mb-2",
                                children: resource.category
                            }, void 0, false, {
                                fileName: "[project]/app/resources/page.tsx",
                                lineNumber: 96,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-cream/60 text-sm mb-6",
                                children: [
                                    resource.title,
                                    " — enter your email and we'll send a direct link straight to your inbox."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/resources/page.tsx",
                                lineNumber: 97,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        required: true,
                                        value: email,
                                        onChange: (e)=>setEmail(e.target.value),
                                        placeholder: "your@email.com",
                                        className: "w-full bg-navy-dark/60 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder:text-cream/30 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                                    }, void 0, false, {
                                        fileName: "[project]/app/resources/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: loading,
                                        className: "btn-primary w-full flex items-center justify-center gap-2",
                                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "animate-pulse",
                                            children: "Sending…"
                                        }, void 0, false, {
                                            fileName: "[project]/app/resources/page.tsx",
                                            lineNumber: 110,
                                            columnNumber: 44
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/resources/page.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 96
                                                }, this),
                                                " Send to My Inbox"
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/app/resources/page.tsx",
                                        lineNumber: 109,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/resources/page.tsx",
                                lineNumber: 100,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-cream/30 text-xs text-center mt-4",
                                children: "No spam. Unsubscribe anytime."
                            }, void 0, false, {
                                fileName: "[project]/app/resources/page.tsx",
                                lineNumber: 113,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-14 h-14 bg-green-500/15 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                    className: "w-7 h-7 text-green-400"
                                }, void 0, false, {
                                    fileName: "[project]/app/resources/page.tsx",
                                    lineNumber: 118,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/resources/page.tsx",
                                lineNumber: 117,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-display text-lg font-semibold text-white mb-2",
                                children: "Check your inbox!"
                            }, void 0, false, {
                                fileName: "[project]/app/resources/page.tsx",
                                lineNumber: 120,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-cream/60 text-sm mb-4",
                                children: [
                                    "We sent a direct link to ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white",
                                        children: email
                                    }, void 0, false, {
                                        fileName: "[project]/app/resources/page.tsx",
                                        lineNumber: 122,
                                        columnNumber: 54
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/resources/page.tsx",
                                lineNumber: 121,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/resources/${resource.slug}`,
                                className: "btn-primary text-sm inline-block mb-3",
                                onClick: onClose,
                                children: "Read It Now →"
                            }, void 0, false, {
                                fileName: "[project]/app/resources/page.tsx",
                                lineNumber: 124,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/app/resources/page.tsx",
                                lineNumber: 131,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "btn-secondary text-sm",
                                children: "Back to Resources"
                            }, void 0, false, {
                                fileName: "[project]/app/resources/page.tsx",
                                lineNumber: 132,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/resources/page.tsx",
                        lineNumber: 116,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/resources/page.tsx",
                lineNumber: 77,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/resources/page.tsx",
        lineNumber: 75,
        columnNumber: 9
    }, this);
}
_s(DownloadModal, "mLv2bINx67tzH2TcX+cVfsa7A+4=");
_c = DownloadModal;
function SubmitResourceModal({ onClose }) {
    _s1();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [link, setLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!email || !title || !description) return;
        setLoading(true);
        try {
            const res = await fetch('/api/submit-resource', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    title,
                    description,
                    link
                })
            });
            if (!res.ok) {
                const body = await res.json().catch(()=>({}));
                console.error('submit-resource error status:', res.status, 'body:', body);
                throw new Error(body.error || 'Submission failed');
            }
            setSubmitted(true);
        } catch (err) {
            const msg = err instanceof Error ? err.message : 'Unknown error';
            alert(`Something went wrong: ${msg}`);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/70 backdrop-blur-sm",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/app/resources/page.tsx",
                lineNumber: 175,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0.95,
                    y: 10
                },
                animate: {
                    opacity: 1,
                    scale: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    scale: 0.95,
                    y: 10
                },
                transition: {
                    duration: 0.2
                },
                className: "relative bg-navy border border-gold/30 rounded-2xl p-8 w-full max-w-lg shadow-2xl overflow-y-auto max-h-[90vh]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "absolute top-4 right-4 text-cream/40 hover:text-cream transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/app/resources/page.tsx",
                            lineNumber: 184,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/resources/page.tsx",
                        lineNumber: 183,
                        columnNumber: 17
                    }, this),
                    !submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 bg-gold/10 border border-gold/30 rounded-xl flex items-center justify-center mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                    className: "w-6 h-6 text-gold"
                                }, void 0, false, {
                                    fileName: "[project]/app/resources/page.tsx",
                                    lineNumber: 190,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/resources/page.tsx",
                                lineNumber: 189,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-display text-lg font-semibold text-white mb-1",
                                children: "Submit a Resource"
                            }, void 0, false, {
                                fileName: "[project]/app/resources/page.tsx",
                                lineNumber: 192,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-cream/60 text-sm mb-6",
                                children: "Share a guide, template, or tool with the Pivotal Voice community."
                            }, void 0, false, {
                                fileName: "[project]/app/resources/page.tsx",
                                lineNumber: 195,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-cream/80 text-xs font-semibold uppercase tracking-wider mb-1.5",
                                                children: "Your Name"
                                            }, void 0, false, {
                                                fileName: "[project]/app/resources/page.tsx",
                                                lineNumber: 200,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: name,
                                                onChange: (e)=>setName(e.target.value),
                                                placeholder: "Jane Doe",
                                                className: "w-full bg-navy-dark/60 border border-gold/20 rounded-lg px-4 py-2.5 text-white placeholder:text-cream/30 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                                            }, void 0, false, {
                                                fileName: "[project]/app/resources/page.tsx",
                                                lineNumber: 203,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/resources/page.tsx",
                                        lineNumber: 199,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-cream/80 text-xs font-semibold uppercase tracking-wider mb-1.5",
                                                children: "Your Email *"
                                            }, void 0, false, {
                                                fileName: "[project]/app/resources/page.tsx",
                                                lineNumber: 212,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                required: true,
                                                value: email,
                                                onChange: (e)=>setEmail(e.target.value),
                                                placeholder: "your@email.com",
                                                className: "w-full bg-navy-dark/60 border border-gold/20 rounded-lg px-4 py-2.5 text-white placeholder:text-cream/30 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                                            }, void 0, false, {
                                                fileName: "[project]/app/resources/page.tsx",
                                                lineNumber: 215,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/resources/page.tsx",
                                        lineNumber: 211,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-cream/80 text-xs font-semibold uppercase tracking-wider mb-1.5",
                                                children: "Resource Title *"
                                            }, void 0, false, {
                                                fileName: "[project]/app/resources/page.tsx",
                                                lineNumber: 225,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                required: true,
                                                value: title,
                                                onChange: (e)=>setTitle(e.target.value),
                                                placeholder: "e.g. Ellis County Campaign Checklist",
                                                className: "w-full bg-navy-dark/60 border border-gold/20 rounded-lg px-4 py-2.5 text-white placeholder:text-cream/30 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                                            }, void 0, false, {
                                                fileName: "[project]/app/resources/page.tsx",
                                                lineNumber: 228,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/resources/page.tsx",
                                        lineNumber: 224,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-cream/80 text-xs font-semibold uppercase tracking-wider mb-1.5",
                                                children: "Link / Source URL (Optional)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/resources/page.tsx",
                                                lineNumber: 238,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "url",
                                                value: link,
                                                onChange: (e)=>setLink(e.target.value),
                                                placeholder: "https://example.com/resource",
                                                className: "w-full bg-navy-dark/60 border border-gold/20 rounded-lg px-4 py-2.5 text-white placeholder:text-cream/30 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                                            }, void 0, false, {
                                                fileName: "[project]/app/resources/page.tsx",
                                                lineNumber: 241,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/resources/page.tsx",
                                        lineNumber: 237,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-cream/80 text-xs font-semibold uppercase tracking-wider mb-1.5",
                                                children: "Description / Content *"
                                            }, void 0, false, {
                                                fileName: "[project]/app/resources/page.tsx",
                                                lineNumber: 250,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                required: true,
                                                rows: 4,
                                                value: description,
                                                onChange: (e)=>setDescription(e.target.value),
                                                placeholder: "Describe the resource or paste its text here...",
                                                className: "w-full bg-navy-dark/60 border border-gold/20 rounded-lg px-4 py-2.5 text-white placeholder:text-cream/30 text-sm focus:outline-none focus:border-gold/50 transition-colors resize-none"
                                            }, void 0, false, {
                                                fileName: "[project]/app/resources/page.tsx",
                                                lineNumber: 253,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/resources/page.tsx",
                                        lineNumber: 249,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: loading,
                                        className: "btn-primary w-full flex items-center justify-center gap-2 mt-2",
                                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "animate-pulse",
                                            children: "Submitting…"
                                        }, void 0, false, {
                                            fileName: "[project]/app/resources/page.tsx",
                                            lineNumber: 263,
                                            columnNumber: 44
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/resources/page.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 99
                                                }, this),
                                                " Submit for Review"
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/app/resources/page.tsx",
                                        lineNumber: 262,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/resources/page.tsx",
                                lineNumber: 198,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-14 h-14 bg-green-500/15 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                    className: "w-7 h-7 text-green-400"
                                }, void 0, false, {
                                    fileName: "[project]/app/resources/page.tsx",
                                    lineNumber: 270,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/resources/page.tsx",
                                lineNumber: 269,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-display text-lg font-semibold text-white mb-2",
                                children: "Thank you!"
                            }, void 0, false, {
                                fileName: "[project]/app/resources/page.tsx",
                                lineNumber: 272,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-cream/60 text-sm mb-6",
                                children: "Your resource suggestion has been submitted to the Pivotal Voice team. We will review it shortly."
                            }, void 0, false, {
                                fileName: "[project]/app/resources/page.tsx",
                                lineNumber: 273,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "btn-primary text-sm",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/app/resources/page.tsx",
                                lineNumber: 276,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/resources/page.tsx",
                        lineNumber: 268,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/resources/page.tsx",
                lineNumber: 176,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/resources/page.tsx",
        lineNumber: 174,
        columnNumber: 9
    }, this);
}
_s1(SubmitResourceModal, "n1WSi0dhL++gEGLDccYUieM0P48=");
_c1 = SubmitResourceModal;
function ResourcesPage() {
    _s2();
    const [activeAudience, setActiveAudience] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const [selectedResource, setSelectedResource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showSubmitModal, setShowSubmitModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const audienceFilters = [
        'All',
        'Voters',
        'Candidates'
    ];
    const filteredResources = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$resources$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resources"].filter((r)=>{
        const audienceMatch = activeAudience === 'All' || r.audience.includes(activeAudience) || r.audience.includes('All');
        const categoryMatch = activeCategory === 'All' || r.category === activeCategory;
        return audienceMatch && categoryMatch;
    });
    const featuredResources = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$resources$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resources"].filter((r)=>r.featured);
    const filteredCategories = activeAudience === 'All' ? categoryConfig : categoryConfig.filter((c)=>c.audience === activeAudience || c.audience === 'All');
    const ResourceCard = ({ resource, index })=>{
        const Icon = typeIcon(resource.type);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                delay: Math.min(index * 0.05, 0.4)
            },
            className: "card group hover:border-gold/40 flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-10 bg-gold/10 border border-gold/20 rounded-lg flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "w-5 h-5 text-gold"
                            }, void 0, false, {
                                fileName: "[project]/app/resources/page.tsx",
                                lineNumber: 316,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/resources/page.tsx",
                            lineNumber: 315,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-1 flex-wrap justify-end",
                            children: resource.audience.filter((a)=>a !== 'All').map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-xs px-2 py-0.5 rounded-full font-medium ${audienceBadge[a]}`,
                                    children: a
                                }, a, false, {
                                    fileName: "[project]/app/resources/page.tsx",
                                    lineNumber: 320,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/resources/page.tsx",
                            lineNumber: 318,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/resources/page.tsx",
                    lineNumber: 314,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gold/60 text-xs font-medium uppercase tracking-wide",
                    children: resource.category
                }, void 0, false, {
                    fileName: "[project]/app/resources/page.tsx",
                    lineNumber: 325,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: `/resources/${resource.slug}`,
                    className: "mt-1 mb-2 flex-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-display text-base font-semibold text-white group-hover:text-gold transition-colors leading-snug",
                        children: resource.title
                    }, void 0, false, {
                        fileName: "[project]/app/resources/page.tsx",
                        lineNumber: 328,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/resources/page.tsx",
                    lineNumber: 327,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-cream/60 text-sm mb-4 line-clamp-3",
                    children: resource.description
                }, void 0, false, {
                    fileName: "[project]/app/resources/page.tsx",
                    lineNumber: 333,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-1 mb-4",
                    children: resource.tags.slice(0, 3).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs bg-navy-dark/80 text-cream/40 px-2 py-0.5 rounded",
                            children: tag
                        }, tag, false, {
                            fileName: "[project]/app/resources/page.tsx",
                            lineNumber: 337,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/resources/page.tsx",
                    lineNumber: 335,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between pt-3 border-t border-gold/10 mt-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-cream/40 text-xs",
                            children: [
                                resource.downloads.toLocaleString(),
                                " downloads"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/resources/page.tsx",
                            lineNumber: 342,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSelectedResource(resource),
                            className: "btn-secondary text-xs flex items-center gap-1.5 py-1.5 px-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/app/resources/page.tsx",
                                    lineNumber: 347,
                                    columnNumber: 25
                                }, this),
                                resource.type === 'Video' ? 'Watch' : 'Get'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/resources/page.tsx",
                            lineNumber: 343,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/resources/page.tsx",
                    lineNumber: 341,
                    columnNumber: 17
                }, this)
            ]
        }, resource.id, true, {
            fileName: "[project]/app/resources/page.tsx",
            lineNumber: 307,
            columnNumber: 13
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: [
                    selectedResource && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DownloadModal, {
                        resource: selectedResource,
                        onClose: ()=>setSelectedResource(null)
                    }, void 0, false, {
                        fileName: "[project]/app/resources/page.tsx",
                        lineNumber: 359,
                        columnNumber: 21
                    }, this),
                    showSubmitModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubmitResourceModal, {
                        onClose: ()=>setShowSubmitModal(false)
                    }, void 0, false, {
                        fileName: "[project]/app/resources/page.tsx",
                        lineNumber: 362,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/resources/page.tsx",
                lineNumber: 357,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/resources/page.tsx",
                lineNumber: 365,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "min-h-screen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "relative bg-gradient-to-b from-navy via-navy to-navy-dark border-b border-gold/15 py-20 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.06)_0%,_transparent_60%)]"
                            }, void 0, false, {
                                fileName: "[project]/app/resources/page.tsx",
                                lineNumber: 369,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "container-custom relative z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center max-w-3xl mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 bg-gold/10 border border-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                className: "w-8 h-8 text-gold"
                                            }, void 0, false, {
                                                fileName: "[project]/app/resources/page.tsx",
                                                lineNumber: 373,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/resources/page.tsx",
                                            lineNumber: 372,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-hero font-bold text-white mb-4",
                                            children: "Resource Library"
                                        }, void 0, false, {
                                            fileName: "[project]/app/resources/page.tsx",
                                            lineNumber: 375,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg text-cream/60 mb-8",
                                            children: "Guides, templates, and tools built by political communications professionals — for voters who want to engage and candidates who want to win."
                                        }, void 0, false, {
                                            fileName: "[project]/app/resources/page.tsx",
                                            lineNumber: 376,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex bg-navy-dark/60 border border-gold/20 rounded-xl p-1 gap-1",
                                            children: audienceFilters.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setActiveAudience(f);
                                                        setActiveCategory('All');
                                                    },
                                                    className: `px-5 py-2 rounded-lg text-sm font-semibold transition-all ${activeAudience === f ? 'bg-gold text-navy' : 'text-cream/60 hover:text-white'}`,
                                                    children: f === 'All' ? 'All Resources' : `For ${f}`
                                                }, f, false, {
                                                    fileName: "[project]/app/resources/page.tsx",
                                                    lineNumber: 382,
                                                    columnNumber: 37
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/resources/page.tsx",
                                            lineNumber: 380,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/resources/page.tsx",
                                    lineNumber: 371,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/resources/page.tsx",
                                lineNumber: 370,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/resources/page.tsx",
                        lineNumber: 368,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-navy-dark/80 border-b border-gold/10 py-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container-custom",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 gap-6 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold text-gold",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$resources$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resources"].length,
                                                    "+"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/resources/page.tsx",
                                                lineNumber: 400,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-cream/50 text-sm mt-1",
                                                children: "Free Resources"
                                            }, void 0, false, {
                                                fileName: "[project]/app/resources/page.tsx",
                                                lineNumber: 401,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/resources/page.tsx",
                                        lineNumber: 399,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold text-gold",
                                                children: "8"
                                            }, void 0, false, {
                                                fileName: "[project]/app/resources/page.tsx",
                                                lineNumber: 404,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-cream/50 text-sm mt-1",
                                                children: "Categories"
                                            }, void 0, false, {
                                                fileName: "[project]/app/resources/page.tsx",
                                                lineNumber: 405,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/resources/page.tsx",
                                        lineNumber: 403,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold text-gold",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$resources$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resources"].reduce((s, r)=>s + r.downloads, 0).toLocaleString(),
                                                    "+"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/resources/page.tsx",
                                                lineNumber: 408,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-cream/50 text-sm mt-1",
                                                children: "Total Downloads"
                                            }, void 0, false, {
                                                fileName: "[project]/app/resources/page.tsx",
                                                lineNumber: 409,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/resources/page.tsx",
                                        lineNumber: 407,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/resources/page.tsx",
                                lineNumber: 398,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/resources/page.tsx",
                            lineNumber: 397,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/resources/page.tsx",
                        lineNumber: 396,
                        columnNumber: 17
                    }, this),
                    activeAudience === 'All' && activeCategory === 'All' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "section bg-navy-dark/30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container-custom",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            className: "w-5 h-5 text-gold"
                                        }, void 0, false, {
                                            fileName: "[project]/app/resources/page.tsx",
                                            lineNumber: 420,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-section font-bold text-white",
                                            children: "Featured Resources"
                                        }, void 0, false, {
                                            fileName: "[project]/app/resources/page.tsx",
                                            lineNumber: 421,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/resources/page.tsx",
                                    lineNumber: 419,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                    children: featuredResources.map((resource, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResourceCard, {
                                            resource: resource,
                                            index: index
                                        }, resource.id, false, {
                                            fileName: "[project]/app/resources/page.tsx",
                                            lineNumber: 425,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/resources/page.tsx",
                                    lineNumber: 423,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/resources/page.tsx",
                            lineNumber: 418,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/resources/page.tsx",
                        lineNumber: 417,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "section bg-navy-dark/50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container-custom",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-section font-bold text-white mb-8",
                                    children: "Browse by Category"
                                }, void 0, false, {
                                    fileName: "[project]/app/resources/page.tsx",
                                    lineNumber: 435,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                            onClick: ()=>setActiveCategory('All'),
                                            className: `card text-left group transition-all ${activeCategory === 'All' ? 'border-gold/60 bg-gold/5' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: `font-semibold transition-colors ${activeCategory === 'All' ? 'text-gold' : 'text-white group-hover:text-gold'}`,
                                                    children: "All Categories"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/resources/page.tsx",
                                                    lineNumber: 441,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-cream/40 text-xs mt-1",
                                                    children: [
                                                        filteredResources.length,
                                                        " resources"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/resources/page.tsx",
                                                    lineNumber: 442,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/resources/page.tsx",
                                            lineNumber: 437,
                                            columnNumber: 29
                                        }, this),
                                        filteredCategories.map((cat, index)=>{
                                            const CatIcon = cat.icon;
                                            const count = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$resources$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resources"].filter((r)=>r.category === cat.label && (activeAudience === 'All' || r.audience.includes(activeAudience) || r.audience.includes('All'))).length;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 10
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                transition: {
                                                    duration: 0.4,
                                                    delay: index * 0.04
                                                },
                                                onClick: ()=>setActiveCategory(cat.label),
                                                className: `card text-left group transition-all ${activeCategory === cat.label ? 'border-gold/60 bg-gold/5' : ''}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CatIcon, {
                                                                    className: "w-4 h-4 text-gold"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/resources/page.tsx",
                                                                    lineNumber: 462,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/resources/page.tsx",
                                                                lineNumber: 461,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: `font-semibold text-sm transition-colors ${activeCategory === cat.label ? 'text-gold' : 'text-white group-hover:text-gold'}`,
                                                                        children: cat.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/resources/page.tsx",
                                                                        lineNumber: 465,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-cream/40 text-xs mt-0.5",
                                                                        children: [
                                                                            count,
                                                                            " resources"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/resources/page.tsx",
                                                                        lineNumber: 468,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/resources/page.tsx",
                                                                lineNumber: 464,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/resources/page.tsx",
                                                        lineNumber: 460,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-cream/50 text-xs mt-3 leading-relaxed",
                                                        children: cat.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/resources/page.tsx",
                                                        lineNumber: 471,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, cat.label, true, {
                                                fileName: "[project]/app/resources/page.tsx",
                                                lineNumber: 452,
                                                columnNumber: 37
                                            }, this);
                                        })
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/resources/page.tsx",
                                    lineNumber: 436,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/resources/page.tsx",
                            lineNumber: 434,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/resources/page.tsx",
                        lineNumber: 433,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "section",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container-custom",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-section font-bold text-white",
                                            children: activeCategory === 'All' ? 'All Resources' : activeCategory
                                        }, void 0, false, {
                                            fileName: "[project]/app/resources/page.tsx",
                                            lineNumber: 483,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-cream/40 text-sm",
                                            children: [
                                                filteredResources.length,
                                                " results"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/resources/page.tsx",
                                            lineNumber: 486,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/resources/page.tsx",
                                    lineNumber: 482,
                                    columnNumber: 25
                                }, this),
                                filteredResources.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-16 text-cream/40",
                                    children: "No resources found for this filter combination."
                                }, void 0, false, {
                                    fileName: "[project]/app/resources/page.tsx",
                                    lineNumber: 490,
                                    columnNumber: 29
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6",
                                    children: filteredResources.map((resource, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResourceCard, {
                                            resource: resource,
                                            index: index
                                        }, resource.id, false, {
                                            fileName: "[project]/app/resources/page.tsx",
                                            lineNumber: 494,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/resources/page.tsx",
                                    lineNumber: 492,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/resources/page.tsx",
                            lineNumber: 481,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/resources/page.tsx",
                        lineNumber: 480,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "section bg-navy-dark/60 border-y border-gold/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container-custom",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "badge-gold text-xs mb-4 inline-block",
                                                children: "Pivotal Voice Services"
                                            }, void 0, false, {
                                                fileName: "[project]/app/resources/page.tsx",
                                                lineNumber: 506,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-section font-bold text-white mb-4",
                                                children: "Need More Than a Template?"
                                            }, void 0, false, {
                                                fileName: "[project]/app/resources/page.tsx",
                                                lineNumber: 507,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-cream/70 mb-6",
                                                children: "These resources are a starting point. Pivotal Voice's communications professionals work directly with candidates and civic leaders — building custom messaging strategy, managing press relations, and guiding you through every stage of your campaign or issue."
                                            }, void 0, false, {
                                                fileName: "[project]/app/resources/page.tsx",
                                                lineNumber: 508,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-3 mb-8",
                                                children: [
                                                    'Custom campaign messaging & brand development',
                                                    'Full-service media relations & press outreach',
                                                    'Crisis communications & reputation management',
                                                    'Debate prep & executive media coaching',
                                                    'Digital strategy & content production'
                                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-start gap-3 text-cream/80 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                className: "w-4 h-4 text-gold mt-0.5 shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/resources/page.tsx",
                                                                lineNumber: 522,
                                                                columnNumber: 45
                                                            }, this),
                                                            item
                                                        ]
                                                    }, item, true, {
                                                        fileName: "[project]/app/resources/page.tsx",
                                                        lineNumber: 521,
                                                        columnNumber: 41
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/resources/page.tsx",
                                                lineNumber: 513,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/services#book",
                                                        className: "btn-primary inline-flex items-center justify-center",
                                                        children: "Schedule a Consultation"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/resources/page.tsx",
                                                        lineNumber: 528,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/services",
                                                        className: "btn-secondary inline-flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/resources/page.tsx",
                                                                lineNumber: 532,
                                                                columnNumber: 41
                                                            }, this),
                                                            "View Services"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/resources/page.tsx",
                                                        lineNumber: 531,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/resources/page.tsx",
                                                lineNumber: 527,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/resources/page.tsx",
                                        lineNumber: 505,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-4",
                                        children: [
                                            {
                                                label: 'Campaigns Supported',
                                                value: '50+'
                                            },
                                            {
                                                label: 'Media Placements',
                                                value: '300+'
                                            },
                                            {
                                                label: 'Years in Ellis County',
                                                value: '12+'
                                            },
                                            {
                                                label: 'Candidate Win Rate',
                                                value: '74%'
                                            }
                                        ].map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-3xl font-bold text-gold mb-1",
                                                        children: stat.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/resources/page.tsx",
                                                        lineNumber: 545,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-cream/50 text-sm",
                                                        children: stat.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/resources/page.tsx",
                                                        lineNumber: 546,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, stat.label, true, {
                                                fileName: "[project]/app/resources/page.tsx",
                                                lineNumber: 544,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/resources/page.tsx",
                                        lineNumber: 537,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/resources/page.tsx",
                                lineNumber: 504,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/resources/page.tsx",
                            lineNumber: 503,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/resources/page.tsx",
                        lineNumber: 502,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-navy py-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container-custom",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center max-w-2xl mx-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-section font-bold text-white mb-4",
                                        children: "Share a Resource"
                                    }, void 0, false, {
                                        fileName: "[project]/app/resources/page.tsx",
                                        lineNumber: 558,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-cream/70 mb-6",
                                        children: "Have a guide, template, or tool that would help Ellis County voters or candidates? Submit it for review and we'll add it to the library."
                                    }, void 0, false, {
                                        fileName: "[project]/app/resources/page.tsx",
                                        lineNumber: 559,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowSubmitModal(true),
                                        className: "btn-primary",
                                        children: "Submit a Resource"
                                    }, void 0, false, {
                                        fileName: "[project]/app/resources/page.tsx",
                                        lineNumber: 563,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/resources/page.tsx",
                                lineNumber: 557,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/resources/page.tsx",
                            lineNumber: 556,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/resources/page.tsx",
                        lineNumber: 555,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/resources/page.tsx",
                lineNumber: 366,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/resources/page.tsx",
                lineNumber: 568,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s2(ResourcesPage, "3wv72/gil9P0y2edGgEbHeEvXOA=");
_c2 = ResourcesPage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "DownloadModal");
__turbopack_context__.k.register(_c1, "SubmitResourceModal");
__turbopack_context__.k.register(_c2, "ResourcesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_bc6f38d5._.js.map