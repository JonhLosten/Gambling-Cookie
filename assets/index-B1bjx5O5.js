(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function I0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var B_={exports:{}},Gu={},z_={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Aa=Symbol.for("react.element"),S0=Symbol.for("react.portal"),k0=Symbol.for("react.fragment"),A0=Symbol.for("react.strict_mode"),C0=Symbol.for("react.profiler"),R0=Symbol.for("react.provider"),P0=Symbol.for("react.context"),N0=Symbol.for("react.forward_ref"),x0=Symbol.for("react.suspense"),b0=Symbol.for("react.memo"),D0=Symbol.for("react.lazy"),jm=Symbol.iterator;function O0(t){return t===null||typeof t!="object"?null:(t=jm&&t[jm]||t["@@iterator"],typeof t=="function"?t:null)}var $_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q_=Object.assign,W_={};function zs(t,e,n){this.props=t,this.context=e,this.refs=W_,this.updater=n||$_}zs.prototype.isReactComponent={};zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function H_(){}H_.prototype=zs.prototype;function lf(t,e,n){this.props=t,this.context=e,this.refs=W_,this.updater=n||$_}var uf=lf.prototype=new H_;uf.constructor=lf;q_(uf,zs.prototype);uf.isPureReactComponent=!0;var Um=Array.isArray,G_=Object.prototype.hasOwnProperty,cf={current:null},K_={key:!0,ref:!0,__self:!0,__source:!0};function Q_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)G_.call(e,r)&&!K_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Aa,type:t,key:s,ref:o,props:i,_owner:cf.current}}function V0(t,e){return{$$typeof:Aa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function hf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Aa}function M0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Bm=/\/+/g;function Kc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?M0(""+t.key):e.toString(36)}function Pl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Aa:case S0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Kc(o,0):r,Um(i)?(n="",t!=null&&(n=t.replace(Bm,"$&/")+"/"),Pl(i,e,n,"",function(h){return h})):i!=null&&(hf(i)&&(i=V0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Bm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Um(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Kc(s,l);o+=Pl(s,e,n,u,i)}else if(u=O0(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Kc(s,l++),o+=Pl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ol(t,e,n){if(t==null)return t;var r=[],i=0;return Pl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function L0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var wt={current:null},Nl={transition:null},F0={ReactCurrentDispatcher:wt,ReactCurrentBatchConfig:Nl,ReactCurrentOwner:cf};function Y_(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:ol,forEach:function(t,e,n){ol(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ol(t,function(){e++}),e},toArray:function(t){return ol(t,function(e){return e})||[]},only:function(t){if(!hf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};oe.Component=zs;oe.Fragment=k0;oe.Profiler=C0;oe.PureComponent=lf;oe.StrictMode=A0;oe.Suspense=x0;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F0;oe.act=Y_;oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=q_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=cf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)G_.call(e,u)&&!K_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Aa,type:t.type,key:i,ref:s,props:r,_owner:o}};oe.createContext=function(t){return t={$$typeof:P0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:R0,_context:t},t.Consumer=t};oe.createElement=Q_;oe.createFactory=function(t){var e=Q_.bind(null,t);return e.type=t,e};oe.createRef=function(){return{current:null}};oe.forwardRef=function(t){return{$$typeof:N0,render:t}};oe.isValidElement=hf;oe.lazy=function(t){return{$$typeof:D0,_payload:{_status:-1,_result:t},_init:L0}};oe.memo=function(t,e){return{$$typeof:b0,type:t,compare:e===void 0?null:e}};oe.startTransition=function(t){var e=Nl.transition;Nl.transition={};try{t()}finally{Nl.transition=e}};oe.unstable_act=Y_;oe.useCallback=function(t,e){return wt.current.useCallback(t,e)};oe.useContext=function(t){return wt.current.useContext(t)};oe.useDebugValue=function(){};oe.useDeferredValue=function(t){return wt.current.useDeferredValue(t)};oe.useEffect=function(t,e){return wt.current.useEffect(t,e)};oe.useId=function(){return wt.current.useId()};oe.useImperativeHandle=function(t,e,n){return wt.current.useImperativeHandle(t,e,n)};oe.useInsertionEffect=function(t,e){return wt.current.useInsertionEffect(t,e)};oe.useLayoutEffect=function(t,e){return wt.current.useLayoutEffect(t,e)};oe.useMemo=function(t,e){return wt.current.useMemo(t,e)};oe.useReducer=function(t,e,n){return wt.current.useReducer(t,e,n)};oe.useRef=function(t){return wt.current.useRef(t)};oe.useState=function(t){return wt.current.useState(t)};oe.useSyncExternalStore=function(t,e,n){return wt.current.useSyncExternalStore(t,e,n)};oe.useTransition=function(){return wt.current.useTransition()};oe.version="18.3.1";z_.exports=oe;var ne=z_.exports;const j0=I0(ne);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0=ne,B0=Symbol.for("react.element"),z0=Symbol.for("react.fragment"),$0=Object.prototype.hasOwnProperty,q0=U0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W0={key:!0,ref:!0,__self:!0,__source:!0};function J_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)$0.call(e,r)&&!W0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:B0,type:t,key:s,ref:o,props:i,_owner:q0.current}}Gu.Fragment=z0;Gu.jsx=J_;Gu.jsxs=J_;B_.exports=Gu;var v=B_.exports,Fh={},X_={exports:{}},qt={},Z_={exports:{}},ev={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(q,ee){var Y=q.length;q.push(ee);e:for(;0<Y;){var ye=Y-1>>>1,_e=q[ye];if(0<i(_e,ee))q[ye]=ee,q[Y]=_e,Y=ye;else break e}}function n(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var ee=q[0],Y=q.pop();if(Y!==ee){q[0]=Y;e:for(var ye=0,_e=q.length,Ot=_e>>>1;ye<Ot;){var Tt=2*(ye+1)-1,Vt=q[Tt],Mt=Tt+1,rn=q[Mt];if(0>i(Vt,Y))Mt<_e&&0>i(rn,Vt)?(q[ye]=rn,q[Mt]=Y,ye=Mt):(q[ye]=Vt,q[Tt]=Y,ye=Tt);else if(Mt<_e&&0>i(rn,Y))q[ye]=rn,q[Mt]=Y,ye=Mt;else break e}}return ee}function i(q,ee){var Y=q.sortIndex-ee.sortIndex;return Y!==0?Y:q.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,m=3,A=!1,x=!1,D=!1,L=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(q){for(var ee=n(h);ee!==null;){if(ee.callback===null)r(h);else if(ee.startTime<=q)r(h),ee.sortIndex=ee.expirationTime,e(u,ee);else break;ee=n(h)}}function O(q){if(D=!1,C(q),!x)if(n(u)!==null)x=!0,ni(B);else{var ee=n(h);ee!==null&&ri(O,ee.startTime-q)}}function B(q,ee){x=!1,D&&(D=!1,S(y),y=-1),A=!0;var Y=m;try{for(C(ee),p=n(u);p!==null&&(!(p.expirationTime>ee)||q&&!k());){var ye=p.callback;if(typeof ye=="function"){p.callback=null,m=p.priorityLevel;var _e=ye(p.expirationTime<=ee);ee=t.unstable_now(),typeof _e=="function"?p.callback=_e:p===n(u)&&r(u),C(ee)}else r(u);p=n(u)}if(p!==null)var Ot=!0;else{var Tt=n(h);Tt!==null&&ri(O,Tt.startTime-ee),Ot=!1}return Ot}finally{p=null,m=Y,A=!1}}var U=!1,_=null,y=-1,E=5,I=-1;function k(){return!(t.unstable_now()-I<E)}function R(){if(_!==null){var q=t.unstable_now();I=q;var ee=!0;try{ee=_(!0,q)}finally{ee?T():(U=!1,_=null)}}else U=!1}var T;if(typeof w=="function")T=function(){w(R)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,mt=se.port2;se.port1.onmessage=R,T=function(){mt.postMessage(null)}}else T=function(){L(R,0)};function ni(q){_=q,U||(U=!0,T())}function ri(q,ee){y=L(function(){q(t.unstable_now())},ee)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(q){q.callback=null},t.unstable_continueExecution=function(){x||A||(x=!0,ni(B))},t.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<q?Math.floor(1e3/q):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(q){switch(m){case 1:case 2:case 3:var ee=3;break;default:ee=m}var Y=m;m=ee;try{return q()}finally{m=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(q,ee){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var Y=m;m=q;try{return ee()}finally{m=Y}},t.unstable_scheduleCallback=function(q,ee,Y){var ye=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ye+Y:ye):Y=ye,q){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=Y+_e,q={id:f++,callback:ee,priorityLevel:q,startTime:Y,expirationTime:_e,sortIndex:-1},Y>ye?(q.sortIndex=Y,e(h,q),n(u)===null&&q===n(h)&&(D?(S(y),y=-1):D=!0,ri(O,Y-ye))):(q.sortIndex=_e,e(u,q),x||A||(x=!0,ni(B))),q},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(q){var ee=m;return function(){var Y=m;m=ee;try{return q.apply(this,arguments)}finally{m=Y}}}})(ev);Z_.exports=ev;var H0=Z_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G0=ne,$t=H0;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tv=new Set,Xo={};function Vi(t,e){As(t,e),As(t+"Capture",e)}function As(t,e){for(Xo[t]=e,t=0;t<e.length;t++)tv.add(e[t])}var Jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jh=Object.prototype.hasOwnProperty,K0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zm={},$m={};function Q0(t){return jh.call($m,t)?!0:jh.call(zm,t)?!1:K0.test(t)?$m[t]=!0:(zm[t]=!0,!1)}function Y0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function J0(t,e,n,r){if(e===null||typeof e>"u"||Y0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Et(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){it[t]=new Et(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];it[e]=new Et(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){it[t]=new Et(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){it[t]=new Et(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){it[t]=new Et(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){it[t]=new Et(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){it[t]=new Et(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){it[t]=new Et(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){it[t]=new Et(t,5,!1,t.toLowerCase(),null,!1,!1)});var df=/[\-:]([a-z])/g;function ff(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(df,ff);it[e]=new Et(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(df,ff);it[e]=new Et(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(df,ff);it[e]=new Et(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){it[t]=new Et(t,1,!1,t.toLowerCase(),null,!1,!1)});it.xlinkHref=new Et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){it[t]=new Et(t,1,!1,t.toLowerCase(),null,!0,!0)});function pf(t,e,n,r){var i=it.hasOwnProperty(e)?it[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(J0(e,n,i,r)&&(n=null),r||i===null?Q0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var sr=G0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,al=Symbol.for("react.element"),ts=Symbol.for("react.portal"),ns=Symbol.for("react.fragment"),mf=Symbol.for("react.strict_mode"),Uh=Symbol.for("react.profiler"),nv=Symbol.for("react.provider"),rv=Symbol.for("react.context"),gf=Symbol.for("react.forward_ref"),Bh=Symbol.for("react.suspense"),zh=Symbol.for("react.suspense_list"),yf=Symbol.for("react.memo"),mr=Symbol.for("react.lazy"),iv=Symbol.for("react.offscreen"),qm=Symbol.iterator;function po(t){return t===null||typeof t!="object"?null:(t=qm&&t[qm]||t["@@iterator"],typeof t=="function"?t:null)}var Pe=Object.assign,Qc;function ko(t){if(Qc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Qc=e&&e[1]||""}return`
`+Qc+t}var Yc=!1;function Jc(t,e){if(!t||Yc)return"";Yc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Yc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ko(t):""}function X0(t){switch(t.tag){case 5:return ko(t.type);case 16:return ko("Lazy");case 13:return ko("Suspense");case 19:return ko("SuspenseList");case 0:case 2:case 15:return t=Jc(t.type,!1),t;case 11:return t=Jc(t.type.render,!1),t;case 1:return t=Jc(t.type,!0),t;default:return""}}function $h(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ns:return"Fragment";case ts:return"Portal";case Uh:return"Profiler";case mf:return"StrictMode";case Bh:return"Suspense";case zh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case rv:return(t.displayName||"Context")+".Consumer";case nv:return(t._context.displayName||"Context")+".Provider";case gf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yf:return e=t.displayName||null,e!==null?e:$h(t.type)||"Memo";case mr:e=t._payload,t=t._init;try{return $h(t(e))}catch{}}return null}function Z0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $h(e);case 8:return e===mf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function sv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function eS(t){var e=sv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ll(t){t._valueTracker||(t._valueTracker=eS(t))}function ov(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=sv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Xl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qh(t,e){var n=e.checked;return Pe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Wm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function av(t,e){e=e.checked,e!=null&&pf(t,"checked",e,!1)}function Wh(t,e){av(t,e);var n=Ur(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Hh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Hh(t,e.type,Ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Hh(t,e,n){(e!=="number"||Xl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ao=Array.isArray;function ps(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ur(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Gh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Pe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Gm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Ao(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ur(n)}}function lv(t,e){var n=Ur(e.value),r=Ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Km(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function uv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?uv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ul,cv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ul=ul||document.createElement("div"),ul.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ul.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tS=["Webkit","ms","Moz","O"];Object.keys(Mo).forEach(function(t){tS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Mo[e]=Mo[t]})});function hv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Mo.hasOwnProperty(t)&&Mo[t]?(""+e).trim():e+"px"}function dv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=hv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var nS=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qh(t,e){if(e){if(nS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Yh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jh=null;function _f(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xh=null,ms=null,gs=null;function Qm(t){if(t=Pa(t)){if(typeof Xh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Xu(e),Xh(t.stateNode,t.type,e))}}function fv(t){ms?gs?gs.push(t):gs=[t]:ms=t}function pv(){if(ms){var t=ms,e=gs;if(gs=ms=null,Qm(t),e)for(t=0;t<e.length;t++)Qm(e[t])}}function mv(t,e){return t(e)}function gv(){}var Xc=!1;function yv(t,e,n){if(Xc)return t(e,n);Xc=!0;try{return mv(t,e,n)}finally{Xc=!1,(ms!==null||gs!==null)&&(gv(),pv())}}function ea(t,e){var n=t.stateNode;if(n===null)return null;var r=Xu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Zh=!1;if(Jn)try{var mo={};Object.defineProperty(mo,"passive",{get:function(){Zh=!0}}),window.addEventListener("test",mo,mo),window.removeEventListener("test",mo,mo)}catch{Zh=!1}function rS(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Lo=!1,Zl=null,eu=!1,ed=null,iS={onError:function(t){Lo=!0,Zl=t}};function sS(t,e,n,r,i,s,o,l,u){Lo=!1,Zl=null,rS.apply(iS,arguments)}function oS(t,e,n,r,i,s,o,l,u){if(sS.apply(this,arguments),Lo){if(Lo){var h=Zl;Lo=!1,Zl=null}else throw Error(F(198));eu||(eu=!0,ed=h)}}function Mi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function _v(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ym(t){if(Mi(t)!==t)throw Error(F(188))}function aS(t){var e=t.alternate;if(!e){if(e=Mi(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ym(i),t;if(s===r)return Ym(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function vv(t){return t=aS(t),t!==null?wv(t):null}function wv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=wv(t);if(e!==null)return e;t=t.sibling}return null}var Ev=$t.unstable_scheduleCallback,Jm=$t.unstable_cancelCallback,lS=$t.unstable_shouldYield,uS=$t.unstable_requestPaint,Me=$t.unstable_now,cS=$t.unstable_getCurrentPriorityLevel,vf=$t.unstable_ImmediatePriority,Tv=$t.unstable_UserBlockingPriority,tu=$t.unstable_NormalPriority,hS=$t.unstable_LowPriority,Iv=$t.unstable_IdlePriority,Ku=null,Cn=null;function dS(t){if(Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot(Ku,t,void 0,(t.current.flags&128)===128)}catch{}}var fn=Math.clz32?Math.clz32:mS,fS=Math.log,pS=Math.LN2;function mS(t){return t>>>=0,t===0?32:31-(fS(t)/pS|0)|0}var cl=64,hl=4194304;function Co(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function nu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Co(l):(s&=o,s!==0&&(r=Co(s)))}else o=n&~i,o!==0?r=Co(o):s!==0&&(r=Co(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-fn(e),i=1<<n,r|=t[n],e&=~i;return r}function gS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-fn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=gS(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function td(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Sv(){var t=cl;return cl<<=1,!(cl&4194240)&&(cl=64),t}function Zc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ca(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-fn(e),t[e]=n}function _S(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-fn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function wf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-fn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ge=0;function kv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Av,Ef,Cv,Rv,Pv,nd=!1,dl=[],Cr=null,Rr=null,Pr=null,ta=new Map,na=new Map,yr=[],vS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xm(t,e){switch(t){case"focusin":case"focusout":Cr=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":na.delete(e.pointerId)}}function go(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Pa(e),e!==null&&Ef(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function wS(t,e,n,r,i){switch(e){case"focusin":return Cr=go(Cr,t,e,n,r,i),!0;case"dragenter":return Rr=go(Rr,t,e,n,r,i),!0;case"mouseover":return Pr=go(Pr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ta.set(s,go(ta.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,na.set(s,go(na.get(s)||null,t,e,n,r,i)),!0}return!1}function Nv(t){var e=gi(t.target);if(e!==null){var n=Mi(e);if(n!==null){if(e=n.tag,e===13){if(e=_v(n),e!==null){t.blockedOn=e,Pv(t.priority,function(){Cv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Jh=r,n.target.dispatchEvent(r),Jh=null}else return e=Pa(n),e!==null&&Ef(e),t.blockedOn=n,!1;e.shift()}return!0}function Zm(t,e,n){xl(t)&&n.delete(e)}function ES(){nd=!1,Cr!==null&&xl(Cr)&&(Cr=null),Rr!==null&&xl(Rr)&&(Rr=null),Pr!==null&&xl(Pr)&&(Pr=null),ta.forEach(Zm),na.forEach(Zm)}function yo(t,e){t.blockedOn===e&&(t.blockedOn=null,nd||(nd=!0,$t.unstable_scheduleCallback($t.unstable_NormalPriority,ES)))}function ra(t){function e(i){return yo(i,t)}if(0<dl.length){yo(dl[0],t);for(var n=1;n<dl.length;n++){var r=dl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Cr!==null&&yo(Cr,t),Rr!==null&&yo(Rr,t),Pr!==null&&yo(Pr,t),ta.forEach(e),na.forEach(e),n=0;n<yr.length;n++)r=yr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<yr.length&&(n=yr[0],n.blockedOn===null);)Nv(n),n.blockedOn===null&&yr.shift()}var ys=sr.ReactCurrentBatchConfig,ru=!0;function TS(t,e,n,r){var i=ge,s=ys.transition;ys.transition=null;try{ge=1,Tf(t,e,n,r)}finally{ge=i,ys.transition=s}}function IS(t,e,n,r){var i=ge,s=ys.transition;ys.transition=null;try{ge=4,Tf(t,e,n,r)}finally{ge=i,ys.transition=s}}function Tf(t,e,n,r){if(ru){var i=rd(t,e,n,r);if(i===null)uh(t,e,r,iu,n),Xm(t,r);else if(wS(i,t,e,n,r))r.stopPropagation();else if(Xm(t,r),e&4&&-1<vS.indexOf(t)){for(;i!==null;){var s=Pa(i);if(s!==null&&Av(s),s=rd(t,e,n,r),s===null&&uh(t,e,r,iu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else uh(t,e,r,null,n)}}var iu=null;function rd(t,e,n,r){if(iu=null,t=_f(r),t=gi(t),t!==null)if(e=Mi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=_v(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return iu=t,null}function xv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cS()){case vf:return 1;case Tv:return 4;case tu:case hS:return 16;case Iv:return 536870912;default:return 16}default:return 16}}var Sr=null,If=null,bl=null;function bv(){if(bl)return bl;var t,e=If,n=e.length,r,i="value"in Sr?Sr.value:Sr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return bl=i.slice(t,1<r?1-r:void 0)}function Dl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fl(){return!0}function eg(){return!1}function Wt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?fl:eg,this.isPropagationStopped=eg,this}return Pe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),e}var $s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sf=Wt($s),Ra=Pe({},$s,{view:0,detail:0}),SS=Wt(Ra),eh,th,_o,Qu=Pe({},Ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_o&&(_o&&t.type==="mousemove"?(eh=t.screenX-_o.screenX,th=t.screenY-_o.screenY):th=eh=0,_o=t),eh)},movementY:function(t){return"movementY"in t?t.movementY:th}}),tg=Wt(Qu),kS=Pe({},Qu,{dataTransfer:0}),AS=Wt(kS),CS=Pe({},Ra,{relatedTarget:0}),nh=Wt(CS),RS=Pe({},$s,{animationName:0,elapsedTime:0,pseudoElement:0}),PS=Wt(RS),NS=Pe({},$s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xS=Wt(NS),bS=Pe({},$s,{data:0}),ng=Wt(bS),DS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},OS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},VS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function MS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=VS[t])?!!e[t]:!1}function kf(){return MS}var LS=Pe({},Ra,{key:function(t){if(t.key){var e=DS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?OS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kf,charCode:function(t){return t.type==="keypress"?Dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),FS=Wt(LS),jS=Pe({},Qu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rg=Wt(jS),US=Pe({},Ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kf}),BS=Wt(US),zS=Pe({},$s,{propertyName:0,elapsedTime:0,pseudoElement:0}),$S=Wt(zS),qS=Pe({},Qu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),WS=Wt(qS),HS=[9,13,27,32],Af=Jn&&"CompositionEvent"in window,Fo=null;Jn&&"documentMode"in document&&(Fo=document.documentMode);var GS=Jn&&"TextEvent"in window&&!Fo,Dv=Jn&&(!Af||Fo&&8<Fo&&11>=Fo),ig=" ",sg=!1;function Ov(t,e){switch(t){case"keyup":return HS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rs=!1;function KS(t,e){switch(t){case"compositionend":return Vv(e);case"keypress":return e.which!==32?null:(sg=!0,ig);case"textInput":return t=e.data,t===ig&&sg?null:t;default:return null}}function QS(t,e){if(rs)return t==="compositionend"||!Af&&Ov(t,e)?(t=bv(),bl=If=Sr=null,rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Dv&&e.locale!=="ko"?null:e.data;default:return null}}var YS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function og(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!YS[t.type]:e==="textarea"}function Mv(t,e,n,r){fv(r),e=su(e,"onChange"),0<e.length&&(n=new Sf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var jo=null,ia=null;function JS(t){Gv(t,0)}function Yu(t){var e=os(t);if(ov(e))return t}function XS(t,e){if(t==="change")return e}var Lv=!1;if(Jn){var rh;if(Jn){var ih="oninput"in document;if(!ih){var ag=document.createElement("div");ag.setAttribute("oninput","return;"),ih=typeof ag.oninput=="function"}rh=ih}else rh=!1;Lv=rh&&(!document.documentMode||9<document.documentMode)}function lg(){jo&&(jo.detachEvent("onpropertychange",Fv),ia=jo=null)}function Fv(t){if(t.propertyName==="value"&&Yu(ia)){var e=[];Mv(e,ia,t,_f(t)),yv(JS,e)}}function ZS(t,e,n){t==="focusin"?(lg(),jo=e,ia=n,jo.attachEvent("onpropertychange",Fv)):t==="focusout"&&lg()}function ek(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yu(ia)}function tk(t,e){if(t==="click")return Yu(e)}function nk(t,e){if(t==="input"||t==="change")return Yu(e)}function rk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var mn=typeof Object.is=="function"?Object.is:rk;function sa(t,e){if(mn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!jh.call(e,i)||!mn(t[i],e[i]))return!1}return!0}function ug(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cg(t,e){var n=ug(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ug(n)}}function jv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?jv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Uv(){for(var t=window,e=Xl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xl(t.document)}return e}function Cf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ik(t){var e=Uv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&jv(n.ownerDocument.documentElement,n)){if(r!==null&&Cf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=cg(n,s);var o=cg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var sk=Jn&&"documentMode"in document&&11>=document.documentMode,is=null,id=null,Uo=null,sd=!1;function hg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sd||is==null||is!==Xl(r)||(r=is,"selectionStart"in r&&Cf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Uo&&sa(Uo,r)||(Uo=r,r=su(id,"onSelect"),0<r.length&&(e=new Sf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=is)))}function pl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ss={animationend:pl("Animation","AnimationEnd"),animationiteration:pl("Animation","AnimationIteration"),animationstart:pl("Animation","AnimationStart"),transitionend:pl("Transition","TransitionEnd")},sh={},Bv={};Jn&&(Bv=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function Ju(t){if(sh[t])return sh[t];if(!ss[t])return t;var e=ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Bv)return sh[t]=e[n];return t}var zv=Ju("animationend"),$v=Ju("animationiteration"),qv=Ju("animationstart"),Wv=Ju("transitionend"),Hv=new Map,dg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qr(t,e){Hv.set(t,e),Vi(e,[t])}for(var oh=0;oh<dg.length;oh++){var ah=dg[oh],ok=ah.toLowerCase(),ak=ah[0].toUpperCase()+ah.slice(1);Qr(ok,"on"+ak)}Qr(zv,"onAnimationEnd");Qr($v,"onAnimationIteration");Qr(qv,"onAnimationStart");Qr("dblclick","onDoubleClick");Qr("focusin","onFocus");Qr("focusout","onBlur");Qr(Wv,"onTransitionEnd");As("onMouseEnter",["mouseout","mouseover"]);As("onMouseLeave",["mouseout","mouseover"]);As("onPointerEnter",["pointerout","pointerover"]);As("onPointerLeave",["pointerout","pointerover"]);Vi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ro));function fg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,oS(r,e,void 0,t),t.currentTarget=null}function Gv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;fg(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;fg(i,l,h),s=u}}}if(eu)throw t=ed,eu=!1,ed=null,t}function Ie(t,e){var n=e[cd];n===void 0&&(n=e[cd]=new Set);var r=t+"__bubble";n.has(r)||(Kv(e,t,2,!1),n.add(r))}function lh(t,e,n){var r=0;e&&(r|=4),Kv(n,t,r,e)}var ml="_reactListening"+Math.random().toString(36).slice(2);function oa(t){if(!t[ml]){t[ml]=!0,tv.forEach(function(n){n!=="selectionchange"&&(lk.has(n)||lh(n,!1,t),lh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ml]||(e[ml]=!0,lh("selectionchange",!1,e))}}function Kv(t,e,n,r){switch(xv(e)){case 1:var i=TS;break;case 4:i=IS;break;default:i=Tf}n=i.bind(null,e,n,t),i=void 0,!Zh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function uh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=gi(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}yv(function(){var h=s,f=_f(n),p=[];e:{var m=Hv.get(t);if(m!==void 0){var A=Sf,x=t;switch(t){case"keypress":if(Dl(n)===0)break e;case"keydown":case"keyup":A=FS;break;case"focusin":x="focus",A=nh;break;case"focusout":x="blur",A=nh;break;case"beforeblur":case"afterblur":A=nh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=tg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=AS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=BS;break;case zv:case $v:case qv:A=PS;break;case Wv:A=$S;break;case"scroll":A=SS;break;case"wheel":A=WS;break;case"copy":case"cut":case"paste":A=xS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=rg}var D=(e&4)!==0,L=!D&&t==="scroll",S=D?m!==null?m+"Capture":null:m;D=[];for(var w=h,C;w!==null;){C=w;var O=C.stateNode;if(C.tag===5&&O!==null&&(C=O,S!==null&&(O=ea(w,S),O!=null&&D.push(aa(w,O,C)))),L)break;w=w.return}0<D.length&&(m=new A(m,x,null,n,f),p.push({event:m,listeners:D}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",m&&n!==Jh&&(x=n.relatedTarget||n.fromElement)&&(gi(x)||x[Xn]))break e;if((A||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,A?(x=n.relatedTarget||n.toElement,A=h,x=x?gi(x):null,x!==null&&(L=Mi(x),x!==L||x.tag!==5&&x.tag!==6)&&(x=null)):(A=null,x=h),A!==x)){if(D=tg,O="onMouseLeave",S="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(D=rg,O="onPointerLeave",S="onPointerEnter",w="pointer"),L=A==null?m:os(A),C=x==null?m:os(x),m=new D(O,w+"leave",A,n,f),m.target=L,m.relatedTarget=C,O=null,gi(f)===h&&(D=new D(S,w+"enter",x,n,f),D.target=C,D.relatedTarget=L,O=D),L=O,A&&x)t:{for(D=A,S=x,w=0,C=D;C;C=Qi(C))w++;for(C=0,O=S;O;O=Qi(O))C++;for(;0<w-C;)D=Qi(D),w--;for(;0<C-w;)S=Qi(S),C--;for(;w--;){if(D===S||S!==null&&D===S.alternate)break t;D=Qi(D),S=Qi(S)}D=null}else D=null;A!==null&&pg(p,m,A,D,!1),x!==null&&L!==null&&pg(p,L,x,D,!0)}}e:{if(m=h?os(h):window,A=m.nodeName&&m.nodeName.toLowerCase(),A==="select"||A==="input"&&m.type==="file")var B=XS;else if(og(m))if(Lv)B=nk;else{B=ek;var U=ZS}else(A=m.nodeName)&&A.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(B=tk);if(B&&(B=B(t,h))){Mv(p,B,n,f);break e}U&&U(t,m,h),t==="focusout"&&(U=m._wrapperState)&&U.controlled&&m.type==="number"&&Hh(m,"number",m.value)}switch(U=h?os(h):window,t){case"focusin":(og(U)||U.contentEditable==="true")&&(is=U,id=h,Uo=null);break;case"focusout":Uo=id=is=null;break;case"mousedown":sd=!0;break;case"contextmenu":case"mouseup":case"dragend":sd=!1,hg(p,n,f);break;case"selectionchange":if(sk)break;case"keydown":case"keyup":hg(p,n,f)}var _;if(Af)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else rs?Ov(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Dv&&n.locale!=="ko"&&(rs||y!=="onCompositionStart"?y==="onCompositionEnd"&&rs&&(_=bv()):(Sr=f,If="value"in Sr?Sr.value:Sr.textContent,rs=!0)),U=su(h,y),0<U.length&&(y=new ng(y,t,null,n,f),p.push({event:y,listeners:U}),_?y.data=_:(_=Vv(n),_!==null&&(y.data=_)))),(_=GS?KS(t,n):QS(t,n))&&(h=su(h,"onBeforeInput"),0<h.length&&(f=new ng("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=_))}Gv(p,e)})}function aa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function su(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ea(t,n),s!=null&&r.unshift(aa(t,s,i)),s=ea(t,e),s!=null&&r.push(aa(t,s,i))),t=t.return}return r}function Qi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function pg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=ea(n,s),u!=null&&o.unshift(aa(n,u,l))):i||(u=ea(n,s),u!=null&&o.push(aa(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var uk=/\r\n?/g,ck=/\u0000|\uFFFD/g;function mg(t){return(typeof t=="string"?t:""+t).replace(uk,`
`).replace(ck,"")}function gl(t,e,n){if(e=mg(e),mg(t)!==e&&n)throw Error(F(425))}function ou(){}var od=null,ad=null;function ld(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ud=typeof setTimeout=="function"?setTimeout:void 0,hk=typeof clearTimeout=="function"?clearTimeout:void 0,gg=typeof Promise=="function"?Promise:void 0,dk=typeof queueMicrotask=="function"?queueMicrotask:typeof gg<"u"?function(t){return gg.resolve(null).then(t).catch(fk)}:ud;function fk(t){setTimeout(function(){throw t})}function ch(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ra(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ra(e)}function Nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function yg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qs=Math.random().toString(36).slice(2),kn="__reactFiber$"+qs,la="__reactProps$"+qs,Xn="__reactContainer$"+qs,cd="__reactEvents$"+qs,pk="__reactListeners$"+qs,mk="__reactHandles$"+qs;function gi(t){var e=t[kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Xn]||n[kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yg(t);t!==null;){if(n=t[kn])return n;t=yg(t)}return e}t=n,n=t.parentNode}return null}function Pa(t){return t=t[kn]||t[Xn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function os(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Xu(t){return t[la]||null}var hd=[],as=-1;function Yr(t){return{current:t}}function ke(t){0>as||(t.current=hd[as],hd[as]=null,as--)}function Ee(t,e){as++,hd[as]=t.current,t.current=e}var Br={},ft=Yr(Br),Nt=Yr(!1),Si=Br;function Cs(t,e){var n=t.type.contextTypes;if(!n)return Br;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function xt(t){return t=t.childContextTypes,t!=null}function au(){ke(Nt),ke(ft)}function _g(t,e,n){if(ft.current!==Br)throw Error(F(168));Ee(ft,e),Ee(Nt,n)}function Qv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,Z0(t)||"Unknown",i));return Pe({},n,r)}function lu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Br,Si=ft.current,Ee(ft,t),Ee(Nt,Nt.current),!0}function vg(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=Qv(t,e,Si),r.__reactInternalMemoizedMergedChildContext=t,ke(Nt),ke(ft),Ee(ft,t)):ke(Nt),Ee(Nt,n)}var zn=null,Zu=!1,hh=!1;function Yv(t){zn===null?zn=[t]:zn.push(t)}function gk(t){Zu=!0,Yv(t)}function Jr(){if(!hh&&zn!==null){hh=!0;var t=0,e=ge;try{var n=zn;for(ge=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}zn=null,Zu=!1}catch(i){throw zn!==null&&(zn=zn.slice(t+1)),Ev(vf,Jr),i}finally{ge=e,hh=!1}}return null}var ls=[],us=0,uu=null,cu=0,Kt=[],Qt=0,ki=null,qn=1,Wn="";function fi(t,e){ls[us++]=cu,ls[us++]=uu,uu=t,cu=e}function Jv(t,e,n){Kt[Qt++]=qn,Kt[Qt++]=Wn,Kt[Qt++]=ki,ki=t;var r=qn;t=Wn;var i=32-fn(r)-1;r&=~(1<<i),n+=1;var s=32-fn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,qn=1<<32-fn(e)+i|n<<i|r,Wn=s+t}else qn=1<<s|n<<i|r,Wn=t}function Rf(t){t.return!==null&&(fi(t,1),Jv(t,1,0))}function Pf(t){for(;t===uu;)uu=ls[--us],ls[us]=null,cu=ls[--us],ls[us]=null;for(;t===ki;)ki=Kt[--Qt],Kt[Qt]=null,Wn=Kt[--Qt],Kt[Qt]=null,qn=Kt[--Qt],Kt[Qt]=null}var Bt=null,Ut=null,Ae=!1,cn=null;function Xv(t,e){var n=Xt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function wg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Bt=t,Ut=Nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Bt=t,Ut=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ki!==null?{id:qn,overflow:Wn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Bt=t,Ut=null,!0):!1;default:return!1}}function dd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fd(t){if(Ae){var e=Ut;if(e){var n=e;if(!wg(t,e)){if(dd(t))throw Error(F(418));e=Nr(n.nextSibling);var r=Bt;e&&wg(t,e)?Xv(r,n):(t.flags=t.flags&-4097|2,Ae=!1,Bt=t)}}else{if(dd(t))throw Error(F(418));t.flags=t.flags&-4097|2,Ae=!1,Bt=t}}}function Eg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bt=t}function yl(t){if(t!==Bt)return!1;if(!Ae)return Eg(t),Ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ld(t.type,t.memoizedProps)),e&&(e=Ut)){if(dd(t))throw Zv(),Error(F(418));for(;e;)Xv(t,e),e=Nr(e.nextSibling)}if(Eg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ut=Nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ut=null}}else Ut=Bt?Nr(t.stateNode.nextSibling):null;return!0}function Zv(){for(var t=Ut;t;)t=Nr(t.nextSibling)}function Rs(){Ut=Bt=null,Ae=!1}function Nf(t){cn===null?cn=[t]:cn.push(t)}var yk=sr.ReactCurrentBatchConfig;function vo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function _l(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Tg(t){var e=t._init;return e(t._payload)}function ew(t){function e(S,w){if(t){var C=S.deletions;C===null?(S.deletions=[w],S.flags|=16):C.push(w)}}function n(S,w){if(!t)return null;for(;w!==null;)e(S,w),w=w.sibling;return null}function r(S,w){for(S=new Map;w!==null;)w.key!==null?S.set(w.key,w):S.set(w.index,w),w=w.sibling;return S}function i(S,w){return S=Or(S,w),S.index=0,S.sibling=null,S}function s(S,w,C){return S.index=C,t?(C=S.alternate,C!==null?(C=C.index,C<w?(S.flags|=2,w):C):(S.flags|=2,w)):(S.flags|=1048576,w)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,w,C,O){return w===null||w.tag!==6?(w=_h(C,S.mode,O),w.return=S,w):(w=i(w,C),w.return=S,w)}function u(S,w,C,O){var B=C.type;return B===ns?f(S,w,C.props.children,O,C.key):w!==null&&(w.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===mr&&Tg(B)===w.type)?(O=i(w,C.props),O.ref=vo(S,w,C),O.return=S,O):(O=Ul(C.type,C.key,C.props,null,S.mode,O),O.ref=vo(S,w,C),O.return=S,O)}function h(S,w,C,O){return w===null||w.tag!==4||w.stateNode.containerInfo!==C.containerInfo||w.stateNode.implementation!==C.implementation?(w=vh(C,S.mode,O),w.return=S,w):(w=i(w,C.children||[]),w.return=S,w)}function f(S,w,C,O,B){return w===null||w.tag!==7?(w=Ti(C,S.mode,O,B),w.return=S,w):(w=i(w,C),w.return=S,w)}function p(S,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return w=_h(""+w,S.mode,C),w.return=S,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case al:return C=Ul(w.type,w.key,w.props,null,S.mode,C),C.ref=vo(S,null,w),C.return=S,C;case ts:return w=vh(w,S.mode,C),w.return=S,w;case mr:var O=w._init;return p(S,O(w._payload),C)}if(Ao(w)||po(w))return w=Ti(w,S.mode,C,null),w.return=S,w;_l(S,w)}return null}function m(S,w,C,O){var B=w!==null?w.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return B!==null?null:l(S,w,""+C,O);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case al:return C.key===B?u(S,w,C,O):null;case ts:return C.key===B?h(S,w,C,O):null;case mr:return B=C._init,m(S,w,B(C._payload),O)}if(Ao(C)||po(C))return B!==null?null:f(S,w,C,O,null);_l(S,C)}return null}function A(S,w,C,O,B){if(typeof O=="string"&&O!==""||typeof O=="number")return S=S.get(C)||null,l(w,S,""+O,B);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case al:return S=S.get(O.key===null?C:O.key)||null,u(w,S,O,B);case ts:return S=S.get(O.key===null?C:O.key)||null,h(w,S,O,B);case mr:var U=O._init;return A(S,w,C,U(O._payload),B)}if(Ao(O)||po(O))return S=S.get(C)||null,f(w,S,O,B,null);_l(w,O)}return null}function x(S,w,C,O){for(var B=null,U=null,_=w,y=w=0,E=null;_!==null&&y<C.length;y++){_.index>y?(E=_,_=null):E=_.sibling;var I=m(S,_,C[y],O);if(I===null){_===null&&(_=E);break}t&&_&&I.alternate===null&&e(S,_),w=s(I,w,y),U===null?B=I:U.sibling=I,U=I,_=E}if(y===C.length)return n(S,_),Ae&&fi(S,y),B;if(_===null){for(;y<C.length;y++)_=p(S,C[y],O),_!==null&&(w=s(_,w,y),U===null?B=_:U.sibling=_,U=_);return Ae&&fi(S,y),B}for(_=r(S,_);y<C.length;y++)E=A(_,S,y,C[y],O),E!==null&&(t&&E.alternate!==null&&_.delete(E.key===null?y:E.key),w=s(E,w,y),U===null?B=E:U.sibling=E,U=E);return t&&_.forEach(function(k){return e(S,k)}),Ae&&fi(S,y),B}function D(S,w,C,O){var B=po(C);if(typeof B!="function")throw Error(F(150));if(C=B.call(C),C==null)throw Error(F(151));for(var U=B=null,_=w,y=w=0,E=null,I=C.next();_!==null&&!I.done;y++,I=C.next()){_.index>y?(E=_,_=null):E=_.sibling;var k=m(S,_,I.value,O);if(k===null){_===null&&(_=E);break}t&&_&&k.alternate===null&&e(S,_),w=s(k,w,y),U===null?B=k:U.sibling=k,U=k,_=E}if(I.done)return n(S,_),Ae&&fi(S,y),B;if(_===null){for(;!I.done;y++,I=C.next())I=p(S,I.value,O),I!==null&&(w=s(I,w,y),U===null?B=I:U.sibling=I,U=I);return Ae&&fi(S,y),B}for(_=r(S,_);!I.done;y++,I=C.next())I=A(_,S,y,I.value,O),I!==null&&(t&&I.alternate!==null&&_.delete(I.key===null?y:I.key),w=s(I,w,y),U===null?B=I:U.sibling=I,U=I);return t&&_.forEach(function(R){return e(S,R)}),Ae&&fi(S,y),B}function L(S,w,C,O){if(typeof C=="object"&&C!==null&&C.type===ns&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case al:e:{for(var B=C.key,U=w;U!==null;){if(U.key===B){if(B=C.type,B===ns){if(U.tag===7){n(S,U.sibling),w=i(U,C.props.children),w.return=S,S=w;break e}}else if(U.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===mr&&Tg(B)===U.type){n(S,U.sibling),w=i(U,C.props),w.ref=vo(S,U,C),w.return=S,S=w;break e}n(S,U);break}else e(S,U);U=U.sibling}C.type===ns?(w=Ti(C.props.children,S.mode,O,C.key),w.return=S,S=w):(O=Ul(C.type,C.key,C.props,null,S.mode,O),O.ref=vo(S,w,C),O.return=S,S=O)}return o(S);case ts:e:{for(U=C.key;w!==null;){if(w.key===U)if(w.tag===4&&w.stateNode.containerInfo===C.containerInfo&&w.stateNode.implementation===C.implementation){n(S,w.sibling),w=i(w,C.children||[]),w.return=S,S=w;break e}else{n(S,w);break}else e(S,w);w=w.sibling}w=vh(C,S.mode,O),w.return=S,S=w}return o(S);case mr:return U=C._init,L(S,w,U(C._payload),O)}if(Ao(C))return x(S,w,C,O);if(po(C))return D(S,w,C,O);_l(S,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,w!==null&&w.tag===6?(n(S,w.sibling),w=i(w,C),w.return=S,S=w):(n(S,w),w=_h(C,S.mode,O),w.return=S,S=w),o(S)):n(S,w)}return L}var Ps=ew(!0),tw=ew(!1),hu=Yr(null),du=null,cs=null,xf=null;function bf(){xf=cs=du=null}function Df(t){var e=hu.current;ke(hu),t._currentValue=e}function pd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function _s(t,e){du=t,xf=cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Rt=!0),t.firstContext=null)}function en(t){var e=t._currentValue;if(xf!==t)if(t={context:t,memoizedValue:e,next:null},cs===null){if(du===null)throw Error(F(308));cs=t,du.dependencies={lanes:0,firstContext:t}}else cs=cs.next=t;return e}var yi=null;function Of(t){yi===null?yi=[t]:yi.push(t)}function nw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Of(e)):(n.next=i.next,i.next=n),e.interleaved=n,Zn(t,r)}function Zn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var gr=!1;function Vf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Kn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function xr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,de&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Zn(t,n)}return i=r.interleaved,i===null?(e.next=e,Of(r)):(e.next=i.next,i.next=e),r.interleaved=e,Zn(t,n)}function Ol(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,wf(t,n)}}function Ig(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function fu(t,e,n,r){var i=t.updateQueue;gr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=h=u=null,l=s;do{var m=l.lane,A=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=t,D=l;switch(m=e,A=n,D.tag){case 1:if(x=D.payload,typeof x=="function"){p=x.call(A,p,m);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=D.payload,m=typeof x=="function"?x.call(A,p,m):x,m==null)break e;p=Pe({},p,m);break e;case 2:gr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else A={eventTime:A,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=A,u=p):f=f.next=A,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ci|=o,t.lanes=o,t.memoizedState=p}}function Sg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var Na={},Rn=Yr(Na),ua=Yr(Na),ca=Yr(Na);function _i(t){if(t===Na)throw Error(F(174));return t}function Mf(t,e){switch(Ee(ca,e),Ee(ua,t),Ee(Rn,Na),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Kh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Kh(e,t)}ke(Rn),Ee(Rn,e)}function Ns(){ke(Rn),ke(ua),ke(ca)}function iw(t){_i(ca.current);var e=_i(Rn.current),n=Kh(e,t.type);e!==n&&(Ee(ua,t),Ee(Rn,n))}function Lf(t){ua.current===t&&(ke(Rn),ke(ua))}var Ce=Yr(0);function pu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var dh=[];function Ff(){for(var t=0;t<dh.length;t++)dh[t]._workInProgressVersionPrimary=null;dh.length=0}var Vl=sr.ReactCurrentDispatcher,fh=sr.ReactCurrentBatchConfig,Ai=0,Re=null,We=null,Xe=null,mu=!1,Bo=!1,ha=0,_k=0;function at(){throw Error(F(321))}function jf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!mn(t[n],e[n]))return!1;return!0}function Uf(t,e,n,r,i,s){if(Ai=s,Re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vl.current=t===null||t.memoizedState===null?Tk:Ik,t=n(r,i),Bo){s=0;do{if(Bo=!1,ha=0,25<=s)throw Error(F(301));s+=1,Xe=We=null,e.updateQueue=null,Vl.current=Sk,t=n(r,i)}while(Bo)}if(Vl.current=gu,e=We!==null&&We.next!==null,Ai=0,Xe=We=Re=null,mu=!1,e)throw Error(F(300));return t}function Bf(){var t=ha!==0;return ha=0,t}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?Re.memoizedState=Xe=t:Xe=Xe.next=t,Xe}function tn(){if(We===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=We.next;var e=Xe===null?Re.memoizedState:Xe.next;if(e!==null)Xe=e,We=t;else{if(t===null)throw Error(F(310));We=t,t={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Xe===null?Re.memoizedState=Xe=t:Xe=Xe.next=t}return Xe}function da(t,e){return typeof e=="function"?e(t):e}function ph(t){var e=tn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=We,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Ai&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Re.lanes|=f,Ci|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,mn(r,e.memoizedState)||(Rt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Re.lanes|=s,Ci|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function mh(t){var e=tn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);mn(s,e.memoizedState)||(Rt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function sw(){}function ow(t,e){var n=Re,r=tn(),i=e(),s=!mn(r.memoizedState,i);if(s&&(r.memoizedState=i,Rt=!0),r=r.queue,zf(uw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Xe!==null&&Xe.memoizedState.tag&1){if(n.flags|=2048,fa(9,lw.bind(null,n,r,i,e),void 0,null),Ze===null)throw Error(F(349));Ai&30||aw(n,e,i)}return i}function aw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function lw(t,e,n,r){e.value=n,e.getSnapshot=r,cw(e)&&hw(t)}function uw(t,e,n){return n(function(){cw(e)&&hw(t)})}function cw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!mn(t,n)}catch{return!0}}function hw(t){var e=Zn(t,1);e!==null&&pn(e,t,1,-1)}function kg(t){var e=In();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:t},e.queue=t,t=t.dispatch=Ek.bind(null,Re,t),[e.memoizedState,t]}function fa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function dw(){return tn().memoizedState}function Ml(t,e,n,r){var i=In();Re.flags|=t,i.memoizedState=fa(1|e,n,void 0,r===void 0?null:r)}function ec(t,e,n,r){var i=tn();r=r===void 0?null:r;var s=void 0;if(We!==null){var o=We.memoizedState;if(s=o.destroy,r!==null&&jf(r,o.deps)){i.memoizedState=fa(e,n,s,r);return}}Re.flags|=t,i.memoizedState=fa(1|e,n,s,r)}function Ag(t,e){return Ml(8390656,8,t,e)}function zf(t,e){return ec(2048,8,t,e)}function fw(t,e){return ec(4,2,t,e)}function pw(t,e){return ec(4,4,t,e)}function mw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function gw(t,e,n){return n=n!=null?n.concat([t]):null,ec(4,4,mw.bind(null,e,t),n)}function $f(){}function yw(t,e){var n=tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&jf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function _w(t,e){var n=tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&jf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function vw(t,e,n){return Ai&21?(mn(n,e)||(n=Sv(),Re.lanes|=n,Ci|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Rt=!0),t.memoizedState=n)}function vk(t,e){var n=ge;ge=n!==0&&4>n?n:4,t(!0);var r=fh.transition;fh.transition={};try{t(!1),e()}finally{ge=n,fh.transition=r}}function ww(){return tn().memoizedState}function wk(t,e,n){var r=Dr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ew(t))Tw(e,n);else if(n=nw(t,e,n,r),n!==null){var i=_t();pn(n,t,r,i),Iw(n,e,r)}}function Ek(t,e,n){var r=Dr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ew(t))Tw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,mn(l,o)){var u=e.interleaved;u===null?(i.next=i,Of(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=nw(t,e,i,r),n!==null&&(i=_t(),pn(n,t,r,i),Iw(n,e,r))}}function Ew(t){var e=t.alternate;return t===Re||e!==null&&e===Re}function Tw(t,e){Bo=mu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Iw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,wf(t,n)}}var gu={readContext:en,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useInsertionEffect:at,useLayoutEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useMutableSource:at,useSyncExternalStore:at,useId:at,unstable_isNewReconciler:!1},Tk={readContext:en,useCallback:function(t,e){return In().memoizedState=[t,e===void 0?null:e],t},useContext:en,useEffect:Ag,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ml(4194308,4,mw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ml(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ml(4,2,t,e)},useMemo:function(t,e){var n=In();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=In();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=wk.bind(null,Re,t),[r.memoizedState,t]},useRef:function(t){var e=In();return t={current:t},e.memoizedState=t},useState:kg,useDebugValue:$f,useDeferredValue:function(t){return In().memoizedState=t},useTransition:function(){var t=kg(!1),e=t[0];return t=vk.bind(null,t[1]),In().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Re,i=In();if(Ae){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Ze===null)throw Error(F(349));Ai&30||aw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ag(uw.bind(null,r,s,t),[t]),r.flags|=2048,fa(9,lw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=In(),e=Ze.identifierPrefix;if(Ae){var n=Wn,r=qn;n=(r&~(1<<32-fn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ha++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_k++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ik={readContext:en,useCallback:yw,useContext:en,useEffect:zf,useImperativeHandle:gw,useInsertionEffect:fw,useLayoutEffect:pw,useMemo:_w,useReducer:ph,useRef:dw,useState:function(){return ph(da)},useDebugValue:$f,useDeferredValue:function(t){var e=tn();return vw(e,We.memoizedState,t)},useTransition:function(){var t=ph(da)[0],e=tn().memoizedState;return[t,e]},useMutableSource:sw,useSyncExternalStore:ow,useId:ww,unstable_isNewReconciler:!1},Sk={readContext:en,useCallback:yw,useContext:en,useEffect:zf,useImperativeHandle:gw,useInsertionEffect:fw,useLayoutEffect:pw,useMemo:_w,useReducer:mh,useRef:dw,useState:function(){return mh(da)},useDebugValue:$f,useDeferredValue:function(t){var e=tn();return We===null?e.memoizedState=t:vw(e,We.memoizedState,t)},useTransition:function(){var t=mh(da)[0],e=tn().memoizedState;return[t,e]},useMutableSource:sw,useSyncExternalStore:ow,useId:ww,unstable_isNewReconciler:!1};function ln(t,e){if(t&&t.defaultProps){e=Pe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function md(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Pe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tc={isMounted:function(t){return(t=t._reactInternals)?Mi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=_t(),i=Dr(t),s=Kn(r,i);s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,i),e!==null&&(pn(e,t,i,r),Ol(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=_t(),i=Dr(t),s=Kn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,i),e!==null&&(pn(e,t,i,r),Ol(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=_t(),r=Dr(t),i=Kn(n,r);i.tag=2,e!=null&&(i.callback=e),e=xr(t,i,r),e!==null&&(pn(e,t,r,n),Ol(e,t,r))}};function Cg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!sa(n,r)||!sa(i,s):!0}function Sw(t,e,n){var r=!1,i=Br,s=e.contextType;return typeof s=="object"&&s!==null?s=en(s):(i=xt(e)?Si:ft.current,r=e.contextTypes,s=(r=r!=null)?Cs(t,i):Br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Rg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&tc.enqueueReplaceState(e,e.state,null)}function gd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Vf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=en(s):(s=xt(e)?Si:ft.current,i.context=Cs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(md(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&tc.enqueueReplaceState(i,i.state,null),fu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function xs(t,e){try{var n="",r=e;do n+=X0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function gh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function yd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var kk=typeof WeakMap=="function"?WeakMap:Map;function kw(t,e,n){n=Kn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){_u||(_u=!0,Cd=r),yd(t,e)},n}function Aw(t,e,n){n=Kn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){yd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){yd(t,e),typeof r!="function"&&(br===null?br=new Set([this]):br.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Pg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new kk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=jk.bind(null,t,e,n),e.then(t,t))}function Ng(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Kn(-1,1),e.tag=2,xr(n,e,1))),n.lanes|=1),t)}var Ak=sr.ReactCurrentOwner,Rt=!1;function yt(t,e,n,r){e.child=t===null?tw(e,null,n,r):Ps(e,t.child,n,r)}function bg(t,e,n,r,i){n=n.render;var s=e.ref;return _s(e,i),r=Uf(t,e,n,r,s,i),n=Bf(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,er(t,e,i)):(Ae&&n&&Rf(e),e.flags|=1,yt(t,e,r,i),e.child)}function Dg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Jf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Cw(t,e,s,r,i)):(t=Ul(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:sa,n(o,r)&&t.ref===e.ref)return er(t,e,i)}return e.flags|=1,t=Or(s,r),t.ref=e.ref,t.return=e,e.child=t}function Cw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(sa(s,r)&&t.ref===e.ref)if(Rt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Rt=!0);else return e.lanes=t.lanes,er(t,e,i)}return _d(t,e,n,r,i)}function Rw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(ds,Ft),Ft|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ee(ds,Ft),Ft|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ee(ds,Ft),Ft|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ee(ds,Ft),Ft|=r;return yt(t,e,i,n),e.child}function Pw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _d(t,e,n,r,i){var s=xt(n)?Si:ft.current;return s=Cs(e,s),_s(e,i),n=Uf(t,e,n,r,s,i),r=Bf(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,er(t,e,i)):(Ae&&r&&Rf(e),e.flags|=1,yt(t,e,n,i),e.child)}function Og(t,e,n,r,i){if(xt(n)){var s=!0;lu(e)}else s=!1;if(_s(e,i),e.stateNode===null)Ll(t,e),Sw(e,n,r),gd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=en(h):(h=xt(n)?Si:ft.current,h=Cs(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Rg(e,o,r,h),gr=!1;var m=e.memoizedState;o.state=m,fu(e,r,o,i),u=e.memoizedState,l!==r||m!==u||Nt.current||gr?(typeof f=="function"&&(md(e,n,f,r),u=e.memoizedState),(l=gr||Cg(e,n,l,r,m,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,rw(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:ln(e.type,l),o.props=h,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=en(u):(u=xt(n)?Si:ft.current,u=Cs(e,u));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Rg(e,o,r,u),gr=!1,m=e.memoizedState,o.state=m,fu(e,r,o,i);var x=e.memoizedState;l!==p||m!==x||Nt.current||gr?(typeof A=="function"&&(md(e,n,A,r),x=e.memoizedState),(h=gr||Cg(e,n,h,r,m,x,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return vd(t,e,n,r,s,i)}function vd(t,e,n,r,i,s){Pw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&vg(e,n,!1),er(t,e,s);r=e.stateNode,Ak.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ps(e,t.child,null,s),e.child=Ps(e,null,l,s)):yt(t,e,l,s),e.memoizedState=r.state,i&&vg(e,n,!0),e.child}function Nw(t){var e=t.stateNode;e.pendingContext?_g(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_g(t,e.context,!1),Mf(t,e.containerInfo)}function Vg(t,e,n,r,i){return Rs(),Nf(i),e.flags|=256,yt(t,e,n,r),e.child}var wd={dehydrated:null,treeContext:null,retryLane:0};function Ed(t){return{baseLanes:t,cachePool:null,transitions:null}}function xw(t,e,n){var r=e.pendingProps,i=Ce.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ee(Ce,i&1),t===null)return fd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ic(o,r,0,null),t=Ti(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ed(n),e.memoizedState=wd,t):qf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Ck(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Or(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Or(l,s):(s=Ti(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ed(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=wd,r}return s=t.child,t=s.sibling,r=Or(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function qf(t,e){return e=ic({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function vl(t,e,n,r){return r!==null&&Nf(r),Ps(e,t.child,null,n),t=qf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ck(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=gh(Error(F(422))),vl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ic({mode:"visible",children:r.children},i,0,null),s=Ti(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ps(e,t.child,null,o),e.child.memoizedState=Ed(o),e.memoizedState=wd,s);if(!(e.mode&1))return vl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=gh(s,r,void 0),vl(t,e,o,r)}if(l=(o&t.childLanes)!==0,Rt||l){if(r=Ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Zn(t,i),pn(r,t,i,-1))}return Yf(),r=gh(Error(F(421))),vl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Uk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ut=Nr(i.nextSibling),Bt=e,Ae=!0,cn=null,t!==null&&(Kt[Qt++]=qn,Kt[Qt++]=Wn,Kt[Qt++]=ki,qn=t.id,Wn=t.overflow,ki=e),e=qf(e,r.children),e.flags|=4096,e)}function Mg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),pd(t.return,e,n)}function yh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function bw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(yt(t,e,r.children,n),r=Ce.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mg(t,n,e);else if(t.tag===19)Mg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ee(Ce,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&pu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),yh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&pu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}yh(e,!0,n,null,s);break;case"together":yh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ll(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ci|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Rk(t,e,n){switch(e.tag){case 3:Nw(e),Rs();break;case 5:iw(e);break;case 1:xt(e.type)&&lu(e);break;case 4:Mf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ee(hu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ee(Ce,Ce.current&1),e.flags|=128,null):n&e.child.childLanes?xw(t,e,n):(Ee(Ce,Ce.current&1),t=er(t,e,n),t!==null?t.sibling:null);Ee(Ce,Ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return bw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ee(Ce,Ce.current),r)break;return null;case 22:case 23:return e.lanes=0,Rw(t,e,n)}return er(t,e,n)}var Dw,Td,Ow,Vw;Dw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Td=function(){};Ow=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,_i(Rn.current);var s=null;switch(n){case"input":i=qh(t,i),r=qh(t,r),s=[];break;case"select":i=Pe({},i,{value:void 0}),r=Pe({},r,{value:void 0}),s=[];break;case"textarea":i=Gh(t,i),r=Gh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ou)}Qh(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Xo.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Xo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&Ie("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};Vw=function(t,e,n,r){n!==r&&(e.flags|=4)};function wo(t,e){if(!Ae)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function lt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Pk(t,e,n){var r=e.pendingProps;switch(Pf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(e),null;case 1:return xt(e.type)&&au(),lt(e),null;case 3:return r=e.stateNode,Ns(),ke(Nt),ke(ft),Ff(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(yl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,cn!==null&&(Nd(cn),cn=null))),Td(t,e),lt(e),null;case 5:Lf(e);var i=_i(ca.current);if(n=e.type,t!==null&&e.stateNode!=null)Ow(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return lt(e),null}if(t=_i(Rn.current),yl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[kn]=e,r[la]=s,t=(e.mode&1)!==0,n){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(i=0;i<Ro.length;i++)Ie(Ro[i],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":Wm(r,s),Ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ie("invalid",r);break;case"textarea":Gm(r,s),Ie("invalid",r)}Qh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&gl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&gl(r.textContent,l,t),i=["children",""+l]):Xo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ie("scroll",r)}switch(n){case"input":ll(r),Hm(r,s,!0);break;case"textarea":ll(r),Km(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ou)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=uv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[kn]=e,t[la]=r,Dw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Yh(n,r),n){case"dialog":Ie("cancel",t),Ie("close",t),i=r;break;case"iframe":case"object":case"embed":Ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ro.length;i++)Ie(Ro[i],t);i=r;break;case"source":Ie("error",t),i=r;break;case"img":case"image":case"link":Ie("error",t),Ie("load",t),i=r;break;case"details":Ie("toggle",t),i=r;break;case"input":Wm(t,r),i=qh(t,r),Ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Pe({},r,{value:void 0}),Ie("invalid",t);break;case"textarea":Gm(t,r),i=Gh(t,r),Ie("invalid",t);break;default:i=r}Qh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?dv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&cv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Zo(t,u):typeof u=="number"&&Zo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ie("scroll",t):u!=null&&pf(t,s,u,o))}switch(n){case"input":ll(t),Hm(t,r,!1);break;case"textarea":ll(t),Km(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ur(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ps(t,!!r.multiple,s,!1):r.defaultValue!=null&&ps(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ou)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return lt(e),null;case 6:if(t&&e.stateNode!=null)Vw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=_i(ca.current),_i(Rn.current),yl(e)){if(r=e.stateNode,n=e.memoizedProps,r[kn]=e,(s=r.nodeValue!==n)&&(t=Bt,t!==null))switch(t.tag){case 3:gl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&gl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kn]=e,e.stateNode=r}return lt(e),null;case 13:if(ke(Ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ae&&Ut!==null&&e.mode&1&&!(e.flags&128))Zv(),Rs(),e.flags|=98560,s=!1;else if(s=yl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[kn]=e}else Rs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;lt(e),s=!1}else cn!==null&&(Nd(cn),cn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ce.current&1?He===0&&(He=3):Yf())),e.updateQueue!==null&&(e.flags|=4),lt(e),null);case 4:return Ns(),Td(t,e),t===null&&oa(e.stateNode.containerInfo),lt(e),null;case 10:return Df(e.type._context),lt(e),null;case 17:return xt(e.type)&&au(),lt(e),null;case 19:if(ke(Ce),s=e.memoizedState,s===null)return lt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)wo(s,!1);else{if(He!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=pu(t),o!==null){for(e.flags|=128,wo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ee(Ce,Ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&Me()>bs&&(e.flags|=128,r=!0,wo(s,!1),e.lanes=4194304)}else{if(!r)if(t=pu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),wo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ae)return lt(e),null}else 2*Me()-s.renderingStartTime>bs&&n!==1073741824&&(e.flags|=128,r=!0,wo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Me(),e.sibling=null,n=Ce.current,Ee(Ce,r?n&1|2:n&1),e):(lt(e),null);case 22:case 23:return Qf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ft&1073741824&&(lt(e),e.subtreeFlags&6&&(e.flags|=8192)):lt(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function Nk(t,e){switch(Pf(e),e.tag){case 1:return xt(e.type)&&au(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ns(),ke(Nt),ke(ft),Ff(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Lf(e),null;case 13:if(ke(Ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Rs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ke(Ce),null;case 4:return Ns(),null;case 10:return Df(e.type._context),null;case 22:case 23:return Qf(),null;case 24:return null;default:return null}}var wl=!1,ht=!1,xk=typeof WeakSet=="function"?WeakSet:Set,G=null;function hs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(t,e,r)}else n.current=null}function Id(t,e,n){try{n()}catch(r){Oe(t,e,r)}}var Lg=!1;function bk(t,e){if(od=ru,t=Uv(),Cf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,m=null;t:for(;;){for(var A;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(A=p.firstChild)!==null;)m=p,p=A;for(;;){if(p===t)break t;if(m===n&&++h===i&&(l=o),m===s&&++f===r&&(u=o),(A=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ad={focusedElem:t,selectionRange:n},ru=!1,G=e;G!==null;)if(e=G,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,G=t;else for(;G!==null;){e=G;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var D=x.memoizedProps,L=x.memoizedState,S=e.stateNode,w=S.getSnapshotBeforeUpdate(e.elementType===e.type?D:ln(e.type,D),L);S.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(O){Oe(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,G=t;break}G=e.return}return x=Lg,Lg=!1,x}function zo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Id(e,n,s)}i=i.next}while(i!==r)}}function nc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Sd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Mw(t){var e=t.alternate;e!==null&&(t.alternate=null,Mw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[kn],delete e[la],delete e[cd],delete e[pk],delete e[mk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Lw(t){return t.tag===5||t.tag===3||t.tag===4}function Fg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Lw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ou));else if(r!==4&&(t=t.child,t!==null))for(kd(t,e,n),t=t.sibling;t!==null;)kd(t,e,n),t=t.sibling}function Ad(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ad(t,e,n),t=t.sibling;t!==null;)Ad(t,e,n),t=t.sibling}var et=null,un=!1;function fr(t,e,n){for(n=n.child;n!==null;)Fw(t,e,n),n=n.sibling}function Fw(t,e,n){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount(Ku,n)}catch{}switch(n.tag){case 5:ht||hs(n,e);case 6:var r=et,i=un;et=null,fr(t,e,n),et=r,un=i,et!==null&&(un?(t=et,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):et.removeChild(n.stateNode));break;case 18:et!==null&&(un?(t=et,n=n.stateNode,t.nodeType===8?ch(t.parentNode,n):t.nodeType===1&&ch(t,n),ra(t)):ch(et,n.stateNode));break;case 4:r=et,i=un,et=n.stateNode.containerInfo,un=!0,fr(t,e,n),et=r,un=i;break;case 0:case 11:case 14:case 15:if(!ht&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Id(n,e,o),i=i.next}while(i!==r)}fr(t,e,n);break;case 1:if(!ht&&(hs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Oe(n,e,l)}fr(t,e,n);break;case 21:fr(t,e,n);break;case 22:n.mode&1?(ht=(r=ht)||n.memoizedState!==null,fr(t,e,n),ht=r):fr(t,e,n);break;default:fr(t,e,n)}}function jg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new xk),e.forEach(function(r){var i=Bk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function an(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:et=l.stateNode,un=!1;break e;case 3:et=l.stateNode.containerInfo,un=!0;break e;case 4:et=l.stateNode.containerInfo,un=!0;break e}l=l.return}if(et===null)throw Error(F(160));Fw(s,o,i),et=null,un=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Oe(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)jw(e,t),e=e.sibling}function jw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(an(e,t),Tn(t),r&4){try{zo(3,t,t.return),nc(3,t)}catch(D){Oe(t,t.return,D)}try{zo(5,t,t.return)}catch(D){Oe(t,t.return,D)}}break;case 1:an(e,t),Tn(t),r&512&&n!==null&&hs(n,n.return);break;case 5:if(an(e,t),Tn(t),r&512&&n!==null&&hs(n,n.return),t.flags&32){var i=t.stateNode;try{Zo(i,"")}catch(D){Oe(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&av(i,s),Yh(l,o);var h=Yh(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?dv(i,p):f==="dangerouslySetInnerHTML"?cv(i,p):f==="children"?Zo(i,p):pf(i,f,p,h)}switch(l){case"input":Wh(i,s);break;case"textarea":lv(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?ps(i,!!s.multiple,A,!1):m!==!!s.multiple&&(s.defaultValue!=null?ps(i,!!s.multiple,s.defaultValue,!0):ps(i,!!s.multiple,s.multiple?[]:"",!1))}i[la]=s}catch(D){Oe(t,t.return,D)}}break;case 6:if(an(e,t),Tn(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(D){Oe(t,t.return,D)}}break;case 3:if(an(e,t),Tn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ra(e.containerInfo)}catch(D){Oe(t,t.return,D)}break;case 4:an(e,t),Tn(t);break;case 13:an(e,t),Tn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Gf=Me())),r&4&&jg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(ht=(h=ht)||f,an(e,t),ht=h):an(e,t),Tn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(G=t,f=t.child;f!==null;){for(p=G=f;G!==null;){switch(m=G,A=m.child,m.tag){case 0:case 11:case 14:case 15:zo(4,m,m.return);break;case 1:hs(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(D){Oe(r,n,D)}}break;case 5:hs(m,m.return);break;case 22:if(m.memoizedState!==null){Bg(p);continue}}A!==null?(A.return=m,G=A):Bg(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=hv("display",o))}catch(D){Oe(t,t.return,D)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(D){Oe(t,t.return,D)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:an(e,t),Tn(t),r&4&&jg(t);break;case 21:break;default:an(e,t),Tn(t)}}function Tn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Lw(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Zo(i,""),r.flags&=-33);var s=Fg(t);Ad(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Fg(t);kd(t,l,o);break;default:throw Error(F(161))}}catch(u){Oe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Dk(t,e,n){G=t,Uw(t)}function Uw(t,e,n){for(var r=(t.mode&1)!==0;G!==null;){var i=G,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||wl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ht;l=wl;var h=ht;if(wl=o,(ht=u)&&!h)for(G=i;G!==null;)o=G,u=o.child,o.tag===22&&o.memoizedState!==null?zg(i):u!==null?(u.return=o,G=u):zg(i);for(;s!==null;)G=s,Uw(s),s=s.sibling;G=i,wl=l,ht=h}Ug(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,G=s):Ug(t)}}function Ug(t){for(;G!==null;){var e=G;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ht||nc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ht)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ln(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Sg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Sg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&ra(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}ht||e.flags&512&&Sd(e)}catch(m){Oe(e,e.return,m)}}if(e===t){G=null;break}if(n=e.sibling,n!==null){n.return=e.return,G=n;break}G=e.return}}function Bg(t){for(;G!==null;){var e=G;if(e===t){G=null;break}var n=e.sibling;if(n!==null){n.return=e.return,G=n;break}G=e.return}}function zg(t){for(;G!==null;){var e=G;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{nc(4,e)}catch(u){Oe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Oe(e,i,u)}}var s=e.return;try{Sd(e)}catch(u){Oe(e,s,u)}break;case 5:var o=e.return;try{Sd(e)}catch(u){Oe(e,o,u)}}}catch(u){Oe(e,e.return,u)}if(e===t){G=null;break}var l=e.sibling;if(l!==null){l.return=e.return,G=l;break}G=e.return}}var Ok=Math.ceil,yu=sr.ReactCurrentDispatcher,Wf=sr.ReactCurrentOwner,Zt=sr.ReactCurrentBatchConfig,de=0,Ze=null,Ue=null,rt=0,Ft=0,ds=Yr(0),He=0,pa=null,Ci=0,rc=0,Hf=0,$o=null,Ct=null,Gf=0,bs=1/0,Bn=null,_u=!1,Cd=null,br=null,El=!1,kr=null,vu=0,qo=0,Rd=null,Fl=-1,jl=0;function _t(){return de&6?Me():Fl!==-1?Fl:Fl=Me()}function Dr(t){return t.mode&1?de&2&&rt!==0?rt&-rt:yk.transition!==null?(jl===0&&(jl=Sv()),jl):(t=ge,t!==0||(t=window.event,t=t===void 0?16:xv(t.type)),t):1}function pn(t,e,n,r){if(50<qo)throw qo=0,Rd=null,Error(F(185));Ca(t,n,r),(!(de&2)||t!==Ze)&&(t===Ze&&(!(de&2)&&(rc|=n),He===4&&_r(t,rt)),bt(t,r),n===1&&de===0&&!(e.mode&1)&&(bs=Me()+500,Zu&&Jr()))}function bt(t,e){var n=t.callbackNode;yS(t,e);var r=nu(t,t===Ze?rt:0);if(r===0)n!==null&&Jm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Jm(n),e===1)t.tag===0?gk($g.bind(null,t)):Yv($g.bind(null,t)),dk(function(){!(de&6)&&Jr()}),n=null;else{switch(kv(r)){case 1:n=vf;break;case 4:n=Tv;break;case 16:n=tu;break;case 536870912:n=Iv;break;default:n=tu}n=Kw(n,Bw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Bw(t,e){if(Fl=-1,jl=0,de&6)throw Error(F(327));var n=t.callbackNode;if(vs()&&t.callbackNode!==n)return null;var r=nu(t,t===Ze?rt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=wu(t,r);else{e=r;var i=de;de|=2;var s=$w();(Ze!==t||rt!==e)&&(Bn=null,bs=Me()+500,Ei(t,e));do try{Lk();break}catch(l){zw(t,l)}while(!0);bf(),yu.current=s,de=i,Ue!==null?e=0:(Ze=null,rt=0,e=He)}if(e!==0){if(e===2&&(i=td(t),i!==0&&(r=i,e=Pd(t,i))),e===1)throw n=pa,Ei(t,0),_r(t,r),bt(t,Me()),n;if(e===6)_r(t,r);else{if(i=t.current.alternate,!(r&30)&&!Vk(i)&&(e=wu(t,r),e===2&&(s=td(t),s!==0&&(r=s,e=Pd(t,s))),e===1))throw n=pa,Ei(t,0),_r(t,r),bt(t,Me()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:pi(t,Ct,Bn);break;case 3:if(_r(t,r),(r&130023424)===r&&(e=Gf+500-Me(),10<e)){if(nu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){_t(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ud(pi.bind(null,t,Ct,Bn),e);break}pi(t,Ct,Bn);break;case 4:if(_r(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-fn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ok(r/1960))-r,10<r){t.timeoutHandle=ud(pi.bind(null,t,Ct,Bn),r);break}pi(t,Ct,Bn);break;case 5:pi(t,Ct,Bn);break;default:throw Error(F(329))}}}return bt(t,Me()),t.callbackNode===n?Bw.bind(null,t):null}function Pd(t,e){var n=$o;return t.current.memoizedState.isDehydrated&&(Ei(t,e).flags|=256),t=wu(t,e),t!==2&&(e=Ct,Ct=n,e!==null&&Nd(e)),t}function Nd(t){Ct===null?Ct=t:Ct.push.apply(Ct,t)}function Vk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!mn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _r(t,e){for(e&=~Hf,e&=~rc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-fn(e),r=1<<n;t[n]=-1,e&=~r}}function $g(t){if(de&6)throw Error(F(327));vs();var e=nu(t,0);if(!(e&1))return bt(t,Me()),null;var n=wu(t,e);if(t.tag!==0&&n===2){var r=td(t);r!==0&&(e=r,n=Pd(t,r))}if(n===1)throw n=pa,Ei(t,0),_r(t,e),bt(t,Me()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,pi(t,Ct,Bn),bt(t,Me()),null}function Kf(t,e){var n=de;de|=1;try{return t(e)}finally{de=n,de===0&&(bs=Me()+500,Zu&&Jr())}}function Ri(t){kr!==null&&kr.tag===0&&!(de&6)&&vs();var e=de;de|=1;var n=Zt.transition,r=ge;try{if(Zt.transition=null,ge=1,t)return t()}finally{ge=r,Zt.transition=n,de=e,!(de&6)&&Jr()}}function Qf(){Ft=ds.current,ke(ds)}function Ei(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,hk(n)),Ue!==null)for(n=Ue.return;n!==null;){var r=n;switch(Pf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&au();break;case 3:Ns(),ke(Nt),ke(ft),Ff();break;case 5:Lf(r);break;case 4:Ns();break;case 13:ke(Ce);break;case 19:ke(Ce);break;case 10:Df(r.type._context);break;case 22:case 23:Qf()}n=n.return}if(Ze=t,Ue=t=Or(t.current,null),rt=Ft=e,He=0,pa=null,Hf=rc=Ci=0,Ct=$o=null,yi!==null){for(e=0;e<yi.length;e++)if(n=yi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}yi=null}return t}function zw(t,e){do{var n=Ue;try{if(bf(),Vl.current=gu,mu){for(var r=Re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}mu=!1}if(Ai=0,Xe=We=Re=null,Bo=!1,ha=0,Wf.current=null,n===null||n.return===null){He=1,pa=e,Ue=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=rt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=Ng(o);if(A!==null){A.flags&=-257,xg(A,o,l,s,e),A.mode&1&&Pg(s,h,e),e=A,u=h;var x=e.updateQueue;if(x===null){var D=new Set;D.add(u),e.updateQueue=D}else x.add(u);break e}else{if(!(e&1)){Pg(s,h,e),Yf();break e}u=Error(F(426))}}else if(Ae&&l.mode&1){var L=Ng(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),xg(L,o,l,s,e),Nf(xs(u,l));break e}}s=u=xs(u,l),He!==4&&(He=2),$o===null?$o=[s]:$o.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=kw(s,u,e);Ig(s,S);break e;case 1:l=u;var w=s.type,C=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(br===null||!br.has(C)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=Aw(s,l,e);Ig(s,O);break e}}s=s.return}while(s!==null)}Ww(n)}catch(B){e=B,Ue===n&&n!==null&&(Ue=n=n.return);continue}break}while(!0)}function $w(){var t=yu.current;return yu.current=gu,t===null?gu:t}function Yf(){(He===0||He===3||He===2)&&(He=4),Ze===null||!(Ci&268435455)&&!(rc&268435455)||_r(Ze,rt)}function wu(t,e){var n=de;de|=2;var r=$w();(Ze!==t||rt!==e)&&(Bn=null,Ei(t,e));do try{Mk();break}catch(i){zw(t,i)}while(!0);if(bf(),de=n,yu.current=r,Ue!==null)throw Error(F(261));return Ze=null,rt=0,He}function Mk(){for(;Ue!==null;)qw(Ue)}function Lk(){for(;Ue!==null&&!lS();)qw(Ue)}function qw(t){var e=Gw(t.alternate,t,Ft);t.memoizedProps=t.pendingProps,e===null?Ww(t):Ue=e,Wf.current=null}function Ww(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Nk(n,e),n!==null){n.flags&=32767,Ue=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{He=6,Ue=null;return}}else if(n=Pk(n,e,Ft),n!==null){Ue=n;return}if(e=e.sibling,e!==null){Ue=e;return}Ue=e=t}while(e!==null);He===0&&(He=5)}function pi(t,e,n){var r=ge,i=Zt.transition;try{Zt.transition=null,ge=1,Fk(t,e,n,r)}finally{Zt.transition=i,ge=r}return null}function Fk(t,e,n,r){do vs();while(kr!==null);if(de&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(_S(t,s),t===Ze&&(Ue=Ze=null,rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||El||(El=!0,Kw(tu,function(){return vs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Zt.transition,Zt.transition=null;var o=ge;ge=1;var l=de;de|=4,Wf.current=null,bk(t,n),jw(n,t),ik(ad),ru=!!od,ad=od=null,t.current=n,Dk(n),uS(),de=l,ge=o,Zt.transition=s}else t.current=n;if(El&&(El=!1,kr=t,vu=i),s=t.pendingLanes,s===0&&(br=null),dS(n.stateNode),bt(t,Me()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(_u)throw _u=!1,t=Cd,Cd=null,t;return vu&1&&t.tag!==0&&vs(),s=t.pendingLanes,s&1?t===Rd?qo++:(qo=0,Rd=t):qo=0,Jr(),null}function vs(){if(kr!==null){var t=kv(vu),e=Zt.transition,n=ge;try{if(Zt.transition=null,ge=16>t?16:t,kr===null)var r=!1;else{if(t=kr,kr=null,vu=0,de&6)throw Error(F(331));var i=de;for(de|=4,G=t.current;G!==null;){var s=G,o=s.child;if(G.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(G=h;G!==null;){var f=G;switch(f.tag){case 0:case 11:case 15:zo(8,f,s)}var p=f.child;if(p!==null)p.return=f,G=p;else for(;G!==null;){f=G;var m=f.sibling,A=f.return;if(Mw(f),f===h){G=null;break}if(m!==null){m.return=A,G=m;break}G=A}}}var x=s.alternate;if(x!==null){var D=x.child;if(D!==null){x.child=null;do{var L=D.sibling;D.sibling=null,D=L}while(D!==null)}}G=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,G=o;else e:for(;G!==null;){if(s=G,s.flags&2048)switch(s.tag){case 0:case 11:case 15:zo(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,G=S;break e}G=s.return}}var w=t.current;for(G=w;G!==null;){o=G;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,G=C;else e:for(o=w;G!==null;){if(l=G,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:nc(9,l)}}catch(B){Oe(l,l.return,B)}if(l===o){G=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,G=O;break e}G=l.return}}if(de=i,Jr(),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot(Ku,t)}catch{}r=!0}return r}finally{ge=n,Zt.transition=e}}return!1}function qg(t,e,n){e=xs(n,e),e=kw(t,e,1),t=xr(t,e,1),e=_t(),t!==null&&(Ca(t,1,e),bt(t,e))}function Oe(t,e,n){if(t.tag===3)qg(t,t,n);else for(;e!==null;){if(e.tag===3){qg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(br===null||!br.has(r))){t=xs(n,t),t=Aw(e,t,1),e=xr(e,t,1),t=_t(),e!==null&&(Ca(e,1,t),bt(e,t));break}}e=e.return}}function jk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=_t(),t.pingedLanes|=t.suspendedLanes&n,Ze===t&&(rt&n)===n&&(He===4||He===3&&(rt&130023424)===rt&&500>Me()-Gf?Ei(t,0):Hf|=n),bt(t,e)}function Hw(t,e){e===0&&(t.mode&1?(e=hl,hl<<=1,!(hl&130023424)&&(hl=4194304)):e=1);var n=_t();t=Zn(t,e),t!==null&&(Ca(t,e,n),bt(t,n))}function Uk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Hw(t,n)}function Bk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Hw(t,n)}var Gw;Gw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Nt.current)Rt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Rt=!1,Rk(t,e,n);Rt=!!(t.flags&131072)}else Rt=!1,Ae&&e.flags&1048576&&Jv(e,cu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ll(t,e),t=e.pendingProps;var i=Cs(e,ft.current);_s(e,n),i=Uf(null,e,r,t,i,n);var s=Bf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xt(r)?(s=!0,lu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vf(e),i.updater=tc,e.stateNode=i,i._reactInternals=e,gd(e,r,t,n),e=vd(null,e,r,!0,s,n)):(e.tag=0,Ae&&s&&Rf(e),yt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ll(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=$k(r),t=ln(r,t),i){case 0:e=_d(null,e,r,t,n);break e;case 1:e=Og(null,e,r,t,n);break e;case 11:e=bg(null,e,r,t,n);break e;case 14:e=Dg(null,e,r,ln(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),_d(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),Og(t,e,r,i,n);case 3:e:{if(Nw(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,rw(t,e),fu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=xs(Error(F(423)),e),e=Vg(t,e,r,n,i);break e}else if(r!==i){i=xs(Error(F(424)),e),e=Vg(t,e,r,n,i);break e}else for(Ut=Nr(e.stateNode.containerInfo.firstChild),Bt=e,Ae=!0,cn=null,n=tw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rs(),r===i){e=er(t,e,n);break e}yt(t,e,r,n)}e=e.child}return e;case 5:return iw(e),t===null&&fd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ld(r,i)?o=null:s!==null&&ld(r,s)&&(e.flags|=32),Pw(t,e),yt(t,e,o,n),e.child;case 6:return t===null&&fd(e),null;case 13:return xw(t,e,n);case 4:return Mf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ps(e,null,r,n):yt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),bg(t,e,r,i,n);case 7:return yt(t,e,e.pendingProps,n),e.child;case 8:return yt(t,e,e.pendingProps.children,n),e.child;case 12:return yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ee(hu,r._currentValue),r._currentValue=o,s!==null)if(mn(s.value,o)){if(s.children===i.children&&!Nt.current){e=er(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Kn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),pd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),pd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}yt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,_s(e,n),i=en(i),r=r(i),e.flags|=1,yt(t,e,r,n),e.child;case 14:return r=e.type,i=ln(r,e.pendingProps),i=ln(r.type,i),Dg(t,e,r,i,n);case 15:return Cw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),Ll(t,e),e.tag=1,xt(r)?(t=!0,lu(e)):t=!1,_s(e,n),Sw(e,r,i),gd(e,r,i,n),vd(null,e,r,!0,t,n);case 19:return bw(t,e,n);case 22:return Rw(t,e,n)}throw Error(F(156,e.tag))};function Kw(t,e){return Ev(t,e)}function zk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(t,e,n,r){return new zk(t,e,n,r)}function Jf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $k(t){if(typeof t=="function")return Jf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===gf)return 11;if(t===yf)return 14}return 2}function Or(t,e){var n=t.alternate;return n===null?(n=Xt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ul(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Jf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ns:return Ti(n.children,i,s,e);case mf:o=8,i|=8;break;case Uh:return t=Xt(12,n,e,i|2),t.elementType=Uh,t.lanes=s,t;case Bh:return t=Xt(13,n,e,i),t.elementType=Bh,t.lanes=s,t;case zh:return t=Xt(19,n,e,i),t.elementType=zh,t.lanes=s,t;case iv:return ic(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case nv:o=10;break e;case rv:o=9;break e;case gf:o=11;break e;case yf:o=14;break e;case mr:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Xt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ti(t,e,n,r){return t=Xt(7,t,r,e),t.lanes=n,t}function ic(t,e,n,r){return t=Xt(22,t,r,e),t.elementType=iv,t.lanes=n,t.stateNode={isHidden:!1},t}function _h(t,e,n){return t=Xt(6,t,null,e),t.lanes=n,t}function vh(t,e,n){return e=Xt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function qk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zc(0),this.expirationTimes=Zc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xf(t,e,n,r,i,s,o,l,u){return t=new qk(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vf(s),t}function Wk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ts,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Qw(t){if(!t)return Br;t=t._reactInternals;e:{if(Mi(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(xt(n))return Qv(t,n,e)}return e}function Yw(t,e,n,r,i,s,o,l,u){return t=Xf(n,r,!0,t,i,s,o,l,u),t.context=Qw(null),n=t.current,r=_t(),i=Dr(n),s=Kn(r,i),s.callback=e??null,xr(n,s,i),t.current.lanes=i,Ca(t,i,r),bt(t,r),t}function sc(t,e,n,r){var i=e.current,s=_t(),o=Dr(i);return n=Qw(n),e.context===null?e.context=n:e.pendingContext=n,e=Kn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=xr(i,e,o),t!==null&&(pn(t,i,o,s),Ol(t,i,o)),o}function Eu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Zf(t,e){Wg(t,e),(t=t.alternate)&&Wg(t,e)}function Hk(){return null}var Jw=typeof reportError=="function"?reportError:function(t){console.error(t)};function ep(t){this._internalRoot=t}oc.prototype.render=ep.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));sc(t,e,null,null)};oc.prototype.unmount=ep.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ri(function(){sc(null,t,null,null)}),e[Xn]=null}};function oc(t){this._internalRoot=t}oc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Rv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<yr.length&&e!==0&&e<yr[n].priority;n++);yr.splice(n,0,t),n===0&&Nv(t)}};function tp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ac(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hg(){}function Gk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=Eu(o);s.call(h)}}var o=Yw(e,r,t,0,null,!1,!1,"",Hg);return t._reactRootContainer=o,t[Xn]=o.current,oa(t.nodeType===8?t.parentNode:t),Ri(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=Eu(u);l.call(h)}}var u=Xf(t,0,!1,null,null,!1,!1,"",Hg);return t._reactRootContainer=u,t[Xn]=u.current,oa(t.nodeType===8?t.parentNode:t),Ri(function(){sc(e,u,n,r)}),u}function lc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Eu(o);l.call(u)}}sc(e,o,t,i)}else o=Gk(n,e,t,i,r);return Eu(o)}Av=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Co(e.pendingLanes);n!==0&&(wf(e,n|1),bt(e,Me()),!(de&6)&&(bs=Me()+500,Jr()))}break;case 13:Ri(function(){var r=Zn(t,1);if(r!==null){var i=_t();pn(r,t,1,i)}}),Zf(t,1)}};Ef=function(t){if(t.tag===13){var e=Zn(t,134217728);if(e!==null){var n=_t();pn(e,t,134217728,n)}Zf(t,134217728)}};Cv=function(t){if(t.tag===13){var e=Dr(t),n=Zn(t,e);if(n!==null){var r=_t();pn(n,t,e,r)}Zf(t,e)}};Rv=function(){return ge};Pv=function(t,e){var n=ge;try{return ge=t,e()}finally{ge=n}};Xh=function(t,e,n){switch(e){case"input":if(Wh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Xu(r);if(!i)throw Error(F(90));ov(r),Wh(r,i)}}}break;case"textarea":lv(t,n);break;case"select":e=n.value,e!=null&&ps(t,!!n.multiple,e,!1)}};mv=Kf;gv=Ri;var Kk={usingClientEntryPoint:!1,Events:[Pa,os,Xu,fv,pv,Kf]},Eo={findFiberByHostInstance:gi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qk={bundleType:Eo.bundleType,version:Eo.version,rendererPackageName:Eo.rendererPackageName,rendererConfig:Eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vv(t),t===null?null:t.stateNode},findFiberByHostInstance:Eo.findFiberByHostInstance||Hk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tl.isDisabled&&Tl.supportsFiber)try{Ku=Tl.inject(Qk),Cn=Tl}catch{}}qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kk;qt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tp(e))throw Error(F(200));return Wk(t,e,null,n)};qt.createRoot=function(t,e){if(!tp(t))throw Error(F(299));var n=!1,r="",i=Jw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Xf(t,1,!1,null,null,n,!1,r,i),t[Xn]=e.current,oa(t.nodeType===8?t.parentNode:t),new ep(e)};qt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=vv(e),t=t===null?null:t.stateNode,t};qt.flushSync=function(t){return Ri(t)};qt.hydrate=function(t,e,n){if(!ac(e))throw Error(F(200));return lc(null,t,e,!0,n)};qt.hydrateRoot=function(t,e,n){if(!tp(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Jw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Yw(e,null,t,1,n??null,i,!1,s,o),t[Xn]=e.current,oa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new oc(e)};qt.render=function(t,e,n){if(!ac(e))throw Error(F(200));return lc(null,t,e,!1,n)};qt.unmountComponentAtNode=function(t){if(!ac(t))throw Error(F(40));return t._reactRootContainer?(Ri(function(){lc(null,null,t,!1,function(){t._reactRootContainer=null,t[Xn]=null})}),!0):!1};qt.unstable_batchedUpdates=Kf;qt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ac(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return lc(t,e,n,!1,r)};qt.version="18.3.1-next-f1338f8080-20240426";function Xw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xw)}catch(t){console.error(t)}}Xw(),X_.exports=qt;var Yk=X_.exports,Gg=Yk;Fh.createRoot=Gg.createRoot,Fh.hydrateRoot=Gg.hydrateRoot;const Jk=()=>{};var Kg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Xk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},eE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|h>>6,A=h&63;u||(A=64,o||(m=64)),r.push(n[f],n[p],n[m],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Zw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Xk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new Zk;const m=s<<2|l>>4;if(r.push(m),h!==64){const A=l<<4&240|h>>2;if(r.push(A),p!==64){const x=h<<6&192|p;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Zk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eA=function(t){const e=Zw(t);return eE.encodeByteArray(e,!0)},Tu=function(t){return eA(t).replace(/\./g,"")},tE=function(t){try{return eE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA=()=>tA().__FIREBASE_DEFAULTS__,rA=()=>{if(typeof process>"u"||typeof Kg>"u")return;const t=Kg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},iA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&tE(t[1]);return e&&JSON.parse(e)},uc=()=>{try{return Jk()||nA()||rA()||iA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},nE=t=>{var e,n;return(n=(e=uc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},rE=t=>{const e=nE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},iE=()=>{var t;return(t=uc())==null?void 0:t.config},sE=t=>{var e;return(e=uc())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function np(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Tu(JSON.stringify(n)),Tu(JSON.stringify(o)),""].join(".")}const Wo={};function aA(){const t={prod:[],emulator:[]};for(const e of Object.keys(Wo))Wo[e]?t.emulator.push(e):t.prod.push(e);return t}function lA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Qg=!1;function rp(t,e){if(typeof window>"u"||typeof document>"u"||!Xr(window.location.host)||Wo[t]===e||Wo[t]||Qg)return;Wo[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=aA().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,A){m.setAttribute("width","24"),m.setAttribute("id",A),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Qg=!0,o()},m}function f(m,A){m.setAttribute("id",A),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=lA(r),A=n("text"),x=document.getElementById(A)||document.createElement("span"),D=n("learnmore"),L=document.getElementById(D)||document.createElement("a"),S=n("preprendIcon"),w=document.getElementById(S)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const C=m.element;l(C),f(L,D);const O=h();u(w,S),C.append(w,x,L,O),document.body.appendChild(C)}s?(x.innerText="Preview backend disconnected.",w.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(w.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function cA(){var e;const t=(e=uc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function oE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fA(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pA(){return!cA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function aE(){try{return typeof indexedDB=="object"}catch{return!1}}function lE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function mA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA="FirebaseError";class Ht extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gA,Object.setPrototypeOf(this,Ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Li.prototype.create)}}class Li{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?yA(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Ht(i,l,r)}}function yA(t,e){return t.replace(_A,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const _A=/\{\$([^}]+)}/g;function vA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Yg(s)&&Yg(o)){if(!zr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Yg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Po(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function No(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function wA(t,e){const n=new EA(t,e);return n.subscribe.bind(n)}class EA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");TA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=wh),i.error===void 0&&(i.error=wh),i.complete===void 0&&(i.complete=wh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wh(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA=1e3,SA=2,kA=4*60*60*1e3,AA=.5;function Jg(t,e=IA,n=SA){const r=e*Math.pow(n,t),i=Math.round(AA*r*(Math.random()-.5)*2);return Math.min(kA,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(t){return t&&t._delegate?t._delegate:t}class nn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new sA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PA(e))try{this.getOrInitializeService({instanceIdentifier:mi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=mi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mi){return this.instances.has(e)}getOptions(e=mi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:RA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=mi){return this.component?this.component.multipleInstances?e:mi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RA(t){return t===mi?void 0:t}function PA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new CA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const xA={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},bA=le.INFO,DA={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},OA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=DA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cc{constructor(e){this.name=e,this._logLevel=bA,this._logHandler=OA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const VA=(t,e)=>e.some(n=>t instanceof n);let Xg,Zg;function MA(){return Xg||(Xg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LA(){return Zg||(Zg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uE=new WeakMap,xd=new WeakMap,cE=new WeakMap,Eh=new WeakMap,ip=new WeakMap;function FA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Vr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&uE.set(n,t)}).catch(()=>{}),ip.set(e,t),e}function jA(t){if(xd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});xd.set(t,e)}let bd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function UA(t){bd=t(bd)}function BA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Th(this),e,...n);return cE.set(r,e.sort?e.sort():[e]),Vr(r)}:LA().includes(t)?function(...e){return t.apply(Th(this),e),Vr(uE.get(this))}:function(...e){return Vr(t.apply(Th(this),e))}}function zA(t){return typeof t=="function"?BA(t):(t instanceof IDBTransaction&&jA(t),VA(t,MA())?new Proxy(t,bd):t)}function Vr(t){if(t instanceof IDBRequest)return FA(t);if(Eh.has(t))return Eh.get(t);const e=zA(t);return e!==t&&(Eh.set(t,e),ip.set(e,t)),e}const Th=t=>ip.get(t);function hE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Vr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Vr(o.result),u.oldVersion,u.newVersion,Vr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const $A=["get","getKey","getAll","getAllKeys","count"],qA=["put","add","delete","clear"],Ih=new Map;function ey(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ih.get(e))return Ih.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=qA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||$A.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Ih.set(e,s),s}UA(t=>({...t,get:(e,n,r)=>ey(e,n)||t.get(e,n,r),has:(e,n)=>!!ey(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(HA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function HA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dd="@firebase/app",ty="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=new cc("@firebase/app"),GA="@firebase/app-compat",KA="@firebase/analytics-compat",QA="@firebase/analytics",YA="@firebase/app-check-compat",JA="@firebase/app-check",XA="@firebase/auth",ZA="@firebase/auth-compat",e1="@firebase/database",t1="@firebase/data-connect",n1="@firebase/database-compat",r1="@firebase/functions",i1="@firebase/functions-compat",s1="@firebase/installations",o1="@firebase/installations-compat",a1="@firebase/messaging",l1="@firebase/messaging-compat",u1="@firebase/performance",c1="@firebase/performance-compat",h1="@firebase/remote-config",d1="@firebase/remote-config-compat",f1="@firebase/storage",p1="@firebase/storage-compat",m1="@firebase/firestore",g1="@firebase/ai",y1="@firebase/firestore-compat",_1="firebase",v1="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od="[DEFAULT]",w1={[Dd]:"fire-core",[GA]:"fire-core-compat",[QA]:"fire-analytics",[KA]:"fire-analytics-compat",[JA]:"fire-app-check",[YA]:"fire-app-check-compat",[XA]:"fire-auth",[ZA]:"fire-auth-compat",[e1]:"fire-rtdb",[t1]:"fire-data-connect",[n1]:"fire-rtdb-compat",[r1]:"fire-fn",[i1]:"fire-fn-compat",[s1]:"fire-iid",[o1]:"fire-iid-compat",[a1]:"fire-fcm",[l1]:"fire-fcm-compat",[u1]:"fire-perf",[c1]:"fire-perf-compat",[h1]:"fire-rc",[d1]:"fire-rc-compat",[f1]:"fire-gcs",[p1]:"fire-gcs-compat",[m1]:"fire-fst",[y1]:"fire-fst-compat",[g1]:"fire-vertex","fire-js":"fire-js",[_1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=new Map,E1=new Map,Vd=new Map;function ny(t,e){try{t.container.addComponent(e)}catch(n){tr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gn(t){const e=t.name;if(Vd.has(e))return tr.debug(`There were multiple attempts to register component ${e}.`),!1;Vd.set(e,t);for(const n of Iu.values())ny(n,t);for(const n of E1.values())ny(n,t);return!0}function Zr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function jt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mr=new Li("app","Firebase",T1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=v1;function dE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Od,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Mr.create("bad-app-name",{appName:String(i)});if(n||(n=iE()),!n)throw Mr.create("no-options");const s=Iu.get(i);if(s){if(zr(n,s.options)&&zr(r,s.config))return s;throw Mr.create("duplicate-app",{appName:i})}const o=new NA(i);for(const u of Vd.values())o.addComponent(u);const l=new I1(n,r,o);return Iu.set(i,l),l}function hc(t=Od){const e=Iu.get(t);if(!e&&t===Od&&iE())return dE();if(!e)throw Mr.create("no-app",{appName:t});return e}function Dt(t,e,n){let r=w1[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tr.warn(o.join(" "));return}gn(new nn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1="firebase-heartbeat-database",k1=1,ma="firebase-heartbeat-store";let Sh=null;function fE(){return Sh||(Sh=hE(S1,k1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ma)}catch(n){console.warn(n)}}}}).catch(t=>{throw Mr.create("idb-open",{originalErrorMessage:t.message})})),Sh}async function A1(t){try{const n=(await fE()).transaction(ma),r=await n.objectStore(ma).get(pE(t));return await n.done,r}catch(e){if(e instanceof Ht)tr.warn(e.message);else{const n=Mr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tr.warn(n.message)}}}async function ry(t,e){try{const r=(await fE()).transaction(ma,"readwrite");await r.objectStore(ma).put(e,pE(t)),await r.done}catch(n){if(n instanceof Ht)tr.warn(n.message);else{const r=Mr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});tr.warn(r.message)}}}function pE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1=1024,R1=30;class P1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new x1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=iy();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>R1){const o=b1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){tr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=iy(),{heartbeatsToSend:r,unsentEntries:i}=N1(this._heartbeatsCache.heartbeats),s=Tu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return tr.warn(n),""}}}function iy(){return new Date().toISOString().substring(0,10)}function N1(t,e=C1){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),sy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class x1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aE()?lE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await A1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ry(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ry(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function sy(t){return Tu(JSON.stringify({version:2,heartbeats:t})).length}function b1(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D1(t){gn(new nn("platform-logger",e=>new WA(e),"PRIVATE")),gn(new nn("heartbeat",e=>new P1(e),"PRIVATE")),Dt(Dd,ty,t),Dt(Dd,ty,"esm2020"),Dt("fire-js","")}D1("");var oy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lr,mE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,y){function E(){}E.prototype=y.prototype,_.F=y.prototype,_.prototype=new E,_.prototype.constructor=_,_.D=function(I,k,R){for(var T=Array(arguments.length-2),se=2;se<arguments.length;se++)T[se-2]=arguments[se];return y.prototype[k].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,y,E){E||(E=0);const I=Array(16);if(typeof y=="string")for(var k=0;k<16;++k)I[k]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(k=0;k<16;++k)I[k]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=_.g[0],E=_.g[1],k=_.g[2];let R=_.g[3],T;T=y+(R^E&(k^R))+I[0]+3614090360&4294967295,y=E+(T<<7&4294967295|T>>>25),T=R+(k^y&(E^k))+I[1]+3905402710&4294967295,R=y+(T<<12&4294967295|T>>>20),T=k+(E^R&(y^E))+I[2]+606105819&4294967295,k=R+(T<<17&4294967295|T>>>15),T=E+(y^k&(R^y))+I[3]+3250441966&4294967295,E=k+(T<<22&4294967295|T>>>10),T=y+(R^E&(k^R))+I[4]+4118548399&4294967295,y=E+(T<<7&4294967295|T>>>25),T=R+(k^y&(E^k))+I[5]+1200080426&4294967295,R=y+(T<<12&4294967295|T>>>20),T=k+(E^R&(y^E))+I[6]+2821735955&4294967295,k=R+(T<<17&4294967295|T>>>15),T=E+(y^k&(R^y))+I[7]+4249261313&4294967295,E=k+(T<<22&4294967295|T>>>10),T=y+(R^E&(k^R))+I[8]+1770035416&4294967295,y=E+(T<<7&4294967295|T>>>25),T=R+(k^y&(E^k))+I[9]+2336552879&4294967295,R=y+(T<<12&4294967295|T>>>20),T=k+(E^R&(y^E))+I[10]+4294925233&4294967295,k=R+(T<<17&4294967295|T>>>15),T=E+(y^k&(R^y))+I[11]+2304563134&4294967295,E=k+(T<<22&4294967295|T>>>10),T=y+(R^E&(k^R))+I[12]+1804603682&4294967295,y=E+(T<<7&4294967295|T>>>25),T=R+(k^y&(E^k))+I[13]+4254626195&4294967295,R=y+(T<<12&4294967295|T>>>20),T=k+(E^R&(y^E))+I[14]+2792965006&4294967295,k=R+(T<<17&4294967295|T>>>15),T=E+(y^k&(R^y))+I[15]+1236535329&4294967295,E=k+(T<<22&4294967295|T>>>10),T=y+(k^R&(E^k))+I[1]+4129170786&4294967295,y=E+(T<<5&4294967295|T>>>27),T=R+(E^k&(y^E))+I[6]+3225465664&4294967295,R=y+(T<<9&4294967295|T>>>23),T=k+(y^E&(R^y))+I[11]+643717713&4294967295,k=R+(T<<14&4294967295|T>>>18),T=E+(R^y&(k^R))+I[0]+3921069994&4294967295,E=k+(T<<20&4294967295|T>>>12),T=y+(k^R&(E^k))+I[5]+3593408605&4294967295,y=E+(T<<5&4294967295|T>>>27),T=R+(E^k&(y^E))+I[10]+38016083&4294967295,R=y+(T<<9&4294967295|T>>>23),T=k+(y^E&(R^y))+I[15]+3634488961&4294967295,k=R+(T<<14&4294967295|T>>>18),T=E+(R^y&(k^R))+I[4]+3889429448&4294967295,E=k+(T<<20&4294967295|T>>>12),T=y+(k^R&(E^k))+I[9]+568446438&4294967295,y=E+(T<<5&4294967295|T>>>27),T=R+(E^k&(y^E))+I[14]+3275163606&4294967295,R=y+(T<<9&4294967295|T>>>23),T=k+(y^E&(R^y))+I[3]+4107603335&4294967295,k=R+(T<<14&4294967295|T>>>18),T=E+(R^y&(k^R))+I[8]+1163531501&4294967295,E=k+(T<<20&4294967295|T>>>12),T=y+(k^R&(E^k))+I[13]+2850285829&4294967295,y=E+(T<<5&4294967295|T>>>27),T=R+(E^k&(y^E))+I[2]+4243563512&4294967295,R=y+(T<<9&4294967295|T>>>23),T=k+(y^E&(R^y))+I[7]+1735328473&4294967295,k=R+(T<<14&4294967295|T>>>18),T=E+(R^y&(k^R))+I[12]+2368359562&4294967295,E=k+(T<<20&4294967295|T>>>12),T=y+(E^k^R)+I[5]+4294588738&4294967295,y=E+(T<<4&4294967295|T>>>28),T=R+(y^E^k)+I[8]+2272392833&4294967295,R=y+(T<<11&4294967295|T>>>21),T=k+(R^y^E)+I[11]+1839030562&4294967295,k=R+(T<<16&4294967295|T>>>16),T=E+(k^R^y)+I[14]+4259657740&4294967295,E=k+(T<<23&4294967295|T>>>9),T=y+(E^k^R)+I[1]+2763975236&4294967295,y=E+(T<<4&4294967295|T>>>28),T=R+(y^E^k)+I[4]+1272893353&4294967295,R=y+(T<<11&4294967295|T>>>21),T=k+(R^y^E)+I[7]+4139469664&4294967295,k=R+(T<<16&4294967295|T>>>16),T=E+(k^R^y)+I[10]+3200236656&4294967295,E=k+(T<<23&4294967295|T>>>9),T=y+(E^k^R)+I[13]+681279174&4294967295,y=E+(T<<4&4294967295|T>>>28),T=R+(y^E^k)+I[0]+3936430074&4294967295,R=y+(T<<11&4294967295|T>>>21),T=k+(R^y^E)+I[3]+3572445317&4294967295,k=R+(T<<16&4294967295|T>>>16),T=E+(k^R^y)+I[6]+76029189&4294967295,E=k+(T<<23&4294967295|T>>>9),T=y+(E^k^R)+I[9]+3654602809&4294967295,y=E+(T<<4&4294967295|T>>>28),T=R+(y^E^k)+I[12]+3873151461&4294967295,R=y+(T<<11&4294967295|T>>>21),T=k+(R^y^E)+I[15]+530742520&4294967295,k=R+(T<<16&4294967295|T>>>16),T=E+(k^R^y)+I[2]+3299628645&4294967295,E=k+(T<<23&4294967295|T>>>9),T=y+(k^(E|~R))+I[0]+4096336452&4294967295,y=E+(T<<6&4294967295|T>>>26),T=R+(E^(y|~k))+I[7]+1126891415&4294967295,R=y+(T<<10&4294967295|T>>>22),T=k+(y^(R|~E))+I[14]+2878612391&4294967295,k=R+(T<<15&4294967295|T>>>17),T=E+(R^(k|~y))+I[5]+4237533241&4294967295,E=k+(T<<21&4294967295|T>>>11),T=y+(k^(E|~R))+I[12]+1700485571&4294967295,y=E+(T<<6&4294967295|T>>>26),T=R+(E^(y|~k))+I[3]+2399980690&4294967295,R=y+(T<<10&4294967295|T>>>22),T=k+(y^(R|~E))+I[10]+4293915773&4294967295,k=R+(T<<15&4294967295|T>>>17),T=E+(R^(k|~y))+I[1]+2240044497&4294967295,E=k+(T<<21&4294967295|T>>>11),T=y+(k^(E|~R))+I[8]+1873313359&4294967295,y=E+(T<<6&4294967295|T>>>26),T=R+(E^(y|~k))+I[15]+4264355552&4294967295,R=y+(T<<10&4294967295|T>>>22),T=k+(y^(R|~E))+I[6]+2734768916&4294967295,k=R+(T<<15&4294967295|T>>>17),T=E+(R^(k|~y))+I[13]+1309151649&4294967295,E=k+(T<<21&4294967295|T>>>11),T=y+(k^(E|~R))+I[4]+4149444226&4294967295,y=E+(T<<6&4294967295|T>>>26),T=R+(E^(y|~k))+I[11]+3174756917&4294967295,R=y+(T<<10&4294967295|T>>>22),T=k+(y^(R|~E))+I[2]+718787259&4294967295,k=R+(T<<15&4294967295|T>>>17),T=E+(R^(k|~y))+I[9]+3951481745&4294967295,_.g[0]=_.g[0]+y&4294967295,_.g[1]=_.g[1]+(k+(T<<21&4294967295|T>>>11))&4294967295,_.g[2]=_.g[2]+k&4294967295,_.g[3]=_.g[3]+R&4294967295}r.prototype.v=function(_,y){y===void 0&&(y=_.length);const E=y-this.blockSize,I=this.C;let k=this.h,R=0;for(;R<y;){if(k==0)for(;R<=E;)i(this,_,R),R+=this.blockSize;if(typeof _=="string"){for(;R<y;)if(I[k++]=_.charCodeAt(R++),k==this.blockSize){i(this,I),k=0;break}}else for(;R<y;)if(I[k++]=_[R++],k==this.blockSize){i(this,I),k=0;break}}this.h=k,this.o+=y},r.prototype.A=function(){var _=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);_[0]=128;for(var y=1;y<_.length-8;++y)_[y]=0;y=this.o*8;for(var E=_.length-8;E<_.length;++E)_[E]=y&255,y/=256;for(this.v(_),_=Array(16),y=0,E=0;E<4;++E)for(let I=0;I<32;I+=8)_[y++]=this.g[E]>>>I&255;return _};function s(_,y){var E=l;return Object.prototype.hasOwnProperty.call(E,_)?E[_]:E[_]=y(_)}function o(_,y){this.h=y;const E=[];let I=!0;for(let k=_.length-1;k>=0;k--){const R=_[k]|0;I&&R==y||(E[k]=R,I=!1)}this.g=E}var l={};function u(_){return-128<=_&&_<128?s(_,function(y){return new o([y|0],y<0?-1:0)}):new o([_|0],_<0?-1:0)}function h(_){if(isNaN(_)||!isFinite(_))return p;if(_<0)return L(h(-_));const y=[];let E=1;for(let I=0;_>=E;I++)y[I]=_/E|0,E*=4294967296;return new o(y,0)}function f(_,y){if(_.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(_.charAt(0)=="-")return L(f(_.substring(1),y));if(_.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=h(Math.pow(y,8));let I=p;for(let R=0;R<_.length;R+=8){var k=Math.min(8,_.length-R);const T=parseInt(_.substring(R,R+k),y);k<8?(k=h(Math.pow(y,k)),I=I.j(k).add(h(T))):(I=I.j(E),I=I.add(h(T)))}return I}var p=u(0),m=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(D(this))return-L(this).m();let _=0,y=1;for(let E=0;E<this.g.length;E++){const I=this.i(E);_+=(I>=0?I:4294967296+I)*y,y*=4294967296}return _},t.toString=function(_){if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(x(this))return"0";if(D(this))return"-"+L(this).toString(_);const y=h(Math.pow(_,6));var E=this;let I="";for(;;){const k=O(E,y).g;E=S(E,k.j(y));let R=((E.g.length>0?E.g[0]:E.h)>>>0).toString(_);if(E=k,x(E))return R+I;for(;R.length<6;)R="0"+R;I=R+I}},t.i=function(_){return _<0?0:_<this.g.length?this.g[_]:this.h};function x(_){if(_.h!=0)return!1;for(let y=0;y<_.g.length;y++)if(_.g[y]!=0)return!1;return!0}function D(_){return _.h==-1}t.l=function(_){return _=S(this,_),D(_)?-1:x(_)?0:1};function L(_){const y=_.g.length,E=[];for(let I=0;I<y;I++)E[I]=~_.g[I];return new o(E,~_.h).add(m)}t.abs=function(){return D(this)?L(this):this},t.add=function(_){const y=Math.max(this.g.length,_.g.length),E=[];let I=0;for(let k=0;k<=y;k++){let R=I+(this.i(k)&65535)+(_.i(k)&65535),T=(R>>>16)+(this.i(k)>>>16)+(_.i(k)>>>16);I=T>>>16,R&=65535,T&=65535,E[k]=T<<16|R}return new o(E,E[E.length-1]&-2147483648?-1:0)};function S(_,y){return _.add(L(y))}t.j=function(_){if(x(this)||x(_))return p;if(D(this))return D(_)?L(this).j(L(_)):L(L(this).j(_));if(D(_))return L(this.j(L(_)));if(this.l(A)<0&&_.l(A)<0)return h(this.m()*_.m());const y=this.g.length+_.g.length,E=[];for(var I=0;I<2*y;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(let k=0;k<_.g.length;k++){const R=this.i(I)>>>16,T=this.i(I)&65535,se=_.i(k)>>>16,mt=_.i(k)&65535;E[2*I+2*k]+=T*mt,w(E,2*I+2*k),E[2*I+2*k+1]+=R*mt,w(E,2*I+2*k+1),E[2*I+2*k+1]+=T*se,w(E,2*I+2*k+1),E[2*I+2*k+2]+=R*se,w(E,2*I+2*k+2)}for(_=0;_<y;_++)E[_]=E[2*_+1]<<16|E[2*_];for(_=y;_<2*y;_++)E[_]=0;return new o(E,0)};function w(_,y){for(;(_[y]&65535)!=_[y];)_[y+1]+=_[y]>>>16,_[y]&=65535,y++}function C(_,y){this.g=_,this.h=y}function O(_,y){if(x(y))throw Error("division by zero");if(x(_))return new C(p,p);if(D(_))return y=O(L(_),y),new C(L(y.g),L(y.h));if(D(y))return y=O(_,L(y)),new C(L(y.g),y.h);if(_.g.length>30){if(D(_)||D(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,I=y;I.l(_)<=0;)E=B(E),I=B(I);var k=U(E,1),R=U(I,1);for(I=U(I,2),E=U(E,2);!x(I);){var T=R.add(I);T.l(_)<=0&&(k=k.add(E),R=T),I=U(I,1),E=U(E,1)}return y=S(_,k.j(y)),new C(k,y)}for(k=p;_.l(y)>=0;){for(E=Math.max(1,Math.floor(_.m()/y.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),R=h(E),T=R.j(y);D(T)||T.l(_)>0;)E-=I,R=h(E),T=R.j(y);x(R)&&(R=m),k=k.add(R),_=S(_,T)}return new C(k,_)}t.B=function(_){return O(this,_).h},t.and=function(_){const y=Math.max(this.g.length,_.g.length),E=[];for(let I=0;I<y;I++)E[I]=this.i(I)&_.i(I);return new o(E,this.h&_.h)},t.or=function(_){const y=Math.max(this.g.length,_.g.length),E=[];for(let I=0;I<y;I++)E[I]=this.i(I)|_.i(I);return new o(E,this.h|_.h)},t.xor=function(_){const y=Math.max(this.g.length,_.g.length),E=[];for(let I=0;I<y;I++)E[I]=this.i(I)^_.i(I);return new o(E,this.h^_.h)};function B(_){const y=_.g.length+1,E=[];for(let I=0;I<y;I++)E[I]=_.i(I)<<1|_.i(I-1)>>>31;return new o(E,_.h)}function U(_,y){const E=y>>5;y%=32;const I=_.g.length-E,k=[];for(let R=0;R<I;R++)k[R]=y>0?_.i(R+E)>>>y|_.i(R+E+1)<<32-y:_.i(R+E);return new o(k,_.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,mE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Lr=o}).apply(typeof oy<"u"?oy:typeof self<"u"?self:typeof window<"u"?window:{});var Il=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gE,xo,yE,Bl,Md,_E,vE,wE;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Il=="object"&&Il];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in d))break e;d=d[P]}a=a[a.length-1],g=d[a],c=c(g),c!=g&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(c){var d=[],g;for(g in c)Object.prototype.hasOwnProperty.call(c,g)&&d.push([g,c[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function u(a,c,d){return a.call.apply(a.bind,arguments)}function h(a,c,d){return h=u,h.apply(null,arguments)}function f(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,c){function d(){}d.prototype=c.prototype,a.Z=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,P,b){for(var z=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)z[ie-2]=arguments[ie];return c.prototype[P].apply(g,z)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function A(a){const c=a.length;if(c>0){const d=Array(c);for(let g=0;g<c;g++)d[g]=a[g];return d}return[]}function x(a,c){for(let g=1;g<arguments.length;g++){const P=arguments[g];var d=typeof P;if(d=d!="object"?d:P?Array.isArray(P)?"array":d:"null",d=="array"||d=="object"&&typeof P.length=="number"){d=a.length||0;const b=P.length||0;a.length=d+b;for(let z=0;z<b;z++)a[d+z]=P[z]}else a.push(P)}}class D{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function L(a){o.setTimeout(()=>{throw a},0)}function S(){var a=_;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class w{constructor(){this.h=this.g=null}add(c,d){const g=C.get();g.set(c,d),this.h?this.h.next=g:this.g=g,this.h=g}}var C=new D(()=>new O,a=>a.reset());class O{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let B,U=!1,_=new w,y=()=>{const a=Promise.resolve(void 0);B=()=>{a.then(E)}};function E(){for(var a;a=S();){try{a.h.call(a.g)}catch(d){L(d)}var c=C;c.j(a),c.h<100&&(c.h++,a.next=c.g,c.g=a)}U=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function k(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,c),o.removeEventListener("test",d,c)}catch{}return a}();function T(a){return/^[\s\xa0]*$/.test(a)}function se(a,c){k.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,c)}p(se,k),se.prototype.init=function(a,c){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget,c||(d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement)),this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&se.Z.h.call(this)},se.prototype.h=function(){se.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var mt="closure_listenable_"+(Math.random()*1e6|0),ni=0;function ri(a,c,d,g,P){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!g,this.ha=P,this.key=++ni,this.da=this.fa=!1}function q(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ee(a,c,d){for(const g in a)c.call(d,a[g],g,a)}function Y(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function ye(a){const c={};for(const d in a)c[d]=a[d];return c}const _e="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ot(a,c){let d,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(d in g)a[d]=g[d];for(let b=0;b<_e.length;b++)d=_e[b],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function Tt(a){this.src=a,this.g={},this.h=0}Tt.prototype.add=function(a,c,d,g,P){const b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);const z=Mt(a,c,g,P);return z>-1?(c=a[z],d||(c.fa=!1)):(c=new ri(c,this.src,b,!!g,P),c.fa=d,a.push(c)),c};function Vt(a,c){const d=c.type;if(d in a.g){var g=a.g[d],P=Array.prototype.indexOf.call(g,c,void 0),b;(b=P>=0)&&Array.prototype.splice.call(g,P,1),b&&(q(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Mt(a,c,d,g){for(let P=0;P<a.length;++P){const b=a[P];if(!b.da&&b.listener==c&&b.capture==!!d&&b.ha==g)return P}return-1}var rn="closure_lm_"+(Math.random()*1e6|0),Xs={};function ii(a,c,d,g,P){if(Array.isArray(c)){for(let b=0;b<c.length;b++)ii(a,c[b],d,g,P);return null}return d=$a(d),a&&a[mt]?a.J(c,d,l(g)?!!g.capture:!1,P):Zs(a,c,d,!1,g,P)}function Zs(a,c,d,g,P,b){if(!c)throw Error("Invalid event type");const z=l(P)?!!P.capture:!!P;let ie=to(a);if(ie||(a[rn]=ie=new Tt(a)),d=ie.add(c,d,g,z,b),d.proxy)return d;if(g=bc(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)R||(P=z),P===void 0&&(P=!1),a.addEventListener(c.toString(),g,P);else if(a.attachEvent)a.attachEvent(za(c.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function bc(){function a(d){return c.call(a.src,a.listener,d)}const c=zi;return a}function Ba(a,c,d,g,P){if(Array.isArray(c))for(var b=0;b<c.length;b++)Ba(a,c[b],d,g,P);else g=l(g)?!!g.capture:!!g,d=$a(d),a&&a[mt]?(a=a.i,b=String(c).toString(),b in a.g&&(c=a.g[b],d=Mt(c,d,g,P),d>-1&&(q(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete a.g[b],a.h--)))):a&&(a=to(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Mt(c,d,g,P)),(d=a>-1?c[a]:null)&&eo(d))}function eo(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[mt])Vt(c.i,a);else{var d=a.type,g=a.proxy;c.removeEventListener?c.removeEventListener(d,g,a.capture):c.detachEvent?c.detachEvent(za(d),g):c.addListener&&c.removeListener&&c.removeListener(g),(d=to(c))?(Vt(d,a),d.h==0&&(d.src=null,c[rn]=null)):q(a)}}}function za(a){return a in Xs?Xs[a]:Xs[a]="on"+a}function zi(a,c){if(a.da)a=!0;else{c=new se(c,this);const d=a.listener,g=a.ha||a.src;a.fa&&eo(a),a=d.call(g,c)}return a}function to(a){return a=a[rn],a instanceof Tt?a:null}var si="__closure_events_fn_"+(Math.random()*1e9>>>0);function $a(a){return typeof a=="function"?a:(a[si]||(a[si]=function(c){return a.handleEvent(c)}),a[si])}function Ke(){I.call(this),this.i=new Tt(this),this.M=this,this.G=null}p(Ke,I),Ke.prototype[mt]=!0,Ke.prototype.removeEventListener=function(a,c,d,g){Ba(this,a,c,d,g)};function Fe(a,c){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=c.type||c,typeof c=="string")c=new k(c,a);else if(c instanceof k)c.target=c.target||a;else{var P=c;c=new k(g,a),Ot(c,P)}P=!0;let b,z;if(d)for(z=d.length-1;z>=0;z--)b=c.g=d[z],P=$i(b,g,!0,c)&&P;if(b=c.g=a,P=$i(b,g,!0,c)&&P,P=$i(b,g,!1,c)&&P,d)for(z=0;z<d.length;z++)b=c.g=d[z],P=$i(b,g,!1,c)&&P}Ke.prototype.N=function(){if(Ke.Z.N.call(this),this.i){var a=this.i;for(const c in a.g){const d=a.g[c];for(let g=0;g<d.length;g++)q(d[g]);delete a.g[c],a.h--}}this.G=null},Ke.prototype.J=function(a,c,d,g){return this.i.add(String(a),c,!1,d,g)},Ke.prototype.K=function(a,c,d,g){return this.i.add(String(a),c,!0,d,g)};function $i(a,c,d,g){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();let P=!0;for(let b=0;b<c.length;++b){const z=c[b];if(z&&!z.da&&z.capture==d){const ie=z.listener,qe=z.ha||z.src;z.fa&&Vt(a.i,z),P=ie.call(qe,g)!==!1&&P}}return P&&!g.defaultPrevented}function Dc(a,c){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(a,c||0)}function It(a){a.g=Dc(()=>{a.g=null,a.i&&(a.i=!1,It(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class qa extends I{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:It(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oi(a){I.call(this),this.h=a,this.g={}}p(oi,I);var Wa=[];function Ha(a){ee(a.g,function(c,d){this.g.hasOwnProperty(d)&&eo(c)},a),a.g={}}oi.prototype.N=function(){oi.Z.N.call(this),Ha(this)},oi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var no=o.JSON.stringify,Oc=o.JSON.parse,Ga=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Ka(){}function Qa(){}var ai={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function qi(){k.call(this,"d")}p(qi,k);function Wi(){k.call(this,"c")}p(Wi,k);var Fn={},Ya=null;function N(){return Ya=Ya||new Ke}Fn.Ia="serverreachability";function j(a){k.call(this,Fn.Ia,a)}p(j,k);function K(a){const c=N();Fe(c,new j(c))}Fn.STAT_EVENT="statevent";function $(a,c){k.call(this,Fn.STAT_EVENT,a),this.stat=c}p($,k);function J(a){const c=N();Fe(c,new $(c,a))}Fn.Ja="timingevent";function fe(a,c){k.call(this,Fn.Ja,a),this.size=c}p(fe,k);function ae(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},c)}function me(){this.g=!0}me.prototype.ua=function(){this.g=!1};function ot(a,c,d,g,P,b){a.info(function(){if(a.g)if(b){var z="",ie=b.split("&");for(let ve=0;ve<ie.length;ve++){var qe=ie[ve].split("=");if(qe.length>1){const Ye=qe[0];qe=qe[1];const En=Ye.split("_");z=En.length>=2&&En[1]=="type"?z+(Ye+"="+qe+"&"):z+(Ye+"=redacted&")}}}else z=null;else z=b;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+c+`
`+d+`
`+z})}function gt(a,c,d,g,P,b,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+c+`
`+d+`
`+b+" "+z})}function Qe(a,c,d,g){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+sn(a,d)+(g?" "+g:"")})}function St(a,c){a.info(function(){return"TIMEOUT: "+c})}me.prototype.info=function(){};function sn(a,c){if(!a.g)return c;if(!c)return null;try{const b=JSON.parse(c);if(b){for(a=0;a<b.length;a++)if(Array.isArray(b[a])){var d=b[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var P=g[0];if(P!="noop"&&P!="stop"&&P!="close")for(let z=1;z<g.length;z++)g[z]=""}}}}return no(b)}catch{return c}}var kt={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},jn={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Un;function vn(){}p(vn,Ka),vn.prototype.g=function(){return new XMLHttpRequest},Un=new vn;function Gt(a){return encodeURIComponent(String(a))}function on(a){var c=1;a=a.split(":");const d=[];for(;c>0&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function $e(a,c,d,g){this.j=a,this.i=c,this.l=d,this.S=g||1,this.V=new oi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ar}function ar(){this.i=null,this.g="",this.h=!1}var Hi={},Vc={};function Mc(a,c,d){a.M=1,a.A=Xa(wn(c)),a.u=d,a.R=!0,im(a,null)}function im(a,c){a.F=Date.now(),Ja(a),a.B=wn(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),ym(d.i,"t",g),a.C=0,d=a.j.L,a.h=new ar,a.g=Vm(a.j,d?c:null,!a.u),a.P>0&&(a.O=new qa(h(a.Y,a,a.g),a.P)),c=a.V,d=a.g,g=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(Wa[0]=P.toString()),P=Wa);for(let b=0;b<P.length;b++){const z=ii(d,P[b],g||c.handleEvent,!1,c.h||c);if(!z)break;c.g[z.key]=z}c=a.J?ye(a.J):{},a.u?(a.v||(a.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,c)):(a.v="GET",a.g.ea(a.B,a.v,null,c)),K(),ot(a.i,a.v,a.B,a.l,a.S,a.u)}$e.prototype.ba=function(a){a=a.target;const c=this.O;c&&cr(a)==3?c.j():this.Y(a)},$e.prototype.Y=function(a){try{if(a==this.g)e:{const ie=cr(this.g),qe=this.g.ya(),ve=this.g.ca();if(!(ie<3)&&(ie!=3||this.g&&(this.h.h||this.g.la()||Sm(this.g)))){this.K||ie!=4||qe==7||(qe==8||ve<=0?K(3):K(2)),Lc(this);var c=this.g.ca();this.X=c;var d=o0(this);if(this.o=c==200,gt(this.i,this.v,this.B,this.l,this.S,ie,c),this.o){if(this.U&&!this.L){t:{if(this.g){var g,P=this.g;if((g=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(g)){var b=g;break t}}b=null}if(a=b)Qe(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Fc(this,a);else{this.o=!1,this.m=3,J(12),li(this),ro(this);break e}}if(this.R){a=!0;let Ye;for(;!this.K&&this.C<d.length;)if(Ye=a0(this,d),Ye==Vc){ie==4&&(this.m=4,J(14),a=!1),Qe(this.i,this.l,null,"[Incomplete Response]");break}else if(Ye==Hi){this.m=4,J(15),Qe(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Qe(this.i,this.l,Ye,null),Fc(this,Ye);if(sm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ie!=4||d.length!=0||this.h.h||(this.m=1,J(16),a=!1),this.o=this.o&&a,!a)Qe(this.i,this.l,d,"[Invalid Chunked Response]"),li(this),ro(this);else if(d.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Hc(z),z.P=!0,J(11))}}else Qe(this.i,this.l,d,null),Fc(this,d);ie==4&&li(this),this.o&&!this.K&&(ie==4?xm(this.j,this):(this.o=!1,Ja(this)))}else E0(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,J(12)):(this.m=0,J(13)),li(this),ro(this)}}}catch{}finally{}};function o0(a){if(!sm(a))return a.g.la();const c=Sm(a.g);if(c==="")return"";let d="";const g=c.length,P=cr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return li(a),ro(a),"";a.h.i=new o.TextDecoder}for(let b=0;b<g;b++)a.h.h=!0,d+=a.h.i.decode(c[b],{stream:!(P&&b==g-1)});return c.length=0,a.h.g+=d,a.C=0,a.h.g}function sm(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function a0(a,c){var d=a.C,g=c.indexOf(`
`,d);return g==-1?Vc:(d=Number(c.substring(d,g)),isNaN(d)?Hi:(g+=1,g+d>c.length?Vc:(c=c.slice(g,g+d),a.C=g+d,c)))}$e.prototype.cancel=function(){this.K=!0,li(this)};function Ja(a){a.T=Date.now()+a.H,om(a,a.H)}function om(a,c){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ae(h(a.aa,a),c)}function Lc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}$e.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(St(this.i,this.B),this.M!=2&&(K(),J(17)),li(this),this.m=2,ro(this)):om(this,this.T-a)};function ro(a){a.j.I==0||a.K||xm(a.j,a)}function li(a){Lc(a);var c=a.O;c&&typeof c.dispose=="function"&&c.dispose(),a.O=null,Ha(a.V),a.g&&(c=a.g,a.g=null,c.abort(),c.dispose())}function Fc(a,c){try{var d=a.j;if(d.I!=0&&(d.g==a||jc(d.h,a))){if(!a.L&&jc(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)rl(d),tl(d);else break e;Wc(d),J(18)}}else d.xa=P[1],0<d.xa-d.K&&P[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=ae(h(d.Va,d),6e3));um(d.h)<=1&&d.ta&&(d.ta=void 0)}else ci(d,11)}else if((a.L||d.g==a)&&rl(d),!T(c))for(P=d.Ba.g.parse(c),c=0;c<P.length;c++){let ve=P[c];const Ye=ve[0];if(!(Ye<=d.K))if(d.K=Ye,ve=ve[1],d.I==2)if(ve[0]=="c"){d.M=ve[1],d.ba=ve[2];const En=ve[3];En!=null&&(d.ka=En,d.j.info("VER="+d.ka));const hi=ve[4];hi!=null&&(d.za=hi,d.j.info("SVER="+d.za));const hr=ve[5];hr!=null&&typeof hr=="number"&&hr>0&&(g=1.5*hr,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const dr=a.g;if(dr){const sl=dr.g?dr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(sl){var b=g.h;b.g||sl.indexOf("spdy")==-1&&sl.indexOf("quic")==-1&&sl.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Uc(b,b.h),b.h=null))}if(g.G){const Gc=dr.g?dr.g.getResponseHeader("X-HTTP-Session-Id"):null;Gc&&(g.wa=Gc,Te(g.J,g.G,Gc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var z=a;if(g.na=Om(g,g.L?g.ba:null,g.W),z.L){cm(g.h,z);var ie=z,qe=g.O;qe&&(ie.H=qe),ie.D&&(Lc(ie),Ja(ie)),g.g=z}else Pm(g);d.i.length>0&&nl(d)}else ve[0]!="stop"&&ve[0]!="close"||ci(d,7);else d.I==3&&(ve[0]=="stop"||ve[0]=="close"?ve[0]=="stop"?ci(d,7):qc(d):ve[0]!="noop"&&d.l&&d.l.qa(ve),d.A=0)}}K(4)}catch{}}var l0=class{constructor(a,c){this.g=a,this.map=c}};function am(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function lm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function um(a){return a.h?1:a.g?a.g.size:0}function jc(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Uc(a,c){a.g?a.g.add(c):a.h=c}function cm(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}am.prototype.cancel=function(){if(this.i=hm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function hm(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.G);return c}return A(a.i)}var dm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function u0(a,c){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let P,b=null;g>=0?(P=a[d].substring(0,g),b=a[d].substring(g+1)):P=a[d],c(P,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function lr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;a instanceof lr?(this.l=a.l,io(this,a.j),this.o=a.o,this.g=a.g,so(this,a.u),this.h=a.h,Bc(this,_m(a.i)),this.m=a.m):a&&(c=String(a).match(dm))?(this.l=!1,io(this,c[1]||"",!0),this.o=oo(c[2]||""),this.g=oo(c[3]||"",!0),so(this,c[4]),this.h=oo(c[5]||"",!0),Bc(this,c[6]||"",!0),this.m=oo(c[7]||"")):(this.l=!1,this.i=new lo(null,this.l))}lr.prototype.toString=function(){const a=[];var c=this.j;c&&a.push(ao(c,fm,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(ao(c,fm,!0),"@"),a.push(Gt(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ao(d,d.charAt(0)=="/"?d0:h0,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ao(d,p0)),a.join("")},lr.prototype.resolve=function(a){const c=wn(this);let d=!!a.j;d?io(c,a.j):d=!!a.o,d?c.o=a.o:d=!!a.g,d?c.g=a.g:d=a.u!=null;var g=a.h;if(d)so(c,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var P=c.h.lastIndexOf("/");P!=-1&&(g=c.h.slice(0,P+1)+g)}if(P=g,P==".."||P==".")g="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){g=P.lastIndexOf("/",0)==0,P=P.split("/");const b=[];for(let z=0;z<P.length;){const ie=P[z++];ie=="."?g&&z==P.length&&b.push(""):ie==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),g&&z==P.length&&b.push("")):(b.push(ie),g=!0)}g=b.join("/")}else g=P}return d?c.h=g:d=a.i.toString()!=="",d?Bc(c,_m(a.i)):d=!!a.m,d&&(c.m=a.m),c};function wn(a){return new lr(a)}function io(a,c,d){a.j=d?oo(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function so(a,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);a.u=c}else a.u=null}function Bc(a,c,d){c instanceof lo?(a.i=c,m0(a.i,a.l)):(d||(c=ao(c,f0)),a.i=new lo(c,a.l))}function Te(a,c,d){a.i.set(c,d)}function Xa(a){return Te(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function oo(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ao(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,c0),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function c0(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var fm=/[#\/\?@]/g,h0=/[#\?:]/g,d0=/[#\?]/g,f0=/[#\?@]/g,p0=/#/g;function lo(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function ui(a){a.g||(a.g=new Map,a.h=0,a.i&&u0(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=lo.prototype,t.add=function(a,c){ui(this),this.i=null,a=Gi(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function pm(a,c){ui(a),c=Gi(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function mm(a,c){return ui(a),c=Gi(a,c),a.g.has(c)}t.forEach=function(a,c){ui(this),this.g.forEach(function(d,g){d.forEach(function(P){a.call(c,P,g,this)},this)},this)};function gm(a,c){ui(a);let d=[];if(typeof c=="string")mm(a,c)&&(d=d.concat(a.g.get(Gi(a,c))));else for(a=Array.from(a.g.values()),c=0;c<a.length;c++)d=d.concat(a[c]);return d}t.set=function(a,c){return ui(this),this.i=null,a=Gi(this,a),mm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=gm(this,a),a.length>0?String(a[0]):c):c};function ym(a,c,d){pm(a,c),d.length>0&&(a.i=null,a.g.set(Gi(a,c),A(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(let g=0;g<c.length;g++){var d=c[g];const P=Gt(d);d=gm(this,d);for(let b=0;b<d.length;b++){let z=P;d[b]!==""&&(z+="="+Gt(d[b])),a.push(z)}}return this.i=a.join("&")};function _m(a){const c=new lo;return c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),c}function Gi(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function m0(a,c){c&&!a.j&&(ui(a),a.i=null,a.g.forEach(function(d,g){const P=g.toLowerCase();g!=P&&(pm(this,g),ym(this,P,d))},a)),a.j=c}function g0(a,c){const d=new me;if(o.Image){const g=new Image;g.onload=f(ur,d,"TestLoadImage: loaded",!0,c,g),g.onerror=f(ur,d,"TestLoadImage: error",!1,c,g),g.onabort=f(ur,d,"TestLoadImage: abort",!1,c,g),g.ontimeout=f(ur,d,"TestLoadImage: timeout",!1,c,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else c(!1)}function y0(a,c){const d=new me,g=new AbortController,P=setTimeout(()=>{g.abort(),ur(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:g.signal}).then(b=>{clearTimeout(P),b.ok?ur(d,"TestPingServer: ok",!0,c):ur(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),ur(d,"TestPingServer: error",!1,c)})}function ur(a,c,d,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(d)}catch{}}function _0(){this.g=new Ga}function zc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(zc,Ka),zc.prototype.g=function(){return new Za(this.i,this.h)};function Za(a,c){Ke.call(this),this.H=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Za,Ke),t=Za.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=c,this.readyState=1,co(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(c.body=a),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,uo(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,co(this)),this.g&&(this.readyState=3,co(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;vm(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function vm(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?uo(this):co(this),this.readyState==3&&vm(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,uo(this))},t.Na=function(a){this.g&&(this.response=a,uo(this))},t.ga=function(){this.g&&uo(this)};function uo(a){a.readyState=4,a.l=null,a.j=null,a.B=null,co(a)}t.setRequestHeader=function(a,c){this.A.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function co(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Za.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function wm(a){let c="";return ee(a,function(d,g){c+=g,c+=":",c+=d,c+=`\r
`}),c}function $c(a,c,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=wm(d),typeof a=="string"?d!=null&&Gt(d):Te(a,c,d))}function be(a){Ke.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(be,Ke);var v0=/^https?$/i,w0=["POST","PUT"];t=be.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,c,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Un.g(),this.g.onreadystatechange=m(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(b){Em(this,b);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)d.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const b of g.keys())d.set(b,g.get(b));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(b=>b.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(w0,c,void 0)>=0)||g||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,z]of d)this.g.setRequestHeader(b,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(b){Em(this,b)}};function Em(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.o=5,Tm(a),el(a)}function Tm(a){a.A||(a.A=!0,Fe(a,"complete"),Fe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Fe(this,"complete"),Fe(this,"abort"),el(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),el(this,!0)),be.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Im(this):this.Xa())},t.Xa=function(){Im(this)};function Im(a){if(a.h&&typeof s<"u"){if(a.v&&cr(a)==4)setTimeout(a.Ca.bind(a),0);else if(Fe(a,"readystatechange"),cr(a)==4){a.h=!1;try{const b=a.ca();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var g;if(g=b===0){let z=String(a.D).match(dm)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),g=!v0.test(z?z.toLowerCase():"")}d=g}if(d)Fe(a,"complete"),Fe(a,"success");else{a.o=6;try{var P=cr(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",Tm(a)}}finally{el(a)}}}}function el(a,c){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,c||Fe(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function cr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return cr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),Oc(c)}};function Sm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function E0(a){const c={};a=(a.g&&cr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(T(a[g]))continue;var d=on(a[g]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const b=c[P]||[];c[P]=b,b.push(d)}Y(c,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ho(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function km(a){this.za=0,this.i=[],this.j=new me,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ho("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ho("baseRetryDelayMs",5e3,a),this.Za=ho("retryDelaySeedMs",1e4,a),this.Ta=ho("forwardChannelMaxRetries",2,a),this.va=ho("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new am(a&&a.concurrentRequestLimit),this.Ba=new _0,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=km.prototype,t.ka=8,t.I=1,t.connect=function(a,c,d,g){J(0),this.W=a,this.H=c||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=Om(this,null,this.W),nl(this)};function qc(a){if(Am(a),a.I==3){var c=a.V++,d=wn(a.J);if(Te(d,"SID",a.M),Te(d,"RID",c),Te(d,"TYPE","terminate"),fo(a,d),c=new $e(a,a.j,c),c.M=2,c.A=Xa(wn(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=c.A,d=!0),d||(c.g=Vm(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Ja(c)}Dm(a)}function tl(a){a.g&&(Hc(a),a.g.cancel(),a.g=null)}function Am(a){tl(a),a.v&&(o.clearTimeout(a.v),a.v=null),rl(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function nl(a){if(!lm(a.h)&&!a.m){a.m=!0;var c=a.Ea;B||y(),U||(B(),U=!0),_.add(c,a),a.D=0}}function T0(a,c){return um(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=c.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ae(h(a.Ea,a,c),bm(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new $e(this,this.j,a);let b=this.o;if(this.U&&(b?(b=ye(b),Ot(b,this.U)):b=this.U),this.u!==null||this.R||(P.J=b,b=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Rm(this,P,c),d=wn(this.J),Te(d,"RID",a),Te(d,"CVER",22),this.G&&Te(d,"X-HTTP-Session-Id",this.G),fo(this,d),b&&(this.R?c="headers="+Gt(wm(b))+"&"+c:this.u&&$c(d,this.u,b)),Uc(this.h,P),this.Ra&&Te(d,"TYPE","init"),this.S?(Te(d,"$req",c),Te(d,"SID","null"),P.U=!0,Mc(P,d,null)):Mc(P,d,c),this.I=2}}else this.I==3&&(a?Cm(this,a):this.i.length==0||lm(this.h)||Cm(this))};function Cm(a,c){var d;c?d=c.l:d=a.V++;const g=wn(a.J);Te(g,"SID",a.M),Te(g,"RID",d),Te(g,"AID",a.K),fo(a,g),a.u&&a.o&&$c(g,a.u,a.o),d=new $e(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),c&&(a.i=c.G.concat(a.i)),c=Rm(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Uc(a.h,d),Mc(d,g,c)}function fo(a,c){a.H&&ee(a.H,function(d,g){Te(c,g,d)}),a.l&&ee({},function(d,g){Te(c,g,d)})}function Rm(a,c,d){d=Math.min(a.i.length,d);const g=a.l?h(a.l.Ka,a.l,a):null;e:{var P=a.i;let ie=-1;for(;;){const qe=["count="+d];ie==-1?d>0?(ie=P[0].g,qe.push("ofs="+ie)):ie=0:qe.push("ofs="+ie);let ve=!0;for(let Ye=0;Ye<d;Ye++){var b=P[Ye].g;const En=P[Ye].map;if(b-=ie,b<0)ie=Math.max(0,P[Ye].g-100),ve=!1;else try{b="req"+b+"_"||"";try{var z=En instanceof Map?En:Object.entries(En);for(const[hi,hr]of z){let dr=hr;l(hr)&&(dr=no(hr)),qe.push(b+hi+"="+encodeURIComponent(dr))}}catch(hi){throw qe.push(b+"type="+encodeURIComponent("_badmap")),hi}}catch{g&&g(En)}}if(ve){z=qe.join("&");break e}}z=void 0}return a=a.i.splice(0,d),c.G=a,z}function Pm(a){if(!a.g&&!a.v){a.Y=1;var c=a.Da;B||y(),U||(B(),U=!0),_.add(c,a),a.A=0}}function Wc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ae(h(a.Da,a),bm(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Nm(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ae(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,J(10),tl(this),Nm(this))};function Hc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Nm(a){a.g=new $e(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var c=wn(a.na);Te(c,"RID","rpc"),Te(c,"SID",a.M),Te(c,"AID",a.K),Te(c,"CI",a.F?"0":"1"),!a.F&&a.ia&&Te(c,"TO",a.ia),Te(c,"TYPE","xmlhttp"),fo(a,c),a.u&&a.o&&$c(c,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Xa(wn(c)),d.u=null,d.R=!0,im(d,a)}t.Va=function(){this.C!=null&&(this.C=null,tl(this),Wc(this),J(19))};function rl(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function xm(a,c){var d=null;if(a.g==c){rl(a),Hc(a),a.g=null;var g=2}else if(jc(a.h,c))d=c.G,cm(a.h,c),g=1;else return;if(a.I!=0){if(c.o)if(g==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var P=a.D;g=N(),Fe(g,new fe(g,d)),nl(a)}else Pm(a);else if(P=c.m,P==3||P==0&&c.X>0||!(g==1&&T0(a,c)||g==2&&Wc(a)))switch(d&&d.length>0&&(c=a.h,c.i=c.i.concat(d)),P){case 1:ci(a,5);break;case 4:ci(a,10);break;case 3:ci(a,6);break;default:ci(a,2)}}}function bm(a,c){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*c}function ci(a,c){if(a.j.info("Error code "+c),c==2){var d=h(a.bb,a),g=a.Ua;const P=!g;g=new lr(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||io(g,"https"),Xa(g),P?g0(g.toString(),d):y0(g.toString(),d)}else J(2);a.I=0,a.l&&a.l.pa(c),Dm(a),Am(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),J(2)):(this.j.info("Failed to ping google.com"),J(1))};function Dm(a){if(a.I=0,a.ja=[],a.l){const c=hm(a.h);(c.length!=0||a.i.length!=0)&&(x(a.ja,c),x(a.ja,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.oa()}}function Om(a,c,d){var g=d instanceof lr?wn(d):new lr(d);if(g.g!="")c&&(g.g=c+"."+g.g),so(g,g.u);else{var P=o.location;g=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;const b=new lr(null);g&&io(b,g),c&&(b.g=c),P&&so(b,P),d&&(b.h=d),g=b}return d=a.G,c=a.wa,d&&c&&Te(g,d,c),Te(g,"VER",a.ka),fo(a,g),g}function Vm(a,c,d){if(c&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Aa&&!a.ma?new be(new zc({ab:d})):new be(a.ma),c.Fa(a.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mm(){}t=Mm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function il(){}il.prototype.g=function(a,c){return new Lt(a,c)};function Lt(a,c){Ke.call(this),this.g=new km(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(a?a["X-WebChannel-Client-Profile"]=c.sa:a={"X-WebChannel-Client-Profile":c.sa}),this.g.U=a,(a=c&&c.Qb)&&!T(a)&&(this.g.u=a),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!T(c)&&(this.g.G=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Ki(this)}p(Lt,Ke),Lt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Lt.prototype.close=function(){qc(this.g)},Lt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=no(a),a=d);c.i.push(new l0(c.Ya++,a)),c.I==3&&nl(c)},Lt.prototype.N=function(){this.g.l=null,delete this.j,qc(this.g),delete this.g,Lt.Z.N.call(this)};function Lm(a){qi.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}p(Lm,qi);function Fm(){Wi.call(this),this.status=1}p(Fm,Wi);function Ki(a){this.g=a}p(Ki,Mm),Ki.prototype.ra=function(){Fe(this.g,"a")},Ki.prototype.qa=function(a){Fe(this.g,new Lm(a))},Ki.prototype.pa=function(a){Fe(this.g,new Fm)},Ki.prototype.oa=function(){Fe(this.g,"b")},il.prototype.createWebChannel=il.prototype.g,Lt.prototype.send=Lt.prototype.o,Lt.prototype.open=Lt.prototype.m,Lt.prototype.close=Lt.prototype.close,wE=function(){return new il},vE=function(){return N()},_E=Fn,Md={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},kt.NO_ERROR=0,kt.TIMEOUT=8,kt.HTTP_ERROR=6,Bl=kt,jn.COMPLETE="complete",yE=jn,Qa.EventType=ai,ai.OPEN="a",ai.CLOSE="b",ai.ERROR="c",ai.MESSAGE="d",Ke.prototype.listen=Ke.prototype.J,xo=Qa,be.prototype.listenOnce=be.prototype.K,be.prototype.getLastError=be.prototype.Ha,be.prototype.getLastErrorCode=be.prototype.ya,be.prototype.getStatus=be.prototype.ca,be.prototype.getResponseJson=be.prototype.La,be.prototype.getResponseText=be.prototype.la,be.prototype.send=be.prototype.ea,be.prototype.setWithCredentials=be.prototype.Fa,gE=be}).apply(typeof Il<"u"?Il:typeof self<"u"?self:typeof window<"u"?window:{});const ay="@firebase/firestore",ly="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hs="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new cc("@firebase/firestore");function Ji(){return Pi.logLevel}function H(t,...e){if(Pi.logLevel<=le.DEBUG){const n=e.map(sp);Pi.debug(`Firestore (${Hs}): ${t}`,...n)}}function nr(t,...e){if(Pi.logLevel<=le.ERROR){const n=e.map(sp);Pi.error(`Firestore (${Hs}): ${t}`,...n)}}function Ds(t,...e){if(Pi.logLevel<=le.WARN){const n=e.map(sp);Pi.warn(`Firestore (${Hs}): ${t}`,...n)}}function sp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,EE(t,r,n)}function EE(t,e,n){let r=`FIRESTORE (${Hs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw nr(r),new Error(r)}function pe(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||EE(e,i,r)}function re(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Ht{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class O1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class V1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class M1{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){pe(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Fr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Fr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Fr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(pe(typeof r.accessToken=="string",31837,{l:r}),new TE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string",2055,{h:e}),new ct(e)}}class L1{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class F1{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new L1(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class uy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class j1{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,jt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){pe(this.o===void 0,3512);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new uy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(pe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new uy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=U1(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function Ld(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return kh(i)===kh(s)?ue(i,s):kh(i)?1:-1}return ue(t.length,e.length)}const B1=55296,z1=57343;function kh(t){const e=t.charCodeAt(0);return e>=B1&&e<=z1}function Os(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy="__name__";class Sn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Z(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Sn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Sn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Sn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ue(e.length,n.length)}static compareSegments(e,n){const r=Sn.isNumericId(e),i=Sn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Sn.extractNumericId(e).compare(Sn.extractNumericId(n)):Ld(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Lr.fromString(e.substring(4,e.length-2))}}class we extends Sn{construct(e,n,r){return new we(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new we(n)}static emptyPath(){return new we([])}}const $1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends Sn{construct(e,n,r){return new nt(e,n,r)}static isValidIdentifier(e){return $1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===cy}static keyField(){return new nt([cy])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(we.fromString(e))}static fromName(e){return new Q(we.fromString(e).popFirst(5))}static empty(){return new Q(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new we(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(t,e,n){if(!n)throw new W(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function q1(t,e,n,r){if(e===!0&&r===!0)throw new W(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function hy(t){if(!Q.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function dy(t){if(Q.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function SE(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function dc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z(12329,{type:typeof t})}function Qn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=dc(t);throw new W(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(t,e){const n={typeString:t};return e&&(n.value=e),n}function ba(t,e){if(!SE(t))throw new W(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new W(V.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=-62135596800,py=1e6;class Se{static now(){return Se.fromMillis(Date.now())}static fromDate(e){return Se.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*py);return new Se(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<fy)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/py}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Se._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ba(e,Se._jsonSchema))return new Se(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-fy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Se._jsonSchemaVersion="firestore/timestamp/1.0",Se._jsonSchema={type:ze("string",Se._jsonSchemaVersion),seconds:ze("number"),nanoseconds:ze("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{static fromTimestamp(e){return new te(e)}static min(){return new te(new Se(0,0))}static max(){return new te(new Se(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga=-1;function W1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new Se(n+1,0):new Se(n,r));return new $r(i,Q.empty(),e)}function H1(t){return new $r(t.readTime,t.key,ga)}class $r{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new $r(te.min(),Q.empty(),ga)}static max(){return new $r(te.max(),Q.empty(),ga)}}function G1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Q1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gs(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==K1)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Y1(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ks(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}fc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap=-1;function pc(t){return t==null}function Su(t){return t===0&&1/t==-1/0}function J1(t){return typeof t=="number"&&Number.isInteger(t)&&!Su(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE="";function X1(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=my(e)),e=Z1(t.get(n),e);return my(e)}function Z1(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case kE:n+="";break;default:n+=s}}return n}function my(t){return t+kE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Fi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function AE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){this.comparator=e,this.root=n||tt.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sl(this.root,e,this.comparator,!0)}}class Sl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??tt.RED,this.left=i??tt.EMPTY,this.right=s??tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new tt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return tt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Z(27949);return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw Z(57766)}get value(){throw Z(16141)}get color(){throw Z(16727)}get left(){throw Z(29726)}get right(){throw Z(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new tt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new yy(this.data.getIterator())}getIteratorFrom(e){return new yy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ge(this.comparator);return n.data=e,n}}class yy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new hn([])}unionWith(e){let n=new Ge(nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new hn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Os(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new CE("Invalid base64 string: "+s):s}}(e);return new st(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new st(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}st.EMPTY_BYTE_STRING=new st("");const eC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qr(t){if(pe(!!t,39018),typeof t=="string"){let e=0;const n=eC.exec(t);if(pe(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Wr(t){return typeof t=="string"?st.fromBase64String(t):st.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE="server_timestamp",PE="__type__",NE="__previous_value__",xE="__local_write_time__";function lp(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[PE])==null?void 0:r.stringValue)===RE}function mc(t){const e=t.mapValue.fields[NE];return lp(e)?mc(e):e}function ya(t){const e=qr(t.mapValue.fields[xE].timestampValue);return new Se(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e,n,r,i,s,o,l,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const ku="(default)";class _a{constructor(e,n){this.projectId=e,this.database=n||ku}static empty(){return new _a("","")}get isDefaultDatabase(){return this.database===ku}isEqual(e){return e instanceof _a&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE="__type__",nC="__max__",kl={mapValue:{}},DE="__vector__",Au="value";function Hr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?lp(t)?4:iC(t)?9007199254740991:rC(t)?10:11:Z(28295,{value:t})}function Mn(t,e){if(t===e)return!0;const n=Hr(t);if(n!==Hr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ya(t).isEqual(ya(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=qr(i.timestampValue),l=qr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Wr(i.bytesValue).isEqual(Wr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ve(i.geoPointValue.latitude)===Ve(s.geoPointValue.latitude)&&Ve(i.geoPointValue.longitude)===Ve(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ve(i.integerValue)===Ve(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ve(i.doubleValue),l=Ve(s.doubleValue);return o===l?Su(o)===Su(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Os(t.arrayValue.values||[],e.arrayValue.values||[],Mn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(gy(o)!==gy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Mn(o[u],l[u])))return!1;return!0}(t,e);default:return Z(52216,{left:t})}}function va(t,e){return(t.values||[]).find(n=>Mn(n,e))!==void 0}function Vs(t,e){if(t===e)return 0;const n=Hr(t),r=Hr(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ve(s.integerValue||s.doubleValue),u=Ve(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return _y(t.timestampValue,e.timestampValue);case 4:return _y(ya(t),ya(e));case 5:return Ld(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Wr(s),u=Wr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ue(l[h],u[h]);if(f!==0)return f}return ue(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ue(Ve(s.latitude),Ve(o.latitude));return l!==0?l:ue(Ve(s.longitude),Ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return vy(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,A,x,D;const l=s.fields||{},u=o.fields||{},h=(m=l[Au])==null?void 0:m.arrayValue,f=(A=u[Au])==null?void 0:A.arrayValue,p=ue(((x=h==null?void 0:h.values)==null?void 0:x.length)||0,((D=f==null?void 0:f.values)==null?void 0:D.length)||0);return p!==0?p:vy(h,f)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===kl.mapValue&&o===kl.mapValue)return 0;if(s===kl.mapValue)return 1;if(o===kl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const m=Ld(u[p],f[p]);if(m!==0)return m;const A=Vs(l[u[p]],h[f[p]]);if(A!==0)return A}return ue(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Z(23264,{he:n})}}function _y(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=qr(t),r=qr(e),i=ue(n.seconds,r.seconds);return i!==0?i:ue(n.nanos,r.nanos)}function vy(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Vs(n[i],r[i]);if(s)return s}return ue(n.length,r.length)}function Ms(t){return Fd(t)}function Fd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=qr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Wr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Fd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Fd(n.fields[o])}`;return i+"}"}(t.mapValue):Z(61005,{value:t})}function zl(t){switch(Hr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=mc(t);return e?16+zl(e):16;case 5:return 2*t.stringValue.length;case 6:return Wr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+zl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Fi(r.fields,(s,o)=>{i+=s.length+zl(o)}),i}(t.mapValue);default:throw Z(13486,{value:t})}}function wy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function jd(t){return!!t&&"integerValue"in t}function up(t){return!!t&&"arrayValue"in t}function Ey(t){return!!t&&"nullValue"in t}function Ty(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $l(t){return!!t&&"mapValue"in t}function rC(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[bE])==null?void 0:r.stringValue)===DE}function Ho(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Fi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ho(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ho(t.arrayValue.values[n]);return e}return{...t}}function iC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===nC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.value=e}static empty(){return new Yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!$l(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ho(n)}setAll(e){let n=nt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Ho(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());$l(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];$l(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Fi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Yt(Ho(this.value))}}function OE(t){const e=[];return Fi(t.fields,(n,r)=>{const i=new nt([n]);if($l(r)){const s=OE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new hn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new dt(e,0,te.min(),te.min(),te.min(),Yt.empty(),0)}static newFoundDocument(e,n,r,i){return new dt(e,1,n,te.min(),r,i,0)}static newNoDocument(e,n){return new dt(e,2,n,te.min(),te.min(),Yt.empty(),0)}static newUnknownDocument(e,n){return new dt(e,3,n,te.min(),te.min(),Yt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,n){this.position=e,this.inclusive=n}}function Iy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=Vs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Sy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Mn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n="asc"){this.field=e,this.dir=n}}function sC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{}class Be extends VE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new aC(e,n,r):n==="array-contains"?new cC(e,r):n==="in"?new hC(e,r):n==="not-in"?new dC(e,r):n==="array-contains-any"?new fC(e,r):new Be(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new lC(e,r):new uC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Vs(n,this.value)):n!==null&&Hr(this.value)===Hr(n)&&this.matchesComparison(Vs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yn extends VE{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new yn(e,n)}matches(e){return ME(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ME(t){return t.op==="and"}function LE(t){return oC(t)&&ME(t)}function oC(t){for(const e of t.filters)if(e instanceof yn)return!1;return!0}function Ud(t){if(t instanceof Be)return t.field.canonicalString()+t.op.toString()+Ms(t.value);if(LE(t))return t.filters.map(e=>Ud(e)).join(",");{const e=t.filters.map(n=>Ud(n)).join(",");return`${t.op}(${e})`}}function FE(t,e){return t instanceof Be?function(r,i){return i instanceof Be&&r.op===i.op&&r.field.isEqual(i.field)&&Mn(r.value,i.value)}(t,e):t instanceof yn?function(r,i){return i instanceof yn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&FE(o,i.filters[l]),!0):!1}(t,e):void Z(19439)}function jE(t){return t instanceof Be?function(n){return`${n.field.canonicalString()} ${n.op} ${Ms(n.value)}`}(t):t instanceof yn?function(n){return n.op.toString()+" {"+n.getFilters().map(jE).join(" ,")+"}"}(t):"Filter"}class aC extends Be{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class lC extends Be{constructor(e,n){super(e,"in",n),this.keys=UE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class uC extends Be{constructor(e,n){super(e,"not-in",n),this.keys=UE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function UE(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class cC extends Be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return up(n)&&va(n.arrayValue,this.value)}}class hC extends Be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&va(this.value.arrayValue,n)}}class dC extends Be{constructor(e,n){super(e,"not-in",n)}matches(e){if(va(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!va(this.value.arrayValue,n)}}class fC extends Be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!up(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>va(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function ky(t,e=null,n=[],r=[],i=null,s=null,o=null){return new pC(t,e,n,r,i,s,o)}function cp(t){const e=re(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ud(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),pc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ms(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ms(r)).join(",")),e.Te=n}return e.Te}function hp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!sC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!FE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Sy(t.startAt,e.startAt)&&Sy(t.endAt,e.endAt)}function Bd(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function mC(t,e,n,r,i,s,o,l){return new Qs(t,e,n,r,i,s,o,l)}function gc(t){return new Qs(t)}function Ay(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function BE(t){return t.collectionGroup!==null}function Go(t){const e=re(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ge(nt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new wa(s,r))}),n.has(nt.keyField().canonicalString())||e.Ie.push(new wa(nt.keyField(),r))}return e.Ie}function Pn(t){const e=re(t);return e.Ee||(e.Ee=gC(e,Go(t))),e.Ee}function gC(t,e){if(t.limitType==="F")return ky(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new wa(i.field,s)});const n=t.endAt?new Cu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Cu(t.startAt.position,t.startAt.inclusive):null;return ky(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function zd(t,e){const n=t.filters.concat([e]);return new Qs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ru(t,e,n){return new Qs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function yc(t,e){return hp(Pn(t),Pn(e))&&t.limitType===e.limitType}function zE(t){return`${cp(Pn(t))}|lt:${t.limitType}`}function Xi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>jE(i)).join(", ")}]`),pc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ms(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ms(i)).join(",")),`Target(${r})`}(Pn(t))}; limitType=${t.limitType})`}function _c(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Go(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Iy(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Go(r),i)||r.endAt&&!function(o,l,u){const h=Iy(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Go(r),i))}(t,e)}function yC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function $E(t){return(e,n)=>{let r=!1;for(const i of Go(t)){const s=_C(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function _C(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Vs(u,h):Z(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Fi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return AE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC=new xe(Q.comparator);function rr(){return vC}const qE=new xe(Q.comparator);function bo(...t){let e=qE;for(const n of t)e=e.insert(n.key,n);return e}function WE(t){let e=qE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function vi(){return Ko()}function HE(){return Ko()}function Ko(){return new ji(t=>t.toString(),(t,e)=>t.isEqual(e))}const wC=new xe(Q.comparator),EC=new Ge(Q.comparator);function ce(...t){let e=EC;for(const n of t)e=e.add(n);return e}const TC=new Ge(ue);function IC(){return TC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Su(e)?"-0":e}}function GE(t){return{integerValue:""+t}}function SC(t,e){return J1(e)?GE(e):dp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(){this._=void 0}}function kC(t,e,n){return t instanceof Ea?function(i,s){const o={fields:{[PE]:{stringValue:RE},[xE]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&lp(s)&&(s=mc(s)),s&&(o.fields[NE]=s),{mapValue:o}}(n,e):t instanceof Ta?QE(t,e):t instanceof Ia?YE(t,e):function(i,s){const o=KE(i,s),l=Cy(o)+Cy(i.Ae);return jd(o)&&jd(i.Ae)?GE(l):dp(i.serializer,l)}(t,e)}function AC(t,e,n){return t instanceof Ta?QE(t,e):t instanceof Ia?YE(t,e):n}function KE(t,e){return t instanceof Pu?function(r){return jd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ea extends vc{}class Ta extends vc{constructor(e){super(),this.elements=e}}function QE(t,e){const n=JE(e);for(const r of t.elements)n.some(i=>Mn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ia extends vc{constructor(e){super(),this.elements=e}}function YE(t,e){let n=JE(e);for(const r of t.elements)n=n.filter(i=>!Mn(i,r));return{arrayValue:{values:n}}}class Pu extends vc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Cy(t){return Ve(t.integerValue||t.doubleValue)}function JE(t){return up(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,n){this.field=e,this.transform=n}}function RC(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ta&&i instanceof Ta||r instanceof Ia&&i instanceof Ia?Os(r.elements,i.elements,Mn):r instanceof Pu&&i instanceof Pu?Mn(r.Ae,i.Ae):r instanceof Ea&&i instanceof Ea}(t.transform,e.transform)}class PC{constructor(e,n){this.version=e,this.transformResults=n}}class Nn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Nn}static exists(e){return new Nn(void 0,e)}static updateTime(e){return new Nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ql(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class wc{}function XE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new eT(t.key,Nn.none()):new Da(t.key,t.data,Nn.none());{const n=t.data,r=Yt.empty();let i=new Ge(nt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ui(t.key,r,new hn(i.toArray()),Nn.none())}}function NC(t,e,n){t instanceof Da?function(i,s,o){const l=i.value.clone(),u=Py(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ui?function(i,s,o){if(!ql(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Py(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(ZE(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Qo(t,e,n,r){return t instanceof Da?function(s,o,l,u){if(!ql(s.precondition,o))return l;const h=s.value.clone(),f=Ny(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ui?function(s,o,l,u){if(!ql(s.precondition,o))return l;const h=Ny(s.fieldTransforms,u,o),f=o.data;return f.setAll(ZE(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return ql(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function xC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=KE(r.transform,i||null);s!=null&&(n===null&&(n=Yt.empty()),n.set(r.field,s))}return n||null}function Ry(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Os(r,i,(s,o)=>RC(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Da extends wc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ui extends wc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ZE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Py(t,e,n){const r=new Map;pe(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,AC(o,l,n[i]))}return r}function Ny(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,kC(s,o,e))}return r}class eT extends wc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bC extends wc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&NC(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Qo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Qo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=HE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=XE(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&Os(this.mutations,e.mutations,(n,r)=>Ry(n,r))&&Os(this.baseMutations,e.baseMutations,(n,r)=>Ry(n,r))}}class fp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){pe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return wC}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new fp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je,he;function MC(t){switch(t){case V.OK:return Z(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return Z(15467,{code:t})}}function tT(t){if(t===void 0)return nr("GRPC error has no .code"),V.UNKNOWN;switch(t){case je.OK:return V.OK;case je.CANCELLED:return V.CANCELLED;case je.UNKNOWN:return V.UNKNOWN;case je.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case je.INTERNAL:return V.INTERNAL;case je.UNAVAILABLE:return V.UNAVAILABLE;case je.UNAUTHENTICATED:return V.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case je.NOT_FOUND:return V.NOT_FOUND;case je.ALREADY_EXISTS:return V.ALREADY_EXISTS;case je.PERMISSION_DENIED:return V.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case je.ABORTED:return V.ABORTED;case je.OUT_OF_RANGE:return V.OUT_OF_RANGE;case je.UNIMPLEMENTED:return V.UNIMPLEMENTED;case je.DATA_LOSS:return V.DATA_LOSS;default:return Z(39323,{code:t})}}(he=je||(je={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC=new Lr([4294967295,4294967295],0);function xy(t){const e=LC().encode(t),n=new mE;return n.update(e),new Uint8Array(n.digest())}function by(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Lr([n,r],0),new Lr([i,s],0)]}class pp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Do(`Invalid padding: ${n}`);if(r<0)throw new Do(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Do(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Do(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Lr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Lr.fromNumber(r)));return i.compare(FC)===1&&(i=new Lr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=xy(e),[r,i]=by(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new pp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=xy(e),[r,i]=by(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Do extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Oa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ec(te.min(),i,new xe(ue),rr(),ce())}}class Oa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Oa(r,n,ce(),ce(),ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class nT{constructor(e,n){this.targetId=e,this.Ce=n}}class rT{constructor(e,n,r=st.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Dy{constructor(){this.ve=0,this.Fe=Oy(),this.Me=st.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ce(),n=ce(),r=ce();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Z(38017,{changeType:s})}}),new Oa(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Oy()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,pe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class jC{constructor(e){this.Ge=e,this.ze=new Map,this.je=rr(),this.Je=Al(),this.He=Al(),this.Ye=new xe(ue)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Z(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Bd(s))if(r===0){const o=new Q(s.path);this.et(n,o,dt.newNoDocument(o,te.min()))}else pe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Wr(r).toUint8Array()}catch(u){if(u instanceof CE)return Ds("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new pp(o,i,s)}catch(u){return Ds(u instanceof Do?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Bd(l.target)){const u=new Q(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,dt.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=ce();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Ec(e,n,this.Ye,this.je,r);return this.je=rr(),this.Je=Al(),this.He=Al(),this.Ye=new xe(ue),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Dy,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Ge(ue),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Ge(ue),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Dy),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Al(){return new xe(Q.comparator)}function Oy(){return new xe(Q.comparator)}const UC={asc:"ASCENDING",desc:"DESCENDING"},BC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zC={and:"AND",or:"OR"};class $C{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function $d(t,e){return t.useProto3Json||pc(e)?e:{value:e}}function Nu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function iT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function qC(t,e){return Nu(t,e.toTimestamp())}function xn(t){return pe(!!t,49232),te.fromTimestamp(function(n){const r=qr(n);return new Se(r.seconds,r.nanos)}(t))}function mp(t,e){return qd(t,e).canonicalString()}function qd(t,e){const n=function(i){return new we(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function sT(t){const e=we.fromString(t);return pe(cT(e),10190,{key:e.toString()}),e}function Wd(t,e){return mp(t.databaseId,e.path)}function Ah(t,e){const n=sT(e);if(n.get(1)!==t.databaseId.projectId)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(aT(n))}function oT(t,e){return mp(t.databaseId,e)}function WC(t){const e=sT(t);return e.length===4?we.emptyPath():aT(e)}function Hd(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function aT(t){return pe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Vy(t,e,n){return{name:Wd(t,e),fields:n.value.mapValue.fields}}function HC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Z(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(pe(f===void 0||typeof f=="string",58123),st.fromBase64String(f||"")):(pe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),st.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?V.UNKNOWN:tT(h.code);return new W(f,h.message||"")}(o);n=new rT(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ah(t,r.document.name),s=xn(r.document.updateTime),o=r.document.createTime?xn(r.document.createTime):te.min(),l=new Yt({mapValue:{fields:r.document.fields}}),u=dt.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Wl(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ah(t,r.document),s=r.readTime?xn(r.readTime):te.min(),o=dt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Wl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ah(t,r.document),s=r.removedTargetIds||[];n=new Wl([],s,i,null)}else{if(!("filter"in e))return Z(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new VC(i,s),l=r.targetId;n=new nT(l,o)}}return n}function GC(t,e){let n;if(e instanceof Da)n={update:Vy(t,e.key,e.value)};else if(e instanceof eT)n={delete:Wd(t,e.key)};else if(e instanceof Ui)n={update:Vy(t,e.key,e.data),updateMask:nR(e.fieldMask)};else{if(!(e instanceof bC))return Z(16599,{Vt:e.type});n={verify:Wd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Ea)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ta)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ia)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Pu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Z(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:qC(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Z(27497)}(t,e.precondition)),n}function KC(t,e){return t&&t.length>0?(pe(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?xn(i.updateTime):xn(s);return o.isEqual(te.min())&&(o=xn(s)),new PC(o,i.transformResults||[])}(n,e))):[]}function QC(t,e){return{documents:[oT(t,e.path)]}}function YC(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=oT(t,i);const s=function(h){if(h.length!==0)return uT(yn.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:Zi(m.field),direction:ZC(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=$d(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:i}}function JC(t){let e=WC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){pe(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const m=lT(p);return m instanceof yn&&LE(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(x){return new wa(es(x.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,pc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,A=p.values||[];return new Cu(A,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,A=p.values||[];return new Cu(A,m)}(n.endAt)),mC(e,i,o,s,l,"F",u,h)}function XC(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function lT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=es(n.unaryFilter.field);return Be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=es(n.unaryFilter.field);return Be.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=es(n.unaryFilter.field);return Be.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=es(n.unaryFilter.field);return Be.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Z(61313);default:return Z(60726)}}(t):t.fieldFilter!==void 0?function(n){return Be.create(es(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Z(58110);default:return Z(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return yn.create(n.compositeFilter.filters.map(r=>lT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z(1026)}}(n.compositeFilter.op))}(t):Z(30097,{filter:t})}function ZC(t){return UC[t]}function eR(t){return BC[t]}function tR(t){return zC[t]}function Zi(t){return{fieldPath:t.canonicalString()}}function es(t){return nt.fromServerFormat(t.fieldPath)}function uT(t){return t instanceof Be?function(n){if(n.op==="=="){if(Ty(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NAN"}};if(Ey(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ty(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NOT_NAN"}};if(Ey(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zi(n.field),op:eR(n.op),value:n.value}}}(t):t instanceof yn?function(n){const r=n.getFilters().map(i=>uT(i));return r.length===1?r[0]:{compositeFilter:{op:tR(n.op),filters:r}}}(t):Z(54877,{filter:t})}function nR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function cT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,n,r,i,s=te.min(),o=te.min(),l=st.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Ar(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ar(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e){this.yt=e}}function iR(t){const e=JC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ru(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(){this.Cn=new oR}addToCollectionParentIndex(e,n){return this.Cn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve($r.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve($r.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class oR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ge(we.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ge(we.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},hT=41943040;class At{static withCacheSize(e){return new At(e,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At.DEFAULT_COLLECTION_PERCENTILE=10,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,At.DEFAULT=new At(hT,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),At.DISABLED=new At(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ls(0)}static cr(){return new Ls(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly="LruGarbageCollector",aR=1048576;function Fy([t,e],[n,r]){const i=ue(t,n);return i===0?ue(e,r):i}class lR{constructor(e){this.Ir=e,this.buffer=new Ge(Fy),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Fy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class uR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){H(Ly,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ks(n)?H(Ly,"Ignoring IndexedDB error during garbage collection: ",n):await Gs(n)}await this.Vr(3e5)})}}class cR{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(fc.ce);const r=new lR(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(My)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),My):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Ji()<=le.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function hR(t,e){return new cR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(){this.changes=new ji(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Qo(r.mutation,i,hn.empty(),Se.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ce()){const i=vi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=bo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=vi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ce()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=rr();const o=Ko(),l=function(){return Ko()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Ui)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Qo(f.mutation,h,f.mutation.getFieldMask(),Se.now())):o.set(h.key,hn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>l.set(h,new fR(f,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Ko();let i=new xe((o,l)=>o-l),s=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||hn.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(i.get(l.batchId)||ce()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=HE();f.forEach(m=>{if(!s.has(m)){const A=XE(n.get(m),r.get(m));A!==null&&p.set(m,A),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):BE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(vi());let l=ga,u=s;return o.next(h=>M.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ce())).next(f=>({batchId:l,changes:WE(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=bo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=bo();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const h=function(p,m){return new Qs(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,dt.newInvalidDocument(f)))});let l=bo();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Qo(f.mutation,h,hn.empty(),Se.now()),_c(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return M.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:xn(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:iR(i.bundledQuery),readTime:xn(i.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(){this.overlays=new xe(Q.comparator),this.qr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=vi();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=vi(),s=n.length+1,o=new Q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new xe((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=vi(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=vi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return M.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new OC(n,r));let s=this.qr.get(n);s===void 0&&(s=ce(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(){this.sessionToken=st.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(){this.Qr=new Ge(Je.$r),this.Ur=new Ge(Je.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Je(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Je(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new Q(new we([])),r=new Je(n,e),i=new Je(n,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new Q(new we([])),r=new Je(n,e),i=new Je(n,e+1);let s=ce();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Je(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return Q.comparator(e.key,n.key)||ue(e.Yr,n.Yr)}static Kr(e,n){return ue(e.Yr,n.Yr)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Ge(Je.$r)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new DC(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new Je(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?ap:this.tr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),i=new Je(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ge(ue);return n.forEach(i=>{const s=new Je(i,0),o=new Je(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),M.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const o=new Je(new Q(s),0);let l=new Ge(ue);return this.Zr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Yr)),!0)},o),M.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){pe(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return M.forEach(n.mutations,i=>{const s=new Je(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Je(n,0),i=this.Zr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e){this.ri=e,this.docs=function(){return new xe(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():dt.newInvalidDocument(n))}getEntries(e,n){let r=rr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():dt.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=rr();const o=n.path,l=new Q(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||G1(H1(f),r)<=0||(i.has(f.key)||_c(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Z(9500)}ii(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new wR(this)}getSize(e){return M.resolve(this.size)}}class wR extends dR{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e){this.persistence=e,this.si=new ji(n=>cp(n),hp),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.oi=0,this._i=new gp,this.targetCount=0,this.ai=Ls.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),M.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Ls(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Pr(n),M.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e,n){this.ui={},this.overlays={},this.ci=new fc(0),this.li=!1,this.li=!0,this.hi=new yR,this.referenceDelegate=e(this),this.Pi=new ER(this),this.indexManager=new sR,this.remoteDocumentCache=function(i){return new vR(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new rR(n),this.Ii=new mR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new gR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new _R(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new TR(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return M.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class TR extends Q1{constructor(e){super(),this.currentSequenceNumber=e}}class yp{constructor(e){this.persistence=e,this.Ri=new gp,this.Vi=null}static mi(e){return new yp(e)}get fi(){if(this.Vi)return this.Vi;throw Z(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.fi,r=>{const i=Q.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,te.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class xu{constructor(e,n){this.persistence=e,this.pi=new ji(r=>X1(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=hR(this,n)}static mi(e,n){return new xu(e,n)}Ei(){}di(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return M.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?M.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,s.removeEntry(o,te.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),M.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=zl(e.data.value)),n}br(e,n,r){return M.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=ce(),i=ce();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new _p(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return pA()?8:Y1(pt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new IR;return this.Ss(e,n,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(Ji()<=le.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Xi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),M.resolve()):(Ji()<=le.DEBUG&&H("QueryEngine","Query:",Xi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(Ji()<=le.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Xi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pn(n))):M.resolve())}ys(e,n){if(Ay(n))return M.resolve(null);let r=Pn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ru(n,null,"F"),r=Pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ce(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ds(n,l);return this.Cs(n,h,o,u.readTime)?this.ys(e,Ru(n,null,"F")):this.vs(e,h,n,u)}))})))}ws(e,n,r,i){return Ay(n)||i.isEqual(te.min())?M.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?M.resolve(null):(Ji()<=le.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Xi(n)),this.vs(e,o,n,W1(i,ga)).next(l=>l))})}Ds(e,n){let r=new Ge($E(e));return n.forEach((i,s)=>{_c(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return Ji()<=le.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Xi(n)),this.ps.getDocumentsMatchingQuery(e,n,$r.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp="LocalStore",kR=3e8;class AR{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new xe(ue),this.xs=new ji(s=>cp(s),hp),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function CR(t,e,n,r){return new AR(t,e,n,r)}async function fT(t,e){const n=re(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ce();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ls:h,removedBatchIds:o,addedBatchIds:l}))})})}function RR(t,e){const n=re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,m=p.keys();let A=M.resolve();return m.forEach(x=>{A=A.next(()=>f.getEntry(u,x)).next(D=>{const L=h.docVersions.get(x);pe(L!==null,48541),D.version.compareTo(L)<0&&(p.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ce();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function pT(t){const e=re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function PR(t,e){const n=re(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;l.push(n.Pi.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(s,f.addedDocuments,p)));let A=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?A=A.withResumeToken(st.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(p,A),function(D,L,S){return D.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=kR?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(m,A,f)&&l.push(n.Pi.updateTargetData(s,A))});let u=rr(),h=ce();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(NR(s,o,e.documentUpdates).next(f=>{u=f.ks,h=f.qs})),!r.isEqual(te.min())){const f=n.Pi.getLastRemoteSnapshotVersion(s).next(p=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.Ms=i,s))}function NR(t,e,n){let r=ce(),i=ce();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=rr();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H(vp,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{ks:o,qs:i}})}function xR(t,e){const n=re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ap),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function bR(t,e){const n=re(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new Ar(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Gd(t,e,n){const r=re(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ks(o))throw o;H(vp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function jy(t,e,n){const r=re(t);let i=te.min(),s=ce();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=re(u),m=p.xs.get(f);return m!==void 0?M.resolve(p.Ms.get(m)):p.Pi.getTargetData(h,f)}(r,o,Pn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?i:te.min(),n?s:ce())).next(l=>(DR(r,yC(e),l),{documents:l,Qs:s})))}function DR(t,e,n){let r=t.Os.get(e)||te.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class Uy{constructor(){this.activeTargetIds=IC()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class OR{constructor(){this.Mo=new Uy,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Uy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By="ConnectivityMonitor";class zy{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){H(By,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){H(By,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cl=null;function Kd(){return Cl===null?Cl=function(){return 268435456+Math.round(2147483648*Math.random())}():Cl++,"0x"+Cl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch="RestConnection",MR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class LR{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===ku?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const o=Kd(),l=this.zo(e,n.toUriEncodedString());H(Ch,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:h}=new URL(l),f=Xr(h);return this.Jo(e,l,u,r,f).then(p=>(H(Ch,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Ds(Ch,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Ho(e,n,r,i,s,o){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Hs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=MR[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="WebChannelConnection";class jR extends LR{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=Kd();return new Promise((l,u)=>{const h=new gE;h.setWithCredentials(!0),h.listenOnce(yE.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Bl.NO_ERROR:const p=h.getResponseJson();H(ut,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Bl.TIMEOUT:H(ut,`RPC '${e}' ${o} timed out`),u(new W(V.DEADLINE_EXCEEDED,"Request time out"));break;case Bl.HTTP_ERROR:const m=h.getStatus();if(H(ut,`RPC '${e}' ${o} failed with status:`,m,"response text:",h.getResponseText()),m>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const x=A==null?void 0:A.error;if(x&&x.status&&x.message){const D=function(S){const w=S.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(w)>=0?w:V.UNKNOWN}(x.status);u(new W(D,x.message))}else u(new W(V.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new W(V.UNAVAILABLE,"Connection failed."));break;default:Z(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{H(ut,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);H(ut,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",f,r,15)})}T_(e,n,r){const i=Kd(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=wE(),l=vE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");H(ut,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);this.I_(p);let m=!1,A=!1;const x=new FR({Yo:L=>{A?H(ut,`Not sending because RPC '${e}' stream ${i} is closed:`,L):(m||(H(ut,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),H(ut,`RPC '${e}' stream ${i} sending:`,L),p.send(L))},Zo:()=>p.close()}),D=(L,S,w)=>{L.listen(S,C=>{try{w(C)}catch(O){setTimeout(()=>{throw O},0)}})};return D(p,xo.EventType.OPEN,()=>{A||(H(ut,`RPC '${e}' stream ${i} transport opened.`),x.o_())}),D(p,xo.EventType.CLOSE,()=>{A||(A=!0,H(ut,`RPC '${e}' stream ${i} transport closed`),x.a_(),this.E_(p))}),D(p,xo.EventType.ERROR,L=>{A||(A=!0,Ds(ut,`RPC '${e}' stream ${i} transport errored. Name:`,L.name,"Message:",L.message),x.a_(new W(V.UNAVAILABLE,"The operation could not be completed")))}),D(p,xo.EventType.MESSAGE,L=>{var S;if(!A){const w=L.data[0];pe(!!w,16349);const C=w,O=(C==null?void 0:C.error)||((S=C[0])==null?void 0:S.error);if(O){H(ut,`RPC '${e}' stream ${i} received error:`,O);const B=O.status;let U=function(E){const I=je[E];if(I!==void 0)return tT(I)}(B),_=O.message;U===void 0&&(U=V.INTERNAL,_="Unknown error status: "+B+" with message "+O.message),A=!0,x.a_(new W(U,_)),p.close()}else H(ut,`RPC '${e}' stream ${i} received:`,w),x.u_(w)}}),D(l,_E.STAT_EVENT,L=>{L.stat===Md.PROXY?H(ut,`RPC '${e}' stream ${i} detected buffering proxy`):L.stat===Md.NOPROXY&&H(ut,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.__()},0),x}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Rh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(t){return new $C(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y="PersistentStream";class gT{constructor(e,n,r,i,s,o,l,u){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new mT(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(nr(n.toString()),nr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new W(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return H($y,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(H($y,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class UR extends gT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=HC(this.serializer,e),r=function(s){if(!("targetChange"in s))return te.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?xn(o.readTime):te.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Hd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Bd(u)?{documents:QC(s,u)}:{query:YC(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=iT(s,o.resumeToken);const h=$d(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(te.min())>0){l.readTime=Nu(s,o.snapshotVersion.toTimestamp());const h=$d(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=XC(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Hd(this.serializer),n.removeTarget=e,this.q_(n)}}class BR extends gT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return pe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,pe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){pe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=KC(e.writeResults,e.commitTime),r=xn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Hd(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>GC(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{}class $R extends zR{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,qd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(V.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,qd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(V.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class qR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(nr(n),this.aa=!1):H("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni="RemoteStore";class WR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Bi(this)&&(H(Ni,"Restarting streams for network reachability change."),await async function(u){const h=re(u);h.Ea.add(4),await Va(h),h.Ra.set("Unknown"),h.Ea.delete(4),await Ic(h)}(this))})}),this.Ra=new qR(r,i)}}async function Ic(t){if(Bi(t))for(const e of t.da)await e(!0)}async function Va(t){for(const e of t.da)await e(!1)}function yT(t,e){const n=re(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Ip(n)?Tp(n):Ys(n).O_()&&Ep(n,e))}function wp(t,e){const n=re(t),r=Ys(n);n.Ia.delete(e),r.O_()&&_T(n,e),n.Ia.size===0&&(r.O_()?r.L_():Bi(n)&&n.Ra.set("Unknown"))}function Ep(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ys(t).Y_(e)}function _T(t,e){t.Va.Ue(e),Ys(t).Z_(e)}function Tp(t){t.Va=new jC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ys(t).start(),t.Ra.ua()}function Ip(t){return Bi(t)&&!Ys(t).x_()&&t.Ia.size>0}function Bi(t){return re(t).Ea.size===0}function vT(t){t.Va=void 0}async function HR(t){t.Ra.set("Online")}async function GR(t){t.Ia.forEach((e,n)=>{Ep(t,e)})}async function KR(t,e){vT(t),Ip(t)?(t.Ra.ha(e),Tp(t)):t.Ra.set("Unknown")}async function QR(t,e,n){if(t.Ra.set("Online"),e instanceof rT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(t,e)}catch(r){H(Ni,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await bu(t,r)}else if(e instanceof Wl?t.Va.Ze(e):e instanceof nT?t.Va.st(e):t.Va.tt(e),!n.isEqual(te.min()))try{const r=await pT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ia.get(h);f&&s.Ia.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.Ia.get(u);if(!f)return;s.Ia.set(u,f.withResumeToken(st.EMPTY_BYTE_STRING,f.snapshotVersion)),_T(s,u);const p=new Ar(f.target,u,h,f.sequenceNumber);Ep(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H(Ni,"Failed to raise snapshot:",r),await bu(t,r)}}async function bu(t,e,n){if(!Ks(e))throw e;t.Ea.add(1),await Va(t),t.Ra.set("Offline"),n||(n=()=>pT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H(Ni,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Ic(t)})}function wT(t,e){return e().catch(n=>bu(t,n,e))}async function Sc(t){const e=re(t),n=Gr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ap;for(;YR(e);)try{const i=await xR(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,JR(e,i)}catch(i){await bu(e,i)}ET(e)&&TT(e)}function YR(t){return Bi(t)&&t.Ta.length<10}function JR(t,e){t.Ta.push(e);const n=Gr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function ET(t){return Bi(t)&&!Gr(t).x_()&&t.Ta.length>0}function TT(t){Gr(t).start()}async function XR(t){Gr(t).ra()}async function ZR(t){const e=Gr(t);for(const n of t.Ta)e.ea(n.mutations)}async function eP(t,e,n){const r=t.Ta.shift(),i=fp.from(r,e,n);await wT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Sc(t)}async function tP(t,e){e&&Gr(t).X_&&await async function(r,i){if(function(o){return MC(o)&&o!==V.ABORTED}(i.code)){const s=r.Ta.shift();Gr(r).B_(),await wT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Sc(r)}}(t,e),ET(t)&&TT(t)}async function qy(t,e){const n=re(t);n.asyncQueue.verifyOperationInProgress(),H(Ni,"RemoteStore received new credentials");const r=Bi(n);n.Ea.add(3),await Va(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Ic(n)}async function nP(t,e){const n=re(t);e?(n.Ea.delete(2),await Ic(n)):e||(n.Ea.add(2),await Va(n),n.Ra.set("Unknown"))}function Ys(t){return t.ma||(t.ma=function(n,r,i){const s=re(n);return s.sa(),new UR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:HR.bind(null,t),t_:GR.bind(null,t),r_:KR.bind(null,t),H_:QR.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Ip(t)?Tp(t):t.Ra.set("Unknown")):(await t.ma.stop(),vT(t))})),t.ma}function Gr(t){return t.fa||(t.fa=function(n,r,i){const s=re(n);return s.sa(),new BR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:XR.bind(null,t),r_:tP.bind(null,t),ta:ZR.bind(null,t),na:eP.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Sc(t)):(await t.fa.stop(),t.Ta.length>0&&(H(Ni,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Fr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Sp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kp(t,e){if(nr("AsyncQueue",`${e}: ${t}`),Ks(t))return new W(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{static emptySet(e){return new ws(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=bo(),this.sortedSet=new xe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ws)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ws;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(){this.ga=new xe(Q.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Z(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Fs{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Fs(e,n,ws.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class iP{constructor(){this.queries=Hy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=re(n),s=i.queries;i.queries=Hy(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new W(V.ABORTED,"Firestore shutting down"))}}function Hy(){return new ji(t=>zE(t),yc)}async function IT(t,e){const n=re(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new rP,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=kp(o,`Initialization of query '${Xi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&Ap(n)}async function ST(t,e){const n=re(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function sP(t,e){const n=re(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&Ap(n)}function oP(t,e,n){const r=re(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function Ap(t){t.Ca.forEach(e=>{e.next()})}var Qd,Gy;(Gy=Qd||(Qd={})).Ma="default",Gy.Cache="cache";class kT{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Fs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Fs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Qd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(e){this.key=e}}class CT{constructor(e){this.key=e}}class aP{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ce(),this.mutatedKeys=ce(),this.eu=$E(e),this.tu=new ws(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Wy,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),A=_c(this.query,p)?p:null,x=!!m&&this.mutatedKeys.has(m.key),D=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let L=!1;m&&A?m.data.isEqual(A.data)?x!==D&&(r.track({type:3,doc:A}),L=!0):this.su(m,A)||(r.track({type:2,doc:A}),L=!0,(u&&this.eu(A,u)>0||h&&this.eu(A,h)<0)&&(l=!0)):!m&&A?(r.track({type:0,doc:A}),L=!0):m&&!A&&(r.track({type:1,doc:m}),L=!0,(u||h)&&(l=!0)),L&&(A?(o=o.add(A),s=D?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(A,x){const D=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z(20277,{Rt:L})}};return D(A)-D(x)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,h=u!==this.Za;return this.Za=u,o.length!==0||h?{snapshot:new Fs(this.query,e.tu,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Wy,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ce(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new CT(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new AT(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=ce();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Fs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Cp="SyncEngine";class lP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class uP{constructor(e){this.key=e,this.hu=!1}}class cP{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ji(l=>zE(l),yc),this.Iu=new Map,this.Eu=new Set,this.du=new xe(Q.comparator),this.Au=new Map,this.Ru=new gp,this.Vu={},this.mu=new Map,this.fu=Ls.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function hP(t,e,n=!0){const r=DT(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await RT(r,e,n,!0),i}async function dP(t,e){const n=DT(t);await RT(n,e,!0,!1)}async function RT(t,e,n,r){const i=await bR(t.localStore,Pn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await fP(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&yT(t.remoteStore,i),l}async function fP(t,e,n,r,i){t.pu=(p,m,A)=>async function(D,L,S,w){let C=L.view.ru(S);C.Cs&&(C=await jy(D.localStore,L.query,!1).then(({documents:_})=>L.view.ru(_,C)));const O=w&&w.targetChanges.get(L.targetId),B=w&&w.targetMismatches.get(L.targetId)!=null,U=L.view.applyChanges(C,D.isPrimaryClient,O,B);return Qy(D,L.targetId,U.au),U.snapshot}(t,p,m,A);const s=await jy(t.localStore,e,!0),o=new aP(e,s.Qs),l=o.ru(s.documents),u=Oa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);Qy(t,n,h.au);const f=new lP(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function pP(t,e,n){const r=re(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!yc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Gd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&wp(r.remoteStore,i.targetId),Yd(r,i.targetId)}).catch(Gs)):(Yd(r,i.targetId),await Gd(r.localStore,i.targetId,!0))}async function mP(t,e){const n=re(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),wp(n.remoteStore,r.targetId))}async function gP(t,e,n){const r=IP(t);try{const i=await function(o,l){const u=re(o),h=Se.now(),f=l.reduce((A,x)=>A.add(x.key),ce());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let x=rr(),D=ce();return u.Ns.getEntries(A,f).next(L=>{x=L,x.forEach((S,w)=>{w.isValidDocument()||(D=D.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,x)).next(L=>{p=L;const S=[];for(const w of l){const C=xC(w,p.get(w.key).overlayedDocument);C!=null&&S.push(new Ui(w.key,C,OE(C.value.mapValue),Nn.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,S,l)}).next(L=>{m=L;const S=L.applyToLocalDocumentSet(p,D);return u.documentOverlayCache.saveOverlays(A,L.batchId,S)})}).then(()=>({batchId:m.batchId,changes:WE(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Vu[o.currentUser.toKey()];h||(h=new xe(ue)),h=h.insert(l,u),o.Vu[o.currentUser.toKey()]=h}(r,i.batchId,n),await Ma(r,i.changes),await Sc(r.remoteStore)}catch(i){const s=kp(i,"Failed to persist write");n.reject(s)}}async function PT(t,e){const n=re(t);try{const r=await PR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(pe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?pe(o.hu,14607):i.removedDocuments.size>0&&(pe(o.hu,42227),o.hu=!1))}),await Ma(n,r,e)}catch(r){await Gs(r)}}function Ky(t,e,n){const r=re(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=re(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const m of p.Sa)m.va(l)&&(h=!0)}),h&&Ap(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function yP(t,e,n){const r=re(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new xe(Q.comparator);o=o.insert(s,dt.newNoDocument(s,te.min()));const l=ce().add(s),u=new Ec(te.min(),new Map,new xe(ue),o,l);await PT(r,u),r.du=r.du.remove(s),r.Au.delete(e),Rp(r)}else await Gd(r.localStore,e,!1).then(()=>Yd(r,e,n)).catch(Gs)}async function _P(t,e){const n=re(t),r=e.batch.batchId;try{const i=await RR(n.localStore,e);xT(n,r,null),NT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ma(n,i)}catch(i){await Gs(i)}}async function vP(t,e,n){const r=re(t);try{const i=await function(o,l){const u=re(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(pe(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);xT(r,e,n),NT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ma(r,i)}catch(i){await Gs(i)}}function NT(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function xT(t,e,n){const r=re(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function Yd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||bT(t,r)})}function bT(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(wp(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Rp(t))}function Qy(t,e,n){for(const r of n)r instanceof AT?(t.Ru.addReference(r.key,e),wP(t,r)):r instanceof CT?(H(Cp,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||bT(t,r.key)):Z(19791,{wu:r})}function wP(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(H(Cp,"New document in limbo: "+n),t.Eu.add(r),Rp(t))}function Rp(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new Q(we.fromString(e)),r=t.fu.next();t.Au.set(r,new uP(n)),t.du=t.du.insert(n,r),yT(t.remoteStore,new Ar(Pn(gc(n.path)),r,"TargetPurposeLimboResolution",fc.ce))}}async function Ma(t,e,n){const r=re(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=_p.As(u.targetId,h);s.push(p)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,h){const f=re(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,m=>M.forEach(m.Es,A=>f.persistence.referenceDelegate.addReference(p,m.targetId,A)).next(()=>M.forEach(m.ds,A=>f.persistence.referenceDelegate.removeReference(p,m.targetId,A)))))}catch(p){if(!Ks(p))throw p;H(vp,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const A=f.Ms.get(m),x=A.snapshotVersion,D=A.withLastLimboFreeSnapshotVersion(x);f.Ms=f.Ms.insert(m,D)}}}(r.localStore,s))}async function EP(t,e){const n=re(t);if(!n.currentUser.isEqual(e)){H(Cp,"User change. New user:",e.toKey());const r=await fT(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new W(V.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ma(n,r.Ls)}}function TP(t,e){const n=re(t),r=n.Au.get(e);if(r&&r.hu)return ce().add(r.key);{let i=ce();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function DT(t){const e=re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=PT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=TP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yP.bind(null,e),e.Pu.H_=sP.bind(null,e.eventManager),e.Pu.yu=oP.bind(null,e.eventManager),e}function IP(t){const e=re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_P.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=vP.bind(null,e),e}class Du{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Tc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return CR(this.persistence,new SR,e.initialUser,this.serializer)}Cu(e){return new dT(yp.mi,this.serializer)}Du(e){return new OR}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Du.provider={build:()=>new Du};class SP extends Du{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){pe(this.persistence.referenceDelegate instanceof xu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new uR(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new dT(r=>xu.mi(r,n),this.serializer)}}class Jd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ky(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=EP.bind(null,this.syncEngine),await nP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new iP}()}createDatastore(e){const n=Tc(e.databaseInfo.databaseId),r=function(s){return new jR(s)}(e.databaseInfo);return function(s,o,l,u){return new $R(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new WR(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Ky(this.syncEngine,n,0),function(){return zy.v()?new zy:new VR}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const p=new cP(i,s,o,l,u,h);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=re(i);H(Ni,"RemoteStore shutting down."),s.Ea.add(5),await Va(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Jd.provider={build:()=>new Jd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):nr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr="FirestoreClient";class kP{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ct.UNAUTHENTICATED,this.clientId=op.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H(Kr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H(Kr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=kp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ph(t,e){t.asyncQueue.verifyOperationInProgress(),H(Kr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await fT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Yy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await AP(t);H(Kr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>qy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>qy(e.remoteStore,i)),t._onlineComponents=e}async function AP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(Kr,"Using user provided OfflineComponentProvider");try{await Ph(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ds("Error using user provided cache. Falling back to memory cache: "+n),await Ph(t,new Du)}}else H(Kr,"Using default OfflineComponentProvider"),await Ph(t,new SP(void 0));return t._offlineComponents}async function VT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(Kr,"Using user provided OnlineComponentProvider"),await Yy(t,t._uninitializedComponentsProvider._online)):(H(Kr,"Using default OnlineComponentProvider"),await Yy(t,new Jd))),t._onlineComponents}function CP(t){return VT(t).then(e=>e.syncEngine)}async function Xd(t){const e=await VT(t),n=e.eventManager;return n.onListen=hP.bind(null,e.syncEngine),n.onUnlisten=pP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=dP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=mP.bind(null,e.syncEngine),n}function RP(t,e,n={}){const r=new Fr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new OT({next:m=>{f.Nu(),o.enqueueAndForget(()=>ST(s,p));const A=m.docs.has(l);!A&&m.fromCache?h.reject(new W(V.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&m.fromCache&&u&&u.source==="server"?h.reject(new W(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new kT(gc(l.path),f,{includeMetadataChanges:!0,qa:!0});return IT(s,p)}(await Xd(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT="firestore.googleapis.com",Xy=!0;class Zy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=LT,this.ssl=Xy}else this.host=e.host,this.ssl=e.ssl??Xy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=hT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<aR)throw new W(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}q1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=MT(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class kc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new O1;switch(r.type){case"firstParty":return new F1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Jy.get(n);r&&(H("ComponentProvider","Removing Datastore"),Jy.delete(n),r.terminate())}(this),Promise.resolve()}}function PP(t,e,n,r={}){var h;t=Qn(t,kc);const i=Xr(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(np(`https://${l}`),rp("Firestore",!0)),s.host!==LT&&s.host!==l&&Ds("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!zr(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=ct.MOCK_USER;else{f=oA(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new W(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ct(m)}t._authCredentials=new V1(new TE(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ei(this.firestore,e,this._query)}}class Le{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Le(this.firestore,e,this._key)}toJSON(){return{type:Le._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ba(n,Le._jsonSchema))return new Le(e,r||null,new Q(we.fromString(n.referencePath)))}}Le._jsonSchemaVersion="firestore/documentReference/1.0",Le._jsonSchema={type:ze("string",Le._jsonSchemaVersion),referencePath:ze("string")};class jr extends ei{constructor(e,n,r){super(e,n,gc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Le(this.firestore,null,new Q(e))}withConverter(e){return new jr(this.firestore,e,this._path)}}function FT(t,e,...n){if(t=Ne(t),IE("collection","path",e),t instanceof kc){const r=we.fromString(e,...n);return dy(r),new jr(t,null,r)}{if(!(t instanceof Le||t instanceof jr))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return dy(r),new jr(t.firestore,null,r)}}function Hl(t,e,...n){if(t=Ne(t),arguments.length===1&&(e=op.newId()),IE("doc","path",e),t instanceof kc){const r=we.fromString(e,...n);return hy(r),new Le(t,null,new Q(r))}{if(!(t instanceof Le||t instanceof jr))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return hy(r),new Le(t.firestore,t instanceof jr?t.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_="AsyncQueue";class t_{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new mT(this,"async_queue_retry"),this._c=()=>{const r=Rh();r&&H(e_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Rh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Rh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Fr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ks(e))throw e;H(e_,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,nr("INTERNAL UNHANDLED ERROR: ",n_(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=Sp.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&Z(47125,{Pc:n_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function n_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class js extends kc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new t_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new t_(e),this._firestoreClient=void 0,await e}}}function NP(t,e){const n=typeof t=="object"?t:hc(),r=typeof t=="string"?t:ku,i=Zr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=rE("firestore");s&&PP(i,...s)}return i}function Pp(t){if(t._terminated)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||xP(t),t._firestoreClient}function xP(t){var r,i,s;const e=t._freezeSettings(),n=function(l,u,h,f){return new tC(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,MT(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new kP(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jt(st.fromBase64String(e))}catch(n){throw new W(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Jt(st.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Jt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ba(e,Jt._jsonSchema))return Jt.fromBase64String(e.bytes)}}Jt._jsonSchemaVersion="firestore/bytes/1.0",Jt._jsonSchema={type:ze("string",Jt._jsonSchemaVersion),bytes:ze("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:bn._jsonSchemaVersion}}static fromJSON(e){if(ba(e,bn._jsonSchema))return new bn(e.latitude,e.longitude)}}bn._jsonSchemaVersion="firestore/geoPoint/1.0",bn._jsonSchema={type:ze("string",bn._jsonSchemaVersion),latitude:ze("number"),longitude:ze("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Dn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ba(e,Dn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Dn(e.vectorValues);throw new W(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Dn._jsonSchemaVersion="firestore/vectorValue/1.0",Dn._jsonSchema={type:ze("string",Dn._jsonSchemaVersion),vectorValues:ze("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP=/^__.*__$/;class DP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ui(e,this.data,this.fieldMask,n,this.fieldTransforms):new Da(e,this.data,n,this.fieldTransforms)}}function jT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z(40011,{Ac:t})}}class bp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new bp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ou(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(jT(this.Ac)&&bP.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class OP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Tc(e)}Cc(e,n,r,i=!1){return new bp({Ac:e,methodName:n,Dc:r,path:nt.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Dp(t){const e=t._freezeSettings(),n=Tc(t._databaseId);return new OP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function UT(t,e,n,r,i,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);$T("Data must be an object, but it was:",o,r);const l=BT(r,o);let u,h;if(s.merge)u=new hn(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const m=MP(e,p,n);if(!o.contains(m))throw new W(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);FP(f,m)||f.push(m)}u=new hn(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new DP(new Yt(l),u,h)}class Op extends xp{_toFieldTransform(e){return new CC(e.path,new Ea)}isEqual(e){return e instanceof Op}}function VP(t,e,n,r=!1){return Vp(n,t.Cc(r?4:3,e))}function Vp(t,e){if(zT(t=Ne(t)))return $T("Unsupported field value:",e,t),BT(t,e);if(t instanceof xp)return function(r,i){if(!jT(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Vp(l,i.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ne(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return SC(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Se.fromDate(r);return{timestampValue:Nu(i.serializer,s)}}if(r instanceof Se){const s=new Se(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Nu(i.serializer,s)}}if(r instanceof bn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Jt)return{bytesValue:iT(i.serializer,r._byteString)};if(r instanceof Le){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:mp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Dn)return function(o,l){return{mapValue:{fields:{[bE]:{stringValue:DE},[Au]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.Sc("VectorValues must only contain numeric values.");return dp(l.serializer,h)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${dc(r)}`)}(t,e)}function BT(t,e){const n={};return AE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fi(t,(r,i)=>{const s=Vp(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function zT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Se||t instanceof bn||t instanceof Jt||t instanceof Le||t instanceof xp||t instanceof Dn)}function $T(t,e,n){if(!zT(n)||!SE(n)){const r=dc(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function MP(t,e,n){if((e=Ne(e))instanceof Np)return e._internalPath;if(typeof e=="string")return qT(t,e);throw Ou("Field path arguments must be of type string or ",t,!1,void 0,n)}const LP=new RegExp("[~\\*/\\[\\]]");function qT(t,e,n){if(e.search(LP)>=0)throw Ou(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Np(...e.split("."))._internalPath}catch{throw Ou(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ou(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(V.INVALID_ARGUMENT,l+t+u)}function FP(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Mp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class jP extends WT{data(){return super.data()}}function Mp(t,e){return typeof e=="string"?qT(t,e):e instanceof Np?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Lp{}class Fp extends Lp{}function BP(t,e,...n){let r=[];e instanceof Lp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Up).length,l=s.filter(u=>u instanceof jp).length;if(o>1||o>0&&l>0)throw new W(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class jp extends Fp{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new jp(e,n,r)}_apply(e){const n=this._parse(e);return HT(e._query,n),new ei(e.firestore,e.converter,zd(e._query,n))}_parse(e){const n=Dp(e.firestore);return function(s,o,l,u,h,f,p){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new W(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){s_(p,f);const x=[];for(const D of p)x.push(i_(u,s,D));m={arrayValue:{values:x}}}else m=i_(u,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||s_(p,f),m=VP(l,o,p,f==="in"||f==="not-in");return Be.create(h,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Up extends Lp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Up(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:yn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)HT(o,u),o=zd(o,u)}(e._query,n),new ei(e.firestore,e.converter,zd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Bp extends Fp{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Bp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new W(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new W(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new wa(s,o)}(e._query,this._field,this._direction);return new ei(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Qs(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function zP(t,e="asc"){const n=e,r=Mp("orderBy",t);return Bp._create(r,n)}class zp extends Fp{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new zp(e,n,r)}_apply(e){return new ei(e.firestore,e.converter,Ru(e._query,this._limit,this._limitType))}}function $P(t){return zp._create("limit",t,"F")}function i_(t,e,n){if(typeof(n=Ne(n))=="string"){if(n==="")throw new W(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!BE(e)&&n.indexOf("/")!==-1)throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(we.fromString(n));if(!Q.isDocumentKey(r))throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return wy(t,new Q(r))}if(n instanceof Le)return wy(t,n._key);throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${dc(n)}.`)}function s_(t,e){if(!Array.isArray(t)||t.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function HT(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class qP{convertValue(e,n="none"){switch(Hr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Wr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Z(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Fi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Au].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Ve(o.doubleValue));return new Dn(n)}convertGeoPoint(e){return new bn(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=mc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ya(e));default:return null}}convertTimestamp(e){const n=qr(e);return new Se(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=we.fromString(e);pe(cT(r),9688,{name:e});const i=new _a(r.get(1),r.get(3)),s=new Q(r.popFirst(5));return i.isEqual(n)||nr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Oo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ii extends WT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Gl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Mp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ii._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ii._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ii._jsonSchema={type:ze("string",Ii._jsonSchemaVersion),bundleSource:ze("string","DocumentSnapshot"),bundleName:ze("string"),bundle:ze("string")};class Gl extends Ii{data(e={}){return super.data(e)}}class Es{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Oo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Gl(this._firestore,this._userDataWriter,r.key,r,new Oo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Gl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Oo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Gl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Oo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:WP(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Es._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=op.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function WP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(t){t=Qn(t,Le);const e=Qn(t.firestore,js);return RP(Pp(e),t._key).then(n=>YT(e,t,n))}Es._jsonSchemaVersion="firestore/querySnapshot/1.0",Es._jsonSchema={type:ze("string",Es._jsonSchemaVersion),bundleSource:ze("string","QuerySnapshot"),bundleName:ze("string"),bundle:ze("string")};class KT extends qP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,n)}}function HP(t,e,n){t=Qn(t,Le);const r=Qn(t.firestore,js),i=GT(t.converter,e);return QT(r,[UT(Dp(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Nn.none())])}function GP(t,e){const n=Qn(t.firestore,js),r=Hl(t),i=GT(t.converter,e);return QT(n,[UT(Dp(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Nn.exists(!1))]).then(()=>r)}function KP(t,...e){var u,h,f;t=Ne(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||r_(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(r_(e[r])){const p=e[r];e[r]=(u=p.next)==null?void 0:u.bind(p),e[r+1]=(h=p.error)==null?void 0:h.bind(p),e[r+2]=(f=p.complete)==null?void 0:f.bind(p)}let s,o,l;if(t instanceof Le)o=Qn(t.firestore,js),l=gc(t._key.path),s={next:p=>{e[r]&&e[r](YT(o,t,p))},error:e[r+1],complete:e[r+2]};else{const p=Qn(t,ei);o=Qn(p.firestore,js),l=p._query;const m=new KT(o);s={next:A=>{e[r]&&e[r](new Es(o,m,p,A))},error:e[r+1],complete:e[r+2]},UP(t._query)}return function(m,A,x,D){const L=new OT(D),S=new kT(A,L,x);return m.asyncQueue.enqueueAndForget(async()=>IT(await Xd(m),S)),()=>{L.Nu(),m.asyncQueue.enqueueAndForget(async()=>ST(await Xd(m),S))}}(Pp(o),l,i,s)}function QT(t,e){return function(r,i){const s=new Fr;return r.asyncQueue.enqueueAndForget(async()=>gP(await CP(r),i,s)),s.promise}(Pp(t),e)}function YT(t,e,n){const r=n.docs.get(e._key),i=new KT(t);return new Ii(t,i,e._key,r,new Oo(n.hasPendingWrites,n.fromCache),e.converter)}function JT(){return new Op("serverTimestamp")}(function(e,n=!0){(function(i){Hs=i})(Ws),gn(new nn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new js(new M1(r.getProvider("auth-internal")),new j1(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new W(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _a(h.options.projectId,f)}(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Dt(ay,ly,e),Dt(ay,ly,"esm2020")})();var QP="firebase",YP="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt(QP,YP,"app");function XT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JP=XT,ZT=new Li("auth","Firebase",XT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=new cc("@firebase/auth");function XP(t,...e){Vu.logLevel<=le.WARN&&Vu.warn(`Auth (${Ws}): ${t}`,...e)}function Kl(t,...e){Vu.logLevel<=le.ERROR&&Vu.error(`Auth (${Ws}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t,...e){throw $p(t,...e)}function On(t,...e){return $p(t,...e)}function eI(t,e,n){const r={...JP(),[e]:n};return new Li("auth","Firebase",r).create(e,{appName:t.name})}function Yn(t){return eI(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $p(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ZT.create(t,...e)}function X(t,e,...n){if(!t)throw $p(e,...n)}function Hn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Kl(e),new Error(e)}function ir(t,e){t||Hn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function ZP(){return a_()==="http:"||a_()==="https:"}function a_(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ZP()||oE()||"connection"in navigator)?navigator.onLine:!0}function tN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,n){this.shortDelay=e,this.longDelay=n,ir(n>e,"Short delay should be less than long delay!"),this.isMobile=uA()||dA()}get(){return eN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(t,e){ir(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],iN=new La(3e4,6e4);function or(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ln(t,e,n,r,i={}){return nI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=xa({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...s};return hA()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Xr(t.emulatorConfig.host)&&(h.credentials="include"),tI.fetch()(await rI(t,t.config.apiHost,n,l),h)})}async function nI(t,e,n){t._canInitEmulator=!1;const r={...nN,...e};try{const i=new oN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Rl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Rl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Rl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw eI(t,f,h);_n(t,f)}}catch(i){if(i instanceof Ht)throw i;_n(t,"network-request-failed",{message:String(i)})}}async function Fa(t,e,n,r,i={}){const s=await Ln(t,e,n,r,i);return"mfaPendingCredential"in s&&_n(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function rI(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?qp(t.config,i):`${t.config.apiScheme}://${i}`;return rN.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function sN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class oN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(On(this.auth,"network-request-failed")),iN.get())})}}function Rl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=On(t,e,r);return i.customData._tokenResponse=n,i}function l_(t){return t!==void 0&&t.enterprise!==void 0}class aN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return sN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function lN(t,e){return Ln(t,"GET","/v2/recaptchaConfig",or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uN(t,e){return Ln(t,"POST","/v1/accounts:delete",e)}async function Mu(t,e){return Ln(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cN(t,e=!1){const n=Ne(t),r=await n.getIdToken(e),i=Wp(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Yo(Nh(i.auth_time)),issuedAtTime:Yo(Nh(i.iat)),expirationTime:Yo(Nh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Nh(t){return Number(t)*1e3}function Wp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Kl("JWT malformed, contained fewer than 3 sections"),null;try{const i=tE(n);return i?JSON.parse(i):(Kl("Failed to decode base64 JWT payload"),null)}catch(i){return Kl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function u_(t){const e=Wp(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Us(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ht&&hN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function hN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yo(this.lastLoginAt),this.creationTime=Yo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lu(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Us(t,Mu(e,{idToken:n}));X(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?iI(i.providerUserInfo):[],o=pN(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new ef(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function fN(t){const e=Ne(t);await Lu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function iI(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mN(t,e){const n=await nI(t,{},async()=>{const r=xa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await rI(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Xr(t.emulatorConfig.host)&&(u.credentials="include"),tI.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function gN(t,e){return Ln(t,"POST","/v2/accounts:revokeToken",or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):u_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=u_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await mN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ts;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ts,this.toJSON())}_performRefresh(){return Hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class dn{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new dN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ef(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Us(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return cN(this,e)}reload(){return fN(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new dn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Lu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(jt(this.auth.app))return Promise.reject(Yn(this.auth));const e=await this.getIdToken();return await Us(this,uN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:A,providerData:x,stsTokenManager:D}=n;X(p&&D,e,"internal-error");const L=Ts.fromJSON(this.name,D);X(typeof p=="string",e,"internal-error"),pr(r,e.name),pr(i,e.name),X(typeof m=="boolean",e,"internal-error"),X(typeof A=="boolean",e,"internal-error"),pr(s,e.name),pr(o,e.name),pr(l,e.name),pr(u,e.name),pr(h,e.name),pr(f,e.name);const S=new dn({uid:p,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:A,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:L,createdAt:h,lastLoginAt:f});return x&&Array.isArray(x)&&(S.providerData=x.map(w=>({...w}))),u&&(S._redirectEventId=u),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ts;i.updateFromServerResponse(n);const s=new dn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Lu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?iI(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ts;l.updateFromIdToken(r);const u=new dn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ef(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_=new Map;function Gn(t){ir(t instanceof Function,"Expected a class definition");let e=c_.get(t);return e?(ir(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,c_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sI.type="NONE";const h_=sI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(t,e,n){return`firebase:${t}:${e}:${n}`}class Is{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ql(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ql("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Mu(this.auth,{idToken:e}).catch(()=>{});return n?dn._fromGetAccountInfoResponse(this.auth,n,e):null}return dn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Is(Gn(h_),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Gn(h_);const o=Ql(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const m=await Mu(e,{idToken:f}).catch(()=>{});if(!m)break;p=await dn._fromGetAccountInfoResponse(e,m,f)}else p=dn._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Is(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Is(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(uI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(oI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hI(e))return"Blackberry";if(dI(e))return"Webos";if(aI(e))return"Safari";if((e.includes("chrome/")||lI(e))&&!e.includes("edge/"))return"Chrome";if(cI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function oI(t=pt()){return/firefox\//i.test(t)}function aI(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lI(t=pt()){return/crios\//i.test(t)}function uI(t=pt()){return/iemobile/i.test(t)}function cI(t=pt()){return/android/i.test(t)}function hI(t=pt()){return/blackberry/i.test(t)}function dI(t=pt()){return/webos/i.test(t)}function Hp(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function yN(t=pt()){var e;return Hp(t)&&!!((e=window.navigator)!=null&&e.standalone)}function _N(){return fA()&&document.documentMode===10}function fI(t=pt()){return Hp(t)||cI(t)||dI(t)||hI(t)||/windows phone/i.test(t)||uI(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(t,e=[]){let n;switch(t){case"Browser":n=d_(pt());break;case"Worker":n=`${d_(pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ws}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wN(t,e={}){return Ln(t,"GET","/v2/passwordPolicy",or(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EN=6;class TN{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??EN,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new f_(this),this.idTokenSubscription=new f_(this),this.beforeStateQueue=new vN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ZT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Is.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Mu(this,{idToken:e}),r=await dn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(jt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Lu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(jt(this.app))return Promise.reject(Yn(this));const n=e?Ne(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return jt(this.app)?Promise.reject(Yn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return jt(this.app)?Promise.reject(Yn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wN(this),n=new TN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Li("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await gN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Is.create(this,[Gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(jt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&XP(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ti(t){return Ne(t)}class f_{constructor(e){this.auth=e,this.observer=null,this.addObserver=wA(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ac={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function SN(t){Ac=t}function mI(t){return Ac.loadJS(t)}function kN(){return Ac.recaptchaEnterpriseScript}function AN(){return Ac.gapiScript}function CN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class RN{constructor(){this.enterprise=new PN}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class PN{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const NN="recaptcha-enterprise",gI="NO_RECAPTCHA";class xN{constructor(e){this.type=NN,this.auth=ti(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{lN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new aN(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;l_(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(gI)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new RN().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&l_(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=kN();u.length!==0&&(u+=l),mI(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function p_(t,e,n,r=!1,i=!1){const s=new xN(t);let o;if(i)o=gI;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Fu(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await p_(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await p_(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bN(t,e){const n=Zr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(zr(s,e??{}))return i;_n(i,"already-initialized")}return n.initialize({options:e})}function DN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Gn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ON(t,e,n){const r=ti(t);X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=yI(e),{host:o,port:l}=VN(e),u=l===null?"":`:${l}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){X(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),X(zr(h,r.config.emulator)&&zr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Xr(o)?(np(`${s}//${o}${u}`),rp("Auth",!0)):MN()}function yI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function VN(t){const e=yI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:m_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:m_(o)}}}function m_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function MN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Hn("not implemented")}_getIdTokenResponse(e){return Hn("not implemented")}_linkToIdToken(e,n){return Hn("not implemented")}_getReauthenticationResolver(e){return Hn("not implemented")}}async function LN(t,e){return Ln(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FN(t,e){return Fa(t,"POST","/v1/accounts:signInWithPassword",or(t,e))}async function jN(t,e){return Ln(t,"POST","/v1/accounts:sendOobCode",or(t,e))}async function UN(t,e){return jN(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BN(t,e){return Fa(t,"POST","/v1/accounts:signInWithEmailLink",or(t,e))}async function zN(t,e){return Fa(t,"POST","/v1/accounts:signInWithEmailLink",or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa extends Gp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Sa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Sa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fu(e,n,"signInWithPassword",FN);case"emailLink":return BN(e,{email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fu(e,r,"signUpPassword",LN);case"emailLink":return zN(e,{idToken:n,email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ss(t,e){return Fa(t,"POST","/v1/accounts:signInWithIdp",or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $N="http://localhost";class xi extends Gp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_n("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new xi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ss(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ss(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ss(e,n)}buildRequest(){const e={requestUri:$N,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function WN(t){const e=Po(No(t)).link,n=e?Po(No(e)).deep_link_id:null,r=Po(No(t)).deep_link_id;return(r?Po(No(r)).link:null)||r||n||e||t}class Kp{constructor(e){const n=Po(No(e)),r=n.apiKey??null,i=n.oobCode??null,s=qN(n.mode??null);X(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=WN(e);try{return new Kp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(){this.providerId=Js.PROVIDER_ID}static credential(e,n){return Sa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Kp.parseLink(n);return X(r,"argument-error"),Sa._fromEmailAndCode(e,r.code,r.tenantId)}}Js.PROVIDER_ID="password";Js.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Js.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja extends _I{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends ja{constructor(){super("facebook.com")}static credential(e){return xi._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vr.credential(e.oauthAccessToken)}catch{return null}}}vr.FACEBOOK_SIGN_IN_METHOD="facebook.com";vr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends ja{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xi._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return wr.credential(n,r)}catch{return null}}}wr.GOOGLE_SIGN_IN_METHOD="google.com";wr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends ja{constructor(){super("github.com")}static credential(e){return xi._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.GITHUB_SIGN_IN_METHOD="github.com";Er.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends ja{constructor(){super("twitter.com")}static credential(e,n){return xi._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Tr.credential(n,r)}catch{return null}}}Tr.TWITTER_SIGN_IN_METHOD="twitter.com";Tr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HN(t,e){return Fa(t,"POST","/v1/accounts:signUp",or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await dn._fromIdTokenResponse(e,r,i),o=g_(r);return new bi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=g_(r);return new bi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function g_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju extends Ht{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ju.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ju(e,n,r,i)}}function vI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ju._fromErrorAndOperation(t,s,e,r):s})}async function GN(t,e,n=!1){const r=await Us(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KN(t,e,n=!1){const{auth:r}=t;if(jt(r.app))return Promise.reject(Yn(r));const i="reauthenticate";try{const s=await Us(t,vI(r,i,e,t),n);X(s.idToken,r,"internal-error");const o=Wp(s.idToken);X(o,r,"internal-error");const{sub:l}=o;return X(t.uid===l,r,"user-mismatch"),bi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&_n(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wI(t,e,n=!1){if(jt(t.app))return Promise.reject(Yn(t));const r="signIn",i=await vI(t,r,e),s=await bi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function QN(t,e){return wI(ti(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EI(t){const e=ti(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function YN(t,e,n){const r=ti(t);await Fu(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",UN)}async function JN(t,e,n){if(jt(t.app))return Promise.reject(Yn(t));const r=ti(t),o=await Fu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",HN).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&EI(t),u}),l=await bi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function XN(t,e,n){return jt(t.app)?Promise.reject(Yn(t)):QN(Ne(t),Js.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&EI(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZN(t,e){return Ln(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y_(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ne(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Us(r,ZN(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function ex(t,e,n,r){return Ne(t).onIdTokenChanged(e,n,r)}function tx(t,e,n){return Ne(t).beforeAuthStateChanged(e,n)}function nx(t,e,n,r){return Ne(t).onAuthStateChanged(e,n,r)}function rx(t){return Ne(t).signOut()}const Uu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Uu,"1"),this.storage.removeItem(Uu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix=1e3,sx=10;class II extends TI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);_N()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,sx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ix)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}II.type="LOCAL";const ox=II;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI extends TI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}SI.type="SESSION";const kI=SI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ax(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Cc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await ax(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Qp("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(){return window}function ux(t){Vn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(){return typeof Vn().WorkerGlobalScope<"u"&&typeof Vn().importScripts=="function"}async function cx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function dx(){return AI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI="firebaseLocalStorageDb",fx=1,Bu="firebaseLocalStorage",RI="fbase_key";class Ua{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Rc(t,e){return t.transaction([Bu],e?"readwrite":"readonly").objectStore(Bu)}function px(){const t=indexedDB.deleteDatabase(CI);return new Ua(t).toPromise()}function tf(){const t=indexedDB.open(CI,fx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Bu,{keyPath:RI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Bu)?e(r):(r.close(),await px(),e(await tf()))})})}async function __(t,e,n){const r=Rc(t,!0).put({[RI]:e,value:n});return new Ua(r).toPromise()}async function mx(t,e){const n=Rc(t,!1).get(e),r=await new Ua(n).toPromise();return r===void 0?null:r.value}function v_(t,e){const n=Rc(t,!0).delete(e);return new Ua(n).toPromise()}const gx=800,yx=3;class PI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>yx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return AI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cc._getInstance(dx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await cx(),!this.activeServiceWorker)return;this.sender=new lx(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tf();return await __(e,Uu,"1"),await v_(e,Uu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>__(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>mx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>v_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Rc(i,!1).getAll();return new Ua(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}PI.type="LOCAL";const _x=PI;new La(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vx(t,e){return e?Gn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp extends Gp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ss(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ss(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ss(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wx(t){return wI(t.auth,new Yp(t),t.bypassAuthState)}function Ex(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),KN(n,new Yp(t),t.bypassAuthState)}async function Tx(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),GN(n,new Yp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wx;case"linkViaPopup":case"linkViaRedirect":return Tx;case"reauthViaPopup":case"reauthViaRedirect":return Ex;default:_n(this.auth,"internal-error")}}resolve(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ix=new La(2e3,1e4);class fs extends NI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,fs.currentPopupAction&&fs.currentPopupAction.cancel(),fs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){ir(this.filter.length===1,"Popup operations only handle one event");const e=Qp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(On(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(On(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(On(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ix.get())};e()}}fs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sx="pendingRedirect",Yl=new Map;class kx extends NI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Yl.get(this.auth._key());if(!e){try{const r=await Ax(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Yl.set(this.auth._key(),e)}return this.bypassAuthState||Yl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ax(t,e){const n=Px(e),r=Rx(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Cx(t,e){Yl.set(t._key(),e)}function Rx(t){return Gn(t._redirectPersistence)}function Px(t){return Ql(Sx,t.config.apiKey,t.name)}async function Nx(t,e,n=!1){if(jt(t.app))return Promise.reject(Yn(t));const r=ti(t),i=vx(r,e),o=await new kx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx=10*60*1e3;class bx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Dx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!xI(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(On(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xx&&this.cachedEventUids.clear(),this.cachedEventUids.has(w_(e))}saveEventToCache(e){this.cachedEventUids.add(w_(e)),this.lastProcessedEventTime=Date.now()}}function w_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Dx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ox(t,e={}){return Ln(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Mx=/^https?/;async function Lx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ox(t);for(const n of e)try{if(Fx(n))return}catch{}_n(t,"unauthorized-domain")}function Fx(t){const e=Zd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Mx.test(n))return!1;if(Vx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx=new La(3e4,6e4);function E_(){const t=Vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ux(t){return new Promise((e,n)=>{var i,s,o;function r(){E_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{E_(),n(On(t,"network-request-failed"))},timeout:jx.get()})}if((s=(i=Vn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Vn().gapi)!=null&&o.load)r();else{const l=CN("iframefcb");return Vn()[l]=()=>{gapi.load?r():n(On(t,"network-request-failed"))},mI(`${AN()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Jl=null,e})}let Jl=null;function Bx(t){return Jl=Jl||Ux(t),Jl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx=new La(5e3,15e3),$x="__/auth/iframe",qx="emulator/auth/iframe",Wx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Hx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gx(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qp(e,qx):`https://${t.config.authDomain}/${$x}`,r={apiKey:e.apiKey,appName:t.name,v:Ws},i=Hx.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${xa(r).slice(1)}`}async function Kx(t){const e=await Bx(t),n=Vn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:Gx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Wx,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=On(t,"network-request-failed"),l=Vn().setTimeout(()=>{s(o)},zx.get());function u(){Vn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Yx=500,Jx=600,Xx="_blank",Zx="http://localhost";class T_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eb(t,e,n,r=Yx,i=Jx){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...Qx,width:r.toString(),height:i.toString(),top:s,left:o},h=pt().toLowerCase();n&&(l=lI(h)?Xx:n),oI(h)&&(e=e||Zx,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[A,x])=>`${m}${A}=${x},`,"");if(yN(h)&&l!=="_self")return tb(e||"",l),new T_(null);const p=window.open(e||"",l,f);X(p,t,"popup-blocked");try{p.focus()}catch{}return new T_(p)}function tb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb="__/auth/handler",rb="emulator/auth/handler",ib=encodeURIComponent("fac");async function I_(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ws,eventId:i};if(e instanceof _I){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof ja){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${ib}=${encodeURIComponent(u)}`:"";return`${sb(t)}?${xa(l).slice(1)}${h}`}function sb({config:t}){return t.emulator?qp(t,rb):`https://${t.authDomain}/${nb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh="webStorageSupport";class ob{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kI,this._completeRedirectFn=Nx,this._overrideRedirectResult=Cx}async _openPopup(e,n,r,i){var o;ir((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await I_(e,n,r,Zd(),i);return eb(e,s,Qp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await I_(e,n,r,Zd(),i);return ux(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ir(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Kx(e),r=new bx(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xh,{type:xh},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[xh];s!==void 0&&n(!!s),_n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Lx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fI()||aI()||Hp()}}const ab=ob;var S_="@firebase/auth",k_="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cb(t){gn(new nn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pI(t)},h=new IN(r,i,s,u);return DN(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),gn(new nn("auth-internal",e=>{const n=ti(e.getProvider("auth").getImmediate());return(r=>new lb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dt(S_,k_,ub(t)),Dt(S_,k_,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb=5*60,db=sE("authIdTokenMaxAge")||hb;let A_=null;const fb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>db)return;const i=n==null?void 0:n.token;A_!==i&&(A_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function pb(t=hc()){const e=Zr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=bN(t,{popupRedirectResolver:ab,persistence:[_x,ox,kI]}),r=sE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=fb(s.toString());tx(n,o,()=>o(n.currentUser)),ex(n,l=>o(l))}}const i=nE("auth");return i&&ON(n,`http://${i}`),n}function mb(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}SN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=On("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",mb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cb("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb="type.googleapis.com/google.protobuf.Int64Value",yb="type.googleapis.com/google.protobuf.UInt64Value";function bI(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function zu(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>zu(e));if(typeof t=="function"||typeof t=="object")return bI(t,e=>zu(e));throw new Error("Data cannot be encoded in JSON: "+t)}function Bs(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case gb:case yb:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>Bs(e)):typeof t=="function"||typeof t=="object"?bI(t,e=>Bs(e)):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Pt extends Ht{constructor(e,n,r){super(`${Jp}/${e}`,n||""),this.details=r,Object.setPrototypeOf(this,Pt.prototype)}}function _b(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function $u(t,e){let n=_b(t),r=n,i;try{const s=e&&e.error;if(s){const o=s.status;if(typeof o=="string"){if(!C_[o])return new Pt("internal","internal");n=C_[o],r=o}const l=s.message;typeof l=="string"&&(r=l),i=s.details,i!==void 0&&(i=Bs(i))}}catch{}return n==="ok"?null:new Pt(n,r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e,n,r,i){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,jt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||n.get().then(s=>this.auth=s,()=>{}),this.messaging||r.get().then(s=>this.messaging=s,()=>{}),this.appCheck||i==null||i.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),i=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:i}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf="us-central1",wb=/^data: (.*?)(?:\n|$)/;function Eb(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new Pt("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class Tb{constructor(e,n,r,i,s=nf,o=(...l)=>fetch(...l)){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new vb(e,n,r,i),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(s);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=nf}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function Ib(t,e,n){const r=Xr(e);t.emulatorOrigin=`http${r?"s":""}://${e}:${n}`,r&&(np(t.emulatorOrigin+"/backends"),rp("Functions",!0))}function Sb(t,e,n){const r=i=>Ab(t,e,i,{});return r.stream=(i,s)=>Rb(t,e,i,s),r}function DI(t){return t.emulatorOrigin&&Xr(t.emulatorOrigin)?"include":void 0}async function kb(t,e,n,r,i){n["Content-Type"]="application/json";let s;try{s=await r(t,{method:"POST",body:JSON.stringify(e),headers:n,credentials:DI(i)})}catch{return{status:0,json:null}}let o=null;try{o=await s.json()}catch{}return{status:s.status,json:o}}async function OI(t,e){const n={},r=await t.contextProvider.getContext(e.limitedUseAppCheckTokens);return r.authToken&&(n.Authorization="Bearer "+r.authToken),r.messagingToken&&(n["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(n["X-Firebase-AppCheck"]=r.appCheckToken),n}function Ab(t,e,n,r){const i=t._url(e);return Cb(t,i,n,r)}async function Cb(t,e,n,r){n=zu(n);const i={data:n},s=await OI(t,r),o=r.timeout||7e4,l=Eb(o),u=await Promise.race([kb(e,i,s,t.fetchImpl,t),l.promise,t.cancelAllRequests]);if(l.cancel(),!u)throw new Pt("cancelled","Firebase Functions instance was deleted.");const h=$u(u.status,u.json);if(h)throw h;if(!u.json)throw new Pt("internal","Response is not valid JSON object.");let f=u.json.data;if(typeof f>"u"&&(f=u.json.result),typeof f>"u")throw new Pt("internal","Response is missing data field.");return{data:Bs(f)}}function Rb(t,e,n,r){const i=t._url(e);return Pb(t,i,n,r||{})}async function Pb(t,e,n,r){var m;n=zu(n);const i={data:n},s=await OI(t,r);s["Content-Type"]="application/json",s.Accept="text/event-stream";let o;try{o=await t.fetchImpl(e,{method:"POST",body:JSON.stringify(i),headers:s,signal:r==null?void 0:r.signal,credentials:DI(t)})}catch(A){if(A instanceof Error&&A.name==="AbortError"){const D=new Pt("cancelled","Request was cancelled.");return{data:Promise.reject(D),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(D)}}}}}}const x=$u(0,null);return{data:Promise.reject(x),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(x)}}}}}}let l,u;const h=new Promise((A,x)=>{l=A,u=x});(m=r==null?void 0:r.signal)==null||m.addEventListener("abort",()=>{const A=new Pt("cancelled","Request was cancelled.");u(A)});const f=o.body.getReader(),p=Nb(f,l,u,r==null?void 0:r.signal);return{stream:{[Symbol.asyncIterator](){const A=p.getReader();return{async next(){const{value:x,done:D}=await A.read();return{value:x,done:D}},async return(){return await A.cancel(),{done:!0,value:void 0}}}}},data:h}}function Nb(t,e,n,r){const i=(o,l)=>{const u=o.match(wb);if(!u)return;const h=u[1];try{const f=JSON.parse(h);if("result"in f){e(Bs(f.result));return}if("message"in f){l.enqueue(Bs(f.message));return}if("error"in f){const p=$u(0,f);l.error(p),n(p);return}}catch(f){if(f instanceof Pt){l.error(f),n(f);return}}},s=new TextDecoder;return new ReadableStream({start(o){let l="";return u();async function u(){if(r!=null&&r.aborted){const h=new Pt("cancelled","Request was cancelled");return o.error(h),n(h),Promise.resolve()}try{const{value:h,done:f}=await t.read();if(f){l.trim()&&i(l.trim(),o),o.close();return}if(r!=null&&r.aborted){const m=new Pt("cancelled","Request was cancelled");o.error(m),n(m),await t.cancel();return}l+=s.decode(h,{stream:!0});const p=l.split(`
`);l=p.pop()||"";for(const m of p)m.trim()&&i(m.trim(),o);return u()}catch(h){const f=h instanceof Pt?h:$u(0,null);o.error(f),n(f)}}},cancel(){return t.cancel()}})}const R_="@firebase/functions",P_="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb="auth-internal",bb="app-check-internal",Db="messaging-internal";function Ob(t){const e=(n,{instanceIdentifier:r})=>{const i=n.getProvider("app").getImmediate(),s=n.getProvider(xb),o=n.getProvider(Db),l=n.getProvider(bb);return new Tb(i,s,o,l,r)};gn(new nn(Jp,e,"PUBLIC").setMultipleInstances(!0)),Dt(R_,P_,t),Dt(R_,P_,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vb(t=hc(),e=nf){const r=Zr(Ne(t),Jp).getImmediate({identifier:e}),i=rE("functions");return i&&Mb(r,...i),r}function Mb(t,e,n){Ib(Ne(t),e,n)}function Lb(t,e,n){return Sb(Ne(t),e)}Ob();const VI="@firebase/installations",Xp="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI=1e4,LI=`w:${Xp}`,FI="FIS_v2",Fb="https://firebaseinstallations.googleapis.com/v1",jb=60*60*1e3,Ub="installations",Bb="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Di=new Li(Ub,Bb,zb);function jI(t){return t instanceof Ht&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI({projectId:t}){return`${Fb}/projects/${t}/installations`}function BI(t){return{token:t.token,requestStatus:2,expiresIn:qb(t.expiresIn),creationTime:Date.now()}}async function zI(t,e){const r=(await e.json()).error;return Di.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function $I({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function $b(t,{refreshToken:e}){const n=$I(t);return n.append("Authorization",Wb(e)),n}async function qI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function qb(t){return Number(t.replace("s","000"))}function Wb(t){return`${FI} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hb({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=UI(t),i=$I(t),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={fid:n,authVersion:FI,appId:t.appId,sdkVersion:LI},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await qI(()=>fetch(r,l));if(u.ok){const h=await u.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:BI(h.authToken)}}else throw await zI("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gb(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb=/^[cdef][\w-]{21}$/,rf="";function Qb(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Yb(t);return Kb.test(n)?n:rf}catch{return rf}}function Yb(t){return Gb(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI=new Map;function GI(t,e){const n=Pc(t);KI(n,e),Jb(n,e)}function KI(t,e){const n=HI.get(t);if(n)for(const r of n)r(e)}function Jb(t,e){const n=Xb();n&&n.postMessage({key:t,fid:e}),Zb()}let wi=null;function Xb(){return!wi&&"BroadcastChannel"in self&&(wi=new BroadcastChannel("[Firebase] FID Change"),wi.onmessage=t=>{KI(t.data.key,t.data.fid)}),wi}function Zb(){HI.size===0&&wi&&(wi.close(),wi=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eD="firebase-installations-database",tD=1,Oi="firebase-installations-store";let bh=null;function Zp(){return bh||(bh=hE(eD,tD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Oi)}}})),bh}async function qu(t,e){const n=Pc(t),i=(await Zp()).transaction(Oi,"readwrite"),s=i.objectStore(Oi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&GI(t,e.fid),e}async function QI(t){const e=Pc(t),r=(await Zp()).transaction(Oi,"readwrite");await r.objectStore(Oi).delete(e),await r.done}async function Nc(t,e){const n=Pc(t),i=(await Zp()).transaction(Oi,"readwrite"),s=i.objectStore(Oi),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&GI(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function em(t){let e;const n=await Nc(t.appConfig,r=>{const i=nD(r),s=rD(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===rf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function nD(t){const e=t||{fid:Qb(),registrationStatus:0};return YI(e)}function rD(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Di.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=iD(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:sD(t)}:{installationEntry:e}}async function iD(t,e){try{const n=await Hb(t,e);return qu(t.appConfig,n)}catch(n){throw jI(n)&&n.customData.serverCode===409?await QI(t.appConfig):await qu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function sD(t){let e=await N_(t.appConfig);for(;e.registrationStatus===1;)await WI(100),e=await N_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await em(t);return r||n}return e}function N_(t){return Nc(t,e=>{if(!e)throw Di.create("installation-not-found");return YI(e)})}function YI(t){return oD(t)?{fid:t.fid,registrationStatus:0}:t}function oD(t){return t.registrationStatus===1&&t.registrationTime+MI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aD({appConfig:t,heartbeatServiceProvider:e},n){const r=lD(t,n),i=$b(t,n),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={installation:{sdkVersion:LI,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await qI(()=>fetch(r,l));if(u.ok){const h=await u.json();return BI(h)}else throw await zI("Generate Auth Token",u)}function lD(t,{fid:e}){return`${UI(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tm(t,e=!1){let n;const r=await Nc(t.appConfig,s=>{if(!JI(s))throw Di.create("not-registered");const o=s.authToken;if(!e&&hD(o))return s;if(o.requestStatus===1)return n=uD(t,e),s;{if(!navigator.onLine)throw Di.create("app-offline");const l=fD(s);return n=cD(t,l),l}});return n?await n:r.authToken}async function uD(t,e){let n=await x_(t.appConfig);for(;n.authToken.requestStatus===1;)await WI(100),n=await x_(t.appConfig);const r=n.authToken;return r.requestStatus===0?tm(t,e):r}function x_(t){return Nc(t,e=>{if(!JI(e))throw Di.create("not-registered");const n=e.authToken;return pD(n)?{...e,authToken:{requestStatus:0}}:e})}async function cD(t,e){try{const n=await aD(t,e),r={...e,authToken:n};return await qu(t.appConfig,r),n}catch(n){if(jI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await QI(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await qu(t.appConfig,r)}throw n}}function JI(t){return t!==void 0&&t.registrationStatus===2}function hD(t){return t.requestStatus===2&&!dD(t)}function dD(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+jb}function fD(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function pD(t){return t.requestStatus===1&&t.requestTime+MI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mD(t){const e=t,{installationEntry:n,registrationPromise:r}=await em(e);return r?r.catch(console.error):tm(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gD(t,e=!1){const n=t;return await yD(n),(await tm(n,e)).token}async function yD(t){const{registrationPromise:e}=await em(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _D(t){if(!t||!t.options)throw Dh("App Configuration");if(!t.name)throw Dh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Dh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Dh(t){return Di.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI="installations",vD="installations-internal",wD=t=>{const e=t.getProvider("app").getImmediate(),n=_D(e),r=Zr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},ED=t=>{const e=t.getProvider("app").getImmediate(),n=Zr(e,XI).getImmediate();return{getId:()=>mD(n),getToken:i=>gD(n,i)}};function TD(){gn(new nn(XI,wD,"PUBLIC")),gn(new nn(vD,ED,"PRIVATE"))}TD();Dt(VI,Xp);Dt(VI,Xp,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu="analytics",ID="firebase_id",SD="origin",kD=60*1e3,AD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",nm="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=new cc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},zt=new Li("analytics","Analytics",CD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RD(t){if(!t.startsWith(nm)){const e=zt.create("invalid-gtag-resource",{gtagURL:t});return vt.warn(e.message),""}return t}function ZI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function PD(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function ND(t,e){const n=PD("firebase-js-sdk-policy",{createScriptURL:RD}),r=document.createElement("script"),i=`${nm}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function xD(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function bD(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await ZI(n)).find(h=>h.measurementId===i);u&&await e[u.appId]}}catch(l){vt.error(l)}t("config",i,s)}async function DD(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await ZI(n);for(const u of o){const h=l.find(p=>p.measurementId===u),f=h&&e[h.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){vt.error(s)}}function OD(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await DD(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await bD(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,h]=o;t("get",l,u,h)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){vt.error(l)}}return i}function VD(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=OD(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function MD(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(nm)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD=30,FD=1e3;class jD{constructor(e={},n=FD){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const e0=new jD;function UD(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function BD(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:UD(n)},i=AD.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let l="";try{const u=await s.json();(o=u.error)!=null&&o.message&&(l=u.error.message)}catch{}throw zt.create("config-fetch-failed",{httpStatus:s.status,responseMessage:l})}return s.json()}async function zD(t,e=e0,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw zt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw zt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new WD;return setTimeout(async()=>{l.abort()},kD),t0({appId:r,apiKey:i,measurementId:s},o,l,e)}async function t0(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=e0){var l;const{appId:s,measurementId:o}=t;try{await $D(r,e)}catch(u){if(o)return vt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:o};throw u}try{const u=await BD(t);return i.deleteThrottleMetadata(s),u}catch(u){const h=u;if(!qD(h)){if(i.deleteThrottleMetadata(s),o)return vt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:s,measurementId:o};throw u}const f=Number((l=h==null?void 0:h.customData)==null?void 0:l.httpStatus)===503?Jg(n,i.intervalMillis,LD):Jg(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,p),vt.debug(`Calling attemptFetch again in ${f} millis`),t0(t,p,r,i)}}function $D(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(zt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function qD(t){if(!(t instanceof Ht)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class WD{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function HD(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o={...r,send_to:s};t("event",n,o)}}async function GD(t,e,n,r){if(r&&r.global){const i={};for(const s of Object.keys(n))i[`user_properties.${s}`]=n[s];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KD(){if(aE())try{await lE()}catch(t){return vt.warn(zt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return vt.warn(zt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function QD(t,e,n,r,i,s,o){const l=zD(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&vt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>vt.error(m)),e.push(l);const u=KD().then(m=>{if(m)return r.getId()}),[h,f]=await Promise.all([l,u]);MD(s)||ND(s,h.measurementId),i("js",new Date);const p=(o==null?void 0:o.config)??{};return p[SD]="firebase",p.update=!0,f!=null&&(p[ID]=f),i("config",h.measurementId,p),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(e){this.app=e}_delete(){return delete ks[this.app.options.appId],Promise.resolve()}}let ks={},b_=[];const D_={};let Oh="dataLayer",JD="gtag",O_,rm,V_=!1;function XD(){const t=[];if(oE()&&t.push("This is a browser extension environment."),mA()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=zt.create("invalid-analytics-context",{errorInfo:e});vt.warn(n.message)}}function ZD(t,e,n){XD();const r=t.options.appId;if(!r)throw zt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)vt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw zt.create("no-api-key");if(ks[r]!=null)throw zt.create("already-exists",{id:r});if(!V_){xD(Oh);const{wrappedGtag:s,gtagCore:o}=VD(ks,b_,D_,Oh,JD);rm=s,O_=o,V_=!0}return ks[r]=QD(t,b_,D_,e,O_,Oh,n),new YD(t)}function e2(t=hc()){t=Ne(t);const e=Zr(t,Wu);return e.isInitialized()?e.getImmediate():t2(t)}function t2(t,e={}){const n=Zr(t,Wu);if(n.isInitialized()){const i=n.getImmediate();if(zr(e,n.getOptions()))return i;throw zt.create("already-initialized")}return n.initialize({options:e})}function n2(t,e,n){t=Ne(t),GD(rm,ks[t.app.options.appId],e,n).catch(r=>vt.error(r))}function r2(t,e,n,r){t=Ne(t),HD(rm,ks[t.app.options.appId],e,n,r).catch(i=>vt.error(i))}const M_="@firebase/analytics",L_="0.10.19";function i2(){gn(new nn(Wu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return ZD(r,i,n)},"PUBLIC")),gn(new nn("analytics-internal",t,"PRIVATE")),Dt(M_,L_),Dt(M_,L_,"esm2020");function t(e){try{const n=e.getProvider(Wu).getImmediate();return{logEvent:(r,i,s)=>r2(n,r,i,s),setUserProperties:(r,i)=>n2(n,r,i)}}catch(n){throw zt.create("interop-component-reg-failed",{reason:n})}}}i2();const s2={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1};function di(t,e){const n=s2[t];return typeof n=="string"&&n.trim().length>0?n:e}const n0={apiKey:di("VITE_FIREBASE_API_KEY","AIzaSyCqoHQUF_ppKBZb9OIwW6JKSuDMUIBZd9M"),authDomain:di("VITE_FIREBASE_AUTH_DOMAIN","gambling-cookie.firebaseapp.com"),projectId:di("VITE_FIREBASE_PROJECT_ID","gambling-cookie"),storageBucket:di("VITE_FIREBASE_STORAGE_BUCKET","gambling-cookie.appspot.com"),messagingSenderId:di("VITE_FIREBASE_MESSAGING_SENDER_ID","486423415900"),appId:di("VITE_FIREBASE_APP_ID","1:486423415900:web:20f06ba7c0da55b9136a99"),measurementId:di("VITE_FIREBASE_MEASUREMENT_ID","G-LDV5RQZNJZ")};["apiKey","authDomain","projectId","appId"].forEach(t=>{n0[t]||console.warn(`⚠️ Clé Firebase manquante : ${t}`)});const xc=dE(n0);typeof window<"u"&&e2(xc);const Vo=NP(xc),To=pb(xc),o2=Vb(xc),sf="imtmortels_session_id";function a2(){if(typeof crypto<"u"&&typeof crypto.randomUUID=="function")return crypto.randomUUID();const t=Math.random().toString(36).slice(2);return`${Date.now().toString(36)}-${t}`}function F_(){if(typeof window>"u")return null;let t=window.localStorage.getItem(sf);return t||(t=a2(),window.localStorage.setItem(sf,t)),t}function Io(){return typeof window>"u"?null:window.localStorage.getItem(sf)}async function So(t){try{await Lb(o2,"logGameplay")(t)}catch{}}const l2="imtmortels-cookie-clicker-v6",u2="imtmortels_cookie_save",j_="imtmortels_last_synced_best",of=1e15,Yi=100,r0=t=>`${l2}_${t}`,i0=t=>`${u2}_${t}`,ka=[{id:"cursor",name:"Curseur automatique",description:"Clique tout seul doucement pour toi.",baseCost:15,cps:.1,clickBonus:0,unlockAt:0,emoji:"🖱️"},{id:"grandma",name:"Mamie pâtissière",description:"Une mamie prépare des cookies à la chaîne.",baseCost:100,cps:1,clickBonus:0,unlockAt:50,emoji:"👵"},{id:"bakery",name:"Boulangerie",description:"Ta propre boulangerie de quartier.",baseCost:1100,cps:8,clickBonus:0,unlockAt:500,emoji:"🏪"},{id:"cookie-farm",name:"Ferme à cookies",description:"Des champs entiers dédiés aux cookies.",baseCost:2e4,cps:60,clickBonus:0,unlockAt:5e3,emoji:"🌾"},{id:"factory",name:"Usine à cookies",description:"Industrialise totalement la production.",baseCost:3e5,cps:400,clickBonus:0,unlockAt:5e4,emoji:"🏭"},{id:"bank",name:"Banque à cookies",description:"Les intérêts composés… en cookies.",baseCost:3e6,cps:3e3,clickBonus:0,unlockAt:3e5,emoji:"🏦"},{id:"cookie-mine",name:"Mine de cookies lunaires",description:"Exploite des cookies directement sur la lune.",baseCost:4e7,cps:7e4,clickBonus:0,unlockAt:3e6,emoji:"🌙"},{id:"sky-fortress",name:"Forteresse céleste",description:"Une ville flottante dédiée aux cookies.",baseCost:3e8,cps:8e5,clickBonus:0,unlockAt:2e7,emoji:"🏰"},{id:"portal",name:"Portail dimensionnel",description:"Ouvre un portail vers le monde des cookies.",baseCost:15e8,cps:5e6,clickBonus:0,unlockAt:2e8,emoji:"🌀"},{id:"time-machine",name:"Machine à remonter le temps",description:"Produisait déjà des cookies hier.",baseCost:15e9,cps:55e6,clickBonus:0,unlockAt:2e9,emoji:"⌛"},{id:"golden-hand",name:"Doigt en or",description:"Chaque clic vaut davantage.",baseCost:300,cps:0,clickBonus:1,unlockAt:150,emoji:"☝️"},{id:"silk-touch",name:"Toucher de soie",description:"+1 cookie par clic. Simple et efficace.",baseCost:500,cps:0,clickBonus:1,unlockAt:300,emoji:"🧤"},{id:"gold-glove",name:"Gant doré",description:"+5 cookies par clic.",baseCost:5e3,cps:0,clickBonus:5,unlockAt:2e3,emoji:"🥊"},{id:"quantum-finger",name:"Doigt quantique",description:"Ton clic vaut aussi 1% de ton CPS.",baseCost:5e4,cps:0,clickBonus:0,unlockAt:25e3,emoji:"🧬",clickPercentOfCps:.01},{id:"crit-click",name:"Clic critique",description:"5% de chance par niveau de faire un clic x5.",baseCost:8e4,cps:0,clickBonus:0,unlockAt:4e4,emoji:"💥",critChanceBonus:.05,critMultiplier:5},{id:"click-frenzy",name:"Frénésie de clic",description:"Active un buff temporaire de clic surpuissant.",baseCost:15e4,cps:0,clickBonus:0,unlockAt:75e3,emoji:"⚡",frenzyDurationSeconds:25,frenzyClickMultiplier:6},{id:"visual-confetti",name:"Confettis festifs",description:"Confettis sur les gros gains (cosmétique).",baseCost:6e4,cps:0,clickBonus:0,unlockAt:2e4,emoji:"🎊"},{id:"visual-neon",name:"Néons du casino",description:"Glow néon sur les cartes du casino (cosmétique).",baseCost:15e4,cps:0,clickBonus:0,unlockAt:4e4,emoji:"💡"},{id:"visual-rainbow",name:"Cookie arc-en-ciel",description:"Le cookie et la roue deviennent arc-en-ciel.",baseCost:45e4,cps:0,clickBonus:0,unlockAt:15e4,emoji:"🌈"}],c2=[{id:"auto",label:"Production automatique",description:"Génère des cookies en continu."},{id:"click",label:"Clic manuel",description:"Rend chaque clic plus puissant."},{id:"cosmetic",label:"Cosmétiques",description:"Uniquement visuel, pour styliser ton cookie."}],Jo={auto:[],click:[],cosmetic:[]};for(const t of ka)t.cps>0?Jo.auto.push(t):t.clickBonus>0||t.clickPercentOfCps?Jo.click.push(t):Jo.cosmetic.push(t);const h2=[{id:"basic",name:"Boîte surprise",description:"Petit loot sympa, parfait pour commencer.",cost:1e3,emoji:"📦",minMultiplier:.9,maxMultiplier:2.2,jackpotMultiplier:10,jackpotChance:.03,failMultiplier:.25},{id:"rare",name:"Caisse rare",description:"Récompenses plus grosses, mais plus risquées.",cost:7500,emoji:"🧰",minMultiplier:.8,maxMultiplier:3,jackpotMultiplier:16,jackpotChance:.05,failMultiplier:.22},{id:"legendary",name:"Coffre légendaire",description:"Pour les vrais parieurs : gros risques, gros gains.",cost:5e4,emoji:"🗝️",minMultiplier:.7,maxMultiplier:3.8,jackpotMultiplier:24,jackpotChance:.06,failMultiplier:.2}],d2=[{id:"lose-all",label:"Tout perdu",description:"Tu perds ta mise entière.",weight:32,kind:"cookies",cookiesMultiplier:0},{id:"lose-half",label:"-50 %",description:"Tu ne récupères que la moitié de ta mise.",weight:18,kind:"cookies",cookiesMultiplier:.5},{id:"refund",label:"Remboursé",description:"Tu récupères ta mise.",weight:20,kind:"cookies",cookiesMultiplier:1},{id:"small-win",label:"+50 %",description:"Petit bénéfice sur ta mise.",weight:14,kind:"cookies",cookiesMultiplier:1.5},{id:"double",label:"x2",description:"Tu doubles ta mise.",weight:8,kind:"cookies",cookiesMultiplier:2},{id:"jackpot",label:"Jackpot",description:"Énorme pluie de cookies !",weight:2,kind:"cookies",cookiesMultiplier:6},{id:"rush-cps",label:"Rush de production",description:"CPS x2 pendant 30 secondes.",weight:5,kind:"buff",cookiesMultiplier:1,buffCpsMultiplier:2,buffClickMultiplier:1,buffDurationSeconds:30},{id:"rush-click",label:"Doigt en feu",description:"Cookies par clic x3 pendant 20 secondes.",weight:5,kind:"buff",cookiesMultiplier:1,buffCpsMultiplier:1,buffClickMultiplier:3,buffDurationSeconds:20}],Vh=[{id:"first-cookie",label:"Premier cookie !",description:"Clique sur le cookie pour la première fois.",check:t=>t.totalCookies>=1},{id:"hundred-cookies",label:"Petit gourmand",description:"Atteins 100 cookies au total.",check:t=>t.totalCookies>=100},{id:"thousand-cookies",label:"Gros gourmand",description:"Atteins 1 000 cookies au total.",check:t=>t.totalCookies>=1e3},{id:"ten-k-cookies",label:"Maître pâtissier",description:"Atteins 10 000 cookies au total.",check:t=>t.totalCookies>=1e4},{id:"million-cookies",label:"Millionnaire en cookies",description:"Atteins 1 000 000 cookies au total.",check:t=>t.totalCookies>=1e6},{id:"billion-cookies",label:"Multi-milliardaire",description:"Atteins 1 000 000 000 cookies au total.",check:t=>t.totalCookies>=1e9},{id:"click-100",label:"Tapoteur",description:"Clique 100 fois sur le cookie.",check:t=>(t.totalClicks??0)>=100},{id:"click-1k",label:"Mitraillette à clics",description:"Clique 1 000 fois sur le cookie.",check:t=>(t.totalClicks??0)>=1e3},{id:"click-100k",label:"Doigt bionique",description:"Clique 100 000 fois sur le cookie.",check:t=>(t.totalClicks??0)>=1e5},{id:"first-upgrade",label:"Premier investissement",description:"Achète une amélioration.",check:t=>Object.values(t.upgrades).some(e=>e>0)},{id:"upgrade-collector",label:"Collectionneur",description:"Achète au moins 10 améliorations.",check:t=>Object.values(t.upgrades).reduce((e,n)=>e+(n||0),0)>=10},{id:"upgrade-tycoon",label:"Tycoon des upgrades",description:"Achète au moins 50 améliorations.",check:t=>Object.values(t.upgrades).reduce((e,n)=>e+(n||0),0)>=50},{id:"upgrade-mogul",label:"Mogul du clic",description:"Achète au moins 10 upgrades de clic manuel.",check:t=>["golden-hand","silk-touch","gold-glove","quantum-finger","crit-click","click-frenzy"].reduce((r,i)=>r+(t.upgrades[i]??0),0)>=10},{id:"ten-cps",label:"Production automatique",description:"Atteins 10 cookies par seconde.",check:(t,e)=>e>=10},{id:"hundred-cps",label:"Usine en marche",description:"Atteins 100 cookies par seconde.",check:(t,e)=>e>=100},{id:"thousand-cps",label:"Dimension industrielle",description:"Atteins 1 000 cookies par seconde.",check:(t,e)=>e>=1e3},{id:"first-spin",label:"Parieur en herbe",description:"Joue une fois à la roue de la chance.",check:t=>t.gamblingStats.spinsPlayed>=1},{id:"spin-10",label:"Tournant sérieux",description:"Joue 10 fois à la roue.",check:t=>t.gamblingStats.spinsPlayed>=10},{id:"spin-50",label:"Fan de la roue",description:"Joue 50 fois à la roue.",check:t=>t.gamblingStats.spinsPlayed>=50},{id:"first-case",label:"Ouvre-boîte",description:"Ouvre ta toute première caisse.",check:t=>t.gamblingStats.casesOpened>=1},{id:"case-addict",label:"Accro aux lootboxes",description:"Ouvre 10 caisses.",check:t=>t.gamblingStats.casesOpened>=10},{id:"case-50",label:"Ouverture compulsive",description:"Ouvre 50 caisses.",check:t=>t.gamblingStats.casesOpened>=50},{id:"high-roller",label:"Gros coup",description:"Gagne au moins 50 000 cookies en un seul coup de chance.",check:t=>t.gamblingStats.biggestWin>=5e4},{id:"all-in",label:"All-in courageux",description:"Tente au moins un all-in.",check:t=>t.gamblingStats.allInCount>=1},{id:"all-in-lost",label:"All-in suicidaire",description:"Perdre au moins un all-in.",check:t=>t.gamblingStats.allInLosses>=1},{id:"loss-streak-5",label:"Série noire",description:"Perds 5 coups de casino d’affilée.",check:t=>t.gamblingStats.maxConsecutiveLosses>=5},{id:"loss-streak-10",label:"Malédiction du casino",description:"Perds 10 coups de casino d’affilée.",check:t=>t.gamblingStats.maxConsecutiveLosses>=10},{id:"jackpot-streak-2",label:"Double jackpot",description:"Réalise 2 jackpots casino consécutifs.",check:t=>t.gamblingStats.maxJackpotStreak>=2},{id:"patience",label:"Patience infinie",description:"Atteins 1 000 000 de cookies sans jamais aller au casino.",check:t=>t.totalCookies>=1e6&&t.gamblingStats.spinsPlayed===0&&t.gamblingStats.casesOpened===0&&t.gamblingStats.highRollPlays===0},{id:"challenge-clean",label:"Casino maîtrisé",description:"Gagne au moins 100 000 cookies au total en casino sans ruiner ton stock (jamais moins de 0).",check:t=>t.gamblingStats.biggestWin>=1e5&&t.cookies>0},{id:"total-ruin",label:"Ruine totale",description:"Perds tout au casino après avoir gagné au moins 50 000 cookies.",check:t=>t.cookies<=0&&t.gamblingStats.biggestWin>=5e4}],$n="Invité",Ir=t=>(t??"").trim().slice(0,16)||$n,An={cookies:0,totalCookies:0,upgrades:{cursor:0,grandma:0,bakery:0,factory:0,portal:0,"golden-hand":0,"time-machine":0,"cookie-farm":0,bank:0,"cookie-mine":0,"sky-fortress":0,"visual-confetti":0,"visual-neon":0,"visual-rainbow":0,"silk-touch":0,"gold-glove":0,"quantum-finger":0,"crit-click":0,"click-frenzy":0},theme:"dark",activeBuffs:[],gamblingStats:{casesOpened:0,spinsPlayed:0,biggestWin:0,highRollPlays:0,allInCount:0,consecutiveLosses:0,maxConsecutiveLosses:0,allInLosses:0,jackpotStreak:0,maxJackpotStreak:0},playerName:$n,leaderboard:[],totalClicks:0,totalUpgradesPurchased:0};function De(t,e=1){if(!Number.isFinite(t))return"0";if(Math.abs(t)<1e3)return(Math.abs(t)<10?t.toFixed(e):t.toFixed(0)).replace(".",",");const n=["","k","M","Md","T"];let r=0,i=t;for(;Math.abs(i)>=1e3&&r<n.length-1;)i/=1e3,r+=1;return`${i.toFixed(e).replace(".",",")} ${n[r]}`}function f2(t){const e=t.reduce((i,s)=>i+s.weight,0),n=Math.random()*e;let r=0;for(const i of t)if(r+=i.weight,n<=r)return i;return t[t.length-1]}function s0(t){return ka.reduce((e,n)=>{const r=t.upgrades[n.id]??0;return e+n.cps*r},0)}function af(t){const e=s0(t);if(t.activeBuffs.length===0)return e;const n=t.activeBuffs.reduce((r,i)=>r*(i.multiplierCps||1),1);return e*n}function U_(t){const e=1+ka.reduce((s,o)=>{const l=t.upgrades[o.id]??0;return s+o.clickBonus*l},0),n=af(t),r=ka.reduce((s,o)=>{const l=t.upgrades[o.id]??0;return o.clickPercentOfCps?s+o.clickPercentOfCps*l:s},0);let i=e+n*r;if(t.activeBuffs.length>0){const s=t.activeBuffs.reduce((o,l)=>o*(l.multiplierClick||1),1);i*=s}return i}function p2(t){if(typeof document>"u")return null;const e=document.cookie.split("; ").find(n=>n.startsWith(`${t}=`));return e?decodeURIComponent(e.split("=")[1]):null}function Hu(t){const e=t,n=Object.entries(e.upgrades??{}).reduce((o,[l,u])=>{if(!Number.isFinite(u))return o;const h=Math.max(0,Math.floor(u));return o[l]=h,o},{...An.upgrades}),r=(o,l=of)=>Math.min(l,Math.max(0,Number.isFinite(o)?o:0)),i={...An,...e,cookies:r(e.cookies??An.cookies),totalCookies:r(e.totalCookies??An.totalCookies),upgrades:n,activeBuffs:(e.activeBuffs??[]).filter(o=>o.expiresAt>Date.now()&&o.expiresAt<Date.now()+864e5),gamblingStats:{...An.gamblingStats,...e.gamblingStats??{}},playerName:Ir((e.playerName??"").slice(0,16)),leaderboard:(e.leaderboard??[]).slice(0,50),totalClicks:r(e.totalClicks??0,1e9),totalUpgradesPurchased:r(e.totalUpgradesPurchased??0,1e9)},s=t.lastSaved;if(typeof s=="number"){const o=Math.min(86400,Math.max(0,(Date.now()-s)/1e3)),l=s0(i),u=Math.max(0,Math.min(of,l*o));return{...i,cookies:r(i.cookies+u),totalCookies:r(i.totalCookies+u),activeBuffs:i.activeBuffs.filter(h=>h.expiresAt>Date.now())}}return i}function m2(t){if(typeof window>"u"||!t)return{...An};const e=r0(t),n=i0(t);try{const r=window.localStorage.getItem(e);if(r){const i=JSON.parse(r);return Hu(i)}}catch(r){console.error("Erreur de chargement depuis localStorage :",r)}try{const r=p2(n);if(r){const i=JSON.parse(r);return Hu(i)}}catch(r){console.error("Erreur de chargement depuis cookie :",r)}return{...An}}function g2(t,e){if(typeof window>"u"||!e)return;const r={...{...t,playerName:Ir(t.playerName)},lastSaved:Date.now()},i=r0(e),s=i0(e);try{localStorage.setItem(i,JSON.stringify(r))}catch(o){console.error("Erreur de sauvegarde localStorage :",o)}try{typeof document<"u"&&(document.cookie=`${s}=${encodeURIComponent(JSON.stringify(r))};path=/;max-age=31536000`)}catch(o){console.error("Erreur de sauvegarde cookie :",o)}}async function y2(t,e,n){if(!t)return;const r=Ir((e||$n).trim().slice(0,16)),i=Math.max(0,Math.round(n));if(i&&!(!Number.isFinite(i)||i>of))try{await GP(FT(Vo,"leaderboard"),{name:r,userId:t.uid,score:i,createdAt:JT()})}catch(s){console.error("Erreur envoi leaderboard :",s)}}function Mh(t,e,n){return Math.min(n,Math.max(e,t))}function Lh(t){const e=Date.now();return t.filter(n=>n.expiresAt>e)}function _2(){const[t,e]=ne.useState(null),[n,r]=ne.useState(""),[i,s]=ne.useState(""),[o,l]=ne.useState(""),[u,h]=ne.useState(""),[f,p]=ne.useState({...An}),[m,A]=ne.useState([]),[x,D]=ne.useState(()=>{if(typeof window>"u")return 0;const N=window.localStorage.getItem(j_),j=N?Number(N):0;return Number.isFinite(j)&&j>0?j:0}),[L,S]=ne.useState(!1),[w,C]=ne.useState(!1),[O,B]=ne.useState(null),[U,_]=ne.useState(null),[y,E]=ne.useState(null),[I,k]=ne.useState(null),[R,T]=ne.useState(500),[se,mt]=ne.useState(null),[ni,ri]=ne.useState("💾 Connecte-toi pour sauvegarder."),[q,ee]=ne.useState("auto"),[Y,ye]=ne.useState("upgrades"),[_e,Ot]=ne.useState(Ir(f.playerName)),[Tt,Vt]=ne.useState(!1),[Mt,rn]=ne.useState(!1),Xs=!!t,ii=ne.useCallback(()=>t?!0:(ri("💾 Connecte-toi pour sauvegarder."),l("Connexion requise pour sauvegarder dans le cloud et apparaître au classement."),Vt(!0),!1),[t]),Zs=N=>N instanceof Ht&&N.code==="auth/configuration-not-found"?"Configuration Firebase introuvable. Vérifie les identifiants Firebase dans les variables d’environnement.":(N==null?void 0:N.message)??"Erreur de connexion.";ne.useEffect(()=>{F_()},[]);const bc=async N=>{N==null||N.preventDefault(),l("");try{const j=await JN(To,n.trim(),i),K=Ir(_e);await y_(j.user,{displayName:K}),l("Compte créé et connecté.")}catch(j){l(Zs(j))}},Ba=async N=>{N==null||N.preventDefault(),l("");try{await XN(To,n.trim(),i),l("Connexion réussie.")}catch(j){l(Zs(j))}},eo=async()=>{if(!n.trim()){l("Saisis ton email pour réinitialiser.");return}try{await YN(To,n.trim()),l("Email de réinitialisation envoyé.")}catch(N){l(Zs(N))}},za=async()=>{await rx(To),l("Déconnecté.")},zi=ne.useCallback(async(N=!1)=>{if(!(!ii()||!t))try{await HP(Hl(Vo,"cloudSaves",t.uid),{userId:t.uid,updatedAt:JT(),state:f}),N||h("Sauvegarde cloud effectuée.")}catch(j){N||h((j==null?void 0:j.message)??"Erreur lors de la sauvegarde cloud.")}},[t,ii,f]),to=ne.useCallback(async()=>{if(!ii()||!t)return;const N=await o_(Hl(Vo,"cloudSaves",t.uid));if(!N.exists()){h("Aucune sauvegarde cloud disponible.");return}const j=N.data(),K=j!=null&&j.state?Hu(j.state):null;K&&(p(K),h("Sauvegarde cloud chargée."))},[t,ii]);ne.useEffect(()=>{const N=nx(To,async j=>{if(e(j),!j){p({...An}),h("💾 Connecte-toi pour sauvegarder.");return}const K=m2(j.uid),$=await o_(Hl(Vo,"cloudSaves",j.uid));let J={...K};if($.exists()){const ae=$.data(),me=ae!=null&&ae.state?Hu(ae.state):null;me&&me.totalCookies>K.totalCookies&&(window.confirm("Une sauvegarde cloud plus récente existe. Charger le cloud ?")?(J=me,h("Sauvegarde cloud chargée.")):h("Cloud ignoré, cache local conservé."))}const fe=Ir(j.displayName??J.playerName);p({...J,playerName:fe}),Ot(fe??$n),r(""),s(""),l("Connecté.")});return()=>N()},[]),ne.useEffect(()=>{t&&Vt(!1)},[t]);const si=ne.useMemo(()=>af(f),[f]),$a=ne.useMemo(()=>U_(f),[f]),Ke=f.upgrades["visual-confetti"]>0,Fe=f.upgrades["visual-neon"]>0,$i=f.upgrades["visual-rainbow"]>0,Dc=["app",`app--${f.theme}`,Ke?"app--confetti":"",Fe?"app--neon":"",$i?"app--rainbow":""].filter(Boolean).join(" "),It=ne.useMemo(()=>m.slice(0,3),[m]),qa=ne.useMemo(()=>m.slice(3),[m]);ne.useEffect(()=>{const N=window.setInterval(()=>{p(j=>{const K=Lh(j.activeBuffs),$=K===j.activeBuffs?j:{...j,activeBuffs:K},J=af($);if(J<=0)return $;const ae=J*.2;return{...$,cookies:$.cookies+ae,totalCookies:$.totalCookies+ae}})},200);return()=>window.clearInterval(N)},[]),ne.useEffect(()=>{g2(f,(t==null?void 0:t.uid)??null)},[f,t==null?void 0:t.uid]),ne.useEffect(()=>{if(!t)return;const N=window.setInterval(()=>{zi(!0)},18e4),j=()=>{zi(!0)};return window.addEventListener("beforeunload",j),()=>{window.clearInterval(N),window.removeEventListener("beforeunload",j)}},[t,zi]),ne.useEffect(()=>{typeof document>"u"||(document.documentElement.dataset.theme=f.theme)},[f.theme]),ne.useEffect(()=>{Ot(Ir(f.playerName))},[f.playerName]),ne.useEffect(()=>{const N=f.gamblingStats.biggestWin;if(!t||N<=0||N===x)return;const j=Math.max(1e6,f.totalCookies*10);if(!(!Number.isFinite(N)||N>j)){if(D(N),typeof window<"u")try{window.localStorage.setItem(j_,String(N))}catch{}y2(t,f.playerName,N)}},[t,f.gamblingStats.biggestWin,f.playerName,f.totalCookies,x]),ne.useEffect(()=>{const N=FT(Vo,"leaderboard"),j=BP(N,zP("score","desc"),$P(20)),K=KP(j,$=>{const J=$.docs.map(fe=>{var me;const ae=fe.data();return{id:fe.id,name:ae.name??"???",score:ae.score??0,createdAt:(me=ae.createdAt)!=null&&me.toDate?ae.createdAt.toDate():void 0}});A(J)});return()=>K()},[]);const oi=()=>{const N=f.cookies;p(j=>{let $=U_(j);const J=j.upgrades["crit-click"]??0;if(J>0){const fe=ka.find(gt=>gt.id==="crit-click"),ae=(fe==null?void 0:fe.critChanceBonus)??.05,me=(fe==null?void 0:fe.critMultiplier)??5,ot=Mh(ae*J,0,.5);Math.random()<ot&&($*=me)}return{...j,cookies:j.cookies+$,totalCookies:j.totalCookies+$,totalClicks:(j.totalClicks??0)+1}}),S(!0),window.setTimeout(()=>S(!1),120),So({type:"click",ts:Date.now(),userId:(t==null?void 0:t.uid)??null,sessionId:Io(),playerName:f.playerName??null,payload:{cookiesBefore:N}})},Wa=ne.useCallback((N,j)=>{if(N.id!=="click-frenzy"||!N.frenzyDurationSeconds||!N.frenzyClickMultiplier)return j;const K=Date.now(),$={id:`frenzy-${K}`,label:"Frénésie de clic",multiplierCps:1,multiplierClick:N.frenzyClickMultiplier,expiresAt:K+N.frenzyDurationSeconds*1e3},J=Lh(j.activeBuffs);return{...j,activeBuffs:[...J,$]}},[]),Ha=N=>{let j=!1,K=0,$=0;p(J=>{if(J.totalCookies<N.unlockAt)return J;const fe=J.upgrades[N.id]??0,ae=N.baseCost*Math.pow(1.17,fe);if(J.cookies<ae)return J;let me={...J,cookies:J.cookies-ae,upgrades:{...J.upgrades,[N.id]:fe+1},totalUpgradesPurchased:J.totalUpgradesPurchased+1};return me=Wa(N,me),j=!0,K=fe+1,$=ae,me}),j&&So({type:"upgrade_purchase",ts:Date.now(),userId:(t==null?void 0:t.uid)??null,sessionId:Io(),playerName:f.playerName??null,payload:{upgradeId:N.id,newQty:K,cost:$}})},no=()=>{window.confirm("Réinitialiser complètement ta partie ? Tu perdras tous tes cookies et améliorations.")&&(p(N=>({...An,theme:N.theme,playerName:N.playerName})),_(null),E(null),k(null),mt(null),D(0))},Oc=()=>{p(N=>({...N,theme:N.theme==="dark"?"light":"dark"}))},Ga=()=>{const N=Ir(_e);p(j=>({...j,playerName:N})),t&&y_(t,{displayName:N}),rn(!1)},Ka=Math.max(0,Math.floor(f.cookies)),Qa=()=>{if(w||Ka<Yi)return;C(!0);let N=null;const j=f2(d2);p($=>{const J=Math.floor($.cookies),fe=Mh(Math.floor(R),Yi,J);if(fe<=0||J<=0)return N=null,$;let ae=$.cookies-fe,me=Lh($.activeBuffs);ae+=fe*j.cookiesMultiplier;let ot;if(j.kind==="buff"&&j.buffDurationSeconds&&(j.buffCpsMultiplier||j.buffClickMultiplier)){const on=Date.now(),$e={id:`buff-${j.id}-${on}`,label:j.label,multiplierCps:j.buffCpsMultiplier??1,multiplierClick:j.buffClickMultiplier??1,expiresAt:on+j.buffDurationSeconds*1e3};me=[...me,$e],ot=$e.label}const gt=ae-$.cookies;let Qe=$.gamblingStats.biggestWin,St=$.leaderboard;const sn=gt>0,kt=j.id==="jackpot";let jn=sn?0:$.gamblingStats.consecutiveLosses+1;const Un=Math.max($.gamblingStats.maxConsecutiveLosses,jn),vn=kt?$.gamblingStats.jackpotStreak+1:0,Gt=Math.max($.gamblingStats.maxJackpotStreak,vn);if(gt>0){Qe=Math.max(Qe,gt);const on={id:`wheel-${Date.now()}-${Math.random().toString(36).slice(2)}`,playerName:$.playerName||$n,amount:gt,date:new Date().toISOString(),source:"wheel"};St=[...St,on].sort(($e,ar)=>ar.amount-$e.amount).slice(0,50)}return N={label:j.label,delta:gt,spent:fe,isJackpot:kt,buffLabel:ot},{...$,cookies:ae,activeBuffs:me,gamblingStats:{...$.gamblingStats,spinsPlayed:$.gamblingStats.spinsPlayed+1,biggestWin:Qe,consecutiveLosses:jn,maxConsecutiveLosses:Un,jackpotStreak:vn,maxJackpotStreak:Gt},leaderboard:St}});const K=N;K&&(_(K),mt({kind:"wheel",result:K}),So({type:"wheel_spin",ts:Date.now(),userId:(t==null?void 0:t.uid)??null,sessionId:Io(),playerName:f.playerName??null,payload:{bet:K.spent,delta:K.delta,label:K.label,isJackpot:K.isJackpot}})),window.setTimeout(()=>C(!1),900)},ai=N=>{O||f.cookies<N.cost||(B(N.id),window.setTimeout(()=>{let j=null;p($=>{if($.cookies<N.cost)return j=null,$;const J=N.cost;let fe=$.cookies-J;const ae=Math.random();let me,ot=!1,gt=!1;if(ae<N.jackpotChance)me=N.jackpotMultiplier,ot=!0;else if(ae<N.jackpotChance+.2)me=N.failMultiplier,gt=!0;else{const $e=Math.random();me=N.minMultiplier+$e*(N.maxMultiplier-N.minMultiplier)}const Qe=J*me;fe+=Qe;const St=fe-$.cookies;let sn=$.gamblingStats.biggestWin,kt=$.leaderboard,Un=St>0?0:$.gamblingStats.consecutiveLosses+1;const vn=Math.max($.gamblingStats.maxConsecutiveLosses,Un),Gt=ot?$.gamblingStats.jackpotStreak+1:0,on=Math.max($.gamblingStats.maxJackpotStreak,Gt);if(St>0){sn=Math.max(sn,St);const $e={id:`case-${Date.now()}-${Math.random().toString(36).slice(2)}`,playerName:$.playerName||$n,amount:St,date:new Date().toISOString(),source:"case"};kt=[...kt,$e].sort((ar,Hi)=>Hi.amount-ar.amount).slice(0,50)}return j={caseId:N.id,caseName:N.name,reward:Qe,spent:J,isJackpot:ot,isLoss:gt},{...$,cookies:fe,gamblingStats:{...$.gamblingStats,casesOpened:$.gamblingStats.casesOpened+1,biggestWin:sn,consecutiveLosses:Un,maxConsecutiveLosses:vn,jackpotStreak:Gt,maxJackpotStreak:on},leaderboard:kt}});const K=j;K&&(E(K),mt({kind:"case",result:K}),So({type:"case_open",ts:Date.now(),userId:(t==null?void 0:t.uid)??null,sessionId:Io(),playerName:f.playerName??null,payload:{bet:K.spent,reward:K.reward,caseId:K.caseId,isJackpot:K.isJackpot,isLoss:K.isLoss}})),B(null)},650))},qi=N=>{let j=null;p($=>{const J=Math.floor($.cookies);if(J<=0)return j=null,$;const fe=Math.max(1e3,Math.floor($.cookies*.25)),ae=N?J:Mh(fe,1e3,J);if(ae<=0)return j=null,$;const me=N?.44:.47,ot=Math.random()<me,gt=ot?$.cookies+ae:$.cookies-ae,Qe=gt-$.cookies;let St=$.gamblingStats.biggestWin,sn=$.leaderboard;const kt=ot&&Qe>0;let jn=kt?0:$.gamblingStats.consecutiveLosses+1;const Un=Math.max($.gamblingStats.maxConsecutiveLosses,jn);let vn=0;const Gt=$.gamblingStats.maxJackpotStreak;let on=$.gamblingStats.allInLosses;if(N&&!ot&&(on+=1),kt){St=Math.max(St,Qe);const $e={id:`highroll-${Date.now()}-${Math.random().toString(36).slice(2)}`,playerName:$.playerName||$n,amount:Qe,date:new Date().toISOString(),source:"highroll"};sn=[...sn,$e].sort((ar,Hi)=>Hi.amount-ar.amount).slice(0,50)}return j={bet:ae,delta:Qe,outcome:ot?"win":"lose",allIn:N},{...$,cookies:gt,gamblingStats:{...$.gamblingStats,highRollPlays:$.gamblingStats.highRollPlays+1,allInCount:$.gamblingStats.allInCount+(N?1:0),biggestWin:St,consecutiveLosses:jn,maxConsecutiveLosses:Un,jackpotStreak:vn,maxJackpotStreak:Gt,allInLosses:on},leaderboard:sn}});const K=j;K&&(k(K),mt({kind:"highroll",result:K}),So({type:"high_roll",ts:Date.now(),userId:(t==null?void 0:t.uid)??null,sessionId:Io(),playerName:f.playerName??null,payload:{bet:K.bet,delta:K.delta,allIn:K.allIn,outcome:K.outcome}}))},Wi=ne.useMemo(()=>Vh.filter(N=>N.check(f,si)),[f,si]),Fn=new Set(Wi.map(N=>N.id)),Ya=()=>mt(null);return v.jsxs("div",{className:Dc,children:[v.jsxs("header",{className:"app-header",children:[v.jsxs("div",{className:"app-header-left",children:[v.jsx("div",{className:"app-logo-circle",children:v.jsx("span",{className:"app-logo",children:"🍪"})}),v.jsxs("div",{className:"app-title",children:[v.jsx("h1",{children:"IMTMORTELS COOKIE CASINO"}),v.jsx("p",{children:"Clique, upgrade et tente ta chance au casino de cookies. Tout est virtuel, garde ça fun et sain. ✨"})]})]}),v.jsxs("div",{className:"app-actions",children:[v.jsx("button",{type:"button",className:"ghost-button auth-toggle",onClick:()=>Vt(!0),children:t?`👤 ${f.playerName||"Profil"}`:"🔐 Connexion / Inscription"}),v.jsxs("div",{className:"player-chip",children:[v.jsx("span",{className:"player-chip-label",children:"Joueur"}),v.jsx("span",{className:"player-chip-name",children:f.playerName||$n}),v.jsx("button",{type:"button",className:"player-chip-edit",onClick:()=>{Ot(f.playerName||$n),rn(!0)},children:"✏️"})]}),v.jsx("button",{type:"button",className:"ghost-button",onClick:Oc,children:f.theme==="dark"?"☀️ Mode clair":"🌙 Mode sombre"}),v.jsx("button",{type:"button",className:"ghost-button ghost-button--danger",onClick:no,children:"🔁 Reset"})]})]}),!Xs&&v.jsx("div",{className:"lock-banner",children:ni}),v.jsxs("main",{className:"app-main",children:[v.jsxs("section",{className:"top-layout",children:[v.jsx("section",{className:"top-layout-left",children:v.jsx("div",{className:"cookie-panel",children:v.jsxs("div",{className:"cookie-card",children:[v.jsx("div",{className:"cookie-aura"}),v.jsxs("div",{className:"cookie-main",children:[v.jsx("button",{type:"button",className:`cookie-button ${L?"cookie-button--pressed":""}`,onClick:oi,children:v.jsx("div",{className:"cookie-ring",children:v.jsx("div",{className:"cookie-ring-inner",children:v.jsxs("div",{className:"cookie",children:[v.jsx("div",{className:"cookie-chip cookie-chip--1"}),v.jsx("div",{className:"cookie-chip cookie-chip--2"}),v.jsx("div",{className:"cookie-chip cookie-chip--3"}),v.jsx("div",{className:"cookie-chip cookie-chip--4"}),v.jsx("div",{className:"cookie-gloss"})]})})})}),v.jsxs("div",{className:"cookie-stats",children:[v.jsxs("p",{className:"cookie-main-count",children:[De(f.cookies,1)," cookies"]}),v.jsxs("p",{className:"cookie-sub",children:[De($a,2)," par clic · ",De(si,2)," / sec"]}),v.jsxs("p",{className:"cookie-sub cookie-sub--secondary",children:["Total généré : ",De(f.totalCookies,1)," cookies"]})]}),f.activeBuffs.length>0&&v.jsx("div",{className:"buffs-bar",children:f.activeBuffs.map(N=>v.jsxs("span",{className:"buff-pill",children:[v.jsx("span",{className:"buff-pill-emoji",children:"⚡"}),v.jsx("span",{className:"buff-pill-label",children:N.label})]},N.id))})]})]})})}),v.jsx("section",{className:"top-layout-right",children:v.jsxs("section",{className:`info-panel ${Y==="leaderboard"?"info-panel--leaderboard":""}`,children:[Y!=="leaderboard"&&v.jsxs("div",{className:"info-top3",children:[v.jsx("div",{className:"info-top3-heading",children:v.jsxs("h2",{className:"info-top3-title",children:["Top 3 joueurs",v.jsx("span",{className:"info-top3-subtitle",children:" · Basé sur les meilleurs gains en un seul coup de casino."})]})}),v.jsx("ol",{className:"top3-list",children:It.length===0?v.jsx("li",{className:"top3-empty",children:"Aucun joueur global encore dans le classement. Fonce 🎰"}):It.map((N,j)=>v.jsxs("li",{className:`top3-item top3-item--${j+1}`,children:[v.jsx("span",{className:"top3-rank",children:j===0?"👑":j===1?"🥈":"🥉"}),v.jsxs("div",{className:"top3-text",children:[v.jsx("span",{className:"top3-name",children:N.name}),v.jsxs("span",{className:"top3-score",children:[De(N.score,1)," cookies"]})]})]},N.id))})]}),v.jsxs("div",{className:"info-tabs",children:[v.jsx("button",{type:"button",className:`info-tab ${Y==="upgrades"?"info-tab--active":""}`,onClick:()=>ye("upgrades"),children:"Améliorations"}),v.jsx("button",{type:"button",className:`info-tab ${Y==="achievements"?"info-tab--active":""}`,onClick:()=>ye("achievements"),children:"Succès"}),v.jsx("button",{type:"button",className:`info-tab ${Y==="leaderboard"?"info-tab--active":""}`,onClick:()=>ye("leaderboard"),children:"Classement général"})]}),v.jsxs("div",{className:`info-content ${Y==="leaderboard"?"info-content--leaderboard":""}`,children:[Y==="upgrades"&&v.jsxs("div",{className:"info-upgrades",children:[v.jsx("div",{className:"upgrade-tabs",children:c2.map(N=>v.jsxs("button",{type:"button",className:`upgrade-tab${q===N.id?" upgrade-tab--active":""}`,onClick:()=>ee(N.id),children:[v.jsx("span",{className:"upgrade-tab-label",children:N.label}),v.jsx("span",{className:"upgrade-tab-description",children:N.description})]},N.id))}),v.jsx("div",{className:"shop-list-wrapper",children:Jo[q].some(N=>f.totalCookies>=N.unlockAt)?v.jsx("div",{className:"shop-list",children:Jo[q].filter(N=>f.totalCookies>=N.unlockAt).map(N=>{const j=f.upgrades[N.id]??0,K=N.baseCost*Math.pow(1.15,j),$=f.cookies>=K;return v.jsxs("button",{type:"button",className:`shop-item${$?" shop-item--affordable":""}`,onClick:()=>Ha(N),disabled:!$,children:[v.jsxs("div",{className:"shop-item-main",children:[v.jsx("div",{className:"shop-item-icon",children:N.emoji}),v.jsxs("div",{className:"shop-item-text",children:[v.jsx("span",{className:"shop-item-name",children:N.name}),v.jsx("span",{className:"shop-item-description",children:N.description}),v.jsxs("div",{className:"shop-item-effects",children:[N.cps>0&&v.jsxs("span",{children:["+",N.cps," /s"]}),N.clickBonus>0&&v.jsxs("span",{children:["+",N.clickBonus," par clic"]}),N.cps===0&&N.clickBonus===0&&v.jsx("span",{children:"Cosmétique uniquement ✨"})]})]})]}),v.jsxs("div",{className:"shop-item-meta",children:[v.jsxs("span",{className:"shop-item-cost",children:[De(K,1)," cookies"]}),v.jsxs("span",{className:"shop-item-qty",children:["x",j]})]})]},N.id)})}):v.jsx("p",{className:"shop-empty",children:"Clique encore un peu pour débloquer des améliorations dans cette catégorie. 💡"})})]}),Y==="achievements"&&v.jsxs("div",{className:"info-achievements",children:[v.jsxs("div",{className:"info-achievements-header",children:[v.jsx("h3",{children:"Succès"}),v.jsxs("p",{className:"achievements-count",children:[Wi.length," / ",Vh.length," débloqués"]})]}),v.jsx("div",{className:"achievements-list",children:Vh.map(N=>{const j=Fn.has(N.id);return v.jsxs("div",{className:`achievement ${j?"achievement--unlocked":"achievement--locked"}`,children:[v.jsx("span",{className:"achievement-dot"}),v.jsxs("div",{className:"achievement-text",children:[v.jsx("span",{className:"achievement-label",children:N.label}),v.jsx("span",{className:"achievement-description",children:N.description})]})]},N.id)})})]}),Y==="leaderboard"&&v.jsxs("div",{className:"info-leaderboard",children:[v.jsxs("div",{className:"leaderboard-top3-block",children:[v.jsx("h3",{className:"leaderboard-title",children:"Classement global du casino"}),v.jsx("p",{className:"leaderboard-subtitle",children:"Basé sur le meilleur gain en un seul coup (roue, lootbox ou high roll)."}),v.jsxs("div",{className:"leaderboard-podium",children:[v.jsx("div",{className:"podium-column podium-column--silver",children:It[1]&&v.jsxs(v.Fragment,{children:[v.jsx("span",{className:"podium-rank",children:"🥈"}),v.jsx("span",{className:"podium-name",children:It[1].name}),v.jsx("span",{className:"podium-score",children:De(It[1].score,1)})]})}),v.jsx("div",{className:"podium-column podium-column--gold",children:It[0]&&v.jsxs(v.Fragment,{children:[v.jsx("span",{className:"podium-rank",children:"🥇"}),v.jsx("span",{className:"podium-name",children:It[0].name}),v.jsx("span",{className:"podium-score",children:De(It[0].score,1)})]})}),v.jsx("div",{className:"podium-column podium-column--bronze",children:It[2]&&v.jsxs(v.Fragment,{children:[v.jsx("span",{className:"podium-rank",children:"🥉"}),v.jsx("span",{className:"podium-name",children:It[2].name}),v.jsx("span",{className:"podium-score",children:De(It[2].score,1)})]})})]})]}),v.jsx("div",{className:"leaderboard-scroll",children:v.jsxs("div",{className:"leaderboard-block",children:[v.jsx("h4",{className:"leaderboard-block-title",children:"Suite du classement global"}),qa.length===0?v.jsx("p",{className:"leaderboard-empty",children:"Personne d'autre n'a encore percé le classement global."}):v.jsx("ul",{className:"leaderboard-list",children:qa.map((N,j)=>v.jsxs("li",{className:"leaderboard-row",children:[v.jsxs("span",{className:"leaderboard-rank",children:["#",j+4]}),v.jsx("span",{className:"leaderboard-name",children:N.name}),v.jsx("span",{className:"leaderboard-amount",children:De(N.score,1)})]},N.id))})]})})]})]})]})})]}),v.jsxs("section",{className:"casino-section",children:[v.jsx("header",{className:"casino-header",children:v.jsxs("div",{children:[v.jsx("h2",{className:"section-title",children:"Casino des cookies"}),v.jsx("p",{className:"section-subtitle",children:"Roue, lootboxes et coups de poker. L'espérance est légèrement contre toi : parie uniquement pour t'amuser."})]})}),v.jsxs("div",{className:"casino-grid",children:[v.jsxs("div",{className:`casino-card casino-card--wheel ${Fe?"casino-card--neon":""}`,children:[v.jsxs("div",{className:"casino-card-header",children:[v.jsx("h3",{children:"Roue de la chance"}),v.jsxs("p",{className:"casino-helper",children:["Mise min. ",Yi," cookies"]})]}),v.jsxs("div",{className:"wheel-controls",children:[v.jsx("input",{type:"number",className:"wheel-input",min:Yi,value:R,onChange:N=>T(Math.max(Yi,Number(N.target.value)||0))}),v.jsx("button",{type:"button",className:"primary-button",onClick:Qa,disabled:w||f.cookies<Yi,children:w?"La roue tourne...":"Spin 🎰"})]}),U&&v.jsxs("p",{className:"casino-last-result",children:["Résultat : ",U.label," · ",U.delta>=0?"+":"",De(U.delta,1)," cookies",U.buffLabel&&v.jsxs(v.Fragment,{children:[" "," · ","Buff : ",U.buffLabel]})]})]}),v.jsxs("div",{className:`casino-card casino-card--cases ${Fe?"casino-card--neon":""}`,children:[v.jsxs("div",{className:"casino-card-header",children:[v.jsx("h3",{children:"Lootboxes"}),v.jsx("p",{className:"casino-helper",children:"Des boîtes surprises plus ou moins risquées."})]}),v.jsx("div",{className:"cases-list",children:h2.map(N=>{const j=f.cookies<N.cost||O===N.id,K=O===N.id;return v.jsxs("button",{type:"button",className:`case-card ${j?"case-card--disabled":""}`,disabled:j,onClick:()=>ai(N),children:[v.jsxs("div",{className:"case-main",children:[v.jsx("span",{className:"case-emoji",children:N.emoji}),v.jsxs("div",{children:[v.jsx("div",{className:"case-name",children:N.name}),v.jsx("div",{className:"case-desc",children:N.description})]})]}),v.jsxs("div",{className:"case-meta",children:[v.jsxs("span",{children:["Coût : ",De(N.cost,0)]}),v.jsxs("span",{children:["Jack : ",N.jackpotMultiplier,"x (",Math.round(N.jackpotChance*100),"%)"]})]}),K&&v.jsx("div",{className:"case-opening",children:"Ouverture..."})]},N.id)})}),y&&v.jsxs("p",{className:"casino-last-result",children:["Dernière caisse : ",y.caseName," · ",y.isJackpot?"JACKPOT 🎉 ":y.isLoss?"Aïe... 😬 ":"",y.reward>=0?"+":"",De(y.reward,1)," cookies"]})]}),v.jsxs("div",{className:`casino-card casino-card--highroll ${Fe?"casino-card--neon":""}`,children:[v.jsxs("div",{className:"casino-card-header",children:[v.jsx("h3",{children:"Coup de poker"}),v.jsx("p",{className:"casino-helper",children:"Mise élevée ou ALL-IN. Les chances ne sont pas de ton côté. 💀"})]}),v.jsxs("div",{className:"highroll-actions",children:[v.jsx("button",{type:"button",className:"secondary-button",disabled:f.cookies<1e3,onClick:()=>qi(!1),children:"Mise forte"}),v.jsx("button",{type:"button",className:"danger-button",disabled:f.cookies<1e3,onClick:()=>qi(!0),children:"ALL-IN 💀"})]}),I&&v.jsxs("p",{className:"casino-last-result",children:[I.allIn?"ALL-IN":"Mise"," : ",De(I.bet,1)," · ",I.outcome==="win"?"Victoire 🎉":"Défaite 😬"," (",I.delta>=0?"+":"",De(I.delta,1)," cookies)"]})]})]}),v.jsxs("div",{className:"casino-stats",children:[v.jsx("h3",{children:"Stats casino"}),v.jsxs("div",{className:"casino-stats-grid",children:[v.jsxs("div",{className:"casino-stat",children:[v.jsx("span",{children:"Roue jouée"}),v.jsxs("strong",{children:[f.gamblingStats.spinsPlayed," fois"]})]}),v.jsxs("div",{className:"casino-stat",children:[v.jsx("span",{children:"Lootboxes ouvertes"}),v.jsx("strong",{children:f.gamblingStats.casesOpened})]}),v.jsxs("div",{className:"casino-stat",children:[v.jsx("span",{children:"High rolls"}),v.jsx("strong",{children:f.gamblingStats.highRollPlays})]}),v.jsxs("div",{className:"casino-stat",children:[v.jsx("span",{children:"All-in tentés"}),v.jsx("strong",{children:f.gamblingStats.allInCount})]}),v.jsxs("div",{className:"casino-stat",children:[v.jsx("span",{children:"Série de pertes max"}),v.jsx("strong",{children:f.gamblingStats.maxConsecutiveLosses})]}),v.jsxs("div",{className:"casino-stat",children:[v.jsx("span",{children:"Meilleur coup"}),v.jsxs("strong",{children:[De(f.gamblingStats.biggestWin,1)," cookies"]})]})]})]})]})]}),v.jsxs("div",{className:`auth-widget ${Tt?"auth-widget--open":""}`,children:[v.jsxs("div",{className:"auth-widget__header",children:[v.jsxs("div",{children:[v.jsx("div",{className:"auth-widget__title",children:t?"Profil & sauvegarde cloud":"Connexion / inscription"}),v.jsx("div",{className:"auth-widget__subtitle",children:t?"Gère ton pseudo et ta sauvegarde sécurisée.":"Joue immédiatement, connecte-toi pour sauvegarder et figurer au classement global."})]}),v.jsx("button",{type:"button",className:"ghost-button auth-widget__close",onClick:()=>Vt(!1),children:"✕"})]}),v.jsxs("div",{className:"auth-widget__body",children:[v.jsxs("div",{className:"auth-widget__inputs",children:[v.jsx("input",{className:"auth-input",type:"email",placeholder:"Email",value:n,onChange:N=>r(N.target.value)}),v.jsx("input",{className:"auth-input",type:"password",placeholder:"Mot de passe",value:i,onChange:N=>s(N.target.value)})]}),v.jsxs("div",{className:"auth-widget__actions",children:[v.jsx("button",{type:"button",className:"primary-button",onClick:Ba,disabled:!n||!i,children:"Connexion"}),v.jsx("button",{type:"button",className:"secondary-button",onClick:bc,disabled:!n||!i,children:"Créer un compte"}),v.jsx("button",{type:"button",className:"ghost-button",onClick:eo,disabled:!n,children:"Mot de passe oublié"})]}),v.jsx("div",{className:"auth-widget__status",children:o}),!t&&v.jsxs("div",{className:"auth-widget__anonymous",children:[v.jsx("button",{type:"button",className:"ghost-button",onClick:()=>{F_(),Vt(!1)},children:"▶️ Jouer sans compte"}),v.jsx("p",{className:"auth-widget__hint",children:"Tu peux jouer sans compte — la sauvegarde cloud et le classement global nécessitent une connexion."})]}),t&&v.jsxs(v.Fragment,{children:[v.jsxs("div",{className:"auth-widget__profile",children:[v.jsx("div",{className:"auth-widget__label",children:"Pseudo public"}),v.jsxs("div",{className:"auth-widget__name-row",children:[v.jsx("input",{className:"auth-input",type:"text",maxLength:16,value:_e,onChange:N=>Ot(N.target.value)}),v.jsx("button",{type:"button",className:"ghost-button",onClick:Ga,disabled:!_e.trim(),children:"Mettre à jour"})]})]}),v.jsxs("div",{className:"auth-widget__cloud",children:[v.jsx("button",{type:"button",className:"ghost-button",onClick:()=>zi(!1),children:"Sauvegarde cloud"}),v.jsx("button",{type:"button",className:"ghost-button",onClick:to,children:"Charger depuis le cloud"}),v.jsx("button",{type:"button",className:"ghost-button ghost-button--danger",onClick:za,children:"Se déconnecter"})]}),u&&v.jsx("div",{className:"auth-widget__status",children:u})]})]})]}),Mt&&v.jsx("div",{className:"modal-backdrop",children:v.jsxs("div",{className:"modal-card",children:[v.jsx("h2",{children:"Choisis ton pseudo"}),v.jsx("p",{children:"Il sera utilisé pour le classement local et global. Tu pourras le modifier plus tard."}),v.jsx("input",{type:"text",maxLength:16,className:"modal-input",value:_e,onChange:N=>Ot(N.target.value)}),v.jsx("div",{className:"modal-actions",children:v.jsx("button",{type:"button",className:"primary-button",onClick:Ga,children:"Valider"})})]})}),se&&v.jsx("div",{className:"overlay-backdrop",children:v.jsxs("div",{className:"overlay-card",children:[se.kind==="wheel"&&v.jsxs(v.Fragment,{children:[v.jsx("h2",{children:"Résultat de la roue"}),v.jsxs("p",{className:"overlay-main",children:[se.result.label," · Mise : ",De(se.result.spent,1)," · Gain net : ",se.result.delta>=0?"+":"",De(se.result.delta,1)," cookies"]}),se.result.isJackpot&&v.jsx("p",{className:"overlay-sub",children:"🎉 JACKPOT de cookies !"}),se.result.buffLabel&&v.jsxs("p",{className:"overlay-sub",children:["Buff obtenu : ",se.result.buffLabel]})]}),se.kind==="case"&&v.jsxs(v.Fragment,{children:[v.jsx("h2",{children:"Résultat de la caisse"}),v.jsxs("p",{className:"overlay-main",children:[se.result.caseName," · Mise : ",De(se.result.spent,1)," · Récompense : ",De(se.result.reward,1)," cookies"]}),se.result.isJackpot&&v.jsx("p",{className:"overlay-sub",children:"🎉 JACKPOT dans la lootbox !"}),se.result.isLoss&&v.jsx("p",{className:"overlay-sub",children:"Aïe… petit rappel des probabilités du casino."})]}),se.kind==="highroll"&&v.jsxs(v.Fragment,{children:[v.jsx("h2",{children:"Coup de poker"}),v.jsxs("p",{className:"overlay-main",children:[se.result.allIn?"ALL-IN":"Mise élevée"," "," · ","Mise : ",De(se.result.bet,1)," · Résultat : ",se.result.outcome==="win"?"Victoire 🎉":"Défaite 😬"," (",se.result.delta>=0?"+":"",De(se.result.delta,1)," cookies)"]})]}),v.jsx("div",{className:"overlay-actions",children:v.jsx("button",{type:"button",className:"secondary-button",onClick:Ya,children:"Fermer"})})]})})]})}Fh.createRoot(document.getElementById("root")).render(v.jsx(j0.StrictMode,{children:v.jsx(_2,{})}));
