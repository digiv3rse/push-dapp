import{b8 as b,__tla as g}from"./index-CtaDdfTM.js";let f,y=Promise.all([(()=>{try{return g}catch{}})()]).then(async()=>{function u(e,n){for(var o=0;o<n.length;o++){const t=n[o];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const i=Object.getOwnPropertyDescriptor(t,r);i&&Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a,l;function p(){if(l)return a;l=1,a=e,e.displayName="ebnf",e.aliases=[];function e(n){n.languages.ebnf={comment:/\(\*[\s\S]*?\*\)/,string:{pattern:/"[^"\r\n]*"|'[^'\r\n]*'/,greedy:!0},special:{pattern:/\?[^?\r\n]*\?/,greedy:!0,alias:"class-name"},definition:{pattern:/^([\t ]*)[a-z]\w*(?:[ \t]+[a-z]\w*)*(?=\s*=)/im,lookbehind:!0,alias:["rule","keyword"]},rule:/\b[a-z]\w*(?:[ \t]+[a-z]\w*)*\b/i,punctuation:/\([:/]|[:/]\)|[.,;()[\]{}]/,operator:/[-=|*/!]/}}return a}var s=p();let c;c=b(s),f=u({__proto__:null,default:c},[s])});export{y as __tla,f as e};
