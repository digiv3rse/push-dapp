import{s as b,__tla as f}from"./index-D-D_A1lM.js";import{r as m}from"./c-kgVuzdLE.js";let c,d=Promise.all([(()=>{try{return f}catch{}})()]).then(async()=>{function g(r,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in r)){const o=Object.getOwnPropertyDescriptor(n,a);o&&Object.defineProperty(r,a,o.get?o:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var i,s;function p(){if(s)return i;s=1;var r=m();i=e,e.displayName="bison",e.aliases=[];function e(t){t.register(r),t.languages.bison=t.languages.extend("c",{}),t.languages.insertBefore("bison","comment",{bison:{pattern:/^(?:[^%]|%(?!%))*%%[\s\S]*?%%/,inside:{c:{pattern:/%\{[\s\S]*?%\}|\{(?:\{[^}]*\}|[^{}])*\}/,inside:{delimiter:{pattern:/^%?\{|%?\}$/,alias:"punctuation"},"bison-variable":{pattern:/[$@](?:<[^\s>]+>)?[\w$]+/,alias:"variable",inside:{punctuation:/<|>/}},rest:t.languages.c}},comment:t.languages.c.comment,string:t.languages.c.string,property:/\S+(?=:)/,keyword:/%\w+/,number:{pattern:/(^|[^@])\b(?:0x[\da-f]+|\d+)/i,lookbehind:!0},punctuation:/%[%?]|[|:;\[\]<>]/}}})}return i}var l=p();let u;u=b(l),c=g({__proto__:null,default:u},[l])});export{d as __tla,c as b};
