import{hy as S,hz as b,hA as A,jF as f,hx as m,jG as Q,jH as X,jI as Z,jJ as $,jK as aa,jL as ea,jM as k,jN as ta,jO as Ea,hu as x,hE as qa,jP as Sa,jQ as Ta,jR as T,jS as sa,hw as na,hF as W,ht as O,__tla as Wa}from"./index-DGS2C2HC.js";import{gQ as Oa,jY as Ma,jU as Na,jV as Ca,jZ as La,j_ as Ra,k4 as Pa,k3 as za,gR as Ua,k5 as Va,j$ as Ba,jX as Ka,k0 as Da,k1 as Ja,k6 as Ya,k7 as Ga,hv as Ha,k8 as Qa,jT as Xa,jW as Za,k9 as $a,k2 as ae,ka as ee,g6 as te,g5 as se,kb as ne,kc as re,kd as ie,ke as oe,__tla as ue}from"./index-DGS2C2HC.js";import{A as ra,a as ce,c as le,n as he,__tla as fe}from"./zipWith-CdFVrP4s.js";import{d as de,C as me,e as pe,N as ve,b as ye,S as be,T as ge,j as _e,k as we,l as Ae,m as ke,p as xe,q as je,s as Fe,u as Ie,v as Ee,f as qe,w as Se,x as Te,y as We,B as Oe,D as Me,E as Ne,F as Ce,G as Le,H as Re,I as Pe,J as ze,K as Ue,L as Ve,M as Be,O as Ke,P as De,Q as Je,R as Ye,U as Ge,V as He,W as Qe,X as Xe,Y as Ze,Z as $e,a4 as at,_ as et,$ as tt,i as st,a0 as nt,a1 as rt,a2 as it,a3 as ot,a5 as ut,a6 as ct,a7 as lt,a8 as ht,a9 as ft,o as dt,g as mt,aa as pt,ab as vt,ac as yt,ad as bt,ae as gt,af as _t,r as wt,ag as At,ah as kt,am as xt,ai as jt,aj as Ft,ak as It,al as Et,an as qt,ao as St,ap as Tt,aq as Wt,ar as Ot,as as Mt,at as Nt,au as Ct,av as Lt,aw as Rt,ax as Pt,ay as zt,az as Ut,aA as Vt,aB as Bt,aC as Kt,t as Dt,aD as Jt,aE as Yt,aF as Gt,aG as Ht,h as Qt,aH as Xt,aI as Zt,aJ as $t,aK as as,aL as es,aM as ts,aN as ss,z as ns,aO as rs,aP as is,__tla as os}from"./zipWith-CdFVrP4s.js";import{A as j,a as F,__tla as us}from"./skip-BE9YIKhe.js";import{S as cs,b as ls,c as hs,d as fs,s as ds,__tla as ms}from"./skip-BE9YIKhe.js";import{m as ps,__tla as vs}from"./merge-BWQSa2qe.js";let M,N,ia,oa,C,ua,ca,L,la,ha,fa,da,ma,pa,va,ya,ba,ga,_a,wa,R,Aa,ka,ys=Promise.all([(()=>{try{return Wa}catch{}})(),(()=>{try{return ue}catch{}})(),(()=>{try{return fe}catch{}})(),(()=>{try{return os}catch{}})(),(()=>{try{return us}catch{}})(),(()=>{try{return ms}catch{}})(),(()=>{try{return vs}catch{}})()]).then(async()=>{var P={now:function(){return(P.delegate||performance).now()},delegate:void 0},v={schedule:function(s){var t=requestAnimationFrame,a=cancelAnimationFrame,n=v.delegate;n&&(t=n.requestAnimationFrame,a=n.cancelAnimationFrame);var e=t(function(r){a=void 0,s(r)});return new S(function(){return a==null?void 0:a(e)})},requestAnimationFrame:function(){for(var s=[],t=0;t<arguments.length;t++)s[t]=arguments[t];return requestAnimationFrame.apply(void 0,b([],A(s)))},cancelAnimationFrame:function(){for(var s=[],t=0;t<arguments.length;t++)s[t]=arguments[t];var a=v.delegate;return((a==null?void 0:a.cancelAnimationFrame)||cancelAnimationFrame).apply(void 0,b([],A(s)))},delegate:void 0};ua=function(s){return s?z(s):xa};function z(s){return new f(function(t){var a=s||P,n=a.now(),e=0,r=function(){t.closed||(e=v.requestAnimationFrame(function(i){e=0;var o=a.now();t.next({timestamp:s?o:i,elapsed:o-n}),r()}))};return r(),function(){e&&v.cancelAnimationFrame(e)}})}var xa=z(),ja=1,I,E={};function U(s){return s in E?(delete E[s],!0):!1}let q,V,B,g,K,D,J,Y,G,H;q={setImmediate:function(s){var t=ja++;return E[t]=!0,I||(I=Promise.resolve()),I.then(function(){return U(t)&&s()}),t},clearImmediate:function(s){U(s)}},V=q.setImmediate,B=q.clearImmediate,g={setImmediate:function(){for(var s=[],t=0;t<arguments.length;t++)s[t]=arguments[t];return V.apply(void 0,b([],A(s)))},clearImmediate:function(s){var t=g.delegate;return((t==null?void 0:t.clearImmediate)||B)(s)},delegate:void 0},K=function(s){m(t,s);function t(a,n){var e=s.call(this,a,n)||this;return e.scheduler=a,e.work=n,e}return t.prototype.requestAsyncId=function(a,n,e){return e===void 0&&(e=0),e!==null&&e>0?s.prototype.requestAsyncId.call(this,a,n,e):(a.actions.push(this),a._scheduled||(a._scheduled=g.setImmediate(a.flush.bind(a,void 0))))},t.prototype.recycleAsyncId=function(a,n,e){var r;if(e===void 0&&(e=0),e!=null?e>0:this.delay>0)return s.prototype.recycleAsyncId.call(this,a,n,e);var i=a.actions;n!=null&&((r=i[i.length-1])===null||r===void 0?void 0:r.id)!==n&&(g.clearImmediate(n),a._scheduled===n&&(a._scheduled=void 0))},t}(j),D=function(s){m(t,s);function t(){return s!==null&&s.apply(this,arguments)||this}return t.prototype.flush=function(a){this._active=!0;var n=this._scheduled;this._scheduled=void 0;var e=this.actions,r;a=a||e.shift();do if(r=a.execute(a.state,a.delay))break;while((a=e[0])&&a.id===n&&e.shift());if(this._active=!1,r){for(;(a=e[0])&&a.id===n&&e.shift();)a.unsubscribe();throw r}},t}(F),L=new D(K),ca=L,J=function(s){m(t,s);function t(a,n){var e=s.call(this,a,n)||this;return e.scheduler=a,e.work=n,e}return t.prototype.schedule=function(a,n){return n===void 0&&(n=0),n>0?s.prototype.schedule.call(this,a,n):(this.delay=n,this.state=a,this.scheduler.flush(this),this)},t.prototype.execute=function(a,n){return n>0||this.closed?s.prototype.execute.call(this,a,n):this._execute(a,n)},t.prototype.requestAsyncId=function(a,n,e){return e===void 0&&(e=0),e!=null&&e>0||e==null&&this.delay>0?s.prototype.requestAsyncId.call(this,a,n,e):(a.flush(this),0)},t}(j),Y=function(s){m(t,s);function t(){return s!==null&&s.apply(this,arguments)||this}return t}(F),R=new Y(J),wa=R,G=function(s){m(t,s);function t(a,n){var e=s.call(this,a,n)||this;return e.scheduler=a,e.work=n,e}return t.prototype.requestAsyncId=function(a,n,e){return e===void 0&&(e=0),e!==null&&e>0?s.prototype.requestAsyncId.call(this,a,n,e):(a.actions.push(this),a._scheduled||(a._scheduled=v.requestAnimationFrame(function(){return a.flush(void 0)})))},t.prototype.recycleAsyncId=function(a,n,e){var r;if(e===void 0&&(e=0),e!=null?e>0:this.delay>0)return s.prototype.recycleAsyncId.call(this,a,n,e);var i=a.actions;n!=null&&((r=i[i.length-1])===null||r===void 0?void 0:r.id)!==n&&(v.cancelAnimationFrame(n),a._scheduled=void 0)},t}(j),H=function(s){m(t,s);function t(){return s!==null&&s.apply(this,arguments)||this}return t.prototype.flush=function(a){this._active=!0;var n=this._scheduled;this._scheduled=void 0;var e=this.actions,r;a=a||e.shift();do if(r=a.execute(a.state,a.delay))break;while((a=e[0])&&a.id===n&&e.shift());if(this._active=!1,r){for(;(a=e[0])&&a.id===n&&e.shift();)a.unsubscribe();throw r}},t}(F),C=new H(G),oa=C,ia=function(s){m(t,s);function t(a,n){a===void 0&&(a=N),n===void 0&&(n=1/0);var e=s.call(this,a,function(){return e.frame})||this;return e.maxFrames=n,e.frame=0,e.index=-1,e}return t.prototype.flush=function(){for(var a=this,n=a.actions,e=a.maxFrames,r,i;(i=n[0])&&i.delay<=e&&(n.shift(),this.frame=i.delay,!(r=i.execute(i.state,i.delay))););if(r){for(;i=n.shift();)i.unsubscribe();throw r}},t.frameTimeFactor=10,t}(F),N=function(s){m(t,s);function t(a,n,e){e===void 0&&(e=a.index+=1);var r=s.call(this,a,n)||this;return r.scheduler=a,r.work=n,r.index=e,r.active=!0,r.index=a.index=e,r}return t.prototype.schedule=function(a,n){if(n===void 0&&(n=0),Number.isFinite(n)){if(!this.id)return s.prototype.schedule.call(this,a,n);this.active=!1;var e=new t(this.scheduler,this.work);return this.add(e),e.schedule(a,n)}else return S.EMPTY},t.prototype.requestAsyncId=function(a,n,e){e===void 0&&(e=0),this.delay=a.frame+e;var r=a.actions;return r.push(this),r.sort(t.sortActions),1},t.prototype.recycleAsyncId=function(a,n,e){},t.prototype._execute=function(a,n){if(this.active===!0)return s.prototype._execute.call(this,a,n)},t.sortActions=function(a,n){return a.delay===n.delay?a.index===n.index?0:a.index>n.index?1:-1:a.delay>n.delay?1:-1},t}(j),va=function(s){return!!s&&(s instanceof f||Q(s.lift)&&Q(s.subscribe))},ya=function(s,t){var a=typeof t=="object";return new Promise(function(n,e){var r=!1,i;s.subscribe({next:function(o){i=o,r=!0},error:e,complete:function(){r?n(i):a?n(t.defaultValue):e(new X)}})})};function _(s,t,a,n){if(a)if(Z(a))n=a;else return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return _(s,t,n).apply(this,e).pipe($(a))};return n?function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return _(s,t).apply(this,e).pipe(aa(n),ea(n))}:function(){for(var e=this,r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];var o=new ra,u=!0;return new f(function(d){var c=o.subscribe(d);if(u){u=!1;var l=!1,w=!1;t.apply(e,b(b([],A(r)),[function(){for(var h=[],p=0;p<arguments.length;p++)h[p]=arguments[p];if(s){var y=h.shift();if(y!=null){o.error(y);return}}o.next(1<h.length?h:h[0]),w=!0,l&&o.complete()}])),w&&o.complete(),l=!0}return c})}}la=function(s,t,a){return _(!1,s,t,a)},ha=function(s,t,a){return _(!0,s,t,a)};var Fa={connector:function(){return new ta},resetOnDisconnect:!0};fa=function(s,t){t===void 0&&(t=Fa);var a=null,n=t.connector,e=t.resetOnDisconnect,r=e===void 0?!0:e,i=n(),o=new f(function(u){return i.subscribe(u)});return o.connect=function(){return(!a||a.closed)&&(a=k(function(){return s}).subscribe(i),r&&a.add(function(){return i=n()})),a},o},da=function(){for(var s=[],t=0;t<arguments.length;t++)s[t]=arguments[t];var a=Ea(s),n=ce(s),e=n.args,r=n.keys,i=new f(function(o){var u=e.length;if(!u){o.complete();return}for(var d=new Array(u),c=u,l=u,w=function(p){var y=!1;x(e[p]).subscribe(qa(o,function(Ia){y||(y=!0,l--),d[p]=Ia},function(){return c--},void 0,function(){(!c||!y)&&(l||o.next(r?le(r,d):d),o.complete())}))},h=0;h<u;h++)w(h)});return a?i.pipe($(a)):i},ma=function(s,t,a,n,e){var r,i,o,u;arguments.length===1?(r=s,u=r.initialState,t=r.condition,a=r.iterate,i=r.resultSelector,o=i===void 0?T:i,e=r.scheduler):(u=s,!n||Z(n)?(o=T,e=n):o=n);function d(){var c;return Ta(this,function(l){switch(l.label){case 0:c=u,l.label=1;case 1:return!t||t(c)?[4,o(c)]:[3,4];case 2:l.sent(),l.label=3;case 3:return c=a(c),[3,1];case 4:return[2]}})}return k(e?function(){return Sa(d(),e)}:d)},pa=function(s,t,a){return k(function(){return s()?t:a})},M=new f(sa),ba=function(){return M},ga=function(s,t){return na(Object.entries(s),t)},_a=function(s,t,a){return[W(t,a)(x(s)),W(he(t,a))(x(s))]},Aa=function(s,t,a){if(t==null&&(t=s,s=0),t<=0)return O;var n=t+s;return new f(a?function(e){var r=s;return a.schedule(function(){r<n?(e.next(r++),this.schedule()):e.complete()})}:function(e){for(var r=s;r<n&&!e.closed;)e.next(r++);e.complete()})},ka=function(s,t){return new f(function(a){var n=s(),e=t(n),r=e?x(e):O;return r.subscribe(a),function(){n&&n.unsubscribe()}})}});export{de as ArgumentOutOfRangeError,ra as AsyncSubject,Oa as BehaviorSubject,me as ConnectableObservable,O as EMPTY,X as EmptyError,M as NEVER,pe as NotFoundError,ve as Notification,ye as NotificationKind,Ma as ObjectUnsubscribedError,f as Observable,Na as ReplaySubject,cs as Scheduler,be as SequenceError,ta as Subject,Ca as Subscriber,S as Subscription,ge as TimeoutError,La as UnsubscriptionError,N as VirtualAction,ia as VirtualTimeScheduler,ys as __tla,oa as animationFrame,C as animationFrameScheduler,ua as animationFrames,ca as asap,L as asapScheduler,ls as async,hs as asyncScheduler,_e as audit,we as auditTime,la as bindCallback,ha as bindNodeCallback,Ae as buffer,ke as bufferCount,xe as bufferTime,je as bufferToggle,Fe as bufferWhen,Ie as catchError,Ee as combineAll,qe as combineLatest,Se as combineLatestAll,Te as combineLatestWith,Ra as concat,Pa as concatAll,We as concatMap,Oe as concatMapTo,Me as concatWith,za as config,Ne as connect,fa as connectable,Ce as count,Le as debounce,fs as debounceTime,Re as defaultIfEmpty,k as defer,Pe as delay,ze as delayWhen,Ue as dematerialize,Ve as distinct,Ua as distinctUntilChanged,Va as distinctUntilKeyChanged,Be as elementAt,Ba as empty,Ke as endWith,De as every,Je as exhaust,Ye as exhaustAll,Ge as exhaustMap,He as expand,W as filter,Qe as finalize,Xe as find,Ze as findIndex,$e as first,Ka as firstValueFrom,at as flatMap,da as forkJoin,na as from,Da as fromEvent,Ja as fromEventPattern,ma as generate,et as groupBy,T as identity,tt as ignoreElements,pa as iif,st as interval,nt as isEmpty,va as isObservable,rt as last,ya as lastValueFrom,Ya as map,Ga as mapTo,it as materialize,ot as max,ps as merge,Ha as mergeAll,Qa as mergeMap,ut as mergeMapTo,ct as mergeScan,lt as mergeWith,ht as min,ft as multicast,ba as never,sa as noop,Xa as observable,ea as observeOn,dt as of,mt as onErrorResumeNext,pt as onErrorResumeNextWith,ga as pairs,vt as pairwise,_a as partition,Za as pipe,$a as pluck,yt as publish,bt as publishBehavior,gt as publishLast,_t as publishReplay,wa as queue,R as queueScheduler,wt as race,At as raceWith,Aa as range,kt as reduce,xt as refCount,jt as repeat,Ft as repeatWhen,It as retry,Et as retryWhen,qt as sample,St as sampleTime,Tt as scan,ae as scheduled,Wt as sequenceEqual,ee as share,te as shareReplay,Ot as single,ds as skip,Mt as skipLast,Nt as skipUntil,Ct as skipWhile,se as startWith,aa as subscribeOn,Lt as switchAll,ne as switchMap,Rt as switchMapTo,Pt as switchScan,re as take,zt as takeLast,ie as takeUntil,Ut as takeWhile,Vt as tap,Bt as throttle,Kt as throttleTime,Dt as throwError,Jt as throwIfEmpty,Yt as timeInterval,Gt as timeout,Ht as timeoutWith,Qt as timer,Xt as timestamp,Zt as toArray,ka as using,$t as window,as as windowCount,es as windowTime,ts as windowToggle,ss as windowWhen,oe as withLatestFrom,ns as zip,rs as zipAll,is as zipWith};
