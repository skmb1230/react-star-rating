(function(m,C){typeof exports=="object"&&typeof module<"u"?C(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],C):(m=typeof globalThis<"u"?globalThis:m||self,C(m.ReactStarRating={},m.React))})(this,function(m,C){"use strict";var B={exports:{}},$={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var le;function We(){if(le)return $;le=1;var I=C,S=Symbol.for("react.element"),O=Symbol.for("react.fragment"),R=Object.prototype.hasOwnProperty,j=I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M={key:!0,ref:!0,__self:!0,__source:!0};function x(_,f,E){var d,g={},y=null,P=null;E!==void 0&&(y=""+E),f.key!==void 0&&(y=""+f.key),f.ref!==void 0&&(P=f.ref);for(d in f)R.call(f,d)&&!M.hasOwnProperty(d)&&(g[d]=f[d]);if(_&&_.defaultProps)for(d in f=_.defaultProps,f)g[d]===void 0&&(g[d]=f[d]);return{$$typeof:S,type:_,key:y,ref:P,props:g,_owner:j.current}}return $.Fragment=O,$.jsx=x,$.jsxs=x,$}var V={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fe;function Ye(){return fe||(fe=1,process.env.NODE_ENV!=="production"&&function(){var I=C,S=Symbol.for("react.element"),O=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),_=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),P=Symbol.for("react.offscreen"),J=Symbol.iterator,L="@@iterator";function X(e){if(e===null||typeof e!="object")return null;var r=J&&e[J]||e[L];return typeof r=="function"?r:null}var T=I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function c(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];z("error",e,t)}}function z(e,r,t){{var n=T.ReactDebugCurrentFrame,o=n.getStackAddendum();o!==""&&(r+="%s",t=t.concat([o]));var u=t.map(function(i){return String(i)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var H=!1,Q=!1,D=!1,k=!1,ee=!1,ve;ve=Symbol.for("react.module.reference");function Ve(e){return!!(typeof e=="string"||typeof e=="function"||e===R||e===M||ee||e===j||e===E||e===d||k||e===P||H||Q||D||typeof e=="object"&&e!==null&&(e.$$typeof===y||e.$$typeof===g||e.$$typeof===x||e.$$typeof===_||e.$$typeof===f||e.$$typeof===ve||e.getModuleId!==void 0))}function Ue(e,r,t){var n=e.displayName;if(n)return n;var o=r.displayName||r.name||"";return o!==""?t+"("+o+")":t}function pe(e){return e.displayName||"Context"}function w(e){if(e==null)return null;if(typeof e.tag=="number"&&c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case O:return"Portal";case M:return"Profiler";case j:return"StrictMode";case E:return"Suspense";case d:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _:var r=e;return pe(r)+".Consumer";case x:var t=e;return pe(t._context)+".Provider";case f:return Ue(e,e.render,"ForwardRef");case g:var n=e.displayName||null;return n!==null?n:w(e.type)||"Memo";case y:{var o=e,u=o._payload,i=o._init;try{return w(i(u))}catch{return null}}}return null}var F=Object.assign,U=0,he,ge,ye,Re,_e,Ee,be;function me(){}me.__reactDisabledLog=!0;function Ne(){{if(U===0){he=console.log,ge=console.info,ye=console.warn,Re=console.error,_e=console.group,Ee=console.groupCollapsed,be=console.groupEnd;var e={configurable:!0,enumerable:!0,value:me,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}U++}}function Be(){{if(U--,U===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:F({},e,{value:he}),info:F({},e,{value:ge}),warn:F({},e,{value:ye}),error:F({},e,{value:Re}),group:F({},e,{value:_e}),groupCollapsed:F({},e,{value:Ee}),groupEnd:F({},e,{value:be})})}U<0&&c("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var re=T.ReactCurrentDispatcher,te;function K(e,r,t){{if(te===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);te=n&&n[1]||""}return`
`+te+e}}var ne=!1,q;{var Je=typeof WeakMap=="function"?WeakMap:Map;q=new Je}function Ce(e,r){if(!e||ne)return"";{var t=q.get(e);if(t!==void 0)return t}var n;ne=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=re.current,re.current=null,Ne();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(p){n=p}Reflect.construct(e,[],i)}else{try{i.call()}catch(p){n=p}e.call(i.prototype)}}else{try{throw Error()}catch(p){n=p}e()}}catch(p){if(p&&n&&typeof p.stack=="string"){for(var a=p.stack.split(`
`),v=n.stack.split(`
`),s=a.length-1,l=v.length-1;s>=1&&l>=0&&a[s]!==v[l];)l--;for(;s>=1&&l>=0;s--,l--)if(a[s]!==v[l]){if(s!==1||l!==1)do if(s--,l--,l<0||a[s]!==v[l]){var h=`
`+a[s].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),typeof e=="function"&&q.set(e,h),h}while(s>=1&&l>=0);break}}}finally{ne=!1,re.current=u,Be(),Error.prepareStackTrace=o}var Y=e?e.displayName||e.name:"",A=Y?K(Y):"";return typeof e=="function"&&q.set(e,A),A}function Ke(e,r,t){return Ce(e,!1)}function qe(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function G(e,r,t){if(e==null)return"";if(typeof e=="function")return Ce(e,qe(e));if(typeof e=="string")return K(e);switch(e){case E:return K("Suspense");case d:return K("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case f:return Ke(e.render);case g:return G(e.type,r,t);case y:{var n=e,o=n._payload,u=n._init;try{return G(u(o),r,t)}catch{}}}return""}var N=Object.prototype.hasOwnProperty,Le={},Te=T.ReactDebugCurrentFrame;function Z(e){if(e){var r=e._owner,t=G(e.type,e._source,r?r.type:null);Te.setExtraStackFrame(t)}else Te.setExtraStackFrame(null)}function Ge(e,r,t,n,o){{var u=Function.call.bind(N);for(var i in e)if(u(e,i)){var a=void 0;try{if(typeof e[i]!="function"){var v=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw v.name="Invariant Violation",v}a=e[i](r,i,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){a=s}a&&!(a instanceof Error)&&(Z(o),c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,i,typeof a),Z(null)),a instanceof Error&&!(a.message in Le)&&(Le[a.message]=!0,Z(o),c("Failed %s type: %s",t,a.message),Z(null))}}}var Ze=Array.isArray;function ae(e){return Ze(e)}function Xe(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function ze(e){try{return we(e),!1}catch{return!0}}function we(e){return""+e}function Se(e){if(ze(e))return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Xe(e)),we(e)}var Oe=T.ReactCurrentOwner,He={key:!0,ref:!0,__self:!0,__source:!0},je,xe;function Qe(e){if(N.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function er(e){if(N.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function rr(e,r){typeof e.ref=="string"&&Oe.current}function tr(e,r){{var t=function(){je||(je=!0,c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function nr(e,r){{var t=function(){xe||(xe=!0,c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var ar=function(e,r,t,n,o,u,i){var a={$$typeof:S,type:e,key:r,ref:t,props:i,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function ir(e,r,t,n,o){{var u,i={},a=null,v=null;t!==void 0&&(Se(t),a=""+t),er(r)&&(Se(r.key),a=""+r.key),Qe(r)&&(v=r.ref,rr(r,o));for(u in r)N.call(r,u)&&!He.hasOwnProperty(u)&&(i[u]=r[u]);if(e&&e.defaultProps){var s=e.defaultProps;for(u in s)i[u]===void 0&&(i[u]=s[u])}if(a||v){var l=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&tr(i,l),v&&nr(i,l)}return ar(e,a,v,o,n,Oe.current,i)}}var ie=T.ReactCurrentOwner,Pe=T.ReactDebugCurrentFrame;function W(e){if(e){var r=e._owner,t=G(e.type,e._source,r?r.type:null);Pe.setExtraStackFrame(t)}else Pe.setExtraStackFrame(null)}var oe;oe=!1;function ue(e){return typeof e=="object"&&e!==null&&e.$$typeof===S}function De(){{if(ie.current){var e=w(ie.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function or(e){return""}var ke={};function ur(e){{var r=De();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Fe(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=ur(r);if(ke[t])return;ke[t]=!0;var n="";e&&e._owner&&e._owner!==ie.current&&(n=" It was passed a child from "+w(e._owner.type)+"."),W(e),c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),W(null)}}function Ae(e,r){{if(typeof e!="object")return;if(ae(e))for(var t=0;t<e.length;t++){var n=e[t];ue(n)&&Fe(n,r)}else if(ue(e))e._store&&(e._store.validated=!0);else if(e){var o=X(e);if(typeof o=="function"&&o!==e.entries)for(var u=o.call(e),i;!(i=u.next()).done;)ue(i.value)&&Fe(i.value,r)}}}function sr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===f||r.$$typeof===g))t=r.propTypes;else return;if(t){var n=w(r);Ge(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!oe){oe=!0;var o=w(r);c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",o||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function lr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){W(e),c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),W(null);break}}e.ref!==null&&(W(e),c("Invalid attribute `ref` supplied to `React.Fragment`."),W(null))}}var Ie={};function Me(e,r,t,n,o,u){{var i=Ve(e);if(!i){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var v=or();v?a+=v:a+=De();var s;e===null?s="null":ae(e)?s="array":e!==void 0&&e.$$typeof===S?(s="<"+(w(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,a)}var l=ir(e,r,t,o,u);if(l==null)return l;if(i){var h=r.children;if(h!==void 0)if(n)if(ae(h)){for(var Y=0;Y<h.length;Y++)Ae(h[Y],e);Object.freeze&&Object.freeze(h)}else c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Ae(h,e)}if(N.call(r,"key")){var A=w(e),p=Object.keys(r).filter(function(hr){return hr!=="key"}),se=p.length>0?"{key: someKey, "+p.join(": ..., ")+": ...}":"{key: someKey}";if(!Ie[A+se]){var pr=p.length>0?"{"+p.join(": ..., ")+": ...}":"{}";c(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,se,A,pr,A),Ie[A+se]=!0}}return e===R?lr(l):sr(l),l}}function fr(e,r,t){return Me(e,r,t,!0)}function cr(e,r,t){return Me(e,r,t,!1)}var dr=cr,vr=fr;V.Fragment=R,V.jsx=dr,V.jsxs=vr}()),V}var ce;function $e(){return ce||(ce=1,process.env.NODE_ENV==="production"?B.exports=We():B.exports=Ye()),B.exports}var b=$e();function de({variant:I="fill",maxStars:S=5,currentScore:O=0,size:R=24,starEmptyColor:j="#D2D2D2",emptyOutlineColor:M="#D2D2D2",emptyOutlineFillColor:x="transparent",starFillColor:_="#FF501B",onClick:f,isClickable:E=!0,containerStyle:d,starStyle:g}){const[y,P]=C.useState(O);C.useEffect(()=>{P(O)},[O]);const J=D=>{E&&(P(D+1),f==null||f(D+1))},L=R,X=Math.floor(R/4),T=I==="fill"?j:M,c=I==="fill"?j:x,z={display:"inline-flex",gap:`${X}px`,height:`${R}px`,alignItems:"center"},H={position:"relative",width:L,height:L,cursor:E?"pointer":"default"},Q=D=>({position:"absolute",top:0,left:0,width:`${D}%`,height:"100%",overflow:"hidden"});return b.jsx("div",{style:{...z,...d},children:Array.from({length:S},(D,k)=>{const ee=y>=k+1?100:y>k?(y-k)*100:0;return b.jsxs("div",{style:{...H,...g},onClick:()=>E&&J(k),children:[b.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:L,height:L,viewBox:"0 0 42 42",children:[b.jsx("path",{d:"M21.0139 33.4345L8.71768 39.8889L11.0666 26.2182L1.10526 16.5376L14.8519 14.5486L21 2.11111L27.1481 14.5486L40.8947 16.5376L30.9334 26.2182L33.2822 39.8889L21.0139 33.4345Z",fill:c}),b.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21 1C21.4196 1 21.803 1.23888 21.9898 1.61665L27.8797 13.5319L41.0522 15.4378C41.4697 15.4982 41.8166 15.7923 41.9464 16.1957C42.0761 16.5992 41.9662 17.0417 41.6629 17.3365L32.1221 26.6085L34.3714 39.6998C34.443 40.1164 34.2732 40.5378 33.9333 40.7868C33.5934 41.0358 33.1424 41.0694 32.7698 40.8733L21.0134 34.6882L9.22929 40.8738C8.85665 41.0694 8.40588 41.0356 8.06628 40.7865C7.72668 40.5374 7.55703 40.1162 7.62858 39.6998L9.87792 26.6085L0.337096 17.3365C0.0338302 17.0417 -0.0761318 16.5992 0.0536519 16.1957C0.183436 15.7923 0.530334 15.4982 0.947835 15.4378L14.1202 13.5319L20.0102 1.61665C20.197 1.23888 20.5804 1 21 1ZM21 4.60788L15.8417 15.043C15.68 15.37 15.3689 15.5963 15.0093 15.6483L3.49484 17.3144L11.8348 25.4194C12.0978 25.675 12.218 26.0449 12.1557 26.4074L10.1873 37.8641L20.5024 32.4495C20.8232 32.2811 21.2057 32.2813 21.5264 32.45L31.8123 37.8615L29.8443 26.4074C29.782 26.0449 29.9022 25.675 30.1652 25.4194L38.5052 17.3144L26.9907 15.6483C26.6311 15.5963 26.32 15.37 26.1583 15.043L21 4.60788Z",fill:T})]}),b.jsx("div",{style:Q(ee),children:b.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:L,height:L,viewBox:"0 0 42 42",children:[b.jsx("path",{d:"M21.0139 33.4345L8.71768 39.8889L11.0666 26.2182L1.10526 16.5376L14.8519 14.5486L21 2.11111L27.1481 14.5486L40.8947 16.5376L30.9334 26.2182L33.2822 39.8889L21.0139 33.4345Z",fill:_}),b.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21 1C21.4196 1 21.803 1.23888 21.9898 1.61665L27.8797 13.5319L41.0522 15.4378C41.4697 15.4982 41.8166 15.7923 41.9464 16.1957C42.0761 16.5992 41.9662 17.0417 41.6629 17.3365L32.1221 26.6085L34.3714 39.6998C34.443 40.1164 34.2732 40.5378 33.9333 40.7868C33.5934 41.0358 33.1424 41.0694 32.7698 40.8733L21.0134 34.6882L9.22929 40.8738C8.85665 41.0694 8.40588 41.0356 8.06628 40.7865C7.72668 40.5374 7.55703 40.1162 7.62858 39.6998L9.87792 26.6085L0.337096 17.3365C0.0338302 17.0417 -0.0761318 16.5992 0.0536519 16.1957C0.183436 15.7923 0.530334 15.4982 0.947835 15.4378L14.1202 13.5319L20.0102 1.61665C20.197 1.23888 20.5804 1 21 1ZM21 4.60788L15.8417 15.043C15.68 15.37 15.3689 15.5963 15.0093 15.6483L3.49484 17.3144L11.8348 25.4194C12.0978 25.675 12.218 26.0449 12.1557 26.4074L10.1873 37.8641L20.5024 32.4495C20.8232 32.2811 21.2057 32.2813 21.5264 32.45L31.8123 37.8615L29.8443 26.4074C29.782 26.0449 29.9022 25.675 30.1652 25.4194L38.5052 17.3144L26.9907 15.6483C26.6311 15.5963 26.32 15.37 26.1583 15.043L21 4.60788Z",fill:_})]})})]},k)})})}m.StarRating=de,m.default=de,Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
