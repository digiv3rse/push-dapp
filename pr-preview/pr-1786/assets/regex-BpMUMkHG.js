import{b8 as m,__tla as y}from"./index-BpWLCwGG.js";let d,_=Promise.all([(()=>{try{return y}catch{}})()]).then(async()=>{function f(t,i){for(var n=0;n<i.length;n++){const e=i[n];if(typeof e!="string"&&!Array.isArray(e)){for(const a in e)if(a!=="default"&&!(a in t)){const r=Object.getOwnPropertyDescriptor(e,a);r&&Object.defineProperty(t,a,r.get?r:{enumerable:!0,get:()=>e[a]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var s,o;function g(){if(o)return s;o=1,s=t,t.displayName="regex",t.aliases=[];function t(i){(function(n){var e={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},a=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,r={pattern:/\.|\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},b={pattern:/\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},c="(?:[^\\\\-]|"+a.source+")",h=RegExp(c+"-"+c),u={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"};n.languages.regex={"char-class":{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"char-class-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"char-class-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:h,inside:{escape:a,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":e,"char-set":b,escape:a}},"special-escape":e,"char-set":r,backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":u}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:a,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":u}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}}})(i)}return s}var l=g();let p;p=m(l),d=f({__proto__:null,default:p},[l])});export{_ as __tla,d as r};
