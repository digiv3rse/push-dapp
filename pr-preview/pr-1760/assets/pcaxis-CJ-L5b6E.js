import{b8 as g,__tla as y}from"./index-ByAsu7gN.js";let u,f=Promise.all([(()=>{try{return y}catch{}})()]).then(async()=>{function d(e,t){for(var o=0;o<t.length;o++){const r=t[o];if(typeof r!="string"&&!Array.isArray(r)){for(const n in r)if(n!=="default"&&!(n in e)){const s=Object.getOwnPropertyDescriptor(r,n);s&&Object.defineProperty(e,n,s.get?s:{enumerable:!0,get:()=>r[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a,i;function c(){if(i)return a;i=1,a=e,e.displayName="pcaxis",e.aliases=["px"];function e(t){t.languages.pcaxis={string:/"[^"]*"/,keyword:{pattern:/((?:^|;)\s*)[-A-Z\d]+(?:\s*\[[-\w]+\])?(?:\s*\("[^"]*"(?:,\s*"[^"]*")*\))?(?=\s*=)/,lookbehind:!0,greedy:!0,inside:{keyword:/^[-A-Z\d]+/,language:{pattern:/^(\s*)\[[-\w]+\]/,lookbehind:!0,inside:{punctuation:/^\[|\]$/,property:/[-\w]+/}},"sub-key":{pattern:/^(\s*)\S[\s\S]*/,lookbehind:!0,inside:{parameter:{pattern:/"[^"]*"/,alias:"property"},punctuation:/^\(|\)$|,/}}}},operator:/=/,tlist:{pattern:/TLIST\s*\(\s*\w+(?:(?:\s*,\s*"[^"]*")+|\s*,\s*"[^"]*"-"[^"]*")?\s*\)/,greedy:!0,inside:{function:/^TLIST/,property:{pattern:/^(\s*\(\s*)\w+/,lookbehind:!0},string:/"[^"]*"/,punctuation:/[(),]/,operator:/-/}},punctuation:/[;,]/,number:{pattern:/(^|\s)\d+(?:\.\d+)?(?!\S)/,lookbehind:!0},boolean:/NO|YES/},t.languages.px=t.languages.pcaxis}return a}var p=c();let l;l=g(p),u=d({__proto__:null,default:l},[p])});export{f as __tla,u as p};
