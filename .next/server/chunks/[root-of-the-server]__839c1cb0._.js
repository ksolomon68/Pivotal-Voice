module.exports=[93695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},70406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},18622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},67294,e=>{"use strict";var t=e.i(47909),r=e.i(74017),a=e.i(96250),n=e.i(59756),o=e.i(61916),i=e.i(74677),s=e.i(69741),l=e.i(16795),d=e.i(87718),p=e.i(95169),c=e.i(47587),u=e.i(66012),g=e.i(70101),x=e.i(26937),h=e.i(10372),f=e.i(93695);e.i(52474);var m=e.i(5232),y=e.i(46245),b=e.i(89171);async function v(e){let{email:t,resourceTitle:r,resourceCategory:a,resourceType:n,resourceSlug:o}=await e.json();if(!t||!r)return b.NextResponse.json({error:"Missing required fields"},{status:400});let i=process.env.RESEND_API_KEY;if(!i)return console.error("RESEND_API_KEY is not set"),b.NextResponse.json({error:"Email service not configured"},{status:500});let s=new y.Resend(i),l="Video"===n,{data:d,error:p}=await s.emails.send({from:"Pivotal Voice <resources@pivotalvoice.org>",to:[t],subject:`Your Resource: ${r}`,html:`
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
          <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:700;line-height:1.3;">Your Resource is Ready</h1>
        </td></tr>

        <!-- Body -->
        <tr><td style="padding:36px 40px;">
          <div style="background:rgba(212,175,55,0.06);border:1px solid rgba(212,175,55,0.2);border-radius:8px;padding:20px 24px;margin-bottom:28px;">
            <p style="margin:0 0 4px;color:rgba(212,175,55,0.7);font-size:11px;letter-spacing:2px;text-transform:uppercase;font-family:Arial,sans-serif;">${a}</p>
            <p style="margin:0;color:#ffffff;font-size:18px;font-weight:600;">${r}</p>
          </div>

          <p style="color:rgba(245,235,210,0.75);font-size:15px;line-height:1.7;margin:0 0 24px;">
            Thank you for accessing the Pivotal Voice Resource Library. ${l?"Your video resource is linked below.":"Your resource is attached to this email."} We hope it helps you ${a.includes("Candidate")||a.includes("Campaign")?"on the campaign trail":"engage with your community"}.
          </p>

          <table cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
            <tr><td style="background:#d4af37;border-radius:8px;padding:14px 28px;">
              <a href="https://pivotalvoice.org/resources/${o||"library"}" style="color:#0a0f1e;font-size:14px;font-weight:700;text-decoration:none;font-family:Arial,sans-serif;">
                ${l?"▶ Watch Resource":"⬇ Download Resource"}
              </a>
            </td></tr>
          </table>

          <hr style="border:none;border-top:1px solid rgba(212,175,55,0.1);margin:0 0 28px;">

          <p style="color:rgba(245,235,210,0.5);font-size:13px;line-height:1.6;margin:0 0 8px;">
            <strong style="color:rgba(245,235,210,0.8);">Need personalized help?</strong> Pivotal Voice works directly with candidates and civic leaders across Ellis County — from campaign messaging to media relations and crisis communications.
          </p>
          <p style="margin:0;">
            <a href="https://pivotalvoice.org/services" style="color:#d4af37;font-size:13px;text-decoration:none;">Explore our services →</a>
          </p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#080d1a;padding:24px 40px;border-top:1px solid rgba(212,175,55,0.1);">
          <p style="margin:0;color:rgba(245,235,210,0.3);font-size:12px;font-family:Arial,sans-serif;line-height:1.6;">
            \xa9 ${new Date().getFullYear()} Pivotal Voice \xb7 Ellis County, Texas<br>
            You received this because you requested a resource from our library.<br>
            <a href="#" style="color:rgba(212,175,55,0.5);text-decoration:none;">Unsubscribe</a>
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`});return(console.log("Resend response — data:",JSON.stringify(d),"error:",JSON.stringify(p)),p)?b.NextResponse.json({error:"Failed to send email",detail:p},{status:500}):b.NextResponse.json({success:!0,id:d?.id})}e.s(["POST",()=>v],73384);var R=e.i(73384);let w=new t.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/send-resource/route",pathname:"/api/send-resource",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/app/api/send-resource/route.ts",nextConfigOutput:"",userland:R}),{workAsyncStorage:E,workUnitAsyncStorage:C,serverHooks:A}=w;function N(){return(0,a.patchFetch)({workAsyncStorage:E,workUnitAsyncStorage:C})}async function P(e,t,a){w.isDev&&(0,n.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let y="/api/send-resource/route";y=y.replace(/\/index$/,"")||"/";let b=await w.prepare(e,t,{srcPage:y,multiZoneDraftMode:!1});if(!b)return t.statusCode=400,t.end("Bad Request"),null==a.waitUntil||a.waitUntil.call(a,Promise.resolve()),null;let{buildId:v,params:R,nextConfig:E,parsedUrl:C,isDraftMode:A,prerenderManifest:N,routerServerContext:P,isOnDemandRevalidate:k,revalidateOnlyGenerated:T,resolvedPathname:O,clientReferenceManifest:S,serverActionsManifest:_}=b,j=(0,s.normalizeAppPath)(y),q=!!(N.dynamicRoutes[j]||N.routes[O]),D=async()=>((null==P?void 0:P.render404)?await P.render404(e,t,C,!1):t.end("This page could not be found"),null);if(q&&!A){let e=!!N.routes[O],t=N.dynamicRoutes[j];if(t&&!1===t.fallback&&!e){if(E.experimental.adapterPath)return await D();throw new f.NoFallbackError}}let H=null;!q||w.isDev||A||(H="/index"===(H=O)?"/":H);let I=!0===w.isDev||!q,U=q&&!I;_&&S&&(0,i.setManifestsSingleton)({page:y,clientReferenceManifest:S,serverActionsManifest:_});let $=e.method||"GET",M=(0,o.getTracer)(),z=M.getActiveScopeSpan(),F={params:R,prerenderManifest:N,renderOpts:{experimental:{authInterrupts:!!E.experimental.authInterrupts},cacheComponents:!!E.cacheComponents,supportsDynamicResponse:I,incrementalCache:(0,n.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:E.cacheLife,waitUntil:a.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,a,n)=>w.onRequestError(e,t,a,n,P)},sharedContext:{buildId:v}},K=new l.NodeNextRequest(e),V=new l.NodeNextResponse(t),Y=d.NextRequestAdapter.fromNodeNextRequest(K,(0,d.signalFromNodeResponse)(t));try{let i=async e=>w.handle(Y,F).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=M.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==p.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let a=r.get("next.route");if(a){let t=`${$} ${a}`;e.setAttributes({"next.route":a,"http.route":a,"next.span_name":t}),e.updateName(t)}else e.updateName(`${$} ${y}`)}),s=!!(0,n.getRequestMeta)(e,"minimalMode"),l=async n=>{var o,l;let d=async({previousCacheEntry:r})=>{try{if(!s&&k&&T&&!r)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let o=await i(n);e.fetchMetrics=F.renderOpts.fetchMetrics;let l=F.renderOpts.pendingWaitUntil;l&&a.waitUntil&&(a.waitUntil(l),l=void 0);let d=F.renderOpts.collectedTags;if(!q)return await (0,u.sendResponse)(K,V,o,F.renderOpts.pendingWaitUntil),null;{let e=await o.blob(),t=(0,g.toNodeOutgoingHttpHeaders)(o.headers);d&&(t[h.NEXT_CACHE_TAGS_HEADER]=d),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==F.renderOpts.collectedRevalidate&&!(F.renderOpts.collectedRevalidate>=h.INFINITE_CACHE)&&F.renderOpts.collectedRevalidate,a=void 0===F.renderOpts.collectedExpire||F.renderOpts.collectedExpire>=h.INFINITE_CACHE?void 0:F.renderOpts.collectedExpire;return{value:{kind:m.CachedRouteKind.APP_ROUTE,status:o.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:a}}}}catch(t){throw(null==r?void 0:r.isStale)&&await w.onRequestError(e,t,{routerKind:"App Router",routePath:y,routeType:"route",revalidateReason:(0,c.getRevalidateReason)({isStaticGeneration:U,isOnDemandRevalidate:k})},!1,P),t}},p=await w.handleResponse({req:e,nextConfig:E,cacheKey:H,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:N,isRoutePPREnabled:!1,isOnDemandRevalidate:k,revalidateOnlyGenerated:T,responseGenerator:d,waitUntil:a.waitUntil,isMinimalMode:s});if(!q)return null;if((null==p||null==(o=p.value)?void 0:o.kind)!==m.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==p||null==(l=p.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});s||t.setHeader("x-nextjs-cache",k?"REVALIDATED":p.isMiss?"MISS":p.isStale?"STALE":"HIT"),A&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let f=(0,g.fromNodeOutgoingHttpHeaders)(p.value.headers);return s&&q||f.delete(h.NEXT_CACHE_TAGS_HEADER),!p.cacheControl||t.getHeader("Cache-Control")||f.get("Cache-Control")||f.set("Cache-Control",(0,x.getCacheControlHeader)(p.cacheControl)),await (0,u.sendResponse)(K,V,new Response(p.value.body,{headers:f,status:p.value.status||200})),null};z?await l(z):await M.withPropagatedContext(e.headers,()=>M.trace(p.BaseServerSpan.handleRequest,{spanName:`${$} ${y}`,kind:o.SpanKind.SERVER,attributes:{"http.method":$,"http.target":e.url}},l))}catch(t){if(t instanceof f.NoFallbackError||await w.onRequestError(e,t,{routerKind:"App Router",routePath:j,routeType:"route",revalidateReason:(0,c.getRevalidateReason)({isStaticGeneration:U,isOnDemandRevalidate:k})},!1,P),q)throw t;return await (0,u.sendResponse)(K,V,new Response(null,{status:500})),null}}e.s(["handler",()=>P,"patchFetch",()=>N,"routeModule",()=>w,"serverHooks",()=>A,"workAsyncStorage",()=>E,"workUnitAsyncStorage",()=>C],67294)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__839c1cb0._.js.map