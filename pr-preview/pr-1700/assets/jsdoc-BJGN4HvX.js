import{s as f,__tla as b}from"./index-BkVFDz72.js";import{r as j}from"./javadoclike-myFApC35.js";import{r as y}from"./typescript-CVO-8GEc.js";let d,k=Promise.all([(()=>{try{return b}catch{}})()]).then(async()=>{function g(n,s){for(var r=0;r<s.length;r++){const t=s[r];if(typeof t!="string"&&!Array.isArray(t)){for(const e in t)if(e!=="default"&&!(e in n)){const a=Object.getOwnPropertyDescriptor(t,e);a&&Object.defineProperty(n,e,a.get?a:{enumerable:!0,get:()=>t[e]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var o,l;function m(){if(l)return o;l=1;var n=j(),s=y();o=r,r.displayName="jsdoc",r.aliases=[];function r(t){t.register(n),t.register(s),function(e){var a=e.languages.javascript,i=/\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source,c="(@(?:arg|argument|param|property)\\s+(?:"+i+"\\s+)?)";e.languages.jsdoc=e.languages.extend("javadoclike",{parameter:{pattern:RegExp(c+/(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),lookbehind:!0,inside:{punctuation:/\./}}}),e.languages.insertBefore("jsdoc","keyword",{"optional-parameter":{pattern:RegExp(c+/\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),lookbehind:!0,inside:{parameter:{pattern:/(^\[)[$\w\xA0-\uFFFF\.]+/,lookbehind:!0,inside:{punctuation:/\./}},code:{pattern:/(=)[\s\S]*(?=\]$)/,lookbehind:!0,inside:a,alias:"language-javascript"},punctuation:/[=[\]]/}},"class-name":[{pattern:RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g,function(){return i})),lookbehind:!0,inside:{punctuation:/\./}},{pattern:RegExp("(@[a-z]+\\s+)"+i),lookbehind:!0,inside:{string:a.string,number:a.number,boolean:a.boolean,keyword:e.languages.typescript.keyword,operator:/=>|\.\.\.|[&|?:*]/,punctuation:/[.,;=<>{}()[\]]/}}],example:{pattern:/(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,lookbehind:!0,inside:{code:{pattern:/^([\t ]*(?:\*\s*)?)\S.*$/m,lookbehind:!0,inside:a,alias:"language-javascript"}}}}),e.languages.javadoclike.addSupport("javascript",e.languages.jsdoc)}(t)}return o}var p=m();let u;u=f(p),d=g({__proto__:null,default:u},[p])});export{k as __tla,d as j};
