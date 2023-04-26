import{i as dr}from"./typed.module.baa693b0.js";import{S as vr}from"./locomotive-scroll.esm.4c03b64d.js";import"./ThemeToggle.astro_astro_type_script_index_0_lang.6bf4bf29.js";var St={},mr={get exports(){return St},set exports(u){St=u}};/*! For license information please see shifty.js.LICENSE.txt */(function(u,n){(function(a,s){u.exports=s()})(self,function(){return function(){var a={720:function(p,S,O){O.r(S),O.d(S,{Scene:function(){return gr},Tweenable:function(){return T},interpolate:function(){return cr},processTweens:function(){return Mt},setBezierFunction:function(){return De},shouldScheduleUpdate:function(){return Wt},tween:function(){return Ge},unsetBezierFunction:function(){return Le}});var J={};O.r(J),O.d(J,{bounce:function(){return Ee},bouncePast:function(){return Fe},easeFrom:function(){return Me},easeFromTo:function(){return je},easeInBack:function(){return Oe},easeInCirc:function(){return ye},easeInCubic:function(){return ie},easeInExpo:function(){return ve},easeInOutBack:function(){return Pe},easeInOutCirc:function(){return Se},easeInOutCubic:function(){return oe},easeInOutExpo:function(){return _e},easeInOutQuad:function(){return ne},easeInOutQuart:function(){return le},easeInOutQuint:function(){return fe},easeInOutSine:function(){return de},easeInQuad:function(){return Z},easeInQuart:function(){return se},easeInQuint:function(){return he},easeInSine:function(){return pe},easeOutBack:function(){return ke},easeOutBounce:function(){return be},easeOutCirc:function(){return we},easeOutCubic:function(){return ae},easeOutExpo:function(){return me},easeOutQuad:function(){return ht},easeOutQuart:function(){return ue},easeOutQuint:function(){return ce},easeOutSine:function(){return ge},easeTo:function(){return We},elastic:function(){return Te},linear:function(){return it},swingFrom:function(){return Ae},swingFromTo:function(){return xe},swingTo:function(){return Ce}});var K={};O.r(K),O.d(K,{afterTween:function(){return ur},beforeTween:function(){return sr},doesApply:function(){return ar},tweenCreated:function(){return or}});var it=function(t){return t},Z=function(t){return Math.pow(t,2)},ht=function(t){return-(Math.pow(t-1,2)-1)},ne=function(t){return(t/=.5)<1?.5*Math.pow(t,2):-.5*((t-=2)*t-2)},ie=function(t){return Math.pow(t,3)},ae=function(t){return Math.pow(t-1,3)+1},oe=function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},se=function(t){return Math.pow(t,4)},ue=function(t){return-(Math.pow(t-1,4)-1)},le=function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},he=function(t){return Math.pow(t,5)},ce=function(t){return Math.pow(t-1,5)+1},fe=function(t){return(t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)},pe=function(t){return 1-Math.cos(t*(Math.PI/2))},ge=function(t){return Math.sin(t*(Math.PI/2))},de=function(t){return-.5*(Math.cos(Math.PI*t)-1)},ve=function(t){return t===0?0:Math.pow(2,10*(t-1))},me=function(t){return t===1?1:1-Math.pow(2,-10*t)},_e=function(t){return t===0?0:t===1?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},ye=function(t){return-(Math.sqrt(1-t*t)-1)},we=function(t){return Math.sqrt(1-Math.pow(t-1,2))},Se=function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},be=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},Oe=function(t){var e=1.70158;return t*t*((e+1)*t-e)},ke=function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},Pe=function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},Te=function(t){return-1*Math.pow(4,-8*t)*Math.sin((6*t-1)*(2*Math.PI)/2)+1},xe=function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},Ae=function(t){var e=1.70158;return t*t*((e+1)*t-e)},Ce=function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},Ee=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},Fe=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?2-(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?2-(7.5625*(t-=2.25/2.75)*t+.9375):2-(7.5625*(t-=2.625/2.75)*t+.984375)},je=function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},Me=function(t){return Math.pow(t,4)},We=function(t){return Math.pow(t,.25)};function Ie(t,e,i,r,o,l){var h,f,g,_,v,m=0,y=0,k=0,G=function(d){return((m*d+y)*d+k)*d},I=function(d){return(3*m*d+2*y)*d+k},D=function(d){return d>=0?d:0-d};return m=1-(k=3*e)-(y=3*(r-e)-k),g=1-(v=3*i)-(_=3*(o-i)-v),h=t,f=function(d){return 1/(200*d)}(l),function(d){return((g*d+_)*d+v)*d}(function(d,H){var L,B,b,F,M,N;for(b=d,N=0;N<8;N++){if(F=G(b)-d,D(F)<H)return b;if(M=I(b),D(M)<1e-6)break;b-=F/M}if((b=d)<(L=0))return L;if(b>(B=1))return B;for(;L<B;){if(F=G(b),D(F-d)<H)return b;d>F?L=b:B=b,b=.5*(B-L)+L}return b}(h,f))}var Ot,kt=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:.25,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:.25,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.75,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:.75;return function(o){return Ie(o,t,e,i,r,1)}},De=function(t,e,i,r,o){var l=kt(e,i,r,o);return l.displayName=t,l.x1=e,l.y1=i,l.x2=r,l.y2=o,T.formulas[t]=l},Le=function(t){return delete T.formulas[t]};function Re(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ze(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function at(t){return at=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},at(t)}function qe(t){return function(e){if(Array.isArray(e))return ct(e)}(t)||function(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,i){if(e){if(typeof e=="string")return ct(e,i);var r=Object.prototype.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ct(e,i):void 0}}(t)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function ct(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function Pt(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),i.push.apply(i,r)}return i}function ft(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?Pt(Object(i),!0).forEach(function(r){V(t,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Pt(Object(i)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(i,r))})}return t}function V(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var Tt,pt,gt,xt="linear",q=typeof window<"u"?window:O.g,At="afterTween",$e="afterTweenEnd",Ct="beforeTween",Be="tweenCreated",Ne="function",Et="string",Ft=q.requestAnimationFrame||q.webkitRequestAnimationFrame||q.oRequestAnimationFrame||q.msRequestAnimationFrame||q.mozCancelRequestAnimationFrame&&q.mozRequestAnimationFrame||setTimeout,tt=function(){},$=null,W=null,ot=ft({},J),dt=function(t,e,i,r,o,l,h){var f,g,_,v=t<l?0:(t-l)/o,m=!1;for(var y in h&&h.call&&(m=!0,f=h(v)),e)m||(f=((g=h[y]).call?g:ot[g])(v)),_=i[y],e[y]=_+(r[y]-_)*f;return e},jt=function(t,e){var i=t._timestamp,r=t._currentState,o=t._delay;if(!(e<i+o)){var l=t._duration,h=t._targetState,f=i+o+l,g=e>f?f:e;t._hasEnded=g>=f;var _=l-(f-g),v=t._filters.length>0;if(t._hasEnded)return t._render(h,t._data,_),t.stop(!0);v&&t._applyFilter(Ct),g<i+o?i=l=g=1:i+=o,dt(g,r,t._originalState,h,l,i,t._easing),v&&t._applyFilter(At),t._render(r,t._data,_)}},Mt=function(){for(var t,e=T.now(),i=$;i;)t=i._next,jt(i,e),i=t},Qe=Date.now||function(){return+new Date},vt=!1,Wt=function(t){t&&vt||(vt=t,t&&Ue())},Ue=function t(){Tt=Qe(),vt&&Ft.call(q,t,16.666666666666668),Mt()},It=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xt,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(e)){var r=kt.apply(void 0,qe(e));return r}var o=at(e);if(ot[e])return ot[e];if(o===Et||o===Ne)for(var l in t)i[l]=e;else for(var h in t)i[h]=e[h]||xt;return i},Dt=function(t){t===$?($=t._next)?$._previous=null:W=null:t===W?(W=t._previous)?W._next=null:$=null:(pt=t._previous,gt=t._next,pt._next=gt,gt._previous=pt),t._previous=t._next=null},Ve=typeof Promise=="function"?Promise:null;Ot=Symbol.toStringTag;var T=function(){function t(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0;Re(this,t),V(this,Ot,"Promise"),this._config={},this._data={},this._delay=0,this._filters=[],this._next=null,this._previous=null,this._timestamp=null,this._hasEnded=!1,this._resolve=null,this._reject=null,this._currentState=r||{},this._originalState={},this._targetState={},this._start=tt,this._render=tt,this._promiseCtor=Ve,o&&this.setConfig(o)}var e,i;return e=t,i=[{key:"_applyFilter",value:function(r){for(var o=this._filters.length;o>0;o--){var l=this._filters[o-o][r];l&&l(this)}}},{key:"tween",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;return this._isPlaying&&this.stop(),!r&&this._config||this.setConfig(r),this._pausedAtTime=null,this._timestamp=t.now(),this._start(this.get(),this._data),this._delay&&this._render(this._currentState,this._data,0),this._resume(this._timestamp)}},{key:"setConfig",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=this._config;for(var l in r)o[l]=r[l];var h=o.promise,f=h===void 0?this._promiseCtor:h,g=o.start,_=g===void 0?tt:g,v=o.finish,m=o.render,y=m===void 0?this._config.step||tt:m,k=o.step,G=k===void 0?tt:k;this._data=o.data||o.attachment||this._data,this._isPlaying=!1,this._pausedAtTime=null,this._scheduleId=null,this._delay=r.delay||0,this._start=_,this._render=y||G,this._duration=o.duration||500,this._promiseCtor=f,v&&(this._resolve=v);var I=r.from,D=r.to,d=D===void 0?{}:D,H=this._currentState,L=this._originalState,B=this._targetState;for(var b in I)H[b]=I[b];var F=!1;for(var M in H){var N=H[M];F||at(N)!==Et||(F=!0),L[M]=N,B[M]=d.hasOwnProperty(M)?d[M]:N}if(this._easing=It(this._currentState,o.easing,this._easing),this._filters.length=0,F){for(var $t in t.filters)t.filters[$t].doesApply(this)&&this._filters.push(t.filters[$t]);this._applyFilter(Be)}return this}},{key:"then",value:function(r,o){var l=this;return this._promise=new this._promiseCtor(function(h,f){l._resolve=h,l._reject=f}),this._promise.then(r,o)}},{key:"catch",value:function(r){return this.then().catch(r)}},{key:"finally",value:function(r){return this.then().finally(r)}},{key:"get",value:function(){return ft({},this._currentState)}},{key:"set",value:function(r){this._currentState=r}},{key:"pause",value:function(){if(this._isPlaying)return this._pausedAtTime=t.now(),this._isPlaying=!1,Dt(this),this}},{key:"resume",value:function(){return this._resume()}},{key:"_resume",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:t.now();return this._timestamp===null?this.tween():this._isPlaying?this._promise:(this._pausedAtTime&&(this._timestamp+=r-this._pausedAtTime,this._pausedAtTime=null),this._isPlaying=!0,$===null?($=this,W=this):(this._previous=W,W._next=this,W=this),this)}},{key:"seek",value:function(r){r=Math.max(r,0);var o=t.now();return this._timestamp+r===0||(this._timestamp=o-r,jt(this,o)),this}},{key:"stop",value:function(){var r=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(!this._isPlaying)return this;this._isPlaying=!1,Dt(this);var o=this._filters.length>0;return r&&(o&&this._applyFilter(Ct),dt(1,this._currentState,this._originalState,this._targetState,1,0,this._easing),o&&(this._applyFilter(At),this._applyFilter($e))),this._resolve&&this._resolve({data:this._data,state:this._currentState,tweenable:this}),this._resolve=null,this._reject=null,this}},{key:"cancel",value:function(){var r=arguments.length>0&&arguments[0]!==void 0&&arguments[0],o=this._currentState,l=this._data,h=this._isPlaying;return h?(this._reject&&this._reject({data:l,state:o,tweenable:this}),this._resolve=null,this._reject=null,this.stop(r)):this}},{key:"isPlaying",value:function(){return this._isPlaying}},{key:"hasEnded",value:function(){return this._hasEnded}},{key:"setScheduleFunction",value:function(r){t.setScheduleFunction(r)}},{key:"data",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return r&&(this._data=ft({},r)),this._data}},{key:"dispose",value:function(){for(var r in this)delete this[r]}}],i&&ze(e.prototype,i),t}();function Ge(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=new T;return e.tween(t),e.tweenable=e,e}V(T,"now",function(){return Tt}),V(T,"setScheduleFunction",function(t){return Ft=t}),V(T,"filters",{}),V(T,"formulas",ot),Wt(!0);var et,st,He=/(\d|-|\.)/,Xe=/([^\-0-9.]+)/g,mt=/[0-9.-]+/g,Ye=(et=mt.source,st=/,\s*/.source,new RegExp("rgba?\\(".concat(et).concat(st).concat(et).concat(st).concat(et,"(").concat(st).concat(et,")?\\)"),"g")),Je=/^.*\(/,Lt=/#([0-9]|[a-f]){3,6}/gi,ut="VAL",Ke=function(t,e){return t.map(function(i,r){return"_".concat(e,"_").concat(r)})};function _t(t){return parseInt(t,16)}var Ze=function(t){return"rgb(".concat((e=t,(e=e.replace(/#/,"")).length===3&&(e=(e=e.split(""))[0]+e[0]+e[1]+e[1]+e[2]+e[2]),[_t(e.substr(0,2)),_t(e.substr(2,2)),_t(e.substr(4,2))]).join(","),")");var e},Rt=function(t,e,i){var r=e.match(t),o=e.replace(t,ut);return r&&r.forEach(function(l){return o=o.replace(ut,i(l))}),o},tr=function(t){for(var e in t){var i=t[e];typeof i=="string"&&i.match(Lt)&&(t[e]=Rt(Lt,i,Ze))}},er=function(t){var e=t.match(mt),i=e.slice(0,3).map(Math.floor),r=t.match(Je)[0];if(e.length===3)return"".concat(r).concat(i.join(","),")");if(e.length===4)return"".concat(r).concat(i.join(","),",").concat(e[3],")");throw new Error("Invalid rgbChunk: ".concat(t))},zt=function(t){return t.match(mt)},rr=function(t,e){var i={};return e.forEach(function(r){i[r]=t[r],delete t[r]}),i},nr=function(t,e){return e.map(function(i){return t[i]})},ir=function(t,e){return e.forEach(function(i){return t=t.replace(ut,+i.toFixed(4))}),t},ar=function(t){for(var e in t._currentState)if(typeof t._currentState[e]=="string")return!0;return!1};function or(t){var e=t._currentState;[e,t._originalState,t._targetState].forEach(tr),t._tokenData=function(i){var r,o,l={};for(var h in i){var f=i[h];typeof f=="string"&&(l[h]={formatString:(r=f,o=void 0,o=r.match(Xe),o?(o.length===1||r.charAt(0).match(He))&&o.unshift(""):o=["",""],o.join(ut)),chunkNames:Ke(zt(f),h)})}return l}(e)}function sr(t){var e=t._currentState,i=t._originalState,r=t._targetState,o=t._easing,l=t._tokenData;(function(h,f){var g=function(v){var m=f[v].chunkNames,y=h[v];if(typeof y=="string"){var k=y.split(" "),G=k[k.length-1];m.forEach(function(I,D){return h[I]=k[D]||G})}else m.forEach(function(I){return h[I]=y});delete h[v]};for(var _ in f)g(_)})(o,l),[e,i,r].forEach(function(h){return function(f,g){var _=function(m){zt(f[m]).forEach(function(y,k){return f[g[m].chunkNames[k]]=+y}),delete f[m]};for(var v in g)_(v)}(h,l)})}function ur(t){var e=t._currentState,i=t._originalState,r=t._targetState,o=t._easing,l=t._tokenData;[e,i,r].forEach(function(h){return function(f,g){for(var _ in g){var v=g[_],m=v.chunkNames,y=v.formatString,k=ir(y,nr(rr(f,m),m));f[_]=Rt(Ye,k,er)}}(h,l)}),function(h,f){for(var g in f){var _=f[g].chunkNames,v=h[_[0]];h[g]=typeof v=="string"?_.map(function(m){var y=h[m];return delete h[m],y}).join(" "):v}}(o,l)}function qt(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),i.push.apply(i,r)}return i}function lr(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?qt(Object(i),!0).forEach(function(r){hr(t,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):qt(Object(i)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(i,r))})}return t}function hr(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var A=new T,yt=T.filters,cr=function(t,e,i,r){var o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,l=lr({},t),h=It(t,r);for(var f in A._filters.length=0,A.set({}),A._currentState=l,A._originalState=t,A._targetState=e,A._easing=h,yt)yt[f].doesApply(A)&&A._filters.push(yt[f]);A._applyFilter("tweenCreated"),A._applyFilter("beforeTween");var g=dt(i,l,t,e,1,o,h);return A._applyFilter("afterTween"),g};function wt(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function fr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function pr(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function E(t,e){var i=e.get(t);if(!i)throw new TypeError("attempted to get private field on non-instance");return i.get?i.get.call(t):i.value}var C=new WeakMap,gr=function(){function t(){fr(this,t),C.set(this,{writable:!0,value:[]});for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];o.forEach(this.add.bind(this))}var e,i;return e=t,(i=[{key:"add",value:function(r){return E(this,C).push(r),r}},{key:"remove",value:function(r){var o=E(this,C).indexOf(r);return~o&&E(this,C).splice(o,1),r}},{key:"empty",value:function(){return this.tweenables.map(this.remove.bind(this))}},{key:"isPlaying",value:function(){return E(this,C).some(function(r){return r.isPlaying()})}},{key:"play",value:function(){return E(this,C).forEach(function(r){return r.tween()}),this}},{key:"pause",value:function(){return E(this,C).forEach(function(r){return r.pause()}),this}},{key:"resume",value:function(){return this.playingTweenables.forEach(function(r){return r.resume()}),this}},{key:"stop",value:function(r){return E(this,C).forEach(function(o){return o.stop(r)}),this}},{key:"tweenables",get:function(){return function(o){if(Array.isArray(o))return wt(o)}(r=E(this,C))||function(o){if(typeof Symbol<"u"&&Symbol.iterator in Object(o))return Array.from(o)}(r)||function(o,l){if(o){if(typeof o=="string")return wt(o,l);var h=Object.prototype.toString.call(o).slice(8,-1);return h==="Object"&&o.constructor&&(h=o.constructor.name),h==="Map"||h==="Set"?Array.from(o):h==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h)?wt(o,l):void 0}}(r)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}();var r}},{key:"playingTweenables",get:function(){return E(this,C).filter(function(r){return!r.hasEnded()})}},{key:"promises",get:function(){return E(this,C).map(function(r){return r.then()})}}])&&pr(e.prototype,i),t}();T.filters.token=K}},s={};function c(p){if(s[p])return s[p].exports;var S=s[p]={exports:{}};return a[p](S,S.exports,c),S.exports}return c.d=function(p,S){for(var O in S)c.o(S,O)&&!c.o(p,O)&&Object.defineProperty(p,O,{enumerable:!0,get:S[O]})},c.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),c.o=function(p,S){return Object.prototype.hasOwnProperty.call(p,S)},c.r=function(p){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(p,"__esModule",{value:!0})},c(720)}()})})(mr);var Bt="Webkit Moz O ms".split(" "),_r=.001;function Ut(u,n,a){u=u||{},n=n||{},a=a||!1;for(var s in n)if(n.hasOwnProperty(s)){var c=u[s],p=n[s];a&&lt(c)&&lt(p)?u[s]=Ut(c,p,a):u[s]=p}return u}function yr(u,n){var a=u;for(var s in n)if(n.hasOwnProperty(s)){var c=n[s],p="\\{"+s+"\\}",S=new RegExp(p,"g");a=a.replace(S,c)}return a}function Vt(u,n,a){for(var s=u.style,c=0;c<Bt.length;++c){var p=Bt[c];s[p+Gt(n)]=a}s[n]=a}function wr(u,n){Ht(n,function(a,s){a!=null&&(lt(a)&&a.prefix===!0?Vt(u,s,a.value):u.style[s]=a)})}function Gt(u){return u.charAt(0).toUpperCase()+u.slice(1)}function Sr(u){return typeof u=="string"||u instanceof String}function br(u){return typeof u=="function"}function Or(u){return Object.prototype.toString.call(u)==="[object Array]"}function lt(u){if(Or(u))return!1;var n=typeof u;return n==="object"&&!!u}function Ht(u,n){for(var a in u)if(u.hasOwnProperty(a)){var s=u[a];n(s,a)}}function kr(u,n){return Math.abs(u-n)<_r}function Pr(u){for(;u.firstChild;)u.removeChild(u.firstChild)}var U={extend:Ut,render:yr,setStyle:Vt,setStyles:wr,capitalize:Gt,isString:Sr,isFunction:br,isObject:lt,forEachObject:Ht,floatEquals:kr,removeChildren:Pr},bt=St,j=U,Tr=bt.Tweenable,Nt={easeIn:"easeInCubic",easeOut:"easeOutCubic",easeInOut:"easeInOutCubic"},x=function u(n,a){if(!(this instanceof u))throw new Error("Constructor was called without new keyword");a=j.extend({delay:0,duration:800,easing:"linear",from:{},to:{},step:function(){}},a);var s;j.isString(n)?s=document.querySelector(n):s=n,this.path=s,this._opts=a,this._tweenable=null;var c=this.path.getTotalLength();this.path.style.strokeDasharray=c+" "+c,this.set(0)};x.prototype.value=function(){var n=this._getComputedDashOffset(),a=this.path.getTotalLength(),s=1-n/a;return parseFloat(s.toFixed(6),10)};x.prototype.set=function(n){this.stop(),this.path.style.strokeDashoffset=this._progressToOffset(n);var a=this._opts.step;if(j.isFunction(a)){var s=this._easing(this._opts.easing),c=this._calculateTo(n,s),p=this._opts.shape||this;a(c,p,this._opts.attachment)}};x.prototype.stop=function(){this._stopTween(),this.path.style.strokeDashoffset=this._getComputedDashOffset()};x.prototype.animate=function(n,a,s){a=a||{},j.isFunction(a)&&(s=a,a={});var c=j.extend({},a),p=j.extend({},this._opts);a=j.extend(p,a);var S=this._easing(a.easing),O=this._resolveFromAndTo(n,S,c);this.stop(),this.path.getBoundingClientRect();var J=this._getComputedDashOffset(),K=this._progressToOffset(n),it=this;this._tweenable=new Tr,this._tweenable.tween({from:j.extend({offset:J},O.from),to:j.extend({offset:K},O.to),duration:a.duration,delay:a.delay,easing:S,step:function(Z){it.path.style.strokeDashoffset=Z.offset;var ht=a.shape||it;a.step(Z,ht,a.attachment)}}).then(function(Z){j.isFunction(s)&&s()})};x.prototype._getComputedDashOffset=function(){var n=window.getComputedStyle(this.path,null);return parseFloat(n.getPropertyValue("stroke-dashoffset"),10)};x.prototype._progressToOffset=function(n){var a=this.path.getTotalLength();return a-n*a};x.prototype._resolveFromAndTo=function(n,a,s){return s.from&&s.to?{from:s.from,to:s.to}:{from:this._calculateFrom(a),to:this._calculateTo(n,a)}};x.prototype._calculateFrom=function(n){return bt.interpolate(this._opts.from,this._opts.to,this.value(),n)};x.prototype._calculateTo=function(n,a){return bt.interpolate(this._opts.from,this._opts.to,n,a)};x.prototype._stopTween=function(){this._tweenable!==null&&(this._tweenable.stop(),this._tweenable=null)};x.prototype._easing=function(n){return Nt.hasOwnProperty(n)?Nt[n]:n};var Xt=x,xr=Xt,P=U,z="Object is destroyed",w=function u(n,a){if(!(this instanceof u))throw new Error("Constructor was called without new keyword");if(arguments.length!==0){this._opts=P.extend({color:"#555",strokeWidth:1,trailColor:null,trailWidth:null,fill:null,text:{style:{color:null,position:"absolute",left:"50%",top:"50%",padding:0,margin:0,transform:{prefix:!0,value:"translate(-50%, -50%)"}},autoStyleContainer:!0,alignToBottom:!0,value:null,className:"progressbar-text"},svgStyle:{display:"block",width:"100%"},warnings:!1},a,!0),P.isObject(a)&&a.svgStyle!==void 0&&(this._opts.svgStyle=a.svgStyle),P.isObject(a)&&P.isObject(a.text)&&a.text.style!==void 0&&(this._opts.text.style=a.text.style);var s=this._createSvgView(this._opts),c;if(P.isString(n)?c=document.querySelector(n):c=n,!c)throw new Error("Container does not exist: "+n);this._container=c,this._container.appendChild(s.svg),this._opts.warnings&&this._warnContainerAspectRatio(this._container),this._opts.svgStyle&&P.setStyles(s.svg,this._opts.svgStyle),this.svg=s.svg,this.path=s.path,this.trail=s.trail,this.text=null;var p=P.extend({attachment:void 0,shape:this},this._opts);this._progressPath=new xr(s.path,p),P.isObject(this._opts.text)&&this._opts.text.value!==null&&this.setText(this._opts.text.value)}};w.prototype.animate=function(n,a,s){if(this._progressPath===null)throw new Error(z);this._progressPath.animate(n,a,s)};w.prototype.stop=function(){if(this._progressPath===null)throw new Error(z);this._progressPath!==void 0&&this._progressPath.stop()};w.prototype.pause=function(){if(this._progressPath===null)throw new Error(z);this._progressPath!==void 0&&this._progressPath._tweenable&&this._progressPath._tweenable.pause()};w.prototype.resume=function(){if(this._progressPath===null)throw new Error(z);this._progressPath!==void 0&&this._progressPath._tweenable&&this._progressPath._tweenable.resume()};w.prototype.destroy=function(){if(this._progressPath===null)throw new Error(z);this.stop(),this.svg.parentNode.removeChild(this.svg),this.svg=null,this.path=null,this.trail=null,this._progressPath=null,this.text!==null&&(this.text.parentNode.removeChild(this.text),this.text=null)};w.prototype.set=function(n){if(this._progressPath===null)throw new Error(z);this._progressPath.set(n)};w.prototype.value=function(){if(this._progressPath===null)throw new Error(z);return this._progressPath===void 0?0:this._progressPath.value()};w.prototype.setText=function(n){if(this._progressPath===null)throw new Error(z);this.text===null&&(this.text=this._createTextContainer(this._opts,this._container),this._container.appendChild(this.text)),P.isObject(n)?(P.removeChildren(this.text),this.text.appendChild(n)):this.text.innerHTML=n};w.prototype._createSvgView=function(n){var a=document.createElementNS("http://www.w3.org/2000/svg","svg");this._initializeSvg(a,n);var s=null;(n.trailColor||n.trailWidth)&&(s=this._createTrail(n),a.appendChild(s));var c=this._createPath(n);return a.appendChild(c),{svg:a,path:c,trail:s}};w.prototype._initializeSvg=function(n,a){n.setAttribute("viewBox","0 0 100 100")};w.prototype._createPath=function(n){var a=this._pathString(n);return this._createPathElement(a,n)};w.prototype._createTrail=function(n){var a=this._trailString(n),s=P.extend({},n);return s.trailColor||(s.trailColor="#eee"),s.trailWidth||(s.trailWidth=s.strokeWidth),s.color=s.trailColor,s.strokeWidth=s.trailWidth,s.fill=null,this._createPathElement(a,s)};w.prototype._createPathElement=function(n,a){var s=document.createElementNS("http://www.w3.org/2000/svg","path");return s.setAttribute("d",n),s.setAttribute("stroke",a.color),s.setAttribute("stroke-width",a.strokeWidth),a.fill?s.setAttribute("fill",a.fill):s.setAttribute("fill-opacity","0"),s};w.prototype._createTextContainer=function(n,a){var s=document.createElement("div");s.className=n.text.className;var c=n.text.style;return c&&(n.text.autoStyleContainer&&(a.style.position="relative"),P.setStyles(s,c),c.color||(s.style.color=n.color)),this._initializeTextContainer(n,a,s),s};w.prototype._initializeTextContainer=function(u,n,a){};w.prototype._pathString=function(n){throw new Error("Override this function for each progress bar")};w.prototype._trailString=function(n){throw new Error("Override this function for each progress bar")};w.prototype._warnContainerAspectRatio=function(n){if(this.containerAspectRatio){var a=window.getComputedStyle(n,null),s=parseFloat(a.getPropertyValue("width"),10),c=parseFloat(a.getPropertyValue("height"),10);P.floatEquals(this.containerAspectRatio,s/c)||(console.warn("Incorrect aspect ratio of container","#"+n.id,"detected:",a.getPropertyValue("width")+"(width)","/",a.getPropertyValue("height")+"(height)","=",s/c),console.warn("Aspect ratio of should be",this.containerAspectRatio))}};var rt=w,Yt=rt,Ar=U,Q=function(n,a){this._pathTemplate="M 0,{center} L 100,{center}",Yt.apply(this,arguments)};Q.prototype=new Yt;Q.prototype.constructor=Q;Q.prototype._initializeSvg=function(n,a){n.setAttribute("viewBox","0 0 100 "+a.strokeWidth),n.setAttribute("preserveAspectRatio","none")};Q.prototype._pathString=function(n){return Ar.render(this._pathTemplate,{center:n.strokeWidth/2})};Q.prototype._trailString=function(n){return this._pathString(n)};var Cr=Q,Jt=rt,Er=U,X=function(n,a){this._pathTemplate="M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}",this.containerAspectRatio=1,Jt.apply(this,arguments)};X.prototype=new Jt;X.prototype.constructor=X;X.prototype._pathString=function(n){var a=n.strokeWidth;n.trailWidth&&n.trailWidth>n.strokeWidth&&(a=n.trailWidth);var s=50-a/2;return Er.render(this._pathTemplate,{radius:s,"2radius":s*2})};X.prototype._trailString=function(n){return this._pathString(n)};var Kt=X,Zt=rt,te=Kt,Qt=U,R=function(n,a){this._pathTemplate="M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0",this.containerAspectRatio=2,Zt.apply(this,arguments)};R.prototype=new Zt;R.prototype.constructor=R;R.prototype._initializeSvg=function(n,a){n.setAttribute("viewBox","0 0 100 50")};R.prototype._initializeTextContainer=function(n,a,s){n.text.style&&(s.style.top="auto",s.style.bottom="0",n.text.alignToBottom?Qt.setStyle(s,"transform","translate(-50%, 0)"):Qt.setStyle(s,"transform","translate(-50%, 50%)"))};R.prototype._pathString=te.prototype._pathString;R.prototype._trailString=te.prototype._trailString;var Fr=R,ee=rt,re=U,Y=function(n,a){this._pathTemplate="M 0,{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{strokeWidth}",this._trailTemplate="M {startMargin},{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{halfOfStrokeWidth}",ee.apply(this,arguments)};Y.prototype=new ee;Y.prototype.constructor=Y;Y.prototype._pathString=function(n){var a=100-n.strokeWidth/2;return re.render(this._pathTemplate,{width:a,strokeWidth:n.strokeWidth,halfOfStrokeWidth:n.strokeWidth/2})};Y.prototype._trailString=function(n){var a=100-n.strokeWidth/2;return re.render(this._trailTemplate,{width:a,strokeWidth:n.strokeWidth,halfOfStrokeWidth:n.strokeWidth/2,startMargin:n.strokeWidth/2-n.trailWidth/2})};var jr=Y,nt={Line:Cr,Circle:Kt,SemiCircle:Fr,Square:jr,Path:Xt,Shape:rt,utils:U},Mr=new nt.Line(progress1,{strokeWidth:.7,easing:"easeInOut",duration:5500,color:"#51BEE9",trailColor:"#AFAFAF",trailWidth:.6});Mr.animate(.65);var Wr=new nt.Line(progress2,{strokeWidth:.7,easing:"easeInOut",duration:5500,color:"#51E9A9",trailColor:"#AFAFAF",trailWidth:.6});Wr.animate(.97);var Ir=new nt.Line(progress3,{strokeWidth:.7,easing:"easeInOut",duration:5500,color:"#8458DD",trailColor:"#AFAFAF",trailWidth:.6});Ir.animate(.825);var Dr=new nt.Line(progress4,{strokeWidth:.7,easing:"easeInOut",duration:5500,color:"#DD58D3",trailColor:"#AFAFAF",trailWidth:.6});Dr.animate(.681);var Lr=new nt.Line(progress5,{strokeWidth:.7,easing:"easeInOut",duration:5500,color:"#E75D24",trailColor:"#AFAFAF",trailWidth:.6});Lr.animate(.91);new vr({el:document.querySelector("[data-scroll-container]"),smooth:!0});new dr("#element",{strings:["This is a page containing information about myself."],typeSpeed:150,backSpeed:100,showCursor:!1});var Rr=document.getElementById("visualization"),zr=new vis.DataSet([{id:1,content:"Videos",start:"2020-04",end:"2020-6",title:"Editing with Imovie"},{id:2,content:"Exploring Open Source",start:"2020-06",end:"2023-5",title:"Exploring the intricacies of FOSS"},{id:3,content:"Exploring animation",start:"2020-08",end:"2021-3"},{id:4,content:"Python Code",start:"2021-01",end:"2021-7",title:"Time period when I was exclusively making python projects. This was how I got into programming in the first place"},{id:5,content:"Web Dev",start:"2021-06",end:"2022-2",title:"Time period when I was working on web development and web applications mainly"},{id:6,content:"Devops, sysadmin",start:"2021-08",end:"2022-8",title:"Time period when I was working on mainly self-hosting, devops, and infrastructure management."},{id:7,content:"Organizational programming",start:"2022-09",end:"2023-5",title:"Focusing on improving programming knowledge/taking courses to learn new skills, participating in organizational programming."}]),qr={};new vis.Timeline(Rr,zr,qr);