import{b8 as f,__tla as v}from"./index-DTEQZMpV.js";import{r as b}from"./java-BxMbkJZ_.js";import{r as k}from"./javadoclike-myFApC35.js";let g,j=Promise.all([(()=>{try{return v}catch{}})()]).then(async()=>{function c(r,s){for(var t=0;t<s.length;t++){const a=s[t];if(typeof a!="string"&&!Array.isArray(a)){for(const e in a)if(e!=="default"&&!(e in r)){const n=Object.getOwnPropertyDescriptor(a,e);n&&Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:()=>a[e]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var o,i;function d(){if(i)return o;i=1;var r=b(),s=k();o=t,t.displayName="javadoc",t.aliases=[];function t(a){a.register(r),a.register(s),function(e){var n=/(^(?:[\t ]*(?:\*\s*)*))[^*\s].*$/m,p=/#\s*\w+(?:\s*\([^()]*\))?/.source,m=/(?:\b[a-zA-Z]\w+\s*\.\s*)*\b[A-Z]\w*(?:\s*<mem>)?|<mem>/.source.replace(/<mem>/g,function(){return p});e.languages.javadoc=e.languages.extend("javadoclike",{}),e.languages.insertBefore("javadoc","keyword",{reference:{pattern:RegExp(/(@(?:exception|link|linkplain|see|throws|value)\s+(?:\*\s*)?)/.source+"(?:"+m+")"),lookbehind:!0,inside:{function:{pattern:/(#\s*)\w+(?=\s*\()/,lookbehind:!0},field:{pattern:/(#\s*)\w+/,lookbehind:!0},namespace:{pattern:/\b(?:[a-z]\w*\s*\.\s*)+/,inside:{punctuation:/\./}},"class-name":/\b[A-Z]\w*/,keyword:e.languages.java.keyword,punctuation:/[#()[\],.]/}},"class-name":{pattern:/(@param\s+)<[A-Z]\w*>/,lookbehind:!0,inside:{punctuation:/[.<>]/}},"code-section":[{pattern:/(\{@code\s+(?!\s))(?:[^\s{}]|\s+(?![\s}])|\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\})+(?=\s*\})/,lookbehind:!0,inside:{code:{pattern:n,lookbehind:!0,inside:e.languages.java,alias:"language-java"}}},{pattern:/(<(code|pre|tt)>(?!<code>)\s*)\S(?:\S|\s+\S)*?(?=\s*<\/\2>)/,lookbehind:!0,inside:{line:{pattern:n,lookbehind:!0,inside:{tag:e.languages.markup.tag,entity:e.languages.markup.entity,code:{pattern:/.+/,inside:e.languages.java,alias:"language-java"}}}}}],tag:e.languages.markup.tag,entity:e.languages.markup.entity}),e.languages.javadoclike.addSupport("java",e.languages.javadoc)}(a)}return o}var l=d();let u;u=f(l),g=c({__proto__:null,default:u},[l])});export{j as __tla,g as j};
