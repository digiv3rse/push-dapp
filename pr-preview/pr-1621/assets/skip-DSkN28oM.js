import{gB as h,gC as _,gD as A,gE as x,gF as m,gG as k,gH as C,gI as E,gJ as S,__tla as q}from"./index-CmHJK3Xz.js";let d,o,f,g,a,w,b,B=Promise.all([(()=>{try{return q}catch{}})()]).then(async()=>{let v,l;v=function(s){h(i,s);function i(n,e){return s.call(this)||this}return i.prototype.schedule=function(n,e){return this},i}(_),l={setInterval:function(s,i){for(var n=[],e=2;e<arguments.length;e++)n[e-2]=arguments[e];return setInterval.apply(void 0,A([s,i],x(n)))},clearInterval:function(s){var i=l.delegate;return((i==null?void 0:i.clearInterval)||clearInterval)(s)},delegate:void 0},d=function(s){h(i,s);function i(n,e){var t=s.call(this,n,e)||this;return t.scheduler=n,t.work=e,t.pending=!1,t}return i.prototype.schedule=function(n,e){var t;if(e===void 0&&(e=0),this.closed)return this;this.state=n;var r=this.id,u=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(u,r,e)),this.pending=!0,this.delay=e,this.id=(t=this.id)!==null&&t!==void 0?t:this.requestAsyncId(u,this.id,e),this},i.prototype.requestAsyncId=function(n,e,t){return t===void 0&&(t=0),l.setInterval(n.flush.bind(n,this),t)},i.prototype.recycleAsyncId=function(n,e,t){if(t===void 0&&(t=0),t!=null&&this.delay===t&&this.pending===!1)return e;e!=null&&l.clearInterval(e)},i.prototype.execute=function(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var t=this._execute(n,e);if(t)return t;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},i.prototype._execute=function(n,e){var t=!1,r;try{this.work(n)}catch(u){t=!0,r=u||new Error("Scheduled action threw falsy error")}if(t)return this.unsubscribe(),r},i.prototype.unsubscribe=function(){if(!this.closed){var n=this,e=n.id,t=n.scheduler,r=t.actions;this.work=this.state=this.scheduler=null,this.pending=!1,m(r,this),e!=null&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null,s.prototype.unsubscribe.call(this)}},i}(v),o=function(){function s(i,n){n===void 0&&(n=s.now),this.schedulerActionCtor=i,this.now=n}return s.prototype.schedule=function(i,n,e){return n===void 0&&(n=0),new this.schedulerActionCtor(this,i).schedule(e,n)},s.now=k.now,s}(),f=function(s){h(i,s);function i(n,e){e===void 0&&(e=o.now);var t=s.call(this,n,e)||this;return t.actions=[],t._active=!1,t}return i.prototype.flush=function(n){var e=this.actions;if(this._active){e.push(n);return}var t;this._active=!0;do if(t=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,t){for(;n=e.shift();)n.unsubscribe();throw t}},i}(o),a=new f(d),g=a,w=function(s,i){return i===void 0&&(i=a),C(function(n,e){var t=null,r=null,u=null,p=function(){if(t){t.unsubscribe(),t=null;var c=r;r=null,e.next(c)}};function I(){var c=u+s,y=i.now();if(y<c){t=this.schedule(void 0,c-y),e.add(t);return}p()}n.subscribe(E(e,function(c){r=c,u=i.now(),t||(t=i.schedule(I,s),e.add(t))},function(){p(),e.complete()},void 0,function(){r=t=null}))})},b=function(s){return S(function(i,n){return s<=n})}});export{d as A,o as S,B as __tla,f as a,g as b,a as c,w as d,b as s};
