import{b8 as d,__tla as b}from"./index-Cac-jSOB.js";let f,m=Promise.all([(()=>{try{return b}catch{}})()]).then(async()=>{function p(t,a){for(var i=0;i<a.length;i++){const e=a[i];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(e,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var n,l;function u(){if(l)return n;l=1,n=t,t.displayName="brainfuck",t.aliases=[];function t(a){a.languages.brainfuck={pointer:{pattern:/<|>/,alias:"keyword"},increment:{pattern:/\+/,alias:"inserted"},decrement:{pattern:/-/,alias:"deleted"},branching:{pattern:/\[|\]/,alias:"important"},operator:/[.,]/,comment:/\S+/}}return n}var c=u();let s;s=d(c),f=p({__proto__:null,default:s},[c])});export{m as __tla,f as b};
