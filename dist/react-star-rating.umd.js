(function(L,T){typeof exports=="object"&&typeof module<"u"?T(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],T):(L=typeof globalThis<"u"?globalThis:L||self,T(L.ReactStarRating={},L.React))})(this,function(L,T){"use strict";var V={exports:{}},A={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ae;function De(){if(ae)return A;ae=1;var M=T,E=Symbol.for("react.element"),O=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,j=M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function w(C,c,_){var d,R={},p=null,W=null;_!==void 0&&(p=""+_),c.key!==void 0&&(p=""+c.key),c.ref!==void 0&&(W=c.ref);for(d in c)m.call(c,d)&&!x.hasOwnProperty(d)&&(R[d]=c[d]);if(C&&C.defaultProps)for(d in c=C.defaultProps,c)R[d]===void 0&&(R[d]=c[d]);return{$$typeof:E,type:C,key:p,ref:W,props:R,_owner:j.current}}return A.Fragment=O,A.jsx=w,A.jsxs=w,A}var I={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ie;function Fe(){return ie||(ie=1,process.env.NODE_ENV!=="production"&&function(){var M=T,E=Symbol.for("react.element"),O=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),C=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),U=Symbol.iterator,K="@@iterator";function q(e){if(e===null||typeof e!="object")return null;var r=U&&e[U]||e[K];return typeof r=="function"?r:null}var g=M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function s(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];Z("error",e,t)}}function Z(e,r,t){{var n=g.ReactDebugCurrentFrame,o=n.getStackAddendum();o!==""&&(r+="%s",t=t.concat([o]));var u=t.map(function(i){return String(i)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var Ie=!1,Me=!1,We=!1,Ye=!1,$e=!1,se;se=Symbol.for("react.module.reference");function Ve(e){return!!(typeof e=="string"||typeof e=="function"||e===m||e===x||$e||e===j||e===_||e===d||Ye||e===W||Ie||Me||We||typeof e=="object"&&e!==null&&(e.$$typeof===p||e.$$typeof===R||e.$$typeof===w||e.$$typeof===C||e.$$typeof===c||e.$$typeof===se||e.getModuleId!==void 0))}function Ue(e,r,t){var n=e.displayName;if(n)return n;var o=r.displayName||r.name||"";return o!==""?t+"("+o+")":t}function le(e){return e.displayName||"Context"}function S(e){if(e==null)return null;if(typeof e.tag=="number"&&s("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case m:return"Fragment";case O:return"Portal";case x:return"Profiler";case j:return"StrictMode";case _:return"Suspense";case d:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case C:var r=e;return le(r)+".Consumer";case w:var t=e;return le(t._context)+".Provider";case c:return Ue(e,e.render,"ForwardRef");case R:var n=e.displayName||null;return n!==null?n:S(e.type)||"Memo";case p:{var o=e,u=o._payload,i=o._init;try{return S(i(u))}catch{return null}}}return null}var P=Object.assign,Y=0,fe,ce,de,ve,pe,he,ge;function ye(){}ye.__reactDisabledLog=!0;function Ne(){{if(Y===0){fe=console.log,ce=console.info,de=console.warn,ve=console.error,pe=console.group,he=console.groupCollapsed,ge=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ye,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}Y++}}function Be(){{if(Y--,Y===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:P({},e,{value:fe}),info:P({},e,{value:ce}),warn:P({},e,{value:de}),error:P({},e,{value:ve}),group:P({},e,{value:pe}),groupCollapsed:P({},e,{value:he}),groupEnd:P({},e,{value:ge})})}Y<0&&s("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var X=g.ReactCurrentDispatcher,z;function N(e,r,t){{if(z===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);z=n&&n[1]||""}return`
`+z+e}}var H=!1,B;{var Je=typeof WeakMap=="function"?WeakMap:Map;B=new Je}function Re(e,r){if(!e||H)return"";{var t=B.get(e);if(t!==void 0)return t}var n;H=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=X.current,X.current=null,Ne();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(h){n=h}Reflect.construct(e,[],i)}else{try{i.call()}catch(h){n=h}e.call(i.prototype)}}else{try{throw Error()}catch(h){n=h}e()}}catch(h){if(h&&n&&typeof h.stack=="string"){for(var a=h.stack.split(`
`),v=n.stack.split(`
`),l=a.length-1,f=v.length-1;l>=1&&f>=0&&a[l]!==v[f];)f--;for(;l>=1&&f>=0;l--,f--)if(a[l]!==v[f]){if(l!==1||f!==1)do if(l--,f--,f<0||a[l]!==v[f]){var y=`
`+a[l].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),typeof e=="function"&&B.set(e,y),y}while(l>=1&&f>=0);break}}}finally{H=!1,X.current=u,Be(),Error.prepareStackTrace=o}var F=e?e.displayName||e.name:"",k=F?N(F):"";return typeof e=="function"&&B.set(e,k),k}function Ge(e,r,t){return Re(e,!1)}function Ke(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function J(e,r,t){if(e==null)return"";if(typeof e=="function")return Re(e,Ke(e));if(typeof e=="string")return N(e);switch(e){case _:return N("Suspense");case d:return N("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case c:return Ge(e.render);case R:return J(e.type,r,t);case p:{var n=e,o=n._payload,u=n._init;try{return J(u(o),r,t)}catch{}}}return""}var $=Object.prototype.hasOwnProperty,_e={},be=g.ReactDebugCurrentFrame;function G(e){if(e){var r=e._owner,t=J(e.type,e._source,r?r.type:null);be.setExtraStackFrame(t)}else be.setExtraStackFrame(null)}function qe(e,r,t,n,o){{var u=Function.call.bind($);for(var i in e)if(u(e,i)){var a=void 0;try{if(typeof e[i]!="function"){var v=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw v.name="Invariant Violation",v}a=e[i](r,i,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(l){a=l}a&&!(a instanceof Error)&&(G(o),s("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,i,typeof a),G(null)),a instanceof Error&&!(a.message in _e)&&(_e[a.message]=!0,G(o),s("Failed %s type: %s",t,a.message),G(null))}}}var Ze=Array.isArray;function Q(e){return Ze(e)}function Xe(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function ze(e){try{return Ee(e),!1}catch{return!0}}function Ee(e){return""+e}function me(e){if(ze(e))return s("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Xe(e)),Ee(e)}var Ce=g.ReactCurrentOwner,He={key:!0,ref:!0,__self:!0,__source:!0},Le,Te;function Qe(e){if($.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function er(e){if($.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function rr(e,r){typeof e.ref=="string"&&Ce.current}function tr(e,r){{var t=function(){Le||(Le=!0,s("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function nr(e,r){{var t=function(){Te||(Te=!0,s("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var ar=function(e,r,t,n,o,u,i){var a={$$typeof:E,type:e,key:r,ref:t,props:i,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function ir(e,r,t,n,o){{var u,i={},a=null,v=null;t!==void 0&&(me(t),a=""+t),er(r)&&(me(r.key),a=""+r.key),Qe(r)&&(v=r.ref,rr(r,o));for(u in r)$.call(r,u)&&!He.hasOwnProperty(u)&&(i[u]=r[u]);if(e&&e.defaultProps){var l=e.defaultProps;for(u in l)i[u]===void 0&&(i[u]=l[u])}if(a||v){var f=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&tr(i,f),v&&nr(i,f)}return ar(e,a,v,o,n,Ce.current,i)}}var ee=g.ReactCurrentOwner,we=g.ReactDebugCurrentFrame;function D(e){if(e){var r=e._owner,t=J(e.type,e._source,r?r.type:null);we.setExtraStackFrame(t)}else we.setExtraStackFrame(null)}var re;re=!1;function te(e){return typeof e=="object"&&e!==null&&e.$$typeof===E}function Se(){{if(ee.current){var e=S(ee.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function or(e){return""}var Oe={};function ur(e){{var r=Se();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function je(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=ur(r);if(Oe[t])return;Oe[t]=!0;var n="";e&&e._owner&&e._owner!==ee.current&&(n=" It was passed a child from "+S(e._owner.type)+"."),D(e),s('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),D(null)}}function xe(e,r){{if(typeof e!="object")return;if(Q(e))for(var t=0;t<e.length;t++){var n=e[t];te(n)&&je(n,r)}else if(te(e))e._store&&(e._store.validated=!0);else if(e){var o=q(e);if(typeof o=="function"&&o!==e.entries)for(var u=o.call(e),i;!(i=u.next()).done;)te(i.value)&&je(i.value,r)}}}function sr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===c||r.$$typeof===R))t=r.propTypes;else return;if(t){var n=S(r);qe(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!re){re=!0;var o=S(r);s("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",o||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&s("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function lr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){D(e),s("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),D(null);break}}e.ref!==null&&(D(e),s("Invalid attribute `ref` supplied to `React.Fragment`."),D(null))}}var Pe={};function ke(e,r,t,n,o,u){{var i=Ve(e);if(!i){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var v=or();v?a+=v:a+=Se();var l;e===null?l="null":Q(e)?l="array":e!==void 0&&e.$$typeof===E?(l="<"+(S(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):l=typeof e,s("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",l,a)}var f=ir(e,r,t,o,u);if(f==null)return f;if(i){var y=r.children;if(y!==void 0)if(n)if(Q(y)){for(var F=0;F<y.length;F++)xe(y[F],e);Object.freeze&&Object.freeze(y)}else s("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else xe(y,e)}if($.call(r,"key")){var k=S(e),h=Object.keys(r).filter(function(hr){return hr!=="key"}),ne=h.length>0?"{key: someKey, "+h.join(": ..., ")+": ...}":"{key: someKey}";if(!Pe[k+ne]){var pr=h.length>0?"{"+h.join(": ..., ")+": ...}":"{}";s(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,ne,k,pr,k),Pe[k+ne]=!0}}return e===m?lr(f):sr(f),f}}function fr(e,r,t){return ke(e,r,t,!0)}function cr(e,r,t){return ke(e,r,t,!1)}var dr=cr,vr=fr;I.Fragment=m,I.jsx=dr,I.jsxs=vr}()),I}var oe;function Ae(){return oe||(oe=1,process.env.NODE_ENV==="production"?V.exports=De():V.exports=Fe()),V.exports}var b=Ae();function ue({maxStars:M=5,currentScore:E=0,size:O=24,starEmptyColor:m="#D2D2D2",starFillColor:j="#FF501B",onClick:x,isClickable:w=!0,containerStyle:C,starStyle:c}){const[_,d]=T.useState(E);T.useEffect(()=>{d(E)},[E]);const R=g=>{x?x(g+1):d(g+1)},p=O,U={display:"inline-flex",gap:`${Math.floor(O/4)}px`,height:`${O}px`,alignItems:"center"},K={position:"relative",width:p,height:p,cursor:w?"pointer":"default"},q=g=>({position:"absolute",top:0,left:0,width:`${g}%`,height:"100%",overflow:"hidden"});return b.jsx("div",{style:{...U,...C},children:Array.from({length:M},(g,s)=>{const Z=_>=s+1?100:_>s?(_-s)*100:0;return b.jsxs("div",{style:{...K,...c},onClick:()=>w&&R(s),children:[b.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:p,height:p,viewBox:"0 0 42 42",children:[b.jsx("path",{d:"M21.0139 33.4345L8.71768 39.8889L11.0666 26.2182L1.10526 16.5376L14.8519 14.5486L21 2.11111L27.1481 14.5486L40.8947 16.5376L30.9334 26.2182L33.2822 39.8889L21.0139 33.4345Z",fill:m}),b.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21 1C21.4196 1 21.803 1.23888 21.9898 1.61665L27.8797 13.5319L41.0522 15.4378C41.4697 15.4982 41.8166 15.7923 41.9464 16.1957C42.0761 16.5992 41.9662 17.0417 41.6629 17.3365L32.1221 26.6085L34.3714 39.6998C34.443 40.1164 34.2732 40.5378 33.9333 40.7868C33.5934 41.0358 33.1424 41.0694 32.7698 40.8733L21.0134 34.6882L9.22929 40.8738C8.85665 41.0694 8.40588 41.0356 8.06628 40.7865C7.72668 40.5374 7.55703 40.1162 7.62858 39.6998L9.87792 26.6085L0.337096 17.3365C0.0338302 17.0417 -0.0761318 16.5992 0.0536519 16.1957C0.183436 15.7923 0.530334 15.4982 0.947835 15.4378L14.1202 13.5319L20.0102 1.61665C20.197 1.23888 20.5804 1 21 1ZM21 4.60788L15.8417 15.043C15.68 15.37 15.3689 15.5963 15.0093 15.6483L3.49484 17.3144L11.8348 25.4194C12.0978 25.675 12.218 26.0449 12.1557 26.4074L10.1873 37.8641L20.5024 32.4495C20.8232 32.2811 21.2057 32.2813 21.5264 32.45L31.8123 37.8615L29.8443 26.4074C29.782 26.0449 29.9022 25.675 30.1652 25.4194L38.5052 17.3144L26.9907 15.6483C26.6311 15.5963 26.32 15.37 26.1583 15.043L21 4.60788Z",fill:m})]}),b.jsx("div",{style:q(Z),children:b.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:p,height:p,viewBox:"0 0 42 42",children:[b.jsx("path",{d:"M21.0139 33.4345L8.71768 39.8889L11.0666 26.2182L1.10526 16.5376L14.8519 14.5486L21 2.11111L27.1481 14.5486L40.8947 16.5376L30.9334 26.2182L33.2822 39.8889L21.0139 33.4345Z",fill:j}),b.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21 1C21.4196 1 21.803 1.23888 21.9898 1.61665L27.8797 13.5319L41.0522 15.4378C41.4697 15.4982 41.8166 15.7923 41.9464 16.1957C42.0761 16.5992 41.9662 17.0417 41.6629 17.3365L32.1221 26.6085L34.3714 39.6998C34.443 40.1164 34.2732 40.5378 33.9333 40.7868C33.5934 41.0358 33.1424 41.0694 32.7698 40.8733L21.0134 34.6882L9.22929 40.8738C8.85665 41.0694 8.40588 41.0356 8.06628 40.7865C7.72668 40.5374 7.55703 40.1162 7.62858 39.6998L9.87792 26.6085L0.337096 17.3365C0.0338302 17.0417 -0.0761318 16.5992 0.0536519 16.1957C0.183436 15.7923 0.530334 15.4982 0.947835 15.4378L14.1202 13.5319L20.0102 1.61665C20.197 1.23888 20.5804 1 21 1ZM21 4.60788L15.8417 15.043C15.68 15.37 15.3689 15.5963 15.0093 15.6483L3.49484 17.3144L11.8348 25.4194C12.0978 25.675 12.218 26.0449 12.1557 26.4074L10.1873 37.8641L20.5024 32.4495C20.8232 32.2811 21.2057 32.2813 21.5264 32.45L31.8123 37.8615L29.8443 26.4074C29.782 26.0449 29.9022 25.675 30.1652 25.4194L38.5052 17.3144L26.9907 15.6483C26.6311 15.5963 26.32 15.37 26.1583 15.043L21 4.60788Z",fill:j})]})})]},s)})})}L.StarRating=ue,L.default=ue,Object.defineProperties(L,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
