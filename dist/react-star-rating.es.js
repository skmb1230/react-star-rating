import Le, { useState as vr, useEffect as pr } from "react";
import hr from "react-dom";
function gr(d) {
  return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
}
var G = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function yr() {
  if (Se) return M;
  Se = 1;
  var d = Le, h = Symbol.for("react.element"), E = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, w = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, j = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(_, c, O) {
    var l, b = {}, m = null, F = null;
    O !== void 0 && (m = "" + O), c.key !== void 0 && (m = "" + c.key), c.ref !== void 0 && (F = c.ref);
    for (l in c) y.call(c, l) && !j.hasOwnProperty(l) && (b[l] = c[l]);
    if (_ && _.defaultProps) for (l in c = _.defaultProps, c) b[l] === void 0 && (b[l] = c[l]);
    return { $$typeof: h, type: _, key: m, ref: F, props: b, _owner: w.current };
  }
  return M.Fragment = E, M.jsx = T, M.jsxs = T, M;
}
var N = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function Rr() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    var d = Le, h = Symbol.for("react.element"), E = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), _ = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), U = Symbol.iterator, x = "@@iterator";
    function L(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = U && e[U] || e[x];
      return typeof r == "function" ? r : null;
    }
    var S = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        ke("error", e, t);
      }
    }
    function ke(e, r, t) {
      {
        var n = S.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var De = !1, Fe = !1, Ae = !1, Ie = !1, $e = !1, te;
    te = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === y || e === j || $e || e === w || e === O || e === l || Ie || e === F || De || Fe || Ae || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === b || e.$$typeof === T || e.$$typeof === _ || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function P(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case y:
          return "Fragment";
        case E:
          return "Portal";
        case j:
          return "Profiler";
        case w:
          return "StrictMode";
        case O:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return ne(r) + ".Consumer";
          case T:
            var t = e;
            return ne(t._context) + ".Provider";
          case c:
            return Ye(e, e.render, "ForwardRef");
          case b:
            var n = e.displayName || null;
            return n !== null ? n : P(e.type) || "Memo";
          case m: {
            var i = e, u = i._payload, o = i._init;
            try {
              return P(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, W = 0, ae, oe, ie, ue, se, le, fe;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function Me() {
      {
        if (W === 0) {
          ae = console.log, oe = console.info, ie = console.warn, ue = console.error, se = console.group, le = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        W++;
      }
    }
    function Ne() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, e, {
              value: ae
            }),
            info: k({}, e, {
              value: oe
            }),
            warn: k({}, e, {
              value: ie
            }),
            error: k({}, e, {
              value: ue
            }),
            group: k({}, e, {
              value: se
            }),
            groupCollapsed: k({}, e, {
              value: le
            }),
            groupEnd: k({}, e, {
              value: fe
            })
          });
        }
        W < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = S.ReactCurrentDispatcher, X;
    function V(e, r, t) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            X = n && n[1] || "";
          }
        return `
` + X + e;
      }
    }
    var Z = !1, B;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      B = new Ue();
    }
    function de(e, r) {
      if (!e || Z)
        return "";
      {
        var t = B.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Z = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = K.current, K.current = null, Me();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (g) {
              n = g;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (g) {
              n = g;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (g) {
            n = g;
          }
          e();
        }
      } catch (g) {
        if (g && n && typeof g.stack == "string") {
          for (var a = g.stack.split(`
`), p = n.stack.split(`
`), s = a.length - 1, f = p.length - 1; s >= 1 && f >= 0 && a[s] !== p[f]; )
            f--;
          for (; s >= 1 && f >= 0; s--, f--)
            if (a[s] !== p[f]) {
              if (s !== 1 || f !== 1)
                do
                  if (s--, f--, f < 0 || a[s] !== p[f]) {
                    var R = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, R), R;
                  }
                while (s >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        Z = !1, K.current = u, Ne(), Error.prepareStackTrace = i;
      }
      var I = e ? e.displayName || e.name : "", D = I ? V(I) : "";
      return typeof e == "function" && B.set(e, D), D;
    }
    function Ve(e, r, t) {
      return de(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function q(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return de(e, Be(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case O:
          return V("Suspense");
        case l:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Ve(e.render);
          case b:
            return q(e.type, r, t);
          case m: {
            var n = e, i = n._payload, u = n._init;
            try {
              return q(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, ve = {}, pe = S.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    function qe(e, r, t, n, i) {
      {
        var u = Function.call.bind(Y);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (J(i), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), J(null)), a instanceof Error && !(a.message in ve) && (ve[a.message] = !0, J(i), v("Failed %s type: %s", t, a.message), J(null));
          }
      }
    }
    var Je = Array.isArray;
    function z(e) {
      return Je(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return he(e), !1;
      } catch {
        return !0;
      }
    }
    function he(e) {
      return "" + e;
    }
    function ge(e) {
      if (Ke(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), he(e);
    }
    var ye = S.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, Ee;
    function Ze(e) {
      if (Y.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ze(e) {
      if (Y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function He(e, r) {
      typeof e.ref == "string" && ye.current;
    }
    function Qe(e, r) {
      {
        var t = function() {
          Re || (Re = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: h,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function tr(e, r, t, n, i) {
      {
        var u, o = {}, a = null, p = null;
        t !== void 0 && (ge(t), a = "" + t), ze(r) && (ge(r.key), a = "" + r.key), Ze(r) && (p = r.ref, He(r, i));
        for (u in r)
          Y.call(r, u) && !Xe.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            o[u] === void 0 && (o[u] = s[u]);
        }
        if (a || p) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Qe(o, f), p && er(o, f);
        }
        return rr(e, a, p, i, n, ye.current, o);
      }
    }
    var H = S.ReactCurrentOwner, _e = S.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(t);
      } else
        _e.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === h;
    }
    function be() {
      {
        if (H.current) {
          var e = P(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nr(e) {
      return "";
    }
    var me = {};
    function ar(e) {
      {
        var r = be();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ce(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ar(r);
        if (me[t])
          return;
        me[t] = !0;
        var n = "";
        e && e._owner && e._owner !== H.current && (n = " It was passed a child from " + P(e._owner.type) + "."), A(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), A(null);
      }
    }
    function we(e, r) {
      {
        if (typeof e != "object")
          return;
        if (z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ee(n) && Ce(n, r);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = L(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              ee(o.value) && Ce(o.value, r);
        }
      }
    }
    function or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === b))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = P(r);
          qe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var i = P(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            A(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    var Te = {};
    function Oe(e, r, t, n, i, u) {
      {
        var o = We(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = nr();
          p ? a += p : a += be();
          var s;
          e === null ? s = "null" : z(e) ? s = "array" : e !== void 0 && e.$$typeof === h ? (s = "<" + (P(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var f = tr(e, r, t, i, u);
        if (f == null)
          return f;
        if (o) {
          var R = r.children;
          if (R !== void 0)
            if (n)
              if (z(R)) {
                for (var I = 0; I < R.length; I++)
                  we(R[I], e);
                Object.freeze && Object.freeze(R);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              we(R, e);
        }
        if (Y.call(r, "key")) {
          var D = P(e), g = Object.keys(r).filter(function(dr) {
            return dr !== "key";
          }), re = g.length > 0 ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Te[D + re]) {
            var cr = g.length > 0 ? "{" + g.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, re, D, cr, D), Te[D + re] = !0;
          }
        }
        return e === y ? ir(f) : or(f), f;
      }
    }
    function ur(e, r, t) {
      return Oe(e, r, t, !0);
    }
    function sr(e, r, t) {
      return Oe(e, r, t, !1);
    }
    var lr = sr, fr = ur;
    N.Fragment = y, N.jsx = lr, N.jsxs = fr;
  }()), N;
}
var je;
function Er() {
  return je || (je = 1, process.env.NODE_ENV === "production" ? G.exports = yr() : G.exports = Rr()), G.exports;
}
var C = Er(), $ = {}, xe;
function _r() {
  if (xe) return $;
  xe = 1;
  var d = hr;
  if (process.env.NODE_ENV === "production")
    $.createRoot = d.createRoot, $.hydrateRoot = d.hydrateRoot;
  else {
    var h = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    $.createRoot = function(E, y) {
      h.usingClientEntryPoint = !0;
      try {
        return d.createRoot(E, y);
      } finally {
        h.usingClientEntryPoint = !1;
      }
    }, $.hydrateRoot = function(E, y, w) {
      h.usingClientEntryPoint = !0;
      try {
        return d.hydrateRoot(E, y, w);
      } finally {
        h.usingClientEntryPoint = !1;
      }
    };
  }
  return $;
}
var br = _r();
const mr = /* @__PURE__ */ gr(br);
function Cr({
  maxStars: d = 5,
  currentScore: h = 0,
  size: E = 24,
  starEmptyColor: y = "#D2D2D2",
  starFillColor: w = "#FF501B",
  onClick: j,
  isClickable: T = !0
}) {
  const [_, c] = vr(h);
  pr(() => {
    c(h);
  }, [h]);
  const O = (x) => {
    j ? j(x + 1) : c(x + 1);
  }, l = E * 0.75, m = {
    display: "inline-flex",
    gap: `${Math.floor(E / 4)}px`,
    height: `${E}px`,
    alignItems: "center"
  }, F = {
    position: "relative",
    width: l,
    height: l,
    cursor: T ? "pointer" : "default"
  }, U = (x) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: `${x}%`,
    height: "100%",
    overflow: "hidden"
  });
  return /* @__PURE__ */ C.jsx("div", { style: m, children: Array.from({ length: d }, (x, L) => {
    const S = _ >= L + 1 ? 100 : _ > L ? (_ - L) * 100 : 0;
    return /* @__PURE__ */ C.jsxs("div", { style: F, onClick: () => T && O(L), children: [
      /* @__PURE__ */ C.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: l, height: l, viewBox: "0 0 42 42", children: [
        /* @__PURE__ */ C.jsx(
          "path",
          {
            d: "M21.0139 33.4345L8.71768 39.8889L11.0666 26.2182L1.10526 16.5376L14.8519 14.5486L21 2.11111L27.1481 14.5486L40.8947 16.5376L30.9334 26.2182L33.2822 39.8889L21.0139 33.4345Z",
            fill: y
          }
        ),
        /* @__PURE__ */ C.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M21 1C21.4196 1 21.803 1.23888 21.9898 1.61665L27.8797 13.5319L41.0522 15.4378C41.4697 15.4982 41.8166 15.7923 41.9464 16.1957C42.0761 16.5992 41.9662 17.0417 41.6629 17.3365L32.1221 26.6085L34.3714 39.6998C34.443 40.1164 34.2732 40.5378 33.9333 40.7868C33.5934 41.0358 33.1424 41.0694 32.7698 40.8733L21.0134 34.6882L9.22929 40.8738C8.85665 41.0694 8.40588 41.0356 8.06628 40.7865C7.72668 40.5374 7.55703 40.1162 7.62858 39.6998L9.87792 26.6085L0.337096 17.3365C0.0338302 17.0417 -0.0761318 16.5992 0.0536519 16.1957C0.183436 15.7923 0.530334 15.4982 0.947835 15.4378L14.1202 13.5319L20.0102 1.61665C20.197 1.23888 20.5804 1 21 1ZM21 4.60788L15.8417 15.043C15.68 15.37 15.3689 15.5963 15.0093 15.6483L3.49484 17.3144L11.8348 25.4194C12.0978 25.675 12.218 26.0449 12.1557 26.4074L10.1873 37.8641L20.5024 32.4495C20.8232 32.2811 21.2057 32.2813 21.5264 32.45L31.8123 37.8615L29.8443 26.4074C29.782 26.0449 29.9022 25.675 30.1652 25.4194L38.5052 17.3144L26.9907 15.6483C26.6311 15.5963 26.32 15.37 26.1583 15.043L21 4.60788Z",
            fill: y
          }
        )
      ] }),
      /* @__PURE__ */ C.jsx("div", { style: U(S), children: /* @__PURE__ */ C.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: l, height: l, viewBox: "0 0 42 42", children: /* @__PURE__ */ C.jsx(
        "path",
        {
          d: "M21.0139 33.4345L8.71768 39.8889L11.0666 26.2182L1.10526 16.5376L14.8519 14.5486L21 2.11111L27.1481 14.5486L40.8947 16.5376L30.9334 26.2182L33.2822 39.8889L21.0139 33.4345Z",
          fill: w
        }
      ) }) })
    ] }, L);
  }) });
}
const wr = mr.createRoot(document.getElementById("root"));
wr.render(/* @__PURE__ */ C.jsx(Cr, {}));
