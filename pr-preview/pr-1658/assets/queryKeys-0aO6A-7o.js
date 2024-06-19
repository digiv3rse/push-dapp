var $=(p,b,y)=>{if(!b.has(p))throw TypeError("Cannot "+y)};var s=(p,b,y)=>($(p,b,"read from private field"),y?y.call(p):b.get(p)),o=(p,b,y)=>{if(b.has(p))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(p):b.set(p,y)},u=(p,b,y,_)=>($(p,b,"write to private field"),_?_.call(p,y):b.set(p,y),y);var l=(p,b,y)=>($(p,b,"access private method"),y);import{ha as zt,hb as tt,hc as K,hd as Wt,he as Rt,hf as gt,hg as Ht,hh as Gt,hi as Jt,hj as vt,hk as Ot,b0 as w,hl as Kt,__tla as Nt}from"./index-BT99pWj7.js";let Ct,mt,wt,St,Ut,Et,Vt=Promise.all([(()=>{try{return Nt}catch{}})()]).then(async()=>{var g,n,I,R,U,D,m,A,k,L,E,F,S,T,P,G,M,st,q,et,j,it,B,rt,z,nt,W,ht,H,ot,J,Ft,ct;var p=(ct=class extends zt{constructor(t,e){super();o(this,P);o(this,M);o(this,q);o(this,j);o(this,B);o(this,z);o(this,W);o(this,H);o(this,J);o(this,g,void 0);o(this,n,void 0);o(this,I,void 0);o(this,R,void 0);o(this,U,void 0);o(this,D,void 0);o(this,m,void 0);o(this,A,void 0);o(this,k,void 0);o(this,L,void 0);o(this,E,void 0);o(this,F,void 0);o(this,S,void 0);o(this,T,new Set);this.options=e,u(this,g,t),u(this,m,null),this.bindMethods(),this.setOptions(e)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(s(this,n).addObserver(this),y(s(this,n),this.options)?l(this,P,G).call(this):this.updateResult(),l(this,B,rt).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return _(s(this,n),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return _(s(this,n),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,l(this,z,nt).call(this),l(this,W,ht).call(this),s(this,n).removeObserver(this)}setOptions(t,e){const r=this.options,f=s(this,n);if(this.options=s(this,g).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");l(this,H,ot).call(this),s(this,n).setOptions(this.options),r._defaulted&&!tt(this.options,r)&&s(this,g).getQueryCache().notify({type:"observerOptionsUpdated",query:s(this,n),observer:this});const c=this.hasListeners();c&&at(s(this,n),f,this.options,r)&&l(this,P,G).call(this),this.updateResult(e),c&&(s(this,n)!==f||this.options.enabled!==r.enabled||K(this.options.staleTime,s(this,n))!==K(r.staleTime,s(this,n)))&&l(this,M,st).call(this);const a=l(this,q,et).call(this);c&&(s(this,n)!==f||this.options.enabled!==r.enabled||a!==s(this,S))&&l(this,j,it).call(this,a)}getOptimisticResult(t){const e=s(this,g).getQueryCache().build(s(this,g),t),r=this.createResult(e,t);return Pt(this,r)&&(u(this,R,r),u(this,D,this.options),u(this,U,s(this,n).state)),r}getCurrentResult(){return s(this,R)}trackResult(t,e){const r={};return Object.keys(t).forEach(f=>{Object.defineProperty(r,f,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(f),e==null||e(f),t[f])})}),r}trackProp(t){s(this,T).add(t)}getCurrentQuery(){return s(this,n)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const e=s(this,g).defaultQueryOptions(t),r=s(this,g).getQueryCache().build(s(this,g),e);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,e))}fetch(t){return l(this,P,G).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),s(this,R)))}createResult(t,e){var yt;const r=s(this,n),f=this.options,c=s(this,R),a=s(this,U),d=s(this,D),O=t!==r?t.state:s(this,I),{state:x}=t;let h={...x},lt=!1,C;if(e._optimisticResults){const v=this.hasListeners(),Z=!v&&y(t,e),Bt=v&&at(t,r,e,f);(Z||Bt)&&(h={...h,...Jt(x.data,t.options)}),e._optimisticResults==="isRestoring"&&(h.fetchStatus="idle")}let{error:dt,errorUpdatedAt:pt,status:Q}=h;if(e.select&&h.data!==void 0)if(c&&h.data===(a==null?void 0:a.data)&&e.select===s(this,A))C=s(this,k);else try{u(this,A,e.select),C=e.select(h.data),C=vt(c==null?void 0:c.data,C,e),u(this,k,C),u(this,m,null)}catch(v){u(this,m,v)}else C=h.data;if(e.placeholderData!==void 0&&C===void 0&&Q==="pending"){let v;if(c!=null&&c.isPlaceholderData&&e.placeholderData===(d==null?void 0:d.placeholderData))v=c.data;else if(v=typeof e.placeholderData=="function"?e.placeholderData((yt=s(this,L))==null?void 0:yt.state.data,s(this,L)):e.placeholderData,e.select&&v!==void 0)try{v=e.select(v),u(this,m,null)}catch(Z){u(this,m,Z)}v!==void 0&&(Q="success",C=vt(c==null?void 0:c.data,v,e),lt=!0)}s(this,m)&&(dt=s(this,m),C=s(this,k),pt=Date.now(),Q="error");const V=h.fetchStatus==="fetching",X=Q==="pending",Y=Q==="error",ft=X&&V,bt=C!==void 0;return{status:Q,fetchStatus:h.fetchStatus,isPending:X,isSuccess:Q==="success",isError:Y,isInitialLoading:ft,isLoading:ft,data:C,dataUpdatedAt:h.dataUpdatedAt,error:dt,errorUpdatedAt:pt,failureCount:h.fetchFailureCount,failureReason:h.fetchFailureReason,errorUpdateCount:h.errorUpdateCount,isFetched:h.dataUpdateCount>0||h.errorUpdateCount>0,isFetchedAfterMount:h.dataUpdateCount>O.dataUpdateCount||h.errorUpdateCount>O.errorUpdateCount,isFetching:V,isRefetching:V&&!X,isLoadingError:Y&&!bt,isPaused:h.fetchStatus==="paused",isPlaceholderData:lt,isRefetchError:Y&&bt,isStale:N(t,e),refetch:this.refetch}}updateResult(t){const e=s(this,R),r=this.createResult(s(this,n),this.options);if(u(this,U,s(this,n).state),u(this,D,this.options),s(this,U).data!==void 0&&u(this,L,s(this,n)),tt(r,e))return;u(this,R,r);const f={},c=()=>{if(!e)return!0;const{notifyOnChangeProps:a}=this.options,d=typeof a=="function"?a():a;if(d==="all"||!d&&!s(this,T).size)return!0;const O=new Set(d??s(this,T));return this.options.throwOnError&&O.add("error"),Object.keys(s(this,R)).some(x=>{const h=x;return s(this,R)[h]!==e[h]&&O.has(h)})};(t==null?void 0:t.listeners)!==!1&&c()&&(f.listeners=!0),l(this,J,Ft).call(this,{...f,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&l(this,B,rt).call(this)}},g=new WeakMap,n=new WeakMap,I=new WeakMap,R=new WeakMap,U=new WeakMap,D=new WeakMap,m=new WeakMap,A=new WeakMap,k=new WeakMap,L=new WeakMap,E=new WeakMap,F=new WeakMap,S=new WeakMap,T=new WeakMap,P=new WeakSet,G=function(t){l(this,H,ot).call(this);let e=s(this,n).fetch(this.options,t);return t!=null&&t.throwOnError||(e=e.catch(Wt)),e},M=new WeakSet,st=function(){l(this,z,nt).call(this);const t=K(this.options.staleTime,s(this,n));if(Rt||s(this,R).isStale||!gt(t))return;const e=Ht(s(this,R).dataUpdatedAt,t)+1;u(this,E,setTimeout(()=>{s(this,R).isStale||this.updateResult()},e))},q=new WeakSet,et=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(s(this,n)):this.options.refetchInterval)??!1},j=new WeakSet,it=function(t){l(this,W,ht).call(this),u(this,S,t),!(Rt||this.options.enabled===!1||!gt(s(this,S))||s(this,S)===0)&&u(this,F,setInterval(()=>{(this.options.refetchIntervalInBackground||Gt.isFocused())&&l(this,P,G).call(this)},s(this,S)))},B=new WeakSet,rt=function(){l(this,M,st).call(this),l(this,j,it).call(this,l(this,q,et).call(this))},z=new WeakSet,nt=function(){s(this,E)&&(clearTimeout(s(this,E)),u(this,E,void 0))},W=new WeakSet,ht=function(){s(this,F)&&(clearInterval(s(this,F)),u(this,F,void 0))},H=new WeakSet,ot=function(){const t=s(this,g).getQueryCache().build(s(this,g),this.options);if(t===s(this,n))return;const e=s(this,n);u(this,n,t),u(this,I,t.state),this.hasListeners()&&(e==null||e.removeObserver(this),t.addObserver(this))},J=new WeakSet,Ft=function(t){Ot.batch(()=>{t.listeners&&this.listeners.forEach(e=>{e(s(this,R))}),s(this,g).getQueryCache().notify({query:s(this,n),type:"observerResultsUpdated"})})},ct);function b(i,t){return t.enabled!==!1&&i.state.data===void 0&&!(i.state.status==="error"&&t.retryOnMount===!1)}function y(i,t){return b(i,t)||i.state.data!==void 0&&_(i,t,t.refetchOnMount)}function _(i,t,e){if(t.enabled!==!1){const r=typeof e=="function"?e(i):e;return r==="always"||r!==!1&&N(i,t)}return!1}function at(i,t,e,r){return(i!==t||r.enabled===!1)&&(!e.suspense||i.state.status!=="error")&&N(i,e)}function N(i,t){return t.enabled!==!1&&i.isStaleByTime(K(t.staleTime,i))}function Pt(i,t){return!tt(i.getCurrentResult(),t)}var ut=w.createContext(!1),Qt=()=>w.useContext(ut);ut.Provider;function _t(){let i=!1;return{clearReset:()=>{i=!1},reset:()=>{i=!0},isReset:()=>i}}var Dt=w.createContext(_t()),kt=()=>w.useContext(Dt);function Lt(i,t){return typeof i=="function"?i(...t):!!i}var Tt=(i,t)=>{(i.suspense||i.throwOnError)&&(t.isReset()||(i.retryOnMount=!1))},xt=i=>{w.useEffect(()=>{i.clearReset()},[i])},It=({result:i,errorResetBoundary:t,throwOnError:e,query:r})=>i.isError&&!t.isReset()&&!i.isFetching&&r&&Lt(e,[i.error,r]),At=i=>{i.suspense&&typeof i.staleTime!="number"&&(i.staleTime=1e3)},Mt=(i,t)=>(i==null?void 0:i.suspense)&&t.isPending,qt=(i,t,e)=>t.fetchOptimistic(i).catch(()=>{e.clearReset()});function jt(i,t,e){const r=Kt(),f=Qt(),c=kt(),a=r.defaultQueryOptions(i);a._optimisticResults=f?"isRestoring":"optimistic",At(a),Tt(a,c),xt(c);const[d]=w.useState(()=>new t(r,a)),O=d.getOptimisticResult(a);if(w.useSyncExternalStore(w.useCallback(x=>{const h=f?()=>{}:d.subscribe(Ot.batchCalls(x));return d.updateResult(),h},[d,f]),()=>d.getCurrentResult(),()=>d.getCurrentResult()),w.useEffect(()=>{d.setOptions(a,{listeners:!1})},[a,d]),Mt(a,O))throw qt(a,d,c);if(It({result:O,errorResetBoundary:c,throwOnError:a.throwOnError,query:r.getQueryCache().get(a.queryHash)}))throw O.error;return a.notifyOnChangeProps?O:d.trackResult(O)}Et=function(i,t){return jt(i,p)},Ut="trendingChannels",mt="allUserSubscriptions",Ct="userSubscription",wt="channelDetails",St="rewardsLeaderboard"});export{Vt as __tla,Ct as a,mt as b,wt as c,St as r,Ut as t,Et as u};
