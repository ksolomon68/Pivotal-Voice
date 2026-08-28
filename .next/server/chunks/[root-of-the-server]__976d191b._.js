module.exports=[93695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},70406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},18622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},10044,e=>{"use strict";var t=e.i(47909),r=e.i(74017),o=e.i(96250),a=e.i(59756),n=e.i(61916),i=e.i(74677),s=e.i(69741),l=e.i(16795),d=e.i(87718),p=e.i(95169),c=e.i(47587),u=e.i(66012),f=e.i(70101),g=e.i(26937),x=e.i(10372),h=e.i(93695);e.i(52474);var m=e.i(5232),b=e.i(46245),v=e.i(89171);async function w(e){try{let{name:t,email:r,phone:o,subject:a,message:n,nomineeName:i,nomineeBio:s,nomineeContact:l}=await e.json();if(!t||!r||!a||!n)return v.NextResponse.json({error:"Missing required fields"},{status:400});if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r))return v.NextResponse.json({error:"Invalid email address"},{status:400});let d="Nominate someone to be on the show"===a;if(d&&(!i||!s))return v.NextResponse.json({error:"Missing required nominee fields"},{status:400});let p=process.env.RESEND_API_KEY;if(!p)return console.error("RESEND_API_KEY is not set"),v.NextResponse.json({error:"Email service not configured"},{status:500});let c=new b.Resend(p),u=`
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>${a}</title>
        </head>
        <body style="margin:0;padding:0;background:#0a0f1e;font-family:'Inter',Arial,sans-serif;color:#ffffff;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0f1e;padding:40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background:#0d1526;border:1px solid rgba(212,175,55,0.2);border-radius:12px;overflow:hidden;max-width:600px;width:100%;">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background:linear-gradient(135deg,#0a0f1e,#111827);padding:40px;border-bottom:1px solid rgba(212,175,55,0.15);">
                      <p style="margin:0 0 8px;color:#d4af37;font-size:11px;letter-spacing:3px;text-transform:uppercase;font-weight:600;">Pivotal Voice Contact Form</p>
                      <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;line-height:1.3;font-family:'Montserrat',Georgia,serif;">New Message Received</h1>
                    </td>
                  </tr>
                  
                  <!-- Body -->
                  <tr>
                    <td style="padding:36px 40px;color:rgba(245,235,210,0.85);font-size:15px;line-height:1.6;">
                      <p style="margin:0 0 24px;font-size:16px;">You have received a new submission from the website contact page.</p>
                      
                      <h2 style="color:#d4af37;font-size:16px;font-weight:600;margin:0 0 12px;border-bottom:1px solid rgba(212,175,55,0.1);padding-bottom:6px;">Sender Details</h2>
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;border-collapse:collapse;">
                        <tr>
                          <td style="padding:6px 0;font-weight:bold;color:#d4af37;width:120px;vertical-align:top;">Name:</td>
                          <td style="padding:6px 0;color:#ffffff;">${t}</td>
                        </tr>
                        <tr>
                          <td style="padding:6px 0;font-weight:bold;color:#d4af37;vertical-align:top;">Email:</td>
                          <td style="padding:6px 0;color:#ffffff;"><a href="mailto:${r}" style="color:#d4af37;text-decoration:none;">${r}</a></td>
                        </tr>
                        <tr>
                          <td style="padding:6px 0;font-weight:bold;color:#d4af37;vertical-align:top;">Phone:</td>
                          <td style="padding:6px 0;color:#ffffff;">${o||"Not provided"}</td>
                        </tr>
                        <tr>
                          <td style="padding:6px 0;font-weight:bold;color:#d4af37;vertical-align:top;">Subject:</td>
                          <td style="padding:6px 0;color:#ffffff;font-weight:600;">${a}</td>
                        </tr>
                      </table>

                      ${d?`
                      <h2 style="color:#d4af37;font-size:16px;font-weight:600;margin:28px 0 12px;border-bottom:1px solid rgba(212,175,55,0.1);padding-bottom:6px;">Show Nomination Details</h2>
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;border-collapse:collapse;">
                        <tr>
                          <td style="padding:6px 0;font-weight:bold;color:#d4af37;width:120px;vertical-align:top;">Nominee Name:</td>
                          <td style="padding:6px 0;color:#ffffff;font-weight:600;">${i}</td>
                        </tr>
                        <tr>
                          <td style="padding:6px 0;font-weight:bold;color:#d4af37;vertical-align:top;">Bio & Context:</td>
                          <td style="padding:6px 0;color:#ffffff;white-space:pre-wrap;">${s}</td>
                        </tr>
                        <tr>
                          <td style="padding:6px 0;font-weight:bold;color:#d4af37;vertical-align:top;">Nominee Contact:</td>
                          <td style="padding:6px 0;color:#ffffff;">${l||"Not provided"}</td>
                        </tr>
                      </table>
                      `:""}

                      <h2 style="color:#d4af37;font-size:16px;font-weight:600;margin:28px 0 12px;border-bottom:1px solid rgba(212,175,55,0.1);padding-bottom:6px;">
                        ${d?"Nomination Notes / Message":"Message Body"}
                      </h2>
                      <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.05);border-radius:8px;padding:16px;color:#ffffff;white-space:pre-wrap;margin-bottom:24px;">${n}</div>
            
                      <hr style="border:none;border-top:1px solid rgba(212,175,55,0.1);margin:30px 0 20px 0;">
                      <p style="margin:0;font-size:12px;color:rgba(245,235,210,0.4);text-align:center;">This is an automated notification from the Pivotal Voice website contact form.</p>
                    </td>
                  </tr>
            
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
        `,{error:f}=await c.emails.send({from:"Pivotal Voice Website <contact@pivotalvoice.org>",to:["info@pivotalvoice.org"],subject:`[Contact Form] ${a} - ${t}`,html:u,replyTo:r});if(f)return console.error("Failed to send contact email via Resend:",f),v.NextResponse.json({error:"Failed to send message",detail:f},{status:500});return v.NextResponse.json({success:!0})}catch(e){return console.error("Error handling contact submission:",e),v.NextResponse.json({error:"Internal Server Error"},{status:500})}}e.s(["POST",()=>w],91242);var y=e.i(91242);let R=new t.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/contact/route",pathname:"/api/contact",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/app/api/contact/route.ts",nextConfigOutput:"",userland:y}),{workAsyncStorage:E,workUnitAsyncStorage:N,serverHooks:C}=R;function A(){return(0,o.patchFetch)({workAsyncStorage:E,workUnitAsyncStorage:N})}async function P(e,t,o){R.isDev&&(0,a.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let b="/api/contact/route";b=b.replace(/\/index$/,"")||"/";let v=await R.prepare(e,t,{srcPage:b,multiZoneDraftMode:!1});if(!v)return t.statusCode=400,t.end("Bad Request"),null==o.waitUntil||o.waitUntil.call(o,Promise.resolve()),null;let{buildId:w,params:y,nextConfig:E,parsedUrl:N,isDraftMode:C,prerenderManifest:A,routerServerContext:P,isOnDemandRevalidate:T,revalidateOnlyGenerated:j,resolvedPathname:k,clientReferenceManifest:S,serverActionsManifest:$}=v,_=(0,s.normalizeAppPath)(b),O=!!(A.dynamicRoutes[_]||A.routes[k]),q=async()=>((null==P?void 0:P.render404)?await P.render404(e,t,N,!1):t.end("This page could not be found"),null);if(O&&!C){let e=!!A.routes[k],t=A.dynamicRoutes[_];if(t&&!1===t.fallback&&!e){if(E.experimental.adapterPath)return await q();throw new h.NoFallbackError}}let I=null;!O||R.isDev||C||(I="/index"===(I=k)?"/":I);let D=!0===R.isDev||!O,H=O&&!D;$&&S&&(0,i.setManifestsSingleton)({page:b,clientReferenceManifest:S,serverActionsManifest:$});let M=e.method||"GET",U=(0,n.getTracer)(),F=U.getActiveScopeSpan(),K={params:y,prerenderManifest:A,renderOpts:{experimental:{authInterrupts:!!E.experimental.authInterrupts},cacheComponents:!!E.cacheComponents,supportsDynamicResponse:D,incrementalCache:(0,a.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:E.cacheLife,waitUntil:o.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,o,a)=>R.onRequestError(e,t,o,a,P)},sharedContext:{buildId:w}},z=new l.NodeNextRequest(e),B=new l.NodeNextResponse(t),V=d.NextRequestAdapter.fromNodeNextRequest(z,(0,d.signalFromNodeResponse)(t));try{let i=async e=>R.handle(V,K).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=U.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==p.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let o=r.get("next.route");if(o){let t=`${M} ${o}`;e.setAttributes({"next.route":o,"http.route":o,"next.span_name":t}),e.updateName(t)}else e.updateName(`${M} ${b}`)}),s=!!(0,a.getRequestMeta)(e,"minimalMode"),l=async a=>{var n,l;let d=async({previousCacheEntry:r})=>{try{if(!s&&T&&j&&!r)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let n=await i(a);e.fetchMetrics=K.renderOpts.fetchMetrics;let l=K.renderOpts.pendingWaitUntil;l&&o.waitUntil&&(o.waitUntil(l),l=void 0);let d=K.renderOpts.collectedTags;if(!O)return await (0,u.sendResponse)(z,B,n,K.renderOpts.pendingWaitUntil),null;{let e=await n.blob(),t=(0,f.toNodeOutgoingHttpHeaders)(n.headers);d&&(t[x.NEXT_CACHE_TAGS_HEADER]=d),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==K.renderOpts.collectedRevalidate&&!(K.renderOpts.collectedRevalidate>=x.INFINITE_CACHE)&&K.renderOpts.collectedRevalidate,o=void 0===K.renderOpts.collectedExpire||K.renderOpts.collectedExpire>=x.INFINITE_CACHE?void 0:K.renderOpts.collectedExpire;return{value:{kind:m.CachedRouteKind.APP_ROUTE,status:n.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:o}}}}catch(t){throw(null==r?void 0:r.isStale)&&await R.onRequestError(e,t,{routerKind:"App Router",routePath:b,routeType:"route",revalidateReason:(0,c.getRevalidateReason)({isStaticGeneration:H,isOnDemandRevalidate:T})},!1,P),t}},p=await R.handleResponse({req:e,nextConfig:E,cacheKey:I,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:A,isRoutePPREnabled:!1,isOnDemandRevalidate:T,revalidateOnlyGenerated:j,responseGenerator:d,waitUntil:o.waitUntil,isMinimalMode:s});if(!O)return null;if((null==p||null==(n=p.value)?void 0:n.kind)!==m.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==p||null==(l=p.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});s||t.setHeader("x-nextjs-cache",T?"REVALIDATED":p.isMiss?"MISS":p.isStale?"STALE":"HIT"),C&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let h=(0,f.fromNodeOutgoingHttpHeaders)(p.value.headers);return s&&O||h.delete(x.NEXT_CACHE_TAGS_HEADER),!p.cacheControl||t.getHeader("Cache-Control")||h.get("Cache-Control")||h.set("Cache-Control",(0,g.getCacheControlHeader)(p.cacheControl)),await (0,u.sendResponse)(z,B,new Response(p.value.body,{headers:h,status:p.value.status||200})),null};F?await l(F):await U.withPropagatedContext(e.headers,()=>U.trace(p.BaseServerSpan.handleRequest,{spanName:`${M} ${b}`,kind:n.SpanKind.SERVER,attributes:{"http.method":M,"http.target":e.url}},l))}catch(t){if(t instanceof h.NoFallbackError||await R.onRequestError(e,t,{routerKind:"App Router",routePath:_,routeType:"route",revalidateReason:(0,c.getRevalidateReason)({isStaticGeneration:H,isOnDemandRevalidate:T})},!1,P),O)throw t;return await (0,u.sendResponse)(z,B,new Response(null,{status:500})),null}}e.s(["handler",()=>P,"patchFetch",()=>A,"routeModule",()=>R,"serverHooks",()=>C,"workAsyncStorage",()=>E,"workUnitAsyncStorage",()=>N],10044)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__976d191b._.js.map