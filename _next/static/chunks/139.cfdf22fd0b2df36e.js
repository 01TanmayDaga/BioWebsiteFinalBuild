"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[139],{3139:function(e,t,r){r.r(t),r.d(t,{encodeIntoResult:function(){return f},stegaEncodeSourceMap:function(){return y},stegaEncodeSourceMap$1:function(){return m}});var n=r(3607);let i=/_key\s*==\s*['"](.*)['"]/;function o(e){if(!Array.isArray(e))throw Error("Path is not an array");return e.reduce((e,t,r)=>{let n=typeof t;if("number"===n)return`${e}[${t}]`;if("string"===n)return`${e}${0===r?"":"."}${t}`;if(("string"==typeof t?i.test(t.trim()):"object"==typeof t&&"_key"in t)&&t._key)return`${e}[_key=="${t._key}"]`;if(Array.isArray(t)){let[r,n]=t;return`${e}[${r}:${n}]`}throw Error(`Unsupported path segment \`${JSON.stringify(t)}\``)},"")}let s={"\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","'":"\\'","\\":"\\\\"},a={"\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	","\\'":"'","\\\\":"\\"};function l(e){let t;let r=[],n=/\['(.*?)'\]|\[(\d+)\]|\[\?\(@\._key=='(.*?)'\)\]/g;for(;null!==(t=n.exec(e));){if(void 0!==t[1]){let e=t[1].replace(/\\(\\|f|n|r|t|')/g,e=>a[e]);r.push(e);continue}if(void 0!==t[2]){r.push(parseInt(t[2],10));continue}if(void 0!==t[3]){let e=t[3].replace(/\\(\\')/g,e=>a[e]);r.push({_key:e,_index:-1});continue}}return r}function u(e){return e.map(e=>{if("string"==typeof e||"number"==typeof e)return e;if(""!==e._key)return{_key:e._key};if(-1!==e._index)return e._index;throw Error(`invalid segment:${JSON.stringify(e)}`)})}function p(e){return"object"==typeof e&&null!==e}function f(e,t,r){return function e(t,r,n=[]){return null!==t&&Array.isArray(t)?t.map((t,i)=>{if(p(t)){let o=t._key;if("string"==typeof o)return e(t,r,n.concat({_key:o,_index:i}))}return e(t,r,n.concat(i))}):p(t)?Object.fromEntries(Object.entries(t).map(([t,i])=>[t,e(i,r,n.concat(t))])):r(t,n)}(e,(e,n)=>{if("string"!=typeof e)return e;let i=function(e,t){var r;if(!t?.mappings)return;let n=(r=e.map(e=>{if("string"==typeof e||"number"==typeof e)return e;if(-1!==e._index)return e._index;throw Error(`invalid segment:${JSON.stringify(e)}`)}),`$${r.map(e=>"string"==typeof e?`['${e.replace(/[\f\n\r\t'\\]/g,e=>s[e])}']`:"number"==typeof e?`[${e}]`:""!==e._key?`[?(@._key=='${e._key.replace(/['\\]/g,e=>s[e])}')]`:`[${e._index}]`).join("")}`);if(void 0!==t.mappings[n])return{mapping:t.mappings[n],matchedPath:n,pathSuffix:""};let i=Object.entries(t.mappings).filter(([e])=>n.startsWith(e)).sort(([e],[t])=>t.length-e.length);if(0==i.length)return;let[o,a]=i[0],l=n.substring(o.length);return{mapping:a,matchedPath:o,pathSuffix:l}}(n,t);if(!i)return e;let{mapping:o,matchedPath:a}=i;if("value"!==o.type||"documentValue"!==o.source.type)return e;let u=t.documents[o.source.document],p=t.paths[o.source.path],f=l(a);return r({sourcePath:l(p).concat(n.slice(f.length)),sourceDocument:u,resultPath:n,value:e})})}let c="drafts.",d=({sourcePath:e,resultPath:t,value:r})=>{if(/^\d{4}-\d{2}-\d{2}/.test(r)&&Date.parse(r)||function(e){try{new URL(e,e.startsWith("/")?"https://acme.com":void 0)}catch{return!1}return!0}(r))return!1;let n=e.at(-1);return!("slug"===e.at(-2)&&"current"===n||"string"==typeof n&&n.startsWith("_")||"number"==typeof n&&"marks"===e.at(-2)||"href"===n&&"number"==typeof e.at(-2)&&"markDefs"===e.at(-3)||"style"===n||"listItem"===n||e.some(e=>"meta"===e||"metadata"===e||"openGraph"===e||"seo"===e)||g(e)||g(t)||"string"==typeof n&&h.has(n))},h=new Set(["color","colour","currency","email","format","gid","hex","href","hsl","hsla","icon","id","index","key","language","layout","link","linkAction","locale","lqip","page","path","ref","rgb","rgba","route","secret","slug","status","tag","template","theme","type","unit","url","username","variant","website"]);function g(e){return e.some(e=>"string"==typeof e&&null!==e.match(/type/i))}function y(e,t,r){let{filter:s,logger:a,enabled:l}=r;if(!l){let n="config.enabled must be true, don't call this function otherwise";throw a?.error?.(`[@sanity/client]: ${n}`,{result:e,resultSourceMap:t,config:r}),TypeError(n)}if(!t)return a?.error?.("[@sanity/client]: Missing Content Source Map from response body",{result:e,resultSourceMap:t,config:r}),e;if(!r.studioUrl){let n="config.studioUrl must be defined";throw a?.error?.(`[@sanity/client]: ${n}`,{result:e,resultSourceMap:t,config:r}),TypeError(n)}let p={encoded:[],skipped:[]},h=f(e,t,({sourcePath:e,sourceDocument:t,resultPath:i,value:l})=>{var f;let h;if(("function"==typeof s?s({sourcePath:e,resultPath:i,filterDefault:d,sourceDocument:t,value:l}):d({sourcePath:e,resultPath:i,filterDefault:d,sourceDocument:t,value:l}))===!1)return a&&p.skipped.push({path:o(u(e)),value:`${l.slice(0,20)}${l.length>20?"...":""}`,length:l.length}),l;a&&p.encoded.push({path:o(u(e)),value:`${l.slice(0,20)}${l.length>20?"...":""}`,length:l.length});let{baseUrl:g,workspace:y,tool:m}=("/"!==(h="string"==typeof(f="function"==typeof r.studioUrl?r.studioUrl(t):r.studioUrl)?f:f.baseUrl)&&(h=h.replace(/\/$/,"")),"string"==typeof f?{baseUrl:h}:{...f,baseUrl:h});if(!g)return l;let{_id:$,_type:_,_projectId:k,_dataset:b}=t;return(0,n.C)(l,{origin:"sanity.io",href:function(e){let{baseUrl:t,workspace:r="default",tool:n="default",id:i,type:s,path:a,projectId:l,dataset:p}=e;if(!t)throw Error("baseUrl is required");if(!a)throw Error("path is required");if(!i)throw Error("id is required");if("/"!==t&&t.endsWith("/"))throw Error("baseUrl must not end with a slash");let f="default"===r?void 0:r,d="default"===n?void 0:n,h=i.startsWith(c)?i.slice(c.length):i,g=Array.isArray(a)?o(u(a)):a,y=new URLSearchParams({baseUrl:t,id:h,type:s,path:g});f&&y.set("workspace",f),d&&y.set("tool",d),l&&y.set("projectId",l),p&&y.set("dataset",p),i.startsWith(c)&&y.set("isDraft","");let m=["/"===t?"":t];f&&m.push(f);let $=["mode=presentation",`id=${h}`,`type=${s}`,`path=${encodeURIComponent(g)}`];return d&&$.push(`tool=${d}`),m.push("intent","edit",`${$.join(";")}?${y}`),m.join("/")}({baseUrl:g,workspace:y,tool:m,id:$,type:_,path:e,...!r.omitCrossDatasetReferenceData&&{dataset:b,projectId:k}})},!1)});if(a){let e=p.skipped.length,t=p.encoded.length;if((e||t)&&((a?.groupCollapsed||a.log)?.("[@sanity/client]: Encoding source map into result"),a.log?.(`[@sanity/client]: Paths encoded: ${p.encoded.length}, skipped: ${p.skipped.length}`)),p.encoded.length>0&&(a?.log?.("[@sanity/client]: Table of encoded paths"),(a?.table||a.log)?.(p.encoded)),p.skipped.length>0){let e=new Set;for(let{path:t}of p.skipped)e.add(t.replace(i,"0").replace(/\[\d+\]/g,"[]"));a?.log?.("[@sanity/client]: List of skipped paths",[...e.values()])}(e||t)&&a?.groupEnd?.()}return h}var m=Object.freeze({__proto__:null,stegaEncodeSourceMap:y})}}]);