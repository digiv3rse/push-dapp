import{cr as c,__tla as p}from"./index-CmHJK3Xz.js";import{r as b}from"./markup-templating-BxAVv-bL.js";let d,m=Promise.all([(()=>{try{return p}catch{}})()]).then(async()=>{function g(n,a){for(var t=0;t<a.length;t++){const e=a[t];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in n)){const i=Object.getOwnPropertyDescriptor(e,r);i&&Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var o,s;function f(){if(s)return o;s=1;var n=b();o=a,a.displayName="twig",a.aliases=[];function a(t){t.register(n),t.languages.twig={comment:/^\{#[\s\S]*?#\}$/,"tag-name":{pattern:/(^\{%-?\s*)\w+/,lookbehind:!0,alias:"keyword"},delimiter:{pattern:/^\{[{%]-?|-?[%}]\}$/,alias:"punctuation"},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,inside:{punctuation:/^['"]|['"]$/}},keyword:/\b(?:even|if|odd)\b/,boolean:/\b(?:false|null|true)\b/,number:/\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,operator:[{pattern:/(\s)(?:and|b-and|b-or|b-xor|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,lookbehind:!0},/[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/],punctuation:/[()\[\]{}:.,]/},t.hooks.add("before-tokenize",function(e){if(e.language==="twig"){var r=/\{(?:#[\s\S]*?#|%[\s\S]*?%|\{[\s\S]*?\})\}/g;t.languages["markup-templating"].buildPlaceholders(e,"twig",r)}}),t.hooks.add("after-tokenize",function(e){t.languages["markup-templating"].tokenizePlaceholders(e,"twig")})}return o}var l=f();let u;u=c(l),d=g({__proto__:null,default:u},[l])});export{m as __tla,d as t};
