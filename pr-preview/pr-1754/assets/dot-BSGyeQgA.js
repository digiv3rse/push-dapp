import{b8 as f,__tla as h}from"./index-AoclBwKL.js";let g,m=Promise.all([(()=>{try{return h}catch{}})()]).then(async()=>{function d(a,o){for(var t=0;t<o.length;t++){const n=o[t];if(typeof n!="string"&&!Array.isArray(n)){for(const e in n)if(e!=="default"&&!(e in a)){const r=Object.getOwnPropertyDescriptor(n,e);r&&Object.defineProperty(a,e,r.get?r:{enumerable:!0,get:()=>n[e]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var i,u;function c(){if(u)return i;u=1,i=a,a.displayName="dot",a.aliases=["gv"];function a(o){(function(t){var n="(?:"+[/[a-zA-Z_\x80-\uFFFF][\w\x80-\uFFFF]*/.source,/-?(?:\.\d+|\d+(?:\.\d*)?)/.source,/"[^"\\]*(?:\\[\s\S][^"\\]*)*"/.source,/<(?:[^<>]|(?!<!--)<(?:[^<>"']|"[^"]*"|'[^']*')+>|<!--(?:[^-]|-(?!->))*-->)*>/.source].join("|")+")",e={markup:{pattern:/(^<)[\s\S]+(?=>$)/,lookbehind:!0,alias:["language-markup","language-html","language-xml"],inside:t.languages.markup}};function r(p,b){return RegExp(p.replace(/<ID>/g,function(){return n}),b)}t.languages.dot={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\/|^#.*/m,greedy:!0},"graph-name":{pattern:r(/(\b(?:digraph|graph|subgraph)[ \t\r\n]+)<ID>/.source,"i"),lookbehind:!0,greedy:!0,alias:"class-name",inside:e},"attr-value":{pattern:r(/(=[ \t\r\n]*)<ID>/.source),lookbehind:!0,greedy:!0,inside:e},"attr-name":{pattern:r(/([\[;, \t\r\n])<ID>(?=[ \t\r\n]*=)/.source),lookbehind:!0,greedy:!0,inside:e},keyword:/\b(?:digraph|edge|graph|node|strict|subgraph)\b/i,"compass-point":{pattern:/(:[ \t\r\n]*)(?:[ewc_]|[ns][ew]?)(?![\w\x80-\uFFFF])/,lookbehind:!0,alias:"builtin"},node:{pattern:r(/(^|[^-.\w\x80-\uFFFF\\])<ID>/.source),lookbehind:!0,greedy:!0,inside:e},operator:/[=:]|-[->]/,punctuation:/[\[\]{};,]/},t.languages.gv=t.languages.dot})(o)}return i}var s=c();let l;l=f(s),g=d({__proto__:null,default:l},[s])});export{m as __tla,g as d};
