import{s as g,__tla as f}from"./index-DcZ2A60_.js";let d,c=Promise.all([(()=>{try{return f}catch{}})()]).then(async()=>{function b(e,n){for(var i=0;i<n.length;i++){const t=n[i];if(typeof t!="string"&&!Array.isArray(t)){for(const a in t)if(a!=="default"&&!(a in e)){const l=Object.getOwnPropertyDescriptor(t,a);l&&Object.defineProperty(e,a,l.get?l:{enumerable:!0,get:()=>t[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var r,s;function p(){if(s)return r;s=1,r=e,e.displayName="dhall",e.aliases=[];function e(n){n.languages.dhall={comment:/--.*|\{-(?:[^-{]|-(?!\})|\{(?!-)|\{-(?:[^-{]|-(?!\})|\{(?!-))*-\})*-\}/,string:{pattern:/"(?:[^"\\]|\\.)*"|''(?:[^']|'(?!')|'''|''\$\{)*''(?!'|\$)/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^{}]*\}/,inside:{expression:{pattern:/(^\$\{)[\s\S]+(?=\}$)/,lookbehind:!0,alias:"language-dhall",inside:null},punctuation:/\$\{|\}/}}}},label:{pattern:/`[^`]*`/,greedy:!0},url:{pattern:/\bhttps?:\/\/[\w.:%!$&'*+;=@~-]+(?:\/[\w.:%!$&'*+;=@~-]*)*(?:\?[/?\w.:%!$&'*+;=@~-]*)?/,greedy:!0},env:{pattern:/\benv:(?:(?!\d)\w+|"(?:[^"\\=]|\\.)*")/,greedy:!0,inside:{function:/^env/,operator:/^:/,variable:/[\s\S]+/}},hash:{pattern:/\bsha256:[\da-fA-F]{64}\b/,inside:{function:/sha256/,operator:/:/,number:/[\da-fA-F]{64}/}},keyword:/\b(?:as|assert|else|forall|if|in|let|merge|missing|then|toMap|using|with)\b|\u2200/,builtin:/\b(?:None|Some)\b/,boolean:/\b(?:False|True)\b/,number:/\bNaN\b|-?\bInfinity\b|[+-]?\b(?:0x[\da-fA-F]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/,operator:/\/\\|\/\/\\\\|&&|\|\||===|[!=]=|\/\/|->|\+\+|::|[+*#@=:?<>|\\\u2227\u2a53\u2261\u2afd\u03bb\u2192]/,punctuation:/\.\.|[{}\[\](),./]/,"class-name":/\b[A-Z]\w*\b/},n.languages.dhall.string.inside.interpolation.inside.expression.inside=n.languages.dhall}return r}var o=p();let u;u=g(o),d=b({__proto__:null,default:u},[o])});export{c as __tla,d};
