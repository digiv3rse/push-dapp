var Q=Object.defineProperty;var U=r=>{throw TypeError(r)};var J=(r,o,a)=>o in r?Q(r,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[o]=a;var T=(r,o,a)=>J(r,typeof o!="symbol"?o+"":o,a),H=(r,o,a)=>o.has(r)||U("Cannot "+a);var n=(r,o,a)=>(H(r,o,"read from private field"),a?a.call(r):o.get(r)),P=(r,o,a)=>o.has(r)?U("Cannot add the same private member more than once"):o instanceof WeakSet?o.add(r):o.set(r,a),k=(r,o,a,f)=>(H(r,o,"write to private field"),f?f.call(r,a):o.set(r,a),a),M=(r,o,a)=>(H(r,o,"access private method"),a);import{ds as X,dt as z,du as $,dv as ee,dw as te,dx as se,dy as I,dz as ie,dA as K,dB as re,b7 as j,dC as oe,dD as ne,dE as he,aZ as h,dF as A,dG as p,ba as ae,bg as B,cH as V,bM as le,__tla as ce}from"./index-BpWLCwGG.js";let q,Y,_,Z,G,de=Promise.all([(()=>{try{return ce}catch{}})()]).then(async()=>{var f,w,l,m,v,O,W,D,y;var r=class extends X{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:z()},t)}getOptimisticResult(e){return e.behavior=z(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){var N,S;const{state:s}=e,i=super.createResult(e,t),{isFetching:c,isRefetching:u,isError:d,isRefetchError:L}=i,C=(S=(N=s.fetchMeta)==null?void 0:N.fetchMore)==null?void 0:S.direction,x=d&&C==="forward",g=c&&C==="forward",b=d&&C==="backward",R=c&&C==="backward";return{...i,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:$(t,s.data),hasPreviousPage:ee(t,s.data),isFetchNextPageError:x,isFetchingNextPage:g,isFetchPreviousPageError:b,isFetchingPreviousPage:R,isRefetchError:L&&!x&&!b,isRefetching:u&&!g&&!R}}},o=(D=class extends te{constructor(t,s){super();P(this,v);P(this,f);P(this,w);P(this,l);P(this,m);k(this,f,t),this.setOptions(s),this.bindMethods(),M(this,v,O).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var i;const s=this.options;this.options=n(this,f).defaultMutationOptions(t),se(this.options,s)||n(this,f).getMutationCache().notify({type:"observerOptionsUpdated",mutation:n(this,l),observer:this}),s!=null&&s.mutationKey&&this.options.mutationKey&&I(s.mutationKey)!==I(this.options.mutationKey)?this.reset():((i=n(this,l))==null?void 0:i.state.status)==="pending"&&n(this,l).setOptions(this.options)}onUnsubscribe(){var t;this.hasListeners()||((t=n(this,l))==null||t.removeObserver(this))}onMutationUpdate(t){M(this,v,O).call(this),M(this,v,W).call(this,t)}getCurrentResult(){return n(this,w)}reset(){var t;(t=n(this,l))==null||t.removeObserver(this),k(this,l,void 0),M(this,v,O).call(this),M(this,v,W).call(this)}mutate(t,s){var i;return k(this,m,s),(i=n(this,l))==null||i.removeObserver(this),k(this,l,n(this,f).getMutationCache().build(n(this,f),this.options)),n(this,l).addObserver(this),n(this,l).execute(t)}},f=new WeakMap,w=new WeakMap,l=new WeakMap,m=new WeakMap,v=new WeakSet,O=function(){var s;const t=((s=n(this,l))==null?void 0:s.state)??ie();k(this,w,{...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})},W=function(t){K.batch(()=>{var s,i,c,u,d,L,C,x;if(n(this,m)&&this.hasListeners()){const g=n(this,w).variables,b=n(this,w).context;(t==null?void 0:t.type)==="success"?((i=(s=n(this,m)).onSuccess)==null||i.call(s,t.data,g,b),(u=(c=n(this,m)).onSettled)==null||u.call(c,t.data,null,g,b)):(t==null?void 0:t.type)==="error"&&((L=(d=n(this,m)).onError)==null||L.call(d,t.error,g,b),(x=(C=n(this,m)).onSettled)==null||x.call(C,void 0,t.error,g,b))}this.listeners.forEach(g=>{g(n(this,w))})})},D);Z=function(e,t){const s=re(),[i]=j.useState(()=>new o(s,e));j.useEffect(()=>{i.setOptions(e)},[i,e]);const c=j.useSyncExternalStore(j.useCallback(d=>i.subscribe(K.batchCalls(d)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),u=j.useCallback((d,L)=>{i.mutate(d,L).catch(oe)},[i]);if(c.error&&ne(i.options.throwOnError,[c.error]))throw c.error;return{...c,mutate:u,mutateAsync:c.mutate}},G=function(e,t){return he(e,r)};let a;_=e=>{const{svgProps:t,...s}=e;return h.jsx(A,{componentName:"Refresh",icon:h.jsxs("svg",{width:"inherit",height:"inherit",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:[h.jsx("path",{d:"M25.6146 10.9474C23.0882 5.89476 19.0525 5.26318 16.1409 5.26318C9.86228 5.26318 4.77246 10.353 4.77246 16.6316C4.77246 22.9102 9.86228 28 16.1409 28C21.5512 28 26.0788 24.2206 27.2276 19.1579",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),h.jsx("path",{d:"M18.6674 11.5789H26.2463V4",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]}),...s})},a=e=>{const{svgProps:t,...s}=e;return h.jsx(A,{componentName:"UserSwitch",icon:h.jsxs("svg",{width:"inherit",height:"inherit",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:[h.jsxs("g",{"clip-path":"url(#clip0_3426_11246)",children:[h.jsx("path",{d:"M16 19.3333C18.3932 19.3333 20.3333 17.3932 20.3333 15C20.3333 12.6067 18.3932 10.6666 16 10.6666C13.6067 10.6666 11.6666 12.6067 11.6666 15C11.6666 17.3932 13.6067 19.3333 16 19.3333Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),h.jsx("path",{d:"M9 24C9.65629 22.596 10.6577 21.4167 11.8933 20.593C13.1288 19.7693 14.5503 19.3333 16 19.3333C17.4497 19.3333 18.8712 19.7693 20.1067 20.593C21.3423 21.4167 22.3437 22.596 23 24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),h.jsx("path",{d:"M23.6666 16L26.3333 18.6667L29 16",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),h.jsx("path",{d:"M3 16L5.66667 13.3333L8.33333 16",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),h.jsx("path",{d:"M5.66663 13.3333V15.9992C5.66582 18.2569 6.35708 20.4565 7.64085 22.2814C8.92463 24.1063 10.7347 25.4622 12.8103 26.1539C14.8859 26.8456 17.12 26.8373 19.1908 26.1302C21.2615 25.4232 23.0622 24.0539 24.3333 22.2196",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),h.jsx("path",{d:"M26.3333 18.6666V16.0008C26.3341 13.7431 25.6428 11.5434 24.3591 9.71854C23.0753 7.89366 21.2653 6.53774 19.1896 5.84607C17.114 5.1544 14.8799 5.16268 12.8092 5.86972C10.7384 6.57675 8.93775 7.94605 7.66663 9.7804",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]}),h.jsx("defs",{children:h.jsx("clipPath",{id:"clip0_3426_11246",children:h.jsx("rect",{width:"32",height:"32",fill:"white"})})})]}),...s})},q=(y=class extends j.Component{constructor(e){super(e),this.scrollListener=this.scrollListener.bind(this),this.eventListenerOptions=this.eventListenerOptions.bind(this),this.mousewheelListener=this.mousewheelListener.bind(this)}componentDidMount(){this.pageLoaded=this.props.pageStart,this.options=this.eventListenerOptions(),this.attachScrollListener()}componentDidUpdate(){if(this.props.isReverse&&this.loadMore){const e=this.getParentElement(this.scrollComponent);e.scrollTop=e.scrollHeight-this.beforeScrollHeight+this.beforeScrollTop,this.loadMore=!1}this.attachScrollListener()}componentWillUnmount(){this.detachScrollListener(),this.detachMousewheelListener()}isPassiveSupported(){let e=!1;const t={get passive(){e=!0}};try{document.addEventListener("test",null,t),document.removeEventListener("test",null,t)}catch{}return e}eventListenerOptions(){let e=this.props.useCapture;return this.isPassiveSupported()?e={useCapture:this.props.useCapture,passive:!0}:e={passive:!1},e}setDefaultLoader(e){this.defaultLoader=e}detachMousewheelListener(){let e=window;this.props.useWindow===!1&&(e=this.scrollComponent.parentNode),e.removeEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture)}detachScrollListener(){let e=window;this.props.useWindow===!1&&(e=this.getParentElement(this.scrollComponent)),e.removeEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),e.removeEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture)}getParentElement(e){return(this.props.getScrollParent&&this.props.getScrollParent())??(e&&e.parentNode)}filterProps(e){return e}attachScrollListener(){const e=this.getParentElement(this.scrollComponent);if(!this.props.hasMore||!e)return;let t=window;this.props.useWindow===!1&&(t=e),t.addEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture),t.addEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),t.addEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture),this.props.initialLoad&&this.scrollListener()}mousewheelListener(e){e.deltaY===1&&!this.isPassiveSupported()&&e.preventDefault()}scrollListener(){const e=this.scrollComponent,t=window,s=this.getParentElement(e);let i;if(this.props.useWindow){const c=document.documentElement||document.body.parentNode||document.body,u=t.pageYOffset!==void 0?t.pageYOffset:c.scrollTop;this.props.isReverse?i=u:i=this.calculateOffset(e,u)}else this.props.isReverse?i=s.scrollTop:i=e.scrollHeight-s.scrollTop-s.clientHeight;i<Number(this.props.threshold)&&e&&e.offsetParent!==null&&(this.detachScrollListener(),this.beforeScrollHeight=s.scrollHeight,this.beforeScrollTop=s.scrollTop,typeof this.props.loadMore=="function"&&(this.props.loadMore(this.pageLoaded+=1),this.loadMore=!0))}calculateOffset(e,t){return e?this.calculateTopPosition(e)+(e.offsetHeight-t-window.innerHeight):0}calculateTopPosition(e){return e?e.offsetTop+this.calculateTopPosition(e.offsetParent):0}render(){const e=this.filterProps(this.props),{children:t,element:s,hasMore:i,initialLoad:c,isReverse:u,loader:d,loadMore:L,pageStart:C,ref:x,threshold:g,useCapture:b,useWindow:R,getScrollParent:N,...S}=e;S.ref=F=>{this.scrollComponent=F,x&&x(F)};const E=[t];return i&&(d?u?E.unshift(d):E.push(d):this.defaultLoader&&(u?E.unshift(this.defaultLoader):E.push(this.defaultLoader))),ae.createElement(s,S,E)}},T(y,"propTypes",{children:p.node.isRequired,element:p.node,hasMore:p.bool,initialLoad:p.bool,isReverse:p.bool,loader:p.node,loadMore:p.func.isRequired,pageStart:p.number,ref:p.func,getScrollParent:p.func,threshold:p.number,useCapture:p.bool,useWindow:p.bool}),T(y,"defaultProps",{element:"div",hasMore:!1,initialLoad:!0,pageStart:0,ref:null,threshold:250,useWindow:!0,isReverse:!1,useCapture:!1,loader:null,getScrollParent:null}),y),Y=({heading:e,subHeading:t,error:s=!1,refetchLeaderboard:i})=>h.jsxs(B,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"spacing-sm",padding:"spacing-xxxl",height:"200px",children:[h.jsx(a,{size:48,color:"icon-primary"}),h.jsxs(B,{display:"flex",flexDirection:"column",alignItems:"center",gap:"spacing-xxxs",children:[e&&h.jsx(V,{textAlign:"center",variant:"h5-bold",color:"text-primary",children:e}),t&&h.jsx(V,{textAlign:"center",variant:"bs-regular",color:"text-tertiary-inverse",children:t})]}),s&&h.jsx(le,{onClick:()=>i==null?void 0:i(),variant:"tertiary",size:"small",leadingIcon:h.jsx(_,{}),children:"Refresh"})]})});export{q as I,Y as L,_ as R,de as __tla,Z as a,G as u};
