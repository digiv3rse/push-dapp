import{cr as u,__tla as b}from"./index-Bm2A691_.js";let p,g=Promise.all([(()=>{try{return b}catch{}})()]).then(async()=>{function d(e,a){for(var o=0;o<a.length;o++){const t=a[o];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const l=Object.getOwnPropertyDescriptor(t,r);l&&Object.defineProperty(e,r,l.get?l:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n,i;function f(){if(i)return n;i=1,n=e,e.displayName="tcl",e.aliases=[];function e(a){a.languages.tcl={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},string:{pattern:/"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"/,greedy:!0},variable:[{pattern:/(\$)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/,lookbehind:!0},{pattern:/(\$)\{[^}]+\}/,lookbehind:!0},{pattern:/(^[\t ]*set[ \t]+)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/m,lookbehind:!0}],function:{pattern:/(^[\t ]*proc[ \t]+)\S+/m,lookbehind:!0},builtin:[{pattern:/(^[\t ]*)(?:break|class|continue|error|eval|exit|for|foreach|if|proc|return|switch|while)\b/m,lookbehind:!0},/\b(?:else|elseif)\b/],scope:{pattern:/(^[\t ]*)(?:global|upvar|variable)\b/m,lookbehind:!0,alias:"constant"},keyword:{pattern:/(^[\t ]*|\[)(?:Safe_Base|Tcl|after|append|apply|array|auto_(?:execok|import|load|mkindex|qualify|reset)|automkindex_old|bgerror|binary|catch|cd|chan|clock|close|concat|dde|dict|encoding|eof|exec|expr|fblocked|fconfigure|fcopy|file(?:event|name)?|flush|gets|glob|history|http|incr|info|interp|join|lappend|lassign|lindex|linsert|list|llength|load|lrange|lrepeat|lreplace|lreverse|lsearch|lset|lsort|math(?:func|op)|memory|msgcat|namespace|open|package|parray|pid|pkg_mkIndex|platform|puts|pwd|re_syntax|read|refchan|regexp|registry|regsub|rename|scan|seek|set|socket|source|split|string|subst|tcl(?:_endOfWord|_findLibrary|startOf(?:Next|Previous)Word|test|vars|wordBreak(?:After|Before))|tell|time|tm|trace|unknown|unload|unset|update|uplevel|vwait)\b/m,lookbehind:!0},operator:/!=?|\*\*?|==|&&?|\|\|?|<[=<]?|>[=>]?|[-+~\/%?^]|\b(?:eq|in|ne|ni)\b/,punctuation:/[{}()\[\]]/}}return n}var s=f();let c;c=u(s),p=d({__proto__:null,default:c},[s])});export{g as __tla,p as t};
