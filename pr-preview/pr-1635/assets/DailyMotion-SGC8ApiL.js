import{cr as N,b0 as x,__tla as I}from"./index-C9t017_t.js";import{u as R,p as K,__tla as V}from"./NFTPage-DEZRQyyx.js";let b,z=Promise.all([(()=>{try{return I}catch{}})(),(()=>{try{return V}catch{}})()]).then(async()=>{function _(t,e){for(var r=0;r<e.length;r++){const o=e[r];if(typeof o!="string"&&!Array.isArray(o)){for(const a in o)if(a!=="default"&&!(a in t)){const i=Object.getOwnPropertyDescriptor(o,a);i&&Object.defineProperty(t,a,i.get?i:{enumerable:!0,get:()=>o[a]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var P=Object.create,s=Object.defineProperty,O=Object.getOwnPropertyDescriptor,v=Object.getOwnPropertyNames,D=Object.getPrototypeOf,j=Object.prototype.hasOwnProperty,M=(t,e,r)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,w=(t,e)=>{for(var r in e)s(t,r,{get:e[r],enumerable:!0})},h=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of v(e))!j.call(t,a)&&a!==r&&s(t,a,{get:()=>e[a],enumerable:!(o=O(e,a))||o.enumerable});return t},T=(t,e,r)=>(r=t!=null?P(D(t)):{},h(!t||!t.__esModule?s(r,"default",{value:t,enumerable:!0}):r,t)),S=t=>h(s({},"__esModule",{value:!0}),t),n=(t,e,r)=>(M(t,typeof e!="symbol"?e+"":e,r),r),y={};w(y,{default:()=>p});var d=S(y),u=T(x),l=R,f=K;const A="https://api.dmcdn.net/all.js",C="DM",E="dmAsyncInit";class p extends u.Component{constructor(){super(...arguments),n(this,"callPlayer",l.callPlayer),n(this,"onDurationChange",()=>{const e=this.getDuration();this.props.onDuration(e)}),n(this,"mute",()=>{this.callPlayer("setMuted",!0)}),n(this,"unmute",()=>{this.callPlayer("setMuted",!1)}),n(this,"ref",e=>{this.container=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){const{controls:r,config:o,onError:a,playing:i}=this.props,[,g]=e.match(f.MATCH_URL_DAILYMOTION);if(this.player){this.player.load(g,{start:(0,l.parseStartTime)(e),autoplay:i});return}(0,l.getSDK)(A,C,E,c=>c.player).then(c=>{if(!this.container)return;const k=c.player;this.player=new k(this.container,{width:"100%",height:"100%",video:g,params:{controls:r,autoplay:this.props.playing,mute:this.props.muted,start:(0,l.parseStartTime)(e),origin:window.location.origin,...o.params},events:{apiready:this.props.onReady,seeked:()=>this.props.onSeek(this.player.currentTime),video_end:this.props.onEnded,durationchange:this.onDurationChange,pause:this.props.onPause,playing:this.props.onPlay,waiting:this.props.onBuffer,error:L=>a(L)}})},a)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,r=!0){this.callPlayer("seek",e),r||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.player.duration||null}getCurrentTime(){return this.player.currentTime}getSecondsLoaded(){return this.player.bufferedTime}render(){const{display:e}=this.props,r={width:"100%",height:"100%",display:e};return u.default.createElement("div",{style:r},u.default.createElement("div",{ref:this.ref}))}}n(p,"displayName","DailyMotion"),n(p,"canPlay",f.canPlay.dailymotion),n(p,"loopOnEnded",!0);let m;m=N(d),b=_({__proto__:null,default:m},[d])});export{b as D,z as __tla};
