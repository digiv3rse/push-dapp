import{s as u,__tla as b}from"./index-DIUHy8bX.js";import{r as g}from"./php-E3TmF6re.js";let c,y=Promise.all([(()=>{try{return b}catch{}})()]).then(async()=>{function f(t,r){for(var e=0;e<r.length;e++){const a=r[e];if(typeof a!="string"&&!Array.isArray(a)){for(const n in a)if(n!=="default"&&!(n in t)){const s=Object.getOwnPropertyDescriptor(a,n);s&&Object.defineProperty(t,n,s.get?s:{enumerable:!0,get:()=>a[n]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var o,i;function _(){if(i)return o;i=1;var t=g();o=r,r.displayName="phpExtras",r.aliases=[];function r(e){e.register(t),e.languages.insertBefore("php","variable",{this:{pattern:/\$this\b/,alias:"keyword"},global:/\$(?:GLOBALS|HTTP_RAW_POST_DATA|_(?:COOKIE|ENV|FILES|GET|POST|REQUEST|SERVER|SESSION)|argc|argv|http_response_header|php_errormsg)\b/,scope:{pattern:/\b[\w\\]+::/,inside:{keyword:/\b(?:parent|self|static)\b/,punctuation:/::|\\/}}})}return o}var l=_();let p;p=u(l),c=f({__proto__:null,default:p},[l])});export{y as __tla,c as p};
