import{d as Dt,b as ft,o as Ht,R as ot,c as Lt,Z as Wt,_ as jt,u as Gt,Y as zt,e as _,F as $e,f as qt,g as Re,O as $t,m as Vt,$ as Ut,a0 as Zt,a1 as ht,i as Kt,j as Qt,B as Jt,n as en}from"./index-DYGX83NG.js";/**!
 * Sortable 1.15.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function pt(o,e){var t=Object.keys(o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(o);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(o,i).enumerable})),t.push.apply(t,n)}return t}function q(o){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?pt(Object(t),!0).forEach(function(n){tn(o,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):pt(Object(t)).forEach(function(n){Object.defineProperty(o,n,Object.getOwnPropertyDescriptor(t,n))})}return o}function Be(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Be=function(e){return typeof e}:Be=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Be(o)}function tn(o,e,t){return e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}function $(){return $=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n])}return o},$.apply(this,arguments)}function nn(o,e){if(o==null)return{};var t={},n=Object.keys(o),i,r;for(r=0;r<n.length;r++)i=n[r],!(e.indexOf(i)>=0)&&(t[i]=o[i]);return t}function on(o,e){if(o==null)return{};var t=nn(o,e),n,i;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);for(i=0;i<r.length;i++)n=r[i],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(o,n)&&(t[n]=o[n])}return t}var rn="1.15.2";function Z(o){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(o)}var K=Z(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Ie=Z(/Edge/i),gt=Z(/firefox/i),De=Z(/safari/i)&&!Z(/chrome/i)&&!Z(/android/i),_t=Z(/iP(ad|od|hone)/i),Tt=Z(/chrome/i)&&Z(/android/i),Ct={capture:!1,passive:!1};function w(o,e,t){o.addEventListener(e,t,!K&&Ct)}function b(o,e,t){o.removeEventListener(e,t,!K&&Ct)}function Le(o,e){if(e){if(e[0]===">"&&(e=e.substring(1)),o)try{if(o.matches)return o.matches(e);if(o.msMatchesSelector)return o.msMatchesSelector(e);if(o.webkitMatchesSelector)return o.webkitMatchesSelector(e)}catch{return!1}return!1}}function an(o){return o.host&&o!==document&&o.host.nodeType?o.host:o.parentNode}function j(o,e,t,n){if(o){t=t||document;do{if(e!=null&&(e[0]===">"?o.parentNode===t&&Le(o,e):Le(o,e))||n&&o===t)return o;if(o===t)break}while(o=an(o))}return null}var mt=/\s+/g;function A(o,e,t){if(o&&e)if(o.classList)o.classList[t?"add":"remove"](e);else{var n=(" "+o.className+" ").replace(mt," ").replace(" "+e+" "," ");o.className=(n+(t?" "+e:"")).replace(mt," ")}}function p(o,e,t){var n=o&&o.style;if(n){if(t===void 0)return document.defaultView&&document.defaultView.getComputedStyle?t=document.defaultView.getComputedStyle(o,""):o.currentStyle&&(t=o.currentStyle),e===void 0?t:t[e];!(e in n)&&e.indexOf("webkit")===-1&&(e="-webkit-"+e),n[e]=t+(typeof t=="string"?"":"px")}}function he(o,e){var t="";if(typeof o=="string")t=o;else do{var n=p(o,"transform");n&&n!=="none"&&(t=n+" "+t)}while(!e&&(o=o.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(t)}function Ot(o,e,t){if(o){var n=o.getElementsByTagName(e),i=0,r=n.length;if(t)for(;i<r;i++)t(n[i],i);return n}return[]}function z(){var o=document.scrollingElement;return o||document.documentElement}function O(o,e,t,n,i){if(!(!o.getBoundingClientRect&&o!==window)){var r,a,l,s,u,f,c;if(o!==window&&o.parentNode&&o!==z()?(r=o.getBoundingClientRect(),a=r.top,l=r.left,s=r.bottom,u=r.right,f=r.height,c=r.width):(a=0,l=0,s=window.innerHeight,u=window.innerWidth,f=window.innerHeight,c=window.innerWidth),(e||t)&&o!==window&&(i=i||o.parentNode,!K))do if(i&&i.getBoundingClientRect&&(p(i,"transform")!=="none"||t&&p(i,"position")!=="static")){var m=i.getBoundingClientRect();a-=m.top+parseInt(p(i,"border-top-width")),l-=m.left+parseInt(p(i,"border-left-width")),s=a+r.height,u=l+r.width;break}while(i=i.parentNode);if(n&&o!==window){var E=he(i||o),v=E&&E.a,y=E&&E.d;E&&(a/=y,l/=v,c/=v,f/=y,s=a+f,u=l+c)}return{top:a,left:l,bottom:s,right:u,width:c,height:f}}}function vt(o,e,t){for(var n=ne(o,!0),i=O(o)[e];n;){var r=O(n)[t],a=void 0;if(a=i>=r,!a)return n;if(n===z())break;n=ne(n,!1)}return!1}function pe(o,e,t,n){for(var i=0,r=0,a=o.children;r<a.length;){if(a[r].style.display!=="none"&&a[r]!==h.ghost&&(n||a[r]!==h.dragged)&&j(a[r],t.draggable,o,!1)){if(i===e)return a[r];i++}r++}return null}function st(o,e){for(var t=o.lastElementChild;t&&(t===h.ghost||p(t,"display")==="none"||e&&!Le(t,e));)t=t.previousElementSibling;return t||null}function F(o,e){var t=0;if(!o||!o.parentNode)return-1;for(;o=o.previousElementSibling;)o.nodeName.toUpperCase()!=="TEMPLATE"&&o!==h.clone&&(!e||Le(o,e))&&t++;return t}function bt(o){var e=0,t=0,n=z();if(o)do{var i=he(o),r=i.a,a=i.d;e+=o.scrollLeft*r,t+=o.scrollTop*a}while(o!==n&&(o=o.parentNode));return[e,t]}function ln(o,e){for(var t in o)if(o.hasOwnProperty(t)){for(var n in e)if(e.hasOwnProperty(n)&&e[n]===o[t][n])return Number(t)}return-1}function ne(o,e){if(!o||!o.getBoundingClientRect)return z();var t=o,n=!1;do if(t.clientWidth<t.scrollWidth||t.clientHeight<t.scrollHeight){var i=p(t);if(t.clientWidth<t.scrollWidth&&(i.overflowX=="auto"||i.overflowX=="scroll")||t.clientHeight<t.scrollHeight&&(i.overflowY=="auto"||i.overflowY=="scroll")){if(!t.getBoundingClientRect||t===document.body)return z();if(n||e)return t;n=!0}}while(t=t.parentNode);return z()}function sn(o,e){if(o&&e)for(var t in e)e.hasOwnProperty(t)&&(o[t]=e[t]);return o}function Ve(o,e){return Math.round(o.top)===Math.round(e.top)&&Math.round(o.left)===Math.round(e.left)&&Math.round(o.height)===Math.round(e.height)&&Math.round(o.width)===Math.round(e.width)}var _e;function It(o,e){return function(){if(!_e){var t=arguments,n=this;t.length===1?o.call(n,t[0]):o.apply(n,t),_e=setTimeout(function(){_e=void 0},e)}}}function un(){clearTimeout(_e),_e=void 0}function xt(o,e,t){o.scrollLeft+=e,o.scrollTop+=t}function At(o){var e=window.Polymer,t=window.jQuery||window.Zepto;return e&&e.dom?e.dom(o).cloneNode(!0):t?t(o).clone(!0)[0]:o.cloneNode(!0)}function Nt(o,e,t){var n={};return Array.from(o.children).forEach(function(i){var r,a,l,s;if(!(!j(i,e.draggable,o,!1)||i.animated||i===t)){var u=O(i);n.left=Math.min((r=n.left)!==null&&r!==void 0?r:1/0,u.left),n.top=Math.min((a=n.top)!==null&&a!==void 0?a:1/0,u.top),n.right=Math.max((l=n.right)!==null&&l!==void 0?l:-1/0,u.right),n.bottom=Math.max((s=n.bottom)!==null&&s!==void 0?s:-1/0,u.bottom)}}),n.width=n.right-n.left,n.height=n.bottom-n.top,n.x=n.left,n.y=n.top,n}var Y="Sortable"+new Date().getTime();function dn(){var o=[],e;return{captureAnimationState:function(){if(o=[],!!this.options.animation){var n=[].slice.call(this.el.children);n.forEach(function(i){if(!(p(i,"display")==="none"||i===h.ghost)){o.push({target:i,rect:O(i)});var r=q({},o[o.length-1].rect);if(i.thisAnimationDuration){var a=he(i,!0);a&&(r.top-=a.f,r.left-=a.e)}i.fromRect=r}})}},addAnimationState:function(n){o.push(n)},removeAnimationState:function(n){o.splice(ln(o,{target:n}),1)},animateAll:function(n){var i=this;if(!this.options.animation){clearTimeout(e),typeof n=="function"&&n();return}var r=!1,a=0;o.forEach(function(l){var s=0,u=l.target,f=u.fromRect,c=O(u),m=u.prevFromRect,E=u.prevToRect,v=l.rect,y=he(u,!0);y&&(c.top-=y.f,c.left-=y.e),u.toRect=c,u.thisAnimationDuration&&Ve(m,c)&&!Ve(f,c)&&(v.top-c.top)/(v.left-c.left)===(f.top-c.top)/(f.left-c.left)&&(s=fn(v,m,E,i.options)),Ve(c,f)||(u.prevFromRect=f,u.prevToRect=c,s||(s=i.options.animation),i.animate(u,v,c,s)),s&&(r=!0,a=Math.max(a,s),clearTimeout(u.animationResetTimer),u.animationResetTimer=setTimeout(function(){u.animationTime=0,u.prevFromRect=null,u.fromRect=null,u.prevToRect=null,u.thisAnimationDuration=null},s),u.thisAnimationDuration=s)}),clearTimeout(e),r?e=setTimeout(function(){typeof n=="function"&&n()},a):typeof n=="function"&&n(),o=[]},animate:function(n,i,r,a){if(a){p(n,"transition",""),p(n,"transform","");var l=he(this.el),s=l&&l.a,u=l&&l.d,f=(i.left-r.left)/(s||1),c=(i.top-r.top)/(u||1);n.animatingX=!!f,n.animatingY=!!c,p(n,"transform","translate3d("+f+"px,"+c+"px,0)"),this.forRepaintDummy=cn(n),p(n,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),p(n,"transform","translate3d(0,0,0)"),typeof n.animated=="number"&&clearTimeout(n.animated),n.animated=setTimeout(function(){p(n,"transition",""),p(n,"transform",""),n.animated=!1,n.animatingX=!1,n.animatingY=!1},a)}}}}function cn(o){return o.offsetWidth}function fn(o,e,t,n){return Math.sqrt(Math.pow(e.top-o.top,2)+Math.pow(e.left-o.left,2))/Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))*n.animation}var ue=[],Ue={initializeByDefault:!0},xe={mount:function(e){for(var t in Ue)Ue.hasOwnProperty(t)&&!(t in e)&&(e[t]=Ue[t]);ue.forEach(function(n){if(n.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),ue.push(e)},pluginEvent:function(e,t,n){var i=this;this.eventCanceled=!1,n.cancel=function(){i.eventCanceled=!0};var r=e+"Global";ue.forEach(function(a){t[a.pluginName]&&(t[a.pluginName][r]&&t[a.pluginName][r](q({sortable:t},n)),t.options[a.pluginName]&&t[a.pluginName][e]&&t[a.pluginName][e](q({sortable:t},n)))})},initializePlugins:function(e,t,n,i){ue.forEach(function(l){var s=l.pluginName;if(!(!e.options[s]&&!l.initializeByDefault)){var u=new l(e,t,e.options);u.sortable=e,u.options=e.options,e[s]=u,$(n,u.defaults)}});for(var r in e.options)if(e.options.hasOwnProperty(r)){var a=this.modifyOption(e,r,e.options[r]);typeof a<"u"&&(e.options[r]=a)}},getEventProperties:function(e,t){var n={};return ue.forEach(function(i){typeof i.eventProperties=="function"&&$(n,i.eventProperties.call(t[i.pluginName],e))}),n},modifyOption:function(e,t,n){var i;return ue.forEach(function(r){e[r.pluginName]&&r.optionListeners&&typeof r.optionListeners[t]=="function"&&(i=r.optionListeners[t].call(e[r.pluginName],n))}),i}};function hn(o){var e=o.sortable,t=o.rootEl,n=o.name,i=o.targetEl,r=o.cloneEl,a=o.toEl,l=o.fromEl,s=o.oldIndex,u=o.newIndex,f=o.oldDraggableIndex,c=o.newDraggableIndex,m=o.originalEvent,E=o.putSortable,v=o.extraEventProperties;if(e=e||t&&t[Y],!!e){var y,H=e.options,V="on"+n.charAt(0).toUpperCase()+n.substr(1);window.CustomEvent&&!K&&!Ie?y=new CustomEvent(n,{bubbles:!0,cancelable:!0}):(y=document.createEvent("Event"),y.initEvent(n,!0,!0)),y.to=a||t,y.from=l||t,y.item=i||t,y.clone=r,y.oldIndex=s,y.newIndex=u,y.oldDraggableIndex=f,y.newDraggableIndex=c,y.originalEvent=m,y.pullMode=E?E.lastPutMode:void 0;var N=q(q({},v),xe.getEventProperties(n,e));for(var L in N)y[L]=N[L];t&&t.dispatchEvent(y),H[V]&&H[V].call(e,y)}}var pn=["evt"],M=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.evt,r=on(n,pn);xe.pluginEvent.bind(h)(e,t,q({dragEl:d,parentEl:T,ghostEl:g,rootEl:S,nextEl:se,lastDownEl:ke,cloneEl:D,cloneHidden:te,dragStarted:ye,putSortable:I,activeSortable:h.active,originalEvent:i,oldIndex:fe,oldDraggableIndex:Te,newIndex:k,newDraggableIndex:ee,hideGhostForTarget:Rt,unhideGhostForTarget:Bt,cloneNowHidden:function(){te=!0},cloneNowShown:function(){te=!1},dispatchSortableEvent:function(l){P({sortable:t,name:l,originalEvent:i})}},r))};function P(o){hn(q({putSortable:I,cloneEl:D,targetEl:d,rootEl:S,oldIndex:fe,oldDraggableIndex:Te,newIndex:k,newDraggableIndex:ee},o))}var d,T,g,S,se,ke,D,te,fe,k,Te,ee,Ne,I,ce=!1,We=!1,je=[],ae,W,Ze,Ke,wt,yt,ye,de,Ce,Oe=!1,Pe=!1,Ye,x,Qe=[],it=!1,Ge=[],qe=typeof document<"u",Me=_t,Et=Ie||K?"cssFloat":"float",gn=qe&&!Tt&&!_t&&"draggable"in document.createElement("div"),Pt=function(){if(qe){if(K)return!1;var o=document.createElement("x");return o.style.cssText="pointer-events:auto",o.style.pointerEvents==="auto"}}(),Mt=function(e,t){var n=p(e),i=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),r=pe(e,0,t),a=pe(e,1,t),l=r&&p(r),s=a&&p(a),u=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+O(r).width,f=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+O(a).width;if(n.display==="flex")return n.flexDirection==="column"||n.flexDirection==="column-reverse"?"vertical":"horizontal";if(n.display==="grid")return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(r&&l.float&&l.float!=="none"){var c=l.float==="left"?"left":"right";return a&&(s.clear==="both"||s.clear===c)?"vertical":"horizontal"}return r&&(l.display==="block"||l.display==="flex"||l.display==="table"||l.display==="grid"||u>=i&&n[Et]==="none"||a&&n[Et]==="none"&&u+f>i)?"vertical":"horizontal"},mn=function(e,t,n){var i=n?e.left:e.top,r=n?e.right:e.bottom,a=n?e.width:e.height,l=n?t.left:t.top,s=n?t.right:t.bottom,u=n?t.width:t.height;return i===l||r===s||i+a/2===l+u/2},vn=function(e,t){var n;return je.some(function(i){var r=i[Y].options.emptyInsertThreshold;if(!(!r||st(i))){var a=O(i),l=e>=a.left-r&&e<=a.right+r,s=t>=a.top-r&&t<=a.bottom+r;if(l&&s)return n=i}}),n},Ft=function(e){function t(r,a){return function(l,s,u,f){var c=l.options.group.name&&s.options.group.name&&l.options.group.name===s.options.group.name;if(r==null&&(a||c))return!0;if(r==null||r===!1)return!1;if(a&&r==="clone")return r;if(typeof r=="function")return t(r(l,s,u,f),a)(l,s,u,f);var m=(a?l:s).options.group.name;return r===!0||typeof r=="string"&&r===m||r.join&&r.indexOf(m)>-1}}var n={},i=e.group;(!i||Be(i)!="object")&&(i={name:i}),n.name=i.name,n.checkPull=t(i.pull,!0),n.checkPut=t(i.put),n.revertClone=i.revertClone,e.group=n},Rt=function(){!Pt&&g&&p(g,"display","none")},Bt=function(){!Pt&&g&&p(g,"display","")};qe&&!Tt&&document.addEventListener("click",function(o){if(We)return o.preventDefault(),o.stopPropagation&&o.stopPropagation(),o.stopImmediatePropagation&&o.stopImmediatePropagation(),We=!1,!1},!0);var le=function(e){if(d){e=e.touches?e.touches[0]:e;var t=vn(e.clientX,e.clientY);if(t){var n={};for(var i in e)e.hasOwnProperty(i)&&(n[i]=e[i]);n.target=n.rootEl=t,n.preventDefault=void 0,n.stopPropagation=void 0,t[Y]._onDragOver(n)}}},bn=function(e){d&&d.parentNode[Y]._isOutsideThisEl(e.target)};function h(o,e){if(!(o&&o.nodeType&&o.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(o));this.el=o,this.options=e=$({},e),o[Y]=this;var t={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(o.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Mt(o,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,l){a.setData("Text",l.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:h.supportPointer!==!1&&"PointerEvent"in window&&!De,emptyInsertThreshold:5};xe.initializePlugins(this,o,t);for(var n in t)!(n in e)&&(e[n]=t[n]);Ft(e);for(var i in this)i.charAt(0)==="_"&&typeof this[i]=="function"&&(this[i]=this[i].bind(this));this.nativeDraggable=e.forceFallback?!1:gn,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?w(o,"pointerdown",this._onTapStart):(w(o,"mousedown",this._onTapStart),w(o,"touchstart",this._onTapStart)),this.nativeDraggable&&(w(o,"dragover",this),w(o,"dragenter",this)),je.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),$(this,dn())}h.prototype={constructor:h,_isOutsideThisEl:function(e){!this.el.contains(e)&&e!==this.el&&(de=null)},_getDirection:function(e,t){return typeof this.options.direction=="function"?this.options.direction.call(this,e,t,d):this.options.direction},_onTapStart:function(e){if(e.cancelable){var t=this,n=this.el,i=this.options,r=i.preventOnFilter,a=e.type,l=e.touches&&e.touches[0]||e.pointerType&&e.pointerType==="touch"&&e,s=(l||e).target,u=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||s,f=i.filter;if(Cn(n),!d&&!(/mousedown|pointerdown/.test(a)&&e.button!==0||i.disabled)&&!u.isContentEditable&&!(!this.nativeDraggable&&De&&s&&s.tagName.toUpperCase()==="SELECT")&&(s=j(s,i.draggable,n,!1),!(s&&s.animated)&&ke!==s)){if(fe=F(s),Te=F(s,i.draggable),typeof f=="function"){if(f.call(this,e,s,this)){P({sortable:t,rootEl:u,name:"filter",targetEl:s,toEl:n,fromEl:n}),M("filter",t,{evt:e}),r&&e.cancelable&&e.preventDefault();return}}else if(f&&(f=f.split(",").some(function(c){if(c=j(u,c.trim(),n,!1),c)return P({sortable:t,rootEl:c,name:"filter",targetEl:s,fromEl:n,toEl:n}),M("filter",t,{evt:e}),!0}),f)){r&&e.cancelable&&e.preventDefault();return}i.handle&&!j(u,i.handle,n,!1)||this._prepareDragStart(e,l,s)}}},_prepareDragStart:function(e,t,n){var i=this,r=i.el,a=i.options,l=r.ownerDocument,s;if(n&&!d&&n.parentNode===r){var u=O(n);if(S=r,d=n,T=d.parentNode,se=d.nextSibling,ke=n,Ne=a.group,h.dragged=d,ae={target:d,clientX:(t||e).clientX,clientY:(t||e).clientY},wt=ae.clientX-u.left,yt=ae.clientY-u.top,this._lastX=(t||e).clientX,this._lastY=(t||e).clientY,d.style["will-change"]="all",s=function(){if(M("delayEnded",i,{evt:e}),h.eventCanceled){i._onDrop();return}i._disableDelayedDragEvents(),!gt&&i.nativeDraggable&&(d.draggable=!0),i._triggerDragStart(e,t),P({sortable:i,name:"choose",originalEvent:e}),A(d,a.chosenClass,!0)},a.ignore.split(",").forEach(function(f){Ot(d,f.trim(),Je)}),w(l,"dragover",le),w(l,"mousemove",le),w(l,"touchmove",le),w(l,"mouseup",i._onDrop),w(l,"touchend",i._onDrop),w(l,"touchcancel",i._onDrop),gt&&this.nativeDraggable&&(this.options.touchStartThreshold=4,d.draggable=!0),M("delayStart",this,{evt:e}),a.delay&&(!a.delayOnTouchOnly||t)&&(!this.nativeDraggable||!(Ie||K))){if(h.eventCanceled){this._onDrop();return}w(l,"mouseup",i._disableDelayedDrag),w(l,"touchend",i._disableDelayedDrag),w(l,"touchcancel",i._disableDelayedDrag),w(l,"mousemove",i._delayedDragTouchMoveHandler),w(l,"touchmove",i._delayedDragTouchMoveHandler),a.supportPointer&&w(l,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(s,a.delay)}else s()}},_delayedDragTouchMoveHandler:function(e){var t=e.touches?e.touches[0]:e;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){d&&Je(d),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;b(e,"mouseup",this._disableDelayedDrag),b(e,"touchend",this._disableDelayedDrag),b(e,"touchcancel",this._disableDelayedDrag),b(e,"mousemove",this._delayedDragTouchMoveHandler),b(e,"touchmove",this._delayedDragTouchMoveHandler),b(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,t){t=t||e.pointerType=="touch"&&e,!this.nativeDraggable||t?this.options.supportPointer?w(document,"pointermove",this._onTouchMove):t?w(document,"touchmove",this._onTouchMove):w(document,"mousemove",this._onTouchMove):(w(d,"dragend",this),w(S,"dragstart",this._onDragStart));try{document.selection?Xe(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(e,t){if(ce=!1,S&&d){M("dragStarted",this,{evt:t}),this.nativeDraggable&&w(document,"dragover",bn);var n=this.options;!e&&A(d,n.dragClass,!1),A(d,n.ghostClass,!0),h.active=this,e&&this._appendGhost(),P({sortable:this,name:"start",originalEvent:t})}else this._nulling()},_emulateDragOver:function(){if(W){this._lastX=W.clientX,this._lastY=W.clientY,Rt();for(var e=document.elementFromPoint(W.clientX,W.clientY),t=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(W.clientX,W.clientY),e!==t);)t=e;if(d.parentNode[Y]._isOutsideThisEl(e),t)do{if(t[Y]){var n=void 0;if(n=t[Y]._onDragOver({clientX:W.clientX,clientY:W.clientY,target:e,rootEl:t}),n&&!this.options.dragoverBubble)break}e=t}while(t=t.parentNode);Bt()}},_onTouchMove:function(e){if(ae){var t=this.options,n=t.fallbackTolerance,i=t.fallbackOffset,r=e.touches?e.touches[0]:e,a=g&&he(g,!0),l=g&&a&&a.a,s=g&&a&&a.d,u=Me&&x&&bt(x),f=(r.clientX-ae.clientX+i.x)/(l||1)+(u?u[0]-Qe[0]:0)/(l||1),c=(r.clientY-ae.clientY+i.y)/(s||1)+(u?u[1]-Qe[1]:0)/(s||1);if(!h.active&&!ce){if(n&&Math.max(Math.abs(r.clientX-this._lastX),Math.abs(r.clientY-this._lastY))<n)return;this._onDragStart(e,!0)}if(g){a?(a.e+=f-(Ze||0),a.f+=c-(Ke||0)):a={a:1,b:0,c:0,d:1,e:f,f:c};var m="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");p(g,"webkitTransform",m),p(g,"mozTransform",m),p(g,"msTransform",m),p(g,"transform",m),Ze=f,Ke=c,W=r}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!g){var e=this.options.fallbackOnBody?document.body:S,t=O(d,!0,Me,!0,e),n=this.options;if(Me){for(x=e;p(x,"position")==="static"&&p(x,"transform")==="none"&&x!==document;)x=x.parentNode;x!==document.body&&x!==document.documentElement?(x===document&&(x=z()),t.top+=x.scrollTop,t.left+=x.scrollLeft):x=z(),Qe=bt(x)}g=d.cloneNode(!0),A(g,n.ghostClass,!1),A(g,n.fallbackClass,!0),A(g,n.dragClass,!0),p(g,"transition",""),p(g,"transform",""),p(g,"box-sizing","border-box"),p(g,"margin",0),p(g,"top",t.top),p(g,"left",t.left),p(g,"width",t.width),p(g,"height",t.height),p(g,"opacity","0.8"),p(g,"position",Me?"absolute":"fixed"),p(g,"zIndex","100000"),p(g,"pointerEvents","none"),h.ghost=g,e.appendChild(g),p(g,"transform-origin",wt/parseInt(g.style.width)*100+"% "+yt/parseInt(g.style.height)*100+"%")}},_onDragStart:function(e,t){var n=this,i=e.dataTransfer,r=n.options;if(M("dragStart",this,{evt:e}),h.eventCanceled){this._onDrop();return}M("setupClone",this),h.eventCanceled||(D=At(d),D.removeAttribute("id"),D.draggable=!1,D.style["will-change"]="",this._hideClone(),A(D,this.options.chosenClass,!1),h.clone=D),n.cloneId=Xe(function(){M("clone",n),!h.eventCanceled&&(n.options.removeCloneOnHide||S.insertBefore(D,d),n._hideClone(),P({sortable:n,name:"clone"}))}),!t&&A(d,r.dragClass,!0),t?(We=!0,n._loopId=setInterval(n._emulateDragOver,50)):(b(document,"mouseup",n._onDrop),b(document,"touchend",n._onDrop),b(document,"touchcancel",n._onDrop),i&&(i.effectAllowed="move",r.setData&&r.setData.call(n,i,d)),w(document,"drop",n),p(d,"transform","translateZ(0)")),ce=!0,n._dragStartId=Xe(n._dragStarted.bind(n,t,e)),w(document,"selectstart",n),ye=!0,De&&p(document.body,"user-select","none")},_onDragOver:function(e){var t=this.el,n=e.target,i,r,a,l=this.options,s=l.group,u=h.active,f=Ne===s,c=l.sort,m=I||u,E,v=this,y=!1;if(it)return;function H(we,Yt){M(we,v,q({evt:e,isOwner:f,axis:E?"vertical":"horizontal",revert:a,dragRect:i,targetRect:r,canSort:c,fromSortable:m,target:n,completed:N,onMove:function(ct,Xt){return Fe(S,t,d,i,ct,O(ct),e,Xt)},changed:L},Yt))}function V(){H("dragOverAnimationCapture"),v.captureAnimationState(),v!==m&&m.captureAnimationState()}function N(we){return H("dragOverCompleted",{insertion:we}),we&&(f?u._hideClone():u._showClone(v),v!==m&&(A(d,I?I.options.ghostClass:u.options.ghostClass,!1),A(d,l.ghostClass,!0)),I!==v&&v!==h.active?I=v:v===h.active&&I&&(I=null),m===v&&(v._ignoreWhileAnimating=n),v.animateAll(function(){H("dragOverAnimationComplete"),v._ignoreWhileAnimating=null}),v!==m&&(m.animateAll(),m._ignoreWhileAnimating=null)),(n===d&&!d.animated||n===t&&!n.animated)&&(de=null),!l.dragoverBubble&&!e.rootEl&&n!==document&&(d.parentNode[Y]._isOutsideThisEl(e.target),!we&&le(e)),!l.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),y=!0}function L(){k=F(d),ee=F(d,l.draggable),P({sortable:v,name:"change",toEl:t,newIndex:k,newDraggableIndex:ee,originalEvent:e})}if(e.preventDefault!==void 0&&e.cancelable&&e.preventDefault(),n=j(n,l.draggable,t,!0),H("dragOver"),h.eventCanceled)return y;if(d.contains(e.target)||n.animated&&n.animatingX&&n.animatingY||v._ignoreWhileAnimating===n)return N(!1);if(We=!1,u&&!l.disabled&&(f?c||(a=T!==S):I===this||(this.lastPutMode=Ne.checkPull(this,u,d,e))&&s.checkPut(this,u,d,e))){if(E=this._getDirection(e,n)==="vertical",i=O(d),H("dragOverValid"),h.eventCanceled)return y;if(a)return T=S,V(),this._hideClone(),H("revert"),h.eventCanceled||(se?S.insertBefore(d,se):S.appendChild(d)),N(!0);var R=st(t,l.draggable);if(!R||Sn(e,E,this)&&!R.animated){if(R===d)return N(!1);if(R&&t===e.target&&(n=R),n&&(r=O(n)),Fe(S,t,d,i,n,r,e,!!n)!==!1)return V(),R&&R.nextSibling?t.insertBefore(d,R.nextSibling):t.appendChild(d),T=t,L(),N(!0)}else if(R&&En(e,E,this)){var oe=pe(t,0,l,!0);if(oe===d)return N(!1);if(n=oe,r=O(n),Fe(S,t,d,i,n,r,e,!1)!==!1)return V(),t.insertBefore(d,oe),T=t,L(),N(!0)}else if(n.parentNode===t){r=O(n);var G=0,ie,ge=d.parentNode!==t,B=!mn(d.animated&&d.toRect||i,n.animated&&n.toRect||r,E),me=E?"top":"left",Q=vt(n,"top","top")||vt(d,"top","top"),ve=Q?Q.scrollTop:void 0;de!==n&&(ie=r[me],Oe=!1,Pe=!B&&l.invertSwap||ge),G=Dn(e,n,r,E,B?1:l.swapThreshold,l.invertedSwapThreshold==null?l.swapThreshold:l.invertedSwapThreshold,Pe,de===n);var U;if(G!==0){var re=F(d);do re-=G,U=T.children[re];while(U&&(p(U,"display")==="none"||U===g))}if(G===0||U===n)return N(!1);de=n,Ce=G;var be=n.nextElementSibling,J=!1;J=G===1;var Ae=Fe(S,t,d,i,n,r,e,J);if(Ae!==!1)return(Ae===1||Ae===-1)&&(J=Ae===1),it=!0,setTimeout(yn,30),V(),J&&!be?t.appendChild(d):n.parentNode.insertBefore(d,J?be:n),Q&&xt(Q,0,ve-Q.scrollTop),T=d.parentNode,ie!==void 0&&!Pe&&(Ye=Math.abs(ie-O(n)[me])),L(),N(!0)}if(t.contains(d))return N(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){b(document,"mousemove",this._onTouchMove),b(document,"touchmove",this._onTouchMove),b(document,"pointermove",this._onTouchMove),b(document,"dragover",le),b(document,"mousemove",le),b(document,"touchmove",le)},_offUpEvents:function(){var e=this.el.ownerDocument;b(e,"mouseup",this._onDrop),b(e,"touchend",this._onDrop),b(e,"pointerup",this._onDrop),b(e,"touchcancel",this._onDrop),b(document,"selectstart",this)},_onDrop:function(e){var t=this.el,n=this.options;if(k=F(d),ee=F(d,n.draggable),M("drop",this,{evt:e}),T=d&&d.parentNode,k=F(d),ee=F(d,n.draggable),h.eventCanceled){this._nulling();return}ce=!1,Pe=!1,Oe=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),rt(this.cloneId),rt(this._dragStartId),this.nativeDraggable&&(b(document,"drop",this),b(t,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),De&&p(document.body,"user-select",""),p(d,"transform",""),e&&(ye&&(e.cancelable&&e.preventDefault(),!n.dropBubble&&e.stopPropagation()),g&&g.parentNode&&g.parentNode.removeChild(g),(S===T||I&&I.lastPutMode!=="clone")&&D&&D.parentNode&&D.parentNode.removeChild(D),d&&(this.nativeDraggable&&b(d,"dragend",this),Je(d),d.style["will-change"]="",ye&&!ce&&A(d,I?I.options.ghostClass:this.options.ghostClass,!1),A(d,this.options.chosenClass,!1),P({sortable:this,name:"unchoose",toEl:T,newIndex:null,newDraggableIndex:null,originalEvent:e}),S!==T?(k>=0&&(P({rootEl:T,name:"add",toEl:T,fromEl:S,originalEvent:e}),P({sortable:this,name:"remove",toEl:T,originalEvent:e}),P({rootEl:T,name:"sort",toEl:T,fromEl:S,originalEvent:e}),P({sortable:this,name:"sort",toEl:T,originalEvent:e})),I&&I.save()):k!==fe&&k>=0&&(P({sortable:this,name:"update",toEl:T,originalEvent:e}),P({sortable:this,name:"sort",toEl:T,originalEvent:e})),h.active&&((k==null||k===-1)&&(k=fe,ee=Te),P({sortable:this,name:"end",toEl:T,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){M("nulling",this),S=d=T=g=se=D=ke=te=ae=W=ye=k=ee=fe=Te=de=Ce=I=Ne=h.dragged=h.ghost=h.clone=h.active=null,Ge.forEach(function(e){e.checked=!0}),Ge.length=Ze=Ke=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":d&&(this._onDragOver(e),wn(e));break;case"selectstart":e.preventDefault();break}},toArray:function(){for(var e=[],t,n=this.el.children,i=0,r=n.length,a=this.options;i<r;i++)t=n[i],j(t,a.draggable,this.el,!1)&&e.push(t.getAttribute(a.dataIdAttr)||Tn(t));return e},sort:function(e,t){var n={},i=this.el;this.toArray().forEach(function(r,a){var l=i.children[a];j(l,this.options.draggable,i,!1)&&(n[r]=l)},this),t&&this.captureAnimationState(),e.forEach(function(r){n[r]&&(i.removeChild(n[r]),i.appendChild(n[r]))}),t&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,t){return j(e,t||this.options.draggable,this.el,!1)},option:function(e,t){var n=this.options;if(t===void 0)return n[e];var i=xe.modifyOption(this,e,t);typeof i<"u"?n[e]=i:n[e]=t,e==="group"&&Ft(n)},destroy:function(){M("destroy",this);var e=this.el;e[Y]=null,b(e,"mousedown",this._onTapStart),b(e,"touchstart",this._onTapStart),b(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(b(e,"dragover",this),b(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),je.splice(je.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!te){if(M("hideClone",this),h.eventCanceled)return;p(D,"display","none"),this.options.removeCloneOnHide&&D.parentNode&&D.parentNode.removeChild(D),te=!0}},_showClone:function(e){if(e.lastPutMode!=="clone"){this._hideClone();return}if(te){if(M("showClone",this),h.eventCanceled)return;d.parentNode==S&&!this.options.group.revertClone?S.insertBefore(D,d):se?S.insertBefore(D,se):S.appendChild(D),this.options.group.revertClone&&this.animate(d,D),p(D,"display",""),te=!1}}};function wn(o){o.dataTransfer&&(o.dataTransfer.dropEffect="move"),o.cancelable&&o.preventDefault()}function Fe(o,e,t,n,i,r,a,l){var s,u=o[Y],f=u.options.onMove,c;return window.CustomEvent&&!K&&!Ie?s=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(s=document.createEvent("Event"),s.initEvent("move",!0,!0)),s.to=e,s.from=o,s.dragged=t,s.draggedRect=n,s.related=i||e,s.relatedRect=r||O(e),s.willInsertAfter=l,s.originalEvent=a,o.dispatchEvent(s),f&&(c=f.call(u,s,a)),c}function Je(o){o.draggable=!1}function yn(){it=!1}function En(o,e,t){var n=O(pe(t.el,0,t.options,!0)),i=Nt(t.el,t.options,g),r=10;return e?o.clientX<i.left-r||o.clientY<n.top&&o.clientX<n.right:o.clientY<i.top-r||o.clientY<n.bottom&&o.clientX<n.left}function Sn(o,e,t){var n=O(st(t.el,t.options.draggable)),i=Nt(t.el,t.options,g),r=10;return e?o.clientX>i.right+r||o.clientY>n.bottom&&o.clientX>n.left:o.clientY>i.bottom+r||o.clientX>n.right&&o.clientY>n.top}function Dn(o,e,t,n,i,r,a,l){var s=n?o.clientY:o.clientX,u=n?t.height:t.width,f=n?t.top:t.left,c=n?t.bottom:t.right,m=!1;if(!a){if(l&&Ye<u*i){if(!Oe&&(Ce===1?s>f+u*r/2:s<c-u*r/2)&&(Oe=!0),Oe)m=!0;else if(Ce===1?s<f+Ye:s>c-Ye)return-Ce}else if(s>f+u*(1-i)/2&&s<c-u*(1-i)/2)return _n(e)}return m=m||a,m&&(s<f+u*r/2||s>c-u*r/2)?s>f+u/2?1:-1:0}function _n(o){return F(d)<F(o)?1:-1}function Tn(o){for(var e=o.tagName+o.className+o.src+o.href+o.textContent,t=e.length,n=0;t--;)n+=e.charCodeAt(t);return n.toString(36)}function Cn(o){Ge.length=0;for(var e=o.getElementsByTagName("input"),t=e.length;t--;){var n=e[t];n.checked&&Ge.push(n)}}function Xe(o){return setTimeout(o,0)}function rt(o){return clearTimeout(o)}qe&&w(document,"touchmove",function(o){(h.active||ce)&&o.cancelable&&o.preventDefault()});h.utils={on:w,off:b,css:p,find:Ot,is:function(e,t){return!!j(e,t,e,!1)},extend:sn,throttle:It,closest:j,toggleClass:A,clone:At,index:F,nextTick:Xe,cancelNextTick:rt,detectDirection:Mt,getChild:pe};h.get=function(o){return o[Y]};h.mount=function(){for(var o=arguments.length,e=new Array(o),t=0;t<o;t++)e[t]=arguments[t];e[0].constructor===Array&&(e=e[0]),e.forEach(function(n){if(!n.prototype||!n.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));n.utils&&(h.utils=q(q({},h.utils),n.utils)),xe.mount(n)})};h.create=function(o,e){return new h(o,e)};h.version=rn;var C=[],Ee,at,lt=!1,et,tt,ze,Se;function On(){function o(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var e in this)e.charAt(0)==="_"&&typeof this[e]=="function"&&(this[e]=this[e].bind(this))}return o.prototype={dragStarted:function(t){var n=t.originalEvent;this.sortable.nativeDraggable?w(document,"dragover",this._handleAutoScroll):this.options.supportPointer?w(document,"pointermove",this._handleFallbackAutoScroll):n.touches?w(document,"touchmove",this._handleFallbackAutoScroll):w(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var n=t.originalEvent;!this.options.dragOverBubble&&!n.rootEl&&this._handleAutoScroll(n)},drop:function(){this.sortable.nativeDraggable?b(document,"dragover",this._handleAutoScroll):(b(document,"pointermove",this._handleFallbackAutoScroll),b(document,"touchmove",this._handleFallbackAutoScroll),b(document,"mousemove",this._handleFallbackAutoScroll)),St(),He(),un()},nulling:function(){ze=at=Ee=lt=Se=et=tt=null,C.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,n){var i=this,r=(t.touches?t.touches[0]:t).clientX,a=(t.touches?t.touches[0]:t).clientY,l=document.elementFromPoint(r,a);if(ze=t,n||this.options.forceAutoScrollFallback||Ie||K||De){nt(t,this.options,l,n);var s=ne(l,!0);lt&&(!Se||r!==et||a!==tt)&&(Se&&St(),Se=setInterval(function(){var u=ne(document.elementFromPoint(r,a),!0);u!==s&&(s=u,He()),nt(t,i.options,u,n)},10),et=r,tt=a)}else{if(!this.options.bubbleScroll||ne(l,!0)===z()){He();return}nt(t,this.options,ne(l,!1),!1)}}},$(o,{pluginName:"scroll",initializeByDefault:!0})}function He(){C.forEach(function(o){clearInterval(o.pid)}),C=[]}function St(){clearInterval(Se)}var nt=It(function(o,e,t,n){if(e.scroll){var i=(o.touches?o.touches[0]:o).clientX,r=(o.touches?o.touches[0]:o).clientY,a=e.scrollSensitivity,l=e.scrollSpeed,s=z(),u=!1,f;at!==t&&(at=t,He(),Ee=e.scroll,f=e.scrollFn,Ee===!0&&(Ee=ne(t,!0)));var c=0,m=Ee;do{var E=m,v=O(E),y=v.top,H=v.bottom,V=v.left,N=v.right,L=v.width,R=v.height,oe=void 0,G=void 0,ie=E.scrollWidth,ge=E.scrollHeight,B=p(E),me=E.scrollLeft,Q=E.scrollTop;E===s?(oe=L<ie&&(B.overflowX==="auto"||B.overflowX==="scroll"||B.overflowX==="visible"),G=R<ge&&(B.overflowY==="auto"||B.overflowY==="scroll"||B.overflowY==="visible")):(oe=L<ie&&(B.overflowX==="auto"||B.overflowX==="scroll"),G=R<ge&&(B.overflowY==="auto"||B.overflowY==="scroll"));var ve=oe&&(Math.abs(N-i)<=a&&me+L<ie)-(Math.abs(V-i)<=a&&!!me),U=G&&(Math.abs(H-r)<=a&&Q+R<ge)-(Math.abs(y-r)<=a&&!!Q);if(!C[c])for(var re=0;re<=c;re++)C[re]||(C[re]={});(C[c].vx!=ve||C[c].vy!=U||C[c].el!==E)&&(C[c].el=E,C[c].vx=ve,C[c].vy=U,clearInterval(C[c].pid),(ve!=0||U!=0)&&(u=!0,C[c].pid=setInterval(function(){n&&this.layer===0&&h.active._onTouchMove(ze);var be=C[this.layer].vy?C[this.layer].vy*l:0,J=C[this.layer].vx?C[this.layer].vx*l:0;typeof f=="function"&&f.call(h.dragged.parentNode[Y],J,be,o,ze,C[this.layer].el)!=="continue"||xt(C[this.layer].el,J,be)}.bind({layer:c}),24))),c++}while(e.bubbleScroll&&m!==s&&(m=ne(m,!1)));lt=u}},30),kt=function(e){var t=e.originalEvent,n=e.putSortable,i=e.dragEl,r=e.activeSortable,a=e.dispatchSortableEvent,l=e.hideGhostForTarget,s=e.unhideGhostForTarget;if(t){var u=n||r;l();var f=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,c=document.elementFromPoint(f.clientX,f.clientY);s(),u&&!u.el.contains(c)&&(a("spill"),this.onSpill({dragEl:i,putSortable:n}))}};function ut(){}ut.prototype={startIndex:null,dragStart:function(e){var t=e.oldDraggableIndex;this.startIndex=t},onSpill:function(e){var t=e.dragEl,n=e.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var i=pe(this.sortable.el,this.startIndex,this.options);i?this.sortable.el.insertBefore(t,i):this.sortable.el.appendChild(t),this.sortable.animateAll(),n&&n.animateAll()},drop:kt};$(ut,{pluginName:"revertOnSpill"});function dt(){}dt.prototype={onSpill:function(e){var t=e.dragEl,n=e.putSortable,i=n||this.sortable;i.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),i.animateAll()},drop:kt};$(dt,{pluginName:"removeOnSpill"});var X;function In(){function o(){this.defaults={swapClass:"sortable-swap-highlight"}}return o.prototype={dragStart:function(t){var n=t.dragEl;X=n},dragOverValid:function(t){var n=t.completed,i=t.target,r=t.onMove,a=t.activeSortable,l=t.changed,s=t.cancel;if(a.options.swap){var u=this.sortable.el,f=this.options;if(i&&i!==u){var c=X;r(i)!==!1?(A(i,f.swapClass,!0),X=i):X=null,c&&c!==X&&A(c,f.swapClass,!1)}l(),n(!0),s()}},drop:function(t){var n=t.activeSortable,i=t.putSortable,r=t.dragEl,a=i||this.sortable,l=this.options;X&&A(X,l.swapClass,!1),X&&(l.swap||i&&i.options.swap)&&r!==X&&(a.captureAnimationState(),a!==n&&n.captureAnimationState(),xn(r,X),a.animateAll(),a!==n&&n.animateAll())},nulling:function(){X=null}},$(o,{pluginName:"swap",eventProperties:function(){return{swapItem:X}}})}function xn(o,e){var t=o.parentNode,n=e.parentNode,i,r;!t||!n||t.isEqualNode(e)||n.isEqualNode(o)||(i=F(o),r=F(e),t.isEqualNode(n)&&i<r&&r++,t.insertBefore(e,t.children[i]),n.insertBefore(o,n.children[r]))}h.mount(new On);h.mount(dt,ut);h.mount(new In);const An=Dt({name:"PostItem",props:{data:{type:Object,required:!0},onDelete:{type:Function,required:!0}},setup(o){return()=>{const e=o.data;return _(en,{size:"small"},{header(){return _(Ut,{inPageTo:`/pages/edit?id=${e.id}`,title:e.title,externalLinkTo:`/${e.slug}`,id:e.id},null)},"header-extra":function(){return _(Zt,{time:e.created},null)},default(){return _(ht,{depth:1,class:"min-h-[1rem]"},{default:()=>[e.subtitle]})},footer(){return _(ht,{depth:3},{default:()=>[`/${e.slug}`]})},action(){return _(Kt,{justify:"end"},{default:()=>[_(Qt,{positiveText:"取消",negativeText:"删除",onNegativeClick:async()=>{await ot.api.pages(e.id).delete(),message.success("删除成功"),o.onDelete(e.id)}},{trigger:()=>_(Jt,{quaternary:!0,type:"error",size:"tiny"},{default:()=>[Re("移除")]}),default:()=>_("span",{class:"max-w-48"},[Re("确定要删除「"),e.title,Re("」？")])})]})}})}}}),Nn=(o,e,t)=>{const n=Array.from(o),[i]=n.splice(e,1);return n.splice(t,0,i),n},Fn=Dt({name:"PageList",setup(){const o=ft([]);Ht(async()=>{const r=await ot.api.pages.get({params:{page:1,size:20,select:"title subtitle _id id created modified slug"}});o.value=r.data});const e=Lt(),t=ft();let n=null;Wt(()=>o.value,()=>{o.value.length!==0&&requestAnimationFrame(()=>{t.value&&(n=new h(t.value,{animation:150,onEnd(r){if(typeof r.oldIndex>"u"||typeof r.newIndex>"u"||r.oldIndex===r.newIndex)return;const a=Nn(o.value,r.oldIndex,r.newIndex);o.value=a,ot.api.pages.reorder.patch({data:{seq:[...a].reverse().map((l,s)=>({id:l.id,order:s+1}))}}).then(()=>{e.success("排序成功")})}}))})}),jt(()=>n?.destroy());const i=Gt(zt);return()=>{const r=i.viewport.value.mobile;return _($e,null,[_("div",{class:"relative"},[_($e,null,[_("div",{class:qt("flex flex-wrap items-center justify-between pt-4 lg:mb-5")},[_("div",{class:"flex items-center justify-between"},[_("p",{class:"flex items-center text-lg font-medium"},[r?_("div",null,null):_("span",null,[Re("页面 · 管理")])])])]),_("div",{class:"phone:grid-cols-1 children:flex children:flex-1 grid gap-4 md:grid-cols-2 xl:grid-cols-4",ref:t},[o.value.map(a=>_(An,{data:a,key:a.id,onDelete:l=>{o.value=o.value.filter(s=>s.id!==l).concat()}},null))])])]),_($t,{className:"space-x-2"},{default:()=>[_($e,null,[_(Vt,{className:"bg-accent",name:"添加页面",to:"/pages/edit",icon:_("i",{class:"icon-[mingcute--add-line] text-white"},null)},null)])]})])}}});export{Fn as ManagePageListView};