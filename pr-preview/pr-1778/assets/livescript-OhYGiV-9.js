import{b8 as c,__tla as f}from"./index-CtaDdfTM.js";let p,g=Promise.all([(()=>{try{return f}catch{}})()]).then(async()=>{function u(e,t){for(var i=0;i<t.length;i++){const n=t[i];if(typeof n!="string"&&!Array.isArray(n)){for(const r in n)if(r!=="default"&&!(r in e)){const a=Object.getOwnPropertyDescriptor(n,r);a&&Object.defineProperty(e,r,a.get?a:{enumerable:!0,get:()=>n[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var o,l;function b(){if(l)return o;l=1,o=e,e.displayName="livescript",e.aliases=[];function e(t){t.languages.livescript={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\])#.*/,lookbehind:!0}],"interpolated-string":{pattern:/(^|[^"])("""|")(?:\\[\s\S]|(?!\2)[^\\])*\2(?!")/,lookbehind:!0,greedy:!0,inside:{variable:{pattern:/(^|[^\\])#[a-z_](?:-?[a-z]|[\d_])*/m,lookbehind:!0},interpolation:{pattern:/(^|[^\\])#\{[^}]+\}/m,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^#\{|\}$/,alias:"variable"}}},string:/[\s\S]+/}},string:[{pattern:/('''|')(?:\\[\s\S]|(?!\1)[^\\])*\1/,greedy:!0},{pattern:/<\[[\s\S]*?\]>/,greedy:!0},/\\[^\s,;\])}]+/],regex:[{pattern:/\/\/(?:\[[^\r\n\]]*\]|\\.|(?!\/\/)[^\\\[])+\/\/[gimyu]{0,5}/,greedy:!0,inside:{comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0}}},{pattern:/\/(?:\[[^\r\n\]]*\]|\\.|[^/\\\r\n\[])+\/[gimyu]{0,5}/,greedy:!0}],keyword:{pattern:/(^|(?!-).)\b(?:break|case|catch|class|const|continue|default|do|else|extends|fallthrough|finally|for(?: ever)?|function|if|implements|it|let|loop|new|null|otherwise|own|return|super|switch|that|then|this|throw|try|unless|until|var|void|when|while|yield)(?!-)\b/m,lookbehind:!0},"keyword-operator":{pattern:/(^|[^-])\b(?:(?:delete|require|typeof)!|(?:and|by|delete|export|from|import(?: all)?|in|instanceof|is(?: not|nt)?|not|of|or|til|to|typeof|with|xor)(?!-)\b)/m,lookbehind:!0,alias:"operator"},boolean:{pattern:/(^|[^-])\b(?:false|no|off|on|true|yes)(?!-)\b/m,lookbehind:!0},argument:{pattern:/(^|(?!\.&\.)[^&])&(?!&)\d*/m,lookbehind:!0,alias:"variable"},number:/\b(?:\d+~[\da-z]+|\d[\d_]*(?:\.\d[\d_]*)?(?:[a-z]\w*)?)/i,identifier:/[a-z_](?:-?[a-z]|[\d_])*/i,operator:[{pattern:/( )\.(?= )/,lookbehind:!0},/\.(?:[=~]|\.\.?)|\.(?:[&|^]|<<|>>>?)\.|:(?:=|:=?)|&&|\|[|>]|<(?:<<?<?|--?!?|~~?!?|[|=?])?|>[>=?]?|-(?:->?|>)?|\+\+?|@@?|%%?|\*\*?|!(?:~?=|--?>|~?~>)?|~(?:~?>|=)?|==?|\^\^?|[\/?]/],punctuation:/[(){}\[\]|.,:;`]/},t.languages.livescript["interpolated-string"].inside.interpolation.inside.rest=t.languages.livescript}return o}var s=b();let d;d=c(s),p=u({__proto__:null,default:d},[s])});export{g as __tla,p as l};
