!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0819d4ca-4503-4cfc-8ab3-6bf6bdc48943",e._sentryDebugIdIdentifier="sentry-dbid-0819d4ca-4503-4cfc-8ab3-6bf6bdc48943")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1737],{11737:function(e,t,n){n.d(t,{Dx:function(){return q},GG:function(){return N},VY:function(){return Y},aV:function(){return X},dk:function(){return H},fC:function(){return K},h_:function(){return U},hg:function(){return w},jm:function(){return j},p8:function(){return R},x8:function(){return J},xz:function(){return S}});var o=n(57926),r=n(7653),l=n(2467),a=n(18497),u=n(20379),c=n(52608),i=n(65192),s=n(22089),f=n(30581),d=n(38826),p=n(72305),g=n(76646),D=n(48086),_=n(74012),m=n(11825),E=n(92721);let b="Dialog",[v,R]=(0,u.b)(b),[C,h]=v(b),w=(0,r.forwardRef)((e,t)=>{let{__scopeDialog:n,...u}=e,c=h("DialogTrigger",n),i=(0,a.e)(t,c.triggerRef);return(0,r.createElement)(g.WV.button,(0,o.Z)({type:"button","aria-haspopup":"dialog","aria-expanded":c.open,"aria-controls":c.contentId,"data-state":G(c.open)},u,{ref:i,onClick:(0,l.M)(e.onClick,c.onOpenToggle)}))}),y="DialogPortal",[M,O]=v(y,{forceMount:void 0}),I="DialogOverlay",F=(0,r.forwardRef)((e,t)=>{let n=O(I,e.__scopeDialog),{forceMount:l=n.forceMount,...a}=e,u=h(I,e.__scopeDialog);return u.modal?(0,r.createElement)(p.z,{present:l||u.open},(0,r.createElement)(Z,(0,o.Z)({},a,{ref:t}))):null}),Z=(0,r.forwardRef)((e,t)=>{let{__scopeDialog:n,...l}=e,a=h(I,n);return(0,r.createElement)(_.Z,{as:E.g7,allowPinchZoom:!0,shards:[a.contentRef]},(0,r.createElement)(g.WV.div,(0,o.Z)({"data-state":G(a.open)},l,{ref:t,style:{pointerEvents:"auto",...l.style}})))}),k="DialogContent",P=(0,r.forwardRef)((e,t)=>{let n=O(k,e.__scopeDialog),{forceMount:l=n.forceMount,...a}=e,u=h(k,e.__scopeDialog);return(0,r.createElement)(p.z,{present:l||u.open},u.modal?(0,r.createElement)(A,(0,o.Z)({},a,{ref:t})):(0,r.createElement)(V,(0,o.Z)({},a,{ref:t})))}),A=(0,r.forwardRef)((e,t)=>{let n=h(k,e.__scopeDialog),u=(0,r.useRef)(null),c=(0,a.e)(t,n.contentRef,u);return(0,r.useEffect)(()=>{let e=u.current;if(e)return(0,m.Ry)(e)},[]),(0,r.createElement)(W,(0,o.Z)({},e,{ref:c,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,l.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,l.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,l.M)(e.onFocusOutside,e=>e.preventDefault())}))}),V=(0,r.forwardRef)((e,t)=>{let n=h(k,e.__scopeDialog),l=(0,r.useRef)(!1),a=(0,r.useRef)(!1);return(0,r.createElement)(W,(0,o.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var o,r;null===(o=e.onCloseAutoFocus)||void 0===o||o.call(e,t),t.defaultPrevented||(l.current||null===(r=n.triggerRef.current)||void 0===r||r.focus(),t.preventDefault()),l.current=!1,a.current=!1},onInteractOutside:t=>{var o,r;null===(o=e.onInteractOutside)||void 0===o||o.call(e,t),t.defaultPrevented||(l.current=!0,"pointerdown"!==t.detail.originalEvent.type||(a.current=!0));let u=t.target;(null===(r=n.triggerRef.current)||void 0===r?void 0:r.contains(u))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&a.current&&t.preventDefault()}}))}),W=(0,r.forwardRef)((e,t)=>{let{__scopeDialog:n,trapFocus:l,onOpenAutoFocus:u,onCloseAutoFocus:c,...i}=e,d=h(k,n),p=(0,r.useRef)(null),g=(0,a.e)(t,p);return(0,D.EW)(),(0,r.createElement)(r.Fragment,null,(0,r.createElement)(f.M,{asChild:!0,loop:!0,trapped:l,onMountAutoFocus:u,onUnmountAutoFocus:c},(0,r.createElement)(s.XB,(0,o.Z)({role:"dialog",id:d.contentId,"aria-describedby":d.descriptionId,"aria-labelledby":d.titleId,"data-state":G(d.open)},i,{ref:g,onDismiss:()=>d.onOpenChange(!1)}))),!1)}),T="DialogTitle",x=(0,r.forwardRef)((e,t)=>{let{__scopeDialog:n,...l}=e,a=h(T,n);return(0,r.createElement)(g.WV.h2,(0,o.Z)({id:a.titleId},l,{ref:t}))}),z=(0,r.forwardRef)((e,t)=>{let{__scopeDialog:n,...l}=e,a=h("DialogDescription",n);return(0,r.createElement)(g.WV.p,(0,o.Z)({id:a.descriptionId},l,{ref:t}))}),N=(0,r.forwardRef)((e,t)=>{let{__scopeDialog:n,...a}=e,u=h("DialogClose",n);return(0,r.createElement)(g.WV.button,(0,o.Z)({type:"button"},a,{ref:t,onClick:(0,l.M)(e.onClick,()=>u.onOpenChange(!1))}))});function G(e){return e?"open":"closed"}let[j,B]=(0,u.k)("DialogTitleWarning",{contentName:k,titleName:T,docsSlug:"dialog"}),K=e=>{let{__scopeDialog:t,children:n,open:o,defaultOpen:l,onOpenChange:a,modal:u=!0}=e,s=(0,r.useRef)(null),f=(0,r.useRef)(null),[d=!1,p]=(0,i.T)({prop:o,defaultProp:l,onChange:a});return(0,r.createElement)(C,{scope:t,triggerRef:s,contentRef:f,contentId:(0,c.M)(),titleId:(0,c.M)(),descriptionId:(0,c.M)(),open:d,onOpenChange:p,onOpenToggle:(0,r.useCallback)(()=>p(e=>!e),[p]),modal:u},n)},S=w,U=e=>{let{__scopeDialog:t,forceMount:n,children:o,container:l}=e,a=h(y,t);return(0,r.createElement)(M,{scope:t,forceMount:n},r.Children.map(o,e=>(0,r.createElement)(p.z,{present:n||a.open},(0,r.createElement)(d.h,{asChild:!0,container:l},e))))},X=F,Y=P,q=x,H=z,J=N}}]);