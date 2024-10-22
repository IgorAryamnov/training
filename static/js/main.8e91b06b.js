/*! For license information please see main.8e91b06b.js.LICENSE.txt */
(()=>{var e={2730:(e,t,n)=>{"use strict";var r=n(5043),a=n(8853);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,l={};function s(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(l[e]=t,e=0;e<t.length;e++)o.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},h={};function m(e,t,n,r,a,i,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var v=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function x(e,t,n,r){var a=g.hasOwnProperty(t)?g[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!d.call(h,e)||!d.call(p,e)&&(f.test(e)?h[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),S=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),_=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),R=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),T=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var O=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var z=Symbol.iterator;function L(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=z&&e[z]||e["@@iterator"])?e:null}var F,D=Object.assign;function I(e){if(void 0===F)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);F=t&&t[1]||""}return"\n"+F+e}var M=!1;function B(e,t){if(!e||M)return"";M=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"===typeof u.stack){for(var a=u.stack.split("\n"),i=r.stack.split("\n"),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(1!==o||1!==l)do{if(o--,0>--l||a[o]!==i[l]){var s="\n"+a[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=o&&0<=l);break}}}finally{M=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?I(e):""}function U(e){switch(e.tag){case 5:return I(e.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return e=B(e.type,!1);case 11:return e=B(e.type.render,!1);case 1:return e=B(e.type,!0);default:return""}}function H(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case k:return"Fragment";case S:return"Portal";case E:return"Profiler";case C:return"StrictMode";case A:return"Suspense";case R:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case _:return(e.displayName||"Context")+".Consumer";case j:return(e._context.displayName||"Context")+".Provider";case P:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case N:return null!==(t=e.displayName||null)?t:H(e.type)||"Memo";case T:t=e._payload,e=e._init;try{return H(e(t))}catch(n){}}return null}function W(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return H(t);case 8:return t===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function $(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function K(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Q(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=V(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function q(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Y(e,t){var n=t.checked;return D({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Z(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=$(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function G(e,t){null!=(t=t.checked)&&x(e,"checked",t,!1)}function X(e,t){G(e,t);var n=$(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,$(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function J(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&q(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+$(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(i(91));return D({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ae(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(i(92));if(te(n)){if(1<n.length)throw Error(i(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:$(n)}}function ie(e,t){var n=$(t.value),r=$(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function oe(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,de=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ce(e,t)}))}:ce);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(pe).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var ve=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(i(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(i(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(i(62))}}function xe(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Se=null,ke=null,Ce=null;function Ee(e){if(e=xa(e)){if("function"!==typeof Se)throw Error(i(280));var t=e.stateNode;t&&(t=wa(t),Se(e.stateNode,e.type,t))}}function je(e){ke?Ce?Ce.push(e):Ce=[e]:ke=e}function _e(){if(ke){var e=ke,t=Ce;if(Ce=ke=null,Ee(e),t)for(e=0;e<t.length;e++)Ee(t[e])}}function Pe(e,t){return e(t)}function Ae(){}var Re=!1;function Ne(e,t,n){if(Re)return e(t,n);Re=!0;try{return Pe(e,t,n)}finally{Re=!1,(null!==ke||null!==Ce)&&(Ae(),_e())}}function Te(e,t){var n=e.stateNode;if(null===n)return null;var r=wa(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(i(231,t,typeof n));return n}var Oe=!1;if(c)try{var ze={};Object.defineProperty(ze,"passive",{get:function(){Oe=!0}}),window.addEventListener("test",ze,ze),window.removeEventListener("test",ze,ze)}catch(ce){Oe=!1}function Le(e,t,n,r,a,i,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Fe=!1,De=null,Ie=!1,Me=null,Be={onError:function(e){Fe=!0,De=e}};function Ue(e,t,n,r,a,i,o,l,s){Fe=!1,De=null,Le.apply(Be,arguments)}function He(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function We(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function $e(e){if(He(e)!==e)throw Error(i(188))}function Ve(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=He(e)))throw Error(i(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var o=a.alternate;if(null===o){if(null!==(r=a.return)){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return $e(a),e;if(o===r)return $e(a),t;o=o.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=o;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,r=o;break}if(s===r){l=!0,r=a,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=a;break}if(s===r){l=!0,r=o,n=a;break}s=s.sibling}if(!l)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(3!==n.tag)throw Error(i(188));return n.stateNode.current===n?e:t}(e))?Ke(e):null}function Ke(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ke(e);if(null!==t)return t;e=e.sibling}return null}var Qe=a.unstable_scheduleCallback,qe=a.unstable_cancelCallback,Ye=a.unstable_shouldYield,Ze=a.unstable_requestPaint,Ge=a.unstable_now,Xe=a.unstable_getCurrentPriorityLevel,Je=a.unstable_ImmediatePriority,et=a.unstable_UserBlockingPriority,tt=a.unstable_NormalPriority,nt=a.unstable_LowPriority,rt=a.unstable_IdlePriority,at=null,it=null;var ot=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ut=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=268435455&n;if(0!==o){var l=o&~a;0!==l?r=dt(l):0!==(i&=o)&&(r=dt(i))}else 0!==(o=n&~a)?r=dt(o):0!==i&&(r=dt(i));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(i=t&-t)||16===a&&0!==(4194240&i)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-ot(t)),r|=e[n],t&=~a;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ut;return 0===(4194240&(ut<<=1))&&(ut=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-ot(t)]=n}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var xt=0;function bt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,St,kt,Ct,Et,jt=!1,_t=[],Pt=null,At=null,Rt=null,Nt=new Map,Tt=new Map,Ot=[],zt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lt(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":At=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":Nt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tt.delete(t.pointerId)}}function Ft(e,t,n,r,a,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},null!==t&&(null!==(t=xa(t))&&St(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Dt(e){var t=ya(e.target);if(null!==t){var n=He(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=We(n)))return e.blockedOn=t,void Et(e.priority,(function(){kt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function It(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=xa(n))&&St(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);be=r,n.target.dispatchEvent(r),be=null,t.shift()}return!0}function Mt(e,t,n){It(e)&&n.delete(t)}function Bt(){jt=!1,null!==Pt&&It(Pt)&&(Pt=null),null!==At&&It(At)&&(At=null),null!==Rt&&It(Rt)&&(Rt=null),Nt.forEach(Mt),Tt.forEach(Mt)}function Ut(e,t){e.blockedOn===t&&(e.blockedOn=null,jt||(jt=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Bt)))}function Ht(e){function t(t){return Ut(t,e)}if(0<_t.length){Ut(_t[0],e);for(var n=1;n<_t.length;n++){var r=_t[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Pt&&Ut(Pt,e),null!==At&&Ut(At,e),null!==Rt&&Ut(Rt,e),Nt.forEach(t),Tt.forEach(t),n=0;n<Ot.length;n++)(r=Ot[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Ot.length&&null===(n=Ot[0]).blockedOn;)Dt(n),null===n.blockedOn&&Ot.shift()}var Wt=b.ReactCurrentBatchConfig,$t=!0;function Vt(e,t,n,r){var a=xt,i=Wt.transition;Wt.transition=null;try{xt=1,Qt(e,t,n,r)}finally{xt=a,Wt.transition=i}}function Kt(e,t,n,r){var a=xt,i=Wt.transition;Wt.transition=null;try{xt=4,Qt(e,t,n,r)}finally{xt=a,Wt.transition=i}}function Qt(e,t,n,r){if($t){var a=Yt(e,t,n,r);if(null===a)$r(e,t,r,qt,n),Lt(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return Pt=Ft(Pt,e,t,n,r,a),!0;case"dragenter":return At=Ft(At,e,t,n,r,a),!0;case"mouseover":return Rt=Ft(Rt,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return Nt.set(i,Ft(Nt.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Tt.set(i,Ft(Tt.get(i)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Lt(e,r),4&t&&-1<zt.indexOf(e)){for(;null!==a;){var i=xa(a);if(null!==i&&wt(i),null===(i=Yt(e,t,n,r))&&$r(e,t,r,qt,n),i===a)break;a=i}null!==a&&r.stopPropagation()}else $r(e,t,r,null,n)}}var qt=null;function Yt(e,t,n,r){if(qt=null,null!==(e=ya(e=we(r))))if(null===(t=He(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=We(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qt=e,null}function Zt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xe()){case Je:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Gt=null,Xt=null,Jt=null;function en(){if(Jt)return Jt;var e,t,n=Xt,r=n.length,a="value"in Gt?Gt.value:Gt.textContent,i=a.length;for(e=0;e<r&&n[e]===a[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===a[i-t];t++);return Jt=a.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,r,a,i){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(a):a[o]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,ln,sn,un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=an(un),dn=D({},un,{view:0,detail:0}),fn=an(dn),pn=D({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:En,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(on=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=on=0,sn=e),on)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),hn=an(pn),mn=an(D({},pn,{dataTransfer:0})),gn=an(D({},dn,{relatedTarget:0})),vn=an(D({},un,{animationName:0,elapsedTime:0,pseudoElement:0})),yn=D({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xn=an(yn),bn=an(D({},un,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=kn[e])&&!!t[e]}function En(){return Cn}var jn=D({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Sn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:En,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),_n=an(jn),Pn=an(D({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),An=an(D({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:En})),Rn=an(D({},un,{propertyName:0,elapsedTime:0,pseudoElement:0})),Nn=D({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tn=an(Nn),On=[9,13,27,32],zn=c&&"CompositionEvent"in window,Ln=null;c&&"documentMode"in document&&(Ln=document.documentMode);var Fn=c&&"TextEvent"in window&&!Ln,Dn=c&&(!zn||Ln&&8<Ln&&11>=Ln),In=String.fromCharCode(32),Mn=!1;function Bn(e,t){switch(e){case"keyup":return-1!==On.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Un(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Hn=!1;var Wn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $n(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Wn[e.type]:"textarea"===t}function Vn(e,t,n,r){je(r),0<(t=Kr(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kn=null,Qn=null;function qn(e){Ir(e,0)}function Yn(e){if(Q(ba(e)))return e}function Zn(e,t){if("change"===e)return t}var Gn=!1;if(c){var Xn;if(c){var Jn="oninput"in document;if(!Jn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Jn="function"===typeof er.oninput}Xn=Jn}else Xn=!1;Gn=Xn&&(!document.documentMode||9<document.documentMode)}function tr(){Kn&&(Kn.detachEvent("onpropertychange",nr),Qn=Kn=null)}function nr(e){if("value"===e.propertyName&&Yn(Qn)){var t=[];Vn(t,Qn,e,we(e)),Ne(qn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Qn=n,(Kn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ar(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Yn(Qn)}function ir(e,t){if("click"===e)return Yn(t)}function or(e,t){if("input"===e||"change"===e)return Yn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!d.call(t,a)||!lr(e[a],t[a]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=q();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=q((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=void 0===r.end?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=cr(n,i);var o=cr(n,r);a&&o&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=c&&"documentMode"in document&&11>=document.documentMode,gr=null,vr=null,yr=null,xr=!1;function br(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;xr||null==gr||gr!==q(r)||("selectionStart"in(r=gr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},yr&&sr(yr,r)||(yr=r,0<(r=Kr(vr,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},kr={},Cr={};function Er(e){if(kr[e])return kr[e];if(!Sr[e])return e;var t,n=Sr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Cr)return kr[e]=n[t];return e}c&&(Cr=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);var jr=Er("animationend"),_r=Er("animationiteration"),Pr=Er("animationstart"),Ar=Er("transitionend"),Rr=new Map,Nr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(e,t){Rr.set(e,t),s(t,[e])}for(var Or=0;Or<Nr.length;Or++){var zr=Nr[Or];Tr(zr.toLowerCase(),"on"+(zr[0].toUpperCase()+zr.slice(1)))}Tr(jr,"onAnimationEnd"),Tr(_r,"onAnimationIteration"),Tr(Pr,"onAnimationStart"),Tr("dblclick","onDoubleClick"),Tr("focusin","onFocus"),Tr("focusout","onBlur"),Tr(Ar,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function Dr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,o,l,s,u){if(Ue.apply(this,arguments),Fe){if(!Fe)throw Error(i(198));var c=De;Fe=!1,De=null,Ie||(Ie=!0,Me=c)}}(r,t,void 0,e),e.currentTarget=null}function Ir(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&a.isPropagationStopped())break e;Dr(a,l,u),i=s}else for(o=0;o<r.length;o++){if(s=(l=r[o]).instance,u=l.currentTarget,l=l.listener,s!==i&&a.isPropagationStopped())break e;Dr(a,l,u),i=s}}}if(Ie)throw e=Me,Ie=!1,Me=null,e}function Mr(e,t){var n=t[ma];void 0===n&&(n=t[ma]=new Set);var r=e+"__bubble";n.has(r)||(Wr(t,e,2,!1),n.add(r))}function Br(e,t,n){var r=0;t&&(r|=4),Wr(n,e,r,t)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function Hr(e){if(!e[Ur]){e[Ur]=!0,o.forEach((function(t){"selectionchange"!==t&&(Fr.has(t)||Br(t,!1,e),Br(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Ur]||(t[Ur]=!0,Br("selectionchange",!1,t))}}function Wr(e,t,n,r){switch(Zt(t)){case 1:var a=Vt;break;case 4:a=Kt;break;default:a=Qt}n=a.bind(null,t,n,e),a=void 0,!Oe||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function $r(e,t,n,r,a){var i=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var l=r.stateNode.containerInfo;if(l===a||8===l.nodeType&&l.parentNode===a)break;if(4===o)for(o=r.return;null!==o;){var s=o.tag;if((3===s||4===s)&&((s=o.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;o=o.return}for(;null!==l;){if(null===(o=ya(l)))return;if(5===(s=o.tag)||6===s){r=i=o;continue e}l=l.parentNode}}r=r.return}Ne((function(){var r=i,a=we(n),o=[];e:{var l=Rr.get(e);if(void 0!==l){var s=cn,u=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=_n;break;case"focusin":u="focus",s=gn;break;case"focusout":u="blur",s=gn;break;case"beforeblur":case"afterblur":s=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=An;break;case jr:case _r:case Pr:s=vn;break;case Ar:s=Rn;break;case"scroll":s=fn;break;case"wheel":s=Tn;break;case"copy":case"cut":case"paste":s=xn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=Pn}var c=0!==(4&t),d=!c&&"scroll"===e,f=c?null!==l?l+"Capture":null:l;c=[];for(var p,h=r;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&(null!=(m=Te(h,f))&&c.push(Vr(h,m,p)))),d)break;h=h.return}0<c.length&&(l=new s(l,u,null,n,a),o.push({event:l,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===be||!(u=n.relatedTarget||n.fromElement)||!ya(u)&&!u[ha])&&(s||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?ya(u):null)&&(u!==(d=He(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=hn,m="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(c=Pn,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==s?l:ba(s),p=null==u?l:ba(u),(l=new c(m,h+"leave",s,n,a)).target=d,l.relatedTarget=p,m=null,ya(a)===r&&((c=new c(f,h+"enter",u,n,a)).target=p,c.relatedTarget=d,m=c),d=m,s&&u)e:{for(f=u,h=0,p=c=s;p;p=Qr(p))h++;for(p=0,m=f;m;m=Qr(m))p++;for(;0<h-p;)c=Qr(c),h--;for(;0<p-h;)f=Qr(f),p--;for(;h--;){if(c===f||null!==f&&c===f.alternate)break e;c=Qr(c),f=Qr(f)}c=null}else c=null;null!==s&&qr(o,l,s,c,!1),null!==u&&null!==d&&qr(o,d,u,c,!0)}if("select"===(s=(l=r?ba(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=Zn;else if($n(l))if(Gn)g=or;else{g=ar;var v=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=ir);switch(g&&(g=g(e,r))?Vn(o,g,n,a):(v&&v(e,l,r),"focusout"===e&&(v=l._wrapperState)&&v.controlled&&"number"===l.type&&ee(l,"number",l.value)),v=r?ba(r):window,e){case"focusin":($n(v)||"true"===v.contentEditable)&&(gr=v,vr=r,yr=null);break;case"focusout":yr=vr=gr=null;break;case"mousedown":xr=!0;break;case"contextmenu":case"mouseup":case"dragend":xr=!1,br(o,n,a);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":br(o,n,a)}var y;if(zn)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Hn?Bn(e,n)&&(x="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(x="onCompositionStart");x&&(Dn&&"ko"!==n.locale&&(Hn||"onCompositionStart"!==x?"onCompositionEnd"===x&&Hn&&(y=en()):(Xt="value"in(Gt=a)?Gt.value:Gt.textContent,Hn=!0)),0<(v=Kr(r,x)).length&&(x=new bn(x,e,null,n,a),o.push({event:x,listeners:v}),y?x.data=y:null!==(y=Un(n))&&(x.data=y))),(y=Fn?function(e,t){switch(e){case"compositionend":return Un(t);case"keypress":return 32!==t.which?null:(Mn=!0,In);case"textInput":return(e=t.data)===In&&Mn?null:e;default:return null}}(e,n):function(e,t){if(Hn)return"compositionend"===e||!zn&&Bn(e,t)?(e=en(),Jt=Xt=Gt=null,Hn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Kr(r,"onBeforeInput")).length&&(a=new bn("onBeforeInput","beforeinput",null,n,a),o.push({event:a,listeners:r}),a.data=y))}Ir(o,t)}))}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Kr(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,i=a.stateNode;5===a.tag&&null!==i&&(a=i,null!=(i=Te(e,n))&&r.unshift(Vr(e,i,a)),null!=(i=Te(e,t))&&r.push(Vr(e,i,a))),e=e.return}return r}function Qr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function qr(e,t,n,r,a){for(var i=t._reactName,o=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==u&&(l=u,a?null!=(s=Te(n,i))&&o.unshift(Vr(n,s,l)):a||null!=(s=Te(n,i))&&o.push(Vr(n,s,l))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Yr=/\r\n?/g,Zr=/\u0000|\uFFFD/g;function Gr(e){return("string"===typeof e?e:""+e).replace(Yr,"\n").replace(Zr,"")}function Xr(e,t,n){if(t=Gr(t),Gr(e)!==t&&n)throw Error(i(425))}function Jr(){}var ea=null,ta=null;function na(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ra="function"===typeof setTimeout?setTimeout:void 0,aa="function"===typeof clearTimeout?clearTimeout:void 0,ia="function"===typeof Promise?Promise:void 0,oa="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ia?function(e){return ia.resolve(null).then(e).catch(la)}:ra;function la(e){setTimeout((function(){throw e}))}function sa(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void Ht(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);Ht(t)}function ua(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ca(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var da=Math.random().toString(36).slice(2),fa="__reactFiber$"+da,pa="__reactProps$"+da,ha="__reactContainer$"+da,ma="__reactEvents$"+da,ga="__reactListeners$"+da,va="__reactHandles$"+da;function ya(e){var t=e[fa];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ha]||n[fa]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ca(e);null!==e;){if(n=e[fa])return n;e=ca(e)}return t}n=(e=n).parentNode}return null}function xa(e){return!(e=e[fa]||e[ha])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function ba(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(i(33))}function wa(e){return e[pa]||null}var Sa=[],ka=-1;function Ca(e){return{current:e}}function Ea(e){0>ka||(e.current=Sa[ka],Sa[ka]=null,ka--)}function ja(e,t){ka++,Sa[ka]=e.current,e.current=t}var _a={},Pa=Ca(_a),Aa=Ca(!1),Ra=_a;function Na(e,t){var n=e.type.contextTypes;if(!n)return _a;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,i={};for(a in n)i[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ta(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Oa(){Ea(Aa),Ea(Pa)}function za(e,t,n){if(Pa.current!==_a)throw Error(i(168));ja(Pa,t),ja(Aa,n)}function La(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in t))throw Error(i(108,W(e)||"Unknown",a));return D({},n,r)}function Fa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_a,Ra=Pa.current,ja(Pa,e),ja(Aa,Aa.current),!0}function Da(e,t,n){var r=e.stateNode;if(!r)throw Error(i(169));n?(e=La(e,t,Ra),r.__reactInternalMemoizedMergedChildContext=e,Ea(Aa),Ea(Pa),ja(Pa,e)):Ea(Aa),ja(Aa,n)}var Ia=null,Ma=!1,Ba=!1;function Ua(e){null===Ia?Ia=[e]:Ia.push(e)}function Ha(){if(!Ba&&null!==Ia){Ba=!0;var e=0,t=xt;try{var n=Ia;for(xt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ia=null,Ma=!1}catch(a){throw null!==Ia&&(Ia=Ia.slice(e+1)),Qe(Je,Ha),a}finally{xt=t,Ba=!1}}return null}var Wa=[],$a=0,Va=null,Ka=0,Qa=[],qa=0,Ya=null,Za=1,Ga="";function Xa(e,t){Wa[$a++]=Ka,Wa[$a++]=Va,Va=e,Ka=t}function Ja(e,t,n){Qa[qa++]=Za,Qa[qa++]=Ga,Qa[qa++]=Ya,Ya=e;var r=Za;e=Ga;var a=32-ot(r)-1;r&=~(1<<a),n+=1;var i=32-ot(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,Za=1<<32-ot(t)+a|n<<a|r,Ga=i+e}else Za=1<<i|n<<a|r,Ga=e}function ei(e){null!==e.return&&(Xa(e,1),Ja(e,1,0))}function ti(e){for(;e===Va;)Va=Wa[--$a],Wa[$a]=null,Ka=Wa[--$a],Wa[$a]=null;for(;e===Ya;)Ya=Qa[--qa],Qa[qa]=null,Ga=Qa[--qa],Qa[qa]=null,Za=Qa[--qa],Qa[qa]=null}var ni=null,ri=null,ai=!1,ii=null;function oi(e,t){var n=Nu(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function li(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ni=e,ri=ua(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ni=e,ri=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Ya?{id:Za,overflow:Ga}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Nu(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ni=e,ri=null,!0);default:return!1}}function si(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ui(e){if(ai){var t=ri;if(t){var n=t;if(!li(e,t)){if(si(e))throw Error(i(418));t=ua(n.nextSibling);var r=ni;t&&li(e,t)?oi(r,n):(e.flags=-4097&e.flags|2,ai=!1,ni=e)}}else{if(si(e))throw Error(i(418));e.flags=-4097&e.flags|2,ai=!1,ni=e}}}function ci(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ni=e}function di(e){if(e!==ni)return!1;if(!ai)return ci(e),ai=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!na(e.type,e.memoizedProps)),t&&(t=ri)){if(si(e))throw fi(),Error(i(418));for(;t;)oi(e,t),t=ua(t.nextSibling)}if(ci(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ri=ua(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ri=null}}else ri=ni?ua(e.stateNode.nextSibling):null;return!0}function fi(){for(var e=ri;e;)e=ua(e.nextSibling)}function pi(){ri=ni=null,ai=!1}function hi(e){null===ii?ii=[e]:ii.push(e)}var mi=b.ReactCurrentBatchConfig;function gi(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(i(309));var r=n.stateNode}if(!r)throw Error(i(147,e));var a=r,o=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;null===e?delete t[o]:t[o]=e},t._stringRef=o,t)}if("string"!==typeof e)throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function vi(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yi(e){return(0,e._init)(e._payload)}function xi(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=Ou(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Du(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function u(e,t,n,r){var i=n.type;return i===k?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===T&&yi(i)===t.type)?((r=a(t,n.props)).ref=gi(e,t,n),r.return=e,r):((r=zu(n.type,n.key,n.props,null,e.mode,r)).ref=gi(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Iu(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,i){return null===t||7!==t.tag?((t=Lu(n,e.mode,r,i)).return=e,t):((t=a(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Du(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=zu(t.type,t.key,t.props,null,e.mode,n)).ref=gi(e,null,t),n.return=e,n;case S:return(t=Iu(t,e.mode,n)).return=e,t;case T:return f(e,(0,t._init)(t._payload),n)}if(te(t)||L(t))return(t=Lu(t,e.mode,n,null)).return=e,t;vi(e,t)}return null}function p(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===a?u(e,t,n,r):null;case S:return n.key===a?c(e,t,n,r):null;case T:return p(e,t,(a=n._init)(n._payload),r)}if(te(n)||L(n))return null!==a?null:d(e,t,n,r,null);vi(e,n)}return null}function h(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case S:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case T:return h(e,t,n,(0,r._init)(r._payload),a)}if(te(r)||L(r))return d(t,e=e.get(n)||null,r,a,null);vi(t,r)}return null}function m(a,i,l,s){for(var u=null,c=null,d=i,m=i=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=p(a,d,l[m],s);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(a,d),i=o(v,i,m),null===c?u=v:c.sibling=v,c=v,d=g}if(m===l.length)return n(a,d),ai&&Xa(a,m),u;if(null===d){for(;m<l.length;m++)null!==(d=f(a,l[m],s))&&(i=o(d,i,m),null===c?u=d:c.sibling=d,c=d);return ai&&Xa(a,m),u}for(d=r(a,d);m<l.length;m++)null!==(g=h(d,a,m,l[m],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),i=o(g,i,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach((function(e){return t(a,e)})),ai&&Xa(a,m),u}function g(a,l,s,u){var c=L(s);if("function"!==typeof c)throw Error(i(150));if(null==(s=c.call(s)))throw Error(i(151));for(var d=c=null,m=l,g=l=0,v=null,y=s.next();null!==m&&!y.done;g++,y=s.next()){m.index>g?(v=m,m=null):v=m.sibling;var x=p(a,m,y.value,u);if(null===x){null===m&&(m=v);break}e&&m&&null===x.alternate&&t(a,m),l=o(x,l,g),null===d?c=x:d.sibling=x,d=x,m=v}if(y.done)return n(a,m),ai&&Xa(a,g),c;if(null===m){for(;!y.done;g++,y=s.next())null!==(y=f(a,y.value,u))&&(l=o(y,l,g),null===d?c=y:d.sibling=y,d=y);return ai&&Xa(a,g),c}for(m=r(a,m);!y.done;g++,y=s.next())null!==(y=h(m,a,g,y.value,u))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),l=o(y,l,g),null===d?c=y:d.sibling=y,d=y);return e&&m.forEach((function(e){return t(a,e)})),ai&&Xa(a,g),c}return function e(r,i,o,s){if("object"===typeof o&&null!==o&&o.type===k&&null===o.key&&(o=o.props.children),"object"===typeof o&&null!==o){switch(o.$$typeof){case w:e:{for(var u=o.key,c=i;null!==c;){if(c.key===u){if((u=o.type)===k){if(7===c.tag){n(r,c.sibling),(i=a(c,o.props.children)).return=r,r=i;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===T&&yi(u)===c.type){n(r,c.sibling),(i=a(c,o.props)).ref=gi(r,c,o),i.return=r,r=i;break e}n(r,c);break}t(r,c),c=c.sibling}o.type===k?((i=Lu(o.props.children,r.mode,s,o.key)).return=r,r=i):((s=zu(o.type,o.key,o.props,null,r.mode,s)).ref=gi(r,i,o),s.return=r,r=s)}return l(r);case S:e:{for(c=o.key;null!==i;){if(i.key===c){if(4===i.tag&&i.stateNode.containerInfo===o.containerInfo&&i.stateNode.implementation===o.implementation){n(r,i.sibling),(i=a(i,o.children||[])).return=r,r=i;break e}n(r,i);break}t(r,i),i=i.sibling}(i=Iu(o,r.mode,s)).return=r,r=i}return l(r);case T:return e(r,i,(c=o._init)(o._payload),s)}if(te(o))return m(r,i,o,s);if(L(o))return g(r,i,o,s);vi(r,o)}return"string"===typeof o&&""!==o||"number"===typeof o?(o=""+o,null!==i&&6===i.tag?(n(r,i.sibling),(i=a(i,o)).return=r,r=i):(n(r,i),(i=Du(o,r.mode,s)).return=r,r=i),l(r)):n(r,i)}}var bi=xi(!0),wi=xi(!1),Si=Ca(null),ki=null,Ci=null,Ei=null;function ji(){Ei=Ci=ki=null}function _i(e){var t=Si.current;Ea(Si),e._currentValue=t}function Pi(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ai(e,t){ki=e,Ei=Ci=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(xl=!0),e.firstContext=null)}function Ri(e){var t=e._currentValue;if(Ei!==e)if(e={context:e,memoizedValue:t,next:null},null===Ci){if(null===ki)throw Error(i(308));Ci=e,ki.dependencies={lanes:0,firstContext:e}}else Ci=Ci.next=e;return t}var Ni=null;function Ti(e){null===Ni?Ni=[e]:Ni.push(e)}function Oi(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,Ti(t)):(n.next=a.next,a.next=n),t.interleaved=n,zi(e,r)}function zi(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Li=!1;function Fi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Di(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ii(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mi(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Ps)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,zi(e,n)}return null===(a=r.interleaved)?(t.next=t,Ti(r)):(t.next=a.next,a.next=t),r.interleaved=t,zi(e,n)}function Bi(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}function Ui(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===i?a=i=o:i=i.next=o,n=n.next}while(null!==n);null===i?a=i=t:i=i.next=t}else a=i=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Hi(e,t,n,r){var a=e.updateQueue;Li=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,u=s.next;s.next=null,null===o?i=u:o.next=u,o=s;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(null!==i){var d=a.baseState;for(o=0,c=u=s=null,l=i;;){var f=l.lane,p=l.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,m=l;switch(f=t,p=n,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=m.payload)?h.call(p,d,f):h)||void 0===f)break e;d=D({},d,f);break e;case 2:Li=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=a.effects)?a.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=p,s=d):c=c.next=p,o|=f;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(f=l).next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}if(null===c&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null!==(t=a.shared.interleaved)){a=t;do{o|=a.lane,a=a.next}while(a!==t)}else null===i&&(a.shared.lanes=0);Fs|=o,e.lanes=o,e.memoizedState=d}}function Wi(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!==typeof a)throw Error(i(191,a));a.call(r)}}}var $i={},Vi=Ca($i),Ki=Ca($i),Qi=Ca($i);function qi(e){if(e===$i)throw Error(i(174));return e}function Yi(e,t){switch(ja(Qi,t),ja(Ki,e),ja(Vi,$i),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ea(Vi),ja(Vi,t)}function Zi(){Ea(Vi),Ea(Ki),Ea(Qi)}function Gi(e){qi(Qi.current);var t=qi(Vi.current),n=se(t,e.type);t!==n&&(ja(Ki,e),ja(Vi,n))}function Xi(e){Ki.current===e&&(Ea(Vi),Ea(Ki))}var Ji=Ca(0);function eo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var to=[];function no(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var ro=b.ReactCurrentDispatcher,ao=b.ReactCurrentBatchConfig,io=0,oo=null,lo=null,so=null,uo=!1,co=!1,fo=0,po=0;function ho(){throw Error(i(321))}function mo(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function go(e,t,n,r,a,o){if(io=o,oo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=null===e||null===e.memoizedState?Jo:el,e=n(r,a),co){o=0;do{if(co=!1,fo=0,25<=o)throw Error(i(301));o+=1,so=lo=null,t.updateQueue=null,ro.current=tl,e=n(r,a)}while(co)}if(ro.current=Xo,t=null!==lo&&null!==lo.next,io=0,so=lo=oo=null,uo=!1,t)throw Error(i(300));return e}function vo(){var e=0!==fo;return fo=0,e}function yo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===so?oo.memoizedState=so=e:so=so.next=e,so}function xo(){if(null===lo){var e=oo.alternate;e=null!==e?e.memoizedState:null}else e=lo.next;var t=null===so?oo.memoizedState:so.next;if(null!==t)so=t,lo=e;else{if(null===e)throw Error(i(310));e={memoizedState:(lo=e).memoizedState,baseState:lo.baseState,baseQueue:lo.baseQueue,queue:lo.queue,next:null},null===so?oo.memoizedState=so=e:so=so.next=e}return so}function bo(e,t){return"function"===typeof t?t(e):t}function wo(e){var t=xo(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=lo,a=r.baseQueue,o=n.pending;if(null!==o){if(null!==a){var l=a.next;a.next=o.next,o.next=l}r.baseQueue=a=o,n.pending=null}if(null!==a){o=a.next,r=r.baseState;var s=l=null,u=null,c=o;do{var d=c.lane;if((io&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(s=u=f,l=r):u=u.next=f,oo.lanes|=d,Fs|=d}c=c.next}while(null!==c&&c!==o);null===u?l=r:u.next=s,lr(r,t.memoizedState)||(xl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e;do{o=a.lane,oo.lanes|=o,Fs|=o,a=a.next}while(a!==e)}else null===a&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function So(e){var t=xo(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{o=e(o,l.action),l=l.next}while(l!==a);lr(o,t.memoizedState)||(xl=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ko(){}function Co(e,t){var n=oo,r=xo(),a=t(),o=!lr(r.memoizedState,a);if(o&&(r.memoizedState=a,xl=!0),r=r.queue,Fo(_o.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||null!==so&&1&so.memoizedState.tag){if(n.flags|=2048,No(9,jo.bind(null,n,r,a,t),void 0,null),null===As)throw Error(i(349));0!==(30&io)||Eo(n,t,a)}return a}function Eo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function jo(e,t,n,r){t.value=n,t.getSnapshot=r,Po(t)&&Ao(e)}function _o(e,t,n){return n((function(){Po(t)&&Ao(e)}))}function Po(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function Ao(e){var t=zi(e,1);null!==t&&nu(t,e,1,-1)}function Ro(e){var t=yo();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bo,lastRenderedState:e},t.queue=e,e=e.dispatch=qo.bind(null,oo,e),[t.memoizedState,e]}function No(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function To(){return xo().memoizedState}function Oo(e,t,n,r){var a=yo();oo.flags|=e,a.memoizedState=No(1|t,n,void 0,void 0===r?null:r)}function zo(e,t,n,r){var a=xo();r=void 0===r?null:r;var i=void 0;if(null!==lo){var o=lo.memoizedState;if(i=o.destroy,null!==r&&mo(r,o.deps))return void(a.memoizedState=No(t,n,i,r))}oo.flags|=e,a.memoizedState=No(1|t,n,i,r)}function Lo(e,t){return Oo(8390656,8,e,t)}function Fo(e,t){return zo(2048,8,e,t)}function Do(e,t){return zo(4,2,e,t)}function Io(e,t){return zo(4,4,e,t)}function Mo(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Bo(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,zo(4,4,Mo.bind(null,t,e),n)}function Uo(){}function Ho(e,t){var n=xo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wo(e,t){var n=xo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function $o(e,t,n){return 0===(21&io)?(e.baseState&&(e.baseState=!1,xl=!0),e.memoizedState=n):(lr(n,t)||(n=mt(),oo.lanes|=n,Fs|=n,e.baseState=!0),t)}function Vo(e,t){var n=xt;xt=0!==n&&4>n?n:4,e(!0);var r=ao.transition;ao.transition={};try{e(!1),t()}finally{xt=n,ao.transition=r}}function Ko(){return xo().memoizedState}function Qo(e,t,n){var r=tu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Yo(e))Zo(t,n);else if(null!==(n=Oi(e,t,n,r))){nu(n,e,r,eu()),Go(n,t,r)}}function qo(e,t,n){var r=tu(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yo(e))Zo(t,a);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var o=t.lastRenderedState,l=i(o,n);if(a.hasEagerState=!0,a.eagerState=l,lr(l,o)){var s=t.interleaved;return null===s?(a.next=a,Ti(t)):(a.next=s.next,s.next=a),void(t.interleaved=a)}}catch(u){}null!==(n=Oi(e,t,a,r))&&(nu(n,e,r,a=eu()),Go(n,t,r))}}function Yo(e){var t=e.alternate;return e===oo||null!==t&&t===oo}function Zo(e,t){co=uo=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Go(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}var Xo={readContext:Ri,useCallback:ho,useContext:ho,useEffect:ho,useImperativeHandle:ho,useInsertionEffect:ho,useLayoutEffect:ho,useMemo:ho,useReducer:ho,useRef:ho,useState:ho,useDebugValue:ho,useDeferredValue:ho,useTransition:ho,useMutableSource:ho,useSyncExternalStore:ho,useId:ho,unstable_isNewReconciler:!1},Jo={readContext:Ri,useCallback:function(e,t){return yo().memoizedState=[e,void 0===t?null:t],e},useContext:Ri,useEffect:Lo,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Oo(4194308,4,Mo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Oo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Oo(4,2,e,t)},useMemo:function(e,t){var n=yo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Qo.bind(null,oo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},yo().memoizedState=e},useState:Ro,useDebugValue:Uo,useDeferredValue:function(e){return yo().memoizedState=e},useTransition:function(){var e=Ro(!1),t=e[0];return e=Vo.bind(null,e[1]),yo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oo,a=yo();if(ai){if(void 0===n)throw Error(i(407));n=n()}else{if(n=t(),null===As)throw Error(i(349));0!==(30&io)||Eo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Lo(_o.bind(null,r,o,e),[e]),r.flags|=2048,No(9,jo.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=yo(),t=As.identifierPrefix;if(ai){var n=Ga;t=":"+t+"R"+(n=(Za&~(1<<32-ot(Za)-1)).toString(32)+n),0<(n=fo++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=po++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:Ri,useCallback:Ho,useContext:Ri,useEffect:Fo,useImperativeHandle:Bo,useInsertionEffect:Do,useLayoutEffect:Io,useMemo:Wo,useReducer:wo,useRef:To,useState:function(){return wo(bo)},useDebugValue:Uo,useDeferredValue:function(e){return $o(xo(),lo.memoizedState,e)},useTransition:function(){return[wo(bo)[0],xo().memoizedState]},useMutableSource:ko,useSyncExternalStore:Co,useId:Ko,unstable_isNewReconciler:!1},tl={readContext:Ri,useCallback:Ho,useContext:Ri,useEffect:Fo,useImperativeHandle:Bo,useInsertionEffect:Do,useLayoutEffect:Io,useMemo:Wo,useReducer:So,useRef:To,useState:function(){return So(bo)},useDebugValue:Uo,useDeferredValue:function(e){var t=xo();return null===lo?t.memoizedState=e:$o(t,lo.memoizedState,e)},useTransition:function(){return[So(bo)[0],xo().memoizedState]},useMutableSource:ko,useSyncExternalStore:Co,useId:Ko,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=D({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:D({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var al={isMounted:function(e){return!!(e=e._reactInternals)&&He(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=eu(),a=tu(e),i=Ii(r,a);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Mi(e,i,a))&&(nu(t,e,a,r),Bi(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=eu(),a=tu(e),i=Ii(r,a);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Mi(e,i,a))&&(nu(t,e,a,r),Bi(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=eu(),r=tu(e),a=Ii(n,r);a.tag=2,void 0!==t&&null!==t&&(a.callback=t),null!==(t=Mi(e,a,r))&&(nu(t,e,r,n),Bi(t,e,r))}};function il(e,t,n,r,a,i,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,o):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(a,i))}function ol(e,t,n){var r=!1,a=_a,i=t.contextType;return"object"===typeof i&&null!==i?i=Ri(i):(a=Ta(t)?Ra:Pa.current,i=(r=null!==(r=t.contextTypes)&&void 0!==r)?Na(e,a):_a),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=al,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&al.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Fi(e);var i=t.contextType;"object"===typeof i&&null!==i?a.context=Ri(i):(i=Ta(t)?Ra:Pa.current,a.context=Na(e,i)),a.state=e.memoizedState,"function"===typeof(i=t.getDerivedStateFromProps)&&(rl(e,t,i,n),a.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(t=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&al.enqueueReplaceState(a,a.state,null),Hi(e,n,a,r),a.state=e.memoizedState),"function"===typeof a.componentDidMount&&(e.flags|=4194308)}function ul(e,t){try{var n="",r=t;do{n+=U(r),r=r.return}while(r);var a=n}catch(i){a="\nError generating stack: "+i.message+"\n"+i.stack}return{value:e,source:t,stack:a,digest:null}}function cl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var fl="function"===typeof WeakMap?WeakMap:Map;function pl(e,t,n){(n=Ii(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){$s||($s=!0,Vs=r),dl(0,t)},n}function hl(e,t,n){(n=Ii(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){dl(0,t)}}var i=e.stateNode;return null!==i&&"function"===typeof i.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!==typeof r&&(null===Ks?Ks=new Set([this]):Ks.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ml(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fl;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Eu.bind(null,e,t,n),t.then(e,e))}function gl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vl(e,t,n,r,a){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Ii(-1,1)).tag=2,Mi(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var yl=b.ReactCurrentOwner,xl=!1;function bl(e,t,n,r){t.child=null===e?wi(t,null,n,r):bi(t,e.child,n,r)}function wl(e,t,n,r,a){n=n.render;var i=t.ref;return Ai(t,a),r=go(e,t,n,r,i,a),n=vo(),null===e||xl?(ai&&n&&ei(t),t.flags|=1,bl(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,$l(e,t,a))}function Sl(e,t,n,r,a){if(null===e){var i=n.type;return"function"!==typeof i||Tu(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=zu(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,kl(e,t,i,r,a))}if(i=e.child,0===(e.lanes&a)){var o=i.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(o,r)&&e.ref===t.ref)return $l(e,t,a)}return t.flags|=1,(e=Ou(i,r)).ref=t.ref,e.return=t,t.child=e}function kl(e,t,n,r,a){if(null!==e){var i=e.memoizedProps;if(sr(i,r)&&e.ref===t.ref){if(xl=!1,t.pendingProps=r=i,0===(e.lanes&a))return t.lanes=e.lanes,$l(e,t,a);0!==(131072&e.flags)&&(xl=!0)}}return jl(e,t,n,r,a)}function Cl(e,t,n){var r=t.pendingProps,a=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ja(Os,Ts),Ts|=n;else{if(0===(1073741824&n))return e=null!==i?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ja(Os,Ts),Ts|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==i?i.baseLanes:n,ja(Os,Ts),Ts|=r}else null!==i?(r=i.baseLanes|n,t.memoizedState=null):r=n,ja(Os,Ts),Ts|=r;return bl(e,t,a,n),t.child}function El(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function jl(e,t,n,r,a){var i=Ta(n)?Ra:Pa.current;return i=Na(t,i),Ai(t,a),n=go(e,t,n,r,i,a),r=vo(),null===e||xl?(ai&&r&&ei(t),t.flags|=1,bl(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,$l(e,t,a))}function _l(e,t,n,r,a){if(Ta(n)){var i=!0;Fa(t)}else i=!1;if(Ai(t,a),null===t.stateNode)Wl(e,t),ol(t,n,r),sl(t,n,r,a),r=!0;else if(null===e){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,u=n.contextType;"object"===typeof u&&null!==u?u=Ri(u):u=Na(t,u=Ta(n)?Ra:Pa.current);var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof o.getSnapshotBeforeUpdate;d||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l!==r||s!==u)&&ll(t,o,r,u),Li=!1;var f=t.memoizedState;o.state=f,Hi(t,r,o,a),s=t.memoizedState,l!==r||f!==s||Aa.current||Li?("function"===typeof c&&(rl(t,n,c,r),s=t.memoizedState),(l=Li||il(t,n,l,r,f,s,u))?(d||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Di(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:nl(t.type,l),o.props=u,d=t.pendingProps,f=o.context,"object"===typeof(s=n.contextType)&&null!==s?s=Ri(s):s=Na(t,s=Ta(n)?Ra:Pa.current);var p=n.getDerivedStateFromProps;(c="function"===typeof p||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l!==d||f!==s)&&ll(t,o,r,s),Li=!1,f=t.memoizedState,o.state=f,Hi(t,r,o,a);var h=t.memoizedState;l!==d||f!==h||Aa.current||Li?("function"===typeof p&&(rl(t,n,p,r),h=t.memoizedState),(u=Li||il(t,n,u,r,f,h,s)||!1)?(c||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,h,s),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,h,s)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),o.props=r,o.state=h,o.context=s,r=u):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Pl(e,t,n,r,i,a)}function Pl(e,t,n,r,a,i){El(e,t);var o=0!==(128&t.flags);if(!r&&!o)return a&&Da(t,n,!1),$l(e,t,i);r=t.stateNode,yl.current=t;var l=o&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=bi(t,e.child,null,i),t.child=bi(t,null,l,i)):bl(e,t,l,i),t.memoizedState=r.state,a&&Da(t,n,!0),t.child}function Al(e){var t=e.stateNode;t.pendingContext?za(0,t.pendingContext,t.pendingContext!==t.context):t.context&&za(0,t.context,!1),Yi(e,t.containerInfo)}function Rl(e,t,n,r,a){return pi(),hi(a),t.flags|=256,bl(e,t,n,r),t.child}var Nl,Tl,Ol,zl,Ll={dehydrated:null,treeContext:null,retryLane:0};function Fl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Dl(e,t,n){var r,a=t.pendingProps,o=Ji.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&o)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),ja(Ji,1&o),null===e)return ui(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=a.children,e=a.fallback,l?(a=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&a)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Fu(s,a,0,null),e=Lu(e,a,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Fl(n),t.memoizedState=Ll,e):Il(t,s));if(null!==(o=e.memoizedState)&&null!==(r=o.dehydrated))return function(e,t,n,r,a,o,l){if(n)return 256&t.flags?(t.flags&=-257,Ml(e,t,l,r=cl(Error(i(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=r.fallback,a=t.mode,r=Fu({mode:"visible",children:r.children},a,0,null),(o=Lu(o,a,l,null)).flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,0!==(1&t.mode)&&bi(t,e.child,null,l),t.child.memoizedState=Fl(l),t.memoizedState=Ll,o);if(0===(1&t.mode))return Ml(e,t,l,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var s=r.dgst;return r=s,Ml(e,t,l,r=cl(o=Error(i(419)),r,void 0))}if(s=0!==(l&e.childLanes),xl||s){if(null!==(r=As)){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!==(a&(r.suspendedLanes|l))?0:a)&&a!==o.retryLane&&(o.retryLane=a,zi(e,a),nu(r,e,a,-1))}return mu(),Ml(e,t,l,r=cl(Error(i(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=_u.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,ri=ua(a.nextSibling),ni=t,ai=!0,ii=null,null!==e&&(Qa[qa++]=Za,Qa[qa++]=Ga,Qa[qa++]=Ya,Za=e.id,Ga=e.overflow,Ya=t),t=Il(t,r.children),t.flags|=4096,t)}(e,t,s,a,r,o,n);if(l){l=a.fallback,s=t.mode,r=(o=e.child).sibling;var u={mode:"hidden",children:a.children};return 0===(1&s)&&t.child!==o?((a=t.child).childLanes=0,a.pendingProps=u,t.deletions=null):(a=Ou(o,u)).subtreeFlags=14680064&o.subtreeFlags,null!==r?l=Ou(r,l):(l=Lu(l,s,n,null)).flags|=2,l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,s=null===(s=e.child.memoizedState)?Fl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Ll,a}return e=(l=e.child).sibling,a=Ou(l,{mode:"visible",children:a.children}),0===(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Il(e,t){return(t=Fu({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Ml(e,t,n,r){return null!==r&&hi(r),bi(t,e.child,null,n),(e=Il(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Bl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Pi(e.return,t,n)}function Ul(e,t,n,r,a){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function Hl(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(bl(e,t,r.children,n),0!==(2&(r=Ji.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Bl(e,n,t);else if(19===e.tag)Bl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ja(Ji,r),0===(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===eo(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ul(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===eo(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ul(t,!0,n,null,i);break;case"together":Ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function $l(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Fs|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(n=Ou(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ou(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Vl(e,t){if(!ai)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Kl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ql(e,t,n){var r=t.pendingProps;switch(ti(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kl(t),null;case 1:case 17:return Ta(t.type)&&Oa(),Kl(t),null;case 3:return r=t.stateNode,Zi(),Ea(Aa),Ea(Pa),no(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(di(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ii&&(ou(ii),ii=null))),Tl(e,t),Kl(t),null;case 5:Xi(t);var a=qi(Qi.current);if(n=t.type,null!==e&&null!=t.stateNode)Ol(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(i(166));return Kl(t),null}if(e=qi(Vi.current),di(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[fa]=t,r[pa]=o,e=0!==(1&t.mode),n){case"dialog":Mr("cancel",r),Mr("close",r);break;case"iframe":case"object":case"embed":Mr("load",r);break;case"video":case"audio":for(a=0;a<Lr.length;a++)Mr(Lr[a],r);break;case"source":Mr("error",r);break;case"img":case"image":case"link":Mr("error",r),Mr("load",r);break;case"details":Mr("toggle",r);break;case"input":Z(r,o),Mr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Mr("invalid",r);break;case"textarea":ae(r,o),Mr("invalid",r)}for(var s in ye(n,o),a=null,o)if(o.hasOwnProperty(s)){var u=o[s];"children"===s?"string"===typeof u?r.textContent!==u&&(!0!==o.suppressHydrationWarning&&Xr(r.textContent,u,e),a=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==o.suppressHydrationWarning&&Xr(r.textContent,u,e),a=["children",""+u]):l.hasOwnProperty(s)&&null!=u&&"onScroll"===s&&Mr("scroll",r)}switch(n){case"input":K(r),J(r,o,!0);break;case"textarea":K(r),oe(r);break;case"select":case"option":break;default:"function"===typeof o.onClick&&(r.onclick=Jr)}r=a,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[fa]=t,e[pa]=r,Nl(e,t,!1,!1),t.stateNode=e;e:{switch(s=xe(n,r),n){case"dialog":Mr("cancel",e),Mr("close",e),a=r;break;case"iframe":case"object":case"embed":Mr("load",e),a=r;break;case"video":case"audio":for(a=0;a<Lr.length;a++)Mr(Lr[a],e);a=r;break;case"source":Mr("error",e),a=r;break;case"img":case"image":case"link":Mr("error",e),Mr("load",e),a=r;break;case"details":Mr("toggle",e),a=r;break;case"input":Z(e,r),a=Y(e,r),Mr("invalid",e);break;case"option":default:a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=D({},r,{value:void 0}),Mr("invalid",e);break;case"textarea":ae(e,r),a=re(e,r),Mr("invalid",e)}for(o in ye(n,a),u=a)if(u.hasOwnProperty(o)){var c=u[o];"style"===o?ge(e,c):"dangerouslySetInnerHTML"===o?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===o?"string"===typeof c?("textarea"!==n||""!==c)&&fe(e,c):"number"===typeof c&&fe(e,""+c):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(l.hasOwnProperty(o)?null!=c&&"onScroll"===o&&Mr("scroll",e):null!=c&&x(e,o,c,s))}switch(n){case"input":K(e),J(e,r,!1);break;case"textarea":K(e),oe(e);break;case"option":null!=r.value&&e.setAttribute("value",""+$(r.value));break;case"select":e.multiple=!!r.multiple,null!=(o=r.value)?ne(e,!!r.multiple,o,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof a.onClick&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Kl(t),null;case 6:if(e&&null!=t.stateNode)zl(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(i(166));if(n=qi(Qi.current),qi(Vi.current),di(t)){if(r=t.stateNode,n=t.memoizedProps,r[fa]=t,(o=r.nodeValue!==n)&&null!==(e=ni))switch(e.tag){case 3:Xr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Xr(r.nodeValue,n,0!==(1&e.mode))}o&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fa]=t,t.stateNode=r}return Kl(t),null;case 13:if(Ea(Ji),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ai&&null!==ri&&0!==(1&t.mode)&&0===(128&t.flags))fi(),pi(),t.flags|=98560,o=!1;else if(o=di(t),null!==r&&null!==r.dehydrated){if(null===e){if(!o)throw Error(i(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(i(317));o[fa]=t}else pi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Kl(t),o=!1}else null!==ii&&(ou(ii),ii=null),o=!0;if(!o)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&Ji.current)?0===zs&&(zs=3):mu())),null!==t.updateQueue&&(t.flags|=4),Kl(t),null);case 4:return Zi(),Tl(e,t),null===e&&Hr(t.stateNode.containerInfo),Kl(t),null;case 10:return _i(t.type._context),Kl(t),null;case 19:if(Ea(Ji),null===(o=t.memoizedState))return Kl(t),null;if(r=0!==(128&t.flags),null===(s=o.rendering))if(r)Vl(o,!1);else{if(0!==zs||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=eo(e))){for(t.flags|=128,Vl(o,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(o=n).flags&=14680066,null===(s=o.alternate)?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ja(Ji,1&Ji.current|2),t.child}e=e.sibling}null!==o.tail&&Ge()>Hs&&(t.flags|=128,r=!0,Vl(o,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=eo(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Vl(o,!0),null===o.tail&&"hidden"===o.tailMode&&!s.alternate&&!ai)return Kl(t),null}else 2*Ge()-o.renderingStartTime>Hs&&1073741824!==n&&(t.flags|=128,r=!0,Vl(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=o.last)?n.sibling=s:t.child=s,o.last=s)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ge(),t.sibling=null,n=Ji.current,ja(Ji,r?1&n|2:1&n),t):(Kl(t),null);case 22:case 23:return du(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Ts)&&(Kl(t),6&t.subtreeFlags&&(t.flags|=8192)):Kl(t),null;case 24:case 25:return null}throw Error(i(156,t.tag))}function ql(e,t){switch(ti(t),t.tag){case 1:return Ta(t.type)&&Oa(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Zi(),Ea(Aa),Ea(Pa),no(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Xi(t),null;case 13:if(Ea(Ji),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));pi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ea(Ji),null;case 4:return Zi(),null;case 10:return _i(t.type._context),null;case 22:case 23:return du(),null;default:return null}}Nl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Tl=function(){},Ol=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,qi(Vi.current);var i,o=null;switch(n){case"input":a=Y(e,a),r=Y(e,r),o=[];break;case"select":a=D({},a,{value:void 0}),r=D({},r,{value:void 0}),o=[];break;case"textarea":a=re(e,a),r=re(e,r),o=[];break;default:"function"!==typeof a.onClick&&"function"===typeof r.onClick&&(e.onclick=Jr)}for(c in ye(n,r),n=null,a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&null!=a[c])if("style"===c){var s=a[c];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(l.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=null!=a?a[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(null!=u||null!=s))if("style"===c)if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(o||(o=[]),o.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,s=s?s.__html:void 0,null!=u&&s!==u&&(o=o||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(o=o||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(l.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Mr("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}},zl=function(e,t,n,r){n!==r&&(t.flags|=4)};var Yl=!1,Zl=!1,Gl="function"===typeof WeakSet?WeakSet:Set,Xl=null;function Jl(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Cu(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){Cu(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,void 0!==i&&es(t,n,i)}a=a.next}while(a!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function as(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function is(e){var t=e.alternate;null!==t&&(e.alternate=null,is(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fa],delete t[pa],delete t[ma],delete t[ga],delete t[va])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function os(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||os(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Jr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function us(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(us(e,t,n),e=e.sibling;null!==e;)us(e,t,n),e=e.sibling}var cs=null,ds=!1;function fs(e,t,n){for(n=n.child;null!==n;)ps(e,t,n),n=n.sibling}function ps(e,t,n){if(it&&"function"===typeof it.onCommitFiberUnmount)try{it.onCommitFiberUnmount(at,n)}catch(l){}switch(n.tag){case 5:Zl||Jl(n,t);case 6:var r=cs,a=ds;cs=null,fs(e,t,n),ds=a,null!==(cs=r)&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cs.removeChild(n.stateNode));break;case 18:null!==cs&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?sa(e.parentNode,n):1===e.nodeType&&sa(e,n),Ht(e)):sa(cs,n.stateNode));break;case 4:r=cs,a=ds,cs=n.stateNode.containerInfo,ds=!0,fs(e,t,n),cs=r,ds=a;break;case 0:case 11:case 14:case 15:if(!Zl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,void 0!==o&&(0!==(2&i)||0!==(4&i))&&es(n,t,o),a=a.next}while(a!==r)}fs(e,t,n);break;case 1:if(!Zl&&(Jl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Cu(n,t,l)}fs(e,t,n);break;case 21:fs(e,t,n);break;case 22:1&n.mode?(Zl=(r=Zl)||null!==n.memoizedState,fs(e,t,n),Zl=r):fs(e,t,n);break;default:fs(e,t,n)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Gl),t.forEach((function(t){var r=Pu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function ms(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];try{var o=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:cs=s.stateNode,ds=!1;break e;case 3:case 4:cs=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===cs)throw Error(i(160));ps(o,l,a),cs=null,ds=!1;var u=a.alternate;null!==u&&(u.return=null),a.return=null}catch(c){Cu(a,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gs(t,e),t=t.sibling}function gs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ms(t,e),vs(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(g){Cu(e,e.return,g)}try{ns(5,e,e.return)}catch(g){Cu(e,e.return,g)}}break;case 1:ms(t,e),vs(e),512&r&&null!==n&&Jl(n,n.return);break;case 5:if(ms(t,e),vs(e),512&r&&null!==n&&Jl(n,n.return),32&e.flags){var a=e.stateNode;try{fe(a,"")}catch(g){Cu(e,e.return,g)}}if(4&r&&null!=(a=e.stateNode)){var o=e.memoizedProps,l=null!==n?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===s&&"radio"===o.type&&null!=o.name&&G(a,o),xe(s,l);var c=xe(s,o);for(l=0;l<u.length;l+=2){var d=u[l],f=u[l+1];"style"===d?ge(a,f):"dangerouslySetInnerHTML"===d?de(a,f):"children"===d?fe(a,f):x(a,d,f,c)}switch(s){case"input":X(a,o);break;case"textarea":ie(a,o);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var h=o.value;null!=h?ne(a,!!o.multiple,h,!1):p!==!!o.multiple&&(null!=o.defaultValue?ne(a,!!o.multiple,o.defaultValue,!0):ne(a,!!o.multiple,o.multiple?[]:"",!1))}a[pa]=o}catch(g){Cu(e,e.return,g)}}break;case 6:if(ms(t,e),vs(e),4&r){if(null===e.stateNode)throw Error(i(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(g){Cu(e,e.return,g)}}break;case 3:if(ms(t,e),vs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ht(t.containerInfo)}catch(g){Cu(e,e.return,g)}break;case 4:default:ms(t,e),vs(e);break;case 13:ms(t,e),vs(e),8192&(a=e.child).flags&&(o=null!==a.memoizedState,a.stateNode.isHidden=o,!o||null!==a.alternate&&null!==a.alternate.memoizedState||(Us=Ge())),4&r&&hs(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Zl=(c=Zl)||d,ms(t,e),Zl=c):ms(t,e),vs(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(Xl=e,d=e.child;null!==d;){for(f=Xl=d;null!==Xl;){switch(h=(p=Xl).child,p.tag){case 0:case 11:case 14:case 15:ns(4,p,p.return);break;case 1:Jl(p,p.return);var m=p.stateNode;if("function"===typeof m.componentWillUnmount){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Cu(r,n,g)}}break;case 5:Jl(p,p.return);break;case 22:if(null!==p.memoizedState){ws(f);continue}}null!==h?(h.return=p,Xl=h):ws(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{a=f.stateNode,c?"function"===typeof(o=a.style).setProperty?o.setProperty("display","none","important"):o.display="none":(s=f.stateNode,l=void 0!==(u=f.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,s.style.display=me("display",l))}catch(g){Cu(e,e.return,g)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(g){Cu(e,e.return,g)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ms(t,e),vs(e),4&r&&hs(e);case 21:}}function vs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(os(n)){var r=n;break e}n=n.return}throw Error(i(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(fe(a,""),r.flags&=-33),us(e,ls(e),a);break;case 3:case 4:var o=r.stateNode.containerInfo;ss(e,ls(e),o);break;default:throw Error(i(161))}}catch(l){Cu(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function ys(e,t,n){Xl=e,xs(e,t,n)}function xs(e,t,n){for(var r=0!==(1&e.mode);null!==Xl;){var a=Xl,i=a.child;if(22===a.tag&&r){var o=null!==a.memoizedState||Yl;if(!o){var l=a.alternate,s=null!==l&&null!==l.memoizedState||Zl;l=Yl;var u=Zl;if(Yl=o,(Zl=s)&&!u)for(Xl=a;null!==Xl;)s=(o=Xl).child,22===o.tag&&null!==o.memoizedState?Ss(a):null!==s?(s.return=o,Xl=s):Ss(a);for(;null!==i;)Xl=i,xs(i,t,n),i=i.sibling;Xl=a,Yl=l,Zl=u}bs(e)}else 0!==(8772&a.subtreeFlags)&&null!==i?(i.return=a,Xl=i):bs(e)}}function bs(e){for(;null!==Xl;){var t=Xl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Zl||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Zl)if(null===n)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&Wi(t,o,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Wi(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Ht(f)}}}break;default:throw Error(i(163))}Zl||512&t.flags&&as(t)}catch(p){Cu(t,t.return,p)}}if(t===e){Xl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Xl=n;break}Xl=t.return}}function ws(e){for(;null!==Xl;){var t=Xl;if(t===e){Xl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Xl=n;break}Xl=t.return}}function Ss(e){for(;null!==Xl;){var t=Xl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){Cu(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(s){Cu(t,a,s)}}var i=t.return;try{as(t)}catch(s){Cu(t,i,s)}break;case 5:var o=t.return;try{as(t)}catch(s){Cu(t,o,s)}}}catch(s){Cu(t,t.return,s)}if(t===e){Xl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Xl=l;break}Xl=t.return}}var ks,Cs=Math.ceil,Es=b.ReactCurrentDispatcher,js=b.ReactCurrentOwner,_s=b.ReactCurrentBatchConfig,Ps=0,As=null,Rs=null,Ns=0,Ts=0,Os=Ca(0),zs=0,Ls=null,Fs=0,Ds=0,Is=0,Ms=null,Bs=null,Us=0,Hs=1/0,Ws=null,$s=!1,Vs=null,Ks=null,Qs=!1,qs=null,Ys=0,Zs=0,Gs=null,Xs=-1,Js=0;function eu(){return 0!==(6&Ps)?Ge():-1!==Xs?Xs:Xs=Ge()}function tu(e){return 0===(1&e.mode)?1:0!==(2&Ps)&&0!==Ns?Ns&-Ns:null!==mi.transition?(0===Js&&(Js=mt()),Js):0!==(e=xt)?e:e=void 0===(e=window.event)?16:Zt(e.type)}function nu(e,t,n,r){if(50<Zs)throw Zs=0,Gs=null,Error(i(185));vt(e,n,r),0!==(2&Ps)&&e===As||(e===As&&(0===(2&Ps)&&(Ds|=n),4===zs&&lu(e,Ns)),ru(e,r),1===n&&0===Ps&&0===(1&t.mode)&&(Hs=Ge()+500,Ma&&Ha()))}function ru(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-ot(i),l=1<<o,s=a[o];-1===s?0!==(l&n)&&0===(l&r)||(a[o]=pt(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}(e,t);var r=ft(e,e===As?Ns:0);if(0===r)null!==n&&qe(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&qe(n),1===t)0===e.tag?function(e){Ma=!0,Ua(e)}(su.bind(null,e)):Ua(su.bind(null,e)),oa((function(){0===(6&Ps)&&Ha()})),n=null;else{switch(bt(r)){case 1:n=Je;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Au(n,au.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function au(e,t){if(Xs=-1,Js=0,0!==(6&Ps))throw Error(i(327));var n=e.callbackNode;if(Su()&&e.callbackNode!==n)return null;var r=ft(e,e===As?Ns:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gu(e,r);else{t=r;var a=Ps;Ps|=2;var o=hu();for(As===e&&Ns===t||(Ws=null,Hs=Ge()+500,fu(e,t));;)try{yu();break}catch(s){pu(e,s)}ji(),Es.current=o,Ps=a,null!==Rs?t=0:(As=null,Ns=0,t=zs)}if(0!==t){if(2===t&&(0!==(a=ht(e))&&(r=a,t=iu(e,a))),1===t)throw n=Ls,fu(e,0),lu(e,r),ru(e,Ge()),n;if(6===t)lu(e,r);else{if(a=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!lr(i(),a))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=gu(e,r))&&(0!==(o=ht(e))&&(r=o,t=iu(e,o))),1===t))throw n=Ls,fu(e,0),lu(e,r),ru(e,Ge()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(i(345));case 2:case 5:wu(e,Bs,Ws);break;case 3:if(lu(e,r),(130023424&r)===r&&10<(t=Us+500-Ge())){if(0!==ft(e,0))break;if(((a=e.suspendedLanes)&r)!==r){eu(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ra(wu.bind(null,e,Bs,Ws),t);break}wu(e,Bs,Ws);break;case 4:if(lu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-ot(r);o=1<<l,(l=t[l])>a&&(a=l),r&=~o}if(r=a,10<(r=(120>(r=Ge()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cs(r/1960))-r)){e.timeoutHandle=ra(wu.bind(null,e,Bs,Ws),r);break}wu(e,Bs,Ws);break;default:throw Error(i(329))}}}return ru(e,Ge()),e.callbackNode===n?au.bind(null,e):null}function iu(e,t){var n=Ms;return e.current.memoizedState.isDehydrated&&(fu(e,t).flags|=256),2!==(e=gu(e,t))&&(t=Bs,Bs=n,null!==t&&ou(t)),e}function ou(e){null===Bs?Bs=e:Bs.push.apply(Bs,e)}function lu(e,t){for(t&=~Is,t&=~Ds,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function su(e){if(0!==(6&Ps))throw Error(i(327));Su();var t=ft(e,0);if(0===(1&t))return ru(e,Ge()),null;var n=gu(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=iu(e,r))}if(1===n)throw n=Ls,fu(e,0),lu(e,t),ru(e,Ge()),n;if(6===n)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wu(e,Bs,Ws),ru(e,Ge()),null}function uu(e,t){var n=Ps;Ps|=1;try{return e(t)}finally{0===(Ps=n)&&(Hs=Ge()+500,Ma&&Ha())}}function cu(e){null!==qs&&0===qs.tag&&0===(6&Ps)&&Su();var t=Ps;Ps|=1;var n=_s.transition,r=xt;try{if(_s.transition=null,xt=1,e)return e()}finally{xt=r,_s.transition=n,0===(6&(Ps=t))&&Ha()}}function du(){Ts=Os.current,Ea(Os)}function fu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,aa(n)),null!==Rs)for(n=Rs.return;null!==n;){var r=n;switch(ti(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Oa();break;case 3:Zi(),Ea(Aa),Ea(Pa),no();break;case 5:Xi(r);break;case 4:Zi();break;case 13:case 19:Ea(Ji);break;case 10:_i(r.type._context);break;case 22:case 23:du()}n=n.return}if(As=e,Rs=e=Ou(e.current,null),Ns=Ts=t,zs=0,Ls=null,Is=Ds=Fs=0,Bs=Ms=null,null!==Ni){for(t=0;t<Ni.length;t++)if(null!==(r=(n=Ni[t]).interleaved)){n.interleaved=null;var a=r.next,i=n.pending;if(null!==i){var o=i.next;i.next=a,r.next=o}n.pending=r}Ni=null}return e}function pu(e,t){for(;;){var n=Rs;try{if(ji(),ro.current=Xo,uo){for(var r=oo.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}uo=!1}if(io=0,so=lo=oo=null,co=!1,fo=0,js.current=null,null===n||null===n.return){zs=1,Ls=t,Rs=null;break}e:{var o=e,l=n.return,s=n,u=t;if(t=Ns,s.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,d=s,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=gl(l);if(null!==h){h.flags&=-257,vl(h,l,s,0,t),1&h.mode&&ml(o,c,t),u=c;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(u),t.updateQueue=g}else m.add(u);break e}if(0===(1&t)){ml(o,c,t),mu();break e}u=Error(i(426))}else if(ai&&1&s.mode){var v=gl(l);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vl(v,l,s,0,t),hi(ul(u,s));break e}}o=u=ul(u,s),4!==zs&&(zs=2),null===Ms?Ms=[o]:Ms.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,Ui(o,pl(0,u,t));break e;case 1:s=u;var y=o.type,x=o.stateNode;if(0===(128&o.flags)&&("function"===typeof y.getDerivedStateFromError||null!==x&&"function"===typeof x.componentDidCatch&&(null===Ks||!Ks.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t,Ui(o,hl(o,s,t));break e}}o=o.return}while(null!==o)}bu(n)}catch(b){t=b,Rs===n&&null!==n&&(Rs=n=n.return);continue}break}}function hu(){var e=Es.current;return Es.current=Xo,null===e?Xo:e}function mu(){0!==zs&&3!==zs&&2!==zs||(zs=4),null===As||0===(268435455&Fs)&&0===(268435455&Ds)||lu(As,Ns)}function gu(e,t){var n=Ps;Ps|=2;var r=hu();for(As===e&&Ns===t||(Ws=null,fu(e,t));;)try{vu();break}catch(a){pu(e,a)}if(ji(),Ps=n,Es.current=r,null!==Rs)throw Error(i(261));return As=null,Ns=0,zs}function vu(){for(;null!==Rs;)xu(Rs)}function yu(){for(;null!==Rs&&!Ye();)xu(Rs)}function xu(e){var t=ks(e.alternate,e,Ts);e.memoizedProps=e.pendingProps,null===t?bu(e):Rs=t,js.current=null}function bu(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Ql(n,t,Ts)))return void(Rs=n)}else{if(null!==(n=ql(n,t)))return n.flags&=32767,void(Rs=n);if(null===e)return zs=6,void(Rs=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Rs=t);Rs=t=e}while(null!==t);0===zs&&(zs=5)}function wu(e,t,n){var r=xt,a=_s.transition;try{_s.transition=null,xt=1,function(e,t,n,r){do{Su()}while(null!==qs);if(0!==(6&Ps))throw Error(i(327));n=e.finishedWork;var a=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-ot(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}(e,o),e===As&&(Rs=As=null,Ns=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Qs||(Qs=!0,Au(tt,(function(){return Su(),null}))),o=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||o){o=_s.transition,_s.transition=null;var l=xt;xt=1;var s=Ps;Ps|=4,js.current=null,function(e,t){if(ea=$t,pr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(w){n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==a&&3!==f.nodeType||(s=l+a),f!==o||0!==r&&3!==f.nodeType||(u=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++c===a&&(s=l),p===o&&++d===r&&(u=l),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ta={focusedElem:e,selectionRange:n},$t=!1,Xl=t;null!==Xl;)if(e=(t=Xl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Xl=e;else for(;null!==Xl;){t=Xl;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,v=m.memoizedState,y=t.stateNode,x=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:nl(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(i(163))}}catch(w){Cu(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Xl=e;break}Xl=t.return}m=ts,ts=!1}(e,n),gs(n,e),hr(ta),$t=!!ea,ta=ea=null,e.current=n,ys(n,e,a),Ze(),Ps=s,xt=l,_s.transition=o}else e.current=n;if(Qs&&(Qs=!1,qs=e,Ys=a),o=e.pendingLanes,0===o&&(Ks=null),function(e){if(it&&"function"===typeof it.onCommitFiberRoot)try{it.onCommitFiberRoot(at,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),ru(e,Ge()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if($s)throw $s=!1,e=Vs,Vs=null,e;0!==(1&Ys)&&0!==e.tag&&Su(),o=e.pendingLanes,0!==(1&o)?e===Gs?Zs++:(Zs=0,Gs=e):Zs=0,Ha()}(e,t,n,r)}finally{_s.transition=a,xt=r}return null}function Su(){if(null!==qs){var e=bt(Ys),t=_s.transition,n=xt;try{if(_s.transition=null,xt=16>e?16:e,null===qs)var r=!1;else{if(e=qs,qs=null,Ys=0,0!==(6&Ps))throw Error(i(331));var a=Ps;for(Ps|=4,Xl=e.current;null!==Xl;){var o=Xl,l=o.child;if(0!==(16&Xl.flags)){var s=o.deletions;if(null!==s){for(var u=0;u<s.length;u++){var c=s[u];for(Xl=c;null!==Xl;){var d=Xl;switch(d.tag){case 0:case 11:case 15:ns(8,d,o)}var f=d.child;if(null!==f)f.return=d,Xl=f;else for(;null!==Xl;){var p=(d=Xl).sibling,h=d.return;if(is(d),d===c){Xl=null;break}if(null!==p){p.return=h,Xl=p;break}Xl=h}}}var m=o.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}Xl=o}}if(0!==(2064&o.subtreeFlags)&&null!==l)l.return=o,Xl=l;else e:for(;null!==Xl;){if(0!==(2048&(o=Xl).flags))switch(o.tag){case 0:case 11:case 15:ns(9,o,o.return)}var y=o.sibling;if(null!==y){y.return=o.return,Xl=y;break e}Xl=o.return}}var x=e.current;for(Xl=x;null!==Xl;){var b=(l=Xl).child;if(0!==(2064&l.subtreeFlags)&&null!==b)b.return=l,Xl=b;else e:for(l=x;null!==Xl;){if(0!==(2048&(s=Xl).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(S){Cu(s,s.return,S)}if(s===l){Xl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Xl=w;break e}Xl=s.return}}if(Ps=a,Ha(),it&&"function"===typeof it.onPostCommitFiberRoot)try{it.onPostCommitFiberRoot(at,e)}catch(S){}r=!0}return r}finally{xt=n,_s.transition=t}}return!1}function ku(e,t,n){e=Mi(e,t=pl(0,t=ul(n,t),1),1),t=eu(),null!==e&&(vt(e,1,t),ru(e,t))}function Cu(e,t,n){if(3===e.tag)ku(e,e,n);else for(;null!==t;){if(3===t.tag){ku(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Ks||!Ks.has(r))){t=Mi(t,e=hl(t,e=ul(n,e),1),1),e=eu(),null!==t&&(vt(t,1,e),ru(t,e));break}}t=t.return}}function Eu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=eu(),e.pingedLanes|=e.suspendedLanes&n,As===e&&(Ns&n)===n&&(4===zs||3===zs&&(130023424&Ns)===Ns&&500>Ge()-Us?fu(e,0):Is|=n),ru(e,t)}function ju(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=eu();null!==(e=zi(e,t))&&(vt(e,t,n),ru(e,n))}function _u(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),ju(e,n)}function Pu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(i(314))}null!==r&&r.delete(t),ju(e,n)}function Au(e,t){return Qe(e,t)}function Ru(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nu(e,t,n,r){return new Ru(e,t,n,r)}function Tu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ou(e,t){var n=e.alternate;return null===n?((n=Nu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zu(e,t,n,r,a,o){var l=2;if(r=e,"function"===typeof e)Tu(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case k:return Lu(n.children,a,o,t);case C:l=8,a|=8;break;case E:return(e=Nu(12,n,t,2|a)).elementType=E,e.lanes=o,e;case A:return(e=Nu(13,n,t,a)).elementType=A,e.lanes=o,e;case R:return(e=Nu(19,n,t,a)).elementType=R,e.lanes=o,e;case O:return Fu(n,a,o,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case j:l=10;break e;case _:l=9;break e;case P:l=11;break e;case N:l=14;break e;case T:l=16,r=null;break e}throw Error(i(130,null==e?e:typeof e,""))}return(t=Nu(l,n,t,a)).elementType=e,t.type=r,t.lanes=o,t}function Lu(e,t,n,r){return(e=Nu(7,e,r,t)).lanes=n,e}function Fu(e,t,n,r){return(e=Nu(22,e,r,t)).elementType=O,e.lanes=n,e.stateNode={isHidden:!1},e}function Du(e,t,n){return(e=Nu(6,e,null,t)).lanes=n,e}function Iu(e,t,n){return(t=Nu(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mu(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Bu(e,t,n,r,a,i,o,l,s){return e=new Mu(e,t,n,l,s),1===t?(t=1,!0===i&&(t|=8)):t=0,i=Nu(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fi(i),e}function Uu(e){if(!e)return _a;e:{if(He(e=e._reactInternals)!==e||1!==e.tag)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ta(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(i(171))}if(1===e.tag){var n=e.type;if(Ta(n))return La(e,n,t)}return t}function Hu(e,t,n,r,a,i,o,l,s){return(e=Bu(n,r,!0,e,0,i,0,l,s)).context=Uu(null),n=e.current,(i=Ii(r=eu(),a=tu(n))).callback=void 0!==t&&null!==t?t:null,Mi(n,i,a),e.current.lanes=a,vt(e,a,r),ru(e,r),e}function Wu(e,t,n,r){var a=t.current,i=eu(),o=tu(a);return n=Uu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Ii(i,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Mi(a,t,o))&&(nu(e,a,o,i),Bi(e,a,o)),o}function $u(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Vu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Ku(e,t){Vu(e,t),(e=e.alternate)&&Vu(e,t)}ks=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Aa.current)xl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return xl=!1,function(e,t,n){switch(t.tag){case 3:Al(t),pi();break;case 5:Gi(t);break;case 1:Ta(t.type)&&Fa(t);break;case 4:Yi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;ja(Si,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(ja(Ji,1&Ji.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Dl(e,t,n):(ja(Ji,1&Ji.current),null!==(e=$l(e,t,n))?e.sibling:null);ja(Ji,1&Ji.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Hl(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),ja(Ji,Ji.current),r)break;return null;case 22:case 23:return t.lanes=0,Cl(e,t,n)}return $l(e,t,n)}(e,t,n);xl=0!==(131072&e.flags)}else xl=!1,ai&&0!==(1048576&t.flags)&&Ja(t,Ka,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wl(e,t),e=t.pendingProps;var a=Na(t,Pa.current);Ai(t,n),a=go(null,t,r,e,a,n);var o=vo();return t.flags|=1,"object"===typeof a&&null!==a&&"function"===typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ta(r)?(o=!0,Fa(t)):o=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,Fi(t),a.updater=al,t.stateNode=a,a._reactInternals=t,sl(t,r,e,n),t=Pl(null,t,r,!0,o,n)):(t.tag=0,ai&&o&&ei(t),bl(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wl(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"===typeof e)return Tu(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===P)return 11;if(e===N)return 14}return 2}(r),e=nl(r,e),a){case 0:t=jl(null,t,r,e,n);break e;case 1:t=_l(null,t,r,e,n);break e;case 11:t=wl(null,t,r,e,n);break e;case 14:t=Sl(null,t,r,nl(r.type,e),n);break e}throw Error(i(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,jl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 1:return r=t.type,a=t.pendingProps,_l(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 3:e:{if(Al(t),null===e)throw Error(i(387));r=t.pendingProps,a=(o=t.memoizedState).element,Di(e,t),Hi(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Rl(e,t,r,n,a=ul(Error(i(423)),t));break e}if(r!==a){t=Rl(e,t,r,n,a=ul(Error(i(424)),t));break e}for(ri=ua(t.stateNode.containerInfo.firstChild),ni=t,ai=!0,ii=null,n=wi(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(pi(),r===a){t=$l(e,t,n);break e}bl(e,t,r,n)}t=t.child}return t;case 5:return Gi(t),null===e&&ui(t),r=t.type,a=t.pendingProps,o=null!==e?e.memoizedProps:null,l=a.children,na(r,a)?l=null:null!==o&&na(r,o)&&(t.flags|=32),El(e,t),bl(e,t,l,n),t.child;case 6:return null===e&&ui(t),null;case 13:return Dl(e,t,n);case 4:return Yi(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=bi(t,null,r,n):bl(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,wl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 7:return bl(e,t,t.pendingProps,n),t.child;case 8:case 12:return bl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,o=t.memoizedProps,l=a.value,ja(Si,r._currentValue),r._currentValue=l,null!==o)if(lr(o.value,l)){if(o.children===a.children&&!Aa.current){t=$l(e,t,n);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var s=o.dependencies;if(null!==s){l=o.child;for(var u=s.firstContext;null!==u;){if(u.context===r){if(1===o.tag){(u=Ii(-1,n&-n)).tag=2;var c=o.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}o.lanes|=n,null!==(u=o.alternate)&&(u.lanes|=n),Pi(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(10===o.tag)l=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(l=o.return))throw Error(i(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),Pi(l,n,t),l=o.sibling}else l=o.child;if(null!==l)l.return=o;else for(l=o;null!==l;){if(l===t){l=null;break}if(null!==(o=l.sibling)){o.return=l.return,l=o;break}l=l.return}o=l}bl(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Ai(t,n),r=r(a=Ri(a)),t.flags|=1,bl(e,t,r,n),t.child;case 14:return a=nl(r=t.type,t.pendingProps),Sl(e,t,r,a=nl(r.type,a),n);case 15:return kl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:nl(r,a),Wl(e,t),t.tag=1,Ta(r)?(e=!0,Fa(t)):e=!1,Ai(t,n),ol(t,r,a),sl(t,r,a,n),Pl(null,t,r,!0,e,n);case 19:return Hl(e,t,n);case 22:return Cl(e,t,n)}throw Error(i(156,t.tag))};var Qu="function"===typeof reportError?reportError:function(e){console.error(e)};function qu(e){this._internalRoot=e}function Yu(e){this._internalRoot=e}function Zu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Gu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Xu(){}function Ju(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if("function"===typeof a){var l=a;a=function(){var e=$u(o);l.call(e)}}Wu(t,o,e,a)}else o=function(e,t,n,r,a){if(a){if("function"===typeof r){var i=r;r=function(){var e=$u(o);i.call(e)}}var o=Hu(t,r,e,0,null,!1,0,"",Xu);return e._reactRootContainer=o,e[ha]=o.current,Hr(8===e.nodeType?e.parentNode:e),cu(),o}for(;a=e.lastChild;)e.removeChild(a);if("function"===typeof r){var l=r;r=function(){var e=$u(s);l.call(e)}}var s=Bu(e,0,!1,null,0,!1,0,"",Xu);return e._reactRootContainer=s,e[ha]=s.current,Hr(8===e.nodeType?e.parentNode:e),cu((function(){Wu(t,s,n,r)})),s}(n,t,e,a,r);return $u(o)}Yu.prototype.render=qu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));Wu(e,t,null,null)},Yu.prototype.unmount=qu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cu((function(){Wu(null,e,null,null)})),t[ha]=null}},Yu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ct();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ot.length&&0!==t&&t<Ot[n].priority;n++);Ot.splice(n,0,e),0===n&&Dt(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(yt(t,1|n),ru(t,Ge()),0===(6&Ps)&&(Hs=Ge()+500,Ha()))}break;case 13:cu((function(){var t=zi(e,1);if(null!==t){var n=eu();nu(t,e,1,n)}})),Ku(e,1)}},St=function(e){if(13===e.tag){var t=zi(e,134217728);if(null!==t)nu(t,e,134217728,eu());Ku(e,134217728)}},kt=function(e){if(13===e.tag){var t=tu(e),n=zi(e,t);if(null!==n)nu(n,e,t,eu());Ku(e,t)}},Ct=function(){return xt},Et=function(e,t){var n=xt;try{return xt=e,t()}finally{xt=n}},Se=function(e,t,n){switch(t){case"input":if(X(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=wa(r);if(!a)throw Error(i(90));Q(r),X(r,a)}}}break;case"textarea":ie(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Pe=uu,Ae=cu;var ec={usingClientEntryPoint:!1,Events:[xa,ba,wa,je,_e,uu]},tc={findFiberByHostInstance:ya,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nc={bundleType:tc.bundleType,version:tc.version,rendererPackageName:tc.rendererPackageName,rendererConfig:tc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:tc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{at=rc.inject(nc),it=rc}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ec,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Zu(t))throw Error(i(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:S,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Zu(e))throw Error(i(299));var n=!1,r="",a=Qu;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=Bu(e,1,!1,null,0,n,0,r,a),e[ha]=t.current,Hr(8===e.nodeType?e.parentNode:e),new qu(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=null===(e=Ve(t))?null:e.stateNode},t.flushSync=function(e){return cu(e)},t.hydrate=function(e,t,n){if(!Gu(t))throw Error(i(200));return Ju(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Zu(e))throw Error(i(405));var r=null!=n&&n.hydratedSources||null,a=!1,o="",l=Qu;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Hu(t,null,e,1,null!=n?n:null,a,0,o,l),e[ha]=t.current,Hr(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Yu(t)},t.render=function(e,t,n){if(!Gu(t))throw Error(i(200));return Ju(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Gu(e))throw Error(i(40));return!!e._reactRootContainer&&(cu((function(){Ju(null,null,e,!1,(function(){e._reactRootContainer=null,e[ha]=null}))})),!0)},t.unstable_batchedUpdates=uu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Gu(n))throw Error(i(200));if(null==e||void 0===e._reactInternals)throw Error(i(38));return Ju(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},4391:(e,t,n)=>{"use strict";var r=n(7950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},7950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(2730)},1153:(e,t,n)=>{"use strict";var r=n(5043),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,i={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,r)&&!s.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:a,type:e,key:u,ref:c,props:i,_owner:l.current}}t.Fragment=i,t.jsx=u,t.jsxs=u},4202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function y(){}function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var b=x.prototype=new y;b.constructor=x,m(b,v.prototype),b.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,k={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var a,i={},o=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)S.call(t,a)&&!C.hasOwnProperty(a)&&(i[a]=t[a]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===i[a]&&(i[a]=s[a]);return{$$typeof:n,type:e,key:o,ref:l,props:i,_owner:k.current}}function j(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var _=/\/+/g;function P(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function A(e,t,a,i,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return o=o(s=e),e=""===i?"."+P(s,0):i,w(o)?(a="",null!=e&&(a=e.replace(_,"$&/")+"/"),A(o,t,a,"",(function(e){return e}))):null!=o&&(j(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,a+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(_,"$&/")+"/")+e)),t.push(o)),1;if(s=0,i=""===i?".":i+":",w(e))for(var u=0;u<e.length;u++){var c=i+P(l=e[u],u);s+=A(l,t,a,c,o)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)s+=A(l=l.value,t,a,c=i+P(l,u++),o);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function R(e,t,n){if(null==e)return e;var r=[],a=0;return A(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function N(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},O={transition:null},z={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:O,ReactCurrentOwner:k};function L(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:R,forEach:function(e,t,n){R(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return R(e,(function(){t++})),t},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!j(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=a,t.Profiler=o,t.PureComponent=x,t.StrictMode=i,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z,t.act=L,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=m({},e.props),i=e.key,o=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,l=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)S.call(t,u)&&!C.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];a.children=s}return{$$typeof:n,type:e.type,key:i,ref:o,props:a,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=j,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:N}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}},t.unstable_act=L,t.useCallback=function(e,t){return T.current.useCallback(e,t)},t.useContext=function(e){return T.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return T.current.useDeferredValue(e)},t.useEffect=function(e,t){return T.current.useEffect(e,t)},t.useId=function(){return T.current.useId()},t.useImperativeHandle=function(e,t,n){return T.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return T.current.useMemo(e,t)},t.useReducer=function(e,t,n){return T.current.useReducer(e,t,n)},t.useRef=function(e){return T.current.useRef(e)},t.useState=function(e){return T.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return T.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return T.current.useTransition()},t.version="18.3.1"},5043:(e,t,n)=>{"use strict";e.exports=n(4202)},579:(e,t,n)=>{"use strict";e.exports=n(1153)},7234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<i(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,o=a>>>1;r<o;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>i(s,n))u<a&&0>i(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else{if(!(u<a&&0>i(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var u=[],c=[],d=1,f=null,p=3,h=!1,m=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function b(e){for(var t=r(c);null!==t;){if(null===t.callback)a(c);else{if(!(t.startTime<=e))break;a(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function w(e){if(g=!1,b(e),!m)if(null!==r(u))m=!0,O(S);else{var t=r(c);null!==t&&z(w,t.startTime-e)}}function S(e,n){m=!1,g&&(g=!1,y(j),j=-1),h=!0;var i=p;try{for(b(n),f=r(u);null!==f&&(!(f.expirationTime>n)||e&&!A());){var o=f.callback;if("function"===typeof o){f.callback=null,p=f.priorityLevel;var l=o(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?f.callback=l:f===r(u)&&a(u),b(n)}else a(u);f=r(u)}if(null!==f)var s=!0;else{var d=r(c);null!==d&&z(w,d.startTime-n),s=!1}return s}finally{f=null,p=i,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,C=!1,E=null,j=-1,_=5,P=-1;function A(){return!(t.unstable_now()-P<_)}function R(){if(null!==E){var e=t.unstable_now();P=e;var n=!0;try{n=E(!0,e)}finally{n?k():(C=!1,E=null)}}else C=!1}if("function"===typeof x)k=function(){x(R)};else if("undefined"!==typeof MessageChannel){var N=new MessageChannel,T=N.port2;N.port1.onmessage=R,k=function(){T.postMessage(null)}}else k=function(){v(R,0)};function O(e){E=e,C||(C=!0,k())}function z(e,n){j=v((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,O(S))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,a,i){var o=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?o+i:o:i=o,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:i,expirationTime:l=i+l,sortIndex:-1},i>o?(e.sortIndex=i,n(c,e),null===r(u)&&e===r(c)&&(g?(y(j),j=-1):g=!0,z(w,i-o))):(e.sortIndex=l,n(u,e),m||h||(m=!0,O(S))),e},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},8853:(e,t,n)=>{"use strict";e.exports=n(7234)},7324:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var u=i[s];if(!l(u))return!1;var c=e[u],d=t[u];if(!1===(a=n?n.call(r,c,d,u):void 0)||void 0===a&&c!==d)return!1}return!0}},3895:(e,t,n)=>{"use strict";var r=n(5043);var a="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},i=r.useSyncExternalStore,o=r.useRef,l=r.useEffect,s=r.useMemo,u=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,c){var d=o(null);if(null===d.current){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=s((function(){function e(e){if(!l){if(l=!0,i=e,e=r(e),void 0!==c&&f.hasValue){var t=f.value;if(c(t,e))return o=t}return o=e}if(t=o,a(i,e))return t;var n=r(e);return void 0!==c&&c(t,n)?t:(i=e,o=n)}var i,o,l=!1,s=void 0===n?null:n;return[function(){return e(t())},null===s?void 0:function(){return e(s())}]}),[t,n,r,c]);var p=i(e,d[0],d[1]);return l((function(){f.hasValue=!0,f.value=p}),[p]),u(p),p}},7237:(e,t,n)=>{"use strict";e.exports=n(3895)}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var o={};e=e||[null,t({}),t([]),t(t)];for(var l=2&a&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>o[e]=()=>r[e]));return o.default=()=>r,n.d(i,o),i}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".8d69e35a.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="superhardtest:";n.l=(r,a,i,o)=>{if(e[r])e[r].push(a);else{var l,s;if(void 0!==i)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){l=d;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+i),l.src=r),e[r]=[a];var f=(t,n)=>{l.onerror=l.onload=null,clearTimeout(p);var a=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(n))),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/training/",(()=>{var e={792:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var i=new Promise(((n,r)=>a=e[t]=[n,r]));r.push(a[2]=i);var o=n.p+n.u(t),l=new Error;n.l(o,(r=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var i=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",l.name="ChunkLoadError",l.type=i,l.request=o,a[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var a,i,o=r[0],l=r[1],s=r[2],u=0;if(o.some((t=>0!==e[t]))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)s(n)}for(t&&t(r);u<o.length;u++)i=o[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0},r=self.webpackChunksuperhardtest=self.webpackChunksuperhardtest||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e,t=n(5043),r=n.t(t,2),a=n(4391),i=n(7950),o=n.t(i,2);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(e||(e={}));const s="popstate";function u(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function c(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function d(e,t){return{usr:e.state,key:e.key,idx:t}}function f(e,t,n,r){return void 0===n&&(n=null),l({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?h(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function p(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function h(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function m(t,n,r,a){void 0===a&&(a={});let{window:i=document.defaultView,v5Compat:o=!1}=a,c=i.history,h=e.Pop,m=null,g=v();function v(){return(c.state||{idx:null}).idx}function y(){h=e.Pop;let t=v(),n=null==t?null:t-g;g=t,m&&m({action:h,location:b.location,delta:n})}function x(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"===typeof e?e:p(e);return n=n.replace(/ $/,"%20"),u(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,c.replaceState(l({},c.state,{idx:g}),""));let b={get action(){return h},get location(){return t(i,c)},listen(e){if(m)throw new Error("A history only accepts one active listener");return i.addEventListener(s,y),m=e,()=>{i.removeEventListener(s,y),m=null}},createHref:e=>n(i,e),createURL:x,encodeLocation(e){let t=x(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(t,n){h=e.Push;let a=f(b.location,t,n);r&&r(a,t),g=v()+1;let l=d(a,g),s=b.createHref(a);try{c.pushState(l,"",s)}catch(u){if(u instanceof DOMException&&"DataCloneError"===u.name)throw u;i.location.assign(s)}o&&m&&m({action:h,location:b.location,delta:1})},replace:function(t,n){h=e.Replace;let a=f(b.location,t,n);r&&r(a,t),g=v();let i=d(a,g),l=b.createHref(a);c.replaceState(i,"",l),o&&m&&m({action:h,location:b.location,delta:0})},go:e=>c.go(e)};return b}var g;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(g||(g={}));const v=new Set(["lazy","caseSensitive","path","id","index","children"]);function y(e,t,n,r){return void 0===n&&(n=[]),void 0===r&&(r={}),e.map(((e,a)=>{let i=[...n,String(a)],o="string"===typeof e.id?e.id:i.join("-");if(u(!0!==e.index||!e.children,"Cannot specify children on an index route"),u(!r[o],'Found a route id collision on id "'+o+"\".  Route id's must be globally unique within Data Router usages"),function(e){return!0===e.index}(e)){let n=l({},e,t(e),{id:o});return r[o]=n,n}{let n=l({},e,t(e),{id:o,children:void 0});return r[o]=n,e.children&&(n.children=y(e.children,t,i,r)),n}}))}function x(e,t,n){return void 0===n&&(n="/"),b(e,t,n,!1)}function b(e,t,n,r){let a=z(("string"===typeof t?h(t):t).pathname||"/",n);if(null==a)return null;let i=w(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let o=null;for(let l=0;null==o&&l<i.length;++l){let e=O(a);o=N(i[l],e,r)}return o}function w(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let a=(e,a,i)=>{let o={relativePath:void 0===i?e.path||"":i,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};o.relativePath.startsWith("/")&&(u(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),o.relativePath=o.relativePath.slice(r.length));let l=M([r,o.relativePath]),s=n.concat(o);e.children&&e.children.length>0&&(u(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),w(e.children,t,s,l)),(null!=e.path||e.index)&&t.push({path:l,score:R(l,e.index),routesMeta:s})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of S(e.path))a(e,t,r);else a(e,t)})),t}function S(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(0===r.length)return a?[i,""]:[i];let o=S(r.join("/")),l=[];return l.push(...o.map((e=>""===e?i:[i,e].join("/")))),a&&l.push(...o),l.map((t=>e.startsWith("/")&&""===t?"/":t))}const k=/^:[\w-]+$/,C=3,E=2,j=1,_=10,P=-2,A=e=>"*"===e;function R(e,t){let n=e.split("/"),r=n.length;return n.some(A)&&(r+=P),t&&(r+=E),n.filter((e=>!A(e))).reduce(((e,t)=>e+(k.test(t)?C:""===t?j:_)),r)}function N(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,a={},i="/",o=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,u="/"===i?t:t.slice(i.length)||"/",c=T({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},u),d=e.route;if(!c&&s&&n&&!r[r.length-1].route.index&&(c=T({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(a,c.params),o.push({params:a,pathname:M([i,c.pathname]),pathnameBase:B(M([i,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(i=M([i,c.pathnameBase]))}return o}function T(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);c("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))");let i=new RegExp(a,t?void 0:"i");return[i,r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=l[n]||"";o=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=a&&!s?void 0:(s||"").replace(/%2F/g,"/"),e}),{}),pathname:i,pathnameBase:o,pattern:e}}function O(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return c(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function z(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function L(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function F(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function D(e,t){let n=F(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function I(e,t,n,r){let a;void 0===r&&(r=!1),"string"===typeof e?a=h(e):(a=l({},e),u(!a.pathname||!a.pathname.includes("?"),L("?","pathname","search",a)),u(!a.pathname||!a.pathname.includes("#"),L("#","pathname","hash",a)),u(!a.search||!a.search.includes("#"),L("#","search","hash",a)));let i,o=""===e||""===a.pathname,s=o?"/":a.pathname;if(null==s)i=n;else{let e=t.length-1;if(!r&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}i=e>=0?t[e]:"/"}let c=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:a=""}="string"===typeof e?h(e):e,i=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:i,search:U(r),hash:H(a)}}(a,i),d=s&&"/"!==s&&s.endsWith("/"),f=(o||"."===s)&&n.endsWith("/");return c.pathname.endsWith("/")||!d&&!f||(c.pathname+="/"),c}const M=e=>e.join("/").replace(/\/\/+/g,"/"),B=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),U=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",H=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;class W{constructor(e,t,n,r){void 0===r&&(r=!1),this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}}function $(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const V=["post","put","patch","delete"],K=new Set(V),Q=["get",...V],q=new Set(Q),Y=new Set([301,302,303,307,308]),Z=new Set([307,308]),G={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},X={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},J={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},ee=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,te=e=>({hasErrorBoundary:Boolean(e.hasErrorBoundary)}),ne="remix-router-transitions";function re(t){const n=t.window?t.window:"undefined"!==typeof window?window:void 0,r="undefined"!==typeof n&&"undefined"!==typeof n.document&&"undefined"!==typeof n.document.createElement,a=!r;let i;if(u(t.routes.length>0,"You must provide a non-empty routes array to createRouter"),t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let e=t.detectErrorBoundary;i=t=>({hasErrorBoundary:e(t)})}else i=te;let o,s,d,p={},h=y(t.routes,i,void 0,p),m=t.basename||"/",v=t.unstable_dataStrategy||fe,w=t.unstable_patchRoutesOnNavigation,S=l({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},t.future),k=null,C=new Set,E=1e3,j=new Set,_=null,P=null,A=null,R=null!=t.hydrationData,N=x(h,t.history.location,m),T=null;if(null==N&&!w){let e=je(404,{pathname:t.history.location.pathname}),{matches:n,route:r}=Ee(h);N=n,T={[r.id]:e}}if(N&&!t.hydrationData){ft(N,h,t.history.location.pathname).active&&(N=null)}if(N)if(N.some((e=>e.route.lazy)))s=!1;else if(N.some((e=>e.route.loader)))if(S.v7_partialHydration){let e=t.hydrationData?t.hydrationData.loaderData:null,n=t.hydrationData?t.hydrationData.errors:null,r=t=>!t.route.loader||("function"!==typeof t.route.loader||!0!==t.route.loader.hydrate)&&(e&&void 0!==e[t.route.id]||n&&void 0!==n[t.route.id]);if(n){let e=N.findIndex((e=>void 0!==n[e.route.id]));s=N.slice(0,e+1).every(r)}else s=N.every(r)}else s=null!=t.hydrationData;else s=!0;else if(s=!1,N=[],S.v7_partialHydration){let e=ft(null,h,t.history.location.pathname);e.active&&e.matches&&(N=e.matches)}let O,L,F={historyAction:t.history.action,location:t.history.location,matches:N,initialized:s,navigation:G,restoreScrollPosition:null==t.hydrationData&&null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||T,fetchers:new Map,blockers:new Map},D=e.Pop,I=!1,M=!1,B=new Map,U=null,H=!1,W=!1,V=[],K=new Set,Q=new Map,q=0,Y=-1,re=new Map,oe=new Set,se=new Map,ue=new Map,ye=new Set,xe=new Map,be=new Map,Pe=new Map;function Oe(e,t){void 0===t&&(t={}),F=l({},F,e);let n=[],r=[];S.v7_fetcherPersist&&F.fetchers.forEach(((e,t)=>{"idle"===e.state&&(ye.has(t)?r.push(t):n.push(t))})),[...C].forEach((e=>e(F,{deletedFetchers:r,unstable_viewTransitionOpts:t.viewTransitionOpts,unstable_flushSync:!0===t.flushSync}))),S.v7_fetcherPersist&&(n.forEach((e=>F.fetchers.delete(e))),r.forEach((e=>Je(e))))}function ze(n,r,a){var i,s;let u,{flushSync:c}=void 0===a?{}:a,d=null!=F.actionData&&null!=F.navigation.formMethod&&Fe(F.navigation.formMethod)&&"loading"===F.navigation.state&&!0!==(null==(i=n.state)?void 0:i._isRedirect);u=r.actionData?Object.keys(r.actionData).length>0?r.actionData:null:d?F.actionData:null;let f=r.loaderData?Se(F.loaderData,r.loaderData,r.matches||[],r.errors):F.loaderData,p=F.blockers;p.size>0&&(p=new Map(p),p.forEach(((e,t)=>p.set(t,J))));let m,g=!0===I||null!=F.navigation.formMethod&&Fe(F.navigation.formMethod)&&!0!==(null==(s=n.state)?void 0:s._isRedirect);if(o&&(h=o,o=void 0),H||D===e.Pop||(D===e.Push?t.history.push(n,n.state):D===e.Replace&&t.history.replace(n,n.state)),D===e.Pop){let e=B.get(F.location.pathname);e&&e.has(n.pathname)?m={currentLocation:F.location,nextLocation:n}:B.has(n.pathname)&&(m={currentLocation:n,nextLocation:F.location})}else if(M){let e=B.get(F.location.pathname);e?e.add(n.pathname):(e=new Set([n.pathname]),B.set(F.location.pathname,e)),m={currentLocation:F.location,nextLocation:n}}Oe(l({},r,{actionData:u,loaderData:f,historyAction:D,location:n,initialized:!0,navigation:G,revalidation:"idle",restoreScrollPosition:dt(n,r.matches||F.matches),preventScrollReset:g,blockers:p}),{viewTransitionOpts:m,flushSync:!0===c}),D=e.Pop,I=!1,M=!1,H=!1,W=!1,V=[]}async function Le(n,r,a){O&&O.abort(),O=null,D=n,H=!0===(a&&a.startUninterruptedRevalidation),function(e,t){if(_&&A){let n=ct(e,t);_[n]=A()}}(F.location,F.matches),I=!0===(a&&a.preventScrollReset),M=!0===(a&&a.enableViewTransition);let i=o||h,s=a&&a.overrideNavigation,u=x(i,r,m),c=!0===(a&&a.flushSync),d=ft(u,i,r.pathname);if(d.active&&d.matches&&(u=d.matches),!u){let{error:e,notFoundMatches:t,route:n}=lt(r.pathname);return void ze(r,{matches:t,loaderData:{},errors:{[n.id]:e}},{flushSync:c})}if(F.initialized&&!W&&function(e,t){if(e.pathname!==t.pathname||e.search!==t.search)return!1;if(""===e.hash)return""!==t.hash;if(e.hash===t.hash)return!0;if(""!==t.hash)return!0;return!1}(F.location,r)&&!(a&&a.submission&&Fe(a.submission.formMethod)))return void ze(r,{matches:u},{flushSync:c});O=new AbortController;let f,p=ve(t.history,r,O.signal,a&&a.submission);if(a&&a.pendingError)f=[Ce(u).route.id,{type:g.error,error:a.pendingError}];else if(a&&a.submission&&Fe(a.submission.formMethod)){let n=await async function(t,n,r,a,i,o){void 0===o&&(o={});Ye();let l,s=function(e,t){let n={state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text};return n}(n,r);if(Oe({navigation:s},{flushSync:!0===o.flushSync}),i){let e=await pt(a,n.pathname,t.signal);if("aborted"===e.type)return{shortCircuited:!0};if("error"===e.type){let{boundaryId:t,error:r}=st(n.pathname,e);return{matches:e.partialMatches,pendingActionResult:[t,{type:g.error,error:r}]}}if(!e.matches){let{notFoundMatches:e,error:t,route:r}=lt(n.pathname);return{matches:e,pendingActionResult:[r.id,{type:g.error,error:t}]}}a=e.matches}let u=Ue(a,n);if(u.route.action||u.route.lazy){if(l=(await Qe("action",F,t,[u],a,null))[u.route.id],t.signal.aborted)return{shortCircuited:!0}}else l={type:g.error,error:je(405,{method:t.method,pathname:n.pathname,routeId:u.route.id})};if(Te(l)){let e;if(o&&null!=o.replace)e=o.replace;else{e=ge(l.response.headers.get("Location"),new URL(t.url),m)===F.location.pathname+F.location.search}return await Ke(t,l,!0,{submission:r,replace:e}),{shortCircuited:!0}}if(Re(l))throw je(400,{type:"defer-action"});if(Ne(l)){let t=Ce(a,u.route.id);return!0!==(o&&o.replace)&&(D=e.Push),{matches:a,pendingActionResult:[t.route.id,l]}}return{matches:a,pendingActionResult:[u.route.id,l]}}(p,r,a.submission,u,d.active,{replace:a.replace,flushSync:c});if(n.shortCircuited)return;if(n.pendingActionResult){let[e,t]=n.pendingActionResult;if(Ne(t)&&$(t.error)&&404===t.error.status)return O=null,void ze(r,{matches:n.matches,loaderData:{},errors:{[e]:t.error}})}u=n.matches||u,f=n.pendingActionResult,s=We(r,a.submission),c=!1,d.active=!1,p=ve(t.history,p.url,p.signal)}let{shortCircuited:v,matches:y,loaderData:b,errors:w}=await async function(e,n,r,a,i,s,u,c,d,f,p){let g=i||We(n,s),v=s||u||He(g),y=!H&&(!S.v7_partialHydration||!d);if(a){if(y){let e=Be(p);Oe(l({navigation:g},void 0!==e?{actionData:e}:{}),{flushSync:f})}let t=await pt(r,n.pathname,e.signal);if("aborted"===t.type)return{shortCircuited:!0};if("error"===t.type){let{boundaryId:e,error:r}=st(n.pathname,t);return{matches:t.partialMatches,loaderData:{},errors:{[e]:r}}}if(!t.matches){let{error:e,notFoundMatches:t,route:r}=lt(n.pathname);return{matches:t,loaderData:{},errors:{[r.id]:e}}}r=t.matches}let x=o||h,[b,w]=le(t.history,F,r,v,n,S.v7_partialHydration&&!0===d,S.v7_skipActionErrorRevalidation,W,V,K,ye,se,oe,x,m,p);if(ut((e=>!(r&&r.some((t=>t.route.id===e)))||b&&b.some((t=>t.route.id===e)))),Y=++q,0===b.length&&0===w.length){let e=nt();return ze(n,l({matches:r,loaderData:{},errors:p&&Ne(p[1])?{[p[0]]:p[1].error}:null},ke(p),e?{fetchers:new Map(F.fetchers)}:{}),{flushSync:f}),{shortCircuited:!0}}if(y){let e={};if(!a){e.navigation=g;let t=Be(p);void 0!==t&&(e.actionData=t)}w.length>0&&(e.fetchers=function(e){return e.forEach((e=>{let t=F.fetchers.get(e.key),n=$e(void 0,t?t.data:void 0);F.fetchers.set(e.key,n)})),new Map(F.fetchers)}(w)),Oe(e,{flushSync:f})}w.forEach((e=>{Q.has(e.key)&&et(e.key),e.controller&&Q.set(e.key,e.controller)}));let k=()=>w.forEach((e=>et(e.key)));O&&O.signal.addEventListener("abort",k);let{loaderResults:C,fetcherResults:E}=await qe(F,r,b,w,e);if(e.signal.aborted)return{shortCircuited:!0};O&&O.signal.removeEventListener("abort",k);w.forEach((e=>Q.delete(e.key)));let j=_e(C);if(j)return await Ke(e,j.result,!0,{replace:c}),{shortCircuited:!0};if(j=_e(E),j)return oe.add(j.key),await Ke(e,j.result,!0,{replace:c}),{shortCircuited:!0};let{loaderData:_,errors:P}=we(F,r,b,C,p,w,E,xe);xe.forEach(((e,t)=>{e.subscribe((n=>{(n||e.done)&&xe.delete(t)}))})),S.v7_partialHydration&&d&&F.errors&&Object.entries(F.errors).filter((e=>{let[t]=e;return!b.some((e=>e.route.id===t))})).forEach((e=>{let[t,n]=e;P=Object.assign(P||{},{[t]:n})}));let A=nt(),R=rt(Y),N=A||R||w.length>0;return l({matches:r,loaderData:_,errors:P},N?{fetchers:new Map(F.fetchers)}:{})}(p,r,u,d.active,s,a&&a.submission,a&&a.fetcherSubmission,a&&a.replace,a&&!0===a.initialHydration,c,f);v||(O=null,ze(r,l({matches:y||u},ke(f),{loaderData:b,errors:w})))}function Be(e){return e&&!Ne(e[1])?{[e[0]]:e[1].data}:F.actionData?0===Object.keys(F.actionData).length?null:F.actionData:void 0}async function Ke(a,i,o,s){let{submission:c,fetcherSubmission:d,replace:p}=void 0===s?{}:s;i.response.headers.has("X-Remix-Revalidate")&&(W=!0);let h=i.response.headers.get("Location");u(h,"Expected a Location header on the redirect Response"),h=ge(h,new URL(a.url),m);let g=f(F.location,h,{_isRedirect:!0});if(r){let e=!1;if(i.response.headers.has("X-Remix-Reload-Document"))e=!0;else if(ee.test(h)){const r=t.history.createURL(h);e=r.origin!==n.location.origin||null==z(r.pathname,m)}if(e)return void(p?n.location.replace(h):n.location.assign(h))}O=null;let v=!0===p||i.response.headers.has("X-Remix-Replace")?e.Replace:e.Push,{formMethod:y,formAction:x,formEncType:b}=F.navigation;!c&&!d&&y&&x&&b&&(c=He(F.navigation));let w=c||d;if(Z.has(i.response.status)&&w&&Fe(w.formMethod))await Le(v,g,{submission:l({},w,{formAction:h}),preventScrollReset:I,enableViewTransition:o?M:void 0});else{let e=We(g,c);await Le(v,g,{overrideNavigation:e,fetcherSubmission:d,preventScrollReset:I,enableViewTransition:o?M:void 0})}}async function Qe(e,t,n,r,a,o){let l,s={};try{l=await pe(v,e,t,n,r,a,o,p,i)}catch(u){return r.forEach((e=>{s[e.route.id]={type:g.error,error:u}})),s}for(let[i,c]of Object.entries(l))if(Ae(c)){let e=c.result;s[i]={type:g.redirect,response:me(e,n,i,a,m,S.v7_relativeSplatPath)}}else s[i]=await he(c);return s}async function qe(e,n,r,a,i){let o=e.matches,l=Qe("loader",e,i,r,n,null),s=Promise.all(a.map((async n=>{if(n.matches&&n.match&&n.controller){let r=(await Qe("loader",e,ve(t.history,n.path,n.controller.signal),[n.match],n.matches,n.key))[n.match.route.id];return{[n.key]:r}}return Promise.resolve({[n.key]:{type:g.error,error:je(404,{pathname:n.path})}})}))),u=await l,c=(await s).reduce(((e,t)=>Object.assign(e,t)),{});return await Promise.all([De(n,u,i.signal,o,e.loaderData),Ie(n,c,a)]),{loaderResults:u,fetcherResults:c}}function Ye(){W=!0,V.push(...ut()),se.forEach(((e,t)=>{Q.has(t)&&(K.add(t),et(t))}))}function Ze(e,t,n){void 0===n&&(n={}),F.fetchers.set(e,t),Oe({fetchers:new Map(F.fetchers)},{flushSync:!0===(n&&n.flushSync)})}function Ge(e,t,n,r){void 0===r&&(r={});let a=Ce(F.matches,t);Je(e),Oe({errors:{[a.route.id]:n},fetchers:new Map(F.fetchers)},{flushSync:!0===(r&&r.flushSync)})}function Xe(e){return S.v7_fetcherPersist&&(ue.set(e,(ue.get(e)||0)+1),ye.has(e)&&ye.delete(e)),F.fetchers.get(e)||X}function Je(e){let t=F.fetchers.get(e);!Q.has(e)||t&&"loading"===t.state&&re.has(e)||et(e),se.delete(e),re.delete(e),oe.delete(e),ye.delete(e),K.delete(e),F.fetchers.delete(e)}function et(e){let t=Q.get(e);u(t,"Expected fetch controller: "+e),t.abort(),Q.delete(e)}function tt(e){for(let t of e){let e=Ve(Xe(t).data);F.fetchers.set(t,e)}}function nt(){let e=[],t=!1;for(let n of oe){let r=F.fetchers.get(n);u(r,"Expected fetcher: "+n),"loading"===r.state&&(oe.delete(n),e.push(n),t=!0)}return tt(e),t}function rt(e){let t=[];for(let[n,r]of re)if(r<e){let e=F.fetchers.get(n);u(e,"Expected fetcher: "+n),"loading"===e.state&&(et(n),re.delete(n),t.push(n))}return tt(t),t.length>0}function at(e){F.blockers.delete(e),be.delete(e)}function it(e,t){let n=F.blockers.get(e)||J;u("unblocked"===n.state&&"blocked"===t.state||"blocked"===n.state&&"blocked"===t.state||"blocked"===n.state&&"proceeding"===t.state||"blocked"===n.state&&"unblocked"===t.state||"proceeding"===n.state&&"unblocked"===t.state,"Invalid blocker state transition: "+n.state+" -> "+t.state);let r=new Map(F.blockers);r.set(e,t),Oe({blockers:r})}function ot(e){let{currentLocation:t,nextLocation:n,historyAction:r}=e;if(0===be.size)return;be.size>1&&c(!1,"A router only supports one blocker at a time");let a=Array.from(be.entries()),[i,o]=a[a.length-1],l=F.blockers.get(i);return l&&"proceeding"===l.state?void 0:o({currentLocation:t,nextLocation:n,historyAction:r})?i:void 0}function lt(e){let t=je(404,{pathname:e}),n=o||h,{matches:r,route:a}=Ee(n);return ut(),{notFoundMatches:r,route:a,error:t}}function st(e,t){return{boundaryId:Ce(t.partialMatches).route.id,error:je(400,{type:"route-discovery",pathname:e,message:null!=t.error&&"message"in t.error?t.error:String(t.error)})}}function ut(e){let t=[];return xe.forEach(((n,r)=>{e&&!e(r)||(n.cancel(),t.push(r),xe.delete(r))})),t}function ct(e,t){if(P){let n=P(e,t.map((e=>function(e,t){let{route:n,pathname:r,params:a}=e;return{id:n.id,pathname:r,params:a,data:t[n.id],handle:n.handle}}(e,F.loaderData))));return n||e.key}return e.key}function dt(e,t){if(_){let n=ct(e,t),r=_[n];if("number"===typeof r)return r}return null}function ft(e,t,n){if(w){if(j.has(n))return{active:!1,matches:e};if(!e){return{active:!0,matches:b(t,n,m,!0)||[]}}if(Object.keys(e[0].params).length>0){return{active:!0,matches:b(t,n,m,!0)}}}return{active:!1,matches:null}}async function pt(e,t,n){let r=e;for(;;){let e=null==o,l=o||h;try{await ce(w,t,r,l,p,i,Pe,n)}catch(a){return{type:"error",error:a,partialMatches:r}}finally{e&&(h=[...h])}if(n.aborted)return{type:"aborted"};let s=x(l,t,m);if(s)return ht(t,j),{type:"success",matches:s};let u=b(l,t,m,!0);if(!u||r.length===u.length&&r.every(((e,t)=>e.route.id===u[t].route.id)))return ht(t,j),{type:"success",matches:null};r=u}}function ht(e,t){if(t.size>=E){let e=t.values().next().value;t.delete(e)}t.add(e)}return d={get basename(){return m},get future(){return S},get state(){return F},get routes(){return h},get window(){return n},initialize:function(){if(k=t.history.listen((e=>{let{action:n,location:r,delta:a}=e;if(L)return L(),void(L=void 0);c(0===be.size||null!=a,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let i=ot({currentLocation:F.location,nextLocation:r,historyAction:n});if(i&&null!=a){let e=new Promise((e=>{L=e}));return t.history.go(-1*a),void it(i,{state:"blocked",location:r,proceed(){it(i,{state:"proceeding",proceed:void 0,reset:void 0,location:r}),e.then((()=>t.history.go(a)))},reset(){let e=new Map(F.blockers);e.set(i,J),Oe({blockers:e})}})}return Le(n,r)})),r){!function(e,t){try{let n=e.sessionStorage.getItem(ne);if(n){let e=JSON.parse(n);for(let[n,r]of Object.entries(e||{}))r&&Array.isArray(r)&&t.set(n,new Set(r||[]))}}catch(n){}}(n,B);let e=()=>function(e,t){if(t.size>0){let r={};for(let[e,n]of t)r[e]=[...n];try{e.sessionStorage.setItem(ne,JSON.stringify(r))}catch(n){c(!1,"Failed to save applied view transitions in sessionStorage ("+n+").")}}}(n,B);n.addEventListener("pagehide",e),U=()=>n.removeEventListener("pagehide",e)}return F.initialized||Le(e.Pop,F.location,{initialHydration:!0}),d},subscribe:function(e){return C.add(e),()=>C.delete(e)},enableScrollRestoration:function(e,t,n){if(_=e,A=t,P=n||null,!R&&F.navigation===G){R=!0;let e=dt(F.location,F.matches);null!=e&&Oe({restoreScrollPosition:e})}return()=>{_=null,A=null,P=null}},navigate:async function n(r,a){if("number"===typeof r)return void t.history.go(r);let i=ae(F.location,F.matches,m,S.v7_prependBasename,r,S.v7_relativeSplatPath,null==a?void 0:a.fromRouteId,null==a?void 0:a.relative),{path:o,submission:s,error:u}=ie(S.v7_normalizeFormMethod,!1,i,a),c=F.location,d=f(F.location,o,a&&a.state);d=l({},d,t.history.encodeLocation(d));let p=a&&null!=a.replace?a.replace:void 0,h=e.Push;!0===p?h=e.Replace:!1===p||null!=s&&Fe(s.formMethod)&&s.formAction===F.location.pathname+F.location.search&&(h=e.Replace);let g=a&&"preventScrollReset"in a?!0===a.preventScrollReset:void 0,v=!0===(a&&a.unstable_flushSync),y=ot({currentLocation:c,nextLocation:d,historyAction:h});if(!y)return await Le(h,d,{submission:s,pendingError:u,preventScrollReset:g,replace:a&&a.replace,enableViewTransition:a&&a.unstable_viewTransition,flushSync:v});it(y,{state:"blocked",location:d,proceed(){it(y,{state:"proceeding",proceed:void 0,reset:void 0,location:d}),n(r,a)},reset(){let e=new Map(F.blockers);e.set(y,J),Oe({blockers:e})}})},fetch:function(e,n,r,i){if(a)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Q.has(e)&&et(e);let l=!0===(i&&i.unstable_flushSync),s=o||h,c=ae(F.location,F.matches,m,S.v7_prependBasename,r,S.v7_relativeSplatPath,n,null==i?void 0:i.relative),d=x(s,c,m),f=ft(d,s,c);if(f.active&&f.matches&&(d=f.matches),!d)return void Ge(e,n,je(404,{pathname:c}),{flushSync:l});let{path:p,submission:g,error:v}=ie(S.v7_normalizeFormMethod,!0,c,i);if(v)return void Ge(e,n,v,{flushSync:l});let y=Ue(d,p);I=!0===(i&&i.preventScrollReset),g&&Fe(g.formMethod)?async function(e,n,r,a,i,l,s,c){function d(t){if(!t.route.action&&!t.route.lazy){let t=je(405,{method:c.formMethod,pathname:r,routeId:n});return Ge(e,n,t,{flushSync:s}),!0}return!1}if(Ye(),se.delete(e),!l&&d(a))return;let f=F.fetchers.get(e);Ze(e,function(e,t){let n={state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0};return n}(c,f),{flushSync:s});let p=new AbortController,g=ve(t.history,r,p.signal,c);if(l){let t=await pt(i,r,g.signal);if("aborted"===t.type)return;if("error"===t.type){let{error:a}=st(r,t);return void Ge(e,n,a,{flushSync:s})}if(!t.matches)return void Ge(e,n,je(404,{pathname:r}),{flushSync:s});if(d(a=Ue(i=t.matches,r)))return}Q.set(e,p);let v=q,y=await Qe("action",F,g,[a],i,e),b=y[a.route.id];if(g.signal.aborted)return void(Q.get(e)===p&&Q.delete(e));if(S.v7_fetcherPersist&&ye.has(e)){if(Te(b)||Ne(b))return void Ze(e,Ve(void 0))}else{if(Te(b))return Q.delete(e),Y>v?void Ze(e,Ve(void 0)):(oe.add(e),Ze(e,$e(c)),Ke(g,b,!1,{fetcherSubmission:c}));if(Ne(b))return void Ge(e,n,b.error)}if(Re(b))throw je(400,{type:"defer-action"});let w=F.navigation.location||F.location,k=ve(t.history,w,p.signal),C=o||h,E="idle"!==F.navigation.state?x(C,F.navigation.location,m):F.matches;u(E,"Didn't find any matches after fetcher action");let j=++q;re.set(e,j);let _=$e(c,b.data);F.fetchers.set(e,_);let[P,A]=le(t.history,F,E,c,w,!1,S.v7_skipActionErrorRevalidation,W,V,K,ye,se,oe,C,m,[a.route.id,b]);A.filter((t=>t.key!==e)).forEach((e=>{let t=e.key,n=F.fetchers.get(t),r=$e(void 0,n?n.data:void 0);F.fetchers.set(t,r),Q.has(t)&&et(t),e.controller&&Q.set(t,e.controller)})),Oe({fetchers:new Map(F.fetchers)});let R=()=>A.forEach((e=>et(e.key)));p.signal.addEventListener("abort",R);let{loaderResults:N,fetcherResults:T}=await qe(F,E,P,A,k);if(p.signal.aborted)return;p.signal.removeEventListener("abort",R),re.delete(e),Q.delete(e),A.forEach((e=>Q.delete(e.key)));let z=_e(N);if(z)return Ke(k,z.result,!1);if(z=_e(T),z)return oe.add(z.key),Ke(k,z.result,!1);let{loaderData:L,errors:I}=we(F,E,P,N,void 0,A,T,xe);if(F.fetchers.has(e)){let t=Ve(b.data);F.fetchers.set(e,t)}rt(j),"loading"===F.navigation.state&&j>Y?(u(D,"Expected pending action"),O&&O.abort(),ze(F.navigation.location,{matches:E,loaderData:L,errors:I,fetchers:new Map(F.fetchers)})):(Oe({errors:I,loaderData:Se(F.loaderData,L,E,I),fetchers:new Map(F.fetchers)}),W=!1)}(e,n,p,y,d,f.active,l,g):(se.set(e,{routeId:n,path:p}),async function(e,n,r,a,i,o,l,s){let c=F.fetchers.get(e);Ze(e,$e(s,c?c.data:void 0),{flushSync:l});let d=new AbortController,f=ve(t.history,r,d.signal);if(o){let t=await pt(i,r,f.signal);if("aborted"===t.type)return;if("error"===t.type){let{error:a}=st(r,t);return void Ge(e,n,a,{flushSync:l})}if(!t.matches)return void Ge(e,n,je(404,{pathname:r}),{flushSync:l});a=Ue(i=t.matches,r)}Q.set(e,d);let p=q,h=await Qe("loader",F,f,[a],i,e),m=h[a.route.id];Re(m)&&(m=await Me(m,f.signal,!0)||m);Q.get(e)===d&&Q.delete(e);if(f.signal.aborted)return;if(ye.has(e))return void Ze(e,Ve(void 0));if(Te(m))return Y>p?void Ze(e,Ve(void 0)):(oe.add(e),void await Ke(f,m,!1));if(Ne(m))return void Ge(e,n,m.error);u(!Re(m),"Unhandled fetcher deferred data"),Ze(e,Ve(m.data))}(e,n,p,y,d,f.active,l,g))},revalidate:function(){Ye(),Oe({revalidation:"loading"}),"submitting"!==F.navigation.state&&("idle"!==F.navigation.state?Le(D||F.historyAction,F.navigation.location,{overrideNavigation:F.navigation,enableViewTransition:!0===M}):Le(F.historyAction,F.location,{startUninterruptedRevalidation:!0}))},createHref:e=>t.history.createHref(e),encodeLocation:e=>t.history.encodeLocation(e),getFetcher:Xe,deleteFetcher:function(e){if(S.v7_fetcherPersist){let t=(ue.get(e)||0)-1;t<=0?(ue.delete(e),ye.add(e)):ue.set(e,t)}else Je(e);Oe({fetchers:new Map(F.fetchers)})},dispose:function(){k&&k(),U&&U(),C.clear(),O&&O.abort(),F.fetchers.forEach(((e,t)=>Je(t))),F.blockers.forEach(((e,t)=>at(t)))},getBlocker:function(e,t){let n=F.blockers.get(e)||J;return be.get(e)!==t&&be.set(e,t),n},deleteBlocker:at,patchRoutes:function(e,t){let n=null==o;de(e,t,o||h,p,i),n&&(h=[...h],Oe({}))},_internalFetchControllers:Q,_internalActiveDeferreds:xe,_internalSetRoutes:function(e){p={},o=y(e,i,void 0,p)}},d}Symbol("deferred");function ae(e,t,n,r,a,i,o,l){let s,u;if(o){s=[];for(let e of t)if(s.push(e),e.route.id===o){u=e;break}}else s=t,u=t[t.length-1];let c=I(a||".",D(s,i),z(e.pathname,n)||e.pathname,"path"===l);return null==a&&(c.search=e.search,c.hash=e.hash),null!=a&&""!==a&&"."!==a||!u||!u.route.index||Be(c.search)||(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r&&"/"!==n&&(c.pathname="/"===c.pathname?n:M([n,c.pathname])),p(c)}function ie(e,t,n,r){if(!r||!function(e){return null!=e&&("formData"in e&&null!=e.formData||"body"in e&&void 0!==e.body)}(r))return{path:n};if(r.formMethod&&!Le(r.formMethod))return{path:n,error:je(405,{method:r.formMethod})};let a,i,o=()=>({path:n,error:je(400,{type:"invalid-body"})}),l=r.formMethod||"get",s=e?l.toUpperCase():l.toLowerCase(),c=Pe(n);if(void 0!==r.body){if("text/plain"===r.formEncType){if(!Fe(s))return o();let e="string"===typeof r.body?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce(((e,t)=>{let[n,r]=t;return""+e+n+"="+r+"\n"}),""):String(r.body);return{path:n,submission:{formMethod:s,formAction:c,formEncType:r.formEncType,formData:void 0,json:void 0,text:e}}}if("application/json"===r.formEncType){if(!Fe(s))return o();try{let e="string"===typeof r.body?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:s,formAction:c,formEncType:r.formEncType,formData:void 0,json:e,text:void 0}}}catch(m){return o()}}}if(u("function"===typeof FormData,"FormData is not available in this environment"),r.formData)a=ye(r.formData),i=r.formData;else if(r.body instanceof FormData)a=ye(r.body),i=r.body;else if(r.body instanceof URLSearchParams)a=r.body,i=xe(a);else if(null==r.body)a=new URLSearchParams,i=new FormData;else try{a=new URLSearchParams(r.body),i=xe(a)}catch(m){return o()}let d={formMethod:s,formAction:c,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:i,json:void 0,text:void 0};if(Fe(d.formMethod))return{path:n,submission:d};let f=h(n);return t&&f.search&&Be(f.search)&&a.append("index",""),f.search="?"+a,{path:p(f),submission:d}}function oe(e,t){let n=e;if(t){let r=e.findIndex((e=>e.route.id===t));r>=0&&(n=e.slice(0,r))}return n}function le(e,t,n,r,a,i,o,s,u,c,d,f,p,h,m,g){let v=g?Ne(g[1])?g[1].error:g[1].data:void 0,y=e.createURL(t.location),b=e.createURL(a),w=g&&Ne(g[1])?g[0]:void 0,S=w?oe(n,w):n,k=g?g[1].statusCode:void 0,C=o&&k&&k>=400,E=S.filter(((e,n)=>{let{route:a}=e;if(a.lazy)return!0;if(null==a.loader)return!1;if(i)return!("function"===typeof a.loader&&!a.loader.hydrate)||void 0===t.loaderData[a.id]&&(!t.errors||void 0===t.errors[a.id]);if(function(e,t,n){let r=!t||n.route.id!==t.route.id,a=void 0===e[n.route.id];return r||a}(t.loaderData,t.matches[n],e)||u.some((t=>t===e.route.id)))return!0;let o=t.matches[n],c=e;return ue(e,l({currentUrl:y,currentParams:o.params,nextUrl:b,nextParams:c.params},r,{actionResult:v,actionStatus:k,defaultShouldRevalidate:!C&&(s||y.pathname+y.search===b.pathname+b.search||y.search!==b.search||se(o,c))}))})),j=[];return f.forEach(((e,a)=>{if(i||!n.some((t=>t.route.id===e.routeId))||d.has(a))return;let o=x(h,e.path,m);if(!o)return void j.push({key:a,routeId:e.routeId,path:e.path,matches:null,match:null,controller:null});let u=t.fetchers.get(a),f=Ue(o,e.path),g=!1;p.has(a)?g=!1:c.has(a)?(c.delete(a),g=!0):g=u&&"idle"!==u.state&&void 0===u.data?s:ue(f,l({currentUrl:y,currentParams:t.matches[t.matches.length-1].params,nextUrl:b,nextParams:n[n.length-1].params},r,{actionResult:v,actionStatus:k,defaultShouldRevalidate:!C&&s})),g&&j.push({key:a,routeId:e.routeId,path:e.path,matches:o,match:f,controller:new AbortController})})),[E,j]}function se(e,t){let n=e.route.path;return e.pathname!==t.pathname||null!=n&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function ue(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if("boolean"===typeof n)return n}return t.defaultShouldRevalidate}async function ce(e,t,n,r,a,i,o,l){let s=[t,...n.map((e=>e.route.id))].join("-");try{let c=o.get(s);c||(c=e({path:t,matches:n,patch:(e,t)=>{l.aborted||de(e,t,r,a,i)}}),o.set(s,c)),c&&("object"===typeof(u=c)&&null!=u&&"then"in u)&&await c}finally{o.delete(s)}var u}function de(e,t,n,r,a){if(e){var i;let n=r[e];u(n,"No route found to patch children into: routeId = "+e);let o=y(t,a,[e,"patch",String((null==(i=n.children)?void 0:i.length)||"0")],r);n.children?n.children.push(...o):n.children=o}else{let e=y(t,a,["patch",String(n.length||"0")],r);n.push(...e)}}async function fe(e){let{matches:t}=e,n=t.filter((e=>e.shouldLoad)),r=await Promise.all(n.map((e=>e.resolve())));return r.reduce(((e,t,r)=>Object.assign(e,{[n[r].route.id]:t})),{})}async function pe(e,t,n,r,a,i,o,s,d,f){let p=i.map((e=>e.route.lazy?async function(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let a=n[e.id];u(a,"No route found in manifest");let i={};for(let o in r){let e=void 0!==a[o]&&"hasErrorBoundary"!==o;c(!e,'Route "'+a.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. The lazy route property "'+o+'" will be ignored.'),e||v.has(o)||(i[o]=r[o])}Object.assign(a,i),Object.assign(a,l({},t(a),{lazy:void 0}))}(e.route,d,s):void 0)),h=i.map(((e,n)=>{let i=p[n],o=a.some((t=>t.route.id===e.route.id));return l({},e,{shouldLoad:o,resolve:async n=>(n&&"GET"===r.method&&(e.route.lazy||e.route.loader)&&(o=!0),o?async function(e,t,n,r,a,i){let o,l,s=r=>{let o,s=new Promise(((e,t)=>o=t));l=()=>o(),t.signal.addEventListener("abort",l);let u=a=>"function"!==typeof r?Promise.reject(new Error('You cannot call the handler for a route which defines a boolean "'+e+'" [routeId: '+n.route.id+"]")):r({request:t,params:n.params,context:i},...void 0!==a?[a]:[]),c=(async()=>{try{return{type:"data",result:await(a?a((e=>u(e))):u())}}catch(e){return{type:"error",result:e}}})();return Promise.race([c,s])};try{let a=n.route[e];if(r)if(a){let e,[t]=await Promise.all([s(a).catch((t=>{e=t})),r]);if(void 0!==e)throw e;o=t}else{if(await r,a=n.route[e],!a){if("action"===e){let e=new URL(t.url),r=e.pathname+e.search;throw je(405,{method:t.method,pathname:r,routeId:n.route.id})}return{type:g.data,result:void 0}}o=await s(a)}else{if(!a){let e=new URL(t.url);throw je(404,{pathname:e.pathname+e.search})}o=await s(a)}u(void 0!==o.result,"You defined "+("action"===e?"an action":"a loader")+' for route "'+n.route.id+"\" but didn't return anything from your `"+e+"` function. Please return a value or `null`.")}catch(c){return{type:g.error,result:c}}finally{l&&t.signal.removeEventListener("abort",l)}return o}(t,r,e,i,n,f):Promise.resolve({type:g.data,result:void 0}))})})),m=await e({matches:h,request:r,params:i[0].params,fetcherKey:o,context:f});try{await Promise.all(p)}catch(y){}return m}async function he(e){let{result:t,type:n}=e;if(ze(t)){let e;try{let n=t.headers.get("Content-Type");e=n&&/\bapplication\/json\b/.test(n)?null==t.body?null:await t.json():await t.text()}catch(u){return{type:g.error,error:u}}return n===g.error?{type:g.error,error:new W(t.status,t.statusText,e),statusCode:t.status,headers:t.headers}:{type:g.data,data:e,statusCode:t.status,headers:t.headers}}if(n===g.error){if(Oe(t)){var r,a;if(t.data instanceof Error)return{type:g.error,error:t.data,statusCode:null==(a=t.init)?void 0:a.status};t=new W((null==(r=t.init)?void 0:r.status)||500,void 0,t.data)}return{type:g.error,error:t,statusCode:$(t)?t.status:void 0}}var i,o,l,s;return function(e){let t=e;return t&&"object"===typeof t&&"object"===typeof t.data&&"function"===typeof t.subscribe&&"function"===typeof t.cancel&&"function"===typeof t.resolveData}(t)?{type:g.deferred,deferredData:t,statusCode:null==(i=t.init)?void 0:i.status,headers:(null==(o=t.init)?void 0:o.headers)&&new Headers(t.init.headers)}:Oe(t)?{type:g.data,data:t.data,statusCode:null==(l=t.init)?void 0:l.status,headers:null!=(s=t.init)&&s.headers?new Headers(t.init.headers):void 0}:{type:g.data,data:t}}function me(e,t,n,r,a,i){let o=e.headers.get("Location");if(u(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!ee.test(o)){let l=r.slice(0,r.findIndex((e=>e.route.id===n))+1);o=ae(new URL(t.url),l,a,!0,o,i),e.headers.set("Location",o)}return e}function ge(e,t,n){if(ee.test(e)){let r=e,a=r.startsWith("//")?new URL(t.protocol+r):new URL(r),i=null!=z(a.pathname,n);if(a.origin===t.origin&&i)return a.pathname+a.search+a.hash}return e}function ve(e,t,n,r){let a=e.createURL(Pe(t)).toString(),i={signal:n};if(r&&Fe(r.formMethod)){let{formMethod:e,formEncType:t}=r;i.method=e.toUpperCase(),"application/json"===t?(i.headers=new Headers({"Content-Type":t}),i.body=JSON.stringify(r.json)):"text/plain"===t?i.body=r.text:"application/x-www-form-urlencoded"===t&&r.formData?i.body=ye(r.formData):i.body=r.formData}return new Request(a,i)}function ye(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,"string"===typeof r?r:r.name);return t}function xe(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function be(e,t,n,r,a){let i,o={},l=null,s=!1,c={},d=n&&Ne(n[1])?n[1].error:void 0;return e.forEach((n=>{if(!(n.route.id in t))return;let f=n.route.id,p=t[f];if(u(!Te(p),"Cannot handle redirect results in processLoaderData"),Ne(p)){let t=p.error;if(void 0!==d&&(t=d,d=void 0),l=l||{},a)l[f]=t;else{let n=Ce(e,f);null==l[n.route.id]&&(l[n.route.id]=t)}o[f]=void 0,s||(s=!0,i=$(p.error)?p.error.status:500),p.headers&&(c[f]=p.headers)}else Re(p)?(r.set(f,p.deferredData),o[f]=p.deferredData.data,null==p.statusCode||200===p.statusCode||s||(i=p.statusCode),p.headers&&(c[f]=p.headers)):(o[f]=p.data,p.statusCode&&200!==p.statusCode&&!s&&(i=p.statusCode),p.headers&&(c[f]=p.headers))})),void 0!==d&&n&&(l={[n[0]]:d},o[n[0]]=void 0),{loaderData:o,errors:l,statusCode:i||200,loaderHeaders:c}}function we(e,t,n,r,a,i,o,s){let{loaderData:c,errors:d}=be(t,r,a,s,!1);return i.forEach((t=>{let{key:n,match:r,controller:a}=t,i=o[n];if(u(i,"Did not find corresponding fetcher result"),!a||!a.signal.aborted)if(Ne(i)){let t=Ce(e.matches,null==r?void 0:r.route.id);d&&d[t.route.id]||(d=l({},d,{[t.route.id]:i.error})),e.fetchers.delete(n)}else if(Te(i))u(!1,"Unhandled fetcher revalidation redirect");else if(Re(i))u(!1,"Unhandled fetcher deferred data");else{let t=Ve(i.data);e.fetchers.set(n,t)}})),{loaderData:c,errors:d}}function Se(e,t,n,r){let a=l({},t);for(let i of n){let n=i.route.id;if(t.hasOwnProperty(n)?void 0!==t[n]&&(a[n]=t[n]):void 0!==e[n]&&i.route.loader&&(a[n]=e[n]),r&&r.hasOwnProperty(n))break}return a}function ke(e){return e?Ne(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Ce(e,t){let n=t?e.slice(0,e.findIndex((e=>e.route.id===t))+1):[...e];return n.reverse().find((e=>!0===e.route.hasErrorBoundary))||e[0]}function Ee(e){let t=1===e.length?e[0]:e.find((e=>e.index||!e.path||"/"===e.path))||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function je(e,t){let{pathname:n,routeId:r,method:a,type:i,message:o}=void 0===t?{}:t,l="Unknown Server Error",s="Unknown @remix-run/router error";return 400===e?(l="Bad Request","route-discovery"===i?s='Unable to match URL "'+n+'" - the `unstable_patchRoutesOnNavigation()` function threw the following error:\n'+o:a&&n&&r?s="You made a "+a+' request to "'+n+'" but did not provide a `loader` for route "'+r+'", so there is no way to handle the request.':"defer-action"===i?s="defer() is not supported in actions":"invalid-body"===i&&(s="Unable to encode submission body")):403===e?(l="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):404===e?(l="Not Found",s='No route matches URL "'+n+'"'):405===e&&(l="Method Not Allowed",a&&n&&r?s="You made a "+a.toUpperCase()+' request to "'+n+'" but did not provide an `action` for route "'+r+'", so there is no way to handle the request.':a&&(s='Invalid request method "'+a.toUpperCase()+'"')),new W(e||500,l,new Error(s),!0)}function _e(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[e,r]=t[n];if(Te(r))return{key:e,result:r}}}function Pe(e){return p(l({},"string"===typeof e?h(e):e,{hash:""}))}function Ae(e){return ze(e.result)&&Y.has(e.result.status)}function Re(e){return e.type===g.deferred}function Ne(e){return e.type===g.error}function Te(e){return(e&&e.type)===g.redirect}function Oe(e){return"object"===typeof e&&null!=e&&"type"in e&&"data"in e&&"init"in e&&"DataWithResponseInit"===e.type}function ze(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"object"===typeof e.headers&&"undefined"!==typeof e.body}function Le(e){return q.has(e.toLowerCase())}function Fe(e){return K.has(e.toLowerCase())}async function De(e,t,n,r,a){let i=Object.entries(t);for(let o=0;o<i.length;o++){let[l,s]=i[o],u=e.find((e=>(null==e?void 0:e.route.id)===l));if(!u)continue;let c=r.find((e=>e.route.id===u.route.id)),d=null!=c&&!se(c,u)&&void 0!==(a&&a[u.route.id]);Re(s)&&d&&await Me(s,n,!1).then((e=>{e&&(t[l]=e)}))}}async function Ie(e,t,n){for(let r=0;r<n.length;r++){let{key:a,routeId:i,controller:o}=n[r],l=t[a],s=e.find((e=>(null==e?void 0:e.route.id)===i));s&&(Re(l)&&(u(o,"Expected an AbortController for revalidating fetcher deferred result"),await Me(l,o.signal,!0).then((e=>{e&&(t[a]=e)}))))}}async function Me(e,t,n){if(void 0===n&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:g.data,data:e.deferredData.unwrappedData}}catch(r){return{type:g.error,error:r}}return{type:g.data,data:e.deferredData.data}}}function Be(e){return new URLSearchParams(e).getAll("index").some((e=>""===e))}function Ue(e,t){let n="string"===typeof t?h(t).search:t.search;if(e[e.length-1].route.index&&Be(n||""))return e[e.length-1];let r=F(e);return r[r.length-1]}function He(e){let{formMethod:t,formAction:n,formEncType:r,text:a,formData:i,json:o}=e;if(t&&n&&r)return null!=a?{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:a}:null!=i?{formMethod:t,formAction:n,formEncType:r,formData:i,json:void 0,text:void 0}:void 0!==o?{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}:void 0}function We(e,t){if(t){return{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}return{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function $e(e,t){if(e){return{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}}return{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Ve(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Ke(){return Ke=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ke.apply(this,arguments)}const Qe=t.createContext(null);const qe=t.createContext(null);const Ye=t.createContext(null);const Ze=t.createContext(null);const Ge=t.createContext({outlet:null,matches:[],isDataRoute:!1});const Xe=t.createContext(null);function Je(){return null!=t.useContext(Ze)}function et(){return Je()||u(!1),t.useContext(Ze).location}function tt(e){t.useContext(Ye).static||t.useLayoutEffect(e)}function nt(){let{isDataRoute:e}=t.useContext(Ge);return e?function(){let{router:e}=pt(dt.UseNavigateStable),n=mt(ft.UseNavigateStable),r=t.useRef(!1);tt((()=>{r.current=!0}));let a=t.useCallback((function(t,a){void 0===a&&(a={}),r.current&&("number"===typeof t?e.navigate(t):e.navigate(t,Ke({fromRouteId:n},a)))}),[e,n]);return a}():function(){Je()||u(!1);let e=t.useContext(Qe),{basename:n,future:r,navigator:a}=t.useContext(Ye),{matches:i}=t.useContext(Ge),{pathname:o}=et(),l=JSON.stringify(D(i,r.v7_relativeSplatPath)),s=t.useRef(!1);return tt((()=>{s.current=!0})),t.useCallback((function(t,r){if(void 0===r&&(r={}),!s.current)return;if("number"===typeof t)return void a.go(t);let i=I(t,JSON.parse(l),o,"path"===r.relative);null==e&&"/"!==n&&(i.pathname="/"===i.pathname?n:M([n,i.pathname])),(r.replace?a.replace:a.push)(i,r.state,r)}),[n,a,l,o,e])}()}const rt=t.createContext(null);function at(e,n){let{relative:r}=void 0===n?{}:n,{future:a}=t.useContext(Ye),{matches:i}=t.useContext(Ge),{pathname:o}=et(),l=JSON.stringify(D(i,a.v7_relativeSplatPath));return t.useMemo((()=>I(e,JSON.parse(l),o,"path"===r)),[e,l,o,r])}function it(n,r,a,i){Je()||u(!1);let{navigator:o}=t.useContext(Ye),{matches:l}=t.useContext(Ge),s=l[l.length-1],c=s?s.params:{},d=(s&&s.pathname,s?s.pathnameBase:"/");s&&s.route;let f,p=et();if(r){var m;let e="string"===typeof r?h(r):r;"/"===d||(null==(m=e.pathname)?void 0:m.startsWith(d))||u(!1),f=e}else f=p;let g=f.pathname||"/",v=g;if("/"!==d){let e=d.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(e.length).join("/")}let y=x(n,{pathname:v});let b=ct(y&&y.map((e=>Object.assign({},e,{params:Object.assign({},c,e.params),pathname:M([d,o.encodeLocation?o.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:M([d,o.encodeLocation?o.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),l,a,i);return r&&b?t.createElement(Ze.Provider,{value:{location:Ke({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:e.Pop}},b):b}function ot(){let e=gt(),n=$(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:a};return t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},n),r?t.createElement("pre",{style:i},r):null,null)}const lt=t.createElement(ot,null);class st extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement(Ge.Provider,{value:this.props.routeContext},t.createElement(Xe.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ut(e){let{routeContext:n,match:r,children:a}=e,i=t.useContext(Qe);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),t.createElement(Ge.Provider,{value:n},a)}function ct(e,n,r,a){var i;if(void 0===n&&(n=[]),void 0===r&&(r=null),void 0===a&&(a=null),null==e){var o;if(!r)return null;if(r.errors)e=r.matches;else{if(!(null!=(o=a)&&o.v7_partialHydration&&0===n.length&&!r.initialized&&r.matches.length>0))return null;e=r.matches}}let l=e,s=null==(i=r)?void 0:i.errors;if(null!=s){let e=l.findIndex((e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id])));e>=0||u(!1),l=l.slice(0,Math.min(l.length,e+1))}let c=!1,d=-1;if(r&&a&&a.v7_partialHydration)for(let t=0;t<l.length;t++){let e=l[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=t),e.route.id){let{loaderData:t,errors:n}=r,a=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||a){c=!0,l=d>=0?l.slice(0,d+1):[l[0]];break}}}return l.reduceRight(((e,a,i)=>{let o,u=!1,f=null,p=null;var h;r&&(o=s&&a.route.id?s[a.route.id]:void 0,f=a.route.errorElement||lt,c&&(d<0&&0===i?(h="route-fallback",!1||vt[h]||(vt[h]=!0),u=!0,p=null):d===i&&(u=!0,p=a.route.hydrateFallbackElement||null)));let m=n.concat(l.slice(0,i+1)),g=()=>{let n;return n=o?f:u?p:a.route.Component?t.createElement(a.route.Component,null):a.route.element?a.route.element:e,t.createElement(ut,{match:a,routeContext:{outlet:e,matches:m,isDataRoute:null!=r},children:n})};return r&&(a.route.ErrorBoundary||a.route.errorElement||0===i)?t.createElement(st,{location:r.location,revalidation:r.revalidation,component:f,error:o,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()}),null)}var dt=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(dt||{}),ft=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ft||{});function pt(e){let n=t.useContext(Qe);return n||u(!1),n}function ht(e){let n=t.useContext(qe);return n||u(!1),n}function mt(e){let n=function(){let e=t.useContext(Ge);return e||u(!1),e}(),r=n.matches[n.matches.length-1];return r.route.id||u(!1),r.route.id}function gt(){var e;let n=t.useContext(Xe),r=ht(ft.UseRouteError),a=mt(ft.UseRouteError);return void 0!==n?n:null==(e=r.errors)?void 0:e[a]}const vt={};r.startTransition;function yt(e){return function(e){let n=t.useContext(Ge).outlet;return n?t.createElement(rt.Provider,{value:e},n):n}(e.context)}function xt(n){let{basename:r="/",children:a=null,location:i,navigationType:o=e.Pop,navigator:l,static:s=!1,future:c}=n;Je()&&u(!1);let d=r.replace(/^\/*/,"/"),f=t.useMemo((()=>({basename:d,navigator:l,static:s,future:Ke({v7_relativeSplatPath:!1},c)})),[d,c,l,s]);"string"===typeof i&&(i=h(i));let{pathname:p="/",search:m="",hash:g="",state:v=null,key:y="default"}=i,x=t.useMemo((()=>{let e=z(p,d);return null==e?null:{location:{pathname:e,search:m,hash:g,state:v,key:y},navigationType:o}}),[d,p,m,g,v,y,o]);return null==x?null:t.createElement(Ye.Provider,{value:f},t.createElement(Ze.Provider,{children:a,value:x}))}new Promise((()=>{}));t.Component;function bt(e){let n={hasErrorBoundary:null!=e.ErrorBoundary||null!=e.errorElement};return e.Component&&Object.assign(n,{element:t.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(n,{hydrateFallbackElement:t.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(n,{errorElement:t.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),n}function wt(){return wt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wt.apply(this,arguments)}function St(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const kt=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];try{window.__reactRouterVersion="6"}catch($d){}function Ct(){var e;let t=null==(e=window)?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=wt({},t,{errors:Et(t.errors)})),t}function Et(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,a]of t)if(a&&"RouteErrorResponse"===a.__type)n[r]=new W(a.status,a.statusText,a.data,!0===a.internal);else if(a&&"Error"===a.__type){if(a.__subType){let e=window[a.__subType];if("function"===typeof e)try{let t=new e(a.message);t.stack="",n[r]=t}catch($d){}}if(null==n[r]){let e=new Error(a.message);e.stack="",n[r]=e}}else n[r]=a;return n}const jt=t.createContext({isTransitioning:!1});const _t=t.createContext(new Map);const Pt=r.startTransition,At=o.flushSync;r.useId;function Rt(e){At?At(e):e()}class Nt{constructor(){this.status="pending",this.promise=new Promise(((e,t)=>{this.resolve=t=>{"pending"===this.status&&(this.status="resolved",e(t))},this.reject=e=>{"pending"===this.status&&(this.status="rejected",t(e))}}))}}function Tt(e){let{fallbackElement:n,router:r,future:a}=e,[i,o]=t.useState(r.state),[l,s]=t.useState(),[u,c]=t.useState({isTransitioning:!1}),[d,f]=t.useState(),[p,h]=t.useState(),[m,g]=t.useState(),v=t.useRef(new Map),{v7_startTransition:y}=a||{},x=t.useCallback((e=>{y?function(e){Pt?Pt(e):e()}(e):e()}),[y]),b=t.useCallback(((e,t)=>{let{deletedFetchers:n,unstable_flushSync:a,unstable_viewTransitionOpts:i}=t;n.forEach((e=>v.current.delete(e))),e.fetchers.forEach(((e,t)=>{void 0!==e.data&&v.current.set(t,e.data)}));let l=null==r.window||null==r.window.document||"function"!==typeof r.window.document.startViewTransition;if(i&&!l){if(a){Rt((()=>{p&&(d&&d.resolve(),p.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:i.currentLocation,nextLocation:i.nextLocation})}));let t=r.window.document.startViewTransition((()=>{Rt((()=>o(e)))}));return t.finished.finally((()=>{Rt((()=>{f(void 0),h(void 0),s(void 0),c({isTransitioning:!1})}))})),void Rt((()=>h(t)))}p?(d&&d.resolve(),p.skipTransition(),g({state:e,currentLocation:i.currentLocation,nextLocation:i.nextLocation})):(s(e),c({isTransitioning:!0,flushSync:!1,currentLocation:i.currentLocation,nextLocation:i.nextLocation}))}else a?Rt((()=>o(e))):x((()=>o(e)))}),[r.window,p,d,v,x]);t.useLayoutEffect((()=>r.subscribe(b)),[r,b]),t.useEffect((()=>{u.isTransitioning&&!u.flushSync&&f(new Nt)}),[u]),t.useEffect((()=>{if(d&&l&&r.window){let e=l,t=d.promise,n=r.window.document.startViewTransition((async()=>{x((()=>o(e))),await t}));n.finished.finally((()=>{f(void 0),h(void 0),s(void 0),c({isTransitioning:!1})})),h(n)}}),[x,l,d,r.window]),t.useEffect((()=>{d&&l&&i.location.key===l.location.key&&d.resolve()}),[d,p,i.location,l]),t.useEffect((()=>{!u.isTransitioning&&m&&(s(m.state),c({isTransitioning:!0,flushSync:!1,currentLocation:m.currentLocation,nextLocation:m.nextLocation}),g(void 0))}),[u.isTransitioning,m]),t.useEffect((()=>{}),[]);let w=t.useMemo((()=>({createHref:r.createHref,encodeLocation:r.encodeLocation,go:e=>r.navigate(e),push:(e,t,n)=>r.navigate(e,{state:t,preventScrollReset:null==n?void 0:n.preventScrollReset}),replace:(e,t,n)=>r.navigate(e,{replace:!0,state:t,preventScrollReset:null==n?void 0:n.preventScrollReset})})),[r]),S=r.basename||"/",k=t.useMemo((()=>({router:r,navigator:w,static:!1,basename:S})),[r,w,S]),C=t.useMemo((()=>({v7_relativeSplatPath:r.future.v7_relativeSplatPath})),[r.future.v7_relativeSplatPath]);return t.createElement(t.Fragment,null,t.createElement(Qe.Provider,{value:k},t.createElement(qe.Provider,{value:i},t.createElement(_t.Provider,{value:v.current},t.createElement(jt.Provider,{value:u},t.createElement(xt,{basename:S,location:i.location,navigationType:i.historyAction,navigator:w,future:C},i.initialized||r.future.v7_partialHydration?t.createElement(Ot,{routes:r.routes,future:r.future,state:i}):n))))),null)}const Ot=t.memo(zt);function zt(e){let{routes:t,future:n,state:r}=e;return it(t,void 0,r,n)}const Lt="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,Ft=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Dt=t.forwardRef((function(e,n){let r,{onClick:a,relative:i,reloadDocument:o,replace:l,state:s,target:c,to:d,preventScrollReset:f,unstable_viewTransition:h}=e,m=St(e,kt),{basename:g}=t.useContext(Ye),v=!1;if("string"===typeof d&&Ft.test(d)&&(r=d,Lt))try{let e=new URL(window.location.href),t=d.startsWith("//")?new URL(e.protocol+d):new URL(d),n=z(t.pathname,g);t.origin===e.origin&&null!=n?d=n+t.search+t.hash:v=!0}catch($d){}let y=function(e,n){let{relative:r}=void 0===n?{}:n;Je()||u(!1);let{basename:a,navigator:i}=t.useContext(Ye),{hash:o,pathname:l,search:s}=at(e,{relative:r}),c=l;return"/"!==a&&(c="/"===l?a:M([a,l])),i.createHref({pathname:c,search:s,hash:o})}(d,{relative:i}),x=function(e,n){let{target:r,replace:a,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s}=void 0===n?{}:n,u=nt(),c=et(),d=at(e,{relative:l});return t.useCallback((t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,r)){t.preventDefault();let n=void 0!==a?a:p(c)===p(d);u(e,{replace:n,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s})}}),[c,u,d,a,i,r,e,o,l,s])}(d,{replace:l,state:s,target:c,preventScrollReset:f,relative:i,unstable_viewTransition:h});return t.createElement("a",wt({},m,{href:r||y,onClick:v||o?a:function(e){a&&a(e),e.defaultPrevented||x(e)},ref:n,target:c}))}));var It,Mt;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(It||(It={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Mt||(Mt={}));var Bt,Ut;function Ht(){return Ht=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ht.apply(null,arguments)}function Wt(e,n){let{title:r,titleId:a,...i}=e;return t.createElement("svg",Ht({width:26,height:26,viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":a},i),r?t.createElement("title",{id:a},r):null,Bt||(Bt=t.createElement("path",{d:"M11.5 20C16.1944 20 20 16.1944 20 11.5C20 6.80558 16.1944 3 11.5 3C6.80558 3 3 6.80558 3 11.5C3 16.1944 6.80558 20 11.5 20Z",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Ut||(Ut=t.createElement("path",{d:"M23 23L18 18",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}const $t=t.forwardRef(Wt);n.p;var Vt=function(){return Vt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},Vt.apply(this,arguments)};Object.create;function Kt(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var Qt=n(7324),qt=n.n(Qt),Yt="-ms-",Zt="-moz-",Gt="-webkit-",Xt="comm",Jt="rule",en="decl",tn="@import",nn="@keyframes",rn="@layer",an=Math.abs,on=String.fromCharCode,ln=Object.assign;function sn(e){return e.trim()}function un(e,t){return(e=t.exec(e))?e[0]:e}function cn(e,t,n){return e.replace(t,n)}function dn(e,t,n){return e.indexOf(t,n)}function fn(e,t){return 0|e.charCodeAt(t)}function pn(e,t,n){return e.slice(t,n)}function hn(e){return e.length}function mn(e){return e.length}function gn(e,t){return t.push(e),e}function vn(e,t){return e.filter((function(e){return!un(e,t)}))}var yn=1,xn=1,bn=0,wn=0,Sn=0,kn="";function Cn(e,t,n,r,a,i,o,l){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:yn,column:xn,length:o,return:"",siblings:l}}function En(e,t){return ln(Cn("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function jn(e){for(;e.root;)e=En(e.root,{children:[e]});gn(e,e.siblings)}function _n(){return Sn=wn>0?fn(kn,--wn):0,xn--,10===Sn&&(xn=1,yn--),Sn}function Pn(){return Sn=wn<bn?fn(kn,wn++):0,xn++,10===Sn&&(xn=1,yn++),Sn}function An(){return fn(kn,wn)}function Rn(){return wn}function Nn(e,t){return pn(kn,e,t)}function Tn(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function On(e){return yn=xn=1,bn=hn(kn=e),wn=0,[]}function zn(e){return kn="",e}function Ln(e){return sn(Nn(wn-1,In(91===e?e+2:40===e?e+1:e)))}function Fn(e){for(;(Sn=An())&&Sn<33;)Pn();return Tn(e)>2||Tn(Sn)>3?"":" "}function Dn(e,t){for(;--t&&Pn()&&!(Sn<48||Sn>102||Sn>57&&Sn<65||Sn>70&&Sn<97););return Nn(e,Rn()+(t<6&&32==An()&&32==Pn()))}function In(e){for(;Pn();)switch(Sn){case e:return wn;case 34:case 39:34!==e&&39!==e&&In(Sn);break;case 40:41===e&&In(e);break;case 92:Pn()}return wn}function Mn(e,t){for(;Pn()&&e+Sn!==57&&(e+Sn!==84||47!==An()););return"/*"+Nn(t,wn-1)+"*"+on(47===e?e:Pn())}function Bn(e){for(;!Tn(An());)Pn();return Nn(e,wn)}function Un(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Hn(e,t,n,r){switch(e.type){case rn:if(e.children.length)break;case tn:case en:return e.return=e.return||e.value;case Xt:return"";case nn:return e.return=e.value+"{"+Un(e.children,r)+"}";case Jt:if(!hn(e.value=e.props.join(",")))return""}return hn(n=Un(e.children,r))?e.return=e.value+"{"+n+"}":""}function Wn(e,t,n){switch(function(e,t){return 45^fn(e,0)?(((t<<2^fn(e,0))<<2^fn(e,1))<<2^fn(e,2))<<2^fn(e,3):0}(e,t)){case 5103:return Gt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Gt+e+e;case 4789:return Zt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Gt+e+Zt+e+Yt+e+e;case 5936:switch(fn(e,t+11)){case 114:return Gt+e+Yt+cn(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Gt+e+Yt+cn(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Gt+e+Yt+cn(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Gt+e+Yt+e+e;case 6165:return Gt+e+Yt+"flex-"+e+e;case 5187:return Gt+e+cn(e,/(\w+).+(:[^]+)/,Gt+"box-$1$2"+Yt+"flex-$1$2")+e;case 5443:return Gt+e+Yt+"flex-item-"+cn(e,/flex-|-self/g,"")+(un(e,/flex-|baseline/)?"":Yt+"grid-row-"+cn(e,/flex-|-self/g,""))+e;case 4675:return Gt+e+Yt+"flex-line-pack"+cn(e,/align-content|flex-|-self/g,"")+e;case 5548:return Gt+e+Yt+cn(e,"shrink","negative")+e;case 5292:return Gt+e+Yt+cn(e,"basis","preferred-size")+e;case 6060:return Gt+"box-"+cn(e,"-grow","")+Gt+e+Yt+cn(e,"grow","positive")+e;case 4554:return Gt+cn(e,/([^-])(transform)/g,"$1"+Gt+"$2")+e;case 6187:return cn(cn(cn(e,/(zoom-|grab)/,Gt+"$1"),/(image-set)/,Gt+"$1"),e,"")+e;case 5495:case 3959:return cn(e,/(image-set\([^]*)/,Gt+"$1$`$1");case 4968:return cn(cn(e,/(.+:)(flex-)?(.*)/,Gt+"box-pack:$3"+Yt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Gt+e+e;case 4200:if(!un(e,/flex-|baseline/))return Yt+"grid-column-align"+pn(e,t)+e;break;case 2592:case 3360:return Yt+cn(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,un(e.props,/grid-\w+-end/)}))?~dn(e+(n=n[t].value),"span",0)?e:Yt+cn(e,"-start","")+e+Yt+"grid-row-span:"+(~dn(n,"span",0)?un(n,/\d+/):+un(n,/\d+/)-+un(e,/\d+/))+";":Yt+cn(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return un(e.props,/grid-\w+-start/)}))?e:Yt+cn(cn(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return cn(e,/(.+)-inline(.+)/,Gt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(hn(e)-1-t>6)switch(fn(e,t+1)){case 109:if(45!==fn(e,t+4))break;case 102:return cn(e,/(.+:)(.+)-([^]+)/,"$1"+Gt+"$2-$3$1"+Zt+(108==fn(e,t+3)?"$3":"$2-$3"))+e;case 115:return~dn(e,"stretch",0)?Wn(cn(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return cn(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,a,i,o,l){return Yt+n+":"+r+l+(a?Yt+n+"-span:"+(i?o:+o-+r)+l:"")+e}));case 4949:if(121===fn(e,t+6))return cn(e,":",":"+Gt)+e;break;case 6444:switch(fn(e,45===fn(e,14)?18:11)){case 120:return cn(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Gt+(45===fn(e,14)?"inline-":"")+"box$3$1"+Gt+"$2$3$1"+Yt+"$2box$3")+e;case 100:return cn(e,":",":"+Yt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return cn(e,"scroll-","scroll-snap-")+e}return e}function $n(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case en:return void(e.return=Wn(e.value,e.length,n));case nn:return Un([En(e,{value:cn(e.value,"@","@"+Gt)})],r);case Jt:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(un(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":jn(En(e,{props:[cn(t,/:(read-\w+)/,":"+Zt+"$1")]})),jn(En(e,{props:[t]})),ln(e,{props:vn(n,r)});break;case"::placeholder":jn(En(e,{props:[cn(t,/:(plac\w+)/,":"+Gt+"input-$1")]})),jn(En(e,{props:[cn(t,/:(plac\w+)/,":"+Zt+"$1")]})),jn(En(e,{props:[cn(t,/:(plac\w+)/,Yt+"input-$1")]})),jn(En(e,{props:[t]})),ln(e,{props:vn(n,r)})}return""}))}}function Vn(e){return zn(Kn("",null,null,null,[""],e=On(e),0,[0],e))}function Kn(e,t,n,r,a,i,o,l,s){for(var u=0,c=0,d=o,f=0,p=0,h=0,m=1,g=1,v=1,y=0,x="",b=a,w=i,S=r,k=x;g;)switch(h=y,y=Pn()){case 40:if(108!=h&&58==fn(k,d-1)){-1!=dn(k+=cn(Ln(y),"&","&\f"),"&\f",an(u?l[u-1]:0))&&(v=-1);break}case 34:case 39:case 91:k+=Ln(y);break;case 9:case 10:case 13:case 32:k+=Fn(h);break;case 92:k+=Dn(Rn()-1,7);continue;case 47:switch(An()){case 42:case 47:gn(qn(Mn(Pn(),Rn()),t,n,s),s);break;default:k+="/"}break;case 123*m:l[u++]=hn(k)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+c:-1==v&&(k=cn(k,/\f/g,"")),p>0&&hn(k)-d&&gn(p>32?Yn(k+";",r,n,d-1,s):Yn(cn(k," ","")+";",r,n,d-2,s),s);break;case 59:k+=";";default:if(gn(S=Qn(k,t,n,u,c,a,l,x,b=[],w=[],d,i),i),123===y)if(0===c)Kn(k,t,S,S,b,i,d,l,w);else switch(99===f&&110===fn(k,3)?100:f){case 100:case 108:case 109:case 115:Kn(e,S,S,r&&gn(Qn(e,S,S,0,0,a,l,x,a,b=[],d,w),w),a,w,d,l,r?b:w);break;default:Kn(k,S,S,S,[""],w,0,l,w)}}u=c=p=0,m=v=1,x=k="",d=o;break;case 58:d=1+hn(k),p=h;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==_n())continue;switch(k+=on(y),y*m){case 38:v=c>0?1:(k+="\f",-1);break;case 44:l[u++]=(hn(k)-1)*v,v=1;break;case 64:45===An()&&(k+=Ln(Pn())),f=An(),c=d=hn(x=k+=Bn(Rn())),y++;break;case 45:45===h&&2==hn(k)&&(m=0)}}return i}function Qn(e,t,n,r,a,i,o,l,s,u,c,d){for(var f=a-1,p=0===a?i:[""],h=mn(p),m=0,g=0,v=0;m<r;++m)for(var y=0,x=pn(e,f+1,f=an(g=o[m])),b=e;y<h;++y)(b=sn(g>0?p[y]+" "+x:cn(x,/&\f/g,p[y])))&&(s[v++]=b);return Cn(e,t,n,0===a?Jt:l,s,u,c,d)}function qn(e,t,n,r){return Cn(e,t,n,Xt,on(Sn),pn(e,2,-2),0,r)}function Yn(e,t,n,r,a){return Cn(e,t,n,en,pn(e,0,r),pn(e,r+1,-1),r,a)}var Zn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Gn="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",Xn="active",Jn="data-styled-version",er="6.1.13",tr="/*!sc*/\n",nr="undefined"!=typeof window&&"HTMLElement"in window,rr=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),ar=(new Set,Object.freeze([])),ir=Object.freeze({});function or(e,t,n){return void 0===n&&(n=ir),e.theme!==n.theme&&e.theme||t||n.theme}var lr=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),sr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ur=/(^-|-$)/g;function cr(e){return e.replace(sr,"-").replace(ur,"")}var dr=/(a)(d)/gi,fr=52,pr=function(e){return String.fromCharCode(e+(e>25?39:97))};function hr(e){var t,n="";for(t=Math.abs(e);t>fr;t=t/fr|0)n=pr(t%fr)+n;return(pr(t%fr)+n).replace(dr,"$1-$2")}var mr,gr=5381,vr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},yr=function(e){return vr(gr,e)};function xr(e){return hr(yr(e)>>>0)}function br(e){return e.displayName||e.name||"Component"}function wr(e){return"string"==typeof e&&!0}var Sr="function"==typeof Symbol&&Symbol.for,kr=Sr?Symbol.for("react.memo"):60115,Cr=Sr?Symbol.for("react.forward_ref"):60112,Er={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},jr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_r={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Pr=((mr={})[Cr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},mr[kr]=_r,mr);function Ar(e){return("type"in(t=e)&&t.type.$$typeof)===kr?_r:"$$typeof"in e?Pr[e.$$typeof]:Er;var t}var Rr=Object.defineProperty,Nr=Object.getOwnPropertyNames,Tr=Object.getOwnPropertySymbols,Or=Object.getOwnPropertyDescriptor,zr=Object.getPrototypeOf,Lr=Object.prototype;function Fr(e,t,n){if("string"!=typeof t){if(Lr){var r=zr(t);r&&r!==Lr&&Fr(e,r,n)}var a=Nr(t);Tr&&(a=a.concat(Tr(t)));for(var i=Ar(e),o=Ar(t),l=0;l<a.length;++l){var s=a[l];if(!(s in jr||n&&n[s]||o&&s in o||i&&s in i)){var u=Or(t,s);try{Rr(e,s,u)}catch(e){}}}}return e}function Dr(e){return"function"==typeof e}function Ir(e){return"object"==typeof e&&"styledComponentId"in e}function Mr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Br(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ur(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Hr(e,t,n){if(void 0===n&&(n=!1),!n&&!Ur(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Hr(e[r],t[r]);else if(Ur(t))for(var r in t)e[r]=Hr(e[r],t[r]);return e}function Wr(e,t){Object.defineProperty(e,"toString",{value:t})}function $r(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Vr=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw $r(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var i=r;i<a;i++)this.groupSizes[i]=0}for(var o=this.indexOfGroup(e+1),l=(i=0,t.length);i<l;i++)this.tag.insertRule(o,t[i])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,i=r;i<a;i++)t+="".concat(this.tag.getRule(i)).concat(tr);return t},e}(),Kr=new Map,Qr=new Map,qr=1,Yr=function(e){if(Kr.has(e))return Kr.get(e);for(;Qr.has(qr);)qr++;var t=qr++;return Kr.set(e,t),Qr.set(t,e),t},Zr=function(e,t){qr=t+1,Kr.set(e,t),Qr.set(t,e)},Gr="style[".concat(Gn,"][").concat(Jn,'="').concat(er,'"]'),Xr=new RegExp("^".concat(Gn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Jr=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},ea=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(tr),a=[],i=0,o=r.length;i<o;i++){var l=r[i].trim();if(l){var s=l.match(Xr);if(s){var u=0|parseInt(s[1],10),c=s[2];0!==u&&(Zr(c,u),Jr(e,c,s[3]),e.getTag().insertRules(u,a)),a.length=0}else a.push(l)}}},ta=function(e){for(var t=document.querySelectorAll(Gr),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(Gn)!==Xn&&(ea(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function na(){return n.nc}var ra=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(Gn,"]")));return t[t.length-1]}(n),i=void 0!==a?a.nextSibling:null;r.setAttribute(Gn,Xn),r.setAttribute(Jn,er);var o=na();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},aa=function(){function e(e){this.element=ra(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}throw $r(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),ia=function(){function e(e){this.element=ra(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),oa=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),la=nr,sa={isServer:!nr,useCSSOMInjection:!rr},ua=function(){function e(e,t,n){void 0===e&&(e=ir),void 0===t&&(t={});var r=this;this.options=Vt(Vt({},sa),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&nr&&la&&(la=!1,ta(this)),Wr(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return Qr.get(e)}(n);if(void 0===a)return"continue";var i=e.names.get(a),o=t.getGroup(n);if(void 0===i||!i.size||0===o.length)return"continue";var l="".concat(Gn,".g").concat(n,'[id="').concat(a,'"]'),s="";void 0!==i&&i.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(o).concat(l,'{content:"').concat(s,'"}').concat(tr)},i=0;i<n;i++)a(i);return r}(r)}))}return e.registerId=function(e){return Yr(e)},e.prototype.rehydrate=function(){!this.server&&nr&&ta(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(Vt(Vt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new oa(n):t?new aa(n):new ia(n)}(this.options),new Vr(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Yr(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Yr(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Yr(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),ca=/&/g,da=/^\s*\/\/.*$/gm;function fa(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=fa(e.children,t)),e}))}function pa(e){var t,n,r,a=void 0===e?ir:e,i=a.options,o=void 0===i?ir:i,l=a.plugins,s=void 0===l?ar:l,u=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push((function(e){e.type===Jt&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(ca,n).replace(r,u))})),o.prefix&&c.push($n),c.push(Hn);var d=function(e,a,i,l){void 0===a&&(a=""),void 0===i&&(i=""),void 0===l&&(l="&"),t=l,n=a,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(da,""),u=Vn(i||a?"".concat(i," ").concat(a," { ").concat(s," }"):s);o.namespace&&(u=fa(u,o.namespace));var d,f=[];return Un(u,function(e){var t=mn(e);return function(n,r,a,i){for(var o="",l=0;l<t;l++)o+=e[l](n,r,a,i)||"";return o}}(c.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=s.length?s.reduce((function(e,t){return t.name||$r(15),vr(e,t.name)}),gr).toString():"",d}var ha=new ua,ma=pa(),ga=t.createContext({shouldForwardProp:void 0,styleSheet:ha,stylis:ma}),va=(ga.Consumer,t.createContext(void 0));function ya(){return(0,t.useContext)(ga)}function xa(e){var n=(0,t.useState)(e.stylisPlugins),r=n[0],a=n[1],i=ya().styleSheet,o=(0,t.useMemo)((function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,i]),l=(0,t.useMemo)((function(){return pa({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})}),[e.enableVendorPrefixes,e.namespace,r]);(0,t.useEffect)((function(){qt()(r,e.stylisPlugins)||a(e.stylisPlugins)}),[e.stylisPlugins]);var s=(0,t.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:o,stylis:l}}),[e.shouldForwardProp,o,l]);return t.createElement(ga.Provider,{value:s},t.createElement(va.Provider,{value:l},e.children))}var ba=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=ma);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Wr(this,(function(){throw $r(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=ma),this.name+e.hash},e}(),wa=function(e){return e>="A"&&e<="Z"};function Sa(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;wa(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var ka=function(e){return null==e||!1===e||""===e},Ca=function(e){var t,n,r=[];for(var a in e){var i=e[a];e.hasOwnProperty(a)&&!ka(i)&&(Array.isArray(i)&&i.isCss||Dr(i)?r.push("".concat(Sa(a),":"),i,";"):Ur(i)?r.push.apply(r,Kt(Kt(["".concat(a," {")],Ca(i),!1),["}"],!1)):r.push("".concat(Sa(a),": ").concat((t=a,null==(n=i)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in Zn||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ea(e,t,n,r){return ka(e)?[]:Ir(e)?[".".concat(e.styledComponentId)]:Dr(e)?!Dr(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:Ea(e(t),t,n,r):e instanceof ba?n?(e.inject(n,r),[e.getName(r)]):[e]:Ur(e)?Ca(e):Array.isArray(e)?Array.prototype.concat.apply(ar,e.map((function(e){return Ea(e,t,n,r)}))):[e.toString()];var a}function ja(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Dr(n)&&!Ir(n))return!1}return!0}var _a=yr(er),Pa=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&ja(e),this.componentId=t,this.baseHash=vr(_a,t),this.baseStyle=n,ua.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Mr(r,this.staticRulesId);else{var a=Br(Ea(this.rules,e,t,n)),i=hr(vr(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,i)){var o=n(a,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,o)}r=Mr(r,i),this.staticRulesId=i}else{for(var l=vr(this.baseHash,n.hash),s="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)s+=c;else if(c){var d=Br(Ea(c,e,t,n));l=vr(l,d+u),s+=d}}if(s){var f=hr(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(s,".".concat(f),void 0,this.componentId)),r=Mr(r,f)}}return r},e}(),Aa=t.createContext(void 0);Aa.Consumer;var Ra={};new Set;function Na(e,n,r){var a=Ir(e),i=e,o=!wr(e),l=n.attrs,s=void 0===l?ar:l,u=n.componentId,c=void 0===u?function(e,t){var n="string"!=typeof e?"sc":cr(e);Ra[n]=(Ra[n]||0)+1;var r="".concat(n,"-").concat(xr(er+n+Ra[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):u,d=n.displayName,f=void 0===d?function(e){return wr(e)?"styled.".concat(e):"Styled(".concat(br(e),")")}(e):d,p=n.displayName&&n.componentId?"".concat(cr(n.displayName),"-").concat(n.componentId):n.componentId||c,h=a&&i.attrs?i.attrs.concat(s).filter(Boolean):s,m=n.shouldForwardProp;if(a&&i.shouldForwardProp){var g=i.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;m=function(e,t){return g(e,t)&&v(e,t)}}else m=g}var y=new Pa(r,p,a?i.componentStyle:void 0);function x(e,n){return function(e,n,r){var a=e.attrs,i=e.componentStyle,o=e.defaultProps,l=e.foldedComponentIds,s=e.styledComponentId,u=e.target,c=t.useContext(Aa),d=ya(),f=e.shouldForwardProp||d.shouldForwardProp,p=or(n,c,o)||ir,h=function(e,t,n){for(var r,a=Vt(Vt({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var o=Dr(r=e[i])?r(a):r;for(var l in o)a[l]="className"===l?Mr(a[l],o[l]):"style"===l?Vt(Vt({},a[l]),o[l]):o[l]}return t.className&&(a.className=Mr(a.className,t.className)),a}(a,n,p),m=h.as||u,g={};for(var v in h)void 0===h[v]||"$"===v[0]||"as"===v||"theme"===v&&h.theme===p||("forwardedAs"===v?g.as=h.forwardedAs:f&&!f(v,m)||(g[v]=h[v]));var y=function(e,t){var n=ya();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,h),x=Mr(l,s);return y&&(x+=" "+y),h.className&&(x+=" "+h.className),g[wr(m)&&!lr.has(m)?"class":"className"]=x,g.ref=r,(0,t.createElement)(m,g)}(b,e,n)}x.displayName=f;var b=t.forwardRef(x);return b.attrs=h,b.componentStyle=y,b.displayName=f,b.shouldForwardProp=m,b.foldedComponentIds=a?Mr(i.foldedComponentIds,i.styledComponentId):"",b.styledComponentId=p,b.target=a?i.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)Hr(e,a[r],!0);return e}({},i.defaultProps,e):e}}),Wr(b,(function(){return".".concat(b.styledComponentId)})),o&&Fr(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function Ta(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var Oa=function(e){return Object.assign(e,{isCss:!0})};function za(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Dr(e)||Ur(e))return Oa(Ea(Ta(ar,Kt([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Ea(r):Oa(Ea(Ta(r,t)))}function La(e,t,n){if(void 0===n&&(n=ir),!t)throw $r(1,t);var r=function(r){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];return e(t,n,za.apply(void 0,Kt([r],a,!1)))};return r.attrs=function(r){return La(e,t,Vt(Vt({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return La(e,t,Vt(Vt({},n),r))},r}var Fa=function(e){return La(Na,e)},Da=Fa;lr.forEach((function(e){Da[e]=Fa(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=ja(e),ua.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var a=r(Br(Ea(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&ua.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=na(),r=Br([n&&'nonce="'.concat(n,'"'),"".concat(Gn,'="true"'),"".concat(Jn,'="').concat(er,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw $r(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw $r(2);var r=e.instance.toString();if(!r)return[];var a=((n={})[Gn]="",n[Jn]=er,n.dangerouslySetInnerHTML={__html:r},n),i=na();return i&&(a.nonce=i),[t.createElement("style",Vt({},a,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new ua({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw $r(2);return t.createElement(xa,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw $r(3)}})(),"__sc-".concat(Gn,"__");const Ia=n.p+"static/media/trash.3559d4f9a9bb5870ad11b1b6f7933596.svg";var Ma=n(7237),Ba=t,Ua=Symbol.for("react-redux-context"),Ha="undefined"!==typeof globalThis?globalThis:{};function Wa(){if(!Ba.createContext)return{};const e=Ha[Ua]??(Ha[Ua]=new Map);let t=e.get(Ba.createContext);return t||(t=Ba.createContext(null),e.set(Ba.createContext,t)),t}var $a=Wa(),Va=()=>{throw new Error("uSES not initialized!")};function Ka(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$a;return function(){return Ba.useContext(e)}}var Qa=Ka(),qa=Va,Ya=(e,t)=>e===t;function Za(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$a;const t=e===$a?Qa:Ka(e),n=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{equalityFn:r=Ya,devModeChecks:a={}}="function"===typeof n?{equalityFn:n}:n;const{store:i,subscription:o,getServerState:l,stabilityCheck:s,identityFunctionCheck:u}=t(),c=(Ba.useRef(!0),Ba.useCallback({[e.name]:t=>e(t)}[e.name],[e,s,a.stabilityCheck])),d=qa(o.addNestedSub,i.getState,l||i.getState,c,r);return Ba.useDebugValue(d),d};return Object.assign(n,{withTypes:()=>n}),n}var Ga=Za();Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.server_context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.suspense_list"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.for("react.offscreen"),Symbol.for("react.client.reference");function Xa(e){e()}var Ja={notify(){},get:()=>[]};function ei(e,t){let n,r=Ja,a=0,i=!1;function o(){u.onStateChange&&u.onStateChange()}function l(){a++,n||(n=t?t.addNestedSub(o):e.subscribe(o),r=function(){let e=null,t=null;return{clear(){e=null,t=null},notify(){Xa((()=>{let t=e;for(;t;)t.callback(),t=t.next}))},get(){const t=[];let n=e;for(;n;)t.push(n),n=n.next;return t},subscribe(n){let r=!0;const a=t={callback:n,next:null,prev:t};return a.prev?a.prev.next=a:e=a,function(){r&&null!==e&&(r=!1,a.next?a.next.prev=a.prev:t=a.prev,a.prev?a.prev.next=a.next:e=a.next)}}}}())}function s(){a--,n&&0===a&&(n(),n=void 0,r.clear(),r=Ja)}const u={addNestedSub:function(e){l();const t=r.subscribe(e);let n=!1;return()=>{n||(n=!0,t(),s())}},notifyNestedSubs:function(){r.notify()},handleChangeWrapper:o,isSubscribed:function(){return i},trySubscribe:function(){i||(i=!0,l())},tryUnsubscribe:function(){i&&(i=!1,s())},getListeners:()=>r};return u}var ti=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ni="undefined"!==typeof navigator&&"ReactNative"===navigator.product,ri=ti||ni?Ba.useLayoutEffect:Ba.useEffect;Object.defineProperty,Object.getOwnPropertyNames,Object.getOwnPropertySymbols,Object.getOwnPropertyDescriptor,Object.getPrototypeOf,Object.prototype;var ai=function(e){let{store:t,context:n,children:r,serverState:a,stabilityCheck:i="once",identityFunctionCheck:o="once"}=e;const l=Ba.useMemo((()=>{const e=ei(t);return{store:t,subscription:e,getServerState:a?()=>a:void 0,stabilityCheck:i,identityFunctionCheck:o}}),[t,a,i,o]),s=Ba.useMemo((()=>t.getState()),[t]);ri((()=>{const{subscription:e}=l;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),s!==t.getState()&&e.notifyNestedSubs(),()=>{e.tryUnsubscribe(),e.onStateChange=void 0}}),[l,s]);const u=n||$a;return Ba.createElement(u.Provider,{value:l},r)};function ii(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$a;const t=e===$a?Qa:Ka(e),n=()=>{const{store:e}=t();return e};return Object.assign(n,{withTypes:()=>n}),n}var oi=ii();function li(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$a;const t=e===$a?oi:ii(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var si,ui=li();function ci(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}si=Ma.useSyncExternalStoreWithSelector,qa=si,(e=>{e})(t.useSyncExternalStore);var di=(()=>"function"===typeof Symbol&&Symbol.observable||"@@observable")(),fi=()=>Math.random().toString(36).substring(7).split("").join("."),pi={INIT:`@@redux/INIT${fi()}`,REPLACE:`@@redux/REPLACE${fi()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${fi()}`};function hi(e){if("object"!==typeof e||null===e)return!1;let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||null===Object.getPrototypeOf(e)}function mi(e,t,n){if("function"!==typeof e)throw new Error(ci(2));if("function"===typeof t&&"function"===typeof n||"function"===typeof n&&"function"===typeof arguments[3])throw new Error(ci(0));if("function"===typeof t&&"undefined"===typeof n&&(n=t,t=void 0),"undefined"!==typeof n){if("function"!==typeof n)throw new Error(ci(1));return n(mi)(e,t)}let r=e,a=t,i=new Map,o=i,l=0,s=!1;function u(){o===i&&(o=new Map,i.forEach(((e,t)=>{o.set(t,e)})))}function c(){if(s)throw new Error(ci(3));return a}function d(e){if("function"!==typeof e)throw new Error(ci(4));if(s)throw new Error(ci(5));let t=!0;u();const n=l++;return o.set(n,e),function(){if(t){if(s)throw new Error(ci(6));t=!1,u(),o.delete(n),i=null}}}function f(e){if(!hi(e))throw new Error(ci(7));if("undefined"===typeof e.type)throw new Error(ci(8));if("string"!==typeof e.type)throw new Error(ci(17));if(s)throw new Error(ci(9));try{s=!0,a=r(a,e)}finally{s=!1}return(i=o).forEach((e=>{e()})),e}f({type:pi.INIT});return{dispatch:f,subscribe:d,getState:c,replaceReducer:function(e){if("function"!==typeof e)throw new Error(ci(10));r=e,f({type:pi.REPLACE})},[di]:function(){const e=d;return{subscribe(t){if("object"!==typeof t||null===t)throw new Error(ci(11));function n(){const e=t;e.next&&e.next(c())}n();return{unsubscribe:e(n)}},[di](){return this}}}}}function gi(e){const t=Object.keys(e),n={};for(let i=0;i<t.length;i++){const r=t[i];0,"function"===typeof e[r]&&(n[r]=e[r])}const r=Object.keys(n);let a;try{!function(e){Object.keys(e).forEach((t=>{const n=e[t];if("undefined"===typeof n(void 0,{type:pi.INIT}))throw new Error(ci(12));if("undefined"===typeof n(void 0,{type:pi.PROBE_UNKNOWN_ACTION()}))throw new Error(ci(13))}))}(n)}catch($d){a=$d}return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(a)throw a;let i=!1;const o={};for(let a=0;a<r.length;a++){const l=r[a],s=n[l],u=e[l],c=s(u,t);if("undefined"===typeof c){t&&t.type;throw new Error(ci(14))}o[l]=c,i=i||c!==u}return i=i||r.length!==Object.keys(e).length,i?o:e}}function vi(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?e=>e:1===t.length?t[0]:t.reduce(((e,t)=>function(){return e(t(...arguments))}))}function yi(e){return t=>{let{dispatch:n,getState:r}=t;return t=>a=>"function"===typeof a?a(n,r,e):t(a)}}var xi=yi(),bi=yi,wi=Symbol.for("immer-nothing"),Si=Symbol.for("immer-draftable"),ki=Symbol.for("immer-state");function Ci(e){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Ei=Object.getPrototypeOf;function ji(e){return!!e&&!!e[ki]}function _i(e){return!!e&&(Ai(e)||Array.isArray(e)||!!e[Si]||!!e.constructor?.[Si]||zi(e)||Li(e))}var Pi=Object.prototype.constructor.toString();function Ai(e){if(!e||"object"!==typeof e)return!1;const t=Ei(e);if(null===t)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===Pi}function Ri(e,t){0===Ni(e)?Reflect.ownKeys(e).forEach((n=>{t(n,e[n],e)})):e.forEach(((n,r)=>t(r,n,e)))}function Ni(e){const t=e[ki];return t?t.type_:Array.isArray(e)?1:zi(e)?2:Li(e)?3:0}function Ti(e,t){return 2===Ni(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Oi(e,t,n){const r=Ni(e);2===r?e.set(t,n):3===r?e.add(n):e[t]=n}function zi(e){return e instanceof Map}function Li(e){return e instanceof Set}function Fi(e){return e.copy_||e.base_}function Di(e,t){if(zi(e))return new Map(e);if(Li(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=Ai(e);if(!0===t||"class_only"===t&&!n){const t=Object.getOwnPropertyDescriptors(e);delete t[ki];let n=Reflect.ownKeys(t);for(let r=0;r<n.length;r++){const a=n[r],i=t[a];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[a]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[a]})}return Object.create(Ei(e),t)}{const t=Ei(e);if(null!==t&&n)return{...e};const r=Object.create(t);return Object.assign(r,e)}}function Ii(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Bi(e)||ji(e)||!_i(e)||(Ni(e)>1&&(e.set=e.add=e.clear=e.delete=Mi),Object.freeze(e),t&&Object.entries(e).forEach((e=>{let[t,n]=e;return Ii(n,!0)}))),e}function Mi(){Ci(2)}function Bi(e){return Object.isFrozen(e)}var Ui,Hi={};function Wi(e){const t=Hi[e];return t||Ci(0),t}function $i(){return Ui}function Vi(e,t){t&&(Wi("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Ki(e){Qi(e),e.drafts_.forEach(Yi),e.drafts_=null}function Qi(e){e===Ui&&(Ui=e.parent_)}function qi(e){return Ui={drafts_:[],parent_:Ui,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Yi(e){const t=e[ki];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function Zi(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return void 0!==e&&e!==n?(n[ki].modified_&&(Ki(t),Ci(4)),_i(e)&&(e=Gi(t,e),t.parent_||Ji(t,e)),t.patches_&&Wi("Patches").generateReplacementPatches_(n[ki].base_,e,t.patches_,t.inversePatches_)):e=Gi(t,n,[]),Ki(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==wi?e:void 0}function Gi(e,t,n){if(Bi(t))return t;const r=t[ki];if(!r)return Ri(t,((a,i)=>Xi(e,r,t,a,i,n))),t;if(r.scope_!==e)return t;if(!r.modified_)return Ji(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const t=r.copy_;let a=t,i=!1;3===r.type_&&(a=new Set(t),t.clear(),i=!0),Ri(a,((a,o)=>Xi(e,r,t,a,o,n,i))),Ji(e,t,!1),n&&e.patches_&&Wi("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function Xi(e,t,n,r,a,i,o){if(ji(a)){const o=Gi(e,a,i&&t&&3!==t.type_&&!Ti(t.assigned_,r)?i.concat(r):void 0);if(Oi(n,r,o),!ji(o))return;e.canAutoFreeze_=!1}else o&&n.add(a);if(_i(a)&&!Bi(a)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Gi(e,a),t&&t.scope_.parent_||"symbol"===typeof r||!Object.prototype.propertyIsEnumerable.call(n,r)||Ji(e,a)}}function Ji(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Ii(t,n)}var eo={get(e,t){if(t===ki)return e;const n=Fi(e);if(!Ti(n,t))return function(e,t,n){const r=ro(t,n);return r?"value"in r?r.value:r.get?.call(e.draft_):void 0}(e,n,t);const r=n[t];return e.finalized_||!_i(r)?r:r===no(e.base_,t)?(io(e),e.copy_[t]=oo(r,e)):r},has:(e,t)=>t in Fi(e),ownKeys:e=>Reflect.ownKeys(Fi(e)),set(e,t,n){const r=ro(Fi(e),t);if(r?.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const r=no(Fi(e),t),a=r?.[ki];if(a&&a.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}(n,r)&&(void 0!==n||Ti(e.base_,t)))return!0;io(e),ao(e)}return e.copy_[t]===n&&(void 0!==n||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==no(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,io(e),ao(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const n=Fi(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty(){Ci(11)},getPrototypeOf:e=>Ei(e.base_),setPrototypeOf(){Ci(12)}},to={};function no(e,t){const n=e[ki];return(n?Fi(n):e)[t]}function ro(e,t){if(!(t in e))return;let n=Ei(e);for(;n;){const e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=Ei(n)}}function ao(e){e.modified_||(e.modified_=!0,e.parent_&&ao(e.parent_))}function io(e){e.copy_||(e.copy_=Di(e.base_,e.scope_.immer_.useStrictShallowCopy_))}Ri(eo,((e,t)=>{to[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),to.deleteProperty=function(e,t){return to.set.call(this,e,t,void 0)},to.set=function(e,t,n){return eo.set.call(this,e[0],t,n,e[0])};function oo(e,t){const n=zi(e)?Wi("MapSet").proxyMap_(e,t):Li(e)?Wi("MapSet").proxySet_(e,t):function(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:$i(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let a=r,i=eo;n&&(a=[r],i=to);const{revoke:o,proxy:l}=Proxy.revocable(a,i);return r.draft_=l,r.revoke_=o,l}(e,t);return(t?t.scope_:$i()).drafts_.push(n),n}function lo(e){if(!_i(e)||Bi(e))return e;const t=e[ki];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Di(e,t.scope_.immer_.useStrictShallowCopy_)}else n=Di(e,!0);return Ri(n,((e,t)=>{Oi(n,e,lo(t))})),t&&(t.finalized_=!1),n}var so=new class{constructor(e){var t=this;this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,n)=>{if("function"===typeof e&&"function"!==typeof t){const n=t;t=e;const r=this;return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n;for(var a=arguments.length,i=new Array(a>1?a-1:0),o=1;o<a;o++)i[o-1]=arguments[o];return r.produce(e,(e=>t.call(this,e,...i)))}}let r;if("function"!==typeof t&&Ci(6),void 0!==n&&"function"!==typeof n&&Ci(7),_i(e)){const a=qi(this),i=oo(e,void 0);let o=!0;try{r=t(i),o=!1}finally{o?Ki(a):Qi(a)}return Vi(a,n),Zi(r,a)}if(!e||"object"!==typeof e){if(r=t(e),void 0===r&&(r=e),r===wi&&(r=void 0),this.autoFreeze_&&Ii(r,!0),n){const t=[],a=[];Wi("Patches").generateReplacementPatches_(e,r,t,a),n(t,a)}return r}Ci(1)},this.produceWithPatches=(e,n)=>{if("function"===typeof e)return function(n){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];return t.produceWithPatches(n,(t=>e(t,...a)))};let r,a;return[this.produce(e,n,((e,t)=>{r=e,a=t})),r,a]},"boolean"===typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"===typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){_i(e)||Ci(8),ji(e)&&(e=function(e){ji(e)||Ci(10);return lo(e)}(e));const t=qi(this),n=oo(e,void 0);return n[ki].isManual_=!0,Qi(t),n}finishDraft(e,t){const n=e&&e[ki];n&&n.isManual_||Ci(9);const{scope_:r}=n;return Vi(r,t),Zi(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));const r=Wi("Patches").applyPatches_;return ji(e)?r(e,t):this.produce(e,(e=>r(e,t)))}},uo=so.produce;so.produceWithPatches.bind(so),so.setAutoFreeze.bind(so),so.setUseStrictShallowCopy.bind(so),so.applyPatches.bind(so),so.createDraft.bind(so),so.finishDraft.bind(so);var co="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?vi:vi.apply(null,arguments)};"undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;function fo(e,t){function n(){if(t){let n=t(...arguments);if(!n)throw new Error(Po(0));return{type:e,payload:n.payload,..."meta"in n&&{meta:n.meta},..."error"in n&&{error:n.error}}}return{type:e,payload:arguments.length<=0?void 0:arguments[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=t=>function(e){return hi(e)&&"type"in e&&"string"===typeof e.type}(t)&&t.type===e,n}var po=class e extends Array{constructor(){super(...arguments),Object.setPrototypeOf(this,e.prototype)}static get[Symbol.species](){return e}concat(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return super.concat.apply(this,t)}prepend(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return 1===n.length&&Array.isArray(n[0])?new e(...n[0].concat(this)):new e(...n.concat(this))}};function ho(e){return _i(e)?uo(e,(()=>{})):e}function mo(e,t,n){if(e.has(t)){let r=e.get(t);return n.update&&(r=n.update(r,t,e),e.set(t,r)),r}if(!n.insert)throw new Error(Po(10));const r=n.insert(t,e);return e.set(t,r),r}var go="RTK_autoBatch",vo=e=>t=>{setTimeout(t,e)},yo="undefined"!==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame:vo(10),xo=e=>function(t){const{autoBatch:n=!0}=t??{};let r=new po(e);return n&&r.push(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{type:"raf"};return t=>function(){const n=t(...arguments);let r=!0,a=!1,i=!1;const o=new Set,l="tick"===e.type?queueMicrotask:"raf"===e.type?yo:"callback"===e.type?e.queueNotification:vo(e.timeout),s=()=>{i=!1,a&&(a=!1,o.forEach((e=>e())))};return Object.assign({},n,{subscribe(e){const t=n.subscribe((()=>r&&e()));return o.add(e),()=>{t(),o.delete(e)}},dispatch(e){try{return r=!e?.meta?.[go],a=!r,a&&(i||(i=!0,l(s))),n.dispatch(e)}finally{r=!0}}})}}("object"===typeof n?n:void 0)),r};function bo(e){const t={},n=[];let r;const a={addCase(e,n){const r="string"===typeof e?e:e.type;if(!r)throw new Error(Po(28));if(r in t)throw new Error(Po(29));return t[r]=n,a},addMatcher:(e,t)=>(n.push({matcher:e,reducer:t}),a),addDefaultCase:e=>(r=e,a)};return e(a),[t,n,r]}var wo=Symbol.for("rtk-slice-createasyncthunk");function So(e,t){return`${e}/${t}`}function ko(){let{creators:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=e?.asyncThunk?.[wo];return function(e){const{name:n,reducerPath:r=n}=e;if(!n)throw new Error(Po(11));const a=("function"===typeof e.reducers?e.reducers(function(){function e(e,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...t}}return e.withTypes=()=>e,{reducer:e=>Object.assign({[e.name](){return e(...arguments)}}[e.name],{_reducerDefinitionType:"reducer"}),preparedReducer:(e,t)=>({_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:t}),asyncThunk:e}}()):e.reducers)||{},i=Object.keys(a),o={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},l={addCase(e,t){const n="string"===typeof e?e:e.type;if(!n)throw new Error(Po(12));if(n in o.sliceCaseReducersByType)throw new Error(Po(13));return o.sliceCaseReducersByType[n]=t,l},addMatcher:(e,t)=>(o.sliceMatchers.push({matcher:e,reducer:t}),l),exposeAction:(e,t)=>(o.actionCreators[e]=t,l),exposeCaseReducer:(e,t)=>(o.sliceCaseReducersByName[e]=t,l)};function s(){const[t={},n=[],r]="function"===typeof e.extraReducers?bo(e.extraReducers):[e.extraReducers],a={...t,...o.sliceCaseReducersByType};return function(e,t){let n,[r,a,i]=bo(t);if(function(e){return"function"===typeof e}(e))n=()=>ho(e());else{const t=ho(e);n=()=>t}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n(),t=arguments.length>1?arguments[1]:void 0,o=[r[t.type],...a.filter((e=>{let{matcher:n}=e;return n(t)})).map((e=>{let{reducer:t}=e;return t}))];return 0===o.filter((e=>!!e)).length&&(o=[i]),o.reduce(((e,n)=>{if(n){if(ji(e)){const r=n(e,t);return void 0===r?e:r}if(_i(e))return uo(e,(e=>n(e,t)));{const r=n(e,t);if(void 0===r){if(null===e)return e;throw new Error(Po(9))}return r}}return e}),e)}return o.getInitialState=n,o}(e.initialState,(e=>{for(let t in a)e.addCase(t,a[t]);for(let t of o.sliceMatchers)e.addMatcher(t.matcher,t.reducer);for(let t of n)e.addMatcher(t.matcher,t.reducer);r&&e.addDefaultCase(r)}))}i.forEach((r=>{const i=a[r],o={reducerName:r,type:So(n,r),createNotation:"function"===typeof e.reducers};!function(e){return"asyncThunk"===e._reducerDefinitionType}(i)?function(e,t,n){let r,a,{type:i,reducerName:o,createNotation:l}=e;if("reducer"in t){if(l&&!function(e){return"reducerWithPrepare"===e._reducerDefinitionType}(t))throw new Error(Po(17));r=t.reducer,a=t.prepare}else r=t;n.addCase(i,r).exposeCaseReducer(o,r).exposeAction(o,a?fo(i,a):fo(i))}(o,i,l):function(e,t,n,r){let{type:a,reducerName:i}=e;if(!r)throw new Error(Po(18));const{payloadCreator:o,fulfilled:l,pending:s,rejected:u,settled:c,options:d}=t,f=r(a,o,d);n.exposeAction(i,f),l&&n.addCase(f.fulfilled,l);s&&n.addCase(f.pending,s);u&&n.addCase(f.rejected,u);c&&n.addMatcher(f.settled,c);n.exposeCaseReducer(i,{fulfilled:l||jo,pending:s||jo,rejected:u||jo,settled:c||jo})}(o,i,l,t)}));const u=e=>e,c=new Map;let d;function f(e,t){return d||(d=s()),d(e,t)}function p(){return d||(d=s()),d.getInitialState()}function h(t){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];function r(e){let r=e[t];return"undefined"===typeof r&&n&&(r=p()),r}function a(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;const r=mo(c,n,{insert:()=>new WeakMap});return mo(r,t,{insert:()=>{const r={};for(const[a,i]of Object.entries(e.selectors??{}))r[a]=Co(i,t,p,n);return r}})}return{reducerPath:t,getSelectors:a,get selectors(){return a(r)},selectSlice:r}}const m={name:n,reducer:f,actions:o.actionCreators,caseReducers:o.sliceCaseReducersByName,getInitialState:p,...h(r),injectInto(e){let{reducerPath:t,...n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const a=t??r;return e.inject({reducerPath:a,reducer:f},n),{...m,...h(a,!0)}}};return m}}function Co(e,t,n,r){function a(a){let i=t(a);"undefined"===typeof i&&r&&(i=n());for(var o=arguments.length,l=new Array(o>1?o-1:0),s=1;s<o;s++)l[s-1]=arguments[s];return e(i,...l)}return a.unwrapped=e,a}var Eo=ko();function jo(){}var{assign:_o}=Object;Symbol.for("rtk-state-proxy-original");function Po(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const Ao=Eo({name:"cart",initialState:{itemsInCart:[]},reducers:{addProduct:(e,t)=>{let n=e.itemsInCart.find((e=>e.id===t.payload.id));void 0===n?e.itemsInCart.push(t.payload):n.count++},deleteProduct:(e,t)=>{let n=e.itemsInCart.findIndex((e=>e.id===t.payload.id));e.itemsInCart.splice(n,1)},productCountIncrement:(e,t)=>{let n=e.itemsInCart.findIndex((e=>e.id===t.payload.id));e.itemsInCart[n].count++},productCountDecrement:(e,t)=>{let n=e.itemsInCart.findIndex((e=>e.id===t.payload.id));e.itemsInCart[n].count>0&&e.itemsInCart[n].count--}}}),{addProduct:Ro,deleteProduct:No,productCountIncrement:To,productCountDecrement:Oo}=Ao.actions,zo=Ao.reducer;var Lo=n(579);const Fo=Da.div`
  width: 600px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`,Do=Da.div`
  margin-bottom: 22px;
  display: flex;
  justify-content: space-between;
`,Io=Da.div`
  width: 11px;
  height: 11px;
  border: 3px solid white;
  border-radius: 50%;
  margin-right: 12px;
`,Mo=Da.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 25.36px;
  color: #ffffff;
  margin: 0;
`,Bo=Da.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  color: #ffffff;
  margin: 0;
`,Uo=Da.div`
  max-width: 393px;
  width: 100%;
  margin-left: 10px;
  margin-right: 10px;
`,Ho=Da.div`
  display: flex;
  margin-top: 31px;
`,Wo=Da.p`
  font-family: Floreste;
  font-size: 28px;
  font-weight: 400;
  line-height: 26.6px;
  color: white;
  margin: 0;
`,$o=Da.p`
  font-family: Euclid Circular A;
  font-size: 20px;
  font-weight: 400;
  line-height: 16.36px;
  color: white;
  margin: 0;
  margin-left: 20px;
`,Vo=Da.div`
  display: flex;
  justify-content: space-between;
  width: 117px;
  align-items: center;
  margin-top: 15px;
`,Ko=Da.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  lin-height: 23px;
  color: white;
  margin: 0;
`,Qo=Da.div`
  width: 189px;
  height: 93px;
  border-radius: 50%;
  border: 2px solid #d9ff5a;
  background-color: #ebe3ff30;
  transform: rotate(-6deg);
  display: flex;
  align-items: center;
  justify-content: center;
`,qo=Da.p`
  font-family: Euclid Circular A;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  margin: 0px;
  color: white;
  transform: rotate(6deg);
`,Yo=Da.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 48px;
`,Zo=Da.p`
  font-family: Floreste;
  font-size: 50px;
  font-weight: 500;
  line-height: 50px;
  color: white;
  margin: 0;
  margin-top: 10px;
`,Go=Da.button`
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
`,Xo=Da(Dt)`
  outline: none;
  text-decoration: none;
  border-radius: 50%;

  &:hover,
  &:focus-visible {
    cursor: pointer;

    .button-text {
      color: #d9ff5a;
    }
  }
`;function Jo(){const e=Ga((e=>e.cart.itemsInCart)),t=ui();if(0===e.length)return(0,Lo.jsx)(Yo,{children:(0,Lo.jsx)(Zo,{children:"\u0412\u0410\u0428\u0410 \u041a\u041e\u0420\u0417\u0418\u041d\u0410 \u041f\u0423\u0421\u0422\u0410"})});let n=0;for(let r=0;r<e.length;r++){let t=Number(e[r].price.replaceAll(" ",""));n+=e[r].count*t}return(0,Lo.jsxs)(Yo,{children:[(0,Lo.jsx)("p",{style:{fontFamily:"Euclid Circular A",fontWeight:"500",fontSize:"18px",lineHeight:"22.82px",margin:0,color:"white",marginBottom:53,marginRight:"auto"},children:"\u0412\u0410\u0428\u0410 \u041a\u041e\u0420\u0417\u0418\u041d\u0410"}),(0,Lo.jsx)("div",{style:{maxHeight:"750px",overflowY:"scroll"},children:e.map((e=>(0,Lo.jsxs)(Fo,{children:[(0,Lo.jsx)("img",{style:{height:"90%"},src:e.image,alt:"itemImage"}),(0,Lo.jsxs)(Uo,{children:[(0,Lo.jsxs)(Do,{children:[(0,Lo.jsxs)("div",{children:[(0,Lo.jsxs)("div",{style:{display:"flex",alignItems:"center",marginBottom:13},children:[(0,Lo.jsx)(Io,{style:{backgroundColor:`${e.background}`}}),(0,Lo.jsx)(Mo,{children:e.name})]}),(0,Lo.jsx)(Bo,{children:e.category})]}),(0,Lo.jsx)("input",{style:{marginLeft:10,outline:"none"},type:"image",src:Ia,alt:"trash",onClick:n=>{n.stopPropagation(),t(No(e))}})]}),(0,Lo.jsx)("div",{style:{width:"100%",border:"2px solid #D9FF5A"}}),(0,Lo.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,Lo.jsxs)(Ho,{children:[(0,Lo.jsx)(Wo,{children:e.price}),(0,Lo.jsx)($o,{children:"\u20bd"})]}),(0,Lo.jsxs)(Vo,{children:[(0,Lo.jsx)(Go,{className:"decrement",onClick:n=>{n.stopPropagation(),t(Oo(e))},children:(0,Lo.jsx)("p",{style:{fontFamily:"Euclid Circular A",fontSize:"18px",fontWeight:500,margin:0,color:"#FFFFFF30"},children:"-"})}),(0,Lo.jsx)(Ko,{children:e.count}),(0,Lo.jsx)(Go,{className:"increment",onClick:n=>{n.stopPropagation(),t(To(e))},children:(0,Lo.jsx)("p",{style:{fontFamily:"Euclid Circular A",fontSize:"18px",fontWeight:500,margin:0,color:"#FFFFFF"},children:"+"})})]})]})]})]},e.id)))}),(0,Lo.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:522,marginTop:"20px"},children:[(0,Lo.jsxs)("div",{children:[(0,Lo.jsx)("p",{style:{fontWeight:500,fontFamily:"Euclid Circular A",fontSize:"20px",lineHeight:"25.36px",margin:0,color:"white"},children:"\u0418\u0422\u041e\u0413\u041e:"}),(0,Lo.jsxs)("div",{style:{display:"flex",marginTop:15},children:[(0,Lo.jsx)(Wo,{style:{fontSize:"40px",lineHeight:"38px"},children:n}),(0,Lo.jsx)($o,{children:"\u20bd"})]})]}),(0,Lo.jsx)(Xo,{to:"/order",onClick:()=>window.CartHandler.close(),children:(0,Lo.jsx)(Qo,{children:(0,Lo.jsx)(qo,{className:"button-text",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c"})})})]})]})}const el=n.p+"static/media/lamp-wave1.74c72fc78da595d97fd5.png",tl=n.p+"static/media/lamp-wave2.0b15d007ed72feb5ec90.png",nl=n.p+"static/media/lamp-wave3.106ed1de066d2d4a818b.png";const rl=n.p+"static/media/heartInCircle.0c696194692096f0ba1f55083ea9d963.svg",al=[{name:"COPPELIA",category:"\u041b\u0430\u043c\u043f\u0430 \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u0430\u044f",color:"#29D0D9",price:"150 000",count:1,image:el},{name:"FACCHETTA",category:"\u041b\u0430\u043c\u043f\u0430 \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u0430\u044f",color:"#FFC4A5",price:"150 000",count:1,image:tl},{name:"COPPELIA",category:"\u041b\u0430\u043c\u043f\u0430 \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u0430\u044f",color:"#FA8EEF",price:"150 000",count:1,image:nl}],il=Da.div`
  width: 523px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
`,ol=Da.div`
  margin-bottom: 22px;
  display: flex;
  justify-content: space-between;
`,ll=Da.div`
  width: 11px;
  height: 11px;
  border: 3px solid white;
  border-radius: 50%;
  margin-right: 12px;
`,sl=Da.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 25.36px;
  color: #ffffff;
  margin: 0;
`,ul=Da.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  color: #ffffff;
  margin: 0;
`,cl=Da.div`
  width: 393px;
`,dl=Da.div`
  display: flex;
  justify-content: space-between;
  width: 95px;
  margin-top: 31px;
`,fl=Da.p`
  font-family: Floreste;
  font-size: 28px;
  font-weight: 400;
  line-height: 26.6px;
  color: white;
  margin: 0;
`,pl=Da.p`
  font-family: Euclid Circular A;
  font-size: 20px;
  font-weight: 400;
  line-height: 16.36px;
  color: white;
  margin: 0;
`;function hl(){return(0,Lo.jsxs)("div",{style:{margin:"48px"},children:[(0,Lo.jsx)("p",{style:{fontFamily:"Euclid Circular A",fontWeight:"500",fontSize:"18px",lineHeight:"22.82px",margin:0,color:"white",marginBottom:50},children:"\u0422\u041e\u0412\u0410\u0420\u042b \u0412 \u0418\u0417\u0411\u0420\u0410\u041d\u041d\u041e\u041c"}),al.map(((e,t)=>(0,Lo.jsxs)(il,{children:[(0,Lo.jsx)("img",{src:e.image,alt:"itemImage"}),(0,Lo.jsxs)(cl,{children:[(0,Lo.jsxs)(ol,{children:[(0,Lo.jsxs)("div",{children:[(0,Lo.jsxs)("div",{style:{display:"flex",alignItems:"center",marginBottom:13},children:[(0,Lo.jsx)(ll,{style:{backgroundColor:`${e.color}`}}),(0,Lo.jsx)(sl,{children:e.name})]}),(0,Lo.jsx)(ul,{children:e.category})]}),(0,Lo.jsx)("input",{style:{outline:"none"},type:"image",src:rl,alt:"heart"})]}),(0,Lo.jsx)("div",{style:{width:389,border:"2px solid #D9FF5A"}}),(0,Lo.jsx)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:(0,Lo.jsxs)(dl,{children:[(0,Lo.jsx)(fl,{children:e.price}),(0,Lo.jsx)(pl,{children:"\u20bd"})]})})]})]},t)))]})}const ml=Da.input`
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
`;function gl(e){let{placeholder:t,onChange:n,name:r,style:a}=e;return(0,Lo.jsx)(ml,{style:a,name:r,onChange:n,placeholder:t})}const vl=Da.div`
  width: 514px;
  margin: 48px;
`,yl=Da.h2`
  margin: 0;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  color: white;
`,xl=Da.form`
  margin-top: 66px;
`,bl=Da.button`
  width: 119px;
  height: 85px;
  border-radius: 50%;
  border: 2px solid #d9ff5a;
  color: white;
  background-color: #ebe3ff30;
  transform: rotate(-15deg);
  outline: none;

  &:hover,
  &:focus-visible {
    cursor: pointer;

    .button-text {
      color: #d9ff5a;
    }
  }
`,wl=Da.p`
  margin: 0;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  transform: rotate(15deg);
`,Sl=Da.p`
  margin: 0;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  color: white;
`,kl=Da.button`
  display: flex;
  background: unset;
  border: unset;
  align-items: center;
  justify-content: space-between;
  width: 185px;
  outline: none;

  &:hover,
  &:focus-visible {
    cursor: pointer;

    .link-text {
      color: #d9ff5a;
    }
    .link-svg {
      fill: #d9ff5a;
    }
  }
`;function Cl(){const[e,n]=(0,t.useState)(""),[r,a]=(0,t.useState)("");return(0,Lo.jsxs)(vl,{children:[(0,Lo.jsx)(yl,{children:"\u0412\u0425\u041e\u0414"}),(0,Lo.jsxs)(xl,{onSubmit:t=>function(t){t.stopPropagation(),t.preventDefault(),console.log(e,r)}(t),children:[(0,Lo.jsx)(gl,{style:{marginBottom:49,paddingBottom:20},name:"email",placeholder:"E-MAIL",onChange:e=>n(e.target.value)}),(0,Lo.jsx)(gl,{style:{marginBottom:49,paddingBottom:20},name:"password",placeholder:"\u041f\u0410\u0420\u041e\u041b\u042c",onChange:e=>a(e.target.value)}),(0,Lo.jsx)(bl,{type:"submit",children:(0,Lo.jsx)(wl,{className:"button-text",children:"\u0412\u043e\u0439\u0442\u0438"})})]}),(0,Lo.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:348,marginTop:68},children:[(0,Lo.jsx)(Sl,{children:"\u041d\u0415\u0422 \u0410\u041a\u041a\u0410\u0423\u041d\u0422\u0410?"}),(0,Lo.jsxs)(kl,{onClick:e=>{window.RegistrationHandler.show(),window.AuthorizationHandler.close()},children:[(0,Lo.jsx)(Sl,{className:"link-text",children:"\u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0410\u0426\u0418\u042f"}),(0,Lo.jsx)("svg",{className:"link-svg",width:"42",height:"16",viewBox:"0 0 42 16",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:(0,Lo.jsx)("path",{d:"M41.7071 8.70711C42.0976 8.31658 42.0976 7.68342 41.7071 7.29289L35.3431 0.928932C34.9526 0.538408 34.3195 0.538408 33.9289 0.928932C33.5384 1.31946 33.5384 1.95262 33.9289 2.34315L39.5858 8L33.9289 13.6569C33.5384 14.0474 33.5384 14.6805 33.9289 15.0711C34.3195 15.4616 34.9526 15.4616 35.3431 15.0711L41.7071 8.70711ZM0 9H41V7H0V9Z"})})]})]})]})}const El=Da.div`
  width: 514px;
  margin: 48px;
`,jl=Da.h2`
  margin: 0;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  color: white;
`,_l=Da.form`
  margin-top: 66px;
`,Pl=Da.button`
  width: 189px;
  height: 83px;
  border-radius: 50%;
  border: 2px solid #d9ff5a;
  color: white;
  background-color: #ebe3ff30;
  transform: rotate(-6deg);
  outline: none;

  &:hover,
  &:focus-visible {
    cursor: pointer;

    .button-text {
      color: #d9ff5a;
    }
  }
`,Al=Da.p`
  margin: 0;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  transform: rotate(6deg);
`,Rl=Da.p`
  margin: 0;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  color: white;
`,Nl=Da.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 108px;
  margin-top: 60px;
  background: unset;
  border: unset;
  outline: none;

  &:hover,
  &:focus-visible {
    cursor: pointer;

    .link-text {
      color: #d9ff5a;
    }
    .link-svg {
      fill: #d9ff5a;
    }
  }
`;function Tl(){const[e,n]=(0,t.useState)(""),[r,a]=(0,t.useState)(""),[i,o]=(0,t.useState)("");return(0,Lo.jsxs)(El,{children:[(0,Lo.jsx)(jl,{children:"\u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0410\u0426\u0418\u042f"}),(0,Lo.jsxs)(_l,{onSubmit:t=>function(t){t.stopPropagation(),t.preventDefault(),console.log(e,r,i)}(t),children:[(0,Lo.jsx)(gl,{style:{marginBottom:49,paddingBottom:20},name:"email",placeholder:"E-MAIL",onChange:e=>n(e.target.value)}),(0,Lo.jsx)(gl,{style:{marginBottom:49,paddingBottom:20},name:"password",placeholder:"\u041f\u0410\u0420\u041e\u041b\u042c",onChange:e=>a(e.target.value)}),(0,Lo.jsx)(gl,{style:{marginBottom:49,paddingBottom:20},name:"repeated-password",placeholder:"\u041f\u041e\u0412\u0422\u041e\u0420\u0418\u0422\u0415 \u041f\u0410\u0420\u041e\u041b\u042c",onChange:e=>o(e.target.value)}),(0,Lo.jsx)(Pl,{type:"submit",children:(0,Lo.jsx)(Al,{className:"button-text",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})]}),(0,Lo.jsxs)(Nl,{onClick:e=>{window.RegistrationHandler.close(),window.AuthorizationHandler.show()},children:[(0,Lo.jsx)("svg",{style:{transform:"rotate(180deg)"},className:"link-svg",width:"42",height:"16",viewBox:"0 0 42 16",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:(0,Lo.jsx)("path",{d:"M41.7071 8.70711C42.0976 8.31658 42.0976 7.68342 41.7071 7.29289L35.3431 0.928932C34.9526 0.538408 34.3195 0.538408 33.9289 0.928932C33.5384 1.31946 33.5384 1.95262 33.9289 2.34315L39.5858 8L33.9289 13.6569C33.5384 14.0474 33.5384 14.6805 33.9289 15.0711C34.3195 15.4616 34.9526 15.4616 35.3431 15.0711L41.7071 8.70711ZM0 9H41V7H0V9Z"})}),(0,Lo.jsx)(Rl,{className:"link-text",children:"\u0412\u0425\u041e\u0414"})]})]})}const Ol=n.p+"static/media/Arrow4.9f736a810db2fc148ba4e513f6039553.svg",zl=n.p+"static/media/map.d99fc41a11c0f93ee853.png";const Ll=n.p+"static/media/MarkOnMap.31868e8b89b9d14cd3e10175fa45dfc3.svg",Fl=Da.div`
  max-width: 950px;
  background-color: #ae97e8;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,Dl=Da.div`
  max-width: 850px;
  min-width: 400px;
  background-color: #fa8fef;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 50px 80px 20px;
`,Il=Da.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  color: #ffffff80;
  margin: 0;
  text-wrap: nowrap;
`,Ml=Da.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 60px;
  line-height: 76.08px;
  color: #ffffff;
  margin: 0;
  text-wrap: nowrap;
`,Bl=Da.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  color: #ffffff;
  margin: 0;
  text-wrap: nowrap;
`,Ul=Da.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 40px;
  line-height: 38px;
  color: #ffffff;
  margin: 0;
  text-wrap: nowrap;
`,Hl=Da.div`
  display: flex;
  width: 209px;
  justify-content: space-between;
`,Wl=Da.button`
  width: 189px;
  height: 93px;
  border: 2px solid #d9ff5a;
  transform: rotate(-6deg);
  background-color: #ebe3ff30;
  border-radius: 50%;
  outline: none;

  &:hover,
  &:focus-visible {
    cursor: pointer;

    .button-text {
      color: #d9ff5a;
    }
  }
`,$l=Da.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  margin: 0;
  transform: rotate(6deg);
`,Vl=Da.a`
  outline: none;
  &:hover,
  &:focus-visible {
    cursor: pointer;

    .link-svg {
      fill: #d9ff5a;
    }
  }
`;function Kl(){const[e,n]=(0,t.useState)(""),[r,a]=(0,t.useState)("");return(0,Lo.jsxs)("div",{style:{borderRadius:30,overflow:"hidden"},children:[(0,Lo.jsxs)("div",{style:{display:"flex",flexWrap:"wrap"},children:[(0,Lo.jsx)(Fl,{children:(0,Lo.jsxs)("div",{style:{display:"flex",maxWidth:690,width:"100%",justifyContent:"space-between",margin:"20px",flexWrap:"wrap",minWidth:"400px"},children:[(0,Lo.jsxs)("div",{children:[(0,Lo.jsx)(Il,{style:{marginBottom:35},children:"\u0410\u0414\u0420\u0415\u0421"}),(0,Lo.jsx)(Ml,{style:{marginBottom:26},children:"\u041c\u041e\u0421\u041a\u0412\u0410"}),(0,Lo.jsx)(Bl,{style:{marginBottom:122},children:"\u0423\u043b\u0438\u0446\u0430 \u041f\u0443\u0448\u043a\u0438\u043d\u0430, \u0434\u043e\u043c \u041a\u043e\u043b\u043e\u0442\u0443\u0448\u043a\u0438\u043d\u0430"}),(0,Lo.jsxs)("div",{style:{width:167,display:"flex",justifyContent:"space-between"},children:[(0,Lo.jsx)(Bl,{children:"\u0410\u0434\u0440\u0435\u0441 \u043d\u0430 \u043a\u0430\u0440\u0442\u0435"}),(0,Lo.jsx)("img",{src:Ol,alt:"arrow"})]})]}),(0,Lo.jsxs)("div",{style:{marginLeft:20},children:[(0,Lo.jsx)(Il,{style:{marginBottom:59},children:"\u0422\u0415\u041b\u0415\u0424\u041e\u041d"}),(0,Lo.jsx)(Ul,{style:{marginBottom:40},children:"+1 (111) 111-11-11"}),(0,Lo.jsx)(Bl,{style:{marginBottom:114},children:"\u041e\u0442\u0432\u0435\u0442\u0438\u043c \u043d\u0430 \u0432\u0441\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b"}),(0,Lo.jsxs)(Hl,{children:[(0,Lo.jsx)(Vl,{href:"google.com",children:(0,Lo.jsxs)("svg",{className:"link-svg",width:"40",height:"41",viewBox:"0 0 40 41",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:[(0,Lo.jsx)("circle",{cx:"19.8",cy:"20.5998",r:"19.8"}),(0,Lo.jsx)("path",{d:"M27.6993 14.6515L25.0586 27.1046C24.8593 27.9834 24.3399 28.2021 23.6018 27.7884L19.578 24.8234L17.6368 26.6909C17.4218 26.9059 17.2424 27.0853 16.828 27.0853L17.1174 22.9878L24.5743 16.2496C24.8986 15.9609 24.5036 15.8003 24.0705 16.0896L14.8517 21.8946L10.883 20.6521C10.0199 20.3828 10.0042 19.789 11.063 19.3746L26.5861 13.394C27.3049 13.1246 27.9336 13.554 27.6993 14.6521V14.6515Z",fill:"#AE97E8"})]})}),(0,Lo.jsx)(Vl,{href:"google.com",children:(0,Lo.jsxs)("svg",{className:"link-svg",width:"40",height:"41",viewBox:"0 0 40 41",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:[(0,Lo.jsx)("circle",{cx:"19.801",cy:"20.5998",r:"19.8"}),(0,Lo.jsx)("path",{d:"M28.001 16.2232C27.4126 16.4638 26.7805 16.6263 26.116 16.6998C26.8016 16.3213 27.3146 15.7255 27.5592 15.0238C26.915 15.3768 26.21 15.6253 25.4748 15.7584C24.9804 15.2714 24.3255 14.9486 23.6119 14.8401C22.8982 14.7316 22.1658 14.8436 21.5281 15.1585C20.8905 15.4735 20.3834 15.9738 20.0856 16.5819C19.7878 17.19 19.716 17.8717 19.8812 18.5213C18.5759 18.4609 17.299 18.1479 16.1334 17.6027C14.9677 17.0575 13.9394 16.2922 13.115 15.3566C12.8332 15.8052 12.6711 16.3253 12.6711 16.8792C12.6708 17.3778 12.8039 17.8688 13.0586 18.3086C13.3133 18.7484 13.6817 19.1234 14.1312 19.4003C13.6099 19.385 13.1002 19.255 12.6443 19.0213V19.0603C12.6443 19.7596 12.9065 20.4375 13.3865 20.9787C13.8664 21.52 14.5346 21.8915 15.2776 22.03C14.7941 22.1507 14.2871 22.1685 13.795 22.082C14.0047 22.6837 14.413 23.2099 14.9629 23.5869C15.5128 23.9639 16.1767 24.1728 16.8617 24.1844C15.6989 25.0266 14.2629 25.4834 12.7846 25.4814C12.5227 25.4815 12.261 25.4673 12.001 25.4391C13.5015 26.3292 15.2483 26.8016 17.0322 26.7998C23.0712 26.7998 26.3725 22.1853 26.3725 18.1833C26.3725 18.0533 26.369 17.922 26.3626 17.7919C27.0048 17.3635 27.5591 16.833 27.9996 16.2252L28.001 16.2232Z",fill:"#AE97E8"})]})}),(0,Lo.jsx)(Vl,{href:"google.com",children:(0,Lo.jsxs)("svg",{className:"link-svg",width:"40",height:"41",viewBox:"0 0 40 41",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:[(0,Lo.jsx)("circle",{cx:"20.1999",cy:"20.5998",r:"19.8"}),(0,Lo.jsx)("path",{d:"M24.0227 21.8252L24.4788 18.6641H21.6258V16.6136C21.6258 15.7488 22.0244 14.9049 23.3022 14.9049H24.5993V12.2136C24.5993 12.2136 23.4222 12 22.2966 12C19.947 12 18.4112 13.5139 18.4112 16.2548V18.6641H15.7993V21.8252H18.4112V29.4671C19.4762 29.6443 20.5607 29.6443 21.6258 29.4671V21.8252H24.0227Z",fill:"#AE97E8"})]})}),(0,Lo.jsx)(Vl,{href:"google.com",children:(0,Lo.jsxs)("svg",{className:"link-svg",width:"40",height:"41",viewBox:"0 0 40 41",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:[(0,Lo.jsx)("circle",{cx:"19.799",cy:"20.5998",r:"19.8"}),(0,Lo.jsx)("g",{clipPath:"url(#clip0_8103_1882)",children:(0,Lo.jsx)("path",{d:"M15.6498 27.5498H12.3845V17.0344H15.6498V27.5498ZM14.0151 15.6001C12.9711 15.6001 12.124 14.7349 12.124 13.6909C12.124 13.1894 12.3233 12.7084 12.6779 12.3537C13.0326 11.999 13.5136 11.7998 14.0151 11.7998C14.5167 11.7998 14.9977 11.999 15.3524 12.3537C15.707 12.7084 15.9063 13.1894 15.9063 13.6909C15.9063 14.7349 15.0591 15.6001 14.0151 15.6001ZM27.8706 27.5498H24.6126V22.4311C24.6126 21.211 24.5879 19.6467 22.915 19.6467C21.2174 19.6467 20.957 20.9719 20.957 22.3433V27.5498H17.695V17.0344H20.8265V18.4688H20.872C21.308 17.6425 22.3728 16.7706 23.9613 16.7706C27.266 16.7706 27.8735 18.9469 27.8735 21.7735V27.5498H27.8706Z",fill:"#AE97E8"})}),(0,Lo.jsx)("defs",{children:(0,Lo.jsx)("clipPath",{id:"clip0_8103_1882",children:(0,Lo.jsx)("rect",{width:"18",height:"18",fill:"white",transform:"translate(10.999 11.7998)"})})})]})})]})]})]})}),(0,Lo.jsx)(Dl,{children:(0,Lo.jsxs)("div",{style:{maxWidth:660,width:"100%"},children:[(0,Lo.jsx)(Il,{style:{marginBottom:53},children:"\u0424\u041e\u0420\u041c\u0410 \u041e\u0411\u0420\u0410\u0422\u041d\u041e\u0419 \u0421\u0412\u042f\u0417\u0418"}),(0,Lo.jsxs)("form",{onSubmit:t=>function(t){t.stopPropagation(),t.preventDefault(),console.log(e,r)}(t),children:[(0,Lo.jsx)(gl,{style:{marginBottom:63},placeholder:"E-MAIL",name:"email",onChange:e=>n(e.target.value)}),(0,Lo.jsx)(gl,{style:{marginBottom:59},placeholder:"\u0421\u041e\u041e\u0411\u0429\u0415\u041d\u0418\u0415",name:"message",onChange:e=>a(e.target.value)}),(0,Lo.jsx)(Wl,{type:"submit",children:(0,Lo.jsx)($l,{className:"button-text",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})]})})]}),(0,Lo.jsxs)("div",{style:{position:"relative",display:"flex",justifyContent:"center"},children:[(0,Lo.jsx)("div",{style:{position:"absolute",width:"100%",maxWidth:"1800px",display:"flex",justifyContent:"center",marginTop:"235px",marginLeft:"239px"},children:(0,Lo.jsx)("img",{src:Ll,alt:"mark"})}),(0,Lo.jsx)("img",{src:zl,alt:"map"})]})]})}const Ql=Da.button`
  border: none;
  outline: none;
  background: unset;
  position: absolute;
  top: 22px;
  right: 22px;

  &:hover,
  &:focus-visible {
    cursor: pointer;

    .button-svg {
      stroke: #d9ff5a;
    }
  }
`;function ql(e){let{style:t,onClick:n}=e;return(0,Lo.jsx)(Ql,{style:t,onClick:n,children:(0,Lo.jsxs)("svg",{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,Lo.jsx)("path",{className:"button-svg",d:"M27 9L9 27",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,Lo.jsx)("path",{className:"button-svg",d:"M9 9L27 27",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})})}const Yl=Da.p`
  color: white;
  font-family: Le Murmure;
  font-weight: 600;
  font-size: 45px;
  line-height: 50.45px;
  margin: 0;
  margin-left: 20px;
  white-space: nowrap;
`,Zl=Da.nav`
  display: flex;
  align-items: center;
  height: 37px;
  max-width: 1736px;
  position: absolute;
  width: 100%;
  top: 53px;
  z-index: 1;
`,Gl=Da.div`
  height: 6px;
  width: 6px;
  border-radius: 3px;
  background-color: white;
`,Xl=Da.p`
  margin: 0;
  margin-left: 5px;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  color: white;
`,Jl=Da.div`
  display: flex;
  align-items: center;
  height: 15px;
  width: 98px;
  justify-content: space-between;
  margin-left: 10px;
`,es=Da.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 13px;
  width: 155px;
`,ts=Da.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 26px;
  width: 94px;
`,ns=Da.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 132px;
  margin-right: 20px;
`,rs=Da.dialog`
  background-color: #3320652e;
  border: unset;
  padding: 0;
  top: 120px;
  margin-right: 20px;
  border-radius: 30px;
  backdrop-filter: blur(30px);
  position: absolute;
  z-index: 3;
`,as=Da.button`
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
  &:focus-visible {
    cursor: pointer;
    color: #d9ff5a;
  }
`,is=Da.dialog`
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
`,os=Da.button`
  margin-left: 10px;
  outline: none;
  border: none;
  background: unset;

  &:hover,
  &:focus-visible {
    cursor: pointer;

    .heart-svg,
    .cart-svg,
    .user-svg {
      fill: #d9ff5a !important;
    }
  }
`,ls=Da.span`
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
`;function ss(){const e=Ga((e=>e.cart.itemsInCart));return(0,Lo.jsxs)(Lo.Fragment,{children:[(0,Lo.jsxs)(Zl,{children:[(0,Lo.jsx)(Yl,{children:"Elfen lied"}),(0,Lo.jsx)("div",{style:{maxWidth:"133px",width:"100%"}}),(0,Lo.jsxs)(Jl,{children:[(0,Lo.jsxs)("div",{style:{height:15,width:15},children:[(0,Lo.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:3},children:[(0,Lo.jsx)(Gl,{}),(0,Lo.jsx)(Gl,{})]}),(0,Lo.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,Lo.jsx)(Gl,{}),(0,Lo.jsx)(Gl,{})]})]}),(0,Lo.jsx)(Xl,{children:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433"})]}),(0,Lo.jsx)("div",{style:{maxWidth:"387px",width:"100%"}}),(0,Lo.jsxs)(es,{children:[(0,Lo.jsx)(as,{onClick:e=>document.getElementById("blog").scrollIntoView({behavior:"smooth"}),children:"\u0411\u043b\u043e\u0433"}),(0,Lo.jsx)(as,{onClick:e=>{window.ContactHandler.showModal()},children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})]}),(0,Lo.jsx)("div",{style:{maxWidth:"360px",width:"100%"}}),(0,Lo.jsxs)(ts,{children:[(0,Lo.jsx)($t,{}),(0,Lo.jsx)(Xl,{children:"\u041f\u043e\u0438\u0441\u043a"})]}),(0,Lo.jsx)("div",{style:{maxWidth:"247px",width:"100%"}}),(0,Lo.jsxs)(ns,{children:[(0,Lo.jsx)(os,{onClick:e=>{window.FavoriteHandler.show(),window.CartHandler.close(),window.AuthorizationHandler.close(),window.RegistrationHandler.close()},children:(0,Lo.jsx)("svg",{className:"heart-svg",width:"22",height:"20",viewBox:"0 0 22 20",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:(0,Lo.jsx)("path",{d:"M15.884 0C13.893 0 12.111 0.988764 11 2.50562C9.889 0.988764 8.107 0 6.116 0C2.739 0 0 2.80899 0 6.2809C0 7.61798 0.209 8.85393 0.572 10C2.31 15.618 7.667 18.9775 10.318 19.8989C10.692 20.0337 11.308 20.0337 11.682 19.8989C14.333 18.9775 19.69 15.618 21.428 10C21.791 8.85393 22 7.61798 22 6.2809C22 2.80899 19.261 0 15.884 0Z"})})}),(0,Lo.jsx)(os,{onClick:e=>{window.AuthorizationHandler.show(),window.CartHandler.close(),window.FavoriteHandler.close(),window.RegistrationHandler.close()},children:(0,Lo.jsx)("svg",{className:"user-svg",width:"18",height:"21",viewBox:"0 0 18 21",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:(0,Lo.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14 5C14 7.76142 11.7614 10 9 10C6.23858 10 4 7.76142 4 5C4 2.23858 6.23858 0 9 0C11.7614 0 14 2.23858 14 5ZM0 19.5C0 15.36 4.0396 13 9 13C13.9604 13 18 15.36 18 19.5C18 20.585 17.4157 21 16.5149 21H1.48515C1.07905 21 0 21 0 19.5Z"})})}),(0,Lo.jsxs)("div",{style:{position:"relative",display:"flex"},children:[(0,Lo.jsx)(os,{onClick:e=>{window.CartHandler.show(),window.FavoriteHandler.close(),window.AuthorizationHandler.close(),window.RegistrationHandler.close()},children:(0,Lo.jsx)("svg",{className:"cart-svg",width:"21",height:"22",viewBox:"0 0 21 22",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:(0,Lo.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.71513 2.69L3.51817 5.14C3.47877 5.61 3.84315 6 4.30601 6H19.3833C19.7969 6 20.1416 5.68 20.1712 5.26C20.2992 3.49 18.9697 2.05 17.2266 2.05H5.12339C5.02491 1.61 4.82795 1.19 4.52266 0.84C4.03026 0.31 3.3409 0 2.63184 0H0.918289C0.51452 0 0.179688 0.34 0.179688 0.75C0.179688 1.16 0.51452 1.5 0.918289 1.5H2.63184C2.93713 1.5 3.22273 1.63 3.42953 1.85C3.63634 2.08 3.73482 2.38 3.71513 2.69ZM9.17969 20C9.17969 21.1046 8.28426 22 7.17969 22C6.07512 22 5.17969 21.1046 5.17969 20C5.17969 18.8954 6.07512 18 7.17969 18C8.28426 18 9.17969 18.8954 9.17969 20ZM17.1797 20C17.1797 21.1046 16.2843 22 15.1797 22C14.0751 22 13.1797 21.1046 13.1797 20C13.1797 18.8954 14.0751 18 15.1797 18C16.2843 18 17.1797 18.8954 17.1797 20ZM4.32925 8H19.4005C19.8623 8 20.216 8.37818 20.1767 8.82424L19.8525 13.3527C19.7444 14.8073 18.4475 16 16.9738 16H6.04859C4.36854 16 3.05202 14.5842 3.18956 12.9261L3.54326 8.70788C3.58256 8.3103 3.9166 8 4.32925 8Z"})})}),0!==e.length?(0,Lo.jsx)(ls,{children:e.length}):(0,Lo.jsx)(Lo.Fragment,{})]})]})]}),(0,Lo.jsxs)(rs,{id:"CartHandler",children:[(0,Lo.jsx)(ql,{onClick:e=>{window.CartHandler.close()}}),(0,Lo.jsx)(Jo,{})]}),(0,Lo.jsxs)(rs,{id:"FavoriteHandler",children:[(0,Lo.jsx)(ql,{onClick:e=>{window.FavoriteHandler.close()}}),(0,Lo.jsx)(hl,{})]}),(0,Lo.jsxs)(rs,{id:"AuthorizationHandler",children:[(0,Lo.jsx)(ql,{onClick:e=>{window.AuthorizationHandler.close()}}),(0,Lo.jsx)(Cl,{})]}),(0,Lo.jsxs)(rs,{id:"RegistrationHandler",children:[(0,Lo.jsx)(ql,{onClick:e=>{window.RegistrationHandler.close()}}),(0,Lo.jsx)(Tl,{})]}),(0,Lo.jsxs)(is,{id:"ContactHandler",children:[(0,Lo.jsx)(ql,{style:{position:"absolute",top:"22px",right:"20px"},onClick:e=>{window.ContactHandler.close()}}),(0,Lo.jsx)(Kl,{})]}),(0,Lo.jsx)(yt,{})]})}const us=n.p+"static/media/lamp3Big.3dd7383af04a80bf8ec6.png",cs=n.p+"static/media/chairBig.ae663ab087f7d0d3f925.png",ds=n.p+"static/media/tableBig.43c3666d23ddef101262.png",fs=n.p+"static/media/lamp3.6d542859f29e071a51bf.png",ps=n.p+"static/media/chair2.68bebcbdd478c002a9ef.png",hs=n.p+"static/media/table2.1df5b65263cca84dfcf0.png",ms=Da.button`
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
  &:focus-visible {
    cursor: pointer;
    border: 2px solid #d9ff5a;

    .slide-image {
      transform: perspective(100px) translateZ(10px);
    }
  }
`,gs=Da.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 70px;
  line-height: 66.5px;
  color: #cbb6ff;
  margin: 0;
  white-space: nowrap;
  position: absolute;
  top: 236px;
`,vs=Da.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 25.36px;
  color: #ffffff;
  margin: 0;
  margin-top: 300px;
`,ys=Da.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 23px;
  color: #ffffff;
  margin: 0;
  text-align: center;
  width: 275px;
  margin-top: 25px;
`,xs=Da.div`
  display: flex;
  width: 95px;
  justify-content: space-between;
  margin-top: 28px;
`,bs=Da.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 28px;
  line-height: 26.6px;
  color: #ffffff;
  margin: 0;
`,ws=Da.p`
  font-family: Euclid Circular A;
  font-weight: 400;
  font-size: 20px;
  line-height: 25.36px;
  color: #ffffff;
  margin: 0;
`,Ss=Da.img`
  position: absolute;
`;function ks(e){let{style:t,image:n,author:r,productCategory:a,productDescription:i,price:o,onClick:l}=e;return(0,Lo.jsxs)(ms,{style:{background:t.backgroundColor},onClick:l,children:[(0,Lo.jsxs)("div",{style:{display:"flex",flexDirection:"column",position:"relative",alignItems:"center",justifyContent:"center",width:290,height:425,top:200},children:[(0,Lo.jsx)(gs,{style:{color:t.color},children:r}),(0,Lo.jsx)(Ss,{className:"slide-image",src:n,alt:"defProductImage"})]}),(0,Lo.jsx)(vs,{children:a}),(0,Lo.jsx)(ys,{children:i}),(0,Lo.jsx)("div",{style:{width:"274px",height:"2px",background:"#FFFFFF33",marginTop:28}}),(0,Lo.jsxs)(xs,{children:[(0,Lo.jsx)(bs,{children:o}),(0,Lo.jsx)(ws,{children:"\u20bd"})]})]})}const Cs=[{id:0,style:{backgroundColor:"#C5B0FAB2",color:"#CBB6FF"},image:n.p+"static/media/lampDef.30cb2b1ddf29b8899304.png",author:"BENJAMIN MOORE",productCategory:"\u0421\u0412\u0415\u0422\u0418\u041b\u042c\u041d\u0418\u041a",productDescription:"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0441\u043a\u0430\u044f \u043b\u0430\u043c\u043f\u0430 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u043e\u0433\u043e \u043e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u044f",price:"150 000"},{id:1,style:{backgroundColor:"#FA8FEF",color:"#FFA8F6"},image:n.p+"static/media/chairDef.0039aedfacf6a3150bb8.png",author:"PAINT HERE GLORY",productCategory:"\u041a\u0420\u0415\u0421\u041b\u041e",productDescription:"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0441\u043a\u043e\u0435 \u043a\u0440\u0435\u0441\u043b\u043e \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u044c\u0435\u0440\u0430",price:"120 000"},{id:2,style:{backgroundColor:"#AECFFF",color:"#C8DEFF"},image:n.p+"static/media/tableDef.210ca3ce26fa0ed06520.png",author:"BENJAMIN MOORE",productCategory:"\u0421\u0422\u041e\u041b",productDescription:"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0441\u043a\u0430\u044f \u043b\u0430\u043c\u043f\u0430 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u043e\u0433\u043e \u043e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u044f",price:"235 000"}];function Es(e){let{onViewChange:t}=e;let n=[function(e){e.stopPropagation(),t[0]({firstSlide:!0,secondSlide:!1,thirdSlide:!1}),t[1](!1)},function(e){e.stopPropagation(),t[0]({firstSlide:!1,secondSlide:!0,thirdSlide:!1}),t[1](!1)},function(e){e.stopPropagation(),t[0]({firstSlide:!1,secondSlide:!1,thirdSlide:!0}),t[1](!1)}];return(0,Lo.jsx)(Lo.Fragment,{children:Cs.map(((e,t)=>(0,Lo.jsx)(ks,{style:e.style,image:e.image,author:e.author,productCategory:e.productCategory,productDescription:e.productDescription,price:e.price,onClick:e=>n[t](e)},e.id)))})}const js=Eo({name:"notification",initialState:{notifications:[]},reducers:{addNotification(e,t){e.notifications.push(t.payload)},deleteNotification(e){e.notifications.splice(0,1)}}}),{addNotification:_s,deleteNotification:Ps}=js.actions,As=js.reducer,Rs=Da.p`
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
`;function Ns(e){let{className:t}=e;return(0,Lo.jsx)(Rs,{className:t,children:"\u0422\u043e\u0432\u0430\u0440 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443!"})}const Ts=Da(Ns)`
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
`,Os=Da.div`
  display: flex;
  position: relative;
`;function zs(){return(0,Lo.jsxs)(Os,{children:[(0,Lo.jsx)(Ts,{className:"first-layer"}),(0,Lo.jsx)(Ts,{className:"second-layer"}),(0,Lo.jsx)(Ts,{className:"third-layer"})]})}const Ls=Da.p`
  margin: 0;
  font-family: Floreste;
  font-weight: 400;
  font-size: 212px;
  color: #cbb6ff99;
  text-wrap: nowrap;
  line-height: 201.4px;
`,Fs=Da.div`
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
`,Ds=Da.p`
  margin: 0;
  font-family: Euclid Circular A;
  color: #d9ff5a;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  margin-bottom: 31px;
`,Is=Da.div`
  width: 312px;
  height: 195px;
  margin-left: 60px;
`,Ms=Da.h2`
  margin: 0;
  font-family: Euclid Circular A;
  color: white;
  font-weight: 500;
  font-size: 28px;
  line-height: 35.5px;
  margin-bottom: 9px;
`,Bs=Da.p`
  margin: 0;
  font-family: Euclid Circular A;
  color: white;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  margin-bottom: 26px;
`,Us=Da.div`
  border: 0.5px solid #ffffff33;
  width: 274px;
  margin-bottom: 28px;
`,Hs=Da.div`
  display: flex;
  width: 127px;
  height: 28px;
  justify-content: space-between;
`,Ws=Da.p`
  margin: 0;
  font-family: Floreste;
  color: #d9ff5a;
  font-weight: 400;
  font-size: 40px;
  line-height: 38px;
`,$s=Da.p`
  margin: 0;
  font-family: Euclid Circular A;
  color: #d9ff5a;
  font-weight: 400;
  font-size: 20px;
  line-height: 15px;
`,Vs=Da.button`
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
  &:focus-visible {
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
`,Ks=Da.p`
  margin-left: 11px;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  color: white;
  z-index: 2;
`,Qs=Da.div`
  width: 352px;
  height: 131px;
  border: 2px solid #d9ff5a;
  position: absolute;
  border-radius: 50%;
`,qs=Da.div`
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 2;
`;function Ys(e){let{id:t,category:n,author:r,image:a,productName:i,productDescription:o,productPrice:l,background:s,color:u}=e;const c=Ga((e=>e.notification.notifications)),d=ui();return(0,Lo.jsxs)(Fs,{style:{background:s},children:[(0,Lo.jsxs)("div",{style:{position:"relative",top:406,marginBottom:140},children:[(0,Lo.jsx)(Ds,{children:"\u0422\u041e\u0412\u0410\u0420 \u0414\u041d\u042f"}),(0,Lo.jsx)(Ls,{className:"author-name",style:{color:u},children:r})]}),(0,Lo.jsx)("img",{className:"product-image",style:{position:"absolute",top:"155px"},src:a,alt:"productImage"}),(0,Lo.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%",position:"relative",top:400},children:[(0,Lo.jsxs)(Is,{children:[(0,Lo.jsx)(Ms,{children:i}),(0,Lo.jsx)(Bs,{children:o}),(0,Lo.jsx)(Us,{}),(0,Lo.jsxs)(Hs,{children:[(0,Lo.jsx)(Ws,{children:l}),(0,Lo.jsx)($s,{children:"\u20bd"})]})]}),(0,Lo.jsxs)(Vs,{background:"unset"!==s?s:"#ae97e8",onClick:e=>function(e){let r={id:t,count:1,image:a,background:s,name:i,price:l,category:n};e.stopPropagation(),d(Ro(r));let o=Date.now().toString();d(_s({id:o})),setTimeout((()=>{d(Ps())}),3e3)}(e),children:[(0,Lo.jsx)("svg",{style:{zIndex:2},className:"button-svg",width:"21",height:"22",viewBox:"0 0 21 22",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:(0,Lo.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.71513 2.69L3.51817 5.14C3.47877 5.61 3.84315 6 4.30601 6H19.3833C19.7969 6 20.1416 5.68 20.1712 5.26C20.2992 3.49 18.9697 2.05 17.2266 2.05H5.12339C5.02491 1.61 4.82795 1.19 4.52266 0.84C4.03026 0.31 3.3409 0 2.63184 0H0.918289C0.51452 0 0.179688 0.34 0.179688 0.75C0.179688 1.16 0.51452 1.5 0.918289 1.5H2.63184C2.93713 1.5 3.22273 1.63 3.42953 1.85C3.63634 2.08 3.73482 2.38 3.71513 2.69ZM9.17969 20C9.17969 21.1046 8.28426 22 7.17969 22C6.07512 22 5.17969 21.1046 5.17969 20C5.17969 18.8954 6.07512 18 7.17969 18C8.28426 18 9.17969 18.8954 9.17969 20ZM17.1797 20C17.1797 21.1046 16.2843 22 15.1797 22C14.0751 22 13.1797 21.1046 13.1797 20C13.1797 18.8954 14.0751 18 15.1797 18C16.2843 18 17.1797 18.8954 17.1797 20ZM4.32925 8H19.4005C19.8623 8 20.216 8.37818 20.1767 8.82424L19.8525 13.3527C19.7444 14.8073 18.4475 16 16.9738 16H6.04859C4.36854 16 3.05202 14.5842 3.18956 12.9261L3.54326 8.70788C3.58256 8.3103 3.9166 8 4.32925 8Z"})}),(0,Lo.jsx)(Ks,{className:"button-text",children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),(0,Lo.jsx)(Qs,{className:"button-ellipse",style:{top:"12px",backgroundColor:"#ffffff30",transform:"rotate(-13deg)"}}),(0,Lo.jsx)(Qs,{style:{transform:"rotate(-2deg)"}})]})]}),(0,Lo.jsx)(qs,{children:c.length>3?(0,Lo.jsx)(zs,{}):c.map((e=>(0,Lo.jsx)(Ns,{},e.id)))})]})}const Zs=Da.button`
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
  &:focus-visible {
    cursor: pointer;
    border: 2px solid #d9ff5a;

    .closed-slide-image {
      transform: perspective(100px) translateZ(10px);
    }
  }
`,Gs=Da.div`
  margin-bottom: 69px;
  width: 58px;
  height: 81px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`,Xs=Da.p`
  margin: 0;
  font-family: Euclid Circular A;
  font-size: 15px;
  font-weight: 500;
  line-height: 19.02px;
  color: #ffffff99;
`,Js=Da.p`
  margin: 0;
  font-family: Floreste;
  font-size: 40px;
  font-weight: 400;
  line-height: 38px;
  color: #ffffff;
`,eu=Da.img`
  transform: rotate(7deg);
`;function tu(e){let{color:t,image:n,number:r,id:a,onViewChange:i}=e;return(0,Lo.jsxs)(Zs,{style:{background:`${t}`},onClick:e=>function(e){e.stopPropagation(),"1"===a?i[0]({firstSlide:!0,secondSlide:!1,thirdSlide:!1}):"2"===a?i[0]({firstSlide:!1,secondSlide:!0,thirdSlide:!1}):i[0]({firstSlide:!1,secondSlide:!1,thirdSlide:!0})}(e),children:[(0,Lo.jsx)("div",{style:{width:1,height:1}}),(0,Lo.jsx)(eu,{className:"closed-slide-image",src:n,alt:"productSlideImage"}),(0,Lo.jsxs)(Gs,{children:[(0,Lo.jsx)(Xs,{children:"\u0441\u043b\u0430\u0439\u0434"}),(0,Lo.jsx)(Js,{children:r})]})]})}const nu=Da.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`;function ru(){const[e,n]=(0,t.useState)(!0),[r,a]=(0,t.useState)({firstSlide:!1,secondSlide:!1,thirdSlide:!1});return(0,Lo.jsx)(nu,{children:e?(0,Lo.jsx)(Es,{onViewChange:[a,n]}):(0,Lo.jsxs)(Lo.Fragment,{children:[r.firstSlide?(0,Lo.jsx)(Ys,{id:"111",category:"\u0421\u0432\u0435\u0442\u0438\u043b\u044c\u043d\u0438\u043a",author:"BENJAMIN MOORE",image:us,productName:"\u0421\u0412\u0415\u0422\u0418\u041b\u042c\u041d\u0418\u041a",productDescription:"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0441\u043a\u0430\u044f \u043b\u0430\u043c\u043f\u0430 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u043e\u0433\u043e \u043e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u044f",productPrice:"150 000",background:"unset"}):(0,Lo.jsx)(tu,{id:"1",color:"#C5B0FAB2",image:fs,number:"01",onViewChange:[a,n]}),r.secondSlide?(0,Lo.jsx)(Ys,{id:"222",category:"\u041a\u0440\u0435\u0441\u043b\u043e",author:"PAINT THE GLORY",image:cs,productName:"\u041a\u0420\u0415\u0421\u041b\u041e",productDescription:"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0441\u043a\u043e\u0435 \u043a\u0440\u0435\u0441\u043b\u043e \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0443\u044e\u0442\u0430 \u0432 \u043f\u043e\u043c\u0435\u0449\u0435\u043d\u0438\u0438",productPrice:"120 000",background:"#FA8FEF",color:"#FFA8F6"}):(0,Lo.jsx)(tu,{id:"2",color:"#FA8FEF",image:ps,number:"02",onViewChange:[a,n]}),r.thirdSlide?(0,Lo.jsx)(Ys,{id:"333",category:"\u0421\u0442\u043e\u043b",author:"BENJAMIN MOORE",image:ds,productName:"\u0412\u042b\u0421\u041e\u041a\u0418\u0419 \u0421\u0422\u041e\u041b",productDescription:"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0441\u043a\u0438\u0439 \u0441\u0442\u043e\u043b \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u0430 \u0432 \u043f\u043e\u043c\u0435\u0449\u0435\u043d\u0438\u0438",productPrice:"235 000",background:"#AECFFF",color:"#BED8FF"}):(0,Lo.jsx)(tu,{id:"3",color:"#AECFFF",image:hs,number:"03",onViewChange:[a,n]})]})})}const au=n.p+"static/media/Subtract.29db299ac0f1095ff9a06627d03047cd.svg",iu=Da.button`
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
  &:focus-visible {
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
`,ou=Da.p`
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
`,lu=Da.div`
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
`,su=Da.div`
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
`,uu=Da.p`
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
`,cu=Da.p`
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
`,du=Da.div`
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
`,fu=Da.img`
  --heightA: 248px;
  height: var(--heightA);

  @media (max-width: 1820px) {
    height: calc(var(--heightA) * 0.8);
  }
`,pu=Da.img`
  --heightA: 462px;
  height: var(--heightA);

  @media (max-width: 1820px) {
    height: calc(var(--heightA) * 0.8);
  }
`,hu=Da.div`
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
`,mu="\u0438\u0437\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u0437\u0430\u043a\u0430\u0437".split(""),gu=3;function vu(e){let{cardName:t,image:n,onClick:r}=e;return(0,Lo.jsxs)(iu,{onClick:r,children:[(0,Lo.jsx)(du,{children:(0,Lo.jsx)(fu,{className:"category-image",src:n,alt:"cardImage"})}),(0,Lo.jsx)(hu,{children:mu.map(((e,t)=>(0,Lo.jsx)("span",{style:{height:450,position:"absolute",transform:`rotate(${t*gu}deg)`,color:"white"},children:e},t)))}),(0,Lo.jsx)(pu,{src:au,alt:"ellipse"}),(0,Lo.jsx)(ou,{children:t}),(0,Lo.jsx)(lu,{className:"category-button",children:(0,Lo.jsx)("svg",{width:"22",height:"34",viewBox:"0 0 22 34",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Lo.jsx)("path",{className:"svg-arrow-path",d:"M21 22.6667C19.94 22.6667 18.3571 23.7051 17.0286 24.7562C15.3143 26.1077 13.8186 27.7227 12.6771 29.5743C11.8214 30.9627 11 32.6457 11 34M11 34C11 32.6457 10.1786 30.9612 9.32286 29.5743C8.18 27.7227 6.68429 26.1077 4.97286 24.7562C3.64286 23.7051 2.05714 22.6667 1 22.6667M11 34L11 -1.11265e-06",stroke:"#d9ff5a",strokeWidth:"2",strokeLinecap:"round"})})}),(0,Lo.jsxs)(su,{children:[(0,Lo.jsx)(uu,{children:"4"}),(0,Lo.jsx)(cu,{children:"\u0448\u0442"})]})]})}const yu=n.p+"static/media/mirror.02cc66d4affa479960ca.png",xu=n.p+"static/media/mainLamp.84a59bebc226d7bc39f2.png",bu=n.p+"static/media/mainChair.be5ee75688c39d7b9d50.png",wu=n.p+"static/media/mainTable.8b694cc009a4758892f8.png",Su=n.p+"static/media/mirrorCategory1.3e2c5dceff4e1c184de2.png",ku=n.p+"static/media/mirror2.ccac0dca99e620a33fdf.png",Cu=n.p+"static/media/mirror3.e92c414ddd62b62315f6.png",Eu=n.p+"static/media/mirror4.a7e03c49a916bdde5216.png",ju=n.p+"static/media/mirror5.a5d26ba15e4eed3a8e34.png",_u=n.p+"static/media/categoryLamp1.e24e45ee4a54cb5a60b8.png",Pu=n.p+"static/media/categoryLamp2.0ba6b2bc48faed5f5eaf.png",Au=n.p+"static/media/categoryLamp3.371be77e2010c4d61076.png",Ru=n.p+"static/media/categoryLamp4.dde1776dd544a3143e60.png",Nu=n.p+"static/media/categoryLamp5.25f0654b083dd0eaa554.png",Tu=n.p+"static/media/chair1.9e20bb8d5df24448ba8e.png",Ou=n.p+"static/media/chair22.d7b97846f84272e0f60a.png",zu=n.p+"static/media/chair3.f1956a4df2204141c27d.png",Lu=n.p+"static/media/chair4.4888835d89b7403188ec.png",Fu=n.p+"static/media/chair5.80fe22ab8034f3a8dda7.png",Du=n.p+"static/media/table1.889b8645492e804fc672.png",Iu=n.p+"static/media/table22.9e8b33daefe2e819f4e3.png",Mu=n.p+"static/media/table3.ac8b2e802be674d954da.png",Bu=n.p+"static/media/table4.9a0368f0f10abd95e587.png",Uu=n.p+"static/media/table5.17aebd93ab2881cd6085.png",Hu=[{id:0,count:1,background:"#A5D4FF",image:Su,name:"KRISTIN",category:"\u0417\u0435\u043a\u0440\u0430\u043b\u0430 \u043d\u0430\u043f\u043e\u043b\u044c\u043d\u044b\u0435",price:"150 000"},{id:1,count:1,background:"#F0B3EA",image:ku,name:"ARLENE",category:"\u0417\u0435\u043a\u0440\u0430\u043b\u0430 \u043d\u0430\u043f\u043e\u043b\u044c\u043d\u044b\u0435",price:"150 000"},{id:2,count:1,background:"#8ECDFA",image:Cu,name:"COLLENE",category:"\u0417\u0435\u043a\u0440\u0430\u043b\u0430 \u043d\u0430\u043f\u043e\u043b\u044c\u043d\u044b\u0435",price:"150 000"},{id:3,count:1,background:"#FBE4CA",image:Eu,name:"COPPELIA",category:"\u0417\u0435\u043a\u0440\u0430\u043b\u0430 \u043d\u0430\u043f\u043e\u043b\u044c\u043d\u044b\u0435",price:"150 000"},{id:4,count:1,background:"#F0B5FA",image:ju,name:"ARTEMIDE",category:"\u0417\u0435\u043a\u0440\u0430\u043b\u0430 \u043d\u0430\u043f\u043e\u043b\u044c\u043d\u044b\u0435",price:"150 000"}],Wu=[{id:5,count:1,background:"#FFC4A5",image:_u,name:"AUBREY",category:"\u041b\u0430\u043c\u043f\u0430 \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u0430\u044f",price:"150 000"},{id:6,count:1,background:"#88E379",image:Pu,name:"LESLIE",category:"\u041b\u0430\u043c\u043f\u0430 \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u0430\u044f",price:"150 000"},{id:7,count:1,background:"#FA8EEF",image:Au,name:"DARRELL",category:"\u041b\u0430\u043c\u043f\u0430 \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u0430\u044f",price:"150 000"},{id:8,count:1,background:"#29D0D9",image:Ru,name:"COPPELIA",category:"\u041b\u0430\u043c\u043f\u0430 \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u0430\u044f",price:"150 000"},{id:9,count:1,background:"#89D5FF",image:Nu,name:"ARTEMIDE",category:"\u041b\u0430\u043c\u043f\u0430 \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u0430\u044f",price:"150 000"}],$u=[{id:10,count:1,background:"#FBE4CA",image:Tu,name:"KATHRYN",category:"\u0421\u0442\u0443\u043b",price:"150 000"},{id:11,count:1,background:"#F0B3EA",image:Ou,name:"WENDY",category:"\u0421\u0442\u0443\u043b",price:"150 000"},{id:12,count:1,background:"#F18EFA",image:zu,name:"JUDITH",category:"\u0421\u0442\u0443\u043b",price:"150 000"},{id:13,count:1,background:"#5C544A",image:Lu,name:"JANE",category:"\u0421\u0442\u0443\u043b",price:"150 000"},{id:14,count:1,background:"#F0B5FA",image:Fu,name:"DARLENE",category:"\u0421\u0442\u0443\u043b",price:"150 000"}],Vu=[{id:15,count:1,background:"#FBE4CA",image:Du,name:"KATHRYN",category:"\u0421\u0442\u043e\u043b",price:"150 000"},{id:16,count:1,background:"#F0B3EA",image:Iu,name:"WENDY",category:"\u0421\u0442\u043e\u043b",price:"150 000"},{id:17,count:1,background:"#F18EFA",image:Mu,name:"JUDITH",category:"\u0421\u0442\u043e\u043b",price:"150 000"},{id:18,count:1,background:"#5C544A",image:Bu,name:"JANE",category:"\u0421\u0442\u043e\u043b",price:"150 000"},{id:19,count:1,background:"#F0B5FA",image:Uu,name:"DARLENE",category:"\u0421\u0442\u043e\u043b",price:"150 000"}],Ku=Da.div`
  position: relative;
  margin: 10px 0px 0px 0px;
  flex: 1;
`,Qu=Da.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,qu=Da.div`
  position: absolute;
  box-sizing: border-box;
  top: 7px;
  left: 2px;
  width: 20px;
  height: 20px;
  border: 3px solid white;
  background: ${e=>e.background};
  border-radius: 50%;
`,Yu=Da.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px 0px 0px 0px;
`,Zu=Da.h2`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 28px;
  line-height: 35.5px;
  margin: 0px;
  color: white;
`,Gu=Da.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 23px;
  margin: 0px;
  color: white;
  margin-bottom: 19px;
`,Xu=Da.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,Ju=Da.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 28px;
  line-height: 26.6px;
  margin: 0px;
  color: white;
`,ec=Da.p`
  font-family: Euclid Circular A;
  font-weight: 400;
  font-size: 20px;
  line-height: 15.36px;
  margin: 0px;
  color: white;
`,tc=Da.button`
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
  &:focus-visible {
    cursor: pointer;

    .button-text {
      color: #d9ff5a;
    }
  }
`,nc=Da.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin: 0px;
  color: white;
  margin-left: 11px;
`;function rc(e){let{image:t,background:n,name:r,category:a,price:i,onClick:o}=e;return(0,Lo.jsxs)(Ku,{children:[(0,Lo.jsx)(qu,{background:n}),(0,Lo.jsx)(Qu,{children:(0,Lo.jsx)("img",{src:t,alt:"product"})}),(0,Lo.jsxs)(Yu,{children:[(0,Lo.jsx)(Zu,{children:r}),(0,Lo.jsx)(Gu,{children:a}),(0,Lo.jsx)("div",{style:{border:"2px solid #D9FF5A",width:"100%",marginBottom:"28px"}}),(0,Lo.jsxs)(Xu,{children:[(0,Lo.jsxs)("div",{style:{display:"flex",width:95,justifyContent:"space-between"},children:[(0,Lo.jsx)(Ju,{children:i}),(0,Lo.jsx)(ec,{children:"\u20bd"})]}),(0,Lo.jsxs)(tc,{onClick:o,children:[(0,Lo.jsx)("svg",{width:"21",height:"22",viewBox:"0 0 21 22",fill:"#D9FF5A",xmlns:"http://www.w3.org/2000/svg",children:(0,Lo.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.71513 2.69L3.51817 5.14C3.47877 5.61 3.84315 6 4.30601 6H19.3833C19.7969 6 20.1416 5.68 20.1712 5.26C20.2992 3.49 18.9697 2.05 17.2266 2.05H5.12339C5.02491 1.61 4.82795 1.19 4.52266 0.84C4.03026 0.31 3.3409 0 2.63184 0H0.918289C0.51452 0 0.179688 0.34 0.179688 0.75C0.179688 1.16 0.51452 1.5 0.918289 1.5H2.63184C2.93713 1.5 3.22273 1.63 3.42953 1.85C3.63634 2.08 3.73482 2.38 3.71513 2.69ZM9.17969 20C9.17969 21.1046 8.28426 22 7.17969 22C6.07512 22 5.17969 21.1046 5.17969 20C5.17969 18.8954 6.07512 18 7.17969 18C8.28426 18 9.17969 18.8954 9.17969 20ZM17.1797 20C17.1797 21.1046 16.2843 22 15.1797 22C14.0751 22 13.1797 21.1046 13.1797 20C13.1797 18.8954 14.0751 18 15.1797 18C16.2843 18 17.1797 18.8954 17.1797 20ZM4.32925 8H19.4005C19.8623 8 20.216 8.37818 20.1767 8.82424L19.8525 13.3527C19.7444 14.8073 18.4475 16 16.9738 16H6.04859C4.36854 16 3.05202 14.5842 3.18956 12.9261L3.54326 8.70788C3.58256 8.3103 3.9166 8 4.32925 8Z",fill:"#D9FF5A"})}),(0,Lo.jsx)(nc,{className:"button-text",children:"\u041a\u0443\u043f\u0438\u0442\u044c"})]})]})]})]})}const ac=Da.input`
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
`,ic=Da.div`
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
`,oc=Da.input`
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
`,lc=Da.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  color: white;
  font-size: 18px;
  line-height: 27px;
  margin: 0px;
  margin-bottom: 20px;
`;function sc(e){let{min:n,max:r}=e;const[a,i]=(0,t.useState)(n),[o,l]=(0,t.useState)(r),[s,u]=(0,t.useState)(0),[c,d]=(0,t.useState)(100),f=(0,t.useCallback)((e=>Math.round((e-n)/(r-n)*100)),[n,r]);function p(e){let t=Math.min(e.target.value,o-1e3);t<n&&(t=n),i(t)}function h(e){let t=Math.max(e.target.value,a+1e3);t>r&&(t=r),l(t)}return(0,t.useEffect)((()=>{const e=f(a),t=f(o);u(e),d(t-e)}),[a,f]),(0,t.useEffect)((()=>{const e=f(a),t=f(o);d(t-e)}),[o,f]),(0,Lo.jsxs)("div",{style:{padding:"20px 30px 30px 30px"},children:[(0,Lo.jsx)(lc,{children:"\u0426\u0435\u043d\u0430"}),(0,Lo.jsxs)("div",{style:{marginBottom:30},children:[(0,Lo.jsx)(oc,{type:"number",value:a,onChange:e=>p(e)}),(0,Lo.jsx)(oc,{style:{marginLeft:14},type:"number",value:o,onChange:e=>h(e)})]}),(0,Lo.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,Lo.jsx)(ac,{className:"thumb-left",type:"range",min:n,max:r,value:a,step:"1000",onChange:e=>{p(e)}}),(0,Lo.jsx)(ac,{className:"thumb-right",type:"range",min:n,max:r,step:"1000",value:o,onChange:e=>{h(e)}}),(0,Lo.jsxs)(ic,{children:[(0,Lo.jsx)("div",{className:"slider-track"}),(0,Lo.jsx)("div",{style:{left:`${s}%`,width:`${c}%`},className:"slider-range"})]})]})]})}const uc=Da.label`
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
`;function cc(e){let{name:t,count:n}=e;return(0,Lo.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,Lo.jsxs)(uc,{className:"container",children:[t,(0,Lo.jsx)("input",{type:"checkbox"}),(0,Lo.jsx)("span",{className:"checkmark"}),(0,Lo.jsx)("span",{style:{color:"#ffffff69"},children:` (${n})`})]})})}const dc=Da.div`
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
`,fc=Da.button`
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
  &:focus-visible {
    cursor: pointer;

    .button-text {
      color: #d9ff5a;
    }
  }
`,pc=Da.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  color: white;
  transform: rotate(13deg);
  margin: 0px;
`,hc=Da.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  color: white;
`,mc=Da.button`
  background: unset;
  padding: 0px;
  border: none;
  display: flex;
  align-items: center;
  outline: none;

  &:hover,
  &:focus-visible {
    cursor: pointer;

    .filter-label {
      color: #d9ff5a;
    }
  }
`,gc=Da.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  color: white;
  margin: 0px;
  margin-left: 11px;
`,vc=Da.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: white;
  margin: 0px;
  margin-bottom: 16px;
`,yc=Da.div`
  background: #cbb6ff;
  border-radius: 40px;
  width: 290px;
  padding: 20px 0px 24px 30px;
`,xc=Da.div`
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 2;
`;function bc(e){let{productsArray:n,id:r}=e;const[a,i]=(0,t.useState)(!1),[o,l]=(0,t.useState)(n),s=Ga((e=>e.notification.notifications)),u=ui();return(0,Lo.jsxs)("div",{id:r,style:{display:"flex",flexDirection:"column",alignItems:"center",margin:"0px 20px 0px 20px"},children:[(0,Lo.jsxs)("div",{style:{maxWidth:1800,width:"100%",display:"flex",justifyContent:"space-between",margin:"63px 0px 77px 0px",position:"relative"},children:[(0,Lo.jsxs)(mc,{onClick:e=>function(e){e.stopPropagation(),i(!a)}(e),children:[(0,Lo.jsx)("svg",{width:"23",height:"22",viewBox:"0 0 23 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Lo.jsx)("path",{d:"M20.1623 0H2.38455C2.08986 0 1.80725 0.116448 1.59887 0.323727C1.3905 0.531005 1.27344 0.812136 1.27344 1.10527V3.96793C1.27344 4.54598 1.5101 5.11409 1.92122 5.52304L7.9401 11.5103V19.8949C7.94032 20.0832 7.98885 20.2683 8.0811 20.4328C8.17335 20.5972 8.30627 20.7355 8.46726 20.8346C8.62826 20.9336 8.81201 20.9902 9.00111 20.9988C9.19021 21.0075 9.37841 20.968 9.54788 20.8841L13.9923 18.6736C14.369 18.4857 14.6068 18.1032 14.6068 17.6843V11.5103L20.6257 5.52304C21.0368 5.11409 21.2734 4.54598 21.2734 3.96793V1.10527C21.2734 0.812136 21.1564 0.531005 20.948 0.323727C20.7396 0.116448 20.457 0 20.1623 0Z",fill:"#D9FF5A"})}),(0,Lo.jsx)(gc,{className:"filter-label",children:"\u0424\u0438\u043b\u044c\u0442\u0440\u044b"})]}),a?(0,Lo.jsxs)("div",{style:{position:"absolute",top:50,zIndex:3},children:[(0,Lo.jsx)("div",{style:{background:"#CBB6FF",borderRadius:40},children:(0,Lo.jsx)(sc,{min:"0",max:"1000000"})}),(0,Lo.jsxs)(yc,{children:[(0,Lo.jsx)(vc,{children:"\u0426\u0432\u0435\u0442\u0430"}),(0,Lo.jsxs)("form",{children:[(0,Lo.jsx)(cc,{name:"\u0417\u0435\u043b\u0435\u043d\u044b\u0439",count:"580"}),(0,Lo.jsx)(cc,{name:"\u0421\u0438\u043d\u0438\u0439",count:"1296"}),(0,Lo.jsx)(cc,{name:"\u041e\u0440\u0430\u043d\u0436\u0435\u0432\u044b\u0439",count:"2340"}),(0,Lo.jsx)(cc,{name:"\u0420\u043e\u0437\u043e\u0432\u044b\u0439",count:"656"}),(0,Lo.jsx)(cc,{name:"\u041b\u0430\u0432\u0430\u043d\u0434\u043e\u0432\u044b\u0439",count:"1"}),(0,Lo.jsx)(cc,{name:"\u0413\u043e\u043b\u0443\u0431\u043e\u0439",count:"113"})]})]})]}):(0,Lo.jsx)(Lo.Fragment,{}),(0,Lo.jsx)(hc,{children:"20 \u041f\u041e\u0417\u0418\u0426\u0418\u0419 \u0412 \u0414\u0410\u041d\u041d\u041e\u0419 \u041a\u0410\u0422\u0415\u0413\u041e\u0420\u0418\u0418"})]}),(0,Lo.jsx)(dc,{children:o.map(((e,t)=>(0,Lo.jsx)(rc,{background:e.background,image:e.image,name:e.name,category:e.category,price:e.price,onClick:t=>{!function(e,t){e.stopPropagation(),u(Ro(t));let n=Date.now().toString();u(_s({id:n})),setTimeout((()=>{u(Ps())}),3e3)}(t,e)}},t)))}),(0,Lo.jsxs)(fc,{onClick:e=>{!function(e){e.stopPropagation();let t=[...o];t.push(...n),l(t)}(e)},children:[(0,Lo.jsx)(pc,{className:"button-text",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0435\u0449\u0435"}),(0,Lo.jsxs)("svg",{style:{position:"absolute",transform:"rotate(13deg)",top:79,left:141},width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,Lo.jsx)("path",{d:"M18.1087 14L12.112 20L6.11523 14",stroke:"#D9FF5A",strokeWidth:"2",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,Lo.jsx)("path",{d:"M12.1133 4V21",stroke:"#D9FF5A",strokeWidth:"2",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),(0,Lo.jsx)(xc,{children:s.length>3?(0,Lo.jsx)(zs,{}):s.map((e=>(0,Lo.jsx)(Ns,{},e.id)))})]})}const wc=Da.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`,Sc=Da.h2`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 60px;
  line-height: 76.08px;
  color: white;
  margin: 0;
`,kc=Da.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 70px;
`,Cc=Da.div`
  max-width: 1800px;
  width: 100%;
  margin-top: 170px;
  position: relative;
`,Ec={first:!1,second:!1,third:!1,fourth:!1};function jc(){const[e,n]=(0,t.useState)(Ec);return(0,Lo.jsxs)(Cc,{children:[(0,Lo.jsx)(kc,{children:(0,Lo.jsx)(Sc,{children:"\u041a\u0410\u0422\u0415\u0413\u041e\u0420\u0418\u0418"})}),(0,Lo.jsxs)(wc,{children:[(0,Lo.jsx)(vu,{cardName:"\u041d\u0410\u041f\u041e\u041b\u042c\u041d\u042b\u0415 \u0417\u0415\u0420\u041a\u0410\u041b\u0410",image:yu,onClick:()=>{n({first:!0,second:!1,third:!1,fourth:!1}),document.getElementById("category").scrollIntoView({behavior:"smooth"})}}),(0,Lo.jsx)(vu,{cardName:"\u0422\u041e\u0420\u0428\u0415\u0420\u042b \u0418 \u041b\u0410\u041c\u041f\u042b",image:xu,onClick:()=>{n({first:!1,second:!0,third:!1,fourth:!1}),document.getElementById("category").scrollIntoView({behavior:"smooth"})}}),(0,Lo.jsx)(vu,{cardName:"\u041a\u0420\u0415\u0421\u041b\u0410 \u0418 \u0421\u0422\u0423\u041b\u042c\u042f",image:bu,onClick:()=>{n({first:!1,second:!1,third:!0,fourth:!1}),document.getElementById("category").scrollIntoView({behavior:"smooth"})}}),(0,Lo.jsx)(vu,{cardName:"\u0421\u0422\u041e\u041b\u042b \u0418 \u0422\u0423\u041c\u0411\u042b",image:wu,onClick:()=>{n({first:!1,second:!1,third:!1,fourth:!0}),document.getElementById("category").scrollIntoView({behavior:"smooth"})}})]}),e.first?(0,Lo.jsx)(bc,{id:"category",productsArray:Hu}):(0,Lo.jsx)("div",{style:{position:"absolute"},id:"category"}),e.second?(0,Lo.jsx)(bc,{id:"category",productsArray:Wu}):(0,Lo.jsx)("div",{style:{position:"absolute"},id:"category"}),e.third?(0,Lo.jsx)(bc,{id:"category",productsArray:$u}):(0,Lo.jsx)("div",{style:{position:"absolute"},id:"category"}),e.fourth?(0,Lo.jsx)(bc,{id:"category",productsArray:Vu}):(0,Lo.jsx)("div",{style:{position:"absolute"},id:"category"})]})}var _c;function Pc(){return Pc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pc.apply(null,arguments)}function Ac(e,n){let{title:r,titleId:a,...i}=e;return t.createElement("svg",Pc({width:21,height:22,viewBox:"0 0 21 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":a},i),r?t.createElement("title",{id:a},r):null,_c||(_c=t.createElement("path",{d:"M11.461 0.915624L11.834 10.2959L21.0072 12.2909L11.6272 12.6627L9.63329 21.8359L9.26034 12.4557L0.0871087 10.4606L9.46713 10.0888L11.461 0.915624Z",fill:"white"})))}const Rc=t.forwardRef(Ac),Nc=(n.p,"CREATING A GREAT ART"),Tc=Da.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 40px;
  line-height: 38px;
  margin: 0;
  color: #ffffff;
`,Oc=Da.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 2169px;
  height: 72px;
  position: absolute;
`;function zc(e){let{background:t,rotateDegree:n}=e;return(0,Lo.jsxs)(Oc,{style:{backgroundColor:t,transform:`rotate(${n}deg)`},children:[(0,Lo.jsx)(Tc,{children:Nc}),(0,Lo.jsx)(Rc,{}),(0,Lo.jsx)(Tc,{children:Nc}),(0,Lo.jsx)(Rc,{}),(0,Lo.jsx)(Tc,{children:Nc}),(0,Lo.jsx)(Rc,{}),(0,Lo.jsx)(Tc,{children:Nc}),(0,Lo.jsx)(Rc,{}),(0,Lo.jsx)(Tc,{children:Nc})]})}const Lc=Da.div`
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
`;function Fc(){return(0,Lo.jsxs)(Lc,{children:[(0,Lo.jsx)(zc,{background:"#CBB6FF",rotateDegree:5}),(0,Lo.jsx)(zc,{background:"#AECEFF",rotateDegree:-2})]})}const Dc=Da.div`
  width: 283px;
  height: 342px;
  background-color: #cbb6ff;
  border-radius: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ic=Da.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  color: #ffffff99;
  position: absolute;
  top: 25px;
  left: 25px;
  margin: 0;
`,Mc=Da.p`
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
`,Bc=Da.p`
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
`,Uc=Da.p`
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
`,Hc=Da.div`
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
`,Wc=Da.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 40px;
  line-height: 17px;
  margin: 0px;
  color: white;
  margin-top: 10px;
`,$c=Da.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  margin: 0px;
  color: white;
`,Vc=Da.div`
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
`;function Kc(e){let{number:t,author:n,header:r,date:a,time:i,image:o}=e;return(0,Lo.jsxs)(Vc,{children:[(0,Lo.jsxs)(Dc,{children:[(0,Lo.jsx)(Ic,{children:t}),(0,Lo.jsx)(Mc,{children:n}),(0,Lo.jsx)(Bc,{children:r}),(0,Lo.jsx)(Uc,{children:a}),(0,Lo.jsx)("div",{style:{height:142,width:133,borderRadius:"50%",position:"absolute",backgroundColor:"#ae97e8",top:284,left:113}}),(0,Lo.jsx)("div",{style:{height:12,width:12,position:"absolute",backgroundColor:"#ae97e8",top:332,left:243}}),(0,Lo.jsx)("div",{style:{height:18,width:18,borderRadius:"50%",position:"absolute",backgroundColor:"#cbb6ff",top:322.7,left:242.7}}),(0,Lo.jsx)("div",{style:{height:8,width:8,position:"absolute",backgroundColor:"#ae97e8",top:335,left:108}}),(0,Lo.jsx)("div",{style:{height:18,width:18,borderRadius:"50%",position:"absolute",backgroundColor:"#cbb6ff",top:324,left:97.8}}),(0,Lo.jsxs)(Hc,{className:"reading-time-container",children:[(0,Lo.jsx)(Wc,{className:"reading-time-text",children:"3"}),(0,Lo.jsx)($c,{className:"reading-time-text",children:"\u043c\u0438\u043d"})]})]}),(0,Lo.jsxs)("div",{style:{position:"relative"},children:[(0,Lo.jsx)("div",{style:{width:14,height:14,borderRadius:"50%",backgroundColor:"#ae97e8",position:"absolute",top:-7}}),(0,Lo.jsx)("div",{style:{width:14,height:190,backgroundColor:"#cbb6ff"}}),(0,Lo.jsx)("div",{style:{width:14,height:14,borderRadius:"50%",backgroundColor:"#ae97e8",position:"absolute",top:183}})]}),(0,Lo.jsx)(Dc,{children:(0,Lo.jsx)("img",{style:{borderRadius:"28px"},src:o,alt:"paperImage"})})]})}const Qc=n.p+"static/media/modern-sofa.d90522b42a12bcddeb9d.png",qc=n.p+"static/media/chandelier.cbcdef145ec177529249.png",Yc=n.p+"static/media/modern-wardrobe.7f318d094de94805a356.png",Zc=Da.h3`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 60px;
  line-height: 76.08px;
  color: #ffffff;
  margin: 0;
  margin-left: 10px;
`,Gc=Da.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 243px;
  margin: 0px 10px 0px 10px;
`,Xc=Da.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 189px;
  margin: 0px 10px 0px 10px;
`,Jc=Da.p`
  margin: 0;
  font-family: Floreste;
  font-weight: 400;
  font-size: 40px;
  line-height: 38px;
  color: #ffffff;
`,ed=Da.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,td=Da.div`
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`,nd=Da.div`
  max-width: 1800px;
  width: 100%;
  margin-top: 169px;
`;function rd(e){let{id:t}=e;return(0,Lo.jsxs)(nd,{id:t,children:[(0,Lo.jsxs)(ed,{children:[(0,Lo.jsxs)(Gc,{children:[(0,Lo.jsxs)("div",{style:{width:35,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,Lo.jsx)("div",{style:{width:7,height:7,borderRadius:"50%",backgroundColor:"#FFFFFF"}}),(0,Lo.jsx)("div",{style:{width:7,height:7,borderRadius:"50%",backgroundColor:"#FFFFFF4D"}}),(0,Lo.jsx)("div",{style:{width:7,height:7,borderRadius:"50%",backgroundColor:"#FFFFFF4D"}})]}),(0,Lo.jsx)(Zc,{children:"\u0411\u041b\u041e\u0413"})]}),(0,Lo.jsxs)(Xc,{children:[(0,Lo.jsx)(Jc,{children:"02"}),(0,Lo.jsx)("div",{style:{width:63,height:4,backgroundColor:"#CBB6FF",margin:"0px 5px 10px 5px"}}),(0,Lo.jsx)(Jc,{children:"04"})]})]}),(0,Lo.jsxs)(td,{children:[(0,Lo.jsx)(Kc,{number:"01",author:"Laura Busche",header:"\u041d\u041e\u0412\u0410\u042f \u041a\u041e\u041b\u041b\u0415\u041a\u0426\u0418\u042f \u041a\u0420\u0415\u0421\u0415\u041b",date:"14 \u042f\u043d\u0432\u0430\u0440\u044f 2023",image:Qc}),(0,Lo.jsx)(Kc,{number:"02",author:"Laura Busche",header:"\u0421\u0412\u0415\u0422\u041e\u0412\u041e\u0419 \u0414\u0418\u0417\u0410\u0419\u041d \u0412 \u0418\u041d\u0422\u0415\u0420\u042c\u0415\u0420\u0415",date:"14 \u042f\u043d\u0432\u0430\u0440\u044f 2023",image:qc}),(0,Lo.jsx)(Kc,{number:"03",author:"Laura Busche",header:"\u041a\u0410\u041a \u0412\u042b\u0411\u0420\u0410\u0422\u042c \u0428\u041a\u0410\u0424 \u0412 \u0421\u041f\u0410\u041b\u042c\u041d\u042e",date:"14 \u042f\u043d\u0432\u0430\u0440\u044f 2023",image:Yc})]})]})}const ad=Da.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 129px;
  margin-top: 170px;
  max-width: 1797px;
  width: 100%;
`,id=Da.p`
  font-family: Gilroy;
  font-weight: 500;
  font-size: 18px;
  line-height: 21.19px;
  color: #ffffff;
  margin: 0px 10px 0px 10px;
`,od=Da.p`
  font-family: Gilroy;
  font-weight: 500;
  font-size: 18px;
  line-height: 21.19px;
  color: #ffffff;
  margin: 0px 10px 0px 10px;
`;function ld(){return(0,Lo.jsxs)(ad,{children:[(0,Lo.jsx)(id,{children:"@2023"}),(0,Lo.jsx)(od,{children:"\u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b"})]})}const sd=Da.div`
  --padding-topA: 289px;
  width: 1920px;
  height: 700px;
  padding-top: var(--padding-topA);
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 1700px) {
    padding-top: calc(var(--padding-topA) * 0.9);
  }
  @media (max-width: 1400px) {
    padding-top: calc(var(--padding-topA) * 0.8);
  }
  @media (max-width: 1000px) {
    padding-top: calc(var(--padding-topA) * 0.7);
  }
  @media (max-width: 600px) {
    padding-top: 183px;
  }
`,ud=Da.p`
  --line-heightA: 201.4px;
  --font-sizeA: 212px;
  font-family: Floreste;
  font-weight: 400;
  font-size: var(--line-heightA);
  line-height: var(--font-sizeA);
  color: #cbb6ff99;
  margin: 0;
  white-space: nowrap;
  margin-right: 84px;

  @media (max-width: 1700px) {
    font-size: calc(var(--line-heightA) * 0.8);
    line-height: calc(var(--font-sizeA) * 0.8);
  }
  @media (max-width: 1400px) {
    font-size: calc(var(--line-heightA) * 0.6);
    line-height: calc(var(--font-sizeA) * 0.6);
  }
  @media (max-width: 1000px) {
    font-size: calc(var(--line-heightA) * 0.4);
    line-height: calc(var(--font-sizeA) * 0.4);
  }
  @media (max-width: 600px) {
    font-size: 110px;
    line-height: 104.5px;
  }
`,cd=Da.p`
  --line-heightA: 18px;
  --font-sizeA: 22.82px;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: var(--line-heightA);
  line-height: var(--font-sizeA);
  color: white;
  margin: 0;
  white-space: nowrap;

  @media (max-width: 1000px) {
    font-size: calc(var(--line-heightA) * 0.8);
    line-height: calc(var(--font-sizeA) * 0.8);
  }
`,dd=Da.img`
  position: absolute;
  --left1: -781px;
  --top1: 278px;
  --height1: 224px;
  --left2: -428px;
  --top2: 478px;
  --height2: 200px;
  --left3: -153px;
  --top3: -150px;
  --height3: 759px;
  --left4: 363px;
  --top4: 274px;
  --height4: 258px;
  --left5: 716px;
  --top5: 505px;
  --height5: 197px;

  &.lamp1 {
    left: var(--left1);
    top: var(--top1);
    height: var(--height1);
  }
  &.lamp2 {
    left: var(--left2);
    top: var(--top2);
    height: var(--height2);
    transform: rotate(-13deg);
  }
  &.lamp3 {
    left: var(--left3);
    top: var(--top3);
    height: var(--height3);
  }
  &.lamp4 {
    left: var(--left4);
    top: var(--top4);
    height: var(--height4);
    transform: rotate(7deg);
  }
  &.lamp5 {
    left: var(--left5);
    top: var(--top5);
    height: var(--height5);
    transform: rotate(17deg);
  }

  @media (max-width: 1700px) {
    &.lamp1 {
      left: calc(var(--left1) * 0.8);
      top: calc(var(--top1) * 0.8);
      height: calc(var(--height1) * 0.8);
    }
    &.lamp2 {
      left: calc(var(--left2) * 0.8);
      top: calc(var(--top2) * 0.8);
      height: calc(var(--height2) * 0.8);
    }
    &.lamp3 {
      left: calc(var(--left3) * 0.8);
      top: calc(var(--top3) * 0.8);
      height: calc(var(--height3) * 0.8);
    }
    &.lamp4 {
      left: calc(var(--left4) * 0.8);
      top: calc(var(--top4) * 0.8);
      height: calc(var(--height4) * 0.8);
    }
    &.lamp5 {
      left: calc(var(--left5) * 0.8);
      top: calc(var(--top5) * 0.8);
      height: calc(var(--height5) * 0.8);
    }
  }
  @media (max-width: 1400px) {
    &.lamp1 {
      left: calc(var(--left1) * 0.6);
      top: calc(var(--top1) * 0.6);
      height: calc(var(--height1) * 0.6);
    }
    &.lamp2 {
      left: calc(var(--left2) * 0.6);
      top: calc(var(--top2) * 0.6);
      height: calc(var(--height2) * 0.6);
    }
    &.lamp3 {
      left: calc(var(--left3) * 0.6);
      top: calc(var(--top3) * 0.6);
      height: calc(var(--height3) * 0.6);
    }
    &.lamp4 {
      left: calc(var(--left4) * 0.6);
      top: calc(var(--top4) * 0.6);
      height: calc(var(--height4) * 0.6);
    }
    &.lamp5 {
      left: calc(var(--left5) * 0.6);
      top: calc(var(--top5) * 0.6);
      height: calc(var(--height5) * 0.6);
    }
  }
  @media (max-width: 1000px) {
    &.lamp1 {
      left: calc(var(--left1) * 0.4);
      top: calc(var(--top1) * 0.4);
      height: calc(var(--height1) * 0.4);
    }
    &.lamp2 {
      left: calc(var(--left2) * 0.4);
      top: calc(var(--top2) * 0.4);
      height: calc(var(--height2) * 0.4);
    }
    &.lamp3 {
      left: calc(var(--left3) * 0.4);
      top: calc(var(--top3) * 0.4);
      height: calc(var(--height3) * 0.4);
    }
    &.lamp4 {
      left: calc(var(--left4) * 0.4);
      top: calc(var(--top4) * 0.4);
      height: calc(var(--height4) * 0.4);
    }
    &.lamp5 {
      left: calc(var(--left5) * 0.4);
      top: calc(var(--top5) * 0.4);
      height: calc(var(--height5) * 0.4);
    }
  }
  @media (max-width: 600px) {
    &.lamp1 {
      top: 405px;
      left: -143px;
      height: 112px;
    }
    &.lamp2 {
      top: 220px;
      left: -240px;
      height: 100px;
    }
    &.lamp3 {
      top: 94px;
      left: -60px;
      height: 227px;
      transform: rotate(-8deg);
    }
    &.lamp4 {
      top: 244px;
      left: 150px;
      height: 129px;
      transform: rotate(19deg);
    }
    &.lamp5 {
      display: none;
    }
  }
  @media (max-width: 400px) {
    &.lamp1 {
      top: 405px;
      left: -66px;
      height: 112px;
    }
    &.lamp2 {
      top: 220px;
      left: -165px;
      height: 100px;
    }
    &.lamp3 {
      top: 94px;
      left: -60px;
      height: 227px;
      transform: rotate(-8deg);
    }
    &.lamp4 {
      top: 244px;
      left: 85px;
      height: 129px;
      transform: rotate(19deg);
    }
    &.lamp5 {
      display: none;
    }
  }
`,fd=Da.div`
  --margin-bottomA: 145px;
  --paddingA: 60px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: var(--margin-bottomA);
  padding-left: var(--paddingA);
  padding-right: var(--paddingA);
  box-sizing: border-box;

  @media (max-width: 1700px) {
    margin-bottom: calc(var(--margin-bottomA) * 0.8);
    padding-left: calc(var(--paddingA) * 0.8);
    padding-right: calc(var(--paddingA) * 0.8);
  }
  @media (max-width: 1400px) {
    margin-bottom: calc(var(--margin-bottomA) * 0.6);
    padding-left: calc(var(--paddingA) * 0.6);
    padding-right: calc(var(--paddingA) * 0.6);
  }
  @media (max-width: 1000px) {
    margin-bottom: calc(var(--margin-bottomA) * 0.4);
    padding-left: calc(var(--paddingA) * 0.4);
    padding-right: calc(var(--paddingA) * 0.4);
  }
  @media (max-width: 600px) {
    justify-content: center;
    margin-bottom: 20px;
    .gratitude {
      display: none;
    }
  }
`;function pd(){return(0,Lo.jsxs)(sd,{children:[(0,Lo.jsxs)("div",{style:{position:"relative"},children:[(0,Lo.jsx)(dd,{className:"lamp1",src:Au,alt:"lamp"}),(0,Lo.jsx)(dd,{className:"lamp2",src:_u,alt:"lamp"}),(0,Lo.jsx)(dd,{className:"lamp3",src:us,alt:"lamp"}),(0,Lo.jsx)(dd,{className:"lamp4",src:Ru,alt:"lamp"}),(0,Lo.jsx)(dd,{className:"lamp5",src:Pu,alt:"lamp"})]}),(0,Lo.jsxs)(fd,{children:[(0,Lo.jsx)(cd,{children:"\u0412\u0410\u0428 \u0417\u0410\u041a\u0410\u0417 \u041e\u0424\u041e\u0420\u041c\u041b\u0415\u041d"}),(0,Lo.jsx)(cd,{className:"gratitude",children:"\u0421\u041f\u0410\u0421\u0418\u0411\u041e \u0417\u0410 \u0417\u0410\u041a\u0410\u0417"})]}),(0,Lo.jsxs)("div",{style:{display:"flex"},children:[(0,Lo.jsx)(ud,{children:"THANK YOU"}),(0,Lo.jsx)(ud,{children:"THANK YOU"}),(0,Lo.jsx)(ud,{style:{marginRight:0},children:"THANK YOU"})]})]})}const hd=Da.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  max-width: 1920px;
  width: 100%;
  align-items: center;
`;function md(){return(0,Lo.jsxs)(hd,{children:[(0,Lo.jsx)(ru,{}),(0,Lo.jsx)(jc,{}),(0,Lo.jsx)(Fc,{}),(0,Lo.jsx)(rd,{id:"blog"}),(0,Lo.jsx)(ld,{})]})}const gd=Da.div`
  width: 523px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
  margin-right: 10px;
`,vd=Da.div`
  margin-bottom: 22px;
  display: flex;
  justify-content: space-between;
`,yd=Da.div`
  width: 11px;
  height: 11px;
  border: 3px solid white;
  border-radius: 50%;
  margin-right: 12px;
`,xd=Da.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 25.36px;
  color: #ffffff;
  margin: 0;
`,bd=Da.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  color: #ffffff;
  margin: 0;
`,wd=Da.div`
  width: 350px;
`,Sd=Da.div`
  display: flex;
  justify-content: space-between;
  width: 95px;
`,kd=Da.p`
  font-family: Floreste;
  font-size: 28px;
  font-weight: 400;
  line-height: 26.6px;
  color: white;
  margin: 0;
`,Cd=Da.p`
  font-family: Euclid Circular A;
  font-size: 20px;
  font-weight: 400;
  line-height: 16.36px;
  color: white;
  margin: 0;
`,Ed=Da.div`
  background: #3320652e;
  border-radius: 30px;
  padding: 48px;
  margin: auto;
  margin-right: 20px;
  @media only screen and (max-width: 1400px) {
    margin: 20px;
  }
`,jd=Da.div`
  max-width: 1920px;
  width: 100%;
  position: relative;
  top: 193px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`,_d=Da.form`
  margin-left: 60px;
  height: 358px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,Pd=Da.button`
  width: 189px;
  height: 93px;
  background: #ebe3ff30;
  border: 2px solid #d9ff5a;
  border-radius: 50%;
  transform: rotate(-6deg);
  outline: none;

  &:hover,
  &:focus-visible {
    cursor: pointer;

    .button-text {
      color: #d9ff5a;
    }
  }
`,Ad=Da.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: white;
  margin: 0;
  transform: rotate(6deg);
`,Rd=Da.h1`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 60px;
  line-height: 76.08px;
  color: white;
  margin: 0px 0px 70px 60px;
`,Nd=Da.h2`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  color: white;
  margin: 0px;
  margin-bottom: 38px;
`,Td=Da.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Od=Da.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 25.36px;
  color: white;
  margin: 0px;
`,zd=Da.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 40px;
  line-height: 38px;
  color: white;
  margin: 0px;
  transform: rotate(13deg);
  padding-right: 10px;
`,Ld=Da.div`
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
`,Fd=Da.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(250, 143, 239);
  border-radius: 0.75rem;
`,Dd=Da.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 75px;
  line-height: 75px;
  color: white;
  margin: 20px;
  text-align: center;
`;function Id(){const[e,n]=(0,t.useState)(!1),[r,a]=(0,t.useState)(""),[i,o]=(0,t.useState)(""),[l,s]=(0,t.useState)(""),u=Ga((e=>e.cart.itemsInCart)),c=ui();if(0===u.length)return(0,Lo.jsx)(Ld,{children:(0,Lo.jsx)(Fd,{children:(0,Lo.jsxs)(Dd,{children:["\u0412 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0412\u0430\u0448\u0430 \u043a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 ",(0,Lo.jsx)(Dt,{to:"/",children:"\u0441\u044e\u0434\u0430"}),", \u0447\u0442\u043e\u0431\u044b \u0432\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"]})})});let d=0;for(let t=0;t<u.length;t++){let e=Number(u[t].price.replaceAll(" ",""));d+=u[t].count*e}return(0,Lo.jsx)(Lo.Fragment,{children:e?(0,Lo.jsx)(pd,{}):(0,Lo.jsxs)(jd,{children:[(0,Lo.jsxs)("div",{style:{margin:"0px 20px 20px 20px",flex:1,maxWidth:882,minWidth:620},children:[(0,Lo.jsx)(Rd,{children:"\u041e\u0424\u041e\u0420\u041c\u0418\u0422\u042c \u0417\u0410\u041a\u0410\u0417"}),(0,Lo.jsxs)(_d,{onSubmit:e=>function(e){e.stopPropagation(),e.preventDefault(),console.log(r,i,l),n(!0)}(e),children:[(0,Lo.jsx)(gl,{name:"name",placeholder:"\u0418\u041c\u042f",onChange:e=>a(e.target.value)}),(0,Lo.jsx)(gl,{name:"address",placeholder:"\u0410\u0414\u0420\u0415\u0421",onChange:e=>o(e.target.value)}),(0,Lo.jsx)(gl,{name:"phoneNumber",placeholder:"\u0422\u0415\u041b\u0415\u0424\u041e\u041d",onChange:e=>s(e.target.value)}),(0,Lo.jsx)(Pd,{type:"submit",children:(0,Lo.jsx)(Ad,{className:"button-text",children:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c"})})]})]}),(0,Lo.jsxs)(Ed,{children:[(0,Lo.jsx)(Nd,{children:"\u0421\u041e\u0421\u0422\u0410\u0412 \u0417\u0410\u041a\u0410\u0417\u0410"}),(0,Lo.jsx)("div",{style:{maxHeight:750,overflowY:"scroll",marginBottom:20},children:u.map((e=>(0,Lo.jsxs)(gd,{children:[(0,Lo.jsx)("img",{style:{maxWidth:150,maxHeight:200},src:e.image,alt:"itemImage"}),(0,Lo.jsxs)(wd,{children:[(0,Lo.jsxs)(vd,{children:[(0,Lo.jsxs)("div",{children:[(0,Lo.jsxs)("div",{style:{display:"flex",alignItems:"center",marginBottom:13},children:[(0,Lo.jsx)(yd,{style:{backgroundColor:`${e.background}`}}),(0,Lo.jsx)(xd,{children:e.name})]}),(0,Lo.jsx)(bd,{children:e.category})]}),(0,Lo.jsx)("input",{style:{outline:"none"},type:"image",src:Ia,alt:"trash",onClick:t=>{t.stopPropagation(),c(No(e))}})]}),(0,Lo.jsx)("div",{style:{border:"2px solid #D9FF5A"}}),(0,Lo.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:31},children:[(0,Lo.jsxs)(Sd,{children:[(0,Lo.jsx)(kd,{children:e.price}),(0,Lo.jsx)(Cd,{children:"\u20bd"})]}),(0,Lo.jsxs)(kd,{children:[e.count," \u0448\u0442."]})]})]})]},e.id)))}),(0,Lo.jsxs)(Td,{children:[(0,Lo.jsx)(Od,{children:"\u0418\u0422\u041e\u0413\u041e:"}),(0,Lo.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"237px",height:"111px",borderRadius:"50%",border:"2px solid #D9FF5A",background:"#FFFFFF30",transform:"rotate(-13deg)"},children:[(0,Lo.jsx)(zd,{children:d}),(0,Lo.jsx)(Cd,{style:{transform:"rotate(13deg)"},children:"\u20bd"})]})]})]})]})})}function Md(){const e=gt();return console.error(e),(0,Lo.jsxs)("div",{id:"error-page",children:[(0,Lo.jsx)("h1",{children:"Oops!"}),(0,Lo.jsx)("p",{children:"Sorry, an unexpected error has occurred."}),(0,Lo.jsx)("p",{children:(0,Lo.jsx)("i",{children:e.statusText||e.message})})]})}const Bd=function(e){const t=function(e){const{thunk:t=!0,immutableCheck:n=!0,serializableCheck:r=!0,actionCreatorCheck:a=!0}=e??{};let i=new po;return t&&(function(e){return"boolean"===typeof e}(t)?i.push(xi):i.push(bi(t.extraArgument))),i},{reducer:n,middleware:r,devTools:a=!0,preloadedState:i,enhancers:o}=e||{};let l,s;if("function"===typeof n)l=n;else{if(!hi(n))throw new Error(Po(1));l=gi(n)}s="function"===typeof r?r(t):t();let u=vi;a&&(u=co({trace:!1,..."object"===typeof a&&a}));const c=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>(n,r)=>{const a=e(n,r);let i=()=>{throw new Error(ci(15))};const o={getState:a.getState,dispatch:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return i(e,...n)}},l=t.map((e=>e(o)));return i=vi(...l)(a.dispatch),{...a,dispatch:i}}}(...s),d=xo(c);return mi(l,i,u(..."function"===typeof o?o(d):d()))}({reducer:{cart:zo,notification:As}}),Ud=function(e,t){return re({basename:null==t?void 0:t.basename,future:wt({},null==t?void 0:t.future,{v7_prependBasename:!0}),history:(n={window:null==t?void 0:t.window},void 0===n&&(n={}),m((function(e,t){let{pathname:n="/",search:r="",hash:a=""}=h(e.location.hash.substr(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),f("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");r=-1===n?t:t.slice(0,n)}return r+"#"+("string"===typeof t?t:p(t))}),(function(e,t){c("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")}),n)),hydrationData:(null==t?void 0:t.hydrationData)||Ct(),routes:e,mapRouteProperties:bt,unstable_dataStrategy:null==t?void 0:t.unstable_dataStrategy,unstable_patchRoutesOnNavigation:null==t?void 0:t.unstable_patchRoutesOnNavigation,window:null==t?void 0:t.window}).initialize();var n}([{element:(0,Lo.jsx)(ss,{}),errorElement:(0,Lo.jsx)(Md,{}),children:[{path:"/",element:(0,Lo.jsx)(md,{})},{path:"/order",element:(0,Lo.jsx)(Id,{})}]}]);const Hd=function(){return(0,Lo.jsx)(ai,{store:Bd,children:(0,Lo.jsx)(Tt,{router:Ud})})},Wd=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,6453)).then((t=>{let{getCLS:n,getFID:r,getFCP:a,getLCP:i,getTTFB:o}=t;n(e),r(e),a(e),i(e),o(e)}))};a.createRoot(document.getElementById("root")).render((0,Lo.jsx)(t.StrictMode,{children:(0,Lo.jsx)(Hd,{})})),Wd()})()})();
//# sourceMappingURL=main.8e91b06b.js.map