import{cr as f,__tla as g}from"./index-Baxe4z6G.js";let d,w=Promise.all([(()=>{try{return g}catch{}})()]).then(async()=>{function u(r,s){for(var e=0;e<s.length;e++){const t=s[e];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in r)){const a=Object.getOwnPropertyDescriptor(t,n);a&&Object.defineProperty(r,n,a.get?a:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var i,o;function p(){if(o)return i;o=1,i=r,r.displayName="dart",r.aliases=[];function r(s){(function(e){var t=[/\b(?:async|sync|yield)\*/,/\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|covariant|default|deferred|do|dynamic|else|enum|export|extends|extension|external|factory|final|finally|for|get|hide|if|implements|import|in|interface|library|mixin|new|null|on|operator|part|rethrow|return|set|show|static|super|switch|sync|this|throw|try|typedef|var|void|while|with|yield)\b/],n=/(^|[^\w.])(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,a={pattern:RegExp(n+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}}}};e.languages.dart=e.languages.extend("clike",{"class-name":[a,{pattern:RegExp(n+/[A-Z]\w*(?=\s+\w+\s*[;,=()])/.source),lookbehind:!0,inside:a.inside}],keyword:t,operator:/\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/}),e.languages.insertBefore("dart","string",{"string-literal":{pattern:/r?(?:("""|''')[\s\S]*?\1|(["'])(?:\\.|(?!\2)[^\\\r\n])*\2(?!\2))/,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:\w+|\{(?:[^{}]|\{[^{}]*\})*\})/,lookbehind:!0,inside:{punctuation:/^\$\{?|\}$/,expression:{pattern:/[\s\S]+/,inside:e.languages.dart}}},string:/[\s\S]+/}},string:void 0}),e.languages.insertBefore("dart","class-name",{metadata:{pattern:/@\w+/,alias:"function"}}),e.languages.insertBefore("dart","class-name",{generics:{pattern:/<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,inside:{"class-name":a,keyword:t,punctuation:/[<>(),.:]/,operator:/[?&|]/}}})})(s)}return i}var l=p();let c;c=f(l),d=u({__proto__:null,default:c},[l])});export{w as __tla,d};
