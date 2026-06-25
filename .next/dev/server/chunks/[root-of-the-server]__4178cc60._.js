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
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = supabaseUrl && supabaseAnonKey ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])('https://placeholder.supabase.co', 'placeholder');
if (!supabaseUrl || !supabaseAnonKey) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        console.error('SERVER SIDE: Supabase credentials missing. Please check your .env.local file.');
    }
}
}),
"[project]/lib/civic/candidates.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ELLIS_COUNTY_2026_CANDIDATES",
    ()=>ELLIS_COUNTY_2026_CANDIDATES,
    "getLiveCandidates",
    ()=>getLiveCandidates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/client.ts [app-route] (ecmascript)");
;
const ELLIS_COUNTY_2026_CANDIDATES = [
    {
        id: 'live-gc-bailey-2026',
        name: 'Garrett Bailey',
        party: 'Republican',
        bio: 'Candidate for Ellis County Commissioner, Precinct 2.',
        incumbent: false,
        office: 'Ellis County Commissioner',
        officeLevel: 'county',
        district: 'Precinct 2',
        socialMedia: {},
        topIssues: [
            'Infrastructure',
            'Public Safety',
            'County Growth'
        ],
        policyPositions: [],
        election: {
            type: 'primary',
            date: '2026-03-03',
            opponents: [
                'Roger Cole',
                'John Paul Dineen III'
            ]
        },
        raceStatus: 'active'
    },
    {
        id: 'live-gc-cole-2026',
        name: 'Roger Cole',
        party: 'Republican',
        bio: 'Candidate for Ellis County Commissioner, Precinct 2.',
        incumbent: false,
        office: 'Ellis County Commissioner',
        officeLevel: 'county',
        district: 'Precinct 2',
        socialMedia: {},
        topIssues: [
            'Fiscal Responsibility',
            'Roads',
            'Agricultural Interests'
        ],
        policyPositions: [],
        election: {
            type: 'primary',
            date: '2026-03-03',
            opponents: [
                'Garrett Bailey',
                'John Paul Dineen III'
            ]
        },
        raceStatus: 'active'
    },
    {
        id: 'live-gc-dineen-2026',
        name: 'John Paul Dineen III',
        party: 'Republican',
        bio: 'Candidate for Ellis County Commissioner, Precinct 2.',
        incumbent: false,
        office: 'Ellis County Commissioner',
        officeLevel: 'county',
        district: 'Precinct 2',
        socialMedia: {},
        topIssues: [
            'Community Development',
            'Infrastructure',
            'Local Business'
        ],
        policyPositions: [],
        election: {
            type: 'primary',
            date: '2026-03-03',
            opponents: [
                'Garrett Bailey',
                'Roger Cole'
            ]
        },
        raceStatus: 'active'
    },
    {
        id: 'live-gc-jinadu-2026',
        name: 'Oyinkansola Jinadu',
        party: 'Democrat',
        bio: 'Candidate for Ellis County Commissioner, Precinct 4.',
        incumbent: false,
        office: 'Ellis County Commissioner',
        officeLevel: 'county',
        district: 'Precinct 4',
        socialMedia: {},
        topIssues: [
            'Equity',
            'Community Resources',
            'Public Safety'
        ],
        policyPositions: [],
        election: {
            type: 'primary',
            date: '2026-03-03',
            opponents: [
                'Kyle Butler'
            ]
        },
        raceStatus: 'active'
    },
    {
        id: 'live-gc-butler-2026',
        name: 'Kyle Butler',
        party: 'Republican',
        bio: 'Candidate for Ellis County Commissioner, Precinct 4.',
        incumbent: false,
        office: 'Ellis County Commissioner',
        officeLevel: 'county',
        district: 'Precinct 4',
        socialMedia: {},
        topIssues: [
            'Tax Relief',
            'Infrastructure',
            'Small Business'
        ],
        policyPositions: [],
        election: {
            type: 'primary',
            date: '2026-03-03',
            opponents: [
                'Oyinkansola Jinadu'
            ]
        },
        raceStatus: 'active'
    },
    {
        id: 'live-gc-adams-2026',
        name: 'Brandon Adams',
        party: 'Republican',
        bio: 'Candidate for Justice of the Peace, Ellis County.',
        incumbent: false,
        office: 'Justice of the Peace',
        officeLevel: 'county',
        district: 'Precinct 3 & 4',
        socialMedia: {},
        topIssues: [
            'Law & Order',
            'Community Justice',
            'Local Courts'
        ],
        policyPositions: [],
        election: {
            type: 'primary',
            date: '2026-03-03',
            opponents: [
                'Pam Hampton'
            ]
        },
        raceStatus: 'active'
    },
    {
        id: 'live-gc-hampton-2026',
        name: 'Pam Hampton',
        party: 'Democrat',
        bio: 'Candidate for Justice of the Peace, Ellis County.',
        incumbent: false,
        office: 'Justice of the Peace',
        officeLevel: 'county',
        district: 'Precinct 3 & 4',
        socialMedia: {},
        topIssues: [
            'Access to Justice',
            'Community Safety',
            'Fair Courts'
        ],
        policyPositions: [],
        election: {
            type: 'primary',
            date: '2026-03-03',
            opponents: [
                'Brandon Adams'
            ]
        },
        raceStatus: 'active'
    }
];
async function getLiveCandidates() {
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('candidates').select('*');
        if (error) {
            console.error('[Civic] Supabase Error fetching candidates:', error);
            return {
                candidates: ELLIS_COUNTY_2026_CANDIDATES,
                source: 'fallback',
                error: error.message
            };
        }
        if (!data || data.length === 0) {
            // DB is empty, use fallback array until they run the seeder script
            return {
                candidates: ELLIS_COUNTY_2026_CANDIDATES,
                source: 'fallback'
            };
        }
        const candidates = data.map((c)=>({
                id: c.id,
                name: c.name,
                party: c.party,
                photo: c.photo,
                bio: c.bio,
                incumbent: c.incumbent,
                yearsInOffice: c.years_in_office,
                office: c.office,
                officeLevel: c.office_level,
                district: c.district,
                precinct: c.precinct,
                campaignWebsite: c.campaign_website,
                donationUrl: c.donation_url,
                email: c.email,
                phone: c.phone,
                socialMedia: {
                    twitter: c.twitter,
                    facebook: c.facebook,
                    instagram: c.instagram,
                    youtube: c.youtube
                },
                topIssues: c.top_issues || [],
                policyPositions: c.policy_positions || [],
                election: {
                    type: c.election_type || 'primary',
                    date: c.election_date,
                    opponents: c.opponents || []
                },
                raceStatus: c.race_status || 'active',
                endorsements: c.endorsements || [],
                eventIds: c.event_ids || []
            }));
        return {
            candidates,
            source: 'supabase'
        };
    } catch (err) {
        console.error('[Civic] Unexpected error fetching candidates:', err);
        return {
            candidates: ELLIS_COUNTY_2026_CANDIDATES,
            source: 'fallback',
            error: err?.message ?? 'Unknown error'
        };
    }
}
}),
"[project]/app/api/candidates/live/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$civic$2f$candidates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/civic/candidates.ts [app-route] (ecmascript)");
;
;
const revalidate = 0; // Disable caching to fetch live from DB immediately
async function GET() {
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$civic$2f$candidates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getLiveCandidates"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result, {
        headers: {
            'Cache-Control': 'no-store'
        }
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4178cc60._.js.map