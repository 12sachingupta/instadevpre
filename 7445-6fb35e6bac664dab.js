!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="d9eb7ecc-d7a5-474c-a000-ff2dbb18b18b",e._sentryDebugIdIdentifier="sentry-dbid-d9eb7ecc-d7a5-474c-a000-ff2dbb18b18b")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7445],{52111:function(e,t,n){n.d(t,{b:function(){return s}});var a=n(27573),r=n(57908);let s=e=>{let{children:t,status:n,className:s}=e;return(0,a.jsx)("div",{className:(0,r.Z)("mb-2 rounded p-2 text-center text-sm font-medium","error"===n&&"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300","success"===n&&"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300","warning"===n&&"bg-yellow-100 text-yellow-800","info"===n&&"bg-sky-light text-[rgb(12,84,96)]",s),children:t})}},45660:function(e,t,n){n.d(t,{r:function(){return o}});var a=n(27573),r=n(24169),s=n(7653),i=n(94873);let o=s.forwardRef((e,t)=>{let{className:n,disabled:s,...o}=e;return(0,a.jsx)(r.fC,{className:(0,i.cn)("focus-visible:ring-ring focus-visible:ring-offset-background data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:shadow-extra-night data-[state=checked]:bg-pacific inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:data-[state=unchecked]:bg-slate-600",n),...o,ref:t,disabled:s,children:(0,a.jsx)(r.bU,{className:(0,i.cn)("bg-background pointer-events-none block h-4 w-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0")})})});o.displayName=r.fC.displayName},21138:function(e,t,n){n.d(t,{$N:function(){return m},Be:function(){return g},PK:function(){return l},Vq:function(){return c},cN:function(){return p},cZ:function(){return f},fK:function(){return y},hg:function(){return u}});var a=n(27573),r=n(11737),s=n(95623),i=n(7653),o=n(94873);let c=r.fC,u=r.xz,l=r.h_,d=i.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,a.jsx)(r.aV,{ref:t,className:(0,o.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",n),...s})});d.displayName=r.aV.displayName;let f=i.forwardRef((e,t)=>{let{className:n,children:i,noPadding:c=!1,showCloseButton:u=!0,...f}=e;return(0,a.jsxs)(l,{children:[(0,a.jsx)(d,{}),(0,a.jsxs)(r.VY,{ref:t,className:(0,o.cn)(c?"p-0":"p-6","bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] dark:bg-night dark:border-input-dark fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 rounded-sm border shadow-lg outline-none duration-200 sm:rounded-lg dark:text-white",n),...f,children:[i,u&&(0,a.jsxs)(r.x8,{className:"ring-offset-background data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-sm opacity-70   transition-opacity hover:opacity-100 disabled:pointer-events-none",children:[(0,a.jsx)(s.Z,{className:"h-4 w-4 dark:text-white "}),(0,a.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});f.displayName=r.VY.displayName;let y=e=>{let{className:t,...n}=e;return(0,a.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...n})};y.displayName="DialogHeader";let p=e=>{let{className:t,...n}=e;return(0,a.jsx)("div",{className:(0,o.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...n})};p.displayName="DialogFooter";let m=i.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,a.jsx)(r.Dx,{ref:t,className:(0,o.cn)("text-lg font-semibold leading-none tracking-[-0.02em]",n),...s})});m.displayName=r.Dx.displayName;let g=i.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,a.jsx)(r.dk,{ref:t,className:(0,o.cn)("text-muted-foreground text-sm",n),...s})});g.displayName=r.dk.displayName},73308:function(e,t,n){var a=n(26821),r=n(73822);t.Z=function(e){let{queryKey:t,mutationFn:n,updateStore:s}=e,i=(0,a.NL)();return(0,r.D)({mutationFn:n,onMutate:async e=>{await i.cancelQueries({queryKey:t});let n=i.getQueryData(t);return i.setQueryData(t,t=>s(t,e)),{previousState:n}},onError:(e,n,a)=>{i.setQueryData(t,a.previousState)},onSettled:()=>{i.invalidateQueries({queryKey:t})}})}},70987:function(e,t,n){n.d(t,{YO:function(){return f},sm:function(){return _},iA:function(){return b},Qo:function(){return q},nA:function(){return d},Yn:function(){return g},F5:function(){return j},ch:function(){return L},Ql:function(){return k},ib:function(){return v},Vc:function(){return u},B9:function(){return l},ky:function(){return h},XU:function(){return N},ur:function(){return y},qN:function(){return m},xc:function(){return x},vz:function(){return w}});var a=n(2560),r=n(4652),s=n(29484),i=n(50386),o=n(32992);async function c(){return await s.L.get("admin/orchestrators").json()}function u(e){return(0,a.a)({queryKey:["multiDevin-".concat(e)],queryFn:async()=>e?await (0,i.Cn)(e):null})}function l(e){return(0,a.a)({queryKey:["multiDevinConfigs-".concat(e)],queryFn:async()=>await (0,i.s1)()})}function d(e){return(0,a.a)({queryKey:["orchestrators-".concat(e)],queryFn:async()=>await c()})}function f(e){let{userId:t}=(0,r.aC)();return(0,a.a)({queryKey:["checkIfSnapshotted-".concat(e)],queryFn:async()=>e?await (0,o.LY)(e):null,enabled:!!t})}function y(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return(0,a.a)({queryKey:["snapshotUpdate-".concat(e)],queryFn:async()=>await (0,o.gp)(e),refetchInterval:15e3,enabled:t,refetchIntervalInBackground:!1})}let p=e=>e.sort((e,t)=>"pending"===e.status&&"pending"!==t.status?-1:"pending"!==e.status&&"pending"===t.status?1:e.snapshot_name.localeCompare(t.snapshot_name));function m(){let{orgId:e}=(0,r.aC)();return(0,a.a)({queryKey:["snapshots",e],queryFn:async()=>await (0,o.DJ)(),select:p,enabled:!!e,refetchInterval:15e3})}function g(e){return(0,a.a)({queryKey:["userGithubOrganizations-".concat(e)],queryFn:async()=>await (0,o.b7)(),staleTime:3e5})}function h(e){return(0,a.a)({queryKey:["slackConnection-".concat(e)],queryFn:async()=>await (0,o.Yu)()})}function w(e){return(0,a.a)({queryKey:["slackConnection-".concat(e)],queryFn:async()=>e?await (0,o.HG)():null})}function x(e,t){return(0,a.a)({queryKey:["slackChannels-".concat(e,"-").concat(t)],queryFn:async()=>e&&t?await (0,o.rj)():null})}function b(e){let{isSignedIn:t}=(0,r.aC)();return(0,a.a)({queryKey:["devinSlackNotifications-".concat(e)],queryFn:async()=>e?await (0,o.ks)(e):null,enabled:!!t})}function j(){return(0,a.a)({queryKey:["allowsSlackNotifications"],queryFn:async()=>await (0,o.hI)()})}function v(e){let{userId:t}=(0,r.aC)();return(0,a.a)({queryKey:["interactive-browser-host",e],queryFn:async()=>{if(!e)return null;let t=await (0,o.cU)(e);return null==t?void 0:t.link.replace("http://","").replace(":6080/","")},enabled:!!t})}function k(e){return(0,a.a)({queryKey:["githubPRs",e],queryFn:async()=>e?await (0,o.KP)():null})}function L(e){return(0,a.a)({queryKey:["githubPRInfo",e],queryFn:async()=>e?await (0,o.UR)(e):null})}function N(){let{userId:e,orgId:t}=(0,r.aC)();return(0,a.a)({queryKey:["shortcuts",e,t],queryFn:()=>(0,o.BH)()})}function _(e){let{userId:t,orgId:n}=(0,r.aC)();return(0,a.a)({queryKey:["customDevinDocumentation",e,t,n],queryFn:()=>(0,o.j)(e),refetchOnWindowFocus:!1,refetchOnMount:!1,refetchOnReconnect:!1})}function q(){let{userId:e,orgId:t}=(0,r.aC)();return(0,a.a)({queryKey:["sessions","examples"],queryFn:()=>s.L.get("sessions/examples").json(),enabled:!!(t&&e)})}},1794:function(e,t,n){n.d(t,{zT:function(){return N},bQ:function(){return w},Rn:function(){return x},o8:function(){return m},nI:function(){return h},eW:function(){return p},q5:function(){return j},x9:function(){return v}});var a=n(2560),r=n(73308),s=n(4652),i=n(29484);let o=async()=>await i.L.get("organizations").json(),c=async e=>await i.L.get("organizations/".concat(e)).json(),u=async e=>await i.L.get("organizations/".concat(e,"/members")).json();async function l(e,t){await i.L.post("organizations/invite",{json:{emails:e,role:t}})}async function d(e){await i.L.delete("organizations/invite/".concat(e))}let f=async e=>await i.L.get("organizations/".concat(e,"/invitations")).json(),y=async(e,t,n)=>{await i.L.patch("organizations/".concat(e,"/members/").concat(t,"/roles"),{json:{roles:n}})},p=()=>{let{isLoaded:e,userId:t}=(0,s.aC)();return(0,a.a)({queryKey:["organizations",t],queryFn:o,enabled:e&&!!t,placeholderData:()=>[]})},m=()=>{let{isLoaded:e,orgId:t}=(0,s.aC)(),n=null==t?void 0:t.startsWith("personal-");return(0,a.a)({queryKey:["organization",t],queryFn:()=>c(t),enabled:e&&!!t&&!n})},g=e=>["organization-invitations",e],h=()=>{let{isLoaded:e,orgId:t}=(0,s.aC)(),n=null==t?void 0:t.startsWith("personal-");return(0,a.a)({queryKey:g(t),queryFn:()=>f(t),enabled:e&&!!t&&!n})};function w(){let{userId:e,orgId:t}=(0,s.aC)();return(0,r.Z)({queryKey:g(t),mutationFn:e=>{let{emails:t,role:n}=e;return l(t,n)},updateStore:(n,a)=>{let{emails:r,role:s}=a;return[...r.map(n=>({id:n,organization_id:t,inviter:{name:e},invitee:{email:n},invitation_url:"",created_at:new Date().toString(),expires_at:new Date().toString(),client_id:"",connection_id:"",app_metadata:{},user_metadata:{},roles:[s],ticket_id:""})),...n]}})}function x(){let{orgId:e}=(0,s.aC)();return(0,r.Z)({queryKey:g(e),mutationFn:e=>d(e),updateStore:(e,t)=>e.filter(e=>e.id!==t)})}let b=e=>["organization-members",e],j=()=>{let{isLoaded:e,orgId:t}=(0,s.aC)(),n=null==t?void 0:t.startsWith("personal-");return(0,a.a)({queryKey:b(t),queryFn:()=>u(t),enabled:e&&!!t&&!n})};function v(){let{orgId:e}=(0,s.aC)();return(0,r.Z)({queryKey:b(e),mutationFn:t=>{let{userId:n,roles:a}=t;return y(e,n,a.map(e=>e.name))},updateStore:(e,t)=>e.map(e=>e.user_id===t.userId?{...e,roles:t.roles}:e)})}var k=n(40772),L=n(7653);let N=()=>{let{setActive:e}=(0,k.eW)();return(0,L.useCallback)((t,n)=>{e&&e({organization:t,beforeEmit:n})},[e])}},50386:function(e,t,n){n.d(t,{Cn:function(){return c},EJ:function(){return u},Jh:function(){return f},Yw:function(){return l},hV:function(){return d},s1:function(){return o},u4:function(){return i}});var a=n(18255),r=n.n(a),s=n(29484);async function i(e,t,n,a,r,i){try{return await s.L.post("scheduled-devin/launch",{json:{user_id:a,org_id:r,scheduled_devin_id:e,webhook_url:null,custom_prompt:t,num_workers:n,criteria_id:i}}).json()}catch(e){throw console.error("Error in launchScheduledDevin:",e),e}}async function o(){let e=await s.L.get("scheduled-devin/all").json();return e.forEach(e=>{e.config_str=JSON.stringify(e.config||{},null,2)}),e}async function c(e){let t=await s.L.get("scheduled-devin/".concat(e)).json(),n=["raw"];return t.tasks_str=JSON.stringify(t.tasks.map(e=>r().pick(e,n)),null,2),t.config_str=JSON.stringify(t.config||{},null,2),t}async function u(e,t){return await s.L.put("scheduled-devin/".concat(e),{json:t}).json()}async function l(e){try{return await s.L.post("scheduled-devin/".concat(e,"/reset-tasks")).json()}catch(e){throw console.error("Error in resetScheduledDevinTasks:",e),e}}async function d(e){try{return await s.L.post("scheduled-devin",{json:e}).json()}catch(e){throw console.error("Error in createScheduledDevin:",e),e}}async function f(e){return await s.L.delete("scheduled-devin/".concat(e)).json()}},96268:function(e,t,n){n.d(t,{Yo:function(){return x},et:function(){return k},q$:function(){return j},zA:function(){return s}});var a=n(7653),r=n(38077);let s=e=>{let[t,n]=(0,a.useState)({secrets:[],uuid:""});return(0,a.useEffect)(()=>{let t=(0,r.Qo)(e).filter(e=>"send_secrets"===e.type);if(0===t.length){n(e=>""===e.uuid?e:{secrets:[],uuid:""});return}let a=t.reduce((e,t)=>t.timestampMs>e.timestampMs?t:e,t[0]);n(e=>{var t;return e.uuid===a.uuid?e:{secrets:a.secrets.map(e=>({...e,encrypted:!0})),uuid:null!==(t=a.uuid)&&void 0!==t?t:""}})},[e,n]),t};var i=n(27573),o=n(18914),c=n(18544),u=n(57908),l=n(81086),d=n(87659),f=n(52111),y=n(45660),p=n(75113),m=n(21138),g=n(4652),h=n(53358),w=n(29484);let x={create:async(e,t,n,a)=>await w.L.post("secrets",{json:{key:t,value:n,type:e,sensitive:a}}).json(),get:async e=>{let t="secrets";return e&&(t+="?key=".concat(e)),await w.L.get(t).json()},delete:async e=>{await w.L.delete("secrets/".concat(e))},getById:async e=>await w.L.get("secrets/".concat(e)).json(),bulkCreate:async e=>await w.L.post("secrets/bulk",{json:{secrets:e}}).json(),setSecretSensitivity:async(e,t)=>await w.L.post("secrets/sensitivity/".concat(e),{json:t||{}}).json()};var b=n(5565);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};let j=globalThis.jotaiAtomCache.get("/vercel/path0/apps/webapp/src/modules/secrets/lib/state.ts/secretsModalOpenAtom",(0,b.cn)(!1)),v={key:"",value:"",encrypted:!1},k=a.memo(e=>{let{setSecrets:t,sessionSecrets:n}=e,[r,s]=(0,l.KO)(j),{orgId:c}=(0,g.aC)(),[u,p]=(0,a.useState)(n.secrets.length>0?n.secrets:[v]),[w,b]=(0,a.useState)(!1),[k,_]=(0,a.useState)(null),[q,C]=(0,a.useState)(!1);(0,a.useEffect)(()=>{p(n.secrets.length>0?n.secrets:[v])},[n]);let D=(0,a.useCallback)((e,t,n)=>{let a=[...u];a[e]={key:t,value:n,encrypted:!1},p(a)},[u]),S=(0,a.useCallback)(e=>{s(e),e||(b(!1),_(null),C(!1))},[s,b,_,C]),F=(0,a.useCallback)(async()=>{if(_(null),C(!0),w)try{let e=u.filter(e=>!e.encrypted).map(e=>({key:e.key,value:e.value,sensitive:!1,type:"key-value"}));await x.bulkCreate(e)}catch(e){_(e.message),C(!1);return}t(u,crypto.randomUUID()),S(!1)},[u,w,t,_,C,S]);return(0,i.jsx)(m.Vq,{modal:!0,open:r,onOpenChange:S,children:(0,i.jsxs)(m.cZ,{className:"overflow-x-auto p-5 text-sm sm:max-w-screen-md sm:py-6 sm:text-base",children:[(0,i.jsx)(m.fK,{children:(0,i.jsx)(m.$N,{className:"mb-1 text-xl tracking-tight",children:"Add new secret"})}),(0,i.jsxs)("div",{children:[k&&(0,i.jsxs)(f.b,{status:"error",className:"mb-8",children:["There was a problem submitting your request. ",k]}),(0,i.jsx)("div",{className:"flex max-h-[60vh] flex-col gap-2 overflow-y-scroll",children:u.map((e,t)=>(0,i.jsx)(N,{index:t,kvPair:e,setKvPair:D,deleteKv:()=>{let e=[...u];e.splice(t,1),p(e)}},t))}),(0,i.jsxs)("div",{className:"flex flex-col items-end",children:[(0,i.jsx)("div",{className:"flex w-full flex-row items-center justify-between",children:(0,i.jsx)("div",{className:"flex w-full items-end justify-end",children:(0,i.jsx)("button",{className:"my-4 flex items-center  rounded-sm bg-white bg-opacity-0 p-1.5 transition-colors duration-100 enabled:hover:bg-opacity-10 disabled:text-gray-500 dark:text-gray-200",onClick:()=>{p([...u,{key:"",value:"",encrypted:!1}])},children:(0,i.jsx)(o.F,{size:22})})})}),u.length>0&&u.some(e=>!e.encrypted)&&(0,i.jsxs)("div",{className:"dark:border-input-dark mb-3 flex w-full flex-row items-center justify-between space-x-2 border-t px-1 pt-5 text-sm",children:[(0,i.jsxs)("div",{children:["Save in"," ",(0,i.jsx)(d.default,{className:"text-blue-500 underline",href:"/secrets",target:"_blank",rel:"noopener noreferrer",children:"Library"})," ","for future sessions",!c||c.startsWith("personal")?"":" (anyone in the organization will have access)"]}),(0,i.jsx)(y.r,{checked:w,onCheckedChange:b})]}),(0,i.jsx)(h.z,{className:"px-6",onClick:F,loading:q,disabled:0===u.length||u.some(e=>!e.key||!e.value||!L(e.key))||u.every(e=>e.encrypted),theme:"primary",size:"sm",defaultTitle:"Add"})]})]})]})})});function L(e){return/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(e)}let N=e=>{let{index:t,kvPair:n,setKvPair:r,deleteKv:s}=e,[o]=(0,a.useState)(!1);return(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"flex flex-row items-center space-x-1 sm:space-x-4",children:[(0,i.jsx)("div",{className:"flex flex-1 flex-col ",children:(0,i.jsxs)("div",{className:"relative flex flex-col items-end justify-between ",children:[(0,i.jsxs)("div",{className:"absolute top-[4px] flex w-full  flex-row justify-between text-xs",children:[(0,i.jsx)("span",{className:"text-[0.8rem]",children:"Key"}),!L(n.key)&&n.key&&(0,i.jsx)("span",{className:" text-red-500",children:"Can only use letters, digits, and underscores"})]}),(0,i.jsx)(p.u,{content:(0,i.jsx)("span",{className:"text-xs",children:"Existing secrets cannot be edited"}),side:"top",className:"px-2 py-1",delayDuration:0,disabled:!n.encrypted,onPointerDownOutside:e=>{e.preventDefault()},children:(0,i.jsx)("input",{type:"text",className:(0,u.Z)("mt-6 min-w-full resize-none rounded-sm border pl-2 text-[0.8rem] leading-8 dark:border-none"),value:n.key,onChange:e=>r(t,e.target.value,n.value),autoComplete:"off",disabled:n.encrypted})})]})}),(0,i.jsx)("div",{className:"flex flex-1 flex-col space-y-2",children:(0,i.jsxs)("div",{className:"relative flex flex-col items-end justify-between ",children:[(0,i.jsx)("div",{className:"absolute top-[4px] flex w-full  flex-row justify-between text-xs",children:(0,i.jsx)("span",{className:"text-[0.8rem]",children:"Value"})}),(0,i.jsx)(p.u,{content:(0,i.jsx)("span",{className:"text-xs",children:"Existing secrets cannot be edited"}),side:"top",className:"px-2 py-1",delayDuration:0,disabled:!n.encrypted,onPointerDownOutside:e=>{e.preventDefault()},children:(0,i.jsx)("input",{type:o?"text":"password",className:(0,u.Z)("mt-6 min-w-full resize-none rounded-sm border pl-2 text-[0.8rem] leading-8 dark:border-none",n.value?"":"border-red-300"),value:n.value,onChange:e=>r(t,n.key,e.target.value),autoComplete:"off",disabled:n.encrypted})})]})}),(0,i.jsx)(p.u,{content:(0,i.jsx)("span",{className:"text-xs",children:n.encrypted?"Cannot delete shared secret":"Delete"}),side:"top",className:"px-2 py-1",delayDuration:0,children:(0,i.jsx)("button",{className:(0,u.Z)("mt-6 flex items-center  rounded-sm bg-white bg-opacity-0 p-1.5 transition-colors duration-100 enabled:hover:bg-opacity-10 disabled:text-gray-500 dark:text-gray-200",n.encrypted?"opacity-50":""),onClick:()=>s(),disabled:n.encrypted,children:(0,i.jsx)(c.S,{size:22})})})]})})}},24898:function(e,t,n){n.d(t,{Y:function(){return r}});var a=n(29484);let r={put:async(e,t,n)=>{await a.L.post("session/".concat(e,"/evaluation"),{json:{notes:t,outcome:n}})},getLatest:async e=>{let t=await a.L.get("session/".concat(e,"/evaluation?latest=true")).json();return t&&t.length>0?t[0]:null},patch:async(e,t,n)=>{let r="session/".concat(e,"/evaluation/").concat(t);await a.L.patch(r,{json:{notes:n}})}}},32992:function(e,t,n){n.d(t,{YZ:function(){return o.Y},cp:function(){return c},R9:function(){return u},r1:function(){return f},LY:function(){return k},Yu:function(){return E},HG:function(){return I},ZA:function(){return z},Ox:function(){return w},fj:function(){return q},Lh:function(){return F},rF:function(){return A},vZ:function(){return U},B4:function(){return j},lP:function(){return d},j:function(){return J},UR:function(){return V},KP:function(){return Q},BH:function(){return C},DE:function(){return v},DJ:function(){return h},b7:function(){return L},hI:function(){return R},ks:function(){return T},A0:function(){return N},mg:function(){return g},rj:function(){return Z},cU:function(){return B},UF:function(){return _},o:function(){return P},xc:function(){return W},UA:function(){return K},Zk:function(){return H},al:function(){return y},Y2:function(){return Y},vB:function(){return D},J4:function(){return O},Ut:function(){return S},gp:function(){return b},Ay:function(){return p},RH:function(){return x},cT:function(){return l}});var a=n(30449),r=n(18255),s=n.n(r),i=n(29484),o=n(24898);let c={selfInvite:async()=>{await i.L.post("organizations/self-invite")},joinTechnicalPreview:async()=>{await i.L.post("organizations/join-technical-preview").json()}},u={getHostedServices:async e=>e?await i.L.get("sessions/".concat(e,"/hosted-services")).json():null,keepAlive:{get:async e=>await i.L.get("sessions/".concat(e,"/keep-alive")).json(),post:async(e,t)=>await i.L.post("sessions/".concat(e,"/keep-alive"),{json:{keep_alive:t}}).json()},spendingLimits:{get:async e=>{if(!e)return null;let t=await i.L.get("sessions/".concat(e,"/spending-limits")).json();return{currentLimit:t.max_acu_limit||0,currentUsage:t.current_usage||0}},post:async(e,t,n)=>{await i.L.post("sessions/".concat(e,"/spending-limits"),{json:{max_credits:t,is_global:n}})}}};async function l(e,t){let n=new FormData;return n.append("file",e),await i.L.post("upload-attachment",{signal:t.signal,body:n}).json()}async function d(e){await i.L.post("devin/".concat(e,"/sharing"),{json:{is_publicly_shared:!0}}).json()}async function f(e,t){try{return await i.L.post("devin/".concat(e,"/title"),{json:{title:t}}).json()}catch(e){if(e instanceof a.B)throw Error("Failed to enable sharing");throw console.error("Error enabling sharing:",e),e}}async function y(e,t,n,a){return await i.L.post("revive-devin",{json:{devin_id_to_revive:e,checkpoint_id:t,orchestrator_id:n,footer_overwrite:a}}).json()}async function p(e,t){try{let n=await i.L.put("unlist_devin/".concat(e,"?is_unlisting=").concat(t));return n.ok?n.json():{success:!1}}catch(e){throw console.error("Error unlisting devin:",e),e}}async function m(e,t){let n=await i.L.get("user/".concat(e,"/").concat(t,"/profile-picture")).json().catch(()=>null);return n?n.image_url:null}let g=s().memoize(m,(e,t)=>"profile-picture-".concat(e,"-").concat(t));async function h(){return await i.L.get("snapshots").json()}async function w(e,t,n,a){return await i.L.post("create-snapshot",{json:{devin_id:e,snapshot_name:t,description:n,startup_commands:a}}).json()}async function x(e,t,n,a){await i.L.put("snapshot/".concat(e),{json:{snapshot_name:t,description:n,startup_commands:a}})}async function b(e){return await i.L.get("snapshot/".concat(e)).json()}async function j(e){await i.L.delete("snapshot/".concat(e))}async function v(e){return e?i.L.get("get_snapshot/".concat(e)).json():null}async function k(e){try{return await i.L.get("snapshot/".concat(e,"/ami")).json()}catch(e){if(e instanceof a.B&&404===e.response.status)return null;throw e}}let L=async()=>await i.L.get("integrations/github/repos").json(),N=async()=>await i.L.get("integrations/github").json(),_=async e=>{await i.L.post("integrations/github/pat",{json:{pat:e}})},q=async()=>{await i.L.delete("integrations/github")};async function C(){return await i.L.get("shortcuts").json()}async function D(e){return await i.L.put("shortcuts/".concat(e,"/set-default")).json()}async function S(e){return await i.L.put("shortcuts/".concat(e,"/set-recent")).json()}async function F(e){return await i.L.delete("shortcuts/".concat(e)).json()}async function K(e,t){return await i.L.patch("shortcuts/".concat(e),{json:{title:t}}).json()}async function z(e){return await i.L.post("shortcuts",{json:e}).json()}async function E(){try{return await i.L.get("slack-access").json()}catch(e){if(e instanceof a.B&&404===e.response.status)return null;throw console.error("Error checking Slack connection:",e),e}}async function I(){return await i.L.get("member-integrations").json()}async function Z(){return await i.L.get("integrations/slack/users/current/channels").json()}async function A(){return await i.L.delete("remove-slack-integration")}async function U(){await i.L.delete("remove-slack-member-integration")}async function T(e){return await i.L.get("devin/".concat(e,"/notifications")).json()}async function O(e,t){return await i.L.post("devin/".concat(e,"/notifications"),{json:{notifications_enabled:t}}).json()}async function R(){return await i.L.get("users/notifications_default").json()}async function Y(e){await i.L.post("users/notifications_default",{json:{notifications_enabled:e}})}async function P(e){return await i.L.put("vscode-server/".concat(e)).json()}async function B(e){return await i.L.put("interactive-browser/".concat(e)).json()}async function Q(){return await i.L.get("metrics/github-prs").json()}async function V(e){let t=new URLSearchParams({pr_url:e}).toString();return await i.L.get("metrics/github-pr?".concat(t)).json()}async function J(e){try{return await i.L.get("custom-devin/".concat(e,"/documentation")).json()}catch(e){throw Error("Failed to fetch custom devin documentation")}}async function H(e,t,n){try{return await i.L.post("resume-devin",{json:{user_id:e,org_id:t,devin_id:n}}).json()}catch(e){throw Error("Failed to resume devin")}}async function W(e,t,n){return await i.L.post("human-mode/regenerate",{json:{hint:e,queryOid:t,modelName:n,logFileName:""}}).json()}},11360:function(e,t,n){n.d(t,{i:function(){return a},x:function(){return r}});let a=(e,t)=>{let n=new Date(e),a=new Date,s="";return s=n.toDateString()===a.toDateString()?n.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}):a.getTime()-n.getTime()<6048e5&&n.getDay()<=a.getDay()?n.toLocaleDateString("en-US",{weekday:"short"})+" "+n.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}):r(e,!1),t||(s=s.split(" ")[0]),s},r=function(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],n=new Date(e);return n.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})+", "+n.toLocaleTimeString([],{hour:"numeric",minute:"2-digit",...t?{second:"2-digit"}:{}})}}}]);