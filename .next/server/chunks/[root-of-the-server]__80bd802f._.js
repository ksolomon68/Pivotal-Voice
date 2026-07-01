module.exports=[93695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},70406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},18622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},42486,e=>{"use strict";var t=e.i(47909),r=e.i(74017),a=e.i(96250),o=e.i(59756),n=e.i(61916),i=e.i(74677),s=e.i(69741),l=e.i(16795),d=e.i(87718),p=e.i(95169),c=e.i(47587),u=e.i(66012),g=e.i(70101),x=e.i(26937),h=e.i(10372),m=e.i(93695);e.i(52474);var f=e.i(5232),b=e.i(46245),y=e.i(89171);async function v(e){let{email:t,name:r,subscriberId:a}=await e.json();if(!t||!r||!a)return y.NextResponse.json({error:"Missing required fields"},{status:400});let o=process.env.RESEND_API_KEY;if(!o)return console.error("RESEND_API_KEY is not set"),y.NextResponse.json({error:"Email service not configured"},{status:500});let n=new b.Resend(o),i=`https://pivotalvoice.org/api/crm/unsubscribe?id=${a}`,s=r.split(" ")[0],{data:l,error:d}=await n.emails.send({from:"Pivotal Voice <newsletter@pivotalvoice.org>",to:[t],subject:"Welcome to Pivotal Voice — You're In!",headers:{"List-Unsubscribe":`<${i}>`,"List-Unsubscribe-Post":"List-Unsubscribe=One-Click"},html:`
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0a0f1e;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0f1e;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#0d1526;border:1px solid rgba(212,175,55,0.2);border-radius:12px;overflow:hidden;max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#0a0f1e,#111827);padding:40px 40px 32px;border-bottom:1px solid rgba(212,175,55,0.15);">
          <p style="margin:0 0 8px;color:#d4af37;font-size:11px;letter-spacing:3px;text-transform:uppercase;font-family:Arial,sans-serif;">Pivotal Voice</p>
          <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:700;line-height:1.3;">Welcome to the Community, ${s}!</h1>
        </td></tr>

        <!-- Body -->
        <tr><td style="padding:36px 40px;">
          <p style="color:rgba(245,235,210,0.85);font-size:16px;line-height:1.7;margin:0 0 20px;">
            You're now subscribed to Pivotal Voice — Ellis County's independent source for local news, civic updates, and community conversation.
          </p>

          <p style="color:rgba(245,235,210,0.75);font-size:15px;line-height:1.7;margin:0 0 28px;">
            Here's what you can expect in your inbox:
          </p>

          <table cellpadding="0" cellspacing="0" style="margin-bottom:28px;width:100%;">
            <tr>
              <td style="background:rgba(212,175,55,0.06);border:1px solid rgba(212,175,55,0.15);border-radius:8px;padding:16px 20px;margin-bottom:8px;">
                <p style="margin:0 0 6px;color:#d4af37;font-size:13px;font-weight:700;font-family:Arial,sans-serif;">📰 Local News &amp; Updates</p>
                <p style="margin:0;color:rgba(245,235,210,0.65);font-size:13px;line-height:1.5;">Coverage of Ellis County government, elections, and community issues that affect your daily life.</p>
              </td>
            </tr>
            <tr><td style="height:8px;"></td></tr>
            <tr>
              <td style="background:rgba(212,175,55,0.06);border:1px solid rgba(212,175,55,0.15);border-radius:8px;padding:16px 20px;">
                <p style="margin:0 0 6px;color:#d4af37;font-size:13px;font-weight:700;font-family:Arial,sans-serif;">🗳️ Civic Engagement</p>
                <p style="margin:0;color:rgba(245,235,210,0.65);font-size:13px;line-height:1.5;">Candidate information, voter resources, and tools to help you participate in local democracy.</p>
              </td>
            </tr>
            <tr><td style="height:8px;"></td></tr>
            <tr>
              <td style="background:rgba(212,175,55,0.06);border:1px solid rgba(212,175,55,0.15);border-radius:8px;padding:16px 20px;">
                <p style="margin:0 0 6px;color:#d4af37;font-size:13px;font-weight:700;font-family:Arial,sans-serif;">🤝 Community Forum</p>
                <p style="margin:0;color:rgba(245,235,210,0.65);font-size:13px;line-height:1.5;">Discussions with your neighbors on topics that matter — from growth and development to schools and safety.</p>
              </td>
            </tr>
          </table>

          <table cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
            <tr><td style="background:#d4af37;border-radius:8px;padding:14px 28px;">
              <a href="https://pivotalvoice.org" style="color:#0a0f1e;font-size:14px;font-weight:700;text-decoration:none;font-family:Arial,sans-serif;">
                Visit Pivotal Voice →
              </a>
            </td></tr>
          </table>

          <hr style="border:none;border-top:1px solid rgba(212,175,55,0.1);margin:0 0 24px;">

          <p style="color:rgba(245,235,210,0.55);font-size:13px;line-height:1.6;margin:0;">
            Have a story tip or community event to share? Reply to this email — we read everything.
          </p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#080d1a;padding:24px 40px;border-top:1px solid rgba(212,175,55,0.1);">
          <p style="margin:0;color:rgba(245,235,210,0.3);font-size:12px;font-family:Arial,sans-serif;line-height:1.7;">
            \xa9 ${new Date().getFullYear()} Pivotal Voice \xb7 Ellis County, Texas<br>
            You're receiving this because you subscribed at pivotalvoice.org.<br>
            <a href="${i}" style="color:rgba(212,175,55,0.5);text-decoration:none;">Unsubscribe</a>
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`});return d?(console.error("Welcome email send error:",d),y.NextResponse.json({error:"Failed to send email",detail:d},{status:500})):y.NextResponse.json({success:!0,id:l?.id})}e.s(["POST",()=>v],59082);var w=e.i(59082);let R=new t.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/crm/welcome-email/route",pathname:"/api/crm/welcome-email",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/app/api/crm/welcome-email/route.ts",nextConfigOutput:"",userland:w}),{workAsyncStorage:E,workUnitAsyncStorage:C,serverHooks:A}=R;function P(){return(0,a.patchFetch)({workAsyncStorage:E,workUnitAsyncStorage:C})}async function k(e,t,a){R.isDev&&(0,o.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let b="/api/crm/welcome-email/route";b=b.replace(/\/index$/,"")||"/";let y=await R.prepare(e,t,{srcPage:b,multiZoneDraftMode:!1});if(!y)return t.statusCode=400,t.end("Bad Request"),null==a.waitUntil||a.waitUntil.call(a,Promise.resolve()),null;let{buildId:v,params:w,nextConfig:E,parsedUrl:C,isDraftMode:A,prerenderManifest:P,routerServerContext:k,isOnDemandRevalidate:N,revalidateOnlyGenerated:T,resolvedPathname:O,clientReferenceManifest:_,serverActionsManifest:j}=y,S=(0,s.normalizeAppPath)(b),q=!!(P.dynamicRoutes[S]||P.routes[O]),U=async()=>((null==k?void 0:k.render404)?await k.render404(e,t,C,!1):t.end("This page could not be found"),null);if(q&&!A){let e=!!P.routes[O],t=P.dynamicRoutes[S];if(t&&!1===t.fallback&&!e){if(E.experimental.adapterPath)return await U();throw new m.NoFallbackError}}let H=null;!q||R.isDev||A||(H="/index"===(H=O)?"/":H);let D=!0===R.isDev||!q,I=q&&!D;j&&_&&(0,i.setManifestsSingleton)({page:b,clientReferenceManifest:_,serverActionsManifest:j});let z=e.method||"GET",$=(0,n.getTracer)(),M=$.getActiveScopeSpan(),F={params:w,prerenderManifest:P,renderOpts:{experimental:{authInterrupts:!!E.experimental.authInterrupts},cacheComponents:!!E.cacheComponents,supportsDynamicResponse:D,incrementalCache:(0,o.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:E.cacheLife,waitUntil:a.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,a,o)=>R.onRequestError(e,t,a,o,k)},sharedContext:{buildId:v}},K=new l.NodeNextRequest(e),V=new l.NodeNextResponse(t),L=d.NextRequestAdapter.fromNodeNextRequest(K,(0,d.signalFromNodeResponse)(t));try{let i=async e=>R.handle(L,F).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=$.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==p.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let a=r.get("next.route");if(a){let t=`${z} ${a}`;e.setAttributes({"next.route":a,"http.route":a,"next.span_name":t}),e.updateName(t)}else e.updateName(`${z} ${b}`)}),s=!!(0,o.getRequestMeta)(e,"minimalMode"),l=async o=>{var n,l;let d=async({previousCacheEntry:r})=>{try{if(!s&&N&&T&&!r)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let n=await i(o);e.fetchMetrics=F.renderOpts.fetchMetrics;let l=F.renderOpts.pendingWaitUntil;l&&a.waitUntil&&(a.waitUntil(l),l=void 0);let d=F.renderOpts.collectedTags;if(!q)return await (0,u.sendResponse)(K,V,n,F.renderOpts.pendingWaitUntil),null;{let e=await n.blob(),t=(0,g.toNodeOutgoingHttpHeaders)(n.headers);d&&(t[h.NEXT_CACHE_TAGS_HEADER]=d),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==F.renderOpts.collectedRevalidate&&!(F.renderOpts.collectedRevalidate>=h.INFINITE_CACHE)&&F.renderOpts.collectedRevalidate,a=void 0===F.renderOpts.collectedExpire||F.renderOpts.collectedExpire>=h.INFINITE_CACHE?void 0:F.renderOpts.collectedExpire;return{value:{kind:f.CachedRouteKind.APP_ROUTE,status:n.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:a}}}}catch(t){throw(null==r?void 0:r.isStale)&&await R.onRequestError(e,t,{routerKind:"App Router",routePath:b,routeType:"route",revalidateReason:(0,c.getRevalidateReason)({isStaticGeneration:I,isOnDemandRevalidate:N})},!1,k),t}},p=await R.handleResponse({req:e,nextConfig:E,cacheKey:H,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:P,isRoutePPREnabled:!1,isOnDemandRevalidate:N,revalidateOnlyGenerated:T,responseGenerator:d,waitUntil:a.waitUntil,isMinimalMode:s});if(!q)return null;if((null==p||null==(n=p.value)?void 0:n.kind)!==f.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==p||null==(l=p.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});s||t.setHeader("x-nextjs-cache",N?"REVALIDATED":p.isMiss?"MISS":p.isStale?"STALE":"HIT"),A&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let m=(0,g.fromNodeOutgoingHttpHeaders)(p.value.headers);return s&&q||m.delete(h.NEXT_CACHE_TAGS_HEADER),!p.cacheControl||t.getHeader("Cache-Control")||m.get("Cache-Control")||m.set("Cache-Control",(0,x.getCacheControlHeader)(p.cacheControl)),await (0,u.sendResponse)(K,V,new Response(p.value.body,{headers:m,status:p.value.status||200})),null};M?await l(M):await $.withPropagatedContext(e.headers,()=>$.trace(p.BaseServerSpan.handleRequest,{spanName:`${z} ${b}`,kind:n.SpanKind.SERVER,attributes:{"http.method":z,"http.target":e.url}},l))}catch(t){if(t instanceof m.NoFallbackError||await R.onRequestError(e,t,{routerKind:"App Router",routePath:S,routeType:"route",revalidateReason:(0,c.getRevalidateReason)({isStaticGeneration:I,isOnDemandRevalidate:N})},!1,k),q)throw t;return await (0,u.sendResponse)(K,V,new Response(null,{status:500})),null}}e.s(["handler",()=>k,"patchFetch",()=>P,"routeModule",()=>R,"serverHooks",()=>A,"workAsyncStorage",()=>E,"workUnitAsyncStorage",()=>C],42486)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__80bd802f._.js.map