import{cr as f,__tla as m}from"./index-D4u_zvI-.js";import{r as g}from"./haskell-Ds42Eazu.js";let u,y=Promise.all([(()=>{try{return m}catch{}})()]).then(async()=>{function p(r,t){for(var e=0;e<t.length;e++){const i=t[e];if(typeof i!="string"&&!Array.isArray(i)){for(const a in i)if(a!=="default"&&!(a in r)){const o=Object.getOwnPropertyDescriptor(i,a);o&&Object.defineProperty(r,a,o.get?o:{enumerable:!0,get:()=>i[a]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var n,s;function d(){if(s)return n;s=1;var r=g();n=t,t.displayName="idris",t.aliases=["idr"];function t(e){e.register(r),e.languages.idris=e.languages.extend("haskell",{comment:{pattern:/(?:(?:--|\|\|\|).*$|\{-[\s\S]*?-\})/m},keyword:/\b(?:Type|case|class|codata|constructor|corecord|data|do|dsl|else|export|if|implementation|implicit|import|impossible|in|infix|infixl|infixr|instance|interface|let|module|mutual|namespace|of|parameters|partial|postulate|private|proof|public|quoteGoal|record|rewrite|syntax|then|total|using|where|with)\b/,builtin:void 0}),e.languages.insertBefore("idris","keyword",{"import-statement":{pattern:/(^\s*import\s+)(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*/m,lookbehind:!0,inside:{punctuation:/\./}}}),e.languages.idr=e.languages.idris}return n}var l=d();let c;c=f(l),u=p({__proto__:null,default:c},[l])});export{y as __tla,u as i};
