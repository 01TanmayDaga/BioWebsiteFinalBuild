(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[425],{3566:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(9205).Z)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]])},7455:function(e){e.exports={style:{fontFamily:"'__geistMono_4b77d4', '__geistMono_Fallback_4b77d4'"},className:"__className_4b77d4",variable:"__variable_4b77d4"}},9073:function(e){e.exports={style:{fontFamily:"'__geistSans_c11a0e', '__geistSans_Fallback_c11a0e'"},className:"__className_c11a0e",variable:"__variable_c11a0e"}},3134:function(e,t,n){"use strict";n.d(t,{VY:function(){return ea},h4:function(){return eo},ck:function(){return er},fC:function(){return en},xz:function(){return ei}});var r=n(2265),o=n(3966),i=n(9863),a=n(8575),l=n(6741),u=n(886),c=n(6840),s=n(1188),d=n(1599),f=n(9255),p=n(7437),v="Collapsible",[m,y]=(0,o.b)(v),[h,w]=m(v),b=r.forwardRef((e,t)=>{let{__scopeCollapsible:n,open:o,defaultOpen:i,disabled:a,onOpenChange:l,...s}=e,[d=!1,v]=(0,u.T)({prop:o,defaultProp:i,onChange:l});return(0,p.jsx)(h,{scope:n,disabled:a,contentId:(0,f.M)(),open:d,onOpenToggle:r.useCallback(()=>v(e=>!e),[v]),children:(0,p.jsx)(c.WV.div,{"data-state":_(d),"data-disabled":a?"":void 0,...s,ref:t})})});b.displayName=v;var g="CollapsibleTrigger",x=r.forwardRef((e,t)=>{let{__scopeCollapsible:n,...r}=e,o=w(g,n);return(0,p.jsx)(c.WV.button,{type:"button","aria-controls":o.contentId,"aria-expanded":o.open||!1,"data-state":_(o.open),"data-disabled":o.disabled?"":void 0,disabled:o.disabled,...r,ref:t,onClick:(0,l.M)(e.onClick,o.onOpenToggle)})});x.displayName=g;var R="CollapsibleContent",C=r.forwardRef((e,t)=>{let{forceMount:n,...r}=e,o=w(R,e.__scopeCollapsible);return(0,p.jsx)(d.z,{present:n||o.open,children:e=>{let{present:n}=e;return(0,p.jsx)(j,{...r,ref:t,present:n})}})});C.displayName=R;var j=r.forwardRef((e,t)=>{let{__scopeCollapsible:n,present:o,children:i,...l}=e,u=w(R,n),[d,f]=r.useState(o),v=r.useRef(null),m=(0,a.e)(t,v),y=r.useRef(0),h=y.current,b=r.useRef(0),g=b.current,x=u.open||d,C=r.useRef(x),j=r.useRef();return r.useEffect(()=>{let e=requestAnimationFrame(()=>C.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,s.b)(()=>{let e=v.current;if(e){j.current=j.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();y.current=t.height,b.current=t.width,C.current||(e.style.transitionDuration=j.current.transitionDuration,e.style.animationName=j.current.animationName),f(o)}},[u.open,o]),(0,p.jsx)(c.WV.div,{"data-state":_(u.open),"data-disabled":u.disabled?"":void 0,id:u.contentId,hidden:!x,...l,ref:m,style:{"--radix-collapsible-content-height":h?"".concat(h,"px"):void 0,"--radix-collapsible-content-width":g?"".concat(g,"px"):void 0,...e.style},children:x&&i})});function _(e){return e?"open":"closed"}var M=n(9114),E="Accordion",N=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[T,I,k]=(0,i.B)(E),[P,S]=(0,o.b)(E,[k,y]),A=y(),O=r.forwardRef((e,t)=>{let{type:n,...r}=e;return(0,p.jsx)(T.Provider,{scope:e.__scopeAccordion,children:"multiple"===n?(0,p.jsx)(K,{...r,ref:t}):(0,p.jsx)(W,{...r,ref:t})})});O.displayName=E;var[D,F]=P(E),[L,V]=P(E,{collapsible:!1}),W=r.forwardRef((e,t)=>{let{value:n,defaultValue:o,onValueChange:i=()=>{},collapsible:a=!1,...l}=e,[c,s]=(0,u.T)({prop:n,defaultProp:o,onChange:i});return(0,p.jsx)(D,{scope:e.__scopeAccordion,value:c?[c]:[],onItemOpen:s,onItemClose:r.useCallback(()=>a&&s(""),[a,s]),children:(0,p.jsx)(L,{scope:e.__scopeAccordion,collapsible:a,children:(0,p.jsx)(U,{...l,ref:t})})})}),K=r.forwardRef((e,t)=>{let{value:n,defaultValue:o,onValueChange:i=()=>{},...a}=e,[l=[],c]=(0,u.T)({prop:n,defaultProp:o,onChange:i}),s=r.useCallback(e=>c(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[...t,e]}),[c]),d=r.useCallback(e=>c(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.filter(t=>t!==e)}),[c]);return(0,p.jsx)(D,{scope:e.__scopeAccordion,value:l,onItemOpen:s,onItemClose:d,children:(0,p.jsx)(L,{scope:e.__scopeAccordion,collapsible:!0,children:(0,p.jsx)(U,{...a,ref:t})})})}),[z,H]=P(E),U=r.forwardRef((e,t)=>{let{__scopeAccordion:n,disabled:o,dir:i,orientation:u="vertical",...s}=e,d=r.useRef(null),f=(0,a.e)(d,t),v=I(n),m="ltr"===(0,M.gm)(i),y=(0,l.M)(e.onKeyDown,e=>{var t;if(!N.includes(e.key))return;let n=e.target,r=v().filter(e=>{var t;return!(null===(t=e.ref.current)||void 0===t?void 0:t.disabled)}),o=r.findIndex(e=>e.ref.current===n),i=r.length;if(-1===o)return;e.preventDefault();let a=o,l=i-1,c=()=>{(a=o+1)>l&&(a=0)},s=()=>{(a=o-1)<0&&(a=l)};switch(e.key){case"Home":a=0;break;case"End":a=l;break;case"ArrowRight":"horizontal"===u&&(m?c():s());break;case"ArrowDown":"vertical"===u&&c();break;case"ArrowLeft":"horizontal"===u&&(m?s():c());break;case"ArrowUp":"vertical"===u&&s()}null===(t=r[a%i].ref.current)||void 0===t||t.focus()});return(0,p.jsx)(z,{scope:n,disabled:o,direction:i,orientation:u,children:(0,p.jsx)(T.Slot,{scope:n,children:(0,p.jsx)(c.WV.div,{...s,"data-orientation":u,ref:f,onKeyDown:o?void 0:y})})})}),B="AccordionItem",[$,q]=P(B),G=r.forwardRef((e,t)=>{let{__scopeAccordion:n,value:r,...o}=e,i=H(B,n),a=F(B,n),l=A(n),u=(0,f.M)(),c=r&&a.value.includes(r)||!1,s=i.disabled||e.disabled;return(0,p.jsx)($,{scope:n,open:c,disabled:s,triggerId:u,children:(0,p.jsx)(b,{"data-orientation":i.orientation,"data-state":et(c),...l,...o,ref:t,disabled:s,open:c,onOpenChange:e=>{e?a.onItemOpen(r):a.onItemClose(r)}})})});G.displayName=B;var Y="AccordionHeader",X=r.forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,o=H(E,n),i=q(Y,n);return(0,p.jsx)(c.WV.h3,{"data-orientation":o.orientation,"data-state":et(i.open),"data-disabled":i.disabled?"":void 0,...r,ref:t})});X.displayName=Y;var Z="AccordionTrigger",J=r.forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,o=H(E,n),i=q(Z,n),a=V(Z,n),l=A(n);return(0,p.jsx)(T.ItemSlot,{scope:n,children:(0,p.jsx)(x,{"aria-disabled":i.open&&!a.collapsible||void 0,"data-orientation":o.orientation,id:i.triggerId,...l,...r,ref:t})})});J.displayName=Z;var Q="AccordionContent",ee=r.forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,o=H(E,n),i=q(Q,n),a=A(n);return(0,p.jsx)(C,{role:"region","aria-labelledby":i.triggerId,"data-orientation":o.orientation,...a,...r,ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});function et(e){return e?"open":"closed"}ee.displayName=Q;var en=O,er=G,eo=X,ei=J,ea=ee},9863:function(e,t,n){"use strict";n.d(t,{B:function(){return l}});var r=n(2265),o=n(7437),i=n(8575),a=n(7053);function l(e){let t=e+"CollectionProvider",[n,l]=function(e,t=[]){let n=[],i=()=>{let t=n.map(e=>r.createContext(e));return function(n){let o=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return i.scopeName=e,[function(t,i){let a=r.createContext(i),l=n.length;function u(t){let{scope:n,children:i,...u}=t,c=n?.[e][l]||a,s=r.useMemo(()=>u,Object.values(u));return(0,o.jsx)(c.Provider,{value:s,children:i})}return n=[...n,i],u.displayName=t+"Provider",[u,function(n,o){let u=o?.[e][l]||a,c=r.useContext(u);if(c)return c;if(void 0!==i)return i;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(i,...t)]}(t),[u,c]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=e=>{let{scope:t,children:n}=e,i=r.useRef(null),a=r.useRef(new Map).current;return(0,o.jsx)(u,{scope:t,itemMap:a,collectionRef:i,children:n})};s.displayName=t;let d=e+"CollectionSlot",f=r.forwardRef((e,t)=>{let{scope:n,children:r}=e,l=c(d,n),u=(0,i.e)(t,l.collectionRef);return(0,o.jsx)(a.g7,{ref:u,children:r})});f.displayName=d;let p=e+"CollectionItemSlot",v="data-radix-collection-item",m=r.forwardRef((e,t)=>{let{scope:n,children:l,...u}=e,s=r.useRef(null),d=(0,i.e)(t,s),f=c(p,n);return r.useEffect(()=>(f.itemMap.set(s,{ref:s,...u}),()=>void f.itemMap.delete(s))),(0,o.jsx)(a.g7,{[v]:"",ref:d,children:l})});return m.displayName=p,[{Provider:s,Slot:f,ItemSlot:m},function(t){let n=c(e+"CollectionConsumer",t);return r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(v,"]")));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])},l]}},9114:function(e,t,n){"use strict";n.d(t,{gm:function(){return i}});var r=n(2265);n(7437);var o=r.createContext(void 0);function i(e){let t=r.useContext(o);return e||t||"ltr"}},1311:function(e,t,n){"use strict";n.d(t,{VY:function(){return ew},z$:function(){return eh},ck:function(){return ev},rU:function(){return ey},aV:function(){return ep},fC:function(){return ef},xz:function(){return em},l_:function(){return eb}});var r=n(2265),o=n(4887),i=n(3966),a=n(6741),l=n(6840),u=n(886),c=n(8575),s=n(9114),d=n(1599),f=n(9255),p=n(9863),v=n(5278),m=n(1188),y=n(6606),h=n(5098),w=n(7437),b="NavigationMenu",[g,x,R]=(0,p.B)(b),[C,j,_]=(0,p.B)(b),[M,E]=(0,i.b)(b,[R,_]),[N,T]=M(b),[I,k]=M(b),P=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:o,onValueChange:i,defaultValue:a,delayDuration:d=200,skipDelayDuration:f=300,orientation:p="horizontal",dir:v,...m}=e,[y,h]=r.useState(null),b=(0,c.e)(t,e=>h(e)),g=(0,s.gm)(v),x=r.useRef(0),R=r.useRef(0),C=r.useRef(0),[j,_]=r.useState(!0),[M="",E]=(0,u.T)({prop:o,onChange:e=>{let t=f>0;""!==e?(window.clearTimeout(C.current),t&&_(!1)):(window.clearTimeout(C.current),C.current=window.setTimeout(()=>_(!0),f)),null==i||i(e)},defaultProp:a}),N=r.useCallback(()=>{window.clearTimeout(R.current),R.current=window.setTimeout(()=>E(""),150)},[E]),T=r.useCallback(e=>{window.clearTimeout(R.current),E(e)},[E]),I=r.useCallback(e=>{M===e?window.clearTimeout(R.current):x.current=window.setTimeout(()=>{window.clearTimeout(R.current),E(e)},d)},[M,E,d]);return r.useEffect(()=>()=>{window.clearTimeout(x.current),window.clearTimeout(R.current),window.clearTimeout(C.current)},[]),(0,w.jsx)(A,{scope:n,isRootMenu:!0,value:M,dir:g,orientation:p,rootNavigationMenu:y,onTriggerEnter:e=>{window.clearTimeout(x.current),j?I(e):T(e)},onTriggerLeave:()=>{window.clearTimeout(x.current),N()},onContentEnter:()=>window.clearTimeout(R.current),onContentLeave:N,onItemSelect:e=>{E(t=>t===e?"":e)},onItemDismiss:()=>E(""),children:(0,w.jsx)(l.WV.nav,{"aria-label":"Main","data-orientation":p,dir:g,...m,ref:b})})});P.displayName=b;var S="NavigationMenuSub";r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:r,onValueChange:o,defaultValue:i,orientation:a="horizontal",...c}=e,s=T(S,n),[d="",f]=(0,u.T)({prop:r,onChange:o,defaultProp:i});return(0,w.jsx)(A,{scope:n,isRootMenu:!1,value:d,dir:s.dir,orientation:a,rootNavigationMenu:s.rootNavigationMenu,onTriggerEnter:e=>f(e),onItemSelect:e=>f(e),onItemDismiss:()=>f(""),children:(0,w.jsx)(l.WV.div,{"data-orientation":a,...c,ref:t})})}).displayName=S;var A=e=>{let{scope:t,isRootMenu:n,rootNavigationMenu:o,dir:i,orientation:a,children:l,value:u,onItemSelect:c,onItemDismiss:s,onTriggerEnter:d,onTriggerLeave:p,onContentEnter:v,onContentLeave:m}=e,[h,b]=r.useState(null),[x,R]=r.useState(new Map),[C,j]=r.useState(null);return(0,w.jsx)(N,{scope:t,isRootMenu:n,rootNavigationMenu:o,value:u,previousValue:function(e){let t=r.useRef({value:e,previous:e});return r.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}(u),baseId:(0,f.M)(),dir:i,orientation:a,viewport:h,onViewportChange:b,indicatorTrack:C,onIndicatorTrackChange:j,onTriggerEnter:(0,y.W)(d),onTriggerLeave:(0,y.W)(p),onContentEnter:(0,y.W)(v),onContentLeave:(0,y.W)(m),onItemSelect:(0,y.W)(c),onItemDismiss:(0,y.W)(s),onViewportContentChange:r.useCallback((e,t)=>{R(n=>(n.set(e,t),new Map(n)))},[]),onViewportContentRemove:r.useCallback(e=>{R(t=>t.has(e)?(t.delete(e),new Map(t)):t)},[]),children:(0,w.jsx)(g.Provider,{scope:t,children:(0,w.jsx)(I,{scope:t,items:x,children:l})})})},O="NavigationMenuList",D=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,o=T(O,n),i=(0,w.jsx)(l.WV.ul,{"data-orientation":o.orientation,...r,ref:t});return(0,w.jsx)(l.WV.div,{style:{position:"relative"},ref:o.onIndicatorTrackChange,children:(0,w.jsx)(g.Slot,{scope:n,children:o.isRootMenu?(0,w.jsx)(en,{asChild:!0,children:i}):i})})});D.displayName=O;var F="NavigationMenuItem",[L,V]=M(F),W=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:o,...i}=e,a=(0,f.M)(),u=r.useRef(null),c=r.useRef(null),s=r.useRef(null),d=r.useRef(()=>{}),p=r.useRef(!1),v=r.useCallback(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"start";if(u.current){d.current();let t=ei(u.current);t.length&&ea("start"===e?t:t.reverse())}},[]),m=r.useCallback(()=>{if(u.current){let e=ei(u.current);e.length&&(d.current=(e.forEach(e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}),()=>{e.forEach(e=>{let t=e.dataset.tabindex;e.setAttribute("tabindex",t)})}))}},[]);return(0,w.jsx)(L,{scope:n,value:o||a||"LEGACY_REACT_AUTO_VALUE",triggerRef:c,contentRef:u,focusProxyRef:s,wasEscapeCloseRef:p,onEntryKeyDown:v,onFocusProxyEnter:v,onRootContentClose:m,onContentFocusOutside:m,children:(0,w.jsx)(l.WV.li,{...i,ref:t})})});W.displayName=F;var K="NavigationMenuTrigger",z=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,disabled:o,...i}=e,u=T(K,e.__scopeNavigationMenu),s=V(K,e.__scopeNavigationMenu),d=r.useRef(null),f=(0,c.e)(d,s.triggerRef,t),p=ec(u.baseId,s.value),v=es(u.baseId,s.value),m=r.useRef(!1),y=r.useRef(!1),b=s.value===u.value;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(g.ItemSlot,{scope:n,value:s.value,children:(0,w.jsx)(eo,{asChild:!0,children:(0,w.jsx)(l.WV.button,{id:p,disabled:o,"data-disabled":o?"":void 0,"data-state":eu(b),"aria-expanded":b,"aria-controls":v,...i,ref:f,onPointerEnter:(0,a.M)(e.onPointerEnter,()=>{y.current=!1,s.wasEscapeCloseRef.current=!1}),onPointerMove:(0,a.M)(e.onPointerMove,ed(()=>{o||y.current||s.wasEscapeCloseRef.current||m.current||(u.onTriggerEnter(s.value),m.current=!0)})),onPointerLeave:(0,a.M)(e.onPointerLeave,ed(()=>{o||(u.onTriggerLeave(),m.current=!1)})),onClick:(0,a.M)(e.onClick,()=>{u.onItemSelect(s.value),y.current=b}),onKeyDown:(0,a.M)(e.onKeyDown,e=>{let t={horizontal:"ArrowDown",vertical:"rtl"===u.dir?"ArrowLeft":"ArrowRight"}[u.orientation];b&&e.key===t&&(s.onEntryKeyDown(),e.preventDefault())})})})}),b&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(h.f,{"aria-hidden":!0,tabIndex:0,ref:s.focusProxyRef,onFocus:e=>{let t=s.contentRef.current,n=e.relatedTarget,r=n===d.current,o=null==t?void 0:t.contains(n);(r||!o)&&s.onFocusProxyEnter(r?"start":"end")}}),u.viewport&&(0,w.jsx)("span",{"aria-owns":v})]})]})});z.displayName=K;var H="navigationMenu.linkSelect",U=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,active:r,onSelect:o,...i}=e;return(0,w.jsx)(eo,{asChild:!0,children:(0,w.jsx)(l.WV.a,{"data-active":r?"":void 0,"aria-current":r?"page":void 0,...i,ref:t,onClick:(0,a.M)(e.onClick,e=>{let t=e.target,n=new CustomEvent(H,{bubbles:!0,cancelable:!0});if(t.addEventListener(H,e=>null==o?void 0:o(e),{once:!0}),(0,l.jH)(t,n),!n.defaultPrevented&&!e.metaKey){let e=new CustomEvent(Z,{bubbles:!0,cancelable:!0});(0,l.jH)(t,e)}},{checkForDefaultPrevented:!1})})})});U.displayName="NavigationMenuLink";var B="NavigationMenuIndicator",$=r.forwardRef((e,t)=>{let{forceMount:n,...r}=e,i=T(B,e.__scopeNavigationMenu),a=!!i.value;return i.indicatorTrack?o.createPortal((0,w.jsx)(d.z,{present:n||a,children:(0,w.jsx)(q,{...r,ref:t})}),i.indicatorTrack):null});$.displayName=B;var q=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...o}=e,i=T(B,n),a=x(n),[u,c]=r.useState(null),[s,d]=r.useState(null),f="horizontal"===i.orientation,p=!!i.value;r.useEffect(()=>{var e;let t=null===(e=a().find(e=>e.value===i.value))||void 0===e?void 0:e.ref.current;t&&c(t)},[a,i.value]);let v=()=>{u&&d({size:f?u.offsetWidth:u.offsetHeight,offset:f?u.offsetLeft:u.offsetTop})};return el(u,v),el(i.indicatorTrack,v),s?(0,w.jsx)(l.WV.div,{"aria-hidden":!0,"data-state":p?"visible":"hidden","data-orientation":i.orientation,...o,ref:t,style:{position:"absolute",...f?{left:0,width:s.size+"px",transform:"translateX(".concat(s.offset,"px)")}:{top:0,height:s.size+"px",transform:"translateY(".concat(s.offset,"px)")},...o.style}}):null}),G="NavigationMenuContent",Y=r.forwardRef((e,t)=>{let{forceMount:n,...r}=e,o=T(G,e.__scopeNavigationMenu),i=V(G,e.__scopeNavigationMenu),l=(0,c.e)(i.contentRef,t),u=i.value===o.value,s={value:i.value,triggerRef:i.triggerRef,focusProxyRef:i.focusProxyRef,wasEscapeCloseRef:i.wasEscapeCloseRef,onContentFocusOutside:i.onContentFocusOutside,onRootContentClose:i.onRootContentClose,...r};return o.viewport?(0,w.jsx)(X,{forceMount:n,...s,ref:l}):(0,w.jsx)(d.z,{present:n||u,children:(0,w.jsx)(J,{"data-state":eu(u),...s,ref:l,onPointerEnter:(0,a.M)(e.onPointerEnter,o.onContentEnter),onPointerLeave:(0,a.M)(e.onPointerLeave,ed(o.onContentLeave)),style:{pointerEvents:!u&&o.isRootMenu?"none":void 0,...s.style}})})});Y.displayName=G;var X=r.forwardRef((e,t)=>{let{onViewportContentChange:n,onViewportContentRemove:r}=T(G,e.__scopeNavigationMenu);return(0,m.b)(()=>{n(e.value,{ref:t,...e})},[e,t,n]),(0,m.b)(()=>()=>r(e.value),[e.value,r]),null}),Z="navigationMenu.rootContentDismiss",J=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:o,triggerRef:i,focusProxyRef:l,wasEscapeCloseRef:u,onRootContentClose:s,onContentFocusOutside:d,...f}=e,p=T(G,n),m=r.useRef(null),y=(0,c.e)(m,t),h=ec(p.baseId,o),b=es(p.baseId,o),g=x(n),R=r.useRef(null),{onItemDismiss:C}=p;r.useEffect(()=>{let e=m.current;if(p.isRootMenu&&e){let t=()=>{var t;C(),s(),e.contains(document.activeElement)&&(null===(t=i.current)||void 0===t||t.focus())};return e.addEventListener(Z,t),()=>e.removeEventListener(Z,t)}},[p.isRootMenu,e.value,i,C,s]);let j=r.useMemo(()=>{let e=g().map(e=>e.value);"rtl"===p.dir&&e.reverse();let t=e.indexOf(p.value),n=e.indexOf(p.previousValue),r=o===p.value,i=n===e.indexOf(o);if(!r&&!i)return R.current;let a=(()=>{if(t!==n){if(r&&-1!==n)return t>n?"from-end":"from-start";if(i&&-1!==t)return t>n?"to-start":"to-end"}return null})();return R.current=a,a},[p.previousValue,p.value,p.dir,g,o]);return(0,w.jsx)(en,{asChild:!0,children:(0,w.jsx)(v.XB,{id:b,"aria-labelledby":h,"data-motion":j,"data-orientation":p.orientation,...f,ref:y,disableOutsidePointerEvents:!1,onDismiss:()=>{var e;let t=new Event(Z,{bubbles:!0,cancelable:!0});null===(e=m.current)||void 0===e||e.dispatchEvent(t)},onFocusOutside:(0,a.M)(e.onFocusOutside,e=>{var t;d();let n=e.target;(null===(t=p.rootNavigationMenu)||void 0===t?void 0:t.contains(n))&&e.preventDefault()}),onPointerDownOutside:(0,a.M)(e.onPointerDownOutside,e=>{var t;let n=e.target,r=g().some(e=>{var t;return null===(t=e.ref.current)||void 0===t?void 0:t.contains(n)}),o=p.isRootMenu&&(null===(t=p.viewport)||void 0===t?void 0:t.contains(n));(r||o||!p.isRootMenu)&&e.preventDefault()}),onKeyDown:(0,a.M)(e.onKeyDown,e=>{let t=e.altKey||e.ctrlKey||e.metaKey;if("Tab"===e.key&&!t){let t=ei(e.currentTarget),r=document.activeElement,o=t.findIndex(e=>e===r);if(ea(e.shiftKey?t.slice(0,o).reverse():t.slice(o+1,t.length)))e.preventDefault();else{var n;null===(n=l.current)||void 0===n||n.focus()}}}),onEscapeKeyDown:(0,a.M)(e.onEscapeKeyDown,e=>{u.current=!0})})})}),Q="NavigationMenuViewport",ee=r.forwardRef((e,t)=>{let{forceMount:n,...r}=e,o=!!T(Q,e.__scopeNavigationMenu).value;return(0,w.jsx)(d.z,{present:n||o,children:(0,w.jsx)(et,{...r,ref:t})})});ee.displayName=Q;var et=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,children:o,...i}=e,u=T(Q,n),s=(0,c.e)(t,u.onViewportChange),f=k(G,e.__scopeNavigationMenu),[p,v]=r.useState(null),[m,y]=r.useState(null),h=p?(null==p?void 0:p.width)+"px":void 0,b=p?(null==p?void 0:p.height)+"px":void 0,g=!!u.value,x=g?u.value:u.previousValue;return el(m,()=>{m&&v({width:m.offsetWidth,height:m.offsetHeight})}),(0,w.jsx)(l.WV.div,{"data-state":eu(g),"data-orientation":u.orientation,...i,ref:s,style:{pointerEvents:!g&&u.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":h,"--radix-navigation-menu-viewport-height":b,...i.style},onPointerEnter:(0,a.M)(e.onPointerEnter,u.onContentEnter),onPointerLeave:(0,a.M)(e.onPointerLeave,ed(u.onContentLeave)),children:Array.from(f.items).map(e=>{let[t,{ref:n,forceMount:r,...o}]=e,i=x===t;return(0,w.jsx)(d.z,{present:r||i,children:(0,w.jsx)(J,{...o,ref:(0,c.F)(n,e=>{i&&e&&y(e)})})},t)})})}),en=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,o=T("FocusGroup",n);return(0,w.jsx)(C.Provider,{scope:n,children:(0,w.jsx)(C.Slot,{scope:n,children:(0,w.jsx)(l.WV.div,{dir:o.dir,...r,ref:t})})})}),er=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],eo=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,o=j(n),i=T("FocusGroupItem",n);return(0,w.jsx)(C.ItemSlot,{scope:n,children:(0,w.jsx)(l.WV.button,{...r,ref:t,onKeyDown:(0,a.M)(e.onKeyDown,e=>{if(["Home","End",...er].includes(e.key)){let t=o().map(e=>e.ref.current);if(["rtl"===i.dir?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(e.key)&&t.reverse(),er.includes(e.key)){let n=t.indexOf(e.currentTarget);t=t.slice(n+1)}setTimeout(()=>ea(t)),e.preventDefault()}})})})});function ei(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function ea(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}function el(e,t){let n=(0,y.W)(t);(0,m.b)(()=>{let t=0;if(e){let r=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(n)});return r.observe(e),()=>{window.cancelAnimationFrame(t),r.unobserve(e)}}},[e,n])}function eu(e){return e?"open":"closed"}function ec(e,t){return"".concat(e,"-trigger-").concat(t)}function es(e,t){return"".concat(e,"-content-").concat(t)}function ed(e){return t=>"mouse"===t.pointerType?e(t):void 0}var ef=P,ep=D,ev=W,em=z,ey=U,eh=$,ew=Y,eb=ee},5098:function(e,t,n){"use strict";n.d(t,{f:function(){return l}});var r=n(2265),o=n(6840),i=n(7437),a=r.forwardRef((e,t)=>(0,i.jsx)(o.WV.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));a.displayName="VisuallyHidden";var l=a},6200:function(e,t,n){"use strict";n.d(t,{CR:function(){return s},FC:function(){return p},Jh:function(){return u},KL:function(){return v},XA:function(){return c},ZT:function(){return o},_T:function(){return a},ev:function(){return d},mG:function(){return l},pi:function(){return i},qq:function(){return f}});var r=function(e,t){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function l(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function l(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(a,l)}u((r=r.apply(e,t||[])).next())})}function u(e,t){var n,r,o,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},a=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return a.next=l(0),a.throw=l(1),a.return=l(2),"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(l){return function(u){return function(l){if(n)throw TypeError("Generator is already executing.");for(;a&&(a=0,l[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&l[0]?r.return:l[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,l[1])).done)return o;switch(r=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,r=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===l[0]||2===l[0])){i=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(6===l[0]&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(e){l=[6,e],r=0}finally{n=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,u])}}}function c(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function s(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function d(e,t,n){if(n||2==arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function f(e){return this instanceof f?(this.v=e,this):new f(e)}function p(e,t,n){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r=Object.create(("function"==typeof AsyncIterator?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",function(e){return function(t){return Promise.resolve(t).then(e,c)}}),r[Symbol.asyncIterator]=function(){return this},r;function a(e,t){o[e]&&(r[e]=function(t){return new Promise(function(n,r){i.push([e,t,n,r])>1||l(e,t)})},t&&(r[e]=t(r[e])))}function l(e,t){try{var n;(n=o[e](t)).value instanceof f?Promise.resolve(n.value.v).then(u,c):s(i[0][2],n)}catch(e){s(i[0][3],e)}}function u(e){l("next",e)}function c(e){l("throw",e)}function s(e,t){e(t),i.shift(),i.length&&l(i[0][0],i[0][1])}}function v(e){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=c(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise(function(r,o){!function(e,t,n,r){Promise.resolve(r).then(function(t){e({value:t,done:n})},t)}(r,o,(t=e[n](t)).done,t.value)})}}}"function"==typeof SuppressedError&&SuppressedError}}]);