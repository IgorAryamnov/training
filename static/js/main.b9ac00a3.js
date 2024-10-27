/*! For license information please see main.b9ac00a3.js.LICENSE.txt */
(()=>{var e={2730:(e,t,n)=>{"use strict";var r=n(5043),a=n(8853);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,l={};function s(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(l[e]=t,e=0;e<t.length;e++)o.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},h={};function m(e,t,n,r,a,i,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var x=/[\-:]([a-z])/g;function v(e){return e[1].toUpperCase()}function y(e,t,n,r){var a=g.hasOwnProperty(t)?g[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!d.call(h,e)||!d.call(p,e)&&(f.test(e)?h[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(x,v);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(x,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(x,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var w=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,b=Symbol.for("react.element"),S=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),_=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),R=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var T=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var O=Symbol.iterator;function L(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=O&&e[O]||e["@@iterator"])?e:null}var D,F=Object.assign;function M(e){if(void 0===D)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);D=t&&t[1]||""}return"\n"+D+e}var I=!1;function B(e,t){if(!e||I)return"";I=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&"string"===typeof c.stack){for(var a=c.stack.split("\n"),i=r.stack.split("\n"),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(1!==o||1!==l)do{if(o--,0>--l||a[o]!==i[l]){var s="\n"+a[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=o&&0<=l);break}}}finally{I=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?M(e):""}function H(e){switch(e.tag){case 5:return M(e.type);case 16:return M("Lazy");case 13:return M("Suspense");case 19:return M("SuspenseList");case 0:case 2:case 15:return e=B(e.type,!1);case 11:return e=B(e.type.render,!1);case 1:return e=B(e.type,!0);default:return""}}function U(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case C:return"Fragment";case S:return"Portal";case E:return"Profiler";case k:return"StrictMode";case A:return"Suspense";case P:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case _:return(e.displayName||"Context")+".Consumer";case j:return(e._context.displayName||"Context")+".Provider";case z:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case N:return null!==(t=e.displayName||null)?t:U(e.type)||"Memo";case R:t=e._payload,e=e._init;try{return U(e(t))}catch(n){}}return null}function W(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return U(t);case 8:return t===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function $(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function K(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Q(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=V(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function q(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Y(e,t){var n=t.checked;return F({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Z(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=$(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function G(e,t){null!=(t=t.checked)&&y(e,"checked",t,!1)}function X(e,t){G(e,t);var n=$(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,$(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function J(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&q(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+$(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(i(91));return F({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ae(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(i(92));if(te(n)){if(1<n.length)throw Error(i(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:$(n)}}function ie(e,t){var n=$(t.value),r=$(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function oe(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,ue,de=(ue=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ue(e,t)}))}:ue);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(pe).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var xe=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ve(e,t){if(t){if(xe[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(i(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(i(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(i(62))}}function ye(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var we=null;function be(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Se=null,Ce=null,ke=null;function Ee(e){if(e=ya(e)){if("function"!==typeof Se)throw Error(i(280));var t=e.stateNode;t&&(t=ba(t),Se(e.stateNode,e.type,t))}}function je(e){Ce?ke?ke.push(e):ke=[e]:Ce=e}function _e(){if(Ce){var e=Ce,t=ke;if(ke=Ce=null,Ee(e),t)for(e=0;e<t.length;e++)Ee(t[e])}}function ze(e,t){return e(t)}function Ae(){}var Pe=!1;function Ne(e,t,n){if(Pe)return e(t,n);Pe=!0;try{return ze(e,t,n)}finally{Pe=!1,(null!==Ce||null!==ke)&&(Ae(),_e())}}function Re(e,t){var n=e.stateNode;if(null===n)return null;var r=ba(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(i(231,t,typeof n));return n}var Te=!1;if(u)try{var Oe={};Object.defineProperty(Oe,"passive",{get:function(){Te=!0}}),window.addEventListener("test",Oe,Oe),window.removeEventListener("test",Oe,Oe)}catch(ue){Te=!1}function Le(e,t,n,r,a,i,o,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var De=!1,Fe=null,Me=!1,Ie=null,Be={onError:function(e){De=!0,Fe=e}};function He(e,t,n,r,a,i,o,l,s){De=!1,Fe=null,Le.apply(Be,arguments)}function Ue(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function We(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function $e(e){if(Ue(e)!==e)throw Error(i(188))}function Ve(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ue(e)))throw Error(i(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var o=a.alternate;if(null===o){if(null!==(r=a.return)){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return $e(a),e;if(o===r)return $e(a),t;o=o.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=o;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,r=o;break}if(s===r){l=!0,r=a,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=a;break}if(s===r){l=!0,r=o,n=a;break}s=s.sibling}if(!l)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(3!==n.tag)throw Error(i(188));return n.stateNode.current===n?e:t}(e))?Ke(e):null}function Ke(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ke(e);if(null!==t)return t;e=e.sibling}return null}var Qe=a.unstable_scheduleCallback,qe=a.unstable_cancelCallback,Ye=a.unstable_shouldYield,Ze=a.unstable_requestPaint,Ge=a.unstable_now,Xe=a.unstable_getCurrentPriorityLevel,Je=a.unstable_ImmediatePriority,et=a.unstable_UserBlockingPriority,tt=a.unstable_NormalPriority,nt=a.unstable_LowPriority,rt=a.unstable_IdlePriority,at=null,it=null;var ot=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ct=64,ut=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=268435455&n;if(0!==o){var l=o&~a;0!==l?r=dt(l):0!==(i&=o)&&(r=dt(i))}else 0!==(o=n&~a)?r=dt(o):0!==i&&(r=dt(i));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(i=t&-t)||16===a&&0!==(4194240&i)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-ot(t)),r|=e[n],t&=~a;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-ot(t)]=n}function vt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var yt=0;function wt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var bt,St,Ct,kt,Et,jt=!1,_t=[],zt=null,At=null,Pt=null,Nt=new Map,Rt=new Map,Tt=[],Ot="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lt(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":At=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":Nt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rt.delete(t.pointerId)}}function Dt(e,t,n,r,a,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},null!==t&&(null!==(t=ya(t))&&St(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Ft(e){var t=va(e.target);if(null!==t){var n=Ue(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=We(n)))return e.blockedOn=t,void Et(e.priority,(function(){Ct(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Mt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=ya(n))&&St(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);we=r,n.target.dispatchEvent(r),we=null,t.shift()}return!0}function It(e,t,n){Mt(e)&&n.delete(t)}function Bt(){jt=!1,null!==zt&&Mt(zt)&&(zt=null),null!==At&&Mt(At)&&(At=null),null!==Pt&&Mt(Pt)&&(Pt=null),Nt.forEach(It),Rt.forEach(It)}function Ht(e,t){e.blockedOn===t&&(e.blockedOn=null,jt||(jt=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Bt)))}function Ut(e){function t(t){return Ht(t,e)}if(0<_t.length){Ht(_t[0],e);for(var n=1;n<_t.length;n++){var r=_t[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==zt&&Ht(zt,e),null!==At&&Ht(At,e),null!==Pt&&Ht(Pt,e),Nt.forEach(t),Rt.forEach(t),n=0;n<Tt.length;n++)(r=Tt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Tt.length&&null===(n=Tt[0]).blockedOn;)Ft(n),null===n.blockedOn&&Tt.shift()}var Wt=w.ReactCurrentBatchConfig,$t=!0;function Vt(e,t,n,r){var a=yt,i=Wt.transition;Wt.transition=null;try{yt=1,Qt(e,t,n,r)}finally{yt=a,Wt.transition=i}}function Kt(e,t,n,r){var a=yt,i=Wt.transition;Wt.transition=null;try{yt=4,Qt(e,t,n,r)}finally{yt=a,Wt.transition=i}}function Qt(e,t,n,r){if($t){var a=Yt(e,t,n,r);if(null===a)$r(e,t,r,qt,n),Lt(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return zt=Dt(zt,e,t,n,r,a),!0;case"dragenter":return At=Dt(At,e,t,n,r,a),!0;case"mouseover":return Pt=Dt(Pt,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return Nt.set(i,Dt(Nt.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Rt.set(i,Dt(Rt.get(i)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Lt(e,r),4&t&&-1<Ot.indexOf(e)){for(;null!==a;){var i=ya(a);if(null!==i&&bt(i),null===(i=Yt(e,t,n,r))&&$r(e,t,r,qt,n),i===a)break;a=i}null!==a&&r.stopPropagation()}else $r(e,t,r,null,n)}}var qt=null;function Yt(e,t,n,r){if(qt=null,null!==(e=va(e=be(r))))if(null===(t=Ue(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=We(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qt=e,null}function Zt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xe()){case Je:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Gt=null,Xt=null,Jt=null;function en(){if(Jt)return Jt;var e,t,n=Xt,r=n.length,a="value"in Gt?Gt.value:Gt.textContent,i=a.length;for(e=0;e<r&&n[e]===a[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===a[i-t];t++);return Jt=a.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,r,a,i){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(a):a[o]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,ln,sn,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},un=an(cn),dn=F({},cn,{view:0,detail:0}),fn=an(dn),pn=F({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:En,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(on=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=on=0,sn=e),on)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),hn=an(pn),mn=an(F({},pn,{dataTransfer:0})),gn=an(F({},dn,{relatedTarget:0})),xn=an(F({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),vn=F({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yn=an(vn),wn=an(F({},cn,{data:0})),bn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Cn[e])&&!!t[e]}function En(){return kn}var jn=F({},dn,{key:function(e){if(e.key){var t=bn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Sn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:En,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),_n=an(jn),zn=an(F({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),An=an(F({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:En})),Pn=an(F({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Nn=F({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rn=an(Nn),Tn=[9,13,27,32],On=u&&"CompositionEvent"in window,Ln=null;u&&"documentMode"in document&&(Ln=document.documentMode);var Dn=u&&"TextEvent"in window&&!Ln,Fn=u&&(!On||Ln&&8<Ln&&11>=Ln),Mn=String.fromCharCode(32),In=!1;function Bn(e,t){switch(e){case"keyup":return-1!==Tn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Un=!1;var Wn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $n(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Wn[e.type]:"textarea"===t}function Vn(e,t,n,r){je(r),0<(t=Kr(t,"onChange")).length&&(n=new un("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kn=null,Qn=null;function qn(e){Mr(e,0)}function Yn(e){if(Q(wa(e)))return e}function Zn(e,t){if("change"===e)return t}var Gn=!1;if(u){var Xn;if(u){var Jn="oninput"in document;if(!Jn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Jn="function"===typeof er.oninput}Xn=Jn}else Xn=!1;Gn=Xn&&(!document.documentMode||9<document.documentMode)}function tr(){Kn&&(Kn.detachEvent("onpropertychange",nr),Qn=Kn=null)}function nr(e){if("value"===e.propertyName&&Yn(Qn)){var t=[];Vn(t,Qn,e,be(e)),Ne(qn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Qn=n,(Kn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ar(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Yn(Qn)}function ir(e,t){if("click"===e)return Yn(t)}function or(e,t){if("input"===e||"change"===e)return Yn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!d.call(t,a)||!lr(e[a],t[a]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ur(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=q();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=q((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=void 0===r.end?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=ur(n,i);var o=ur(n,r);a&&o&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=u&&"documentMode"in document&&11>=document.documentMode,gr=null,xr=null,vr=null,yr=!1;function wr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;yr||null==gr||gr!==q(r)||("selectionStart"in(r=gr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},vr&&sr(vr,r)||(vr=r,0<(r=Kr(xr,"onSelect")).length&&(t=new un("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:br("Animation","AnimationEnd"),animationiteration:br("Animation","AnimationIteration"),animationstart:br("Animation","AnimationStart"),transitionend:br("Transition","TransitionEnd")},Cr={},kr={};function Er(e){if(Cr[e])return Cr[e];if(!Sr[e])return e;var t,n=Sr[e];for(t in n)if(n.hasOwnProperty(t)&&t in kr)return Cr[e]=n[t];return e}u&&(kr=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);var jr=Er("animationend"),_r=Er("animationiteration"),zr=Er("animationstart"),Ar=Er("transitionend"),Pr=new Map,Nr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(e,t){Pr.set(e,t),s(t,[e])}for(var Tr=0;Tr<Nr.length;Tr++){var Or=Nr[Tr];Rr(Or.toLowerCase(),"on"+(Or[0].toUpperCase()+Or.slice(1)))}Rr(jr,"onAnimationEnd"),Rr(_r,"onAnimationIteration"),Rr(zr,"onAnimationStart"),Rr("dblclick","onDoubleClick"),Rr("focusin","onFocus"),Rr("focusout","onBlur"),Rr(Ar,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function Fr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,o,l,s,c){if(He.apply(this,arguments),De){if(!De)throw Error(i(198));var u=Fe;De=!1,Fe=null,Me||(Me=!0,Ie=u)}}(r,t,void 0,e),e.currentTarget=null}function Mr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==i&&a.isPropagationStopped())break e;Fr(a,l,c),i=s}else for(o=0;o<r.length;o++){if(s=(l=r[o]).instance,c=l.currentTarget,l=l.listener,s!==i&&a.isPropagationStopped())break e;Fr(a,l,c),i=s}}}if(Me)throw e=Ie,Me=!1,Ie=null,e}function Ir(e,t){var n=t[ma];void 0===n&&(n=t[ma]=new Set);var r=e+"__bubble";n.has(r)||(Wr(t,e,2,!1),n.add(r))}function Br(e,t,n){var r=0;t&&(r|=4),Wr(n,e,r,t)}var Hr="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[Hr]){e[Hr]=!0,o.forEach((function(t){"selectionchange"!==t&&(Dr.has(t)||Br(t,!1,e),Br(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Hr]||(t[Hr]=!0,Br("selectionchange",!1,t))}}function Wr(e,t,n,r){switch(Zt(t)){case 1:var a=Vt;break;case 4:a=Kt;break;default:a=Qt}n=a.bind(null,t,n,e),a=void 0,!Te||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function $r(e,t,n,r,a){var i=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var l=r.stateNode.containerInfo;if(l===a||8===l.nodeType&&l.parentNode===a)break;if(4===o)for(o=r.return;null!==o;){var s=o.tag;if((3===s||4===s)&&((s=o.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;o=o.return}for(;null!==l;){if(null===(o=va(l)))return;if(5===(s=o.tag)||6===s){r=i=o;continue e}l=l.parentNode}}r=r.return}Ne((function(){var r=i,a=be(n),o=[];e:{var l=Pr.get(e);if(void 0!==l){var s=un,c=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=_n;break;case"focusin":c="focus",s=gn;break;case"focusout":c="blur",s=gn;break;case"beforeblur":case"afterblur":s=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=An;break;case jr:case _r:case zr:s=xn;break;case Ar:s=Pn;break;case"scroll":s=fn;break;case"wheel":s=Rn;break;case"copy":case"cut":case"paste":s=yn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=zn}var u=0!==(4&t),d=!u&&"scroll"===e,f=u?null!==l?l+"Capture":null:l;u=[];for(var p,h=r;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&(null!=(m=Re(h,f))&&u.push(Vr(h,m,p)))),d)break;h=h.return}0<u.length&&(l=new s(l,c,null,n,a),o.push({event:l,listeners:u}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===we||!(c=n.relatedTarget||n.fromElement)||!va(c)&&!c[ha])&&(s||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(c=(c=n.relatedTarget||n.toElement)?va(c):null)&&(c!==(d=Ue(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(s=null,c=r),s!==c)){if(u=hn,m="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(u=zn,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==s?l:wa(s),p=null==c?l:wa(c),(l=new u(m,h+"leave",s,n,a)).target=d,l.relatedTarget=p,m=null,va(a)===r&&((u=new u(f,h+"enter",c,n,a)).target=p,u.relatedTarget=d,m=u),d=m,s&&c)e:{for(f=c,h=0,p=u=s;p;p=Qr(p))h++;for(p=0,m=f;m;m=Qr(m))p++;for(;0<h-p;)u=Qr(u),h--;for(;0<p-h;)f=Qr(f),p--;for(;h--;){if(u===f||null!==f&&u===f.alternate)break e;u=Qr(u),f=Qr(f)}u=null}else u=null;null!==s&&qr(o,l,s,u,!1),null!==c&&null!==d&&qr(o,d,c,u,!0)}if("select"===(s=(l=r?wa(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=Zn;else if($n(l))if(Gn)g=or;else{g=ar;var x=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=ir);switch(g&&(g=g(e,r))?Vn(o,g,n,a):(x&&x(e,l,r),"focusout"===e&&(x=l._wrapperState)&&x.controlled&&"number"===l.type&&ee(l,"number",l.value)),x=r?wa(r):window,e){case"focusin":($n(x)||"true"===x.contentEditable)&&(gr=x,xr=r,vr=null);break;case"focusout":vr=xr=gr=null;break;case"mousedown":yr=!0;break;case"contextmenu":case"mouseup":case"dragend":yr=!1,wr(o,n,a);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":wr(o,n,a)}var v;if(On)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Un?Bn(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(Fn&&"ko"!==n.locale&&(Un||"onCompositionStart"!==y?"onCompositionEnd"===y&&Un&&(v=en()):(Xt="value"in(Gt=a)?Gt.value:Gt.textContent,Un=!0)),0<(x=Kr(r,y)).length&&(y=new wn(y,e,null,n,a),o.push({event:y,listeners:x}),v?y.data=v:null!==(v=Hn(n))&&(y.data=v))),(v=Dn?function(e,t){switch(e){case"compositionend":return Hn(t);case"keypress":return 32!==t.which?null:(In=!0,Mn);case"textInput":return(e=t.data)===Mn&&In?null:e;default:return null}}(e,n):function(e,t){if(Un)return"compositionend"===e||!On&&Bn(e,t)?(e=en(),Jt=Xt=Gt=null,Un=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Kr(r,"onBeforeInput")).length&&(a=new wn("onBeforeInput","beforeinput",null,n,a),o.push({event:a,listeners:r}),a.data=v))}Mr(o,t)}))}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Kr(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,i=a.stateNode;5===a.tag&&null!==i&&(a=i,null!=(i=Re(e,n))&&r.unshift(Vr(e,i,a)),null!=(i=Re(e,t))&&r.push(Vr(e,i,a))),e=e.return}return r}function Qr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function qr(e,t,n,r,a){for(var i=t._reactName,o=[];null!==n&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==c&&(l=c,a?null!=(s=Re(n,i))&&o.unshift(Vr(n,s,l)):a||null!=(s=Re(n,i))&&o.push(Vr(n,s,l))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Yr=/\r\n?/g,Zr=/\u0000|\uFFFD/g;function Gr(e){return("string"===typeof e?e:""+e).replace(Yr,"\n").replace(Zr,"")}function Xr(e,t,n){if(t=Gr(t),Gr(e)!==t&&n)throw Error(i(425))}function Jr(){}var ea=null,ta=null;function na(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ra="function"===typeof setTimeout?setTimeout:void 0,aa="function"===typeof clearTimeout?clearTimeout:void 0,ia="function"===typeof Promise?Promise:void 0,oa="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ia?function(e){return ia.resolve(null).then(e).catch(la)}:ra;function la(e){setTimeout((function(){throw e}))}function sa(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void Ut(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);Ut(t)}function ca(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ua(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var da=Math.random().toString(36).slice(2),fa="__reactFiber$"+da,pa="__reactProps$"+da,ha="__reactContainer$"+da,ma="__reactEvents$"+da,ga="__reactListeners$"+da,xa="__reactHandles$"+da;function va(e){var t=e[fa];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ha]||n[fa]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ua(e);null!==e;){if(n=e[fa])return n;e=ua(e)}return t}n=(e=n).parentNode}return null}function ya(e){return!(e=e[fa]||e[ha])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function wa(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(i(33))}function ba(e){return e[pa]||null}var Sa=[],Ca=-1;function ka(e){return{current:e}}function Ea(e){0>Ca||(e.current=Sa[Ca],Sa[Ca]=null,Ca--)}function ja(e,t){Ca++,Sa[Ca]=e.current,e.current=t}var _a={},za=ka(_a),Aa=ka(!1),Pa=_a;function Na(e,t){var n=e.type.contextTypes;if(!n)return _a;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,i={};for(a in n)i[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ra(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Ta(){Ea(Aa),Ea(za)}function Oa(e,t,n){if(za.current!==_a)throw Error(i(168));ja(za,t),ja(Aa,n)}function La(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in t))throw Error(i(108,W(e)||"Unknown",a));return F({},n,r)}function Da(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_a,Pa=za.current,ja(za,e),ja(Aa,Aa.current),!0}function Fa(e,t,n){var r=e.stateNode;if(!r)throw Error(i(169));n?(e=La(e,t,Pa),r.__reactInternalMemoizedMergedChildContext=e,Ea(Aa),Ea(za),ja(za,e)):Ea(Aa),ja(Aa,n)}var Ma=null,Ia=!1,Ba=!1;function Ha(e){null===Ma?Ma=[e]:Ma.push(e)}function Ua(){if(!Ba&&null!==Ma){Ba=!0;var e=0,t=yt;try{var n=Ma;for(yt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ma=null,Ia=!1}catch(a){throw null!==Ma&&(Ma=Ma.slice(e+1)),Qe(Je,Ua),a}finally{yt=t,Ba=!1}}return null}var Wa=[],$a=0,Va=null,Ka=0,Qa=[],qa=0,Ya=null,Za=1,Ga="";function Xa(e,t){Wa[$a++]=Ka,Wa[$a++]=Va,Va=e,Ka=t}function Ja(e,t,n){Qa[qa++]=Za,Qa[qa++]=Ga,Qa[qa++]=Ya,Ya=e;var r=Za;e=Ga;var a=32-ot(r)-1;r&=~(1<<a),n+=1;var i=32-ot(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,Za=1<<32-ot(t)+a|n<<a|r,Ga=i+e}else Za=1<<i|n<<a|r,Ga=e}function ei(e){null!==e.return&&(Xa(e,1),Ja(e,1,0))}function ti(e){for(;e===Va;)Va=Wa[--$a],Wa[$a]=null,Ka=Wa[--$a],Wa[$a]=null;for(;e===Ya;)Ya=Qa[--qa],Qa[qa]=null,Ga=Qa[--qa],Qa[qa]=null,Za=Qa[--qa],Qa[qa]=null}var ni=null,ri=null,ai=!1,ii=null;function oi(e,t){var n=Nc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function li(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ni=e,ri=ca(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ni=e,ri=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Ya?{id:Za,overflow:Ga}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Nc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ni=e,ri=null,!0);default:return!1}}function si(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ci(e){if(ai){var t=ri;if(t){var n=t;if(!li(e,t)){if(si(e))throw Error(i(418));t=ca(n.nextSibling);var r=ni;t&&li(e,t)?oi(r,n):(e.flags=-4097&e.flags|2,ai=!1,ni=e)}}else{if(si(e))throw Error(i(418));e.flags=-4097&e.flags|2,ai=!1,ni=e}}}function ui(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ni=e}function di(e){if(e!==ni)return!1;if(!ai)return ui(e),ai=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!na(e.type,e.memoizedProps)),t&&(t=ri)){if(si(e))throw fi(),Error(i(418));for(;t;)oi(e,t),t=ca(t.nextSibling)}if(ui(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ri=ca(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ri=null}}else ri=ni?ca(e.stateNode.nextSibling):null;return!0}function fi(){for(var e=ri;e;)e=ca(e.nextSibling)}function pi(){ri=ni=null,ai=!1}function hi(e){null===ii?ii=[e]:ii.push(e)}var mi=w.ReactCurrentBatchConfig;function gi(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(i(309));var r=n.stateNode}if(!r)throw Error(i(147,e));var a=r,o=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;null===e?delete t[o]:t[o]=e},t._stringRef=o,t)}if("string"!==typeof e)throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function xi(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vi(e){return(0,e._init)(e._payload)}function yi(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=Tc(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Fc(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function c(e,t,n,r){var i=n.type;return i===C?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===R&&vi(i)===t.type)?((r=a(t,n.props)).ref=gi(e,t,n),r.return=e,r):((r=Oc(n.type,n.key,n.props,null,e.mode,r)).ref=gi(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Mc(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,i){return null===t||7!==t.tag?((t=Lc(n,e.mode,r,i)).return=e,t):((t=a(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Fc(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case b:return(n=Oc(t.type,t.key,t.props,null,e.mode,n)).ref=gi(e,null,t),n.return=e,n;case S:return(t=Mc(t,e.mode,n)).return=e,t;case R:return f(e,(0,t._init)(t._payload),n)}if(te(t)||L(t))return(t=Lc(t,e.mode,n,null)).return=e,t;xi(e,t)}return null}function p(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case b:return n.key===a?c(e,t,n,r):null;case S:return n.key===a?u(e,t,n,r):null;case R:return p(e,t,(a=n._init)(n._payload),r)}if(te(n)||L(n))return null!==a?null:d(e,t,n,r,null);xi(e,n)}return null}function h(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case b:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case S:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case R:return h(e,t,n,(0,r._init)(r._payload),a)}if(te(r)||L(r))return d(t,e=e.get(n)||null,r,a,null);xi(t,r)}return null}function m(a,i,l,s){for(var c=null,u=null,d=i,m=i=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var x=p(a,d,l[m],s);if(null===x){null===d&&(d=g);break}e&&d&&null===x.alternate&&t(a,d),i=o(x,i,m),null===u?c=x:u.sibling=x,u=x,d=g}if(m===l.length)return n(a,d),ai&&Xa(a,m),c;if(null===d){for(;m<l.length;m++)null!==(d=f(a,l[m],s))&&(i=o(d,i,m),null===u?c=d:u.sibling=d,u=d);return ai&&Xa(a,m),c}for(d=r(a,d);m<l.length;m++)null!==(g=h(d,a,m,l[m],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),i=o(g,i,m),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach((function(e){return t(a,e)})),ai&&Xa(a,m),c}function g(a,l,s,c){var u=L(s);if("function"!==typeof u)throw Error(i(150));if(null==(s=u.call(s)))throw Error(i(151));for(var d=u=null,m=l,g=l=0,x=null,v=s.next();null!==m&&!v.done;g++,v=s.next()){m.index>g?(x=m,m=null):x=m.sibling;var y=p(a,m,v.value,c);if(null===y){null===m&&(m=x);break}e&&m&&null===y.alternate&&t(a,m),l=o(y,l,g),null===d?u=y:d.sibling=y,d=y,m=x}if(v.done)return n(a,m),ai&&Xa(a,g),u;if(null===m){for(;!v.done;g++,v=s.next())null!==(v=f(a,v.value,c))&&(l=o(v,l,g),null===d?u=v:d.sibling=v,d=v);return ai&&Xa(a,g),u}for(m=r(a,m);!v.done;g++,v=s.next())null!==(v=h(m,a,g,v.value,c))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),l=o(v,l,g),null===d?u=v:d.sibling=v,d=v);return e&&m.forEach((function(e){return t(a,e)})),ai&&Xa(a,g),u}return function e(r,i,o,s){if("object"===typeof o&&null!==o&&o.type===C&&null===o.key&&(o=o.props.children),"object"===typeof o&&null!==o){switch(o.$$typeof){case b:e:{for(var c=o.key,u=i;null!==u;){if(u.key===c){if((c=o.type)===C){if(7===u.tag){n(r,u.sibling),(i=a(u,o.props.children)).return=r,r=i;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===R&&vi(c)===u.type){n(r,u.sibling),(i=a(u,o.props)).ref=gi(r,u,o),i.return=r,r=i;break e}n(r,u);break}t(r,u),u=u.sibling}o.type===C?((i=Lc(o.props.children,r.mode,s,o.key)).return=r,r=i):((s=Oc(o.type,o.key,o.props,null,r.mode,s)).ref=gi(r,i,o),s.return=r,r=s)}return l(r);case S:e:{for(u=o.key;null!==i;){if(i.key===u){if(4===i.tag&&i.stateNode.containerInfo===o.containerInfo&&i.stateNode.implementation===o.implementation){n(r,i.sibling),(i=a(i,o.children||[])).return=r,r=i;break e}n(r,i);break}t(r,i),i=i.sibling}(i=Mc(o,r.mode,s)).return=r,r=i}return l(r);case R:return e(r,i,(u=o._init)(o._payload),s)}if(te(o))return m(r,i,o,s);if(L(o))return g(r,i,o,s);xi(r,o)}return"string"===typeof o&&""!==o||"number"===typeof o?(o=""+o,null!==i&&6===i.tag?(n(r,i.sibling),(i=a(i,o)).return=r,r=i):(n(r,i),(i=Fc(o,r.mode,s)).return=r,r=i),l(r)):n(r,i)}}var wi=yi(!0),bi=yi(!1),Si=ka(null),Ci=null,ki=null,Ei=null;function ji(){Ei=ki=Ci=null}function _i(e){var t=Si.current;Ea(Si),e._currentValue=t}function zi(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ai(e,t){Ci=e,Ei=ki=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(yl=!0),e.firstContext=null)}function Pi(e){var t=e._currentValue;if(Ei!==e)if(e={context:e,memoizedValue:t,next:null},null===ki){if(null===Ci)throw Error(i(308));ki=e,Ci.dependencies={lanes:0,firstContext:e}}else ki=ki.next=e;return t}var Ni=null;function Ri(e){null===Ni?Ni=[e]:Ni.push(e)}function Ti(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,Ri(t)):(n.next=a.next,a.next=n),t.interleaved=n,Oi(e,r)}function Oi(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Li=!1;function Di(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mi(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ii(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&zs)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Oi(e,n)}return null===(a=r.interleaved)?(t.next=t,Ri(r)):(t.next=a.next,a.next=t),r.interleaved=t,Oi(e,n)}function Bi(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}function Hi(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===i?a=i=o:i=i.next=o,n=n.next}while(null!==n);null===i?a=i=t:i=i.next=t}else a=i=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ui(e,t,n,r){var a=e.updateQueue;Li=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,c=s.next;s.next=null,null===o?i=c:o.next=c,o=s;var u=e.alternate;null!==u&&((l=(u=u.updateQueue).lastBaseUpdate)!==o&&(null===l?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(null!==i){var d=a.baseState;for(o=0,u=c=s=null,l=i;;){var f=l.lane,p=l.eventTime;if((r&f)===f){null!==u&&(u=u.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,m=l;switch(f=t,p=n,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=m.payload)?h.call(p,d,f):h)||void 0===f)break e;d=F({},d,f);break e;case 2:Li=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=a.effects)?a.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===u?(c=u=p,s=d):u=u.next=p,o|=f;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(f=l).next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}if(null===u&&(s=d),a.baseState=s,a.firstBaseUpdate=c,a.lastBaseUpdate=u,null!==(t=a.shared.interleaved)){a=t;do{o|=a.lane,a=a.next}while(a!==t)}else null===i&&(a.shared.lanes=0);Ds|=o,e.lanes=o,e.memoizedState=d}}function Wi(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!==typeof a)throw Error(i(191,a));a.call(r)}}}var $i={},Vi=ka($i),Ki=ka($i),Qi=ka($i);function qi(e){if(e===$i)throw Error(i(174));return e}function Yi(e,t){switch(ja(Qi,t),ja(Ki,e),ja(Vi,$i),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ea(Vi),ja(Vi,t)}function Zi(){Ea(Vi),Ea(Ki),Ea(Qi)}function Gi(e){qi(Qi.current);var t=qi(Vi.current),n=se(t,e.type);t!==n&&(ja(Ki,e),ja(Vi,n))}function Xi(e){Ki.current===e&&(Ea(Vi),Ea(Ki))}var Ji=ka(0);function eo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var to=[];function no(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var ro=w.ReactCurrentDispatcher,ao=w.ReactCurrentBatchConfig,io=0,oo=null,lo=null,so=null,co=!1,uo=!1,fo=0,po=0;function ho(){throw Error(i(321))}function mo(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function go(e,t,n,r,a,o){if(io=o,oo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=null===e||null===e.memoizedState?Jo:el,e=n(r,a),uo){o=0;do{if(uo=!1,fo=0,25<=o)throw Error(i(301));o+=1,so=lo=null,t.updateQueue=null,ro.current=tl,e=n(r,a)}while(uo)}if(ro.current=Xo,t=null!==lo&&null!==lo.next,io=0,so=lo=oo=null,co=!1,t)throw Error(i(300));return e}function xo(){var e=0!==fo;return fo=0,e}function vo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===so?oo.memoizedState=so=e:so=so.next=e,so}function yo(){if(null===lo){var e=oo.alternate;e=null!==e?e.memoizedState:null}else e=lo.next;var t=null===so?oo.memoizedState:so.next;if(null!==t)so=t,lo=e;else{if(null===e)throw Error(i(310));e={memoizedState:(lo=e).memoizedState,baseState:lo.baseState,baseQueue:lo.baseQueue,queue:lo.queue,next:null},null===so?oo.memoizedState=so=e:so=so.next=e}return so}function wo(e,t){return"function"===typeof t?t(e):t}function bo(e){var t=yo(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=lo,a=r.baseQueue,o=n.pending;if(null!==o){if(null!==a){var l=a.next;a.next=o.next,o.next=l}r.baseQueue=a=o,n.pending=null}if(null!==a){o=a.next,r=r.baseState;var s=l=null,c=null,u=o;do{var d=u.lane;if((io&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(s=c=f,l=r):c=c.next=f,oo.lanes|=d,Ds|=d}u=u.next}while(null!==u&&u!==o);null===c?l=r:c.next=s,lr(r,t.memoizedState)||(yl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e;do{o=a.lane,oo.lanes|=o,Ds|=o,a=a.next}while(a!==e)}else null===a&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function So(e){var t=yo(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{o=e(o,l.action),l=l.next}while(l!==a);lr(o,t.memoizedState)||(yl=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Co(){}function ko(e,t){var n=oo,r=yo(),a=t(),o=!lr(r.memoizedState,a);if(o&&(r.memoizedState=a,yl=!0),r=r.queue,Do(_o.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||null!==so&&1&so.memoizedState.tag){if(n.flags|=2048,No(9,jo.bind(null,n,r,a,t),void 0,null),null===As)throw Error(i(349));0!==(30&io)||Eo(n,t,a)}return a}function Eo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function jo(e,t,n,r){t.value=n,t.getSnapshot=r,zo(t)&&Ao(e)}function _o(e,t,n){return n((function(){zo(t)&&Ao(e)}))}function zo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function Ao(e){var t=Oi(e,1);null!==t&&nc(t,e,1,-1)}function Po(e){var t=vo();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wo,lastRenderedState:e},t.queue=e,e=e.dispatch=qo.bind(null,oo,e),[t.memoizedState,e]}function No(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ro(){return yo().memoizedState}function To(e,t,n,r){var a=vo();oo.flags|=e,a.memoizedState=No(1|t,n,void 0,void 0===r?null:r)}function Oo(e,t,n,r){var a=yo();r=void 0===r?null:r;var i=void 0;if(null!==lo){var o=lo.memoizedState;if(i=o.destroy,null!==r&&mo(r,o.deps))return void(a.memoizedState=No(t,n,i,r))}oo.flags|=e,a.memoizedState=No(1|t,n,i,r)}function Lo(e,t){return To(8390656,8,e,t)}function Do(e,t){return Oo(2048,8,e,t)}function Fo(e,t){return Oo(4,2,e,t)}function Mo(e,t){return Oo(4,4,e,t)}function Io(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Bo(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Oo(4,4,Io.bind(null,t,e),n)}function Ho(){}function Uo(e,t){var n=yo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wo(e,t){var n=yo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function $o(e,t,n){return 0===(21&io)?(e.baseState&&(e.baseState=!1,yl=!0),e.memoizedState=n):(lr(n,t)||(n=mt(),oo.lanes|=n,Ds|=n,e.baseState=!0),t)}function Vo(e,t){var n=yt;yt=0!==n&&4>n?n:4,e(!0);var r=ao.transition;ao.transition={};try{e(!1),t()}finally{yt=n,ao.transition=r}}function Ko(){return yo().memoizedState}function Qo(e,t,n){var r=tc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Yo(e))Zo(t,n);else if(null!==(n=Ti(e,t,n,r))){nc(n,e,r,ec()),Go(n,t,r)}}function qo(e,t,n){var r=tc(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yo(e))Zo(t,a);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var o=t.lastRenderedState,l=i(o,n);if(a.hasEagerState=!0,a.eagerState=l,lr(l,o)){var s=t.interleaved;return null===s?(a.next=a,Ri(t)):(a.next=s.next,s.next=a),void(t.interleaved=a)}}catch(c){}null!==(n=Ti(e,t,a,r))&&(nc(n,e,r,a=ec()),Go(n,t,r))}}function Yo(e){var t=e.alternate;return e===oo||null!==t&&t===oo}function Zo(e,t){uo=co=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Go(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}var Xo={readContext:Pi,useCallback:ho,useContext:ho,useEffect:ho,useImperativeHandle:ho,useInsertionEffect:ho,useLayoutEffect:ho,useMemo:ho,useReducer:ho,useRef:ho,useState:ho,useDebugValue:ho,useDeferredValue:ho,useTransition:ho,useMutableSource:ho,useSyncExternalStore:ho,useId:ho,unstable_isNewReconciler:!1},Jo={readContext:Pi,useCallback:function(e,t){return vo().memoizedState=[e,void 0===t?null:t],e},useContext:Pi,useEffect:Lo,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,To(4194308,4,Io.bind(null,t,e),n)},useLayoutEffect:function(e,t){return To(4194308,4,e,t)},useInsertionEffect:function(e,t){return To(4,2,e,t)},useMemo:function(e,t){var n=vo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Qo.bind(null,oo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},vo().memoizedState=e},useState:Po,useDebugValue:Ho,useDeferredValue:function(e){return vo().memoizedState=e},useTransition:function(){var e=Po(!1),t=e[0];return e=Vo.bind(null,e[1]),vo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oo,a=vo();if(ai){if(void 0===n)throw Error(i(407));n=n()}else{if(n=t(),null===As)throw Error(i(349));0!==(30&io)||Eo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Lo(_o.bind(null,r,o,e),[e]),r.flags|=2048,No(9,jo.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=vo(),t=As.identifierPrefix;if(ai){var n=Ga;t=":"+t+"R"+(n=(Za&~(1<<32-ot(Za)-1)).toString(32)+n),0<(n=fo++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=po++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:Pi,useCallback:Uo,useContext:Pi,useEffect:Do,useImperativeHandle:Bo,useInsertionEffect:Fo,useLayoutEffect:Mo,useMemo:Wo,useReducer:bo,useRef:Ro,useState:function(){return bo(wo)},useDebugValue:Ho,useDeferredValue:function(e){return $o(yo(),lo.memoizedState,e)},useTransition:function(){return[bo(wo)[0],yo().memoizedState]},useMutableSource:Co,useSyncExternalStore:ko,useId:Ko,unstable_isNewReconciler:!1},tl={readContext:Pi,useCallback:Uo,useContext:Pi,useEffect:Do,useImperativeHandle:Bo,useInsertionEffect:Fo,useLayoutEffect:Mo,useMemo:Wo,useReducer:So,useRef:Ro,useState:function(){return So(wo)},useDebugValue:Ho,useDeferredValue:function(e){var t=yo();return null===lo?t.memoizedState=e:$o(t,lo.memoizedState,e)},useTransition:function(){return[So(wo)[0],yo().memoizedState]},useMutableSource:Co,useSyncExternalStore:ko,useId:Ko,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=F({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:F({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var al={isMounted:function(e){return!!(e=e._reactInternals)&&Ue(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ec(),a=tc(e),i=Mi(r,a);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Ii(e,i,a))&&(nc(t,e,a,r),Bi(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ec(),a=tc(e),i=Mi(r,a);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Ii(e,i,a))&&(nc(t,e,a,r),Bi(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ec(),r=tc(e),a=Mi(n,r);a.tag=2,void 0!==t&&null!==t&&(a.callback=t),null!==(t=Ii(e,a,r))&&(nc(t,e,r,n),Bi(t,e,r))}};function il(e,t,n,r,a,i,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,o):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(a,i))}function ol(e,t,n){var r=!1,a=_a,i=t.contextType;return"object"===typeof i&&null!==i?i=Pi(i):(a=Ra(t)?Pa:za.current,i=(r=null!==(r=t.contextTypes)&&void 0!==r)?Na(e,a):_a),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=al,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&al.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Di(e);var i=t.contextType;"object"===typeof i&&null!==i?a.context=Pi(i):(i=Ra(t)?Pa:za.current,a.context=Na(e,i)),a.state=e.memoizedState,"function"===typeof(i=t.getDerivedStateFromProps)&&(rl(e,t,i,n),a.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(t=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&al.enqueueReplaceState(a,a.state,null),Ui(e,n,a,r),a.state=e.memoizedState),"function"===typeof a.componentDidMount&&(e.flags|=4194308)}function cl(e,t){try{var n="",r=t;do{n+=H(r),r=r.return}while(r);var a=n}catch(i){a="\nError generating stack: "+i.message+"\n"+i.stack}return{value:e,source:t,stack:a,digest:null}}function ul(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var fl="function"===typeof WeakMap?WeakMap:Map;function pl(e,t,n){(n=Mi(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){$s||($s=!0,Vs=r),dl(0,t)},n}function hl(e,t,n){(n=Mi(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){dl(0,t)}}var i=e.stateNode;return null!==i&&"function"===typeof i.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!==typeof r&&(null===Ks?Ks=new Set([this]):Ks.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ml(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fl;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Ec.bind(null,e,t,n),t.then(e,e))}function gl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function xl(e,t,n,r,a){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Mi(-1,1)).tag=2,Ii(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var vl=w.ReactCurrentOwner,yl=!1;function wl(e,t,n,r){t.child=null===e?bi(t,null,n,r):wi(t,e.child,n,r)}function bl(e,t,n,r,a){n=n.render;var i=t.ref;return Ai(t,a),r=go(e,t,n,r,i,a),n=xo(),null===e||yl?(ai&&n&&ei(t),t.flags|=1,wl(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,$l(e,t,a))}function Sl(e,t,n,r,a){if(null===e){var i=n.type;return"function"!==typeof i||Rc(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Oc(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,Cl(e,t,i,r,a))}if(i=e.child,0===(e.lanes&a)){var o=i.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(o,r)&&e.ref===t.ref)return $l(e,t,a)}return t.flags|=1,(e=Tc(i,r)).ref=t.ref,e.return=t,t.child=e}function Cl(e,t,n,r,a){if(null!==e){var i=e.memoizedProps;if(sr(i,r)&&e.ref===t.ref){if(yl=!1,t.pendingProps=r=i,0===(e.lanes&a))return t.lanes=e.lanes,$l(e,t,a);0!==(131072&e.flags)&&(yl=!0)}}return jl(e,t,n,r,a)}function kl(e,t,n){var r=t.pendingProps,a=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ja(Ts,Rs),Rs|=n;else{if(0===(1073741824&n))return e=null!==i?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ja(Ts,Rs),Rs|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==i?i.baseLanes:n,ja(Ts,Rs),Rs|=r}else null!==i?(r=i.baseLanes|n,t.memoizedState=null):r=n,ja(Ts,Rs),Rs|=r;return wl(e,t,a,n),t.child}function El(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function jl(e,t,n,r,a){var i=Ra(n)?Pa:za.current;return i=Na(t,i),Ai(t,a),n=go(e,t,n,r,i,a),r=xo(),null===e||yl?(ai&&r&&ei(t),t.flags|=1,wl(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,$l(e,t,a))}function _l(e,t,n,r,a){if(Ra(n)){var i=!0;Da(t)}else i=!1;if(Ai(t,a),null===t.stateNode)Wl(e,t),ol(t,n,r),sl(t,n,r,a),r=!0;else if(null===e){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,c=n.contextType;"object"===typeof c&&null!==c?c=Pi(c):c=Na(t,c=Ra(n)?Pa:za.current);var u=n.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof o.getSnapshotBeforeUpdate;d||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l!==r||s!==c)&&ll(t,o,r,c),Li=!1;var f=t.memoizedState;o.state=f,Ui(t,r,o,a),s=t.memoizedState,l!==r||f!==s||Aa.current||Li?("function"===typeof u&&(rl(t,n,u,r),s=t.memoizedState),(l=Li||il(t,n,l,r,f,s,c))?(d||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=c,r=l):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Fi(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:nl(t.type,l),o.props=c,d=t.pendingProps,f=o.context,"object"===typeof(s=n.contextType)&&null!==s?s=Pi(s):s=Na(t,s=Ra(n)?Pa:za.current);var p=n.getDerivedStateFromProps;(u="function"===typeof p||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l!==d||f!==s)&&ll(t,o,r,s),Li=!1,f=t.memoizedState,o.state=f,Ui(t,r,o,a);var h=t.memoizedState;l!==d||f!==h||Aa.current||Li?("function"===typeof p&&(rl(t,n,p,r),h=t.memoizedState),(c=Li||il(t,n,c,r,f,h,s)||!1)?(u||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,h,s),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,h,s)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),o.props=r,o.state=h,o.context=s,r=c):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return zl(e,t,n,r,i,a)}function zl(e,t,n,r,a,i){El(e,t);var o=0!==(128&t.flags);if(!r&&!o)return a&&Fa(t,n,!1),$l(e,t,i);r=t.stateNode,vl.current=t;var l=o&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=wi(t,e.child,null,i),t.child=wi(t,null,l,i)):wl(e,t,l,i),t.memoizedState=r.state,a&&Fa(t,n,!0),t.child}function Al(e){var t=e.stateNode;t.pendingContext?Oa(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Oa(0,t.context,!1),Yi(e,t.containerInfo)}function Pl(e,t,n,r,a){return pi(),hi(a),t.flags|=256,wl(e,t,n,r),t.child}var Nl,Rl,Tl,Ol,Ll={dehydrated:null,treeContext:null,retryLane:0};function Dl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fl(e,t,n){var r,a=t.pendingProps,o=Ji.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&o)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),ja(Ji,1&o),null===e)return ci(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=a.children,e=a.fallback,l?(a=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&a)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Dc(s,a,0,null),e=Lc(e,a,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Dl(n),t.memoizedState=Ll,e):Ml(t,s));if(null!==(o=e.memoizedState)&&null!==(r=o.dehydrated))return function(e,t,n,r,a,o,l){if(n)return 256&t.flags?(t.flags&=-257,Il(e,t,l,r=ul(Error(i(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=r.fallback,a=t.mode,r=Dc({mode:"visible",children:r.children},a,0,null),(o=Lc(o,a,l,null)).flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,0!==(1&t.mode)&&wi(t,e.child,null,l),t.child.memoizedState=Dl(l),t.memoizedState=Ll,o);if(0===(1&t.mode))return Il(e,t,l,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var s=r.dgst;return r=s,Il(e,t,l,r=ul(o=Error(i(419)),r,void 0))}if(s=0!==(l&e.childLanes),yl||s){if(null!==(r=As)){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!==(a&(r.suspendedLanes|l))?0:a)&&a!==o.retryLane&&(o.retryLane=a,Oi(e,a),nc(r,e,a,-1))}return mc(),Il(e,t,l,r=ul(Error(i(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=_c.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,ri=ca(a.nextSibling),ni=t,ai=!0,ii=null,null!==e&&(Qa[qa++]=Za,Qa[qa++]=Ga,Qa[qa++]=Ya,Za=e.id,Ga=e.overflow,Ya=t),t=Ml(t,r.children),t.flags|=4096,t)}(e,t,s,a,r,o,n);if(l){l=a.fallback,s=t.mode,r=(o=e.child).sibling;var c={mode:"hidden",children:a.children};return 0===(1&s)&&t.child!==o?((a=t.child).childLanes=0,a.pendingProps=c,t.deletions=null):(a=Tc(o,c)).subtreeFlags=14680064&o.subtreeFlags,null!==r?l=Tc(r,l):(l=Lc(l,s,n,null)).flags|=2,l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,s=null===(s=e.child.memoizedState)?Dl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Ll,a}return e=(l=e.child).sibling,a=Tc(l,{mode:"visible",children:a.children}),0===(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Ml(e,t){return(t=Dc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Il(e,t,n,r){return null!==r&&hi(r),wi(t,e.child,null,n),(e=Ml(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Bl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),zi(e.return,t,n)}function Hl(e,t,n,r,a){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function Ul(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(wl(e,t,r.children,n),0!==(2&(r=Ji.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Bl(e,n,t);else if(19===e.tag)Bl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ja(Ji,r),0===(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===eo(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Hl(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===eo(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Hl(t,!0,n,null,i);break;case"together":Hl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function $l(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ds|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(n=Tc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Tc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Vl(e,t){if(!ai)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Kl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ql(e,t,n){var r=t.pendingProps;switch(ti(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kl(t),null;case 1:case 17:return Ra(t.type)&&Ta(),Kl(t),null;case 3:return r=t.stateNode,Zi(),Ea(Aa),Ea(za),no(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(di(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ii&&(oc(ii),ii=null))),Rl(e,t),Kl(t),null;case 5:Xi(t);var a=qi(Qi.current);if(n=t.type,null!==e&&null!=t.stateNode)Tl(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(i(166));return Kl(t),null}if(e=qi(Vi.current),di(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[fa]=t,r[pa]=o,e=0!==(1&t.mode),n){case"dialog":Ir("cancel",r),Ir("close",r);break;case"iframe":case"object":case"embed":Ir("load",r);break;case"video":case"audio":for(a=0;a<Lr.length;a++)Ir(Lr[a],r);break;case"source":Ir("error",r);break;case"img":case"image":case"link":Ir("error",r),Ir("load",r);break;case"details":Ir("toggle",r);break;case"input":Z(r,o),Ir("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ir("invalid",r);break;case"textarea":ae(r,o),Ir("invalid",r)}for(var s in ve(n,o),a=null,o)if(o.hasOwnProperty(s)){var c=o[s];"children"===s?"string"===typeof c?r.textContent!==c&&(!0!==o.suppressHydrationWarning&&Xr(r.textContent,c,e),a=["children",c]):"number"===typeof c&&r.textContent!==""+c&&(!0!==o.suppressHydrationWarning&&Xr(r.textContent,c,e),a=["children",""+c]):l.hasOwnProperty(s)&&null!=c&&"onScroll"===s&&Ir("scroll",r)}switch(n){case"input":K(r),J(r,o,!0);break;case"textarea":K(r),oe(r);break;case"select":case"option":break;default:"function"===typeof o.onClick&&(r.onclick=Jr)}r=a,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[fa]=t,e[pa]=r,Nl(e,t,!1,!1),t.stateNode=e;e:{switch(s=ye(n,r),n){case"dialog":Ir("cancel",e),Ir("close",e),a=r;break;case"iframe":case"object":case"embed":Ir("load",e),a=r;break;case"video":case"audio":for(a=0;a<Lr.length;a++)Ir(Lr[a],e);a=r;break;case"source":Ir("error",e),a=r;break;case"img":case"image":case"link":Ir("error",e),Ir("load",e),a=r;break;case"details":Ir("toggle",e),a=r;break;case"input":Z(e,r),a=Y(e,r),Ir("invalid",e);break;case"option":default:a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=F({},r,{value:void 0}),Ir("invalid",e);break;case"textarea":ae(e,r),a=re(e,r),Ir("invalid",e)}for(o in ve(n,a),c=a)if(c.hasOwnProperty(o)){var u=c[o];"style"===o?ge(e,u):"dangerouslySetInnerHTML"===o?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===o?"string"===typeof u?("textarea"!==n||""!==u)&&fe(e,u):"number"===typeof u&&fe(e,""+u):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(l.hasOwnProperty(o)?null!=u&&"onScroll"===o&&Ir("scroll",e):null!=u&&y(e,o,u,s))}switch(n){case"input":K(e),J(e,r,!1);break;case"textarea":K(e),oe(e);break;case"option":null!=r.value&&e.setAttribute("value",""+$(r.value));break;case"select":e.multiple=!!r.multiple,null!=(o=r.value)?ne(e,!!r.multiple,o,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof a.onClick&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Kl(t),null;case 6:if(e&&null!=t.stateNode)Ol(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(i(166));if(n=qi(Qi.current),qi(Vi.current),di(t)){if(r=t.stateNode,n=t.memoizedProps,r[fa]=t,(o=r.nodeValue!==n)&&null!==(e=ni))switch(e.tag){case 3:Xr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Xr(r.nodeValue,n,0!==(1&e.mode))}o&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fa]=t,t.stateNode=r}return Kl(t),null;case 13:if(Ea(Ji),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ai&&null!==ri&&0!==(1&t.mode)&&0===(128&t.flags))fi(),pi(),t.flags|=98560,o=!1;else if(o=di(t),null!==r&&null!==r.dehydrated){if(null===e){if(!o)throw Error(i(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(i(317));o[fa]=t}else pi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Kl(t),o=!1}else null!==ii&&(oc(ii),ii=null),o=!0;if(!o)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&Ji.current)?0===Os&&(Os=3):mc())),null!==t.updateQueue&&(t.flags|=4),Kl(t),null);case 4:return Zi(),Rl(e,t),null===e&&Ur(t.stateNode.containerInfo),Kl(t),null;case 10:return _i(t.type._context),Kl(t),null;case 19:if(Ea(Ji),null===(o=t.memoizedState))return Kl(t),null;if(r=0!==(128&t.flags),null===(s=o.rendering))if(r)Vl(o,!1);else{if(0!==Os||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=eo(e))){for(t.flags|=128,Vl(o,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(o=n).flags&=14680066,null===(s=o.alternate)?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ja(Ji,1&Ji.current|2),t.child}e=e.sibling}null!==o.tail&&Ge()>Us&&(t.flags|=128,r=!0,Vl(o,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=eo(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Vl(o,!0),null===o.tail&&"hidden"===o.tailMode&&!s.alternate&&!ai)return Kl(t),null}else 2*Ge()-o.renderingStartTime>Us&&1073741824!==n&&(t.flags|=128,r=!0,Vl(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=o.last)?n.sibling=s:t.child=s,o.last=s)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ge(),t.sibling=null,n=Ji.current,ja(Ji,r?1&n|2:1&n),t):(Kl(t),null);case 22:case 23:return dc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Rs)&&(Kl(t),6&t.subtreeFlags&&(t.flags|=8192)):Kl(t),null;case 24:case 25:return null}throw Error(i(156,t.tag))}function ql(e,t){switch(ti(t),t.tag){case 1:return Ra(t.type)&&Ta(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Zi(),Ea(Aa),Ea(za),no(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Xi(t),null;case 13:if(Ea(Ji),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));pi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ea(Ji),null;case 4:return Zi(),null;case 10:return _i(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}Nl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Rl=function(){},Tl=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,qi(Vi.current);var i,o=null;switch(n){case"input":a=Y(e,a),r=Y(e,r),o=[];break;case"select":a=F({},a,{value:void 0}),r=F({},r,{value:void 0}),o=[];break;case"textarea":a=re(e,a),r=re(e,r),o=[];break;default:"function"!==typeof a.onClick&&"function"===typeof r.onClick&&(e.onclick=Jr)}for(u in ve(n,r),n=null,a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&null!=a[u])if("style"===u){var s=a[u];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(l.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(s=null!=a?a[u]:void 0,r.hasOwnProperty(u)&&c!==s&&(null!=c||null!=s))if("style"===u)if(s){for(i in s)!s.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in c)c.hasOwnProperty(i)&&s[i]!==c[i]&&(n||(n={}),n[i]=c[i])}else n||(o||(o=[]),o.push(u,n)),n=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,s=s?s.__html:void 0,null!=c&&s!==c&&(o=o||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(o=o||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(l.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&Ir("scroll",e),o||s===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},Ol=function(e,t,n,r){n!==r&&(t.flags|=4)};var Yl=!1,Zl=!1,Gl="function"===typeof WeakSet?WeakSet:Set,Xl=null;function Jl(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){kc(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){kc(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,void 0!==i&&es(t,n,i)}a=a.next}while(a!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function as(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function is(e){var t=e.alternate;null!==t&&(e.alternate=null,is(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fa],delete t[pa],delete t[ma],delete t[ga],delete t[xa])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function os(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||os(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Jr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function cs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cs(e,t,n),e=e.sibling;null!==e;)cs(e,t,n),e=e.sibling}var us=null,ds=!1;function fs(e,t,n){for(n=n.child;null!==n;)ps(e,t,n),n=n.sibling}function ps(e,t,n){if(it&&"function"===typeof it.onCommitFiberUnmount)try{it.onCommitFiberUnmount(at,n)}catch(l){}switch(n.tag){case 5:Zl||Jl(n,t);case 6:var r=us,a=ds;us=null,fs(e,t,n),ds=a,null!==(us=r)&&(ds?(e=us,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):us.removeChild(n.stateNode));break;case 18:null!==us&&(ds?(e=us,n=n.stateNode,8===e.nodeType?sa(e.parentNode,n):1===e.nodeType&&sa(e,n),Ut(e)):sa(us,n.stateNode));break;case 4:r=us,a=ds,us=n.stateNode.containerInfo,ds=!0,fs(e,t,n),us=r,ds=a;break;case 0:case 11:case 14:case 15:if(!Zl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,void 0!==o&&(0!==(2&i)||0!==(4&i))&&es(n,t,o),a=a.next}while(a!==r)}fs(e,t,n);break;case 1:if(!Zl&&(Jl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){kc(n,t,l)}fs(e,t,n);break;case 21:fs(e,t,n);break;case 22:1&n.mode?(Zl=(r=Zl)||null!==n.memoizedState,fs(e,t,n),Zl=r):fs(e,t,n);break;default:fs(e,t,n)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Gl),t.forEach((function(t){var r=zc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function ms(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];try{var o=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:us=s.stateNode,ds=!1;break e;case 3:case 4:us=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===us)throw Error(i(160));ps(o,l,a),us=null,ds=!1;var c=a.alternate;null!==c&&(c.return=null),a.return=null}catch(u){kc(a,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gs(t,e),t=t.sibling}function gs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ms(t,e),xs(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(g){kc(e,e.return,g)}try{ns(5,e,e.return)}catch(g){kc(e,e.return,g)}}break;case 1:ms(t,e),xs(e),512&r&&null!==n&&Jl(n,n.return);break;case 5:if(ms(t,e),xs(e),512&r&&null!==n&&Jl(n,n.return),32&e.flags){var a=e.stateNode;try{fe(a,"")}catch(g){kc(e,e.return,g)}}if(4&r&&null!=(a=e.stateNode)){var o=e.memoizedProps,l=null!==n?n.memoizedProps:o,s=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===s&&"radio"===o.type&&null!=o.name&&G(a,o),ye(s,l);var u=ye(s,o);for(l=0;l<c.length;l+=2){var d=c[l],f=c[l+1];"style"===d?ge(a,f):"dangerouslySetInnerHTML"===d?de(a,f):"children"===d?fe(a,f):y(a,d,f,u)}switch(s){case"input":X(a,o);break;case"textarea":ie(a,o);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var h=o.value;null!=h?ne(a,!!o.multiple,h,!1):p!==!!o.multiple&&(null!=o.defaultValue?ne(a,!!o.multiple,o.defaultValue,!0):ne(a,!!o.multiple,o.multiple?[]:"",!1))}a[pa]=o}catch(g){kc(e,e.return,g)}}break;case 6:if(ms(t,e),xs(e),4&r){if(null===e.stateNode)throw Error(i(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(g){kc(e,e.return,g)}}break;case 3:if(ms(t,e),xs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ut(t.containerInfo)}catch(g){kc(e,e.return,g)}break;case 4:default:ms(t,e),xs(e);break;case 13:ms(t,e),xs(e),8192&(a=e.child).flags&&(o=null!==a.memoizedState,a.stateNode.isHidden=o,!o||null!==a.alternate&&null!==a.alternate.memoizedState||(Hs=Ge())),4&r&&hs(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Zl=(u=Zl)||d,ms(t,e),Zl=u):ms(t,e),xs(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(Xl=e,d=e.child;null!==d;){for(f=Xl=d;null!==Xl;){switch(h=(p=Xl).child,p.tag){case 0:case 11:case 14:case 15:ns(4,p,p.return);break;case 1:Jl(p,p.return);var m=p.stateNode;if("function"===typeof m.componentWillUnmount){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){kc(r,n,g)}}break;case 5:Jl(p,p.return);break;case 22:if(null!==p.memoizedState){bs(f);continue}}null!==h?(h.return=p,Xl=h):bs(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{a=f.stateNode,u?"function"===typeof(o=a.style).setProperty?o.setProperty("display","none","important"):o.display="none":(s=f.stateNode,l=void 0!==(c=f.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,s.style.display=me("display",l))}catch(g){kc(e,e.return,g)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(g){kc(e,e.return,g)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ms(t,e),xs(e),4&r&&hs(e);case 21:}}function xs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(os(n)){var r=n;break e}n=n.return}throw Error(i(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(fe(a,""),r.flags&=-33),cs(e,ls(e),a);break;case 3:case 4:var o=r.stateNode.containerInfo;ss(e,ls(e),o);break;default:throw Error(i(161))}}catch(l){kc(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function vs(e,t,n){Xl=e,ys(e,t,n)}function ys(e,t,n){for(var r=0!==(1&e.mode);null!==Xl;){var a=Xl,i=a.child;if(22===a.tag&&r){var o=null!==a.memoizedState||Yl;if(!o){var l=a.alternate,s=null!==l&&null!==l.memoizedState||Zl;l=Yl;var c=Zl;if(Yl=o,(Zl=s)&&!c)for(Xl=a;null!==Xl;)s=(o=Xl).child,22===o.tag&&null!==o.memoizedState?Ss(a):null!==s?(s.return=o,Xl=s):Ss(a);for(;null!==i;)Xl=i,ys(i,t,n),i=i.sibling;Xl=a,Yl=l,Zl=c}ws(e)}else 0!==(8772&a.subtreeFlags)&&null!==i?(i.return=a,Xl=i):ws(e)}}function ws(e){for(;null!==Xl;){var t=Xl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Zl||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Zl)if(null===n)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&Wi(t,o,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Wi(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Ut(f)}}}break;default:throw Error(i(163))}Zl||512&t.flags&&as(t)}catch(p){kc(t,t.return,p)}}if(t===e){Xl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Xl=n;break}Xl=t.return}}function bs(e){for(;null!==Xl;){var t=Xl;if(t===e){Xl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Xl=n;break}Xl=t.return}}function Ss(e){for(;null!==Xl;){var t=Xl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){kc(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(s){kc(t,a,s)}}var i=t.return;try{as(t)}catch(s){kc(t,i,s)}break;case 5:var o=t.return;try{as(t)}catch(s){kc(t,o,s)}}}catch(s){kc(t,t.return,s)}if(t===e){Xl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Xl=l;break}Xl=t.return}}var Cs,ks=Math.ceil,Es=w.ReactCurrentDispatcher,js=w.ReactCurrentOwner,_s=w.ReactCurrentBatchConfig,zs=0,As=null,Ps=null,Ns=0,Rs=0,Ts=ka(0),Os=0,Ls=null,Ds=0,Fs=0,Ms=0,Is=null,Bs=null,Hs=0,Us=1/0,Ws=null,$s=!1,Vs=null,Ks=null,Qs=!1,qs=null,Ys=0,Zs=0,Gs=null,Xs=-1,Js=0;function ec(){return 0!==(6&zs)?Ge():-1!==Xs?Xs:Xs=Ge()}function tc(e){return 0===(1&e.mode)?1:0!==(2&zs)&&0!==Ns?Ns&-Ns:null!==mi.transition?(0===Js&&(Js=mt()),Js):0!==(e=yt)?e:e=void 0===(e=window.event)?16:Zt(e.type)}function nc(e,t,n,r){if(50<Zs)throw Zs=0,Gs=null,Error(i(185));xt(e,n,r),0!==(2&zs)&&e===As||(e===As&&(0===(2&zs)&&(Fs|=n),4===Os&&lc(e,Ns)),rc(e,r),1===n&&0===zs&&0===(1&t.mode)&&(Us=Ge()+500,Ia&&Ua()))}function rc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-ot(i),l=1<<o,s=a[o];-1===s?0!==(l&n)&&0===(l&r)||(a[o]=pt(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}(e,t);var r=ft(e,e===As?Ns:0);if(0===r)null!==n&&qe(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&qe(n),1===t)0===e.tag?function(e){Ia=!0,Ha(e)}(sc.bind(null,e)):Ha(sc.bind(null,e)),oa((function(){0===(6&zs)&&Ua()})),n=null;else{switch(wt(r)){case 1:n=Je;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Ac(n,ac.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ac(e,t){if(Xs=-1,Js=0,0!==(6&zs))throw Error(i(327));var n=e.callbackNode;if(Sc()&&e.callbackNode!==n)return null;var r=ft(e,e===As?Ns:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gc(e,r);else{t=r;var a=zs;zs|=2;var o=hc();for(As===e&&Ns===t||(Ws=null,Us=Ge()+500,fc(e,t));;)try{vc();break}catch(s){pc(e,s)}ji(),Es.current=o,zs=a,null!==Ps?t=0:(As=null,Ns=0,t=Os)}if(0!==t){if(2===t&&(0!==(a=ht(e))&&(r=a,t=ic(e,a))),1===t)throw n=Ls,fc(e,0),lc(e,r),rc(e,Ge()),n;if(6===t)lc(e,r);else{if(a=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!lr(i(),a))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=gc(e,r))&&(0!==(o=ht(e))&&(r=o,t=ic(e,o))),1===t))throw n=Ls,fc(e,0),lc(e,r),rc(e,Ge()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(i(345));case 2:case 5:bc(e,Bs,Ws);break;case 3:if(lc(e,r),(130023424&r)===r&&10<(t=Hs+500-Ge())){if(0!==ft(e,0))break;if(((a=e.suspendedLanes)&r)!==r){ec(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ra(bc.bind(null,e,Bs,Ws),t);break}bc(e,Bs,Ws);break;case 4:if(lc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-ot(r);o=1<<l,(l=t[l])>a&&(a=l),r&=~o}if(r=a,10<(r=(120>(r=Ge()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ks(r/1960))-r)){e.timeoutHandle=ra(bc.bind(null,e,Bs,Ws),r);break}bc(e,Bs,Ws);break;default:throw Error(i(329))}}}return rc(e,Ge()),e.callbackNode===n?ac.bind(null,e):null}function ic(e,t){var n=Is;return e.current.memoizedState.isDehydrated&&(fc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=Bs,Bs=n,null!==t&&oc(t)),e}function oc(e){null===Bs?Bs=e:Bs.push.apply(Bs,e)}function lc(e,t){for(t&=~Ms,t&=~Fs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function sc(e){if(0!==(6&zs))throw Error(i(327));Sc();var t=ft(e,0);if(0===(1&t))return rc(e,Ge()),null;var n=gc(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=ic(e,r))}if(1===n)throw n=Ls,fc(e,0),lc(e,t),rc(e,Ge()),n;if(6===n)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,bc(e,Bs,Ws),rc(e,Ge()),null}function cc(e,t){var n=zs;zs|=1;try{return e(t)}finally{0===(zs=n)&&(Us=Ge()+500,Ia&&Ua())}}function uc(e){null!==qs&&0===qs.tag&&0===(6&zs)&&Sc();var t=zs;zs|=1;var n=_s.transition,r=yt;try{if(_s.transition=null,yt=1,e)return e()}finally{yt=r,_s.transition=n,0===(6&(zs=t))&&Ua()}}function dc(){Rs=Ts.current,Ea(Ts)}function fc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,aa(n)),null!==Ps)for(n=Ps.return;null!==n;){var r=n;switch(ti(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Ta();break;case 3:Zi(),Ea(Aa),Ea(za),no();break;case 5:Xi(r);break;case 4:Zi();break;case 13:case 19:Ea(Ji);break;case 10:_i(r.type._context);break;case 22:case 23:dc()}n=n.return}if(As=e,Ps=e=Tc(e.current,null),Ns=Rs=t,Os=0,Ls=null,Ms=Fs=Ds=0,Bs=Is=null,null!==Ni){for(t=0;t<Ni.length;t++)if(null!==(r=(n=Ni[t]).interleaved)){n.interleaved=null;var a=r.next,i=n.pending;if(null!==i){var o=i.next;i.next=a,r.next=o}n.pending=r}Ni=null}return e}function pc(e,t){for(;;){var n=Ps;try{if(ji(),ro.current=Xo,co){for(var r=oo.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}co=!1}if(io=0,so=lo=oo=null,uo=!1,fo=0,js.current=null,null===n||null===n.return){Os=1,Ls=t,Ps=null;break}e:{var o=e,l=n.return,s=n,c=t;if(t=Ns,s.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=s,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=gl(l);if(null!==h){h.flags&=-257,xl(h,l,s,0,t),1&h.mode&&ml(o,u,t),c=u;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(c),t.updateQueue=g}else m.add(c);break e}if(0===(1&t)){ml(o,u,t),mc();break e}c=Error(i(426))}else if(ai&&1&s.mode){var x=gl(l);if(null!==x){0===(65536&x.flags)&&(x.flags|=256),xl(x,l,s,0,t),hi(cl(c,s));break e}}o=c=cl(c,s),4!==Os&&(Os=2),null===Is?Is=[o]:Is.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,Hi(o,pl(0,c,t));break e;case 1:s=c;var v=o.type,y=o.stateNode;if(0===(128&o.flags)&&("function"===typeof v.getDerivedStateFromError||null!==y&&"function"===typeof y.componentDidCatch&&(null===Ks||!Ks.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t,Hi(o,hl(o,s,t));break e}}o=o.return}while(null!==o)}wc(n)}catch(w){t=w,Ps===n&&null!==n&&(Ps=n=n.return);continue}break}}function hc(){var e=Es.current;return Es.current=Xo,null===e?Xo:e}function mc(){0!==Os&&3!==Os&&2!==Os||(Os=4),null===As||0===(268435455&Ds)&&0===(268435455&Fs)||lc(As,Ns)}function gc(e,t){var n=zs;zs|=2;var r=hc();for(As===e&&Ns===t||(Ws=null,fc(e,t));;)try{xc();break}catch(a){pc(e,a)}if(ji(),zs=n,Es.current=r,null!==Ps)throw Error(i(261));return As=null,Ns=0,Os}function xc(){for(;null!==Ps;)yc(Ps)}function vc(){for(;null!==Ps&&!Ye();)yc(Ps)}function yc(e){var t=Cs(e.alternate,e,Rs);e.memoizedProps=e.pendingProps,null===t?wc(e):Ps=t,js.current=null}function wc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Ql(n,t,Rs)))return void(Ps=n)}else{if(null!==(n=ql(n,t)))return n.flags&=32767,void(Ps=n);if(null===e)return Os=6,void(Ps=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Ps=t);Ps=t=e}while(null!==t);0===Os&&(Os=5)}function bc(e,t,n){var r=yt,a=_s.transition;try{_s.transition=null,yt=1,function(e,t,n,r){do{Sc()}while(null!==qs);if(0!==(6&zs))throw Error(i(327));n=e.finishedWork;var a=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-ot(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}(e,o),e===As&&(Ps=As=null,Ns=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Qs||(Qs=!0,Ac(tt,(function(){return Sc(),null}))),o=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||o){o=_s.transition,_s.transition=null;var l=yt;yt=1;var s=zs;zs|=4,js.current=null,function(e,t){if(ea=$t,pr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(b){n=null;break e}var l=0,s=-1,c=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==a&&3!==f.nodeType||(s=l+a),f!==o||0!==r&&3!==f.nodeType||(c=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++u===a&&(s=l),p===o&&++d===r&&(c=l),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===s||-1===c?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ta={focusedElem:e,selectionRange:n},$t=!1,Xl=t;null!==Xl;)if(e=(t=Xl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Xl=e;else for(;null!==Xl;){t=Xl;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,x=m.memoizedState,v=t.stateNode,y=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:nl(t.type,g),x);v.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(i(163))}}catch(b){kc(t,t.return,b)}if(null!==(e=t.sibling)){e.return=t.return,Xl=e;break}Xl=t.return}m=ts,ts=!1}(e,n),gs(n,e),hr(ta),$t=!!ea,ta=ea=null,e.current=n,vs(n,e,a),Ze(),zs=s,yt=l,_s.transition=o}else e.current=n;if(Qs&&(Qs=!1,qs=e,Ys=a),o=e.pendingLanes,0===o&&(Ks=null),function(e){if(it&&"function"===typeof it.onCommitFiberRoot)try{it.onCommitFiberRoot(at,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),rc(e,Ge()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if($s)throw $s=!1,e=Vs,Vs=null,e;0!==(1&Ys)&&0!==e.tag&&Sc(),o=e.pendingLanes,0!==(1&o)?e===Gs?Zs++:(Zs=0,Gs=e):Zs=0,Ua()}(e,t,n,r)}finally{_s.transition=a,yt=r}return null}function Sc(){if(null!==qs){var e=wt(Ys),t=_s.transition,n=yt;try{if(_s.transition=null,yt=16>e?16:e,null===qs)var r=!1;else{if(e=qs,qs=null,Ys=0,0!==(6&zs))throw Error(i(331));var a=zs;for(zs|=4,Xl=e.current;null!==Xl;){var o=Xl,l=o.child;if(0!==(16&Xl.flags)){var s=o.deletions;if(null!==s){for(var c=0;c<s.length;c++){var u=s[c];for(Xl=u;null!==Xl;){var d=Xl;switch(d.tag){case 0:case 11:case 15:ns(8,d,o)}var f=d.child;if(null!==f)f.return=d,Xl=f;else for(;null!==Xl;){var p=(d=Xl).sibling,h=d.return;if(is(d),d===u){Xl=null;break}if(null!==p){p.return=h,Xl=p;break}Xl=h}}}var m=o.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var x=g.sibling;g.sibling=null,g=x}while(null!==g)}}Xl=o}}if(0!==(2064&o.subtreeFlags)&&null!==l)l.return=o,Xl=l;else e:for(;null!==Xl;){if(0!==(2048&(o=Xl).flags))switch(o.tag){case 0:case 11:case 15:ns(9,o,o.return)}var v=o.sibling;if(null!==v){v.return=o.return,Xl=v;break e}Xl=o.return}}var y=e.current;for(Xl=y;null!==Xl;){var w=(l=Xl).child;if(0!==(2064&l.subtreeFlags)&&null!==w)w.return=l,Xl=w;else e:for(l=y;null!==Xl;){if(0!==(2048&(s=Xl).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(S){kc(s,s.return,S)}if(s===l){Xl=null;break e}var b=s.sibling;if(null!==b){b.return=s.return,Xl=b;break e}Xl=s.return}}if(zs=a,Ua(),it&&"function"===typeof it.onPostCommitFiberRoot)try{it.onPostCommitFiberRoot(at,e)}catch(S){}r=!0}return r}finally{yt=n,_s.transition=t}}return!1}function Cc(e,t,n){e=Ii(e,t=pl(0,t=cl(n,t),1),1),t=ec(),null!==e&&(xt(e,1,t),rc(e,t))}function kc(e,t,n){if(3===e.tag)Cc(e,e,n);else for(;null!==t;){if(3===t.tag){Cc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Ks||!Ks.has(r))){t=Ii(t,e=hl(t,e=cl(n,e),1),1),e=ec(),null!==t&&(xt(t,1,e),rc(t,e));break}}t=t.return}}function Ec(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&n,As===e&&(Ns&n)===n&&(4===Os||3===Os&&(130023424&Ns)===Ns&&500>Ge()-Hs?fc(e,0):Ms|=n),rc(e,t)}function jc(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ut,0===(130023424&(ut<<=1))&&(ut=4194304)));var n=ec();null!==(e=Oi(e,t))&&(xt(e,t,n),rc(e,n))}function _c(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),jc(e,n)}function zc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(i(314))}null!==r&&r.delete(t),jc(e,n)}function Ac(e,t){return Qe(e,t)}function Pc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nc(e,t,n,r){return new Pc(e,t,n,r)}function Rc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Tc(e,t){var n=e.alternate;return null===n?((n=Nc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Oc(e,t,n,r,a,o){var l=2;if(r=e,"function"===typeof e)Rc(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case C:return Lc(n.children,a,o,t);case k:l=8,a|=8;break;case E:return(e=Nc(12,n,t,2|a)).elementType=E,e.lanes=o,e;case A:return(e=Nc(13,n,t,a)).elementType=A,e.lanes=o,e;case P:return(e=Nc(19,n,t,a)).elementType=P,e.lanes=o,e;case T:return Dc(n,a,o,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case j:l=10;break e;case _:l=9;break e;case z:l=11;break e;case N:l=14;break e;case R:l=16,r=null;break e}throw Error(i(130,null==e?e:typeof e,""))}return(t=Nc(l,n,t,a)).elementType=e,t.type=r,t.lanes=o,t}function Lc(e,t,n,r){return(e=Nc(7,e,r,t)).lanes=n,e}function Dc(e,t,n,r){return(e=Nc(22,e,r,t)).elementType=T,e.lanes=n,e.stateNode={isHidden:!1},e}function Fc(e,t,n){return(e=Nc(6,e,null,t)).lanes=n,e}function Mc(e,t,n){return(t=Nc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ic(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Bc(e,t,n,r,a,i,o,l,s){return e=new Ic(e,t,n,l,s),1===t?(t=1,!0===i&&(t|=8)):t=0,i=Nc(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Di(i),e}function Hc(e){if(!e)return _a;e:{if(Ue(e=e._reactInternals)!==e||1!==e.tag)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ra(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(i(171))}if(1===e.tag){var n=e.type;if(Ra(n))return La(e,n,t)}return t}function Uc(e,t,n,r,a,i,o,l,s){return(e=Bc(n,r,!0,e,0,i,0,l,s)).context=Hc(null),n=e.current,(i=Mi(r=ec(),a=tc(n))).callback=void 0!==t&&null!==t?t:null,Ii(n,i,a),e.current.lanes=a,xt(e,a,r),rc(e,r),e}function Wc(e,t,n,r){var a=t.current,i=ec(),o=tc(a);return n=Hc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Mi(i,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Ii(a,t,o))&&(nc(e,a,o,i),Bi(e,a,o)),o}function $c(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Vc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Kc(e,t){Vc(e,t),(e=e.alternate)&&Vc(e,t)}Cs=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Aa.current)yl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return yl=!1,function(e,t,n){switch(t.tag){case 3:Al(t),pi();break;case 5:Gi(t);break;case 1:Ra(t.type)&&Da(t);break;case 4:Yi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;ja(Si,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(ja(Ji,1&Ji.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Fl(e,t,n):(ja(Ji,1&Ji.current),null!==(e=$l(e,t,n))?e.sibling:null);ja(Ji,1&Ji.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Ul(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),ja(Ji,Ji.current),r)break;return null;case 22:case 23:return t.lanes=0,kl(e,t,n)}return $l(e,t,n)}(e,t,n);yl=0!==(131072&e.flags)}else yl=!1,ai&&0!==(1048576&t.flags)&&Ja(t,Ka,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wl(e,t),e=t.pendingProps;var a=Na(t,za.current);Ai(t,n),a=go(null,t,r,e,a,n);var o=xo();return t.flags|=1,"object"===typeof a&&null!==a&&"function"===typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ra(r)?(o=!0,Da(t)):o=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,Di(t),a.updater=al,t.stateNode=a,a._reactInternals=t,sl(t,r,e,n),t=zl(null,t,r,!0,o,n)):(t.tag=0,ai&&o&&ei(t),wl(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wl(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"===typeof e)return Rc(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===z)return 11;if(e===N)return 14}return 2}(r),e=nl(r,e),a){case 0:t=jl(null,t,r,e,n);break e;case 1:t=_l(null,t,r,e,n);break e;case 11:t=bl(null,t,r,e,n);break e;case 14:t=Sl(null,t,r,nl(r.type,e),n);break e}throw Error(i(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,jl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 1:return r=t.type,a=t.pendingProps,_l(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 3:e:{if(Al(t),null===e)throw Error(i(387));r=t.pendingProps,a=(o=t.memoizedState).element,Fi(e,t),Ui(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Pl(e,t,r,n,a=cl(Error(i(423)),t));break e}if(r!==a){t=Pl(e,t,r,n,a=cl(Error(i(424)),t));break e}for(ri=ca(t.stateNode.containerInfo.firstChild),ni=t,ai=!0,ii=null,n=bi(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(pi(),r===a){t=$l(e,t,n);break e}wl(e,t,r,n)}t=t.child}return t;case 5:return Gi(t),null===e&&ci(t),r=t.type,a=t.pendingProps,o=null!==e?e.memoizedProps:null,l=a.children,na(r,a)?l=null:null!==o&&na(r,o)&&(t.flags|=32),El(e,t),wl(e,t,l,n),t.child;case 6:return null===e&&ci(t),null;case 13:return Fl(e,t,n);case 4:return Yi(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wi(t,null,r,n):wl(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,bl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 7:return wl(e,t,t.pendingProps,n),t.child;case 8:case 12:return wl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,o=t.memoizedProps,l=a.value,ja(Si,r._currentValue),r._currentValue=l,null!==o)if(lr(o.value,l)){if(o.children===a.children&&!Aa.current){t=$l(e,t,n);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var s=o.dependencies;if(null!==s){l=o.child;for(var c=s.firstContext;null!==c;){if(c.context===r){if(1===o.tag){(c=Mi(-1,n&-n)).tag=2;var u=o.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,null!==(c=o.alternate)&&(c.lanes|=n),zi(o.return,n,t),s.lanes|=n;break}c=c.next}}else if(10===o.tag)l=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(l=o.return))throw Error(i(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),zi(l,n,t),l=o.sibling}else l=o.child;if(null!==l)l.return=o;else for(l=o;null!==l;){if(l===t){l=null;break}if(null!==(o=l.sibling)){o.return=l.return,l=o;break}l=l.return}o=l}wl(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Ai(t,n),r=r(a=Pi(a)),t.flags|=1,wl(e,t,r,n),t.child;case 14:return a=nl(r=t.type,t.pendingProps),Sl(e,t,r,a=nl(r.type,a),n);case 15:return Cl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:nl(r,a),Wl(e,t),t.tag=1,Ra(r)?(e=!0,Da(t)):e=!1,Ai(t,n),ol(t,r,a),sl(t,r,a,n),zl(null,t,r,!0,e,n);case 19:return Ul(e,t,n);case 22:return kl(e,t,n)}throw Error(i(156,t.tag))};var Qc="function"===typeof reportError?reportError:function(e){console.error(e)};function qc(e){this._internalRoot=e}function Yc(e){this._internalRoot=e}function Zc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Gc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Xc(){}function Jc(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if("function"===typeof a){var l=a;a=function(){var e=$c(o);l.call(e)}}Wc(t,o,e,a)}else o=function(e,t,n,r,a){if(a){if("function"===typeof r){var i=r;r=function(){var e=$c(o);i.call(e)}}var o=Uc(t,r,e,0,null,!1,0,"",Xc);return e._reactRootContainer=o,e[ha]=o.current,Ur(8===e.nodeType?e.parentNode:e),uc(),o}for(;a=e.lastChild;)e.removeChild(a);if("function"===typeof r){var l=r;r=function(){var e=$c(s);l.call(e)}}var s=Bc(e,0,!1,null,0,!1,0,"",Xc);return e._reactRootContainer=s,e[ha]=s.current,Ur(8===e.nodeType?e.parentNode:e),uc((function(){Wc(t,s,n,r)})),s}(n,t,e,a,r);return $c(o)}Yc.prototype.render=qc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));Wc(e,t,null,null)},Yc.prototype.unmount=qc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc((function(){Wc(null,e,null,null)})),t[ha]=null}},Yc.prototype.unstable_scheduleHydration=function(e){if(e){var t=kt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Tt.length&&0!==t&&t<Tt[n].priority;n++);Tt.splice(n,0,e),0===n&&Ft(e)}},bt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(vt(t,1|n),rc(t,Ge()),0===(6&zs)&&(Us=Ge()+500,Ua()))}break;case 13:uc((function(){var t=Oi(e,1);if(null!==t){var n=ec();nc(t,e,1,n)}})),Kc(e,1)}},St=function(e){if(13===e.tag){var t=Oi(e,134217728);if(null!==t)nc(t,e,134217728,ec());Kc(e,134217728)}},Ct=function(e){if(13===e.tag){var t=tc(e),n=Oi(e,t);if(null!==n)nc(n,e,t,ec());Kc(e,t)}},kt=function(){return yt},Et=function(e,t){var n=yt;try{return yt=e,t()}finally{yt=n}},Se=function(e,t,n){switch(t){case"input":if(X(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=ba(r);if(!a)throw Error(i(90));Q(r),X(r,a)}}}break;case"textarea":ie(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},ze=cc,Ae=uc;var eu={usingClientEntryPoint:!1,Events:[ya,wa,ba,je,_e,cc]},tu={findFiberByHostInstance:va,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nu={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{at=ru.inject(nu),it=ru}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eu,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Zc(t))throw Error(i(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:S,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Zc(e))throw Error(i(299));var n=!1,r="",a=Qc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=Bc(e,1,!1,null,0,n,0,r,a),e[ha]=t.current,Ur(8===e.nodeType?e.parentNode:e),new qc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=null===(e=Ve(t))?null:e.stateNode},t.flushSync=function(e){return uc(e)},t.hydrate=function(e,t,n){if(!Gc(t))throw Error(i(200));return Jc(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Zc(e))throw Error(i(405));var r=null!=n&&n.hydratedSources||null,a=!1,o="",l=Qc;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Uc(t,null,e,1,null!=n?n:null,a,0,o,l),e[ha]=t.current,Ur(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Yc(t)},t.render=function(e,t,n){if(!Gc(t))throw Error(i(200));return Jc(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Gc(e))throw Error(i(40));return!!e._reactRootContainer&&(uc((function(){Jc(null,null,e,!1,(function(){e._reactRootContainer=null,e[ha]=null}))})),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Gc(n))throw Error(i(200));if(null==e||void 0===e._reactInternals)throw Error(i(38));return Jc(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},4391:(e,t,n)=>{"use strict";var r=n(7950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},7950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(2730)},1153:(e,t,n)=>{"use strict";var r=n(5043),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,r)&&!s.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:a,type:e,key:c,ref:u,props:i,_owner:l.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},4202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function v(){}function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=x.prototype;var w=y.prototype=new v;w.constructor=y,m(w,x.prototype),w.isPureReactComponent=!0;var b=Array.isArray,S=Object.prototype.hasOwnProperty,C={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var a,i={},o=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)S.call(t,a)&&!k.hasOwnProperty(a)&&(i[a]=t[a]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===i[a]&&(i[a]=s[a]);return{$$typeof:n,type:e,key:o,ref:l,props:i,_owner:C.current}}function j(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var _=/\/+/g;function z(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function A(e,t,a,i,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return o=o(s=e),e=""===i?"."+z(s,0):i,b(o)?(a="",null!=e&&(a=e.replace(_,"$&/")+"/"),A(o,t,a,"",(function(e){return e}))):null!=o&&(j(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,a+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(_,"$&/")+"/")+e)),t.push(o)),1;if(s=0,i=""===i?".":i+":",b(e))for(var c=0;c<e.length;c++){var u=i+z(l=e[c],c);s+=A(l,t,a,u,o)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(l=e.next()).done;)s+=A(l=l.value,t,a,u=i+z(l,c++),o);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function P(e,t,n){if(null==e)return e;var r=[],a=0;return A(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function N(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R={current:null},T={transition:null},O={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:T,ReactCurrentOwner:C};function L(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:P,forEach:function(e,t,n){P(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!j(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=x,t.Fragment=a,t.Profiler=o,t.PureComponent=y,t.StrictMode=i,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,t.act=L,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=m({},e.props),i=e.key,o=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,l=C.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)S.call(t,c)&&!k.hasOwnProperty(c)&&(a[c]=void 0===t[c]&&void 0!==s?s[c]:t[c])}var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];a.children=s}return{$$typeof:n,type:e.type,key:i,ref:o,props:a,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=j,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:N}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=L,t.useCallback=function(e,t){return R.current.useCallback(e,t)},t.useContext=function(e){return R.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return R.current.useDeferredValue(e)},t.useEffect=function(e,t){return R.current.useEffect(e,t)},t.useId=function(){return R.current.useId()},t.useImperativeHandle=function(e,t,n){return R.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return R.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return R.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return R.current.useMemo(e,t)},t.useReducer=function(e,t,n){return R.current.useReducer(e,t,n)},t.useRef=function(e){return R.current.useRef(e)},t.useState=function(e){return R.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return R.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return R.current.useTransition()},t.version="18.3.1"},5043:(e,t,n)=>{"use strict";e.exports=n(4202)},579:(e,t,n)=>{"use strict";e.exports=n(1153)},7234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<i(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,o=a>>>1;r<o;){var l=2*(r+1)-1,s=e[l],c=l+1,u=e[c];if(0>i(s,n))c<a&&0>i(u,s)?(e[r]=u,e[c]=n,r=c):(e[r]=s,e[l]=n,r=l);else{if(!(c<a&&0>i(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],u=[],d=1,f=null,p=3,h=!1,m=!1,g=!1,x="function"===typeof setTimeout?setTimeout:null,v="function"===typeof clearTimeout?clearTimeout:null,y="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(u);null!==t;){if(null===t.callback)a(u);else{if(!(t.startTime<=e))break;a(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function b(e){if(g=!1,w(e),!m)if(null!==r(c))m=!0,T(S);else{var t=r(u);null!==t&&O(b,t.startTime-e)}}function S(e,n){m=!1,g&&(g=!1,v(j),j=-1),h=!0;var i=p;try{for(w(n),f=r(c);null!==f&&(!(f.expirationTime>n)||e&&!A());){var o=f.callback;if("function"===typeof o){f.callback=null,p=f.priorityLevel;var l=o(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?f.callback=l:f===r(c)&&a(c),w(n)}else a(c);f=r(c)}if(null!==f)var s=!0;else{var d=r(u);null!==d&&O(b,d.startTime-n),s=!1}return s}finally{f=null,p=i,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var C,k=!1,E=null,j=-1,_=5,z=-1;function A(){return!(t.unstable_now()-z<_)}function P(){if(null!==E){var e=t.unstable_now();z=e;var n=!0;try{n=E(!0,e)}finally{n?C():(k=!1,E=null)}}else k=!1}if("function"===typeof y)C=function(){y(P)};else if("undefined"!==typeof MessageChannel){var N=new MessageChannel,R=N.port2;N.port1.onmessage=P,C=function(){R.postMessage(null)}}else C=function(){x(P,0)};function T(e){E=e,k||(k=!0,C())}function O(e,n){j=x((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,T(S))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,a,i){var o=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?o+i:o:i=o,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:i,expirationTime:l=i+l,sortIndex:-1},i>o?(e.sortIndex=i,n(u,e),null===r(c)&&e===r(u)&&(g?(v(j),j=-1):g=!0,O(b,i-o))):(e.sortIndex=l,n(c,e),m||h||(m=!0,T(S))),e},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},8853:(e,t,n)=>{"use strict";e.exports=n(7234)},7324:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var c=i[s];if(!l(c))return!1;var u=e[c],d=t[c];if(!1===(a=n?n.call(r,u,d,c):void 0)||void 0===a&&u!==d)return!1}return!0}},3895:(e,t,n)=>{"use strict";var r=n(5043);var a="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},i=r.useSyncExternalStore,o=r.useRef,l=r.useEffect,s=r.useMemo,c=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,u){var d=o(null);if(null===d.current){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=s((function(){function e(e){if(!l){if(l=!0,i=e,e=r(e),void 0!==u&&f.hasValue){var t=f.value;if(u(t,e))return o=t}return o=e}if(t=o,a(i,e))return t;var n=r(e);return void 0!==u&&u(t,n)?t:(i=e,o=n)}var i,o,l=!1,s=void 0===n?null:n;return[function(){return e(t())},null===s?void 0:function(){return e(s())}]}),[t,n,r,u]);var p=i(e,d[0],d[1]);return l((function(){f.hasValue=!0,f.value=p}),[p]),c(p),p}},7237:(e,t,n)=>{"use strict";e.exports=n(3895)}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var o={};e=e||[null,t({}),t([]),t(t)];for(var l=2&a&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>o[e]=()=>r[e]));return o.default=()=>r,n.d(i,o),i}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".8d69e35a.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="superhardtest:";n.l=(r,a,i,o)=>{if(e[r])e[r].push(a);else{var l,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){l=d;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+i),l.src=r),e[r]=[a];var f=(t,n)=>{l.onerror=l.onload=null,clearTimeout(p);var a=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(n))),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/training/",(()=>{var e={792:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var i=new Promise(((n,r)=>a=e[t]=[n,r]));r.push(a[2]=i);var o=n.p+n.u(t),l=new Error;n.l(o,(r=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var i=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",l.name="ChunkLoadError",l.type=i,l.request=o,a[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var a,i,o=r[0],l=r[1],s=r[2],c=0;if(o.some((t=>0!==e[t]))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)s(n)}for(t&&t(r);c<o.length;c++)i=o[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0},r=self.webpackChunksuperhardtest=self.webpackChunksuperhardtest||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e,t=n(5043),r=n.t(t,2),a=n(4391),i=n(7950),o=n.t(i,2);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(e||(e={}));const s="popstate";function c(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function u(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function d(e,t){return{usr:e.state,key:e.key,idx:t}}function f(e,t,n,r){return void 0===n&&(n=null),l({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?h(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function p(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function h(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function m(t,n,r,a){void 0===a&&(a={});let{window:i=document.defaultView,v5Compat:o=!1}=a,u=i.history,h=e.Pop,m=null,g=x();function x(){return(u.state||{idx:null}).idx}function v(){h=e.Pop;let t=x(),n=null==t?null:t-g;g=t,m&&m({action:h,location:w.location,delta:n})}function y(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"===typeof e?e:p(e);return n=n.replace(/ $/,"%20"),c(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,u.replaceState(l({},u.state,{idx:g}),""));let w={get action(){return h},get location(){return t(i,u)},listen(e){if(m)throw new Error("A history only accepts one active listener");return i.addEventListener(s,v),m=e,()=>{i.removeEventListener(s,v),m=null}},createHref:e=>n(i,e),createURL:y,encodeLocation(e){let t=y(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(t,n){h=e.Push;let a=f(w.location,t,n);r&&r(a,t),g=x()+1;let l=d(a,g),s=w.createHref(a);try{u.pushState(l,"",s)}catch(c){if(c instanceof DOMException&&"DataCloneError"===c.name)throw c;i.location.assign(s)}o&&m&&m({action:h,location:w.location,delta:1})},replace:function(t,n){h=e.Replace;let a=f(w.location,t,n);r&&r(a,t),g=x();let i=d(a,g),l=w.createHref(a);u.replaceState(i,"",l),o&&m&&m({action:h,location:w.location,delta:0})},go:e=>u.go(e)};return w}var g;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(g||(g={}));const x=new Set(["lazy","caseSensitive","path","id","index","children"]);function v(e,t,n,r){return void 0===n&&(n=[]),void 0===r&&(r={}),e.map(((e,a)=>{let i=[...n,String(a)],o="string"===typeof e.id?e.id:i.join("-");if(c(!0!==e.index||!e.children,"Cannot specify children on an index route"),c(!r[o],'Found a route id collision on id "'+o+"\".  Route id's must be globally unique within Data Router usages"),function(e){return!0===e.index}(e)){let n=l({},e,t(e),{id:o});return r[o]=n,n}{let n=l({},e,t(e),{id:o,children:void 0});return r[o]=n,e.children&&(n.children=v(e.children,t,i,r)),n}}))}function y(e,t,n){return void 0===n&&(n="/"),w(e,t,n,!1)}function w(e,t,n,r){let a=O(("string"===typeof t?h(t):t).pathname||"/",n);if(null==a)return null;let i=b(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let o=null;for(let l=0;null==o&&l<i.length;++l){let e=T(a);o=N(i[l],e,r)}return o}function b(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let a=(e,a,i)=>{let o={relativePath:void 0===i?e.path||"":i,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};o.relativePath.startsWith("/")&&(c(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),o.relativePath=o.relativePath.slice(r.length));let l=I([r,o.relativePath]),s=n.concat(o);e.children&&e.children.length>0&&(c(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),b(e.children,t,s,l)),(null!=e.path||e.index)&&t.push({path:l,score:P(l,e.index),routesMeta:s})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of S(e.path))a(e,t,r);else a(e,t)})),t}function S(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(0===r.length)return a?[i,""]:[i];let o=S(r.join("/")),l=[];return l.push(...o.map((e=>""===e?i:[i,e].join("/")))),a&&l.push(...o),l.map((t=>e.startsWith("/")&&""===t?"/":t))}const C=/^:[\w-]+$/,k=3,E=2,j=1,_=10,z=-2,A=e=>"*"===e;function P(e,t){let n=e.split("/"),r=n.length;return n.some(A)&&(r+=z),t&&(r+=E),n.filter((e=>!A(e))).reduce(((e,t)=>e+(C.test(t)?k:""===t?j:_)),r)}function N(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,a={},i="/",o=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,c="/"===i?t:t.slice(i.length)||"/",u=R({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},c),d=e.route;if(!u&&s&&n&&!r[r.length-1].route.index&&(u=R({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(a,u.params),o.push({params:a,pathname:I([i,u.pathname]),pathnameBase:B(I([i,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(i=I([i,u.pathnameBase]))}return o}function R(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);u("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))");let i=new RegExp(a,t?void 0:"i");return[i,r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=l[n]||"";o=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=a&&!s?void 0:(s||"").replace(/%2F/g,"/"),e}),{}),pathname:i,pathnameBase:o,pattern:e}}function T(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return u(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function O(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function L(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function D(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function F(e,t){let n=D(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function M(e,t,n,r){let a;void 0===r&&(r=!1),"string"===typeof e?a=h(e):(a=l({},e),c(!a.pathname||!a.pathname.includes("?"),L("?","pathname","search",a)),c(!a.pathname||!a.pathname.includes("#"),L("#","pathname","hash",a)),c(!a.search||!a.search.includes("#"),L("#","search","hash",a)));let i,o=""===e||""===a.pathname,s=o?"/":a.pathname;if(null==s)i=n;else{let e=t.length-1;if(!r&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}i=e>=0?t[e]:"/"}let u=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:a=""}="string"===typeof e?h(e):e,i=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:i,search:H(r),hash:U(a)}}(a,i),d=s&&"/"!==s&&s.endsWith("/"),f=(o||"."===s)&&n.endsWith("/");return u.pathname.endsWith("/")||!d&&!f||(u.pathname+="/"),u}const I=e=>e.join("/").replace(/\/\/+/g,"/"),B=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),H=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",U=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;class W{constructor(e,t,n,r){void 0===r&&(r=!1),this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}}function $(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const V=["post","put","patch","delete"],K=new Set(V),Q=["get",...V],q=new Set(Q),Y=new Set([301,302,303,307,308]),Z=new Set([307,308]),G={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},X={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},J={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},ee=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,te=e=>({hasErrorBoundary:Boolean(e.hasErrorBoundary)}),ne="remix-router-transitions";function re(t){const n=t.window?t.window:"undefined"!==typeof window?window:void 0,r="undefined"!==typeof n&&"undefined"!==typeof n.document&&"undefined"!==typeof n.document.createElement,a=!r;let i;if(c(t.routes.length>0,"You must provide a non-empty routes array to createRouter"),t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let e=t.detectErrorBoundary;i=t=>({hasErrorBoundary:e(t)})}else i=te;let o,s,d,p={},h=v(t.routes,i,void 0,p),m=t.basename||"/",x=t.unstable_dataStrategy||fe,b=t.unstable_patchRoutesOnNavigation,S=l({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},t.future),C=null,k=new Set,E=1e3,j=new Set,_=null,z=null,A=null,P=null!=t.hydrationData,N=y(h,t.history.location,m),R=null;if(null==N&&!b){let e=je(404,{pathname:t.history.location.pathname}),{matches:n,route:r}=Ee(h);N=n,R={[r.id]:e}}if(N&&!t.hydrationData){ft(N,h,t.history.location.pathname).active&&(N=null)}if(N)if(N.some((e=>e.route.lazy)))s=!1;else if(N.some((e=>e.route.loader)))if(S.v7_partialHydration){let e=t.hydrationData?t.hydrationData.loaderData:null,n=t.hydrationData?t.hydrationData.errors:null,r=t=>!t.route.loader||("function"!==typeof t.route.loader||!0!==t.route.loader.hydrate)&&(e&&void 0!==e[t.route.id]||n&&void 0!==n[t.route.id]);if(n){let e=N.findIndex((e=>void 0!==n[e.route.id]));s=N.slice(0,e+1).every(r)}else s=N.every(r)}else s=null!=t.hydrationData;else s=!0;else if(s=!1,N=[],S.v7_partialHydration){let e=ft(null,h,t.history.location.pathname);e.active&&e.matches&&(N=e.matches)}let T,L,D={historyAction:t.history.action,location:t.history.location,matches:N,initialized:s,navigation:G,restoreScrollPosition:null==t.hydrationData&&null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||R,fetchers:new Map,blockers:new Map},F=e.Pop,M=!1,I=!1,B=new Map,H=null,U=!1,W=!1,V=[],K=new Set,Q=new Map,q=0,Y=-1,re=new Map,oe=new Set,se=new Map,ce=new Map,ve=new Set,ye=new Map,we=new Map,ze=new Map;function Te(e,t){void 0===t&&(t={}),D=l({},D,e);let n=[],r=[];S.v7_fetcherPersist&&D.fetchers.forEach(((e,t)=>{"idle"===e.state&&(ve.has(t)?r.push(t):n.push(t))})),[...k].forEach((e=>e(D,{deletedFetchers:r,unstable_viewTransitionOpts:t.viewTransitionOpts,unstable_flushSync:!0===t.flushSync}))),S.v7_fetcherPersist&&(n.forEach((e=>D.fetchers.delete(e))),r.forEach((e=>Je(e))))}function Oe(n,r,a){var i,s;let c,{flushSync:u}=void 0===a?{}:a,d=null!=D.actionData&&null!=D.navigation.formMethod&&De(D.navigation.formMethod)&&"loading"===D.navigation.state&&!0!==(null==(i=n.state)?void 0:i._isRedirect);c=r.actionData?Object.keys(r.actionData).length>0?r.actionData:null:d?D.actionData:null;let f=r.loaderData?Se(D.loaderData,r.loaderData,r.matches||[],r.errors):D.loaderData,p=D.blockers;p.size>0&&(p=new Map(p),p.forEach(((e,t)=>p.set(t,J))));let m,g=!0===M||null!=D.navigation.formMethod&&De(D.navigation.formMethod)&&!0!==(null==(s=n.state)?void 0:s._isRedirect);if(o&&(h=o,o=void 0),U||F===e.Pop||(F===e.Push?t.history.push(n,n.state):F===e.Replace&&t.history.replace(n,n.state)),F===e.Pop){let e=B.get(D.location.pathname);e&&e.has(n.pathname)?m={currentLocation:D.location,nextLocation:n}:B.has(n.pathname)&&(m={currentLocation:n,nextLocation:D.location})}else if(I){let e=B.get(D.location.pathname);e?e.add(n.pathname):(e=new Set([n.pathname]),B.set(D.location.pathname,e)),m={currentLocation:D.location,nextLocation:n}}Te(l({},r,{actionData:c,loaderData:f,historyAction:F,location:n,initialized:!0,navigation:G,revalidation:"idle",restoreScrollPosition:dt(n,r.matches||D.matches),preventScrollReset:g,blockers:p}),{viewTransitionOpts:m,flushSync:!0===u}),F=e.Pop,M=!1,I=!1,U=!1,W=!1,V=[]}async function Le(n,r,a){T&&T.abort(),T=null,F=n,U=!0===(a&&a.startUninterruptedRevalidation),function(e,t){if(_&&A){let n=ut(e,t);_[n]=A()}}(D.location,D.matches),M=!0===(a&&a.preventScrollReset),I=!0===(a&&a.enableViewTransition);let i=o||h,s=a&&a.overrideNavigation,c=y(i,r,m),u=!0===(a&&a.flushSync),d=ft(c,i,r.pathname);if(d.active&&d.matches&&(c=d.matches),!c){let{error:e,notFoundMatches:t,route:n}=lt(r.pathname);return void Oe(r,{matches:t,loaderData:{},errors:{[n.id]:e}},{flushSync:u})}if(D.initialized&&!W&&function(e,t){if(e.pathname!==t.pathname||e.search!==t.search)return!1;if(""===e.hash)return""!==t.hash;if(e.hash===t.hash)return!0;if(""!==t.hash)return!0;return!1}(D.location,r)&&!(a&&a.submission&&De(a.submission.formMethod)))return void Oe(r,{matches:c},{flushSync:u});T=new AbortController;let f,p=xe(t.history,r,T.signal,a&&a.submission);if(a&&a.pendingError)f=[ke(c).route.id,{type:g.error,error:a.pendingError}];else if(a&&a.submission&&De(a.submission.formMethod)){let n=await async function(t,n,r,a,i,o){void 0===o&&(o={});Ye();let l,s=function(e,t){let n={state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text};return n}(n,r);if(Te({navigation:s},{flushSync:!0===o.flushSync}),i){let e=await pt(a,n.pathname,t.signal);if("aborted"===e.type)return{shortCircuited:!0};if("error"===e.type){let{boundaryId:t,error:r}=st(n.pathname,e);return{matches:e.partialMatches,pendingActionResult:[t,{type:g.error,error:r}]}}if(!e.matches){let{notFoundMatches:e,error:t,route:r}=lt(n.pathname);return{matches:e,pendingActionResult:[r.id,{type:g.error,error:t}]}}a=e.matches}let c=He(a,n);if(c.route.action||c.route.lazy){if(l=(await Qe("action",D,t,[c],a,null))[c.route.id],t.signal.aborted)return{shortCircuited:!0}}else l={type:g.error,error:je(405,{method:t.method,pathname:n.pathname,routeId:c.route.id})};if(Re(l)){let e;if(o&&null!=o.replace)e=o.replace;else{e=ge(l.response.headers.get("Location"),new URL(t.url),m)===D.location.pathname+D.location.search}return await Ke(t,l,!0,{submission:r,replace:e}),{shortCircuited:!0}}if(Pe(l))throw je(400,{type:"defer-action"});if(Ne(l)){let t=ke(a,c.route.id);return!0!==(o&&o.replace)&&(F=e.Push),{matches:a,pendingActionResult:[t.route.id,l]}}return{matches:a,pendingActionResult:[c.route.id,l]}}(p,r,a.submission,c,d.active,{replace:a.replace,flushSync:u});if(n.shortCircuited)return;if(n.pendingActionResult){let[e,t]=n.pendingActionResult;if(Ne(t)&&$(t.error)&&404===t.error.status)return T=null,void Oe(r,{matches:n.matches,loaderData:{},errors:{[e]:t.error}})}c=n.matches||c,f=n.pendingActionResult,s=We(r,a.submission),u=!1,d.active=!1,p=xe(t.history,p.url,p.signal)}let{shortCircuited:x,matches:v,loaderData:w,errors:b}=await async function(e,n,r,a,i,s,c,u,d,f,p){let g=i||We(n,s),x=s||c||Ue(g),v=!U&&(!S.v7_partialHydration||!d);if(a){if(v){let e=Be(p);Te(l({navigation:g},void 0!==e?{actionData:e}:{}),{flushSync:f})}let t=await pt(r,n.pathname,e.signal);if("aborted"===t.type)return{shortCircuited:!0};if("error"===t.type){let{boundaryId:e,error:r}=st(n.pathname,t);return{matches:t.partialMatches,loaderData:{},errors:{[e]:r}}}if(!t.matches){let{error:e,notFoundMatches:t,route:r}=lt(n.pathname);return{matches:t,loaderData:{},errors:{[r.id]:e}}}r=t.matches}let y=o||h,[w,b]=le(t.history,D,r,x,n,S.v7_partialHydration&&!0===d,S.v7_skipActionErrorRevalidation,W,V,K,ve,se,oe,y,m,p);if(ct((e=>!(r&&r.some((t=>t.route.id===e)))||w&&w.some((t=>t.route.id===e)))),Y=++q,0===w.length&&0===b.length){let e=nt();return Oe(n,l({matches:r,loaderData:{},errors:p&&Ne(p[1])?{[p[0]]:p[1].error}:null},Ce(p),e?{fetchers:new Map(D.fetchers)}:{}),{flushSync:f}),{shortCircuited:!0}}if(v){let e={};if(!a){e.navigation=g;let t=Be(p);void 0!==t&&(e.actionData=t)}b.length>0&&(e.fetchers=function(e){return e.forEach((e=>{let t=D.fetchers.get(e.key),n=$e(void 0,t?t.data:void 0);D.fetchers.set(e.key,n)})),new Map(D.fetchers)}(b)),Te(e,{flushSync:f})}b.forEach((e=>{Q.has(e.key)&&et(e.key),e.controller&&Q.set(e.key,e.controller)}));let C=()=>b.forEach((e=>et(e.key)));T&&T.signal.addEventListener("abort",C);let{loaderResults:k,fetcherResults:E}=await qe(D,r,w,b,e);if(e.signal.aborted)return{shortCircuited:!0};T&&T.signal.removeEventListener("abort",C);b.forEach((e=>Q.delete(e.key)));let j=_e(k);if(j)return await Ke(e,j.result,!0,{replace:u}),{shortCircuited:!0};if(j=_e(E),j)return oe.add(j.key),await Ke(e,j.result,!0,{replace:u}),{shortCircuited:!0};let{loaderData:_,errors:z}=be(D,r,w,k,p,b,E,ye);ye.forEach(((e,t)=>{e.subscribe((n=>{(n||e.done)&&ye.delete(t)}))})),S.v7_partialHydration&&d&&D.errors&&Object.entries(D.errors).filter((e=>{let[t]=e;return!w.some((e=>e.route.id===t))})).forEach((e=>{let[t,n]=e;z=Object.assign(z||{},{[t]:n})}));let A=nt(),P=rt(Y),N=A||P||b.length>0;return l({matches:r,loaderData:_,errors:z},N?{fetchers:new Map(D.fetchers)}:{})}(p,r,c,d.active,s,a&&a.submission,a&&a.fetcherSubmission,a&&a.replace,a&&!0===a.initialHydration,u,f);x||(T=null,Oe(r,l({matches:v||c},Ce(f),{loaderData:w,errors:b})))}function Be(e){return e&&!Ne(e[1])?{[e[0]]:e[1].data}:D.actionData?0===Object.keys(D.actionData).length?null:D.actionData:void 0}async function Ke(a,i,o,s){let{submission:u,fetcherSubmission:d,replace:p}=void 0===s?{}:s;i.response.headers.has("X-Remix-Revalidate")&&(W=!0);let h=i.response.headers.get("Location");c(h,"Expected a Location header on the redirect Response"),h=ge(h,new URL(a.url),m);let g=f(D.location,h,{_isRedirect:!0});if(r){let e=!1;if(i.response.headers.has("X-Remix-Reload-Document"))e=!0;else if(ee.test(h)){const r=t.history.createURL(h);e=r.origin!==n.location.origin||null==O(r.pathname,m)}if(e)return void(p?n.location.replace(h):n.location.assign(h))}T=null;let x=!0===p||i.response.headers.has("X-Remix-Replace")?e.Replace:e.Push,{formMethod:v,formAction:y,formEncType:w}=D.navigation;!u&&!d&&v&&y&&w&&(u=Ue(D.navigation));let b=u||d;if(Z.has(i.response.status)&&b&&De(b.formMethod))await Le(x,g,{submission:l({},b,{formAction:h}),preventScrollReset:M,enableViewTransition:o?I:void 0});else{let e=We(g,u);await Le(x,g,{overrideNavigation:e,fetcherSubmission:d,preventScrollReset:M,enableViewTransition:o?I:void 0})}}async function Qe(e,t,n,r,a,o){let l,s={};try{l=await pe(x,e,t,n,r,a,o,p,i)}catch(c){return r.forEach((e=>{s[e.route.id]={type:g.error,error:c}})),s}for(let[i,u]of Object.entries(l))if(Ae(u)){let e=u.result;s[i]={type:g.redirect,response:me(e,n,i,a,m,S.v7_relativeSplatPath)}}else s[i]=await he(u);return s}async function qe(e,n,r,a,i){let o=e.matches,l=Qe("loader",e,i,r,n,null),s=Promise.all(a.map((async n=>{if(n.matches&&n.match&&n.controller){let r=(await Qe("loader",e,xe(t.history,n.path,n.controller.signal),[n.match],n.matches,n.key))[n.match.route.id];return{[n.key]:r}}return Promise.resolve({[n.key]:{type:g.error,error:je(404,{pathname:n.path})}})}))),c=await l,u=(await s).reduce(((e,t)=>Object.assign(e,t)),{});return await Promise.all([Fe(n,c,i.signal,o,e.loaderData),Me(n,u,a)]),{loaderResults:c,fetcherResults:u}}function Ye(){W=!0,V.push(...ct()),se.forEach(((e,t)=>{Q.has(t)&&(K.add(t),et(t))}))}function Ze(e,t,n){void 0===n&&(n={}),D.fetchers.set(e,t),Te({fetchers:new Map(D.fetchers)},{flushSync:!0===(n&&n.flushSync)})}function Ge(e,t,n,r){void 0===r&&(r={});let a=ke(D.matches,t);Je(e),Te({errors:{[a.route.id]:n},fetchers:new Map(D.fetchers)},{flushSync:!0===(r&&r.flushSync)})}function Xe(e){return S.v7_fetcherPersist&&(ce.set(e,(ce.get(e)||0)+1),ve.has(e)&&ve.delete(e)),D.fetchers.get(e)||X}function Je(e){let t=D.fetchers.get(e);!Q.has(e)||t&&"loading"===t.state&&re.has(e)||et(e),se.delete(e),re.delete(e),oe.delete(e),ve.delete(e),K.delete(e),D.fetchers.delete(e)}function et(e){let t=Q.get(e);c(t,"Expected fetch controller: "+e),t.abort(),Q.delete(e)}function tt(e){for(let t of e){let e=Ve(Xe(t).data);D.fetchers.set(t,e)}}function nt(){let e=[],t=!1;for(let n of oe){let r=D.fetchers.get(n);c(r,"Expected fetcher: "+n),"loading"===r.state&&(oe.delete(n),e.push(n),t=!0)}return tt(e),t}function rt(e){let t=[];for(let[n,r]of re)if(r<e){let e=D.fetchers.get(n);c(e,"Expected fetcher: "+n),"loading"===e.state&&(et(n),re.delete(n),t.push(n))}return tt(t),t.length>0}function at(e){D.blockers.delete(e),we.delete(e)}function it(e,t){let n=D.blockers.get(e)||J;c("unblocked"===n.state&&"blocked"===t.state||"blocked"===n.state&&"blocked"===t.state||"blocked"===n.state&&"proceeding"===t.state||"blocked"===n.state&&"unblocked"===t.state||"proceeding"===n.state&&"unblocked"===t.state,"Invalid blocker state transition: "+n.state+" -> "+t.state);let r=new Map(D.blockers);r.set(e,t),Te({blockers:r})}function ot(e){let{currentLocation:t,nextLocation:n,historyAction:r}=e;if(0===we.size)return;we.size>1&&u(!1,"A router only supports one blocker at a time");let a=Array.from(we.entries()),[i,o]=a[a.length-1],l=D.blockers.get(i);return l&&"proceeding"===l.state?void 0:o({currentLocation:t,nextLocation:n,historyAction:r})?i:void 0}function lt(e){let t=je(404,{pathname:e}),n=o||h,{matches:r,route:a}=Ee(n);return ct(),{notFoundMatches:r,route:a,error:t}}function st(e,t){return{boundaryId:ke(t.partialMatches).route.id,error:je(400,{type:"route-discovery",pathname:e,message:null!=t.error&&"message"in t.error?t.error:String(t.error)})}}function ct(e){let t=[];return ye.forEach(((n,r)=>{e&&!e(r)||(n.cancel(),t.push(r),ye.delete(r))})),t}function ut(e,t){if(z){let n=z(e,t.map((e=>function(e,t){let{route:n,pathname:r,params:a}=e;return{id:n.id,pathname:r,params:a,data:t[n.id],handle:n.handle}}(e,D.loaderData))));return n||e.key}return e.key}function dt(e,t){if(_){let n=ut(e,t),r=_[n];if("number"===typeof r)return r}return null}function ft(e,t,n){if(b){if(j.has(n))return{active:!1,matches:e};if(!e){return{active:!0,matches:w(t,n,m,!0)||[]}}if(Object.keys(e[0].params).length>0){return{active:!0,matches:w(t,n,m,!0)}}}return{active:!1,matches:null}}async function pt(e,t,n){let r=e;for(;;){let e=null==o,l=o||h;try{await ue(b,t,r,l,p,i,ze,n)}catch(a){return{type:"error",error:a,partialMatches:r}}finally{e&&(h=[...h])}if(n.aborted)return{type:"aborted"};let s=y(l,t,m);if(s)return ht(t,j),{type:"success",matches:s};let c=w(l,t,m,!0);if(!c||r.length===c.length&&r.every(((e,t)=>e.route.id===c[t].route.id)))return ht(t,j),{type:"success",matches:null};r=c}}function ht(e,t){if(t.size>=E){let e=t.values().next().value;t.delete(e)}t.add(e)}return d={get basename(){return m},get future(){return S},get state(){return D},get routes(){return h},get window(){return n},initialize:function(){if(C=t.history.listen((e=>{let{action:n,location:r,delta:a}=e;if(L)return L(),void(L=void 0);u(0===we.size||null!=a,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let i=ot({currentLocation:D.location,nextLocation:r,historyAction:n});if(i&&null!=a){let e=new Promise((e=>{L=e}));return t.history.go(-1*a),void it(i,{state:"blocked",location:r,proceed(){it(i,{state:"proceeding",proceed:void 0,reset:void 0,location:r}),e.then((()=>t.history.go(a)))},reset(){let e=new Map(D.blockers);e.set(i,J),Te({blockers:e})}})}return Le(n,r)})),r){!function(e,t){try{let n=e.sessionStorage.getItem(ne);if(n){let e=JSON.parse(n);for(let[n,r]of Object.entries(e||{}))r&&Array.isArray(r)&&t.set(n,new Set(r||[]))}}catch(n){}}(n,B);let e=()=>function(e,t){if(t.size>0){let r={};for(let[e,n]of t)r[e]=[...n];try{e.sessionStorage.setItem(ne,JSON.stringify(r))}catch(n){u(!1,"Failed to save applied view transitions in sessionStorage ("+n+").")}}}(n,B);n.addEventListener("pagehide",e),H=()=>n.removeEventListener("pagehide",e)}return D.initialized||Le(e.Pop,D.location,{initialHydration:!0}),d},subscribe:function(e){return k.add(e),()=>k.delete(e)},enableScrollRestoration:function(e,t,n){if(_=e,A=t,z=n||null,!P&&D.navigation===G){P=!0;let e=dt(D.location,D.matches);null!=e&&Te({restoreScrollPosition:e})}return()=>{_=null,A=null,z=null}},navigate:async function n(r,a){if("number"===typeof r)return void t.history.go(r);let i=ae(D.location,D.matches,m,S.v7_prependBasename,r,S.v7_relativeSplatPath,null==a?void 0:a.fromRouteId,null==a?void 0:a.relative),{path:o,submission:s,error:c}=ie(S.v7_normalizeFormMethod,!1,i,a),u=D.location,d=f(D.location,o,a&&a.state);d=l({},d,t.history.encodeLocation(d));let p=a&&null!=a.replace?a.replace:void 0,h=e.Push;!0===p?h=e.Replace:!1===p||null!=s&&De(s.formMethod)&&s.formAction===D.location.pathname+D.location.search&&(h=e.Replace);let g=a&&"preventScrollReset"in a?!0===a.preventScrollReset:void 0,x=!0===(a&&a.unstable_flushSync),v=ot({currentLocation:u,nextLocation:d,historyAction:h});if(!v)return await Le(h,d,{submission:s,pendingError:c,preventScrollReset:g,replace:a&&a.replace,enableViewTransition:a&&a.unstable_viewTransition,flushSync:x});it(v,{state:"blocked",location:d,proceed(){it(v,{state:"proceeding",proceed:void 0,reset:void 0,location:d}),n(r,a)},reset(){let e=new Map(D.blockers);e.set(v,J),Te({blockers:e})}})},fetch:function(e,n,r,i){if(a)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Q.has(e)&&et(e);let l=!0===(i&&i.unstable_flushSync),s=o||h,u=ae(D.location,D.matches,m,S.v7_prependBasename,r,S.v7_relativeSplatPath,n,null==i?void 0:i.relative),d=y(s,u,m),f=ft(d,s,u);if(f.active&&f.matches&&(d=f.matches),!d)return void Ge(e,n,je(404,{pathname:u}),{flushSync:l});let{path:p,submission:g,error:x}=ie(S.v7_normalizeFormMethod,!0,u,i);if(x)return void Ge(e,n,x,{flushSync:l});let v=He(d,p);M=!0===(i&&i.preventScrollReset),g&&De(g.formMethod)?async function(e,n,r,a,i,l,s,u){function d(t){if(!t.route.action&&!t.route.lazy){let t=je(405,{method:u.formMethod,pathname:r,routeId:n});return Ge(e,n,t,{flushSync:s}),!0}return!1}if(Ye(),se.delete(e),!l&&d(a))return;let f=D.fetchers.get(e);Ze(e,function(e,t){let n={state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0};return n}(u,f),{flushSync:s});let p=new AbortController,g=xe(t.history,r,p.signal,u);if(l){let t=await pt(i,r,g.signal);if("aborted"===t.type)return;if("error"===t.type){let{error:a}=st(r,t);return void Ge(e,n,a,{flushSync:s})}if(!t.matches)return void Ge(e,n,je(404,{pathname:r}),{flushSync:s});if(d(a=He(i=t.matches,r)))return}Q.set(e,p);let x=q,v=await Qe("action",D,g,[a],i,e),w=v[a.route.id];if(g.signal.aborted)return void(Q.get(e)===p&&Q.delete(e));if(S.v7_fetcherPersist&&ve.has(e)){if(Re(w)||Ne(w))return void Ze(e,Ve(void 0))}else{if(Re(w))return Q.delete(e),Y>x?void Ze(e,Ve(void 0)):(oe.add(e),Ze(e,$e(u)),Ke(g,w,!1,{fetcherSubmission:u}));if(Ne(w))return void Ge(e,n,w.error)}if(Pe(w))throw je(400,{type:"defer-action"});let b=D.navigation.location||D.location,C=xe(t.history,b,p.signal),k=o||h,E="idle"!==D.navigation.state?y(k,D.navigation.location,m):D.matches;c(E,"Didn't find any matches after fetcher action");let j=++q;re.set(e,j);let _=$e(u,w.data);D.fetchers.set(e,_);let[z,A]=le(t.history,D,E,u,b,!1,S.v7_skipActionErrorRevalidation,W,V,K,ve,se,oe,k,m,[a.route.id,w]);A.filter((t=>t.key!==e)).forEach((e=>{let t=e.key,n=D.fetchers.get(t),r=$e(void 0,n?n.data:void 0);D.fetchers.set(t,r),Q.has(t)&&et(t),e.controller&&Q.set(t,e.controller)})),Te({fetchers:new Map(D.fetchers)});let P=()=>A.forEach((e=>et(e.key)));p.signal.addEventListener("abort",P);let{loaderResults:N,fetcherResults:R}=await qe(D,E,z,A,C);if(p.signal.aborted)return;p.signal.removeEventListener("abort",P),re.delete(e),Q.delete(e),A.forEach((e=>Q.delete(e.key)));let O=_e(N);if(O)return Ke(C,O.result,!1);if(O=_e(R),O)return oe.add(O.key),Ke(C,O.result,!1);let{loaderData:L,errors:M}=be(D,E,z,N,void 0,A,R,ye);if(D.fetchers.has(e)){let t=Ve(w.data);D.fetchers.set(e,t)}rt(j),"loading"===D.navigation.state&&j>Y?(c(F,"Expected pending action"),T&&T.abort(),Oe(D.navigation.location,{matches:E,loaderData:L,errors:M,fetchers:new Map(D.fetchers)})):(Te({errors:M,loaderData:Se(D.loaderData,L,E,M),fetchers:new Map(D.fetchers)}),W=!1)}(e,n,p,v,d,f.active,l,g):(se.set(e,{routeId:n,path:p}),async function(e,n,r,a,i,o,l,s){let u=D.fetchers.get(e);Ze(e,$e(s,u?u.data:void 0),{flushSync:l});let d=new AbortController,f=xe(t.history,r,d.signal);if(o){let t=await pt(i,r,f.signal);if("aborted"===t.type)return;if("error"===t.type){let{error:a}=st(r,t);return void Ge(e,n,a,{flushSync:l})}if(!t.matches)return void Ge(e,n,je(404,{pathname:r}),{flushSync:l});a=He(i=t.matches,r)}Q.set(e,d);let p=q,h=await Qe("loader",D,f,[a],i,e),m=h[a.route.id];Pe(m)&&(m=await Ie(m,f.signal,!0)||m);Q.get(e)===d&&Q.delete(e);if(f.signal.aborted)return;if(ve.has(e))return void Ze(e,Ve(void 0));if(Re(m))return Y>p?void Ze(e,Ve(void 0)):(oe.add(e),void await Ke(f,m,!1));if(Ne(m))return void Ge(e,n,m.error);c(!Pe(m),"Unhandled fetcher deferred data"),Ze(e,Ve(m.data))}(e,n,p,v,d,f.active,l,g))},revalidate:function(){Ye(),Te({revalidation:"loading"}),"submitting"!==D.navigation.state&&("idle"!==D.navigation.state?Le(F||D.historyAction,D.navigation.location,{overrideNavigation:D.navigation,enableViewTransition:!0===I}):Le(D.historyAction,D.location,{startUninterruptedRevalidation:!0}))},createHref:e=>t.history.createHref(e),encodeLocation:e=>t.history.encodeLocation(e),getFetcher:Xe,deleteFetcher:function(e){if(S.v7_fetcherPersist){let t=(ce.get(e)||0)-1;t<=0?(ce.delete(e),ve.add(e)):ce.set(e,t)}else Je(e);Te({fetchers:new Map(D.fetchers)})},dispose:function(){C&&C(),H&&H(),k.clear(),T&&T.abort(),D.fetchers.forEach(((e,t)=>Je(t))),D.blockers.forEach(((e,t)=>at(t)))},getBlocker:function(e,t){let n=D.blockers.get(e)||J;return we.get(e)!==t&&we.set(e,t),n},deleteBlocker:at,patchRoutes:function(e,t){let n=null==o;de(e,t,o||h,p,i),n&&(h=[...h],Te({}))},_internalFetchControllers:Q,_internalActiveDeferreds:ye,_internalSetRoutes:function(e){p={},o=v(e,i,void 0,p)}},d}Symbol("deferred");function ae(e,t,n,r,a,i,o,l){let s,c;if(o){s=[];for(let e of t)if(s.push(e),e.route.id===o){c=e;break}}else s=t,c=t[t.length-1];let u=M(a||".",F(s,i),O(e.pathname,n)||e.pathname,"path"===l);return null==a&&(u.search=e.search,u.hash=e.hash),null!=a&&""!==a&&"."!==a||!c||!c.route.index||Be(u.search)||(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&"/"!==n&&(u.pathname="/"===u.pathname?n:I([n,u.pathname])),p(u)}function ie(e,t,n,r){if(!r||!function(e){return null!=e&&("formData"in e&&null!=e.formData||"body"in e&&void 0!==e.body)}(r))return{path:n};if(r.formMethod&&!Le(r.formMethod))return{path:n,error:je(405,{method:r.formMethod})};let a,i,o=()=>({path:n,error:je(400,{type:"invalid-body"})}),l=r.formMethod||"get",s=e?l.toUpperCase():l.toLowerCase(),u=ze(n);if(void 0!==r.body){if("text/plain"===r.formEncType){if(!De(s))return o();let e="string"===typeof r.body?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce(((e,t)=>{let[n,r]=t;return""+e+n+"="+r+"\n"}),""):String(r.body);return{path:n,submission:{formMethod:s,formAction:u,formEncType:r.formEncType,formData:void 0,json:void 0,text:e}}}if("application/json"===r.formEncType){if(!De(s))return o();try{let e="string"===typeof r.body?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:s,formAction:u,formEncType:r.formEncType,formData:void 0,json:e,text:void 0}}}catch(m){return o()}}}if(c("function"===typeof FormData,"FormData is not available in this environment"),r.formData)a=ve(r.formData),i=r.formData;else if(r.body instanceof FormData)a=ve(r.body),i=r.body;else if(r.body instanceof URLSearchParams)a=r.body,i=ye(a);else if(null==r.body)a=new URLSearchParams,i=new FormData;else try{a=new URLSearchParams(r.body),i=ye(a)}catch(m){return o()}let d={formMethod:s,formAction:u,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:i,json:void 0,text:void 0};if(De(d.formMethod))return{path:n,submission:d};let f=h(n);return t&&f.search&&Be(f.search)&&a.append("index",""),f.search="?"+a,{path:p(f),submission:d}}function oe(e,t){let n=e;if(t){let r=e.findIndex((e=>e.route.id===t));r>=0&&(n=e.slice(0,r))}return n}function le(e,t,n,r,a,i,o,s,c,u,d,f,p,h,m,g){let x=g?Ne(g[1])?g[1].error:g[1].data:void 0,v=e.createURL(t.location),w=e.createURL(a),b=g&&Ne(g[1])?g[0]:void 0,S=b?oe(n,b):n,C=g?g[1].statusCode:void 0,k=o&&C&&C>=400,E=S.filter(((e,n)=>{let{route:a}=e;if(a.lazy)return!0;if(null==a.loader)return!1;if(i)return!("function"===typeof a.loader&&!a.loader.hydrate)||void 0===t.loaderData[a.id]&&(!t.errors||void 0===t.errors[a.id]);if(function(e,t,n){let r=!t||n.route.id!==t.route.id,a=void 0===e[n.route.id];return r||a}(t.loaderData,t.matches[n],e)||c.some((t=>t===e.route.id)))return!0;let o=t.matches[n],u=e;return ce(e,l({currentUrl:v,currentParams:o.params,nextUrl:w,nextParams:u.params},r,{actionResult:x,actionStatus:C,defaultShouldRevalidate:!k&&(s||v.pathname+v.search===w.pathname+w.search||v.search!==w.search||se(o,u))}))})),j=[];return f.forEach(((e,a)=>{if(i||!n.some((t=>t.route.id===e.routeId))||d.has(a))return;let o=y(h,e.path,m);if(!o)return void j.push({key:a,routeId:e.routeId,path:e.path,matches:null,match:null,controller:null});let c=t.fetchers.get(a),f=He(o,e.path),g=!1;p.has(a)?g=!1:u.has(a)?(u.delete(a),g=!0):g=c&&"idle"!==c.state&&void 0===c.data?s:ce(f,l({currentUrl:v,currentParams:t.matches[t.matches.length-1].params,nextUrl:w,nextParams:n[n.length-1].params},r,{actionResult:x,actionStatus:C,defaultShouldRevalidate:!k&&s})),g&&j.push({key:a,routeId:e.routeId,path:e.path,matches:o,match:f,controller:new AbortController})})),[E,j]}function se(e,t){let n=e.route.path;return e.pathname!==t.pathname||null!=n&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function ce(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if("boolean"===typeof n)return n}return t.defaultShouldRevalidate}async function ue(e,t,n,r,a,i,o,l){let s=[t,...n.map((e=>e.route.id))].join("-");try{let u=o.get(s);u||(u=e({path:t,matches:n,patch:(e,t)=>{l.aborted||de(e,t,r,a,i)}}),o.set(s,u)),u&&("object"===typeof(c=u)&&null!=c&&"then"in c)&&await u}finally{o.delete(s)}var c}function de(e,t,n,r,a){if(e){var i;let n=r[e];c(n,"No route found to patch children into: routeId = "+e);let o=v(t,a,[e,"patch",String((null==(i=n.children)?void 0:i.length)||"0")],r);n.children?n.children.push(...o):n.children=o}else{let e=v(t,a,["patch",String(n.length||"0")],r);n.push(...e)}}async function fe(e){let{matches:t}=e,n=t.filter((e=>e.shouldLoad)),r=await Promise.all(n.map((e=>e.resolve())));return r.reduce(((e,t,r)=>Object.assign(e,{[n[r].route.id]:t})),{})}async function pe(e,t,n,r,a,i,o,s,d,f){let p=i.map((e=>e.route.lazy?async function(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let a=n[e.id];c(a,"No route found in manifest");let i={};for(let o in r){let e=void 0!==a[o]&&"hasErrorBoundary"!==o;u(!e,'Route "'+a.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. The lazy route property "'+o+'" will be ignored.'),e||x.has(o)||(i[o]=r[o])}Object.assign(a,i),Object.assign(a,l({},t(a),{lazy:void 0}))}(e.route,d,s):void 0)),h=i.map(((e,n)=>{let i=p[n],o=a.some((t=>t.route.id===e.route.id));return l({},e,{shouldLoad:o,resolve:async n=>(n&&"GET"===r.method&&(e.route.lazy||e.route.loader)&&(o=!0),o?async function(e,t,n,r,a,i){let o,l,s=r=>{let o,s=new Promise(((e,t)=>o=t));l=()=>o(),t.signal.addEventListener("abort",l);let c=a=>"function"!==typeof r?Promise.reject(new Error('You cannot call the handler for a route which defines a boolean "'+e+'" [routeId: '+n.route.id+"]")):r({request:t,params:n.params,context:i},...void 0!==a?[a]:[]),u=(async()=>{try{return{type:"data",result:await(a?a((e=>c(e))):c())}}catch(e){return{type:"error",result:e}}})();return Promise.race([u,s])};try{let a=n.route[e];if(r)if(a){let e,[t]=await Promise.all([s(a).catch((t=>{e=t})),r]);if(void 0!==e)throw e;o=t}else{if(await r,a=n.route[e],!a){if("action"===e){let e=new URL(t.url),r=e.pathname+e.search;throw je(405,{method:t.method,pathname:r,routeId:n.route.id})}return{type:g.data,result:void 0}}o=await s(a)}else{if(!a){let e=new URL(t.url);throw je(404,{pathname:e.pathname+e.search})}o=await s(a)}c(void 0!==o.result,"You defined "+("action"===e?"an action":"a loader")+' for route "'+n.route.id+"\" but didn't return anything from your `"+e+"` function. Please return a value or `null`.")}catch(u){return{type:g.error,result:u}}finally{l&&t.signal.removeEventListener("abort",l)}return o}(t,r,e,i,n,f):Promise.resolve({type:g.data,result:void 0}))})})),m=await e({matches:h,request:r,params:i[0].params,fetcherKey:o,context:f});try{await Promise.all(p)}catch(v){}return m}async function he(e){let{result:t,type:n}=e;if(Oe(t)){let e;try{let n=t.headers.get("Content-Type");e=n&&/\bapplication\/json\b/.test(n)?null==t.body?null:await t.json():await t.text()}catch(c){return{type:g.error,error:c}}return n===g.error?{type:g.error,error:new W(t.status,t.statusText,e),statusCode:t.status,headers:t.headers}:{type:g.data,data:e,statusCode:t.status,headers:t.headers}}if(n===g.error){if(Te(t)){var r,a;if(t.data instanceof Error)return{type:g.error,error:t.data,statusCode:null==(a=t.init)?void 0:a.status};t=new W((null==(r=t.init)?void 0:r.status)||500,void 0,t.data)}return{type:g.error,error:t,statusCode:$(t)?t.status:void 0}}var i,o,l,s;return function(e){let t=e;return t&&"object"===typeof t&&"object"===typeof t.data&&"function"===typeof t.subscribe&&"function"===typeof t.cancel&&"function"===typeof t.resolveData}(t)?{type:g.deferred,deferredData:t,statusCode:null==(i=t.init)?void 0:i.status,headers:(null==(o=t.init)?void 0:o.headers)&&new Headers(t.init.headers)}:Te(t)?{type:g.data,data:t.data,statusCode:null==(l=t.init)?void 0:l.status,headers:null!=(s=t.init)&&s.headers?new Headers(t.init.headers):void 0}:{type:g.data,data:t}}function me(e,t,n,r,a,i){let o=e.headers.get("Location");if(c(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!ee.test(o)){let l=r.slice(0,r.findIndex((e=>e.route.id===n))+1);o=ae(new URL(t.url),l,a,!0,o,i),e.headers.set("Location",o)}return e}function ge(e,t,n){if(ee.test(e)){let r=e,a=r.startsWith("//")?new URL(t.protocol+r):new URL(r),i=null!=O(a.pathname,n);if(a.origin===t.origin&&i)return a.pathname+a.search+a.hash}return e}function xe(e,t,n,r){let a=e.createURL(ze(t)).toString(),i={signal:n};if(r&&De(r.formMethod)){let{formMethod:e,formEncType:t}=r;i.method=e.toUpperCase(),"application/json"===t?(i.headers=new Headers({"Content-Type":t}),i.body=JSON.stringify(r.json)):"text/plain"===t?i.body=r.text:"application/x-www-form-urlencoded"===t&&r.formData?i.body=ve(r.formData):i.body=r.formData}return new Request(a,i)}function ve(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,"string"===typeof r?r:r.name);return t}function ye(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function we(e,t,n,r,a){let i,o={},l=null,s=!1,u={},d=n&&Ne(n[1])?n[1].error:void 0;return e.forEach((n=>{if(!(n.route.id in t))return;let f=n.route.id,p=t[f];if(c(!Re(p),"Cannot handle redirect results in processLoaderData"),Ne(p)){let t=p.error;if(void 0!==d&&(t=d,d=void 0),l=l||{},a)l[f]=t;else{let n=ke(e,f);null==l[n.route.id]&&(l[n.route.id]=t)}o[f]=void 0,s||(s=!0,i=$(p.error)?p.error.status:500),p.headers&&(u[f]=p.headers)}else Pe(p)?(r.set(f,p.deferredData),o[f]=p.deferredData.data,null==p.statusCode||200===p.statusCode||s||(i=p.statusCode),p.headers&&(u[f]=p.headers)):(o[f]=p.data,p.statusCode&&200!==p.statusCode&&!s&&(i=p.statusCode),p.headers&&(u[f]=p.headers))})),void 0!==d&&n&&(l={[n[0]]:d},o[n[0]]=void 0),{loaderData:o,errors:l,statusCode:i||200,loaderHeaders:u}}function be(e,t,n,r,a,i,o,s){let{loaderData:u,errors:d}=we(t,r,a,s,!1);return i.forEach((t=>{let{key:n,match:r,controller:a}=t,i=o[n];if(c(i,"Did not find corresponding fetcher result"),!a||!a.signal.aborted)if(Ne(i)){let t=ke(e.matches,null==r?void 0:r.route.id);d&&d[t.route.id]||(d=l({},d,{[t.route.id]:i.error})),e.fetchers.delete(n)}else if(Re(i))c(!1,"Unhandled fetcher revalidation redirect");else if(Pe(i))c(!1,"Unhandled fetcher deferred data");else{let t=Ve(i.data);e.fetchers.set(n,t)}})),{loaderData:u,errors:d}}function Se(e,t,n,r){let a=l({},t);for(let i of n){let n=i.route.id;if(t.hasOwnProperty(n)?void 0!==t[n]&&(a[n]=t[n]):void 0!==e[n]&&i.route.loader&&(a[n]=e[n]),r&&r.hasOwnProperty(n))break}return a}function Ce(e){return e?Ne(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function ke(e,t){let n=t?e.slice(0,e.findIndex((e=>e.route.id===t))+1):[...e];return n.reverse().find((e=>!0===e.route.hasErrorBoundary))||e[0]}function Ee(e){let t=1===e.length?e[0]:e.find((e=>e.index||!e.path||"/"===e.path))||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function je(e,t){let{pathname:n,routeId:r,method:a,type:i,message:o}=void 0===t?{}:t,l="Unknown Server Error",s="Unknown @remix-run/router error";return 400===e?(l="Bad Request","route-discovery"===i?s='Unable to match URL "'+n+'" - the `unstable_patchRoutesOnNavigation()` function threw the following error:\n'+o:a&&n&&r?s="You made a "+a+' request to "'+n+'" but did not provide a `loader` for route "'+r+'", so there is no way to handle the request.':"defer-action"===i?s="defer() is not supported in actions":"invalid-body"===i&&(s="Unable to encode submission body")):403===e?(l="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):404===e?(l="Not Found",s='No route matches URL "'+n+'"'):405===e&&(l="Method Not Allowed",a&&n&&r?s="You made a "+a.toUpperCase()+' request to "'+n+'" but did not provide an `action` for route "'+r+'", so there is no way to handle the request.':a&&(s='Invalid request method "'+a.toUpperCase()+'"')),new W(e||500,l,new Error(s),!0)}function _e(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[e,r]=t[n];if(Re(r))return{key:e,result:r}}}function ze(e){return p(l({},"string"===typeof e?h(e):e,{hash:""}))}function Ae(e){return Oe(e.result)&&Y.has(e.result.status)}function Pe(e){return e.type===g.deferred}function Ne(e){return e.type===g.error}function Re(e){return(e&&e.type)===g.redirect}function Te(e){return"object"===typeof e&&null!=e&&"type"in e&&"data"in e&&"init"in e&&"DataWithResponseInit"===e.type}function Oe(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"object"===typeof e.headers&&"undefined"!==typeof e.body}function Le(e){return q.has(e.toLowerCase())}function De(e){return K.has(e.toLowerCase())}async function Fe(e,t,n,r,a){let i=Object.entries(t);for(let o=0;o<i.length;o++){let[l,s]=i[o],c=e.find((e=>(null==e?void 0:e.route.id)===l));if(!c)continue;let u=r.find((e=>e.route.id===c.route.id)),d=null!=u&&!se(u,c)&&void 0!==(a&&a[c.route.id]);Pe(s)&&d&&await Ie(s,n,!1).then((e=>{e&&(t[l]=e)}))}}async function Me(e,t,n){for(let r=0;r<n.length;r++){let{key:a,routeId:i,controller:o}=n[r],l=t[a],s=e.find((e=>(null==e?void 0:e.route.id)===i));s&&(Pe(l)&&(c(o,"Expected an AbortController for revalidating fetcher deferred result"),await Ie(l,o.signal,!0).then((e=>{e&&(t[a]=e)}))))}}async function Ie(e,t,n){if(void 0===n&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:g.data,data:e.deferredData.unwrappedData}}catch(r){return{type:g.error,error:r}}return{type:g.data,data:e.deferredData.data}}}function Be(e){return new URLSearchParams(e).getAll("index").some((e=>""===e))}function He(e,t){let n="string"===typeof t?h(t).search:t.search;if(e[e.length-1].route.index&&Be(n||""))return e[e.length-1];let r=D(e);return r[r.length-1]}function Ue(e){let{formMethod:t,formAction:n,formEncType:r,text:a,formData:i,json:o}=e;if(t&&n&&r)return null!=a?{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:a}:null!=i?{formMethod:t,formAction:n,formEncType:r,formData:i,json:void 0,text:void 0}:void 0!==o?{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}:void 0}function We(e,t){if(t){return{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}return{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function $e(e,t){if(e){return{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}}return{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Ve(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Ke(){return Ke=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ke.apply(this,arguments)}const Qe=t.createContext(null);const qe=t.createContext(null);const Ye=t.createContext(null);const Ze=t.createContext(null);const Ge=t.createContext({outlet:null,matches:[],isDataRoute:!1});const Xe=t.createContext(null);function Je(){return null!=t.useContext(Ze)}function et(){return Je()||c(!1),t.useContext(Ze).location}function tt(e){t.useContext(Ye).static||t.useLayoutEffect(e)}function nt(){let{isDataRoute:e}=t.useContext(Ge);return e?function(){let{router:e}=pt(dt.UseNavigateStable),n=mt(ft.UseNavigateStable),r=t.useRef(!1);tt((()=>{r.current=!0}));let a=t.useCallback((function(t,a){void 0===a&&(a={}),r.current&&("number"===typeof t?e.navigate(t):e.navigate(t,Ke({fromRouteId:n},a)))}),[e,n]);return a}():function(){Je()||c(!1);let e=t.useContext(Qe),{basename:n,future:r,navigator:a}=t.useContext(Ye),{matches:i}=t.useContext(Ge),{pathname:o}=et(),l=JSON.stringify(F(i,r.v7_relativeSplatPath)),s=t.useRef(!1);return tt((()=>{s.current=!0})),t.useCallback((function(t,r){if(void 0===r&&(r={}),!s.current)return;if("number"===typeof t)return void a.go(t);let i=M(t,JSON.parse(l),o,"path"===r.relative);null==e&&"/"!==n&&(i.pathname="/"===i.pathname?n:I([n,i.pathname])),(r.replace?a.replace:a.push)(i,r.state,r)}),[n,a,l,o,e])}()}const rt=t.createContext(null);function at(e,n){let{relative:r}=void 0===n?{}:n,{future:a}=t.useContext(Ye),{matches:i}=t.useContext(Ge),{pathname:o}=et(),l=JSON.stringify(F(i,a.v7_relativeSplatPath));return t.useMemo((()=>M(e,JSON.parse(l),o,"path"===r)),[e,l,o,r])}function it(n,r,a,i){Je()||c(!1);let{navigator:o}=t.useContext(Ye),{matches:l}=t.useContext(Ge),s=l[l.length-1],u=s?s.params:{},d=(s&&s.pathname,s?s.pathnameBase:"/");s&&s.route;let f,p=et();if(r){var m;let e="string"===typeof r?h(r):r;"/"===d||(null==(m=e.pathname)?void 0:m.startsWith(d))||c(!1),f=e}else f=p;let g=f.pathname||"/",x=g;if("/"!==d){let e=d.replace(/^\//,"").split("/");x="/"+g.replace(/^\//,"").split("/").slice(e.length).join("/")}let v=y(n,{pathname:x});let w=ut(v&&v.map((e=>Object.assign({},e,{params:Object.assign({},u,e.params),pathname:I([d,o.encodeLocation?o.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:I([d,o.encodeLocation?o.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),l,a,i);return r&&w?t.createElement(Ze.Provider,{value:{location:Ke({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:e.Pop}},w):w}function ot(){let e=gt(),n=$(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:a};return t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},n),r?t.createElement("pre",{style:i},r):null,null)}const lt=t.createElement(ot,null);class st extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement(Ge.Provider,{value:this.props.routeContext},t.createElement(Xe.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ct(e){let{routeContext:n,match:r,children:a}=e,i=t.useContext(Qe);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),t.createElement(Ge.Provider,{value:n},a)}function ut(e,n,r,a){var i;if(void 0===n&&(n=[]),void 0===r&&(r=null),void 0===a&&(a=null),null==e){var o;if(!r)return null;if(r.errors)e=r.matches;else{if(!(null!=(o=a)&&o.v7_partialHydration&&0===n.length&&!r.initialized&&r.matches.length>0))return null;e=r.matches}}let l=e,s=null==(i=r)?void 0:i.errors;if(null!=s){let e=l.findIndex((e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id])));e>=0||c(!1),l=l.slice(0,Math.min(l.length,e+1))}let u=!1,d=-1;if(r&&a&&a.v7_partialHydration)for(let t=0;t<l.length;t++){let e=l[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=t),e.route.id){let{loaderData:t,errors:n}=r,a=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||a){u=!0,l=d>=0?l.slice(0,d+1):[l[0]];break}}}return l.reduceRight(((e,a,i)=>{let o,c=!1,f=null,p=null;var h;r&&(o=s&&a.route.id?s[a.route.id]:void 0,f=a.route.errorElement||lt,u&&(d<0&&0===i?(h="route-fallback",!1||xt[h]||(xt[h]=!0),c=!0,p=null):d===i&&(c=!0,p=a.route.hydrateFallbackElement||null)));let m=n.concat(l.slice(0,i+1)),g=()=>{let n;return n=o?f:c?p:a.route.Component?t.createElement(a.route.Component,null):a.route.element?a.route.element:e,t.createElement(ct,{match:a,routeContext:{outlet:e,matches:m,isDataRoute:null!=r},children:n})};return r&&(a.route.ErrorBoundary||a.route.errorElement||0===i)?t.createElement(st,{location:r.location,revalidation:r.revalidation,component:f,error:o,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()}),null)}var dt=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(dt||{}),ft=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ft||{});function pt(e){let n=t.useContext(Qe);return n||c(!1),n}function ht(e){let n=t.useContext(qe);return n||c(!1),n}function mt(e){let n=function(){let e=t.useContext(Ge);return e||c(!1),e}(),r=n.matches[n.matches.length-1];return r.route.id||c(!1),r.route.id}function gt(){var e;let n=t.useContext(Xe),r=ht(ft.UseRouteError),a=mt(ft.UseRouteError);return void 0!==n?n:null==(e=r.errors)?void 0:e[a]}const xt={};r.startTransition;function vt(e){return function(e){let n=t.useContext(Ge).outlet;return n?t.createElement(rt.Provider,{value:e},n):n}(e.context)}function yt(n){let{basename:r="/",children:a=null,location:i,navigationType:o=e.Pop,navigator:l,static:s=!1,future:u}=n;Je()&&c(!1);let d=r.replace(/^\/*/,"/"),f=t.useMemo((()=>({basename:d,navigator:l,static:s,future:Ke({v7_relativeSplatPath:!1},u)})),[d,u,l,s]);"string"===typeof i&&(i=h(i));let{pathname:p="/",search:m="",hash:g="",state:x=null,key:v="default"}=i,y=t.useMemo((()=>{let e=O(p,d);return null==e?null:{location:{pathname:e,search:m,hash:g,state:x,key:v},navigationType:o}}),[d,p,m,g,x,v,o]);return null==y?null:t.createElement(Ye.Provider,{value:f},t.createElement(Ze.Provider,{children:a,value:y}))}new Promise((()=>{}));t.Component;function wt(e){let n={hasErrorBoundary:null!=e.ErrorBoundary||null!=e.errorElement};return e.Component&&Object.assign(n,{element:t.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(n,{hydrateFallbackElement:t.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(n,{errorElement:t.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),n}function bt(){return bt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bt.apply(this,arguments)}function St(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const Ct=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];try{window.__reactRouterVersion="6"}catch(mf){}function kt(){var e;let t=null==(e=window)?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=bt({},t,{errors:Et(t.errors)})),t}function Et(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,a]of t)if(a&&"RouteErrorResponse"===a.__type)n[r]=new W(a.status,a.statusText,a.data,!0===a.internal);else if(a&&"Error"===a.__type){if(a.__subType){let e=window[a.__subType];if("function"===typeof e)try{let t=new e(a.message);t.stack="",n[r]=t}catch(mf){}}if(null==n[r]){let e=new Error(a.message);e.stack="",n[r]=e}}else n[r]=a;return n}const jt=t.createContext({isTransitioning:!1});const _t=t.createContext(new Map);const zt=r.startTransition,At=o.flushSync;r.useId;function Pt(e){At?At(e):e()}class Nt{constructor(){this.status="pending",this.promise=new Promise(((e,t)=>{this.resolve=t=>{"pending"===this.status&&(this.status="resolved",e(t))},this.reject=e=>{"pending"===this.status&&(this.status="rejected",t(e))}}))}}function Rt(e){let{fallbackElement:n,router:r,future:a}=e,[i,o]=t.useState(r.state),[l,s]=t.useState(),[c,u]=t.useState({isTransitioning:!1}),[d,f]=t.useState(),[p,h]=t.useState(),[m,g]=t.useState(),x=t.useRef(new Map),{v7_startTransition:v}=a||{},y=t.useCallback((e=>{v?function(e){zt?zt(e):e()}(e):e()}),[v]),w=t.useCallback(((e,t)=>{let{deletedFetchers:n,unstable_flushSync:a,unstable_viewTransitionOpts:i}=t;n.forEach((e=>x.current.delete(e))),e.fetchers.forEach(((e,t)=>{void 0!==e.data&&x.current.set(t,e.data)}));let l=null==r.window||null==r.window.document||"function"!==typeof r.window.document.startViewTransition;if(i&&!l){if(a){Pt((()=>{p&&(d&&d.resolve(),p.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:i.currentLocation,nextLocation:i.nextLocation})}));let t=r.window.document.startViewTransition((()=>{Pt((()=>o(e)))}));return t.finished.finally((()=>{Pt((()=>{f(void 0),h(void 0),s(void 0),u({isTransitioning:!1})}))})),void Pt((()=>h(t)))}p?(d&&d.resolve(),p.skipTransition(),g({state:e,currentLocation:i.currentLocation,nextLocation:i.nextLocation})):(s(e),u({isTransitioning:!0,flushSync:!1,currentLocation:i.currentLocation,nextLocation:i.nextLocation}))}else a?Pt((()=>o(e))):y((()=>o(e)))}),[r.window,p,d,x,y]);t.useLayoutEffect((()=>r.subscribe(w)),[r,w]),t.useEffect((()=>{c.isTransitioning&&!c.flushSync&&f(new Nt)}),[c]),t.useEffect((()=>{if(d&&l&&r.window){let e=l,t=d.promise,n=r.window.document.startViewTransition((async()=>{y((()=>o(e))),await t}));n.finished.finally((()=>{f(void 0),h(void 0),s(void 0),u({isTransitioning:!1})})),h(n)}}),[y,l,d,r.window]),t.useEffect((()=>{d&&l&&i.location.key===l.location.key&&d.resolve()}),[d,p,i.location,l]),t.useEffect((()=>{!c.isTransitioning&&m&&(s(m.state),u({isTransitioning:!0,flushSync:!1,currentLocation:m.currentLocation,nextLocation:m.nextLocation}),g(void 0))}),[c.isTransitioning,m]),t.useEffect((()=>{}),[]);let b=t.useMemo((()=>({createHref:r.createHref,encodeLocation:r.encodeLocation,go:e=>r.navigate(e),push:(e,t,n)=>r.navigate(e,{state:t,preventScrollReset:null==n?void 0:n.preventScrollReset}),replace:(e,t,n)=>r.navigate(e,{replace:!0,state:t,preventScrollReset:null==n?void 0:n.preventScrollReset})})),[r]),S=r.basename||"/",C=t.useMemo((()=>({router:r,navigator:b,static:!1,basename:S})),[r,b,S]),k=t.useMemo((()=>({v7_relativeSplatPath:r.future.v7_relativeSplatPath})),[r.future.v7_relativeSplatPath]);return t.createElement(t.Fragment,null,t.createElement(Qe.Provider,{value:C},t.createElement(qe.Provider,{value:i},t.createElement(_t.Provider,{value:x.current},t.createElement(jt.Provider,{value:c},t.createElement(yt,{basename:S,location:i.location,navigationType:i.historyAction,navigator:b,future:k},i.initialized||r.future.v7_partialHydration?t.createElement(Tt,{routes:r.routes,future:r.future,state:i}):n))))),null)}const Tt=t.memo(Ot);function Ot(e){let{routes:t,future:n,state:r}=e;return it(t,void 0,r,n)}const Lt="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,Dt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ft=t.forwardRef((function(e,n){let r,{onClick:a,relative:i,reloadDocument:o,replace:l,state:s,target:u,to:d,preventScrollReset:f,unstable_viewTransition:h}=e,m=St(e,Ct),{basename:g}=t.useContext(Ye),x=!1;if("string"===typeof d&&Dt.test(d)&&(r=d,Lt))try{let e=new URL(window.location.href),t=d.startsWith("//")?new URL(e.protocol+d):new URL(d),n=O(t.pathname,g);t.origin===e.origin&&null!=n?d=n+t.search+t.hash:x=!0}catch(mf){}let v=function(e,n){let{relative:r}=void 0===n?{}:n;Je()||c(!1);let{basename:a,navigator:i}=t.useContext(Ye),{hash:o,pathname:l,search:s}=at(e,{relative:r}),u=l;return"/"!==a&&(u="/"===l?a:I([a,l])),i.createHref({pathname:u,search:s,hash:o})}(d,{relative:i}),y=function(e,n){let{target:r,replace:a,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s}=void 0===n?{}:n,c=nt(),u=et(),d=at(e,{relative:l});return t.useCallback((t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,r)){t.preventDefault();let n=void 0!==a?a:p(u)===p(d);c(e,{replace:n,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:s})}}),[u,c,d,a,i,r,e,o,l,s])}(d,{replace:l,state:s,target:u,preventScrollReset:f,relative:i,unstable_viewTransition:h});return t.createElement("a",bt({},m,{href:r||v,onClick:x||o?a:function(e){a&&a(e),e.defaultPrevented||y(e)},ref:n,target:u}))}));var Mt,It;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Mt||(Mt={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(It||(It={}));var Bt,Ht;function Ut(){return Ut=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ut.apply(null,arguments)}function Wt(e,n){let{title:r,titleId:a,...i}=e;return t.createElement("svg",Ut({width:26,height:26,viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":a},i),r?t.createElement("title",{id:a},r):null,Bt||(Bt=t.createElement("path",{d:"M11.5 20C16.1944 20 20 16.1944 20 11.5C20 6.80558 16.1944 3 11.5 3C6.80558 3 3 6.80558 3 11.5C3 16.1944 6.80558 20 11.5 20Z",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Ht||(Ht=t.createElement("path",{d:"M23 23L18 18",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}const $t=t.forwardRef(Wt);n.p;var Vt=function(){return Vt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},Vt.apply(this,arguments)};Object.create;function Kt(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var Qt=n(7324),qt=n.n(Qt),Yt="-ms-",Zt="-moz-",Gt="-webkit-",Xt="comm",Jt="rule",en="decl",tn="@import",nn="@keyframes",rn="@layer",an=Math.abs,on=String.fromCharCode,ln=Object.assign;function sn(e){return e.trim()}function cn(e,t){return(e=t.exec(e))?e[0]:e}function un(e,t,n){return e.replace(t,n)}function dn(e,t,n){return e.indexOf(t,n)}function fn(e,t){return 0|e.charCodeAt(t)}function pn(e,t,n){return e.slice(t,n)}function hn(e){return e.length}function mn(e){return e.length}function gn(e,t){return t.push(e),e}function xn(e,t){return e.filter((function(e){return!cn(e,t)}))}var vn=1,yn=1,wn=0,bn=0,Sn=0,Cn="";function kn(e,t,n,r,a,i,o,l){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:vn,column:yn,length:o,return:"",siblings:l}}function En(e,t){return ln(kn("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function jn(e){for(;e.root;)e=En(e.root,{children:[e]});gn(e,e.siblings)}function _n(){return Sn=bn>0?fn(Cn,--bn):0,yn--,10===Sn&&(yn=1,vn--),Sn}function zn(){return Sn=bn<wn?fn(Cn,bn++):0,yn++,10===Sn&&(yn=1,vn++),Sn}function An(){return fn(Cn,bn)}function Pn(){return bn}function Nn(e,t){return pn(Cn,e,t)}function Rn(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Tn(e){return vn=yn=1,wn=hn(Cn=e),bn=0,[]}function On(e){return Cn="",e}function Ln(e){return sn(Nn(bn-1,Mn(91===e?e+2:40===e?e+1:e)))}function Dn(e){for(;(Sn=An())&&Sn<33;)zn();return Rn(e)>2||Rn(Sn)>3?"":" "}function Fn(e,t){for(;--t&&zn()&&!(Sn<48||Sn>102||Sn>57&&Sn<65||Sn>70&&Sn<97););return Nn(e,Pn()+(t<6&&32==An()&&32==zn()))}function Mn(e){for(;zn();)switch(Sn){case e:return bn;case 34:case 39:34!==e&&39!==e&&Mn(Sn);break;case 40:41===e&&Mn(e);break;case 92:zn()}return bn}function In(e,t){for(;zn()&&e+Sn!==57&&(e+Sn!==84||47!==An()););return"/*"+Nn(t,bn-1)+"*"+on(47===e?e:zn())}function Bn(e){for(;!Rn(An());)zn();return Nn(e,bn)}function Hn(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Un(e,t,n,r){switch(e.type){case rn:if(e.children.length)break;case tn:case en:return e.return=e.return||e.value;case Xt:return"";case nn:return e.return=e.value+"{"+Hn(e.children,r)+"}";case Jt:if(!hn(e.value=e.props.join(",")))return""}return hn(n=Hn(e.children,r))?e.return=e.value+"{"+n+"}":""}function Wn(e,t,n){switch(function(e,t){return 45^fn(e,0)?(((t<<2^fn(e,0))<<2^fn(e,1))<<2^fn(e,2))<<2^fn(e,3):0}(e,t)){case 5103:return Gt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Gt+e+e;case 4789:return Zt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Gt+e+Zt+e+Yt+e+e;case 5936:switch(fn(e,t+11)){case 114:return Gt+e+Yt+un(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Gt+e+Yt+un(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Gt+e+Yt+un(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Gt+e+Yt+e+e;case 6165:return Gt+e+Yt+"flex-"+e+e;case 5187:return Gt+e+un(e,/(\w+).+(:[^]+)/,Gt+"box-$1$2"+Yt+"flex-$1$2")+e;case 5443:return Gt+e+Yt+"flex-item-"+un(e,/flex-|-self/g,"")+(cn(e,/flex-|baseline/)?"":Yt+"grid-row-"+un(e,/flex-|-self/g,""))+e;case 4675:return Gt+e+Yt+"flex-line-pack"+un(e,/align-content|flex-|-self/g,"")+e;case 5548:return Gt+e+Yt+un(e,"shrink","negative")+e;case 5292:return Gt+e+Yt+un(e,"basis","preferred-size")+e;case 6060:return Gt+"box-"+un(e,"-grow","")+Gt+e+Yt+un(e,"grow","positive")+e;case 4554:return Gt+un(e,/([^-])(transform)/g,"$1"+Gt+"$2")+e;case 6187:return un(un(un(e,/(zoom-|grab)/,Gt+"$1"),/(image-set)/,Gt+"$1"),e,"")+e;case 5495:case 3959:return un(e,/(image-set\([^]*)/,Gt+"$1$`$1");case 4968:return un(un(e,/(.+:)(flex-)?(.*)/,Gt+"box-pack:$3"+Yt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Gt+e+e;case 4200:if(!cn(e,/flex-|baseline/))return Yt+"grid-column-align"+pn(e,t)+e;break;case 2592:case 3360:return Yt+un(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,cn(e.props,/grid-\w+-end/)}))?~dn(e+(n=n[t].value),"span",0)?e:Yt+un(e,"-start","")+e+Yt+"grid-row-span:"+(~dn(n,"span",0)?cn(n,/\d+/):+cn(n,/\d+/)-+cn(e,/\d+/))+";":Yt+un(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return cn(e.props,/grid-\w+-start/)}))?e:Yt+un(un(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return un(e,/(.+)-inline(.+)/,Gt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(hn(e)-1-t>6)switch(fn(e,t+1)){case 109:if(45!==fn(e,t+4))break;case 102:return un(e,/(.+:)(.+)-([^]+)/,"$1"+Gt+"$2-$3$1"+Zt+(108==fn(e,t+3)?"$3":"$2-$3"))+e;case 115:return~dn(e,"stretch",0)?Wn(un(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return un(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,a,i,o,l){return Yt+n+":"+r+l+(a?Yt+n+"-span:"+(i?o:+o-+r)+l:"")+e}));case 4949:if(121===fn(e,t+6))return un(e,":",":"+Gt)+e;break;case 6444:switch(fn(e,45===fn(e,14)?18:11)){case 120:return un(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Gt+(45===fn(e,14)?"inline-":"")+"box$3$1"+Gt+"$2$3$1"+Yt+"$2box$3")+e;case 100:return un(e,":",":"+Yt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return un(e,"scroll-","scroll-snap-")+e}return e}function $n(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case en:return void(e.return=Wn(e.value,e.length,n));case nn:return Hn([En(e,{value:un(e.value,"@","@"+Gt)})],r);case Jt:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(cn(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":jn(En(e,{props:[un(t,/:(read-\w+)/,":"+Zt+"$1")]})),jn(En(e,{props:[t]})),ln(e,{props:xn(n,r)});break;case"::placeholder":jn(En(e,{props:[un(t,/:(plac\w+)/,":"+Gt+"input-$1")]})),jn(En(e,{props:[un(t,/:(plac\w+)/,":"+Zt+"$1")]})),jn(En(e,{props:[un(t,/:(plac\w+)/,Yt+"input-$1")]})),jn(En(e,{props:[t]})),ln(e,{props:xn(n,r)})}return""}))}}function Vn(e){return On(Kn("",null,null,null,[""],e=Tn(e),0,[0],e))}function Kn(e,t,n,r,a,i,o,l,s){for(var c=0,u=0,d=o,f=0,p=0,h=0,m=1,g=1,x=1,v=0,y="",w=a,b=i,S=r,C=y;g;)switch(h=v,v=zn()){case 40:if(108!=h&&58==fn(C,d-1)){-1!=dn(C+=un(Ln(v),"&","&\f"),"&\f",an(c?l[c-1]:0))&&(x=-1);break}case 34:case 39:case 91:C+=Ln(v);break;case 9:case 10:case 13:case 32:C+=Dn(h);break;case 92:C+=Fn(Pn()-1,7);continue;case 47:switch(An()){case 42:case 47:gn(qn(In(zn(),Pn()),t,n,s),s);break;default:C+="/"}break;case 123*m:l[c++]=hn(C)*x;case 125*m:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:-1==x&&(C=un(C,/\f/g,"")),p>0&&hn(C)-d&&gn(p>32?Yn(C+";",r,n,d-1,s):Yn(un(C," ","")+";",r,n,d-2,s),s);break;case 59:C+=";";default:if(gn(S=Qn(C,t,n,c,u,a,l,y,w=[],b=[],d,i),i),123===v)if(0===u)Kn(C,t,S,S,w,i,d,l,b);else switch(99===f&&110===fn(C,3)?100:f){case 100:case 108:case 109:case 115:Kn(e,S,S,r&&gn(Qn(e,S,S,0,0,a,l,y,a,w=[],d,b),b),a,b,d,l,r?w:b);break;default:Kn(C,S,S,S,[""],b,0,l,b)}}c=u=p=0,m=x=1,y=C="",d=o;break;case 58:d=1+hn(C),p=h;default:if(m<1)if(123==v)--m;else if(125==v&&0==m++&&125==_n())continue;switch(C+=on(v),v*m){case 38:x=u>0?1:(C+="\f",-1);break;case 44:l[c++]=(hn(C)-1)*x,x=1;break;case 64:45===An()&&(C+=Ln(zn())),f=An(),u=d=hn(y=C+=Bn(Pn())),v++;break;case 45:45===h&&2==hn(C)&&(m=0)}}return i}function Qn(e,t,n,r,a,i,o,l,s,c,u,d){for(var f=a-1,p=0===a?i:[""],h=mn(p),m=0,g=0,x=0;m<r;++m)for(var v=0,y=pn(e,f+1,f=an(g=o[m])),w=e;v<h;++v)(w=sn(g>0?p[v]+" "+y:un(y,/&\f/g,p[v])))&&(s[x++]=w);return kn(e,t,n,0===a?Jt:l,s,c,u,d)}function qn(e,t,n,r){return kn(e,t,n,Xt,on(Sn),pn(e,2,-2),0,r)}function Yn(e,t,n,r,a){return kn(e,t,n,en,pn(e,0,r),pn(e,r+1,-1),r,a)}var Zn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Gn="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",Xn="active",Jn="data-styled-version",er="6.1.13",tr="/*!sc*/\n",nr="undefined"!=typeof window&&"HTMLElement"in window,rr=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/training",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),ar=(new Set,Object.freeze([])),ir=Object.freeze({});function or(e,t,n){return void 0===n&&(n=ir),e.theme!==n.theme&&e.theme||t||n.theme}var lr=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),sr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,cr=/(^-|-$)/g;function ur(e){return e.replace(sr,"-").replace(cr,"")}var dr=/(a)(d)/gi,fr=52,pr=function(e){return String.fromCharCode(e+(e>25?39:97))};function hr(e){var t,n="";for(t=Math.abs(e);t>fr;t=t/fr|0)n=pr(t%fr)+n;return(pr(t%fr)+n).replace(dr,"$1-$2")}var mr,gr=5381,xr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},vr=function(e){return xr(gr,e)};function yr(e){return hr(vr(e)>>>0)}function wr(e){return e.displayName||e.name||"Component"}function br(e){return"string"==typeof e&&!0}var Sr="function"==typeof Symbol&&Symbol.for,Cr=Sr?Symbol.for("react.memo"):60115,kr=Sr?Symbol.for("react.forward_ref"):60112,Er={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},jr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_r={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},zr=((mr={})[kr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},mr[Cr]=_r,mr);function Ar(e){return("type"in(t=e)&&t.type.$$typeof)===Cr?_r:"$$typeof"in e?zr[e.$$typeof]:Er;var t}var Pr=Object.defineProperty,Nr=Object.getOwnPropertyNames,Rr=Object.getOwnPropertySymbols,Tr=Object.getOwnPropertyDescriptor,Or=Object.getPrototypeOf,Lr=Object.prototype;function Dr(e,t,n){if("string"!=typeof t){if(Lr){var r=Or(t);r&&r!==Lr&&Dr(e,r,n)}var a=Nr(t);Rr&&(a=a.concat(Rr(t)));for(var i=Ar(e),o=Ar(t),l=0;l<a.length;++l){var s=a[l];if(!(s in jr||n&&n[s]||o&&s in o||i&&s in i)){var c=Tr(t,s);try{Pr(e,s,c)}catch(e){}}}}return e}function Fr(e){return"function"==typeof e}function Mr(e){return"object"==typeof e&&"styledComponentId"in e}function Ir(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Br(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Hr(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ur(e,t,n){if(void 0===n&&(n=!1),!n&&!Hr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ur(e[r],t[r]);else if(Hr(t))for(var r in t)e[r]=Ur(e[r],t[r]);return e}function Wr(e,t){Object.defineProperty(e,"toString",{value:t})}function $r(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Vr=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw $r(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var i=r;i<a;i++)this.groupSizes[i]=0}for(var o=this.indexOfGroup(e+1),l=(i=0,t.length);i<l;i++)this.tag.insertRule(o,t[i])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,i=r;i<a;i++)t+="".concat(this.tag.getRule(i)).concat(tr);return t},e}(),Kr=new Map,Qr=new Map,qr=1,Yr=function(e){if(Kr.has(e))return Kr.get(e);for(;Qr.has(qr);)qr++;var t=qr++;return Kr.set(e,t),Qr.set(t,e),t},Zr=function(e,t){qr=t+1,Kr.set(e,t),Qr.set(t,e)},Gr="style[".concat(Gn,"][").concat(Jn,'="').concat(er,'"]'),Xr=new RegExp("^".concat(Gn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Jr=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},ea=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(tr),a=[],i=0,o=r.length;i<o;i++){var l=r[i].trim();if(l){var s=l.match(Xr);if(s){var c=0|parseInt(s[1],10),u=s[2];0!==c&&(Zr(u,c),Jr(e,u,s[3]),e.getTag().insertRules(c,a)),a.length=0}else a.push(l)}}},ta=function(e){for(var t=document.querySelectorAll(Gr),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(Gn)!==Xn&&(ea(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function na(){return n.nc}var ra=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(Gn,"]")));return t[t.length-1]}(n),i=void 0!==a?a.nextSibling:null;r.setAttribute(Gn,Xn),r.setAttribute(Jn,er);var o=na();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},aa=function(){function e(e){this.element=ra(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}throw $r(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),ia=function(){function e(e){this.element=ra(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),oa=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),la=nr,sa={isServer:!nr,useCSSOMInjection:!rr},ca=function(){function e(e,t,n){void 0===e&&(e=ir),void 0===t&&(t={});var r=this;this.options=Vt(Vt({},sa),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&nr&&la&&(la=!1,ta(this)),Wr(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return Qr.get(e)}(n);if(void 0===a)return"continue";var i=e.names.get(a),o=t.getGroup(n);if(void 0===i||!i.size||0===o.length)return"continue";var l="".concat(Gn,".g").concat(n,'[id="').concat(a,'"]'),s="";void 0!==i&&i.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(o).concat(l,'{content:"').concat(s,'"}').concat(tr)},i=0;i<n;i++)a(i);return r}(r)}))}return e.registerId=function(e){return Yr(e)},e.prototype.rehydrate=function(){!this.server&&nr&&ta(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(Vt(Vt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new oa(n):t?new aa(n):new ia(n)}(this.options),new Vr(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Yr(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Yr(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Yr(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),ua=/&/g,da=/^\s*\/\/.*$/gm;function fa(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=fa(e.children,t)),e}))}function pa(e){var t,n,r,a=void 0===e?ir:e,i=a.options,o=void 0===i?ir:i,l=a.plugins,s=void 0===l?ar:l,c=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},u=s.slice();u.push((function(e){e.type===Jt&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(ua,n).replace(r,c))})),o.prefix&&u.push($n),u.push(Un);var d=function(e,a,i,l){void 0===a&&(a=""),void 0===i&&(i=""),void 0===l&&(l="&"),t=l,n=a,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(da,""),c=Vn(i||a?"".concat(i," ").concat(a," { ").concat(s," }"):s);o.namespace&&(c=fa(c,o.namespace));var d,f=[];return Hn(c,function(e){var t=mn(e);return function(n,r,a,i){for(var o="",l=0;l<t;l++)o+=e[l](n,r,a,i)||"";return o}}(u.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=s.length?s.reduce((function(e,t){return t.name||$r(15),xr(e,t.name)}),gr).toString():"",d}var ha=new ca,ma=pa(),ga=t.createContext({shouldForwardProp:void 0,styleSheet:ha,stylis:ma}),xa=(ga.Consumer,t.createContext(void 0));function va(){return(0,t.useContext)(ga)}function ya(e){var n=(0,t.useState)(e.stylisPlugins),r=n[0],a=n[1],i=va().styleSheet,o=(0,t.useMemo)((function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,i]),l=(0,t.useMemo)((function(){return pa({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})}),[e.enableVendorPrefixes,e.namespace,r]);(0,t.useEffect)((function(){qt()(r,e.stylisPlugins)||a(e.stylisPlugins)}),[e.stylisPlugins]);var s=(0,t.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:o,stylis:l}}),[e.shouldForwardProp,o,l]);return t.createElement(ga.Provider,{value:s},t.createElement(xa.Provider,{value:l},e.children))}var wa=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=ma);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Wr(this,(function(){throw $r(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=ma),this.name+e.hash},e}(),ba=function(e){return e>="A"&&e<="Z"};function Sa(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;ba(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Ca=function(e){return null==e||!1===e||""===e},ka=function(e){var t,n,r=[];for(var a in e){var i=e[a];e.hasOwnProperty(a)&&!Ca(i)&&(Array.isArray(i)&&i.isCss||Fr(i)?r.push("".concat(Sa(a),":"),i,";"):Hr(i)?r.push.apply(r,Kt(Kt(["".concat(a," {")],ka(i),!1),["}"],!1)):r.push("".concat(Sa(a),": ").concat((t=a,null==(n=i)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in Zn||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ea(e,t,n,r){return Ca(e)?[]:Mr(e)?[".".concat(e.styledComponentId)]:Fr(e)?!Fr(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:Ea(e(t),t,n,r):e instanceof wa?n?(e.inject(n,r),[e.getName(r)]):[e]:Hr(e)?ka(e):Array.isArray(e)?Array.prototype.concat.apply(ar,e.map((function(e){return Ea(e,t,n,r)}))):[e.toString()];var a}function ja(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Fr(n)&&!Mr(n))return!1}return!0}var _a=vr(er),za=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&ja(e),this.componentId=t,this.baseHash=xr(_a,t),this.baseStyle=n,ca.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Ir(r,this.staticRulesId);else{var a=Br(Ea(this.rules,e,t,n)),i=hr(xr(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,i)){var o=n(a,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,o)}r=Ir(r,i),this.staticRulesId=i}else{for(var l=xr(this.baseHash,n.hash),s="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)s+=u;else if(u){var d=Br(Ea(u,e,t,n));l=xr(l,d+c),s+=d}}if(s){var f=hr(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(s,".".concat(f),void 0,this.componentId)),r=Ir(r,f)}}return r},e}(),Aa=t.createContext(void 0);Aa.Consumer;var Pa={};new Set;function Na(e,n,r){var a=Mr(e),i=e,o=!br(e),l=n.attrs,s=void 0===l?ar:l,c=n.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":ur(e);Pa[n]=(Pa[n]||0)+1;var r="".concat(n,"-").concat(yr(er+n+Pa[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,d=n.displayName,f=void 0===d?function(e){return br(e)?"styled.".concat(e):"Styled(".concat(wr(e),")")}(e):d,p=n.displayName&&n.componentId?"".concat(ur(n.displayName),"-").concat(n.componentId):n.componentId||u,h=a&&i.attrs?i.attrs.concat(s).filter(Boolean):s,m=n.shouldForwardProp;if(a&&i.shouldForwardProp){var g=i.shouldForwardProp;if(n.shouldForwardProp){var x=n.shouldForwardProp;m=function(e,t){return g(e,t)&&x(e,t)}}else m=g}var v=new za(r,p,a?i.componentStyle:void 0);function y(e,n){return function(e,n,r){var a=e.attrs,i=e.componentStyle,o=e.defaultProps,l=e.foldedComponentIds,s=e.styledComponentId,c=e.target,u=t.useContext(Aa),d=va(),f=e.shouldForwardProp||d.shouldForwardProp,p=or(n,u,o)||ir,h=function(e,t,n){for(var r,a=Vt(Vt({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var o=Fr(r=e[i])?r(a):r;for(var l in o)a[l]="className"===l?Ir(a[l],o[l]):"style"===l?Vt(Vt({},a[l]),o[l]):o[l]}return t.className&&(a.className=Ir(a.className,t.className)),a}(a,n,p),m=h.as||c,g={};for(var x in h)void 0===h[x]||"$"===x[0]||"as"===x||"theme"===x&&h.theme===p||("forwardedAs"===x?g.as=h.forwardedAs:f&&!f(x,m)||(g[x]=h[x]));var v=function(e,t){var n=va();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,h),y=Ir(l,s);return v&&(y+=" "+v),h.className&&(y+=" "+h.className),g[br(m)&&!lr.has(m)?"class":"className"]=y,g.ref=r,(0,t.createElement)(m,g)}(w,e,n)}y.displayName=f;var w=t.forwardRef(y);return w.attrs=h,w.componentStyle=v,w.displayName=f,w.shouldForwardProp=m,w.foldedComponentIds=a?Ir(i.foldedComponentIds,i.styledComponentId):"",w.styledComponentId=p,w.target=a?i.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)Ur(e,a[r],!0);return e}({},i.defaultProps,e):e}}),Wr(w,(function(){return".".concat(w.styledComponentId)})),o&&Dr(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Ra(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var Ta=function(e){return Object.assign(e,{isCss:!0})};function Oa(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Fr(e)||Hr(e))return Ta(Ea(Ra(ar,Kt([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Ea(r):Ta(Ea(Ra(r,t)))}function La(e,t,n){if(void 0===n&&(n=ir),!t)throw $r(1,t);var r=function(r){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];return e(t,n,Oa.apply(void 0,Kt([r],a,!1)))};return r.attrs=function(r){return La(e,t,Vt(Vt({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return La(e,t,Vt(Vt({},n),r))},r}var Da=function(e){return La(Na,e)},Fa=Da;lr.forEach((function(e){Fa[e]=Da(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=ja(e),ca.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var a=r(Br(Ea(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&ca.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=na(),r=Br([n&&'nonce="'.concat(n,'"'),"".concat(Gn,'="true"'),"".concat(Jn,'="').concat(er,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw $r(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw $r(2);var r=e.instance.toString();if(!r)return[];var a=((n={})[Gn]="",n[Jn]=er,n.dangerouslySetInnerHTML={__html:r},n),i=na();return i&&(a.nonce=i),[t.createElement("style",Vt({},a,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new ca({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw $r(2);return t.createElement(ya,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw $r(3)}})(),"__sc-".concat(Gn,"__");const Ma=n.p+"static/media/trash.3559d4f9a9bb5870ad11b1b6f7933596.svg";var Ia=n(7237),Ba=t,Ha=Symbol.for("react-redux-context"),Ua="undefined"!==typeof globalThis?globalThis:{};function Wa(){if(!Ba.createContext)return{};const e=Ua[Ha]??(Ua[Ha]=new Map);let t=e.get(Ba.createContext);return t||(t=Ba.createContext(null),e.set(Ba.createContext,t)),t}var $a=Wa(),Va=()=>{throw new Error("uSES not initialized!")};function Ka(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$a;return function(){return Ba.useContext(e)}}var Qa=Ka(),qa=Va,Ya=(e,t)=>e===t;function Za(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$a;const t=e===$a?Qa:Ka(e),n=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{equalityFn:r=Ya,devModeChecks:a={}}="function"===typeof n?{equalityFn:n}:n;const{store:i,subscription:o,getServerState:l,stabilityCheck:s,identityFunctionCheck:c}=t(),u=(Ba.useRef(!0),Ba.useCallback({[e.name]:t=>e(t)}[e.name],[e,s,a.stabilityCheck])),d=qa(o.addNestedSub,i.getState,l||i.getState,u,r);return Ba.useDebugValue(d),d};return Object.assign(n,{withTypes:()=>n}),n}var Ga=Za();Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.server_context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.suspense_list"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.for("react.offscreen"),Symbol.for("react.client.reference");function Xa(e){e()}var Ja={notify(){},get:()=>[]};function ei(e,t){let n,r=Ja,a=0,i=!1;function o(){c.onStateChange&&c.onStateChange()}function l(){a++,n||(n=t?t.addNestedSub(o):e.subscribe(o),r=function(){let e=null,t=null;return{clear(){e=null,t=null},notify(){Xa((()=>{let t=e;for(;t;)t.callback(),t=t.next}))},get(){const t=[];let n=e;for(;n;)t.push(n),n=n.next;return t},subscribe(n){let r=!0;const a=t={callback:n,next:null,prev:t};return a.prev?a.prev.next=a:e=a,function(){r&&null!==e&&(r=!1,a.next?a.next.prev=a.prev:t=a.prev,a.prev?a.prev.next=a.next:e=a.next)}}}}())}function s(){a--,n&&0===a&&(n(),n=void 0,r.clear(),r=Ja)}const c={addNestedSub:function(e){l();const t=r.subscribe(e);let n=!1;return()=>{n||(n=!0,t(),s())}},notifyNestedSubs:function(){r.notify()},handleChangeWrapper:o,isSubscribed:function(){return i},trySubscribe:function(){i||(i=!0,l())},tryUnsubscribe:function(){i&&(i=!1,s())},getListeners:()=>r};return c}var ti=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ni="undefined"!==typeof navigator&&"ReactNative"===navigator.product,ri=ti||ni?Ba.useLayoutEffect:Ba.useEffect;Object.defineProperty,Object.getOwnPropertyNames,Object.getOwnPropertySymbols,Object.getOwnPropertyDescriptor,Object.getPrototypeOf,Object.prototype;var ai=function(e){let{store:t,context:n,children:r,serverState:a,stabilityCheck:i="once",identityFunctionCheck:o="once"}=e;const l=Ba.useMemo((()=>{const e=ei(t);return{store:t,subscription:e,getServerState:a?()=>a:void 0,stabilityCheck:i,identityFunctionCheck:o}}),[t,a,i,o]),s=Ba.useMemo((()=>t.getState()),[t]);ri((()=>{const{subscription:e}=l;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),s!==t.getState()&&e.notifyNestedSubs(),()=>{e.tryUnsubscribe(),e.onStateChange=void 0}}),[l,s]);const c=n||$a;return Ba.createElement(c.Provider,{value:l},r)};function ii(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$a;const t=e===$a?Qa:Ka(e),n=()=>{const{store:e}=t();return e};return Object.assign(n,{withTypes:()=>n}),n}var oi=ii();function li(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$a;const t=e===$a?oi:ii(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var si,ci=li();function ui(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}si=Ia.useSyncExternalStoreWithSelector,qa=si,(e=>{e})(t.useSyncExternalStore);var di=(()=>"function"===typeof Symbol&&Symbol.observable||"@@observable")(),fi=()=>Math.random().toString(36).substring(7).split("").join("."),pi={INIT:`@@redux/INIT${fi()}`,REPLACE:`@@redux/REPLACE${fi()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${fi()}`};function hi(e){if("object"!==typeof e||null===e)return!1;let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||null===Object.getPrototypeOf(e)}function mi(e,t,n){if("function"!==typeof e)throw new Error(ui(2));if("function"===typeof t&&"function"===typeof n||"function"===typeof n&&"function"===typeof arguments[3])throw new Error(ui(0));if("function"===typeof t&&"undefined"===typeof n&&(n=t,t=void 0),"undefined"!==typeof n){if("function"!==typeof n)throw new Error(ui(1));return n(mi)(e,t)}let r=e,a=t,i=new Map,o=i,l=0,s=!1;function c(){o===i&&(o=new Map,i.forEach(((e,t)=>{o.set(t,e)})))}function u(){if(s)throw new Error(ui(3));return a}function d(e){if("function"!==typeof e)throw new Error(ui(4));if(s)throw new Error(ui(5));let t=!0;c();const n=l++;return o.set(n,e),function(){if(t){if(s)throw new Error(ui(6));t=!1,c(),o.delete(n),i=null}}}function f(e){if(!hi(e))throw new Error(ui(7));if("undefined"===typeof e.type)throw new Error(ui(8));if("string"!==typeof e.type)throw new Error(ui(17));if(s)throw new Error(ui(9));try{s=!0,a=r(a,e)}finally{s=!1}return(i=o).forEach((e=>{e()})),e}f({type:pi.INIT});return{dispatch:f,subscribe:d,getState:u,replaceReducer:function(e){if("function"!==typeof e)throw new Error(ui(10));r=e,f({type:pi.REPLACE})},[di]:function(){const e=d;return{subscribe(t){if("object"!==typeof t||null===t)throw new Error(ui(11));function n(){const e=t;e.next&&e.next(u())}n();return{unsubscribe:e(n)}},[di](){return this}}}}}function gi(e){const t=Object.keys(e),n={};for(let i=0;i<t.length;i++){const r=t[i];0,"function"===typeof e[r]&&(n[r]=e[r])}const r=Object.keys(n);let a;try{!function(e){Object.keys(e).forEach((t=>{const n=e[t];if("undefined"===typeof n(void 0,{type:pi.INIT}))throw new Error(ui(12));if("undefined"===typeof n(void 0,{type:pi.PROBE_UNKNOWN_ACTION()}))throw new Error(ui(13))}))}(n)}catch(mf){a=mf}return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(a)throw a;let i=!1;const o={};for(let a=0;a<r.length;a++){const l=r[a],s=n[l],c=e[l],u=s(c,t);if("undefined"===typeof u){t&&t.type;throw new Error(ui(14))}o[l]=u,i=i||u!==c}return i=i||r.length!==Object.keys(e).length,i?o:e}}function xi(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?e=>e:1===t.length?t[0]:t.reduce(((e,t)=>function(){return e(t(...arguments))}))}function vi(e){return t=>{let{dispatch:n,getState:r}=t;return t=>a=>"function"===typeof a?a(n,r,e):t(a)}}var yi=vi(),wi=vi,bi=Symbol.for("immer-nothing"),Si=Symbol.for("immer-draftable"),Ci=Symbol.for("immer-state");function ki(e){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Ei=Object.getPrototypeOf;function ji(e){return!!e&&!!e[Ci]}function _i(e){return!!e&&(Ai(e)||Array.isArray(e)||!!e[Si]||!!e.constructor?.[Si]||Oi(e)||Li(e))}var zi=Object.prototype.constructor.toString();function Ai(e){if(!e||"object"!==typeof e)return!1;const t=Ei(e);if(null===t)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===zi}function Pi(e,t){0===Ni(e)?Reflect.ownKeys(e).forEach((n=>{t(n,e[n],e)})):e.forEach(((n,r)=>t(r,n,e)))}function Ni(e){const t=e[Ci];return t?t.type_:Array.isArray(e)?1:Oi(e)?2:Li(e)?3:0}function Ri(e,t){return 2===Ni(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Ti(e,t,n){const r=Ni(e);2===r?e.set(t,n):3===r?e.add(n):e[t]=n}function Oi(e){return e instanceof Map}function Li(e){return e instanceof Set}function Di(e){return e.copy_||e.base_}function Fi(e,t){if(Oi(e))return new Map(e);if(Li(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=Ai(e);if(!0===t||"class_only"===t&&!n){const t=Object.getOwnPropertyDescriptors(e);delete t[Ci];let n=Reflect.ownKeys(t);for(let r=0;r<n.length;r++){const a=n[r],i=t[a];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[a]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[a]})}return Object.create(Ei(e),t)}{const t=Ei(e);if(null!==t&&n)return{...e};const r=Object.create(t);return Object.assign(r,e)}}function Mi(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Bi(e)||ji(e)||!_i(e)||(Ni(e)>1&&(e.set=e.add=e.clear=e.delete=Ii),Object.freeze(e),t&&Object.entries(e).forEach((e=>{let[t,n]=e;return Mi(n,!0)}))),e}function Ii(){ki(2)}function Bi(e){return Object.isFrozen(e)}var Hi,Ui={};function Wi(e){const t=Ui[e];return t||ki(0),t}function $i(){return Hi}function Vi(e,t){t&&(Wi("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Ki(e){Qi(e),e.drafts_.forEach(Yi),e.drafts_=null}function Qi(e){e===Hi&&(Hi=e.parent_)}function qi(e){return Hi={drafts_:[],parent_:Hi,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Yi(e){const t=e[Ci];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function Zi(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return void 0!==e&&e!==n?(n[Ci].modified_&&(Ki(t),ki(4)),_i(e)&&(e=Gi(t,e),t.parent_||Ji(t,e)),t.patches_&&Wi("Patches").generateReplacementPatches_(n[Ci].base_,e,t.patches_,t.inversePatches_)):e=Gi(t,n,[]),Ki(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==bi?e:void 0}function Gi(e,t,n){if(Bi(t))return t;const r=t[Ci];if(!r)return Pi(t,((a,i)=>Xi(e,r,t,a,i,n))),t;if(r.scope_!==e)return t;if(!r.modified_)return Ji(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const t=r.copy_;let a=t,i=!1;3===r.type_&&(a=new Set(t),t.clear(),i=!0),Pi(a,((a,o)=>Xi(e,r,t,a,o,n,i))),Ji(e,t,!1),n&&e.patches_&&Wi("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function Xi(e,t,n,r,a,i,o){if(ji(a)){const o=Gi(e,a,i&&t&&3!==t.type_&&!Ri(t.assigned_,r)?i.concat(r):void 0);if(Ti(n,r,o),!ji(o))return;e.canAutoFreeze_=!1}else o&&n.add(a);if(_i(a)&&!Bi(a)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Gi(e,a),t&&t.scope_.parent_||"symbol"===typeof r||!Object.prototype.propertyIsEnumerable.call(n,r)||Ji(e,a)}}function Ji(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Mi(t,n)}var eo={get(e,t){if(t===Ci)return e;const n=Di(e);if(!Ri(n,t))return function(e,t,n){const r=ro(t,n);return r?"value"in r?r.value:r.get?.call(e.draft_):void 0}(e,n,t);const r=n[t];return e.finalized_||!_i(r)?r:r===no(e.base_,t)?(io(e),e.copy_[t]=oo(r,e)):r},has:(e,t)=>t in Di(e),ownKeys:e=>Reflect.ownKeys(Di(e)),set(e,t,n){const r=ro(Di(e),t);if(r?.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const r=no(Di(e),t),a=r?.[Ci];if(a&&a.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}(n,r)&&(void 0!==n||Ri(e.base_,t)))return!0;io(e),ao(e)}return e.copy_[t]===n&&(void 0!==n||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==no(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,io(e),ao(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const n=Di(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty(){ki(11)},getPrototypeOf:e=>Ei(e.base_),setPrototypeOf(){ki(12)}},to={};function no(e,t){const n=e[Ci];return(n?Di(n):e)[t]}function ro(e,t){if(!(t in e))return;let n=Ei(e);for(;n;){const e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=Ei(n)}}function ao(e){e.modified_||(e.modified_=!0,e.parent_&&ao(e.parent_))}function io(e){e.copy_||(e.copy_=Fi(e.base_,e.scope_.immer_.useStrictShallowCopy_))}Pi(eo,((e,t)=>{to[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),to.deleteProperty=function(e,t){return to.set.call(this,e,t,void 0)},to.set=function(e,t,n){return eo.set.call(this,e[0],t,n,e[0])};function oo(e,t){const n=Oi(e)?Wi("MapSet").proxyMap_(e,t):Li(e)?Wi("MapSet").proxySet_(e,t):function(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:$i(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let a=r,i=eo;n&&(a=[r],i=to);const{revoke:o,proxy:l}=Proxy.revocable(a,i);return r.draft_=l,r.revoke_=o,l}(e,t);return(t?t.scope_:$i()).drafts_.push(n),n}function lo(e){if(!_i(e)||Bi(e))return e;const t=e[Ci];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Fi(e,t.scope_.immer_.useStrictShallowCopy_)}else n=Fi(e,!0);return Pi(n,((e,t)=>{Ti(n,e,lo(t))})),t&&(t.finalized_=!1),n}var so=new class{constructor(e){var t=this;this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,n)=>{if("function"===typeof e&&"function"!==typeof t){const n=t;t=e;const r=this;return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n;for(var a=arguments.length,i=new Array(a>1?a-1:0),o=1;o<a;o++)i[o-1]=arguments[o];return r.produce(e,(e=>t.call(this,e,...i)))}}let r;if("function"!==typeof t&&ki(6),void 0!==n&&"function"!==typeof n&&ki(7),_i(e)){const a=qi(this),i=oo(e,void 0);let o=!0;try{r=t(i),o=!1}finally{o?Ki(a):Qi(a)}return Vi(a,n),Zi(r,a)}if(!e||"object"!==typeof e){if(r=t(e),void 0===r&&(r=e),r===bi&&(r=void 0),this.autoFreeze_&&Mi(r,!0),n){const t=[],a=[];Wi("Patches").generateReplacementPatches_(e,r,t,a),n(t,a)}return r}ki(1)},this.produceWithPatches=(e,n)=>{if("function"===typeof e)return function(n){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];return t.produceWithPatches(n,(t=>e(t,...a)))};let r,a;return[this.produce(e,n,((e,t)=>{r=e,a=t})),r,a]},"boolean"===typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"===typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){_i(e)||ki(8),ji(e)&&(e=function(e){ji(e)||ki(10);return lo(e)}(e));const t=qi(this),n=oo(e,void 0);return n[Ci].isManual_=!0,Qi(t),n}finishDraft(e,t){const n=e&&e[Ci];n&&n.isManual_||ki(9);const{scope_:r}=n;return Vi(r,t),Zi(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));const r=Wi("Patches").applyPatches_;return ji(e)?r(e,t):this.produce(e,(e=>r(e,t)))}},co=so.produce;so.produceWithPatches.bind(so),so.setAutoFreeze.bind(so),so.setUseStrictShallowCopy.bind(so),so.applyPatches.bind(so),so.createDraft.bind(so),so.finishDraft.bind(so);var uo="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?xi:xi.apply(null,arguments)};"undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;function fo(e,t){function n(){if(t){let n=t(...arguments);if(!n)throw new Error(zo(0));return{type:e,payload:n.payload,..."meta"in n&&{meta:n.meta},..."error"in n&&{error:n.error}}}return{type:e,payload:arguments.length<=0?void 0:arguments[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=t=>function(e){return hi(e)&&"type"in e&&"string"===typeof e.type}(t)&&t.type===e,n}var po=class e extends Array{constructor(){super(...arguments),Object.setPrototypeOf(this,e.prototype)}static get[Symbol.species](){return e}concat(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return super.concat.apply(this,t)}prepend(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return 1===n.length&&Array.isArray(n[0])?new e(...n[0].concat(this)):new e(...n.concat(this))}};function ho(e){return _i(e)?co(e,(()=>{})):e}function mo(e,t,n){if(e.has(t)){let r=e.get(t);return n.update&&(r=n.update(r,t,e),e.set(t,r)),r}if(!n.insert)throw new Error(zo(10));const r=n.insert(t,e);return e.set(t,r),r}var go="RTK_autoBatch",xo=e=>t=>{setTimeout(t,e)},vo="undefined"!==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame:xo(10),yo=e=>function(t){const{autoBatch:n=!0}=t??{};let r=new po(e);return n&&r.push(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{type:"raf"};return t=>function(){const n=t(...arguments);let r=!0,a=!1,i=!1;const o=new Set,l="tick"===e.type?queueMicrotask:"raf"===e.type?vo:"callback"===e.type?e.queueNotification:xo(e.timeout),s=()=>{i=!1,a&&(a=!1,o.forEach((e=>e())))};return Object.assign({},n,{subscribe(e){const t=n.subscribe((()=>r&&e()));return o.add(e),()=>{t(),o.delete(e)}},dispatch(e){try{return r=!e?.meta?.[go],a=!r,a&&(i||(i=!0,l(s))),n.dispatch(e)}finally{r=!0}}})}}("object"===typeof n?n:void 0)),r};function wo(e){const t={},n=[];let r;const a={addCase(e,n){const r="string"===typeof e?e:e.type;if(!r)throw new Error(zo(28));if(r in t)throw new Error(zo(29));return t[r]=n,a},addMatcher:(e,t)=>(n.push({matcher:e,reducer:t}),a),addDefaultCase:e=>(r=e,a)};return e(a),[t,n,r]}var bo=Symbol.for("rtk-slice-createasyncthunk");function So(e,t){return`${e}/${t}`}function Co(){let{creators:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=e?.asyncThunk?.[bo];return function(e){const{name:n,reducerPath:r=n}=e;if(!n)throw new Error(zo(11));const a=("function"===typeof e.reducers?e.reducers(function(){function e(e,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...t}}return e.withTypes=()=>e,{reducer:e=>Object.assign({[e.name](){return e(...arguments)}}[e.name],{_reducerDefinitionType:"reducer"}),preparedReducer:(e,t)=>({_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:t}),asyncThunk:e}}()):e.reducers)||{},i=Object.keys(a),o={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},l={addCase(e,t){const n="string"===typeof e?e:e.type;if(!n)throw new Error(zo(12));if(n in o.sliceCaseReducersByType)throw new Error(zo(13));return o.sliceCaseReducersByType[n]=t,l},addMatcher:(e,t)=>(o.sliceMatchers.push({matcher:e,reducer:t}),l),exposeAction:(e,t)=>(o.actionCreators[e]=t,l),exposeCaseReducer:(e,t)=>(o.sliceCaseReducersByName[e]=t,l)};function s(){const[t={},n=[],r]="function"===typeof e.extraReducers?wo(e.extraReducers):[e.extraReducers],a={...t,...o.sliceCaseReducersByType};return function(e,t){let n,[r,a,i]=wo(t);if(function(e){return"function"===typeof e}(e))n=()=>ho(e());else{const t=ho(e);n=()=>t}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n(),t=arguments.length>1?arguments[1]:void 0,o=[r[t.type],...a.filter((e=>{let{matcher:n}=e;return n(t)})).map((e=>{let{reducer:t}=e;return t}))];return 0===o.filter((e=>!!e)).length&&(o=[i]),o.reduce(((e,n)=>{if(n){if(ji(e)){const r=n(e,t);return void 0===r?e:r}if(_i(e))return co(e,(e=>n(e,t)));{const r=n(e,t);if(void 0===r){if(null===e)return e;throw new Error(zo(9))}return r}}return e}),e)}return o.getInitialState=n,o}(e.initialState,(e=>{for(let t in a)e.addCase(t,a[t]);for(let t of o.sliceMatchers)e.addMatcher(t.matcher,t.reducer);for(let t of n)e.addMatcher(t.matcher,t.reducer);r&&e.addDefaultCase(r)}))}i.forEach((r=>{const i=a[r],o={reducerName:r,type:So(n,r),createNotation:"function"===typeof e.reducers};!function(e){return"asyncThunk"===e._reducerDefinitionType}(i)?function(e,t,n){let r,a,{type:i,reducerName:o,createNotation:l}=e;if("reducer"in t){if(l&&!function(e){return"reducerWithPrepare"===e._reducerDefinitionType}(t))throw new Error(zo(17));r=t.reducer,a=t.prepare}else r=t;n.addCase(i,r).exposeCaseReducer(o,r).exposeAction(o,a?fo(i,a):fo(i))}(o,i,l):function(e,t,n,r){let{type:a,reducerName:i}=e;if(!r)throw new Error(zo(18));const{payloadCreator:o,fulfilled:l,pending:s,rejected:c,settled:u,options:d}=t,f=r(a,o,d);n.exposeAction(i,f),l&&n.addCase(f.fulfilled,l);s&&n.addCase(f.pending,s);c&&n.addCase(f.rejected,c);u&&n.addMatcher(f.settled,u);n.exposeCaseReducer(i,{fulfilled:l||jo,pending:s||jo,rejected:c||jo,settled:u||jo})}(o,i,l,t)}));const c=e=>e,u=new Map;let d;function f(e,t){return d||(d=s()),d(e,t)}function p(){return d||(d=s()),d.getInitialState()}function h(t){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];function r(e){let r=e[t];return"undefined"===typeof r&&n&&(r=p()),r}function a(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;const r=mo(u,n,{insert:()=>new WeakMap});return mo(r,t,{insert:()=>{const r={};for(const[a,i]of Object.entries(e.selectors??{}))r[a]=ko(i,t,p,n);return r}})}return{reducerPath:t,getSelectors:a,get selectors(){return a(r)},selectSlice:r}}const m={name:n,reducer:f,actions:o.actionCreators,caseReducers:o.sliceCaseReducersByName,getInitialState:p,...h(r),injectInto(e){let{reducerPath:t,...n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const a=t??r;return e.inject({reducerPath:a,reducer:f},n),{...m,...h(a,!0)}}};return m}}function ko(e,t,n,r){function a(a){let i=t(a);"undefined"===typeof i&&r&&(i=n());for(var o=arguments.length,l=new Array(o>1?o-1:0),s=1;s<o;s++)l[s-1]=arguments[s];return e(i,...l)}return a.unwrapped=e,a}var Eo=Co();function jo(){}var{assign:_o}=Object;Symbol.for("rtk-state-proxy-original");function zo(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const Ao=Eo({name:"cart",initialState:{itemsInCart:[]},reducers:{addProduct:(e,t)=>{let n=e.itemsInCart.find((e=>e.id===t.payload.id));void 0===n?e.itemsInCart.push(t.payload):n.count++},deleteProduct:(e,t)=>{let n=e.itemsInCart.findIndex((e=>e.id===t.payload.id));e.itemsInCart.splice(n,1)},productCountIncrement:(e,t)=>{let n=e.itemsInCart.findIndex((e=>e.id===t.payload.id));e.itemsInCart[n].count++},productCountDecrement:(e,t)=>{let n=e.itemsInCart.findIndex((e=>e.id===t.payload.id));e.itemsInCart[n].count>0&&e.itemsInCart[n].count--}}}),{addProduct:Po,deleteProduct:No,productCountIncrement:Ro,productCountDecrement:To}=Ao.actions,Oo=Ao.reducer;var Lo=n(579);const Do=Fa.div`
  width: 600px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;

  @media (max-width: 750px) {
    width: 500px;
  }
  @media (max-width: 650px) {
    width: 400px;
  }
  @media (max-width: 500px) {
    width: 310px;
  }
`,Fo=Fa.div`
  margin-bottom: 22px;
  display: flex;
  justify-content: space-between;
`,Mo=Fa.div`
  width: 11px;
  height: 11px;
  border: 3px solid white;
  border-radius: 50%;
  margin-right: 12px;
`,Io=Fa.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 25.36px;
  color: #ffffff;
  margin: 0;

  @media (max-width: 550px) {
    font-size: 15px;
    line-height: 19px;
  }
`,Bo=Fa.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  color: #ffffff;
  margin: 0;

  @media (max-width: 550px) {
    font-size: 13px;
    line-height: 20px;
  }
`,Ho=Fa.div`
  max-width: 393px;
  width: 100%;
  margin-left: 10px;
  margin-right: 10px;

  @media (max-width: 750px) {
    max-width: 350px;
  }
  @media (max-width: 650px) {
    max-width: 250px;
  }
  @media (max-width: 500px) {
    max-width: 210px;
  }
`,Uo=Fa.div`
  display: flex;
  margin-top: 31px;
`,Wo=Fa.p`
  font-family: Floreste;
  font-size: 28px;
  font-weight: 400;
  line-height: 26.6px;
  color: white;
  margin: 0;

  @media (max-width: 550px) {
    font-size: 25px;
    line-height: 23px;
  }
`,$o=Fa.p`
  font-family: Euclid Circular A;
  font-size: 20px;
  font-weight: 400;
  line-height: 16.36px;
  color: white;
  margin: 0;
  margin-left: 20px;

  @media (max-width: 550px) {
    font-size: 13px;
    line-height: 10px;
    margin-left: 5px;
  }
`,Vo=Fa.div`
  display: flex;
  justify-content: space-between;
  width: 117px;
  align-items: center;
  margin-top: 15px;
`,Ko=Fa.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  lin-height: 23px;
  color: white;
  margin: 0;
`,Qo=Fa.div`
  width: 189px;
  height: 93px;
  border-radius: 50%;
  border: 2px solid #d9ff5a;
  background-color: #ebe3ff30;
  transform: rotate(-6deg);
  display: flex;
  align-items: center;
  justify-content: center;
`,qo=Fa.p`
  font-family: Euclid Circular A;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  margin: 0px;
  color: white;
  transform: rotate(6deg);
`,Yo=Fa.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 48px;

  @media (max-width: 550px) {
    margin: 24px;
  }
  @media (max-width: 500px) {
    margin: 15px;
  }
`,Zo=Fa.p`
  font-family: Floreste;
  font-size: 50px;
  font-weight: 500;
  line-height: 50px;
  color: white;
  margin: 0;
  margin-top: 10px;

  @media (max-width: 720px) {
    font-size: 40px;
    line-height: 40px;
  }
  @media (max-width: 600px) {
    font-size: 30px;
    line-height: 30px;
  }
`,Go=Fa.button`
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
`,Xo=Fa(Ft)`
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
`,Jo=Fa.div`
  max-width: 522px;
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,el=Fa.img`
  height: 90%;

  @media (max-width: 500px) {
    width: 75px;
    height: 120px;
  }
`,tl=Fa.div`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  margin: 0px;
  color: white;
  margin-bottom: 53px;
  margin-right: auto;

  @media (max-width: 500px) {
    margin-bottom: 30px;
  }
  @media (max-width: 500px) {
    margin-bottom: 15px;
    margin-top: 15px;
  }
`,nl=Fa.p`
  font-weight: 500;
  font-family: Euclid Circular A;
  font-size: 20px;
  line-height: 25.36px;
  margin: 0px;
  color: white;

  @media (max-width: 500px) {
    font-size: 13px;
    line-height: 20px;
  }
`;function rl(){const e=Ga((e=>e.cart.itemsInCart)),t=ci();if(0===e.length)return(0,Lo.jsx)(Yo,{children:(0,Lo.jsx)(Zo,{children:"\u0412\u0410\u0428\u0410 \u041a\u041e\u0420\u0417\u0418\u041d\u0410 \u041f\u0423\u0421\u0422\u0410"})});let n=0;for(let r=0;r<e.length;r++){let t=Number(e[r].price.replaceAll(" ",""));n+=e[r].count*t}return(0,Lo.jsxs)(Yo,{children:[(0,Lo.jsx)(tl,{children:"\u0412\u0410\u0428\u0410 \u041a\u041e\u0420\u0417\u0418\u041d\u0410"}),(0,Lo.jsx)("div",{style:{maxHeight:"750px",overflowY:"scroll"},children:e.map((e=>(0,Lo.jsxs)(Do,{children:[(0,Lo.jsx)(el,{src:e.image,alt:"itemImage"}),(0,Lo.jsxs)(Ho,{children:[(0,Lo.jsxs)(Fo,{children:[(0,Lo.jsxs)("div",{children:[(0,Lo.jsxs)("div",{style:{display:"flex",alignItems:"center",marginBottom:13},children:[(0,Lo.jsx)(Mo,{style:{backgroundColor:`${e.background}`}}),(0,Lo.jsx)(Io,{children:e.name})]}),(0,Lo.jsx)(Bo,{children:e.category})]}),(0,Lo.jsx)("input",{style:{marginLeft:10,outline:"none"},type:"image",src:Ma,alt:"trash",onClick:n=>{n.stopPropagation(),t(No(e))}})]}),(0,Lo.jsx)("div",{style:{width:"100%",border:"2px solid #D9FF5A"}}),(0,Lo.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,Lo.jsxs)(Uo,{children:[(0,Lo.jsx)(Wo,{children:e.price}),(0,Lo.jsx)($o,{children:"\u20bd"})]}),(0,Lo.jsxs)(Vo,{children:[(0,Lo.jsx)(Go,{className:"decrement",onClick:n=>{n.stopPropagation(),t(To(e))},children:(0,Lo.jsx)("p",{style:{fontFamily:"Euclid Circular A",fontSize:"18px",fontWeight:500,margin:0,color:"#FFFFFF30"},children:"-"})}),(0,Lo.jsx)(Ko,{children:e.count}),(0,Lo.jsx)(Go,{className:"increment",onClick:n=>{n.stopPropagation(),t(Ro(e))},children:(0,Lo.jsx)("p",{style:{fontFamily:"Euclid Circular A",fontSize:"18px",fontWeight:500,margin:0,color:"#FFFFFF"},children:"+"})})]})]})]})]},e.id)))}),(0,Lo.jsxs)(Jo,{children:[(0,Lo.jsxs)("div",{children:[(0,Lo.jsx)(nl,{children:"\u0418\u0422\u041e\u0413\u041e:"}),(0,Lo.jsxs)("div",{style:{display:"flex",marginTop:15},children:[(0,Lo.jsx)(Wo,{style:{fontSize:"40px",lineHeight:"38px"},children:n}),(0,Lo.jsx)($o,{children:"\u20bd"})]})]}),(0,Lo.jsx)(Xo,{to:"/order",onClick:()=>window.CartHandler.close(),children:(0,Lo.jsx)(Qo,{children:(0,Lo.jsx)(qo,{className:"button-text",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c"})})})]})]})}const al=n.p+"static/media/lamp-wave1.74c72fc78da595d97fd5.png",il=n.p+"static/media/lamp-wave2.0b15d007ed72feb5ec90.png",ol=n.p+"static/media/lamp-wave3.106ed1de066d2d4a818b.png";const ll=n.p+"static/media/heartInCircle.0c696194692096f0ba1f55083ea9d963.svg",sl=[{name:"COPPELIA",category:"\u041b\u0430\u043c\u043f\u0430 \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u0430\u044f",color:"#29D0D9",price:"150 000",count:1,image:al},{name:"FACCHETTA",category:"\u041b\u0430\u043c\u043f\u0430 \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u0430\u044f",color:"#FFC4A5",price:"150 000",count:1,image:il},{name:"COPPELIA",category:"\u041b\u0430\u043c\u043f\u0430 \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u0430\u044f",color:"#FA8EEF",price:"150 000",count:1,image:ol}],cl=Fa.div`
  width: 523px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;

  @media (max-width: 700px) {
    width: 450px;
    margin-bottom: 50px;
  }
  @media (max-width: 600px) {
    width: 400px;
  }
  @media (max-width: 500px) {
    width: 350px;
  }
  @media (max-width: 450px) {
    width: 300px;
  }
`,ul=Fa.div`
  margin-bottom: 22px;
  display: flex;
  justify-content: space-between;
`,dl=Fa.div`
  width: 11px;
  height: 11px;
  border: 3px solid white;
  border-radius: 50%;
  margin-right: 12px;
`,fl=Fa.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 25.36px;
  color: #ffffff;
  margin: 0;

  @media (max-width: 500px) {
    font-size: 15px;
    line-height: 19px;
  }
`,pl=Fa.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  color: #ffffff;
  margin: 0;

  @media (max-width: 500px) {
    font-size: 13px;
    line-height: 20px;
  }
`,hl=Fa.div`
  max-width: 393px;
  width: 100%;
  margin-left: 20px;
`,ml=Fa.div`
  display: flex;
  justify-content: space-between;
  width: 95px;
  margin-top: 31px;
`,gl=Fa.p`
  font-family: Floreste;
  font-size: 28px;
  font-weight: 400;
  line-height: 26.6px;
  color: white;
  margin: 0;

  @media (max-width: 500px) {
    font-size: 25px;
    line-height: 23.75px;
  }
`,xl=Fa.p`
  font-family: Euclid Circular A;
  font-size: 20px;
  font-weight: 400;
  line-height: 16.36px;
  color: white;
  margin: 0;
`,vl=Fa.div`
  margin: 48px;

  @media (max-width: 700px) {
    margin: 40px;
  }
  @media (max-width: 600px) {
    margin: 32px;
  }
  @media (max-width: 500px) {
    margin: 24px;
  }
`,yl=Fa.img`
  @media (max-width: 500px) {
    width: 75px;
    height: 120px;
  }
`,wl=Fa.div`
  width: 100%;
  border: 2px solid #d9ff5a;

  @media (max-width: 700px) {
    border: 1px solid #d9ff5a;
  }
`;function bl(){return(0,Lo.jsxs)(vl,{children:[(0,Lo.jsx)("p",{style:{fontFamily:"Euclid Circular A",fontWeight:"500",fontSize:"18px",lineHeight:"22.82px",margin:0,color:"white",marginBottom:50},children:"\u0422\u041e\u0412\u0410\u0420\u042b \u0412 \u0418\u0417\u0411\u0420\u0410\u041d\u041d\u041e\u041c"}),sl.map(((e,t)=>(0,Lo.jsxs)(cl,{children:[(0,Lo.jsx)(yl,{src:e.image,alt:"itemImage"}),(0,Lo.jsxs)(hl,{children:[(0,Lo.jsxs)(ul,{children:[(0,Lo.jsxs)("div",{children:[(0,Lo.jsxs)("div",{style:{display:"flex",alignItems:"center",marginBottom:13},children:[(0,Lo.jsx)(dl,{style:{backgroundColor:`${e.color}`}}),(0,Lo.jsx)(fl,{children:e.name})]}),(0,Lo.jsx)(pl,{children:e.category})]}),(0,Lo.jsx)("input",{style:{outline:"none"},type:"image",src:ll,alt:"heart"})]}),(0,Lo.jsx)(wl,{}),(0,Lo.jsx)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:(0,Lo.jsxs)(ml,{children:[(0,Lo.jsx)(gl,{children:e.price}),(0,Lo.jsx)(xl,{children:"\u20bd"})]})})]})]},t)))]})}const Sl=Fa.input`
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
`;function Cl(e){let{placeholder:t,onChange:n,name:r,style:a}=e;return(0,Lo.jsx)(Sl,{style:a,name:r,onChange:n,placeholder:t})}const kl=Fa.div`
  width: 514px;
  margin: 48px;

  @media (max-width: 700px) {
    width: 450px;
    margin: 40px;
  }
  @media (max-width: 600px) {
    width: 400px;
    margin: 32px;
  }
  @media (max-width: 500px) {
    width: 350px;
    margin: 24px;
  }
  @media (max-width: 450px) {
    width: 325px;
    margin: 20px;
  }
`,El=Fa.h2`
  margin: 0;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  color: white;
`,jl=Fa.form`
  margin-top: 66px;
`,_l=Fa.button`
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
`,zl=Fa.p`
  margin: 0;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  transform: rotate(15deg);
`,Al=Fa.p`
  margin: 0;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  color: white;

  @media (max-width: 450px) {
    font-size: 12px;
    line-height: 14px;
  }
`,Pl=Fa.button`
  display: flex;
  background: unset;
  border: unset;
  align-items: center;
  justify-content: space-between;
  width: 185px;
  outline: none;

  @media (max-width: 450px) {
    width: 160px;
  }

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
`,Nl=Fa.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 348px;
  margin-top: 68px;

  @media (max-width: 450px) {
    width: 268px;
    margin-top: 30px;
  }
`;function Rl(){const[e,n]=(0,t.useState)(""),[r,a]=(0,t.useState)("");return(0,Lo.jsxs)(kl,{children:[(0,Lo.jsx)(El,{children:"\u0412\u0425\u041e\u0414"}),(0,Lo.jsxs)(jl,{onSubmit:t=>function(t){t.stopPropagation(),t.preventDefault(),console.log(e,r)}(t),children:[(0,Lo.jsx)(Cl,{style:{marginBottom:49,paddingBottom:20},name:"email",placeholder:"E-MAIL",onChange:e=>n(e.target.value)}),(0,Lo.jsx)(Cl,{style:{marginBottom:49,paddingBottom:20},name:"password",placeholder:"\u041f\u0410\u0420\u041e\u041b\u042c",onChange:e=>a(e.target.value)}),(0,Lo.jsx)(_l,{type:"submit",children:(0,Lo.jsx)(zl,{className:"button-text",children:"\u0412\u043e\u0439\u0442\u0438"})})]}),(0,Lo.jsxs)(Nl,{children:[(0,Lo.jsx)(Al,{children:"\u041d\u0415\u0422 \u0410\u041a\u041a\u0410\u0423\u041d\u0422\u0410?"}),(0,Lo.jsxs)(Pl,{onClick:e=>{window.RegistrationHandler.show(),window.AuthorizationHandler.close()},children:[(0,Lo.jsx)(Al,{className:"link-text",children:"\u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0410\u0426\u0418\u042f"}),(0,Lo.jsx)("svg",{className:"link-svg",width:"42",height:"16",viewBox:"0 0 42 16",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:(0,Lo.jsx)("path",{d:"M41.7071 8.70711C42.0976 8.31658 42.0976 7.68342 41.7071 7.29289L35.3431 0.928932C34.9526 0.538408 34.3195 0.538408 33.9289 0.928932C33.5384 1.31946 33.5384 1.95262 33.9289 2.34315L39.5858 8L33.9289 13.6569C33.5384 14.0474 33.5384 14.6805 33.9289 15.0711C34.3195 15.4616 34.9526 15.4616 35.3431 15.0711L41.7071 8.70711ZM0 9H41V7H0V9Z"})})]})]})]})}const Tl=Fa.div`
  width: 514px;
  margin: 48px;

  @media (max-width: 650px) {
    width: 414px;
  }
  @media (max-width: 550px) {
    width: 314px;
    margin: 36px;
  }
  @media (max-width: 450px) {
    margin: 24px;
    width: 288px;
  }
`,Ol=Fa.h2`
  margin: 0;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  color: white;

  @media (max-width: 450px) {
    margin-top: 28px;
  }
`,Ll=Fa.form`
  margin-top: 66px;

  @media (max-width: 650px) {
    margin-top: 56px;
  }
  @media (max-width: 550px) {
    margin-top: 46px;
  }
  @media (max-width: 450px) {
    margin-top: 36px;
  }
`,Dl=Fa.button`
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
`,Fl=Fa.p`
  margin: 0;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  transform: rotate(6deg);
`,Ml=Fa.p`
  margin: 0;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  color: white;
`,Il=Fa.button`
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
`;function Bl(){const[e,n]=(0,t.useState)(""),[r,a]=(0,t.useState)(""),[i,o]=(0,t.useState)("");return(0,Lo.jsxs)(Tl,{children:[(0,Lo.jsx)(Ol,{children:"\u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0410\u0426\u0418\u042f"}),(0,Lo.jsxs)(Ll,{onSubmit:t=>function(t){t.stopPropagation(),t.preventDefault(),console.log(e,r,i)}(t),children:[(0,Lo.jsx)(Cl,{style:{marginBottom:49,paddingBottom:20},name:"email",placeholder:"E-MAIL",onChange:e=>n(e.target.value)}),(0,Lo.jsx)(Cl,{style:{marginBottom:49,paddingBottom:20},name:"password",placeholder:"\u041f\u0410\u0420\u041e\u041b\u042c",onChange:e=>a(e.target.value)}),(0,Lo.jsx)(Cl,{style:{marginBottom:49,paddingBottom:20},name:"repeated-password",placeholder:"\u041f\u041e\u0412\u0422\u041e\u0420\u0418\u0422\u0415 \u041f\u0410\u0420\u041e\u041b\u042c",onChange:e=>o(e.target.value)}),(0,Lo.jsx)(Dl,{type:"submit",children:(0,Lo.jsx)(Fl,{className:"button-text",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})]}),(0,Lo.jsxs)(Il,{onClick:e=>{window.RegistrationHandler.close(),window.AuthorizationHandler.show()},children:[(0,Lo.jsx)("svg",{style:{transform:"rotate(180deg)"},className:"link-svg",width:"42",height:"16",viewBox:"0 0 42 16",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:(0,Lo.jsx)("path",{d:"M41.7071 8.70711C42.0976 8.31658 42.0976 7.68342 41.7071 7.29289L35.3431 0.928932C34.9526 0.538408 34.3195 0.538408 33.9289 0.928932C33.5384 1.31946 33.5384 1.95262 33.9289 2.34315L39.5858 8L33.9289 13.6569C33.5384 14.0474 33.5384 14.6805 33.9289 15.0711C34.3195 15.4616 34.9526 15.4616 35.3431 15.0711L41.7071 8.70711ZM0 9H41V7H0V9Z"})}),(0,Lo.jsx)(Ml,{className:"link-text",children:"\u0412\u0425\u041e\u0414"})]})]})}const Hl=n.p+"static/media/map.d99fc41a11c0f93ee853.png";const Ul=n.p+"static/media/MarkOnMap.31868e8b89b9d14cd3e10175fa45dfc3.svg",Wl=Fa.div`
  max-width: 950px;
  background-color: #ae97e8;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,$l=Fa.div`
  max-width: 850px;
  min-width: 300px;
  background-color: #fa8fef;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 50px 80px 20px;

  @media (max-width: 600px) {
    padding: 40px 50px 40px 20px;
  }
`,Vl=Fa.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  color: #ffffff80;
  margin: 0;
  text-wrap: nowrap;

  &.address {
    margin-bottom: 35px;
  }
  &.phone {
    margin-bottom: 59px;
  }

  @media (max-width: 600px) {
    &.address {
      margin-bottom: 15px;
    }
    &.phone {
      margin-bottom: 20px;
    }
  }
`,Kl=Fa.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 60px;
  line-height: 76.08px;
  color: #ffffff;
  margin: 0;
  text-wrap: nowrap;
  margin-bottom: 26px;

  @media (max-width: 600px) {
    font-size: 40px;
    line-height: 48.08px;
    margin-bottom: 15px;
  }
`,Ql=Fa.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  color: #ffffff;
  margin: 0;
  text-wrap: nowrap;

  &.street-home {
    margin-bottom: 122px;
  }
  &.text-link {
    margin-bottom: 112px;
  }

  @media (max-width: 600px) {
    &.street-home {
      margin-bottom: 30px;
    }
    &.text-link {
      margin-bottom: 20px;
    }
  }
`,ql=Fa.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 40px;
  line-height: 38px;
  color: #ffffff;
  margin: 0;
  text-wrap: nowrap;
`,Yl=Fa.div`
  display: flex;
  width: 209px;
  justify-content: space-between;
`,Zl=Fa.button`
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
`,Gl=Fa.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  margin: 0;
  transform: rotate(6deg);
`,Xl=Fa.a`
  outline: none;
  &:hover,
  &:focus-visible {
    cursor: pointer;

    .link-svg {
      fill: #d9ff5a;
    }
  }
`,Jl=Fa.div`
  margin-left: 20px;

  @media (max-width: 600px) {
    margin-left: 0px;
    margin-top: 20px;
  }
`,es=Fa.button`
  width: 167px;
  display: flex;
  justify-content: space-between;
  outline: none;
  border: none;
  background: none;

  &:hover,
  &:focus-visible {
    cursor: pointer;

    .button-text {
      color: #d9ff5a;
    }
    .button-arrow {
      fill: #d9ff5a;
    }
  }
`,ts=Fa.div`
  display: flex;
  max-width: 690px;
  width: 100%;
  justify-content: space-between;
  margin: 20px;
  min-width: 400px;

  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`;function ns(){const[e,n]=(0,t.useState)(""),[r,a]=(0,t.useState)("");return(0,Lo.jsxs)("div",{style:{borderRadius:30,overflow:"hidden"},children:[(0,Lo.jsxs)("div",{style:{display:"flex",flexWrap:"wrap"},children:[(0,Lo.jsx)(Wl,{children:(0,Lo.jsxs)(ts,{children:[(0,Lo.jsxs)("div",{children:[(0,Lo.jsx)(Vl,{className:"address",children:"\u0410\u0414\u0420\u0415\u0421"}),(0,Lo.jsx)(Kl,{children:"\u041c\u041e\u0421\u041a\u0412\u0410"}),(0,Lo.jsx)(Ql,{className:"street-home",children:"\u0423\u043b\u0438\u0446\u0430 \u041f\u0443\u0448\u043a\u0438\u043d\u0430, \u0434\u043e\u043c \u041a\u043e\u043b\u043e\u0442\u0443\u0448\u043a\u0438\u043d\u0430"}),(0,Lo.jsxs)(es,{onClick:e=>{document.getElementById("mark").scrollIntoView({behavior:"smooth"})},children:[(0,Lo.jsx)(Ql,{className:"button-text",children:"\u0410\u0434\u0440\u0435\u0441 \u043d\u0430 \u043a\u0430\u0440\u0442\u0435"}),(0,Lo.jsx)("svg",{className:"button-arrow",width:"16",height:"24",viewBox:"0 0 16 24",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:(0,Lo.jsx)("path",{d:"M9 1C9 0.447715 8.55228 0 8 0C7.44772 0 7 0.447715 7 1L9 1ZM7.29289 23.7071C7.68342 24.0976 8.31658 24.0976 8.70711 23.7071L15.0711 17.3431C15.4616 16.9526 15.4616 16.3195 15.0711 15.9289C14.6805 15.5384 14.0474 15.5384 13.6569 15.9289L8 21.5858L2.34315 15.9289C1.95262 15.5384 1.31946 15.5384 0.928932 15.9289C0.538408 16.3195 0.538408 16.9526 0.928932 17.3431L7.29289 23.7071ZM7 1L7 23H9L9 1L7 1Z"})})]})]}),(0,Lo.jsxs)(Jl,{children:[(0,Lo.jsx)(Vl,{className:"phone",children:"\u0422\u0415\u041b\u0415\u0424\u041e\u041d"}),(0,Lo.jsx)(ql,{style:{marginBottom:40},children:"+1 (111) 111-11-11"}),(0,Lo.jsx)(Ql,{className:"text-link",children:"\u041e\u0442\u0432\u0435\u0442\u0438\u043c \u043d\u0430 \u0432\u0441\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b"}),(0,Lo.jsxs)(Yl,{children:[(0,Lo.jsx)(Xl,{href:"google.com",children:(0,Lo.jsxs)("svg",{className:"link-svg",width:"40",height:"41",viewBox:"0 0 40 41",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:[(0,Lo.jsx)("circle",{cx:"19.8",cy:"20.5998",r:"19.8"}),(0,Lo.jsx)("path",{d:"M27.6993 14.6515L25.0586 27.1046C24.8593 27.9834 24.3399 28.2021 23.6018 27.7884L19.578 24.8234L17.6368 26.6909C17.4218 26.9059 17.2424 27.0853 16.828 27.0853L17.1174 22.9878L24.5743 16.2496C24.8986 15.9609 24.5036 15.8003 24.0705 16.0896L14.8517 21.8946L10.883 20.6521C10.0199 20.3828 10.0042 19.789 11.063 19.3746L26.5861 13.394C27.3049 13.1246 27.9336 13.554 27.6993 14.6521V14.6515Z",fill:"#AE97E8"})]})}),(0,Lo.jsx)(Xl,{href:"google.com",children:(0,Lo.jsxs)("svg",{className:"link-svg",width:"40",height:"41",viewBox:"0 0 40 41",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:[(0,Lo.jsx)("circle",{cx:"19.801",cy:"20.5998",r:"19.8"}),(0,Lo.jsx)("path",{d:"M28.001 16.2232C27.4126 16.4638 26.7805 16.6263 26.116 16.6998C26.8016 16.3213 27.3146 15.7255 27.5592 15.0238C26.915 15.3768 26.21 15.6253 25.4748 15.7584C24.9804 15.2714 24.3255 14.9486 23.6119 14.8401C22.8982 14.7316 22.1658 14.8436 21.5281 15.1585C20.8905 15.4735 20.3834 15.9738 20.0856 16.5819C19.7878 17.19 19.716 17.8717 19.8812 18.5213C18.5759 18.4609 17.299 18.1479 16.1334 17.6027C14.9677 17.0575 13.9394 16.2922 13.115 15.3566C12.8332 15.8052 12.6711 16.3253 12.6711 16.8792C12.6708 17.3778 12.8039 17.8688 13.0586 18.3086C13.3133 18.7484 13.6817 19.1234 14.1312 19.4003C13.6099 19.385 13.1002 19.255 12.6443 19.0213V19.0603C12.6443 19.7596 12.9065 20.4375 13.3865 20.9787C13.8664 21.52 14.5346 21.8915 15.2776 22.03C14.7941 22.1507 14.2871 22.1685 13.795 22.082C14.0047 22.6837 14.413 23.2099 14.9629 23.5869C15.5128 23.9639 16.1767 24.1728 16.8617 24.1844C15.6989 25.0266 14.2629 25.4834 12.7846 25.4814C12.5227 25.4815 12.261 25.4673 12.001 25.4391C13.5015 26.3292 15.2483 26.8016 17.0322 26.7998C23.0712 26.7998 26.3725 22.1853 26.3725 18.1833C26.3725 18.0533 26.369 17.922 26.3626 17.7919C27.0048 17.3635 27.5591 16.833 27.9996 16.2252L28.001 16.2232Z",fill:"#AE97E8"})]})}),(0,Lo.jsx)(Xl,{href:"google.com",children:(0,Lo.jsxs)("svg",{className:"link-svg",width:"40",height:"41",viewBox:"0 0 40 41",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:[(0,Lo.jsx)("circle",{cx:"20.1999",cy:"20.5998",r:"19.8"}),(0,Lo.jsx)("path",{d:"M24.0227 21.8252L24.4788 18.6641H21.6258V16.6136C21.6258 15.7488 22.0244 14.9049 23.3022 14.9049H24.5993V12.2136C24.5993 12.2136 23.4222 12 22.2966 12C19.947 12 18.4112 13.5139 18.4112 16.2548V18.6641H15.7993V21.8252H18.4112V29.4671C19.4762 29.6443 20.5607 29.6443 21.6258 29.4671V21.8252H24.0227Z",fill:"#AE97E8"})]})}),(0,Lo.jsx)(Xl,{href:"google.com",children:(0,Lo.jsxs)("svg",{className:"link-svg",width:"40",height:"41",viewBox:"0 0 40 41",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:[(0,Lo.jsx)("circle",{cx:"19.799",cy:"20.5998",r:"19.8"}),(0,Lo.jsx)("g",{clipPath:"url(#clip0_8103_1882)",children:(0,Lo.jsx)("path",{d:"M15.6498 27.5498H12.3845V17.0344H15.6498V27.5498ZM14.0151 15.6001C12.9711 15.6001 12.124 14.7349 12.124 13.6909C12.124 13.1894 12.3233 12.7084 12.6779 12.3537C13.0326 11.999 13.5136 11.7998 14.0151 11.7998C14.5167 11.7998 14.9977 11.999 15.3524 12.3537C15.707 12.7084 15.9063 13.1894 15.9063 13.6909C15.9063 14.7349 15.0591 15.6001 14.0151 15.6001ZM27.8706 27.5498H24.6126V22.4311C24.6126 21.211 24.5879 19.6467 22.915 19.6467C21.2174 19.6467 20.957 20.9719 20.957 22.3433V27.5498H17.695V17.0344H20.8265V18.4688H20.872C21.308 17.6425 22.3728 16.7706 23.9613 16.7706C27.266 16.7706 27.8735 18.9469 27.8735 21.7735V27.5498H27.8706Z",fill:"#AE97E8"})}),(0,Lo.jsx)("defs",{children:(0,Lo.jsx)("clipPath",{id:"clip0_8103_1882",children:(0,Lo.jsx)("rect",{width:"18",height:"18",fill:"white",transform:"translate(10.999 11.7998)"})})})]})})]})]})]})}),(0,Lo.jsx)($l,{children:(0,Lo.jsxs)("div",{style:{maxWidth:660,width:"100%"},children:[(0,Lo.jsx)(Vl,{style:{marginBottom:53},children:"\u0424\u041e\u0420\u041c\u0410 \u041e\u0411\u0420\u0410\u0422\u041d\u041e\u0419 \u0421\u0412\u042f\u0417\u0418"}),(0,Lo.jsxs)("form",{onSubmit:t=>function(t){t.stopPropagation(),t.preventDefault(),console.log(e,r)}(t),children:[(0,Lo.jsx)(Cl,{style:{marginBottom:63},placeholder:"E-MAIL",name:"email",onChange:e=>n(e.target.value)}),(0,Lo.jsx)(Cl,{style:{marginBottom:59},placeholder:"\u0421\u041e\u041e\u0411\u0429\u0415\u041d\u0418\u0415",name:"message",onChange:e=>a(e.target.value)}),(0,Lo.jsx)(Zl,{type:"submit",children:(0,Lo.jsx)(Gl,{className:"button-text",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})]})})]}),(0,Lo.jsxs)("div",{style:{position:"relative",display:"flex",justifyContent:"center"},children:[(0,Lo.jsx)("div",{style:{position:"absolute",width:"100%",maxWidth:"1800px",display:"flex",justifyContent:"center",marginTop:"235px",marginLeft:"239px"},children:(0,Lo.jsx)("img",{id:"mark",src:Ul,alt:"mark"})}),(0,Lo.jsx)("img",{src:Hl,alt:"map"})]})]})}const rs=Fa.button`
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
`;function as(e){let{style:t,onClick:n}=e;return(0,Lo.jsx)(rs,{style:t,onClick:n,children:(0,Lo.jsxs)("svg",{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,Lo.jsx)("path",{className:"button-svg",d:"M27 9L9 27",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,Lo.jsx)("path",{className:"button-svg",d:"M9 9L27 27",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})})}const is=Fa.p`
  color: white;
  font-family: Le Murmure;
  font-weight: 600;
  font-size: 45px;
  line-height: 50.45px;
  margin: 0;
  margin-left: 20px;
  white-space: nowrap;

  @media (max-width: 700px) {
    font-size: 33px;
    line-height: 37px;
  }
`,os=Fa.nav`
  display: flex;
  align-items: center;
  height: 37px;
  max-width: 1736px;
  position: absolute;
  width: 100%;
  top: 53px;
  z-index: 1;

  .search-icon,
  .contacts-icon {
    display: none;
  }

  @media (max-width: 700px) {
    justify-content: space-between;
    top: 33px;

    .space,
    .catalog-menu,
    .contact-menu,
    .search-menu {
      display: none;
    }

    .search-icon,
    .contacts-icon {
      display: inline-block;
    }
  }
`,ls=Fa.div`
  height: 6px;
  width: 6px;
  border-radius: 3px;
  background-color: white;
`,ss=Fa.p`
  margin: 0;
  margin-left: 5px;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  color: white;
`,cs=Fa.div`
  display: flex;
  align-items: center;
  height: 15px;
  width: 98px;
  justify-content: space-between;
  margin-left: 10px;
`,us=Fa.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 13px;
  width: 155px;
`,ds=Fa.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 26px;
  width: 94px;
`,fs=Fa.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 193px;
  margin-right: 20px;
`,ps=Fa.dialog`
  background-color: #3320652e;
  border: unset;
  padding: 0;
  top: 120px;
  margin-right: 20px;
  border-radius: 30px;
  backdrop-filter: blur(30px);
  position: absolute;
  z-index: 3;

  @media (max-width: 700px) {
    margin-right: 10px;
  }
`,hs=Fa.button`
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
`,ms=Fa.dialog`
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
`,gs=Fa.button`
  margin-left: 10px;
  padding: 0px;
  outline: none;
  border: none;
  background: unset;

  &:hover,
  &:focus-visible {
    cursor: pointer;

    .heart-svg,
    .cart-svg,
    .user-svg,
    .phone-svg {
      fill: #d9ff5a !important;
    }

    .search-svg {
      stroke: #d9ff5a;
    }
  }
`,xs=Fa.span`
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
`;function vs(){const e=Ga((e=>e.cart.itemsInCart));return(0,Lo.jsxs)(Lo.Fragment,{children:[(0,Lo.jsxs)(os,{className:"navbar",children:[(0,Lo.jsx)(is,{children:"Elfen lied"}),(0,Lo.jsx)("div",{className:"space",style:{maxWidth:"133px",width:"100%"}}),(0,Lo.jsxs)(cs,{className:"catalog-menu",children:[(0,Lo.jsxs)("div",{style:{height:15,width:15},children:[(0,Lo.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:3},children:[(0,Lo.jsx)(ls,{}),(0,Lo.jsx)(ls,{})]}),(0,Lo.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,Lo.jsx)(ls,{}),(0,Lo.jsx)(ls,{})]})]}),(0,Lo.jsx)(ss,{children:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433"})]}),(0,Lo.jsx)("div",{className:"space",style:{maxWidth:"387px",width:"100%"}}),(0,Lo.jsxs)(us,{className:"contact-menu",children:[(0,Lo.jsx)(hs,{onClick:e=>document.getElementById("blog").scrollIntoView({behavior:"smooth"}),children:"\u0411\u043b\u043e\u0433"}),(0,Lo.jsx)(hs,{onClick:e=>{window.ContactHandler.showModal()},children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})]}),(0,Lo.jsx)("div",{className:"space",style:{maxWidth:"360px",width:"100%"}}),(0,Lo.jsxs)(ds,{className:"search-menu",children:[(0,Lo.jsx)($t,{}),(0,Lo.jsx)(ss,{children:"\u041f\u043e\u0438\u0441\u043a"})]}),(0,Lo.jsx)("div",{className:"space",style:{maxWidth:"247px",width:"100%"}}),(0,Lo.jsxs)(fs,{children:[(0,Lo.jsx)(gs,{className:"search-icon",children:(0,Lo.jsxs)("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,Lo.jsx)("path",{className:"search-svg",d:"M11.5 20C16.1944 20 20 16.1944 20 11.5C20 6.80558 16.1944 3 11.5 3C6.80558 3 3 6.80558 3 11.5C3 16.1944 6.80558 20 11.5 20Z",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),(0,Lo.jsx)("path",{className:"search-svg",d:"M23 23L18 18",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})}),(0,Lo.jsx)(gs,{onClick:e=>{window.FavoriteHandler.show(),window.CartHandler.close(),window.AuthorizationHandler.close(),window.RegistrationHandler.close()},children:(0,Lo.jsx)("svg",{className:"heart-svg",width:"22",height:"20",viewBox:"0 0 22 20",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:(0,Lo.jsx)("path",{d:"M15.884 0C13.893 0 12.111 0.988764 11 2.50562C9.889 0.988764 8.107 0 6.116 0C2.739 0 0 2.80899 0 6.2809C0 7.61798 0.209 8.85393 0.572 10C2.31 15.618 7.667 18.9775 10.318 19.8989C10.692 20.0337 11.308 20.0337 11.682 19.8989C14.333 18.9775 19.69 15.618 21.428 10C21.791 8.85393 22 7.61798 22 6.2809C22 2.80899 19.261 0 15.884 0Z"})})}),(0,Lo.jsx)(gs,{onClick:e=>{window.AuthorizationHandler.show(),window.CartHandler.close(),window.FavoriteHandler.close(),window.RegistrationHandler.close()},children:(0,Lo.jsx)("svg",{className:"user-svg",width:"18",height:"21",viewBox:"0 0 18 21",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:(0,Lo.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14 5C14 7.76142 11.7614 10 9 10C6.23858 10 4 7.76142 4 5C4 2.23858 6.23858 0 9 0C11.7614 0 14 2.23858 14 5ZM0 19.5C0 15.36 4.0396 13 9 13C13.9604 13 18 15.36 18 19.5C18 20.585 17.4157 21 16.5149 21H1.48515C1.07905 21 0 21 0 19.5Z"})})}),(0,Lo.jsxs)("div",{style:{position:"relative",display:"flex"},children:[(0,Lo.jsx)(gs,{onClick:e=>{window.CartHandler.show(),window.FavoriteHandler.close(),window.AuthorizationHandler.close(),window.RegistrationHandler.close()},children:(0,Lo.jsx)("svg",{className:"cart-svg",width:"21",height:"22",viewBox:"0 0 21 22",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:(0,Lo.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.71513 2.69L3.51817 5.14C3.47877 5.61 3.84315 6 4.30601 6H19.3833C19.7969 6 20.1416 5.68 20.1712 5.26C20.2992 3.49 18.9697 2.05 17.2266 2.05H5.12339C5.02491 1.61 4.82795 1.19 4.52266 0.84C4.03026 0.31 3.3409 0 2.63184 0H0.918289C0.51452 0 0.179688 0.34 0.179688 0.75C0.179688 1.16 0.51452 1.5 0.918289 1.5H2.63184C2.93713 1.5 3.22273 1.63 3.42953 1.85C3.63634 2.08 3.73482 2.38 3.71513 2.69ZM9.17969 20C9.17969 21.1046 8.28426 22 7.17969 22C6.07512 22 5.17969 21.1046 5.17969 20C5.17969 18.8954 6.07512 18 7.17969 18C8.28426 18 9.17969 18.8954 9.17969 20ZM17.1797 20C17.1797 21.1046 16.2843 22 15.1797 22C14.0751 22 13.1797 21.1046 13.1797 20C13.1797 18.8954 14.0751 18 15.1797 18C16.2843 18 17.1797 18.8954 17.1797 20ZM4.32925 8H19.4005C19.8623 8 20.216 8.37818 20.1767 8.82424L19.8525 13.3527C19.7444 14.8073 18.4475 16 16.9738 16H6.04859C4.36854 16 3.05202 14.5842 3.18956 12.9261L3.54326 8.70788C3.58256 8.3103 3.9166 8 4.32925 8Z"})})}),0!==e.length?(0,Lo.jsx)(xs,{children:e.length}):(0,Lo.jsx)(Lo.Fragment,{})]}),(0,Lo.jsx)(gs,{className:"contacts-icon",onClick:e=>{window.ContactHandler.showModal()},children:(0,Lo.jsx)("svg",{className:"phone-svg",width:"23",height:"22",viewBox:"0 0 23 22",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:(0,Lo.jsx)("path",{d:"M22.6777 17.963C22.6777 18.359 22.5896 18.766 22.4023 19.162C22.215 19.558 21.9727 19.932 21.6532 20.284C21.1134 20.878 20.5185 21.307 19.8465 21.582C19.1855 21.857 18.4694 22 17.6983 22C16.5746 22 15.3738 21.736 14.1069 21.197C12.84 20.658 11.5731 19.932 10.3172 19.019C9.05029 18.095 7.84949 17.072 6.70377 15.939C5.56907 14.795 4.54453 13.596 3.63016 12.342C2.72681 11.088 1.99972 9.834 1.47092 8.591C0.942131 7.337 0.677734 6.138 0.677734 4.994C0.677734 4.246 0.809933 3.531 1.07433 2.871C1.33873 2.2 1.75735 1.584 2.34123 1.034C3.04629 0.341 3.81744 0 4.63267 0C4.94113 0 5.24959 0.0660001 5.52501 0.198C5.81144 0.33 6.06482 0.528 6.26311 0.814L8.81895 4.411C9.01724 4.686 9.16046 4.939 9.25961 5.181C9.35876 5.412 9.41384 5.643 9.41384 5.852C9.41384 6.116 9.33672 6.38 9.18249 6.633C9.03928 6.886 8.82996 7.15 8.56557 7.414L7.72831 8.283C7.60713 8.404 7.55205 8.547 7.55205 8.723C7.55205 8.811 7.56306 8.888 7.5851 8.976C7.61815 9.064 7.6512 9.13 7.67323 9.196C7.87153 9.559 8.21304 10.032 8.69776 10.604C9.19351 11.176 9.7223 11.759 10.2952 12.342C10.8901 12.925 11.4629 13.464 12.0468 13.959C12.6196 14.443 13.0934 14.773 13.4679 14.971C13.523 14.993 13.5891 15.026 13.6662 15.059C13.7543 15.092 13.8425 15.103 13.9416 15.103C14.1289 15.103 14.2721 15.037 14.3933 14.916L15.2306 14.091C15.506 13.816 15.7704 13.607 16.0238 13.475C16.2771 13.321 16.5305 13.244 16.8059 13.244C17.0152 13.244 17.2356 13.288 17.4779 13.387C17.7203 13.486 17.9737 13.629 18.2491 13.816L21.8956 16.401C22.182 16.599 22.3803 16.83 22.5015 17.105C22.6116 17.38 22.6777 17.655 22.6777 17.963Z"})})})]})]}),(0,Lo.jsxs)(ps,{id:"CartHandler",children:[(0,Lo.jsx)(as,{onClick:e=>{window.CartHandler.close()}}),(0,Lo.jsx)(rl,{})]}),(0,Lo.jsxs)(ps,{id:"FavoriteHandler",children:[(0,Lo.jsx)(as,{onClick:e=>{window.FavoriteHandler.close()}}),(0,Lo.jsx)(bl,{})]}),(0,Lo.jsxs)(ps,{id:"AuthorizationHandler",children:[(0,Lo.jsx)(as,{onClick:e=>{window.AuthorizationHandler.close()}}),(0,Lo.jsx)(Rl,{})]}),(0,Lo.jsxs)(ps,{id:"RegistrationHandler",children:[(0,Lo.jsx)(as,{onClick:e=>{window.RegistrationHandler.close()}}),(0,Lo.jsx)(Bl,{})]}),(0,Lo.jsxs)(ms,{id:"ContactHandler",children:[(0,Lo.jsx)(as,{style:{position:"absolute",top:"22px",right:"20px"},onClick:e=>{window.ContactHandler.close()}}),(0,Lo.jsx)(ns,{})]}),(0,Lo.jsx)(vt,{})]})}const ys=n.p+"static/media/lamp3Big.3dd7383af04a80bf8ec6.png",ws=n.p+"static/media/chairBig.ae663ab087f7d0d3f925.png",bs=n.p+"static/media/tableBig.43c3666d23ddef101262.png",Ss=n.p+"static/media/lamp3.6d542859f29e071a51bf.png",Cs=n.p+"static/media/chair2.68bebcbdd478c002a9ef.png",ks=n.p+"static/media/table2.1df5b65263cca84dfcf0.png",Es=Fa.button`
  max-width: 614px;
  min-width: 365px;
  border: none;
  flex: 1 1;
  height: 1038px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 40px;
  margin: 20px 10px 0px 10px;
  outline: none;

  &:hover,
  &:focus-visible {
    cursor: pointer;
    border: 2px solid #d9ff5a;

    .slide-image {
      transform: perspective(100px) translateZ(10px);
    }
  }

  @media (max-width: 1400px) {
    height: 830px;
  }
  @media (max-width: 1200px) {
    height: 726px;
    min-width: 305px;
  }
  @media (max-width: 1000px) {
    height: 622px;
    min-width: 230px;
  }
  @media (max-width: 800px) {
    height: 550px;
    min-width: 230px;
    max-width: 350px;
  }
`,js=Fa.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 70px;
  line-height: 66.5px;
  color: #cbb6ff;
  margin: 0;
  white-space: nowrap;
  position: absolute;
  top: 236px;

  @media (max-width: 1400px) {
    top: 188px;
  }
  @media (max-width: 1200px) {
    font-size: 56px;
    line-height: 52.5px;
    top: 175px;
  }
  @media (max-width: 1000px) {
    font-size: 42px;
    line-height: 39px;
    top: 150px;
  }
  @media (max-width: 800px) {
    top: 120px;
  }
`,_s=Fa.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 25.36px;
  color: #ffffff;
  margin: 0;
  margin-top: 300px;

  @media (max-width: 1400px) {
    margin-top: 230px;
  }
  @media (max-width: 1200px) {
    margin-top: 150px;
  }
  @media (max-width: 1000px) {
    font-size: 16px;
    line-height: 21.36px;
    margin-top: 130px;
  }
`,zs=Fa.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 23px;
  color: #ffffff;
  margin: 0;
  text-align: center;
  width: 275px;
  margin-top: 25px;

  @media (max-width: 1000px) {
    font-size: 12px;
    line-height: 20px;
    width: 225px;
  }
`,As=Fa.div`
  display: flex;
  width: 95px;
  justify-content: space-between;
  margin-top: 28px;
`,Ps=Fa.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 28px;
  line-height: 26.6px;
  color: #ffffff;
  margin: 0;
`,Ns=Fa.p`
  font-family: Euclid Circular A;
  font-weight: 400;
  font-size: 20px;
  line-height: 25.36px;
  color: #ffffff;
  margin: 0;
`,Rs=Fa.img`
  position: absolute;
  height: 400px;

  @media (max-width: 1400px) {
    height: 320px;
  }
  @media (max-width: 1200px) {
    height: 280px;
  }
  @media (max-width: 1000px) {
    height: 240px;
  }
  @media (max-width: 800px) {
    height: 200px;
  }
`,Ts=Fa.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 400px;
  top: 200px;

  @media (max-width: 1400px) {
    top: 130px;
    height: 320px;
  }
  @media (max-width: 1200px) {
    top: 90px;
    height: 280px;
  }
  @media (max-width: 1000px) {
    top: 90px;
    height: 240px;
  }
  @media (max-width: 800px) {
    top: 90px;
    height: 200px;
  }
`,Os=Fa.div`
  width: 274px;
  height: 2px;
  background: #ffffff33;
  margin-top: 28px;

  @media (max-width: 1000px) {
    width: 225px;
  }
`;function Ls(e){let{style:t,image:n,author:r,productCategory:a,productDescription:i,price:o,onClick:l}=e;return(0,Lo.jsxs)(Es,{style:{background:t.backgroundColor},onClick:l,children:[(0,Lo.jsxs)(Ts,{children:[(0,Lo.jsx)(js,{style:{color:t.color},children:r}),(0,Lo.jsx)(Rs,{className:"slide-image",src:n,alt:"defProductImage"})]}),(0,Lo.jsx)(_s,{children:a}),(0,Lo.jsx)(zs,{children:i}),(0,Lo.jsx)(Os,{}),(0,Lo.jsxs)(As,{children:[(0,Lo.jsx)(Ps,{children:o}),(0,Lo.jsx)(Ns,{children:"\u20bd"})]})]})}const Ds=[{id:0,style:{backgroundColor:"#C5B0FAB2",color:"#CBB6FF"},image:n.p+"static/media/lampDef.30cb2b1ddf29b8899304.png",author:"BENJAMIN MOORE",productCategory:"\u0421\u0412\u0415\u0422\u0418\u041b\u042c\u041d\u0418\u041a",productDescription:"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0441\u043a\u0430\u044f \u043b\u0430\u043c\u043f\u0430 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u043e\u0433\u043e \u043e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u044f",price:"150 000"},{id:1,style:{backgroundColor:"#FA8FEF",color:"#FFA8F6"},image:n.p+"static/media/chairDef.0039aedfacf6a3150bb8.png",author:"PAINT HERE GLORY",productCategory:"\u041a\u0420\u0415\u0421\u041b\u041e",productDescription:"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0441\u043a\u043e\u0435 \u043a\u0440\u0435\u0441\u043b\u043e \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u044c\u0435\u0440\u0430",price:"120 000"},{id:2,style:{backgroundColor:"#AECFFF",color:"#C8DEFF"},image:n.p+"static/media/tableDef.210ca3ce26fa0ed06520.png",author:"BENJAMIN MOORE",productCategory:"\u0421\u0422\u041e\u041b",productDescription:"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0441\u043a\u0438\u0439 \u0441\u0442\u043e\u043b \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u044c\u0435\u0440\u0430",price:"235 000"}];function Fs(e){let{onViewChange:t}=e;let n=[function(e){e.stopPropagation(),t[0]({firstSlide:!0,secondSlide:!1,thirdSlide:!1}),t[1](!1)},function(e){e.stopPropagation(),t[0]({firstSlide:!1,secondSlide:!0,thirdSlide:!1}),t[1](!1)},function(e){e.stopPropagation(),t[0]({firstSlide:!1,secondSlide:!1,thirdSlide:!0}),t[1](!1)}];return(0,Lo.jsx)(Lo.Fragment,{children:Ds.map(((e,t)=>(0,Lo.jsx)(Ls,{style:e.style,image:e.image,author:e.author,productCategory:e.productCategory,productDescription:e.productDescription,price:e.price,onClick:e=>n[t](e)},e.id)))})}const Ms=Eo({name:"notification",initialState:{notifications:[]},reducers:{addNotification(e,t){e.notifications.push(t.payload)},deleteNotification(e){e.notifications.splice(0,1)}}}),{addNotification:Is,deleteNotification:Bs}=Ms.actions,Hs=Ms.reducer,Us=Fa.p`
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
`;function Ws(e){let{className:t}=e;return(0,Lo.jsx)(Us,{className:t,children:"\u0422\u043e\u0432\u0430\u0440 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443!"})}const $s=Fa(Ws)`
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
`,Vs=Fa.div`
  display: flex;
  position: relative;
`;function Ks(){return(0,Lo.jsxs)(Vs,{children:[(0,Lo.jsx)($s,{className:"first-layer"}),(0,Lo.jsx)($s,{className:"second-layer"}),(0,Lo.jsx)($s,{className:"third-layer"})]})}const Qs=Fa.p`
  margin: 0;
  font-family: Floreste;
  font-weight: 400;
  font-size: 212px;
  color: #cbb6ff99;
  text-wrap: nowrap;
  line-height: 201.4px;

  @media (max-width: 1900px) {
    font-size: 180px;
  }
  @media (max-width: 1400px) {
    font-size: 150px;
    line-height: 150.4px;
  }
  @media (max-width: 1200px) {
    font-size: 175px;
    line-height: 160.4px;
  }
  @media (max-width: 1000px) {
    font-size: 150px;
    line-height: 140.4px;
  }
  @media (max-width: 800px) {
    font-size: 125px;
    line-height: 110.4px;
  }
  @media (max-width: 700px) {
    font-size: 110px;
    line-height: 90px;
  }
  @media (max-width: 600px) {
    font-size: 90px;
    line-height: 70px;
  }
  @media (max-width: 500px) {
    font-size: 67px;
    line-height: 67.45px;
  }
`,qs=Fa.div`
  height: 1038px;
  margin: 20px 10px 0px 10px;
  width: 1180px;
  position: relative;
  border-radius: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1800px) {
    height: 1000px;
  }
  @media (max-width: 1600px) {
    height: 950px;
  }
  @media (max-width: 1400px) {
    height: 850px;
  }
  @media (max-width: 700px) {
    height: 750px;
  }
  @media (max-width: 600px) {
    height: 640px;
  }
`,Ys=Fa.p`
  margin: 0;
  font-family: Euclid Circular A;
  color: #d9ff5a;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  margin-bottom: 31px;

  @media (max-width: 700px) {
    font-size: 16px;
    line-height: 19px;
  }
  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 17px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
    line-height: 15px;
  }
`,Zs=Fa.div`
  width: 312px;
  margin-left: 60px;

  @media (max-width: 1000px) {
    margin-left: 40px;
  }
  @media (max-width: 800px) {
    margin-left: 20px;
  }
  @media (max-width: 700px) {
    margin-left: 10px;
    width: 275px;
  }
`,Gs=Fa.h2`
  margin: 0;
  font-family: Euclid Circular A;
  color: white;
  font-weight: 500;
  font-size: 28px;
  line-height: 35.5px;
  margin-bottom: 9px;

  @media (max-width: 700px) {
    font-size: 24px;
    line-height: 31px;
  }
`,Xs=Fa.p`
  margin: 0;
  font-family: Euclid Circular A;
  color: white;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  margin-bottom: 26px;

  @media (max-width: 700px) {
    font-size: 16px;
    line-height: 20px;
  }
  @media (max-width: 600px) {
    font-size: 13px;
    margin-bottom: 14px;
  }
`,Js=Fa.div`
  border: 0.5px solid #ffffff33;
  width: 100%;
  margin-bottom: 28px;

  @media (max-width: 600px) {
    margin-bottom: 14px;
  }
`,ec=Fa.div`
  display: flex;
  width: 127px;
  height: 28px;
  justify-content: space-between;
`,tc=Fa.p`
  margin: 0;
  font-family: Floreste;
  color: #d9ff5a;
  font-weight: 400;
  font-size: 40px;
  line-height: 38px;
`,nc=Fa.p`
  margin: 0;
  font-family: Euclid Circular A;
  color: #d9ff5a;
  font-weight: 400;
  font-size: 20px;
  line-height: 15px;
`,rc=Fa.button`
  width: 357px;
  height: 156px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
  border: unset;
  background: unset;
  outline: none;

  &.button-next-to-the-image {
    display: none;
  }

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

  @media (max-width: 1400px) {
    width: 322px;
    height: 142px;
    margin-right: 30px;
  }
  @media (max-width: 1000px) {
    margin-right: 30px;
  }
  @media (max-width: 800px) {
    width: 322px;
    height: 142px;
    margin-right: 20px;
  }
  @media (max-width: 700px) {
    width: 273px;
    height: 125px;
    margin-right: 10px;
  }
  @media (max-width: 600px) {
    &.button-next-to-the-image {
      display: flex;
    }
    &.button-next-to-the-description {
      display: none;
    }

    position: relative;
    top: 83px;
    left: 62px;
    height: 110px;
  }
  @media (max-width: 500px) {
    top: 53px;
    left: 69px;
    width: 225px;
  }
`,ac=Fa.p`
  margin-left: 11px;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  color: white;
  z-index: 2;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`,ic=Fa.div`
  width: 352px;
  height: 131px;
  border: 2px solid #d9ff5a;
  position: absolute;
  border-radius: 50%;

  @media (max-width: 1400px) {
    width: 304px;
    height: 114px;
  }
  @media (max-width: 800px) {
    width: 304px;
    height: 114px;
  }
  @media (max-width: 700px) {
    width: 256px;
    height: 97px;
  }
  @media (max-width: 600px) {
    width: 208px;
    height: 80px;
  }
`,oc=Fa.div`
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 2;
`,lc=Fa.img`
  position: absolute;
  top: 155px;

  @media (max-width: 1800px) {
    top: 120px;
  }
  @media (max-width: 1600px) {
    width: 325px;
    height: 600px;
  }
  @media (max-width: 1400px) {
    width: 300px;
    height: 550px;
    top: 90px;
  }
  @media (max-width: 800px) {
    width: 275px;
    height: 500px;
  }
  @media (max-width: 700px) {
    width: 250px;
    height: 450px;
    top: 70px;
  }
  @media (max-width: 600px) {
    width: 210px;
    height: 375px;
    top: 70px;
  }
  @media (max-width: 500px) {
    width: 162px;
    height: 318px;
    top: 70px;
  }
`,sc=Fa.div`
  position: relative;
  top: 406px;
  margin-bottom: 140px;

  @media (max-width: 1800px) {
    margin-bottom: 100px;
  }
  @media (max-width: 1600px) {
    margin-bottom: 60px;
    top: 375px;
  }
  @media (max-width: 1400px) {
    top: 340px;
    margin-bottom: 20px;
  }
  @media (max-width: 1200px) {
    top: 375px;
  }
  @media (max-width: 1000px) {
    top: 340px;
  }
  @media (max-width: 800px) {
    margin-bottom: 60px;
  }
  @media (max-width: 700px) {
    top: 260px;
    margin-bottom: 0px;
  }
  @media (max-width: 600px) {
    top: 240px;
  }
  @media (max-width: 500px) {
    top: 200px;
  }
`,cc=Fa.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  top: 400px;

  @media (max-width: 600px) {
    top: 350px;
  }
`;function uc(e){let{id:n,category:r,author:a,image:i,productName:o,productDescription:l,productPrice:s,background:c,color:u}=e;const d=Ga((e=>e.notification.notifications)),f=ci();function p(e){let t={id:n,count:1,image:i,background:c,name:o,price:s,category:r};e.stopPropagation(),f(Po(t));let a=Date.now().toString();f(Is({id:a})),setTimeout((()=>{f(Bs())}),3e3)}return(0,t.useEffect)((()=>{document.querySelector(".open-slide").scrollIntoView({behavior:"smooth"})}),[]),(0,Lo.jsxs)(qs,{className:"open-slide",style:{background:c},children:[(0,Lo.jsxs)(sc,{children:[(0,Lo.jsx)(Ys,{children:"\u0422\u041e\u0412\u0410\u0420 \u0414\u041d\u042f"}),(0,Lo.jsx)(Qs,{className:"author-name",style:{color:u},children:a})]}),(0,Lo.jsx)(lc,{className:"product-image",src:i,alt:"productImage"}),(0,Lo.jsxs)(cc,{children:[(0,Lo.jsxs)(Zs,{children:[(0,Lo.jsx)(Gs,{children:o}),(0,Lo.jsx)(Xs,{children:l}),(0,Lo.jsx)(Js,{}),(0,Lo.jsxs)(ec,{children:[(0,Lo.jsx)(tc,{children:s}),(0,Lo.jsx)(nc,{children:"\u20bd"})]})]}),(0,Lo.jsxs)(rc,{className:"button-next-to-the-description",background:"unset"!==c?c:"#ae97e8",onClick:e=>p(e),children:[(0,Lo.jsx)("svg",{style:{zIndex:2},className:"button-svg",width:"21",height:"22",viewBox:"0 0 21 22",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:(0,Lo.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.71513 2.69L3.51817 5.14C3.47877 5.61 3.84315 6 4.30601 6H19.3833C19.7969 6 20.1416 5.68 20.1712 5.26C20.2992 3.49 18.9697 2.05 17.2266 2.05H5.12339C5.02491 1.61 4.82795 1.19 4.52266 0.84C4.03026 0.31 3.3409 0 2.63184 0H0.918289C0.51452 0 0.179688 0.34 0.179688 0.75C0.179688 1.16 0.51452 1.5 0.918289 1.5H2.63184C2.93713 1.5 3.22273 1.63 3.42953 1.85C3.63634 2.08 3.73482 2.38 3.71513 2.69ZM9.17969 20C9.17969 21.1046 8.28426 22 7.17969 22C6.07512 22 5.17969 21.1046 5.17969 20C5.17969 18.8954 6.07512 18 7.17969 18C8.28426 18 9.17969 18.8954 9.17969 20ZM17.1797 20C17.1797 21.1046 16.2843 22 15.1797 22C14.0751 22 13.1797 21.1046 13.1797 20C13.1797 18.8954 14.0751 18 15.1797 18C16.2843 18 17.1797 18.8954 17.1797 20ZM4.32925 8H19.4005C19.8623 8 20.216 8.37818 20.1767 8.82424L19.8525 13.3527C19.7444 14.8073 18.4475 16 16.9738 16H6.04859C4.36854 16 3.05202 14.5842 3.18956 12.9261L3.54326 8.70788C3.58256 8.3103 3.9166 8 4.32925 8Z"})}),(0,Lo.jsx)(ac,{className:"button-text",children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),(0,Lo.jsx)(ic,{className:"button-ellipse",style:{top:"12px",backgroundColor:"#ffffff30",transform:"rotate(-13deg)"}}),(0,Lo.jsx)(ic,{style:{transform:"rotate(-2deg)"}})]})]}),(0,Lo.jsxs)(rc,{className:"button-next-to-the-image",background:"unset"!==c?c:"#ae97e8",onClick:e=>p(e),children:[(0,Lo.jsx)("svg",{style:{zIndex:2},className:"button-svg",width:"21",height:"22",viewBox:"0 0 21 22",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:(0,Lo.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.71513 2.69L3.51817 5.14C3.47877 5.61 3.84315 6 4.30601 6H19.3833C19.7969 6 20.1416 5.68 20.1712 5.26C20.2992 3.49 18.9697 2.05 17.2266 2.05H5.12339C5.02491 1.61 4.82795 1.19 4.52266 0.84C4.03026 0.31 3.3409 0 2.63184 0H0.918289C0.51452 0 0.179688 0.34 0.179688 0.75C0.179688 1.16 0.51452 1.5 0.918289 1.5H2.63184C2.93713 1.5 3.22273 1.63 3.42953 1.85C3.63634 2.08 3.73482 2.38 3.71513 2.69ZM9.17969 20C9.17969 21.1046 8.28426 22 7.17969 22C6.07512 22 5.17969 21.1046 5.17969 20C5.17969 18.8954 6.07512 18 7.17969 18C8.28426 18 9.17969 18.8954 9.17969 20ZM17.1797 20C17.1797 21.1046 16.2843 22 15.1797 22C14.0751 22 13.1797 21.1046 13.1797 20C13.1797 18.8954 14.0751 18 15.1797 18C16.2843 18 17.1797 18.8954 17.1797 20ZM4.32925 8H19.4005C19.8623 8 20.216 8.37818 20.1767 8.82424L19.8525 13.3527C19.7444 14.8073 18.4475 16 16.9738 16H6.04859C4.36854 16 3.05202 14.5842 3.18956 12.9261L3.54326 8.70788C3.58256 8.3103 3.9166 8 4.32925 8Z"})}),(0,Lo.jsx)(ac,{className:"button-text",children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),(0,Lo.jsx)(ic,{className:"button-ellipse",style:{top:"12px",backgroundColor:"#ffffff30",transform:"rotate(-13deg)"}}),(0,Lo.jsx)(ic,{style:{transform:"rotate(-2deg)"}})]}),(0,Lo.jsx)(oc,{children:d.length>3?(0,Lo.jsx)(Ks,{}):d.map((e=>(0,Lo.jsx)(Ws,{},e.id)))})]})}const dc=Fa.button`
  min-width: 340px;
  max-width: 500px;
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
  @media (max-width: 1800px) {
    height: 1000px;
    min-width: 300px;
  }
  @media (max-width: 1600px) {
    height: 950px;
    min-width: 250px;
  }
  @media (max-width: 1500px) {
    min-width: 200px;
  }
  @media (max-width: 1400px) {
    height: 850px;
    min-width: 170px;
  }
  @media (max-width: 700px) {
    height: 750px;
  }
  @media (max-width: 600px) {
    height: 640px;
  }
`,fc=Fa.div`
  margin-bottom: 69px;
  width: 58px;
  height: 81px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`,pc=Fa.p`
  margin: 0;
  font-family: Euclid Circular A;
  font-size: 15px;
  font-weight: 500;
  line-height: 19.02px;
  color: #ffffff99;
`,hc=Fa.p`
  margin: 0;
  font-family: Floreste;
  font-size: 40px;
  font-weight: 400;
  line-height: 38px;
  color: #ffffff;
`,mc=Fa.img`
  transform: rotate(7deg);

  @media (max-width: 1500px) {
    height: 23%;
  }
  @media (max-width: 1200px) {
    height: 30%;
  }
`;function gc(e){let{color:t,image:n,number:r,id:a,onViewChange:i}=e;return(0,Lo.jsxs)(dc,{style:{background:`${t}`},onClick:e=>function(e){e.stopPropagation(),"1"===a?i[0]({firstSlide:!0,secondSlide:!1,thirdSlide:!1}):"2"===a?i[0]({firstSlide:!1,secondSlide:!0,thirdSlide:!1}):i[0]({firstSlide:!1,secondSlide:!1,thirdSlide:!0})}(e),children:[(0,Lo.jsx)("div",{style:{width:1,height:1}}),(0,Lo.jsx)(mc,{className:"closed-slide-image",src:n,alt:"productSlideImage"}),(0,Lo.jsxs)(fc,{children:[(0,Lo.jsx)(pc,{children:"\u0441\u043b\u0430\u0439\u0434"}),(0,Lo.jsx)(hc,{children:r})]})]})}const xc=Fa.div`
  display: flex;
  width: 100%;
  justify-content: center;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;function vc(){const[e,n]=(0,t.useState)(!0),[r,a]=(0,t.useState)({firstSlide:!1,secondSlide:!1,thirdSlide:!1});return(0,Lo.jsx)(xc,{children:e?(0,Lo.jsx)(Fs,{onViewChange:[a,n]}):(0,Lo.jsxs)(Lo.Fragment,{children:[r.firstSlide?(0,Lo.jsx)(uc,{id:"111",category:"\u0421\u0432\u0435\u0442\u0438\u043b\u044c\u043d\u0438\u043a",author:"BENJAMIN MOORE",image:ys,productName:"\u0421\u0412\u0415\u0422\u0418\u041b\u042c\u041d\u0418\u041a",productDescription:"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0441\u043a\u0430\u044f \u043b\u0430\u043c\u043f\u0430 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u043e\u0433\u043e \u043e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u044f",productPrice:"150 000",background:"unset"}):(0,Lo.jsx)(gc,{id:"1",color:"#C5B0FAB2",image:Ss,number:"01",onViewChange:[a,n]}),r.secondSlide?(0,Lo.jsx)(uc,{id:"222",category:"\u041a\u0440\u0435\u0441\u043b\u043e",author:"PAINT THE GLORY",image:ws,productName:"\u041a\u0420\u0415\u0421\u041b\u041e",productDescription:"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0441\u043a\u043e\u0435 \u043a\u0440\u0435\u0441\u043b\u043e \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0443\u044e\u0442\u0430 \u0432 \u043f\u043e\u043c\u0435\u0449\u0435\u043d\u0438\u0438",productPrice:"120 000",background:"#FA8FEF",color:"#FFA8F6"}):(0,Lo.jsx)(gc,{id:"2",color:"#FA8FEF",image:Cs,number:"02",onViewChange:[a,n]}),r.thirdSlide?(0,Lo.jsx)(uc,{id:"333",category:"\u0421\u0442\u043e\u043b",author:"BENJAMIN MOORE",image:bs,productName:"\u0412\u042b\u0421\u041e\u041a\u0418\u0419 \u0421\u0422\u041e\u041b",productDescription:"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0441\u043a\u0438\u0439 \u0441\u0442\u043e\u043b \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u0430 \u0432 \u043f\u043e\u043c\u0435\u0449\u0435\u043d\u0438\u0438",productPrice:"235 000",background:"#AECFFF",color:"#BED8FF"}):(0,Lo.jsx)(gc,{id:"3",color:"#AECFFF",image:ks,number:"03",onViewChange:[a,n]})]})})}const yc=n.p+"static/media/Subtract.29db299ac0f1095ff9a06627d03047cd.svg",wc=Fa.button`
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
  @media (max-width: 1500px) {
    width: calc(var(--widthA) * 0.7);
    height: calc(var(--heightA) * 0.7);
  }
`,bc=Fa.p`
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
  @media (max-width: 1500px) {
    font-size: calc(var(--font-sizeA) * 0.7);
    line-height: calc(var(--line-heightA) * 0.7);
    width: calc(var(--widthA) * 0.7);
    top: calc(var(--topA) * 0.7);
  }
`,Sc=Fa.div`
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
  @media (max-width: 1500px) {
    height: calc(var(--heightA) * 0.7);
    width: calc(var(--widthA) * 0.7);
    top: calc(var(--topA) * 0.7);
    left: calc(var(--leftA) * 0.7);
  }
`,Cc=Fa.div`
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
  @media (max-width: 1500px) {
    height: calc(var(--heightA) * 0.7);
    width: calc(var(--widthA) * 0.7);
    top: calc(var(--topA) * 0.7);
    left: calc(var(--leftA) * 0.7);
  }
`,kc=Fa.p`
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
  @media (max-width: 1500px) {
    font-size: calc(var(--font-sizeA) * 0.7);
    line-height: calc(var(--line-heightA) * 0.7);
  }
`,Ec=Fa.p`
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
  @media (max-width: 1500px) {
    font-size: calc(var(--font-sizeA) * 0.7);
    line-height: calc(var(--line-heightA) * 0.7);
    margin-top: calc(var(--margin-topA) * 0.7);
  }
`,jc=Fa.div`
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
  @media (max-width: 1500px) {
    height: calc(var(--heightA) * 0.7);
    width: calc(var(--widthA) * 0.7);
  }
`,_c=Fa.img`
  --heightA: 248px;
  height: var(--heightA);

  @media (max-width: 1820px) {
    height: calc(var(--heightA) * 0.8);
  }
  @media (max-width: 1500px) {
    height: calc(var(--heightA) * 0.7);
  }
`,zc=Fa.img`
  --heightA: 462px;
  height: var(--heightA);

  @media (max-width: 1820px) {
    height: calc(var(--heightA) * 0.8);
  }
  @media (max-width: 1500px) {
    height: calc(var(--heightA) * 0.7);
  }
`,Ac=Fa.div`
  position: absolute;
  top: 300px;
  left: -50px;
  width: 196px;
  height: 89px;
  transform: rotate(-143deg);
  font-size: 16px;
  line-height: 20px;

  @media (max-width: 1820px) {
    top: 206px;
    left: -56px;
    transform: rotate(-134deg);
  }
  @media (max-width: 1500px) {
    font-size: 12px;
    line-height: 14px;
    top: 172px;
    left: -62px;
    transform: rotate(-132deg);
  }
`,Pc="\u0438\u0437\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u0437\u0430\u043a\u0430\u0437".split(""),Nc=3;function Rc(e){let{cardName:t,image:n,onClick:r}=e;return(0,Lo.jsxs)(wc,{onClick:r,children:[(0,Lo.jsx)(jc,{children:(0,Lo.jsx)(_c,{className:"category-image",src:n,alt:"cardImage"})}),(0,Lo.jsx)(Ac,{children:Pc.map(((e,t)=>(0,Lo.jsx)("span",{style:{height:450,position:"absolute",transform:`rotate(${t*Nc}deg)`,color:"white"},children:e},t)))}),(0,Lo.jsx)(zc,{src:yc,alt:"ellipse"}),(0,Lo.jsx)(bc,{children:t}),(0,Lo.jsx)(Sc,{className:"category-button",children:(0,Lo.jsx)("svg",{width:"22",height:"34",viewBox:"0 0 22 34",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Lo.jsx)("path",{className:"svg-arrow-path",d:"M21 22.6667C19.94 22.6667 18.3571 23.7051 17.0286 24.7562C15.3143 26.1077 13.8186 27.7227 12.6771 29.5743C11.8214 30.9627 11 32.6457 11 34M11 34C11 32.6457 10.1786 30.9612 9.32286 29.5743C8.18 27.7227 6.68429 26.1077 4.97286 24.7562C3.64286 23.7051 2.05714 22.6667 1 22.6667M11 34L11 -1.11265e-06",stroke:"#d9ff5a",strokeWidth:"2",strokeLinecap:"round"})})}),(0,Lo.jsxs)(Cc,{children:[(0,Lo.jsx)(kc,{children:"4"}),(0,Lo.jsx)(Ec,{children:"\u0448\u0442"})]})]})}const Tc=n.p+"static/media/mirror.02cc66d4affa479960ca.png",Oc=n.p+"static/media/mainLamp.84a59bebc226d7bc39f2.png",Lc=n.p+"static/media/mainChair.be5ee75688c39d7b9d50.png",Dc=n.p+"static/media/mainTable.8b694cc009a4758892f8.png",Fc=n.p+"static/media/mirrorCategory1.3e2c5dceff4e1c184de2.png",Mc=n.p+"static/media/mirror2.ccac0dca99e620a33fdf.png",Ic=n.p+"static/media/mirror3.e92c414ddd62b62315f6.png",Bc=n.p+"static/media/mirror4.a7e03c49a916bdde5216.png",Hc=n.p+"static/media/mirror5.a5d26ba15e4eed3a8e34.png",Uc=n.p+"static/media/categoryLamp1.e24e45ee4a54cb5a60b8.png",Wc=n.p+"static/media/categoryLamp2.0ba6b2bc48faed5f5eaf.png",$c=n.p+"static/media/categoryLamp3.371be77e2010c4d61076.png",Vc=n.p+"static/media/categoryLamp4.dde1776dd544a3143e60.png",Kc=n.p+"static/media/categoryLamp5.25f0654b083dd0eaa554.png",Qc=n.p+"static/media/chair1.9e20bb8d5df24448ba8e.png",qc=n.p+"static/media/chair22.d7b97846f84272e0f60a.png",Yc=n.p+"static/media/chair3.f1956a4df2204141c27d.png",Zc=n.p+"static/media/chair4.4888835d89b7403188ec.png",Gc=n.p+"static/media/chair5.80fe22ab8034f3a8dda7.png",Xc=n.p+"static/media/table1.889b8645492e804fc672.png",Jc=n.p+"static/media/table22.9e8b33daefe2e819f4e3.png",eu=n.p+"static/media/table3.ac8b2e802be674d954da.png",tu=n.p+"static/media/table4.9a0368f0f10abd95e587.png",nu=n.p+"static/media/table5.17aebd93ab2881cd6085.png",ru=[{id:0,count:1,background:"#A5D4FF",image:Fc,name:"KRISTIN",category:"\u0417\u0435\u043a\u0440\u0430\u043b\u0430 \u043d\u0430\u043f\u043e\u043b\u044c\u043d\u044b\u0435",price:"150 000"},{id:1,count:1,background:"#F0B3EA",image:Mc,name:"ARLENE",category:"\u0417\u0435\u043a\u0440\u0430\u043b\u0430 \u043d\u0430\u043f\u043e\u043b\u044c\u043d\u044b\u0435",price:"150 000"},{id:2,count:1,background:"#8ECDFA",image:Ic,name:"COLLENE",category:"\u0417\u0435\u043a\u0440\u0430\u043b\u0430 \u043d\u0430\u043f\u043e\u043b\u044c\u043d\u044b\u0435",price:"150 000"},{id:3,count:1,background:"#FBE4CA",image:Bc,name:"COPPELIA",category:"\u0417\u0435\u043a\u0440\u0430\u043b\u0430 \u043d\u0430\u043f\u043e\u043b\u044c\u043d\u044b\u0435",price:"150 000"},{id:4,count:1,background:"#F0B5FA",image:Hc,name:"ARTEMIDE",category:"\u0417\u0435\u043a\u0440\u0430\u043b\u0430 \u043d\u0430\u043f\u043e\u043b\u044c\u043d\u044b\u0435",price:"150 000"}],au=[{id:5,count:1,background:"#FFC4A5",image:Uc,name:"AUBREY",category:"\u041b\u0430\u043c\u043f\u0430 \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u0430\u044f",price:"150 000"},{id:6,count:1,background:"#88E379",image:Wc,name:"LESLIE",category:"\u041b\u0430\u043c\u043f\u0430 \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u0430\u044f",price:"150 000"},{id:7,count:1,background:"#FA8EEF",image:$c,name:"DARRELL",category:"\u041b\u0430\u043c\u043f\u0430 \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u0430\u044f",price:"150 000"},{id:8,count:1,background:"#29D0D9",image:Vc,name:"COPPELIA",category:"\u041b\u0430\u043c\u043f\u0430 \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u0430\u044f",price:"150 000"},{id:9,count:1,background:"#89D5FF",image:Kc,name:"ARTEMIDE",category:"\u041b\u0430\u043c\u043f\u0430 \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043d\u0430\u044f",price:"150 000"}],iu=[{id:10,count:1,background:"#FBE4CA",image:Qc,name:"KATHRYN",category:"\u0421\u0442\u0443\u043b",price:"150 000"},{id:11,count:1,background:"#F0B3EA",image:qc,name:"WENDY",category:"\u0421\u0442\u0443\u043b",price:"150 000"},{id:12,count:1,background:"#F18EFA",image:Yc,name:"JUDITH",category:"\u0421\u0442\u0443\u043b",price:"150 000"},{id:13,count:1,background:"#5C544A",image:Zc,name:"JANE",category:"\u0421\u0442\u0443\u043b",price:"150 000"},{id:14,count:1,background:"#F0B5FA",image:Gc,name:"DARLENE",category:"\u0421\u0442\u0443\u043b",price:"150 000"}],ou=[{id:15,count:1,background:"#FBE4CA",image:Xc,name:"KATHRYN",category:"\u0421\u0442\u043e\u043b",price:"150 000"},{id:16,count:1,background:"#F0B3EA",image:Jc,name:"WENDY",category:"\u0421\u0442\u043e\u043b",price:"150 000"},{id:17,count:1,background:"#F18EFA",image:eu,name:"JUDITH",category:"\u0421\u0442\u043e\u043b",price:"150 000"},{id:18,count:1,background:"#5C544A",image:tu,name:"JANE",category:"\u0421\u0442\u043e\u043b",price:"150 000"},{id:19,count:1,background:"#F0B5FA",image:nu,name:"DARLENE",category:"\u0421\u0442\u043e\u043b",price:"150 000"}],lu=Fa.div`
  position: relative;
  margin: 10px 0px 0px 0px;
  flex: 1;
`,su=Fa.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,cu=Fa.div`
  position: absolute;
  box-sizing: border-box;
  top: 7px;
  left: 2px;
  width: 20px;
  height: 20px;
  border: 3px solid white;
  background: ${e=>e.background};
  border-radius: 50%;
`,uu=Fa.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px 0px 0px 0px;
`,du=Fa.h2`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 28px;
  line-height: 35.5px;
  margin: 0px;
  color: white;
`,fu=Fa.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 23px;
  margin: 0px;
  color: white;
  margin-bottom: 19px;
`,pu=Fa.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,hu=Fa.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 28px;
  line-height: 26.6px;
  margin: 0px;
  color: white;
`,mu=Fa.p`
  font-family: Euclid Circular A;
  font-weight: 400;
  font-size: 20px;
  line-height: 15.36px;
  margin: 0px;
  color: white;
`,gu=Fa.button`
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
`,xu=Fa.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin: 0px;
  color: white;
  margin-left: 11px;
`;function vu(e){let{image:t,background:n,name:r,category:a,price:i,onClick:o}=e;return(0,Lo.jsxs)(lu,{children:[(0,Lo.jsx)(cu,{background:n}),(0,Lo.jsx)(su,{children:(0,Lo.jsx)("img",{src:t,alt:"product"})}),(0,Lo.jsxs)(uu,{children:[(0,Lo.jsx)(du,{children:r}),(0,Lo.jsx)(fu,{children:a}),(0,Lo.jsx)("div",{style:{border:"2px solid #D9FF5A",width:"100%",marginBottom:"28px"}}),(0,Lo.jsxs)(pu,{children:[(0,Lo.jsxs)("div",{style:{display:"flex",width:95,justifyContent:"space-between"},children:[(0,Lo.jsx)(hu,{children:i}),(0,Lo.jsx)(mu,{children:"\u20bd"})]}),(0,Lo.jsxs)(gu,{onClick:o,children:[(0,Lo.jsx)("svg",{width:"21",height:"22",viewBox:"0 0 21 22",fill:"#D9FF5A",xmlns:"http://www.w3.org/2000/svg",children:(0,Lo.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.71513 2.69L3.51817 5.14C3.47877 5.61 3.84315 6 4.30601 6H19.3833C19.7969 6 20.1416 5.68 20.1712 5.26C20.2992 3.49 18.9697 2.05 17.2266 2.05H5.12339C5.02491 1.61 4.82795 1.19 4.52266 0.84C4.03026 0.31 3.3409 0 2.63184 0H0.918289C0.51452 0 0.179688 0.34 0.179688 0.75C0.179688 1.16 0.51452 1.5 0.918289 1.5H2.63184C2.93713 1.5 3.22273 1.63 3.42953 1.85C3.63634 2.08 3.73482 2.38 3.71513 2.69ZM9.17969 20C9.17969 21.1046 8.28426 22 7.17969 22C6.07512 22 5.17969 21.1046 5.17969 20C5.17969 18.8954 6.07512 18 7.17969 18C8.28426 18 9.17969 18.8954 9.17969 20ZM17.1797 20C17.1797 21.1046 16.2843 22 15.1797 22C14.0751 22 13.1797 21.1046 13.1797 20C13.1797 18.8954 14.0751 18 15.1797 18C16.2843 18 17.1797 18.8954 17.1797 20ZM4.32925 8H19.4005C19.8623 8 20.216 8.37818 20.1767 8.82424L19.8525 13.3527C19.7444 14.8073 18.4475 16 16.9738 16H6.04859C4.36854 16 3.05202 14.5842 3.18956 12.9261L3.54326 8.70788C3.58256 8.3103 3.9166 8 4.32925 8Z",fill:"#D9FF5A"})}),(0,Lo.jsx)(xu,{className:"button-text",children:"\u041a\u0443\u043f\u0438\u0442\u044c"})]})]})]})]})}const yu=Fa.input`
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
`,wu=Fa.div`
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
`,bu=Fa.input`
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
`,Su=Fa.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  color: white;
  font-size: 18px;
  line-height: 27px;
  margin: 0px;
  margin-bottom: 20px;
`;function Cu(e){let{min:n,max:r}=e;const[a,i]=(0,t.useState)(n),[o,l]=(0,t.useState)(r),[s,c]=(0,t.useState)(0),[u,d]=(0,t.useState)(100),f=(0,t.useCallback)((e=>Math.round((e-n)/(r-n)*100)),[n,r]);function p(e){let t=Math.min(e.target.value,o-1e3);t<n&&(t=n),i(t)}function h(e){let t=Math.max(e.target.value,a+1e3);t>r&&(t=r),l(t)}return(0,t.useEffect)((()=>{const e=f(a),t=f(o);c(e),d(t-e)}),[a,f]),(0,t.useEffect)((()=>{const e=f(a),t=f(o);d(t-e)}),[o,f]),(0,Lo.jsxs)("div",{style:{padding:"20px 30px 30px 30px"},children:[(0,Lo.jsx)(Su,{children:"\u0426\u0435\u043d\u0430"}),(0,Lo.jsxs)("div",{style:{marginBottom:30},children:[(0,Lo.jsx)(bu,{type:"number",value:a,onChange:e=>p(e)}),(0,Lo.jsx)(bu,{style:{marginLeft:14},type:"number",value:o,onChange:e=>h(e)})]}),(0,Lo.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,Lo.jsx)(yu,{className:"thumb-left",type:"range",min:n,max:r,value:a,step:"1000",onChange:e=>{p(e)}}),(0,Lo.jsx)(yu,{className:"thumb-right",type:"range",min:n,max:r,step:"1000",value:o,onChange:e=>{h(e)}}),(0,Lo.jsxs)(wu,{children:[(0,Lo.jsx)("div",{className:"slider-track"}),(0,Lo.jsx)("div",{style:{left:`${s}%`,width:`${u}%`},className:"slider-range"})]})]})]})}const ku=Fa.label`
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
`;function Eu(e){let{name:t,count:n}=e;return(0,Lo.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,Lo.jsxs)(ku,{className:"container",children:[t,(0,Lo.jsx)("input",{type:"checkbox"}),(0,Lo.jsx)("span",{className:"checkmark"}),(0,Lo.jsx)("span",{style:{color:"#ffffff69"},children:` (${n})`})]})})}const ju=Fa.div`
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
`,_u=Fa.button`
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
`,zu=Fa.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  color: white;
  transform: rotate(13deg);
  margin: 0px;
`,Au=Fa.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  color: white;
`,Pu=Fa.button`
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
`,Nu=Fa.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  color: white;
  margin: 0px;
  margin-left: 11px;
`,Ru=Fa.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: white;
  margin: 0px;
  margin-bottom: 16px;
`,Tu=Fa.div`
  background: #cbb6ff;
  border-radius: 40px;
  width: 290px;
  padding: 20px 0px 24px 30px;
`,Ou=Fa.div`
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 2;
`;function Lu(e){let{productsArray:n,id:r}=e;const[a,i]=(0,t.useState)(!1),[o,l]=(0,t.useState)(n),s=Ga((e=>e.notification.notifications)),c=ci();return(0,Lo.jsxs)("div",{id:r,style:{display:"flex",flexDirection:"column",alignItems:"center",margin:"0px 20px 0px 20px"},children:[(0,Lo.jsxs)("div",{style:{maxWidth:1800,width:"100%",display:"flex",justifyContent:"space-between",margin:"63px 0px 77px 0px",position:"relative"},children:[(0,Lo.jsxs)(Pu,{onClick:e=>function(e){e.stopPropagation(),i(!a)}(e),children:[(0,Lo.jsx)("svg",{width:"23",height:"22",viewBox:"0 0 23 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Lo.jsx)("path",{d:"M20.1623 0H2.38455C2.08986 0 1.80725 0.116448 1.59887 0.323727C1.3905 0.531005 1.27344 0.812136 1.27344 1.10527V3.96793C1.27344 4.54598 1.5101 5.11409 1.92122 5.52304L7.9401 11.5103V19.8949C7.94032 20.0832 7.98885 20.2683 8.0811 20.4328C8.17335 20.5972 8.30627 20.7355 8.46726 20.8346C8.62826 20.9336 8.81201 20.9902 9.00111 20.9988C9.19021 21.0075 9.37841 20.968 9.54788 20.8841L13.9923 18.6736C14.369 18.4857 14.6068 18.1032 14.6068 17.6843V11.5103L20.6257 5.52304C21.0368 5.11409 21.2734 4.54598 21.2734 3.96793V1.10527C21.2734 0.812136 21.1564 0.531005 20.948 0.323727C20.7396 0.116448 20.457 0 20.1623 0Z",fill:"#D9FF5A"})}),(0,Lo.jsx)(Nu,{className:"filter-label",children:"\u0424\u0438\u043b\u044c\u0442\u0440\u044b"})]}),a?(0,Lo.jsxs)("div",{style:{position:"absolute",top:50,zIndex:3},children:[(0,Lo.jsx)("div",{style:{background:"#CBB6FF",borderRadius:40},children:(0,Lo.jsx)(Cu,{min:"0",max:"1000000"})}),(0,Lo.jsxs)(Tu,{children:[(0,Lo.jsx)(Ru,{children:"\u0426\u0432\u0435\u0442\u0430"}),(0,Lo.jsxs)("form",{children:[(0,Lo.jsx)(Eu,{name:"\u0417\u0435\u043b\u0435\u043d\u044b\u0439",count:"580"}),(0,Lo.jsx)(Eu,{name:"\u0421\u0438\u043d\u0438\u0439",count:"1296"}),(0,Lo.jsx)(Eu,{name:"\u041e\u0440\u0430\u043d\u0436\u0435\u0432\u044b\u0439",count:"2340"}),(0,Lo.jsx)(Eu,{name:"\u0420\u043e\u0437\u043e\u0432\u044b\u0439",count:"656"}),(0,Lo.jsx)(Eu,{name:"\u041b\u0430\u0432\u0430\u043d\u0434\u043e\u0432\u044b\u0439",count:"1"}),(0,Lo.jsx)(Eu,{name:"\u0413\u043e\u043b\u0443\u0431\u043e\u0439",count:"113"})]})]})]}):(0,Lo.jsx)(Lo.Fragment,{}),(0,Lo.jsx)(Au,{children:"20 \u041f\u041e\u0417\u0418\u0426\u0418\u0419 \u0412 \u0414\u0410\u041d\u041d\u041e\u0419 \u041a\u0410\u0422\u0415\u0413\u041e\u0420\u0418\u0418"})]}),(0,Lo.jsx)(ju,{children:o.map(((e,t)=>(0,Lo.jsx)(vu,{background:e.background,image:e.image,name:e.name,category:e.category,price:e.price,onClick:t=>{!function(e,t){e.stopPropagation(),c(Po(t));let n=Date.now().toString();c(Is({id:n})),setTimeout((()=>{c(Bs())}),3e3)}(t,e)}},t)))}),(0,Lo.jsxs)(_u,{onClick:e=>{!function(e){e.stopPropagation();let t=[...o];t.push(...n),l(t)}(e)},children:[(0,Lo.jsx)(zu,{className:"button-text",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0435\u0449\u0435"}),(0,Lo.jsxs)("svg",{style:{position:"absolute",transform:"rotate(13deg)",top:79,left:141},width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,Lo.jsx)("path",{d:"M18.1087 14L12.112 20L6.11523 14",stroke:"#D9FF5A",strokeWidth:"2",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,Lo.jsx)("path",{d:"M12.1133 4V21",stroke:"#D9FF5A",strokeWidth:"2",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),(0,Lo.jsx)(Ou,{children:s.length>3?(0,Lo.jsx)(Ks,{}):s.map((e=>(0,Lo.jsx)(Ws,{},e.id)))})]})}const Du=Fa.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`,Fu=Fa.h2`
  --font-size: 60px;
  --line-height: 76.08px;
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: var(--font-size);
  line-height: var(--line-height);
  color: white;
  margin: 0;

  @media (max-width: 1820px) {
    font-size: calc(var(--font-size) * 0.8);
    line-height: calc(var(--line-height) * 0.8);
  }
  @media (max-width: 1400px) {
    font-size: calc(var(--font-size) * 0.7);
    line-height: calc(var(--line-height) * 0.7);
  }
  @media (max-width: 1000px) {
    font-size: calc(var(--font-size) * 0.5);
    line-height: calc(var(--line-height) * 0.5);
  }
`,Mu=Fa.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 70px;

  @media (max-width: 1820px) {
    margin-bottom: 60px;
  }
`,Iu=Fa.div`
  max-width: 1800px;
  width: 100%;
  margin-top: 170px;
  position: relative;
`,Bu={first:!1,second:!1,third:!1,fourth:!1};function Hu(){const[e,n]=(0,t.useState)(Bu);return(0,Lo.jsxs)(Iu,{children:[(0,Lo.jsx)(Mu,{children:(0,Lo.jsx)(Fu,{children:"\u041a\u0410\u0422\u0415\u0413\u041e\u0420\u0418\u0418"})}),(0,Lo.jsxs)(Du,{children:[(0,Lo.jsx)(Rc,{cardName:"\u041d\u0410\u041f\u041e\u041b\u042c\u041d\u042b\u0415 \u0417\u0415\u0420\u041a\u0410\u041b\u0410",image:Tc,onClick:()=>{n({first:!0,second:!1,third:!1,fourth:!1}),document.getElementById("category").scrollIntoView({behavior:"smooth"})}}),(0,Lo.jsx)(Rc,{cardName:"\u0422\u041e\u0420\u0428\u0415\u0420\u042b \u0418 \u041b\u0410\u041c\u041f\u042b",image:Oc,onClick:()=>{n({first:!1,second:!0,third:!1,fourth:!1}),document.getElementById("category").scrollIntoView({behavior:"smooth"})}}),(0,Lo.jsx)(Rc,{cardName:"\u041a\u0420\u0415\u0421\u041b\u0410 \u0418 \u0421\u0422\u0423\u041b\u042c\u042f",image:Lc,onClick:()=>{n({first:!1,second:!1,third:!0,fourth:!1}),document.getElementById("category").scrollIntoView({behavior:"smooth"})}}),(0,Lo.jsx)(Rc,{cardName:"\u0421\u0422\u041e\u041b\u042b \u0418 \u0422\u0423\u041c\u0411\u042b",image:Dc,onClick:()=>{n({first:!1,second:!1,third:!1,fourth:!0}),document.getElementById("category").scrollIntoView({behavior:"smooth"})}})]}),e.first?(0,Lo.jsx)(Lu,{id:"category",productsArray:ru}):(0,Lo.jsx)("div",{style:{position:"absolute"},id:"category"}),e.second?(0,Lo.jsx)(Lu,{id:"category",productsArray:au}):(0,Lo.jsx)("div",{style:{position:"absolute"},id:"category"}),e.third?(0,Lo.jsx)(Lu,{id:"category",productsArray:iu}):(0,Lo.jsx)("div",{style:{position:"absolute"},id:"category"}),e.fourth?(0,Lo.jsx)(Lu,{id:"category",productsArray:ou}):(0,Lo.jsx)("div",{style:{position:"absolute"},id:"category"})]})}var Uu;function Wu(){return Wu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wu.apply(null,arguments)}function $u(e,n){let{title:r,titleId:a,...i}=e;return t.createElement("svg",Wu({width:21,height:22,viewBox:"0 0 21 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":a},i),r?t.createElement("title",{id:a},r):null,Uu||(Uu=t.createElement("path",{d:"M11.461 0.915624L11.834 10.2959L21.0072 12.2909L11.6272 12.6627L9.63329 21.8359L9.26034 12.4557L0.0871087 10.4606L9.46713 10.0888L11.461 0.915624Z",fill:"white"})))}const Vu=t.forwardRef($u),Ku=(n.p,"CREATING A GREAT ART"),Qu=Fa.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 40px;
  line-height: 38px;
  margin: 0;
  color: #ffffff;
`,qu=Fa.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 2169px;
  height: 72px;
  position: absolute;
`,Yu=Fa(Vu)`
  transform: rotate(-5deg);
`;function Zu(e){let{className:t}=e;return(0,Lo.jsxs)(qu,{className:t,children:[(0,Lo.jsx)(Qu,{children:Ku}),(0,Lo.jsx)(Yu,{}),(0,Lo.jsx)(Qu,{children:Ku}),(0,Lo.jsx)(Yu,{}),(0,Lo.jsx)(Qu,{children:Ku}),(0,Lo.jsx)(Yu,{}),(0,Lo.jsx)(Qu,{children:Ku}),(0,Lo.jsx)(Yu,{}),(0,Lo.jsx)(Qu,{children:Ku})]})}const Gu=Fa.div`
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

  .first-band {
    background: #cbb6ff;
    transform: rotate(5deg);
  }
  .second-band {
    background: #aeceff;
    transform: rotate(-2deg);
  }

  @media (max-width: 1600px) {
    margin-top: 158px;
  }
  @media (max-width: 1200px) {
    margin-top: 146px;
  }
  @media (max-width: 1000px) {
    .first-band {
      transform: rotate(9deg);
    }
    .second-band {
      transform: rotate(-4deg);
    }
  }
  @media (max-width: 800px) {
    margin-top: 136px;
  }
  @media (max-width: 600px) {
    margin-top: 124px;
  }
`;function Xu(){return(0,Lo.jsxs)(Gu,{children:[(0,Lo.jsx)(Zu,{className:"first-band"}),(0,Lo.jsx)(Zu,{className:"second-band"})]})}const Ju=Fa.div`
  --width: 283px;
  --height: 342px;
  --border-radius: 40px;
  width: var(--width);
  height: var(--height);
  border-radius: var(--border-radius);
  background-color: #cbb6ff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1820px) {
    width: calc(var(--width) * 0.9);
    height: calc(var(--height) * 0.9);
    border-radius: calc(var(--border-radius) * 0.9);
  }
  @media (max-width: 1650px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    border-radius: calc(var(--border-radius) * 0.8);
  }
  @media (max-width: 1500px) {
    width: calc(var(--width) * 0.7);
    height: calc(var(--height) * 0.7);
    border-radius: calc(var(--border-radius) * 0.7);
  }
  @media (max-width: 1320px) {
    width: calc(var(--width) * 0.6);
    height: calc(var(--height) * 0.6);
    border-radius: calc(var(--border-radius) * 0.6);
  }
  @media (max-width: 1150px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    border-radius: calc(var(--border-radius) * 0.8);
  }
  @media (max-width: 1000px) {
    width: var(--width);
    height: var(--height);
    border-radius: var(--border-radius);
  }
  @media (max-width: 620px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    border-radius: calc(var(--border-radius) * 0.8);
  }
  @media (max-width: 500px) {
    width: calc(var(--width) * 0.6);
    height: calc(var(--height) * 0.6);
    border-radius: calc(var(--border-radius) * 0.6);
  }
`,ed=Fa.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  color: #ffffff99;
  position: absolute;
  --top: 20px;
  --left: 20px;
  margin: 0;
  top: var(--top);
  left: var(--left);

  @media (max-width: 1820px) {
    top: calc(var(--top) * 0.9);
    left: calc(var(--left) * 0.9);
  }
  @media (max-width: 1650px) {
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 1500px) {
    top: calc(var(--top) * 0.7);
    left: calc(var(--left) * 0.7);
  }
  @media (max-width: 1320px) {
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
  }
  @media (max-width: 1000px) {
    top: var(--top);
    left: var(--left);
  }
  @media (max-width: 620px) {
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 500px) {
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
  }
`,td=Fa.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  --font-size: 18px;
  --line-height: 22.82px;
  color: #ffffff;
  text-align: right;
  position: absolute;
  --top: 20px;
  --left: 166px;
  margin: 0;
  width: 90px;
  top: var(--top);
  left: var(--left);
  font-size: var(--font-size);
  line-height: var(--line-height);

  @media (max-width: 1820px) {
    top: calc(var(--top) * 0.9);
    left: calc(var(--left) * 0.9);
  }
  @media (max-width: 1650px) {
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.75);
  }
  @media (max-width: 1500px) {
    top: calc(var(--top) * 0.7);
    left: calc(var(--left) * 0.55);
    font-size: calc(var(--font-size) * 0.8);
    line-height: calc(var(--line-height) * 0.8);
  }
  @media (max-width: 1320px) {
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.45);
    font-size: calc(var(--font-size) * 0.7);
    line-height: calc(var(--line-height) * 0.7);
    width: 75px;
  }
  @media (max-width: 1150px) {
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.75);
    width: 90px;
    font-size: var(--font-size);
    line-height: var(--line-height);
  }
  @media (max-width: 1000px) {
    top: var(--top);
    left: var(--left);
    font-size: var(--font-size);
    line-height: var(--line-height);
  }
  @media (max-width: 620px) {
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.75);
  }
  @media (max-width: 500px) {
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.45);
    font-size: calc(var(--font-size) * 0.7);
    line-height: calc(var(--line-height) * 0.7);
    width: 75px;
  }
`,nd=Fa.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  --font-size: 28px;
  --line-height: 35.5px;
  color: #ffffff;
  position: absolute;
  --top: 92px;
  --left: 25px;
  margin: 0;
  top: var(--top);
  left: var(--left);
  font-size: var(--font-size);
  line-height: var(--line-height);

  @media (max-width: 1820px) {
    top: calc(var(--top) * 0.9);
    left: calc(var(--left) * 0.9);
    font-size: calc(var(--font-size) * 0.9);
    line-height: calc(var(--line-height) * 0.9);
  }
  @media (max-width: 1650px) {
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
    font-size: calc(var(--font-size) * 0.8);
    line-height: calc(var(--line-height) * 0.8);
  }
  @media (max-width: 1500px) {
    top: calc(var(--top) * 0.7);
    left: calc(var(--left) * 0.7);
    font-size: calc(var(--font-size) * 0.7);
    line-height: calc(var(--line-height) * 0.7);
  }
  @media (max-width: 1320px) {
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
    font-size: calc(var(--font-size) * 0.6);
    line-height: calc(var(--line-height) * 0.6);
  }
  @media (max-width: 1150px) {
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
    font-size: calc(var(--font-size) * 0.8);
    line-height: calc(var(--line-height) * 0.8);
  }
  @media (max-width: 1000px) {
    top: var(--top);
    left: var(--left);
    font-size: var(--font-size);
    line-height: var(--line-height);
  }
  @media (max-width: 620px) {
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
    font-size: calc(var(--font-size) * 0.8);
    line-height: calc(var(--line-height) * 0.8);
  }
  @media (max-width: 500px) {
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
    font-size: calc(var(--font-size) * 0.6);
    line-height: calc(var(--line-height) * 0.6);
  }
`,rd=Fa.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  width: 82px;
  color: #ffffff;
  position: absolute;
  --top: 283px;
  --left: 25px;
  margin: 0;
  top: var(--top);
  left: var(--left);

  @media (max-width: 1820px) {
    top: calc(var(--top) * 0.9);
    left: calc(var(--left) * 0.9);
  }
  @media (max-width: 1650px) {
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 1500px) {
    top: calc(var(--top) * 0.7);
    left: calc(var(--left) * 0.7);
  }
  @media (max-width: 1320px) {
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
    font-size: 10px;
    line-height: 12px;
    width: 66px;
  }
  @media (max-width: 1150px) {
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
    font-size: 15px;
    line-height: 19.02px;
    width: 82px;
  }
  @media (max-width: 1000px) {
    top: var(--top);
    left: var(--left);
  }
  @media (max-width: 620px) {
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 500px) {
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
    font-size: 10px;
    line-height: 12px;
    width: 66px;
  }
`,ad=Fa.div`
  --width: 92px;
  --height: 77px;
  --top: 293px;
  --left: 129px;
  width: var(--width);
  height: var(--height);
  top: var(--top);
  left: var(--left);
  position: absolute;
  border: 2px solid #d9ff5a;
  border-radius: 50%;
  transform: rotate(-15deg);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #ffffff30;

  @media (max-width: 1820px) {
    width: calc(var(--width) * 0.9);
    height: calc(var(--height) * 0.9);
    top: calc(var(--top) * 0.9);
    left: calc(var(--left) * 0.9);
  }
  @media (max-width: 1650px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 1500px) {
    width: calc(var(--width) * 0.7);
    height: calc(var(--height) * 0.7);
    top: calc(var(--top) * 0.7);
    left: calc(var(--left) * 0.7);
  }
  @media (max-width: 1320px) {
    width: calc(var(--width) * 0.6);
    height: calc(var(--height) * 0.6);
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
  }
  @media (max-width: 1150px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 1000px) {
    width: var(--width);
    height: var(--height);
    top: var(--top);
    left: var(--left);
  }
  @media (max-width: 620px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 500px) {
    width: calc(var(--width) * 0.6);
    height: calc(var(--height) * 0.6);
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
  }
`,id=Fa.p`
  font-family: Floreste;
  font-weight: 400;
  --font-size: 40px;
  --line-height: 17px;
  margin: 0px;
  color: white;
  margin-top: 10px;
  font-size: var(--font-size);
  line-height: var(--line-height);

  @media (max-width: 1500px) {
    font-size: calc(var(--font-size) * 0.8);
    line-height: calc(var(--line-height) * 0.8);
  }
  @media (max-width: 1000px) {
    font-size: var(--font-size);
    line-height: var(--line-height);
  }
  @media (max-width: 620px) {
    font-size: calc(var(--font-size) * 0.8);
    line-height: calc(var(--line-height) * 0.8);
  }
`,od=Fa.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  --font-size: 15px;
  --line-height: 19.02px;
  margin: 0px;
  color: white;
  font-size: var(--font-size);
  line-height: var(--line-height);

  @media (max-width: 1500px) {
    font-size: calc(var(--font-size) * 0.8);
    line-height: calc(var(--line-height) * 0.8);
  }
  @media (max-width: 1000px) {
    font-size: var(--font-size);
    line-height: var(--line-height);
  }
  @media (max-width: 620px) {
    font-size: calc(var(--font-size) * 0.8);
    line-height: calc(var(--line-height) * 0.8);
  }
`,ld=Fa.div`
  display: flex;
  align-items: center;
  margin: 0px 10px 40px 10px;

  .top-space {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #ae97e8;
    position: absolute;
    top: -7px;
  }
  .bottom-space {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #ae97e8;
    position: absolute;
    top: 183px;
  }
  .bulkhead {
    width: 14px;
    height: 190px;
    background-color: #cbb6ff;
  }

  &:hover {
    cursor: pointer;

    .reading-time-text {
      color: #ae97e8;
    }
    .reading-time-container {
      background: #d9ff5a;
    }
  }

  @media (max-width: 1500px) {
    .bulkhead {
      height: 150px;
    }
    .bottom-space {
      top: 143px;
    }
  }
  @media (max-width: 1320px) {
    .bulkhead {
      height: 130px;
    }
    .bottom-space {
      top: 123px;
    }
  }
  @media (max-width: 1150px) {
    .bulkhead {
      height: 190px;
    }
    .bottom-space {
      top: 183px;
    }
  }
  @media (max-width: 500px) {
    .bulkhead {
      height: 130px;
    }
    .bottom-space {
      top: 123px;
    }
  }
`,sd=Fa.div`
  --height: 142px;
  --width: 133px;
  --top: 284px;
  --left: 113px;
  height: var(--height);
  width: var(--width);
  top: var(--top);
  left: var(--left);
  border-radius: 50%;
  position: absolute;
  background-color: #ae97e8;

  @media (max-width: 1820px) {
    width: calc(var(--width) * 0.9);
    height: calc(var(--height) * 0.9);
    top: calc(var(--top) * 0.9);
    left: calc(var(--left) * 0.9);
  }
  @media (max-width: 1650px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 1500px) {
    width: calc(var(--width) * 0.7);
    height: calc(var(--height) * 0.7);
    top: calc(var(--top) * 0.7);
    left: calc(var(--left) * 0.7);
  }
  @media (max-width: 1320px) {
    width: calc(var(--width) * 0.6);
    height: calc(var(--height) * 0.6);
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
  }
  @media (max-width: 1150px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 1000px) {
    height: var(--height);
    width: var(--width);
    top: var(--top);
    left: var(--left);
  }
  @media (max-width: 620px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 500px) {
    width: calc(var(--width) * 0.6);
    height: calc(var(--height) * 0.6);
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
  }
`,cd=Fa.div`
  --height: 12px;
  --width: 12px;
  --top: 332px;
  --left: 243px;
  height: var(--height);
  width: var(--width);
  top: var(--top);
  left: var(--left);
  position: absolute;
  background-color: #ae97e8;

  @media (max-width: 1820px) {
    width: calc(var(--width) * 0.9);
    height: calc(var(--height) * 0.9);
    top: calc(var(--top) * 0.9);
    left: calc(var(--left) * 0.9);
  }
  @media (max-width: 1650px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 1500px) {
    width: calc(var(--width) * 0.7);
    height: calc(var(--height) * 0.7);
    top: calc(var(--top) * 0.7);
    left: calc(var(--left) * 0.7);
  }
  @media (max-width: 1320px) {
    width: calc(var(--width) * 0.6);
    height: calc(var(--height) * 0.6);
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
  }
  @media (max-width: 1150px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 1000px) {
    height: var(--height);
    width: var(--width);
    top: var(--top);
    left: var(--left);
  }
  @media (max-width: 620px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 500px) {
    width: calc(var(--width) * 0.6);
    height: calc(var(--height) * 0.6);
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
  }
`,ud=Fa.div`
  --height: 18px;
  --width: 18px;
  --top: 322.7px;
  --left: 242.7px;
  height: var(--height);
  width: var(--width);
  top: var(--top);
  left: var(--left);
  border-radius: 50%;
  position: absolute;
  background-color: #cbb6ff;

  @media (max-width: 1820px) {
    width: calc(var(--width) * 0.9);
    height: calc(var(--height) * 0.9);
    top: calc(var(--top) * 0.9);
    left: calc(var(--left) * 0.9);
  }
  @media (max-width: 1650px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 1500px) {
    width: calc(var(--width) * 0.7);
    height: calc(var(--height) * 0.7);
    top: calc(var(--top) * 0.7);
    left: calc(var(--left) * 0.7);
  }
  @media (max-width: 1320px) {
    width: calc(var(--width) * 0.6);
    height: calc(var(--height) * 0.6);
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
  }
  @media (max-width: 1150px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 1000px) {
    height: var(--height);
    width: var(--width);
    top: var(--top);
    left: var(--left);
  }
  @media (max-width: 620px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 500px) {
    width: calc(var(--width) * 0.6);
    height: calc(var(--height) * 0.6);
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
  }
`,dd=Fa.div`
  --height: 8px;
  --width: 8px;
  --top: 335px;
  --left: 108px;
  height: var(--height);
  width: var(--width);
  top: var(--top);
  left: var(--left);
  position: absolute;
  background-color: #ae97e8;

  @media (max-width: 1820px) {
    width: calc(var(--width) * 0.9);
    height: calc(var(--height) * 0.9);
    top: calc(var(--top) * 0.9);
    left: calc(var(--left) * 0.9);
  }
  @media (max-width: 1650px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 1500px) {
    width: calc(var(--width) * 0.7);
    height: calc(var(--height) * 0.7);
    top: calc(var(--top) * 0.7);
    left: calc(var(--left) * 0.7);
  }
  @media (max-width: 1320px) {
    width: calc(var(--width) * 0.6);
    height: calc(var(--height) * 0.6);
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
  }
  @media (max-width: 1150px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 1000px) {
    height: var(--height);
    width: var(--width);
    top: var(--top);
    left: var(--left);
  }
  @media (max-width: 620px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 500px) {
    width: calc(var(--width) * 0.6);
    height: calc(var(--height) * 0.6);
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
  }
`,fd=Fa.div`
  --height: 18px;
  --width: 18px;
  --top: 324px;
  --left: 97.8px;
  height: var(--height);
  width: var(--width);
  top: var(--top);
  left: var(--left);
  border-radius: 50%;
  position: absolute;
  background-color: #cbb6ff;

  @media (max-width: 1820px) {
    width: calc(var(--width) * 0.9);
    height: calc(var(--height) * 0.9);
    top: calc(var(--top) * 0.9);
    left: calc(var(--left) * 0.9);
  }
  @media (max-width: 1650px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 1500px) {
    width: calc(var(--width) * 0.7);
    height: calc(var(--height) * 0.7);
    top: calc(var(--top) * 0.7);
    left: calc(var(--left) * 0.7);
  }
  @media (max-width: 1320px) {
    width: calc(var(--width) * 0.6);
    height: calc(var(--height) * 0.6);
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
  }
  @media (max-width: 1150px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 1000px) {
    height: var(--height);
    width: var(--width);
    top: var(--top);
    left: var(--left);
  }
  @media (max-width: 620px) {
    width: calc(var(--width) * 0.8);
    height: calc(var(--height) * 0.8);
    top: calc(var(--top) * 0.8);
    left: calc(var(--left) * 0.8);
  }
  @media (max-width: 500px) {
    width: calc(var(--width) * 0.6);
    height: calc(var(--height) * 0.6);
    top: calc(var(--top) * 0.6);
    left: calc(var(--left) * 0.6);
  }
`;function pd(e){let{number:t,author:n,header:r,date:a,time:i,image:o}=e;return(0,Lo.jsxs)(ld,{children:[(0,Lo.jsxs)(Ju,{children:[(0,Lo.jsx)(ed,{children:t}),(0,Lo.jsx)(td,{children:n}),(0,Lo.jsx)(nd,{children:r}),(0,Lo.jsx)(rd,{children:a}),(0,Lo.jsx)(sd,{}),(0,Lo.jsx)(cd,{}),(0,Lo.jsx)(ud,{}),(0,Lo.jsx)(dd,{}),(0,Lo.jsx)(fd,{}),(0,Lo.jsxs)(ad,{className:"reading-time-container",children:[(0,Lo.jsx)(id,{className:"reading-time-text",children:"3"}),(0,Lo.jsx)(od,{className:"reading-time-text",children:"\u043c\u0438\u043d"})]})]}),(0,Lo.jsxs)("div",{style:{position:"relative"},children:[(0,Lo.jsx)("div",{className:"top-space"}),(0,Lo.jsx)("div",{className:"bulkhead"}),(0,Lo.jsx)("div",{className:"bottom-space"})]}),(0,Lo.jsx)(Ju,{children:(0,Lo.jsx)("img",{style:{borderRadius:"28px",height:"93%"},src:o,alt:"paperImage"})})]})}const hd=n.p+"static/media/modern-sofa.d90522b42a12bcddeb9d.png",md=n.p+"static/media/chandelier.cbcdef145ec177529249.png",gd=n.p+"static/media/modern-wardrobe.7f318d094de94805a356.png",xd=Fa.h3`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 60px;
  line-height: 76.08px;
  color: #ffffff;
  margin: 0;
  margin-left: 10px;

  @media (max-width: 1500px) {
    font-size: 50px;
    line-height: 65px;
  }
  @media (max-width: 1200px) {
    font-size: 40px;
    line-height: 55px;
  }
  @media (max-width: 1000px) {
    font-size: 30px;
    line-height: 45px;
  }
  @media (max-width: 600px) {
    font-size: 23px;
    line-height: 30px;
  }
`,vd=Fa.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 243px;
  margin: 0px 10px 0px 10px;

  @media (max-width: 1500px) {
    width: 210px;
  }
  @media (max-width: 1200px) {
    width: 180px;
  }
  @media (max-width: 1000px) {
    width: 150px;
  }
  @media (max-width: 600px) {
    width: 120px;
  }
`,yd=Fa.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 189px;
  margin: 0px 10px 0px 10px;

  .line {
    width: 63px;
    height: 4px;
    background-color: #cbb6ff;
    margin: 0px 5px 0px 5px;
  }

  @media (max-width: 1500px) {
    width: 170px;
    .line {
      width: 56px;
    }
  }
  @media (max-width: 1200px) {
    width: 151px;
    .line {
      width: 49px;
    }
  }
  @media (max-width: 1000px) {
    width: 132px;
    .line {
      width: 42px;
    }
  }
  @media (max-width: 600px) {
    width: 112px;
    .line {
      width: 36px;
      background-color: #ffffff;
    }
  }
`,wd=Fa.p`
  margin: 0;
  font-family: Floreste;
  font-weight: 400;
  font-size: 40px;
  line-height: 38px;
  color: #ffffff;
  margin-top: 10px;

  @media (max-width: 1500px) {
    font-size: 36px;
    line-height: 34px;
  }
  @media (max-width: 1200px) {
    font-size: 32px;
    line-height: 30px;
  }
  @media (max-width: 1000px) {
    font-size: 28px;
    line-height: 26px;
  }
  @media (max-width: 600px) {
    font-size: 24px;
    line-height: 22px;
  }
`,bd=Fa.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Sd=Fa.div`
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 1500px) {
    margin-top: 60px;
  }
  @media (max-width: 1200px) {
    margin-top: 50px;
  }
  @media (max-width: 1000px) {
    margin-top: 40px;
  }
  @media (max-width: 600px) {
    margin-top: 35px;
  }
`,Cd=Fa.div`
  max-width: 1800px;
  width: 100%;
  margin-top: 169px;

  @media (max-width: 1500px) {
    margin-top: 150px;
  }
  @media (max-width: 1200px) {
    margin-top: 140px;
  }
  @media (max-width: 1000px) {
    margin-top: 130px;
  }
  @media (max-width: 600px) {
    margin-top: 120px;
  }
`;function kd(e){let{id:t}=e;return(0,Lo.jsxs)(Cd,{id:t,children:[(0,Lo.jsxs)(bd,{children:[(0,Lo.jsxs)(vd,{children:[(0,Lo.jsxs)("div",{style:{width:35,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,Lo.jsx)("div",{style:{width:7,height:7,borderRadius:"50%",backgroundColor:"#FFFFFF"}}),(0,Lo.jsx)("div",{style:{width:7,height:7,borderRadius:"50%",backgroundColor:"#FFFFFF4D"}}),(0,Lo.jsx)("div",{style:{width:7,height:7,borderRadius:"50%",backgroundColor:"#FFFFFF4D"}})]}),(0,Lo.jsx)(xd,{children:"\u0411\u041b\u041e\u0413"})]}),(0,Lo.jsxs)(yd,{children:[(0,Lo.jsx)(wd,{children:"02"}),(0,Lo.jsx)("div",{className:"line"}),(0,Lo.jsx)(wd,{children:"04"})]})]}),(0,Lo.jsxs)(Sd,{children:[(0,Lo.jsx)(pd,{number:"01",author:"Laura Busche",header:"\u041d\u041e\u0412\u0410\u042f \u041a\u041e\u041b\u041b\u0415\u041a\u0426\u0418\u042f \u041a\u0420\u0415\u0421\u0415\u041b",date:"14 \u042f\u043d\u0432\u0430\u0440\u044f 2023",image:hd}),(0,Lo.jsx)(pd,{number:"02",author:"Laura Busche",header:"\u0421\u0412\u0415\u0422\u041e\u0412\u041e\u0419 \u0414\u0418\u0417\u0410\u0419\u041d \u0412 \u0418\u041d\u0422\u0415\u0420\u042c\u0415\u0420\u0415",date:"14 \u042f\u043d\u0432\u0430\u0440\u044f 2023",image:md}),(0,Lo.jsx)(pd,{number:"03",author:"Laura Busche",header:"\u041a\u0410\u041a \u0412\u042b\u0411\u0420\u0410\u0422\u042c \u0428\u041a\u0410\u0424 \u0412 \u0421\u041f\u0410\u041b\u042c\u041d\u042e",date:"14 \u042f\u043d\u0432\u0430\u0440\u044f 2023",image:gd})]})]})}const Ed=Fa.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 129px;
  margin-top: 170px;
  max-width: 1797px;
  width: 100%;
`,jd=Fa.p`
  font-family: Gilroy;
  font-weight: 500;
  font-size: 18px;
  line-height: 21.19px;
  color: #ffffff;
  margin: 0px 10px 0px 10px;
`,_d=Fa.p`
  font-family: Gilroy;
  font-weight: 500;
  font-size: 18px;
  line-height: 21.19px;
  color: #ffffff;
  margin: 0px 10px 0px 10px;
`;function zd(){return(0,Lo.jsxs)(Ed,{children:[(0,Lo.jsx)(jd,{children:"@2023"}),(0,Lo.jsx)(_d,{children:"\u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b"})]})}const Ad=Fa.div`
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
`,Pd=Fa.p`
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
`,Nd=Fa.p`
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
`,Rd=Fa.img`
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
`,Td=Fa.div`
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
`;function Od(){return(0,Lo.jsxs)(Ad,{children:[(0,Lo.jsxs)("div",{style:{position:"relative"},children:[(0,Lo.jsx)(Rd,{className:"lamp1",src:$c,alt:"lamp"}),(0,Lo.jsx)(Rd,{className:"lamp2",src:Uc,alt:"lamp"}),(0,Lo.jsx)(Rd,{className:"lamp3",src:ys,alt:"lamp"}),(0,Lo.jsx)(Rd,{className:"lamp4",src:Vc,alt:"lamp"}),(0,Lo.jsx)(Rd,{className:"lamp5",src:Wc,alt:"lamp"})]}),(0,Lo.jsxs)(Td,{children:[(0,Lo.jsx)(Nd,{children:"\u0412\u0410\u0428 \u0417\u0410\u041a\u0410\u0417 \u041e\u0424\u041e\u0420\u041c\u041b\u0415\u041d"}),(0,Lo.jsx)(Nd,{className:"gratitude",children:"\u0421\u041f\u0410\u0421\u0418\u0411\u041e \u0417\u0410 \u0417\u0410\u041a\u0410\u0417"})]}),(0,Lo.jsxs)("div",{style:{display:"flex"},children:[(0,Lo.jsx)(Pd,{children:"THANK YOU"}),(0,Lo.jsx)(Pd,{children:"THANK YOU"}),(0,Lo.jsx)(Pd,{style:{marginRight:0},children:"THANK YOU"})]})]})}const Ld=Fa.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  max-width: 1920px;
  width: 100%;
  align-items: center;
`;function Dd(){return(0,Lo.jsxs)(Ld,{children:[(0,Lo.jsx)(vc,{}),(0,Lo.jsx)(Hu,{}),(0,Lo.jsx)(Xu,{}),(0,Lo.jsx)(kd,{id:"blog"}),(0,Lo.jsx)(zd,{})]})}const Fd=Fa.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
`,Md=Fa.div`
  margin-bottom: 22px;
  display: flex;
  justify-content: space-between;
`,Id=Fa.div`
  width: 11px;
  height: 11px;
  border: 3px solid white;
  border-radius: 50%;
  margin-right: 12px;
`,Bd=Fa.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 25.36px;
  color: #ffffff;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 15px;
    line-height: 20px;
  }
`,Hd=Fa.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.82px;
  color: #ffffff;
  margin: 0;
`,Ud=Fa.div`
  max-width: 350px;
  width: 100%;
  margin-right: 10px;
`,Wd=Fa.div`
  display: flex;
  justify-content: space-between;
  width: 95px;
`,$d=Fa.p`
  font-family: Floreste;
  font-size: 28px;
  font-weight: 400;
  line-height: 26.6px;
  color: white;
  margin: 0;
`,Vd=Fa.p`
  font-family: Euclid Circular A;
  font-size: 20px;
  font-weight: 400;
  line-height: 16.36px;
  color: white;
  margin: 0;

  &.total-currency {
    transform: rotate(13deg);
  }
`,Kd=Fa.div`
  background: #3320652e;
  border-radius: 30px;
  padding: 48px;
  margin: auto;
  margin-right: 20px;
  max-width: 540px;
  width: 100%;

  @media (max-width: 1400px) {
    margin: 20px;
  }
  @media (max-width: 600px) {
    padding: 32px;
  }
  @media (max-width: 500px) {
    padding: 24px;
  }
`,Qd=Fa.div`
  max-width: 1920px;
  width: 100%;
  position: relative;
  top: 193px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .button-after-order {
    display: none;
  }

  @media (max-width: 1200px) {
    top: 120px;

    .button-after-order {
      display: inline-block;
    }
    .button-inside-form {
      display: none;
    }
  }
`,qd=Fa.form`
  height: 358px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1200px) {
    height: 150px;
  }
`,Yd=Fa.button`
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
`,Zd=Fa.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: white;
  margin: 0;
  transform: rotate(6deg);
`,Gd=Fa.h1`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 60px;
  line-height: 76.08px;
  color: white;
  margin: 0px 0px 70px 0px;
  text-wrap: nowrap;

  @media (max-width: 1400px) {
    font-size: 55px;
    line-height: 71px;
    margin: 0px 0px 60px 0px;
  }
  @media (max-width: 1300px) {
    font-size: 50px;
    line-height: 65px;
    margin: 0px 0px 50px 0px;
  }
  @media (max-width: 1200px) {
    margin: 0px 0px 30px 0px;
  }
  @media (max-width: 600px) {
    font-size: 40px;
    line-height: 45px;
    margin: 0px 0px 20px 0px;
  }
  @media (max-width: 500px) {
    font-size: 35px;
    line-height: 40px;
    margin: 0px 0px 20px 0px;
  }
`,Xd=Fa.h2`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 15px;
  line-height: 19.02px;
  color: white;
  margin: 0px;
  margin-bottom: 38px;
`,Jd=Fa.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 500px) {
    margin-bottom: 10px;
  }
`,ef=Fa.p`
  font-family: Euclid Circular A;
  font-weight: 500;
  font-size: 20px;
  line-height: 25.36px;
  color: white;
  margin: 0px;
`,tf=Fa.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 40px;
  line-height: 38px;
  color: white;
  margin: 0px;
  transform: rotate(13deg);
  padding-right: 10px;

  @media (max-width: 600px) {
    font-size: 35px;
    line-height: 33px;
  }
`,nf=Fa.div`
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
`,rf=Fa.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(250, 143, 239);
  border-radius: 0.75rem;
`,af=Fa.p`
  font-family: Floreste;
  font-weight: 400;
  font-size: 75px;
  line-height: 75px;
  color: white;
  margin: 20px;
  text-align: center;
`,of=Fa.p`
  margin: 0px 20px 20px 20px;
  flex: 1;
  max-width: 882px;
`,lf=Fa.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 237px;
  height: 111px;
  border-radius: 50%;
  border: 2px solid #d9ff5a;
  background: #ffffff30;
  transform: rotate(-13deg);

  @media (max-width: 600px) {
    width: 189px;
    height: 89px;
  }
`,sf=Fa.img`
  height: 200px;
  margin-right: 20px;

  @media (max-width: 600px) {
    height: 160px;
  }
  @media (max-width: 500px) {
    height: 120px;
  }
`;function cf(){const[e,n]=(0,t.useState)(!1),[r,a]=(0,t.useState)(""),[i,o]=(0,t.useState)(""),[l,s]=(0,t.useState)(""),c=Ga((e=>e.cart.itemsInCart)),u=ci();function d(e){e.stopPropagation(),e.preventDefault(),console.log(r,i,l),n(!0)}if(0===c.length)return(0,Lo.jsx)(nf,{children:(0,Lo.jsx)(rf,{children:(0,Lo.jsxs)(af,{children:["\u0412 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0412\u0430\u0448\u0430 \u043a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 ",(0,Lo.jsx)(Ft,{to:"/",children:"\u0441\u044e\u0434\u0430"}),", \u0447\u0442\u043e\u0431\u044b \u0432\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"]})})});let f=0;for(let t=0;t<c.length;t++){let e=Number(c[t].price.replaceAll(" ",""));f+=c[t].count*e}return(0,Lo.jsx)(Lo.Fragment,{children:e?(0,Lo.jsx)(Od,{}):(0,Lo.jsxs)(Qd,{children:[(0,Lo.jsxs)(of,{children:[(0,Lo.jsx)(Gd,{children:"\u041e\u0424\u041e\u0420\u041c\u0418\u0422\u042c \u0417\u0410\u041a\u0410\u0417"}),(0,Lo.jsxs)(qd,{onSubmit:e=>d(e),children:[(0,Lo.jsx)(Cl,{name:"name",placeholder:"\u0418\u041c\u042f",onChange:e=>a(e.target.value)}),(0,Lo.jsx)(Cl,{name:"address",placeholder:"\u0410\u0414\u0420\u0415\u0421",onChange:e=>o(e.target.value)}),(0,Lo.jsx)(Cl,{name:"phoneNumber",placeholder:"\u0422\u0415\u041b\u0415\u0424\u041e\u041d",onChange:e=>s(e.target.value)}),(0,Lo.jsx)(Yd,{className:"button-inside-form",type:"submit",children:(0,Lo.jsx)(Zd,{className:"button-text",children:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c"})})]})]}),(0,Lo.jsxs)(Kd,{children:[(0,Lo.jsx)(Xd,{children:"\u0421\u041e\u0421\u0422\u0410\u0412 \u0417\u0410\u041a\u0410\u0417\u0410"}),(0,Lo.jsx)("div",{style:{maxHeight:750,overflowY:"scroll",marginBottom:20},children:c.map((e=>(0,Lo.jsxs)(Fd,{children:[(0,Lo.jsx)(sf,{src:e.image,alt:"itemImage"}),(0,Lo.jsxs)(Ud,{children:[(0,Lo.jsxs)(Md,{children:[(0,Lo.jsxs)("div",{children:[(0,Lo.jsxs)("div",{style:{display:"flex",alignItems:"center",marginBottom:13},children:[(0,Lo.jsx)(Id,{style:{backgroundColor:`${e.background}`}}),(0,Lo.jsx)(Bd,{children:e.name})]}),(0,Lo.jsx)(Hd,{children:e.category})]}),(0,Lo.jsx)("input",{style:{outline:"none"},type:"image",src:Ma,alt:"trash",onClick:t=>{t.stopPropagation(),u(No(e))}})]}),(0,Lo.jsx)("div",{style:{border:"2px solid #D9FF5A"}}),(0,Lo.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:31},children:[(0,Lo.jsxs)(Wd,{children:[(0,Lo.jsx)($d,{children:e.price}),(0,Lo.jsx)(Vd,{children:"\u20bd"})]}),(0,Lo.jsxs)($d,{children:[e.count," \u0448\u0442."]})]})]})]},e.id)))}),(0,Lo.jsxs)(Jd,{children:[(0,Lo.jsx)(ef,{children:"\u0418\u0422\u041e\u0413\u041e:"}),(0,Lo.jsxs)(lf,{children:[(0,Lo.jsx)(tf,{children:f}),(0,Lo.jsx)(Vd,{className:"total-currency",children:"\u20bd"})]})]}),(0,Lo.jsx)(Yd,{className:"button-after-order",type:"submit",onClick:e=>d(e),children:(0,Lo.jsx)(Zd,{className:"button-text",children:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c"})})]})]})})}function uf(){const e=gt();return console.error(e),(0,Lo.jsxs)("div",{id:"error-page",children:[(0,Lo.jsx)("h1",{children:"Oops!"}),(0,Lo.jsx)("p",{children:"Sorry, an unexpected error has occurred."}),(0,Lo.jsx)("p",{children:(0,Lo.jsx)("i",{children:e.statusText||e.message})})]})}const df=function(e){const t=function(e){const{thunk:t=!0,immutableCheck:n=!0,serializableCheck:r=!0,actionCreatorCheck:a=!0}=e??{};let i=new po;return t&&(function(e){return"boolean"===typeof e}(t)?i.push(yi):i.push(wi(t.extraArgument))),i},{reducer:n,middleware:r,devTools:a=!0,preloadedState:i,enhancers:o}=e||{};let l,s;if("function"===typeof n)l=n;else{if(!hi(n))throw new Error(zo(1));l=gi(n)}s="function"===typeof r?r(t):t();let c=xi;a&&(c=uo({trace:!1,..."object"===typeof a&&a}));const u=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>(n,r)=>{const a=e(n,r);let i=()=>{throw new Error(ui(15))};const o={getState:a.getState,dispatch:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return i(e,...n)}},l=t.map((e=>e(o)));return i=xi(...l)(a.dispatch),{...a,dispatch:i}}}(...s),d=yo(u);return mi(l,i,c(..."function"===typeof o?o(d):d()))}({reducer:{cart:Oo,notification:Hs}}),ff=function(e,t){return re({basename:null==t?void 0:t.basename,future:bt({},null==t?void 0:t.future,{v7_prependBasename:!0}),history:(n={window:null==t?void 0:t.window},void 0===n&&(n={}),m((function(e,t){let{pathname:n="/",search:r="",hash:a=""}=h(e.location.hash.substr(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),f("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");r=-1===n?t:t.slice(0,n)}return r+"#"+("string"===typeof t?t:p(t))}),(function(e,t){u("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")}),n)),hydrationData:(null==t?void 0:t.hydrationData)||kt(),routes:e,mapRouteProperties:wt,unstable_dataStrategy:null==t?void 0:t.unstable_dataStrategy,unstable_patchRoutesOnNavigation:null==t?void 0:t.unstable_patchRoutesOnNavigation,window:null==t?void 0:t.window}).initialize();var n}([{element:(0,Lo.jsx)(vs,{}),errorElement:(0,Lo.jsx)(uf,{}),children:[{path:"/",element:(0,Lo.jsx)(Dd,{})},{path:"/order",element:(0,Lo.jsx)(cf,{})}]}]);const pf=function(){return(0,Lo.jsx)(ai,{store:df,children:(0,Lo.jsx)(Rt,{router:ff})})},hf=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,6453)).then((t=>{let{getCLS:n,getFID:r,getFCP:a,getLCP:i,getTTFB:o}=t;n(e),r(e),a(e),i(e),o(e)}))};a.createRoot(document.getElementById("root")).render((0,Lo.jsx)(t.StrictMode,{children:(0,Lo.jsx)(pf,{})})),hf()})()})();
//# sourceMappingURL=main.b9ac00a3.js.map