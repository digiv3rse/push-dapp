import{cr as g,__tla as y}from"./index-B5chhv1j.js";let c,b=Promise.all([(()=>{try{return y}catch{}})()]).then(async()=>{function u(t,i){for(var n=0;n<i.length;n++){const r=i[n];if(typeof r!="string"&&!Array.isArray(r)){for(const e in r)if(e!=="default"&&!(e in t)){const a=Object.getOwnPropertyDescriptor(r,e);a&&Object.defineProperty(t,e,a.get?a:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var o,l;function p(){if(l)return o;l=1,o=t,t.displayName="diff",t.aliases=[];function t(i){(function(n){n.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]};var r={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(r).forEach(function(e){var a=r[e],s=[];/^\w+$/.test(e)||s.push(/\w+/.exec(e)[0]),e==="diff"&&s.push("bold"),n.languages.diff[e]={pattern:RegExp("^(?:["+a+`].*(?:\r
?|
|(?![\\s\\S])))+`,"m"),alias:s,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(e)[0]}}}}),Object.defineProperty(n.languages.diff,"PREFIXES",{value:r})})(i)}return o}var f=p();let d;d=g(f),c=u({__proto__:null,default:d},[f])});export{b as __tla,c as d};
