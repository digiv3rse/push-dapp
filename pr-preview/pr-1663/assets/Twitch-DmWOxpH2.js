import{cr as k,b0 as x,hE as K,hF as $,__tla as G}from"./index-C5SW-GWn.js";let _,Y=Promise.all([(()=>{try{return G}catch{}})()]).then(async()=>{function b(t,e){for(var r=0;r<e.length;r++){const s=e[r];if(typeof s!="string"&&!Array.isArray(s)){for(const a in s)if(a!=="default"&&!(a in t)){const o=Object.getOwnPropertyDescriptor(s,a);o&&Object.defineProperty(t,a,o.get?o:{enumerable:!0,get:()=>s[a]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var E=Object.create,n=Object.defineProperty,v=Object.getOwnPropertyDescriptor,O=Object.getOwnPropertyNames,L=Object.getPrototypeOf,T=Object.prototype.hasOwnProperty,j=(t,e,r)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,w=(t,e)=>{for(var r in e)n(t,r,{get:e[r],enumerable:!0})},u=(t,e,r,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of O(e))!T.call(t,a)&&a!==r&&n(t,a,{get:()=>e[a],enumerable:!(s=v(e,a))||s.enumerable});return t},D=(t,e,r)=>(r=t!=null?E(L(t)):{},u(!t||!t.__esModule?n(r,"default",{value:t,enumerable:!0}):r,t)),C=t=>u(n({},"__esModule",{value:!0}),t),l=(t,e,r)=>(j(t,typeof e!="symbol"?e+"":e,r),r),d={};w(d,{default:()=>c});var m=C(d),f=D(x),p=K,h=$;const I="https://player.twitch.tv/js/embed/v1.js",M="Twitch",N="twitch-player-";class c extends f.Component{constructor(){super(...arguments),l(this,"callPlayer",p.callPlayer),l(this,"playerID",this.props.config.playerId||`${N}${(0,p.randomString)()}`),l(this,"mute",()=>{this.callPlayer("setMuted",!0)}),l(this,"unmute",()=>{this.callPlayer("setMuted",!1)})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,r){const{playsinline:s,onError:a,config:o,controls:A}=this.props,i=h.MATCH_URL_TWITCH_CHANNEL.test(e),y=i?e.match(h.MATCH_URL_TWITCH_CHANNEL)[1]:e.match(h.MATCH_URL_TWITCH_VIDEO)[1];if(r){i?this.player.setChannel(y):this.player.setVideo("v"+y);return}(0,p.getSDK)(I,M).then(g=>{this.player=new g.Player(this.playerID,{video:i?"":y,channel:i?y:"",height:"100%",width:"100%",playsinline:s,autoplay:this.props.playing,muted:this.props.muted,controls:i?!0:A,time:(0,p.parseStartTime)(e),...o.options});const{READY:S,PLAYING:H,PAUSE:R,ENDED:U,ONLINE:V,OFFLINE:F,SEEK:W}=g.Player;this.player.addEventListener(S,this.props.onReady),this.player.addEventListener(H,this.props.onPlay),this.player.addEventListener(R,this.props.onPause),this.player.addEventListener(U,this.props.onEnded),this.player.addEventListener(W,this.props.onSeek),this.player.addEventListener(V,this.props.onLoaded),this.player.addEventListener(F,this.props.onLoaded)},a)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){this.callPlayer("pause")}seekTo(e,r=!0){this.callPlayer("seek",e),r||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return null}render(){const e={width:"100%",height:"100%"};return f.default.createElement("div",{style:e,id:this.playerID})}}l(c,"displayName","Twitch"),l(c,"canPlay",h.canPlay.twitch),l(c,"loopOnEnded",!0);let P;P=k(m),_=b({__proto__:null,default:P},[m])});export{_ as T,Y as __tla};
