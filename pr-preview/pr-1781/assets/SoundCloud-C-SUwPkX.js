import{b8 as C,b7 as N,bu as V,bv as k,__tla as x}from"./index-DD71Ter3.js";let m,I=Promise.all([(()=>{try{return x}catch{}})()]).then(async()=>{function b(t,e){for(var r=0;r<e.length;r++){const s=e[r];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in t)){const n=Object.getOwnPropertyDescriptor(s,o);n&&Object.defineProperty(t,o,n.get?n:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var P=Object.create,l=Object.defineProperty,g=Object.getOwnPropertyDescriptor,O=Object.getOwnPropertyNames,_=Object.getPrototypeOf,j=Object.prototype.hasOwnProperty,v=(t,e,r)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,S=(t,e)=>{for(var r in e)l(t,r,{get:e[r],enumerable:!0})},p=(t,e,r,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of O(e))!j.call(t,o)&&o!==r&&l(t,o,{get:()=>e[o],enumerable:!(s=g(e,o))||s.enumerable});return t},w=(t,e,r)=>(r=t!=null?P(_(t)):{},p(!t||!t.__esModule?l(r,"default",{value:t,enumerable:!0}):r,t)),E=t=>p(l({},"__esModule",{value:!0}),t),a=(t,e,r)=>(v(t,typeof e!="symbol"?e+"":e,r),r),c={};S(c,{default:()=>u});var d=E(c),h=w(N),y=V,T=k;const R="https://w.soundcloud.com/player/api.js",D="SC";class u extends h.Component{constructor(){super(...arguments),a(this,"callPlayer",y.callPlayer),a(this,"duration",null),a(this,"currentTime",null),a(this,"fractionLoaded",null),a(this,"mute",()=>{this.setVolume(0)}),a(this,"unmute",()=>{this.props.volume!==null&&this.setVolume(this.props.volume)}),a(this,"ref",e=>{this.iframe=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,r){(0,y.getSDK)(R,D).then(s=>{if(!this.iframe)return;const{PLAY:o,PLAY_PROGRESS:n,PAUSE:L,FINISH:M,ERROR:A}=s.Widget.Events;r||(this.player=s.Widget(this.iframe),this.player.bind(o,this.props.onPlay),this.player.bind(L,()=>{this.duration-this.currentTime<.05||this.props.onPause()}),this.player.bind(n,i=>{this.currentTime=i.currentPosition/1e3,this.fractionLoaded=i.loadedProgress}),this.player.bind(M,()=>this.props.onEnded()),this.player.bind(A,i=>this.props.onError(i))),this.player.load(e,{...this.props.config.options,callback:()=>{this.player.getDuration(i=>{this.duration=i/1e3,this.props.onReady()})}})})}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,r=!0){this.callPlayer("seekTo",e*1e3),r||this.pause()}setVolume(e){this.callPlayer("setVolume",e*100)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.fractionLoaded*this.duration}render(){const{display:e}=this.props,r={width:"100%",height:"100%",display:e};return h.default.createElement("iframe",{ref:this.ref,src:`https://w.soundcloud.com/player/?url=${encodeURIComponent(this.props.url)}`,style:r,frameBorder:0,allow:"autoplay"})}}a(u,"displayName","SoundCloud"),a(u,"canPlay",T.canPlay.soundcloud),a(u,"loopOnEnded",!0);let f;f=C(d),m=b({__proto__:null,default:f},[d])});export{m as S,I as __tla};
