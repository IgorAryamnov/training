/*! For license information please see main.19a78607.js.LICENSE.txt */
(()=>{var e={2730:(e,t,n)=>{"use strict";var r=n(5043),o=n(8853);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,l={};function s(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(l[e]=t,e=0;e<t.length;e++)a.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},h={};function m(e,t,n,r,o,i,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var y=/[\-:]([a-z])/g;function v(e){return e[1].toUpperCase()}function x(e,t,n,r){var o=g.hasOwnProperty(t)?g[t]:null;(null!==o?0!==o.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,o,r)&&(n=null),r||null===o?function(e){return!!d.call(h,e)||!d.call(p,e)&&(f.test(e)?h[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=null===n?3!==o.type&&"":n:(t=o.attributeName,r=o.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(o=o.type)||4===o&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(y,v);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(y,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(y,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),S=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),_=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),A=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),N=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var O=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var z=Symbol.iterator;function F(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=z&&e[z]||e["@@iterator"])?e:null}var L,D=Object.assign;function I(e){if(void 0===L)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);L=t&&t[1]||""}return"\n"+L+e}var M=!1;function B(e,t){if(!e||M)return"";M=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"===typeof u.stack){for(var o=u.stack.split("\n"),i=r.stack.split("\n"),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(1!==a||1!==l)do{if(a--,0>--l||o[a]!==i[l]){var s="\n"+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=a&&0<=l);break}}}finally{M=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?I(e):""}function U(e){switch(e.tag){case 5:return I(e.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return e=B(e.type,!1);case 11:return e=B(e.type.render,!1);case 1:return e=B(e.type,!0);default:return""}}function H(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case k:return"Fragment";case S:return"Portal";case E:return"Profiler";case C:return"StrictMode";case R:return"Suspense";case A:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case _:return(e.displayName||"Context")+".Consumer";case j:return(e._context.displayName||"Context")+".Provider";case P:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case T:return null!==(t=e.displayName||null)?t:H(e.type)||"Memo";case N:t=e._payload,e=e._init;try{return H(e(t))}catch(n){}}return null}function W(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return H(t);case 8:return t===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function $(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function K(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Q(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=V(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function q(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Y(e,t){var n=t.checked;return D({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Z(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=$(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function G(e,t){null!=(t=t.checked)&&x(e,"checked",t,!1)}function X(e,t){G(e,t);var n=$(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,$(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function J(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&q(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+$(n),t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(i(91));return D({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oe(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(i(92));if(te(n)){if(1<n.length)throw Error(i(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:$(n)}}function ie(e,t){var n=$(t.value),r=$(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ae(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,de=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ce(e,t)}))}:ce);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),o=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}Object.keys(pe).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var ye=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ve(e,t){if(t){if(ye[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(i(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(i(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(i(62))}}function xe(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Se=null,ke=null,Ce=null;function Ee(e){if(e=bo(e)){if("function"!==typeof Se)throw Error(i(280));var t=e.stateNode;t&&(t=So(t),Se(e.stateNode,e.type,t))}}function je(e){ke?Ce?Ce.push(e):Ce=[e]:ke=e}function _e(){if(ke){var e=ke,t=Ce;if(Ce=ke=null,Ee(e),t)for(e=0;e<t.length;e++)Ee(t[e])}}function Pe(e,t){return e(t)}function Re(){}var Ae=!1;function Te(e,t,n){if(Ae)return e(t,n);Ae=!0;try{return Pe(e,t,n)}finally{Ae=!1,(null!==ke||null!==Ce)&&(Re(),_e())}}function Ne(e,t){var n=e.stateNode;if(null===n)return null;var r=So(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(i(231,t,typeof n));return n}var Oe=!1;if(c)try{var ze={};Object.defineProperty(ze,"passive",{get:function(){Oe=!0}}),window.addEventListener("test",ze,ze),window.removeEventListener("test",ze,ze)}catch(ce){Oe=!1}function Fe(e,t,n,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Le=!1,De=null,Ie=!1,Me=null,Be={onError:function(e){Le=!0,De=e}};function Ue(e,t,n,r,o,i,a,l,s){Le=!1,De=null,Fe.apply(Be,arguments)}function He(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function We(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function $e(e){if(He(e)!==e)throw Error(i(188))}function Ve(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=He(e)))throw Error(i(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(null===o)break;var a=o.alternate;if(null===a){if(null!==(r=o.return)){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return $e(o),e;if(a===r)return $e(o),t;a=a.sibling}throw Error(i(188))}if(n.return!==r.return)n=o,r=a;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=a;break}if(s===r){l=!0,r=o,n=a;break}s=s.sibling}if(!l){for(s=a.child;s;){if(s===n){l=!0,n=a,r=o;break}if(s===r){l=!0,r=a,n=o;break}s=s.sibling}if(!l)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(3!==n.tag)throw Error(i(188));return n.stateNode.current===n?e:t}(e))?Ke(e):null}function Ke(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ke(e);if(null!==t)return t;e=e.sibling}return null}var Qe=o.unstable_scheduleCallback,qe=o.unstable_cancelCallback,Ye=o.unstable_shouldYield,Ze=o.unstable_requestPaint,Ge=o.unstable_now,Xe=o.unstable_getCurrentPriorityLevel,Je=o.unstable_ImmediatePriority,et=o.unstable_UserBlockingPriority,tt=o.unstable_NormalPriority,nt=o.unstable_LowPriority,rt=o.unstable_IdlePriority,ot=null,it=null;var at=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ut=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=268435455&n;if(0!==a){var l=a&~o;0!==l?r=dt(l):0!==(i&=a)&&(r=dt(i))}else 0!==(a=n&~o)?r=dt(a):0!==i&&(r=dt(i));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&o)&&((o=r&-r)>=(i=t&-t)||16===o&&0!==(4194240&i)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)o=1<<(n=31-at(t)),r|=e[n],t&=~o;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ut;return 0===(4194240&(ut<<=1))&&(ut=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-at(t)]=n}function vt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var xt=0;function bt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,St,kt,Ct,Et,jt=!1,_t=[],Pt=null,Rt=null,At=null,Tt=new Map,Nt=new Map,Ot=[],zt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ft(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":Tt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nt.delete(t.pointerId)}}function Lt(e,t,n,r,o,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},null!==t&&(null!==(t=bo(t))&&St(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function Dt(e){var t=xo(e.target);if(null!==t){var n=He(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=We(n)))return e.blockedOn=t,void Et(e.priority,(function(){kt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function It(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=bo(n))&&St(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);be=r,n.target.dispatchEvent(r),be=null,t.shift()}return!0}function Mt(e,t,n){It(e)&&n.delete(t)}function Bt(){jt=!1,null!==Pt&&It(Pt)&&(Pt=null),null!==Rt&&It(Rt)&&(Rt=null),null!==At&&It(At)&&(At=null),Tt.forEach(Mt),Nt.forEach(Mt)}function Ut(e,t){e.blockedOn===t&&(e.blockedOn=null,jt||(jt=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Bt)))}function Ht(e){function t(t){return Ut(t,e)}if(0<_t.length){Ut(_t[0],e);for(var n=1;n<_t.length;n++){var r=_t[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Pt&&Ut(Pt,e),null!==Rt&&Ut(Rt,e),null!==At&&Ut(At,e),Tt.forEach(t),Nt.forEach(t),n=0;n<Ot.length;n++)(r=Ot[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Ot.length&&null===(n=Ot[0]).blockedOn;)Dt(n),null===n.blockedOn&&Ot.shift()}var Wt=b.ReactCurrentBatchConfig,$t=!0;function Vt(e,t,n,r){var o=xt,i=Wt.transition;Wt.transition=null;try{xt=1,Qt(e,t,n,r)}finally{xt=o,Wt.transition=i}}function Kt(e,t,n,r){var o=xt,i=Wt.transition;Wt.transition=null;try{xt=4,Qt(e,t,n,r)}finally{xt=o,Wt.transition=i}}function Qt(e,t,n,r){if($t){var o=Yt(e,t,n,r);if(null===o)$r(e,t,r,qt,n),Ft(e,r);else if(function(e,t,n,r,o){switch(t){case"focusin":return Pt=Lt(Pt,e,t,n,r,o),!0;case"dragenter":return Rt=Lt(Rt,e,t,n,r,o),!0;case"mouseover":return At=Lt(At,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Tt.set(i,Lt(Tt.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Nt.set(i,Lt(Nt.get(i)||null,e,t,n,r,o)),!0}return!1}(o,e,t,n,r))r.stopPropagation();else if(Ft(e,r),4&t&&-1<zt.indexOf(e)){for(;null!==o;){var i=bo(o);if(null!==i&&wt(i),null===(i=Yt(e,t,n,r))&&$r(e,t,r,qt,n),i===o)break;o=i}null!==o&&r.stopPropagation()}else $r(e,t,r,null,n)}}var qt=null;function Yt(e,t,n,r){if(qt=null,null!==(e=xo(e=we(r))))if(null===(t=He(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=We(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qt=e,null}function Zt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xe()){case Je:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Gt=null,Xt=null,Jt=null;function en(){if(Jt)return Jt;var e,t,n=Xt,r=n.length,o="value"in Gt?Gt.value:Gt.textContent,i=o.length;for(e=0;e<r&&n[e]===o[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===o[i-t];t++);return Jt=o.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function on(e){function t(t,n,r,o,i){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var an,ln,sn,un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=on(un),dn=D({},un,{view:0,detail:0}),fn=on(dn),pn=D({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:En,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(an=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=an=0,sn=e),an)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),hn=on(pn),mn=on(D({},pn,{dataTransfer:0})),gn=on(D({},dn,{relatedTarget:0})),yn=on(D({},un,{animationName:0,elapsedTime:0,pseudoElement:0})),vn=D({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xn=on(vn),bn=on(D({},un,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=kn[e])&&!!t[e]}function En(){return Cn}var jn=D({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Sn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:En,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),_n=on(jn),Pn=on(D({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Rn=on(D({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:En})),An=on(D({},un,{propertyName:0,elapsedTime:0,pseudoElement:0})),Tn=D({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nn=on(Tn),On=[9,13,27,32],zn=c&&"CompositionEvent"in window,Fn=null;c&&"documentMode"in document&&(Fn=document.documentMode);var Ln=c&&"TextEvent"in window&&!Fn,Dn=c&&(!zn||Fn&&8<Fn&&11>=Fn),In=String.fromCharCode(32),Mn=!1;function Bn(e,t){switch(e){case"keyup":return-1!==On.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Un(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Hn=!1;var Wn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $n(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Wn[e.type]:"textarea"===t}function Vn(e,t,n,r){je(r),0<(t=Kr(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kn=null,Qn=null;function qn(e){Ir(e,0)}function Yn(e){if(Q(wo(e)))return e}function Zn(e,t){if("change"===e)return t}var Gn=!1;if(c){var Xn;if(c){var Jn="oninput"in document;if(!Jn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Jn="function"===typeof er.oninput}Xn=Jn}else Xn=!1;Gn=Xn&&(!document.documentMode||9<document.documentMode)}function tr(){Kn&&(Kn.detachEvent("onpropertychange",nr),Qn=Kn=null)}function nr(e){if("value"===e.propertyName&&Yn(Qn)){var t=[];Vn(t,Qn,e,we(e)),Te(qn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Qn=n,(Kn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function or(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Yn(Qn)}function ir(e,t){if("click"===e)return Yn(t)}function ar(e,t){if("input"===e||"change"===e)return Yn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!d.call(t,o)||!lr(e[o],t[o]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=q();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=q((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=void 0===r.end?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=cr(n,i);var a=cr(n,r);o&&a&&(1!==e.rangeCount||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=c&&"documentMode"in document&&11>=document.documentMode,gr=null,yr=null,vr=null,xr=!1;function br(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;xr||null==gr||gr!==q(r)||("selectionStart"in(r=gr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},vr&&sr(vr,r)||(vr=r,0<(r=Kr(yr,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},kr={},Cr={};function Er(e){if(kr[e])return kr[e];if(!Sr[e])return e;var t,n=Sr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Cr)return kr[e]=n[t];return e}c&&(Cr=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);var jr=Er("animationend"),_r=Er("animationiteration"),Pr=Er("animationstart"),Rr=Er("transitionend"),Ar=new Map,Tr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(e,t){Ar.set(e,t),s(t,[e])}for(var Or=0;Or<Tr.length;Or++){var zr=Tr[Or];Nr(zr.toLowerCase(),"on"+(zr[0].toUpperCase()+zr.slice(1)))}Nr(jr,"onAnimationEnd"),Nr(_r,"onAnimationIteration"),Nr(Pr,"onAnimationStart"),Nr("dblclick","onDoubleClick"),Nr("focusin","onFocus"),Nr("focusout","onBlur"),Nr(Rr,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));function Dr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,o,a,l,s,u){if(Ue.apply(this,arguments),Le){if(!Le)throw Error(i(198));var c=De;Le=!1,De=null,Ie||(Ie=!0,Me=c)}}(r,t,void 0,e),e.currentTarget=null}function Ir(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;Dr(o,l,u),i=s}else for(a=0;a<r.length;a++){if(s=(l=r[a]).instance,u=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;Dr(o,l,u),i=s}}}if(Ie)throw e=Me,Ie=!1,Me=null,e}function Mr(e,t){var n=t[go];void 0===n&&(n=t[go]=new Set);var r=e+"__bubble";n.has(r)||(Wr(t,e,2,!1),n.add(r))}function Br(e,t,n){var r=0;t&&(r|=4),Wr(n,e,r,t)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function Hr(e){if(!e[Ur]){e[Ur]=!0,a.forEach((function(t){"selectionchange"!==t&&(Lr.has(t)||Br(t,!1,e),Br(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Ur]||(t[Ur]=!0,Br("selectionchange",!1,t))}}function Wr(e,t,n,r){switch(Zt(t)){case 1:var o=Vt;break;case 4:o=Kt;break;default:o=Qt}n=o.bind(null,t,n,e),o=void 0,!Oe||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),r?void 0!==o?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):void 0!==o?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function $r(e,t,n,r,o){var i=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var l=r.stateNode.containerInfo;if(l===o||8===l.nodeType&&l.parentNode===o)break;if(4===a)for(a=r.return;null!==a;){var s=a.tag;if((3===s||4===s)&&((s=a.stateNode.containerInfo)===o||8===s.nodeType&&s.parentNode===o))return;a=a.return}for(;null!==l;){if(null===(a=xo(l)))return;if(5===(s=a.tag)||6===s){r=i=a;continue e}l=l.parentNode}}r=r.return}Te((function(){var r=i,o=we(n),a=[];e:{var l=Ar.get(e);if(void 0!==l){var s=cn,u=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=_n;break;case"focusin":u="focus",s=gn;break;case"focusout":u="blur",s=gn;break;case"beforeblur":case"afterblur":s=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Rn;break;case jr:case _r:case Pr:s=yn;break;case Rr:s=An;break;case"scroll":s=fn;break;case"wheel":s=Nn;break;case"copy":case"cut":case"paste":s=xn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=Pn}var c=0!==(4&t),d=!c&&"scroll"===e,f=c?null!==l?l+"Capture":null:l;c=[];for(var p,h=r;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&(null!=(m=Ne(h,f))&&c.push(Vr(h,m,p)))),d)break;h=h.return}0<c.length&&(l=new s(l,u,null,n,o),a.push({event:l,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===be||!(u=n.relatedTarget||n.fromElement)||!xo(u)&&!u[mo])&&(s||l)&&(l=o.window===o?o:(l=o.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?xo(u):null)&&(u!==(d=He(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=hn,m="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(c=Pn,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==s?l:wo(s),p=null==u?l:wo(u),(l=new c(m,h+"leave",s,n,o)).target=d,l.relatedTarget=p,m=null,xo(o)===r&&((c=new c(f,h+"enter",u,n,o)).target=p,c.relatedTarget=d,m=c),d=m,s&&u)e:{for(f=u,h=0,p=c=s;p;p=Qr(p))h++;for(p=0,m=f;m;m=Qr(m))p++;for(;0<h-p;)c=Qr(c),h--;for(;0<p-h;)f=Qr(f),p--;for(;h--;){if(c===f||null!==f&&c===f.alternate)break e;c=Qr(c),f=Qr(f)}c=null}else c=null;null!==s&&qr(a,l,s,c,!1),null!==u&&null!==d&&qr(a,d,u,c,!0)}if("select"===(s=(l=r?wo(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=Zn;else if($n(l))if(Gn)g=ar;else{g=or;var y=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=ir);switch(g&&(g=g(e,r))?Vn(a,g,n,o):(y&&y(e,l,r),"focusout"===e&&(y=l._wrapperState)&&y.controlled&&"number"===l.type&&ee(l,"number",l.value)),y=r?wo(r):window,e){case"focusin":($n(y)||"true"===y.contentEditable)&&(gr=y,yr=r,vr=null);break;case"focusout":vr=yr=gr=null;break;case"mousedown":xr=!0;break;case"contextmenu":case"mouseup":case"dragend":xr=!1,br(a,n,o);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":br(a,n,o)}var v;if(zn)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Hn?Bn(e,n)&&(x="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(x="onCompositionStart");x&&(Dn&&"ko"!==n.locale&&(Hn||"onCompositionStart"!==x?"onCompositionEnd"===x&&Hn&&(v=en()):(Xt="value"in(Gt=o)?Gt.value:Gt.textContent,Hn=!0)),0<(y=Kr(r,x)).length&&(x=new bn(x,e,null,n,o),a.push({event:x,listeners:y}),v?x.data=v:null!==(v=Un(n))&&(x.data=v))),(v=Ln?function(e,t){switch(e){case"compositionend":return Un(t);case"keypress":return 32!==t.which?null:(Mn=!0,In);case"textInput":return(e=t.data)===In&&Mn?null:e;default:return null}}(e,n):function(e,t){if(Hn)return"compositionend"===e||!zn&&Bn(e,t)?(e=en(),Jt=Xt=Gt=null,Hn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Kr(r,"onBeforeInput")).length&&(o=new bn("onBeforeInput","beforeinput",null,n,o),a.push({event:o,listeners:r}),o.data=v))}Ir(a,t)}))}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Kr(e,t){for(var n=t+"Capture",r=[];null!==e;){var o=e,i=o.stateNode;5===o.tag&&null!==i&&(o=i,null!=(i=Ne(e,n))&&r.unshift(Vr(e,i,o)),null!=(i=Ne(e,t))&&r.push(Vr(e,i,o))),e=e.return}return r}function Qr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function qr(e,t,n,r,o){for(var i=t._reactName,a=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==u&&(l=u,o?null!=(s=Ne(n,i))&&a.unshift(Vr(n,s,l)):o||null!=(s=Ne(n,i))&&a.push(Vr(n,s,l))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Yr=/\r\n?/g,Zr=/\u0000|\uFFFD/g;function Gr(e){return("string"===typeof e?e:""+e).replace(Yr,"\n").replace(Zr,"")}function Xr(e,t,n){if(t=Gr(t),Gr(e)!==t&&n)throw Error(i(425))}function Jr(){}var eo=null,to=null;function no(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ro="function"===typeof setTimeout?setTimeout:void 0,oo="function"===typeof clearTimeout?clearTimeout:void 0,io="function"===typeof Promise?Promise:void 0,ao="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof io?function(e){return io.resolve(null).then(e).catch(lo)}:ro;function lo(e){setTimeout((function(){throw e}))}function so(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&8===o.nodeType)if("/$"===(n=o.data)){if(0===r)return e.removeChild(o),void Ht(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=o}while(n);Ht(t)}function uo(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function co(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var fo=Math.random().toString(36).slice(2),po="__reactFiber$"+fo,ho="__reactProps$"+fo,mo="__reactContainer$"+fo,go="__reactEvents$"+fo,yo="__reactListeners$"+fo,vo="__reactHandles$"+fo;function xo(e){var t=e[po];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mo]||n[po]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=co(e);null!==e;){if(n=e[po])return n;e=co(e)}return t}n=(e=n).parentNode}return null}function bo(e){return!(e=e[po]||e[mo])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function wo(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(i(33))}function So(e){return e[ho]||null}var ko=[],Co=-1;function Eo(e){return{current:e}}function jo(e){0>Co||(e.current=ko[Co],ko[Co]=null,Co--)}function _o(e,t){Co++,ko[Co]=e.current,e.current=t}var Po={},Ro=Eo(Po),Ao=Eo(!1),To=Po;function No(e,t){var n=e.type.contextTypes;if(!n)return Po;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o,i={};for(o in n)i[o]=t[o];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Oo(e){return null!==(e=e.childContextTypes)&&void 0!==e}function zo(){jo(Ao),jo(Ro)}function Fo(e,t,n){if(Ro.current!==Po)throw Error(i(168));_o(Ro,t),_o(Ao,n)}function Lo(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var o in r=r.getChildContext())if(!(o in t))throw Error(i(108,W(e)||"Unknown",o));return D({},n,r)}function Do(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Po,To=Ro.current,_o(Ro,e),_o(Ao,Ao.current),!0}function Io(e,t,n){var r=e.stateNode;if(!r)throw Error(i(169));n?(e=Lo(e,t,To),r.__reactInternalMemoizedMergedChildContext=e,jo(Ao),jo(Ro),_o(Ro,e)):jo(Ao),_o(Ao,n)}var Mo=null,Bo=!1,Uo=!1;function Ho(e){null===Mo?Mo=[e]:Mo.push(e)}function Wo(){if(!Uo&&null!==Mo){Uo=!0;var e=0,t=xt;try{var n=Mo;for(xt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Mo=null,Bo=!1}catch(o){throw null!==Mo&&(Mo=Mo.slice(e+1)),Qe(Je,Wo),o}finally{xt=t,Uo=!1}}return null}var $o=[],Vo=0,Ko=null,Qo=0,qo=[],Yo=0,Zo=null,Go=1,Xo="";function Jo(e,t){$o[Vo++]=Qo,$o[Vo++]=Ko,Ko=e,Qo=t}function ei(e,t,n){qo[Yo++]=Go,qo[Yo++]=Xo,qo[Yo++]=Zo,Zo=e;var r=Go;e=Xo;var o=32-at(r)-1;r&=~(1<<o),n+=1;var i=32-at(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Go=1<<32-at(t)+o|n<<o|r,Xo=i+e}else Go=1<<i|n<<o|r,Xo=e}function ti(e){null!==e.return&&(Jo(e,1),ei(e,1,0))}function ni(e){for(;e===Ko;)Ko=$o[--Vo],$o[Vo]=null,Qo=$o[--Vo],$o[Vo]=null;for(;e===Zo;)Zo=qo[--Yo],qo[Yo]=null,Xo=qo[--Yo],qo[Yo]=null,Go=qo[--Yo],qo[Yo]=null}var ri=null,oi=null,ii=!1,ai=null;function li(e,t){var n=Tu(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function si(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ri=e,oi=uo(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ri=e,oi=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Zo?{id:Go,overflow:Xo}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Tu(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ri=e,oi=null,!0);default:return!1}}function ui(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ci(e){if(ii){var t=oi;if(t){var n=t;if(!si(e,t)){if(ui(e))throw Error(i(418));t=uo(n.nextSibling);var r=ri;t&&si(e,t)?li(r,n):(e.flags=-4097&e.flags|2,ii=!1,ri=e)}}else{if(ui(e))throw Error(i(418));e.flags=-4097&e.flags|2,ii=!1,ri=e}}}function di(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ri=e}function fi(e){if(e!==ri)return!1;if(!ii)return di(e),ii=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!no(e.type,e.memoizedProps)),t&&(t=oi)){if(ui(e))throw pi(),Error(i(418));for(;t;)li(e,t),t=uo(t.nextSibling)}if(di(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){oi=uo(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}oi=null}}else oi=ri?uo(e.stateNode.nextSibling):null;return!0}function pi(){for(var e=oi;e;)e=uo(e.nextSibling)}function hi(){oi=ri=null,ii=!1}function mi(e){null===ai?ai=[e]:ai.push(e)}var gi=b.ReactCurrentBatchConfig;function yi(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(i(309));var r=n.stateNode}if(!r)throw Error(i(147,e));var o=r,a=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===a?t.ref:(t=function(e){var t=o.refs;null===e?delete t[a]:t[a]=e},t._stringRef=a,t)}if("string"!==typeof e)throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function vi(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xi(e){return(0,e._init)(e._payload)}function bi(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=Ou(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Du(n,e.mode,r)).return=e,t):((t=o(t,n)).return=e,t)}function u(e,t,n,r){var i=n.type;return i===k?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===N&&xi(i)===t.type)?((r=o(t,n.props)).ref=yi(e,t,n),r.return=e,r):((r=zu(n.type,n.key,n.props,null,e.mode,r)).ref=yi(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Iu(n,e.mode,r)).return=e,t):((t=o(t,n.children||[])).return=e,t)}function d(e,t,n,r,i){return null===t||7!==t.tag?((t=Fu(n,e.mode,r,i)).return=e,t):((t=o(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Du(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=zu(t.type,t.key,t.props,null,e.mode,n)).ref=yi(e,null,t),n.return=e,n;case S:return(t=Iu(t,e.mode,n)).return=e,t;case N:return f(e,(0,t._init)(t._payload),n)}if(te(t)||F(t))return(t=Fu(t,e.mode,n,null)).return=e,t;vi(e,t)}return null}function p(e,t,n,r){var o=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==o?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===o?u(e,t,n,r):null;case S:return n.key===o?c(e,t,n,r):null;case N:return p(e,t,(o=n._init)(n._payload),r)}if(te(n)||F(n))return null!==o?null:d(e,t,n,r,null);vi(e,n)}return null}function h(e,t,n,r,o){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,o);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return u(t,e=e.get(null===r.key?n:r.key)||null,r,o);case S:return c(t,e=e.get(null===r.key?n:r.key)||null,r,o);case N:return h(e,t,n,(0,r._init)(r._payload),o)}if(te(r)||F(r))return d(t,e=e.get(n)||null,r,o,null);vi(t,r)}return null}function m(o,i,l,s){for(var u=null,c=null,d=i,m=i=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var y=p(o,d,l[m],s);if(null===y){null===d&&(d=g);break}e&&d&&null===y.alternate&&t(o,d),i=a(y,i,m),null===c?u=y:c.sibling=y,c=y,d=g}if(m===l.length)return n(o,d),ii&&Jo(o,m),u;if(null===d){for(;m<l.length;m++)null!==(d=f(o,l[m],s))&&(i=a(d,i,m),null===c?u=d:c.sibling=d,c=d);return ii&&Jo(o,m),u}for(d=r(o,d);m<l.length;m++)null!==(g=h(d,o,m,l[m],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),i=a(g,i,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach((function(e){return t(o,e)})),ii&&Jo(o,m),u}function g(o,l,s,u){var c=F(s);if("function"!==typeof c)throw Error(i(150));if(null==(s=c.call(s)))throw Error(i(151));for(var d=c=null,m=l,g=l=0,y=null,v=s.next();null!==m&&!v.done;g++,v=s.next()){m.index>g?(y=m,m=null):y=m.sibling;var x=p(o,m,v.value,u);if(null===x){null===m&&(m=y);break}e&&m&&null===x.alternate&&t(o,m),l=a(x,l,g),null===d?c=x:d.sibling=x,d=x,m=y}if(v.done)return n(o,m),ii&&Jo(o,g),c;if(null===m){for(;!v.done;g++,v=s.next())null!==(v=f(o,v.value,u))&&(l=a(v,l,g),null===d?c=v:d.sibling=v,d=v);return ii&&Jo(o,g),c}for(m=r(o,m);!v.done;g++,v=s.next())null!==(v=h(m,o,g,v.value,u))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),l=a(v,l,g),null===d?c=v:d.sibling=v,d=v);return e&&m.forEach((function(e){return t(o,e)})),ii&&Jo(o,g),c}return function e(r,i,a,s){if("object"===typeof a&&null!==a&&a.type===k&&null===a.key&&(a=a.props.children),"object"===typeof a&&null!==a){switch(a.$$typeof){case w:e:{for(var u=a.key,c=i;null!==c;){if(c.key===u){if((u=a.type)===k){if(7===c.tag){n(r,c.sibling),(i=o(c,a.props.children)).return=r,r=i;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===N&&xi(u)===c.type){n(r,c.sibling),(i=o(c,a.props)).ref=yi(r,c,a),i.return=r,r=i;break e}n(r,c);break}t(r,c),c=c.sibling}a.type===k?((i=Fu(a.props.children,r.mode,s,a.key)).return=r,r=i):((s=zu(a.type,a.key,a.props,null,r.mode,s)).ref=yi(r,i,a),s.return=r,r=s)}return l(r);case S:e:{for(c=a.key;null!==i;){if(i.key===c){if(4===i.tag&&i.stateNode.containerInfo===a.containerInfo&&i.stateNode.implementation===a.implementation){n(r,i.sibling),(i=o(i,a.children||[])).return=r,r=i;break e}n(r,i);break}t(r,i),i=i.sibling}(i=Iu(a,r.mode,s)).return=r,r=i}return l(r);case N:return e(r,i,(c=a._init)(a._payload),s)}if(te(a))return m(r,i,a,s);if(F(a))return g(r,i,a,s);vi(r,a)}return"string"===typeof a&&""!==a||"number"===typeof a?(a=""+a,null!==i&&6===i.tag?(n(r,i.sibling),(i=o(i,a)).return=r,r=i):(n(r,i),(i=Du(a,r.mode,s)).return=r,r=i),l(r)):n(r,i)}}var wi=bi(!0),Si=bi(!1),ki=Eo(null),Ci=null,Ei=null,ji=null;function _i(){ji=Ei=Ci=null}function Pi(e){var t=ki.current;jo(ki),e._currentValue=t}function Ri(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ai(e,t){Ci=e,ji=Ei=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(xl=!0),e.firstContext=null)}function Ti(e){var t=e._currentValue;if(ji!==e)if(e={context:e,memoizedValue:t,next:null},null===Ei){if(null===Ci)throw Error(i(308));Ei=e,Ci.dependencies={lanes:0,firstContext:e}}else Ei=Ei.next=e;return t}var Ni=null;function Oi(e){null===Ni?Ni=[e]:Ni.push(e)}function zi(e,t,n,r){var o=t.interleaved;return null===o?(n.next=n,Oi(t)):(n.next=o.next,o.next=n),t.interleaved=n,Fi(e,r)}function Fi(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Li=!1;function Di(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ii(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mi(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bi(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Ps)){var o=r.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Fi(e,n)}return null===(o=r.interleaved)?(t.next=t,Oi(r)):(t.next=o.next,o.next=t),r.interleaved=t,Fi(e,n)}function Ui(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}function Hi(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var o=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===i?o=i=a:i=i.next=a,n=n.next}while(null!==n);null===i?o=i=t:i=i.next=t}else o=i=t;return n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wi(e,t,n,r){var o=e.updateQueue;Li=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(null!==l){o.shared.pending=null;var s=l,u=s.next;s.next=null,null===a?i=u:a.next=u,a=s;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==a&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(null!==i){var d=o.baseState;for(a=0,c=u=s=null,l=i;;){var f=l.lane,p=l.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,m=l;switch(f=t,p=n,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=m.payload)?h.call(p,d,f):h)||void 0===f)break e;d=D({},d,f);break e;case 2:Li=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=o.effects)?o.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=p,s=d):c=c.next=p,a|=f;if(null===(l=l.next)){if(null===(l=o.shared.pending))break;l=(f=l).next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}if(null===c&&(s=d),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=c,null!==(t=o.shared.interleaved)){o=t;do{a|=o.lane,o=o.next}while(o!==t)}else null===i&&(o.shared.lanes=0);Ls|=a,e.lanes=a,e.memoizedState=d}}function $i(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(null!==o){if(r.callback=null,r=n,"function"!==typeof o)throw Error(i(191,o));o.call(r)}}}var Vi={},Ki=Eo(Vi),Qi=Eo(Vi),qi=Eo(Vi);function Yi(e){if(e===Vi)throw Error(i(174));return e}function Zi(e,t){switch(_o(qi,t),_o(Qi,e),_o(Ki,Vi),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}jo(Ki),_o(Ki,t)}function Gi(){jo(Ki),jo(Qi),jo(qi)}function Xi(e){Yi(qi.current);var t=Yi(Ki.current),n=se(t,e.type);t!==n&&(_o(Qi,e),_o(Ki,n))}function Ji(e){Qi.current===e&&(jo(Ki),jo(Qi))}var ea=Eo(0);function ta(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var na=[];function ra(){for(var e=0;e<na.length;e++)na[e]._workInProgressVersionPrimary=null;na.length=0}var oa=b.ReactCurrentDispatcher,ia=b.ReactCurrentBatchConfig,aa=0,la=null,sa=null,ua=null,ca=!1,da=!1,fa=0,pa=0;function ha(){throw Error(i(321))}function ma(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function ga(e,t,n,r,o,a){if(aa=a,la=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oa.current=null===e||null===e.memoizedState?Ja:el,e=n(r,o),da){a=0;do{if(da=!1,fa=0,25<=a)throw Error(i(301));a+=1,ua=sa=null,t.updateQueue=null,oa.current=tl,e=n(r,o)}while(da)}if(oa.current=Xa,t=null!==sa&&null!==sa.next,aa=0,ua=sa=la=null,ca=!1,t)throw Error(i(300));return e}function ya(){var e=0!==fa;return fa=0,e}function va(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ua?la.memoizedState=ua=e:ua=ua.next=e,ua}function xa(){if(null===sa){var e=la.alternate;e=null!==e?e.memoizedState:null}else e=sa.next;var t=null===ua?la.memoizedState:ua.next;if(null!==t)ua=t,sa=e;else{if(null===e)throw Error(i(310));e={memoizedState:(sa=e).memoizedState,baseState:sa.baseState,baseQueue:sa.baseQueue,queue:sa.queue,next:null},null===ua?la.memoizedState=ua=e:ua=ua.next=e}return ua}function ba(e,t){return"function"===typeof t?t(e):t}function wa(e){var t=xa(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=sa,o=r.baseQueue,a=n.pending;if(null!==a){if(null!==o){var l=o.next;o.next=a.next,a.next=l}r.baseQueue=o=a,n.pending=null}if(null!==o){a=o.next,r=r.baseState;var s=l=null,u=null,c=a;do{var d=c.lane;if((aa&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(s=u=f,l=r):u=u.next=f,la.lanes|=d,Ls|=d}c=c.next}while(null!==c&&c!==a);null===u?l=r:u.next=s,lr(r,t.memoizedState)||(xl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){o=e;do{a=o.lane,la.lanes|=a,Ls|=a,o=o.next}while(o!==e)}else null===o&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Sa(e){var t=xa(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(null!==o){n.pending=null;var l=o=o.next;do{a=e(a,l.action),l=l.next}while(l!==o);lr(a,t.memoizedState)||(xl=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function ka(){}function Ca(e,t){var n=la,r=xa(),o=t(),a=!lr(r.memoizedState,o);if(a&&(r.memoizedState=o,xl=!0),r=r.queue,La(_a.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||null!==ua&&1&ua.memoizedState.tag){if(n.flags|=2048,Ta(9,ja.bind(null,n,r,o,t),void 0,null),null===Rs)throw Error(i(349));0!==(30&aa)||Ea(n,t,o)}return o}function Ea(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=la.updateQueue)?(t={lastEffect:null,stores:null},la.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function ja(e,t,n,r){t.value=n,t.getSnapshot=r,Pa(t)&&Ra(e)}function _a(e,t,n){return n((function(){Pa(t)&&Ra(e)}))}function Pa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function Ra(e){var t=Fi(e,1);null!==t&&nu(t,e,1,-1)}function Aa(e){var t=va();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:e},t.queue=e,e=e.dispatch=qa.bind(null,la,e),[t.memoizedState,e]}function Ta(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=la.updateQueue)?(t={lastEffect:null,stores:null},la.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Na(){return xa().memoizedState}function Oa(e,t,n,r){var o=va();la.flags|=e,o.memoizedState=Ta(1|t,n,void 0,void 0===r?null:r)}function za(e,t,n,r){var o=xa();r=void 0===r?null:r;var i=void 0;if(null!==sa){var a=sa.memoizedState;if(i=a.destroy,null!==r&&ma(r,a.deps))return void(o.memoizedState=Ta(t,n,i,r))}la.flags|=e,o.memoizedState=Ta(1|t,n,i,r)}function Fa(e,t){return Oa(8390656,8,e,t)}function La(e,t){return za(2048,8,e,t)}function Da(e,t){return za(4,2,e,t)}function Ia(e,t){return za(4,4,e,t)}function Ma(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Ba(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,za(4,4,Ma.bind(null,t,e),n)}function Ua(){}function Ha(e,t){var n=xa();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wa(e,t){var n=xa();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function $a(e,t,n){return 0===(21&aa)?(e.baseState&&(e.baseState=!1,xl=!0),e.memoizedState=n):(lr(n,t)||(n=mt(),la.lanes|=n,Ls|=n,e.baseState=!0),t)}function Va(e,t){var n=xt;xt=0!==n&&4>n?n:4,e(!0);var r=ia.transition;ia.transition={};try{e(!1),t()}finally{xt=n,ia.transition=r}}function Ka(){return xa().memoizedState}function Qa(e,t,n){var r=tu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ya(e))Za(t,n);else if(null!==(n=zi(e,t,n,r))){nu(n,e,r,eu()),Ga(n,t,r)}}function qa(e,t,n){var r=tu(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ya(e))Za(t,o);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,lr(l,a)){var s=t.interleaved;return null===s?(o.next=o,Oi(t)):(o.next=s.next,s.next=o),void(t.interleaved=o)}}catch(u){}null!==(n=zi(e,t,o,r))&&(nu(n,e,r,o=eu()),Ga(n,t,r))}}function Ya(e){var t=e.alternate;return e===la||null!==t&&t===la}function Za(e,t){da=ca=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ga(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}var Xa={readContext:Ti,useCallback:ha,useContext:ha,useEffect:ha,useImperativeHandle:ha,useInsertionEffect:ha,useLayoutEffect:ha,useMemo:ha,useReducer:ha,useRef:ha,useState:ha,useDebugValue:ha,useDeferredValue:ha,useTransition:ha,useMutableSource:ha,useSyncExternalStore:ha,useId:ha,unstable_isNewReconciler:!1},Ja={readContext:Ti,useCallback:function(e,t){return va().memoizedState=[e,void 0===t?null:t],e},useContext:Ti,useEffect:Fa,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Oa(4194308,4,Ma.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Oa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Oa(4,2,e,t)},useMemo:function(e,t){var n=va();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=va();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Qa.bind(null,la,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},va().memoizedState=e},useState:Aa,useDebugValue:Ua,useDeferredValue:function(e){return va().memoizedState=e},useTransition:function(){var e=Aa(!1),t=e[0];return e=Va.bind(null,e[1]),va().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=la,o=va();if(ii){if(void 0===n)throw Error(i(407));n=n()}else{if(n=t(),null===Rs)throw Error(i(349));0!==(30&aa)||Ea(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,Fa(_a.bind(null,r,a,e),[e]),r.flags|=2048,Ta(9,ja.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=va(),t=Rs.identifierPrefix;if(ii){var n=Xo;t=":"+t+"R"+(n=(Go&~(1<<32-at(Go)-1)).toString(32)+n),0<(n=fa++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=pa++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:Ti,useCallback:Ha,useContext:Ti,useEffect:La,useImperativeHandle:Ba,useInsertionEffect:Da,useLayoutEffect:Ia,useMemo:Wa,useReducer:wa,useRef:Na,useState:function(){return wa(ba)},useDebugValue:Ua,useDeferredValue:function(e){return $a(xa(),sa.memoizedState,e)},useTransition:function(){return[wa(ba)[0],xa().memoizedState]},useMutableSource:ka,useSyncExternalStore:Ca,useId:Ka,unstable_isNewReconciler:!1},tl={readContext:Ti,useCallback:Ha,useContext:Ti,useEffect:La,useImperativeHandle:Ba,useInsertionEffect:Da,useLayoutEffect:Ia,useMemo:Wa,useReducer:Sa,useRef:Na,useState:function(){return Sa(ba)},useDebugValue:Ua,useDeferredValue:function(e){var t=xa();return null===sa?t.memoizedState=e:$a(t,sa.memoizedState,e)},useTransition:function(){return[Sa(ba)[0],xa().memoizedState]},useMutableSource:ka,useSyncExternalStore:Ca,useId:Ka,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=D({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:D({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var ol={isMounted:function(e){return!!(e=e._reactInternals)&&He(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=eu(),o=tu(e),i=Mi(r,o);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Bi(e,i,o))&&(nu(t,e,o,r),Ui(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=eu(),o=tu(e),i=Mi(r,o);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Bi(e,i,o))&&(nu(t,e,o,r),Ui(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=eu(),r=tu(e),o=Mi(n,r);o.tag=2,void 0!==t&&null!==t&&(o.callback=t),null!==(t=Bi(e,o,r))&&(nu(t,e,r,n),Ui(t,e,r))}};function il(e,t,n,r,o,i,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,a):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(o,i))}function al(e,t,n){var r=!1,o=Po,i=t.contextType;return"object"===typeof i&&null!==i?i=Ti(i):(o=Oo(t)?To:Ro.current,i=(r=null!==(r=t.contextTypes)&&void 0!==r)?No(e,o):Po),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=ol,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ol.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Di(e);var i=t.contextType;"object"===typeof i&&null!==i?o.context=Ti(i):(i=Oo(t)?To:Ro.current,o.context=No(e,i)),o.state=e.memoizedState,"function"===typeof(i=t.getDerivedStateFromProps)&&(rl(e,t,i,n),o.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(t=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&ol.enqueueReplaceState(o,o.state,null),Wi(e,n,o,r),o.state=e.memoizedState),"function"===typeof o.componentDidMount&&(e.flags|=4194308)}function ul(e,t){try{var n="",r=t;do{n+=U(r),r=r.return}while(r);var o=n}catch(i){o="\nError generating stack: "+i.message+"\n"+i.stack}return{value:e,source:t,stack:o,digest:null}}function cl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var fl="function"===typeof WeakMap?WeakMap:Map;function pl(e,t,n){(n=Mi(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){$s||($s=!0,Vs=r),dl(0,t)},n}function hl(e,t,n){(n=Mi(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){dl(0,t)}}var i=e.stateNode;return null!==i&&"function"===typeof i.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!==typeof r&&(null===Ks?Ks=new Set([this]):Ks.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ml(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fl;var o=new Set;r.set(t,o)}else void 0===(o=r.get(t))&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Eu.bind(null,e,t,n),t.then(e,e))}function gl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function yl(e,t,n,r,o){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Mi(-1,1)).tag=2,Bi(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var vl=b.ReactCurrentOwner,xl=!1;function bl(e,t,n,r){t.child=null===e?Si(t,null,n,r):wi(t,e.child,n,r)}function wl(e,t,n,r,o){n=n.render;var i=t.ref;return Ai(t,o),r=ga(e,t,n,r,i,o),n=ya(),null===e||xl?(ii&&n&&ti(t),t.flags|=1,bl(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,$l(e,t,o))}function Sl(e,t,n,r,o){if(null===e){var i=n.type;return"function"!==typeof i||Nu(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=zu(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,kl(e,t,i,r,o))}if(i=e.child,0===(e.lanes&o)){var a=i.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(a,r)&&e.ref===t.ref)return $l(e,t,o)}return t.flags|=1,(e=Ou(i,r)).ref=t.ref,e.return=t,t.child=e}function kl(e,t,n,r,o){if(null!==e){var i=e.memoizedProps;if(sr(i,r)&&e.ref===t.ref){if(xl=!1,t.pendingProps=r=i,0===(e.lanes&o))return t.lanes=e.lanes,$l(e,t,o);0!==(131072&e.flags)&&(xl=!0)}}return jl(e,t,n,r,o)}function Cl(e,t,n){var r=t.pendingProps,o=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_o(Os,Ns),Ns|=n;else{if(0===(1073741824&n))return e=null!==i?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_o(Os,Ns),Ns|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==i?i.baseLanes:n,_o(Os,Ns),Ns|=r}else null!==i?(r=i.baseLanes|n,t.memoizedState=null):r=n,_o(Os,Ns),Ns|=r;return bl(e,t,o,n),t.child}function El(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function jl(e,t,n,r,o){var i=Oo(n)?To:Ro.current;return i=No(t,i),Ai(t,o),n=ga(e,t,n,r,i,o),r=ya(),null===e||xl?(ii&&r&&ti(t),t.flags|=1,bl(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,$l(e,t,o))}function _l(e,t,n,r,o){if(Oo(n)){var i=!0;Do(t)}else i=!1;if(Ai(t,o),null===t.stateNode)Wl(e,t),al(t,n,r),sl(t,n,r,o),r=!0;else if(null===e){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;"object"===typeof u&&null!==u?u=Ti(u):u=No(t,u=Oo(n)?To:Ro.current);var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof a.getSnapshotBeforeUpdate;d||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(l!==r||s!==u)&&ll(t,a,r,u),Li=!1;var f=t.memoizedState;a.state=f,Wi(t,r,a,o),s=t.memoizedState,l!==r||f!==s||Ao.current||Li?("function"===typeof c&&(rl(t,n,c,r),s=t.memoizedState),(l=Li||il(t,n,l,r,f,s,u))?(d||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ii(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:nl(t.type,l),a.props=u,d=t.pendingProps,f=a.context,"object"===typeof(s=n.contextType)&&null!==s?s=Ti(s):s=No(t,s=Oo(n)?To:Ro.current);var p=n.getDerivedStateFromProps;(c="function"===typeof p||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(l!==d||f!==s)&&ll(t,a,r,s),Li=!1,f=t.memoizedState,a.state=f,Wi(t,r,a,o);var h=t.memoizedState;l!==d||f!==h||Ao.current||Li?("function"===typeof p&&(rl(t,n,p,r),h=t.memoizedState),(u=Li||il(t,n,u,r,f,h,s)||!1)?(c||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,h,s),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,h,s)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=s,r=u):("function"!==typeof a.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Pl(e,t,n,r,i,o)}function Pl(e,t,n,r,o,i){El(e,t);var a=0!==(128&t.flags);if(!r&&!a)return o&&Io(t,n,!1),$l(e,t,i);r=t.stateNode,vl.current=t;var l=a&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=wi(t,e.child,null,i),t.child=wi(t,null,l,i)):bl(e,t,l,i),t.memoizedState=r.state,o&&Io(t,n,!0),t.child}function Rl(e){var t=e.stateNode;t.pendingContext?Fo(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Fo(0,t.context,!1),Zi(e,t.containerInfo)}function Al(e,t,n,r,o){return hi(),mi(o),t.flags|=256,bl(e,t,n,r),t.child}var Tl,Nl,Ol,zl,Fl={dehydrated:null,treeContext:null,retryLane:0};function Ll(e){return{baseLanes:e,cachePool:null,transitions:null}}function Dl(e,t,n){var r,o=t.pendingProps,a=ea.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&a)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(a|=1),_o(ea,1&a),null===e)return ci(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=o.children,e=o.fallback,l?(o=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&o)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Lu(s,o,0,null),e=Fu(e,o,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ll(n),t.memoizedState=Fl,e):Il(t,s));if(null!==(a=e.memoizedState)&&null!==(r=a.dehydrated))return function(e,t,n,r,o,a,l){if(n)return 256&t.flags?(t.flags&=-257,Ml(e,t,l,r=cl(Error(i(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=Lu({mode:"visible",children:r.children},o,0,null),(a=Fu(a,o,l,null)).flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,0!==(1&t.mode)&&wi(t,e.child,null,l),t.child.memoizedState=Ll(l),t.memoizedState=Fl,a);if(0===(1&t.mode))return Ml(e,t,l,null);if("$!"===o.data){if(r=o.nextSibling&&o.nextSibling.dataset)var s=r.dgst;return r=s,Ml(e,t,l,r=cl(a=Error(i(419)),r,void 0))}if(s=0!==(l&e.childLanes),xl||s){if(null!==(r=Rs)){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}0!==(o=0!==(o&(r.suspendedLanes|l))?0:o)&&o!==a.retryLane&&(a.retryLane=o,Fi(e,o),nu(r,e,o,-1))}return mu(),Ml(e,t,l,r=cl(Error(i(421))))}return"$?"===o.data?(t.flags|=128,t.child=e.child,t=_u.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,oi=uo(o.nextSibling),ri=t,ii=!0,ai=null,null!==e&&(qo[Yo++]=Go,qo[Yo++]=Xo,qo[Yo++]=Zo,Go=e.id,Xo=e.overflow,Zo=t),t=Il(t,r.children),t.flags|=4096,t)}(e,t,s,o,r,a,n);if(l){l=o.fallback,s=t.mode,r=(a=e.child).sibling;var u={mode:"hidden",children:o.children};return 0===(1&s)&&t.child!==a?((o=t.child).childLanes=0,o.pendingProps=u,t.deletions=null):(o=Ou(a,u)).subtreeFlags=14680064&a.subtreeFlags,null!==r?l=Ou(r,l):(l=Fu(l,s,n,null)).flags|=2,l.return=t,o.return=t,o.sibling=l,t.child=o,o=l,l=t.child,s=null===(s=e.child.memoizedState)?Ll(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Fl,o}return e=(l=e.child).sibling,o=Ou(l,{mode:"visible",children:o.children}),0===(1&t.mode)&&(o.lanes=n),o.return=t,o.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Il(e,t){return(t=Lu({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Ml(e,t,n,r){return null!==r&&mi(r),wi(t,e.child,null,n),(e=Il(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Bl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Ri(e.return,t,n)}function Ul(e,t,n,r,o){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Hl(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(bl(e,t,r.children,n),0!==(2&(r=ea.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Bl(e,n,t);else if(19===e.tag)Bl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_o(ea,r),0===(1&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;null!==n;)null!==(e=n.alternate)&&null===ta(e)&&(o=n),n=n.sibling;null===(n=o)?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ul(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===ta(e)){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ul(t,!0,n,null,i);break;case"together":Ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function $l(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ls|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(n=Ou(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ou(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Vl(e,t){if(!ii)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Kl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=14680064&o.subtreeFlags,r|=14680064&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ql(e,t,n){var r=t.pendingProps;switch(ni(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kl(t),null;case 1:case 17:return Oo(t.type)&&zo(),Kl(t),null;case 3:return r=t.stateNode,Gi(),jo(Ao),jo(Ro),ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(fi(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ai&&(au(ai),ai=null))),Nl(e,t),Kl(t),null;case 5:Ji(t);var o=Yi(qi.current);if(n=t.type,null!==e&&null!=t.stateNode)Ol(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(i(166));return Kl(t),null}if(e=Yi(Ki.current),fi(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[po]=t,r[ho]=a,e=0!==(1&t.mode),n){case"dialog":Mr("cancel",r),Mr("close",r);break;case"iframe":case"object":case"embed":Mr("load",r);break;case"video":case"audio":for(o=0;o<Fr.length;o++)Mr(Fr[o],r);break;case"source":Mr("error",r);break;case"img":case"image":case"link":Mr("error",r),Mr("load",r);break;case"details":Mr("toggle",r);break;case"input":Z(r,a),Mr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Mr("invalid",r);break;case"textarea":oe(r,a),Mr("invalid",r)}for(var s in ve(n,a),o=null,a)if(a.hasOwnProperty(s)){var u=a[s];"children"===s?"string"===typeof u?r.textContent!==u&&(!0!==a.suppressHydrationWarning&&Xr(r.textContent,u,e),o=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==a.suppressHydrationWarning&&Xr(r.textContent,u,e),o=["children",""+u]):l.hasOwnProperty(s)&&null!=u&&"onScroll"===s&&Mr("scroll",r)}switch(n){case"input":K(r),J(r,a,!0);break;case"textarea":K(r),ae(r);break;case"select":case"option":break;default:"function"===typeof a.onClick&&(r.onclick=Jr)}r=o,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===o.nodeType?o:o.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[po]=t,e[ho]=r,Tl(e,t,!1,!1),t.stateNode=e;e:{switch(s=xe(n,r),n){case"dialog":Mr("cancel",e),Mr("close",e),o=r;break;case"iframe":case"object":case"embed":Mr("load",e),o=r;break;case"video":case"audio":for(o=0;o<Fr.length;o++)Mr(Fr[o],e);o=r;break;case"source":Mr("error",e),o=r;break;case"img":case"image":case"link":Mr("error",e),Mr("load",e),o=r;break;case"details":Mr("toggle",e),o=r;break;case"input":Z(e,r),o=Y(e,r),Mr("invalid",e);break;case"option":default:o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=D({},r,{value:void 0}),Mr("invalid",e);break;case"textarea":oe(e,r),o=re(e,r),Mr("invalid",e)}for(a in ve(n,o),u=o)if(u.hasOwnProperty(a)){var c=u[a];"style"===a?ge(e,c):"dangerouslySetInnerHTML"===a?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===a?"string"===typeof c?("textarea"!==n||""!==c)&&fe(e,c):"number"===typeof c&&fe(e,""+c):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(l.hasOwnProperty(a)?null!=c&&"onScroll"===a&&Mr("scroll",e):null!=c&&x(e,a,c,s))}switch(n){case"input":K(e),J(e,r,!1);break;case"textarea":K(e),ae(e);break;case"option":null!=r.value&&e.setAttribute("value",""+$(r.value));break;case"select":e.multiple=!!r.multiple,null!=(a=r.value)?ne(e,!!r.multiple,a,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof o.onClick&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Kl(t),null;case 6:if(e&&null!=t.stateNode)zl(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(i(166));if(n=Yi(qi.current),Yi(Ki.current),fi(t)){if(r=t.stateNode,n=t.memoizedProps,r[po]=t,(a=r.nodeValue!==n)&&null!==(e=ri))switch(e.tag){case 3:Xr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Xr(r.nodeValue,n,0!==(1&e.mode))}a&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[po]=t,t.stateNode=r}return Kl(t),null;case 13:if(jo(ea),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ii&&null!==oi&&0!==(1&t.mode)&&0===(128&t.flags))pi(),hi(),t.flags|=98560,a=!1;else if(a=fi(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(i(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(i(317));a[po]=t}else hi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Kl(t),a=!1}else null!==ai&&(au(ai),ai=null),a=!0;if(!a)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ea.current)?0===zs&&(zs=3):mu())),null!==t.updateQueue&&(t.flags|=4),Kl(t),null);case 4:return Gi(),Nl(e,t),null===e&&Hr(t.stateNode.containerInfo),Kl(t),null;case 10:return Pi(t.type._context),Kl(t),null;case 19:if(jo(ea),null===(a=t.memoizedState))return Kl(t),null;if(r=0!==(128&t.flags),null===(s=a.rendering))if(r)Vl(a,!1);else{if(0!==zs||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=ta(e))){for(t.flags|=128,Vl(a,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(a=n).flags&=14680066,null===(s=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _o(ea,1&ea.current|2),t.child}e=e.sibling}null!==a.tail&&Ge()>Hs&&(t.flags|=128,r=!0,Vl(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ta(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Vl(a,!0),null===a.tail&&"hidden"===a.tailMode&&!s.alternate&&!ii)return Kl(t),null}else 2*Ge()-a.renderingStartTime>Hs&&1073741824!==n&&(t.flags|=128,r=!0,Vl(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=a.last)?n.sibling=s:t.child=s,a.last=s)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ge(),t.sibling=null,n=ea.current,_o(ea,r?1&n|2:1&n),t):(Kl(t),null);case 22:case 23:return du(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Ns)&&(Kl(t),6&t.subtreeFlags&&(t.flags|=8192)):Kl(t),null;case 24:case 25:return null}throw Error(i(156,t.tag))}function ql(e,t){switch(ni(t),t.tag){case 1:return Oo(t.type)&&zo(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Gi(),jo(Ao),jo(Ro),ra(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Ji(t),null;case 13:if(jo(ea),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));hi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return jo(ea),null;case 4:return Gi(),null;case 10:return Pi(t.type._context),null;case 22:case 23:return du(),null;default:return null}}Tl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Nl=function(){},Ol=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Yi(Ki.current);var i,a=null;switch(n){case"input":o=Y(e,o),r=Y(e,r),a=[];break;case"select":o=D({},o,{value:void 0}),r=D({},r,{value:void 0}),a=[];break;case"textarea":o=re(e,o),r=re(e,r),a=[];break;default:"function"!==typeof o.onClick&&"function"===typeof r.onClick&&(e.onclick=Jr)}for(c in ve(n,r),n=null,o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&null!=o[c])if("style"===c){var s=o[c];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(l.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var u=r[c];if(s=null!=o?o[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(null!=u||null!=s))if("style"===c)if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(a||(a=[]),a.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,s=s?s.__html:void 0,null!=u&&s!==u&&(a=a||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(a=a||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(l.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Mr("scroll",e),a||s===u||(a=[])):(a=a||[]).push(c,u))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}},zl=function(e,t,n,r){n!==r&&(t.flags|=4)};var Yl=!1,Zl=!1,Gl="function"===typeof WeakSet?WeakSet:Set,Xl=null;function Jl(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Cu(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){Cu(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,void 0!==i&&es(t,n,i)}o=o.next}while(o!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function os(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function is(e){var t=e.alternate;null!==t&&(e.alternate=null,is(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[po],delete t[ho],delete t[go],delete t[yo],delete t[vo])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function as(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||as(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Jr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function us(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(us(e,t,n),e=e.sibling;null!==e;)us(e,t,n),e=e.sibling}var cs=null,ds=!1;function fs(e,t,n){for(n=n.child;null!==n;)ps(e,t,n),n=n.sibling}function ps(e,t,n){if(it&&"function"===typeof it.onCommitFiberUnmount)try{it.onCommitFiberUnmount(ot,n)}catch(l){}switch(n.tag){case 5:Zl||Jl(n,t);case 6:var r=cs,o=ds;cs=null,fs(e,t,n),ds=o,null!==(cs=r)&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cs.removeChild(n.stateNode));break;case 18:null!==cs&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?so(e.parentNode,n):1===e.nodeType&&so(e,n),Ht(e)):so(cs,n.stateNode));break;case 4:r=cs,o=ds,cs=n.stateNode.containerInfo,ds=!0,fs(e,t,n),cs=r,ds=o;break;case 0:case 11:case 14:case 15:if(!Zl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,void 0!==a&&(0!==(2&i)||0!==(4&i))&&es(n,t,a),o=o.next}while(o!==r)}fs(e,t,n);break;case 1:if(!Zl&&(Jl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Cu(n,t,l)}fs(e,t,n);break;case 21:fs(e,t,n);break;case 22:1&n.mode?(Zl=(r=Zl)||null!==n.memoizedState,fs(e,t,n),Zl=r):fs(e,t,n);break;default:fs(e,t,n)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Gl),t.forEach((function(t){var r=Pu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function ms(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:cs=s.stateNode,ds=!1;break e;case 3:case 4:cs=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===cs)throw Error(i(160));ps(a,l,o),cs=null,ds=!1;var u=o.alternate;null!==u&&(u.return=null),o.return=null}catch(c){Cu(o,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gs(t,e),t=t.sibling}function gs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ms(t,e),ys(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(g){Cu(e,e.return,g)}try{ns(5,e,e.return)}catch(g){Cu(e,e.return,g)}}break;case 1:ms(t,e),ys(e),512&r&&null!==n&&Jl(n,n.return);break;case 5:if(ms(t,e),ys(e),512&r&&null!==n&&Jl(n,n.return),32&e.flags){var o=e.stateNode;try{fe(o,"")}catch(g){Cu(e,e.return,g)}}if(4&r&&null!=(o=e.stateNode)){var a=e.memoizedProps,l=null!==n?n.memoizedProps:a,s=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===s&&"radio"===a.type&&null!=a.name&&G(o,a),xe(s,l);var c=xe(s,a);for(l=0;l<u.length;l+=2){var d=u[l],f=u[l+1];"style"===d?ge(o,f):"dangerouslySetInnerHTML"===d?de(o,f):"children"===d?fe(o,f):x(o,d,f,c)}switch(s){case"input":X(o,a);break;case"textarea":ie(o,a);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var h=a.value;null!=h?ne(o,!!a.multiple,h,!1):p!==!!a.multiple&&(null!=a.defaultValue?ne(o,!!a.multiple,a.defaultValue,!0):ne(o,!!a.multiple,a.multiple?[]:"",!1))}o[ho]=a}catch(g){Cu(e,e.return,g)}}break;case 6:if(ms(t,e),ys(e),4&r){if(null===e.stateNode)throw Error(i(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(g){Cu(e,e.return,g)}}break;case 3:if(ms(t,e),ys(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ht(t.containerInfo)}catch(g){Cu(e,e.return,g)}break;case 4:default:ms(t,e),ys(e);break;case 13:ms(t,e),ys(e),8192&(o=e.child).flags&&(a=null!==o.memoizedState,o.stateNode.isHidden=a,!a||null!==o.alternate&&null!==o.alternate.memoizedState||(Us=Ge())),4&r&&hs(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Zl=(c=Zl)||d,ms(t,e),Zl=c):ms(t,e),ys(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(Xl=e,d=e.child;null!==d;){for(f=Xl=d;null!==Xl;){switch(h=(p=Xl).child,p.tag){case 0:case 11:case 14:case 15:ns(4,p,p.return);break;case 1:Jl(p,p.return);var m=p.stateNode;if("function"===typeof m.componentWillUnmount){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Cu(r,n,g)}}break;case 5:Jl(p,p.return);break;case 22:if(null!==p.memoizedState){ws(f);continue}}null!==h?(h.return=p,Xl=h):ws(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{o=f.stateNode,c?"function"===typeof(a=o.style).setProperty?a.setProperty("display","none","important"):a.display="none":(s=f.stateNode,l=void 0!==(u=f.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,s.style.display=me("display",l))}catch(g){Cu(e,e.return,g)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(g){Cu(e,e.return,g)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ms(t,e),ys(e),4&r&&hs(e);case 21:}}function ys(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(as(n)){var r=n;break e}n=n.return}throw Error(i(160))}switch(r.tag){case 5:var o=r.stateNode;32&r.flags&&(fe(o,""),r.flags&=-33),us(e,ls(e),o);break;case 3:case 4:var a=r.stateNode.containerInfo;ss(e,ls(e),a);break;default:throw Error(i(161))}}catch(l){Cu(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function vs(e,t,n){Xl=e,xs(e,t,n)}function xs(e,t,n){for(var r=0!==(1&e.mode);null!==Xl;){var o=Xl,i=o.child;if(22===o.tag&&r){var a=null!==o.memoizedState||Yl;if(!a){var l=o.alternate,s=null!==l&&null!==l.memoizedState||Zl;l=Yl;var u=Zl;if(Yl=a,(Zl=s)&&!u)for(Xl=o;null!==Xl;)s=(a=Xl).child,22===a.tag&&null!==a.memoizedState?Ss(o):null!==s?(s.return=a,Xl=s):Ss(o);for(;null!==i;)Xl=i,xs(i,t,n),i=i.sibling;Xl=o,Yl=l,Zl=u}bs(e)}else 0!==(8772&o.subtreeFlags)&&null!==i?(i.return=o,Xl=i):bs(e)}}function bs(e){for(;null!==Xl;){var t=Xl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Zl||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Zl)if(null===n)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;null!==a&&$i(t,a,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}$i(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Ht(f)}}}break;default:throw Error(i(163))}Zl||512&t.flags&&os(t)}catch(p){Cu(t,t.return,p)}}if(t===e){Xl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Xl=n;break}Xl=t.return}}function ws(e){for(;null!==Xl;){var t=Xl;if(t===e){Xl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Xl=n;break}Xl=t.return}}function Ss(e){for(;null!==Xl;){var t=Xl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){Cu(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var o=t.return;try{r.componentDidMount()}catch(s){Cu(t,o,s)}}var i=t.return;try{os(t)}catch(s){Cu(t,i,s)}break;case 5:var a=t.return;try{os(t)}catch(s){Cu(t,a,s)}}}catch(s){Cu(t,t.return,s)}if(t===e){Xl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Xl=l;break}Xl=t.return}}var ks,Cs=Math.ceil,Es=b.ReactCurrentDispatcher,js=b.ReactCurrentOwner,_s=b.ReactCurrentBatchConfig,Ps=0,Rs=null,As=null,Ts=0,Ns=0,Os=Eo(0),zs=0,Fs=null,Ls=0,Ds=0,Is=0,Ms=null,Bs=null,Us=0,Hs=1/0,Ws=null,$s=!1,Vs=null,Ks=null,Qs=!1,qs=null,Ys=0,Zs=0,Gs=null,Xs=-1,Js=0;function eu(){return 0!==(6&Ps)?Ge():-1!==Xs?Xs:Xs=Ge()}function tu(e){return 0===(1&e.mode)?1:0!==(2&Ps)&&0!==Ts?Ts&-Ts:null!==gi.transition?(0===Js&&(Js=mt()),Js):0!==(e=xt)?e:e=void 0===(e=window.event)?16:Zt(e.type)}function nu(e,t,n,r){if(50<Zs)throw Zs=0,Gs=null,Error(i(185));yt(e,n,r),0!==(2&Ps)&&e===Rs||(e===Rs&&(0===(2&Ps)&&(Ds|=n),4===zs&&lu(e,Ts)),ru(e,r),1===n&&0===Ps&&0===(1&t.mode)&&(Hs=Ge()+500,Bo&&Wo()))}function ru(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-at(i),l=1<<a,s=o[a];-1===s?0!==(l&n)&&0===(l&r)||(o[a]=pt(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}(e,t);var r=ft(e,e===Rs?Ts:0);if(0===r)null!==n&&qe(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&qe(n),1===t)0===e.tag?function(e){Bo=!0,Ho(e)}(su.bind(null,e)):Ho(su.bind(null,e)),ao((function(){0===(6&Ps)&&Wo()})),n=null;else{switch(bt(r)){case 1:n=Je;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Ru(n,ou.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ou(e,t){if(Xs=-1,Js=0,0!==(6&Ps))throw Error(i(327));var n=e.callbackNode;if(Su()&&e.callbackNode!==n)return null;var r=ft(e,e===Rs?Ts:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gu(e,r);else{t=r;var o=Ps;Ps|=2;var a=hu();for(Rs===e&&Ts===t||(Ws=null,Hs=Ge()+500,fu(e,t));;)try{vu();break}catch(s){pu(e,s)}_i(),Es.current=a,Ps=o,null!==As?t=0:(Rs=null,Ts=0,t=zs)}if(0!==t){if(2===t&&(0!==(o=ht(e))&&(r=o,t=iu(e,o))),1===t)throw n=Fs,fu(e,0),lu(e,r),ru(e,Ge()),n;if(6===t)lu(e,r);else{if(o=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!lr(i(),o))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(o)&&(2===(t=gu(e,r))&&(0!==(a=ht(e))&&(r=a,t=iu(e,a))),1===t))throw n=Fs,fu(e,0),lu(e,r),ru(e,Ge()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(i(345));case 2:case 5:wu(e,Bs,Ws);break;case 3:if(lu(e,r),(130023424&r)===r&&10<(t=Us+500-Ge())){if(0!==ft(e,0))break;if(((o=e.suspendedLanes)&r)!==r){eu(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ro(wu.bind(null,e,Bs,Ws),t);break}wu(e,Bs,Ws);break;case 4:if(lu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-at(r);a=1<<l,(l=t[l])>o&&(o=l),r&=~a}if(r=o,10<(r=(120>(r=Ge()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cs(r/1960))-r)){e.timeoutHandle=ro(wu.bind(null,e,Bs,Ws),r);break}wu(e,Bs,Ws);break;default:throw Error(i(329))}}}return ru(e,Ge()),e.callbackNode===n?ou.bind(null,e):null}function iu(e,t){var n=Ms;return e.current.memoizedState.isDehydrated&&(fu(e,t).flags|=256),2!==(e=gu(e,t))&&(t=Bs,Bs=n,null!==t&&au(t)),e}function au(e){null===Bs?Bs=e:Bs.push.apply(Bs,e)}function lu(e,t){for(t&=~Is,t&=~Ds,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function su(e){if(0!==(6&Ps))throw Error(i(327));Su();var t=ft(e,0);if(0===(1&t))return ru(e,Ge()),null;var n=gu(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=iu(e,r))}if(1===n)throw n=Fs,fu(e,0),lu(e,t),ru(e,Ge()),n;if(6===n)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wu(e,Bs,Ws),ru(e,Ge()),null}function uu(e,t){var n=Ps;Ps|=1;try{return e(t)}finally{0===(Ps=n)&&(Hs=Ge()+500,Bo&&Wo())}}function cu(e){null!==qs&&0===qs.tag&&0===(6&Ps)&&Su();var t=Ps;Ps|=1;var n=_s.transition,r=xt;try{if(_s.transition=null,xt=1,e)return e()}finally{xt=r,_s.transition=n,0===(6&(Ps=t))&&Wo()}}function du(){Ns=Os.current,jo(Os)}function fu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,oo(n)),null!==As)for(n=As.return;null!==n;){var r=n;switch(ni(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&zo();break;case 3:Gi(),jo(Ao),jo(Ro),ra();break;case 5:Ji(r);break;case 4:Gi();break;case 13:case 19:jo(ea);break;case 10:Pi(r.type._context);break;case 22:case 23:du()}n=n.return}if(Rs=e,As=e=Ou(e.current,null),Ts=Ns=t,zs=0,Fs=null,Is=Ds=Ls=0,Bs=Ms=null,null!==Ni){for(t=0;t<Ni.length;t++)if(null!==(r=(n=Ni[t]).interleaved)){n.interleaved=null;var o=r.next,i=n.pending;if(null!==i){var a=i.next;i.next=o,r.next=a}n.pending=r}Ni=null}return e}function pu(e,t){for(;;){var n=As;try{if(_i(),oa.current=Xa,ca){for(var r=la.memoizedState;null!==r;){var o=r.queue;null!==o&&(o.pending=null),r=r.next}ca=!1}if(aa=0,ua=sa=la=null,da=!1,fa=0,js.current=null,null===n||null===n.return){zs=1,Fs=t,As=null;break}e:{var a=e,l=n.return,s=n,u=t;if(t=Ts,s.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,d=s,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=gl(l);if(null!==h){h.flags&=-257,yl(h,l,s,0,t),1&h.mode&&ml(a,c,t),u=c;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(u),t.updateQueue=g}else m.add(u);break e}if(0===(1&t)){ml(a,c,t),mu();break e}u=Error(i(426))}else if(ii&&1&s.mode){var y=gl(l);if(null!==y){0===(65536&y.flags)&&(y.flags|=256),yl(y,l,s,0,t),mi(ul(u,s));break e}}a=u=ul(u,s),4!==zs&&(zs=2),null===Ms?Ms=[a]:Ms.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t,Hi(a,pl(0,u,t));break e;case 1:s=u;var v=a.type,x=a.stateNode;if(0===(128&a.flags)&&("function"===typeof v.getDerivedStateFromError||null!==x&&"function"===typeof x.componentDidCatch&&(null===Ks||!Ks.has(x)))){a.flags|=65536,t&=-t,a.lanes|=t,Hi(a,hl(a,s,t));break e}}a=a.return}while(null!==a)}bu(n)}catch(b){t=b,As===n&&null!==n&&(As=n=n.return);continue}break}}function hu(){var e=Es.current;return Es.current=Xa,null===e?Xa:e}function mu(){0!==zs&&3!==zs&&2!==zs||(zs=4),null===Rs||0===(268435455&Ls)&&0===(268435455&Ds)||lu(Rs,Ts)}function gu(e,t){var n=Ps;Ps|=2;var r=hu();for(Rs===e&&Ts===t||(Ws=null,fu(e,t));;)try{yu();break}catch(o){pu(e,o)}if(_i(),Ps=n,Es.current=r,null!==As)throw Error(i(261));return Rs=null,Ts=0,zs}function yu(){for(;null!==As;)xu(As)}function vu(){for(;null!==As&&!Ye();)xu(As)}function xu(e){var t=ks(e.alternate,e,Ns);e.memoizedProps=e.pendingProps,null===t?bu(e):As=t,js.current=null}function bu(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Ql(n,t,Ns)))return void(As=n)}else{if(null!==(n=ql(n,t)))return n.flags&=32767,void(As=n);if(null===e)return zs=6,void(As=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(As=t);As=t=e}while(null!==t);0===zs&&(zs=5)}function wu(e,t,n){var r=xt,o=_s.transition;try{_s.transition=null,xt=1,function(e,t,n,r){do{Su()}while(null!==qs);if(0!==(6&Ps))throw Error(i(327));n=e.finishedWork;var o=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-at(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}(e,a),e===Rs&&(As=Rs=null,Ts=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Qs||(Qs=!0,Ru(tt,(function(){return Su(),null}))),a=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||a){a=_s.transition,_s.transition=null;var l=xt;xt=1;var s=Ps;Ps|=4,js.current=null,function(e,t){if(eo=$t,pr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(w){n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==o&&3!==f.nodeType||(s=l+o),f!==a||0!==r&&3!==f.nodeType||(u=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++c===o&&(s=l),p===a&&++d===r&&(u=l),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(to={focusedElem:e,selectionRange:n},$t=!1,Xl=t;null!==Xl;)if(e=(t=Xl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Xl=e;else for(;null!==Xl;){t=Xl;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,y=m.memoizedState,v=t.stateNode,x=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:nl(t.type,g),y);v.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(i(163))}}catch(w){Cu(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Xl=e;break}Xl=t.return}m=ts,ts=!1}(e,n),gs(n,e),hr(to),$t=!!eo,to=eo=null,e.current=n,vs(n,e,o),Ze(),Ps=s,xt=l,_s.transition=a}else e.current=n;if(Qs&&(Qs=!1,qs=e,Ys=o),a=e.pendingLanes,0===a&&(Ks=null),function(e){if(it&&"function"===typeof it.onCommitFiberRoot)try{it.onCommitFiberRoot(ot,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),ru(e,Ge()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if($s)throw $s=!1,e=Vs,Vs=null,e;0!==(1&Ys)&&0!==e.tag&&Su(),a=e.pendingLanes,0!==(1&a)?e===Gs?Zs++:(Zs=0,Gs=e):Zs=0,Wo()}(e,t,n,r)}finally{_s.transition=o,xt=r}return null}function Su(){if(null!==qs){var e=bt(Ys),t=_s.transition,n=xt;try{if(_s.transition=null,xt=16>e?16:e,null===qs)var r=!1;else{if(e=qs,qs=null,Ys=0,0!==(6&Ps))throw Error(i(331));var o=Ps;for(Ps|=4,Xl=e.current;null!==Xl;){var a=Xl,l=a.child;if(0!==(16&Xl.flags)){var s=a.deletions;if(null!==s){for(var u=0;u<s.length;u++){var c=s[u];for(Xl=c;null!==Xl;){var d=Xl;switch(d.tag){case 0:case 11:case 15:ns(8,d,a)}var f=d.child;if(null!==f)f.return=d,Xl=f;else for(;null!==Xl;){var p=(d=Xl).sibling,h=d.return;if(is(d),d===c){Xl=null;break}if(null!==p){p.return=h,Xl=p;break}Xl=h}}}var m=a.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var y=g.sibling;g.sibling=null,g=y}while(null!==g)}}Xl=a}}if(0!==(2064&a.subtreeFlags)&&null!==l)l.return=a,Xl=l;else e:for(;null!==Xl;){if(0!==(2048&(a=Xl).flags))switch(a.tag){case 0:case 11:case 15:ns(9,a,a.return)}var v=a.sibling;if(null!==v){v.return=a.return,Xl=v;break e}Xl=a.return}}var x=e.current;for(Xl=x;null!==Xl;){var b=(l=Xl).child;if(0!==(2064&l.subtreeFlags)&&null!==b)b.return=l,Xl=b;else e:for(l=x;null!==Xl;){if(0!==(2048&(s=Xl).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(S){Cu(s,s.return,S)}if(s===l){Xl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Xl=w;break e}Xl=s.return}}if(Ps=o,Wo(),it&&"function"===typeof it.onPostCommitFiberRoot)try{it.onPostCommitFiberRoot(ot,e)}catch(S){}r=!0}return r}finally{xt=n,_s.transition=t}}return!1}function ku(e,t,n){e=Bi(e,t=pl(0,t=ul(n,t),1),1),t=eu(),null!==e&&(yt(e,1,t),ru(e,t))}function Cu(e,t,n){if(3===e.tag)ku(e,e,n);else for(;null!==t;){if(3===t.tag){ku(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Ks||!Ks.has(r))){t=Bi(t,e=hl(t,e=ul(n,e),1),1),e=eu(),null!==t&&(yt(t,1,e),ru(t,e));break}}t=t.return}}function Eu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=eu(),e.pingedLanes|=e.suspendedLanes&n,Rs===e&&(Ts&n)===n&&(4===zs||3===zs&&(130023424&Ts)===Ts&&500>Ge()-Us?fu(e,0):Is|=n),ru(e,t)}function ju(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=eu();null!==(e=Fi(e,t))&&(yt(e,t,n),ru(e,n))}function _u(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),ju(e,n)}function Pu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;null!==o&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(i(314))}null!==r&&r.delete(t),ju(e,n)}function Ru(e,t){return Qe(e,t)}function Au(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tu(e,t,n,r){return new Au(e,t,n,r)}function Nu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ou(e,t){var n=e.alternate;return null===n?((n=Tu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zu(e,t,n,r,o,a){var l=2;if(r=e,"function"===typeof e)Nu(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case k:return Fu(n.children,o,a,t);case C:l=8,o|=8;break;case E:return(e=Tu(12,n,t,2|o)).elementType=E,e.lanes=a,e;case R:return(e=Tu(13,n,t,o)).elementType=R,e.lanes=a,e;case A:return(e=Tu(19,n,t,o)).elementType=A,e.lanes=a,e;case O:return Lu(n,o,a,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case j:l=10;break e;case _:l=9;break e;case P:l=11;break e;case T:l=14;break e;case N:l=16,r=null;break e}throw Error(i(130,null==e?e:typeof e,""))}return(t=Tu(l,n,t,o)).elementType=e,t.type=r,t.lanes=a,t}function Fu(e,t,n,r){return(e=Tu(7,e,r,t)).lanes=n,e}function Lu(e,t,n,r){return(e=Tu(22,e,r,t)).elementType=O,e.lanes=n,e.stateNode={isHidden:!1},e}function Du(e,t,n){return(e=Tu(6,e,null,t)).lanes=n,e}function Iu(e,t,n){return(t=Tu(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mu(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Bu(e,t,n,r,o,i,a,l,s){return e=new Mu(e,t,n,l,s),1===t?(t=1,!0===i&&(t|=8)):t=0,i=Tu(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Di(i),e}function Uu(e){if(!e)return Po;e:{if(He(e=e._reactInternals)!==e||1!==e.tag)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oo(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(i(171))}if(1===e.tag){var n=e.type;if(Oo(n))return Lo(e,n,t)}return t}function Hu(e,t,n,r,o,i,a,l,s){return(e=Bu(n,r,!0,e,0,i,0,l,s)).context=Uu(null),n=e.current,(i=Mi(r=eu(),o=tu(n))).callback=void 0!==t&&null!==t?t:null,Bi(n,i,o),e.current.lanes=o,yt(e,o,r),ru(e,r),e}function Wu(e,t,n,r){var o=t.current,i=eu(),a=tu(o);return n=Uu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Mi(i,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Bi(o,t,a))&&(nu(e,o,a,i),Ui(e,o,a)),a}function $u(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Vu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Ku(e,t){Vu(e,t),(e=e.alternate)&&Vu(e,t)}ks=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Ao.current)xl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return xl=!1,function(e,t,n){switch(t.tag){case 3:Rl(t),hi();break;case 5:Xi(t);break;case 1:Oo(t.type)&&Do(t);break;case 4:Zi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;_o(ki,r._currentValue),r._currentValue=o;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(_o(ea,1&ea.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Dl(e,t,n):(_o(ea,1&ea.current),null!==(e=$l(e,t,n))?e.sibling:null);_o(ea,1&ea.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Hl(e,t,n);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),_o(ea,ea.current),r)break;return null;case 22:case 23:return t.lanes=0,Cl(e,t,n)}return $l(e,t,n)}(e,t,n);xl=0!==(131072&e.flags)}else xl=!1,ii&&0!==(1048576&t.flags)&&ei(t,Qo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wl(e,t),e=t.pendingProps;var o=No(t,Ro.current);Ai(t,n),o=ga(null,t,r,e,o,n);var a=ya();return t.flags|=1,"object"===typeof o&&null!==o&&"function"===typeof o.render&&void 0===o.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oo(r)?(a=!0,Do(t)):a=!1,t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,Di(t),o.updater=ol,t.stateNode=o,o._reactInternals=t,sl(t,r,e,n),t=Pl(null,t,r,!0,a,n)):(t.tag=0,ii&&a&&ti(t),bl(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wl(e,t),e=t.pendingProps,r=(o=r._init)(r._payload),t.type=r,o=t.tag=function(e){if("function"===typeof e)return Nu(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===P)return 11;if(e===T)return 14}return 2}(r),e=nl(r,e),o){case 0:t=jl(null,t,r,e,n);break e;case 1:t=_l(null,t,r,e,n);break e;case 11:t=wl(null,t,r,e,n);break e;case 14:t=Sl(null,t,r,nl(r.type,e),n);break e}throw Error(i(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,jl(e,t,r,o=t.elementType===r?o:nl(r,o),n);case 1:return r=t.type,o=t.pendingProps,_l(e,t,r,o=t.elementType===r?o:nl(r,o),n);case 3:e:{if(Rl(t),null===e)throw Error(i(387));r=t.pendingProps,o=(a=t.memoizedState).element,Ii(e,t),Wi(t,r,null,n);var l=t.memoizedState;if(r=l.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=Al(e,t,r,n,o=ul(Error(i(423)),t));break e}if(r!==o){t=Al(e,t,r,n,o=ul(Error(i(424)),t));break e}for(oi=uo(t.stateNode.containerInfo.firstChild),ri=t,ii=!0,ai=null,n=Si(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(hi(),r===o){t=$l(e,t,n);break e}bl(e,t,r,n)}t=t.child}return t;case 5:return Xi(t),null===e&&ci(t),r=t.type,o=t.pendingProps,a=null!==e?e.memoizedProps:null,l=o.children,no(r,o)?l=null:null!==a&&no(r,a)&&(t.flags|=32),El(e,t),bl(e,t,l,n),t.child;case 6:return null===e&&ci(t),null;case 13:return Dl(e,t,n);case 4:return Zi(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wi(t,null,r,n):bl(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,wl(e,t,r,o=t.elementType===r?o:nl(r,o),n);case 7:return bl(e,t,t.pendingProps,n),t.child;case 8:case 12:return bl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,l=o.value,_o(ki,r._currentValue),r._currentValue=l,null!==a)if(lr(a.value,l)){if(a.children===o.children&&!Ao.current){t=$l(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var s=a.dependencies;if(null!==s){l=a.child;for(var u=s.firstContext;null!==u;){if(u.context===r){if(1===a.tag){(u=Mi(-1,n&-n)).tag=2;var c=a.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}a.lanes|=n,null!==(u=a.alternate)&&(u.lanes|=n),Ri(a.return,n,t),s.lanes|=n;break}u=u.next}}else if(10===a.tag)l=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(l=a.return))throw Error(i(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),Ri(l,n,t),l=a.sibling}else l=a.child;if(null!==l)l.return=a;else for(l=a;null!==l;){if(l===t){l=null;break}if(null!==(a=l.sibling)){a.return=l.return,l=a;break}l=l.return}a=l}bl(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Ai(t,n),r=r(o=Ti(o)),t.flags|=1,bl(e,t,r,n),t.child;case 14:return o=nl(r=t.type,t.pendingProps),Sl(e,t,r,o=nl(r.type,o),n);case 15:return kl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:nl(r,o),Wl(e,t),t.tag=1,Oo(r)?(e=!0,Do(t)):e=!1,Ai(t,n),al(t,r,o),sl(t,r,o,n),Pl(null,t,r,!0,e,n);case 19:return Hl(e,t,n);case 22:return Cl(e,t,n)}throw Error(i(156,t.tag))};var Qu="function"===typeof reportError?reportError:function(e){console.error(e)};function qu(e){this._internalRoot=e}function Yu(e){this._internalRoot=e}function Zu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Gu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Xu(){}function Ju(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if("function"===typeof o){var l=o;o=function(){var e=$u(a);l.call(e)}}Wu(t,a,e,o)}else a=function(e,t,n,r,o){if(o){if("function"===typeof r){var i=r;r=function(){var e=$u(a);i.call(e)}}var a=Hu(t,r,e,0,null,!1,0,"",Xu);return e._reactRootContainer=a,e[mo]=a.current,Hr(8===e.nodeType?e.parentNode:e),cu(),a}for(;o=e.lastChild;)e.removeChild(o);if("function"===typeof r){var l=r;r=function(){var e=$u(s);l.call(e)}}var s=Bu(e,0,!1,null,0,!1,0,"",Xu);return e._reactRootContainer=s,e[mo]=s.current,Hr(8===e.nodeType?e.parentNode:e),cu((function(){Wu(t,s,n,r)})),s}(n,t,e,o,r);return $u(a)}Yu.prototype.render=qu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));Wu(e,t,null,null)},Yu.prototype.unmount=qu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cu((function(){Wu(null,e,null,null)})),t[mo]=null}},Yu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ct();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ot.length&&0!==t&&t<Ot[n].priority;n++);Ot.splice(n,0,e),0===n&&Dt(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(vt(t,1|n),ru(t,Ge()),0===(6&Ps)&&(Hs=Ge()+500,Wo()))}break;case 13:cu((function(){var t=Fi(e,1);if(null!==t){var n=eu();nu(t,e,1,n)}})),Ku(e,1)}},St=function(e){if(13===e.tag){var t=Fi(e,134217728);if(null!==t)nu(t,e,134217728,eu());Ku(e,134217728)}},kt=function(e){if(13===e.tag){var t=tu(e),n=Fi(e,t);if(null!==n)nu(n,e,t,eu());Ku(e,t)}},Ct=function(){return xt},Et=function(e,t){var n=xt;try{return xt=e,t()}finally{xt=n}},Se=function(e,t,n){switch(t){case"input":if(X(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=So(r);if(!o)throw Error(i(90));Q(r),X(r,o)}}}break;case"textarea":ie(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Pe=uu,Re=cu;var ec={usingClientEntryPoint:!1,Events:[bo,wo,So,je,_e,uu]},tc={findFiberByHostInstance:xo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nc={bundleType:tc.bundleType,version:tc.version,rendererPackageName:tc.rendererPackageName,rendererConfig:tc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:tc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{ot=rc.inject(nc),it=rc}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ec,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Zu(t))throw Error(i(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:S,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Zu(e))throw Error(i(299));var n=!1,r="",o=Qu;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(o=t.onRecoverableError)),t=Bu(e,1,!1,null,0,n,0,r,o),e[mo]=t.current,Hr(8===e.nodeType?e.parentNode:e),new qu(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=null===(e=Ve(t))?null:e.stateNode},t.flushSync=function(e){return cu(e)},t.hydrate=function(e,t,n){if(!Gu(t))throw Error(i(200));return Ju(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Zu(e))throw Error(i(405));var r=null!=n&&n.hydratedSources||null,o=!1,a="",l=Qu;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(o=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Hu(t,null,e,1,null!=n?n:null,o,0,a,l),e[mo]=t.current,Hr(e),r)for(e=0;e<r.length;e++)o=(o=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Yu(t)},t.render=function(e,t,n){if(!Gu(t))throw Error(i(200));return Ju(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Gu(e))throw Error(i(40));return!!e._reactRootContainer&&(cu((function(){Ju(null,null,e,!1,(function(){e._reactRootContainer=null,e[mo]=null}))})),!0)},t.unstable_batchedUpdates=uu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Gu(n))throw Error(i(200));if(null==e||void 0===e._reactInternals)throw Error(i(38));return Ju(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},4391:(e,t,n)=>{"use strict";var r=n(7950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},7950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(2730)},1153:(e,t,n)=>{"use strict";var r=n(5043),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,i={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,r)&&!s.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:c,props:i,_owner:l.current}}t.Fragment=i,t.jsx=u,t.jsxs=u},4202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function v(){}function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var b=x.prototype=new v;b.constructor=x,m(b,y.prototype),b.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,k={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var o,i={},a=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)S.call(t,o)&&!C.hasOwnProperty(o)&&(i[o]=t[o]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===i[o]&&(i[o]=s[o]);return{$$typeof:n,type:e,key:a,ref:l,props:i,_owner:k.current}}function j(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var _=/\/+/g;function P(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,o,i,a){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return a=a(s=e),e=""===i?"."+P(s,0):i,w(a)?(o="",null!=e&&(o=e.replace(_,"$&/")+"/"),R(a,t,o,"",(function(e){return e}))):null!=a&&(j(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(_,"$&/")+"/")+e)),t.push(a)),1;if(s=0,i=""===i?".":i+":",w(e))for(var u=0;u<e.length;u++){var c=i+P(l=e[u],u);s+=R(l,t,o,c,a)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)s+=R(l=l.value,t,o,c=i+P(l,u++),a);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function A(e,t,n){if(null==e)return e;var r=[],o=0;return R(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},O={transition:null},z={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:O,ReactCurrentOwner:k};function F(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:A,forEach:function(e,t,n){A(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return A(e,(function(){t++})),t},toArray:function(e){return A(e,(function(e){return e}))||[]},only:function(e){if(!j(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=o,t.Profiler=a,t.PureComponent=x,t.StrictMode=i,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z,t.act=F,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),i=e.key,a=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,l=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)S.call(t,u)&&!C.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];o.children=s}return{$$typeof:n,type:e.type,key:i,ref:a,props:o,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=j,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}},t.unstable_act=F,t.useCallback=function(e,t){return N.current.useCallback(e,t)},t.useContext=function(e){return N.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return N.current.useDeferredValue(e)},t.useEffect=function(e,t){return N.current.useEffect(e,t)},t.useId=function(){return N.current.useId()},t.useImperativeHandle=function(e,t,n){return N.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return N.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return N.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return N.current.useMemo(e,t)},t.useReducer=function(e,t,n){return N.current.useReducer(e,t,n)},t.useRef=function(e){return N.current.useRef(e)},t.useState=function(e){return N.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return N.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return N.current.useTransition()},t.version="18.3.1"},5043:(e,t,n)=>{"use strict";e.exports=n(4202)},579:(e,t,n)=>{"use strict";e.exports=n(1153)},7234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(!(0<i(o,t)))break e;e[r]=t,e[n]=o,n=r}}function r(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,a=o>>>1;r<a;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>i(s,n))u<o&&0>i(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else{if(!(u<o&&0>i(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var u=[],c=[],d=1,f=null,p=3,h=!1,m=!1,g=!1,y="function"===typeof setTimeout?setTimeout:null,v="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function b(e){for(var t=r(c);null!==t;){if(null===t.callback)o(c);else{if(!(t.startTime<=e))break;o(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function w(e){if(g=!1,b(e),!m)if(null!==r(u))m=!0,O(S);else{var t=r(c);null!==t&&z(w,t.startTime-e)}}function S(e,n){m=!1,g&&(g=!1,v(j),j=-1),h=!0;var i=p;try{for(b(n),f=r(u);null!==f&&(!(f.expirationTime>n)||e&&!R());){var a=f.callback;if("function"===typeof a){f.callback=null,p=f.priorityLevel;var l=a(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?f.callback=l:f===r(u)&&o(u),b(n)}else o(u);f=r(u)}if(null!==f)var s=!0;else{var d=r(c);null!==d&&z(w,d.startTime-n),s=!1}return s}finally{f=null,p=i,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,C=!1,E=null,j=-1,_=5,P=-1;function R(){return!(t.unstable_now()-P<_)}function A(){if(null!==E){var e=t.unstable_now();P=e;var n=!0;try{n=E(!0,e)}finally{n?k():(C=!1,E=null)}}else C=!1}if("function"===typeof x)k=function(){x(A)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,N=T.port2;T.port1.onmessage=A,k=function(){N.postMessage(null)}}else k=function(){y(A,0)};function O(e){E=e,C||(C=!0,k())}function z(e,n){j=y((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,O(S))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,o,i){var a=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?a+i:a:i=a,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:o,priorityLevel:e,startTime:i,expirationTime:l=i+l,sortIndex:-1},i>a?(e.sortIndex=i,n(c,e),null===r(u)&&e===r(c)&&(g?(v(j),j=-1):g=!0,z(w,i-a))):(e.sortIndex=l,n(u,e),m||h||(m=!0,O(S))),e},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},8853:(e,t,n)=>{"use strict";e.exports=n(7234)},7324:e=>{e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var u=i[s];if(!l(u))return!1;var c=e[u],d=t[u];if(!1===(o=n?n.call(r,c,d,u):void 0)||void 0===o&&c!==d)return!1}return!0}},3895:(e,t,n)=>{"use strict";var r=n(5043);var o="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},i=r.useSyncExternalStore,a=r.useRef,l=r.useEffect,s=r.useMemo,u=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,c){var d=a(null);if(null===d.current){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=s((function(){function e(e){if(!l){if(l=!0,i=e,e=r(e),void 0!==c&&f.hasValue){var t=f.value;if(c(t,e))return a=t}return a=e}if(t=a,o(i,e))return t;var n=r(e);return void 0!==c&&c(t,n)?t:(i=e,a=n)}var i,a,l=!1,s=void 0===n?null:n;return[function(){return e(t())},null===s?void 0:function(){return e(s())}]}),[t,n,r,c]);var p=i(e,d[0],d[1]);return l((function(){f.hasValue=!0,f.value=p}),[p]),u(p),p}},7237:(e,t,n)=>{"use strict";e.exports=n(3895)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var l=2&o&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,n.d(i,a),i}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".8d69e35a.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="superhardtest:";n.l=(r,o,i,a)=>{if(e[r])e[r].push(o);else{var l,s;if(void 0!==i)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){l=d;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+i),l.src=r),e[r]=[o];var f=(t,n)=>{l.onerror=l.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(n))),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/training/",(()=>{var e={792:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise(((n,r)=>o=e[t]=[n,r]));r.push(o[2]=i);var a=n.p+n.u(t),l=new Error;n.l(a,(r=>{if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,o[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,i,a=r[0],l=r[1],s=r[2],u=0;if(a.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(s)s(n)}for(t&&t(r);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0},r=self.webpackChunksuperhardtest=self.webpackChunksuperhardtest||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e,t=n(5043),r=n.t(t,2),o=n(4391),i=n(7950),a=n.t(i,2);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(e||(e={}));const s="popstate";function u(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function c(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function d(e,t){return{usr:e.state,key:e.key,idx:t}}function f(e,t,n,r){return void 0===n&&(n=null),l({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?h(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function p(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function h(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function m(t,n,r,o){void 0===o&&(o={});let{window:i=document.defaultView,v5Compat:a=!1}=o,c=i.history,h=e.Pop,m=null,g=y();function y(){return(c.state||{idx:null}).idx}function v(){h=e.Pop;let t=y(),n=null==t?null:t-g;g=t,m&&m({action:h,location:b.location,delta:n})}function x(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"===typeof e?e:p(e);return n=n.replace(/ $/,"%20"),u(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,c.replaceState(l({},c.state,{idx:g}),""));let b={get action(){return h},get location(){return t(i,c)},listen(e){if(m)throw new Error("A history only accepts one active listener");return i.addEventListener(s,v),m=e,()=>{i.removeEventListener(s,v),m=null}},createHref:e=>n(i,e),createURL:x,encodeLocation(e){let t=x(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(t,n){h=e.Push;let o=f(b.location,t,n);r&&r(o,t),g=y()+1;let l=d(o,g),s=b.createHref(o);try{c.pushState(l,"",s)}catch(u){if(u instanceof DOMException&&"DataCloneError"===u.name)throw u;i.location.assign(s)}a&&m&&m({action:h,location:b.location,delta:1})},replace:function(t,n){h=e.Replace;let o=f(b.location,t,n);r&&r(o,t),g=y();let i=d(o,g),l=b.createHref(o);c.replaceState(i,"",l),a&&m&&m({action:h,location:b.location,delta:0})},go:e=>c.go(e)};return b}var g;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(g||(g={}));const y=new Set(["lazy","caseSensitive","path","id","index","children"]);function v(e,t,n,r){return void 0===n&&(n=[]),void 0===r&&(r={}),e.map(((e,o)=>{let i=[...n,String(o)],a="string"===typeof e.id?e.id:i.join("-");if(u(!0!==e.index||!e.children,"Cannot specify children on an index route"),u(!r[a],'Found a route id collision on id "'+a+"\".  Route id's must be globally unique within Data Router usages"),function(e){return!0===e.index}(e)){let n=l({},e,t(e),{id:a});return r[a]=n,n}{let n=l({},e,t(e),{id:a,children:void 0});return r[a]=n,e.children&&(n.children=v(e.children,t,i,r)),n}}))}function x(e,t,n){return void 0===n&&(n="/"),b(e,t,n,!1)}function b(e,t,n,r){let o=z(("string"===typeof t?h(t):t).pathname||"/",n);if(null==o)return null;let i=w(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let a=null;for(let l=0;null==a&&l<i.length;++l){let e=O(o);a=T(i[l],e,r)}return a}function w(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let o=(e,o,i)=>{let a={relativePath:void 0===i?e.path||"":i,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};a.relativePath.startsWith("/")&&(u(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),a.relativePath=a.relativePath.slice(r.length));let l=M([r,a.relativePath]),s=n.concat(a);e.children&&e.children.length>0&&(u(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),w(e.children,t,s,l)),(null!=e.path||e.index)&&t.push({path:l,score:A(l,e.index),routesMeta:s})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of S(e.path))o(e,t,r);else o(e,t)})),t}function S(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(0===r.length)return o?[i,""]:[i];let a=S(r.join("/")),l=[];return l.push(...a.map((e=>""===e?i:[i,e].join("/")))),o&&l.push(...a),l.map((t=>e.startsWith("/")&&""===t?"/":t))}const k=/^:[\w-]+$/,C=3,E=2,j=1,_=10,P=-2,R=e=>"*"===e;function A(e,t){let n=e.split("/"),r=n.length;return n.some(R)&&(r+=P),t&&(r+=E),n.filter((e=>!R(e))).reduce(((e,t)=>e+(k.test(t)?C:""===t?j:_)),r)}function T(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,o={},i="/",a=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,u="/"===i?t:t.slice(i.length)||"/",c=N({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},u),d=e.route;if(!c&&s&&n&&!r[r.length-1].route.index&&(c=N({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(o,c.params),a.push({params:o,pathname:M([i,c.pathname]),pathnameBase:B(M([i,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(i=M([i,c.pathnameBase]))}return a}function N(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);c("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))");let i=new RegExp(o,t?void 0:"i");return[i,r]}(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:o}=t;if("*"===r){let e=l[n]||"";a=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=o&&!s?void 0:(s||"").replace(/%2F/g,"/"),e}),{}),pathname:i,pathnameBase:a,pattern:e}}function O(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return c(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function z(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function F(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function L(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function D(e,t){let n=L(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function I(e,t,n,r){let o;void 0===r&&(r=!1),"string"===typeof e?o=h(e):(o=l({},e),u(!o.pathname||!o.pathname.includes("?"),F("?","pathname","search",o)),u(!o.pathname||!o.pathname.includes("#"),F("#","pathname","hash",o)),u(!o.search||!o.search.includes("#"),F("#","search","hash",o)));let i,a=""===e||""===o.pathname,s=a?"/":o.pathname;if(null==s)i=n;else{let e=t.length-1;if(!r&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}i=e>=0?t[e]:"/"}let c=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:o=""}="string"===typeof e?h(e):e,i=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:i,search:U(r),hash:H(o)}}(o,i),d=s&&"/"!==s&&s.endsWith("/"),f=(a||"."===s)&&n.endsWith("/");return c.pathname.endsWith("/")||!d&&!f||(c.pathname+="/"),c}const M=e=>e.join("/").replace(/\/\/+/g,"/"),B=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),U=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",H=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;class W{constructor(e,t,n,r){void 0===r&&(r=!1),this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}}function $(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const V=["post","put","patch","delete"],K=new Set(V),Q=["get",...V],q=new Set(Q),Y=new Set([301,302,303,307,308]),Z=new Set([307,308]),G={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},X={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},J={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},ee=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,te=e=>({hasErrorBoundary:Boolean(e.hasErrorBoundary)}),ne="remix-router-transitions";function re(t){const n=t.window?t.window:"undefined"!==typeof window?window:void 0,r="undefined"!==typeof n&&"undefined"!==typeof n.document&&"undefined"!==typeof n.document.createElement,o=!r;let i;if(u(t.routes.length>0,"You must provide a non-empty routes array to createRouter"),t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let e=t.detectErrorBoundary;i=t=>({hasErrorBoundary:e(t)})}else i=te;let a,s,d,p={},h=v(t.routes,i,void 0,p),m=t.basename||"/",y=t.unstable_dataStrategy||fe,w=t.unstable_patchRoutesOnNavigation,S=l({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},t.future),k=null,C=new Set,E=1e3,j=new Set,_=null,P=null,R=null,A=null!=t.hydrationData,T=x(h,t.history.location,m),N=null;if(null==T&&!w){let e=je(404,{pathname:t.history.location.pathname}),{matches:n,route:r}=Ee(h);T=n,N={[r.id]:e}}if(T&&!t.hydrationData){ft(T,h,t.history.location.pathname).active&&(T=null)}if(T)if(T.some((e=>e.route.lazy)))s=!1;else if(T.some((e=>e.route.loader)))if(S.v7_partialHydration){let e=t.hydrationData?t.hydrationData.loaderData:null,n=t.hydrationData?t.hydrationData.errors:null,r=t=>!t.route.loader||("function"!==typeof t.route.loader||!0!==t.route.loader.hydrate)&&(e&&void 0!==e[t.route.id]||n&&void 0!==n[t.route.id]);if(n){let e=T.findIndex((e=>void 0!==n[e.route.id]));s=T.slice(0,e+1).every(r)}else s=T.every(r)}else s=null!=t.hydrationData;else s=!0;else if(s=!1,T=[],S.v7_partialHydration){let e=ft(null,h,t.history.location.pathname);e.active&&e.matches&&(T=e.matches)}let O,F,L={historyAction:t.history.action,location:t.history.location,matches:T,initialized:s,navigation:G,restoreScrollPosition:null==t.hydrationData&&null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||N,fetchers:new Map,blockers:new Map},D=e.Pop,I=!1,M=!1,B=new Map,U=null,H=!1,W=!1,V=[],K=new Set,Q=new Map,q=0,Y=-1,re=new Map,ae=new Set,se=new Map,ue=new Map,ve=new Set,xe=new Map,be=new Map,Pe=new Map;function Oe(e,t){void 0===t&&(t={}),L=l({},L,e);let n=[],r=[];S.v7_fetcherPersist&&L.fetchers.forEach(((e,t)=>{"idle"===e.state&&(ve.has(t)?r.push(t):n.push(t))})),[...C].forEach((e=>e(L,{deletedFetchers:r,unstable_viewTransitionOpts:t.viewTransitionOpts,unstable_flushSync:!0===t.flushSync}))),S.v7_fetcherPersist&&(n.forEach((e=>L.fetchers.delete(e))),r.forEach((e=>Je(e))))}function ze(n,r,o){var i,s;let u,{flushSync:c}=void 0===o?{}:o,d=null!=L.actionData&&null!=L.navigation.formMethod&&Le(L.navigation.formMethod)&&"loading"===L.navigation.state&&!0!==(null==(i=n.state)?void 0:i._isRedirect);u=r.actionData?Object.keys(r.actionData).length>0?r.actionData:null:d?L.actionData:null;let f=r.loaderData?Se(L.loaderData,r.loaderData,r.matches||[],r.errors):L.loaderData,p=L.blockers;p.size>0&&(p=new Map(p),p.forEach(((e,t)=>p.set(t,J))));let m,g=!0===I||null!=L.navigation.formMethod&&Le(L.navigation.formMethod)&&!0!==(null==(s=n.state)?void 0:s._isRedirect);if(a&&(h=a,a=void 0),H||D===e.Pop||(D===e.Push?t.history.push(n,n.state):D===e.Replace&&t.history.replace(n,n.state)),D===e.Pop){let e=B.get(L.location.pathname);e&&e.has(n.pathname)?m={currentLocation:L.location,nextLocation:n}:B.has(n.pathname)&&(m={currentLocation:n,nextLocation:L.location})}else if(M){let e=B.get(L.location.pathname);e?e.add(n.pathname):(e=new Set([n.pathname]),B.set(L.location.pathname,e)),m={currentLocation:L.location,nextLocation:n}}Oe(l({},r,{actionData:u,loaderData:f,historyAction:D,location:n,initialized:!0,navigation:G,revalidation:"idle",restoreScrollPosition:dt(n,r.matches||L.matches),preventScrollReset:g,blockers:p}),{viewTransitionOpts:m,flushSync:!0===c}),D=e.Pop,I=!1,M=!1,H=!1,W=!1,V=[]}async function Fe(n,r,o){O&&O.abort(),O=null,D=n,H=!0===(o&&o.startUninterruptedRevalidation),function(e,t){if(_&&R){let n=ct(e,t);_[n]=R()}}(L.location,L.matches),I=!0===(o&&o.preventScrollReset),M=!0===(o&&o.enableViewTransition);let i=a||h,s=o&&o.overrideNavigation,u=x(i,r,m),c=!0===(o&&o.flushSync),d=ft(u,i,r.pathname);if(d.active&&d.matches&&(u=d.matches),!u){let{error:e,notFoundMatches:t,route:n}=lt(r.pathname);return void ze(r,{matches:t,loaderData:{},errors:{[n.id]:e}},{flushSync:c})}if(L.initialized&&!W&&function(e,t){if(e.pathname!==t.pathname||e.search!==t.search)return!1;if(""===e.hash)return""!==t.hash;if(e.hash===t.hash)return!0;if(""!==t.hash)return!0;return!1}(L.location,r)&&!(o&&o.submission&&Le(o.submission.formMethod)))return void ze(r,{matches:u},{flushSync:c});O=new AbortController;let f,p=ye(t.history,r,O.signal,o&&o.submission);if(o&&o.pendingError)f=[Ce(u).route.id,{type:g.error,error:o.pendingError}];else if(o&&o.submission&&Le(o.submission.formMethod)){let n=await async function(t,n,r,o,i,a){void 0===a&&(a={});Ye();let l,s=function(e,t){let n={state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text};return n}(n,r);if(Oe({navigation:s},{flushSync:!0===a.flushSync}),i){let e=await pt(o,n.pathname,t.signal);if("aborted"===e.type)return{shortCircuited:!0};if("error"===e.type){let{boundaryId:t,error:r}=st(n.pathname,e);return{matches:e.partialMatches,pendingActionResult:[t,{type:g.error,error:r}]}}if(!e.matches){let{notFoundMatches:e,error:t,route:r}=lt(n.pathname);return{matches:e,pendingActionResult:[r.id,{type:g.error,error:t}]}}o=e.matches}let u=Ue(o,n);if(u.route.action||u.route.lazy){if(l=(await Qe("action",L,t,[u],o,null))[u.route.id],t.signal.aborted)return{shortCircuited:!0}}else l={type:g.error,error:je(405,{method:t.method,pathname:n.pathname,routeId:u.route.id})};if(Ne(l)){let e;if(a&&null!=a.replace)e=a.replace;else{e=ge(l.response.headers.get("Location"),new URL(t.url),m)===L.location.pathname+L.location.search}return await Ke(t,l,!0,{submission:r,replace:e}),{shortCircuited:!0}}if(Ae(l))throw je(400,{type:"defer-action"});if(Te(l)){let t=Ce(o,u.route.id);return!0!==(a&&a.replace)&&(D=e.Push),{matches:o,pendingActionResult:[t.route.id,l]}}return{matches:o,pendingActionResult:[u.route.id,l]}}(p,r,o.submission,u,d.active,{replace:o.replace,flushSync:c});if(n.shortCircuited)return;if(n.pendingActionResult){let[e,t]=n.pendingActionResult;if(Te(t)&&$(t.error)&&404===t.error.status)return O=null,void ze(r,{matches:n.matches,loaderData:{},errors:{[e]:t.error}})}u=n.matches||u,f=n.pendingActionResult,s=We(r,o.submission),c=!1,d.active=!1,p=ye(t.history,p.url,p.signal)}let{shortCircuited:y,matches:v,loaderData:b,errors:w}=await async function(e,n,r,o,i,s,u,c,d,f,p){let g=i||We(n,s),y=s||u||He(g),v=!H&&(!S.v7_partialHydration||!d);if(o){if(v){let e=Be(p);Oe(l({navigation:g},void 0!==e?{actionData:e}:{}),{flushSync:f})}let t=await pt(r,n.pathname,e.signal);if("aborted"===t.type)return{shortCircuited:!0};if("error"===t.type){let{boundaryId:e,error:r}=st(n.pathname,t);return{matches:t.partialMatches,loaderData:{},errors:{[e]:r}}}if(!t.matches){let{error:e,notFoundMatches:t,route:r}=lt(n.pathname);return{matches:t,loaderData:{},errors:{[r.id]:e}}}r=t.matches}let x=a||h,[b,w]=le(t.history,L,r,y,n,S.v7_partialHydration&&!0===d,S.v7_skipActionErrorRevalidation,W,V,K,ve,se,ae,x,m,p);if(ut((e=>!(r&&r.some((t=>t.route.id===e)))||b&&b.some((t=>t.route.id===e)))),Y=++q,0===b.length&&0===w.length){let e=nt();return ze(n,l({matches:r,loaderData:{},errors:p&&Te(p[1])?{[p[0]]:p[1].error}:null},ke(p),e?{fetchers:new Map(L.fetchers)}:{}),{flushSync:f}),{shortCircuited:!0}}if(v){let e={};if(!o){e.navigation=g;let t=Be(p);void 0!==t&&(e.actionData=t)}w.length>0&&(e.fetchers=function(e){return e.forEach((e=>{let t=L.fetchers.get(e.key),n=$e(void 0,t?t.data:void 0);L.fetchers.set(e.key,n)})),new Map(L.fetchers)}(w)),Oe(e,{flushSync:f})}w.forEach((e=>{Q.has(e.key)&&et(e.key),e.controller&&Q.set(e.key,e.controller)}));let k=()=>w.forEach((e=>et(e.key)));O&&O.signal.addEventListener("abort",k);let{loaderResults:C,fetcherResults:E}=await qe(L,r,b,w,e);if(e.signal.aborted)return{shortCircuited:!0};O&&O.signal.removeEventListener("abort",k);w.forEach((e=>Q.delete(e.key)));let j=_e(C);if(j)return await Ke(e,j.result,!0,{replace:c}),{shortCircuited:!0};if(j=_e(E),j)return ae.add(j.key),await Ke(e,j.result,!0,{replace:c}),{shortCircuited:!0};let{loaderData:_,errors:P}=we(L,r,b,C,p,w,E,xe);xe.forEach(((e,t)=>{e.subscribe((n=>{(n||e.done)&&xe.delete(t)}))})),S.v7_partialHydration&&d&&L.errors&&Object.entries(L.errors).filter((e=>{let[t]=e;return!b.some((e=>e.route.id===t))})).forEach((e=>{let[t,n]=e;P=Object.assign(P||{},{[t]:n})}));let R=nt(),A=rt(Y),T=R||A||w.length>0;return l({matches:r,loaderData:_,errors:P},T?{fetchers:new Map(L.fetchers)}:{})}(p,r,u,d.active,s,o&&o.submission,o&&o.fetcherSubmission,o&&o.replace,o&&!0===o.initialHydration,c,f);y||(O=null,ze(r,l({matches:v||u},ke(f),{loaderData:b,errors:w})))}function Be(e){return e&&!Te(e[1])?{[e[0]]:e[1].data}:L.actionData?0===Object.keys(L.actionData).length?null:L.actionData:void 0}async function Ke(o,i,a,s){let{submission:c,fetcherSubmission:d,replace:p}=void 0===s?{}:s;i.response.headers.has("X-Remix-Revalidate")&&(W=!0);let h=i.response.headers.get("Location");u(h,"Expected a Location header on the redirect Response"),h=ge(h,new URL(o.url),m);let g=f(L.location,h,{_isRedirect:!0});if(r){let e=!1;if(i.response.headers.has("X-Remix-Reload-Document"))e=!0;else if(ee.test(h)){const r=t.history.createURL(h);e=r.origin!==n.location.origin||null==z(r.pathname,m)}if(e)return void(p?n.location.replace(h):n.location.assign(h))}O=null;let y=!0===p||i.response.headers.has("X-Remix-Replace")?e.Replace:e.Push,{formMethod:v,formAction:x,formEncType:b}=L.navigation;!c&&!d&&v&&x&&b&&(c=He(L.navigation));let w=c||d;if(Z.has(i.response.status)&&w&&Le(w.formMethod))await Fe(y,g,{submission:l({},w,{formAction:h}),preventScrollReset:I,enableViewTransition:a?M:void 0});else{let e=We(g,c);await Fe(y,g,{overrideNavigation:e,fetcherSubmission:d,preventScrollReset:I,enableViewTransition:a?M:void 0})}}async function Qe(e,t,n,r,o,a){let l,s={};try{l=await pe(y,e,t,n,r,o,a,p,i)}catch(u){return r.forEach((e=>{s[e.route.id]={type:g.error,error:u}})),s}for(let[i,c]of Object.entries(l))if(Re(c)){let e=c.result;s[i]={type:g.redirect,response:me(e,n,i,o,m,S.v7_relativeSplatPath)}}else s[i]=await he(c);return s}async function qe(e,n,r,o,i){let a=e.matches,l=Qe("loader",e,i,r,n,null),s=Promise.all(o.map((async n=>{if(n.matches&&n.match&&n.controller){let r=(await Qe("loader",e,ye(t.history,n.path,n.controller.signal),[n.match],n.matches,n.key))[n.match.route.id];return{[n.key]:r}}return Promise.resolve({[n.key]:{type:g.error,error:je(404,{pathname:n.path})}})}))),u=await l,c=(await s).reduce(((e,t)=>Object.assign(e,t)),{});return await Promise.all([De(n,u,i.signal,a,e.loaderData),Ie(n,c,o)]),{loaderResults:u,fetcherResults:c}}function Ye(){W=!0,V.push(...ut()),se.forEach(((e,t)=>{Q.has(t)&&(K.add(t),et(t))}))}function Ze(e,t,n){void 0===n&&(n={}),L.fetchers.set(e,t),Oe({fetchers:new Map(L.fetchers)},{flushSync:!0===(n&&n.flushSync)})}function Ge(e,t,n,r){void 0===r&&(r={});let o=Ce(L.matches,t);Je(e),Oe({errors:{[o.route.id]:n},fetchers:new Map(L.fetchers)},{flushSync:!0===(r&&r.flushSync)})}function Xe(e){return S.v7_fetcherPersist&&(ue.set(e,(ue.get(e)||0)+1),ve.has(e)&&ve.delete(e)),L.fetchers.get(e)||X}function Je(e){let t=L.fetchers.get(e);!Q.has(e)||t&&"loading"===t.state&&re.has(e)||et(e),se.delete(e),re.delete(e),ae.delete(e),ve.delete(e),K.delete(e),L.fetchers.delete(e)}function et(e){let t=Q.get(e);u(t,"Expected fetch controller: "+e),t.abort(),Q.delete(e)}function tt(e){for(let t of e){let e=Ve(Xe(t).data);L.fetchers.set(t,e)}}function nt(){let e=[],t=!1;for(let n of ae){let r=L.fetchers.get(n);u(r,"Expected fetcher: "+n),"loading"===r.state&&(ae.delete(n),e.push(n),t=!0)}return tt(e),t}function rt(e){let t=[];for(let[n,r]of re)if(r<e){let e=L.fetchers.get(n);u(e,"Expected fetcher: "+n),"loading"===e.state&&(et(n),re.delete(n),t.push(n))}return tt(t),t.length>0}function ot(e){L.blockers.delete(e),be.delete(e)}function it(e,t){let n=L.blockers.get(e)||J;u("unblocked"===n.state&&"blocked"===t.state||"blocked"===n.state&&"blocked"===t.state||"blocked"===n.state&&"proceeding"===t.state||"blocked"===n.state&&"unblocked"===t.state||"proceeding"===n.state&&"unblocked"===t.state,"Invalid blocker state transition: "+n.state+" -> "+t.state);let r=new Map(L.blockers);r.set(e,t),Oe({blockers:r})}function at(e){let{currentLocation:t,nextLocation:n,historyAction:r}=e;if(0===be.size)return;be.size>1&&c(!1,"A router only supports one blocker at a time");let o=Array.from(be.entries()),[i,a]=o[o.length-1],l=L.blockers.get(i);return l&&"proceeding"===l.state?void 0:a({currentLocation:t,nextLocation:n,historyAction:r})?i:void 0}function lt(e){let t=je(404,{pathname:e}),n=a||h,{matches:r,route:o}=Ee(n);return ut(),{notFoundMatches:r,route:o,error:t}}function st(e,t){return{boundaryId:Ce(t.partialMatches).route.id,error:je(400,{type:"route-discovery",pathname:e,message:null!=t.error&&"message"in t.error?t.error:String(t.error)})}}function ut(e){let t=[];return xe.forEach(((n,r)=>{e&&!e(r)||(n.cancel(),t.push(r),xe.delete(r))})),t}function ct(e,t){if(P){let n=P(e,t.map((e=>function(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],handle:n.handle}}(e,L.loaderData))));return n||e.key}return e.key}function dt(e,t){if(_){let n=ct(e,t),r=_[n];if("number"===typeof r)return r}return null}function ft(e,t,n){if(w){if(j.has(n))return{active:!1,matches:e};if(!e){return{active:!0,matches:b(t,n,m,!0)||[]}}if(Object.keys(e[0].params).length>0){return{active:!0,matches:b(t,n,m,!0)}}}return{active:!1,matches:null}}async function pt(e,t,n){let r=e;for(;;){let e=null==a,l=a||h;try{await ce(w,t,r,l,p,i,Pe,n)}catch(o){return{type:"error",error:o,partialMatches:r}}finally{e&&(h=[...h])}if(n.aborted)return{type:"aborted"};let s=x(l,t,m);if(s)return ht(t,j),{type:"success",matches:s};let u=b(l,t,m,!0);if(!u||r.length===u.length&&r.every(((e,t)=>e.route.id===u[t].route.id)))return ht(t,j),{type:"success",matches:null};r=u}}function ht(e,t){if(t.size>=E){let e=t.values().next().value;t.delete(e)}t.add(e)}return d={get basename(){return m},get future(){return S},get state(){return L},get routes(){return h},get window(){return n},initialize:function(){if(k=t.history.listen((e=>{let{action:n,location:r,delta:o}=e;if(F)return F(),void(F=void 0);c(0===be.size||null!=o,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let i=at({currentLocation:L.location,nextLocation:r,historyAction:n});if(i&&null!=o){let e=new Promise((e=>{F=e}));return t.history.go(-1*o),void it(i,{state:"blocked",location:r,proceed(){it(i,{state:"proceeding",proceed:void 0,reset:void 0,location:r}),e.then((()=>t.history.go(o)))},reset(){let e=new Map(L.blockers);e.set(i,J),Oe({blockers:e})}})}return Fe(n,r)})),r){!function(e,t){try{let n=e.sessionStorage.getItem(ne);if(n){let e=JSON.parse(n);for(let[n,r]of Object.entries(e||{}))r&&Array.isArray(r)&&t.set(n,new Set(r||[]))}}catch(n){}}(n,B);let e=()=>function(e,t){if(t.size>0){let r={};for(let[e,n]of t)r[e]=[...n];try{e.sessionStorage.setItem(ne,JSON.stringify(r))}catch(n){c(!1,"Failed to save applied view transitions in sessionStorage ("+n+").")}}}(n,B);n.addEventListener("pagehide",e),U=()=>n.removeEventListener("pagehide",e)}return L.initialized||Fe(e.Pop,L.location,{initialHydration:!0}),d},subscribe:function(e){return C.add(e),()=>C.delete(e)},enableScrollRestoration:function(e,t,n){if(_=e,R=t,P=n||null,!A&&L.navigation===G){A=!0;let e=dt(L.location,L.matches);null!=e&&Oe({restoreScrollPosition:e})}return()=>{_=null,R=null,P=null}},navigate:async function n(r,o){if("number"===typeof r)return void t.history.go(r);let i=oe(L.location,L.matches,m,S.v7_prependBasename,r,S.v7_relativeSplatPath,null==o?void 0:o.fromRouteId,null==o?void 0:o.relative),{path:a,submission:s,error:u}=ie(S.v7_normalizeFormMethod,!1,i,o),c=L.location,d=f(L.location,a,o&&o.state);d=l({},d,t.history.encodeLocation(d));let p=o&&null!=o.replace?o.replace:void 0,h=e.Push;!0===p?h=e.Replace:!1===p||null!=s&&Le(s.formMethod)&&s.formAction===L.location.pathname+L.location.search&&(h=e.Replace);let g=o&&"preventScrollReset"in o?!0===o.preventScrollReset:void 0,y=!0===(o&&o.unstable_flushSync),v=at({currentLocation:c,nextLocation:d,historyAction:h});if(!v)return await Fe(h,d,{submission:s,pendingError:u,preventScrollReset:g,replace:o&&o.replace,enableViewTransition:o&&o.unstable_viewTransition,flushSync:y});it(v,{state:"blocked",location:d,proceed(){it(v,{state:"proceeding",proceed:void 0,reset:void 0,location:d}),n(r,o)},reset(){let e=new Map(L.blockers);e.set(v,J),Oe({blockers:e})}})},fetch:function(e,n,r,i){if(o)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Q.has(e)&&et(e);let l=!0===(i&&i.unstable_flushSync),s=a||h,c=oe(L.location,L.matches,m,S.v7_prependBasename,r,S.v7_relativeSplatPath,n,null==i?void 0:i.relative),d=x(s,c,m),f=ft(d,s,c);if(f.active&&f.matches&&(d=f.matches),!d)return void Ge(e,n,je(404,{pathname:c}),{flushSync:l});let{path:p,submission:g,error:y}=ie(S.v7_normalizeFormMethod,!0,c,i);if(y)return void Ge(e,n,y,{flushSync:l});let v=Ue(d,p);I=!0===(i&&i.preventScrollReset),g&&Le(g.formMethod)?async function(e,n,r,o,i,l,s,c){function d(t){if(!t.route.action&&!t.route.lazy){let t=je(405,{method:c.formMethod,pathname:r,routeId:n});return Ge(e,n,t,{flushSync:s}),!0}return!1}if(Ye(),se.delete(e),!l&&d(o))return;let f=L.fetchers.get(e);Ze(e,function(e,t){let n={state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0};return n}(c,f),{flushSync:s});let p=new AbortController,g=ye(t.history,r,p.signal,c);if(l){let t=await pt(i,r,g.signal);if("aborted"===t.type)return;if("error"===t.type){let{error:o}=st(r,t);return void Ge(e,n,o,{flushSync:s})}if(!t.matches)return void Ge(e,n,je(404,{pathname:r}),{flushSync:s});if(d(o=Ue(i=t.matches,r)))return}Q.set(e,p);let y=q,v=await Qe("action",L,g,[o],i,e),b=v[o.route.id];if(g.signal.aborted)return void(Q.get(e)===p&&Q.delete(e));if(S.v7_fetcherPersist&&ve.has(e)){if(Ne(b)||Te(b))return void Ze(e,Ve(void 0))}else{if(Ne(b))return Q.delete(e),Y>y?void Ze(e,Ve(void 0)):(ae.add(e),Ze(e,$e(c)),Ke(g,b,!1,{fetcherSubmission:c}));if(Te(b))return void Ge(e,n,b.error)}if(Ae(b))throw je(400,{type:"defer-action"});let w=L.navigation.location||L.location,k=ye(t.history,w,p.signal),C=a||h,E="idle"!==L.navigation.state?x(C,L.navigation.location,m):L.matches;u(E,"Didn't find any matches after fetcher action");let j=++q;re.set(e,j);let _=$e(c,b.data);L.fetchers.set(e,_);let[P,R]=le(t.history,L,E,c,w,!1,S.v7_skipActionErrorRevalidation,W,V,K,ve,se,ae,C,m,[o.route.id,b]);R.filter((t=>t.key!==e)).forEach((e=>{let t=e.key,n=L.fetchers.get(t),r=$e(void 0,n?n.data:void 0);L.fetchers.set(t,r),Q.has(t)&&et(t),e.controller&&Q.set(t,e.controller)})),Oe({fetchers:new Map(L.fetchers)});let A=()=>R.forEach((e=>et(e.key)));p.signal.addEventListener("abort",A);let{loaderResults:T,fetcherResults:N}=await qe(L,E,P,R,k);if(p.signal.aborted)return;p.signal.removeEventListener("abort",A),re.delete(e),Q.delete(e),R.forEach((e=>Q.delete(e.key)));let z=_e(T);if(z)return Ke(k,z.result,!1);if(z=_e(N),z)return ae.add(z.key),Ke(k,z.result,!1);let{loaderData:F,errors:I}=we(L,E,P,T,void 0,R,N,xe);if(L.fetchers.has(e)){let t=Ve(b.data);L.fetchers.set(e,t)}rt(j),"loading"===L.navigation.state&&j>Y?(u(D,"Expected pending action"),O&&O.abort(),ze(L.navigation.location,{matches:E,loaderData:F,errors:I,fetchers:new Map(L.fetchers)})):(Oe({errors:I,loaderData:Se(L.loaderData,F,E,I),fetchers:new Map(L.fetchers)}),W=!1)}(e,n,p,v,d,f.active,l,g):(se.set(e,{routeId:n,path:p}),async function(e,n,r,o,i,a,l,s){let c=L.fetchers.get(e);Ze(e,$e(s,c?c.data:void 0),{flushSync:l});let d=new AbortController,f=ye(t.history,r,d.signal);if(a){let t=await pt(i,r,f.signal);if("aborted"===t.type)return;if("error"===t.type){let{error:o}=st(r,t);return void Ge(e,n,o,{flushSync:l})}if(!t.matches)return void Ge(e,n,je(404,{pathname:r}),{flushSync:l});o=Ue(i=t.matches,r)}Q.set(e,d);let p=q,h=await Qe("loader",L,f,[o],i,e),m=h[o.route.id];Ae(m)&&(m=await Me(m,f.signal,!0)||m);Q.get(e)===d&&Q.delete(e);if(f.signal.aborted)return;if(ve.has(e))return void Ze(e,Ve(void 0));if(Ne(m))return Y>p?void Ze(e,Ve(void 0)):(ae.add(e),void await Ke(f,m,!1));if(Te(m))return void Ge(e,n,m.error);u(!Ae(m),"Unhandled fetcher deferred data"),Ze(e,Ve(m.data))}(e,n,p,v,d,f.active,l,g))},revalidate:function(){Ye(),Oe({revalidation:"loading"}),"submitting"!==L.navigation.state&&("idle"!==L.navigation.state?Fe(D||L.historyAction,L.navigation.location,{overrideNavigation:L.navigation,enableViewTransition:!0===M}):Fe(L.historyAction,L.location,{startUninterruptedRevalidation:!0}))},createHref:e=>t.history.createHref(e),encodeLocation:e=>t.history.encodeLocation(e),getFetcher:Xe,deleteFetcher:function(e){if(S.v7_fetcherPersist){let t=(ue.get(e)||0)-1;t<=0?(ue.delete(e),ve.add(e)):ue.set(e,t)}else Je(e);Oe({fetchers:new Map(L.fetchers)})},dispose:function(){k&&k(),U&&U(),C.clear(),O&&O.abort(),L.fetchers.forEach(((e,t)=>Je(t))),L.blockers.forEach(((e,t)=>ot(t)))},getBlocker:function(e,t){let n=L.blockers.get(e)||J;return be.get(e)!==t&&be.set(e,t),n},deleteBlocker:ot,patchRoutes:function(e,t){let n=null==a;de(e,t,a||h,p,i),n&&(h=[...h],Oe({}))},_internalFetchControllers:Q,_internalActiveDeferreds:xe,_internalSetRoutes:function(e){p={},a=v(e,i,void 0,p)}},d}Symbol("deferred");function oe(e,t,n,r,o,i,a,l){let s,u;if(a){s=[];for(let e of t)if(s.push(e),e.route.id===a){u=e;break}}else s=t,u=t[t.length-1];let c=I(o||".",D(s,i),z(e.pathname,n)||e.pathname,"path"===l);return null==o&&(c.search=e.search,c.hash=e.hash),null!=o&&""!==o&&"."!==o||!u||!u.route.index||Be(c.search)||(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r&&"/"!==n&&(c.pathname="/"===c.pathname?n:M([n,c.pathname])),p(c)}function ie(e,t,n,r){if(!r||!function(e){return null!=e&&("formData"in e&&null!=e.formData||"body"in e&&void 0!==e.body)}(r))return{path:n};if(r.formMethod&&!Fe(r.formMethod))return{path:n,error:je(405,{method:r.formMethod})};let o,i,a=()=>({path:n,error:je(400,{type:"invalid-body"})}),l=r.formMethod||"get",s=e?l.toUpperCase():l.toLowerCase(),c=Pe(n);if(void 0!==r.body){if("text/plain"===r.formEncType){if(!Le(s))return a();let e="string"===typeof r.body?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce(((e,t)=>{let[n,r]=t;return""+e+n+"="+r+"\n"}),""):String(r.body);return{path:n,submission:{formMethod:s,formAction:c,formEncType:r.formEncType,formData:void 0,json:void 0,text:e}}}if("application/json"===r.formEncType){if(!Le(s))return a();try{let e="string"===typeof r.body?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:s,formAction:c,formEncType:r.formEncType,formData:void 0,json:e,text:void 0}}}catch(m){return a()}}}if(u("function"===typeof FormData,"FormData is not available in this environment"),r.formData)o=ve(r.formData),i=r.formData;else if(r.body instanceof FormData)o=ve(r.body),i=r.body;else if(r.body instanceof URLSearchParams)o=r.body,i=xe(o);else if(null==r.body)o=new URLSearchParams,i=new FormData;else try{o=new URLSearchParams(r.body),i=xe(o)}catch(m){return a()}let d={formMethod:s,formAction:c,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:i,json:void 0,text:void 0};if(Le(d.formMethod))return{path:n,submission:d};let f=h(n);return t&&f.search&&Be(f.search)&&o.append("index",""),f.search="?"+o,{path:p(f),submission:d}}function ae(e,t){let n=e;if(t){let r=e.findIndex((e=>e.route.id===t));r>=0&&(n=e.slice(0,r))}return n}function le(e,t,n,r,o,i,a,s,u,c,d,f,p,h,m,g){let y=g?Te(g[1])?g[1].error:g[1].data:void 0,v=e.createURL(t.location),b=e.createURL(o),w=g&&Te(g[1])?g[0]:void 0,S=w?ae(n,w):n,k=g?g[1].statusCode:void 0,C=a&&k&&k>=400,E=S.filter(((e,n)=>{let{route:o}=e;if(o.lazy)return!0;if(null==o.loader)return!1;if(i)return!("function"===typeof o.loader&&!o.loader.hydrate)||void 0===t.loaderData[o.id]&&(!t.errors||void 0===t.errors[o.id]);if(function(e,t,n){let r=!t||n.route.id!==t.route.id,o=void 0===e[n.route.id];return r||o}(t.loaderData,t.matches[n],e)||u.some((t=>t===e.route.id)))return!0;let a=t.matches[n],c=e;return ue(e,l({currentUrl:v,currentParams:a.params,nextUrl:b,nextParams:c.params},r,{actionResult:y,actionStatus:k,defaultShouldRevalidate:!C&&(s||v.pathname+v.search===b.pathname+b.search||v.search!==b.search||se(a,c))}))})),j=[];return f.forEach(((e,o)=>{if(i||!n.some((t=>t.route.id===e.routeId))||d.has(o))return;let a=x(h,e.path,m);if(!a)return void j.push({key:o,routeId:e.routeId,path:e.path,matches:null,match:null,controller:null});let u=t.fetchers.get(o),f=Ue(a,e.path),g=!1;p.has(o)?g=!1:c.has(o)?(c.delete(o),g=!0):g=u&&"idle"!==u.state&&void 0===u.data?s:ue(f,l({currentUrl:v,currentParams:t.matches[t.matches.length-1].params,nextUrl:b,nextParams:n[n.length-1].params},r,{actionResult:y,actionStatus:k,defaultShouldRevalidate:!C&&s})),g&&j.push({key:o,routeId:e.routeId,path:e.path,matches:a,match:f,controller:new AbortController})})),[E,j]}function se(e,t){let n=e.route.path;return e.pathname!==t.pathname||null!=n&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function ue(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if("boolean"===typeof n)return n}return t.defaultShouldRevalidate}async function ce(e,t,n,r,o,i,a,l){let s=[t,...n.map((e=>e.route.id))].join("-");try{let c=a.get(s);c||(c=e({path:t,matches:n,patch:(e,t)=>{l.aborted||de(e,t,r,o,i)}}),a.set(s,c)),c&&("object"===typeof(u=c)&&null!=u&&"then"in u)&&await c}finally{a.delete(s)}var u}function de(e,t,n,r,o){if(e){var i;let n=r[e];u(n,"No route found to patch children into: routeId = "+e);let a=v(t,o,[e,"patch",String((null==(i=n.children)?void 0:i.length)||"0")],r);n.children?n.children.push(...a):n.children=a}else{let e=v(t,o,["patch",String(n.length||"0")],r);n.push(...e)}}async function fe(e){let{matches:t}=e,n=t.filter((e=>e.shouldLoad)),r=await Promise.all(n.map((e=>e.resolve())));return r.reduce(((e,t,r)=>Object.assign(e,{[n[r].route.id]:t})),{})}async function pe(e,t,n,r,o,i,a,s,d,f){let p=i.map((e=>e.route.lazy?async function(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let o=n[e.id];u(o,"No route found in manifest");let i={};for(let a in r){let e=void 0!==o[a]&&"hasErrorBoundary"!==a;c(!e,'Route "'+o.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. The lazy route property "'+a+'" will be ignored.'),e||y.has(a)||(i[a]=r[a])}Object.assign(o,i),Object.assign(o,l({},t(o),{lazy:void 0}))}(e.route,d,s):void 0)),h=i.map(((e,n)=>{let i=p[n],a=o.some((t=>t.route.id===e.route.id));return l({},e,{shouldLoad:a,resolve:async n=>(n&&"GET"===r.method&&(e.route.lazy||e.route.loader)&&(a=!0),a?async function(e,t,n,r,o,i){let a,l,s=r=>{let a,s=new Promise(((e,t)=>a=t));l=()=>a(),t.signal.addEventListener("abort",l);let u=o=>"function"!==typeof r?Promise.reject(new Error('You cannot call the handler for a route which defines a boolean "'+e+'" [routeId: '+n.route.id+"]")):r({request:t,params:n.params,context:i},...void 0!==o?[o]:[]),c=(async()=>{try{return{type:"data",result:await(o?o((e=>u(e))):u())}}catch(e){return{type:"error",result:e}}})();return Promise.race([c,s])};try{let o=n.route[e];if(r)if(o){let e,[t]=await Promise.all([s(o).catch((t=>{e=t})),r]);if(void 0!==e)throw e;a=t}else{if(await r,o=n.route[e],!o){if("action"===e){let e=new URL(t.url),r=e.pathname+e.search;throw je(405,{method:t.method,pathname:r,routeId:n.route.id})}return{type:g.data,result:void 0}}a=await s(o)}else{if(!o){let e=new URL(t.url);throw je(404,{pathname:e.pathname+e.search})}a=await s(o)}u(void 0!==a.result,"You defined "+("action"===e?"an action":"a loader")+' for route "'+n.route.id+"\" but didn't return anything from your `"+e+"` function. Please return a value or `null`.")}catch(c){return{type:g.error,result:c}}finally{l&&t.signal.removeEventListener("abort",l)}return a}(t,r,e,i,n,f):Promise.resolve({type:g.data,result:void 0}))})})),m=await e({matches:h,request:r,params:i[0].params,fetcherKey:a,context:f});try{await Promise.all(p)}catch(v){}return m}async function he(e){let{result:t,type:n}=e;if(ze(t)){let e;try{let n=t.headers.get("Content-Type");e=n&&/\bapplication\/json\b/.test(n)?null==t.body?null:await t.json():await t.text()}catch(u){return{type:g.error,error:u}}return n===g.error?{type:g.error,error:new W(t.status,t.statusText,e),statusCode:t.status,headers:t.headers}:{type:g.data,data:e,statusCode:t.status,headers:t.headers}}if(n===g.error){if(Oe(t)){var r,o;if(t.data instanceof Error)return{type:g.error,error:t.data,statusCode:null==(o=t.init)?void 0:o.status};t=new W((null==(r=t.init)?void 0:r.status)||500,void 0,t.data)}return{type:g.error,error:t,statusCode:$(t)?t.status:void 0}}var i,a,l,s;return function(e){let t=e;return t&&"object"===typeof t&&"object"===typeof t.data&&"function"===typeof t.subscribe&&"function"===typeof t.cancel&&"function"===typeof t.resolveData}(t)?{type:g.deferred,deferredData:t,statusCode:null==(i=t.init)?void 0:i.status,headers:(null==(a=t.init)?void 0:a.headers)&&new Headers(t.init.headers)}:Oe(t)?{type:g.data,data:t.data,statusCode:null==(l=t.init)?void 0:l.status,headers:null!=(s=t.init)&&s.headers?new Headers(t.init.headers):void 0}:{type:g.data,data:t}}function me(e,t,n,r,o,i){let a=e.headers.get("Location");if(u(a,"Redirects returned/thrown from loaders/actions must have a Location header"),!ee.test(a)){let l=r.slice(0,r.findIndex((e=>e.route.id===n))+1);a=oe(new URL(t.url),l,o,!0,a,i),e.headers.set("Location",a)}return e}function ge(e,t,n){if(ee.test(e)){let r=e,o=r.startsWith("//")?new URL(t.protocol+r):new URL(r),i=null!=z(o.pathname,n);if(o.origin===t.origin&&i)return o.pathname+o.search+o.hash}return e}function ye(e,t,n,r){let o=e.createURL(Pe(t)).toString(),i={signal:n};if(r&&Le(r.formMethod)){let{formMethod:e,formEncType:t}=r;i.method=e.toUpperCase(),"application/json"===t?(i.headers=new Headers({"Content-Type":t}),i.body=JSON.stringify(r.json)):"text/plain"===t?i.body=r.text:"application/x-www-form-urlencoded"===t&&r.formData?i.body=ve(r.formData):i.body=r.formData}return new Request(o,i)}function ve(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,"string"===typeof r?r:r.name);return t}function xe(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function be(e,t,n,r,o){let i,a={},l=null,s=!1,c={},d=n&&Te(n[1])?n[1].error:void 0;return e.forEach((n=>{if(!(n.route.id in t))return;let f=n.route.id,p=t[f];if(u(!Ne(p),"Cannot handle redirect results in processLoaderData"),Te(p)){let t=p.error;if(void 0!==d&&(t=d,d=void 0),l=l||{},o)l[f]=t;else{let n=Ce(e,f);null==l[n.route.id]&&(l[n.route.id]=t)}a[f]=void 0,s||(s=!0,i=$(p.error)?p.error.status:500),p.headers&&(c[f]=p.headers)}else Ae(p)?(r.set(f,p.deferredData),a[f]=p.deferredData.data,null==p.statusCode||200===p.statusCode||s||(i=p.statusCode),p.headers&&(c[f]=p.headers)):(a[f]=p.data,p.statusCode&&200!==p.statusCode&&!s&&(i=p.statusCode),p.headers&&(c[f]=p.headers))})),void 0!==d&&n&&(l={[n[0]]:d},a[n[0]]=void 0),{loaderData:a,errors:l,statusCode:i||200,loaderHeaders:c}}function we(e,t,n,r,o,i,a,s){let{loaderData:c,errors:d}=be(t,r,o,s,!1);return i.forEach((t=>{let{key:n,match:r,controller:o}=t,i=a[n];if(u(i,"Did not find corresponding fetcher result"),!o||!o.signal.aborted)if(Te(i)){let t=Ce(e.matches,null==r?void 0:r.route.id);d&&d[t.route.id]||(d=l({},d,{[t.route.id]:i.error})),e.fetchers.delete(n)}else if(Ne(i))u(!1,"Unhandled fetcher revalidation redirect");else if(Ae(i))u(!1,"Unhandled fetcher deferred data");else{let t=Ve(i.data);e.fetchers.set(n,t)}})),{loaderData:c,errors:d}}function Se(e,t,n,r){let o=l({},t);for(let i of n){let n=i.route.id;if(t.hasOwnProperty(n)?void 0!==t[n]&&(o[n]=t[n]):void 0!==e[n]&&i.route.loader&&(o[n]=e[n]),r&&r.hasOwnProperty(n))break}return o}function ke(e){return e?Te(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Ce(e,t){let n=t?e.slice(0,e.findIndex((e=>e.route.id===t))+1):[...e];return n.reverse().find((e=>!0===e.route.hasErrorBoundary))||e[0]}function Ee(e){let t=1===e.length?e[0]:e.find((e=>e.index||!e.path||"/"===e.path))||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function je(e,t){let{pathname:n,routeId:r,method:o,type:i,message:a}=void 0===t?{}:t,l="Unknown Server Error",s="Unknown @remix-run/router error";return 400===e?(l="Bad Request","route-discovery"===i?s='Unable to match URL "'+n+'" - the `unstable_patchRoutesOnNavigation()` function threw the following error:\n'+a:o&&n&&r?s="You made a "+o+' request to "'+n+'" but did not provide a `loader` for route "'+r+'", so there is no way to handle the request.':"defer-action"===i?s="defer() is not supported in actions":"invalid-body"===i&&(s="Unable to encode submission body")):403===e?(l="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):404===e?(l="Not Found",s='No route matches URL "'+n+'"'):405===e&&(l="Method Not Allowed",o&&n&&r?s="You made a "+o.toUpperCase()+' request to "'+n+'" but did not provide an `action` for route "'+r+'", so there is no way to handle the request.':o&&(s='Invalid request method "'+o.toUpperCase()+'"')),new W(e||500,l,new Error(s),!0)}function _e(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[e,r]=t[n];if(Ne(r))return{key:e,result:r}}}function Pe(e){return p(l({},"string"===typeof e?h(e):e,{hash:""}))}function Re(e){return ze(e.result)&&Y.has(e.result.status)}function Ae(e){return e.type===g.deferred}function Te(e){return e.type===g.error}function Ne(e){return(e&&e.type)===g.redirect}function Oe(e){return"object"===typeof e&&null!=e&&"type"in e&&"data"in e&&"init"in e&&"DataWithResponseInit"===e.type}function ze(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"object"===typeof e.headers&&"undefined"!==typeof e.body}function Fe(e){return q.has(e.toLowerCase())}function Le(e){return K.has(e.toLowerCase())}async function De(e,t,n,r,o){let i=Object.entries(t);for(let a=0;a<i.length;a++){let[l,s]=i[a],u=e.find((e=>(null==e?void 0:e.route.id)===l));if(!u)continue;let c=r.find((e=>e.route.id===u.route.id)),d=null!=c&&!se(c,u)&&void 0!==(o&&o[u.route.id]);Ae(s)&&d&&await Me(s,n,!1).then((e=>{e&&(t[l]=e)}))}}async function Ie(e,t,n){for(let r=0;r<n.length;r++){let{key:o,routeId:i,controller:a}=n[r],l=t[o],s=e.find((e=>(null==e?void 0:e.route.id)===i));s&&(Ae(l)&&(u(a,"Expected an AbortController for revalidating fetcher deferred result"),await Me(l,a.signal,!0).then((e=>{e&&(t[o]=e)}))))}}async function Me(e,t,n){if(void 0===n&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:g.data,data:e.deferredData.unwrappedData}}catch(r){return{type:g.error,error:r}}return{type:g.data,data:e.deferredData.data}}}function Be(e){return new URLSearchParams(e).getAll("index").some((e=>""===e))}function Ue(e,t){let n="string"===typeof t?h(t).search:t.search;if(e[e.length-1].route.index&&Be(n||""))return e[e.length-1];let r=L(e);return r[r.length-1]}function He(e){let{formMethod:t,formAction:n,formEncType:r,text:o,formData:i,json:a}=e;if(t&&n&&r)return null!=o?{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:o}:null!=i?{formMethod:t,formAction:n,formEncType:r,formData:i,json:void 0,text:void 0}:void 0!==a?{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:a,text:void 0}:void 0}function We(e,t){if(t){return{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}return{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function $e(e,t){if(e){return{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}}return{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Ve(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Ke(){return Ke=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ke.apply(this,arguments)}const Qe=t.createContext(null);const qe=t.createContext(null);const Ye=t.createContext(null);const Ze=t.createContext(null);const Ge=t.createContext({outlet:null,matches:[],isDataRoute:!1});const Xe=t.createContext(null);function Je(){return null!=t.useContext(Ze)}function et(){return Je()||u(!1),t.useContext(Ze).location}function tt(e){t.useContext(Ye).static||t.useLayoutEffect(e)}function nt(){let{isDataRoute:e}=t.useContext(Ge);return e?function(){let{router:e}=pt(dt.UseNavigateStable),n=mt(ft.UseNavigateStable),r=t.useRef(!1);tt((()=>{r.current=!0}));let o=t.useCallback((function(t,o){void 0===o&&(o={}),r.current&&("number"===typeof t?e.navigate(t):e.navigate(t,Ke({fromRouteId:n},o)))}),[e,n]);return o}():function(){Je()||u(!1);let e=t.useContext(Qe),{basename:n,future:r,navigator:o}=t.useContext(Ye),{matches:i}=t.useContext(Ge),{pathname:a}=et(),l=JSON.stringify(D(i,r.v7_relativeSplatPath)),s=t.useRef(!1);return tt((()=>{s.current=!0})),t.useCallback((function(t,r){if(void 0===r&&(r={}),!s.current)return;if("number"===typeof t)return void o.go(t);let i=I(t,JSON.parse(l),a,"path"===r.relative);null==e&&"/"!==n&&(i.pathname="/"===i.pathname?n:M([n,i.pathname])),(r.replace?o.replace:o.push)(i,r.state,r)}),[n,o,l,a,e])}()}const rt=t.createContext(null);function ot(e,n){let{relative:r}=void 0===n?{}:n,{future:o}=t.useContext(Ye),{matches:i}=t.useContext(Ge),{pathname:a}=et(),l=JSON.stringify(D(i,o.v7_relativeSplatPath));return t.useMemo((()=>I(e,JSON.parse(l),a,"path"===r)),[e,l,a,r])}function it(n,r,o,i){Je()||u(!1);let{navigator:a}=t.useContext(Ye),{matches:l}=t.useContext(Ge),s=l[l.length-1],c=s?s.params:{},d=(s&&s.pathname,s?s.pathnameBase:"/");s&&s.route;let f,p=et();if(r){var m;let e="string"===typeof r?h(r):r;"/"===d||(null==(m=e.pathname)?void 0:m.startsWith(d))||u(!1),f=e}else f=p;let g=f.pathname||"/",y=g;if("/"!==d){let e=d.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(e.length).join("/")}let v=x(n,{pathname:y});let b=ct(v&&v.map((e=>Object.assign({},e,{params:Object.assign({},c,e.params),pathname:M([d,a.encodeLocation?a.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:M([d,a.encodeLocation?a.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),l,o,i);return r&&b?t.createElement(Ze.Provider,{value:{location:Ke({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:e.Pop}},b):b}function at(){let e=gt(),n=$(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:o};return t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},n),r?t.createElement("pre",{style:i},r):null,null)}const lt=t.createElement(at,null);class st extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement(Ge.Provider,{value:this.props.routeContext},t.createElement(Xe.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ut(e){let{routeContext:n,match:r,children:o}=e,i=t.useContext(Qe);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),t.createElement(Ge.Provider,{value:n},o)}function ct(e,n,r,o){var i;if(void 0===n&&(n=[]),void 0===r&&(r=null),void 0===o&&(o=null),null==e){var a;if(!r)return null;if(r.errors)e=r.matches;else{if(!(null!=(a=o)&&a.v7_partialHydration&&0===n.length&&!r.initialized&&r.matches.length>0))return null;e=r.matches}}let l=e,s=null==(i=r)?void 0:i.errors;if(null!=s){let e=l.findIndex((e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id])));e>=0||u(!1),l=l.slice(0,Math.min(l.length,e+1))}let c=!1,d=-1;if(r&&o&&o.v7_partialHydration)for(let t=0;t<l.length;t++){let e=l[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=t),e.route.id){let{loaderData:t,errors:n}=r,o=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||o){c=!0,l=d>=0?l.slice(0,d+1):[l[0]];break}}}return l.reduceRight(((e,o,i)=>{let a,u=!1,f=null,p=null;var h;r&&(a=s&&o.route.id?s[o.route.id]:void 0,f=o.route.errorElement||lt,c&&(d<0&&0===i?(h="route-fallback",!1||yt[h]||(yt[h]=!0),u=!0,p=null):d===i&&(u=!0,p=o.route.hydrateFallbackElement||null)));let m=n.concat(l.slice(0,i+1)),g=()=>{let n;return n=a?f:u?p:o.route.Component?t.createElement(o.route.Component,null):o.route.element?o.route.element:e,t.createElement(ut,{match:o,routeContext:{outlet:e,matches:m,isDataRoute:null!=r},children:n})};return r&&(o.route.ErrorBoundary||o.route.errorElement||0===i)?t.createElement(st,{location:r.location,revalidation:r.revalidation,component:f,error:a,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()}),null)}var dt=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(dt||{}),ft=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ft||{});function pt(e){let n=t.useContext(Qe);return n||u(!1),n}function ht(e){let n=t.useContext(qe);return n||u(!1),n}function mt(e){let n=function(){let e=t.useContext(Ge);return e||u(!1),e}(),r=n.matches[n.matches.length-1];return r.route.id||u(!1),r.route.id}function gt(){var e;let n=t.useContext(Xe),r=ht(ft.UseRouteError),o=mt(ft.UseRouteError);return void 0!==n?n:null==(e=r.errors)?void 0:e[o]}const yt={};r.startTransition;function vt(e){return function(e){let n=t.useContext(Ge).outlet;return n?t.createElement(rt.Provider,{value:e},n):n}(e.context)}function xt(n){let{basename:r="/",children:o=null,location:i,navigationType:a=e.Pop,navigator:l,static:s=!1,future:c}=n;Je()&&u(!1);let d=r.replace(/^\/*/,"/"),f=t.useMemo((()=>({basename:d,navigator:l,static:s,future:Ke({v7_relativeSplatPath:!1},c)})),[d,c,l,s]);"string"===typeof i&&(i=h(i));let{pathname:p="/",search:m="",hash:g="",state:y=null,key:v="default"}=i,x=t.useMemo((()=>{let e=z(p,d);return null==e?null:{location:{pathname:e,search:m,hash:g,state:y,key:v},navigationType:a}}),[d,p,m,g,y,v,a]);return null==x?null:t.createElement(Ye.Provider,{value:f},t.createElement(Ze.Provider,{children:o,value:x}))}new Promise((()=>{}));t.Component;function bt(e){let n={hasErrorBoundary:null!=e.ErrorBoundary||null!=e.errorElement};return e.Component&&Object.assign(n,{element:t.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(n,{hydrateFallbackElement:t.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(n,{errorElement:t.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),n}function wt(){return wt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wt.apply(this,arguments)}function St(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const kt=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];try{window.__reactRouterVersion="6"}catch(Qd){}function Ct(){var e;let t=null==(e=window)?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=wt({},t,{errors:Et(t.errors)})),t}function Et(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,o]of t)if(o&&"RouteErrorResponse"===o.__type)n[r]=new W(o.status,o.statusText,o.data,!0===o.internal);else if(o&&"Error"===o.__type){if(o.__subType){let e=window[o.__subType];if("function"===typeof e)try{let t=new e(o.message);t.stack="",n[r]=t}catch(Qd){}}if(null==n[r]){let e=new Error(o.message);e.stack="",n[r]=e}}else n[r]=o;return n}const jt=t.createContext({isTransitioning:!1});const _t=t.createContext(new Map);const Pt=r.startTransition,Rt=a.flushSync;r.useId;function At(e){Rt?Rt(e):e()}class Tt{constructor(){this.status="pending",this.promise=new Promise(((e,t)=>{this.resolve=t=>{"pending"===this.status&&(this.status="resolved",e(t))},this.reject=e=>{"pending"===this.status&&(this.status="rejected",t(e))}}))}}function Nt(e){let{fallbackElement:n,router:r,future:o}=e,[i,a]=t.useState(r.state),[l,s]=t.useState(),[u,c]=t.useState({isTransitioning:!1}),[d,f]=t.useState(),[p,h]=t.useState(),[m,g]=t.useState(),y=t.useRef(new Map),{v7_startTransition:v}=o||{},x=t.useCallback((e=>{v?function(e){Pt?Pt(e):e()}(e):e()}),[v]),b=t.useCallback(((e,t)=>{let{deletedFetchers:n,unstable_flushSync:o,unstable_viewTransitionOpts:i}=t;n.forEach((e=>y.current.delete(e))),e.fetchers.forEach(((e,t)=>{void 0!==e.data&&y.current.set(t,e.data)}));let l=null==r.window||null==r.window.document||"function"!==typeof r.window.document.startViewTransition;if(i&&!l){if(o){At((()=>{p&&(d&&d.resolve(),p.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:i.currentLocation,nextLocation:i.nextLocation})}));let t=r.window.document.startViewTransition((()=>{At((()=>a(e)))}));return t.finished.finally((()=>{At((()=>{f(void 0),h(void 0),s(void 0),c({isTransitioning:!1})}))})),void At((()=>h(t)))}p?(d&&d.resolve(),p.skipTransition(),g({state:e,currentLocation:i.currentLocation,nextLocation:i.nextLocation})):(s(e),c({isTransitioning:!0,flushSync:!1,currentLocation:i.currentLocation,nextLocation:i.nextLocation}))}else o?At((()=>a(e))):x((()=>a(e)))}),[r.window,p,d,y,x]);t.useLayoutEffect((()=>r.subscribe(b)),[r,b]),t.useEffect((()=>{u.isTransitioning&&!u.flushSync&&f(new Tt)}),[u]),t.useEffect((()=>{if(d&&l&&r.window){let e=l,t=d.promise,n=r.window.document.startViewTransition((async()=>{x((()=>a(e))),await t}));n.finished.finally((()=>{f(void 0),h(void 0),s(void 0),c({isTransitioning:!1})})),h(n)}}),[x,l,d,r.window]),t.useEffect((()=>{d&&l&&i.location.key===l.location.key&&d.resolve()}),[d,p,i.location,l]),t.useEffect((()=>{!u.isTransitioning&&m&&(s(m.state),c({isTransitioning:!0,flushSync:!1,currentLocation:m.currentLocation,nextLocation:m.nextLocation}),g(void 0))}),[u.isTransitioning,m]),t.useEffect((()=>{}),[]);let w=t.useMemo((()=>({createHref:r.createHref,encodeLocation:r.encodeLocation,go:e=>r.navigate(e),push:(e,t,n)=>r.navigate(e,{state:t,preventScrollReset:null==n?void 0:n.preventScrollReset}),replace:(e,t,n)=>r.navigate(e,{replace:!0,state:t,preventScrollReset:null==n?void 0:n.preventScrollReset})})),[r]),S=r.basename||"/",k=t.useMemo((()=>({router:r,navigator:w,static:!1,basename:S})),[r,w,S]),C=t.useMemo((()=>({v7_relativeSplatPath:r.future.v7_relativeSplatPath})),[r.future.v7_relativeSplatPath]);return t.createElement(t.Fragment,null,t.createElement(Qe.Provider,{value:k},t.createElement(qe.Provider,{value:i},t.createElement(_t.Provider,{value:y.current},t.createElement(jt.Provider,{value:u},t.createElement(xt,{basename:S,location:i.location,navigationType:i.historyAction,navigator:w,future:C},i.initialized||r.future.v7_partialHydration?t.createElement(Ot,{routes:r.routes,future:r.future,state:i}):n))))),null)}const Ot=t.memo(zt);function zt(e){let{routes:t,future:n,state:r}=e;return it(t,void 0,r,n)}const Ft="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,Lt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Dt=t.forwardRef((function(e,n){let r,{onClick:o,relative:i,reloadDocument:a,replace:l,state:s,target:c,to:d,preventScrollReset:f,unstable_viewTransition:h}=e,m=St(e,kt),{basename:g}=t.useContext(Ye),y=!1;if("string"===typeof d&&Lt.test(d)&&(r=d,Ft))try{let e=new URL(window.location.href),t=d.startsWith("//")?new URL(e.protocol+d):new URL(d),n=z(t.pathname,g);t.origin===e.origin&&null!=n?d=n+t.search+t.hash:y=!0}catch(Qd){}let v=function(e,n){let{relative:r}=void 0===n?{}:n;Je()||u(!1);let{basename:o,navigator:i}=t.useContext(Ye),{hash:a,pathname:l,search:s}=ot(e,{relative:r}),c=l;return"/"!==o&&(c="/"===l?o:M([o,l])),i.createHref({pathname:c,search:s,hash:a})}(d,{relative:i}),x=function(e,n){let{target:r,replace:o,state:i,preventScrollReset:a,relative:l,unstable_viewTransition:s}=void 0===n?{}:n,u=nt(),c=et(),d=ot(e,{relative:l});return t.useCallback((t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,r)){t.preventDefault();let n=void 0!==o?o:p(c)===p(d);u(e,{replace:n,state:i,preventScrollReset:a,relative:l,unstable_viewTransition:s})}}),[c,u,d,o,i,r,e,a,l,s])}(d,{replace:l,state:s,target:c,preventScrollReset:f,relative:i,unstable_viewTransition:h});return t.createElement("a",wt({},m,{href:r||v,onClick:y||a?o:function(e){o&&o(e),e.defaultPrevented||x(e)},ref:n,target:c}))}));var It,Mt;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(It||(It={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Mt||(Mt={}));var Bt,Ut;function Ht(){return Ht=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ht.apply(null,arguments)}function Wt(e,n){let{title:r,titleId:o,...i}=e;return t.createElement("svg",Ht({width:26,height:26,viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":o},i),r?t.createElement("title",{id:o},r):null,Bt||(Bt=t.createElement("path",{d:"M11.5 20C16.1944 20 20 16.1944 20 11.5C20 6.80558 16.1944 3 11.5 3C6.80558 3 3 6.80558 3 11.5C3 16.1944 6.80558 20 11.5 20Z",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Ut||(Ut=t.createElement("path",{d:"M23 23L18 18",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}const $t=t.forwardRef(Wt);n.p;var Vt=function(){return Vt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Vt.apply(this,arguments)};Object.create;function Kt(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var Qt=n(7324),qt=n.n(Qt),Yt="-ms-",Zt="-moz-",Gt="-webkit-",Xt="comm",Jt="rule",en="decl",tn="@import",nn="@keyframes",rn="@layer",on=Math.abs,an=String.fromCharCode,ln=Object.assign;function sn(e){return e.trim()}function un(e,t){return(e=t.exec(e))?e[0]:e}function cn(e,t,n){return e.replace(t,n)}function dn(e,t,n){return e.indexOf(t,n)}function fn(e,t){return 0|e.charCodeAt(t)}function pn(e,t,n){return e.slice(t,n)}function hn(e){return e.length}function mn(e){return e.length}function gn(e,t){return t.push(e),e}function yn(e,t){return e.filter((function(e){return!un(e,t)}))}var vn=1,xn=1,bn=0,wn=0,Sn=0,kn="";function Cn(e,t,n,r,o,i,a,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:vn,column:xn,length:a,return:"",siblings:l}}function En(e,t){return ln(Cn("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function jn(e){for(;e.root;)e=En(e.root,{children:[e]});gn(e,e.siblings)}function _n(){return Sn=wn>0?fn(kn,--wn):0,xn--,10===Sn&&(xn=1,vn--),Sn}function Pn(){return Sn=wn<bn?fn(kn,wn++):0,xn++,10===Sn&&(xn=1,vn++),Sn}function Rn(){return fn(kn,wn)}function An(){return wn}function Tn(e,t){return pn(kn,e,t)}function Nn(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function On(e){return vn=xn=1,bn=hn(kn=e),wn=0,[]}function zn(e){return kn="",e}function Fn(e){return sn(Tn(wn-1,In(91===e?e+2:40===e?e+1:e)))}function Ln(e){for(;(Sn=Rn())&&Sn<33;)Pn();return Nn(e)>2||Nn(Sn)>3?"":" "}function Dn(e,t){for(;--t&&Pn()&&!(Sn<48||Sn>102||Sn>57&&Sn<65||Sn>70&&Sn<97););return Tn(e,An()+(t<6&&32==Rn()&&32==Pn()))}function In(e){for(;Pn();)switch(Sn){case e:return wn;case 34:case 39:34!==e&&39!==e&&In(Sn);break;case 40:41===e&&In(e);break;case 92:Pn()}return wn}function Mn(e,t){for(;Pn()&&e+Sn!==57&&(e+Sn!==84||47!==Rn()););return"/*"+Tn(t,wn-1)+"*"+an(47===e?e:Pn())}function Bn(e){for(;!Nn(Rn());)Pn();return Tn(e,wn)}function Un(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Hn(e,t,n,r){switch(e.type){case rn:if(e.children.length)break;case tn:case en:return e.return=e.return||e.value;case Xt:return"";case nn:return e.return=e.value+"{"+Un(e.children,r)+"}";case Jt:if(!hn(e.value=e.props.join(",")))return""}return hn(n=Un(e.children,r))?e.return=e.value+"{"+n+"}":""}function Wn(e,t,n){switch(function(e,t){return 45^fn(e,0)?(((t<<2^fn(e,0))<<2^fn(e,1))<<2^fn(e,2))<<2^fn(e,3):0}(e,t)){case 5103:return Gt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Gt+e+e;case 4789:return Zt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Gt+e+Zt+e+Yt+e+e;case 5936:switch(fn(e,t+11)){case 114:return Gt+e+Yt+cn(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Gt+e+Yt+cn(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Gt+e+Yt+cn(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Gt+e+Yt+e+e;case 6165:return Gt+e+Yt+"flex-"+e+e;case 5187:return Gt+e+cn(e,/(\w+).+(:[^]+)/,Gt+"box-$1$2"+Yt+"flex-$1$2")+e;case 5443:return Gt+e+Yt+"flex-item-"+cn(e,/flex-|-self/g,"")+(un(e,/flex-|baseline/)?"":Yt+"grid-row-"+cn(e,/flex-|-self/g,""))+e;case 4675:return Gt+e+Yt+"flex-line-pack"+cn(e,/align-content|flex-|-self/g,"")+e;case 5548:return Gt+e+Yt+cn(e,"shrink","negative")+e;case 5292:return Gt+e+Yt+cn(e,"basis","preferred-size")+e;case 6060:return Gt+"box-"+cn(e,"-grow","")+Gt+e+Yt+cn(e,"grow","positive")+e;case 4554:return Gt+cn(e,/([^-])(transform)/g,"$1"+Gt+"$2")+e;case 6187:return cn(cn(cn(e,/(zoom-|grab)/,Gt+"$1"),/(image-set)/,Gt+"$1"),e,"")+e;case 5495:case 3959:return cn(e,/(image-set\([^]*)/,Gt+"$1$`$1");case 4968:return cn(cn(e,/(.+:)(flex-)?(.*)/,Gt+"box-pack:$3"+Yt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Gt+e+e;case 4200:if(!un(e,/flex-|baseline/))return Yt+"grid-column-align"+pn(e,t)+e;break;case 2592:case 3360:return Yt+cn(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,un(e.props,/grid-\w+-end/)}))?~dn(e+(n=n[t].value),"span",0)?e:Yt+cn(e,"-start","")+e+Yt+"grid-row-span:"+(~dn(n,"span",0)?un(n,/\d+/):+un(n,/\d+/)-+un(e,/\d+/))+";":Yt+cn(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return un(e.props,/grid-\w+-start/)}))?e:Yt+cn(cn(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return cn(e,/(.+)-inline(.+)/,Gt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(hn(e)-1-t>6)switch(fn(e,t+1)){case 109:if(45!==fn(e,t+4))break;case 102:return cn(e,/(.+:)(.+)-([^]+)/,"$1"+Gt+"$2-$3$1"+Zt+(108==fn(e,t+3)?"$3":"$2-$3"))+e;case 115:return~dn(e,"stretch",0)?Wn(cn(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return cn(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,o,i,a,l){return Yt+n+":"+r+l+(o?Yt+n+"-span:"+(i?a:+a-+r)+l:"")+e}));case 4949:if(121===fn(e,t+6))return cn(e,":",":"+Gt)+e;break;case 6444:switch(fn(e,45===fn(e,14)?18:11)){case 120:return cn(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Gt+(45===fn(e,14)?"inline-":"")+"box$3$1"+Gt+"$2$3$1"+Yt+"$2box$3")+e;case 100:return cn(e,":",":"+Yt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return cn(e,"scroll-","scroll-snap-")+e}return e}function $n(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case en:return void(e.return=Wn(e.value,e.length,n));case nn:return Un([En(e,{value:cn(e.value,"@","@"+Gt)})],r);case Jt:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(un(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":jn(En(e,{props:[cn(t,/:(read-\w+)/,":"+Zt+"$1")]})),jn(En(e,{props:[t]})),ln(e,{props:yn(n,r)});break;case"::placeholder":jn(En(e,{props:[cn(t,/:(plac\w+)/,":"+Gt+"input-$1")]})),jn(En(e,{props:[cn(t,/:(plac\w+)/,":"+Zt+"$1")]})),jn(En(e,{props:[cn(t,/:(plac\w+)/,Yt+"input-$1")]})),jn(En(e,{props:[t]})),ln(e,{props:yn(n,r)})}return""}))}}function Vn(e){return zn(Kn("",null,null,null,[""],e=On(e),0,[0],e))}function Kn(e,t,n,r,o,i,a,l,s){for(var u=0,c=0,d=a,f=0,p=0,h=0,m=1,g=1,y=1,v=0,x="",b=o,w=i,S=r,k=x;g;)switch(h=v,v=Pn()){case 40:if(108!=h&&58==fn(k,d-1)){-1!=dn(k+=cn(Fn(v),"&","&\f"),"&\f",on(u?l[u-1]:0))&&(y=-1);break}case 34:case 39:case 91:k+=Fn(v);break;case 9:case 10:case 13:case 32:k+=Ln(h);break;case 92:k+=Dn(An()-1,7);continue;case 47:switch(Rn()){case 42:case 47:gn(qn(Mn(Pn(),An()),t,n,s),s);break;default:k+="/"}break;case 123*m:l[u++]=hn(k)*y;case 125*m:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+c:-1==y&&(k=cn(k,/\f/g,"")),p>0&&hn(k)-d&&gn(p>32?Yn(k+";",r,n,d-1,s):Yn(cn(k," ","")+";",r,n,d-2,s),s);break;case 59:k+=";";default:if(gn(S=Qn(k,t,n,u,c,o,l,x,b=[],w=[],d,i),i),123===v)if(0===c)Kn(k,t,S,S,b,i,d,l,w);else switch(99===f&&110===fn(k,3)?100:f){case 100:case 108:case 109:case 115:Kn(e,S,S,r&&gn(Qn(e,S,S,0,0,o,l,x,o,b=[],d,w),w),o,w,d,l,r?b:w);break;default:Kn(k,S,S,S,[""],w,0,l,w)}}u=c=p=0,m=y=1,x=k="",d=a;break;case 58:d=1+hn(k),p=h;default:if(m<1)if(123==v)--m;else if(125==v&&0==m++&&125==_n())continue;switch(k+=an(v),v*m){case 38:y=c>0?1:(k+="\f",-1);break;case 44:l[u++]=(hn(k)-1)*y,y=1;break;case 64:45===Rn()&&(k+=Fn(Pn())),f=Rn(),c=d=hn(x=k+=Bn(An())),v++;break;case 45:45===h&&2==hn(k)&&(m=0)}}return i}function Qn(e,t,n,r,o,i,a,l,s,u,c,d){for(var f=o-1,p=0===o?i:[""],h=mn(p),m=0,g=0,y=0;m<r;++m)for(var v=0,x=pn(e,f+1,f=on(g=a[m])),b=e;v<h;++v)(b=sn(g>0?p[v]+" "+x:cn(x,/&\f/g,p[v])))&&(s[y++]=b);return Cn(e,t,n,0===o?Jt:l,s,u,c,d)}function qn(e,t,n,r){return Cn(e,t,n,Xt,an(Sn),pn(e,2,-2),0,r)}function Yn(e,t,n,r,o){return Cn(e,t,n,en,pn(e,0,r),pn(e,r+1,-1),r,o)}var Zn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Gn="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",Xn="active",Jn="data-styled-version",er="6.1.13",tr="/*!sc*/\n",nr="undefined"!=typeof window&&"HTMLElement"in window,rr=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),or=(new Set,Object.freeze([])),ir=Object.freeze({});function ar(e,t,n){return void 0===n&&(n=ir),e.theme!==n.theme&&e.theme||t||n.theme}var lr=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),sr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ur=/(^-|-$)/g;function cr(e){return e.replace(sr,"-").replace(ur,"")}var dr=/(a)(d)/gi,fr=52,pr=function(e){return String.fromCharCode(e+(e>25?39:97))};function hr(e){var t,n="";for(t=Math.abs(e);t>fr;t=t/fr|0)n=pr(t%fr)+n;return(pr(t%fr)+n).replace(dr,"$1-$2")}var mr,gr=5381,yr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},vr=function(e){return yr(gr,e)};function xr(e){return hr(vr(e)>>>0)}function br(e){return e.displayName||e.name||"Component"}function wr(e){return"string"==typeof e&&!0}var Sr="function"==typeof Symbol&&Symbol.for,kr=Sr?Symbol.for("react.memo"):60115,Cr=Sr?Symbol.for("react.forward_ref"):60112,Er={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},jr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_r={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Pr=((mr={})[Cr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},mr[kr]=_r,mr);function Rr(e){return("type"in(t=e)&&t.type.$$typeof)===kr?_r:"$$typeof"in e?Pr[e.$$typeof]:Er;var t}var Ar=Object.defineProperty,Tr=Object.getOwnPropertyNames,Nr=Object.getOwnPropertySymbols,Or=Object.getOwnPropertyDescriptor,zr=Object.getPrototypeOf,Fr=Object.prototype;function Lr(e,t,n){if("string"!=typeof t){if(Fr){var r=zr(t);r&&r!==Fr&&Lr(e,r,n)}var o=Tr(t);Nr&&(o=o.concat(Nr(t)));for(var i=Rr(e),a=Rr(t),l=0;l<o.length;++l){var s=o[l];if(!(s in jr||n&&n[s]||a&&s in a||i&&s in i)){var u=Or(t,s);try{Ar(e,s,u)}catch(e){}}}}return e}function Dr(e){return"function"==typeof e}function Ir(e){return"object"==typeof e&&"styledComponentId"in e}function Mr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Br(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ur(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Hr(e,t,n){if(void 0===n&&(n=!1),!n&&!Ur(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Hr(e[r],t[r]);else if(Ur(t))for(var r in t)e[r]=Hr(e[r],t[r]);return e}function Wr(e,t){Object.defineProperty(e,"toString",{value:t})}function $r(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Vr=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw $r(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),l=(i=0,t.length);i<l;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+="".concat(this.tag.getRule(i)).concat(tr);return t},e}(),Kr=new Map,Qr=new Map,qr=1,Yr=function(e){if(Kr.has(e))return Kr.get(e);for(;Qr.has(qr);)qr++;var t=qr++;return Kr.set(e,t),Qr.set(t,e),t},Zr=function(e,t){qr=t+1,Kr.set(e,t),Qr.set(t,e)},Gr="style[".concat(Gn,"][").concat(Jn,'="').concat(er,'"]'),Xr=new RegExp("^".concat(Gn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Jr=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},eo=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(tr),o=[],i=0,a=r.length;i<a;i++){var l=r[i].trim();if(l){var s=l.match(Xr);if(s){var u=0|parseInt(s[1],10),c=s[2];0!==u&&(Zr(c,u),Jr(e,c,s[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(l)}}},to=function(e){for(var t=document.querySelectorAll(Gr),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(Gn)!==Xn&&(eo(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function no(){return n.nc}var ro=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(Gn,"]")));return t[t.length-1]}(n),i=void 0!==o?o.nextSibling:null;r.setAttribute(Gn,Xn),r.setAttribute(Jn,er);var a=no();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},oo=function(){function e(e){this.element=ro(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw $r(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),io=function(){function e(e){this.element=ro(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),ao=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),lo=nr,so={isServer:!nr,useCSSOMInjection:!rr},uo=function(){function e(e,t,n){void 0===e&&(e=ir),void 0===t&&(t={});var r=this;this.options=Vt(Vt({},so),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&nr&&lo&&(lo=!1,to(this)),Wr(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return Qr.get(e)}(n);if(void 0===o)return"continue";var i=e.names.get(o),a=t.getGroup(n);if(void 0===i||!i.size||0===a.length)return"continue";var l="".concat(Gn,".g").concat(n,'[id="').concat(o,'"]'),s="";void 0!==i&&i.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(a).concat(l,'{content:"').concat(s,'"}').concat(tr)},i=0;i<n;i++)o(i);return r}(r)}))}return e.registerId=function(e){return Yr(e)},e.prototype.rehydrate=function(){!this.server&&nr&&to(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(Vt(Vt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new ao(n):t?new oo(n):new io(n)}(this.options),new Vr(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Yr(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Yr(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Yr(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),co=/&/g,fo=/^\s*\/\/.*$/gm;function po(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=po(e.children,t)),e}))}function ho(e){var t,n,r,o=void 0===e?ir:e,i=o.options,a=void 0===i?ir:i,l=o.plugins,s=void 0===l?or:l,u=function(e,r,o){return o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push((function(e){e.type===Jt&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(co,n).replace(r,u))})),a.prefix&&c.push($n),c.push(Hn);var d=function(e,o,i,l){void 0===o&&(o=""),void 0===i&&(i=""),void 0===l&&(l="&"),t=l,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(fo,""),u=Vn(i||o?"".concat(i," ").concat(o," { ").concat(s," }"):s);a.namespace&&(u=po(u,a.namespace));var d,f=[];return Un(u,function(e){var t=mn(e);return function(n,r,o,i){for(var a="",l=0;l<t;l++)a+=e[l](n,r,o,i)||"";return a}}(c.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=s.length?s.reduce((function(e,t){return t.name||$r(15),yr(e,t.name)}),gr).toString():"",d}var mo=new uo,go=ho(),yo=t.createContext({shouldForwardProp:void 0,styleSheet:mo,stylis:go}),vo=(yo.Consumer,t.createContext(void 0));function xo(){return(0,t.useContext)(yo)}function bo(e){var n=(0,t.useState)(e.stylisPlugins),r=n[0],o=n[1],i=xo().styleSheet,a=(0,t.useMemo)((function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,i]),l=(0,t.useMemo)((function(){return ho({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})}),[e.enableVendorPrefixes,e.namespace,r]);(0,t.useEffect)((function(){qt()(r,e.stylisPlugins)||o(e.stylisPlugins)}),[e.stylisPlugins]);var s=(0,t.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:l}}),[e.shouldForwardProp,a,l]);return t.createElement(yo.Provider,{value:s},t.createElement(vo.Provider,{value:l},e.children))}var wo=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=go);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Wr(this,(function(){throw $r(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=go),this.name+e.hash},e}(),So=function(e){return e>="A"&&e<="Z"};function ko(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;So(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Co=function(e){return null==e||!1===e||""===e},Eo=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Co(i)&&(Array.isArray(i)&&i.isCss||Dr(i)?r.push("".concat(ko(o),":"),i,";"):Ur(i)?r.push.apply(r,Kt(Kt(["".concat(o," {")],Eo(i),!1),["}"],!1)):r.push("".concat(ko(o),": ").concat((t=o,null==(n=i)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in Zn||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function jo(e,t,n,r){return Co(e)?[]:Ir(e)?[".".concat(e.styledComponentId)]:Dr(e)?!Dr(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:jo(e(t),t,n,r):e instanceof wo?n?(e.inject(n,r),[e.getName(r)]):[e]:Ur(e)?Eo(e):Array.isArray(e)?Array.prototype.concat.apply(or,e.map((function(e){return jo(e,t,n,r)}))):[e.toString()];var o}function _o(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Dr(n)&&!Ir(n))return!1}return!0}var Po=vr(er),Ro=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&_o(e),this.componentId=t,this.baseHash=yr(Po,t),this.baseStyle=n,uo.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Mr(r,this.staticRulesId);else{var o=Br(jo(this.rules,e,t,n)),i=hr(yr(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=n(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}r=Mr(r,i),this.staticRulesId=i}else{for(var l=yr(this.baseHash,n.hash),s="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)s+=c;else if(c){var d=Br(jo(c,e,t,n));l=yr(l,d+u),s+=d}}if(s){var f=hr(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(s,".".concat(f),void 0,this.componentId)),r=Mr(r,f)}}return r},e}(),Ao=t.createContext(void 0);Ao.Consumer;var To={};new Set;function No(e,n,r){var o=Ir(e),i=e,a=!wr(e),l=n.attrs,s=void 0===l?or:l,u=n.componentId,c=void 0===u?function(e,t){var n="string"!=typeof e?"sc":cr(e);To[n]=(To[n]||0)+1;var r="".concat(n,"-").concat(xr(er+n+To[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):u,d=n.displayName,f=void 0===d?function(e){return wr(e)?"styled.".concat(e):"Styled(".concat(br(e),")")}(e):d,p=n.displayName&&n.componentId?"".concat(cr(n.displayName),"-").concat(n.componentId):n.componentId||c,h=o&&i.attrs?i.attrs.concat(s).filter(Boolean):s,m=n.shouldForwardProp;if(o&&i.shouldForwardProp){var g=i.shouldForwardProp;if(n.shouldForwardProp){var y=n.shouldForwardProp;m=function(e,t){return g(e,t)&&y(e,t)}}else m=g}var v=new Ro(r,p,o?i.componentStyle:void 0);function x(e,n){return function(e,n,r){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,l=e.foldedComponentIds,s=e.styledComponentId,u=e.target,c=t.useContext(Ao),d=xo(),f=e.shouldForwardProp||d.shouldForwardProp,p=ar(n,c,a)||ir,h=function(e,t,n){for(var r,o=Vt(Vt({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var a=Dr(r=e[i])?r(o):r;for(var l in a)o[l]="className"===l?Mr(o[l],a[l]):"style"===l?Vt(Vt({},o[l]),a[l]):a[l]}return t.className&&(o.className=Mr(o.className,t.className)),o}(o,n,p),m=h.as||u,g={};for(var y in h)void 0===h[y]||"$"===y[0]||"as"===y||"theme"===y&&h.theme===p||("forwardedAs"===y?g.as=h.forwardedAs:f&&!f(y,m)||(g[y]=h[y]));var v=function(e,t){var n=xo();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,h),x=Mr(l,s);return v&&(x+=" "+v),h.className&&(x+=" "+h.className),g[wr(m)&&!lr.has(m)?"class":"className"]=x,g.ref=r,(0,t.createElement)(m,g)}(b,e,n)}x.displayName=f;var b=t.forwardRef(x);return b.attrs=h,b.componentStyle=v,b.displayName=f,b.shouldForwardProp=m,b.foldedComponentIds=o?Mr(i.foldedComponentIds,i.styledComponentId):"",b.styledComponentId=p,b.target=o?i.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)Hr(e,o[r],!0);return e}({},i.defaultProps,e):e}}),Wr(b,(function(){return".".concat(b.styledComponentId)})),a&&Lr(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function Oo(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var zo=function(e){return Object.assign(e,{isCss:!0})};function Fo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Dr(e)||Ur(e))return zo(jo(Oo(or,Kt([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?jo(r):zo(jo(Oo(r,t)))}function Lo(e,t,n){if(void 0===n&&(n=ir),!t)throw $r(1,t);var r=function(r){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,n,Fo.apply(void 0,Kt([r],o,!1)))};return r.attrs=function(r){return Lo(e,t,Vt(Vt({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Lo(e,t,Vt(Vt({},n),r))},r}var Do=function(e){return Lo(No,e)},Io=Do;lr.forEach((function(e){Io[e]=Do(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=_o(e),uo.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var o=r(Br(jo(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&uo.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=no(),r=Br([n&&'nonce="'.concat(n,'"'),"".concat(Gn,'="true"'),"".concat(Jn,'="').concat(er,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw $r(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw $r(2);var r=e.instance.toString();if(!r)return[];var o=((n={})[Gn]="",n[Jn]=er,n.dangerouslySetInnerHTML={__html:r},n),i=no();return i&&(o.nonce=i),[t.createElement("style",Vt({},o,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new uo({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw $r(2);return t.createElement(bo,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw $r(3)}})(),"__sc-".concat(Gn,"__");const Mo=n.p+"static/media/trash.3559d4f9a9bb5870ad11b1b6f7933596.svg";var Bo=n(7237),Uo=t,Ho=Symbol.for("react-redux-context"),Wo="undefined"!==typeof globalThis?globalThis:{};function $o(){if(!Uo.createContext)return{};const e=Wo[Ho]??(Wo[Ho]=new Map);let t=e.get(Uo.createContext);return t||(t=Uo.createContext(null),e.set(Uo.createContext,t)),t}var Vo=$o(),Ko=()=>{throw new Error("uSES not initialized!")};function Qo(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Vo;return function(){return Uo.useContext(e)}}var qo=Qo(),Yo=Ko,Zo=(e,t)=>e===t;function Go(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Vo;const t=e===Vo?qo:Qo(e),n=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{equalityFn:r=Zo,devModeChecks:o={}}="function"===typeof n?{equalityFn:n}:n;const{store:i,subscription:a,getServerState:l,stabilityCheck:s,identityFunctionCheck:u}=t(),c=(Uo.useRef(!0),Uo.useCallback({[e.name]:t=>e(t)}[e.name],[e,s,o.stabilityCheck])),d=Yo(a.addNestedSub,i.getState,l||i.getState,c,r);return Uo.useDebugValue(d),d};return Object.assign(n,{withTypes:()=>n}),n}var Xo=Go();Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.server_context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.suspense_list"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.for("react.offscreen"),Symbol.for("react.client.reference");function Jo(e){e()}var ei={notify(){},get:()=>[]};function ti(e,t){let n,r=ei,o=0,i=!1;function a(){u.onStateChange&&u.onStateChange()}function l(){o++,n||(n=t?t.addNestedSub(a):e.subscribe(a),r=function(){let e=null,t=null;return{clear(){e=null,t=null},notify(){Jo((()=>{let t=e;for(;t;)t.callback(),t=t.next}))},get(){const t=[];let n=e;for(;n;)t.push(n),n=n.next;return t},subscribe(n){let r=!0;const o=t={callback:n,next:null,prev:t};return o.prev?o.prev.next=o:e=o,function(){r&&null!==e&&(r=!1,o.next?o.next.prev=o.prev:t=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}())}function s(){o--,n&&0===o&&(n(),n=void 0,r.clear(),r=ei)}const u={addNestedSub:function(e){l();const t=r.subscribe(e);let n=!1;return()=>{n||(n=!0,t(),s())}},notifyNestedSubs:function(){r.notify()},handleChangeWrapper:a,isSubscribed:function(){return i},trySubscribe:function(){i||(i=!0,l())},tryUnsubscribe:function(){i&&(i=!1,s())},getListeners:()=>r};return u}var ni=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ri="undefined"!==typeof navigator&&"ReactNative"===navigator.product,oi=ni||ri?Uo.useLayoutEffect:Uo.useEffect;Object.defineProperty,Object.getOwnPropertyNames,Object.getOwnPropertySymbols,Object.getOwnPropertyDescriptor,Object.getPrototypeOf,Object.prototype;var ii=function(e){let{store:t,context:n,children:r,serverState:o,stabilityCheck:i="once",identityFunctionCheck:a="once"}=e;const l=Uo.useMemo((()=>{const e=ti(t);return{store:t,subscription:e,getServerState:o?()=>o:void 0,stabilityCheck:i,identityFunctionCheck:a}}),[t,o,i,a]),s=Uo.useMemo((()=>t.getState()),[t]);oi((()=>{const{subscription:e}=l;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),s!==t.getState()&&e.notifyNestedSubs(),()=>{e.tryUnsubscribe(),e.onStateChange=void 0}}),[l,s]);const u=n||Vo;return Uo.createElement(u.Provider,{value:l},r)};function ai(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Vo;const t=e===Vo?qo:Qo(e),n=()=>{const{store:e}=t();return e};return Object.assign(n,{withTypes:()=>n}),n}var li=ai();function si(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Vo;const t=e===Vo?li:ai(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var ui,ci=si();function di(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}ui=Bo.useSyncExternalStoreWithSelector,Yo=ui,(e=>{e})(t.useSyncExternalStore);var fi=(()=>"function"===typeof Symbol&&Symbol.observable||"@@observable")(),pi=()=>Math.random().toString(36).substring(7).split("").join("."),hi={INIT:`@@redux/INIT${pi()}`,REPLACE:`@@redux/REPLACE${pi()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${pi()}`};function mi(e){if("object"!==typeof e||null===e)return!1;let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||null===Object.getPrototypeOf(e)}function gi(e,t,n){if("function"!==typeof e)throw new Error(di(2));if("function"===typeof t&&"function"===typeof n||"function"===typeof n&&"function"===typeof arguments[3])throw new Error(di(0));if("function"===typeof t&&"undefined"===typeof n&&(n=t,t=void 0),"undefined"!==typeof n){if("function"!==typeof n)throw new Error(di(1));return n(gi)(e,t)}let r=e,o=t,i=new Map,a=i,l=0,s=!1;function u(){a===i&&(a=new Map,i.forEach(((e,t)=>{a.set(t,e)})))}function c(){if(s)throw new Error(di(3));return o}function d(e){if("function"!==typeof e)throw new Error(di(4));if(s)throw new Error(di(5));let t=!0;u();const n=l++;return a.set(n,e),function(){if(t){if(s)throw new Error(di(6));t=!1,u(),a.delete(n),i=null}}}function f(e){if(!mi(e))throw new Error(di(7));if("undefined"===typeof e.type)throw new Error(di(8));if("string"!==typeof e.type)throw new Error(di(17));if(s)throw new Error(di(9));try{s=!0,o=r(o,e)}finally{s=!1}return(i=a).forEach((e=>{e()})),e}f({type:hi.INIT});return{dispatch:f,subscribe:d,getState:c,replaceReducer:function(e){if("function"!==typeof e)throw new Error(di(10));r=e,f({type:hi.REPLACE})},[fi]:function(){const e=d;return{subscribe(t){if("object"!==typeof t||null===t)throw new Error(di(11));function n(){const e=t;e.next&&e.next(c())}n();return{unsubscribe:e(n)}},[fi](){return this}}}}}function yi(e){const t=Object.keys(e),n={};for(let i=0;i<t.length;i++){const r=t[i];0,"function"===typeof e[r]&&(n[r]=e[r])}const r=Object.keys(n);let o;try{!function(e){Object.keys(e).forEach((t=>{const n=e[t];if("undefined"===typeof n(void 0,{type:hi.INIT}))throw new Error(di(12));if("undefined"===typeof n(void 0,{type:hi.PROBE_UNKNOWN_ACTION()}))throw new Error(di(13))}))}(n)}catch(Qd){o=Qd}return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(o)throw o;let i=!1;const a={};for(let o=0;o<r.length;o++){const l=r[o],s=n[l],u=e[l],c=s(u,t);if("undefined"===typeof c){t&&t.type;throw new Error(di(14))}a[l]=c,i=i||c!==u}return i=i||r.length!==Object.keys(e).length,i?a:e}}function vi(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?e=>e:1===t.length?t[0]:t.reduce(((e,t)=>function(){return e(t(...arguments))}))}function xi(e){return t=>{let{dispatch:n,getState:r}=t;return t=>o=>"function"===typeof o?o(n,r,e):t(o)}}var bi=xi(),wi=xi,Si=Symbol.for("immer-nothing"),ki=Symbol.for("immer-draftable"),Ci=Symbol.for("immer-state");function Ei(e){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var ji=Object.getPrototypeOf;function _i(e){return!!e&&!!e[Ci]}function Pi(e){return!!e&&(Ai(e)||Array.isArray(e)||!!e[ki]||!!e.constructor?.[ki]||Fi(e)||Li(e))}var Ri=Object.prototype.constructor.toString();function Ai(e){if(!e||"object"!==typeof e)return!1;const t=ji(e);if(null===t)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===Ri}function Ti(e,t){0===Ni(e)?Reflect.ownKeys(e).forEach((n=>{t(n,e[n],e)})):e.forEach(((n,r)=>t(r,n,e)))}function Ni(e){const t=e[Ci];return t?t.type_:Array.isArray(e)?1:Fi(e)?2:Li(e)?3:0}function Oi(e,t){return 2===Ni(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function zi(e,t,n){const r=Ni(e);2===r?e.set(t,n):3===r?e.add(n):e[t]=n}function Fi(e){return e instanceof Map}function Li(e){return e instanceof Set}function Di(e){return e.copy_||e.base_}function Ii(e,t){if(Fi(e))return new Map(e);if(Li(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=Ai(e);if(!0===t||"class_only"===t&&!n){const t=Object.getOwnPropertyDescriptors(e);delete t[Ci];let n=Reflect.ownKeys(t);for(let r=0;r<n.length;r++){const o=n[r],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(ji(e),t)}{const t=ji(e);if(null!==t&&n)return{...e};const r=Object.create(t);return Object.assign(r,e)}}function Mi(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Ui(e)||_i(e)||!Pi(e)||(Ni(e)>1&&(e.set=e.add=e.clear=e.delete=Bi),Object.freeze(e),t&&Object.entries(e).forEach((e=>{let[t,n]=e;return Mi(n,!0)}))),e}function Bi(){Ei(2)}function Ui(e){return Object.isFrozen(e)}var Hi,Wi={};function $i(e){const t=Wi[e];return t||Ei(0),t}function Vi(){return Hi}function Ki(e,t){t&&($i("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Qi(e){qi(e),e.drafts_.forEach(Zi),e.drafts_=null}function qi(e){e===Hi&&(Hi=e.parent_)}function Yi(e){return Hi={drafts_:[],parent_:Hi,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Zi(e){const t=e[Ci];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function Gi(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return void 0!==e&&e!==n?(n[Ci].modified_&&(Qi(t),Ei(4)),Pi(e)&&(e=Xi(t,e),t.parent_||ea(t,e)),t.patches_&&$i("Patches").generateReplacementPatches_(n[Ci].base_,e,t.patches_,t.inversePatches_)):e=Xi(t,n,[]),Qi(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Si?e:void 0}function Xi(e,t,n){if(Ui(t))return t;const r=t[Ci];if(!r)return Ti(t,((o,i)=>Ji(e,r,t,o,i,n))),t;if(r.scope_!==e)return t;if(!r.modified_)return ea(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const t=r.copy_;let o=t,i=!1;3===r.type_&&(o=new Set(t),t.clear(),i=!0),Ti(o,((o,a)=>Ji(e,r,t,o,a,n,i))),ea(e,t,!1),n&&e.patches_&&$i("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function Ji(e,t,n,r,o,i,a){if(_i(o)){const a=Xi(e,o,i&&t&&3!==t.type_&&!Oi(t.assigned_,r)?i.concat(r):void 0);if(zi(n,r,a),!_i(a))return;e.canAutoFreeze_=!1}else a&&n.add(o);if(Pi(o)&&!Ui(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Xi(e,o),t&&t.scope_.parent_||"symbol"===typeof r||!Object.prototype.propertyIsEnumerable.call(n,r)||ea(e,o)}}function ea(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Mi(t,n)}var ta={get(e,t){if(t===Ci)return e;const n=Di(e);if(!Oi(n,t))return function(e,t,n){const r=oa(t,n);return r?"value"in r?r.value:r.get?.call(e.draft_):void 0}(e,n,t);const r=n[t];return e.finalized_||!Pi(r)?r:r===ra(e.base_,t)?(aa(e),e.copy_[t]=la(r,e)):r},has:(e,t)=>t in Di(e),ownKeys:e=>Reflect.ownKeys(Di(e)),set(e,t,n){const r=oa(Di(e),t);if(r?.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const r=ra(Di(e),t),o=r?.[Ci];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}(n,r)&&(void 0!==n||Oi(e.base_,t)))return!0;aa(e),ia(e)}return e.copy_[t]===n&&(void 0!==n||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==ra(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,aa(e),ia(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const n=Di(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty(){Ei(11)},getPrototypeOf:e=>ji(e.base_),setPrototypeOf(){Ei(12)}},na={};function ra(e,t){const n=e[Ci];return(n?Di(n):e)[t]}function oa(e,t){if(!(t in e))return;let n=ji(e);for(;n;){const e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=ji(n)}}function ia(e){e.modified_||(e.modified_=!0,e.parent_&&ia(e.parent_))}function aa(e){e.copy_||(e.copy_=Ii(e.base_,e.scope_.immer_.useStrictShallowCopy_))}Ti(ta,((e,t)=>{na[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),na.deleteProperty=function(e,t){return na.set.call(this,e,t,void 0)},na.set=function(e,t,n){return ta.set.call(this,e[0],t,n,e[0])};function la(e,t){const n=Fi(e)?$i("MapSet").proxyMap_(e,t):Li(e)?$i("MapSet").proxySet_(e,t):function(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:Vi(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=r,i=ta;n&&(o=[r],i=na);const{revoke:a,proxy:l}=Proxy.revocable(o,i);return r.draft_=l,r.revoke_=a,l}(e,t);return(t?t.scope_:Vi()).drafts_.push(n),n}function sa(e){if(!Pi(e)||Ui(e))return e;const t=e[Ci];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Ii(e,t.scope_.immer_.useStrictShallowCopy_)}else n=Ii(e,!0);return Ti(n,((e,t)=>{zi(n,e,sa(t))})),t&&(t.finalized_=!1),n}var ua=new class{constructor(e){var t=this;this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,n)=>{if("function"===typeof e&&"function"!==typeof t){const n=t;t=e;const r=this;return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n;for(var o=arguments.length,i=new Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];return r.produce(e,(e=>t.call(this,e,...i)))}}let r;if("function"!==typeof t&&Ei(6),void 0!==n&&"function"!==typeof n&&Ei(7),Pi(e)){const o=Yi(this),i=la(e,void 0);let a=!0;try{r=t(i),a=!1}finally{a?Qi(o):qi(o)}return Ki(o,n),Gi(r,o)}if(!e||"object"!==typeof e){if(r=t(e),void 0===r&&(r=e),r===Si&&(r=void 0),this.autoFreeze_&&Mi(r,!0),n){const t=[],o=[];$i("Patches").generateReplacementPatches_(e,r,t,o),n(t,o)}return r}Ei(1)},this.produceWithPatches=(e,n)=>{if("function"===typeof e)return function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return t.produceWithPatches(n,(t=>e(t,...o)))};let r,o;return[this.produce(e,n,((e,t)=>{r=e,o=t})),r,o]},"boolean"===typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"===typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){Pi(e)||Ei(8),_i(e)&&(e=function(e){_i(e)||Ei(10);return sa(e)}(e));const t=Yi(this),n=la(e,void 0);return n[Ci].isManual_=!0,qi(t),n}finishDraft(e,t){const n=e&&e[Ci];n&&n.isManual_||Ei(9);const{scope_:r}=n;return Ki(r,t),Gi(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));const r=$i("Patches").applyPatches_;return _i(e)?r(e,t):this.produce(e,(e=>r(e,t)))}},ca=ua.produce;ua.produceWithPatches.bind(ua),ua.setAutoFreeze.bind(ua),ua.setUseStrictShallowCopy.bind(ua),ua.applyPatches.bind(ua),ua.createDraft.bind(ua),ua.finishDraft.bind(ua);var da="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?vi:vi.apply(null,arguments)};"undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;function fa(e,t){function n(){if(t){let n=t(...arguments);if(!n)throw new Error(Pa(0));return{type:e,payload:n.payload,..."meta"in n&&{meta:n.meta},..."error"in n&&{error:n.error}}}return{type:e,payload:arguments.length<=0?void 0:arguments[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=t=>function(e){return mi(e)&&"type"in e&&"string"===typeof e.type}(t)&&t.type===e,n}var pa=class e extends Array{constructor(){super(...arguments),Object.setPrototypeOf(this,e.prototype)}static get[Symbol.species](){return e}concat(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return super.concat.apply(this,t)}prepend(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return 1===n.length&&Array.isArray(n[0])?new e(...n[0].concat(this)):new e(...n.concat(this))}};function ha(e){return Pi(e)?ca(e,(()=>{})):e}function ma(e,t,n){if(e.has(t)){let r=e.get(t);return n.update&&(r=n.update(r,t,e),e.set(t,r)),r}if(!n.insert)throw new Error(Pa(10));const r=n.insert(t,e);return e.set(t,r),r}var ga="RTK_autoBatch",ya=e=>t=>{setTimeout(t,e)},va="undefined"!==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame:ya(10),xa=e=>function(t){const{autoBatch:n=!0}=t??{};let r=new pa(e);return n&&r.push(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{type:"raf"};return t=>function(){const n=t(...arguments);let r=!0,o=!1,i=!1;const a=new Set,l="tick"===e.type?queueMicrotask:"raf"===e.type?va:"callback"===e.type?e.queueNotification:ya(e.timeout),s=()=>{i=!1,o&&(o=!1,a.forEach((e=>e())))};return Object.assign({},n,{subscribe(e){const t=n.subscribe((()=>r&&e()));return a.add(e),()=>{t(),a.delete(e)}},dispatch(e){try{return r=!e?.meta?.[ga],o=!r,o&&(i||(i=!0,l(s))),n.dispatch(e)}finally{r=!0}}})}}("object"===typeof n?n:void 0)),r};function ba(e){const t={},n=[];let r;const o={addCase(e,n){const r="string"===typeof e?e:e.type;if(!r)throw new Error(Pa(28));if(r in t)throw new Error(Pa(29));return t[r]=n,o},addMatcher:(e,t)=>(n.push({matcher:e,reducer:t}),o),addDefaultCase:e=>(r=e,o)};return e(o),[t,n,r]}var wa=Symbol.for("rtk-slice-createasyncthunk");function Sa(e,t){return`${e}/${t}`}function ka(){let{creators:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=e?.asyncThunk?.[wa];return function(e){const{name:n,reducerPath:r=n}=e;if(!n)throw new Error(Pa(11));const o=("function"===typeof e.reducers?e.reducers(function(){function e(e,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...t}}return e.withTypes=()=>e,{reducer:e=>Object.assign({[e.name](){return e(...arguments)}}[e.name],{_reducerDefinitionType:"reducer"}),preparedReducer:(e,t)=>({_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:t}),asyncThunk:e}}()):e.reducers)||{},i=Object.keys(o),a={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},l={addCase(e,t){const n="string"===typeof e?e:e.type;if(!n)throw new Error(Pa(12));if(n in a.sliceCaseReducersByType)throw new Error(Pa(13));return a.sliceCaseReducersByType[n]=t,l},addMatcher:(e,t)=>(a.sliceMatchers.push({matcher:e,reducer:t}),l),exposeAction:(e,t)=>(a.actionCreators[e]=t,l),exposeCaseReducer:(e,t)=>(a.sliceCaseReducersByName[e]=t,l)};function s(){const[t={},n=[],r]="function"===typeof e.extraReducers?ba(e.extraReducers):[e.extraReducers],o={...t,...a.sliceCaseReducersByType};return function(e,t){let n,[r,o,i]=ba(t);if(function(e){return"function"===typeof e}(e))n=()=>ha(e());else{const t=ha(e);n=()=>t}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n(),t=arguments.length>1?arguments[1]:void 0,a=[r[t.type],...o.filter((e=>{let{matcher:n}=e;return n(t)})).map((e=>{let{reducer:t}=e;return t}))];return 0===a.filter((e=>!!e)).length&&(a=[i]),a.reduce(((e,n)=>{if(n){if(_i(e)){const r=n(e,t);return void 0===r?e:r}if(Pi(e))return ca(e,(e=>n(e,t)));{const r=n(e,t);if(void 0===r){if(null===e)return e;throw new Error(Pa(9))}return r}}return e}),e)}return a.getInitialState=n,a}(e.initialState,(e=>{for(let t in o)e.addCase(t,o[t]);for(let t of a.sliceMatchers)e.addMatcher(t.matcher,t.reducer);for(let t of n)e.addMatcher(t.matcher,t.reducer);r&&e.addDefaultCase(r)}))}i.forEach((r=>{const i=o[r],a={reducerName:r,type:Sa(n,r),createNotation:"function"===typeof e.reducers};!function(e){return"asyncThunk"===e._reducerDefinitionType}(i)?function(e,t,n){let r,o,{type:i,reducerName:a,createNotation:l}=e;if("reducer"in t){if(l&&!function(e){return"reducerWithPrepare"===e._reducerDefinitionType}(t))throw new Error(Pa(17));r=t.reducer,o=t.prepare}else r=t;n.addCase(i,r).exposeCaseReducer(a,r).exposeAction(a,o?fa(i,o):fa(i))}(a,i,l):function(e,t,n,r){let{type:o,reducerName:i}=e;if(!r)throw new Error(Pa(18));const{payloadCreator:a,fulfilled:l,pending:s,rejected:u,settled:c,options:d}=t,f=r(o,a,d);n.exposeAction(i,f),l&&n.addCase(f.fulfilled,l);s&&n.addCase(f.pending,s);u&&n.addCase(f.rejected,u);c&&n.addMatcher(f.settled,c);n.exposeCaseReducer(i,{fulfilled:l||ja,pending:s||ja,rejected:u||ja,settled:c||ja})}(a,i,l,t)}));const u=e=>e,c=new Map;let d;function f(e,t){return d||(d=s()),d(e,t)}function p(){return d||(d=s()),d.getInitialState()}function h(t){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];function r(e){let r=e[t];return"undefined"===typeof r&&n&&(r=p()),r}function o(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;const r=ma(c,n,{insert:()=>new WeakMap});return ma(r,t,{insert:()=>{const r={};for(const[o,i]of Object.entries(e.selectors??{}))r[o]=Ca(i,t,p,n);return r}})}return{reducerPath:t,getSelectors:o,get selectors(){return o(r)},selectSlice:r}}const m={name:n,reducer:f,actions:a.actionCreators,caseReducers:a.sliceCaseReducersByName,getInitialState:p,...h(r),injectInto(e){let{reducerPath:t,...n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const o=t??r;return e.inject({reducerPath:o,reducer:f},n),{...m,...h(o,!0)}}};return m}}function Ca(e,t,n,r){function o(o){let i=t(o);"undefined"===typeof i&&r&&(i=n());for(var a=arguments.length,l=new Array(a>1?a-1:0),s=1;s<a;s++)l[s-1]=arguments[s];return e(i,...l)}return o.unwrapped=e,o}var Ea=ka();function ja(){}var{assign:_a}=Object;Symbol.for("rtk-state-proxy-original");function Pa(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const Ra=Ea({name:"cart",initialState:{itemsInCart:[]},reducers:{addProduct:(e,t)=>{let n=e.itemsInCart.find((e=>e.id===t.payload.id));void 0===n?e.itemsInCart.push(t.payload):n.count++},deleteProduct:(e,t)=>{let n=e.itemsInCart.findIndex((e=>e.id===t.payload.id));e.itemsInCart.splice(n,1)},productCountIncrement:(e,t)=>{let n=e.itemsInCart.findIndex((e=>e.id===t.payload.id));e.itemsInCart[n].count++},productCountDecrement:(e,t)=>{let n=e.itemsInCart.findIndex((e=>e.id===t.payload.id));e.itemsInCart[n].count>0&&e.itemsInCart[n].count--}}}),{addProduct:Aa,deleteProduct:Ta,productCountIncrement:Na,productCountDecrement:Oa}=Ra.actions,za=Ra.reducer;var Fa=n(579);const La=Io.div`
  width: 600px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`,Da=Io.div`
  margin-bottom: 22px;
  display: flex;
  justify-content: space-between;
`,Ia=Io.div`
  width: 11px;
  height: 11px;
  border: 3px solid white;
  border-radius: 50%;
  margin-right: 12px;
`,Ma=Io.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 25.36px;
  color: #ffffff;
  margin: 0;
`,Ba=Io.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  color: #ffffff;
  margin: 0;
`,Ua=Io.div`
  max-width: 393px;
  width: 100%;
  margin-left: 10px;
  margin-right: 10px;
`,Ha=Io.div`
  display: flex;
  margin-top: 31px;
`,Wa=Io.p`
  font-family: Floreste;
  font-size: 28px;
  font-weight: 400;
  line-height: 26.6px;
  color: white;
  margin: 0;
`,$a=Io.p`
  font-family: Euclid Circular A;
  font-size: 20px;
  font-weight: 400;
  line-height: 16.36px;
  color: white;
  margin: 0;
  margin-left: 20px;
`,Va=Io.div`
  display: flex;
  justify-content: space-between;
  width: 117px;
  align-items: center;
  margin-top: 15px;
`,Ka=Io.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  lin-height: 23px;
  color: white;
  margin: 0;
`,Qa=Io.div`
  width: 189px;
  height: 93px;
  border-radius: 50%;
  border: 2px solid #d9ff5a;
  background-color: #ebe3ff30;
  transform: rotate(-6deg);
  display: flex;
  align-items: center;
  justify-content: center;
`,qa=Io.p`
  font-family: Euclid Circular A;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  margin: 0px;
  color: white;
  transform: rotate(6deg);
`,Ya=Io.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 48px;
`,Za=Io.p`
  font-family: Floreste;
  font-size: 50px;
  font-weight: 500;
  line-height: 50px;
  color: white;
  margin: 0;
  margin-top: 10px;
`,Ga=Io.button`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  padding: 0;
  background-color: unset;
  outline: none;

  &:hover {
    cursor: pointer;
  }

  &.increment {
    border: 2px solid #ffffff;
  }
  &.decrement {
    border: 2px solid #ffffff30;
  }
`,Xa=Io(Dt)`
  outline: none;
  text-decoration: none;
  border-radius: 50%;

  &:hover,
  &:focus {
    cursor: pointer;

    .button-text {
      color: #d9ff5a;
    }
  }
`;function Ja(){const e=Xo((e=>e.cart.itemsInCart)),t=ci();if(0===e.length)return(0,Fa.jsx)(Ya,{children:(0,Fa.jsx)(Za,{children:"\u0412\u0410\u0428\u0410 \u041a\u041e\u0420\u0417\u0418\u041d\u0410 \u041f\u0423\u0421\u0422\u0410"})});let n=0;for(let r=0;r<e.length;r++){let t=Number(e[r].price.replaceAll(" ",""));n+=e[r].count*t}return(0,Fa.jsxs)(Ya,{children:[(0,Fa.jsx)("p",{style:{fontFamily:"Euclid Circular A",fontWeight:"500",fontSize:"18px",lineHeight:"22.82px",margin:0,color:"white",marginBottom:53,marginRight:"auto"},children:"\u0412\u0410\u0428\u0410 \u041a\u041e\u0420\u0417\u0418\u041d\u0410"}),(0,Fa.jsx)("div",{style:{maxHeight:"750px",overflowY:"scroll"},children:e.map((e=>(0,Fa.jsxs)(La,{children:[(0,Fa.jsx)("img",{style:{height:"90%"},src:e.image,alt:"itemImage"}),(0,Fa.jsxs)(Ua,{children:[(0,Fa.jsxs)(Da,{children:[(0,Fa.jsxs)("div",{children:[(0,Fa.jsxs)("div",{style:{display:"flex",alignItems:"center",marginBottom:13},children:[(0,Fa.jsx)(Ia,{style:{backgroundColor:`${e.background}`}}),(0,Fa.jsx)(Ma,{children:e.name})]}),(0,Fa.jsx)(Ba,{children:e.category})]}),(0,Fa.jsx)("input",{style:{marginLeft:10,outline:"none"},type:"image",src:Mo,alt:"trash",onClick:n=>{n.stopPropagation(),t(Ta(e))}})]}),(0,Fa.jsx)("div",{style:{width:"100%",border:"2px solid #D9FF5A"}}),(0,Fa.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,Fa.jsxs)(Ha,{children:[(0,Fa.jsx)(Wa,{children:e.price}),(0,Fa.jsx)($a,{children:"\u20bd"})]}),(0,Fa.jsxs)(Va,{children:[(0,Fa.jsx)(Ga,{className:"decrement",onClick:n=>{n.stopPropagation(),t(Oa(e))},children:(0,Fa.jsx)("p",{style:{fontFamily:"Euclid Circular A",fontSize:"18px",fontWeight:500,margin:0,color:"#FFFFFF30"},children:"-"})}),(0,Fa.jsx)(Ka,{children:e.count}),(0,Fa.jsx)(Ga,{className:"increment",onClick:n=>{n.stopPropagation(),t(Na(e))},children:(0,Fa.jsx)("p",{style:{fontFamily:"Euclid Circular A",fontSize:"18px",fontWeight:500,margin:0,color:"#FFFFFF"},children:"+"})})]})]})]})]},e.id)))}),(0,Fa.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:522,marginTop:"20px"},children:[(0,Fa.jsxs)("div",{children:[(0,Fa.jsx)("p",{style:{fontWeight:500,fontFamily:"Euclid Circular A",fontSize:"20px",lineHeight:"25.36px",margin:0,color:"white"},children:"\u0418\u0422\u041e\u0413\u041e:"}),(0,Fa.jsxs)("div",{style:{display:"flex",marginTop:15},children:[(0,Fa.jsx)(Wa,{style:{fontSize:"40px",lineHeight:"38px"},children:n}),(0,Fa.jsx)($a,{children:"\u20bd"})]})]}),(0,Fa.jsx)(Xa,{to:"/order",onClick:()=>window.CartHandler.close(),children:(0,Fa.jsx)(Qa,{children:(0,Fa.jsx)(qa,{className:"button-text",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c"})})})]})]})}const el=n.p+"static/media/lamp-wave1.74c72fc78da595d97fd5.png",tl=n.p+"static/media/lamp-wave2.0b15d007ed72feb5ec90.png",nl=n.p+"static/media/lamp-wave3.106ed1de066d2d4a818b.png";const rl=n.p+"static/media/heartInCircle.0c696194692096f0ba1f55083ea9d963.svg",ol=[{name:"COPPELIA",category:"\u041b\u0430\u043c\u043f\u0430 \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u0430\u044f",color:"#29D0D9",price:"150 000",count:1,image:el},{name:"FACCHETTA",category:"\u041b\u0430\u043c\u043f\u0430 \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u0430\u044f",color:"#FFC4A5",price:"150 000",count:1,image:tl},{name:"COPPELIA",category:"\u041b\u0430\u043c\u043f\u0430 \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u0430\u044f",color:"#FA8EEF",price:"150 000",count:1,image:nl}],il=Io.div`
  width: 523px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
`,al=Io.div`
  margin-bottom: 22px;
  display: flex;
  justify-content: space-between;
`,ll=Io.div`
  width: 11px;
  height: 11px;
  border: 3px solid white;
  border-radius: 50%;
  margin-right: 12px;
`,sl=Io.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 25.36px;
  color: #ffffff;
  margin: 0;
`,ul=Io.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  color: #ffffff;
  margin: 0;
`,cl=Io.div`
  width: 393px;
`,dl=Io.div`
  display: flex;
  justify-content: space-between;
  width: 95px;
  margin-top: 31px;
`,fl=Io.p`
  font-family: Floreste;
  font-size: 28px;
  font-weight: 400;
  line-height: 26.6px;
  color: white;
  margin: 0;
`,pl=Io.p`
  font-family: Euclid Circular A;
  font-size: 20px;
  font-weight: 400;
  line-height: 16.36px;
  color: white;
  margin: 0;
`;function hl(){return(0,Fa.jsxs)("div",{style:{margin:"48px"},children:[(0,Fa.jsx)("p",{style:{fontFamily:"Euclid Circular A",fontWeight:"500",fontSize:"18px",lineHeight:"22.82px",margin:0,color:"white",marginBottom:50},children:"\u0422\u041e\u0412\u0410\u0420\u042b \u0412 \u0418\u0417\u0411\u0420\u0410\u041d\u041d\u041e\u041c"}),ol.map(((e,t)=>(0,Fa.jsxs)(il,{children:[(0,Fa.jsx)("img",{src:e.image,alt:"itemImage"}),(0,Fa.jsxs)(cl,{children:[(0,Fa.jsxs)(al,{children:[(0,Fa.jsxs)("div",{children:[(0,Fa.jsxs)("div",{style:{display:"flex",alignItems:"center",marginBottom:13},children:[(0,Fa.jsx)(ll,{style:{backgroundColor:`${e.color}`}}),(0,Fa.jsx)(sl,{children:e.name})]}),(0,Fa.jsx)(ul,{children:e.category})]}),(0,Fa.jsx)("input",{style:{outline:"none"},type:"image",src:rl,alt:"heart"})]}),(0,Fa.jsx)("div",{style:{width:389,border:"2px solid #D9FF5A"}}),(0,Fa.jsx)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:(0,Fa.jsxs)(dl,{children:[(0,Fa.jsx)(fl,{children:e.price}),(0,Fa.jsx)(pl,{children:"\u20bd"})]})})]})]},t)))]})}const ml=Io.input`
  width: 100%;
  height: 25px;
  border: 0px;
  padding: 0px;
  margin: 0px;
  background: none;
  outline: none;
  border-bottom: 2px solid #d9ff5a;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  color: #ffffff;
  margin: 0;
  text-wrap: nowrap;

  &::placeholder {
    font-family: Euclid Circular A;
    font-weight: 500;
    font-size: 15px;
    line-height: 19.02px;
    color: #ffffff;
    margin: 0;
    text-wrap: nowrap;
    opacity: 1;
  }

  &:hover {
    cursor: text;
  }
`;function gl(e){let{placeholder:t,onChange:n,name:r,style:o}=e;return(0,Fa.jsx)(ml,{style:o,name:r,onChange:n,placeholder:t})}const yl=Io.div`
  width: 514px;
  margin: 48px;
`,vl=Io.h2`
  margin: 0;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  color: white;
`,xl=Io.form`
  margin-top: 66px;
`,bl=Io.button`
  width: 119px;
  height: 85px;
  border-radius: 50%;
  border: 2px solid #d9ff5a;
  color: white;
  background-color: #ebe3ff30;
  transform: rotate(-15deg);
  outline: none;

  &:hover,
  &:focus {
    cursor: pointer;

    .button-text {
      color: #d9ff5a;
    }
  }
`,wl=Io.p`
  margin: 0;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  transform: rotate(15deg);
`,Sl=Io.p`
  margin: 0;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  color: white;
`,kl=Io.button`
  display: flex;
  background: unset;
  border: unset;
  align-items: center;
  justify-content: space-between;
  width: 185px;
  outline: none;

  &:hover,
  &:focus {
    cursor: pointer;

    .link-text {
      color: #d9ff5a;
    }
    .link-svg {
      fill: #d9ff5a;
    }
  }
`;function Cl(){const[e,n]=(0,t.useState)(""),[r,o]=(0,t.useState)("");return(0,Fa.jsxs)(yl,{children:[(0,Fa.jsx)(vl,{children:"\u0412\u0425\u041e\u0414"}),(0,Fa.jsxs)(xl,{onSubmit:t=>function(t){t.stopPropagation(),t.preventDefault(),console.log(e,r)}(t),children:[(0,Fa.jsx)(gl,{style:{marginBottom:49,paddingBottom:20},name:"email",placeholder:"E-MAIL",onChange:e=>n(e.target.value)}),(0,Fa.jsx)(gl,{style:{marginBottom:49,paddingBottom:20},name:"password",placeholder:"\u041f\u0410\u0420\u041e\u041b\u042c",onChange:e=>o(e.target.value)}),(0,Fa.jsx)(bl,{type:"submit",children:(0,Fa.jsx)(wl,{className:"button-text",children:"\u0412\u043e\u0439\u0442\u0438"})})]}),(0,Fa.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:348,marginTop:68},children:[(0,Fa.jsx)(Sl,{children:"\u041d\u0415\u0422 \u0410\u041a\u041a\u0410\u0423\u041d\u0422\u0410?"}),(0,Fa.jsxs)(kl,{onClick:e=>{window.RegistrationHandler.show(),window.AuthorizationHandler.close()},children:[(0,Fa.jsx)(Sl,{className:"link-text",children:"\u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0410\u0426\u0418\u042f"}),(0,Fa.jsx)("svg",{className:"link-svg",width:"42",height:"16",viewBox:"0 0 42 16",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:(0,Fa.jsx)("path",{d:"M41.7071 8.70711C42.0976 8.31658 42.0976 7.68342 41.7071 7.29289L35.3431 0.928932C34.9526 0.538408 34.3195 0.538408 33.9289 0.928932C33.5384 1.31946 33.5384 1.95262 33.9289 2.34315L39.5858 8L33.9289 13.6569C33.5384 14.0474 33.5384 14.6805 33.9289 15.0711C34.3195 15.4616 34.9526 15.4616 35.3431 15.0711L41.7071 8.70711ZM0 9H41V7H0V9Z"})})]})]})]})}const El=Io.div`
  width: 514px;
  margin: 48px;
`,jl=Io.h2`
  margin: 0;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  color: white;
`,_l=Io.form`
  margin-top: 66px;
`,Pl=Io.button`
  width: 189px;
  height: 83px;
  border-radius: 50%;
  border: 2px solid #d9ff5a;
  color: white;
  background-color: #ebe3ff30;
  transform: rotate(-6deg);
  outline: none;

  &:hover,
  &:focus {
    cursor: pointer;

    .button-text {
      color: #d9ff5a;
    }
  }
`,Rl=Io.p`
  margin: 0;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  transform: rotate(6deg);
`,Al=Io.p`
  margin: 0;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  color: white;
`,Tl=Io.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 108px;
  margin-top: 60px;
  background: unset;
  border: unset;
  outline: none;

  &:hover,
  &:focus {
    cursor: pointer;

    .link-text {
      color: #d9ff5a;
    }
    .link-svg {
      fill: #d9ff5a;
    }
  }
`;function Nl(){const[e,n]=(0,t.useState)(""),[r,o]=(0,t.useState)(""),[i,a]=(0,t.useState)("");return(0,Fa.jsxs)(El,{children:[(0,Fa.jsx)(jl,{children:"\u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0410\u0426\u0418\u042f"}),(0,Fa.jsxs)(_l,{onSubmit:t=>function(t){t.stopPropagation(),t.preventDefault(),console.log(e,r,i)}(t),children:[(0,Fa.jsx)(gl,{style:{marginBottom:49,paddingBottom:20},name:"email",placeholder:"E-MAIL",onChange:e=>n(e.target.value)}),(0,Fa.jsx)(gl,{style:{marginBottom:49,paddingBottom:20},name:"password",placeholder:"\u041f\u0410\u0420\u041e\u041b\u042c",onChange:e=>o(e.target.value)}),(0,Fa.jsx)(gl,{style:{marginBottom:49,paddingBottom:20},name:"repeated-password",placeholder:"\u041f\u041e\u0412\u0422\u041e\u0420\u0418\u0422\u0415 \u041f\u0410\u0420\u041e\u041b\u042c",onChange:e=>a(e.target.value)}),(0,Fa.jsx)(Pl,{type:"submit",children:(0,Fa.jsx)(Rl,{className:"button-text",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})]}),(0,Fa.jsxs)(Tl,{onClick:e=>{window.RegistrationHandler.close(),window.AuthorizationHandler.show()},children:[(0,Fa.jsx)("svg",{style:{transform:"rotate(180deg)"},className:"link-svg",width:"42",height:"16",viewBox:"0 0 42 16",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:(0,Fa.jsx)("path",{d:"M41.7071 8.70711C42.0976 8.31658 42.0976 7.68342 41.7071 7.29289L35.3431 0.928932C34.9526 0.538408 34.3195 0.538408 33.9289 0.928932C33.5384 1.31946 33.5384 1.95262 33.9289 2.34315L39.5858 8L33.9289 13.6569C33.5384 14.0474 33.5384 14.6805 33.9289 15.0711C34.3195 15.4616 34.9526 15.4616 35.3431 15.0711L41.7071 8.70711ZM0 9H41V7H0V9Z"})}),(0,Fa.jsx)(Al,{className:"link-text",children:"\u0412\u0425\u041e\u0414"})]})]})}const Ol=n.p+"static/media/Arrow4.9f736a810db2fc148ba4e513f6039553.svg",zl=n.p+"static/media/map.d99fc41a11c0f93ee853.png";const Fl=n.p+"static/media/MarkOnMap.31868e8b89b9d14cd3e10175fa45dfc3.svg",Ll=Io.div`
  max-width: 950px;
  background-color: #ae97e8;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,Dl=Io.div`
  max-width: 850px;
  min-width: 400px;
  background-color: #fa8fef;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 50px 80px 20px;
`,Il=Io.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  color: #ffffff80;
  margin: 0;
  text-wrap: nowrap;
`,Ml=Io.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 60px;
  line-height: 76.08px;
  color: #ffffff;
  margin: 0;
  text-wrap: nowrap;
`,Bl=Io.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  color: #ffffff;
  margin: 0;
  text-wrap: nowrap;
`,Ul=Io.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 40px;
  line-height: 38px;
  color: #ffffff;
  margin: 0;
  text-wrap: nowrap;
`,Hl=Io.div`
  display: flex;
  width: 209px;
  justify-content: space-between;
`,Wl=Io.button`
  width: 189px;
  height: 93px;
  border: 2px solid #d9ff5a;
  transform: rotate(-6deg);
  background-color: #ebe3ff30;
  border-radius: 50%;
  outline: none;

  &:hover,
  &:focus {
    cursor: pointer;

    .button-text {
      color: #d9ff5a;
    }
  }
`,$l=Io.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  margin: 0;
  transform: rotate(6deg);
`,Vl=Io.a`
  outline: none;
  &:hover,
  &:focus {
    cursor: pointer;

    .link-svg {
      fill: #d9ff5a;
    }
  }
`;function Kl(){const[e,n]=(0,t.useState)(""),[r,o]=(0,t.useState)("");return(0,Fa.jsxs)("div",{style:{borderRadius:30,overflow:"hidden"},children:[(0,Fa.jsxs)("div",{style:{display:"flex",flexWrap:"wrap"},children:[(0,Fa.jsx)(Ll,{children:(0,Fa.jsxs)("div",{style:{display:"flex",maxWidth:690,width:"100%",justifyContent:"space-between",margin:"20px",flexWrap:"wrap",minWidth:"400px"},children:[(0,Fa.jsxs)("div",{children:[(0,Fa.jsx)(Il,{style:{marginBottom:35},children:"\u0410\u0414\u0420\u0415\u0421"}),(0,Fa.jsx)(Ml,{style:{marginBottom:26},children:"\u041c\u041e\u0421\u041a\u0412\u0410"}),(0,Fa.jsx)(Bl,{style:{marginBottom:122},children:"\u0423\u043b\u0438\u0446\u0430 \u041f\u0443\u0448\u043a\u0438\u043d\u0430, \u0434\u043e\u043c \u041a\u043e\u043b\u043e\u0442\u0443\u0448\u043a\u0438\u043d\u0430"}),(0,Fa.jsxs)("div",{style:{width:167,display:"flex",justifyContent:"space-between"},children:[(0,Fa.jsx)(Bl,{children:"\u0410\u0434\u0440\u0435\u0441 \u043d\u0430 \u043a\u0430\u0440\u0442\u0435"}),(0,Fa.jsx)("img",{src:Ol,alt:"arrow"})]})]}),(0,Fa.jsxs)("div",{style:{marginLeft:20},children:[(0,Fa.jsx)(Il,{style:{marginBottom:59},children:"\u0422\u0415\u041b\u0415\u0424\u041e\u041d"}),(0,Fa.jsx)(Ul,{style:{marginBottom:40},children:"+1 (111) 111-11-11"}),(0,Fa.jsx)(Bl,{style:{marginBottom:114},children:"\u041e\u0442\u0432\u0435\u0442\u0438\u043c \u043d\u0430 \u0432\u0441\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b"}),(0,Fa.jsxs)(Hl,{children:[(0,Fa.jsx)(Vl,{href:"google.com",children:(0,Fa.jsxs)("svg",{className:"link-svg",width:"40",height:"41",viewBox:"0 0 40 41",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:[(0,Fa.jsx)("circle",{cx:"19.8",cy:"20.5998",r:"19.8"}),(0,Fa.jsx)("path",{d:"M27.6993 14.6515L25.0586 27.1046C24.8593 27.9834 24.3399 28.2021 23.6018 27.7884L19.578 24.8234L17.6368 26.6909C17.4218 26.9059 17.2424 27.0853 16.828 27.0853L17.1174 22.9878L24.5743 16.2496C24.8986 15.9609 24.5036 15.8003 24.0705 16.0896L14.8517 21.8946L10.883 20.6521C10.0199 20.3828 10.0042 19.789 11.063 19.3746L26.5861 13.394C27.3049 13.1246 27.9336 13.554 27.6993 14.6521V14.6515Z",fill:"#AE97E8"})]})}),(0,Fa.jsx)(Vl,{href:"google.com",children:(0,Fa.jsxs)("svg",{className:"link-svg",width:"40",height:"41",viewBox:"0 0 40 41",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:[(0,Fa.jsx)("circle",{cx:"19.801",cy:"20.5998",r:"19.8"}),(0,Fa.jsx)("path",{d:"M28.001 16.2232C27.4126 16.4638 26.7805 16.6263 26.116 16.6998C26.8016 16.3213 27.3146 15.7255 27.5592 15.0238C26.915 15.3768 26.21 15.6253 25.4748 15.7584C24.9804 15.2714 24.3255 14.9486 23.6119 14.8401C22.8982 14.7316 22.1658 14.8436 21.5281 15.1585C20.8905 15.4735 20.3834 15.9738 20.0856 16.5819C19.7878 17.19 19.716 17.8717 19.8812 18.5213C18.5759 18.4609 17.299 18.1479 16.1334 17.6027C14.9677 17.0575 13.9394 16.2922 13.115 15.3566C12.8332 15.8052 12.6711 16.3253 12.6711 16.8792C12.6708 17.3778 12.8039 17.8688 13.0586 18.3086C13.3133 18.7484 13.6817 19.1234 14.1312 19.4003C13.6099 19.385 13.1002 19.255 12.6443 19.0213V19.0603C12.6443 19.7596 12.9065 20.4375 13.3865 20.9787C13.8664 21.52 14.5346 21.8915 15.2776 22.03C14.7941 22.1507 14.2871 22.1685 13.795 22.082C14.0047 22.6837 14.413 23.2099 14.9629 23.5869C15.5128 23.9639 16.1767 24.1728 16.8617 24.1844C15.6989 25.0266 14.2629 25.4834 12.7846 25.4814C12.5227 25.4815 12.261 25.4673 12.001 25.4391C13.5015 26.3292 15.2483 26.8016 17.0322 26.7998C23.0712 26.7998 26.3725 22.1853 26.3725 18.1833C26.3725 18.0533 26.369 17.922 26.3626 17.7919C27.0048 17.3635 27.5591 16.833 27.9996 16.2252L28.001 16.2232Z",fill:"#AE97E8"})]})}),(0,Fa.jsx)(Vl,{href:"google.com",children:(0,Fa.jsxs)("svg",{className:"link-svg",width:"40",height:"41",viewBox:"0 0 40 41",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:[(0,Fa.jsx)("circle",{cx:"20.1999",cy:"20.5998",r:"19.8"}),(0,Fa.jsx)("path",{d:"M24.0227 21.8252L24.4788 18.6641H21.6258V16.6136C21.6258 15.7488 22.0244 14.9049 23.3022 14.9049H24.5993V12.2136C24.5993 12.2136 23.4222 12 22.2966 12C19.947 12 18.4112 13.5139 18.4112 16.2548V18.6641H15.7993V21.8252H18.4112V29.4671C19.4762 29.6443 20.5607 29.6443 21.6258 29.4671V21.8252H24.0227Z",fill:"#AE97E8"})]})}),(0,Fa.jsx)(Vl,{href:"google.com",children:(0,Fa.jsxs)("svg",{className:"link-svg",width:"40",height:"41",viewBox:"0 0 40 41",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:[(0,Fa.jsx)("circle",{cx:"19.799",cy:"20.5998",r:"19.8"}),(0,Fa.jsx)("g",{"clip-path":"url(#clip0_8103_1882)",children:(0,Fa.jsx)("path",{d:"M15.6498 27.5498H12.3845V17.0344H15.6498V27.5498ZM14.0151 15.6001C12.9711 15.6001 12.124 14.7349 12.124 13.6909C12.124 13.1894 12.3233 12.7084 12.6779 12.3537C13.0326 11.999 13.5136 11.7998 14.0151 11.7998C14.5167 11.7998 14.9977 11.999 15.3524 12.3537C15.707 12.7084 15.9063 13.1894 15.9063 13.6909C15.9063 14.7349 15.0591 15.6001 14.0151 15.6001ZM27.8706 27.5498H24.6126V22.4311C24.6126 21.211 24.5879 19.6467 22.915 19.6467C21.2174 19.6467 20.957 20.9719 20.957 22.3433V27.5498H17.695V17.0344H20.8265V18.4688H20.872C21.308 17.6425 22.3728 16.7706 23.9613 16.7706C27.266 16.7706 27.8735 18.9469 27.8735 21.7735V27.5498H27.8706Z",fill:"#AE97E8"})}),(0,Fa.jsx)("defs",{children:(0,Fa.jsx)("clipPath",{id:"clip0_8103_1882",children:(0,Fa.jsx)("rect",{width:"18",height:"18",fill:"white",transform:"translate(10.999 11.7998)"})})})]})})]})]})]})}),(0,Fa.jsx)(Dl,{children:(0,Fa.jsxs)("div",{style:{maxWidth:660,width:"100%"},children:[(0,Fa.jsx)(Il,{style:{marginBottom:53},children:"\u0424\u041e\u0420\u041c\u0410 \u041e\u0411\u0420\u0410\u0422\u041d\u041e\u0419 \u0421\u0412\u042f\u0417\u0418"}),(0,Fa.jsxs)("form",{onSubmit:t=>function(t){t.stopPropagation(),t.preventDefault(),console.log(e,r)}(t),children:[(0,Fa.jsx)(gl,{style:{marginBottom:63},placeholder:"E-MAIL",name:"email",onChange:e=>n(e.target.value)}),(0,Fa.jsx)(gl,{style:{marginBottom:59},placeholder:"\u0421\u041e\u041e\u0411\u0429\u0415\u041d\u0418\u0415",name:"message",onChange:e=>o(e.target.value)}),(0,Fa.jsx)(Wl,{type:"submit",children:(0,Fa.jsx)($l,{className:"button-text",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})]})})]}),(0,Fa.jsxs)("div",{style:{position:"relative",display:"flex",justifyContent:"center"},children:[(0,Fa.jsx)("div",{style:{position:"absolute",width:"100%",maxWidth:"1800px",display:"flex",justifyContent:"center",marginTop:"235px",marginLeft:"239px"},children:(0,Fa.jsx)("img",{src:Fl,alt:"mark"})}),(0,Fa.jsx)("img",{src:zl,alt:"map"})]})]})}const Ql=Io.button`
  border: none;
  outline: none;
  background: unset;
  position: absolute;
  top: 22px;
  right: 22px;

  &:hover,
  &:focus {
    cursor: pointer;

    .button-svg {
      stroke: #d9ff5a;
    }
  }
`;function ql(e){let{style:t,onClick:n}=e;return(0,Fa.jsx)(Ql,{style:t,onClick:n,children:(0,Fa.jsxs)("svg",{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,Fa.jsx)("path",{className:"button-svg",d:"M27 9L9 27",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),(0,Fa.jsx)("path",{className:"button-svg",d:"M9 9L27 27",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})})}const Yl=Io.p`
  color: white;
  font-family: Le Murmure;
  font-weight: 600;
  font-size: 45px;
  line-height: 50.45px;
  margin: 0;
  margin-left: 20px;
  white-space: nowrap;
`,Zl=Io.div`
  display: flex;
  align-items: center;
  height: 37px;
  max-width: 1736px;
  position: absolute;
  width: 100%;
  top: 53px;
  z-index: 1;
`,Gl=Io.div`
  height: 6px;
  width: 6px;
  border-radius: 3px;
  background-color: white;
`,Xl=Io.p`
  margin: 0;
  margin-left: 5px;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  color: white;
`,Jl=Io.div`
  display: flex;
  align-items: center;
  height: 15px;
  width: 98px;
  justify-content: space-between;
  margin-left: 10px;
`,es=Io.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 13px;
  width: 155px;
`,ts=Io.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 26px;
  width: 94px;
`,ns=Io.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 132px;
  margin-right: 20px;
`,rs=Io.dialog`
  background-color: #3320652e;
  border: unset;
  padding: 0;
  top: 120px;
  margin-right: 20px;
  border-radius: 30px;
  backdrop-filter: blur(30px);
  position: absolute;
  z-index: 3;
`,os=Io.button`
  margin: 0;
  margin-left: 5px;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  color: white;
  background: unset;
  border: unset;
  outline: none;

  &:hover,
  &:focus {
    cursor: pointer;
    color: #d9ff5a;
  }
`,is=Io.dialog`
  border: unset;
  padding: 0;
  background: unset;

  &::backdrop {
    backdrop-filter: blur(100px);
  }

  &#ContactHandler {
    width: 100%;
    max-width: 1800px;
  }
`,as=Io.button`
  margin-left: 10px;
  outline: none;
  border: none;
  background: unset;

  &:hover,
  &:focus {
    cursor: pointer;

    .heart-svg,
    .cart-svg,
    .user-svg {
      fill: #d9ff5a !important;
    }
  }
`,ls=Io.span`
  position: absolute;
  color: white;
  background-color: red;
  border-radius: 50%;
  font-size: 10px;
  height: 15px;
  width: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  right: -8px;
  top: -6px;
  pointer-events: none;
`;function ss(){const e=Xo((e=>e.cart.itemsInCart));return(0,Fa.jsxs)(Fa.Fragment,{children:[(0,Fa.jsxs)(Zl,{children:[(0,Fa.jsx)(Yl,{children:"Elfen lied"}),(0,Fa.jsx)("div",{style:{maxWidth:"133px",width:"100%"}}),(0,Fa.jsxs)(Jl,{children:[(0,Fa.jsxs)("div",{style:{height:15,width:15},children:[(0,Fa.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:3},children:[(0,Fa.jsx)(Gl,{}),(0,Fa.jsx)(Gl,{})]}),(0,Fa.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,Fa.jsx)(Gl,{}),(0,Fa.jsx)(Gl,{})]})]}),(0,Fa.jsx)(Xl,{children:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433"})]}),(0,Fa.jsx)("div",{style:{maxWidth:"387px",width:"100%"}}),(0,Fa.jsxs)(es,{children:[(0,Fa.jsx)(os,{onClick:e=>document.getElementById("blog").scrollIntoView({behavior:"smooth"}),children:"\u0411\u043b\u043e\u0433"}),(0,Fa.jsx)(os,{onClick:e=>{window.ContactHandler.showModal()},children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})]}),(0,Fa.jsx)("div",{style:{maxWidth:"360px",width:"100%"}}),(0,Fa.jsxs)(ts,{children:[(0,Fa.jsx)($t,{}),(0,Fa.jsx)(Xl,{children:"\u041f\u043e\u0438\u0441\u043a"})]}),(0,Fa.jsx)("div",{style:{maxWidth:"247px",width:"100%"}}),(0,Fa.jsxs)(ns,{children:[(0,Fa.jsx)(as,{onClick:e=>{window.FavoriteHandler.show(),window.CartHandler.close(),window.AuthorizationHandler.close(),window.RegistrationHandler.close()},children:(0,Fa.jsx)("svg",{className:"heart-svg",width:"22",height:"20",viewBox:"0 0 22 20",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:(0,Fa.jsx)("path",{d:"M15.884 0C13.893 0 12.111 0.988764 11 2.50562C9.889 0.988764 8.107 0 6.116 0C2.739 0 0 2.80899 0 6.2809C0 7.61798 0.209 8.85393 0.572 10C2.31 15.618 7.667 18.9775 10.318 19.8989C10.692 20.0337 11.308 20.0337 11.682 19.8989C14.333 18.9775 19.69 15.618 21.428 10C21.791 8.85393 22 7.61798 22 6.2809C22 2.80899 19.261 0 15.884 0Z"})})}),(0,Fa.jsx)(as,{onClick:e=>{window.AuthorizationHandler.show(),window.CartHandler.close(),window.FavoriteHandler.close(),window.RegistrationHandler.close()},children:(0,Fa.jsx)("svg",{className:"user-svg",width:"18",height:"21",viewBox:"0 0 18 21",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:(0,Fa.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M14 5C14 7.76142 11.7614 10 9 10C6.23858 10 4 7.76142 4 5C4 2.23858 6.23858 0 9 0C11.7614 0 14 2.23858 14 5ZM0 19.5C0 15.36 4.0396 13 9 13C13.9604 13 18 15.36 18 19.5C18 20.585 17.4157 21 16.5149 21H1.48515C1.07905 21 0 21 0 19.5Z"})})}),(0,Fa.jsxs)("div",{style:{position:"relative",display:"flex"},children:[(0,Fa.jsx)(as,{onClick:e=>{window.CartHandler.show(),window.FavoriteHandler.close(),window.AuthorizationHandler.close(),window.RegistrationHandler.close()},children:(0,Fa.jsx)("svg",{className:"cart-svg",width:"21",height:"22",viewBox:"0 0 21 22",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:(0,Fa.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.71513 2.69L3.51817 5.14C3.47877 5.61 3.84315 6 4.30601 6H19.3833C19.7969 6 20.1416 5.68 20.1712 5.26C20.2992 3.49 18.9697 2.05 17.2266 2.05H5.12339C5.02491 1.61 4.82795 1.19 4.52266 0.84C4.03026 0.31 3.3409 0 2.63184 0H0.918289C0.51452 0 0.179688 0.34 0.179688 0.75C0.179688 1.16 0.51452 1.5 0.918289 1.5H2.63184C2.93713 1.5 3.22273 1.63 3.42953 1.85C3.63634 2.08 3.73482 2.38 3.71513 2.69ZM9.17969 20C9.17969 21.1046 8.28426 22 7.17969 22C6.07512 22 5.17969 21.1046 5.17969 20C5.17969 18.8954 6.07512 18 7.17969 18C8.28426 18 9.17969 18.8954 9.17969 20ZM17.1797 20C17.1797 21.1046 16.2843 22 15.1797 22C14.0751 22 13.1797 21.1046 13.1797 20C13.1797 18.8954 14.0751 18 15.1797 18C16.2843 18 17.1797 18.8954 17.1797 20ZM4.32925 8H19.4005C19.8623 8 20.216 8.37818 20.1767 8.82424L19.8525 13.3527C19.7444 14.8073 18.4475 16 16.9738 16H6.04859C4.36854 16 3.05202 14.5842 3.18956 12.9261L3.54326 8.70788C3.58256 8.3103 3.9166 8 4.32925 8Z"})})}),0!==e.length?(0,Fa.jsx)(ls,{children:e.length}):(0,Fa.jsx)(Fa.Fragment,{})]})]})]}),(0,Fa.jsxs)(rs,{id:"CartHandler",children:[(0,Fa.jsx)(ql,{onClick:e=>{window.CartHandler.close()}}),(0,Fa.jsx)(Ja,{})]}),(0,Fa.jsxs)(rs,{id:"FavoriteHandler",children:[(0,Fa.jsx)(ql,{onClick:e=>{window.FavoriteHandler.close()}}),(0,Fa.jsx)(hl,{})]}),(0,Fa.jsxs)(rs,{id:"AuthorizationHandler",children:[(0,Fa.jsx)(ql,{onClick:e=>{window.AuthorizationHandler.close()}}),(0,Fa.jsx)(Cl,{})]}),(0,Fa.jsxs)(rs,{id:"RegistrationHandler",children:[(0,Fa.jsx)(ql,{onClick:e=>{window.RegistrationHandler.close()}}),(0,Fa.jsx)(Nl,{})]}),(0,Fa.jsxs)(is,{id:"ContactHandler",children:[(0,Fa.jsx)(ql,{style:{position:"absolute",top:"22px",right:"20px"},onClick:e=>{window.ContactHandler.close()}}),(0,Fa.jsx)(Kl,{})]}),(0,Fa.jsx)(vt,{})]})}const us=n.p+"static/media/lamp3Big.3dd7383af04a80bf8ec6.png",cs=n.p+"static/media/chairBig.ae663ab087f7d0d3f925.png",ds=n.p+"static/media/tableBig.43c3666d23ddef101262.png",fs=n.p+"static/media/lamp3.6d542859f29e071a51bf.png",ps=n.p+"static/media/chair2.68bebcbdd478c002a9ef.png",hs=n.p+"static/media/table2.1df5b65263cca84dfcf0.png",ms=Io.button`
  max-width: 614px;
  min-width: 400px;
  border: none;
  flex: 1 1 400px;
  height: 1038px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 40px;
  margin: 20px 0px 0px 20px;
  outline: none;

  &:hover,
  &:focus {
    cursor: pointer;
    border: 2px solid #d9ff5a;

    .slide-image {
      transform: perspective(100px) translateZ(10px);
    }
  }
`,gs=Io.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 70px;
  line-height: 66.5px;
  color: #cbb6ff;
  margin: 0;
  white-space: nowrap;
  position: absolute;
  top: 236px;
`,ys=Io.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 25.36px;
  color: #ffffff;
  margin: 0;
  margin-top: 300px;
`,vs=Io.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 23px;
  color: #ffffff;
  margin: 0;
  text-align: center;
  width: 275px;
  margin-top: 25px;
`,xs=Io.div`
  display: flex;
  width: 95px;
  justify-content: space-between;
  margin-top: 28px;
`,bs=Io.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 28px;
  line-height: 26.6px;
  color: #ffffff;
  margin: 0;
`,ws=Io.p`
  font-family: Euclid Circular A;
  font-weight: 400;
  font-size: 20px;
  line-height: 25.36px;
  color: #ffffff;
  margin: 0;
`,Ss=Io.img`
  position: absolute;
`;function ks(e){let{style:t,image:n,author:r,productCategory:o,productDescription:i,price:a,onClick:l}=e;return(0,Fa.jsxs)(ms,{style:{background:t.backgroundColor},onClick:l,children:[(0,Fa.jsxs)("div",{style:{display:"flex",flexDirection:"column",position:"relative",alignItems:"center",justifyContent:"center",width:290,height:425,top:200},children:[(0,Fa.jsx)(gs,{style:{color:t.color},children:r}),(0,Fa.jsx)(Ss,{className:"slide-image",src:n,alt:"defProductImage"})]}),(0,Fa.jsx)(ys,{children:o}),(0,Fa.jsx)(vs,{children:i}),(0,Fa.jsx)("div",{style:{width:"274px",height:"2px",background:"#FFFFFF33",marginTop:28}}),(0,Fa.jsxs)(xs,{children:[(0,Fa.jsx)(bs,{children:a}),(0,Fa.jsx)(ws,{children:"\u20bd"})]})]})}const Cs=[{id:0,style:{backgroundColor:"#C5B0FAB2",color:"#CBB6FF"},image:n.p+"static/media/lampDef.30cb2b1ddf29b8899304.png",author:"BENJAMIN MOORE",productCategory:"\u0421\u0412\u0415\u0422\u0418\u041b\u042c\u041d\u0418\u041a",productDescription:"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0441\u043a\u0430\u044f \u043b\u0430\u043c\u043f\u0430 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u043e\u0433\u043e \u043e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u044f",price:"150 000"},{id:1,style:{backgroundColor:"#FA8FEF",color:"#FFA8F6"},image:n.p+"static/media/chairDef.0039aedfacf6a3150bb8.png",author:"PAINT HERE GLORY",productCategory:"\u041a\u0420\u0415\u0421\u041b\u041e",productDescription:"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0441\u043a\u043e\u0435 \u043a\u0440\u0435\u0441\u043b\u043e \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u044c\u0435\u0440\u0430",price:"120 000"},{id:2,style:{backgroundColor:"#AECFFF",color:"#C8DEFF"},image:n.p+"static/media/tableDef.210ca3ce26fa0ed06520.png",author:"BENJAMIN MOORE",productCategory:"\u0421\u0422\u041e\u041b",productDescription:"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0441\u043a\u0430\u044f \u043b\u0430\u043c\u043f\u0430 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u043e\u0433\u043e \u043e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u044f",price:"235 000"}];function Es(e){let{onViewChange:t}=e;let n=[function(e){e.stopPropagation(),t[0]({firstSlide:!0,secondSlide:!1,thirdSlide:!1}),t[1](!1)},function(e){e.stopPropagation(),t[0]({firstSlide:!1,secondSlide:!0,thirdSlide:!1}),t[1](!1)},function(e){e.stopPropagation(),t[0]({firstSlide:!1,secondSlide:!1,thirdSlide:!0}),t[1](!1)}];return(0,Fa.jsx)(Fa.Fragment,{children:Cs.map(((e,t)=>(0,Fa.jsx)(ks,{style:e.style,image:e.image,author:e.author,productCategory:e.productCategory,productDescription:e.productDescription,price:e.price,onClick:e=>n[t](e)},e.id)))})}const js=Ea({name:"notification",initialState:{notifications:[]},reducers:{addNotification(e,t){e.notifications.push(t.payload)},deleteNotification(e){e.notifications.splice(0,1)}}}),{addNotification:_s,deleteNotification:Ps}=js.actions,Rs=js.reducer,As=Io.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 30px;
  line-height: 30px;
  margin: 0;
  color: #ffffff;
  padding: 20px;
  margin-bottom: 10px;
  background-color: #0000007d;
  border-radius: 10px;
`;function Ts(e){let{className:t}=e;return(0,Fa.jsx)(As,{className:t,children:"\u0422\u043e\u0432\u0430\u0440 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443!"})}const Ns=Io(Ts)`
  &.first-layer {
    z-index: 3;
    background-color: #312f2f;
  }
  &.second-layer {
    z-index: 2;
    position: absolute;
    transform: translate3d(0px, 20px, 20px) scaleX(0.9);
  }
  &.third-layer {
    z-index: 1;
    position: absolute;
    transform: translate3d(0px, 10px, 10px) scaleX(0.95);
  }
`,Os=Io.div`
  display: flex;
  position: relative;
`;function zs(){return(0,Fa.jsxs)(Os,{children:[(0,Fa.jsx)(Ns,{className:"first-layer"}),(0,Fa.jsx)(Ns,{className:"second-layer"}),(0,Fa.jsx)(Ns,{className:"third-layer"})]})}const Fs=Io.p`
  margin: 0;
  font-family: Floreste;
  font-weight: 400;
  font-size: 212px;
  color: #cbb6ff99;
  text-wrap: nowrap;
  line-height: 201.4px;
`,Ls=Io.div`
  height: 1038px;
  margin: 20px 10px 0px 10px;
  width: 1180px;
  position: relative;
  border-radius: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 1200px) {
    .product-image {
      width: 325px;
      height: 600px;
    }
    .author-name {
      font-size: 175px;
    }
  }
  @media only screen and (max-width: 1000px) {
    .product-image {
      width: 300px;
      height: 550px;
    }
    .author-name {
      font-size: 150px;
    }
  }
`,Ds=Io.p`
  margin: 0;
  font-family: Euclid Circular A;
  color: #d9ff5a;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  margin-bottom: 31px;
`,Is=Io.div`
  width: 312px;
  height: 195px;
  margin-left: 60px;
`,Ms=Io.h2`
  margin: 0;
  font-family: Euclid Circular A;
  color: white;
  font-weight: 500;
  font-size: 28px;
  line-height: 35.5px;
  margin-bottom: 9px;
`,Bs=Io.p`
  margin: 0;
  font-family: Euclid Circular A;
  color: white;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  margin-bottom: 26px;
`,Us=Io.div`
  border: 0.5px solid #ffffff33;
  width: 274px;
  margin-bottom: 28px;
`,Hs=Io.div`
  display: flex;
  width: 127px;
  height: 28px;
  justify-content: space-between;
`,Ws=Io.p`
  margin: 0;
  font-family: Floreste;
  color: #d9ff5a;
  font-weight: 400;
  font-size: 40px;
  line-height: 38px;
`,$s=Io.p`
  margin: 0;
  font-family: Euclid Circular A;
  color: #d9ff5a;
  font-weight: 400;
  font-size: 20px;
  line-height: 15px;
`,Vs=Io.button`
  width: 357px;
  height: 156px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
  border: unset;
  background: unset;
  outline: none;

  &:hover,
  &:focus {
    cursor: pointer;

    .button-svg {
      fill: ${e=>e.background};
    }
    .button-text {
      color: ${e=>e.background};
    }
    .button-ellipse {
      background: #d9ff5a !important;
    }
  }
`,Ks=Io.p`
  margin-left: 11px;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  color: white;
  z-index: 2;
`,Qs=Io.div`
  width: 352px;
  height: 131px;
  border: 2px solid #d9ff5a;
  position: absolute;
  border-radius: 50%;
`,qs=Io.div`
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 2;
`;function Ys(e){let{id:t,category:n,author:r,image:o,productName:i,productDescription:a,productPrice:l,background:s,color:u}=e;const c=Xo((e=>e.notification.notifications)),d=ci();return(0,Fa.jsxs)(Ls,{style:{background:s},children:[(0,Fa.jsxs)("div",{style:{position:"relative",top:406,marginBottom:140},children:[(0,Fa.jsx)(Ds,{children:"\u0422\u041e\u0412\u0410\u0420 \u0414\u041d\u042f"}),(0,Fa.jsx)(Fs,{className:"author-name",style:{color:u},children:r})]}),(0,Fa.jsx)("img",{className:"product-image",style:{position:"absolute",top:"155px"},src:o,alt:"productImage"}),(0,Fa.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%",position:"relative",top:400},children:[(0,Fa.jsxs)(Is,{children:[(0,Fa.jsx)(Ms,{children:i}),(0,Fa.jsx)(Bs,{children:a}),(0,Fa.jsx)(Us,{}),(0,Fa.jsxs)(Hs,{children:[(0,Fa.jsx)(Ws,{children:l}),(0,Fa.jsx)($s,{children:"\u20bd"})]})]}),(0,Fa.jsxs)(Vs,{background:"unset"!==s?s:"#ae97e8",onClick:e=>function(e){let r={id:t,count:1,image:o,background:s,name:i,price:l,category:n};e.stopPropagation(),d(Aa(r));let a=Date.now().toString();d(_s({id:a})),setTimeout((()=>{d(Ps())}),3e3)}(e),children:[(0,Fa.jsx)("svg",{style:{zIndex:2},className:"button-svg",width:"21",height:"22",viewBox:"0 0 21 22",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:(0,Fa.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.71513 2.69L3.51817 5.14C3.47877 5.61 3.84315 6 4.30601 6H19.3833C19.7969 6 20.1416 5.68 20.1712 5.26C20.2992 3.49 18.9697 2.05 17.2266 2.05H5.12339C5.02491 1.61 4.82795 1.19 4.52266 0.84C4.03026 0.31 3.3409 0 2.63184 0H0.918289C0.51452 0 0.179688 0.34 0.179688 0.75C0.179688 1.16 0.51452 1.5 0.918289 1.5H2.63184C2.93713 1.5 3.22273 1.63 3.42953 1.85C3.63634 2.08 3.73482 2.38 3.71513 2.69ZM9.17969 20C9.17969 21.1046 8.28426 22 7.17969 22C6.07512 22 5.17969 21.1046 5.17969 20C5.17969 18.8954 6.07512 18 7.17969 18C8.28426 18 9.17969 18.8954 9.17969 20ZM17.1797 20C17.1797 21.1046 16.2843 22 15.1797 22C14.0751 22 13.1797 21.1046 13.1797 20C13.1797 18.8954 14.0751 18 15.1797 18C16.2843 18 17.1797 18.8954 17.1797 20ZM4.32925 8H19.4005C19.8623 8 20.216 8.37818 20.1767 8.82424L19.8525 13.3527C19.7444 14.8073 18.4475 16 16.9738 16H6.04859C4.36854 16 3.05202 14.5842 3.18956 12.9261L3.54326 8.70788C3.58256 8.3103 3.9166 8 4.32925 8Z"})}),(0,Fa.jsx)(Ks,{className:"button-text",children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),(0,Fa.jsx)(Qs,{className:"button-ellipse",style:{top:"12px",backgroundColor:"#ffffff30",transform:"rotate(-13deg)"}}),(0,Fa.jsx)(Qs,{style:{transform:"rotate(-2deg)"}})]})]}),(0,Fa.jsx)(qs,{children:c.length>3?(0,Fa.jsx)(zs,{}):c.map((e=>(0,Fa.jsx)(Ts,{},e.id)))})]})}const Zs=Io.button`
  min-width: 340px;
  margin: 20px 10px 0px 10px;
  flex: 1 1;
  height: 1038px;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  outline: none;
  border: none;
  box-size: border-box;

  &:hover,
  &:focus {
    cursor: pointer;
    border: 2px solid #d9ff5a;

    .closed-slide-image {
      transform: perspective(100px) translateZ(10px);
    }
  }
`,Gs=Io.div`
  margin-bottom: 69px;
  width: 58px;
  height: 81px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`,Xs=Io.p`
  margin: 0;
  font-family: Euclid Circular A;
  font-size: 15px;
  font-weight: 500;
  line-height: 19.02px;
  color: #ffffff99;
`,Js=Io.p`
  margin: 0;
  font-family: Floreste;
  font-size: 40px;
  font-weight: 400;
  line-height: 38px;
  color: #ffffff;
`,eu=Io.img`
  transform: rotate(7deg);
`;function tu(e){let{color:t,image:n,number:r,id:o,onViewChange:i}=e;return(0,Fa.jsxs)(Zs,{style:{background:`${t}`},onClick:e=>function(e){e.stopPropagation(),"1"===o?i[0]({firstSlide:!0,secondSlide:!1,thirdSlide:!1}):"2"===o?i[0]({firstSlide:!1,secondSlide:!0,thirdSlide:!1}):i[0]({firstSlide:!1,secondSlide:!1,thirdSlide:!0})}(e),children:[(0,Fa.jsx)("div",{style:{width:1,height:1}}),(0,Fa.jsx)(eu,{className:"closed-slide-image",src:n,alt:"productSlideImage"}),(0,Fa.jsxs)(Gs,{children:[(0,Fa.jsx)(Xs,{children:"\u0441\u043b\u0430\u0439\u0434"}),(0,Fa.jsx)(Js,{children:r})]})]})}const nu=Io.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`;function ru(){const[e,n]=(0,t.useState)(!0),[r,o]=(0,t.useState)({firstSlide:!1,secondSlide:!1,thirdSlide:!1});return(0,Fa.jsx)(nu,{children:e?(0,Fa.jsx)(Es,{onViewChange:[o,n]}):(0,Fa.jsxs)(Fa.Fragment,{children:[r.firstSlide?(0,Fa.jsx)(Ys,{id:"111",category:"\u0421\u0432\u0435\u0442\u0438\u043b\u044c\u043d\u0438\u043a",author:"BENJAMIN MOORE",image:us,productName:"\u0421\u0412\u0415\u0422\u0418\u041b\u042c\u041d\u0418\u041a",productDescription:"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0441\u043a\u0430\u044f \u043b\u0430\u043c\u043f\u0430 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u043e\u0433\u043e \u043e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u044f",productPrice:"150 000",background:"unset"}):(0,Fa.jsx)(tu,{id:"1",color:"#C5B0FAB2",image:fs,number:"01",onViewChange:[o,n]}),r.secondSlide?(0,Fa.jsx)(Ys,{id:"222",category:"\u041a\u0440\u0435\u0441\u043b\u043e",author:"PAINT THE GLORY",image:cs,productName:"\u041a\u0420\u0415\u0421\u041b\u041e",productDescription:"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0441\u043a\u043e\u0435 \u043a\u0440\u0435\u0441\u043b\u043e \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0443\u044e\u0442\u0430 \u0432 \u043f\u043e\u043c\u0435\u0449\u0435\u043d\u0438\u0438",productPrice:"120 000",background:"#FA8FEF",color:"#FFA8F6"}):(0,Fa.jsx)(tu,{id:"2",color:"#FA8FEF",image:ps,number:"02",onViewChange:[o,n]}),r.thirdSlide?(0,Fa.jsx)(Ys,{id:"333",category:"\u0421\u0442\u043e\u043b",author:"BENJAMIN MOORE",image:ds,productName:"\u0412\u042b\u0421\u041e\u041a\u0418\u0419 \u0421\u0422\u041e\u041b",productDescription:"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0441\u043a\u0438\u0439 \u0441\u0442\u043e\u043b \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u0430 \u0432 \u043f\u043e\u043c\u0435\u0449\u0435\u043d\u0438\u0438",productPrice:"235 000",background:"#AECFFF",color:"#BED8FF"}):(0,Fa.jsx)(tu,{id:"3",color:"#AECFFF",image:hs,number:"03",onViewChange:[o,n]})]})})}const ou=n.p+"static/media/Subtract.29db299ac0f1095ff9a06627d03047cd.svg",iu=Io.button`
  --widthA: 428px;
  --heightA: 517px;
  width: var(--widthA);
  height: var(--heightA);
  position: relative;
  margin: 0px 10px 20px 10px;
  overflow: hidden;
  background: unset;
  border: none;
  outline: none;
  display: flex;
  text-align: start;
  padding-inline: 0px;

  &:hover,
  &:focus {
    cursor: pointer;

    .category-button {
      background: #d9ff5a;
    }
    .svg-arrow-path {
      stroke: #ae97e8;
    }
    .category-image {
      transform: perspective(100px) translateZ(10px);
    }
  }

  @media (max-width: 1820px) {
    width: calc(var(--widthA) * 0.8);
    height: calc(var(--heightA) * 0.8);
  }
`,au=Io.p`
  --font-sizeA: 28px;
  --line-heightA: 35.5px;
  --widthA: 184px;
  --topA: 37px;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: var(--font-sizeA);
  line-height: var(--line-heightA);
  position: absolute;
  top: var(--topA);
  color: white;
  width: var(--widthA);
  margin: 0;

  @media (max-width: 1820px) {
    font-size: calc(var(--font-sizeA) * 0.8);
    line-height: calc(var(--line-heightA) * 0.8);
    width: calc(var(--widthA) * 0.8);
    top: calc(var(--topA) * 0.8);
  }
`,lu=Io.div`
  --widthA: 97px;
  --heightA: 97px;
  --topA: 416px;
  --leftA: 144px;
  width: var(--widthA);
  height: var(--heightA);
  border-radius: 50%;
  position: absolute;
  border: 2px solid #d9ff5a;
  top: var(--topA);
  left: var(--leftA);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ebe3ff30;

  @media (max-width: 1820px) {
    height: calc(var(--heightA) * 0.8);
    width: calc(var(--widthA) * 0.8);
    top: calc(var(--topA) * 0.8);
    left: calc(var(--leftA) * 0.8);
  }
`,su=Io.div`
  --widthA: 81px;
  --heightA: 72px;
  --topA: 151px;
  --leftA: 342px;
  width: var(--widthA);
  height: var(--heightA);
  position: absolute;
  top: var(--topA);
  left: var(--leftA);
  transform: rotate(-23deg);
  border-radius: 50%;
  background: #fa8fef;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1820px) {
    height: calc(var(--heightA) * 0.8);
    width: calc(var(--widthA) * 0.8);
    top: calc(var(--topA) * 0.8);
    left: calc(var(--leftA) * 0.8);
  }
`,uu=Io.p`
  --font-sizeA: 40px;
  --line-heightA: 38px;
  font-size: var(--font-sizeA);
  line-height: var(--line-heightA);
  font-family: Floreste;
  font-weight: 400;
  margin: 0px;
  color: white;
  margin-right: 2;

  @media (max-width: 1820px) {
    font-size: calc(var(--font-sizeA) * 0.8);
    line-height: calc(var(--line-heightA) * 0.8);
  }
`,cu=Io.p`
  --font-sizeA: 15px;
  --line-heightA: 19.02px;
  --margin-topA: 8px;
  font-size: var(--font-sizeA);
  line-height: var(--line-heightA);
  font-family: Euclid Circular A;
  font-weight: 500;
  margin: 0px;
  color: white;
  margin-left: 5px;
  margin-top: var(--margin-topA);

  @media (max-width: 1820px) {
    font-size: calc(var(--font-sizeA) * 0.8);
    line-height: calc(var(--line-heightA) * 0.8);
    margin-top: calc(var(--margin-topA) * 0.8);
  }
`,du=Io.div`
  --widthA: 388px;
  --heightA: 462px;
  width: var(--widthA);
  height: var(--heightA);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1820px) {
    height: calc(var(--heightA) * 0.8);
    width: calc(var(--widthA) * 0.8);
  }
`,fu=Io.img`
  --heightA: 248px;
  height: var(--heightA);

  @media (max-width: 1820px) {
    height: calc(var(--heightA) * 0.8);
  }
`,pu=Io.img`
  --heightA: 462px;
  height: var(--heightA);

  @media (max-width: 1820px) {
    height: calc(var(--heightA) * 0.8);
  }
`,hu=Io.div`
  position: absolute;
  top: 300px;
  left: -50px;
  width: 196px;
  height: 89px;
  transform: rotate(-143deg);

  @media (max-width: 1820px) {
    top: 206px;
    left: -56px;
    transform: rotate(-134deg);
  }
`,mu="\u0438\u0437\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u0437\u0430\u043a\u0430\u0437".split(""),gu=3;function yu(e){let{cardName:t,image:n,onClick:r}=e;return(0,Fa.jsxs)(iu,{onClick:r,children:[(0,Fa.jsx)(du,{children:(0,Fa.jsx)(fu,{className:"category-image",src:n,alt:"cardImage"})}),(0,Fa.jsx)(hu,{children:mu.map(((e,t)=>(0,Fa.jsx)("span",{style:{height:450,position:"absolute",transform:`rotate(${t*gu}deg)`,color:"white"},children:e},t)))}),(0,Fa.jsx)(pu,{src:ou,alt:"ellipse"}),(0,Fa.jsx)(au,{children:t}),(0,Fa.jsx)(lu,{className:"category-button",children:(0,Fa.jsx)("svg",{width:"22",height:"34",viewBox:"0 0 22 34",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Fa.jsx)("path",{className:"svg-arrow-path",d:"M21 22.6667C19.94 22.6667 18.3571 23.7051 17.0286 24.7562C15.3143 26.1077 13.8186 27.7227 12.6771 29.5743C11.8214 30.9627 11 32.6457 11 34M11 34C11 32.6457 10.1786 30.9612 9.32286 29.5743C8.18 27.7227 6.68429 26.1077 4.97286 24.7562C3.64286 23.7051 2.05714 22.6667 1 22.6667M11 34L11 -1.11265e-06",stroke:"#d9ff5a",strokeWidth:"2",strokeLinecap:"round"})})}),(0,Fa.jsxs)(su,{children:[(0,Fa.jsx)(uu,{children:"4"}),(0,Fa.jsx)(cu,{children:"\u0448\u0442"})]})]})}const vu=n.p+"static/media/mirror.02cc66d4affa479960ca.png",xu=n.p+"static/media/mainLamp.84a59bebc226d7bc39f2.png",bu=n.p+"static/media/mainChair.be5ee75688c39d7b9d50.png",wu=n.p+"static/media/mainTable.8b694cc009a4758892f8.png",Su=n.p+"static/media/mirrorCategory1.3e2c5dceff4e1c184de2.png",ku=n.p+"static/media/mirror2.ccac0dca99e620a33fdf.png",Cu=n.p+"static/media/mirror3.e92c414ddd62b62315f6.png",Eu=n.p+"static/media/mirror4.a7e03c49a916bdde5216.png",ju=n.p+"static/media/mirror5.a5d26ba15e4eed3a8e34.png",_u=n.p+"static/media/categoryLamp1.e24e45ee4a54cb5a60b8.png",Pu=n.p+"static/media/categoryLamp2.0ba6b2bc48faed5f5eaf.png",Ru=n.p+"static/media/categoryLamp3.371be77e2010c4d61076.png",Au=n.p+"static/media/categoryLamp4.dde1776dd544a3143e60.png",Tu=n.p+"static/media/categoryLamp5.25f0654b083dd0eaa554.png",Nu=n.p+"static/media/chair1.9e20bb8d5df24448ba8e.png",Ou=n.p+"static/media/chair22.d7b97846f84272e0f60a.png",zu=n.p+"static/media/chair3.f1956a4df2204141c27d.png",Fu=n.p+"static/media/chair4.4888835d89b7403188ec.png",Lu=n.p+"static/media/chair5.80fe22ab8034f3a8dda7.png",Du=n.p+"static/media/table1.889b8645492e804fc672.png",Iu=n.p+"static/media/table22.9e8b33daefe2e819f4e3.png",Mu=n.p+"static/media/table3.ac8b2e802be674d954da.png",Bu=n.p+"static/media/table4.9a0368f0f10abd95e587.png",Uu=n.p+"static/media/table5.17aebd93ab2881cd6085.png",Hu=[{id:0,count:1,background:"#A5D4FF",image:Su,name:"KRISTIN",category:"\u0417\u0435\u043a\u0440\u0430\u043b\u0430 \u043d\u0430\u043f\u043e\u043b\u044c\u043d\u044b\u0435",price:"150 000"},{id:1,count:1,background:"#F0B3EA",image:ku,name:"ARLENE",category:"\u0417\u0435\u043a\u0440\u0430\u043b\u0430 \u043d\u0430\u043f\u043e\u043b\u044c\u043d\u044b\u0435",price:"150 000"},{id:2,count:1,background:"#8ECDFA",image:Cu,name:"COLLENE",category:"\u0417\u0435\u043a\u0440\u0430\u043b\u0430 \u043d\u0430\u043f\u043e\u043b\u044c\u043d\u044b\u0435",price:"150 000"},{id:3,count:1,background:"#FBE4CA",image:Eu,name:"COPPELIA",category:"\u0417\u0435\u043a\u0440\u0430\u043b\u0430 \u043d\u0430\u043f\u043e\u043b\u044c\u043d\u044b\u0435",price:"150 000"},{id:4,count:1,background:"#F0B5FA",image:ju,name:"ARTEMIDE",category:"\u0417\u0435\u043a\u0440\u0430\u043b\u0430 \u043d\u0430\u043f\u043e\u043b\u044c\u043d\u044b\u0435",price:"150 000"}],Wu=[{id:5,count:1,background:"#FFC4A5",image:_u,name:"AUBREY",category:"\u041b\u0430\u043c\u043f\u0430 \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u0430\u044f",price:"150 000"},{id:6,count:1,background:"#88E379",image:Pu,name:"LESLIE",category:"\u041b\u0430\u043c\u043f\u0430 \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u0430\u044f",price:"150 000"},{id:7,count:1,background:"#FA8EEF",image:Ru,name:"DARRELL",category:"\u041b\u0430\u043c\u043f\u0430 \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u0430\u044f",price:"150 000"},{id:8,count:1,background:"#29D0D9",image:Au,name:"COPPELIA",category:"\u041b\u0430\u043c\u043f\u0430 \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u0430\u044f",price:"150 000"},{id:9,count:1,background:"#89D5FF",image:Tu,name:"ARTEMIDE",category:"\u041b\u0430\u043c\u043f\u0430 \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u0430\u044f",price:"150 000"}],$u=[{id:10,count:1,background:"#FBE4CA",image:Nu,name:"KATHRYN",category:"\u0421\u0442\u0443\u043b",price:"150 000"},{id:11,count:1,background:"#F0B3EA",image:Ou,name:"WENDY",category:"\u0421\u0442\u0443\u043b",price:"150 000"},{id:12,count:1,background:"#F18EFA",image:zu,name:"JUDITH",category:"\u0421\u0442\u0443\u043b",price:"150 000"},{id:13,count:1,background:"#5C544A",image:Fu,name:"JANE",category:"\u0421\u0442\u0443\u043b",price:"150 000"},{id:14,count:1,background:"#F0B5FA",image:Lu,name:"DARLENE",category:"\u0421\u0442\u0443\u043b",price:"150 000"}],Vu=[{id:15,count:1,background:"#FBE4CA",image:Du,name:"KATHRYN",category:"\u0421\u0442\u043e\u043b",price:"150 000"},{id:16,count:1,background:"#F0B3EA",image:Iu,name:"WENDY",category:"\u0421\u0442\u043e\u043b",price:"150 000"},{id:17,count:1,background:"#F18EFA",image:Mu,name:"JUDITH",category:"\u0421\u0442\u043e\u043b",price:"150 000"},{id:18,count:1,background:"#5C544A",image:Bu,name:"JANE",category:"\u0421\u0442\u043e\u043b",price:"150 000"},{id:19,count:1,background:"#F0B5FA",image:Uu,name:"DARLENE",category:"\u0421\u0442\u043e\u043b",price:"150 000"}],Ku=Io.div`
  position: relative;
  margin: 10px 0px 0px 0px;
  flex: 1;
`,Qu=Io.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,qu=Io.div`
  position: absolute;
  box-sizing: border-box;
  top: 7px;
  left: 2px;
  width: 20px;
  height: 20px;
  border: 3px solid white;
  background: ${e=>e.background};
  border-radius: 50%;
`,Yu=Io.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px 0px 0px 0px;
`,Zu=Io.h2`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 28px;
  line-height: 35.5px;
  margin: 0px;
  color: white;
`,Gu=Io.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 23px;
  margin: 0px;
  color: white;
  margin-bottom: 19px;
`,Xu=Io.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,Ju=Io.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 28px;
  line-height: 26.6px;
  margin: 0px;
  color: white;
`,ec=Io.p`
  font-family: Euclid Circular A;
  font-weight: 400;
  font-size: 20px;
  line-height: 15.36px;
  margin: 0px;
  color: white;
`,tc=Io.button`
  margin: 0px;
  padding: 0px;
  width: 104px;
  height: 24px;
  display: flex;
  align-items: center;
  background: unset;
  border: none;
  margin-bottom: 7px;
  outline: none;

  &:hover,
  &:focus {
    cursor: pointer;

    .button-text {
      color: #d9ff5a;
    }
  }
`,nc=Io.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin: 0px;
  color: white;
  margin-left: 11px;
`;function rc(e){let{image:t,background:n,name:r,category:o,price:i,onClick:a}=e;return(0,Fa.jsxs)(Ku,{children:[(0,Fa.jsx)(qu,{background:n}),(0,Fa.jsx)(Qu,{children:(0,Fa.jsx)("img",{src:t,alt:"product"})}),(0,Fa.jsxs)(Yu,{children:[(0,Fa.jsx)(Zu,{children:r}),(0,Fa.jsx)(Gu,{children:o}),(0,Fa.jsx)("div",{style:{border:"2px solid #D9FF5A",width:"100%",marginBottom:"28px"}}),(0,Fa.jsxs)(Xu,{children:[(0,Fa.jsxs)("div",{style:{display:"flex",width:95,justifyContent:"space-between"},children:[(0,Fa.jsx)(Ju,{children:i}),(0,Fa.jsx)(ec,{children:"\u20bd"})]}),(0,Fa.jsxs)(tc,{onClick:a,children:[(0,Fa.jsx)("svg",{width:"21",height:"22",viewBox:"0 0 21 22",fill:"#D9FF5A",xmlns:"http://www.w3.org/2000/svg",children:(0,Fa.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.71513 2.69L3.51817 5.14C3.47877 5.61 3.84315 6 4.30601 6H19.3833C19.7969 6 20.1416 5.68 20.1712 5.26C20.2992 3.49 18.9697 2.05 17.2266 2.05H5.12339C5.02491 1.61 4.82795 1.19 4.52266 0.84C4.03026 0.31 3.3409 0 2.63184 0H0.918289C0.51452 0 0.179688 0.34 0.179688 0.75C0.179688 1.16 0.51452 1.5 0.918289 1.5H2.63184C2.93713 1.5 3.22273 1.63 3.42953 1.85C3.63634 2.08 3.73482 2.38 3.71513 2.69ZM9.17969 20C9.17969 21.1046 8.28426 22 7.17969 22C6.07512 22 5.17969 21.1046 5.17969 20C5.17969 18.8954 6.07512 18 7.17969 18C8.28426 18 9.17969 18.8954 9.17969 20ZM17.1797 20C17.1797 21.1046 16.2843 22 15.1797 22C14.0751 22 13.1797 21.1046 13.1797 20C13.1797 18.8954 14.0751 18 15.1797 18C16.2843 18 17.1797 18.8954 17.1797 20ZM4.32925 8H19.4005C19.8623 8 20.216 8.37818 20.1767 8.82424L19.8525 13.3527C19.7444 14.8073 18.4475 16 16.9738 16H6.04859C4.36854 16 3.05202 14.5842 3.18956 12.9261L3.54326 8.70788C3.58256 8.3103 3.9166 8 4.32925 8Z",fill:"#D9FF5A"})}),(0,Fa.jsx)(nc,{className:"button-text",children:"\u041a\u0443\u043f\u0438\u0442\u044c"})]})]})]})]})}const oc=Io.input`
  position: absolute;
  height: 0px;
  width: 260px;
  outline: none;
  pointer-events: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;

  &.thumb-left {
    z-index: 3;
  }
  &.thumb-right {
    z-index: 4;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    background: #d9ff5a;
    border: 2px solid #d9ff5a;
    border-radius: 50%;
    cursor: pointer;
    height: 21px;
    width: 21px;
    pointer-events: all;
    position: relative;
    background-clip: content-box;
    padding: 4px;
    box-shadow: inset 0 0 0 4px #ae97e8;
  }
  &::-moz-range-thumb {
    background: #d9ff5a;
    border: 2px solid #d9ff5a;
    border-radius: 50%;
    cursor: pointer;
    height: 21px;
    width: 21px;
    pointer-events: all;
    position: relative;
    background-clip: content-box;
    padding: 4px;
    box-shadow: inset 0 0 0 4px #ae97e8;
  }
`,ic=Io.div`
  position: relative;
  width: 260px;
  top: -1.5px;

  .slider-track,
  .slider-range {
    position: absolute;
  }
  .slider-track,
  .slider-range {
    height: 3px;
  }
  .slider-range {
    background-color: #d9ff5a;
    z-index: 2;
  }
  .slider-track {
    background-color: #ffffff;
    width: 100%;
    z-index: 1;
  }
`,ac=Io.input`
  width: 123px;
  height: 40px;
  border-radius: 11px;
  background: #ae97e8;
  margin: 0px;
  padding: 0px;
  border: unset;
  font-family: Euclid Circular A;
  font-weight: 500;
  color: white;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
`,lc=Io.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  color: white;
  font-size: 18px;
  line-height: 27px;
  margin: 0px;
  margin-bottom: 20px;
`;function sc(e){let{min:n,max:r}=e;const[o,i]=(0,t.useState)(n),[a,l]=(0,t.useState)(r),[s,u]=(0,t.useState)(0),[c,d]=(0,t.useState)(100),f=(0,t.useCallback)((e=>Math.round((e-n)/(r-n)*100)),[n,r]);function p(e){let t=Math.min(e.target.value,a-1e3);t<n&&(t=n),i(t)}function h(e){let t=Math.max(e.target.value,o+1e3);t>r&&(t=r),l(t)}return(0,t.useEffect)((()=>{const e=f(o),t=f(a);u(e),d(t-e)}),[o,f]),(0,t.useEffect)((()=>{const e=f(o),t=f(a);d(t-e)}),[a,f]),(0,Fa.jsxs)("div",{style:{padding:"20px 30px 30px 30px"},children:[(0,Fa.jsx)(lc,{children:"\u0426\u0435\u043d\u0430"}),(0,Fa.jsxs)("div",{style:{marginBottom:30},children:[(0,Fa.jsx)(ac,{type:"number",value:o,onChange:e=>p(e)}),(0,Fa.jsx)(ac,{style:{marginLeft:14},type:"number",value:a,onChange:e=>h(e)})]}),(0,Fa.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,Fa.jsx)(oc,{className:"thumb-left",type:"range",min:n,max:r,value:o,step:"1000",onChange:e=>{p(e)}}),(0,Fa.jsx)(oc,{className:"thumb-right",type:"range",min:n,max:r,step:"1000",value:a,onChange:e=>{h(e)}}),(0,Fa.jsxs)(ic,{children:[(0,Fa.jsx)("div",{className:"slider-track"}),(0,Fa.jsx)("div",{style:{left:`${s}%`,width:`${c}%`},className:"slider-range"})]})]})]})}const uc=Io.label`
  &.container {
    display: block;
    position: relative;
    padding-left: 25px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-family: Euclid Circular A;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: white;
    margin: 0px;
  }

  &.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 6.5px;
    left: 0;
    height: 14px;
    width: 14px;
    background-color: #cbb6ff;
    box-sizing: border-box;
    border: 2px solid #ae97e8;
    border-radius: 4px;
  }

  &.container input:checked ~ .checkmark {
    background-color: #d9ff5a;
  }
`;function cc(e){let{name:t,count:n}=e;return(0,Fa.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,Fa.jsxs)(uc,{className:"container",children:[t,(0,Fa.jsx)("input",{type:"checkbox"}),(0,Fa.jsx)("span",{className:"checkmark"}),(0,Fa.jsx)("span",{style:{color:"#ffffff69"},children:` (${n})`})]})})}const dc=Io.div`
  display: grid;
  grid-auto-flow: row dense;
  width: 100%;
  column-gap: 30px;
  row-gap: 30px;
  grid-template-columns: repeat(5, calc(20% - 25px));

  @media (max-width: 1400px) {
    column-gap: 25px;
    row-gap: 25px;
    grid-template-columns: repeat(4, calc(25% - 25px));
  }
  @media (max-width: 1200px) {
    column-gap: 30px;
    row-gap: 30px;
    grid-template-columns: repeat(3, calc(33.333334% - 30px));
  }
  @media (max-width: 900px) {
    column-gap: 30px;
    row-gap: 30px;
    grid-template-columns: repeat(2, calc(50% - 15px));
  }
  @media (max-width: 600px) {
    row-gap: 30px;
    grid-template-columns: repeat(1, calc(100%));
  }
`,fc=Io.button`
  position: relative;
  width: 319px;
  height: 135px;
  border: 2px solid #d9ff5a;
  background: #ffffff30;
  margin: 0px;
  padding: 0px;
  border-radius: 50%;
  transform: rotate(-13deg);
  margin-top: 51px;
  outline: none;

  &:hover,
  &:focus {
    cursor: pointer;

    .button-text {
      color: #d9ff5a;
    }
  }
`,pc=Io.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  color: white;
  transform: rotate(13deg);
  margin: 0px;
`,hc=Io.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  color: white;
`,mc=Io.button`
  background: unset;
  padding: 0px;
  border: none;
  display: flex;
  align-items: center;
  outline: none;

  &:hover,
  &:focus {
    cursor: pointer;

    .filter-label {
      color: #d9ff5a;
    }
  }
`,gc=Io.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  color: white;
  margin: 0px;
  margin-left: 11px;
`,yc=Io.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: white;
  margin: 0px;
  margin-bottom: 16px;
`,vc=Io.div`
  background: #cbb6ff;
  border-radius: 40px;
  width: 290px;
  padding: 20px 0px 24px 30px;
`,xc=Io.div`
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 2;
`;function bc(e){let{productsArray:n,id:r}=e;const[o,i]=(0,t.useState)(!1),[a,l]=(0,t.useState)(n),s=Xo((e=>e.notification.notifications)),u=ci();return(0,Fa.jsxs)("div",{id:r,style:{display:"flex",flexDirection:"column",alignItems:"center",margin:"0px 20px 0px 20px"},children:[(0,Fa.jsxs)("div",{style:{maxWidth:1800,width:"100%",display:"flex",justifyContent:"space-between",margin:"63px 0px 77px 0px",position:"relative"},children:[(0,Fa.jsxs)(mc,{onClick:e=>function(e){e.stopPropagation(),i(!o)}(e),children:[(0,Fa.jsx)("svg",{width:"23",height:"22",viewBox:"0 0 23 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Fa.jsx)("path",{d:"M20.1623 0H2.38455C2.08986 0 1.80725 0.116448 1.59887 0.323727C1.3905 0.531005 1.27344 0.812136 1.27344 1.10527V3.96793C1.27344 4.54598 1.5101 5.11409 1.92122 5.52304L7.9401 11.5103V19.8949C7.94032 20.0832 7.98885 20.2683 8.0811 20.4328C8.17335 20.5972 8.30627 20.7355 8.46726 20.8346C8.62826 20.9336 8.81201 20.9902 9.00111 20.9988C9.19021 21.0075 9.37841 20.968 9.54788 20.8841L13.9923 18.6736C14.369 18.4857 14.6068 18.1032 14.6068 17.6843V11.5103L20.6257 5.52304C21.0368 5.11409 21.2734 4.54598 21.2734 3.96793V1.10527C21.2734 0.812136 21.1564 0.531005 20.948 0.323727C20.7396 0.116448 20.457 0 20.1623 0Z",fill:"#D9FF5A"})}),(0,Fa.jsx)(gc,{className:"filter-label",children:"\u0424\u0438\u043b\u044c\u0442\u0440\u044b"})]}),o?(0,Fa.jsxs)("div",{style:{position:"absolute",top:50,zIndex:3},children:[(0,Fa.jsx)("div",{style:{background:"#CBB6FF",borderRadius:40},children:(0,Fa.jsx)(sc,{min:"0",max:"1000000"})}),(0,Fa.jsxs)(vc,{children:[(0,Fa.jsx)(yc,{children:"\u0426\u0432\u0435\u0442\u0430"}),(0,Fa.jsxs)("form",{children:[(0,Fa.jsx)(cc,{name:"\u0417\u0435\u043b\u0435\u043d\u044b\u0439",count:"580"}),(0,Fa.jsx)(cc,{name:"\u0421\u0438\u043d\u0438\u0439",count:"1296"}),(0,Fa.jsx)(cc,{name:"\u041e\u0440\u0430\u043d\u0436\u0435\u0432\u044b\u0439",count:"2340"}),(0,Fa.jsx)(cc,{name:"\u0420\u043e\u0437\u043e\u0432\u044b\u0439",count:"656"}),(0,Fa.jsx)(cc,{name:"\u041b\u0430\u0432\u0430\u043d\u0434\u043e\u0432\u044b\u0439",count:"1"}),(0,Fa.jsx)(cc,{name:"\u0413\u043e\u043b\u0443\u0431\u043e\u0439",count:"113"})]})]})]}):(0,Fa.jsx)(Fa.Fragment,{}),(0,Fa.jsx)(hc,{children:"20 \u041f\u041e\u0417\u0418\u0426\u0418\u0419 \u0412 \u0414\u0410\u041d\u041d\u041e\u0419 \u041a\u0410\u0422\u0415\u0413\u041e\u0420\u0418\u0418"})]}),(0,Fa.jsx)(dc,{children:a.map(((e,t)=>(0,Fa.jsx)(rc,{background:e.background,image:e.image,name:e.name,category:e.category,price:e.price,onClick:t=>{!function(e,t){e.stopPropagation(),u(Aa(t));let n=Date.now().toString();u(_s({id:n})),setTimeout((()=>{u(Ps())}),3e3)}(t,e)}},t)))}),(0,Fa.jsxs)(fc,{onClick:e=>{!function(e){e.stopPropagation();let t=[...a];t.push(...n),l(t)}(e)},children:[(0,Fa.jsx)(pc,{className:"button-text",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0435\u0449\u0435"}),(0,Fa.jsxs)("svg",{style:{position:"absolute",transform:"rotate(13deg)",top:79,left:141},width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,Fa.jsx)("path",{d:"M18.1087 14L12.112 20L6.11523 14",stroke:"#D9FF5A",strokeWidth:"2",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,Fa.jsx)("path",{d:"M12.1133 4V21",stroke:"#D9FF5A",strokeWidth:"2",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),(0,Fa.jsx)(xc,{children:s.length>3?(0,Fa.jsx)(zs,{}):s.map((e=>(0,Fa.jsx)(Ts,{},e.id)))})]})}const wc=Io.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`,Sc=Io.h2`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 60px;
  line-height: 76.08px;
  color: white;
  margin: 0;
`,kc=Io.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 70px;
`,Cc=Io.div`
  max-width: 1800px;
  width: 100%;
  margin-top: 170px;
  position: relative;
`,Ec={first:!1,second:!1,third:!1,fourth:!1};function jc(){const[e,n]=(0,t.useState)(Ec);return(0,Fa.jsxs)(Cc,{children:[(0,Fa.jsx)(kc,{children:(0,Fa.jsx)(Sc,{children:"\u041a\u0410\u0422\u0415\u0413\u041e\u0420\u0418\u0418"})}),(0,Fa.jsxs)(wc,{children:[(0,Fa.jsx)(yu,{cardName:"\u041d\u0410\u041f\u041e\u041b\u042c\u041d\u042b\u0415 \u0417\u0415\u0420\u041a\u0410\u041b\u0410",image:vu,onClick:()=>{n({first:!0,second:!1,third:!1,fourth:!1}),document.getElementById("category").scrollIntoView({behavior:"smooth"})}}),(0,Fa.jsx)(yu,{cardName:"\u0422\u041e\u0420\u0428\u0415\u0420\u042b \u0418 \u041b\u0410\u041c\u041f\u042b",image:xu,onClick:()=>{n({first:!1,second:!0,third:!1,fourth:!1}),document.getElementById("category").scrollIntoView({behavior:"smooth"})}}),(0,Fa.jsx)(yu,{cardName:"\u041a\u0420\u0415\u0421\u041b\u0410 \u0418 \u0421\u0422\u0423\u041b\u042c\u042f",image:bu,onClick:()=>{n({first:!1,second:!1,third:!0,fourth:!1}),document.getElementById("category").scrollIntoView({behavior:"smooth"})}}),(0,Fa.jsx)(yu,{cardName:"\u0421\u0422\u041e\u041b\u042b \u0418 \u0422\u0423\u041c\u0411\u042b",image:wu,onClick:()=>{n({first:!1,second:!1,third:!1,fourth:!0}),document.getElementById("category").scrollIntoView({behavior:"smooth"})}})]}),e.first?(0,Fa.jsx)(bc,{id:"category",productsArray:Hu}):(0,Fa.jsx)("div",{style:{position:"absolute"},id:"category"}),e.second?(0,Fa.jsx)(bc,{id:"category",productsArray:Wu}):(0,Fa.jsx)("div",{style:{position:"absolute"},id:"category"}),e.third?(0,Fa.jsx)(bc,{id:"category",productsArray:$u}):(0,Fa.jsx)("div",{style:{position:"absolute"},id:"category"}),e.fourth?(0,Fa.jsx)(bc,{id:"category",productsArray:Vu}):(0,Fa.jsx)("div",{style:{position:"absolute"},id:"category"})]})}var _c;function Pc(){return Pc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pc.apply(null,arguments)}function Rc(e,n){let{title:r,titleId:o,...i}=e;return t.createElement("svg",Pc({width:21,height:22,viewBox:"0 0 21 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":o},i),r?t.createElement("title",{id:o},r):null,_c||(_c=t.createElement("path",{d:"M11.461 0.915624L11.834 10.2959L21.0072 12.2909L11.6272 12.6627L9.63329 21.8359L9.26034 12.4557L0.0871087 10.4606L9.46713 10.0888L11.461 0.915624Z",fill:"white"})))}const Ac=t.forwardRef(Rc),Tc=(n.p,"CREATING A GREAT ART"),Nc=Io.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 40px;
  line-height: 38px;
  margin: 0;
  color: #ffffff;
`,Oc=Io.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 2169px;
  height: 72px;
  position: absolute;
`;function zc(e){let{background:t,rotateDegree:n}=e;return(0,Fa.jsxs)(Oc,{style:{backgroundColor:t,transform:`rotate(${n}deg)`},children:[(0,Fa.jsx)(Nc,{children:Tc}),(0,Fa.jsx)(Ac,{}),(0,Fa.jsx)(Nc,{children:Tc}),(0,Fa.jsx)(Ac,{}),(0,Fa.jsx)(Nc,{children:Tc}),(0,Fa.jsx)(Ac,{}),(0,Fa.jsx)(Nc,{children:Tc}),(0,Fa.jsx)(Ac,{}),(0,Fa.jsx)(Nc,{children:Tc})]})}const Fc=Io.div`
  height: 262px;
  max-width: 1920px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin-top: 170px;
`;function Lc(){return(0,Fa.jsxs)(Fc,{children:[(0,Fa.jsx)(zc,{background:"#CBB6FF",rotateDegree:5}),(0,Fa.jsx)(zc,{background:"#AECEFF",rotateDegree:-2})]})}const Dc=Io.div`
  width: 283px;
  height: 342px;
  background-color: #cbb6ff;
  border-radius: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ic=Io.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  color: #ffffff99;
  position: absolute;
  top: 25px;
  left: 25px;
  margin: 0;
`,Mc=Io.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  color: #ffffff;
  text-align: right;
  position: absolute;
  top: 25px;
  left: 166px;
  margin: 0;
  width: 90px;
`,Bc=Io.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 28px;
  line-height: 35.5px;
  color: #ffffff;
  position: absolute;
  top: 92px;
  left: 25px;
  margin: 0;
  width: 236px;
`,Uc=Io.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  color: #ffffff;
  position: absolute;
  top: 283px;
  left: 25px;
  margin: 0;
  width: 82px;
`,Hc=Io.div`
  width: 92px;
  height: 77px;
  position: absolute;
  top: 293px;
  left: 129px;
  border: 2px solid #d9ff5a;
  border-radius: 50%;
  transform: rotate(-15deg);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #ffffff30;
`,Wc=Io.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 40px;
  line-height: 17px;
  margin: 0px;
  color: white;
  margin-top: 10px;
`,$c=Io.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  margin: 0px;
  color: white;
`,Vc=Io.div`
  display: flex;
  align-items: center;
  margin: 0px 10px 40px 10px;

  &:hover {
    cursor: pointer;

    .reading-time-text {
      color: #ae97e8;
    }
    .reading-time-container {
      background: #d9ff5a;
    }
  }
`;function Kc(e){let{number:t,author:n,header:r,date:o,time:i,image:a}=e;return(0,Fa.jsxs)(Vc,{children:[(0,Fa.jsxs)(Dc,{children:[(0,Fa.jsx)(Ic,{children:t}),(0,Fa.jsx)(Mc,{children:n}),(0,Fa.jsx)(Bc,{children:r}),(0,Fa.jsx)(Uc,{children:o}),(0,Fa.jsx)("div",{style:{height:142,width:133,borderRadius:"50%",position:"absolute",backgroundColor:"#ae97e8",top:284,left:113}}),(0,Fa.jsx)("div",{style:{height:12,width:12,position:"absolute",backgroundColor:"#ae97e8",top:332,left:243}}),(0,Fa.jsx)("div",{style:{height:18,width:18,borderRadius:"50%",position:"absolute",backgroundColor:"#cbb6ff",top:322.7,left:242.7}}),(0,Fa.jsx)("div",{style:{height:8,width:8,position:"absolute",backgroundColor:"#ae97e8",top:335,left:108}}),(0,Fa.jsx)("div",{style:{height:18,width:18,borderRadius:"50%",position:"absolute",backgroundColor:"#cbb6ff",top:324,left:97.8}}),(0,Fa.jsxs)(Hc,{className:"reading-time-container",children:[(0,Fa.jsx)(Wc,{className:"reading-time-text",children:"3"}),(0,Fa.jsx)($c,{className:"reading-time-text",children:"\u043c\u0438\u043d"})]})]}),(0,Fa.jsxs)("div",{style:{position:"relative"},children:[(0,Fa.jsx)("div",{style:{width:14,height:14,borderRadius:"50%",backgroundColor:"#ae97e8",position:"absolute",top:-7}}),(0,Fa.jsx)("div",{style:{width:14,height:190,backgroundColor:"#cbb6ff"}}),(0,Fa.jsx)("div",{style:{width:14,height:14,borderRadius:"50%",backgroundColor:"#ae97e8",position:"absolute",top:183}})]}),(0,Fa.jsx)(Dc,{children:(0,Fa.jsx)("img",{style:{borderRadius:"28px"},src:a,alt:"paperImage"})})]})}const Qc=n.p+"static/media/modern-sofa.d90522b42a12bcddeb9d.png",qc=n.p+"static/media/chandelier.cbcdef145ec177529249.png",Yc=n.p+"static/media/modern-wardrobe.7f318d094de94805a356.png",Zc=Io.h3`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 60px;
  line-height: 76.08px;
  color: #ffffff;
  margin: 0;
  margin-left: 10px;
`,Gc=Io.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 243px;
  margin: 0px 10px 0px 10px;
`,Xc=Io.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 189px;
  margin: 0px 10px 0px 10px;
`,Jc=Io.p`
  margin: 0;
  font-family: Floreste;
  font-weight: 400;
  font-size: 40px;
  line-height: 38px;
  color: #ffffff;
`,ed=Io.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,td=Io.div`
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`,nd=Io.div`
  max-width: 1800px;
  width: 100%;
  margin-top: 169px;
`;function rd(e){let{id:t}=e;return(0,Fa.jsxs)(nd,{id:t,children:[(0,Fa.jsxs)(ed,{children:[(0,Fa.jsxs)(Gc,{children:[(0,Fa.jsxs)("div",{style:{width:35,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,Fa.jsx)("div",{style:{width:7,height:7,borderRadius:"50%",backgroundColor:"#FFFFFF"}}),(0,Fa.jsx)("div",{style:{width:7,height:7,borderRadius:"50%",backgroundColor:"#FFFFFF4D"}}),(0,Fa.jsx)("div",{style:{width:7,height:7,borderRadius:"50%",backgroundColor:"#FFFFFF4D"}})]}),(0,Fa.jsx)(Zc,{children:"\u0411\u041b\u041e\u0413"})]}),(0,Fa.jsxs)(Xc,{children:[(0,Fa.jsx)(Jc,{children:"02"}),(0,Fa.jsx)("div",{style:{width:63,height:4,backgroundColor:"#CBB6FF",margin:"0px 5px 10px 5px"}}),(0,Fa.jsx)(Jc,{children:"04"})]})]}),(0,Fa.jsxs)(td,{children:[(0,Fa.jsx)(Kc,{number:"01",author:"Laura Busche",header:"\u041d\u041e\u0412\u0410\u042f \u041a\u041e\u041b\u041b\u0415\u041a\u0426\u0418\u042f \u041a\u0420\u0415\u0421\u0415\u041b",date:"14 \u042f\u043d\u0432\u0430\u0440\u044f 2023",image:Qc}),(0,Fa.jsx)(Kc,{number:"02",author:"Laura Busche",header:"\u0421\u0412\u0415\u0422\u041e\u0412\u041e\u0419 \u0414\u0418\u0417\u0410\u0419\u041d \u0412 \u0418\u041d\u0422\u0415\u0420\u042c\u0415\u0420\u0415",date:"14 \u042f\u043d\u0432\u0430\u0440\u044f 2023",image:qc}),(0,Fa.jsx)(Kc,{number:"03",author:"Laura Busche",header:"\u041a\u0410\u041a \u0412\u042b\u0411\u0420\u0410\u0422\u042c \u0428\u041a\u0410\u0424 \u0412 \u0421\u041f\u0410\u041b\u042c\u041d\u042e",date:"14 \u042f\u043d\u0432\u0430\u0440\u044f 2023",image:Yc})]})]})}const od=Io.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 129px;
  margin-top: 170px;
  max-width: 1797px;
  width: 100%;
`,id=Io.p`
  font-family: Gilroy;
  font-weight: 500;
  font-size: 18px;
  line-height: 21.19px;
  color: #ffffff;
  margin: 0px 10px 0px 10px;
`,ad=Io.p`
  font-family: Gilroy;
  font-weight: 500;
  font-size: 18px;
  line-height: 21.19px;
  color: #ffffff;
  margin: 0px 10px 0px 10px;
`;function ld(){return(0,Fa.jsxs)(od,{children:[(0,Fa.jsx)(id,{children:"@2023"}),(0,Fa.jsx)(ad,{children:"\u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b"})]})}const sd=n.p+"static/media/lamp1.0420757d649daf08b60f.png",ud=n.p+"static/media/lamp2.79dfa42b9c1de3f1dd8f.png",cd=n.p+"static/media/lamp4.fa1b231ea2e66a9b7804.png",dd=n.p+"static/media/lamp5.5645cb8c5582e7b74e14.png",fd=Io.div`
  width: 1920px;
  height: 700px;
  padding-top: 322px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`,pd=Io.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 212px;
  line-height: 201.4px;
  color: #cbb6ff99;
  margin: 0;
  white-space: nowrap;
`,hd=Io.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  color: white;
  margin: 0;
  white-space: nowrap;
`,md=Io.img`
  position: absolute;
`;function gd(){return(0,Fa.jsxs)(fd,{children:[(0,Fa.jsxs)("div",{style:{position:"relative"},children:[(0,Fa.jsx)(md,{style:{left:-966,top:121},src:sd,alt:"lamp"}),(0,Fa.jsx)(md,{style:{left:-600,top:263},src:ud,alt:"lamp"}),(0,Fa.jsx)(md,{style:{left:-147,top:-120},src:us,alt:"lamp"}),(0,Fa.jsx)(md,{style:{left:101,top:181},src:cd,alt:"lamp"}),(0,Fa.jsx)(md,{style:{left:528,top:296},src:dd,alt:"lamp"})]}),(0,Fa.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%",marginBottom:145},children:[(0,Fa.jsx)(hd,{style:{marginLeft:60},children:"\u0412\u0410\u0428 \u0417\u0410\u041a\u0410\u0417 \u041e\u0424\u041e\u0420\u041c\u041b\u0415\u041d"}),(0,Fa.jsx)(hd,{style:{marginRight:58},children:"\u0421\u041f\u0410\u0421\u0418\u0411\u041e \u0417\u0410 \u0417\u0410\u041a\u0410\u0417"})]}),(0,Fa.jsxs)("div",{style:{display:"flex"},children:[(0,Fa.jsx)(pd,{style:{marginRight:84},children:"THANK YOU"}),(0,Fa.jsx)(pd,{style:{marginRight:84},children:"THANK YOU"}),(0,Fa.jsx)(pd,{children:"THANK YOU"})]})]})}const yd=Io.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  max-width: 1920px;
  width: 100%;
  align-items: center;
`;function vd(){return(0,Fa.jsxs)(yd,{children:[(0,Fa.jsx)(ru,{}),(0,Fa.jsx)(jc,{}),(0,Fa.jsx)(Lc,{}),(0,Fa.jsx)(rd,{id:"blog"}),(0,Fa.jsx)(ld,{})]})}const xd=Io.div`
  width: 523px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
  margin-right: 10px;
`,bd=Io.div`
  margin-bottom: 22px;
  display: flex;
  justify-content: space-between;
`,wd=Io.div`
  width: 11px;
  height: 11px;
  border: 3px solid white;
  border-radius: 50%;
  margin-right: 12px;
`,Sd=Io.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 25.36px;
  color: #ffffff;
  margin: 0;
`,kd=Io.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  color: #ffffff;
  margin: 0;
`,Cd=Io.div`
  width: 350px;
`,Ed=Io.div`
  display: flex;
  justify-content: space-between;
  width: 95px;
`,jd=Io.p`
  font-family: Floreste;
  font-size: 28px;
  font-weight: 400;
  line-height: 26.6px;
  color: white;
  margin: 0;
`,_d=Io.p`
  font-family: Euclid Circular A;
  font-size: 20px;
  font-weight: 400;
  line-height: 16.36px;
  color: white;
  margin: 0;
`,Pd=Io.div`
  background: #3320652e;
  border-radius: 30px;
  padding: 48px;
  margin: auto;
  margin-right: 20px;
  @media only screen and (max-width: 1400px) {
    margin: 20px;
  }
`,Rd=Io.div`
  max-width: 1920px;
  width: 100%;
  position: relative;
  top: 193px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`,Ad=Io.form`
  margin-left: 60px;
  height: 358px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,Td=Io.button`
  width: 189px;
  height: 93px;
  background: #ebe3ff30;
  border: 2px solid #d9ff5a;
  border-radius: 50%;
  transform: rotate(-6deg);
  outline: none;

  &:hover,
  &:focus {
    cursor: pointer;

    .button-text {
      color: #d9ff5a;
    }
  }
`,Nd=Io.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: white;
  margin: 0;
  transform: rotate(6deg);
`,Od=Io.h1`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 60px;
  line-height: 76.08px;
  color: white;
  margin: 0px 0px 70px 60px;
`,zd=Io.h2`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  color: white;
  margin: 0px;
  margin-bottom: 38px;
`,Fd=Io.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Ld=Io.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 25.36px;
  color: white;
  margin: 0px;
`,Dd=Io.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 40px;
  line-height: 38px;
  color: white;
  margin: 0px;
  transform: rotate(13deg);
  padding-right: 10px;
`,Id=Io.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(141 112 162 / 60%);
  backdrop-filter: blur(25px);
  z-index: 2;
`,Md=Io.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(250, 143, 239);
  border-radius: 0.75rem;
`,Bd=Io.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 75px;
  line-height: 75px;
  color: white;
  margin: 20px;
  text-align: center;
`;function Ud(){const[e,n]=(0,t.useState)(!1),[r,o]=(0,t.useState)(""),[i,a]=(0,t.useState)(""),[l,s]=(0,t.useState)(""),u=Xo((e=>e.cart.itemsInCart)),c=ci();if(0===u.length)return(0,Fa.jsx)(Id,{children:(0,Fa.jsx)(Md,{children:(0,Fa.jsxs)(Bd,{children:["\u0412 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0412\u0430\u0448\u0430 \u043a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 ",(0,Fa.jsx)(Dt,{to:"/",children:"\u0441\u044e\u0434\u0430"}),", \u0447\u0442\u043e\u0431\u044b \u0432\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"]})})});let d=0;for(let t=0;t<u.length;t++){let e=Number(u[t].price.replaceAll(" ",""));d+=u[t].count*e}return(0,Fa.jsx)(Fa.Fragment,{children:e?(0,Fa.jsx)(gd,{}):(0,Fa.jsxs)(Rd,{children:[(0,Fa.jsxs)("div",{style:{margin:"0px 20px 20px 20px",flex:1,maxWidth:882,minWidth:620},children:[(0,Fa.jsx)(Od,{children:"\u041e\u0424\u041e\u0420\u041c\u0418\u0422\u042c \u0417\u0410\u041a\u0410\u0417"}),(0,Fa.jsxs)(Ad,{onSubmit:e=>function(e){e.stopPropagation(),e.preventDefault(),console.log(r,i,l),n(!0)}(e),children:[(0,Fa.jsx)(gl,{name:"name",placeholder:"\u0418\u041c\u042f",onChange:e=>o(e.target.value)}),(0,Fa.jsx)(gl,{name:"address",placeholder:"\u0410\u0414\u0420\u0415\u0421",onChange:e=>a(e.target.value)}),(0,Fa.jsx)(gl,{name:"phoneNumber",placeholder:"\u0422\u0415\u041b\u0415\u0424\u041e\u041d",onChange:e=>s(e.target.value)}),(0,Fa.jsx)(Td,{type:"submit",children:(0,Fa.jsx)(Nd,{className:"button-text",children:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c"})})]})]}),(0,Fa.jsxs)(Pd,{children:[(0,Fa.jsx)(zd,{children:"\u0421\u041e\u0421\u0422\u0410\u0412 \u0417\u0410\u041a\u0410\u0417\u0410"}),(0,Fa.jsx)("div",{style:{maxHeight:750,overflowY:"scroll",marginBottom:20},children:u.map((e=>(0,Fa.jsxs)(xd,{children:[(0,Fa.jsx)("img",{style:{maxWidth:150,maxHeight:200},src:e.image,alt:"itemImage"}),(0,Fa.jsxs)(Cd,{children:[(0,Fa.jsxs)(bd,{children:[(0,Fa.jsxs)("div",{children:[(0,Fa.jsxs)("div",{style:{display:"flex",alignItems:"center",marginBottom:13},children:[(0,Fa.jsx)(wd,{style:{backgroundColor:`${e.background}`}}),(0,Fa.jsx)(Sd,{children:e.name})]}),(0,Fa.jsx)(kd,{children:e.category})]}),(0,Fa.jsx)("input",{style:{outline:"none"},type:"image",src:Mo,alt:"trash",onClick:t=>{t.stopPropagation(),c(Ta(e))}})]}),(0,Fa.jsx)("div",{style:{border:"2px solid #D9FF5A"}}),(0,Fa.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:31},children:[(0,Fa.jsxs)(Ed,{children:[(0,Fa.jsx)(jd,{children:e.price}),(0,Fa.jsx)(_d,{children:"\u20bd"})]}),(0,Fa.jsxs)(jd,{children:[e.count," \u0448\u0442."]})]})]})]},e.id)))}),(0,Fa.jsxs)(Fd,{children:[(0,Fa.jsx)(Ld,{children:"\u0418\u0422\u041e\u0413\u041e:"}),(0,Fa.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"237px",height:"111px",borderRadius:"50%",border:"2px solid #D9FF5A",background:"#FFFFFF30",transform:"rotate(-13deg)"},children:[(0,Fa.jsx)(Dd,{children:d}),(0,Fa.jsx)(_d,{style:{transform:"rotate(13deg)"},children:"\u20bd"})]})]})]})]})})}function Hd(){const e=gt();return console.error(e),(0,Fa.jsxs)("div",{id:"error-page",children:[(0,Fa.jsx)("h1",{children:"Oops!"}),(0,Fa.jsx)("p",{children:"Sorry, an unexpected error has occurred."}),(0,Fa.jsx)("p",{children:(0,Fa.jsx)("i",{children:e.statusText||e.message})})]})}const Wd=function(e){const t=function(e){const{thunk:t=!0,immutableCheck:n=!0,serializableCheck:r=!0,actionCreatorCheck:o=!0}=e??{};let i=new pa;return t&&(function(e){return"boolean"===typeof e}(t)?i.push(bi):i.push(wi(t.extraArgument))),i},{reducer:n,middleware:r,devTools:o=!0,preloadedState:i,enhancers:a}=e||{};let l,s;if("function"===typeof n)l=n;else{if(!mi(n))throw new Error(Pa(1));l=yi(n)}s="function"===typeof r?r(t):t();let u=vi;o&&(u=da({trace:!1,..."object"===typeof o&&o}));const c=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>(n,r)=>{const o=e(n,r);let i=()=>{throw new Error(di(15))};const a={getState:o.getState,dispatch:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return i(e,...n)}},l=t.map((e=>e(a)));return i=vi(...l)(o.dispatch),{...o,dispatch:i}}}(...s),d=xa(c);return gi(l,i,u(..."function"===typeof a?a(d):d()))}({reducer:{cart:za,notification:Rs}}),$d=function(e,t){return re({basename:null==t?void 0:t.basename,future:wt({},null==t?void 0:t.future,{v7_prependBasename:!0}),history:(n={window:null==t?void 0:t.window},void 0===n&&(n={}),m((function(e,t){let{pathname:n="/",search:r="",hash:o=""}=h(e.location.hash.substr(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),f("",{pathname:n,search:r,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");r=-1===n?t:t.slice(0,n)}return r+"#"+("string"===typeof t?t:p(t))}),(function(e,t){c("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")}),n)),hydrationData:(null==t?void 0:t.hydrationData)||Ct(),routes:e,mapRouteProperties:bt,unstable_dataStrategy:null==t?void 0:t.unstable_dataStrategy,unstable_patchRoutesOnNavigation:null==t?void 0:t.unstable_patchRoutesOnNavigation,window:null==t?void 0:t.window}).initialize();var n}([{element:(0,Fa.jsx)(ss,{}),errorElement:(0,Fa.jsx)(Hd,{}),children:[{path:"/",element:(0,Fa.jsx)(vd,{})},{path:"/order",element:(0,Fa.jsx)(Ud,{})}]}]);const Vd=function(){return(0,Fa.jsx)(ii,{store:Wd,children:(0,Fa.jsx)(Nt,{router:$d})})},Kd=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,6453)).then((t=>{let{getCLS:n,getFID:r,getFCP:o,getLCP:i,getTTFB:a}=t;n(e),r(e),o(e),i(e),a(e)}))};o.createRoot(document.getElementById("root")).render((0,Fa.jsx)(t.StrictMode,{children:(0,Fa.jsx)(Vd,{})})),Kd()})()})();
//# sourceMappingURL=main.19a78607.js.map