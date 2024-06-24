import{cB as Ht,__tla as kt}from"./index-B5chhv1j.js";let be,Yt=Promise.all([(()=>{try{return kt}catch{}})()]).then(async()=>{var Z={exports:{}};const _e="2.0.0",ce=256,xe=Number.MAX_SAFE_INTEGER||9007199254740991,Ve=16,Be=ce-6;var x={MAX_LENGTH:ce,MAX_SAFE_COMPONENT_LENGTH:Ve,MAX_SAFE_BUILD_LENGTH:Be,MAX_SAFE_INTEGER:xe,RELEASE_TYPES:["major","premajor","minor","preminor","patch","prepatch","prerelease"],SEMVER_SPEC_VERSION:_e,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2},Q={},V=typeof Ht=="object"&&Q&&Q.NODE_DEBUG&&/\bsemver\b/i.test(Q.NODE_DEBUG)?(...t)=>console.error("SEMVER",...t):()=>{};(function(t,e){const{MAX_SAFE_COMPONENT_LENGTH:r,MAX_SAFE_BUILD_LENGTH:s,MAX_LENGTH:a}=x,i=V;e=t.exports={};const R=e.re=[],$=e.safeRe=[],n=e.src=[],o=e.t={};let p=0;const m="[a-zA-Z0-9-]",T=[["\\s",1],["\\d",a],[m,s]],E=G=>{for(const[w,M]of T)G=G.split(`${w}*`).join(`${w}{0,${M}}`).split(`${w}+`).join(`${w}{1,${M}}`);return G},u=(G,w,M)=>{const g=E(w),F=p++;i(G,F,w),o[G]=F,n[F]=w,R[F]=new RegExp(w,M?"g":void 0),$[F]=new RegExp(g,M?"g":void 0)};u("NUMERICIDENTIFIER","0|[1-9]\\d*"),u("NUMERICIDENTIFIERLOOSE","\\d+"),u("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${m}*`),u("MAINVERSION",`(${n[o.NUMERICIDENTIFIER]})\\.(${n[o.NUMERICIDENTIFIER]})\\.(${n[o.NUMERICIDENTIFIER]})`),u("MAINVERSIONLOOSE",`(${n[o.NUMERICIDENTIFIERLOOSE]})\\.(${n[o.NUMERICIDENTIFIERLOOSE]})\\.(${n[o.NUMERICIDENTIFIERLOOSE]})`),u("PRERELEASEIDENTIFIER",`(?:${n[o.NUMERICIDENTIFIER]}|${n[o.NONNUMERICIDENTIFIER]})`),u("PRERELEASEIDENTIFIERLOOSE",`(?:${n[o.NUMERICIDENTIFIERLOOSE]}|${n[o.NONNUMERICIDENTIFIER]})`),u("PRERELEASE",`(?:-(${n[o.PRERELEASEIDENTIFIER]}(?:\\.${n[o.PRERELEASEIDENTIFIER]})*))`),u("PRERELEASELOOSE",`(?:-?(${n[o.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${n[o.PRERELEASEIDENTIFIERLOOSE]})*))`),u("BUILDIDENTIFIER",`${m}+`),u("BUILD",`(?:\\+(${n[o.BUILDIDENTIFIER]}(?:\\.${n[o.BUILDIDENTIFIER]})*))`),u("FULLPLAIN",`v?${n[o.MAINVERSION]}${n[o.PRERELEASE]}?${n[o.BUILD]}?`),u("FULL",`^${n[o.FULLPLAIN]}$`),u("LOOSEPLAIN",`[v=\\s]*${n[o.MAINVERSIONLOOSE]}${n[o.PRERELEASELOOSE]}?${n[o.BUILD]}?`),u("LOOSE",`^${n[o.LOOSEPLAIN]}$`),u("GTLT","((?:<|>)?=?)"),u("XRANGEIDENTIFIERLOOSE",`${n[o.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),u("XRANGEIDENTIFIER",`${n[o.NUMERICIDENTIFIER]}|x|X|\\*`),u("XRANGEPLAIN",`[v=\\s]*(${n[o.XRANGEIDENTIFIER]})(?:\\.(${n[o.XRANGEIDENTIFIER]})(?:\\.(${n[o.XRANGEIDENTIFIER]})(?:${n[o.PRERELEASE]})?${n[o.BUILD]}?)?)?`),u("XRANGEPLAINLOOSE",`[v=\\s]*(${n[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${n[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${n[o.XRANGEIDENTIFIERLOOSE]})(?:${n[o.PRERELEASELOOSE]})?${n[o.BUILD]}?)?)?`),u("XRANGE",`^${n[o.GTLT]}\\s*${n[o.XRANGEPLAIN]}$`),u("XRANGELOOSE",`^${n[o.GTLT]}\\s*${n[o.XRANGEPLAINLOOSE]}$`),u("COERCEPLAIN",`(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`),u("COERCE",`${n[o.COERCEPLAIN]}(?:$|[^\\d])`),u("COERCEFULL",n[o.COERCEPLAIN]+`(?:${n[o.PRERELEASE]})?(?:${n[o.BUILD]})?(?:$|[^\\d])`),u("COERCERTL",n[o.COERCE],!0),u("COERCERTLFULL",n[o.COERCEFULL],!0),u("LONETILDE","(?:~>?)"),u("TILDETRIM",`(\\s*)${n[o.LONETILDE]}\\s+`,!0),e.tildeTrimReplace="$1~",u("TILDE",`^${n[o.LONETILDE]}${n[o.XRANGEPLAIN]}$`),u("TILDELOOSE",`^${n[o.LONETILDE]}${n[o.XRANGEPLAINLOOSE]}$`),u("LONECARET","(?:\\^)"),u("CARETTRIM",`(\\s*)${n[o.LONECARET]}\\s+`,!0),e.caretTrimReplace="$1^",u("CARET",`^${n[o.LONECARET]}${n[o.XRANGEPLAIN]}$`),u("CARETLOOSE",`^${n[o.LONECARET]}${n[o.XRANGEPLAINLOOSE]}$`),u("COMPARATORLOOSE",`^${n[o.GTLT]}\\s*(${n[o.LOOSEPLAIN]})$|^$`),u("COMPARATOR",`^${n[o.GTLT]}\\s*(${n[o.FULLPLAIN]})$|^$`),u("COMPARATORTRIM",`(\\s*)${n[o.GTLT]}\\s*(${n[o.LOOSEPLAIN]}|${n[o.XRANGEPLAIN]})`,!0),e.comparatorTrimReplace="$1$2$3",u("HYPHENRANGE",`^\\s*(${n[o.XRANGEPLAIN]})\\s+-\\s+(${n[o.XRANGEPLAIN]})\\s*$`),u("HYPHENRANGELOOSE",`^\\s*(${n[o.XRANGEPLAINLOOSE]})\\s+-\\s+(${n[o.XRANGEPLAINLOOSE]})\\s*$`),u("STAR","(<|>)?=?\\s*\\*"),u("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),u("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")})(Z,Z.exports);var X=Z.exports;const He=Object.freeze({loose:!0}),ke=Object.freeze({});var J=t=>t?typeof t!="object"?He:t:ke;const Ee=/^[0-9]+$/,$e=(t,e)=>{const r=Ee.test(t),s=Ee.test(e);return r&&s&&(t=+t,e=+e),t===e?0:r&&!s?-1:s&&!r?1:t<e?-1:1};var me={compareIdentifiers:$e,rcompareIdentifiers:(t,e)=>$e(e,t)};const B=V,{MAX_LENGTH:ue,MAX_SAFE_INTEGER:H}=x,{safeRe:Ie,t:fe}=X,Ye=J,{compareIdentifiers:j}=me;var d=class D{constructor(e,r){if(r=Ye(r),e instanceof D){if(e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease)return e;e=e.version}else if(typeof e!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>ue)throw new TypeError(`version is longer than ${ue} characters`);B("SemVer",e,r),this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease;const s=e.trim().match(r.loose?Ie[fe.LOOSE]:Ie[fe.FULL]);if(!s)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+s[1],this.minor=+s[2],this.patch=+s[3],this.major>H||this.major<0)throw new TypeError("Invalid major version");if(this.minor>H||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>H||this.patch<0)throw new TypeError("Invalid patch version");s[4]?this.prerelease=s[4].split(".").map(a=>{if(/^[0-9]+$/.test(a)){const i=+a;if(i>=0&&i<H)return i}return a}):this.prerelease=[],this.build=s[5]?s[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(B("SemVer.compare",this.version,this.options,e),!(e instanceof D)){if(typeof e=="string"&&e===this.version)return 0;e=new D(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof D||(e=new D(e,this.options)),j(this.major,e.major)||j(this.minor,e.minor)||j(this.patch,e.patch)}comparePre(e){if(e instanceof D||(e=new D(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let r=0;do{const s=this.prerelease[r],a=e.prerelease[r];if(B("prerelease compare",r,s,a),s===void 0&&a===void 0)return 0;if(a===void 0)return 1;if(s===void 0)return-1;if(s!==a)return j(s,a)}while(++r)}compareBuild(e){e instanceof D||(e=new D(e,this.options));let r=0;do{const s=this.build[r],a=e.build[r];if(B("build compare",r,s,a),s===void 0&&a===void 0)return 0;if(a===void 0)return 1;if(s===void 0)return-1;if(s!==a)return j(s,a)}while(++r)}inc(e,r,s){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r,s);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r,s);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r,s),this.inc("pre",r,s);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",r,s),this.inc("pre",r,s);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{const a=Number(s)?1:0;if(!r&&s===!1)throw new Error("invalid increment argument: identifier is empty");if(this.prerelease.length===0)this.prerelease=[a];else{let i=this.prerelease.length;for(;--i>=0;)typeof this.prerelease[i]=="number"&&(this.prerelease[i]++,i=-2);if(i===-1){if(r===this.prerelease.join(".")&&s===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(a)}}if(r){let i=[r,a];s===!1&&(i=[r]),j(this.prerelease[0],r)===0?isNaN(this.prerelease[1])&&(this.prerelease=i):this.prerelease=i}break}default:throw new Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};const ve=d;var y=(t,e,r=!1)=>{if(t instanceof ve)return t;try{return new ve(t,e)}catch(s){if(!r)return null;throw s}};const We=y;var ze=(t,e)=>{const r=We(t,e);return r?r.version:null};const qe=y;var Ze=(t,e)=>{const r=qe(t.trim().replace(/^[=v]+/,""),e);return r?r.version:null};const Re=d;var Qe=(t,e,r,s,a)=>{typeof r=="string"&&(a=s,s=r,r=void 0);try{return new Re(t instanceof Re?t.version:t,r).inc(e,s,a).version}catch{return null}};const Le=y;var Je=(t,e)=>{const r=Le(t,null,!0),s=Le(e,null,!0),a=r.compare(s);if(a===0)return null;const i=a>0,R=i?r:s,$=i?s:r,n=!!R.prerelease.length;if($.prerelease.length&&!n)return!$.patch&&!$.minor?"major":R.patch?"patch":R.minor?"minor":"major";const o=n?"pre":"";return r.major!==s.major?o+"major":r.minor!==s.minor?o+"minor":r.patch!==s.patch?o+"patch":"prerelease"};const Ke=d;var er=(t,e)=>new Ke(t,e).major;const rr=d;var tr=(t,e)=>new rr(t,e).minor;const sr=d;var nr=(t,e)=>new sr(t,e).patch;const ir=y;var or=(t,e)=>{const r=ir(t,e);return r&&r.prerelease.length?r.prerelease:null};const Ae=d;var P=(t,e,r)=>new Ae(t,r).compare(new Ae(e,r));const ar=P;var lr=(t,e,r)=>ar(e,t,r);const hr=P;var pr=(t,e)=>hr(t,e,!0);const Ne=d;var K=(t,e,r)=>{const s=new Ne(t,r),a=new Ne(e,r);return s.compare(a)||s.compareBuild(a)};const cr=K;var Er=(t,e)=>t.sort((r,s)=>cr(r,s,e));const $r=K;var mr=(t,e)=>t.sort((r,s)=>$r(s,r,e));const ur=P;var k=(t,e,r)=>ur(t,e,r)>0;const Ir=P;var ee=(t,e,r)=>Ir(t,e,r)<0;const fr=P;var Te=(t,e,r)=>fr(t,e,r)===0;const vr=P;var Oe=(t,e,r)=>vr(t,e,r)!==0;const Rr=P;var re=(t,e,r)=>Rr(t,e,r)>=0;const Lr=P;var te=(t,e,r)=>Lr(t,e,r)<=0;const Ar=Te,Nr=Oe,Tr=k,Or=re,Sr=ee,gr=te;var Se=(t,e,r,s)=>{switch(e){case"===":return typeof t=="object"&&(t=t.version),typeof r=="object"&&(r=r.version),t===r;case"!==":return typeof t=="object"&&(t=t.version),typeof r=="object"&&(r=r.version),t!==r;case"":case"=":case"==":return Ar(t,r,s);case"!=":return Nr(t,r,s);case">":return Tr(t,r,s);case">=":return Or(t,r,s);case"<":return Sr(t,r,s);case"<=":return gr(t,r,s);default:throw new TypeError(`Invalid operator: ${e}`)}};const dr=d,wr=y,{safeRe:Y,t:W}=X;var Pr=(t,e)=>{if(t instanceof dr)return t;if(typeof t=="number"&&(t=String(t)),typeof t!="string")return null;e=e||{};let r=null;if(!e.rtl)r=t.match(e.includePrerelease?Y[W.COERCEFULL]:Y[W.COERCE]);else{const n=e.includePrerelease?Y[W.COERCERTLFULL]:Y[W.COERCERTL];let o;for(;(o=n.exec(t))&&(!r||r.index+r[0].length!==t.length);)(!r||o.index+o[0].length!==r.index+r[0].length)&&(r=o),n.lastIndex=o.index+o[1].length+o[2].length;n.lastIndex=-1}if(r===null)return null;const s=r[2],a=r[3]||"0",i=r[4]||"0",R=e.includePrerelease&&r[5]?`-${r[5]}`:"",$=e.includePrerelease&&r[6]?`+${r[6]}`:"";return wr(`${s}.${a}.${i}${R}${$}`,e)};class Cr{constructor(){this.max=1e3,this.map=new Map}get(e){const r=this.map.get(e);if(r!==void 0)return this.map.delete(e),this.map.set(e,r),r}delete(e){return this.map.delete(e)}set(e,r){if(!this.delete(e)&&r!==void 0){if(this.map.size>=this.max){const s=this.map.keys().next().value;this.delete(s)}this.map.set(e,r)}return this}}var Dr=Cr,se,ge;function C(){if(ge)return se;ge=1;class t{constructor(l,v){if(v=s(v),l instanceof t)return l.loose===!!v.loose&&l.includePrerelease===!!v.includePrerelease?l:new t(l.raw,v);if(l instanceof a)return this.raw=l.value,this.set=[[l]],this.format(),this;if(this.options=v,this.loose=!!v.loose,this.includePrerelease=!!v.includePrerelease,this.raw=l.trim().split(/\s+/).join(" "),this.set=this.raw.split("||").map(I=>this.parseRange(I.trim())).filter(I=>I.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){const I=this.set[0];if(this.set=this.set.filter(f=>!u(f[0])),this.set.length===0)this.set=[I];else if(this.set.length>1){for(const f of this.set)if(f.length===1&&G(f[0])){this.set=[f];break}}}this.format()}format(){return this.range=this.set.map(l=>l.join(" ").trim()).join("||").trim(),this.range}toString(){return this.range}parseRange(l){const v=((this.options.includePrerelease&&T)|(this.options.loose&&E))+":"+l,I=r.get(v);if(I)return I;const f=this.options.loose,c=f?$[n.HYPHENRANGELOOSE]:$[n.HYPHENRANGE];l=l.replace(c,Vt(this.options.includePrerelease)),i("hyphen replace",l),l=l.replace($[n.COMPARATORTRIM],o),i("comparator trim",l),l=l.replace($[n.TILDETRIM],p),i("tilde trim",l),l=l.replace($[n.CARETTRIM],m),i("caret trim",l);let L=l.split(" ").map(S=>M(S,this.options)).join(" ").split(/\s+/).map(S=>xt(S,this.options));f&&(L=L.filter(S=>(i("loose invalid filter",S,this.options),!!S.match($[n.COMPARATORLOOSE])))),i("range list",L);const N=new Map,A=L.map(S=>new a(S,this.options));for(const S of A){if(u(S))return[S];N.set(S.value,S)}N.size>1&&N.has("")&&N.delete("");const O=[...N.values()];return r.set(v,O),O}intersects(l,v){if(!(l instanceof t))throw new TypeError("a Range is required");return this.set.some(I=>w(I,v)&&l.set.some(f=>w(f,v)&&I.every(c=>f.every(L=>c.intersects(L,v)))))}test(l){if(!l)return!1;if(typeof l=="string")try{l=new R(l,this.options)}catch{return!1}for(let v=0;v<this.set.length;v++)if(Bt(this.set[v],l,this.options))return!0;return!1}}se=t;const e=Dr,r=new e,s=J,a=z(),i=V,R=d,{safeRe:$,t:n,comparatorTrimReplace:o,tildeTrimReplace:p,caretTrimReplace:m}=X,{FLAG_INCLUDE_PRERELEASE:T,FLAG_LOOSE:E}=x,u=h=>h.value==="<0.0.0-0",G=h=>h.value==="",w=(h,l)=>{let v=!0;const I=h.slice();let f=I.pop();for(;v&&I.length;)v=I.every(c=>f.intersects(c,l)),f=I.pop();return v},M=(h,l)=>(i("comp",h,l),h=yt(h,l),i("caret",h),h=F(h,l),i("tildes",h),h=Xt(h,l),i("xrange",h),h=_t(h,l),i("stars",h),h),g=h=>!h||h.toLowerCase()==="x"||h==="*",F=(h,l)=>h.trim().split(/\s+/).map(v=>jt(v,l)).join(" "),jt=(h,l)=>{const v=l.loose?$[n.TILDELOOSE]:$[n.TILDE];return h.replace(v,(I,f,c,L,N)=>{i("tilde",h,I,f,c,L,N);let A;return g(f)?A="":g(c)?A=`>=${f}.0.0 <${+f+1}.0.0-0`:g(L)?A=`>=${f}.${c}.0 <${f}.${+c+1}.0-0`:N?(i("replaceTilde pr",N),A=`>=${f}.${c}.${L}-${N} <${f}.${+c+1}.0-0`):A=`>=${f}.${c}.${L} <${f}.${+c+1}.0-0`,i("tilde return",A),A})},yt=(h,l)=>h.trim().split(/\s+/).map(v=>Ut(v,l)).join(" "),Ut=(h,l)=>{i("caret",h,l);const v=l.loose?$[n.CARETLOOSE]:$[n.CARET],I=l.includePrerelease?"-0":"";return h.replace(v,(f,c,L,N,A)=>{i("caret",h,f,c,L,N,A);let O;return g(c)?O="":g(L)?O=`>=${c}.0.0${I} <${+c+1}.0.0-0`:g(N)?c==="0"?O=`>=${c}.${L}.0${I} <${c}.${+L+1}.0-0`:O=`>=${c}.${L}.0${I} <${+c+1}.0.0-0`:A?(i("replaceCaret pr",A),c==="0"?L==="0"?O=`>=${c}.${L}.${N}-${A} <${c}.${L}.${+N+1}-0`:O=`>=${c}.${L}.${N}-${A} <${c}.${+L+1}.0-0`:O=`>=${c}.${L}.${N}-${A} <${+c+1}.0.0-0`):(i("no pr"),c==="0"?L==="0"?O=`>=${c}.${L}.${N}${I} <${c}.${L}.${+N+1}-0`:O=`>=${c}.${L}.${N}${I} <${c}.${+L+1}.0-0`:O=`>=${c}.${L}.${N} <${+c+1}.0.0-0`),i("caret return",O),O})},Xt=(h,l)=>(i("replaceXRanges",h,l),h.split(/\s+/).map(v=>bt(v,l)).join(" ")),bt=(h,l)=>{h=h.trim();const v=l.loose?$[n.XRANGELOOSE]:$[n.XRANGE];return h.replace(v,(I,f,c,L,N,A)=>{i("xRange",h,I,f,c,L,N,A);const O=g(c),S=O||g(L),U=S||g(N),_=U;return f==="="&&_&&(f=""),A=l.includePrerelease?"-0":"",O?f===">"||f==="<"?I="<0.0.0-0":I="*":f&&_?(S&&(L=0),N=0,f===">"?(f=">=",S?(c=+c+1,L=0,N=0):(L=+L+1,N=0)):f==="<="&&(f="<",S?c=+c+1:L=+L+1),f==="<"&&(A="-0"),I=`${f+c}.${L}.${N}${A}`):S?I=`>=${c}.0.0${A} <${+c+1}.0.0-0`:U&&(I=`>=${c}.${L}.0${A} <${c}.${+L+1}.0-0`),i("xRange return",I),I})},_t=(h,l)=>(i("replaceStars",h,l),h.trim().replace($[n.STAR],"")),xt=(h,l)=>(i("replaceGTE0",h,l),h.trim().replace($[l.includePrerelease?n.GTE0PRE:n.GTE0],"")),Vt=h=>(l,v,I,f,c,L,N,A,O,S,U,_)=>(g(I)?v="":g(f)?v=`>=${I}.0.0${h?"-0":""}`:g(c)?v=`>=${I}.${f}.0${h?"-0":""}`:L?v=`>=${v}`:v=`>=${v}${h?"-0":""}`,g(O)?A="":g(S)?A=`<${+O+1}.0.0-0`:g(U)?A=`<${O}.${+S+1}.0-0`:_?A=`<=${O}.${S}.${U}-${_}`:h?A=`<${O}.${S}.${+U+1}-0`:A=`<=${A}`,`${v} ${A}`.trim()),Bt=(h,l,v)=>{for(let I=0;I<h.length;I++)if(!h[I].test(l))return!1;if(l.prerelease.length&&!v.includePrerelease){for(let I=0;I<h.length;I++)if(i(h[I].semver),h[I].semver!==a.ANY&&h[I].semver.prerelease.length>0){const f=h[I].semver;if(f.major===l.major&&f.minor===l.minor&&f.patch===l.patch)return!0}return!1}return!0};return se}var ne,de;function z(){if(de)return ne;de=1;const t=Symbol("SemVer ANY");class e{static get ANY(){return t}constructor(p,m){if(m=r(m),p instanceof e){if(p.loose===!!m.loose)return p;p=p.value}p=p.trim().split(/\s+/).join(" "),R("comparator",p,m),this.options=m,this.loose=!!m.loose,this.parse(p),this.semver===t?this.value="":this.value=this.operator+this.semver.version,R("comp",this)}parse(p){const m=this.options.loose?s[a.COMPARATORLOOSE]:s[a.COMPARATOR],T=p.match(m);if(!T)throw new TypeError(`Invalid comparator: ${p}`);this.operator=T[1]!==void 0?T[1]:"",this.operator==="="&&(this.operator=""),T[2]?this.semver=new $(T[2],this.options.loose):this.semver=t}toString(){return this.value}test(p){if(R("Comparator.test",p,this.options.loose),this.semver===t||p===t)return!0;if(typeof p=="string")try{p=new $(p,this.options)}catch{return!1}return i(p,this.operator,this.semver,this.options)}intersects(p,m){if(!(p instanceof e))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new n(p.value,m).test(this.value):p.operator===""?p.value===""?!0:new n(this.value,m).test(p.semver):(m=r(m),m.includePrerelease&&(this.value==="<0.0.0-0"||p.value==="<0.0.0-0")||!m.includePrerelease&&(this.value.startsWith("<0.0.0")||p.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&p.operator.startsWith(">")||this.operator.startsWith("<")&&p.operator.startsWith("<")||this.semver.version===p.semver.version&&this.operator.includes("=")&&p.operator.includes("=")||i(this.semver,"<",p.semver,m)&&this.operator.startsWith(">")&&p.operator.startsWith("<")||i(this.semver,">",p.semver,m)&&this.operator.startsWith("<")&&p.operator.startsWith(">")))}}ne=e;const r=J,{safeRe:s,t:a}=X,i=Se,R=V,$=d,n=C();return ne}const Gr=C();var q=(t,e,r)=>{try{e=new Gr(e,r)}catch{return!1}return e.test(t)};const Mr=C();var Fr=(t,e)=>new Mr(t,e).set.map(r=>r.map(s=>s.value).join(" ").trim().split(" "));const jr=d,yr=C();var Ur=(t,e,r)=>{let s=null,a=null,i=null;try{i=new yr(e,r)}catch{return null}return t.forEach(R=>{i.test(R)&&(!s||a.compare(R)===-1)&&(s=R,a=new jr(s,r))}),s};const Xr=d,br=C();var _r=(t,e,r)=>{let s=null,a=null,i=null;try{i=new br(e,r)}catch{return null}return t.forEach(R=>{i.test(R)&&(!s||a.compare(R)===1)&&(s=R,a=new Xr(s,r))}),s};const ie=d,xr=C(),we=k;var Vr=(t,e)=>{t=new xr(t,e);let r=new ie("0.0.0");if(t.test(r)||(r=new ie("0.0.0-0"),t.test(r)))return r;r=null;for(let s=0;s<t.set.length;++s){const a=t.set[s];let i=null;a.forEach(R=>{const $=new ie(R.semver.version);switch(R.operator){case">":$.prerelease.length===0?$.patch++:$.prerelease.push(0),$.raw=$.format();case"":case">=":(!i||we($,i))&&(i=$);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${R.operator}`)}}),i&&(!r||we(r,i))&&(r=i)}return r&&t.test(r)?r:null};const Br=C();var Hr=(t,e)=>{try{return new Br(t,e).range||"*"}catch{return null}};const kr=d,Pe=z(),{ANY:Yr}=Pe,Wr=C(),zr=q,Ce=k,De=ee,qr=te,Zr=re;var oe=(t,e,r,s)=>{t=new kr(t,s),e=new Wr(e,s);let a,i,R,$,n;switch(r){case">":a=Ce,i=qr,R=De,$=">",n=">=";break;case"<":a=De,i=Zr,R=Ce,$="<",n="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(zr(t,e,s))return!1;for(let o=0;o<e.set.length;++o){const p=e.set[o];let m=null,T=null;if(p.forEach(E=>{E.semver===Yr&&(E=new Pe(">=0.0.0")),m=m||E,T=T||E,a(E.semver,m.semver,s)?m=E:R(E.semver,T.semver,s)&&(T=E)}),m.operator===$||m.operator===n||(!T.operator||T.operator===$)&&i(t,T.semver)||T.operator===n&&R(t,T.semver))return!1}return!0};const Qr=oe;var Jr=(t,e,r)=>Qr(t,e,">",r);const Kr=oe;var et=(t,e,r)=>Kr(t,e,"<",r);const Ge=C();var rt=(t,e,r)=>(t=new Ge(t,r),e=new Ge(e,r),t.intersects(e,r));const tt=q,st=P;var nt=(t,e,r)=>{const s=[];let a=null,i=null;const R=t.sort((p,m)=>st(p,m,r));for(const p of R)tt(p,e,r)?(i=p,a||(a=p)):(i&&s.push([a,i]),i=null,a=null);a&&s.push([a,null]);const $=[];for(const[p,m]of s)p===m?$.push(p):!m&&p===R[0]?$.push("*"):m?p===R[0]?$.push(`<=${m}`):$.push(`${p} - ${m}`):$.push(`>=${p}`);const n=$.join(" || "),o=typeof e.raw=="string"?e.raw:String(e);return n.length<o.length?n:e};const Me=C(),ae=z(),{ANY:le}=ae,b=q,he=P,it=(t,e,r={})=>{if(t===e)return!0;t=new Me(t,r),e=new Me(e,r);let s=!1;e:for(const a of t.set){for(const i of e.set){const R=at(a,i,r);if(s=s||R!==null,R)continue e}if(s)return!1}return!0},ot=[new ae(">=0.0.0-0")],Fe=[new ae(">=0.0.0")],at=(t,e,r)=>{if(t===e)return!0;if(t.length===1&&t[0].semver===le){if(e.length===1&&e[0].semver===le)return!0;r.includePrerelease?t=ot:t=Fe}if(e.length===1&&e[0].semver===le){if(r.includePrerelease)return!0;e=Fe}const s=new Set;let a,i;for(const E of t)E.operator===">"||E.operator===">="?a=je(a,E,r):E.operator==="<"||E.operator==="<="?i=ye(i,E,r):s.add(E.semver);if(s.size>1)return null;let R;if(a&&i&&(R=he(a.semver,i.semver,r),R>0||R===0&&(a.operator!==">="||i.operator!=="<=")))return null;for(const E of s){if(a&&!b(E,String(a),r)||i&&!b(E,String(i),r))return null;for(const u of e)if(!b(E,String(u),r))return!1;return!0}let $,n,o,p,m=i&&!r.includePrerelease&&i.semver.prerelease.length?i.semver:!1,T=a&&!r.includePrerelease&&a.semver.prerelease.length?a.semver:!1;m&&m.prerelease.length===1&&i.operator==="<"&&m.prerelease[0]===0&&(m=!1);for(const E of e){if(p=p||E.operator===">"||E.operator===">=",o=o||E.operator==="<"||E.operator==="<=",a){if(T&&E.semver.prerelease&&E.semver.prerelease.length&&E.semver.major===T.major&&E.semver.minor===T.minor&&E.semver.patch===T.patch&&(T=!1),E.operator===">"||E.operator===">="){if($=je(a,E,r),$===E&&$!==a)return!1}else if(a.operator===">="&&!b(a.semver,String(E),r))return!1}if(i){if(m&&E.semver.prerelease&&E.semver.prerelease.length&&E.semver.major===m.major&&E.semver.minor===m.minor&&E.semver.patch===m.patch&&(m=!1),E.operator==="<"||E.operator==="<="){if(n=ye(i,E,r),n===E&&n!==i)return!1}else if(i.operator==="<="&&!b(i.semver,String(E),r))return!1}if(!E.operator&&(i||a)&&R!==0)return!1}return!(a&&o&&!i&&R!==0||i&&p&&!a&&R!==0||T||m)},je=(t,e,r)=>{if(!t)return e;const s=he(t.semver,e.semver,r);return s>0?t:s<0||e.operator===">"&&t.operator===">="?e:t},ye=(t,e,r)=>{if(!t)return e;const s=he(t.semver,e.semver,r);return s<0?t:s>0||e.operator==="<"&&t.operator==="<="?e:t};var lt=it;const pe=X,Ue=x,ht=d,Xe=me,pt=y,ct=ze,Et=Ze,$t=Qe,mt=Je,ut=er,It=tr,ft=nr,vt=or,Rt=P,Lt=lr,At=pr,Nt=K,Tt=Er,Ot=mr,St=k,gt=ee,dt=Te,wt=Oe,Pt=re,Ct=te,Dt=Se,Gt=Pr,Mt=z(),Ft=C();be={parse:pt,valid:ct,clean:Et,inc:$t,diff:mt,major:ut,minor:It,patch:ft,prerelease:vt,compare:Rt,rcompare:Lt,compareLoose:At,compareBuild:Nt,sort:Tt,rsort:Ot,gt:St,lt:gt,eq:dt,neq:wt,gte:Pt,lte:Ct,cmp:Dt,coerce:Gt,Comparator:Mt,Range:Ft,satisfies:q,toComparators:Fr,maxSatisfying:Ur,minSatisfying:_r,minVersion:Vr,validRange:Hr,outside:oe,gtr:Jr,ltr:et,intersects:rt,simplifyRange:nt,subset:lt,SemVer:ht,re:pe.re,src:pe.src,tokens:pe.t,SEMVER_SPEC_VERSION:Ue.SEMVER_SPEC_VERSION,RELEASE_TYPES:Ue.RELEASE_TYPES,compareIdentifiers:Xe.compareIdentifiers,rcompareIdentifiers:Xe.rcompareIdentifiers}});export{Yt as __tla,be as s};
