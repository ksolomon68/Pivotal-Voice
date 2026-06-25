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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
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
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrollProgress, setScrollProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
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
                lineNumber: 59,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `sticky top-0 z-50 navbar-glass transition-all duration-500 ${scrolled ? 'scrolled' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Header.tsx",
                        lineNumber: 65,
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
                                                lineNumber: 78,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Header.tsx",
                                            lineNumber: 71,
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
                                                    lineNumber: 81,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] sm:text-[10px] text-gold/70 font-medium tracking-wider uppercase",
                                                    children: "Ellis County"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Header.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layout/Header.tsx",
                                            lineNumber: 80,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/Header.tsx",
                                    lineNumber: 70,
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
                                            lineNumber: 92,
                                            columnNumber: 53
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Header.tsx",
                                    lineNumber: 91,
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
                                                lineNumber: 100,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Header.tsx",
                                            lineNumber: 99,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/services#book",
                                            className: "hidden md:inline-flex btn-primary text-sm !px-5 !py-2.5",
                                            children: "Book Consultation"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Header.tsx",
                                            lineNumber: 103,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            "aria-label": "User account",
                                            className: "hidden md:flex p-2.5 text-cream/60 hover:text-gold rounded-full hover:bg-gold/10 transition-all duration-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Header.tsx",
                                                lineNumber: 108,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Header.tsx",
                                            lineNumber: 107,
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
                                                        lineNumber: 126,
                                                        columnNumber: 45
                                                    }, this)
                                                }, "close", false, {
                                                    fileName: "[project]/components/layout/Header.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 55
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
                                                        lineNumber: 139,
                                                        columnNumber: 45
                                                    }, this)
                                                }, "menu", false, {
                                                    fileName: "[project]/components/layout/Header.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 57
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Header.tsx",
                                                lineNumber: 113,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Header.tsx",
                                            lineNumber: 112,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/Header.tsx",
                                    lineNumber: 98,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Header.tsx",
                            lineNumber: 68,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Header.tsx",
                        lineNumber: 67,
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
                            className: "lg:hidden fixed inset-0 top-20 bg-navy-dark/98 backdrop-blur-xl z-40",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "container-custom py-8 flex flex-col h-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-8 pb-6 border-b border-gold/10",
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
                                                    lineNumber: 162,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Header.tsx",
                                                lineNumber: 161,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-display text-lg font-bold text-white",
                                                children: "Pivotal Voice"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Header.tsx",
                                                lineNumber: 164,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/layout/Header.tsx",
                                        lineNumber: 160,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                        className: "space-y-1 flex-1",
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
                                                    className: `block py-4 px-5 text-lg font-display font-medium rounded-xl transition-all duration-300 ${pathname === item.href ? 'text-gold bg-gold/10' : 'text-cream hover:text-gold hover:bg-gold/5'}`,
                                                    onClick: ()=>setMobileMenuOpen(false),
                                                    children: item.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Header.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 45
                                                }, this)
                                            }, item.name, false, {
                                                fileName: "[project]/components/layout/Header.tsx",
                                                lineNumber: 171,
                                                columnNumber: 70
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Header.tsx",
                                        lineNumber: 170,
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
                                        className: "pt-6 border-t border-gold/10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/services#book",
                                            className: "block w-full text-center btn-primary",
                                            onClick: ()=>setMobileMenuOpen(false),
                                            children: "Book Consultation"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Header.tsx",
                                            lineNumber: 198,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Header.tsx",
                                        lineNumber: 188,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Header.tsx",
                                lineNumber: 158,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Header.tsx",
                            lineNumber: 149,
                            columnNumber: 40
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Header.tsx",
                        lineNumber: 148,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Header.tsx",
                lineNumber: 63,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-ssr] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-ssr] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-ssr] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/youtube.js [app-ssr] (ecmascript) <export default as Youtube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-ssr] (ecmascript) <export default as Instagram>");
'use client';
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
        name: 'Twitter',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"],
        href: '#'
    },
    {
        name: 'LinkedIn',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"],
        href: '#'
    },
    {
        name: 'YouTube',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"],
        href: 'https://www.youtube.com/channel/UCbqEwPoQ211fx8IfHdwFK7w'
    },
    {
        name: 'Instagram',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"],
        href: '#'
    }
];
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative bg-navy-dark border-t border-gold/10 mt-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent"
            }, void 0, false, {
                fileName: "[project]/components/layout/Footer.tsx",
                lineNumber: 59,
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
                                                    lineNumber: 68,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Footer.tsx",
                                                lineNumber: 67,
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
                                                        lineNumber: 71,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-gold/70 font-medium tracking-wider uppercase",
                                                        children: "Ellis County"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/Footer.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/layout/Footer.tsx",
                                                lineNumber: 70,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 66,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-cream/50 text-sm leading-relaxed mb-6",
                                        children: "A non-partisan platform dedicated to creating meaningful dialogue on the issues that shape Ellis County's future."
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 79,
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
                                                    lineNumber: 89,
                                                    columnNumber: 41
                                                }, this)
                                            }, social.name, false, {
                                                fileName: "[project]/components/layout/Footer.tsx",
                                                lineNumber: 88,
                                                columnNumber: 22
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 85,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Footer.tsx",
                                lineNumber: 65,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display text-sm font-bold text-gold/80 uppercase tracking-wider mb-5",
                                        children: "Platform"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 97,
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
                                                            lineNumber: 103,
                                                            columnNumber: 41
                                                        }, this),
                                                        link.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 37
                                                }, this)
                                            }, link.name, false, {
                                                fileName: "[project]/components/layout/Footer.tsx",
                                                lineNumber: 101,
                                                columnNumber: 56
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 100,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Footer.tsx",
                                lineNumber: 96,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display text-sm font-bold text-gold/80 uppercase tracking-wider mb-5",
                                        children: "Services"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 112,
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
                                                            lineNumber: 118,
                                                            columnNumber: 41
                                                        }, this),
                                                        link.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 37
                                                }, this)
                                            }, link.name, false, {
                                                fileName: "[project]/components/layout/Footer.tsx",
                                                lineNumber: 116,
                                                columnNumber: 55
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 115,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Footer.tsx",
                                lineNumber: 111,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display text-sm font-bold text-gold/80 uppercase tracking-wider mb-5",
                                        children: "Stay Connected"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 127,
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
                                                lineNumber: 131,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-cream/50 text-sm mb-3",
                                                        children: "Subscribe to our newsletter"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/Footer.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                        className: "flex flex-col sm:flex-row gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "email",
                                                                placeholder: "Your email",
                                                                className: "input text-sm flex-1 min-w-0 !py-2.5 !px-4 sm:!rounded-l-xl sm:!rounded-r-none sm:!border-r-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layout/Footer.tsx",
                                                                lineNumber: 141,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "submit",
                                                                className: "btn-primary text-sm !px-4 !py-2.5 sm:!rounded-l-none sm:!rounded-r-xl whitespace-nowrap w-full sm:w-auto",
                                                                children: "Subscribe"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layout/Footer.tsx",
                                                                lineNumber: 142,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/layout/Footer.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/layout/Footer.tsx",
                                                lineNumber: 136,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 130,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Footer.tsx",
                                lineNumber: 126,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Footer.tsx",
                        lineNumber: 63,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-8"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Footer.tsx",
                        lineNumber: 152,
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
                                lineNumber: 156,
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
                                        lineNumber: 160,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/terms",
                                        className: "text-cream/40 hover:text-gold transition-colors duration-300",
                                        children: "Terms of Service"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 163,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-cream/30",
                                        children: "Non-Partisan Platform"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 166,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Footer.tsx",
                                lineNumber: 159,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Footer.tsx",
                        lineNumber: 155,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Footer.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/Footer.tsx",
        lineNumber: 57,
        columnNumber: 10
    }, this);
}
}),
"[project]/components/forum/TopicCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TopicCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thumbs-up.js [app-ssr] (ecmascript) <export default as ThumbsUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thumbs-down.js [app-ssr] (ecmascript) <export default as ThumbsDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pin.js [app-ssr] (ecmascript) <export default as Pin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function timeAgo(dateStr) {
    const now = Date.now();
    const then = new Date(dateStr).getTime();
    const diff = now - then;
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (minutes < 1) return 'just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return new Date(dateStr).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
    });
}
const categoryColors = {
    blue: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
    green: 'bg-green-500/15 text-green-400 border-green-500/30',
    gold: 'bg-gold/15 text-gold border-gold/30',
    purple: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
    red: 'bg-red-500/15 text-red-400 border-red-500/30',
    teal: 'bg-teal-500/15 text-teal-400 border-teal-500/30',
    emerald: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    pink: 'bg-pink-500/15 text-pink-400 border-pink-500/30',
    orange: 'bg-orange-500/15 text-orange-400 border-orange-500/30',
    cyan: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30'
};
function TopicCard({ topic, index, category }) {
    const score = topic.upvotes - topic.downvotes;
    const colorClass = category ? categoryColors[category.color] || categoryColors.gold : categoryColors.gold;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 10
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.3,
            delay: index * 0.03
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: `/forum/topic/${topic.id}`,
            className: "block bg-navy border border-gold/15 rounded-xl p-4 sm:p-5 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300 group",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden sm:flex flex-col items-center gap-0.5 min-w-[50px] pt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__["ThumbsUp"], {
                                className: "w-4 h-4 text-cream/40"
                            }, void 0, false, {
                                fileName: "[project]/components/forum/TopicCard.tsx",
                                lineNumber: 61,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-lg font-bold ${score > 0 ? 'text-green-400' : score < 0 ? 'text-red-400' : 'text-cream/50'}`,
                                children: score
                            }, void 0, false, {
                                fileName: "[project]/components/forum/TopicCard.tsx",
                                lineNumber: 62,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsDown$3e$__["ThumbsDown"], {
                                className: "w-4 h-4 text-cream/40"
                            }, void 0, false, {
                                fileName: "[project]/components/forum/TopicCard.tsx",
                                lineNumber: 65,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/forum/TopicCard.tsx",
                        lineNumber: 60,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-2 mb-2",
                                children: [
                                    category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${colorClass}`,
                                        children: category.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/forum/TopicCard.tsx",
                                        lineNumber: 72,
                                        columnNumber: 42
                                    }, this),
                                    topic.isPinned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center gap-1 text-xs text-amber-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pin$3e$__["Pin"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/components/forum/TopicCard.tsx",
                                                lineNumber: 76,
                                                columnNumber: 37
                                            }, this),
                                            " Pinned"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/forum/TopicCard.tsx",
                                        lineNumber: 75,
                                        columnNumber: 48
                                    }, this),
                                    topic.isLocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center gap-1 text-xs text-cream/40",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/components/forum/TopicCard.tsx",
                                                lineNumber: 79,
                                                columnNumber: 37
                                            }, this),
                                            " Locked"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/forum/TopicCard.tsx",
                                        lineNumber: 78,
                                        columnNumber: 48
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/forum/TopicCard.tsx",
                                lineNumber: 71,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-display text-base sm:text-lg font-semibold text-white group-hover:text-gold transition-colors mb-1 line-clamp-2",
                                children: topic.title
                            }, void 0, false, {
                                fileName: "[project]/components/forum/TopicCard.tsx",
                                lineNumber: 84,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-cream/50 text-sm line-clamp-1 mb-3",
                                children: topic.body
                            }, void 0, false, {
                                fileName: "[project]/components/forum/TopicCard.tsx",
                                lineNumber: 89,
                                columnNumber: 25
                            }, this),
                            topic.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-1.5 mb-3",
                                children: topic.tags.slice(0, 4).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 py-0.5 bg-navy-dark/80 text-cream/40 rounded text-xs border border-gold/10",
                                        children: [
                                            "#",
                                            tag
                                        ]
                                    }, tag, true, {
                                        fileName: "[project]/components/forum/TopicCard.tsx",
                                        lineNumber: 95,
                                        columnNumber: 68
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/forum/TopicCard.tsx",
                                lineNumber: 94,
                                columnNumber: 51
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-3 text-xs text-cream/40",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-cream/60",
                                        children: topic.isAnonymous ? 'Anonymous' : topic.authorName
                                    }, void 0, false, {
                                        fileName: "[project]/components/forum/TopicCard.tsx",
                                        lineNumber: 102,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/components/forum/TopicCard.tsx",
                                                lineNumber: 106,
                                                columnNumber: 33
                                            }, this),
                                            timeAgo(topic.createdAt)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/forum/TopicCard.tsx",
                                        lineNumber: 105,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/components/forum/TopicCard.tsx",
                                                lineNumber: 110,
                                                columnNumber: 33
                                            }, this),
                                            topic.replyCount,
                                            " ",
                                            topic.replyCount === 1 ? 'reply' : 'replies'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/forum/TopicCard.tsx",
                                        lineNumber: 109,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/components/forum/TopicCard.tsx",
                                                lineNumber: 114,
                                                columnNumber: 33
                                            }, this),
                                            topic.viewCount,
                                            " views"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/forum/TopicCard.tsx",
                                        lineNumber: 113,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sm:hidden flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__["ThumbsUp"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/components/forum/TopicCard.tsx",
                                                lineNumber: 120,
                                                columnNumber: 33
                                            }, this),
                                            score
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/forum/TopicCard.tsx",
                                        lineNumber: 119,
                                        columnNumber: 29
                                    }, this),
                                    topic.lastReplyBy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-cream/30",
                                        children: [
                                            "Last reply by ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-cream/50",
                                                children: topic.lastReplyBy
                                            }, void 0, false, {
                                                fileName: "[project]/components/forum/TopicCard.tsx",
                                                lineNumber: 125,
                                                columnNumber: 51
                                            }, this),
                                            " · ",
                                            timeAgo(topic.lastReplyAt || topic.createdAt)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/forum/TopicCard.tsx",
                                        lineNumber: 124,
                                        columnNumber: 51
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/forum/TopicCard.tsx",
                                lineNumber: 101,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/forum/TopicCard.tsx",
                        lineNumber: 69,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/forum/TopicCard.tsx",
                lineNumber: 58,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/forum/TopicCard.tsx",
            lineNumber: 57,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/forum/TopicCard.tsx",
        lineNumber: 47,
        columnNumber: 10
    }, this);
}
}),
"[project]/lib/forum/forum-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FORUM_CATEGORIES",
    ()=>FORUM_CATEGORIES,
    "LOCAL_RESOURCES",
    ()=>LOCAL_RESOURCES,
    "SEED_REPLIES",
    ()=>SEED_REPLIES,
    "SEED_TOPICS",
    ()=>SEED_TOPICS,
    "SEED_USERS",
    ()=>SEED_USERS
]);
const FORUM_CATEGORIES = [
    {
        id: 'infrastructure',
        name: 'Infrastructure & Transportation',
        description: 'Roads, I-35E, public transit, and DFW expansion impacts',
        icon: 'truck',
        topicCount: 0,
        color: 'blue',
        order: 1
    },
    {
        id: 'growth',
        name: 'Growth & Development',
        description: 'Residential growth, water capacity, affordable housing, and rural preservation',
        icon: 'building',
        topicCount: 0,
        color: 'green',
        order: 2
    },
    {
        id: 'taxes',
        name: 'Property Taxes & Budget',
        description: 'Tax appraisals, school bonds, county spending transparency',
        icon: 'dollar',
        topicCount: 0,
        color: 'gold',
        order: 3
    },
    {
        id: 'education',
        name: 'Education',
        description: 'School overcrowding, teacher pay, safety, CTE programs',
        icon: 'book',
        topicCount: 0,
        color: 'purple',
        order: 4
    },
    {
        id: 'safety',
        name: 'Public Safety',
        description: 'Emergency response, I-35 crime, VFD funding, mental health crisis',
        icon: 'shield',
        topicCount: 0,
        color: 'red',
        order: 5
    },
    {
        id: 'economic',
        name: 'Economic Development',
        description: 'Business diversity, broadband, workforce development',
        icon: 'briefcase',
        topicCount: 0,
        color: 'teal',
        order: 6
    },
    {
        id: 'agriculture',
        name: 'Agriculture & Rural Life',
        description: 'Ag exemptions, drought, urban sprawl, livestock regulations',
        icon: 'leaf',
        topicCount: 0,
        color: 'emerald',
        order: 7
    },
    {
        id: 'healthcare',
        name: 'Healthcare',
        description: 'Hospital access, mental health, senior care, EMS coverage',
        icon: 'heart',
        topicCount: 0,
        color: 'pink',
        order: 8
    },
    {
        id: 'quality',
        name: 'Quality of Life',
        description: 'Parks, libraries, youth programs, historic preservation',
        icon: 'sun',
        topicCount: 0,
        color: 'orange',
        order: 9
    },
    {
        id: 'environment',
        name: 'Environment & Utilities',
        description: 'Groundwater, waste management, flood control, power grid',
        icon: 'droplet',
        topicCount: 0,
        color: 'cyan',
        order: 10
    }
];
const SEED_USERS = [
    {
        id: 'user-admin',
        email: 'admin@pivotalvoice.com',
        displayName: 'PV Admin',
        passwordHash: '',
        joinDate: '2025-06-01T00:00:00Z',
        city: 'Waxahachie',
        reputation: 500,
        topicCount: 5,
        replyCount: 30,
        isAdmin: true,
        isModerator: true,
        followedTopics: [],
        notifications: [],
        bio: 'Pivotal Voice platform administrator'
    },
    {
        id: 'user-001',
        email: 'marcus.w@email.com',
        displayName: 'MarcusW',
        passwordHash: '',
        joinDate: '2025-08-15T00:00:00Z',
        city: 'Waxahachie',
        isBusinessOwner: true,
        yearsInCounty: 22,
        reputation: 145,
        topicCount: 8,
        replyCount: 45,
        followedTopics: [],
        notifications: [],
        bio: 'Small business owner, downtown Waxahachie'
    },
    {
        id: 'user-002',
        email: 'sarah.m@email.com',
        displayName: 'SarahMidlothian',
        passwordHash: '',
        joinDate: '2025-09-01T00:00:00Z',
        city: 'Midlothian',
        yearsInCounty: 7,
        reputation: 98,
        topicCount: 5,
        replyCount: 32,
        followedTopics: [],
        notifications: [],
        bio: 'Mom of 3, involved in Midlothian ISD PTA'
    },
    {
        id: 'user-003',
        email: 'javier.g@email.com',
        displayName: 'JavierG_Ennis',
        passwordHash: '',
        joinDate: '2025-09-20T00:00:00Z',
        city: 'Ennis',
        isBusinessOwner: true,
        yearsInCounty: 15,
        reputation: 112,
        topicCount: 6,
        replyCount: 28,
        followedTopics: [],
        notifications: [],
        bio: 'Ennis restaurant owner, volunteer firefighter'
    },
    {
        id: 'user-004',
        email: 'betty.r@email.com',
        displayName: 'BettyRancher',
        passwordHash: '',
        joinDate: '2025-10-05T00:00:00Z',
        city: 'Italy',
        yearsInCounty: 40,
        reputation: 87,
        topicCount: 4,
        replyCount: 22,
        followedTopics: [],
        notifications: [],
        bio: 'Third-generation cattle rancher near Italy'
    },
    {
        id: 'user-005',
        email: 'devon.t@email.com',
        displayName: 'DevonTeacher',
        passwordHash: '',
        joinDate: '2025-10-15T00:00:00Z',
        city: 'Red Oak',
        yearsInCounty: 5,
        reputation: 76,
        topicCount: 3,
        replyCount: 18,
        followedTopics: [],
        notifications: [],
        bio: 'High school teacher in ROISD'
    },
    {
        id: 'user-006',
        email: 'tom.h@email.com',
        displayName: 'TomH_Palmer',
        passwordHash: '',
        joinDate: '2025-11-01T00:00:00Z',
        city: 'Palmer',
        yearsInCounty: 12,
        reputation: 64,
        topicCount: 3,
        replyCount: 15,
        followedTopics: [],
        notifications: [],
        bio: 'Palmer city council watcher'
    },
    {
        id: 'user-007',
        email: 'nina.k@email.com',
        displayName: 'NinaK_RN',
        passwordHash: '',
        joinDate: '2025-11-10T00:00:00Z',
        city: 'Midlothian',
        yearsInCounty: 3,
        reputation: 55,
        topicCount: 2,
        replyCount: 20,
        followedTopics: [],
        notifications: [],
        bio: 'ER nurse, healthcare access advocate'
    },
    {
        id: 'user-008',
        email: 'carlos.p@email.com',
        displayName: 'CarlosP',
        passwordHash: '',
        joinDate: '2025-12-01T00:00:00Z',
        city: 'Waxahachie',
        yearsInCounty: 8,
        reputation: 42,
        topicCount: 2,
        replyCount: 12,
        followedTopics: [],
        notifications: [],
        bio: 'IT professional, work from home'
    }
];
// ─── Seed Topics ────────────────────────────────────────────
const now = new Date();
const h = (hours)=>new Date(now.getTime() - hours * 60 * 60 * 1000).toISOString();
const d = (days)=>new Date(now.getTime() - days * 24 * 60 * 60 * 1000).toISOString();
const SEED_TOPICS = [
    // Infrastructure & Transportation
    {
        id: 'topic-001',
        title: 'I-35E congestion is getting dangerous — what can we do?',
        body: 'I commute from Waxahachie to Dallas daily and the I-35E corridor has become a nightmare. Multiple accidents every week, no viable alternate routes, and the construction seems never-ending. Other counties have successfully lobbied TxDOT for express lanes and improved on/off ramps. What would it take to get Ellis County organized around this? Has anyone attended the TxDOT public meetings?',
        categoryId: 'infrastructure',
        authorId: 'user-001',
        authorName: 'MarcusW',
        createdAt: h(3),
        updatedAt: h(3),
        upvotes: 47,
        downvotes: 2,
        replyCount: 12,
        viewCount: 234,
        isPinned: true,
        isLocked: false,
        isAnonymous: false,
        tags: [
            'I-35E',
            'commute',
            'TxDOT',
            'safety'
        ],
        lastReplyAt: h(0.5),
        lastReplyBy: 'CarlosP',
        voters: {}
    },
    {
        id: 'topic-002',
        title: 'FM 664 potholes — anyone reported these to the county?',
        body: 'The stretch of FM 664 between Midlothian and Red Oak is in terrible shape. I counted 15+ potholes just on my drive to work this morning. My neighbor busted a tire last week. Has anyone successfully reported these and gotten a response from the county maintenance department? What\'s the best way to get action?',
        categoryId: 'infrastructure',
        authorId: 'user-002',
        authorName: 'SarahMidlothian',
        createdAt: h(8),
        updatedAt: h(8),
        upvotes: 31,
        downvotes: 0,
        replyCount: 8,
        viewCount: 156,
        isPinned: false,
        isLocked: false,
        isAnonymous: false,
        tags: [
            'roads',
            'maintenance',
            'FM-664'
        ],
        lastReplyAt: h(2),
        lastReplyBy: 'TomH_Palmer',
        voters: {}
    },
    {
        id: 'topic-003',
        title: 'Public transportation — will Ellis County ever get a bus or rail option?',
        body: 'With all the growth happening, a lot of residents can\'t afford to drive or maintain a vehicle. Senior citizens in particular are stranded. Even a basic shuttle service connecting Waxahachie, Midlothian, and Red Oak to the DART stations would be huge. Has Commissioners Court ever discussed this?',
        categoryId: 'infrastructure',
        authorId: 'user-008',
        authorName: 'CarlosP',
        createdAt: d(2),
        updatedAt: d(2),
        upvotes: 22,
        downvotes: 5,
        replyCount: 6,
        viewCount: 98,
        isPinned: false,
        isLocked: false,
        isAnonymous: false,
        tags: [
            'public-transit',
            'DART',
            'seniors'
        ],
        voters: {}
    },
    // Growth & Development
    {
        id: 'topic-004',
        title: 'Another 500-home subdivision approved near Midlothian — where will the water come from?',
        body: 'Commissioners just approved another massive residential development off FM 663. That\'s the third one this year. Meanwhile, we had water restrictions last summer and our water treatment plant is already at 85% capacity. The developers get their profits and leave us dealing with the infrastructure burden. When will our county leaders start requiring developers to fund water infrastructure upgrades?',
        categoryId: 'growth',
        authorId: 'user-002',
        authorName: 'SarahMidlothian',
        createdAt: h(5),
        updatedAt: h(5),
        upvotes: 56,
        downvotes: 3,
        replyCount: 15,
        viewCount: 312,
        isPinned: false,
        isLocked: false,
        isAnonymous: false,
        tags: [
            'development',
            'water',
            'Midlothian',
            'growth'
        ],
        lastReplyAt: h(1),
        lastReplyBy: 'MarcusW',
        voters: {}
    },
    {
        id: 'topic-005',
        title: 'Preserving Ellis County\'s rural character — are we too late?',
        body: 'I moved to Ellis County 20 years ago specifically for the rural atmosphere, the open spaces, the small-town feel. Now I see strip malls going up on every corner, cookie-cutter subdivisions replacing farmland, and chain restaurants pushing out local businesses. Is there any organized effort to preserve what makes this county special? Other Texas counties have implemented conservation easements and smart growth policies.',
        categoryId: 'growth',
        authorId: 'user-004',
        authorName: 'BettyRancher',
        createdAt: d(1),
        updatedAt: d(1),
        upvotes: 43,
        downvotes: 8,
        replyCount: 11,
        viewCount: 245,
        isPinned: false,
        isLocked: false,
        isAnonymous: false,
        tags: [
            'rural',
            'preservation',
            'smart-growth'
        ],
        lastReplyAt: h(6),
        lastReplyBy: 'JavierG_Ennis',
        voters: {}
    },
    {
        id: 'topic-006',
        title: 'Affordable housing in Ellis County — priced out of our own community',
        body: 'Average home prices in Ellis County jumped 35% in the last 3 years. Rent has followed. Teachers, first responders, and service workers who grew up here can\'t afford to stay. My daughter is a nurse at Baylor Scott & White and she\'s looking at commuting from Corsicana because she can\'t find anything affordable here. What solutions have other communities tried?',
        categoryId: 'growth',
        authorId: 'user-007',
        authorName: 'NinaK_RN',
        createdAt: d(3),
        updatedAt: d(3),
        upvotes: 38,
        downvotes: 4,
        replyCount: 9,
        viewCount: 189,
        isPinned: false,
        isLocked: false,
        isAnonymous: false,
        tags: [
            'housing',
            'affordability',
            'cost-of-living'
        ],
        voters: {}
    },
    // Property Taxes & Budget
    {
        id: 'topic-007',
        title: 'Property tax appraisal went up 28% — how do I protest effectively?',
        body: 'Just got my appraisal notice and my property value jumped from $285,000 to $365,000. That\'s a 28% increase! Nothing about my house has changed. I know I can protest but I\'ve never done it before. Has anyone successfully protested their appraisal in Ellis County? What evidence do I need? Is it worth hiring one of those protest companies?',
        categoryId: 'taxes',
        authorId: 'user-008',
        authorName: 'CarlosP',
        createdAt: h(4),
        updatedAt: h(4),
        upvotes: 52,
        downvotes: 1,
        replyCount: 14,
        viewCount: 287,
        isPinned: true,
        isLocked: false,
        isAnonymous: false,
        tags: [
            'property-tax',
            'appraisal',
            'protest'
        ],
        lastReplyAt: h(1.5),
        lastReplyBy: 'BettyRancher',
        voters: {}
    },
    {
        id: 'topic-008',
        title: 'WISD bond proposal — $180M for new school facilities',
        body: 'Waxahachie ISD just announced their upcoming bond election for $180 million. They say it\'s needed for a new middle school, elementary expansion, and athletic facilities. I support education but that\'s a huge amount. Has anyone seen the detailed breakdown? How much would this actually add to our tax bills? The district website has some info but I want to hear from other parents and taxpayers.',
        categoryId: 'taxes',
        authorId: 'user-001',
        authorName: 'MarcusW',
        createdAt: d(2),
        updatedAt: d(2),
        upvotes: 34,
        downvotes: 6,
        replyCount: 18,
        viewCount: 342,
        isPinned: false,
        isLocked: false,
        isAnonymous: false,
        tags: [
            'school-bond',
            'WISD',
            'education-funding'
        ],
        lastReplyAt: h(4),
        lastReplyBy: 'DevonTeacher',
        voters: {}
    },
    {
        id: 'topic-009',
        title: 'County budget meeting recap — where is our money going?',
        body: 'I attended the Commissioners Court budget hearing last Tuesday. Here\'s my summary: Law enforcement got a 12% increase, road maintenance got 8%, but parks and libraries only got 2%. The county judge mentioned a potential new county building downtown. Meanwhile, the volunteer fire departments are begging for equipment. I\'ll share my notes — what are your priorities for the county budget?',
        categoryId: 'taxes',
        authorId: 'user-006',
        authorName: 'TomH_Palmer',
        createdAt: d(4),
        updatedAt: d(4),
        upvotes: 29,
        downvotes: 2,
        replyCount: 7,
        viewCount: 145,
        isPinned: false,
        isLocked: false,
        isAnonymous: false,
        tags: [
            'county-budget',
            'commissioners-court',
            'spending'
        ],
        voters: {}
    },
    // Education
    {
        id: 'topic-010',
        title: 'Midlothian ISD overcrowding — portable buildings are not the answer',
        body: 'My kid\'s school now has 8 portable buildings. The cafeteria can\'t seat all students so they have 4 lunch periods starting at 10:30 AM. Class sizes are pushing 30. When Midlothian ISD approved all these new developments, where was the plan for school capacity? This affects the quality of education our kids receive. Is a bond election coming?',
        categoryId: 'education',
        authorId: 'user-002',
        authorName: 'SarahMidlothian',
        createdAt: h(6),
        updatedAt: h(6),
        upvotes: 41,
        downvotes: 1,
        replyCount: 13,
        viewCount: 267,
        isPinned: false,
        isLocked: false,
        isAnonymous: false,
        tags: [
            'MISD',
            'overcrowding',
            'school-capacity'
        ],
        lastReplyAt: h(2),
        lastReplyBy: 'DevonTeacher',
        voters: {}
    },
    {
        id: 'topic-011',
        title: 'Teacher shortage is real — my perspective from inside the classroom',
        body: 'I\'ve been teaching in ROISD for 5 years and I can tell you, we\'re hemorrhaging teachers. Low pay compared to DFW districts, increasing class sizes, and the lack of respect from administration is driving people out. Three teachers in my department alone quit mid-year. Substitutes are impossible to find. Parents, you should know what\'s really happening in our schools.',
        categoryId: 'education',
        authorId: 'user-005',
        authorName: 'DevonTeacher',
        createdAt: d(1),
        updatedAt: d(1),
        upvotes: 67,
        downvotes: 3,
        replyCount: 22,
        viewCount: 456,
        isPinned: false,
        isLocked: false,
        isAnonymous: false,
        tags: [
            'teachers',
            'ROISD',
            'pay',
            'retention'
        ],
        lastReplyAt: h(3),
        lastReplyBy: 'SarahMidlothian',
        voters: {}
    },
    {
        id: 'topic-012',
        title: 'Career tech programs — are we preparing kids for real jobs?',
        body: 'Not every kid is going to college, and that\'s okay. But are our school districts offering enough CTE programs? The construction, welding, healthcare, and IT industries are desperate for workers. I\'d love to see more partnerships between our high schools and local employers. What CTE programs do your kids\' schools offer?',
        categoryId: 'education',
        authorId: 'user-003',
        authorName: 'JavierG_Ennis',
        createdAt: d(5),
        updatedAt: d(5),
        upvotes: 25,
        downvotes: 2,
        replyCount: 6,
        viewCount: 112,
        isPinned: false,
        isLocked: false,
        isAnonymous: false,
        tags: [
            'CTE',
            'workforce',
            'career-readiness'
        ],
        voters: {}
    },
    // Public Safety
    {
        id: 'topic-013',
        title: 'Rural response times — 20+ minutes for an ambulance is unacceptable',
        body: 'My father-in-law had a heart attack on his property near Avalon last month. It took 23 minutes for the ambulance to arrive. In cardiac emergencies, every minute matters. This isn\'t a criticism of our EMS workers — they\'re stretched thin. But our county needs to fund additional EMS stations in underserved rural areas. How many people have to die before this becomes a priority?',
        categoryId: 'safety',
        authorId: 'user-004',
        authorName: 'BettyRancher',
        createdAt: h(10),
        updatedAt: h(10),
        upvotes: 58,
        downvotes: 0,
        replyCount: 16,
        viewCount: 378,
        isPinned: false,
        isLocked: false,
        isAnonymous: false,
        tags: [
            'EMS',
            'rural',
            'response-time',
            'emergency'
        ],
        lastReplyAt: h(2),
        lastReplyBy: 'NinaK_RN',
        voters: {}
    },
    {
        id: 'topic-014',
        title: 'VFD needs your help — Volunteer Fire Dept fundraiser this Saturday',
        body: 'The Palmer Volunteer Fire Department is holding their annual BBQ fundraiser this Saturday at the community center. These folks protect our homes and families on a shoestring budget. Last year they responded to 340 calls with equipment that\'s 15+ years old. Come out, buy some BBQ, and support the people who show up when you call 911. Details in the post.',
        categoryId: 'safety',
        authorId: 'user-006',
        authorName: 'TomH_Palmer',
        createdAt: d(1),
        updatedAt: d(1),
        upvotes: 35,
        downvotes: 0,
        replyCount: 5,
        viewCount: 167,
        isPinned: false,
        isLocked: false,
        isAnonymous: false,
        tags: [
            'VFD',
            'Palmer',
            'fundraiser',
            'community'
        ],
        voters: {}
    },
    {
        id: 'topic-015',
        title: 'Mental health crisis in Ellis County — we need better resources',
        body: 'After recent events in our community, it\'s clear we lack adequate mental health crisis intervention. The sheriff\'s office is often the only responder for mental health calls, and they\'re not trained counselors. Does anyone know what crisis resources are actually available in Ellis County? I know MHMR of Tarrant County technically covers our area but the waits are months long.',
        categoryId: 'safety',
        authorId: 'user-007',
        authorName: 'NinaK_RN',
        createdAt: d(3),
        updatedAt: d(3),
        upvotes: 44,
        downvotes: 1,
        replyCount: 10,
        viewCount: 223,
        isPinned: false,
        isLocked: false,
        isAnonymous: false,
        tags: [
            'mental-health',
            'crisis',
            'resources'
        ],
        voters: {}
    },
    // Economic Development
    {
        id: 'topic-016',
        title: 'Attracting businesses beyond bedrooms — Ellis County needs economic diversity',
        body: 'Ellis County is rapidly becoming a bedroom community for DFW. Most of us drive 45+ minutes to work in Dallas. That means our retail sales tax revenue is going to other counties while we shoulder infrastructure costs. What would it take to attract employers HERE? Other fast-growing TX counties have created business incentive packages. Are our county leaders working on this?',
        categoryId: 'economic',
        authorId: 'user-001',
        authorName: 'MarcusW',
        createdAt: d(2),
        updatedAt: d(2),
        upvotes: 33,
        downvotes: 4,
        replyCount: 9,
        viewCount: 178,
        isPinned: false,
        isLocked: false,
        isAnonymous: false,
        tags: [
            'economic-development',
            'jobs',
            'commuting'
        ],
        voters: {}
    },
    {
        id: 'topic-017',
        title: 'Broadband internet in rural Ellis County — still on DSL in 2026',
        body: 'I live 8 miles outside of Ennis and my only internet option is 5 Mbps DSL. I can\'t work from home, my kids can\'t do homework reliably, and I can\'t stream anything. Meanwhile, new subdivisions a mile away get fiber. This is a basic infrastructure issue that affects property values, education, and economic opportunity. Who\'s responsible for getting broadband to rural areas?',
        categoryId: 'economic',
        authorId: 'user-003',
        authorName: 'JavierG_Ennis',
        createdAt: d(4),
        updatedAt: d(4),
        upvotes: 40,
        downvotes: 1,
        replyCount: 11,
        viewCount: 201,
        isPinned: false,
        isLocked: false,
        isAnonymous: false,
        tags: [
            'broadband',
            'rural',
            'internet',
            'infrastructure'
        ],
        voters: {}
    },
    // Agriculture
    {
        id: 'topic-018',
        title: 'Ag exemption changes — what Texas HB proposed changes mean for landowners',
        body: 'There\'s talk in Austin about modifying agricultural exemption requirements. For those of us who depend on ag exemptions to keep our land viable, this is terrifying. Some proposals would increase minimum acreage and require proof of agricultural income. Has anyone read the actual proposed legislation? I want to understand what we\'re up against before it\'s too late to act.',
        categoryId: 'agriculture',
        authorId: 'user-004',
        authorName: 'BettyRancher',
        createdAt: h(12),
        updatedAt: h(12),
        upvotes: 37,
        downvotes: 5,
        replyCount: 8,
        viewCount: 189,
        isPinned: false,
        isLocked: false,
        isAnonymous: false,
        tags: [
            'ag-exemption',
            'property-tax',
            'legislation'
        ],
        lastReplyAt: h(4),
        lastReplyBy: 'TomH_Palmer',
        voters: {}
    },
    {
        id: 'topic-019',
        title: 'Urban sprawl pushing farms out — a firsthand account',
        body: 'My family has farmed 200 acres south of Waxahachie for three generations. In the last 5 years, we\'ve had subdivisions built on three sides. Now we get complaints about tractor noise at 6 AM, dust from harvesting, and the smell of cattle. The developers knew this was agricultural land when they built. Texas has Right to Farm laws but the pressure to sell is immense when your property is appraised at residential rates.',
        categoryId: 'agriculture',
        authorId: 'user-004',
        authorName: 'BettyRancher',
        createdAt: d(6),
        updatedAt: d(6),
        upvotes: 51,
        downvotes: 2,
        replyCount: 14,
        viewCount: 298,
        isPinned: false,
        isLocked: false,
        isAnonymous: false,
        tags: [
            'farming',
            'urban-sprawl',
            'right-to-farm'
        ],
        voters: {}
    },
    // Healthcare
    {
        id: 'topic-020',
        title: 'Nearest specialist is 45 minutes away — healthcare access in Ellis County',
        body: 'When my daughter needed a pediatric neurologist, the closest one accepting patients was in Dallas. That\'s 45 minutes without traffic (so really an hour+). Dermatology, cardiology, endocrinology — all require a trip to DFW. For seniors who can\'t drive, this is a crisis. Has anyone heard about plans for more specialist clinics in Waxahachie or Midlothian?',
        categoryId: 'healthcare',
        authorId: 'user-007',
        authorName: 'NinaK_RN',
        createdAt: d(2),
        updatedAt: d(2),
        upvotes: 39,
        downvotes: 0,
        replyCount: 7,
        viewCount: 167,
        isPinned: false,
        isLocked: false,
        isAnonymous: false,
        tags: [
            'healthcare',
            'specialists',
            'access'
        ],
        voters: {}
    },
    {
        id: 'topic-021',
        title: 'Senior care options in Ellis County — help needed',
        body: 'My mom is 82 and needs assisted living but wants to stay in Ellis County near family. The options here are extremely limited and expensive. Most families I know are driving their parents to facilities in Dallas or Hillsboro. Does anyone have experience with senior care options locally? Are there any new facilities planned?',
        categoryId: 'healthcare',
        authorId: 'user-006',
        authorName: 'TomH_Palmer',
        createdAt: d(5),
        updatedAt: d(5),
        upvotes: 28,
        downvotes: 0,
        replyCount: 6,
        viewCount: 134,
        isPinned: false,
        isLocked: false,
        isAnonymous: false,
        tags: [
            'senior-care',
            'assisted-living',
            'aging'
        ],
        voters: {}
    },
    // Quality of Life
    {
        id: 'topic-022',
        title: 'Parks and trails master plan — Waxahachie needs more green space',
        body: 'Waxahachie\'s population has nearly doubled but we haven\'t added a single new park in 10 years. The Getzendaner trails are wonderful but always packed. Other growing cities prioritize park land during development approvals. Could we require developers to dedicate park space or contribute to a parks fund? Quality of life amenities attract families and businesses.',
        categoryId: 'quality',
        authorId: 'user-001',
        authorName: 'MarcusW',
        createdAt: d(3),
        updatedAt: d(3),
        upvotes: 36,
        downvotes: 2,
        replyCount: 8,
        viewCount: 154,
        isPinned: false,
        isLocked: false,
        isAnonymous: false,
        tags: [
            'parks',
            'trails',
            'green-space',
            'Waxahachie'
        ],
        voters: {}
    },
    {
        id: 'topic-023',
        title: 'Library hours cut again — when will our county invest in literacy?',
        body: 'The Nicholas P. Sims Library just announced reduced Saturday hours again. This is the third cut in two years. For working families, weeknight and weekend hours are the ONLY time we can bring our kids. Libraries aren\'t just about books — they\'re community centers offering programs, internet access, and resources for all ages. The county budget for libraries needs to be a priority.',
        categoryId: 'quality',
        authorId: 'user-005',
        authorName: 'DevonTeacher',
        createdAt: d(4),
        updatedAt: d(4),
        upvotes: 30,
        downvotes: 3,
        replyCount: 5,
        viewCount: 112,
        isPinned: false,
        isLocked: false,
        isAnonymous: false,
        tags: [
            'library',
            'hours',
            'funding',
            'literacy'
        ],
        voters: {}
    },
    {
        id: 'topic-024',
        title: 'Historic downtown Waxahachie — preserving what makes us unique',
        body: 'Our historic courthouse square is one of the most beautiful in Texas. But I\'ve noticed some property owners letting buildings deteriorate, and there\'s been talk of demolishing the old Masonic lodge for a parking lot. Ellis County\'s history IS our identity and a major tourism draw. What can we do to support historic preservation? Are there grants or tax incentives available?',
        categoryId: 'quality',
        authorId: 'user-003',
        authorName: 'JavierG_Ennis',
        createdAt: d(7),
        updatedAt: d(7),
        upvotes: 42,
        downvotes: 1,
        replyCount: 9,
        viewCount: 198,
        isPinned: false,
        isLocked: false,
        isAnonymous: false,
        tags: [
            'historic',
            'preservation',
            'downtown',
            'tourism'
        ],
        voters: {}
    },
    // Environment & Utilities
    {
        id: 'topic-025',
        title: 'Groundwater contamination concerns near old industrial sites',
        body: 'I recently learned about historical industrial contamination near the Superconducting Super Collider site and some older properties in Ennis. My well water hasn\'t been tested in years. Does anyone know how to get well water tested in Ellis County? Are there any known contamination plumes the county should be disclosing to residents?',
        categoryId: 'environment',
        authorId: 'user-003',
        authorName: 'JavierG_Ennis',
        createdAt: d(1),
        updatedAt: d(1),
        upvotes: 33,
        downvotes: 0,
        replyCount: 7,
        viewCount: 156,
        isPinned: false,
        isLocked: false,
        isAnonymous: false,
        tags: [
            'groundwater',
            'contamination',
            'well-water',
            'SSC'
        ],
        lastReplyAt: h(8),
        lastReplyBy: 'BettyRancher',
        voters: {}
    },
    {
        id: 'topic-026',
        title: 'Flooding on Waxahachie Creek — is anyone tracking this?',
        body: 'Every time we get heavy rain, the area along Waxahachie Creek floods. The roads near Farley and Brown St become impassable. I know FEMA has updated flood maps but it seems like development upstream has made things worse. Has the city done any drainage studies? Are there mitigation projects planned?',
        categoryId: 'environment',
        authorId: 'user-008',
        authorName: 'CarlosP',
        createdAt: d(3),
        updatedAt: d(3),
        upvotes: 26,
        downvotes: 1,
        replyCount: 5,
        viewCount: 98,
        isPinned: false,
        isLocked: false,
        isAnonymous: false,
        tags: [
            'flooding',
            'drainage',
            'Waxahachie-Creek'
        ],
        voters: {}
    },
    {
        id: 'topic-027',
        title: 'Power grid reliability — what\'s Ellis County\'s plan for the next winter storm?',
        body: 'After the 2021 freeze and the continued strain on Texas\' power grid, I want to know what Ellis County has done to prepare. Are any of our critical facilities (hospitals, shelters, water treatment plants) on backup generators? Has the county established warming centers? What should we individually be doing to prepare? I don\'t want a repeat of 2021.',
        categoryId: 'environment',
        authorId: 'user-002',
        authorName: 'SarahMidlothian',
        createdAt: d(5),
        updatedAt: d(5),
        upvotes: 45,
        downvotes: 2,
        replyCount: 12,
        viewCount: 234,
        isPinned: false,
        isLocked: false,
        isAnonymous: false,
        tags: [
            'power-grid',
            'winter-storm',
            'preparedness'
        ],
        voters: {}
    }
];
const SEED_REPLIES = [
    // Replies to I-35E topic
    {
        id: 'reply-001',
        topicId: 'topic-001',
        body: 'I attend TxDOT meetings regularly. They said I-35E expansion south of Waxahachie is "on the 10-year plan" which basically means not anytime soon. We need to push our state representative to fast-track this. Lives are literally at risk.',
        authorId: 'user-006',
        authorName: 'TomH_Palmer',
        createdAt: h(2.5),
        updatedAt: h(2.5),
        upvotes: 18,
        downvotes: 1,
        isAnonymous: false,
        voters: {}
    },
    {
        id: 'reply-002',
        topicId: 'topic-001',
        parentReplyId: 'reply-001',
        body: 'Thank you for going to those meetings Tom. Can you share when the next one is? I\'d like to bring some other business owners. The accidents on 35 between Waxahachie and Red Oak are costing me employees who refuse to make that commute.',
        authorId: 'user-001',
        authorName: 'MarcusW',
        createdAt: h(2),
        updatedAt: h(2),
        upvotes: 12,
        downvotes: 0,
        isAnonymous: false,
        voters: {}
    },
    {
        id: 'reply-003',
        topicId: 'topic-001',
        body: 'Have you all looked into the 287 bypass option? I know it adds time but it\'s significantly safer. I switched my commute route 6 months ago and my stress levels dropped dramatically.',
        authorId: 'user-008',
        authorName: 'CarlosP',
        createdAt: h(0.5),
        updatedAt: h(0.5),
        upvotes: 8,
        downvotes: 3,
        isAnonymous: false,
        voters: {}
    },
    // Replies to water/development topic
    {
        id: 'reply-004',
        topicId: 'topic-004',
        body: 'I work in water infrastructure and I can tell you — Ellis County Water Authority is scrambling. The current treatment plant was built for 80,000 residents and we\'re approaching 200,000. A new treatment plant would cost $120M+ and take 5 years to build. The time to start was 10 years ago.',
        authorId: 'user-008',
        authorName: 'CarlosP',
        createdAt: h(4),
        updatedAt: h(4),
        upvotes: 34,
        downvotes: 0,
        isAnonymous: false,
        voters: {}
    },
    {
        id: 'reply-005',
        topicId: 'topic-004',
        parentReplyId: 'reply-004',
        body: 'This is terrifying. Has anyone brought this up at Commissioners Court? If the treatment plant is at 85% capacity and we\'re approving thousands of new homes, we\'re heading for a crisis.',
        authorId: 'user-002',
        authorName: 'SarahMidlothian',
        createdAt: h(3),
        updatedAt: h(3),
        upvotes: 22,
        downvotes: 0,
        isAnonymous: false,
        voters: {}
    },
    {
        id: 'reply-006',
        topicId: 'topic-004',
        body: 'Developer impact fees in Ellis County are among the lowest in the DFW area. Compare: Denton County charges $4,500 per lot for water impact, Ellis County charges $1,200. That difference has to come from somewhere — our tax bills.',
        authorId: 'user-001',
        authorName: 'MarcusW',
        createdAt: h(1),
        updatedAt: h(1),
        upvotes: 28,
        downvotes: 2,
        isAnonymous: false,
        voters: {}
    },
    // Replies to property tax topic
    {
        id: 'reply-007',
        topicId: 'topic-007',
        body: 'I protested last year and got a $25K reduction. Here\'s my tips: 1) Print comparable sales from Zillow/Redfin for similar homes, 2) Take photos of any issues with your property, 3) Check if the appraisal district has the correct square footage, 4) Be polite and stick to facts. The informal hearing is worth trying before going to ARB.',
        authorId: 'user-001',
        authorName: 'MarcusW',
        createdAt: h(3.5),
        updatedAt: h(3.5),
        upvotes: 42,
        downvotes: 0,
        isAnonymous: false,
        voters: {}
    },
    {
        id: 'reply-008',
        topicId: 'topic-007',
        parentReplyId: 'reply-007',
        body: 'This is incredibly helpful! Did you do the informal hearing over the phone or in person? I\'m nervous about going in person.',
        authorId: 'user-008',
        authorName: 'CarlosP',
        createdAt: h(2.5),
        updatedAt: h(2.5),
        upvotes: 8,
        downvotes: 0,
        isAnonymous: false,
        voters: {}
    },
    {
        id: 'reply-009',
        topicId: 'topic-007',
        parentReplyId: 'reply-008',
        body: 'I did mine by phone! They\'re very accommodating. You can also submit evidence online now through the ECCAD website. Much less intimidating than a formal hearing.',
        authorId: 'user-001',
        authorName: 'MarcusW',
        createdAt: h(2),
        updatedAt: h(2),
        upvotes: 15,
        downvotes: 0,
        isAnonymous: false,
        voters: {}
    },
    // Replies to teacher shortage topic
    {
        id: 'reply-010',
        topicId: 'topic-011',
        body: 'As a parent I see this every day. My son\'s math class has had 3 different teachers this year. The lack of continuity is destroying their learning. Devon, thank you for staying and fighting for our kids. What can parents do to support you?',
        authorId: 'user-002',
        authorName: 'SarahMidlothian',
        createdAt: h(12),
        updatedAt: h(12),
        upvotes: 35,
        downvotes: 0,
        isAnonymous: false,
        voters: {}
    },
    {
        id: 'reply-011',
        topicId: 'topic-011',
        parentReplyId: 'reply-010',
        body: 'Honestly? Show up at school board meetings. Email the trustees. Let them know that competitive pay isn\'t optional — it\'s survival. Dallas ISD starts at $61K. ROISD starts at $52K. For the same job with the same requirements. Why would anyone choose us?',
        authorId: 'user-005',
        authorName: 'DevonTeacher',
        createdAt: h(10),
        updatedAt: h(10),
        upvotes: 29,
        downvotes: 1,
        isAnonymous: false,
        voters: {}
    },
    // Replies to rural EMS topic
    {
        id: 'reply-012',
        topicId: 'topic-013',
        body: 'As an ER nurse, I can tell you that response time directly correlates with survival rates for cardiac events. After 10 minutes without intervention, survival drops to less than 5%. Ellis County needs at minimum 2 additional EMS stations south of Ennis and east of Waxahachie. This should be the #1 budget priority.',
        authorId: 'user-007',
        authorName: 'NinaK_RN',
        createdAt: h(8),
        updatedAt: h(8),
        upvotes: 41,
        downvotes: 0,
        isAnonymous: false,
        voters: {}
    },
    {
        id: 'reply-013',
        topicId: 'topic-013',
        body: 'My VFD often responds to medical calls because we\'re closer than EMS. We\'re trained in basic first aid and can use an AED, but we\'re not paramedics. The county is basically relying on unpaid volunteers to cover gaps in emergency services. Something has to change.',
        authorId: 'user-003',
        authorName: 'JavierG_Ennis',
        createdAt: h(6),
        updatedAt: h(6),
        upvotes: 33,
        downvotes: 0,
        isAnonymous: false,
        voters: {}
    }
];
const LOCAL_RESOURCES = [
    {
        name: 'Ellis County Government',
        description: 'Official county website',
        url: 'https://www.co.ellis.tx.us',
        category: 'government'
    },
    {
        name: 'Ellis County Elections',
        description: 'Register, polling locations, results',
        url: 'https://www.co.ellis.tx.us/149/Elections',
        category: 'government'
    },
    {
        name: 'Commissioners Court Agendas',
        description: 'Meeting agendas and minutes',
        url: 'https://www.co.ellis.tx.us/agendacenter',
        category: 'government'
    },
    {
        name: 'Ellis County Appraisal District',
        description: 'Property values and protests',
        url: 'https://www.elliscad.com',
        category: 'government'
    },
    {
        name: 'Ellis County Sheriff',
        description: 'Non-emergency contact',
        url: 'https://www.co.ellis.tx.us/200/Sheriff',
        phone: '972-825-4901',
        category: 'emergency'
    },
    {
        name: 'Emergency: 911',
        description: 'Police, Fire, EMS emergencies',
        url: '#',
        phone: '911',
        category: 'emergency'
    },
    {
        name: 'Crisis Hotline — 988',
        description: 'Suicide & crisis lifeline',
        url: 'https://988lifeline.org',
        phone: '988',
        category: 'emergency'
    },
    {
        name: 'TxDOT — Report Road Issues',
        description: 'State road maintenance requests',
        url: 'https://www.txdot.gov',
        phone: '800-452-9292',
        category: 'services'
    },
    {
        name: 'Texas Voter Registration',
        description: 'Check status or register',
        url: 'https://www.votetexas.gov',
        category: 'services'
    },
    {
        name: 'Waxahachie Chamber of Commerce',
        description: 'Local business support',
        url: 'https://www.waxahachiechamber.com',
        category: 'community'
    },
    {
        name: 'Ellis County SPCA',
        description: 'Animal services',
        url: 'https://www.elliscountyspca.org',
        category: 'community'
    },
    {
        name: 'Nicholas P. Sims Library',
        description: 'Public library in Waxahachie',
        url: 'https://www.waxahachie.com/295/Library',
        category: 'community'
    }
];
}),
"[project]/lib/forum/forum-service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createReply",
    ()=>createReply,
    "createReport",
    ()=>createReport,
    "createTopic",
    ()=>createTopic,
    "deleteReply",
    ()=>deleteReply,
    "deleteTopic",
    ()=>deleteTopic,
    "getCategories",
    ()=>getCategories,
    "getCategoryById",
    ()=>getCategoryById,
    "getForumStats",
    ()=>getForumStats,
    "getForumUserById",
    ()=>getForumUserById,
    "getRepliesByTopic",
    ()=>getRepliesByTopic,
    "getTopicById",
    ()=>getTopicById,
    "getTopics",
    ()=>getTopics,
    "getTopicsByCategory",
    ()=>getTopicsByCategory,
    "incrementTopicViews",
    ()=>incrementTopicViews,
    "searchTopics",
    ()=>searchTopics,
    "sortTopics",
    ()=>sortTopics,
    "toggleFollowTopic",
    ()=>toggleFollowTopic,
    "updateReply",
    ()=>updateReply,
    "updateTopic",
    ()=>updateTopic,
    "voteReply",
    ()=>voteReply,
    "voteTopic",
    ()=>voteTopic
]);
// Forum Service — Supabase-backed
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forum$2f$forum$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/forum/forum-data.ts [app-ssr] (ecmascript)");
;
;
// ─── Helpers ────────────────────────────────────────────────
function mapTopic(data) {
    return {
        id: data.id,
        title: data.title,
        body: data.body,
        categoryId: data.category_id,
        authorId: data.author_id,
        authorName: data.author_name,
        createdAt: data.created_at,
        updatedAt: data.updated_at,
        upvotes: data.upvotes || 0,
        downvotes: data.downvotes || 0,
        replyCount: data.reply_count || 0,
        viewCount: data.view_count || 0,
        isPinned: data.is_pinned || false,
        isLocked: data.is_locked || false,
        isAnonymous: data.is_anonymous || false,
        tags: data.tags || [],
        lastReplyAt: data.last_reply_at,
        lastReplyBy: data.last_reply_by,
        voters: data.voters || {}
    };
}
function mapReply(data) {
    return {
        id: data.id,
        topicId: data.topic_id,
        authorId: data.author_id,
        authorName: data.author_name,
        body: data.body,
        createdAt: data.created_at,
        updatedAt: data.updated_at,
        upvotes: data.upvotes || 0,
        downvotes: data.downvotes || 0,
        isDeleted: data.is_deleted || false,
        isAnonymous: data.is_anonymous || false,
        voters: data.voters || {}
    };
}
async function getCategories() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('forum_categories').select('*').order('order', {
        ascending: true
    });
    if (error || !data || data.length === 0) {
        if (error) console.error('Error fetching categories:', error.message);
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forum$2f$forum$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORUM_CATEGORIES"];
    }
    return data.map((cat)=>({
            ...cat,
            topicCount: cat.topic_count
        }));
}
async function getCategoryById(id) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('forum_categories').select('*').eq('id', id).single();
    if (!data) return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forum$2f$forum$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORUM_CATEGORIES"].find((c)=>c.id === id);
    return {
        ...data,
        topicCount: data.topic_count
    };
}
async function getTopics() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('topics').select('*').order('created_at', {
        ascending: false
    });
    if (error || !data || data.length === 0) {
        if (error) console.error('Error fetching topics:', error.message);
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forum$2f$forum$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEED_TOPICS"];
    }
    return data.map(mapTopic);
}
async function getTopicById(id) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('topics').select('*').eq('id', id).single();
    if (!data) return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forum$2f$forum$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEED_TOPICS"].find((t)=>t.id === id);
    return mapTopic(data);
}
async function getTopicsByCategory(categoryId) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('topics').select('*').eq('category_id', categoryId).order('created_at', {
        ascending: false
    });
    if (!data || data.length === 0) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forum$2f$forum$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEED_TOPICS"].filter((t)=>t.categoryId === categoryId);
    }
    return data.map(mapTopic);
}
async function createTopic(topic) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('topics').insert([
        {
            ...topic,
            upvotes: 0,
            downvotes: 0,
            reply_count: 0,
            view_count: 0,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        }
    ]).select().single();
    if (error) {
        console.error('Error creating topic:', error);
        return null;
    }
    return mapTopic(data);
}
async function incrementTopicViews(id) {
    const { data: topic } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('topics').select('view_count').eq('id', id).single();
    if (topic) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('topics').update({
            view_count: topic.view_count + 1
        }).eq('id', id);
    }
}
async function searchTopics(query) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('topics').select('*').or(`title.ilike.%${query}%,body.ilike.%${query}%`).order('created_at', {
        ascending: false
    });
    return (data || []).map(mapTopic);
}
function sortTopics(topics, sort) {
    const sorted = [
        ...topics
    ];
    switch(sort){
        case 'newest':
            return sorted.sort((a, b)=>new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        case 'popular':
            return sorted.sort((a, b)=>b.upvotes - a.upvotes);
        case 'trending':
            return sorted.sort((a, b)=>b.upvotes + b.replyCount - (a.upvotes + a.replyCount));
        case 'active':
        default:
            return sorted.sort((a, b)=>{
                const bTime = new Date(b.lastReplyAt || b.createdAt).getTime();
                const aTime = new Date(a.lastReplyAt || a.createdAt).getTime();
                return bTime - aTime;
            });
    }
}
async function getRepliesByTopic(topicId) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('replies').select('*').eq('topic_id', topicId).order('created_at', {
        ascending: true
    });
    if (!data || data.length === 0) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forum$2f$forum$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEED_REPLIES"].filter((r)=>r.topicId === topicId);
    }
    return data.map(mapReply);
}
async function createReply(reply) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('replies').insert([
        {
            ...reply,
            upvotes: 0,
            downvotes: 0,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        }
    ]).select().single();
    if (error) {
        console.error('Error creating reply:', error);
        return null;
    }
    // Update topic reply count
    const { data: topic } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('topics').select('reply_count').eq('id', reply.topic_id).single();
    if (topic) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('topics').update({
            reply_count: topic.reply_count + 1,
            last_reply_at: new Date().toISOString(),
            last_reply_by: reply.author_name
        }).eq('id', reply.topic_id);
    }
    return mapReply(data);
}
async function voteReply(replyId, userId, direction) {
    const { data: reply } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('replies').select('upvotes, downvotes, voters').eq('id', replyId).single();
    if (!reply) return;
    let { upvotes, downvotes, voters } = reply;
    voters = voters || {};
    const currentVote = voters[userId];
    if (currentVote === direction) {
        delete voters[userId];
        if (direction === 'up') upvotes--;
        else downvotes--;
    } else {
        if (currentVote) {
            if (currentVote === 'up') upvotes--;
            else downvotes--;
        }
        voters[userId] = direction;
        if (direction === 'up') upvotes++;
        else downvotes++;
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('replies').update({
        upvotes,
        downvotes,
        voters
    }).eq('id', replyId);
}
async function deleteReply(id) {
    // We could do a soft delete or hard delete. The UI has an isDeleted flag.
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('replies').update({
        is_deleted: true,
        body: '[deleted]',
        updated_at: new Date().toISOString()
    }).eq('id', id);
}
async function updateReply(id, body) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('replies').update({
        body,
        updated_at: new Date().toISOString()
    }).eq('id', id);
}
async function getForumUserById(id) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('*').eq('id', id).single();
    return data;
}
async function voteTopic(topicId, userId, direction) {
    // This is simplified; real voting needs a join table 'voters' or similar
    const { data: topic } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('topics').select('upvotes, downvotes, voters').eq('id', topicId).single();
    if (!topic) return;
    let { upvotes, downvotes, voters } = topic;
    const currentVote = voters[userId];
    if (currentVote === direction) {
        delete voters[userId];
        if (direction === 'up') upvotes--;
        else downvotes--;
    } else {
        if (currentVote) {
            if (currentVote === 'up') upvotes--;
            else downvotes--;
        }
        voters[userId] = direction;
        if (direction === 'up') upvotes++;
        else downvotes++;
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('topics').update({
        upvotes,
        downvotes,
        voters
    }).eq('id', topicId);
}
async function deleteTopic(id) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('topics').delete().eq('id', id);
}
async function updateTopic(id, updates) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('topics').update({
        ...updates,
        updated_at: new Date().toISOString()
    }).eq('id', id);
}
async function toggleFollowTopic(userId, topicId) {
    const { data: profile } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('followed_topics').eq('id', userId).single();
    if (!profile) return false;
    let followed = profile.followed_topics || [];
    const idx = followed.indexOf(topicId);
    let isFollowing = false;
    if (idx >= 0) {
        followed.splice(idx, 1);
    } else {
        followed.push(topicId);
        isFollowing = true;
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('profiles').update({
        followed_topics: followed
    }).eq('id', userId);
    return isFollowing;
}
async function createReport(report) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('reports').insert([
        report
    ]);
}
async function getForumStats() {
    const { count: topicCount } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('topics').select('*', {
        count: 'exact',
        head: true
    });
    const { count: replyCount } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('replies').select('*', {
        count: 'exact',
        head: true
    });
    const { count: userCount } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('*', {
        count: 'exact',
        head: true
    });
    // Fall back to seed data counts when Supabase has no data
    if (!topicCount && !replyCount && !userCount) {
        return {
            totalTopics: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forum$2f$forum$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEED_TOPICS"].length,
            totalReplies: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forum$2f$forum$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEED_REPLIES"].length,
            totalUsers: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forum$2f$forum$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEED_USERS"].length,
            activeToday: Math.min(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forum$2f$forum$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEED_USERS"].length, 14)
        };
    }
    return {
        totalTopics: topicCount || 0,
        totalReplies: replyCount || 0,
        totalUsers: userCount || 0,
        activeToday: Math.max(Math.floor((userCount || 0) * 0.4), 1)
    };
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
        // Simulated
        avgClickRate: 18,
        // Simulated
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
    // Return mock data for now as we don't have a campaigns table yet
    return [
        {
            id: '1',
            subject: 'Weekly Ellis County Digest',
            type: 'weekly_digest',
            sentAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
            recipientCount: 1240,
            openCount: 520,
            clickCount: 180,
            unsubscribeCount: 12
        },
        {
            id: '2',
            subject: 'Monthly Civic Updates - February',
            type: 'monthly_newsletter',
            sentAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
            recipientCount: 1180,
            openCount: 640,
            clickCount: 220,
            unsubscribeCount: 8
        }
    ];
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
"[project]/components/crm/NewsletterSignup.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewsletterSignup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check-circle.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-2.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2f$newsletter$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/crm/newsletter-service.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const INTEREST_OPTIONS = [
    {
        id: 'taxes',
        label: 'Property Taxes'
    },
    {
        id: 'infrastructure',
        label: 'Infrastructure & Roads'
    },
    {
        id: 'education',
        label: 'Education & Schools'
    },
    {
        id: 'safety',
        label: 'Public Safety & EMS'
    },
    {
        id: 'growth',
        label: 'Growth & Development'
    },
    {
        id: 'healthcare',
        label: 'Healthcare'
    },
    {
        id: 'agriculture',
        label: 'Agriculture & Farming'
    },
    {
        id: 'environment',
        label: 'Environment & Water'
    },
    {
        id: 'economic',
        label: 'Economic Development'
    },
    {
        id: 'quality',
        label: 'Quality of Life'
    }
];
function NewsletterSignup({ variant = 'sidebar', optInMethod = 'forum_sidebar', forumUserId, onSuccess }) {
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [zipCode, setZipCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [interests, setInterests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showInterests, setShowInterests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const toggleInterest = (id)=>{
        setInterests((prev)=>prev.includes(id) ? prev.filter((i)=>i !== id) : [
                ...prev,
                id
            ]);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError('');
        if (!name.trim() || !email.trim() || !zipCode.trim()) {
            setError('Please fill in all required fields.');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        if (!/^\d{5}$/.test(zipCode)) {
            setError('Please enter a valid 5-digit zip code.');
            return;
        }
        setIsSubmitting(true);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2f$newsletter$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addSubscriber"])({
            email,
            name,
            zipCode,
            interests: interests.length > 0 ? interests : [
                'general'
            ],
            optInMethod,
            forumUserId
        });
        if ('error' in result) {
            setError(result.error);
            setIsSubmitting(false);
            return;
        }
        setSuccess(true);
        setIsSubmitting(false);
        onSuccess?.();
    };
    if (success) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                scale: 0.95
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            className: `rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-center ${variant === 'homepage' ? 'max-w-md mx-auto' : ''}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                    className: "w-8 h-8 text-green-400 mx-auto mb-2"
                }, void 0, false, {
                    fileName: "[project]/components/crm/NewsletterSignup.tsx",
                    lineNumber: 103,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-green-400 font-semibold text-sm",
                    children: "You're subscribed!"
                }, void 0, false, {
                    fileName: "[project]/components/crm/NewsletterSignup.tsx",
                    lineNumber: 104,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-white/60 text-xs mt-1",
                    children: "Check your inbox for a confirmation email."
                }, void 0, false, {
                    fileName: "[project]/components/crm/NewsletterSignup.tsx",
                    lineNumber: 105,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/crm/NewsletterSignup.tsx",
            lineNumber: 96,
            columnNumber: 12
        }, this);
    }
    const isHomepage = variant === 'homepage';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm ${isHomepage ? 'p-6 max-w-lg mx-auto' : 'p-4'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                            className: "w-4 h-4 text-gold"
                        }, void 0, false, {
                            fileName: "[project]/components/crm/NewsletterSignup.tsx",
                            lineNumber: 112,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/crm/NewsletterSignup.tsx",
                        lineNumber: 111,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: `font-semibold text-white ${isHomepage ? 'text-lg' : 'text-sm'}`,
                                children: "Stay Informed"
                            }, void 0, false, {
                                fileName: "[project]/components/crm/NewsletterSignup.tsx",
                                lineNumber: 115,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/50 text-xs",
                                children: "Get Ellis County updates in your inbox"
                            }, void 0, false, {
                                fileName: "[project]/components/crm/NewsletterSignup.tsx",
                                lineNumber: 118,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/crm/NewsletterSignup.tsx",
                        lineNumber: 114,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/crm/NewsletterSignup.tsx",
                lineNumber: 110,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Your name",
                        value: name,
                        onChange: (e)=>setName(e.target.value),
                        className: "w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-gold/50 transition-colors"
                    }, void 0, false, {
                        fileName: "[project]/components/crm/NewsletterSignup.tsx",
                        lineNumber: 123,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "email",
                        placeholder: "Email address",
                        value: email,
                        onChange: (e)=>setEmail(e.target.value),
                        className: "w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-gold/50 transition-colors"
                    }, void 0, false, {
                        fileName: "[project]/components/crm/NewsletterSignup.tsx",
                        lineNumber: 124,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Zip code",
                        value: zipCode,
                        onChange: (e)=>setZipCode(e.target.value),
                        maxLength: 5,
                        className: "w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-gold/50 transition-colors"
                    }, void 0, false, {
                        fileName: "[project]/components/crm/NewsletterSignup.tsx",
                        lineNumber: 125,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setShowInterests(!showInterests),
                        className: "flex items-center gap-1 text-xs text-gold/80 hover:text-gold transition-colors",
                        children: [
                            showInterests ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/components/crm/NewsletterSignup.tsx",
                                lineNumber: 129,
                                columnNumber: 38
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/components/crm/NewsletterSignup.tsx",
                                lineNumber: 129,
                                columnNumber: 74
                            }, this),
                            "Select your interests ",
                            interests.length > 0 && `(${interests.length})`
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/crm/NewsletterSignup.tsx",
                        lineNumber: 128,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: showInterests && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                height: 0,
                                opacity: 0
                            },
                            animate: {
                                height: 'auto',
                                opacity: 1
                            },
                            exit: {
                                height: 0,
                                opacity: 0
                            },
                            className: "overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-1.5 pt-1",
                                children: INTEREST_OPTIONS.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: `flex items-center gap-1.5 px-2 py-1 rounded-md text-xs cursor-pointer transition-colors ${interests.includes(opt.id) ? 'bg-gold/20 text-gold border border-gold/30' : 'bg-white/5 text-white/60 border border-white/10 hover:border-white/20'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: interests.includes(opt.id),
                                                onChange: ()=>toggleInterest(opt.id),
                                                className: "sr-only"
                                            }, void 0, false, {
                                                fileName: "[project]/components/crm/NewsletterSignup.tsx",
                                                lineNumber: 146,
                                                columnNumber: 41
                                            }, this),
                                            opt.label
                                        ]
                                    }, opt.id, true, {
                                        fileName: "[project]/components/crm/NewsletterSignup.tsx",
                                        lineNumber: 145,
                                        columnNumber: 62
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/crm/NewsletterSignup.tsx",
                                lineNumber: 144,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/crm/NewsletterSignup.tsx",
                            lineNumber: 134,
                            columnNumber: 39
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/crm/NewsletterSignup.tsx",
                        lineNumber: 133,
                        columnNumber: 17
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-400 text-xs",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/components/crm/NewsletterSignup.tsx",
                        lineNumber: 153,
                        columnNumber: 27
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: isSubmitting,
                        className: "w-full py-2 rounded-lg bg-gold text-black font-semibold text-sm hover:bg-gold/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2",
                        children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "w-4 h-4 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/NewsletterSignup.tsx",
                                    lineNumber: 156,
                                    columnNumber: 39
                                }, this),
                                " Subscribing..."
                            ]
                        }, void 0, true) : 'Subscribe to Updates'
                    }, void 0, false, {
                        fileName: "[project]/components/crm/NewsletterSignup.tsx",
                        lineNumber: 155,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white/30 text-[10px] text-center leading-tight",
                        children: "By subscribing, you agree to receive email updates. Unsubscribe anytime with one click. We respect your privacy and comply with CAN-SPAM regulations."
                    }, void 0, false, {
                        fileName: "[project]/components/crm/NewsletterSignup.tsx",
                        lineNumber: 159,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/crm/NewsletterSignup.tsx",
                lineNumber: 122,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/crm/NewsletterSignup.tsx",
        lineNumber: 109,
        columnNumber: 10
    }, this);
}
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
async function getCivicEvents() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('civic_events').select('*, event_rsvps(user_id)').order('date', {
        ascending: true
    }).order('start_time', {
        ascending: true
    });
    if (error) {
        console.error('Error fetching events:', error);
        // Fallback to just local meetups if DB fails
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$events$2f$civic$2d$events$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LOCAL_MEETUP_EVENTS"];
    }
    // Map rsvpUsers from event_rsvps relation
    const dbEvents = data.map((event)=>({
            ...event,
            rsvpUsers: event.event_rsvps.map((r)=>r.user_id),
            rsvpCount: event.event_rsvps.length
        }));
    // Merge DB events with local meetups and sort by date
    const allEvents = [
        ...dbEvents,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$events$2f$civic$2d$events$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LOCAL_MEETUP_EVENTS"]
    ];
    return allEvents.sort((a, b)=>{
        const dateA = new Date(a.date + 'T' + a.startTime);
        const dateB = new Date(b.date + 'T' + b.startTime);
        return dateA.getTime() - dateB.getTime();
    });
}
async function getCivicEventById(id) {
    // Check local events first
    const localEvent = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$events$2f$civic$2d$events$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LOCAL_MEETUP_EVENTS"].find((e)=>e.id === id);
    if (localEvent) {
        return localEvent;
    }
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('civic_events').select('*, event_rsvps(user_id)').eq('id', id).single();
    if (!data) return undefined;
    return {
        ...data,
        rsvpUsers: data.event_rsvps.map((r)=>r.user_id),
        rsvpCount: data.event_rsvps.length
    };
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
    const { data: newEvent, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('civic_events').insert([
        {
            ...data,
            approval_status: 'pending',
            created_at: new Date().toISOString()
        }
    ]).select().single();
    if (error) {
        console.error('Error submitting event:', error);
        return null;
    }
    return newEvent;
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
    const eventDate = new Date(event.date + 'T' + event.startTime);
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
        const [h, m] = time.split(':').map(Number);
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
                            lineNumber: 49,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-lg font-bold text-white",
                            children: new Date(event.date + 'T12:00:00').getDate()
                        }, void 0, false, {
                            fileName: "[project]/components/events/CivicEventCard.tsx",
                            lineNumber: 54,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/events/CivicEventCard.tsx",
                    lineNumber: 48,
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
                            lineNumber: 59,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-white/50 flex items-center gap-1 mt-0.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 61,
                                    columnNumber: 25
                                }, this),
                                " ",
                                formatTime(event.startTime),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mx-1",
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 62,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 63,
                                    columnNumber: 25
                                }, this),
                                " ",
                                event.location.city
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/events/CivicEventCard.tsx",
                            lineNumber: 60,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/events/CivicEventCard.tsx",
                    lineNumber: 58,
                    columnNumber: 17
                }, this),
                isToday && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[10px] px-1.5 py-0.5 rounded-full bg-red-500/20 text-red-400 font-semibold h-fit",
                    children: "TODAY"
                }, void 0, false, {
                    fileName: "[project]/components/events/CivicEventCard.tsx",
                    lineNumber: 66,
                    columnNumber: 29
                }, this),
                !isToday && isThisWeek && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[10px] px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-semibold h-fit",
                    children: "THIS WEEK"
                }, void 0, false, {
                    fileName: "[project]/components/events/CivicEventCard.tsx",
                    lineNumber: 67,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/events/CivicEventCard.tsx",
            lineNumber: 47,
            columnNumber: 12
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
                                    lineNumber: 76,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xl font-bold text-white",
                                    children: new Date(event.date + 'T12:00:00').getDate()
                                }, void 0, false, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 81,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[10px] text-white/40",
                                    children: new Date(event.date + 'T12:00:00').toLocaleDateString('en-US', {
                                        weekday: 'short'
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 84,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/events/CivicEventCard.tsx",
                            lineNumber: 75,
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
                                            lineNumber: 94,
                                            columnNumber: 29
                                        }, this),
                                        isToday && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 font-semibold border border-red-500/30",
                                            children: "🔴 TODAY"
                                        }, void 0, false, {
                                            fileName: "[project]/components/events/CivicEventCard.tsx",
                                            lineNumber: 97,
                                            columnNumber: 41
                                        }, this),
                                        !isToday && isThisWeek && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-semibold border border-amber-500/30",
                                            children: "THIS WEEK"
                                        }, void 0, false, {
                                            fileName: "[project]/components/events/CivicEventCard.tsx",
                                            lineNumber: 98,
                                            columnNumber: 56
                                        }, this),
                                        event.isFeatured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] px-2 py-0.5 rounded-full bg-gold/20 text-gold font-semibold border border-gold/30",
                                            children: "⭐ FEATURED"
                                        }, void 0, false, {
                                            fileName: "[project]/components/events/CivicEventCard.tsx",
                                            lineNumber: 99,
                                            columnNumber: 50
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 93,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-semibold text-white leading-tight",
                                    children: event.title
                                }, void 0, false, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 102,
                                    columnNumber: 25
                                }, this),
                                event.governingBody && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-white/40 mt-0.5",
                                    children: event.governingBody
                                }, void 0, false, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 104,
                                    columnNumber: 49
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
                                                    lineNumber: 109,
                                                    columnNumber: 33
                                                }, this),
                                                formatTime(event.startTime),
                                                event.endTime && ` – ${formatTime(event.endTime)}`
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/events/CivicEventCard.tsx",
                                            lineNumber: 108,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 33
                                                }, this),
                                                event.location.name,
                                                ", ",
                                                event.location.city
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/events/CivicEventCard.tsx",
                                            lineNumber: 113,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 107,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/events/CivicEventCard.tsx",
                            lineNumber: 91,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/events/CivicEventCard.tsx",
                    lineNumber: 73,
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
                                    lineNumber: 124,
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
                                    lineNumber: 126,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/events/CivicEventCard.tsx",
                            lineNumber: 123,
                            columnNumber: 32
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowCalendar(!showCalendar),
                            className: "flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs text-white/60 bg-white/5 border border-white/10 hover:border-white/20 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarPlus$3e$__["CalendarPlus"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 130,
                                    columnNumber: 25
                                }, this),
                                "Add to Calendar"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/events/CivicEventCard.tsx",
                            lineNumber: 129,
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
                                    lineNumber: 135,
                                    columnNumber: 37
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 135,
                                    columnNumber: 73
                                }, this),
                                expanded ? 'Less' : 'Details'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/events/CivicEventCard.tsx",
                            lineNumber: 134,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/events/CivicEventCard.tsx",
                    lineNumber: 122,
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
                            lineNumber: 148,
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
                            lineNumber: 151,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$events$2f$civic$2d$events$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["downloadICS"])(event),
                            className: "flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs text-white/70 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors",
                            children: "Download .ics"
                        }, void 0, false, {
                            fileName: "[project]/components/events/CivicEventCard.tsx",
                            lineNumber: 154,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/events/CivicEventCard.tsx",
                    lineNumber: 141,
                    columnNumber: 34
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
                            lineNumber: 167,
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
                                    lineNumber: 170,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-white/60",
                                    children: event.participationInstructions
                                }, void 0, false, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 171,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/events/CivicEventCard.tsx",
                            lineNumber: 169,
                            columnNumber: 61
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
                                lineNumber: 175,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/events/CivicEventCard.tsx",
                            lineNumber: 174,
                            columnNumber: 57
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
                                            lineNumber: 182,
                                            columnNumber: 37
                                        }, this),
                                        " View Map"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 181,
                                    columnNumber: 55
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
                                            lineNumber: 185,
                                            columnNumber: 37
                                        }, this),
                                        " Agenda"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 184,
                                    columnNumber: 49
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
                                            lineNumber: 188,
                                            columnNumber: 37
                                        }, this),
                                        " Past Minutes"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 187,
                                    columnNumber: 50
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
                                            lineNumber: 191,
                                            columnNumber: 37
                                        }, this),
                                        " Join Zoom"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 190,
                                    columnNumber: 47
                                }, this),
                                event.forumTopicId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `/forum/topic/${event.forumTopicId}`,
                                    className: "flex items-center gap-1 px-2 py-1 rounded text-[10px] text-gold/70 bg-gold/10 hover:bg-gold/20 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/components/events/CivicEventCard.tsx",
                                            lineNumber: 194,
                                            columnNumber: 37
                                        }, this),
                                        " Discussion"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 193,
                                    columnNumber: 52
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/events/CivicEventCard.tsx",
                            lineNumber: 180,
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
                            lineNumber: 198,
                            columnNumber: 47
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
                                    lineNumber: 203,
                                    columnNumber: 41
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mx-1",
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/components/events/CivicEventCard.tsx",
                                    lineNumber: 204,
                                    columnNumber: 33
                                }, this),
                                "Last verified: ",
                                new Date(event.lastVerified).toLocaleDateString()
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/events/CivicEventCard.tsx",
                            lineNumber: 202,
                            columnNumber: 45
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/events/CivicEventCard.tsx",
                    lineNumber: 160,
                    columnNumber: 30
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/events/CivicEventCard.tsx",
            lineNumber: 71,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/events/CivicEventCard.tsx",
        lineNumber: 70,
        columnNumber: 10
    }, this);
}
}),
"[project]/components/events/UpcomingMeetings.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UpcomingMeetings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/alert-circle.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$events$2f$civic$2d$events$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/events/civic-events-service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$events$2f$CivicEventCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/events/CivicEventCard.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function UpcomingMeetings({ limit = 5, userId }) {
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [todayEvents, setTodayEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchEvents = async ()=>{
            const up = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$events$2f$civic$2d$events$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUpcomingEvents"])(limit);
            const today = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$events$2f$civic$2d$events$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTodayEvents"])();
            setEvents(up);
            setTodayEvents(today);
            setReady(true);
        };
        fetchEvents();
    }, [
        limit
    ]);
    if (!ready) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                    className: "w-4 h-4 text-blue-400"
                                }, void 0, false, {
                                    fileName: "[project]/components/events/UpcomingMeetings.tsx",
                                    lineNumber: 35,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/events/UpcomingMeetings.tsx",
                                lineNumber: 34,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-sm font-semibold text-white",
                                children: "Upcoming Meetings"
                            }, void 0, false, {
                                fileName: "[project]/components/events/UpcomingMeetings.tsx",
                                lineNumber: 37,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/events/UpcomingMeetings.tsx",
                        lineNumber: 33,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/calendar",
                        className: "text-xs text-gold hover:text-gold/80 transition-colors",
                        children: "View All →"
                    }, void 0, false, {
                        fileName: "[project]/components/events/UpcomingMeetings.tsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/events/UpcomingMeetings.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this),
            todayEvents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 p-2 rounded-lg bg-red-500/10 border border-red-500/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "w-3 h-3 text-red-400"
                            }, void 0, false, {
                                fileName: "[project]/components/events/UpcomingMeetings.tsx",
                                lineNumber: 47,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-semibold text-red-400",
                                children: "Happening Today"
                            }, void 0, false, {
                                fileName: "[project]/components/events/UpcomingMeetings.tsx",
                                lineNumber: 48,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/events/UpcomingMeetings.tsx",
                        lineNumber: 46,
                        columnNumber: 21
                    }, this),
                    todayEvents.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-white/70 pl-4",
                            children: [
                                e.title,
                                " — ",
                                e.startTime.split(':').map(Number).map((n, i)=>i === 0 ? `${n % 12 || 12}` : `:${n.toString().padStart(2, '0')}`).join(''),
                                " ",
                                Number(e.startTime.split(':')[0]) >= 12 ? 'PM' : 'AM'
                            ]
                        }, e.id, true, {
                            fileName: "[project]/components/events/UpcomingMeetings.tsx",
                            lineNumber: 50,
                            columnNumber: 43
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/events/UpcomingMeetings.tsx",
                lineNumber: 45,
                columnNumber: 40
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: events.map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$events$2f$CivicEventCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        event: event,
                        userId: userId,
                        compact: true
                    }, event.id, false, {
                        fileName: "[project]/components/events/UpcomingMeetings.tsx",
                        lineNumber: 57,
                        columnNumber: 38
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/events/UpcomingMeetings.tsx",
                lineNumber: 56,
                columnNumber: 13
            }, this),
            events.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-white/40 text-center py-4",
                children: "No upcoming meetings scheduled."
            }, void 0, false, {
                fileName: "[project]/components/events/UpcomingMeetings.tsx",
                lineNumber: 60,
                columnNumber: 37
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/events/UpcomingMeetings.tsx",
        lineNumber: 31,
        columnNumber: 10
    }, this);
}
}),
"[project]/components/forum/ForumSidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ForumSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forum$2f$forum$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/forum/forum-service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forum$2f$forum$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/forum/forum-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building.js [app-ssr] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wrench.js [app-ssr] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-check.js [app-ssr] (ecmascript) <export default as CalendarCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$crm$2f$NewsletterSignup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/crm/NewsletterSignup.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$events$2f$UpcomingMeetings$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/events/UpcomingMeetings.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const categoryIcons = {
    government: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"], {
        className: "w-4 h-4 text-blue-400"
    }, void 0, false, {
        fileName: "[project]/components/forum/ForumSidebar.tsx",
        lineNumber: 12,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0)),
    emergency: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
        className: "w-4 h-4 text-red-400"
    }, void 0, false, {
        fileName: "[project]/components/forum/ForumSidebar.tsx",
        lineNumber: 13,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0)),
    services: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
        className: "w-4 h-4 text-amber-400"
    }, void 0, false, {
        fileName: "[project]/components/forum/ForumSidebar.tsx",
        lineNumber: 14,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    community: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
        className: "w-4 h-4 text-pink-400"
    }, void 0, false, {
        fileName: "[project]/components/forum/ForumSidebar.tsx",
        lineNumber: 15,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0))
};
const categoryLabels = {
    government: 'Government',
    emergency: 'Emergency',
    services: 'Services',
    community: 'Community'
};
function ForumSidebar() {
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        totalTopics: 0,
        totalReplies: 0,
        totalUsers: 0,
        activeToday: 0
    });
    const [expandedResource, setExpandedResource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('government');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchStats = async ()=>{
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forum$2f$forum$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getForumStats"])();
            setStats(data);
        };
        fetchStats();
    }, []);
    // Group resources by category
    const grouped = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forum$2f$forum$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LOCAL_RESOURCES"].reduce((acc, r)=>{
        if (!acc[r.category]) acc[r.category] = [];
        acc[r.category].push(r);
        return acc;
    }, {});
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/services#book",
                className: "block bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 rounded-xl p-5 hover:border-gold/50 transition-colors group",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarCheck$3e$__["CalendarCheck"], {
                                className: "w-5 h-5 text-gold"
                            }, void 0, false, {
                                fileName: "[project]/components/forum/ForumSidebar.tsx",
                                lineNumber: 50,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/forum/ForumSidebar.tsx",
                            lineNumber: 49,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-gold text-sm",
                                    children: "Book Your Consultation"
                                }, void 0, false, {
                                    fileName: "[project]/components/forum/ForumSidebar.tsx",
                                    lineNumber: 53,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-cream/50 text-xs",
                                    children: "Strategic communication experts"
                                }, void 0, false, {
                                    fileName: "[project]/components/forum/ForumSidebar.tsx",
                                    lineNumber: 54,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/forum/ForumSidebar.tsx",
                            lineNumber: 52,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/forum/ForumSidebar.tsx",
                    lineNumber: 48,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/forum/ForumSidebar.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$events$2f$UpcomingMeetings$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                limit: 5
            }, void 0, false, {
                fileName: "[project]/components/forum/ForumSidebar.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-navy border border-gold/20 rounded-xl p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-display text-sm font-semibold text-gold uppercase tracking-wider mb-4",
                        children: "Community Activity"
                    }, void 0, false, {
                        fileName: "[project]/components/forum/ForumSidebar.tsx",
                        lineNumber: 64,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center p-3 bg-navy-dark/50 rounded-lg border border-gold/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                        className: "w-5 h-5 text-gold mx-auto mb-1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/forum/ForumSidebar.tsx",
                                        lineNumber: 69,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-bold text-white",
                                        children: stats.totalTopics
                                    }, void 0, false, {
                                        fileName: "[project]/components/forum/ForumSidebar.tsx",
                                        lineNumber: 70,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-cream/40",
                                        children: "Topics"
                                    }, void 0, false, {
                                        fileName: "[project]/components/forum/ForumSidebar.tsx",
                                        lineNumber: 71,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/forum/ForumSidebar.tsx",
                                lineNumber: 68,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center p-3 bg-navy-dark/50 rounded-lg border border-gold/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                        className: "w-5 h-5 text-gold mx-auto mb-1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/forum/ForumSidebar.tsx",
                                        lineNumber: 74,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-bold text-white",
                                        children: stats.totalReplies
                                    }, void 0, false, {
                                        fileName: "[project]/components/forum/ForumSidebar.tsx",
                                        lineNumber: 75,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-cream/40",
                                        children: "Replies"
                                    }, void 0, false, {
                                        fileName: "[project]/components/forum/ForumSidebar.tsx",
                                        lineNumber: 76,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/forum/ForumSidebar.tsx",
                                lineNumber: 73,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center p-3 bg-navy-dark/50 rounded-lg border border-gold/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        className: "w-5 h-5 text-gold mx-auto mb-1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/forum/ForumSidebar.tsx",
                                        lineNumber: 79,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-bold text-white",
                                        children: stats.totalUsers
                                    }, void 0, false, {
                                        fileName: "[project]/components/forum/ForumSidebar.tsx",
                                        lineNumber: 80,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-cream/40",
                                        children: "Members"
                                    }, void 0, false, {
                                        fileName: "[project]/components/forum/ForumSidebar.tsx",
                                        lineNumber: 81,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/forum/ForumSidebar.tsx",
                                lineNumber: 78,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center p-3 bg-navy-dark/50 rounded-lg border border-gold/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                        className: "w-5 h-5 text-green-400 mx-auto mb-1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/forum/ForumSidebar.tsx",
                                        lineNumber: 84,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-bold text-white",
                                        children: stats.activeToday
                                    }, void 0, false, {
                                        fileName: "[project]/components/forum/ForumSidebar.tsx",
                                        lineNumber: 85,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-cream/40",
                                        children: "Active Today"
                                    }, void 0, false, {
                                        fileName: "[project]/components/forum/ForumSidebar.tsx",
                                        lineNumber: 86,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/forum/ForumSidebar.tsx",
                                lineNumber: 83,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/forum/ForumSidebar.tsx",
                        lineNumber: 67,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/forum/ForumSidebar.tsx",
                lineNumber: 63,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-navy border border-gold/20 rounded-xl p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-display text-sm font-semibold text-gold uppercase tracking-wider mb-3",
                        children: "Community Guidelines"
                    }, void 0, false, {
                        fileName: "[project]/components/forum/ForumSidebar.tsx",
                        lineNumber: 93,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "text-cream/60 text-sm space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-start gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gold mt-0.5",
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/components/forum/ForumSidebar.tsx",
                                        lineNumber: 98,
                                        columnNumber: 25
                                    }, this),
                                    "Be respectful and civil in all discussions"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/forum/ForumSidebar.tsx",
                                lineNumber: 97,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-start gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gold mt-0.5",
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/components/forum/ForumSidebar.tsx",
                                        lineNumber: 102,
                                        columnNumber: 25
                                    }, this),
                                    "Stay on topic and relevant to Ellis County"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/forum/ForumSidebar.tsx",
                                lineNumber: 101,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-start gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gold mt-0.5",
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/components/forum/ForumSidebar.tsx",
                                        lineNumber: 106,
                                        columnNumber: 25
                                    }, this),
                                    "No personal attacks or harassment"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/forum/ForumSidebar.tsx",
                                lineNumber: 105,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-start gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gold mt-0.5",
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/components/forum/ForumSidebar.tsx",
                                        lineNumber: 110,
                                        columnNumber: 25
                                    }, this),
                                    "Back up claims with credible sources"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/forum/ForumSidebar.tsx",
                                lineNumber: 109,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-start gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gold mt-0.5",
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/components/forum/ForumSidebar.tsx",
                                        lineNumber: 114,
                                        columnNumber: 25
                                    }, this),
                                    "Report inappropriate content using the flag button"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/forum/ForumSidebar.tsx",
                                lineNumber: 113,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/forum/ForumSidebar.tsx",
                        lineNumber: 96,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/forum/ForumSidebar.tsx",
                lineNumber: 92,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$crm$2f$NewsletterSignup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                variant: "sidebar",
                optInMethod: "forum_sidebar"
            }, void 0, false, {
                fileName: "[project]/components/forum/ForumSidebar.tsx",
                lineNumber: 121,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-navy border border-gold/20 rounded-xl p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-display text-sm font-semibold text-gold uppercase tracking-wider mb-4",
                        children: "Local Resources"
                    }, void 0, false, {
                        fileName: "[project]/components/forum/ForumSidebar.tsx",
                        lineNumber: 125,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: Object.entries(grouped).map(([category, resources])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-gold/10 rounded-lg overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setExpandedResource(expandedResource === category ? null : category),
                                        className: "w-full flex items-center justify-between p-3 text-left hover:bg-gold/5 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    categoryIcons[category],
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-semibold text-white",
                                                        children: categoryLabels[category]
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/forum/ForumSidebar.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-cream/30",
                                                        children: [
                                                            "(",
                                                            resources.length,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/forum/ForumSidebar.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/forum/ForumSidebar.tsx",
                                                lineNumber: 131,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: `w-4 h-4 text-gold transition-transform ${expandedResource === category ? 'rotate-180' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/components/forum/ForumSidebar.tsx",
                                                lineNumber: 136,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/forum/ForumSidebar.tsx",
                                        lineNumber: 130,
                                        columnNumber: 29
                                    }, this),
                                    expandedResource === category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-gold/10 p-2 space-y-1",
                                        children: resources.map((resource)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: resource.url,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "flex items-start gap-2 p-2 rounded-lg hover:bg-gold/5 transition-colors group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-cream/80 group-hover:text-gold transition-colors font-medium truncate",
                                                                children: resource.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/forum/ForumSidebar.tsx",
                                                                lineNumber: 142,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-cream/40 truncate",
                                                                children: resource.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/forum/ForumSidebar.tsx",
                                                                lineNumber: 145,
                                                                columnNumber: 49
                                                            }, this),
                                                            resource.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-cream/40 flex items-center gap-1 mt-0.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/forum/ForumSidebar.tsx",
                                                                        lineNumber: 147,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    " ",
                                                                    resource.phone
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/forum/ForumSidebar.tsx",
                                                                lineNumber: 146,
                                                                columnNumber: 68
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/forum/ForumSidebar.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                        className: "w-3 h-3 text-cream/30 group-hover:text-gold flex-shrink-0 mt-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/forum/ForumSidebar.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, resource.name, true, {
                                                fileName: "[project]/components/forum/ForumSidebar.tsx",
                                                lineNumber: 140,
                                                columnNumber: 64
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/forum/ForumSidebar.tsx",
                                        lineNumber: 139,
                                        columnNumber: 63
                                    }, this)
                                ]
                            }, category, true, {
                                fileName: "[project]/components/forum/ForumSidebar.tsx",
                                lineNumber: 129,
                                columnNumber: 77
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/forum/ForumSidebar.tsx",
                        lineNumber: 128,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/forum/ForumSidebar.tsx",
                lineNumber: 124,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/forum/ForumSidebar.tsx",
        lineNumber: 45,
        columnNumber: 10
    }, this);
}
}),
"[project]/components/forum/AuthModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building.js [app-ssr] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/newspaper.js [app-ssr] (ecmascript) <export default as Newspaper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forum$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/forum/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2f$newsletter$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/crm/newsletter-service.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function AuthModal({ isOpen, onClose, initialTab = 'login' }) {
    const { login, register } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forum$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialTab);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Login fields
    const [loginEmail, setLoginEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [loginPassword, setLoginPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Register fields
    const [regEmail, setRegEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [regDisplayName, setRegDisplayName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [regPassword, setRegPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [regConfirm, setRegConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [regCity, setRegCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [regBusiness, setRegBusiness] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [regYears, setRegYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [regBio, setRegBio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [regNewsletter, setRegNewsletter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const handleLogin = async (e)=>{
        e.preventDefault();
        setError('');
        const result = await login(loginEmail, loginPassword);
        if (result.success) {
            onClose();
        } else {
            setError(result.error || 'Login failed');
        }
    };
    const handleRegister = async (e)=>{
        e.preventDefault();
        setError('');
        if (regPassword !== regConfirm) {
            setError('Passwords do not match.');
            return;
        }
        const result = await register({
            email: regEmail,
            displayName: regDisplayName,
            password: regPassword,
            city: regCity || undefined,
            isBusinessOwner: regBusiness || undefined,
            yearsInCounty: regYears ? parseInt(regYears) : undefined,
            bio: regBio || undefined
        });
        if (result.success) {
            // Subscribe to newsletter if opted in
            if (regNewsletter && regEmail) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2f$newsletter$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addSubscriber"])({
                    email: regEmail,
                    name: regDisplayName,
                    zipCode: '',
                    interests: [],
                    city: regCity || undefined,
                    optInMethod: 'registration'
                });
            }
            setSuccess('Account created! Welcome to the community.');
            setTimeout(()=>onClose(), 1000);
        } else {
            setError(result.error || 'Registration failed');
        }
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            onClick: onClose,
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
                className: "w-full max-w-md bg-navy-dark border border-gold/30 rounded-2xl overflow-hidden shadow-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 pb-4 flex items-center justify-between border-b border-gold/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-display text-xl font-bold text-white",
                                children: tab === 'login' ? 'Welcome Back' : 'Join the Community'
                            }, void 0, false, {
                                fileName: "[project]/components/forum/AuthModal.tsx",
                                lineNumber: 107,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-2 text-cream/60 hover:text-white transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/forum/AuthModal.tsx",
                                    lineNumber: 111,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/forum/AuthModal.tsx",
                                lineNumber: 110,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/forum/AuthModal.tsx",
                        lineNumber: 106,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex border-b border-gold/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setTab('login');
                                    setError('');
                                },
                                className: `flex-1 py-3 text-sm font-semibold text-center transition-colors ${tab === 'login' ? 'text-gold border-b-2 border-gold' : 'text-cream/50 hover:text-cream'}`,
                                children: "Sign In"
                            }, void 0, false, {
                                fileName: "[project]/components/forum/AuthModal.tsx",
                                lineNumber: 117,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setTab('register');
                                    setError('');
                                },
                                className: `flex-1 py-3 text-sm font-semibold text-center transition-colors ${tab === 'register' ? 'text-gold border-b-2 border-gold' : 'text-cream/50 hover:text-cream'}`,
                                children: "Create Account"
                            }, void 0, false, {
                                fileName: "[project]/components/forum/AuthModal.tsx",
                                lineNumber: 123,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/forum/AuthModal.tsx",
                        lineNumber: 116,
                        columnNumber: 21
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-6 mt-4 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/components/forum/AuthModal.tsx",
                        lineNumber: 132,
                        columnNumber: 31
                    }, this),
                    success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-6 mt-4 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm",
                        children: success
                    }, void 0, false, {
                        fileName: "[project]/components/forum/AuthModal.tsx",
                        lineNumber: 135,
                        columnNumber: 33
                    }, this),
                    tab === 'login' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleLogin,
                        className: "p-6 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-semibold text-cream/60 uppercase tracking-wider mb-1 block",
                                        children: "Email"
                                    }, void 0, false, {
                                        fileName: "[project]/components/forum/AuthModal.tsx",
                                        lineNumber: 142,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60"
                                            }, void 0, false, {
                                                fileName: "[project]/components/forum/AuthModal.tsx",
                                                lineNumber: 144,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                value: loginEmail,
                                                onChange: (e)=>setLoginEmail(e.target.value),
                                                className: "input pl-10 w-full",
                                                placeholder: "your@email.com",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/components/forum/AuthModal.tsx",
                                                lineNumber: 145,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/forum/AuthModal.tsx",
                                        lineNumber: 143,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/forum/AuthModal.tsx",
                                lineNumber: 141,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-semibold text-cream/60 uppercase tracking-wider mb-1 block",
                                        children: "Password"
                                    }, void 0, false, {
                                        fileName: "[project]/components/forum/AuthModal.tsx",
                                        lineNumber: 149,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60"
                                            }, void 0, false, {
                                                fileName: "[project]/components/forum/AuthModal.tsx",
                                                lineNumber: 151,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "password",
                                                value: loginPassword,
                                                onChange: (e)=>setLoginPassword(e.target.value),
                                                className: "input pl-10 w-full",
                                                placeholder: "••••••••",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/components/forum/AuthModal.tsx",
                                                lineNumber: 152,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/forum/AuthModal.tsx",
                                        lineNumber: 150,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/forum/AuthModal.tsx",
                                lineNumber: 148,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "btn-primary w-full",
                                children: "Sign In"
                            }, void 0, false, {
                                fileName: "[project]/components/forum/AuthModal.tsx",
                                lineNumber: 155,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-cream/40 text-xs text-center",
                                children: "Demo accounts: use any seed user email (e.g. marcus.w@email.com) with any password"
                            }, void 0, false, {
                                fileName: "[project]/components/forum/AuthModal.tsx",
                                lineNumber: 156,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/forum/AuthModal.tsx",
                        lineNumber: 140,
                        columnNumber: 41
                    }, this),
                    tab === 'register' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleRegister,
                        className: "p-6 space-y-4 max-h-[60vh] overflow-y-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-semibold text-cream/60 uppercase tracking-wider mb-1 block",
                                        children: "Email *"
                                    }, void 0, false, {
                                        fileName: "[project]/components/forum/AuthModal.tsx",
                                        lineNumber: 164,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60"
                                            }, void 0, false, {
                                                fileName: "[project]/components/forum/AuthModal.tsx",
                                                lineNumber: 166,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                value: regEmail,
                                                onChange: (e)=>setRegEmail(e.target.value),
                                                className: "input pl-10 w-full",
                                                placeholder: "your@email.com",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/components/forum/AuthModal.tsx",
                                                lineNumber: 167,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/forum/AuthModal.tsx",
                                        lineNumber: 165,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/forum/AuthModal.tsx",
                                lineNumber: 163,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-semibold text-cream/60 uppercase tracking-wider mb-1 block",
                                        children: "Display Name *"
                                    }, void 0, false, {
                                        fileName: "[project]/components/forum/AuthModal.tsx",
                                        lineNumber: 171,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60"
                                            }, void 0, false, {
                                                fileName: "[project]/components/forum/AuthModal.tsx",
                                                lineNumber: 173,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: regDisplayName,
                                                onChange: (e)=>setRegDisplayName(e.target.value),
                                                className: "input pl-10 w-full",
                                                placeholder: "How you'll appear in discussions",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/components/forum/AuthModal.tsx",
                                                lineNumber: 174,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/forum/AuthModal.tsx",
                                        lineNumber: 172,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/forum/AuthModal.tsx",
                                lineNumber: 170,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-semibold text-cream/60 uppercase tracking-wider mb-1 block",
                                                children: "Password *"
                                            }, void 0, false, {
                                                fileName: "[project]/components/forum/AuthModal.tsx",
                                                lineNumber: 179,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                        className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/forum/AuthModal.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "password",
                                                        value: regPassword,
                                                        onChange: (e)=>setRegPassword(e.target.value),
                                                        className: "input pl-10 w-full",
                                                        placeholder: "Min 6 chars",
                                                        required: true,
                                                        minLength: 6
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/forum/AuthModal.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/forum/AuthModal.tsx",
                                                lineNumber: 180,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/forum/AuthModal.tsx",
                                        lineNumber: 178,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-semibold text-cream/60 uppercase tracking-wider mb-1 block",
                                                children: "Confirm *"
                                            }, void 0, false, {
                                                fileName: "[project]/components/forum/AuthModal.tsx",
                                                lineNumber: 186,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                        className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/forum/AuthModal.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "password",
                                                        value: regConfirm,
                                                        onChange: (e)=>setRegConfirm(e.target.value),
                                                        className: "input pl-10 w-full",
                                                        placeholder: "Re-enter",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/forum/AuthModal.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/forum/AuthModal.tsx",
                                                lineNumber: 187,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/forum/AuthModal.tsx",
                                        lineNumber: 185,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/forum/AuthModal.tsx",
                                lineNumber: 177,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-2 border-t border-gold/15",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-cream/40 text-xs mb-3",
                                    children: "Optional — help the community know you"
                                }, void 0, false, {
                                    fileName: "[project]/components/forum/AuthModal.tsx",
                                    lineNumber: 195,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/forum/AuthModal.tsx",
                                lineNumber: 194,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-semibold text-cream/60 uppercase tracking-wider mb-1 block",
                                        children: "City / Area"
                                    }, void 0, false, {
                                        fileName: "[project]/components/forum/AuthModal.tsx",
                                        lineNumber: 198,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60"
                                            }, void 0, false, {
                                                fileName: "[project]/components/forum/AuthModal.tsx",
                                                lineNumber: 200,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: regCity,
                                                onChange: (e)=>setRegCity(e.target.value),
                                                className: "input pl-10 w-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select your area"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/forum/AuthModal.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Waxahachie",
                                                        children: "Waxahachie"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/forum/AuthModal.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Midlothian",
                                                        children: "Midlothian"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/forum/AuthModal.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Ennis",
                                                        children: "Ennis"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/forum/AuthModal.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Red Oak",
                                                        children: "Red Oak"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/forum/AuthModal.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Palmer",
                                                        children: "Palmer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/forum/AuthModal.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Italy",
                                                        children: "Italy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/forum/AuthModal.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Milford",
                                                        children: "Milford"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/forum/AuthModal.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Ferris",
                                                        children: "Ferris"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/forum/AuthModal.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Maypearl",
                                                        children: "Maypearl"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/forum/AuthModal.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Bardwell",
                                                        children: "Bardwell"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/forum/AuthModal.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Rural Ellis County",
                                                        children: "Rural Ellis County"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/forum/AuthModal.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/forum/AuthModal.tsx",
                                                lineNumber: 201,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/forum/AuthModal.tsx",
                                        lineNumber: 199,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/forum/AuthModal.tsx",
                                lineNumber: 197,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center gap-2 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: regBusiness,
                                                onChange: (e)=>setRegBusiness(e.target.checked),
                                                className: "rounded border-gold/30 text-gold focus:ring-gold"
                                            }, void 0, false, {
                                                fileName: "[project]/components/forum/AuthModal.tsx",
                                                lineNumber: 219,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-cream/70 text-sm flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"], {
                                                        className: "w-4 h-4 text-gold/50"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/forum/AuthModal.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 101
                                                    }, this),
                                                    " Business Owner"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/forum/AuthModal.tsx",
                                                lineNumber: 220,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/forum/AuthModal.tsx",
                                        lineNumber: 218,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/forum/AuthModal.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: regYears,
                                                    onChange: (e)=>setRegYears(e.target.value),
                                                    className: "input pl-10 w-full",
                                                    placeholder: "Years in county",
                                                    min: "0",
                                                    max: "100"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/forum/AuthModal.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/forum/AuthModal.tsx",
                                            lineNumber: 223,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/forum/AuthModal.tsx",
                                        lineNumber: 222,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/forum/AuthModal.tsx",
                                lineNumber: 217,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-semibold text-cream/60 uppercase tracking-wider mb-1 block",
                                        children: "Bio"
                                    }, void 0, false, {
                                        fileName: "[project]/components/forum/AuthModal.tsx",
                                        lineNumber: 230,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: regBio,
                                        onChange: (e)=>setRegBio(e.target.value),
                                        className: "input w-full min-h-[60px]",
                                        placeholder: "Tell us about yourself...",
                                        maxLength: 200
                                    }, void 0, false, {
                                        fileName: "[project]/components/forum/AuthModal.tsx",
                                        lineNumber: 231,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/forum/AuthModal.tsx",
                                lineNumber: 229,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-2 border-t border-gold/15",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center gap-2 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: regNewsletter,
                                            onChange: (e)=>setRegNewsletter(e.target.checked),
                                            className: "rounded border-gold/30 text-gold focus:ring-gold"
                                        }, void 0, false, {
                                            fileName: "[project]/components/forum/AuthModal.tsx",
                                            lineNumber: 235,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-cream/70 text-sm flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__["Newspaper"], {
                                                    className: "w-4 h-4 text-gold/50"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/forum/AuthModal.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 101
                                                }, this),
                                                " Subscribe to newsletter"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/forum/AuthModal.tsx",
                                            lineNumber: 236,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/forum/AuthModal.tsx",
                                    lineNumber: 234,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/forum/AuthModal.tsx",
                                lineNumber: 233,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "btn-primary w-full",
                                children: "Create Account"
                            }, void 0, false, {
                                fileName: "[project]/components/forum/AuthModal.tsx",
                                lineNumber: 239,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/forum/AuthModal.tsx",
                        lineNumber: 162,
                        columnNumber: 44
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/forum/AuthModal.tsx",
                lineNumber: 93,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/forum/AuthModal.tsx",
            lineNumber: 86,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/forum/AuthModal.tsx",
        lineNumber: 85,
        columnNumber: 10
    }, this);
}
}),
"[project]/components/forum/NewTopicForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewTopicForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forum$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/forum/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forum$2f$forum$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/forum/forum-service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-ssr] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-ssr] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/alert-circle.js [app-ssr] (ecmascript) <export default as AlertCircle>");
'use client';
;
;
;
;
;
;
;
function NewTopicForm({ isOpen, onClose, defaultCategory }) {
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forum$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [body, setBody] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [categoryId, setCategoryId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultCategory || '');
    const [tags, setTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isAnonymous, setIsAnonymous] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchCats = async ()=>{
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forum$2f$forum$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCategories"])();
            setCategories(data);
        };
        fetchCats();
    }, []);
    if (!isOpen || !user) return null;
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError('');
        if (!title.trim() || !body.trim() || !categoryId) {
            setError('Title, body, and category are required.');
            return;
        }
        if (title.length < 10) {
            setError('Title must be at least 10 characters.');
            return;
        }
        if (body.length < 20) {
            setError('Post body must be at least 20 characters.');
            return;
        }
        const tagList = tags.split(',').map((t)=>t.trim().toLowerCase().replace(/[^a-z0-9-]/g, '')).filter(Boolean).slice(0, 5);
        const newTopic = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forum$2f$forum$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTopic"])({
            title: title.trim(),
            body: body.trim(),
            category_id: categoryId,
            author_id: user.id,
            author_name: isAnonymous ? 'Anonymous' : user.displayName,
            is_pinned: false,
            is_locked: false,
            is_anonymous: isAnonymous,
            tags: tagList
        });
        if (newTopic) {
            // Navigate to the new topic
            router.push(`/forum/topic/${newTopic.id}`);
            onClose();
        } else {
            setError('Failed to create topic. Please try again.');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        onClick: onClose,
        className: "fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-start justify-center overflow-y-auto py-8 px-4",
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
            onClick: (e)=>e.stopPropagation(),
            className: "w-full max-w-2xl bg-navy-dark border border-gold/30 rounded-2xl overflow-hidden shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 pb-4 flex items-center justify-between border-b border-gold/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-display text-xl font-bold text-white",
                            children: "Start a New Discussion"
                        }, void 0, false, {
                            fileName: "[project]/components/forum/NewTopicForm.tsx",
                            lineNumber: 91,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-2 text-cream/60 hover:text-white transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/components/forum/NewTopicForm.tsx",
                                lineNumber: 93,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/forum/NewTopicForm.tsx",
                            lineNumber: 92,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/forum/NewTopicForm.tsx",
                    lineNumber: 90,
                    columnNumber: 17
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-6 mt-4 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                            className: "w-4 h-4 flex-shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/components/forum/NewTopicForm.tsx",
                            lineNumber: 98,
                            columnNumber: 25
                        }, this),
                        error
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/forum/NewTopicForm.tsx",
                    lineNumber: 97,
                    columnNumber: 27
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "p-6 space-y-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-semibold text-gold uppercase tracking-wider mb-2 block",
                                    children: "Category *"
                                }, void 0, false, {
                                    fileName: "[project]/components/forum/NewTopicForm.tsx",
                                    lineNumber: 105,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: categoryId,
                                    onChange: (e)=>setCategoryId(e.target.value),
                                    className: "input w-full",
                                    required: true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Select a category..."
                                        }, void 0, false, {
                                            fileName: "[project]/components/forum/NewTopicForm.tsx",
                                            lineNumber: 107,
                                            columnNumber: 29
                                        }, this),
                                        categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: cat.id,
                                                children: cat.name
                                            }, cat.id, false, {
                                                fileName: "[project]/components/forum/NewTopicForm.tsx",
                                                lineNumber: 108,
                                                columnNumber: 52
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/forum/NewTopicForm.tsx",
                                    lineNumber: 106,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/forum/NewTopicForm.tsx",
                            lineNumber: 104,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-semibold text-gold uppercase tracking-wider mb-2 block",
                                    children: "Title *"
                                }, void 0, false, {
                                    fileName: "[project]/components/forum/NewTopicForm.tsx",
                                    lineNumber: 114,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: title,
                                    onChange: (e)=>setTitle(e.target.value),
                                    className: "input w-full",
                                    placeholder: "What's on your mind? Be specific and descriptive.",
                                    required: true,
                                    minLength: 10,
                                    maxLength: 200
                                }, void 0, false, {
                                    fileName: "[project]/components/forum/NewTopicForm.tsx",
                                    lineNumber: 115,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-cream/30 text-xs mt-1",
                                    children: [
                                        title.length,
                                        "/200 characters"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/forum/NewTopicForm.tsx",
                                    lineNumber: 116,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/forum/NewTopicForm.tsx",
                            lineNumber: 113,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-semibold text-gold uppercase tracking-wider mb-2 block",
                                    children: "Discussion *"
                                }, void 0, false, {
                                    fileName: "[project]/components/forum/NewTopicForm.tsx",
                                    lineNumber: 121,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: body,
                                    onChange: (e)=>setBody(e.target.value),
                                    className: "input w-full min-h-[200px]",
                                    placeholder: "Share your thoughts, questions, or ideas. Provide context and details so the community can engage meaningfully.",
                                    required: true,
                                    minLength: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/forum/NewTopicForm.tsx",
                                    lineNumber: 122,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-cream/30 text-xs mt-1",
                                    children: [
                                        body.length,
                                        " characters"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/forum/NewTopicForm.tsx",
                                    lineNumber: 123,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/forum/NewTopicForm.tsx",
                            lineNumber: 120,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-semibold text-gold uppercase tracking-wider mb-2 block flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/components/forum/NewTopicForm.tsx",
                                            lineNumber: 129,
                                            columnNumber: 29
                                        }, this),
                                        " Tags (optional)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/forum/NewTopicForm.tsx",
                                    lineNumber: 128,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: tags,
                                    onChange: (e)=>setTags(e.target.value),
                                    className: "input w-full",
                                    placeholder: "e.g. roads, taxes, school-board (comma separated, max 5)"
                                }, void 0, false, {
                                    fileName: "[project]/components/forum/NewTopicForm.tsx",
                                    lineNumber: 131,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/forum/NewTopicForm.tsx",
                            lineNumber: 127,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between pt-4 border-t border-gold/15",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center gap-2 cursor-pointer text-sm text-cream/50 hover:text-cream/70 transition-colors",
                                    children: [
                                        isAnonymous ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                            className: "w-4 h-4 text-amber-400"
                                        }, void 0, false, {
                                            fileName: "[project]/components/forum/NewTopicForm.tsx",
                                            lineNumber: 137,
                                            columnNumber: 44
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/forum/NewTopicForm.tsx",
                                            lineNumber: 137,
                                            columnNumber: 92
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: isAnonymous,
                                            onChange: (e)=>setIsAnonymous(e.target.checked),
                                            className: "sr-only"
                                        }, void 0, false, {
                                            fileName: "[project]/components/forum/NewTopicForm.tsx",
                                            lineNumber: 138,
                                            columnNumber: 29
                                        }, this),
                                        "Post anonymously"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/forum/NewTopicForm.tsx",
                                    lineNumber: 136,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: onClose,
                                            className: "btn-secondary",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/components/forum/NewTopicForm.tsx",
                                            lineNumber: 143,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "btn-primary flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/forum/NewTopicForm.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 33
                                                }, this),
                                                " Post Discussion"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/forum/NewTopicForm.tsx",
                                            lineNumber: 144,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/forum/NewTopicForm.tsx",
                                    lineNumber: 142,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/forum/NewTopicForm.tsx",
                            lineNumber: 135,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-cream/30 text-xs text-center",
                            children: "By posting, you agree to our community guidelines. Be respectful and stay on topic."
                        }, void 0, false, {
                            fileName: "[project]/components/forum/NewTopicForm.tsx",
                            lineNumber: 150,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/forum/NewTopicForm.tsx",
                    lineNumber: 102,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/forum/NewTopicForm.tsx",
            lineNumber: 80,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/forum/NewTopicForm.tsx",
        lineNumber: 73,
        columnNumber: 10
    }, this);
}
}),
"[project]/app/forum/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ForumPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/filter.js [app-ssr] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-ssr] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building.js [app-ssr] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/leaf.js [app-ssr] (ecmascript) <export default as Leaf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplets.js [app-ssr] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-ssr] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thumbs-up.js [app-ssr] (ecmascript) <export default as ThumbsUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-in.js [app-ssr] (ecmascript) <export default as LogIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forum$2f$TopicCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/forum/TopicCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forum$2f$ForumSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/forum/ForumSidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forum$2f$AuthModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/forum/AuthModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forum$2f$NewTopicForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/forum/NewTopicForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forum$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/forum/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forum$2f$forum$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/forum/forum-service.ts [app-ssr] (ecmascript)");
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
;
const categoryIcons = {
    infrastructure: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
        className: "w-4 h-4"
    }, void 0, false, {
        fileName: "[project]/app/forum/page.tsx",
        lineNumber: 16,
        columnNumber: 19
    }, ("TURBOPACK compile-time value", void 0)),
    growth: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"], {
        className: "w-4 h-4"
    }, void 0, false, {
        fileName: "[project]/app/forum/page.tsx",
        lineNumber: 17,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    taxes: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
        className: "w-4 h-4"
    }, void 0, false, {
        fileName: "[project]/app/forum/page.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0)),
    education: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
        className: "w-4 h-4"
    }, void 0, false, {
        fileName: "[project]/app/forum/page.tsx",
        lineNumber: 19,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0)),
    safety: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
        className: "w-4 h-4"
    }, void 0, false, {
        fileName: "[project]/app/forum/page.tsx",
        lineNumber: 20,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    economic: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
        className: "w-4 h-4"
    }, void 0, false, {
        fileName: "[project]/app/forum/page.tsx",
        lineNumber: 21,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    agriculture: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"], {
        className: "w-4 h-4"
    }, void 0, false, {
        fileName: "[project]/app/forum/page.tsx",
        lineNumber: 22,
        columnNumber: 16
    }, ("TURBOPACK compile-time value", void 0)),
    healthcare: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
        className: "w-4 h-4"
    }, void 0, false, {
        fileName: "[project]/app/forum/page.tsx",
        lineNumber: 23,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0)),
    quality: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
        className: "w-4 h-4"
    }, void 0, false, {
        fileName: "[project]/app/forum/page.tsx",
        lineNumber: 24,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    environment: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"], {
        className: "w-4 h-4"
    }, void 0, false, {
        fileName: "[project]/app/forum/page.tsx",
        lineNumber: 25,
        columnNumber: 16
    }, ("TURBOPACK compile-time value", void 0))
};
const categoryBorderColors = {
    blue: 'border-blue-500/40 hover:border-blue-400',
    green: 'border-green-500/40 hover:border-green-400',
    gold: 'border-gold/40 hover:border-gold',
    purple: 'border-purple-500/40 hover:border-purple-400',
    red: 'border-red-500/40 hover:border-red-400',
    teal: 'border-teal-500/40 hover:border-teal-400',
    emerald: 'border-emerald-500/40 hover:border-emerald-400',
    pink: 'border-pink-500/40 hover:border-pink-400',
    orange: 'border-orange-500/40 hover:border-orange-400',
    cyan: 'border-cyan-500/40 hover:border-cyan-400'
};
const categoryTextColors = {
    blue: 'text-blue-400',
    green: 'text-green-400',
    gold: 'text-gold',
    purple: 'text-purple-400',
    red: 'text-red-400',
    teal: 'text-teal-400',
    emerald: 'text-emerald-400',
    pink: 'text-pink-400',
    orange: 'text-orange-400',
    cyan: 'text-cyan-400'
};
const sortIcons = {
    newest: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
        className: "w-4 h-4"
    }, void 0, false, {
        fileName: "[project]/app/forum/page.tsx",
        lineNumber: 52,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    active: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
        className: "w-4 h-4"
    }, void 0, false, {
        fileName: "[project]/app/forum/page.tsx",
        lineNumber: 53,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    popular: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__["ThumbsUp"], {
        className: "w-4 h-4"
    }, void 0, false, {
        fileName: "[project]/app/forum/page.tsx",
        lineNumber: 54,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    trending: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
        className: "w-4 h-4"
    }, void 0, false, {
        fileName: "[project]/app/forum/page.tsx",
        lineNumber: 55,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0))
};
function ForumPage() {
    const { user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forum$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [topics, setTopics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredTopics, setFilteredTopics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [sort, setSort] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('active');
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showCategories, setShowCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showAuthModal, setShowAuthModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [authTab, setAuthTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('login');
    const [showNewTopic, setShowNewTopic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [refreshKey, setRefreshKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const refreshData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setRefreshKey((k)=>k + 1);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchCategories = async ()=>{
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forum$2f$forum$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCategories"])();
            setCategories(data);
        };
        fetchCategories();
    }, [
        refreshKey
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchTopics = async ()=>{
            let result;
            if (search.trim()) {
                result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forum$2f$forum$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["searchTopics"])(search);
            } else if (selectedCategory) {
                result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forum$2f$forum$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTopicsByCategory"])(selectedCategory);
            } else {
                result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forum$2f$forum$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTopics"])();
            }
            result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$forum$2f$forum$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sortTopics"])(result, sort);
            setTopics(result);
            setFilteredTopics(result);
        };
        fetchTopics();
    }, [
        search,
        sort,
        selectedCategory,
        refreshKey
    ]);
    const openAuth = (tab)=>{
        setAuthTab(tab);
        setShowAuthModal(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/forum/page.tsx",
                lineNumber: 104,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "min-h-screen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "relative bg-gradient-to-b from-navy via-navy to-navy-dark border-b border-gold/15 py-12 sm:py-16 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.06)_0%,_transparent_60%)]"
                            }, void 0, false, {
                                fileName: "[project]/app/forum/page.tsx",
                                lineNumber: 108,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "container-custom relative z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center max-w-3xl mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 10
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-16 h-16 bg-gold/10 border border-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                        className: "w-8 h-8 text-gold"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/forum/page.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/forum/page.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-hero font-bold text-white mb-3",
                                                    children: "Community Forum"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/forum/page.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg text-cream/60 mb-6",
                                                    children: "The hub for Ellis County residents to discuss local issues, share ideas, and shape our community's future."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/forum/page.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/forum/page.tsx",
                                            lineNumber: 111,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-3",
                                            children: user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 flex-wrap bg-navy-dark/50 border border-gold/20 rounded-2xl px-4 py-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-bold text-gold",
                                                            children: user.displayName[0]
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/forum/page.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/forum/page.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-cream/80 text-sm font-medium",
                                                        children: user.displayName
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/forum/page.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 41
                                                    }, this),
                                                    user.city && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-cream/40 text-xs",
                                                        children: [
                                                            "· ",
                                                            user.city
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/forum/page.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 55
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setShowNewTopic(true),
                                                        className: "btn-primary text-sm flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/forum/page.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 45
                                                            }, this),
                                                            " New Topic"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/forum/page.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: logout,
                                                        className: "p-2 text-cream/40 hover:text-red-400 transition-colors",
                                                        title: "Sign out",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/forum/page.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/forum/page.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/forum/page.tsx",
                                                lineNumber: 131,
                                                columnNumber: 41
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>openAuth('login'),
                                                        className: "btn-secondary text-sm flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__["LogIn"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/forum/page.tsx",
                                                                lineNumber: 145,
                                                                columnNumber: 45
                                                            }, this),
                                                            " Sign In"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/forum/page.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>openAuth('register'),
                                                        className: "btn-primary text-sm flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/forum/page.tsx",
                                                                lineNumber: 148,
                                                                columnNumber: 45
                                                            }, this),
                                                            " Join Community"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/forum/page.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/forum/page.tsx",
                                                lineNumber: 143,
                                                columnNumber: 46
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/forum/page.tsx",
                                            lineNumber: 130,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/forum/page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/forum/page.tsx",
                                lineNumber: 109,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/forum/page.tsx",
                        lineNumber: 107,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-navy-dark border-b border-gold/10 py-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container-custom",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowCategories(!showCategories),
                                            className: "text-sm text-cream/50 hover:text-gold transition-colors flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/forum/page.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 33
                                                }, this),
                                                "Categories",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: `w-3 h-3 transition-transform ${showCategories ? 'rotate-180' : ''}`
                                                }, void 0, false, {
                                                    fileName: "[project]/app/forum/page.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/forum/page.tsx",
                                            lineNumber: 160,
                                            columnNumber: 29
                                        }, this),
                                        selectedCategory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSelectedCategory(null),
                                            className: "text-xs text-cream/40 hover:text-red-400 flex items-center gap-1 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/forum/page.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 37
                                                }, this),
                                                " Clear filter"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/forum/page.tsx",
                                            lineNumber: 165,
                                            columnNumber: 50
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/forum/page.tsx",
                                    lineNumber: 159,
                                    columnNumber: 25
                                }, this),
                                showCategories && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        height: 0
                                    },
                                    animate: {
                                        opacity: 1,
                                        height: 'auto'
                                    },
                                    className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2",
                                    children: categories.map((cat)=>{
                                        const isActive = selectedCategory === cat.id;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSelectedCategory(isActive ? null : cat.id),
                                            className: `flex items-center gap-2 px-3 py-2 rounded-lg border text-sm transition-all ${isActive ? `${categoryBorderColors[cat.color]} bg-white/5 ${categoryTextColors[cat.color]}` : 'border-gold/10 text-cream/50 hover:border-gold/30 hover:text-cream/80'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: isActive ? categoryTextColors[cat.color] : 'text-cream/40',
                                                    children: categoryIcons[cat.id]
                                                }, void 0, false, {
                                                    fileName: "[project]/app/forum/page.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "truncate text-left flex-1",
                                                    children: cat.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/forum/page.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-xs px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/10' : 'bg-gold/10 text-cream/30'}`,
                                                    children: cat.topicCount
                                                }, void 0, false, {
                                                    fileName: "[project]/app/forum/page.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, cat.id, true, {
                                            fileName: "[project]/app/forum/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 22
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/forum/page.tsx",
                                    lineNumber: 169,
                                    columnNumber: 44
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/forum/page.tsx",
                            lineNumber: 158,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/forum/page.tsx",
                        lineNumber: 157,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container-custom",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col lg:flex-row gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/40"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/forum/page.tsx",
                                                                lineNumber: 201,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: search,
                                                                onChange: (e)=>setSearch(e.target.value),
                                                                placeholder: "Search topics, tags, or users...",
                                                                className: "input pl-10 w-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/forum/page.tsx",
                                                                lineNumber: 202,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/forum/page.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1 bg-navy border border-gold/15 rounded-lg p-1",
                                                        children: [
                                                            'active',
                                                            'newest',
                                                            'popular',
                                                            'trending'
                                                        ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setSort(s),
                                                                className: `flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${sort === s ? 'bg-gold/15 text-gold border border-gold/30' : 'text-cream/50 hover:text-cream border border-transparent'}`,
                                                                children: [
                                                                    sortIcons[s],
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "capitalize",
                                                                        children: s
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/forum/page.tsx",
                                                                        lineNumber: 208,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, s, true, {
                                                                fileName: "[project]/app/forum/page.tsx",
                                                                lineNumber: 206,
                                                                columnNumber: 113
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/forum/page.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/forum/page.tsx",
                                                lineNumber: 199,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-cream/40",
                                                        children: [
                                                            filteredTopics.length,
                                                            " ",
                                                            filteredTopics.length === 1 ? 'topic' : 'topics',
                                                            selectedCategory && ` in ${categories.find((c)=>c.id === selectedCategory)?.name}`,
                                                            search && ` matching "${search}"`
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/forum/page.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 37
                                                    }, this),
                                                    user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setShowNewTopic(true),
                                                        className: "sm:hidden btn-primary text-xs flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                className: "w-3 h-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/forum/page.tsx",
                                                                lineNumber: 221,
                                                                columnNumber: 45
                                                            }, this),
                                                            " New Topic"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/forum/page.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 46
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/forum/page.tsx",
                                                lineNumber: 214,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: filteredTopics.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center py-16 bg-navy border border-gold/15 rounded-xl",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                            className: "w-12 h-12 text-gold/30 mx-auto mb-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/forum/page.tsx",
                                                            lineNumber: 228,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-white font-display text-lg mb-2",
                                                            children: "No topics found"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/forum/page.tsx",
                                                            lineNumber: 229,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-cream/50 text-sm mb-4",
                                                            children: search ? 'Try a different search term.' : 'Be the first to start a discussion!'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/forum/page.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 45
                                                        }, this),
                                                        user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setShowNewTopic(true),
                                                            className: "btn-primary text-sm",
                                                            children: "Start a Discussion"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/forum/page.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 54
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/forum/page.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 68
                                                }, this) : filteredTopics.map((topic, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forum$2f$TopicCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        topic: topic,
                                                        index: idx,
                                                        category: categories.find((c)=>c.id === topic.categoryId)
                                                    }, topic.id, false, {
                                                        fileName: "[project]/app/forum/page.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 85
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/forum/page.tsx",
                                                lineNumber: 226,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/forum/page.tsx",
                                        lineNumber: 197,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full lg:w-80 flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forum$2f$ForumSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/forum/page.tsx",
                                            lineNumber: 242,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/forum/page.tsx",
                                        lineNumber: 241,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/forum/page.tsx",
                                lineNumber: 195,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/forum/page.tsx",
                            lineNumber: 194,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/forum/page.tsx",
                        lineNumber: 193,
                        columnNumber: 17
                    }, this),
                    !user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-12 bg-navy border-t border-gold/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container-custom text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-display text-2xl font-bold text-white mb-3",
                                    children: "Your Voice Matters"
                                }, void 0, false, {
                                    fileName: "[project]/app/forum/page.tsx",
                                    lineNumber: 251,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-cream/60 max-w-xl mx-auto mb-6",
                                    children: [
                                        "Join ",
                                        categories.reduce((sum, c)=>sum + c.topicCount, 0),
                                        "+ discussions about the issues that affect your community. Create an account to post, vote, and engage with your neighbors."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/forum/page.tsx",
                                    lineNumber: 254,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>openAuth('register'),
                                    className: "btn-primary text-lg px-8 py-3",
                                    children: "Join the Community"
                                }, void 0, false, {
                                    fileName: "[project]/app/forum/page.tsx",
                                    lineNumber: 258,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/forum/page.tsx",
                            lineNumber: 250,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/forum/page.tsx",
                        lineNumber: 249,
                        columnNumber: 27
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/forum/page.tsx",
                lineNumber: 105,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/forum/page.tsx",
                lineNumber: 264,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forum$2f$AuthModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showAuthModal,
                onClose: ()=>{
                    setShowAuthModal(false);
                    refreshData();
                },
                initialTab: authTab
            }, void 0, false, {
                fileName: "[project]/app/forum/page.tsx",
                lineNumber: 267,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forum$2f$NewTopicForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showNewTopic,
                onClose: ()=>{
                    setShowNewTopic(false);
                    refreshData();
                },
                defaultCategory: selectedCategory || undefined
            }, void 0, false, {
                fileName: "[project]/app/forum/page.tsx",
                lineNumber: 271,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f2cc3450._.js.map