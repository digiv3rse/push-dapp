import{cr as b,__tla as p}from"./index-D4u_zvI-.js";let d,f=Promise.all([(()=>{try{return p}catch{}})()]).then(async()=>{function _(t,o){for(var r=0;r<o.length;r++){const e=o[r];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in t)){const i=Object.getOwnPropertyDescriptor(e,n);i&&Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var a,s;function u(){if(s)return a;s=1,a=t,t.displayName="stan",t.aliases=[];function t(o){(function(r){var e=/\b(?:algebra_solver|algebra_solver_newton|integrate_1d|integrate_ode|integrate_ode_bdf|integrate_ode_rk45|map_rect|ode_(?:adams|bdf|ckrk|rk45)(?:_tol)?|ode_adjoint_tol_ctl|reduce_sum|reduce_sum_static)\b/;r.languages.stan={comment:/\/\/.*|\/\*[\s\S]*?\*\/|#(?!include).*/,string:{pattern:/"[\x20\x21\x23-\x5B\x5D-\x7E]*"/,greedy:!0},directive:{pattern:/^([ \t]*)#include\b.*/m,lookbehind:!0,alias:"property"},"function-arg":{pattern:RegExp("("+e.source+/\s*\(\s*/.source+")"+/[a-zA-Z]\w*/.source),lookbehind:!0,alias:"function"},constraint:{pattern:/(\b(?:int|matrix|real|row_vector|vector)\s*)<[^<>]*>/,lookbehind:!0,inside:{expression:{pattern:/(=\s*)\S(?:\S|\s+(?!\s))*?(?=\s*(?:>$|,\s*\w+\s*=))/,lookbehind:!0,inside:null},property:/\b[a-z]\w*(?=\s*=)/i,operator:/=/,punctuation:/^<|>$|,/}},keyword:[{pattern:/\bdata(?=\s*\{)|\b(?:functions|generated|model|parameters|quantities|transformed)\b/,alias:"program-block"},/\b(?:array|break|cholesky_factor_corr|cholesky_factor_cov|complex|continue|corr_matrix|cov_matrix|data|else|for|if|in|increment_log_prob|int|matrix|ordered|positive_ordered|print|real|reject|return|row_vector|simplex|target|unit_vector|vector|void|while)\b/,e],function:/\b[a-z]\w*(?=\s*\()/i,number:/(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:E[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,boolean:/\b(?:false|true)\b/,operator:/<-|\.[*/]=?|\|\|?|&&|[!=<>+\-*/]=?|['^%~?:]/,punctuation:/[()\[\]{},;]/},r.languages.stan.constraint.inside.expression.inside=r.languages.stan})(o)}return a}var c=u();let l;l=b(c),d=_({__proto__:null,default:l},[c])});export{f as __tla,d as s};
