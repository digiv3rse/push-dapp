import{cr as c,__tla as b}from"./index-BT99pWj7.js";let d,g=Promise.all([(()=>{try{return b}catch{}})()]).then(async()=>{function u(e,n){for(var a=0;a<n.length;a++){const t=n[a];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const l=Object.getOwnPropertyDescriptor(t,r);l&&Object.defineProperty(e,r,l.get?l:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var i,o;function p(){if(o)return i;o=1,i=e,e.displayName="makefile",e.aliases=[];function e(n){n.languages.makefile={comment:{pattern:/(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,lookbehind:!0},string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"builtin-target":{pattern:/\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,alias:"builtin"},target:{pattern:/^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,alias:"symbol",inside:{variable:/\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/}},variable:/\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,keyword:/-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,function:{pattern:/(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,lookbehind:!0},operator:/(?:::|[?:+!])?=|[|@]/,punctuation:/[:;(){}]/}}return i}var s=p();let f;f=c(s),d=u({__proto__:null,default:f},[s])});export{g as __tla,d as m};
