import{bL as f,__tla as b}from"./index-DGS2C2HC.js";let p,g=Promise.all([(()=>{try{return b}catch{}})()]).then(async()=>{function u(e,t){for(var a=0;a<t.length;a++){const o=t[a];if(typeof o!="string"&&!Array.isArray(o)){for(const r in o)if(r!=="default"&&!(r in e)){const l=Object.getOwnPropertyDescriptor(o,r);l&&Object.defineProperty(e,r,l.get?l:{enumerable:!0,get:()=>o[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n,i;function d(){if(i)return n;i=1,n=e,e.displayName="peoplecode",e.aliases=["pcode"];function e(t){t.languages.peoplecode={comment:RegExp([/\/\*[\s\S]*?\*\//.source,/\bREM[^;]*;/.source,/<\*(?:[^<*]|\*(?!>)|<(?!\*)|<\*(?:(?!\*>)[\s\S])*\*>)*\*>/.source,/\/\+[\s\S]*?\+\//.source].join("|")),string:{pattern:/'(?:''|[^'\r\n])*'(?!')|"(?:""|[^"\r\n])*"(?!")/,greedy:!0},variable:/%\w+/,"function-definition":{pattern:/((?:^|[^\w-])(?:function|method)\s+)\w+/i,lookbehind:!0,alias:"function"},"class-name":{pattern:/((?:^|[^-\w])(?:as|catch|class|component|create|extends|global|implements|instance|local|of|property|returns)\s+)\w+(?::\w+)*/i,lookbehind:!0,inside:{punctuation:/:/}},keyword:/\b(?:abstract|alias|as|catch|class|component|constant|create|declare|else|end-(?:class|evaluate|for|function|get|if|method|set|try|while)|evaluate|extends|for|function|get|global|if|implements|import|instance|library|local|method|null|of|out|peopleCode|private|program|property|protected|readonly|ref|repeat|returns?|set|step|then|throw|to|try|until|value|when(?:-other)?|while)\b/i,"operator-keyword":{pattern:/\b(?:and|not|or)\b/i,alias:"operator"},function:/[_a-z]\w*(?=\s*\()/i,boolean:/\b(?:false|true)\b/i,number:/\b\d+(?:\.\d+)?\b/,operator:/<>|[<>]=?|!=|\*\*|[-+*/|=@]/,punctuation:/[:.;,()[\]]/},t.languages.pcode=t.languages.peoplecode}return n}var s=d();let c;c=f(s),p=u({__proto__:null,default:c},[s])});export{g as __tla,p};
