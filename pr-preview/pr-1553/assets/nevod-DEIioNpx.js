import{cr as m,__tla as f}from"./index-Bm2A691_.js";let d,A=Promise.all([(()=>{try{return f}catch{}})()]).then(async()=>{function c(a,n){for(var i=0;i<n.length;i++){const t=n[i];if(typeof t!="string"&&!Array.isArray(t)){for(const e in t)if(e!=="default"&&!(e in a)){const s=Object.getOwnPropertyDescriptor(t,e);s&&Object.defineProperty(a,e,s.get?s:{enumerable:!0,get:()=>t[e]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var r,l;function u(){if(l)return r;l=1,r=a,a.displayName="nevod",a.aliases=[];function a(n){n.languages.nevod={comment:/\/\/.*|(?:\/\*[\s\S]*?(?:\*\/|$))/,string:{pattern:/(?:"(?:""|[^"])*"(?!")|'(?:''|[^'])*'(?!'))!?\*?/,greedy:!0,inside:{"string-attrs":/!$|!\*$|\*$/}},namespace:{pattern:/(@namespace\s+)[a-zA-Z0-9\-.]+(?=\s*\{)/,lookbehind:!0},pattern:{pattern:/(@pattern\s+)?#?[a-zA-Z0-9\-.]+(?:\s*\(\s*(?:~\s*)?[a-zA-Z0-9\-.]+\s*(?:,\s*(?:~\s*)?[a-zA-Z0-9\-.]*)*\))?(?=\s*=)/,lookbehind:!0,inside:{"pattern-name":{pattern:/^#?[a-zA-Z0-9\-.]+/,alias:"class-name"},fields:{pattern:/\(.*\)/,inside:{"field-name":{pattern:/[a-zA-Z0-9\-.]+/,alias:"variable"},punctuation:/[,()]/,operator:{pattern:/~/,alias:"field-hidden-mark"}}}}},search:{pattern:/(@search\s+|#)[a-zA-Z0-9\-.]+(?:\.\*)?(?=\s*;)/,alias:"function",lookbehind:!0},keyword:/@(?:having|inside|namespace|outside|pattern|require|search|where)\b/,"standard-pattern":{pattern:/\b(?:Alpha|AlphaNum|Any|Blank|End|LineBreak|Num|NumAlpha|Punct|Space|Start|Symbol|Word|WordBreak)\b(?:\([a-zA-Z0-9\-.,\s+]*\))?/,inside:{"standard-pattern-name":{pattern:/^[a-zA-Z0-9\-.]+/,alias:"builtin"},quantifier:{pattern:/\b\d+(?:\s*\+|\s*-\s*\d+)?(?!\w)/,alias:"number"},"standard-pattern-attr":{pattern:/[a-zA-Z0-9\-.]+/,alias:"builtin"},punctuation:/[,()]/}},quantifier:{pattern:/\b\d+(?:\s*\+|\s*-\s*\d+)?(?!\w)/,alias:"number"},operator:[{pattern:/=/,alias:"pattern-def"},{pattern:/&/,alias:"conjunction"},{pattern:/~/,alias:"exception"},{pattern:/\?/,alias:"optionality"},{pattern:/[[\]]/,alias:"repetition"},{pattern:/[{}]/,alias:"variation"},{pattern:/[+_]/,alias:"sequence"},{pattern:/\.{2,3}/,alias:"span"}],"field-capture":[{pattern:/([a-zA-Z0-9\-.]+\s*\()\s*[a-zA-Z0-9\-.]+\s*:\s*[a-zA-Z0-9\-.]+(?:\s*,\s*[a-zA-Z0-9\-.]+\s*:\s*[a-zA-Z0-9\-.]+)*(?=\s*\))/,lookbehind:!0,inside:{"field-name":{pattern:/[a-zA-Z0-9\-.]+/,alias:"variable"},colon:/:/}},{pattern:/[a-zA-Z0-9\-.]+\s*:/,inside:{"field-name":{pattern:/[a-zA-Z0-9\-.]+/,alias:"variable"},colon:/:/}}],punctuation:/[:;,()]/,name:/[a-zA-Z0-9\-.]+/}}return r}var p=u();let o;o=m(p),d=c({__proto__:null,default:o},[p])});export{A as __tla,d as n};
