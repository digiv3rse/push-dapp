var w,F;function G(){if(F)return w;F=1,w=y,y.displayName="csharp",y.aliases=["dotnet","cs"];function y(N){(function(n){function s(r,c){return r.replace(/<<(\d+)>>/g,function(f,T){return"(?:"+c[+T]+")"})}function e(r,c,f){return RegExp(s(r,c),"")}function l(r,c){for(var f=0;f<c;f++)r=r.replace(/<<self>>/g,function(){return"(?:"+r+")"});return r.replace(/<<self>>/g,"[^\\s\\S]")}var a={type:"bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",typeDeclaration:"class enum interface record struct",contextual:"add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",other:"abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield"};function d(r){return"\\b(?:"+r.trim().replace(/ /g,"|")+")\\b"}var v=d(a.typeDeclaration),p=RegExp(d(a.type+" "+a.typeDeclaration+" "+a.contextual+" "+a.other)),U=d(a.typeDeclaration+" "+a.contextual+" "+a.other),Z=d(a.type+" "+a.typeDeclaration+" "+a.other),g=l(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),b=l(/\((?:[^()]|<<self>>)*\)/.source,2),o=/@?\b[A-Za-z_]\w*\b/.source,h=s(/<<0>>(?:\s*<<1>>)?/.source,[o,g]),i=s(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[U,h]),m=/\[\s*(?:,\s*)*\]/.source,q=s(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source,[i,m]),C=s(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[g,b,m]),I=s(/\(<<0>>+(?:,<<0>>+)+\)/.source,[C]),u=s(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[I,i,m]),t={keyword:p,punctuation:/[<>()?,.:[\]]/},x=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,$=/"(?:\\.|[^\\"\r\n])*"/.source,K=/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;n.languages.csharp=n.languages.extend("clike",{string:[{pattern:e(/(^|[^$\\])<<0>>/.source,[K]),lookbehind:!0,greedy:!0},{pattern:e(/(^|[^@$\\])<<0>>/.source,[$]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:e(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[i]),lookbehind:!0,inside:t},{pattern:e(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[o,u]),lookbehind:!0,inside:t},{pattern:e(/(\busing\s+)<<0>>(?=\s*=)/.source,[o]),lookbehind:!0},{pattern:e(/(\b<<0>>\s+)<<1>>/.source,[v,h]),lookbehind:!0,inside:t},{pattern:e(/(\bcatch\s*\(\s*)<<0>>/.source,[i]),lookbehind:!0,inside:t},{pattern:e(/(\bwhere\s+)<<0>>/.source,[o]),lookbehind:!0},{pattern:e(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source,[q]),lookbehind:!0,inside:t},{pattern:e(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source,[u,Z,o]),inside:t}],keyword:p,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),n.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),n.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:e(/([(,]\s*)<<0>>(?=\s*:)/.source,[o]),lookbehind:!0,alias:"punctuation"}}),n.languages.insertBefore("csharp","class-name",{namespace:{pattern:e(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[o]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:e(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source,[b]),lookbehind:!0,alias:"class-name",inside:t},"return-type":{pattern:e(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[u,i]),inside:t,alias:"class-name"},"constructor-invocation":{pattern:e(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[u]),lookbehind:!0,inside:t,alias:"class-name"},"generic-method":{pattern:e(/<<0>>\s*<<1>>(?=\s*\()/.source,[o,g]),inside:{function:e(/^<<0>>/.source,[o]),generic:{pattern:RegExp(g),alias:"class-name",inside:t}}},"type-list":{pattern:e(/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[v,h,o,u,p.source,b,/\bnew\s*\(\s*\)/.source]),lookbehind:!0,inside:{"record-arguments":{pattern:e(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source,[h,b]),lookbehind:!0,greedy:!0,inside:n.languages.csharp},keyword:p,"class-name":{pattern:RegExp(u),greedy:!0,inside:t},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var _=$+"|"+x,B=s(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source,[_]),E=l(s(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[B]),2),R=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,O=s(/<<0>>(?:\s*\(<<1>>*\))?/.source,[i,E]);n.languages.insertBefore("csharp","class-name",{attribute:{pattern:e(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[R,O]),lookbehind:!0,greedy:!0,inside:{target:{pattern:e(/^<<0>>(?=\s*:)/.source,[R]),alias:"keyword"},"attribute-arguments":{pattern:e(/\(<<0>>*\)/.source,[E]),inside:n.languages.csharp},"class-name":{pattern:RegExp(i),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var k=/:[^}\r\n]+/.source,D=l(s(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[B]),2),S=s(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[D,k]),j=l(s(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source,[_]),2),z=s(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[j,k]);function A(r,c){return{interpolation:{pattern:e(/((?:^|[^{])(?:\{\{)*)<<0>>/.source,[r]),lookbehind:!0,inside:{"format-string":{pattern:e(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[c,k]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:n.languages.csharp}}},string:/[\s\S]+/}}n.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:e(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[S]),lookbehind:!0,greedy:!0,inside:A(S,D)},{pattern:e(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[z]),lookbehind:!0,greedy:!0,inside:A(z,j)}],char:{pattern:RegExp(x),greedy:!0}}),n.languages.dotnet=n.languages.cs=n.languages.csharp})(N)}return w}export{G as r};
