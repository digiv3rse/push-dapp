import{s as g,__tla as b}from"./index-D-D_A1lM.js";let c,f=Promise.all([(()=>{try{return b}catch{}})()]).then(async()=>{function p(t,e){for(var s=0;s<e.length;s++){const n=e[s];if(typeof n!="string"&&!Array.isArray(n)){for(const r in n)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(n,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>n[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var a,i;function d(){if(i)return a;i=1,a=t,t.displayName="bbcode",t.aliases=["shortcode"];function t(e){e.languages.bbcode={tag:{pattern:/\[\/?[^\s=\]]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))?(?:\s+[^\s=\]]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))*\s*\]/,inside:{tag:{pattern:/^\[\/?[^\s=\]]+/,inside:{punctuation:/^\[\/?/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+)/,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\]/,"attr-name":/[^\s=\]]+/}}},e.languages.shortcode=e.languages.bbcode}return a}var l=d();let u;u=g(l),c=p({__proto__:null,default:u},[l])});export{f as __tla,c as b};
