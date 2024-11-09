(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[355],{868:function(e,r,t){Promise.resolve().then(t.bind(t,3632))},3632:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return p}});var a=t(7437),s=t(2265),l=t(4508);let n=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("div",{className:"relative w-full overflow-auto",children:(0,a.jsx)("table",{ref:r,className:(0,l.cn)("w-full caption-bottom text-sm",t),...s})})});n.displayName="Table";let c=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("thead",{ref:r,className:(0,l.cn)("[&_tr]:border-b",t),...s})});c.displayName="TableHeader";let o=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("tbody",{ref:r,className:(0,l.cn)("[&_tr:last-child]:border-0",t),...s})});o.displayName="TableBody",s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("tfoot",{ref:r,className:(0,l.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",t),...s})}).displayName="TableFooter";let d=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("tr",{ref:r,className:(0,l.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",t),...s})});d.displayName="TableRow";let i=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("th",{ref:r,className:(0,l.cn)("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",t),...s})});i.displayName="TableHead";let u=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("td",{ref:r,className:(0,l.cn)("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",t),...s})});u.displayName="TableCell",s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("caption",{ref:r,className:(0,l.cn)("mt-4 text-sm text-muted-foreground",t),...s})}).displayName="TableCaption";var f=t(6070),m=t(3270);let x=e=>{let{title:r,courses:t}=e;return(0,a.jsxs)(f.Zb,{className:"3xl:w-1/2 w-full border-none shadow-none lg:max-w-[980px]",children:[(0,a.jsx)(f.Ol,{children:(0,a.jsx)(f.ll,{className:"text-2xl text-blue-700",children:r.replace(/([A-Z])/g," $1").trim()})}),(0,a.jsx)(f.aY,{children:(0,a.jsxs)(n,{children:[(0,a.jsx)(c,{children:(0,a.jsxs)(d,{className:"bg-blue-600 hover:bg-blue-800",children:[(0,a.jsx)(i,{className:"text-white",children:"Course"}),(0,a.jsx)(i,{className:"text-white",children:"Code"}),(0,a.jsx)(i,{className:"text-white",children:"L-T-P"}),(0,a.jsx)(i,{className:"text-white",children:"Session(s)"})]})}),(0,a.jsx)(o,{children:t.map((e,r)=>(0,a.jsxs)(d,{className:"odd:bg-white even:bg-blue-50",children:[(0,a.jsx)(u,{children:e.name}),(0,a.jsx)(u,{children:e.code}),(0,a.jsx)(u,{children:"".concat(e.ltp.lecture,"-").concat(e.ltp.tutorial,"-").concat(e.ltp.practical)}),(0,a.jsx)(u,{children:e.sessions})]},r))})]})})]})};function p(){let[e,r]=(0,s.useState)([]);return(0,s.useEffect)(()=>{(async()=>{try{let e=await m.Z.fetch('*[_type == "courseCategory"] | order(order asc) {\n          categoryName,\n          order,\n          courses[] {\n            name,\n            code,\n            ltp {\n              lecture,\n              tutorial,\n              practical\n            },\n            sessions\n          }\n        }');r(e)}catch(e){console.error("Error fetching courses:",e)}})()},[]),(0,a.jsx)("main",{className:"min-h-[90vh] p-8",children:(0,a.jsx)("div",{className:"container mx-auto",children:(0,a.jsx)("div",{className:"-mx-4 flex flex-wrap justify-center gap-8",children:e.map(e=>(0,a.jsx)(x,{title:e.categoryName,courses:e.courses},e.categoryName))})})})}},6070:function(e,r,t){"use strict";t.d(r,{Ol:function(){return c},Zb:function(){return n},aY:function(){return d},eW:function(){return i},ll:function(){return o}});var a=t(7437),s=t(2265),l=t(4508);let n=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("div",{ref:r,className:(0,l.cn)("rounded-xl border bg-card text-card-foreground shadow",t),...s})});n.displayName="Card";let c=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("div",{ref:r,className:(0,l.cn)("flex flex-col space-y-1.5 p-6",t),...s})});c.displayName="CardHeader";let o=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("h3",{ref:r,className:(0,l.cn)("font-semibold leading-none tracking-tight",t),...s})});o.displayName="CardTitle",s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("p",{ref:r,className:(0,l.cn)("text-sm text-muted-foreground",t),...s})}).displayName="CardDescription";let d=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("div",{ref:r,className:(0,l.cn)("p-6 pt-0",t),...s})});d.displayName="CardContent";let i=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("div",{ref:r,className:(0,l.cn)("flex items-center p-6 pt-0",t),...s})});i.displayName="CardFooter"},3270:function(e,r,t){"use strict";t.d(r,{u:function(){return o}});var a=t(1622),s=t(3740),l=t.n(s);let n=(0,a.eI)({projectId:"951qrjzc",dataset:"production",apiVersion:"2022-03-07",useCdn:!0});n.config().perspective="published";let c=l()(n);function o(e){return c.image(e)}r.Z=n},4508:function(e,r,t){"use strict";t.d(r,{cn:function(){return l}});var a=t(1994),s=t(3335);function l(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,s.m6)((0,a.W)(r))}}},function(e){e.O(0,[137,372,971,117,744],function(){return e(e.s=868)}),_N_E=e.O()}]);