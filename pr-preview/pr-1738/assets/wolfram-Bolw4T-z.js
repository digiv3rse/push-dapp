import{s as f,__tla as m}from"./index-DcZ2A60_.js";let b,d=Promise.all([(()=>{try{return m}catch{}})()]).then(async()=>{function c(e,a){for(var l=0;l<a.length;l++){const t=a[l];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const o=Object.getOwnPropertyDescriptor(t,r);o&&Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n,s;function g(){if(s)return n;s=1,n=e,e.displayName="wolfram",e.aliases=["mathematica","wl","nb"];function e(a){a.languages.wolfram={comment:/\(\*(?:\(\*(?:[^*]|\*(?!\)))*\*\)|(?!\(\*)[\s\S])*?\*\)/,string:{pattern:/"(?:\\.|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:Abs|AbsArg|Accuracy|Block|Do|For|Function|If|Manipulate|Module|Nest|NestList|None|Return|Switch|Table|Which|While)\b/,context:{pattern:/\b\w+`+\w*/,alias:"class-name"},blank:{pattern:/\b\w+_\b/,alias:"regex"},"global-variable":{pattern:/\$\w+/,alias:"variable"},boolean:/\b(?:False|True)\b/,number:/(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i,operator:/\/\.|;|=\.|\^=|\^:=|:=|<<|>>|<\||\|>|:>|\|->|->|<-|@@@|@@|@|\/@|=!=|===|==|=|\+|-|\^|\[\/-+%=\]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},a.languages.mathematica=a.languages.wolfram,a.languages.wl=a.languages.wolfram,a.languages.nb=a.languages.wolfram}return n}var i=g();let u;u=f(i),b=c({__proto__:null,default:u},[i])});export{d as __tla,b as w};
