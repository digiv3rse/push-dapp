const __vite__fileDeps=["assets/index-qIz-_2yf.js","assets/browser-CeceZ__e.js","assets/index-DbCMOPNS.js","assets/index-Bz0OPlRu.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{cY as Re,__tla as xe}from"./index-DbCMOPNS.js";let se,B,p,he,z,ge,f,R,me,j,Ve=Promise.all([(()=>{try{return xe}catch{}})()]).then(async()=>{const fe=Symbol(),re=Object.getPrototypeOf,J=new WeakMap,be=e=>e&&(J.has(e)?J.get(e):re(e)===Object.prototype||re(e)===Array.prototype),ye=e=>be(e)&&e[fe]||null,oe=(e,t=!0)=>{J.set(e,t)};var x={VITE_APP_NODE_ENV:"production",VITE_APP_DEPLOY_ENV:"PREVIEW",VITE_APP_PUBLIC_URL:"https://push-protocol.github.io/",VITE_APP_WALLETCONNECT_PROJECT_ID:"0be3ae8bdea578d63a04771622c4a250",VITE_APP_DISCORD_CLIENT_ID:"1253336966875840532",VITE_PR_PREVIEW_BASE:"pr-1695",BASE_URL:"/push-dapp/pr-preview/pr-1695",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Y=e=>typeof e=="object"&&e!==null,L=new WeakMap,V=new WeakSet,Ie=(e=Object.is,t=(r,E)=>new Proxy(r,E),s=r=>Y(r)&&!V.has(r)&&(Array.isArray(r)||!(Symbol.iterator in r))&&!(r instanceof WeakMap)&&!(r instanceof WeakSet)&&!(r instanceof Error)&&!(r instanceof Number)&&!(r instanceof Date)&&!(r instanceof String)&&!(r instanceof RegExp)&&!(r instanceof ArrayBuffer),a=r=>{switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:throw r}},l=new WeakMap,c=(r,E,O=a)=>{const b=l.get(r);if((b==null?void 0:b[0])===E)return b[1];const w=Array.isArray(r)?[]:Object.create(Object.getPrototypeOf(r));return oe(w,!0),l.set(r,[E,w]),Reflect.ownKeys(r).forEach(T=>{if(Object.getOwnPropertyDescriptor(w,T))return;const W=Reflect.get(r,T),k={value:W,enumerable:!0,configurable:!0};if(V.has(W))oe(W,!1);else if(W instanceof Promise)delete k.value,k.get=()=>O(W);else if(L.has(W)){const[y,X]=L.get(W);k.value=c(y,X(),O)}Object.defineProperty(w,T,k)}),Object.preventExtensions(w)},g=new WeakMap,h=[1,1],C=r=>{if(!Y(r))throw new Error("object required");const E=g.get(r);if(E)return E;let O=h[0];const b=new Set,w=(i,o=++h[0])=>{O!==o&&(O=o,b.forEach(n=>n(i,o)))};let T=h[1];const W=(i=++h[1])=>(T!==i&&!b.size&&(T=i,y.forEach(([o])=>{const n=o[1](i);n>O&&(O=n)})),O),k=i=>(o,n)=>{const m=[...o];m[1]=[i,...m[1]],w(m,n)},y=new Map,X=(i,o)=>{if((x?"production":void 0)!=="production"&&y.has(i))throw new Error("prop listener already exists");if(b.size){const n=o[3](k(i));y.set(i,[o,n])}else y.set(i,[o])},ue=i=>{var o;const n=y.get(i);n&&(y.delete(i),(o=n[1])==null||o.call(n))},Te=i=>(b.add(i),b.size===1&&y.forEach(([o,n],m)=>{if((x?"production":void 0)!=="production"&&n)throw new Error("remove already exists");const ee=o[3](k(m));y.set(m,[o,ee])}),()=>{b.delete(i),b.size===0&&y.forEach(([o,n],m)=>{n&&(n(),y.set(m,[o]))})}),Z=Array.isArray(r)?[]:Object.create(Object.getPrototypeOf(r)),H=t(Z,{deleteProperty(i,o){const n=Reflect.get(i,o);ue(o);const m=Reflect.deleteProperty(i,o);return m&&w(["delete",[o],n]),m},set(i,o,n,m){const ee=Reflect.has(i,o),te=Reflect.get(i,o,m);if(ee&&(e(te,n)||g.has(n)&&e(te,g.get(n))))return!0;ue(o),Y(n)&&(n=ye(n)||n);let K=n;if(n instanceof Promise)n.then(P=>{n.status="fulfilled",n.value=P,w(["resolve",[o],P])}).catch(P=>{n.status="rejected",n.reason=P,w(["reject",[o],P])});else{!L.has(n)&&s(n)&&(K=C(n));const P=!V.has(K)&&L.get(K);P&&X(o,P)}return Reflect.set(i,o,K,m),w(["set",[o],n,te]),!0}});g.set(r,H);const Ne=[Z,W,c,Te];return L.set(H,Ne),Reflect.ownKeys(r).forEach(i=>{const o=Object.getOwnPropertyDescriptor(r,i);"value"in o&&(H[i]=r[i],delete o.value,delete o.writable),Object.defineProperty(Z,i,o)}),H})=>[C,L,V,e,t,s,a,l,c,g,h],[ve]=Ie();function A(e={}){return ve(e)}function D(e,t,s){const a=L.get(e);(x?"production":void 0)!=="production"&&!a&&console.warn("Please use proxy object");let l;const c=[],g=a[3];let h=!1;const C=g(r=>{c.push(r),l||(l=Promise.resolve().then(()=>{l=void 0,h&&t(c.splice(0))}))});return h=!0,()=>{h=!1,C()}}function we(e,t){const s=L.get(e);(x?"production":void 0)!=="production"&&!s&&console.warn("Please use proxy object");const[a,l,c]=s;return c(a,l(),t)}let d,ne,u,I,N;d=A({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),B={state:d,subscribe(e){return D(d,()=>e(d))},push(e,t){e!==d.view&&(d.view=e,t&&(d.data=t),d.history.push(e))},reset(e){d.view=e,d.history=[e]},replace(e){d.history.length>1&&(d.history[d.history.length-1]=e,d.view=e)},goBack(){if(d.history.length>1){d.history.pop();const[e]=d.history.slice(-1);d.view=e}},setData(e){d.data=e}},p={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return p.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return p.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},formatNativeUrl(e,t,s){if(p.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let a=e;a.includes("://")||(a=e.replaceAll("/","").replaceAll(":",""),a=`${a}://`),a.endsWith("/")||(a=`${a}/`),this.setWalletConnectDeepLink(a,s);const l=encodeURIComponent(t);return`${a}wc?uri=${l}`},formatUniversalUrl(e,t,s){if(!p.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let a=e;a.endsWith("/")||(a=`${a}/`),this.setWalletConnectDeepLink(a,s);const l=encodeURIComponent(t);return`${a}wc?uri=${l}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(p.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(p.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(p.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(p.WCM_VERSION,"2.6.2")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=(e=B.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},ne=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),u=A({enabled:ne,userSessionId:"",events:[],connectedWalletId:void 0}),se={state:u,subscribe(e){return D(u.events,()=>e(we(u.events[u.events.length-1])))},initialize(){u.enabled&&typeof(crypto==null?void 0:crypto.randomUUID)<"u"&&(u.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){u.connectedWalletId=e},click(e){if(u.enabled){const t={type:"CLICK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},track(e){if(u.enabled){const t={type:"TRACK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},view(e){if(u.enabled){const t={type:"VIEW",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}}},I=A({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),f={state:I,subscribe(e){return D(I,()=>e(I))},setChains(e){I.chains=e},setWalletConnectUri(e){I.walletConnectUri=e},setIsCustomDesktop(e){I.isCustomDesktop=e},setIsCustomMobile(e){I.isCustomMobile=e},setIsDataLoaded(e){I.isDataLoaded=e},setIsUiLoaded(e){I.isUiLoaded=e},setIsAuth(e){I.isAuth=e}},N=A({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),j={state:N,subscribe(e){return D(N,()=>e(N))},setConfig(e){var t,s;se.initialize(),f.setChains(e.chains),f.setIsAuth(!!e.enableAuthMode),f.setIsCustomMobile(!!((t=e.mobileWallets)!=null&&t.length)),f.setIsCustomDesktop(!!((s=e.desktopWallets)!=null&&s.length)),p.setModalVersionInStorage(),Object.assign(N,e)}};var Ee=Object.defineProperty,ae=Object.getOwnPropertySymbols,Oe=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable,ie=(e,t,s)=>t in e?Ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,We=(e,t)=>{for(var s in t||(t={}))Oe.call(t,s)&&ie(e,s,t[s]);if(ae)for(var s of ae(t))Ce.call(t,s)&&ie(e,s,t[s]);return e};const q="https://explorer-api.walletconnect.com",F="wcm",G="js-2.6.2";async function $(e,t){const s=We({sdkType:F,sdkVersion:G},t),a=new URL(e,q);return a.searchParams.append("projectId",j.state.projectId),Object.entries(s).forEach(([l,c])=>{c&&a.searchParams.append(l,String(c))}),(await fetch(a)).json()}const M={async getDesktopListings(e){return $("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return $("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return $("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return $("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${q}/w3m/v1/getWalletImage/${e}?projectId=${j.state.projectId}&sdkType=${F}&sdkVersion=${G}`},getAssetImageUrl(e){return`${q}/w3m/v1/getAssetImage/${e}?projectId=${j.state.projectId}&sdkType=${F}&sdkVersion=${G}`}};var Le=Object.defineProperty,le=Object.getOwnPropertySymbols,Ae=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable,ce=(e,t,s)=>t in e?Le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Pe=(e,t)=>{for(var s in t||(t={}))Ae.call(t,s)&&ce(e,s,t[s]);if(le)for(var s of le(t))_e.call(t,s)&&ce(e,s,t[s]);return e};let Q,v,U;Q=p.isMobile(),v=A({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),me={state:v,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=j.state;if(e==="NONE"||t==="ALL"&&!e)return v.recomendedWallets;if(p.isArray(e)){const s={recommendedIds:e.join(",")},{listings:a}=await M.getAllListings(s),l=Object.values(a);l.sort((c,g)=>{const h=e.indexOf(c.id),C=e.indexOf(g.id);return h-C}),v.recomendedWallets=l}else{const{chains:s,isAuth:a}=f.state,l=s==null?void 0:s.join(","),c=p.isArray(t),g={page:1,sdks:a?"auth_v1":void 0,entries:p.RECOMMENDED_WALLET_AMOUNT,chains:l,version:2,excludedIds:c?t.join(","):void 0},{listings:h}=Q?await M.getMobileListings(g):await M.getDesktopListings(g);v.recomendedWallets=Object.values(h)}return v.recomendedWallets},async getWallets(e){const t=Pe({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:a}=j.state,{recomendedWallets:l}=v;if(a==="ALL")return v.wallets;l.length?t.excludedIds=l.map(O=>O.id).join(","):p.isArray(s)&&(t.excludedIds=s.join(",")),p.isArray(a)&&(t.excludedIds=[t.excludedIds,a].filter(Boolean).join(",")),f.state.isAuth&&(t.sdks="auth_v1");const{page:c,search:g}=e,{listings:h,total:C}=Q?await M.getMobileListings(t):await M.getDesktopListings(t),r=Object.values(h),E=g?"search":"wallets";return v[E]={listings:[...v[E].listings,...r],total:C,page:c??1},{listings:r,total:C}},getWalletImageUrl(e){return M.getWalletImageUrl(e)},getAssetImageUrl(e){return M.getAssetImageUrl(e)},resetSearch(){v.search={listings:[],total:0,page:1}}},U=A({open:!1}),R={state:U,subscribe(e){return D(U,()=>e(U))},async open(e){return new Promise(t=>{const{isUiLoaded:s,isDataLoaded:a}=f.state;if(p.removeWalletConnectDeepLink(),f.setWalletConnectUri(e==null?void 0:e.uri),f.setChains(e==null?void 0:e.chains),B.reset("ConnectWallet"),s&&a)U.open=!0,t();else{const l=setInterval(()=>{const c=f.state;c.isUiLoaded&&c.isDataLoaded&&(clearInterval(l),U.open=!0,t())},200)}})},close(){U.open=!1}};var je=Object.defineProperty,de=Object.getOwnPropertySymbols,De=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable,pe=(e,t,s)=>t in e?je(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ue=(e,t)=>{for(var s in t||(t={}))De.call(t,s)&&pe(e,s,t[s]);if(de)for(var s of de(t))Me.call(t,s)&&pe(e,s,t[s]);return e};function ke(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}let S,_;S=A({themeMode:ke()?"dark":"light"}),z={state:S,subscribe(e){return D(S,()=>e(S))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(S.themeMode=t),s&&(S.themeVariables=Ue({},s))}},_=A({open:!1,message:"",variant:"success"}),ge={state:_,subscribe(e){return D(_,()=>e(_))},openToast(e,t){_.open=!0,_.message=e,_.variant=t},closeToast(){_.open=!1}};class Se{constructor(t){this.openModal=R.open,this.closeModal=R.close,this.subscribeModal=R.subscribe,this.setTheme=z.setThemeConfig,z.setThemeConfig(t),j.setConfig(t),this.initUi()}async initUi(){if(typeof window<"u"){await Re(()=>import("./index-qIz-_2yf.js").then(async s=>(await s.__tla,s)),__vite__mapDeps([0,1,2,3]));const t=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",t),f.setIsUiLoaded(!0)}}}he=Object.freeze(Object.defineProperty({__proto__:null,WalletConnectModal:Se},Symbol.toStringTag,{value:"Module"}))});export{se as R,B as T,Ve as __tla,p as a,he as i,z as n,ge as o,f as p,R as s,me as t,j as y};
