function c(){return c=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},c.apply(this,arguments)}var d={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(e){},onComplete:function(e){},preStringTyped:function(e,i){},onStringTyped:function(e,i){},onLastStringBackspaced:function(e){},onTypingPaused:function(e,i){},onTypingResumed:function(e,i){},onReset:function(e){},onStop:function(e,i){},onStart:function(e,i){},onDestroy:function(e){}},g=new(function(){function e(){}var i=e.prototype;return i.load=function(t,s,n){if(t.el=typeof n=="string"?document.querySelector(n):n,t.options=c({},d,s),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(p){return p.trim()}),t.stringsElement=typeof t.options.stringsElement=="string"?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var r=Array.prototype.slice.apply(t.stringsElement.children),o=r.length;if(o)for(var a=0;a<o;a+=1)t.strings.push(r[a].innerHTML.trim())}for(var u in t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.strings)t.sequence[u]=u;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)},i.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:t.contentType==="html"?t.el.innerHTML:t.el.textContent},i.appendAnimationCss=function(t){var s="data-typed-js-css";if(t.autoInsertCss&&(t.showCursor||t.fadeOut)&&!document.querySelector("["+s+"]")){var n=document.createElement("style");n.type="text/css",n.setAttribute(s,!0);var r="";t.showCursor&&(r+=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `),t.fadeOut&&(r+=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `),n.length!==0&&(n.innerHTML=r,document.body.appendChild(n))}},e}()),l=new(function(){function e(){}var i=e.prototype;return i.typeHtmlChars=function(t,s,n){if(n.contentType!=="html")return s;var r=t.substr(s).charAt(0);if(r==="<"||r==="&"){var o;for(o=r==="<"?">":";";t.substr(s+1).charAt(0)!==o&&!(1+ ++s>t.length););s++}return s},i.backSpaceHtmlChars=function(t,s,n){if(n.contentType!=="html")return s;var r=t.substr(s).charAt(0);if(r===">"||r===";"){var o;for(o=r===">"?"<":"&";t.substr(s-1).charAt(0)!==o&&!(--s<0););s--}return s},e}()),m=function(){function e(t,s){g.load(this,s,t),this.begin()}var i=e.prototype;return i.toggle=function(){this.pause.status?this.start():this.stop()},i.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},i.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},i.destroy=function(){this.reset(!1),this.options.onDestroy(this)},i.reset=function(t){t===void 0&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},i.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.currentElContent&&t.currentElContent.length!==0?t.backspace(t.currentElContent,t.currentElContent.length):t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},i.typewrite=function(t,s){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var r=this.humanizer(this.typeSpeed),o=1;this.pause.status!==!0?this.timeout=setTimeout(function(){s=l.typeHtmlChars(t,s,n);var a=0,u=t.substr(s);if(u.charAt(0)==="^"&&/^\^\d+/.test(u)){var p=1;p+=(u=/\d+/.exec(u)[0]).length,a=parseInt(u),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),t=t.substring(0,s)+t.substring(s+p),n.toggleBlinking(!0)}if(u.charAt(0)==="`"){for(;t.substr(s+o).charAt(0)!=="`"&&(o++,!(s+o>t.length)););var h=t.substring(0,s),y=t.substring(h.length+1,s+o),f=t.substring(s+o+1);t=h+y+f,o--}n.timeout=setTimeout(function(){n.toggleBlinking(!1),s>=t.length?n.doneTyping(t,s):n.keepTyping(t,s,o),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))},a)},r):this.setPauseStatus(t,s,!0)},i.keepTyping=function(t,s,n){s===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var r=t.substr(0,s+=n);this.replaceText(r),this.typewrite(t,s)},i.doneTyping=function(t,s){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){n.backspace(t,s)},this.backDelay))},i.backspace=function(t,s){var n=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var r=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){s=l.backSpaceHtmlChars(t,s,n);var o=t.substr(0,s);if(n.replaceText(o),n.smartBackspace){var a=n.strings[n.arrayPos+1];n.stopNum=a&&o===a.substr(0,s)?s:0}s>n.stopNum?(s--,n.backspace(t,s)):s<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],s))},r)}else this.setPauseStatus(t,s,!1)},i.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},i.setPauseStatus=function(t,s,n){this.pause.typewrite=n,this.pause.curString=t,this.pause.curStrPos=s},i.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},i.humanizer=function(t){return Math.round(Math.random()*t/2)+t},i.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},i.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},i.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:this.contentType==="html"?this.el.innerHTML=t:this.el.textContent=t},i.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(s){t.stop()}),this.el.addEventListener("blur",function(s){t.el.value&&t.el.value.length!==0||t.start()}))},i.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},e}();export{m as i};
