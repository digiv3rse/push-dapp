import{b8 as X,b7 as z,__tla as q}from"./index-BS9oUU35.js";import{u as G,p as Q,__tla as J}from"./NFTPage-DWYPbn_y.js";let S,Y=Promise.all([(()=>{try{return q}catch{}})(),(()=>{try{return J}catch{}})()]).then(async()=>{function L(s,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const n in r)if(n!=="default"&&!(n in s)){const h=Object.getOwnPropertyDescriptor(r,n);h&&Object.defineProperty(s,n,h.get?h:{enumerable:!0,get:()=>r[n]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}var O=Object.create,d=Object.defineProperty,w=Object.getOwnPropertyDescriptor,I=Object.getOwnPropertyNames,k=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty,M=(s,e,t)=>e in s?d(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,_=(s,e)=>{for(var t in e)d(s,t,{get:e[t],enumerable:!0})},v=(s,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of I(e))!R.call(s,n)&&n!==t&&d(s,n,{get:()=>e[n],enumerable:!(r=w(e,n))||r.enumerable});return s},j=(s,e,t)=>(t=s!=null?O(k(s)):{},v(!s||!s.__esModule?d(t,"default",{value:s,enumerable:!0}):t,s)),A=s=>v(d({},"__esModule",{value:!0}),s),i=(s,e,t)=>(M(s,typeof e!="symbol"?e+"":e,t),t),E={};_(E,{default:()=>m});var P=A(E),u=j(z),a=G,c=Q;const y=typeof navigator<"u",D=y&&navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,g=y&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||D)&&!window.MSStream,U=y&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&!window.MSStream,N="https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js",V="Hls",H="https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js",T="dashjs",B="https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js",x="flvjs",C=/www\.dropbox\.com\/.+/,f=/https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/,F="https://videodelivery.net/{id}/manifest/video.m3u8";class m extends u.Component{constructor(){super(...arguments),i(this,"onReady",(...e)=>this.props.onReady(...e)),i(this,"onPlay",(...e)=>this.props.onPlay(...e)),i(this,"onBuffer",(...e)=>this.props.onBuffer(...e)),i(this,"onBufferEnd",(...e)=>this.props.onBufferEnd(...e)),i(this,"onPause",(...e)=>this.props.onPause(...e)),i(this,"onEnded",(...e)=>this.props.onEnded(...e)),i(this,"onError",(...e)=>this.props.onError(...e)),i(this,"onPlayBackRateChange",e=>this.props.onPlaybackRateChange(e.target.playbackRate)),i(this,"onEnablePIP",(...e)=>this.props.onEnablePIP(...e)),i(this,"onDisablePIP",e=>{const{onDisablePIP:t,playing:r}=this.props;t(e),r&&this.play()}),i(this,"onPresentationModeChange",e=>{if(this.player&&(0,a.supportsWebKitPresentationMode)(this.player)){const{webkitPresentationMode:t}=this.player;t==="picture-in-picture"?this.onEnablePIP(e):t==="inline"&&this.onDisablePIP(e)}}),i(this,"onSeek",e=>{this.props.onSeek(e.target.currentTime)}),i(this,"mute",()=>{this.player.muted=!0}),i(this,"unmute",()=>{this.player.muted=!1}),i(this,"renderSourceElement",(e,t)=>typeof e=="string"?u.default.createElement("source",{key:t,src:e}):u.default.createElement("source",{key:t,...e})),i(this,"renderTrack",(e,t)=>u.default.createElement("track",{key:t,...e})),i(this,"ref",e=>{this.player&&(this.prevPlayer=this.player),this.player=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this),this.addListeners(this.player);const e=this.getSource(this.props.url);e&&(this.player.src=e),(g||this.props.config.forceDisableHls)&&this.player.load()}componentDidUpdate(e){this.shouldUseAudio(this.props)!==this.shouldUseAudio(e)&&(this.removeListeners(this.prevPlayer,e.url),this.addListeners(this.player)),this.props.url!==e.url&&!(0,a.isMediaStream)(this.props.url)&&!(this.props.url instanceof Array)&&(this.player.srcObject=null)}componentWillUnmount(){this.player.removeAttribute("src"),this.removeListeners(this.player),this.hls&&this.hls.destroy()}addListeners(e){const{url:t,playsinline:r}=this.props;e.addEventListener("play",this.onPlay),e.addEventListener("waiting",this.onBuffer),e.addEventListener("playing",this.onBufferEnd),e.addEventListener("pause",this.onPause),e.addEventListener("seeked",this.onSeek),e.addEventListener("ended",this.onEnded),e.addEventListener("error",this.onError),e.addEventListener("ratechange",this.onPlayBackRateChange),e.addEventListener("enterpictureinpicture",this.onEnablePIP),e.addEventListener("leavepictureinpicture",this.onDisablePIP),e.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(t)||e.addEventListener("canplay",this.onReady),r&&(e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.setAttribute("x5-playsinline",""))}removeListeners(e,t){e.removeEventListener("canplay",this.onReady),e.removeEventListener("play",this.onPlay),e.removeEventListener("waiting",this.onBuffer),e.removeEventListener("playing",this.onBufferEnd),e.removeEventListener("pause",this.onPause),e.removeEventListener("seeked",this.onSeek),e.removeEventListener("ended",this.onEnded),e.removeEventListener("error",this.onError),e.removeEventListener("ratechange",this.onPlayBackRateChange),e.removeEventListener("enterpictureinpicture",this.onEnablePIP),e.removeEventListener("leavepictureinpicture",this.onDisablePIP),e.removeEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(t)||e.removeEventListener("canplay",this.onReady)}shouldUseAudio(e){return e.config.forceVideo||e.config.attributes.poster?!1:c.AUDIO_EXTENSIONS.test(e.url)||e.config.forceAudio}shouldUseHLS(e){return U&&this.props.config.forceSafariHLS||this.props.config.forceHLS?!0:g||this.props.config.forceDisableHls?!1:c.HLS_EXTENSIONS.test(e)||f.test(e)}shouldUseDASH(e){return c.DASH_EXTENSIONS.test(e)||this.props.config.forceDASH}shouldUseFLV(e){return c.FLV_EXTENSIONS.test(e)||this.props.config.forceFLV}load(e){const{hlsVersion:t,hlsOptions:r,dashVersion:n,flvVersion:h}=this.props.config;if(this.hls&&this.hls.destroy(),this.dash&&this.dash.reset(),this.shouldUseHLS(e)&&(0,a.getSDK)(N.replace("VERSION",t),V).then(o=>{if(this.hls=new o(r),this.hls.on(o.Events.MANIFEST_PARSED,()=>{this.props.onReady()}),this.hls.on(o.Events.ERROR,(l,p)=>{this.props.onError(l,p,this.hls,o)}),f.test(e)){const l=e.match(f)[1];this.hls.loadSource(F.replace("{id}",l))}else this.hls.loadSource(e);this.hls.attachMedia(this.player),this.props.onLoaded()}),this.shouldUseDASH(e)&&(0,a.getSDK)(H.replace("VERSION",n),T).then(o=>{this.dash=o.MediaPlayer().create(),this.dash.initialize(this.player,e,this.props.playing),this.dash.on("error",this.props.onError),parseInt(n)<3?this.dash.getDebug().setLogToBrowserConsole(!1):this.dash.updateSettings({debug:{logLevel:o.Debug.LOG_LEVEL_NONE}}),this.props.onLoaded()}),this.shouldUseFLV(e)&&(0,a.getSDK)(B.replace("VERSION",h),x).then(o=>{this.flv=o.createPlayer({type:"flv",url:e}),this.flv.attachMediaElement(this.player),this.flv.on(o.Events.ERROR,(l,p)=>{this.props.onError(l,p,this.flv,o)}),this.flv.load(),this.props.onLoaded()}),e instanceof Array)this.player.load();else if((0,a.isMediaStream)(e))try{this.player.srcObject=e}catch{this.player.src=window.URL.createObjectURL(e)}}play(){const e=this.player.play();e&&e.catch(this.props.onError)}pause(){this.player.pause()}stop(){this.player.removeAttribute("src"),this.dash&&this.dash.reset()}seekTo(e,t=!0){this.player.currentTime=e,t||this.pause()}setVolume(e){this.player.volume=e}enablePIP(){this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player?this.player.requestPictureInPicture():(0,a.supportsWebKitPresentationMode)(this.player)&&this.player.webkitPresentationMode!=="picture-in-picture"&&this.player.webkitSetPresentationMode("picture-in-picture")}disablePIP(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player?document.exitPictureInPicture():(0,a.supportsWebKitPresentationMode)(this.player)&&this.player.webkitPresentationMode!=="inline"&&this.player.webkitSetPresentationMode("inline")}setPlaybackRate(e){try{this.player.playbackRate=e}catch(t){this.props.onError(t)}}getDuration(){if(!this.player)return null;const{duration:e,seekable:t}=this.player;return e===1/0&&t.length>0?t.end(t.length-1):e}getCurrentTime(){return this.player?this.player.currentTime:null}getSecondsLoaded(){if(!this.player)return null;const{buffered:e}=this.player;if(e.length===0)return 0;const t=e.end(e.length-1),r=this.getDuration();return t>r?r:t}getSource(e){const t=this.shouldUseHLS(e),r=this.shouldUseDASH(e),n=this.shouldUseFLV(e);if(!(e instanceof Array||(0,a.isMediaStream)(e)||t||r||n))return C.test(e)?e.replace("www.dropbox.com","dl.dropboxusercontent.com"):e}render(){const{url:e,playing:t,loop:r,controls:n,muted:h,config:o,width:l,height:p}=this.props,K=this.shouldUseAudio(this.props)?"audio":"video",W={width:l==="auto"?l:"100%",height:p==="auto"?p:"100%"};return u.default.createElement(K,{ref:this.ref,src:this.getSource(e),style:W,preload:"auto",autoPlay:t||void 0,controls:n,muted:h,loop:r,...o.attributes},e instanceof Array&&e.map(this.renderSourceElement),o.tracks.map(this.renderTrack))}}i(m,"displayName","FilePlayer"),i(m,"canPlay",c.canPlay.file);let b;b=X(P),S=L({__proto__:null,default:b},[P])});export{S as F,Y as __tla};
