import{s as d,__tla as f}from"./index-BhbUj43Y.js";let c,b=Promise.all([(()=>{try{return f}catch{}})()]).then(async()=>{function p(r,a){for(var e=0;e<a.length;e++){const t=a[e];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in r)){const i=Object.getOwnPropertyDescriptor(t,n);i&&Object.defineProperty(r,n,i.get?i:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var o,s;function g(){if(s)return o;s=1,o=r,r.displayName="tremor",r.aliases=[];function r(a){(function(e){e.languages.tremor={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},"interpolated-string":null,extractor:{pattern:/\b[a-z_]\w*\|(?:[^\r\n\\|]|\\(?:\r\n|[\s\S]))*\|/i,greedy:!0,inside:{regex:{pattern:/(^re)\|[\s\S]+/,lookbehind:!0},function:/^\w+/,value:/\|[\s\S]+/}},identifier:{pattern:/`[^`]*`/,greedy:!0},function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())\b/,keyword:/\b(?:args|as|by|case|config|connect|connector|const|copy|create|default|define|deploy|drop|each|emit|end|erase|event|flow|fn|for|from|group|having|insert|into|intrinsic|let|links|match|merge|mod|move|of|operator|patch|pipeline|recur|script|select|set|sliding|state|stream|to|tumbling|update|use|when|where|window|with)\b/,boolean:/\b(?:false|null|true)\b/i,number:/\b(?:0b[01_]*|0x[0-9a-fA-F_]*|\d[\d_]*(?:\.\d[\d_]*)?(?:[Ee][+-]?[\d_]+)?)\b/,"pattern-punctuation":{pattern:/%(?=[({[])/,alias:"punctuation"},operator:/[-+*\/%~!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?>?=?|(?:absent|and|not|or|present|xor)\b/,punctuation:/::|[;\[\]()\{\},.:]/};var t=/#\{(?:[^"{}]|\{[^{}]*\}|"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*")*\}/.source;e.languages.tremor["interpolated-string"]={pattern:RegExp(/(^|[^\\])/.source+'(?:"""(?:'+/[^"\\#]|\\[\s\S]|"(?!"")|#(?!\{)/.source+"|"+t+')*"""|"(?:'+/[^"\\\r\n#]|\\(?:\r\n|[\s\S])|#(?!\{)/.source+"|"+t+')*")'),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:RegExp(t),inside:{punctuation:/^#\{|\}$/,expression:{pattern:/[\s\S]+/,inside:e.languages.tremor}}},string:/[\s\S]+/}},e.languages.troy=e.languages.tremor,e.languages.trickle=e.languages.tremor})(a)}return o}var l=g();let u;u=d(l),c=p({__proto__:null,default:u},[l])});export{b as __tla,c as t};
