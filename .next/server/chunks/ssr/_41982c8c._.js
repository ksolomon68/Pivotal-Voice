module.exports=[20916,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"ReadonlyURLSearchParams",{enumerable:!0,get:function(){return e}});class d extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class e extends URLSearchParams{append(){throw new d}delete(){throw new d}set(){throw new d}sort(){throw new d}}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},21170,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"RedirectStatusCode",{enumerable:!0,get:function(){return e}});var d,e=((d={})[d.SeeOther=303]="SeeOther",d[d.TemporaryRedirect=307]="TemporaryRedirect",d[d.PermanentRedirect=308]="PermanentRedirect",d);("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},28859,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d,e={REDIRECT_ERROR_CODE:function(){return h},RedirectType:function(){return i},isRedirectError:function(){return j}};for(var f in e)Object.defineProperty(c,f,{enumerable:!0,get:e[f]});let g=a.r(21170),h="NEXT_REDIRECT";var i=((d={}).push="push",d.replace="replace",d);function j(a){if("object"!=typeof a||null===a||!("digest"in a)||"string"!=typeof a.digest)return!1;let b=a.digest.split(";"),[c,d]=b,e=b.slice(2,-2).join(";"),f=Number(b.at(-2));return c===h&&("replace"===d||"push"===d)&&"string"==typeof e&&!isNaN(f)&&f in g.RedirectStatusCode}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},44868,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={getRedirectError:function(){return i},getRedirectStatusCodeFromError:function(){return n},getRedirectTypeFromError:function(){return m},getURLFromRedirectError:function(){return l},permanentRedirect:function(){return k},redirect:function(){return j}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(21170),g=a.r(28859),h=a.r(20635).actionAsyncStorage;function i(a,b,c=f.RedirectStatusCode.TemporaryRedirect){let d=Object.defineProperty(Error(g.REDIRECT_ERROR_CODE),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return d.digest=`${g.REDIRECT_ERROR_CODE};${b};${a};${c};`,d}function j(a,b){throw i(a,b??=h?.getStore()?.isAction?g.RedirectType.push:g.RedirectType.replace,f.RedirectStatusCode.TemporaryRedirect)}function k(a,b=g.RedirectType.replace){throw i(a,b,f.RedirectStatusCode.PermanentRedirect)}function l(a){return(0,g.isRedirectError)(a)?a.digest.split(";").slice(2,-2).join(";"):null}function m(a){if(!(0,g.isRedirectError)(a))throw Object.defineProperty(Error("Not a redirect error"),"__NEXT_ERROR_CODE",{value:"E260",enumerable:!1,configurable:!0});return a.digest.split(";",2)[1]}function n(a){if(!(0,g.isRedirectError)(a))throw Object.defineProperty(Error("Not a redirect error"),"__NEXT_ERROR_CODE",{value:"E260",enumerable:!1,configurable:!0});return Number(a.digest.split(";").at(-2))}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},89798,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={HTTPAccessErrorStatus:function(){return f},HTTP_ERROR_FALLBACK_ERROR_CODE:function(){return h},getAccessFallbackErrorTypeByStatus:function(){return k},getAccessFallbackHTTPStatus:function(){return j},isHTTPAccessFallbackError:function(){return i}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f={NOT_FOUND:404,FORBIDDEN:403,UNAUTHORIZED:401},g=new Set(Object.values(f)),h="NEXT_HTTP_ERROR_FALLBACK";function i(a){if("object"!=typeof a||null===a||!("digest"in a)||"string"!=typeof a.digest)return!1;let[b,c]=a.digest.split(";");return b===h&&g.has(Number(c))}function j(a){return Number(a.digest.split(";")[1])}function k(a){switch(a){case 401:return"unauthorized";case 403:return"forbidden";case 404:return"not-found";default:return}}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},16155,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"notFound",{enumerable:!0,get:function(){return f}});let d=a.r(89798),e=`${d.HTTP_ERROR_FALLBACK_ERROR_CODE};404`;function f(){let a=Object.defineProperty(Error(e),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});throw a.digest=e,a}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},34557,(a,b,c)=>{"use strict";function d(){throw Object.defineProperty(Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."),"__NEXT_ERROR_CODE",{value:"E488",enumerable:!1,configurable:!0})}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"forbidden",{enumerable:!0,get:function(){return d}}),a.r(89798).HTTP_ERROR_FALLBACK_ERROR_CODE,("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},93845,(a,b,c)=>{"use strict";function d(){throw Object.defineProperty(Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."),"__NEXT_ERROR_CODE",{value:"E411",enumerable:!1,configurable:!0})}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"unauthorized",{enumerable:!0,get:function(){return d}}),a.r(89798).HTTP_ERROR_FALLBACK_ERROR_CODE,("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},13091,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={isHangingPromiseRejectionError:function(){return f},makeDevtoolsIOAwarePromise:function(){return l},makeHangingPromise:function(){return j}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});function f(a){return"object"==typeof a&&null!==a&&"digest"in a&&a.digest===g}let g="HANGING_PROMISE_REJECTION";class h extends Error{constructor(a,b){super(`During prerendering, ${b} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${b} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${a}".`),this.route=a,this.expression=b,this.digest=g}}let i=new WeakMap;function j(a,b,c){if(a.aborted)return Promise.reject(new h(b,c));{let d=new Promise((d,e)=>{let f=e.bind(null,new h(b,c)),g=i.get(a);if(g)g.push(f);else{let b=[f];i.set(a,b),a.addEventListener("abort",()=>{for(let a=0;a<b.length;a++)b[a]()},{once:!0})}});return d.catch(k),d}}function k(){}function l(a,b,c){return b.stagedRendering?b.stagedRendering.delayUntilStage(c,void 0,a):new Promise(b=>{setTimeout(()=>{b(a)},0)})}},73808,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"isPostpone",{enumerable:!0,get:function(){return e}});let d=Symbol.for("react.postpone");function e(a){return"object"==typeof a&&null!==a&&a.$$typeof===d}},49640,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={BailoutToCSRError:function(){return g},isBailoutToCSRError:function(){return h}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f="BAILOUT_TO_CLIENT_SIDE_RENDERING";class g extends Error{constructor(a){super(`Bail out to client-side rendering: ${a}`),this.reason=a,this.digest=f}}function h(a){return"object"==typeof a&&null!==a&&"digest"in a&&a.digest===f}},1567,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"isNextRouterError",{enumerable:!0,get:function(){return f}});let d=a.r(89798),e=a.r(28859);function f(a){return(0,e.isRedirectError)(a)||(0,d.isHTTPAccessFallbackError)(a)}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},96556,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={DynamicServerError:function(){return g},isDynamicServerError:function(){return h}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f="DYNAMIC_SERVER_USAGE";class g extends Error{constructor(a){super(`Dynamic server usage: ${a}`),this.description=a,this.digest=f}}function h(a){return"object"==typeof a&&null!==a&&"digest"in a&&"string"==typeof a.digest&&a.digest===f}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},60312,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={StaticGenBailoutError:function(){return g},isStaticGenBailoutError:function(){return h}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f="NEXT_STATIC_GEN_BAILOUT";class g extends Error{constructor(...a){super(...a),this.code=f}}function h(a){return"object"==typeof a&&null!==a&&"code"in a&&a.code===f}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},17491,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={METADATA_BOUNDARY_NAME:function(){return f},OUTLET_BOUNDARY_NAME:function(){return h},ROOT_LAYOUT_BOUNDARY_NAME:function(){return i},VIEWPORT_BOUNDARY_NAME:function(){return g}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f="__next_metadata_boundary__",g="__next_viewport_boundary__",h="__next_outlet_boundary__",i="__next_root_layout_boundary__"},61933,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={atLeastOneTask:function(){return h},scheduleImmediate:function(){return g},scheduleOnNextTick:function(){return f},waitAtLeastOneReactRenderTask:function(){return i}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a=>{Promise.resolve().then(()=>{process.nextTick(a)})},g=a=>{setImmediate(a)};function h(){return new Promise(a=>g(a))}function i(){return new Promise(a=>setImmediate(a))}},50640,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"InvariantError",{enumerable:!0,get:function(){return d}});class d extends Error{constructor(a,b){super(`Invariant: ${a.endsWith(".")?a:a+"."} This is a bug in Next.js.`,b),this.name="InvariantError"}}},60384,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d,e,f={Postpone:function(){return B},PreludeState:function(){return $},abortAndThrowOnSynchronousRequestDataAccess:function(){return A},abortOnSynchronousPlatformIOAccess:function(){return z},accessedDynamicData:function(){return J},annotateDynamicAccess:function(){return O},consumeDynamicAccess:function(){return K},createDynamicTrackingState:function(){return s},createDynamicValidationState:function(){return t},createHangingInputAbortSignal:function(){return N},createRenderInBrowserAbortSignal:function(){return M},delayUntilRuntimeStage:function(){return ac},formatDynamicAPIAccesses:function(){return L},getFirstDynamicReason:function(){return u},getStaticShellDisallowedDynamicReasons:function(){return ab},isDynamicPostpone:function(){return E},isPrerenderInterruptedError:function(){return I},logDisallowedDynamicError:function(){return _},markCurrentScopeAsDynamic:function(){return v},postponeWithTracking:function(){return C},throwIfDisallowedDynamic:function(){return aa},throwToInterruptStaticGeneration:function(){return w},trackAllowedDynamicAccess:function(){return W},trackDynamicDataInDynamicRender:function(){return x},trackDynamicHoleInRuntimeShell:function(){return X},trackDynamicHoleInStaticShell:function(){return Y},useDynamicRouteParams:function(){return P},useDynamicSearchParams:function(){return Q}};for(var g in f)Object.defineProperty(c,g,{enumerable:!0,get:f[g]});let h=(d=a.r(717))&&d.__esModule?d:{default:d},i=a.r(96556),j=a.r(60312),k=a.r(32319),l=a.r(56704),m=a.r(13091),n=a.r(17491),o=a.r(61933),p=a.r(49640),q=a.r(50640),r="function"==typeof h.default.unstable_postpone;function s(a){return{isDebugDynamicAccesses:a,dynamicAccesses:[],syncDynamicErrorWithStack:null}}function t(){return{hasSuspenseAboveBody:!1,hasDynamicMetadata:!1,dynamicMetadata:null,hasDynamicViewport:!1,hasAllowedDynamic:!1,dynamicErrors:[]}}function u(a){var b;return null==(b=a.dynamicAccesses[0])?void 0:b.expression}function v(a,b,c){if(b)switch(b.type){case"cache":case"unstable-cache":case"private-cache":return}if(!a.forceDynamic&&!a.forceStatic){if(a.dynamicShouldError)throw Object.defineProperty(new j.StaticGenBailoutError(`Route ${a.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${c}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`),"__NEXT_ERROR_CODE",{value:"E553",enumerable:!1,configurable:!0});if(b)switch(b.type){case"prerender-ppr":return C(a.route,c,b.dynamicTracking);case"prerender-legacy":b.revalidate=0;let d=Object.defineProperty(new i.DynamicServerError(`Route ${a.route} couldn't be rendered statically because it used ${c}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`),"__NEXT_ERROR_CODE",{value:"E550",enumerable:!1,configurable:!0});throw a.dynamicUsageDescription=c,a.dynamicUsageStack=d.stack,d}}}function w(a,b,c){let d=Object.defineProperty(new i.DynamicServerError(`Route ${b.route} couldn't be rendered statically because it used \`${a}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`),"__NEXT_ERROR_CODE",{value:"E558",enumerable:!1,configurable:!0});throw c.revalidate=0,b.dynamicUsageDescription=a,b.dynamicUsageStack=d.stack,d}function x(a){switch(a.type){case"cache":case"unstable-cache":case"private-cache":return}}function y(a,b,c){let d=H(`Route ${a} needs to bail out of prerendering at this point because it used ${b}.`);c.controller.abort(d);let e=c.dynamicTracking;e&&e.dynamicAccesses.push({stack:e.isDebugDynamicAccesses?Error().stack:void 0,expression:b})}function z(a,b,c,d){let e=d.dynamicTracking;y(a,b,d),e&&null===e.syncDynamicErrorWithStack&&(e.syncDynamicErrorWithStack=c)}function A(a,b,c,d){if(!1===d.controller.signal.aborted){y(a,b,d);let e=d.dynamicTracking;e&&null===e.syncDynamicErrorWithStack&&(e.syncDynamicErrorWithStack=c)}throw H(`Route ${a} needs to bail out of prerendering at this point because it used ${b}.`)}function B({reason:a,route:b}){let c=k.workUnitAsyncStorage.getStore();C(b,a,c&&"prerender-ppr"===c.type?c.dynamicTracking:null)}function C(a,b,c){(function(){if(!r)throw Object.defineProperty(Error("Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js"),"__NEXT_ERROR_CODE",{value:"E224",enumerable:!1,configurable:!0})})(),c&&c.dynamicAccesses.push({stack:c.isDebugDynamicAccesses?Error().stack:void 0,expression:b}),h.default.unstable_postpone(D(a,b))}function D(a,b){return`Route ${a} needs to bail out of prerendering at this point because it used ${b}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`}function E(a){return"object"==typeof a&&null!==a&&"string"==typeof a.message&&F(a.message)}function F(a){return a.includes("needs to bail out of prerendering at this point because it used")&&a.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error")}if(!1===F(D("%%%","^^^")))throw Object.defineProperty(Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js"),"__NEXT_ERROR_CODE",{value:"E296",enumerable:!1,configurable:!0});let G="NEXT_PRERENDER_INTERRUPTED";function H(a){let b=Object.defineProperty(Error(a),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return b.digest=G,b}function I(a){return"object"==typeof a&&null!==a&&a.digest===G&&"name"in a&&"message"in a&&a instanceof Error}function J(a){return a.length>0}function K(a,b){return a.dynamicAccesses.push(...b.dynamicAccesses),a.dynamicAccesses}function L(a){return a.filter(a=>"string"==typeof a.stack&&a.stack.length>0).map(({expression:a,stack:b})=>(b=b.split("\n").slice(4).filter(a=>!(a.includes("node_modules/next/")||a.includes(" (<anonymous>)")||a.includes(" (node:"))).join("\n"),`Dynamic API Usage Debug - ${a}:
${b}`))}function M(){let a=new AbortController;return a.abort(Object.defineProperty(new p.BailoutToCSRError("Render in Browser"),"__NEXT_ERROR_CODE",{value:"E721",enumerable:!1,configurable:!0})),a.signal}function N(a){switch(a.type){case"prerender":case"prerender-runtime":let b=new AbortController;if(a.cacheSignal)a.cacheSignal.inputReady().then(()=>{b.abort()});else{let c=(0,k.getRuntimeStagePromise)(a);c?c.then(()=>(0,o.scheduleOnNextTick)(()=>b.abort())):(0,o.scheduleOnNextTick)(()=>b.abort())}return b.signal;case"prerender-client":case"prerender-ppr":case"prerender-legacy":case"request":case"cache":case"private-cache":case"unstable-cache":return}}function O(a,b){let c=b.dynamicTracking;c&&c.dynamicAccesses.push({stack:c.isDebugDynamicAccesses?Error().stack:void 0,expression:a})}function P(a){let b=l.workAsyncStorage.getStore(),c=k.workUnitAsyncStorage.getStore();if(b&&c)switch(c.type){case"prerender-client":case"prerender":{let d=c.fallbackRouteParams;d&&d.size>0&&h.default.use((0,m.makeHangingPromise)(c.renderSignal,b.route,a));break}case"prerender-ppr":{let d=c.fallbackRouteParams;if(d&&d.size>0)return C(b.route,a,c.dynamicTracking);break}case"prerender-runtime":throw Object.defineProperty(new q.InvariantError(`\`${a}\` was called during a runtime prerender. Next.js should be preventing ${a} from being included in server components statically, but did not in this case.`),"__NEXT_ERROR_CODE",{value:"E771",enumerable:!1,configurable:!0});case"cache":case"private-cache":throw Object.defineProperty(new q.InvariantError(`\`${a}\` was called inside a cache scope. Next.js should be preventing ${a} from being included in server components statically, but did not in this case.`),"__NEXT_ERROR_CODE",{value:"E745",enumerable:!1,configurable:!0})}}function Q(a){let b=l.workAsyncStorage.getStore(),c=k.workUnitAsyncStorage.getStore();if(b)switch(!c&&(0,k.throwForMissingRequestStore)(a),c.type){case"prerender-client":h.default.use((0,m.makeHangingPromise)(c.renderSignal,b.route,a));break;case"prerender-legacy":case"prerender-ppr":if(b.forceStatic)return;throw Object.defineProperty(new p.BailoutToCSRError(a),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});case"prerender":case"prerender-runtime":throw Object.defineProperty(new q.InvariantError(`\`${a}\` was called from a Server Component. Next.js should be preventing ${a} from being included in server components statically, but did not in this case.`),"__NEXT_ERROR_CODE",{value:"E795",enumerable:!1,configurable:!0});case"cache":case"unstable-cache":case"private-cache":throw Object.defineProperty(new q.InvariantError(`\`${a}\` was called inside a cache scope. Next.js should be preventing ${a} from being included in server components statically, but did not in this case.`),"__NEXT_ERROR_CODE",{value:"E745",enumerable:!1,configurable:!0});case"request":return}}let R=/\n\s+at Suspense \(<anonymous>\)/,S=RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${n.ROOT_LAYOUT_BOUNDARY_NAME} \\([^\\n]*\\)`),T=RegExp(`\\n\\s+at ${n.METADATA_BOUNDARY_NAME}[\\n\\s]`),U=RegExp(`\\n\\s+at ${n.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`),V=RegExp(`\\n\\s+at ${n.OUTLET_BOUNDARY_NAME}[\\n\\s]`);function W(a,b,c,d){if(!V.test(b)){if(T.test(b)){c.hasDynamicMetadata=!0;return}if(U.test(b)){c.hasDynamicViewport=!0;return}if(S.test(b)){c.hasAllowedDynamic=!0,c.hasSuspenseAboveBody=!0;return}else if(R.test(b)){c.hasAllowedDynamic=!0;return}else{if(d.syncDynamicErrorWithStack)return void c.dynamicErrors.push(d.syncDynamicErrorWithStack);let e=Z(`Route "${a.route}": Uncached data was accessed outside of <Suspense>. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`,b);return void c.dynamicErrors.push(e)}}}function X(a,b,c,d){if(!V.test(b)){if(T.test(b)){c.dynamicMetadata=Z(`Route "${a.route}": Uncached data or \`connection()\` was accessed inside \`generateMetadata\`. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`,b);return}if(U.test(b)){let d=Z(`Route "${a.route}": Uncached data or \`connection()\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`,b);c.dynamicErrors.push(d);return}if(S.test(b)){c.hasAllowedDynamic=!0,c.hasSuspenseAboveBody=!0;return}else if(R.test(b)){c.hasAllowedDynamic=!0;return}else{if(d.syncDynamicErrorWithStack)return void c.dynamicErrors.push(d.syncDynamicErrorWithStack);let e=Z(`Route "${a.route}": Uncached data or \`connection()\` was accessed outside of \`<Suspense>\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`,b);return void c.dynamicErrors.push(e)}}}function Y(a,b,c,d){if(!V.test(b)){if(T.test(b)){c.dynamicMetadata=Z(`Route "${a.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateMetadata\` or you have file-based metadata such as icons that depend on dynamic params segments. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`,b);return}if(U.test(b)){let d=Z(`Route "${a.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`,b);c.dynamicErrors.push(d);return}if(S.test(b)){c.hasAllowedDynamic=!0,c.hasSuspenseAboveBody=!0;return}else if(R.test(b)){c.hasAllowedDynamic=!0;return}else{if(d.syncDynamicErrorWithStack)return void c.dynamicErrors.push(d.syncDynamicErrorWithStack);let e=Z(`Route "${a.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed outside of \`<Suspense>\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`,b);return void c.dynamicErrors.push(e)}}}function Z(a,b){let c=Object.defineProperty(Error(a),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return c.stack=c.name+": "+a+b,c}var $=((e={})[e.Full=0]="Full",e[e.Empty=1]="Empty",e[e.Errored=2]="Errored",e);function _(a,b){console.error(b),a.dev||(a.hasReadableErrorStacks?console.error(`To get a more detailed stack trace and pinpoint the issue, start the app in development mode by running \`next dev\`, then open "${a.route}" in your browser to investigate the error.`):console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${a.route}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`))}function aa(a,b,c,d){if(d.syncDynamicErrorWithStack)throw _(a,d.syncDynamicErrorWithStack),new j.StaticGenBailoutError;if(0!==b){if(c.hasSuspenseAboveBody)return;let d=c.dynamicErrors;if(d.length>0){for(let b=0;b<d.length;b++)_(a,d[b]);throw new j.StaticGenBailoutError}if(c.hasDynamicViewport)throw console.error(`Route "${a.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`),new j.StaticGenBailoutError;if(1===b)throw console.error(`Route "${a.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`),new j.StaticGenBailoutError}else if(!1===c.hasAllowedDynamic&&c.hasDynamicMetadata)throw console.error(`Route "${a.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`),new j.StaticGenBailoutError}function ab(a,b,c){if(c.hasSuspenseAboveBody)return[];if(0!==b){let d=c.dynamicErrors;if(d.length>0)return d;if(1===b)return[Object.defineProperty(new q.InvariantError(`Route "${a.route}" did not produce a static shell and Next.js was unable to determine a reason.`),"__NEXT_ERROR_CODE",{value:"E936",enumerable:!1,configurable:!0})]}else if(!1===c.hasAllowedDynamic&&0===c.dynamicErrors.length&&c.dynamicMetadata)return[c.dynamicMetadata];return[]}function ac(a,b){return a.runtimeStagePromise?a.runtimeStagePromise.then(()=>b):b}},94783,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"unstable_rethrow",{enumerable:!0,get:function(){return function a(b){if((0,g.isNextRouterError)(b)||(0,f.isBailoutToCSRError)(b)||(0,i.isDynamicServerError)(b)||(0,h.isDynamicPostpone)(b)||(0,e.isPostpone)(b)||(0,d.isHangingPromiseRejectionError)(b)||(0,h.isPrerenderInterruptedError)(b))throw b;b instanceof Error&&"cause"in b&&a(b.cause)}}});let d=a.r(13091),e=a.r(73808),f=a.r(49640),g=a.r(1567),h=a.r(60384),i=a.r(96556);("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},60968,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"unstable_rethrow",{enumerable:!0,get:function(){return d}});let d=a.r(94783).unstable_rethrow;("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},73727,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={ReadonlyURLSearchParams:function(){return f.ReadonlyURLSearchParams},RedirectType:function(){return h.RedirectType},forbidden:function(){return j.forbidden},notFound:function(){return i.notFound},permanentRedirect:function(){return g.permanentRedirect},redirect:function(){return g.redirect},unauthorized:function(){return k.unauthorized},unstable_isUnrecognizedActionError:function(){return m},unstable_rethrow:function(){return l.unstable_rethrow}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(20916),g=a.r(44868),h=a.r(28859),i=a.r(16155),j=a.r(34557),k=a.r(93845),l=a.r(60968);function m(){throw Object.defineProperty(Error("`unstable_isUnrecognizedActionError` can only be used on the client."),"__NEXT_ERROR_CODE",{value:"E776",enumerable:!1,configurable:!0})}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},19575,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/components/layout/Header.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/layout/Header.tsx <module evaluation>","default")},25244,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/components/layout/Header.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/layout/Header.tsx","default")},99508,a=>{"use strict";a.i(19575);var b=a.i(25244);a.n(b)},70617,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/components/layout/Footer.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/layout/Footer.tsx <module evaluation>","default")},43037,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/components/layout/Footer.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/layout/Footer.tsx","default")},44180,a=>{"use strict";a.i(70617);var b=a.i(43037);a.n(b)},64240,(a,b,c)=>{"use strict";function d(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(d=function(a){return a?c:b})(a)}c._=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=d(b);if(c&&c.has(a))return c.get(a);var e={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in a)if("default"!==g&&Object.prototype.hasOwnProperty.call(a,g)){var h=f?Object.getOwnPropertyDescriptor(a,g):null;h&&(h.get||h.set)?Object.defineProperty(e,g,h):e[g]=a[g]}return e.default=a,c&&c.set(a,e),e}},790,(a,b,c)=>{let{createClientModuleProxy:d}=a.r(11857);a.n(d("[project]/node_modules/next/dist/client/app-dir/link.js <module evaluation>"))},84707,(a,b,c)=>{let{createClientModuleProxy:d}=a.r(11857);a.n(d("[project]/node_modules/next/dist/client/app-dir/link.js"))},97647,a=>{"use strict";a.i(790);var b=a.i(84707);a.n(b)},95936,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return i},useLinkStatus:function(){return h.useLinkStatus}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(64240),g=a.r(7997),h=f._(a.r(97647));function i(a){let b=a.legacyBehavior,c="string"==typeof a.children||"number"==typeof a.children||"string"==typeof a.children?.type,d=a.children?.type?.$$typeof===Symbol.for("react.client.reference");return!b||c||d||(a.children?.type?.$$typeof===Symbol.for("react.lazy")?console.error("Using a Lazy Component as a direct child of `<Link legacyBehavior>` from a Server Component is not supported. If you need legacyBehavior, wrap your Lazy Component in a Client Component that renders the Link's `<a>` tag."):console.error("Using a Server Component as a direct child of `<Link legacyBehavior>` is not supported. If you need legacyBehavior, wrap your Server Component in a Client Component that renders the Link's `<a>` tag.")),(0,g.jsx)(h.default,{...a})}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},19027,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/app/resources/[id]/PrintButton.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/app/resources/[id]/PrintButton.tsx <module evaluation>","default")},15980,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/app/resources/[id]/PrintButton.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/app/resources/[id]/PrintButton.tsx","default")},36890,a=>{"use strict";a.i(19027);var b=a.i(15980);a.n(b)},50755,a=>{"use strict";var b=a.i(7997),c=a.i(73727);let d=[{id:1,slug:"ellis-county-voter-guide-2026",title:"Ellis County Voter Guide 2026",description:"Full breakdown of every race and proposition on the Ellis County ballot — candidates, positions, and what each measure means for your community.",type:"PDF",category:"Voter Information",audience:["Voters"],featured:!0,downloads:342,tags:["Ellis County","2026 Election","Ballot Guide"],content:`## What's on the Ballot

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

Texas requires photo ID to vote. Acceptable forms include: Texas Driver License, Texas ID Card, Texas Handgun License, U.S. Military ID, U.S. Passport, or Citizenship Certificate with photo. Expired IDs accepted if within 4 years of expiration.`},{id:2,slug:"texas-voter-registration-step-by-step",title:"Texas Voter Registration: Step-by-Step",description:"Deadlines, ID requirements, address changes, and how to check your registration status online — everything a first-time voter needs.",type:"Checklist",category:"Voter Information",audience:["Voters"],featured:!0,downloads:289,tags:["Registration","Texas","First-Time Voters"],content:`## Registration Deadlines

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
(972) 825-5195 | 109 S. Jackson St., Waxahachie, TX 75165`},{id:3,slug:"know-your-voter-rights-texas",title:"Know Your Voter Rights in Texas",description:"A plain-language summary of your legal rights at the polls: assistance provisions, ID rules, provisional ballots, and how to report problems.",type:"PDF",category:"Voter Information",audience:["Voters"],downloads:198,tags:["Voter Rights","Texas Law","Election Day"],content:`## Your Rights at the Polls

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

No acceptable ID? You may sign a **Reasonable Impediment Declaration** and cast a regular ballot using a supporting document (utility bill, bank statement, government document with name and address).`},{id:4,slug:"how-to-attend-county-commissioners-meeting",title:"How to Attend a County Commissioners Meeting",description:"Step-by-step guide to participating in local government — agenda access, public comment sign-up, decorum rules, and follow-up strategies.",type:"PDF",category:"Civic Engagement",audience:["Voters"],featured:!0,downloads:156,tags:["Local Government","Public Comment","Ellis County"],content:`## When & Where

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
| Pct. 4 | Check elliscounty.com | (972) 825-5000 |`},{id:5,slug:"open-records-request-template-texas-pia",title:"Open Records Request Template (Texas PIA)",description:"A ready-to-send FOIA/PIA letter you can customize to request government documents from any Texas agency or county office.",type:"Template",category:"Government Transparency",audience:["Voters"],downloads:134,tags:["FOIA","PIA","Open Records","Transparency"],content:`## About the Texas Public Information Act

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
- **Escalate if denied** — contact the Texas Attorney General's Open Records Division at (512) 478-6736.`},{id:6,slug:"evaluating-candidates-10-questions",title:"Evaluating Candidates: 10 Questions to Ask",description:"A nonpartisan framework for researching candidates — voting records, endorsements, funding sources, and consistency of public statements.",type:"Guide",category:"Voter Information",audience:["Voters"],downloads:211,tags:["Candidate Research","Nonpartisan","Due Diligence"],content:`## The 10 Questions

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
- **Vote411.org:** Candidate questionnaires (nonpartisan)`},{id:7,slug:"decoding-local-government-budget",title:"Decoding a Local Government Budget",description:"Learn how to read a county or city budget, identify spending priorities, and ask the right questions at budget hearings.",type:"Guide",category:"Government Transparency",audience:["Voters"],downloads:88,tags:["Budget","Local Government","Accountability"],content:`## Why Budgets Matter

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

Visit [elliscounty.com](https://elliscounty.com) → Departments → Auditor → Budget Documents. Adopted budgets are public record.`},{id:8,slug:"community-organizing-101",title:"Community Organizing 101",description:"Practical tactics for building coalitions, running effective meetings, amplifying constituent voices, and sustaining momentum between elections.",type:"Guide",category:"Civic Engagement",audience:["Voters"],downloads:103,tags:["Organizing","Coalition Building","Grassroots"],content:`## The Core Principles

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
- **Partner with Pivotal Voice** for strategic communications support.`},{id:9,slug:"texas-candidate-filing-checklist",title:"Texas Candidate Filing Checklist",description:"Every form, fee, deadline, and disclosure requirement for filing as a candidate in Texas — from county offices to state races.",type:"Checklist",category:"Candidate Toolkit",audience:["Candidates"],featured:!0,downloads:267,tags:["Filing","Texas SOS","Compliance","Deadlines"],content:`## 2026 Filing Deadlines

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
- **Ellis County Elections Office:** (972) 825-5195`},{id:10,slug:"campaign-messaging-framework",title:"Campaign Messaging Framework",description:"The Pivotal Voice blueprint for crafting a compelling campaign narrative: core message, contrast messaging, proof points, and audience segmentation.",type:"Guide",category:"Candidate Toolkit",audience:["Candidates"],featured:!0,downloads:312,tags:["Messaging","Narrative","Brand","PR Strategy"],content:`## The Pivotal Voice Messaging Architecture

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

*Need help building your message? Pivotal Voice offers full messaging strategy sessions. [Contact us.](https://pivotalvoice.org/services)*`},{id:11,slug:"90-day-campaign-launch-plan",title:"90-Day Campaign Launch Plan",description:"A week-by-week roadmap covering announcement strategy, coalition outreach, earned media, fundraising milestones, and digital presence.",type:"PDF",category:"Campaign Strategy",audience:["Candidates"],featured:!0,downloads:241,tags:["Launch","Campaign Plan","Timeline"],content:`## The 90-Day Framework

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
☐ 200+ doors knocked`},{id:12,slug:"press-release-template-pack",title:"Press Release Template Pack",description:"Five plug-and-play templates: campaign announcement, endorsement, policy position, event, and rapid response. Includes headline formulas and AP style guide.",type:"Template",category:"Media Relations",audience:["Candidates","All"],downloads:445,tags:["Press Release","Templates","Media","AP Style"],content:`## How to Use These Templates

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
- Always use AM/PM (7 p.m., not 7pm)`},{id:13,slug:"debate-preparation-workbook",title:"Debate Preparation Workbook",description:"A structured workbook for organizing policy positions, anticipating attacks, preparing rebuttals, and mastering the two-minute format.",type:"Guide",category:"Public Speaking",audience:["Candidates"],downloads:178,tags:["Debate","Prep","Policy","Rebuttal"],content:`## The Three Things Voters Remember

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
5. Restate your core message (25 seconds)`},{id:14,slug:"texas-campaign-finance-tec-compliance",title:"Texas Campaign Finance: TEC Compliance Guide",description:"Plain-language overview of Texas Ethics Commission rules — contribution limits, reporting schedules, and common violations to avoid.",type:"PDF",category:"Candidate Toolkit",audience:["Candidates"],downloads:199,tags:["TEC","Finance","Compliance","Texas Law"],content:`## The Golden Rule of Texas Campaign Finance

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
- **TEC Training Videos:** Available on their website, free`},{id:15,slug:"digital-campaign-playbook",title:"Digital Campaign Playbook",description:"Strategy for Facebook, Instagram, X, and NextDoor — organic content calendars, paid ad frameworks, and community engagement tactics for local races.",type:"Guide",category:"Campaign Strategy",audience:["Candidates"],downloads:326,tags:["Social Media","Digital","Advertising","Local Race"],content:`## Platform Strategy for Local Races

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
❌ Go dark for more than 3 days at a stretch`},{id:16,slug:"crisis-communications-rapid-response-playbook",title:"Crisis Communications Rapid Response Playbook",description:"Step-by-step protocol for the first 24 hours of a crisis: who speaks, what you say, when you say it, and how to protect your reputation long-term.",type:"PDF",category:"Crisis & Reputation",audience:["Candidates"],featured:!0,downloads:183,tags:["Crisis","Rapid Response","Reputation","PR"],content:`## The First 30 Minutes

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

*Facing a crisis now? Pivotal Voice offers 24/7 crisis communications support for campaigns. [Contact us immediately.](https://pivotalvoice.org/services)*`},{id:17,slug:"earned-media-strategy-local-candidates",title:"Earned Media Strategy for Local Candidates",description:"How to build relationships with local journalists, pitch stories, land op-eds, and maximize free coverage without a big ad budget.",type:"Guide",category:"Media Relations",audience:["Candidates"],downloads:259,tags:["Earned Media","Press","Local News","Outreach"],content:`## Why Earned Media Matters More in Local Races

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
| Final stretch | Debate coverage, GOTV story |`},{id:18,slug:"on-camera-interview-masterclass",title:"On-Camera Interview Masterclass",description:"Video series covering body language, bridging techniques, staying on message, and handling hostile questions in TV and video interviews.",type:"Video",category:"Public Speaking",audience:["Candidates","All"],downloads:89,tags:["Media Training","Video","On-Camera","Interview"],content:`## What This Series Covers

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

*Want live media coaching? Pivotal Voice offers one-on-one on-camera training sessions. [Book a session.](https://pivotalvoice.org/services)*`},{id:19,slug:"voter-contact-script-library",title:"Voter Contact Script Library",description:"Tested door-knock, phone bank, and text banking scripts for introduction calls, persuasion conversations, and GOTV final pushes.",type:"Template",category:"Campaign Strategy",audience:["Candidates"],downloads:374,tags:["GOTV","Door Knock","Phone Bank","Scripts"],content:`## How to Use These Scripts

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

> Today's the day! Polls close at 7 PM. If you're in line by 7, you have the right to vote. [CANDIDATE] is counting on you. 🗳️`},{id:20,slug:"public-speaking-masterclass",title:"Public Speaking Masterclass",description:"Video series on effective public speaking for local leaders — from town halls to televised forums.",type:"Video",category:"Public Speaking",audience:["Candidates","All"],downloads:142,tags:["Public Speaking","Presentation","Leadership"],content:`## About This Series

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

If you don't know the answer: *"That's an important question and I want to give you an accurate answer — let me follow up with you directly. Can I get your contact information after?"*`}];function e(a){return d.find(b=>b.slug===a)}var f=a.i(99508),g=a.i(44180),h=a.i(717),i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let j=(a,b)=>{let c=(0,h.forwardRef)(({color:c="currentColor",size:d=24,strokeWidth:e=2,absoluteStrokeWidth:f,className:g="",children:j,...k},l)=>(0,h.createElement)("svg",{ref:l,...i,width:d,height:d,stroke:c,strokeWidth:f?24*Number(e)/Number(d):e,className:["lucide",`lucide-${a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim()}`,g].join(" "),...k},[...b.map(([a,b])=>(0,h.createElement)(a,b)),...Array.isArray(j)?j:[j]]));return c.displayName=`${a}`,c},k=j("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),l=j("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]),m=j("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]),n=j("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),o=j("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]),p=j("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);var q=a.i(95936),r=a.i(36890);async function s(){return d.map(a=>({id:a.slug}))}async function t({params:a}){let{id:b}=await a,c=e(b);return c?{title:`${c.title} | Pivotal Voice Resource Library`,description:c.description}:{}}async function u({params:a}){var h;let{id:i}=await a,j=e(i);j||(0,c.notFound)();let s="Video"===(h=j.type)?l:"Checklist"===h?m:k,t=d.filter(a=>a.id!==j.id&&a.category===j.category).slice(0,3);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f.default,{}),(0,b.jsxs)("main",{className:"min-h-screen",children:[(0,b.jsxs)("section",{className:"relative bg-gradient-to-b from-navy via-navy to-navy-dark border-b border-gold/15 py-16 overflow-hidden",children:[(0,b.jsx)("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.06)_0%,_transparent_60%)]"}),(0,b.jsxs)("div",{className:"container-custom relative z-10",children:[(0,b.jsxs)(q.default,{href:"/resources",className:"inline-flex items-center gap-2 text-cream/50 hover:text-gold text-sm mb-8 transition-colors",children:[(0,b.jsx)(n,{className:"w-4 h-4"}),"Back to Resource Library"]}),(0,b.jsxs)("div",{className:"max-w-3xl",children:[(0,b.jsxs)("div",{className:"flex items-center gap-3 mb-4",children:[(0,b.jsx)("div",{className:"w-10 h-10 bg-gold/10 border border-gold/30 rounded-lg flex items-center justify-center",children:(0,b.jsx)(s,{className:"w-5 h-5 text-gold"})}),(0,b.jsx)("span",{className:"text-gold/70 text-xs font-medium uppercase tracking-widest",children:j.category})]}),(0,b.jsx)("h1",{className:"text-3xl md:text-4xl font-bold text-white font-display mb-4 leading-tight",children:j.title}),(0,b.jsx)("p",{className:"text-cream/60 text-base mb-6",children:j.description}),(0,b.jsx)("div",{className:"flex flex-wrap gap-2",children:j.tags.map(a=>(0,b.jsx)("span",{className:"text-xs bg-navy-dark/80 text-cream/50 px-3 py-1 rounded-full border border-gold/10",children:a},a))})]})]})]}),(0,b.jsx)("section",{className:"section",children:(0,b.jsx)("div",{className:"container-custom",children:(0,b.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-12",children:[(0,b.jsx)("div",{className:"lg:col-span-2",children:(0,b.jsx)("div",{className:"prose-custom",dangerouslySetInnerHTML:{__html:(a=>{let b=a.split("\n"),c="",d=!1,e=[],f=()=>{if(e.length>0){let[a,,...b]=e,f=a.split("|").filter(Boolean).map(a=>`<th class="px-4 py-2 text-left text-gold/80 text-sm font-semibold border-b border-gold/20">${a.trim()}</th>`).join(""),g=b.map(a=>`<tr>${a.split("|").filter(Boolean).map(a=>`<td class="px-4 py-2 text-cream/70 text-sm border-b border-gold/10">${a.trim()}</td>`).join("")}</tr>`).join("");c+=`<div class="overflow-x-auto my-6"><table class="w-full border border-gold/20 rounded-lg overflow-hidden"><thead><tr>${f}</tr></thead><tbody>${g}</tbody></table></div>`,e=[],d=!1}};for(let a of b){if(a.startsWith("|")){d=!0,e.push(a);continue}d&&f(),a.startsWith("## ")?c+=`<h2 class="text-xl font-bold text-white mt-10 mb-4 font-display">${a.slice(3)}</h2>`:a.startsWith("### ")?c+=`<h3 class="text-base font-semibold text-gold mt-6 mb-2">${a.slice(4)}</h3>`:a.startsWith("**")&&a.endsWith("**")&&!a.slice(2,-2).includes("**")?c+=`<p class="text-white font-semibold mt-4 mb-1">${a.slice(2,-2)}</p>`:a.startsWith("- ")||a.startsWith("☐ ")||a.startsWith("❌ ")||a.startsWith("✅ ")?c+=`<li class="text-cream/75 text-sm leading-relaxed mb-1 ml-4">${a.slice(2).replace(/\*\*(.*?)\*\*/g,'<strong class="text-white">$1</strong>')}</li>`:a.startsWith("1. ")||a.startsWith("2. ")||a.startsWith("3. ")||a.startsWith("4. ")||a.startsWith("5. ")?c+=`<li class="text-cream/75 text-sm leading-relaxed mb-1 ml-4 list-decimal">${a.slice(3).replace(/\*\*(.*?)\*\*/g,'<strong class="text-white">$1</strong>')}</li>`:a.startsWith("> ")?c+=`<blockquote class="border-l-4 border-gold/40 pl-4 my-4 italic text-cream/70 text-sm">${a.slice(2).replace(/\*\*(.*?)\*\*/g,'<strong class="text-white">$1</strong>')}</blockquote>`:"---"===a?c+='<hr class="border-gold/15 my-8" />':""===a.trim()?c+="<br/>":c+=`<p class="text-cream/75 text-sm leading-relaxed mb-3">${a.replace(/\*\*(.*?)\*\*/g,'<strong class="text-white">$1</strong>').replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" class="text-gold hover:text-gold/80 underline" target="_blank">$1</a>')}</p>`}return d&&f(),c})(j.content)}})}),(0,b.jsxs)("div",{className:"space-y-6",children:[(0,b.jsxs)("div",{className:"card border-gold/30",children:[(0,b.jsx)("div",{className:"w-10 h-10 bg-gold/10 border border-gold/20 rounded-lg flex items-center justify-center mb-4",children:(0,b.jsx)(o,{className:"w-5 h-5 text-gold"})}),(0,b.jsx)("h3",{className:"text-white font-semibold mb-2",children:"Save This Resource"}),(0,b.jsx)("p",{className:"text-cream/50 text-sm mb-4",children:"Print or save this page for reference. Use Ctrl+P (or ⌘+P) to print as PDF."}),(0,b.jsx)(r.default,{})]}),(0,b.jsxs)("div",{className:"card border-gold/20 bg-gold/5",children:[(0,b.jsx)("p",{className:"text-gold/70 text-xs font-medium uppercase tracking-wide mb-2",children:"Pivotal Voice"}),(0,b.jsx)("h3",{className:"text-white font-semibold mb-2",children:"Need Expert Help?"}),(0,b.jsx)("p",{className:"text-cream/60 text-sm mb-4",children:"Our communications professionals work directly with candidates and civic leaders across Ellis County."}),(0,b.jsx)("ul",{className:"space-y-2 mb-4",children:["Campaign messaging strategy","Media relations & press outreach","Crisis communications"].map(a=>(0,b.jsxs)("li",{className:"flex items-start gap-2 text-cream/70 text-xs",children:[(0,b.jsx)(p,{className:"w-3.5 h-3.5 text-gold mt-0.5 shrink-0"}),a]},a))}),(0,b.jsx)(q.default,{href:"/services",className:"btn-secondary text-sm w-full text-center block",children:"Explore Services"})]}),t.length>0&&(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"text-white font-semibold mb-4 text-sm uppercase tracking-wide",children:"Related Resources"}),(0,b.jsx)("div",{className:"space-y-3",children:t.map(a=>(0,b.jsxs)(q.default,{href:`/resources/${a.slug}`,className:"card block hover:border-gold/40 transition-colors group",children:[(0,b.jsx)("span",{className:"text-gold/60 text-xs uppercase tracking-wide",children:a.type}),(0,b.jsx)("p",{className:"text-white text-sm font-medium mt-1 group-hover:text-gold transition-colors leading-snug",children:a.title})]},a.id))})]})]})]})})})]}),(0,b.jsx)(g.default,{})]})}a.s(["default",()=>u,"generateMetadata",()=>t,"generateStaticParams",()=>s],50755)}];

//# sourceMappingURL=_41982c8c._.js.map