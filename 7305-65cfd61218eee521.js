!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="bc6e27b7-eab4-4e58-8dbf-ab90892583fc",e._sentryDebugIdIdentifier="sentry-dbid-bc6e27b7-eab4-4e58-8dbf-ab90892583fc")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7305],{40919:function(e,t,n){n.d(t,{Pn:function(){return u},j1:function(){return d},xN:function(){return p}});var s=n(18255),i=n.n(s),a=n(7653),r=n(73763),o=n(58370),l=n(33264),c=n(38077);let u=(0,a.createContext)(void 0),d=()=>(0,a.useContext)(u),p=(e,t,n)=>{let s=!!n,u=(0,l.x)(e=>e.isEnterprise),{billingError:d}=(0,o.b1)(),p=(0,a.useMemo)(()=>{let t=[];for(let n=0;n<e.length;n++)(0,c.$q)(e[n])&&t.push({id:n,timestamp:e[n].timestampMs});return t},[e]),g=(0,a.useMemo)(()=>e.some(e=>(0,c.zt)(e)||(0,c.Az)(e)),[e]),m=(0,a.useMemo)(()=>e.some(e=>(0,c.$2)(e)),[e]),[h,f]=(0,a.useState)(-1),b=-1===h?e.length:p[h].id,v=(0,a.useMemo)(()=>e.slice(0,b),[e,b]),x=(0,c.Qo)(v),w=(0,a.useMemo)(()=>x.filter(e=>!!((0,c.yi)(e)||(0,c.Fs)(e)||(0,c.VT)(e)||(0,c.mX)(e)||(0,c.KJ)(e)||(0,c.h6)(e)||(0,c.J8)(e)||(0,c.$q)(e)||(0,c.Az)(e)||(0,c.H7)(e)||(0,c.dr)(e)&&"shell"!==e.app||(0,c.ho)(e)||(0,c.B1)(e)||(0,c.uc)(e)||(0,c.EH)(e)||(0,c.Bd)(e))),[x]),y=w.map(e=>({timestamp:e.timestampMs,loading:e.loading})),[_,j]=(0,a.useState)(-1),D=(0,a.useMemo)(()=>w.map(e=>({event:e,ts:new Date(e.timestamp).getTime()})),[w]),C=(0,a.useMemo)(()=>D.map(e=>e.ts),[D]),A=(0,a.useMemo)(()=>x.map(e=>({ts:new Date(e.timestamp).getTime(),event:e})),[x]),k=-1===_?C.at(-1):_,M=(0,r.Z)(k),I=(0,a.useMemo)(()=>A.findLastIndex(e=>e.ts<=k),[A,k]),T=function(e){let t=(0,a.useRef)(void 0);return(0,a.useEffect)(()=>{t.current=e},[e]),(0,a.useCallback)(function(){for(var e,n=arguments.length,s=Array(n),i=0;i<n;i++)s[i]=arguments[i];return null===(e=t.current)||void 0===e?void 0:e.call(t,...s)},[])}((e,t)=>{j(e)}),S=w.length>0,E={devinState:(0,a.useMemo)(()=>(function(e,t,n,s,a,r){var o;let l,u;let d=!1,p=n?e:[...e,...t],g=p.filter(c.SH),m=i().last(g),h=i().last(p.filter(c.G_)),f=i().last(p.filter(c.a8)),b=i().last(p.filter(e=>"devin_message"===e.type||"user_message"===e.type||"initial_user_message"===e.type)),v=i().last(p.filter(c.mX)),x=i().last(p.filter(c.XP)),w=i().last(p.filter(c.wj)),y=null!==(o=null==v?void 0:v.speed)&&void 0!==o?o:"normal",_=new Map,j="",D={planner:{app:"planner",contents:"",prevContents:""},browser:{app:"browser",isOpen:!1},shell:[],editor:[]},C=!1,A={plan:"",currentStep:""};e.forEach((e,t)=>{if((0,c.cv)(e))C=!0;else if((0,c.hM)(e))C=!1;else if((0,c.dr)(e)){if("planner"===e.app)D.planner={app:"planner",contents:e.plan,prevContents:D.planner.contents,next_steps_map:e.next_steps},j="planner";else if("browser"===e.app)j="browser",D.browser={app:"browser",isOpen:!0,loading:e.loading,url:e.url,screenshotImageUrl:e.screenshot_image_url,prevUrl:D.browser.url,prevScreenshotImageUrl:D.browser.screenshotImageUrl};else if("shell"===e.app||(0,c.r9)(e)){let n=D.shell.find(t=>t.id===e.shell_id);n&&(n.lastActive=t),j="shell"}}else if((0,c.Fs)(e)){let n=D.shell.find(t=>t.id===e.shell_id);n||(n={app:"shell",firstActive:t,lastActive:t,loading:e.loading,contents:"",prevContents:"",id:e.shell_id,rawContents:e.contents_raw||""},D.shell.push(n)),n.lastActive=t,n.loading=e.loading||n.loading,n.prevContents=n.contents,n.contents+=e.contents_raw||"",n.rawContents=e.contents_raw||"",j="shell"}else if((0,c.yi)(e)){let n=D.editor.find(t=>t.filename===e.file);n||(n={app:"editor",firstActive:t,lastActive:t,filename:e.file,loading:e.loading,contents:e.contents,prevContents:""},D.editor.push(n)),n.lastActive=t,n.loading=e.loading,n.prevContents=n.contents,n.contents=e.contents,j="editor"}else(0,c.ai)(e)?D.shell.length>1&&(D.shell=D.shell.filter(t=>t.id!==e.shell_id)):(0,c.pY)(e)?l=e:(0,c.uc)(e)?d=!0:(0,c.EH)(e)?d=!1:(0,c.qQ)(e)&&_.set(e.original_query_oid,null!=l?l:null);""===j&&(j="shell")});let k=(null==h?void 0:h.type)==="pause",M=p.filter(e=>(0,c.Hz)(e)||(0,c.KJ)(e)||(0,c.wZ)(e)||(0,c.kI)(e)||(0,c.h6)(e)||(0,c.VT)(e)||(0,c.G_)(e)||(0,c.tO)(e)||(0,c.ed)(e)||(0,c.qQ)(e)||(0,c.Fo)(e)||(0,c.wj)(e)),I=[],T={commands:[]};for(let t of e)if((0,c.r9)(t))T.commands.push({processId:t.process_id,command:t.command,shellName:t.shell_id,startingTimestampMs:t.timestampMs});else if((0,c.XD)(t)){let e=T.commands.find(e=>e.processId===t.process_id);e&&(e.endingTimestampMs=t.timestampMs,e.exitCode=t.exit_code,e.outputTrunc=t.output_trunc)}else(0,c.H7)(t)&&I.push(t);for(let e of t)(0,c.r9)(e)?T.commands.push({processId:e.process_id,command:e.command,shellName:e.shell_id,startingTimestampMs:e.timestampMs,isFuture:!0}):(0,c.H7)(e)&&I.push({...e,isFuture:!0});let S={},E=[];for(let n of[...e,...t])if((0,c.h6)(n))"updated_master_plan"===n.type||"user_update_master_plan"==n.type?A.plan=n.plan:"new_master_plan_step"===n.type&&(A.currentStep=n.step,u?S[n.event_id]=u:E.push(n.event_id));else if((0,c.pY)(n)&&(u=n,E.length>0)){for(let e of E)S[e]=u;E.length=0}return{status:function(){if(!s)return{message:"Devin rolled back to a previous checkpoint",shortMessage:"Devin rolled back to a previous checkpoint",enum:"rolledBack",isInputDisabled:!0};let n=(0,c.l5)(m,h),i="";switch(n){case"finished":if((null==h?void 0:h.type)==="stop")return{message:"Session ended by user",shortMessage:"Session ended",enum:"finished",isInputDisabled:!0};if(null==m?void 0:m.reason){let e=!1,t=!1,n="Devin is sleeping. Wake Devin up by sending a message";return(null==m?void 0:m.reason)==="out_of_credits"?"renew_subscription"===r?(n="Devin is sleeping. To wake Devin up, [manage your subscription](https://preview.devin.ai/settings/plans)",e=!0):"increase_limit"===r&&(n="Devin is sleeping. To wake Devin up, [purchase additional ACUs](https://preview.devin.ai/settings/plans)",e=!0):(null==m?void 0:m.reason)==="inactivity"?(n="Devin is sleeping due to inactivity. Wake Devin up by sending a message",e=!1):(null==m?void 0:m.reason)==="usage_limit_exceeded"&&(n="Devin is sleeping due to usage limits. Manage session usage limit or send a message to continue.",e=!1,t=!0),{message:n,shortMessage:n,enum:"finished",isInputDisabled:e,isAboveUserLimits:t}}return{message:(null==m?void 0:m.message)||"Session Ended",shortMessage:"Session ended.",enum:"finished",isInputDisabled:!0};case"paused":return h&&(i="reason"in h&&"inactivity"==h.reason?" due to inactivity":""),{message:"Devin is paused".concat(i,". Press play or message Devin to resume. If you don't resume, this Devin will go to sleep in ").concat(a?24:3," hours"),shortMessage:"Devin is paused".concat(i),enum:"paused",isInputDisabled:!1};case"queued":return{message:"Finding a machine for Devin ... Devin is waiting in the queue",shortMessage:"Devin is queued",enum:"queued",isInputDisabled:!0};case"waiting":if(h&&"initializing_with_rollback"==h.type)return{message:"Reloading Devin's memories ...",shortMessage:"Reloading Devin's memories ...",enum:"waiting",isInputDisabled:!0};return{message:"Devin is reverting to a previous checkpoint".concat(i),shortMessage:"Devin is reverting to a previous checkpoint",enum:"waiting",isInputDisabled:!0};case"resume_requested":return{message:"Devin is waking up. This may take up to 60 seconds.",shortMessage:"Devin is waking up",enum:"resume_requested",isInputDisabled:!0};case"suspend_requested":return{message:"Suspending Devin ".concat((null==m?void 0:m.reason)==="out_of_credits"?"because you're out of credits":(null==m?void 0:m.reason)==="inactivity"?"due to inactivity. Devin can be woken anytime":""),shortMessage:"Suspending Devin..",enum:"suspend_requested",isInputDisabled:!0};case"resumed":return{message:"Devin is up. Send a message to start working",shortMessage:"Devin is up",enum:"resumed",isInputDisabled:!1};case"initializing":if(C)return{message:"Devin is thinking...",shortMessage:"Devin is thinking...",enum:"initializing",isInputDisabled:!1};if(e.length||t.length)return{message:"You're in the queue for Devin",shortMessage:"You're in the queue for Devin",enum:"initializing",isInputDisabled:!0};return{message:"Loading history...",shortMessage:"Loading history...",enum:"initializing",isInputDisabled:!1};case"blocked":return{message:"Devin is awaiting your response. Type 'EXIT' to end the session. If you do not respond, Devin will go to sleep in ".concat(a?3:24," hours."),shortMessage:"Devin is awaiting your response",enum:"blocked",isInputDisabled:!1};default:if(m)return function(e){let t=e.message;switch(e.enum){case"working":t="Devin is working..";break;case"blocked":t="Devin is awaiting your response";break;default:t=e.message}return{message:e.message,shortMessage:t,enum:e.enum,isInputDisabled:!1}}(m);return{message:"Loading history...",shortMessage:"Loading history...",enum:"initializing",isInputDisabled:!1}}}(),allApplications:D,activeApp:j,lastTypingEvent:f,messageHistoryEvents:M,shellCommandHistory:T,isPaused:k,masterPlan:A,latestCheckpoint:l,stepCheckpointMap:S,workLogEvents:I,speed:y,lastMessageEvent:b,lastStatusUpdate:m,lastLoopEvent:h,lastPRCreatedEvent:x,humanModeEnabled:d,lastHumanModeUserResponseEvent:w,humanModeQueryOidToLastCheckpoint:_}})(x.slice(0,I+1),x.slice(I+1),s,-1===h,u,d),[x,I,s,h,u,d]),timelineState:{isScrubbingEnabled:S,isReplayMode:-1!==_,currentTimestamp:k,relevantTimestamps:C,getNextRelevantTimestamp:e=>{var t;return null!==(t=C.find(t=>t>e))&&void 0!==t?t:C[C.length-1]},relevantEvents:w,allEvents:x,isGoingForwards:!M||k>M,alternateTimelines:p,selectedTimelineIndex:h},timelineActions:{setTimestamp:T,exitReplayMode:()=>T(-1),selectAlternateTimeline:t=>{t!==h&&(-1===t?T(-1):T(e[p[t].id-1].timestampMs),f(t))}},bufferState:y,allEvents:x,loading:t,getEditorEventsByFile:async()=>{let e=x.filter(c.yi);return i().groupBy(e,e=>e.file)},features:{checkpointingFeatureEnabled:g,revivingFeatureEnabled:m}};return window.globalState=E,E}},73090:function(e,t,n){n.d(t,{E_:function(){return c},Ly:function(){return o},qx:function(){return l}});var s=n(2560),i=n(4652),a=n(23269),r=n(27886);function o(){let{orgId:e,isLoaded:t}=(0,i.aC)(),{isFetched:n}=(0,a.Pc)();return(0,s.a)({queryKey:["billingStatus",e],enabled:!!(t&&e&&n),queryFn:()=>(0,r.NH)(),refetchInterval:3e4})}function l(){let{orgId:e,isLoaded:t}=(0,i.aC)();return(0,s.a)({queryKey:["invoices",e],enabled:!!(t&&e),queryFn:()=>(0,r.sA)(),retry:!1})}function c(e){let{orgId:t,isLoaded:n}=(0,i.aC)();return(0,s.a)({queryKey:["billingUsage",t],enabled:!!(n&&t),queryFn:()=>(0,r.eU)(),retry:!1,refetchInterval:e})}},58370:function(e,t,n){n.d(t,{qI:function(){return b},Hd:function(){return p},vD:function(){return y},b1:function(){return d}});var s=n(27573),i=n(51070),a=n(99819),r=n(87659),o=n(7653),l=n(4652),c=n(33264),u=n(73090);let d=()=>{let{isSignedIn:e}=(0,l.aC)(),t=(0,c.x)(e=>e.setBillingError),n=(0,c.x)(e=>e.setBillingExperimentVersion),s=(0,c.x)(e=>e.setBillingMethod),i=(0,c.x)(e=>e.setHasSubscriptionOrCredits),a=(0,c.x)(e=>e.setIsSubscriptionValid),r=(0,c.x)(e=>e.setPlanUsesCredits),d=(0,c.x)(e=>e.setIsFetched),{data:p}=(0,u.Ly)(),g=(0,c.x)(e=>e.setIsEnterprise);(0,o.useEffect)(()=>{p&&(t(p.billing_error),n(p.billing_experiment_version),i(p.has_subscription_or_credits),s(p.billing_method),a(p.is_subscription_valid),r(p.plan_uses_credits),d(!0),g(p.is_enterprise))},[p,t,n,i,d,a,s,r,g]);let m=(0,c.x)(e=>e.billingError),h=(0,c.x)(e=>e.billingExperimentVersion),f=(0,c.x)(e=>e.hasSubscriptionOrCredits),b=(0,c.x)(e=>e.billingMethod),v=(0,c.x)(e=>e.isFetched),x=(0,c.x)(e=>e.isEnterprise);return{billingError:m,billingExperimentVersion:h,hasSubscriptionOrCredits:f,billingMethod:b,isFetched:v,isSubscriptionValid:(0,c.x)(e=>e.isSubscriptionValid),planUsesCredits:(0,c.x)(e=>e.planUsesCredits),isEnterprise:x,shouldRestrictFeatures:!!e&&!f}},p=e=>{let{children:t,side:n="top"}=e,{shouldRestrictFeatures:o,billingError:l}=d();return l?(0,s.jsx)(a.zt,{delayDuration:100,disableHoverableContent:!1,children:(0,s.jsxs)(a.fC,{defaultOpen:!1,children:[(0,s.jsx)(a.xz,{asChild:!0,children:t}),o&&(0,s.jsx)(a.h_,{children:(0,s.jsxs)(a.VY,{className:"tooltip-content dark:border-cloud text-blac z-50 max-w-64 border border-neutral-200 bg-white px-3 py-2 dark:bg-[#525252] dark:text-white",sideOffset:5,side:n,onPointerDownOutside:e=>{e.preventDefault()},align:"center",collisionPadding:10,children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h6",{className:"mb-1 text-base font-semibold text-black dark:text-white",children:(0,s.jsx)(g,{})}),(0,s.jsxs)(r.default,{href:"/settings/plans",className:"mt-1 flex items-center gap-1 text-sm font-medium text-[#6096FF]",children:["Learn more",(0,s.jsx)(i.o,{})]})]}),(0,s.jsx)(a.Eh,{className:"fill-white dark:fill-[#525252]"})]})})]})}):t},g=()=>{let{billingError:e,billingExperimentVersion:t}=d();return["20240806a","20240813a","20240813b","20240820a"].includes(t||"")&&"renew_subscription"===e?(0,s.jsx)(s.Fragment,{children:"Subscribe to continue using Devin"}):"renew_subscription"===e?(0,s.jsx)(s.Fragment,{children:"Subscribe to use Devin"}):(0,s.jsx)(s.Fragment,{children:"Purchase additional ACUs"})};var m=n(67754),h=n(21138),f=n(53358);let b=()=>{let e=(0,m.useRouter)(),{isFetched:t,shouldRestrictFeatures:n,billingError:a}=d(),r=(0,c.x)(e=>e.modalOpen),l=(0,c.x)(e=>e.setModalOpen),u=(0,o.useCallback)(()=>{l(!1),e.push("/settings/plans")},[e,l]);if((0,o.useEffect)(()=>{t&&n?l(!0):t&&!n&&l(!1)},[t,n,l]),a)return(0,s.jsx)(h.Vq,{open:r,onOpenChange:()=>l(!1),children:(0,s.jsxs)(h.cZ,{className:"outline-none sm:max-w-[525px]",children:[(0,s.jsx)(h.fK,{children:(0,s.jsx)(h.$N,{className:"text-md mb-1 tracking-tight text-[#4f88fb]",children:(0,s.jsx)(v,{})})}),(0,s.jsx)(x,{}),(0,s.jsx)("div",{className:"flex justify-end",children:"renew_subscription"===a?(0,s.jsx)(f.z,{theme:"primary",defaultTitle:(0,s.jsxs)(s.Fragment,{children:["Explore plans ",(0,s.jsx)(i.o,{className:"ml-2"})]}),onClick:u,size:"sm"}):(0,s.jsx)(f.z,{theme:"primary",defaultTitle:"Manage subscription",onClick:u,size:"sm"})})]})})},v=()=>{let{billingError:e,billingExperimentVersion:t}=d();return["20240806a","20240813a","20240813b","20240820a"].includes(t||"")&&"renew_subscription"===e?(0,s.jsx)(s.Fragment,{children:"Subscribe to continue using Devin"}):"renew_subscription"===e?(0,s.jsx)(s.Fragment,{children:"Subscribe to use Devin"}):(0,s.jsx)(s.Fragment,{children:"Increase your usage limit"})},x=()=>{let{billingError:e,billingExperimentVersion:t}=d();return["20240806a","20240813a","20240813b","20240820a"].includes(t||"")&&"renew_subscription"===e?(0,s.jsx)("div",{className:"text-sm",children:"You have reached the end of your free trial. Subscribe to continue your Devin sessions!"}):"renew_subscription"===e?(0,s.jsxs)("div",{className:"text-sm",children:["Devin is the first AI software engineer, designed to be a collaborative teammate capable of assisting with coding tasks."," ",(0,s.jsx)("a",{href:"https://docs.devin.ai/",target:"_blank",rel:"noopener noreferrer",className:"underline",children:"Learn more about Devin here"})," ","and subscribe to get started!"]}):(0,s.jsx)("div",{className:"text-sm",children:"You have exhausted your ACUs for the month. Increase your balance to continue using Devin."})};var w=n(23269);let y=()=>{let[e,t]=(0,o.useState)(!1),{isFetched:n,shouldRestrictFeatures:i,isSubscriptionValid:a,billingExperimentVersion:l}=d(),c=(0,o.useCallback)(()=>{t(!1)},[t]),u=(0,w.DA)(),{data:p,isFetched:g}=(0,w.Pc)();return(0,o.useEffect)(()=>{e&&u.mutate({seen_discord_action:!0})},[e,u]),(0,o.useEffect)(()=>{n&&a&&!i&&g&&!(null==p?void 0:p.seen_discord_action)&&l&&t(!0)},[n,i,t,a,l,g,null==p?void 0:p.seen_discord_action]),(0,s.jsx)(h.Vq,{open:e,onOpenChange:()=>t(!1),children:(0,s.jsxs)(h.cZ,{className:"outline-none sm:max-w-[525px]",children:[(0,s.jsx)(h.fK,{children:(0,s.jsx)(h.$N,{className:"text-md mb-1 tracking-tight text-[#4f88fb]",children:"Welcome to Devin!"})}),(0,s.jsx)("div",{className:"text-sm",children:"As a Devin Experimental Access user, you invited to join our dedicated Discord server where you can connect with a collaborative community of early adopters."}),(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)(r.default,{href:"https://discord.gg/bwMnQxBT",className:"text-input-dark group-enabled:active:text-cloud group-enabled:hover:text-cloud group flex items-center justify-center space-x-2 rounded-md px-3 py-2 text-sm font-medium shadow-[inset_0_0_0_2px_currentColor] shadow-current transition disabled:cursor-not-allowed disabled:opacity-70 dark:text-white dark:group-enabled:hover:text-[#fcfcfc] dark:group-enabled:active:text-[#fcfcfc]",target:"_blank",children:"Join our Discord community"})}),(0,s.jsx)("div",{className:"flex justify-end",children:(0,s.jsx)(f.z,{theme:"primary",defaultTitle:"Get started",onClick:c})})]})})}},27886:function(e,t,n){n.d(t,{Cl:function(){return i},J6:function(){return l},NH:function(){return a},QW:function(){return g},eU:function(){return d},mq:function(){return c},pI:function(){return p},qY:function(){return r},sA:function(){return u},u3:function(){return o}});var s=n(29484);let i=async e=>{let t=await s.L.post("billing/checkout",{json:{plan_id:e}}).json();window.location.href=t.url},a=async()=>await s.L.get("billing/status").json(),r=async()=>await s.L.get("billing/plans").json(),o=async()=>await s.L.get("billing/subscription").json(),l=async()=>{let e=await s.L.get("billing/subscription/manage").json();window.location.href=e.url},c=async(e,t)=>{let n=await s.L.post("billing/purchase",{json:{count:e,plan_slug:t}}).json();window.location.href=n.url},u=async()=>await s.L.get("billing/invoices").json(),d=async()=>await s.L.get("billing/usage").json(),p=async()=>await s.L.get("billing/usage/limits").json(),g=async e=>await s.L.post("billing/usage/limits",{json:{max_credits:e}})},33264:function(e,t,n){n.d(t,{x:function(){return s}});let s=(0,n(66641).Ue)(e=>({modalOpen:!1,setModalOpen:t=>{e(e=>({...e,modalOpen:t}))},billingMethod:void 0,setBillingMethod:t=>{e(e=>({...e,billingMethod:t}))},isEnterprise:!1,setIsEnterprise:t=>{e(e=>({...e,isEnterprise:t}))},hasSetNewSessionUsageLimit:!1,setHasSetNewSessionUsageLimit:t=>{e(e=>({...e,hasSetNewSessionUsageLimit:t}))},isFetched:!1,setIsFetched:t=>{e(e=>({...e,isFetched:t}))},hasSubscriptionOrCredits:!1,setHasSubscriptionOrCredits:t=>{e(e=>({...e,hasSubscriptionOrCredits:t}))},isSubscriptionValid:!1,setIsSubscriptionValid:t=>{e(e=>({...e,isSubscriptionValid:t}))},billingError:void 0,setBillingError:t=>{e(e=>({...e,billingError:t}))},billingExperimentVersion:void 0,setBillingExperimentVersion:t=>{e(e=>({...e,billingExperimentVersion:t}))},planUsesCredits:!1,setPlanUsesCredits:t=>{e(e=>({...e,planUsesCredits:t}))}}))},3830:function(e,t,n){n.d(t,{D7:function(){return m},DA:function(){return C},H7:function(){return y},J1:function(){return f},JU:function(){return w},Ot:function(){return h},Q6:function(){return p},_Z:function(){return x},cp:function(){return D},ey:function(){return o},g4:function(){return g},i6:function(){return l},is:function(){return v},lF:function(){return r},nm:function(){return _},qb:function(){return u},ug:function(){return c},vl:function(){return d},x3:function(){return b},y3:function(){return j}});var s=n(5565),i=n(66641),a=n(13415);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};let r=globalThis.jotaiAtomCache.get("/vercel/path0/apps/webapp/src/state/general.ts/uploadModalOpenAtom",(0,s.cn)(!1)),o=globalThis.jotaiAtomCache.get("/vercel/path0/apps/webapp/src/state/general.ts/uploadModalPlaybookModeAtom",(0,s.cn)(!1)),l=globalThis.jotaiAtomCache.get("/vercel/path0/apps/webapp/src/state/general.ts/multiDevinModalOpenAtom",(0,s.cn)(!1)),c=globalThis.jotaiAtomCache.get("/vercel/path0/apps/webapp/src/state/general.ts/devinTypeAtom",(0,s.cn)(a.n.DEVIN)),u=globalThis.jotaiAtomCache.get("/vercel/path0/apps/webapp/src/state/general.ts/saveShortcutModalOpenAtom",(0,s.cn)(!1)),d=globalThis.jotaiAtomCache.get("/vercel/path0/apps/webapp/src/state/general.ts/sessionTitleAtom",(0,s.cn)("")),p=(0,i.Ue)(e=>({selections:[],addSelection:t=>e(e=>({selections:-1===e.selections.findIndex(e=>e.file===t.file&&e.range.startLine===t.range.startLine&&e.range.endLine===t.range.endLine)?[...e.selections,t]:e.selections})),removeSelection:t=>e(e=>({selections:e.selections.filter(e=>e!=t)})),clear:()=>e(()=>({selections:[]}))})),g=globalThis.jotaiAtomCache.get("/vercel/path0/apps/webapp/src/state/general.ts/diffViewerOpenAtom",(0,s.cn)(!1)),m=globalThis.jotaiAtomCache.get("/vercel/path0/apps/webapp/src/state/general.ts/isCodeEditorInDiffModeAtom",(0,s.cn)(!1)),h=globalThis.jotaiAtomCache.get("/vercel/path0/apps/webapp/src/state/general.ts/isCodeEditorExpandedAtom",(0,s.cn)(!1)),f=globalThis.jotaiAtomCache.get("/vercel/path0/apps/webapp/src/state/general.ts/isInteractiveBrowserActiveAtom",(0,s.cn)(!1)),b=globalThis.jotaiAtomCache.get("/vercel/path0/apps/webapp/src/state/general.ts/workLogOpenAtom",(0,s.cn)(!1)),v=globalThis.jotaiAtomCache.get("/vercel/path0/apps/webapp/src/state/general.ts/pinnedAppAtom",(0,s.cn)(null)),x=globalThis.jotaiAtomCache.get("/vercel/path0/apps/webapp/src/state/general.ts/selectedOrchestratorAtom",(0,s.cn)({value:"None",label:"None"})),w=globalThis.jotaiAtomCache.get("/vercel/path0/apps/webapp/src/state/general.ts/selectedConfirmationCriteriaIdAtom",(0,s.cn)(null)),y=globalThis.jotaiAtomCache.get("/vercel/path0/apps/webapp/src/state/general.ts/didLoadHomeAtom",(0,s.cn)(!1)),_=globalThis.jotaiAtomCache.get("/vercel/path0/apps/webapp/src/state/general.ts/showShareModalAtom",(0,s.cn)(!1)),j=globalThis.jotaiAtomCache.get("/vercel/path0/apps/webapp/src/state/general.ts/showEvaluationFormAtom",(0,s.cn)(!1)),D=globalThis.jotaiAtomCache.get("/vercel/path0/apps/webapp/src/state/general.ts/showSpeedControlsAtom",(0,s.cn)(!1)),C=globalThis.jotaiAtomCache.get("/vercel/path0/apps/webapp/src/state/general.ts/spendingLimitsModalAtom",(0,s.cn)(!1))},87879:function(e,t,n){n.d(t,{$Z:function(){return d},Bf:function(){return g},K7:function(){return f},Oh:function(){return m},UE:function(){return h},_Z:function(){return l},cJ:function(){return u},gP:function(){return p},nm:function(){return r},tw:function(){return c}});var s=n(2560),i=n(4652),a=n(29484);function r(){let{orgId:e,isLoaded:t}=(0,i.aC)();return(0,s.a)({queryKey:["feature-flags",e],queryFn:()=>a.L.get("flags").json(),refetchInterval:3e4,enabled:!!(e&&t)})}function o(e){var t;return!!(null===(t=r().data)||void 0===t?void 0:t[e])}let l=()=>o("cognition-debug"),c=()=>o("experimental.revive"),u=()=>o("experimental.multidevin"),d=()=>o("experimental.devin-zero"),p=()=>o("experimental.sparkops"),g=()=>o("experimental.unity-catalog"),m=()=>o("customer-flag"),h=()=>o("force-single-org"),f=()=>o("human-mode")}}]);