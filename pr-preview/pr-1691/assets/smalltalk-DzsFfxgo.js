import{s as c,__tla as f}from"./index-CAi7vyAc.js";let d,y=Promise.all([(()=>{try{return f}catch{}})()]).then(async()=>{function p(e,a){for(var o=0;o<a.length;o++){const t=a[o];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const i=Object.getOwnPropertyDescriptor(t,r);i&&Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n,l;function b(){if(l)return n;l=1,n=e,e.displayName="smalltalk",e.aliases=[];function e(a){a.languages.smalltalk={comment:{pattern:/"(?:""|[^"])*"/,greedy:!0},char:{pattern:/\$./,greedy:!0},string:{pattern:/'(?:''|[^'])*'/,greedy:!0},symbol:/#[\da-z]+|#(?:-|([+\/\\*~<>=@%|&?!])\1?)|#(?=\()/i,"block-arguments":{pattern:/(\[\s*):[^\[|]*\|/,lookbehind:!0,inside:{variable:/:[\da-z]+/i,punctuation:/\|/}},"temporary-variables":{pattern:/\|[^|]+\|/,inside:{variable:/[\da-z]+/i,punctuation:/\|/}},keyword:/\b(?:new|nil|self|super)\b/,boolean:/\b(?:false|true)\b/,number:[/\d+r-?[\dA-Z]+(?:\.[\dA-Z]+)?(?:e-?\d+)?/,/\b\d+(?:\.\d+)?(?:e-?\d+)?/],operator:/[<=]=?|:=|~[~=]|\/\/?|\\\\|>[>=]?|[!^+\-*&|,@]/,punctuation:/[.;:?\[\](){}]/}}return n}var s=b();let u;u=c(s),d=p({__proto__:null,default:u},[s])});export{y as __tla,d as s};
