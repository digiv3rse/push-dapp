import{s as E,r as L,__tla as x}from"./index-CLio-1gq.js";import{u as N,p as I,__tla as z}from"./NFTPage-BGoKZRyv.js";let b,B=Promise.all([(()=>{try{return x}catch{}})(),(()=>{try{return z}catch{}})()]).then(async()=>{function g(t,e){for(var a=0;a<e.length;a++){const s=e[a];if(typeof s!="string"&&!Array.isArray(s)){for(const r in s)if(r!=="default"&&!(r in t)){const n=Object.getOwnPropertyDescriptor(s,r);n&&Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:()=>s[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var v=Object.create,l=Object.defineProperty,O=Object.getOwnPropertyDescriptor,j=Object.getOwnPropertyNames,V=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty,D=(t,e,a)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,M=(t,e)=>{for(var a in e)l(t,a,{get:e[a],enumerable:!0})},d=(t,e,a,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of j(e))!w.call(t,r)&&r!==a&&l(t,r,{get:()=>e[r],enumerable:!(s=O(e,r))||s.enumerable});return t},S=(t,e,a)=>(a=t!=null?v(V(t)):{},d(!t||!t.__esModule?l(a,"default",{value:t,enumerable:!0}):a,t)),k=t=>d(l({},"__esModule",{value:!0}),t),o=(t,e,a)=>(D(t,typeof e!="symbol"?e+"":e,a),a),h={};M(h,{default:()=>p});var m=k(h),i=S(L),f=N,P=I;const A="https://play.vidyard.com/embed/v4.js",R="VidyardV4",T="onVidyardAPI";class p extends i.Component{constructor(){super(...arguments),o(this,"callPlayer",f.callPlayer),o(this,"mute",()=>{this.setVolume(0)}),o(this,"unmute",()=>{this.props.volume!==null&&this.setVolume(this.props.volume)}),o(this,"ref",e=>{this.container=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){const{playing:a,config:s,onError:r,onDuration:n}=this.props,y=e&&e.match(P.MATCH_URL_VIDYARD)[1];this.player&&this.stop(),(0,f.getSDK)(A,R,T).then(u=>{this.container&&(u.api.addReadyListener((c,C)=>{this.player||(this.player=C,this.player.on("ready",this.props.onReady),this.player.on("play",this.props.onPlay),this.player.on("pause",this.props.onPause),this.player.on("seek",this.props.onSeek),this.player.on("playerComplete",this.props.onEnded))},y),u.api.renderPlayer({uuid:y,container:this.container,autoplay:a?1:0,...s.options}),u.api.getPlayerMetadata(y).then(c=>{this.duration=c.length_in_seconds,n(c.length_in_seconds)}))},r)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){window.VidyardV4.api.destroyPlayer(this.player)}seekTo(e,a=!0){this.callPlayer("seek",e),a||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setPlaybackRate(e){this.callPlayer("setPlaybackSpeed",e)}getDuration(){return this.duration}getCurrentTime(){return this.callPlayer("currentTime")}getSecondsLoaded(){return null}render(){const{display:e}=this.props,a={width:"100%",height:"100%",display:e};return i.default.createElement("div",{style:a},i.default.createElement("div",{ref:this.ref}))}}o(p,"displayName","Vidyard"),o(p,"canPlay",P.canPlay.vidyard);let _;_=E(m),b=g({__proto__:null,default:_},[m])});export{b as V,B as __tla};
