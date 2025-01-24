import Ae, { useState as cr, useEffect as dr } from "react";
var K = { exports: {} }, Y = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function vr() {
  if (De) return Y;
  De = 1;
  var F = Ae, w = Symbol.for("react.element"), T = Symbol.for("react.fragment"), R = Object.prototype.hasOwnProperty, S = F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, A = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(E, f, _) {
    var d, g = {}, y = null, x = null;
    _ !== void 0 && (y = "" + _), f.key !== void 0 && (y = "" + f.key), f.ref !== void 0 && (x = f.ref);
    for (d in f) R.call(f, d) && !A.hasOwnProperty(d) && (g[d] = f[d]);
    if (E && E.defaultProps) for (d in f = E.defaultProps, f) g[d] === void 0 && (g[d] = f[d]);
    return { $$typeof: w, type: E, key: y, ref: x, props: g, _owner: S.current };
  }
  return Y.Fragment = T, Y.jsx = O, Y.jsxs = O, Y;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function pr() {
  return ke || (ke = 1, process.env.NODE_ENV !== "production" && function() {
    var F = Ae, w = Symbol.for("react.element"), T = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), E = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), U = Symbol.iterator, m = "@@iterator";
    function G(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = U && e[U] || e[m];
      return typeof r == "function" ? r : null;
    }
    var C = F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Z("error", e, t);
      }
    }
    function Z(e, r, t) {
      {
        var n = C.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var X = !1, z = !1, j = !1, P = !1, H = !1, ue;
    ue = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === R || e === A || H || e === S || e === _ || e === d || P || e === x || X || z || j || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === g || e.$$typeof === O || e.$$typeof === E || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ue || e.getModuleId !== void 0));
    }
    function Ie(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function se(e) {
      return e.displayName || "Context";
    }
    function L(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case R:
          return "Fragment";
        case T:
          return "Portal";
        case A:
          return "Profiler";
        case S:
          return "StrictMode";
        case _:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var r = e;
            return se(r) + ".Consumer";
          case O:
            var t = e;
            return se(t._context) + ".Provider";
          case f:
            return Ie(e, e.render, "ForwardRef");
          case g:
            var n = e.displayName || null;
            return n !== null ? n : L(e.type) || "Memo";
          case y: {
            var o = e, u = o._payload, i = o._init;
            try {
              return L(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, M = 0, le, fe, ce, de, ve, pe, he;
    function ge() {
    }
    ge.__reactDisabledLog = !0;
    function Me() {
      {
        if (M === 0) {
          le = console.log, fe = console.info, ce = console.warn, de = console.error, ve = console.group, pe = console.groupCollapsed, he = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ge,
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
        M++;
      }
    }
    function We() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: le
            }),
            info: D({}, e, {
              value: fe
            }),
            warn: D({}, e, {
              value: ce
            }),
            error: D({}, e, {
              value: de
            }),
            group: D({}, e, {
              value: ve
            }),
            groupCollapsed: D({}, e, {
              value: pe
            }),
            groupEnd: D({}, e, {
              value: he
            })
          });
        }
        M < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = C.ReactCurrentDispatcher, ee;
    function N(e, r, t) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            ee = n && n[1] || "";
          }
        return `
` + ee + e;
      }
    }
    var re = !1, B;
    {
      var Ye = typeof WeakMap == "function" ? WeakMap : Map;
      B = new Ye();
    }
    function ye(e, r) {
      if (!e || re)
        return "";
      {
        var t = B.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      re = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = Q.current, Q.current = null, Me();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (p) {
              n = p;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (p) {
              n = p;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (p) {
            n = p;
          }
          e();
        }
      } catch (p) {
        if (p && n && typeof p.stack == "string") {
          for (var a = p.stack.split(`
`), v = n.stack.split(`
`), s = a.length - 1, l = v.length - 1; s >= 1 && l >= 0 && a[s] !== v[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (a[s] !== v[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || a[s] !== v[l]) {
                    var h = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, h), h;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        re = !1, Q.current = u, We(), Error.prepareStackTrace = o;
      }
      var I = e ? e.displayName || e.name : "", k = I ? N(I) : "";
      return typeof e == "function" && B.set(e, k), k;
    }
    function Ve(e, r, t) {
      return ye(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function J(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ye(e, Ue(e));
      if (typeof e == "string")
        return N(e);
      switch (e) {
        case _:
          return N("Suspense");
        case d:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Ve(e.render);
          case g:
            return J(e.type, r, t);
          case y: {
            var n = e, o = n._payload, u = n._init;
            try {
              return J(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, Re = {}, Ee = C.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    function Ne(e, r, t, n, o) {
      {
        var u = Function.call.bind(W);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var v = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (q(o), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), q(null)), a instanceof Error && !(a.message in Re) && (Re[a.message] = !0, q(o), c("Failed %s type: %s", t, a.message), q(null));
          }
      }
    }
    var Be = Array.isArray;
    function te(e) {
      return Be(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function qe(e) {
      try {
        return _e(e), !1;
      } catch {
        return !0;
      }
    }
    function _e(e) {
      return "" + e;
    }
    function be(e) {
      if (qe(e))
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), _e(e);
    }
    var me = C.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, Le;
    function Ge(e) {
      if (W.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      typeof e.ref == "string" && me.current;
    }
    function ze(e, r) {
      {
        var t = function() {
          Ce || (Ce = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function He(e, r) {
      {
        var t = function() {
          Le || (Le = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Qe = function(e, r, t, n, o, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: w,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
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
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function er(e, r, t, n, o) {
      {
        var u, i = {}, a = null, v = null;
        t !== void 0 && (be(t), a = "" + t), Ze(r) && (be(r.key), a = "" + r.key), Ge(r) && (v = r.ref, Xe(r, o));
        for (u in r)
          W.call(r, u) && !Ke.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            i[u] === void 0 && (i[u] = s[u]);
        }
        if (a || v) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && ze(i, l), v && He(i, l);
        }
        return Qe(e, a, v, o, n, me.current, i);
      }
    }
    var ne = C.ReactCurrentOwner, we = C.ReactDebugCurrentFrame;
    function $(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(t);
      } else
        we.setExtraStackFrame(null);
    }
    var ae;
    ae = !1;
    function ie(e) {
      return typeof e == "object" && e !== null && e.$$typeof === w;
    }
    function Te() {
      {
        if (ne.current) {
          var e = L(ne.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function rr(e) {
      return "";
    }
    var Se = {};
    function tr(e) {
      {
        var r = Te();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Oe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = tr(r);
        if (Se[t])
          return;
        Se[t] = !0;
        var n = "";
        e && e._owner && e._owner !== ne.current && (n = " It was passed a child from " + L(e._owner.type) + "."), $(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), $(null);
      }
    }
    function xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (te(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ie(n) && Oe(n, r);
          }
        else if (ie(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = G(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              ie(i.value) && Oe(i.value, r);
        }
      }
    }
    function nr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === g))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = L(r);
          Ne(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ae) {
          ae = !0;
          var o = L(r);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ar(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            $(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), $(null);
            break;
          }
        }
        e.ref !== null && ($(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), $(null));
      }
    }
    var je = {};
    function Pe(e, r, t, n, o, u) {
      {
        var i = $e(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = rr();
          v ? a += v : a += Te();
          var s;
          e === null ? s = "null" : te(e) ? s = "array" : e !== void 0 && e.$$typeof === w ? (s = "<" + (L(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = er(e, r, t, o, u);
        if (l == null)
          return l;
        if (i) {
          var h = r.children;
          if (h !== void 0)
            if (n)
              if (te(h)) {
                for (var I = 0; I < h.length; I++)
                  xe(h[I], e);
                Object.freeze && Object.freeze(h);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(h, e);
        }
        if (W.call(r, "key")) {
          var k = L(e), p = Object.keys(r).filter(function(fr) {
            return fr !== "key";
          }), oe = p.length > 0 ? "{key: someKey, " + p.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!je[k + oe]) {
            var lr = p.length > 0 ? "{" + p.join(": ..., ") + ": ...}" : "{}";
            c(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, oe, k, lr, k), je[k + oe] = !0;
          }
        }
        return e === R ? ar(l) : nr(l), l;
      }
    }
    function ir(e, r, t) {
      return Pe(e, r, t, !0);
    }
    function or(e, r, t) {
      return Pe(e, r, t, !1);
    }
    var ur = or, sr = ir;
    V.Fragment = R, V.jsx = ur, V.jsxs = sr;
  }()), V;
}
var Fe;
function hr() {
  return Fe || (Fe = 1, process.env.NODE_ENV === "production" ? K.exports = vr() : K.exports = pr()), K.exports;
}
var b = hr();
function yr({
  variant: F = "fill",
  maxStars: w = 5,
  currentScore: T = 0,
  size: R = 24,
  starEmptyColor: S = "#D2D2D2",
  emptyOutlineColor: A = "#D2D2D2",
  emptyOutlineFillColor: O = "transparent",
  starFillColor: E = "#FF501B",
  onClick: f,
  isClickable: _ = !0,
  containerStyle: d,
  starStyle: g
}) {
  const [y, x] = cr(T);
  dr(() => {
    x(T);
  }, [T]);
  const U = (j) => {
    _ && (x(j + 1), f == null || f(j + 1));
  }, m = R, G = Math.floor(R / 4), C = F === "fill" ? S : A, c = F === "fill" ? S : O, Z = {
    display: "inline-flex",
    gap: `${G}px`,
    height: `${R}px`,
    alignItems: "center"
  }, X = {
    position: "relative",
    width: m,
    height: m,
    cursor: _ ? "pointer" : "default"
  }, z = (j) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: `${j}%`,
    height: "100%",
    overflow: "hidden"
  });
  return /* @__PURE__ */ b.jsx("div", { style: { ...Z, ...d }, children: Array.from({ length: w }, (j, P) => {
    const H = y >= P + 1 ? 100 : y > P ? (y - P) * 100 : 0;
    return /* @__PURE__ */ b.jsxs("div", { style: { ...X, ...g }, onClick: () => _ && U(P), children: [
      /* @__PURE__ */ b.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: m, height: m, viewBox: "0 0 42 42", children: [
        /* @__PURE__ */ b.jsx(
          "path",
          {
            d: "M21.0139 33.4345L8.71768 39.8889L11.0666 26.2182L1.10526 16.5376L14.8519 14.5486L21 2.11111L27.1481 14.5486L40.8947 16.5376L30.9334 26.2182L33.2822 39.8889L21.0139 33.4345Z",
            fill: c
          }
        ),
        /* @__PURE__ */ b.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M21 1C21.4196 1 21.803 1.23888 21.9898 1.61665L27.8797 13.5319L41.0522 15.4378C41.4697 15.4982 41.8166 15.7923 41.9464 16.1957C42.0761 16.5992 41.9662 17.0417 41.6629 17.3365L32.1221 26.6085L34.3714 39.6998C34.443 40.1164 34.2732 40.5378 33.9333 40.7868C33.5934 41.0358 33.1424 41.0694 32.7698 40.8733L21.0134 34.6882L9.22929 40.8738C8.85665 41.0694 8.40588 41.0356 8.06628 40.7865C7.72668 40.5374 7.55703 40.1162 7.62858 39.6998L9.87792 26.6085L0.337096 17.3365C0.0338302 17.0417 -0.0761318 16.5992 0.0536519 16.1957C0.183436 15.7923 0.530334 15.4982 0.947835 15.4378L14.1202 13.5319L20.0102 1.61665C20.197 1.23888 20.5804 1 21 1ZM21 4.60788L15.8417 15.043C15.68 15.37 15.3689 15.5963 15.0093 15.6483L3.49484 17.3144L11.8348 25.4194C12.0978 25.675 12.218 26.0449 12.1557 26.4074L10.1873 37.8641L20.5024 32.4495C20.8232 32.2811 21.2057 32.2813 21.5264 32.45L31.8123 37.8615L29.8443 26.4074C29.782 26.0449 29.9022 25.675 30.1652 25.4194L38.5052 17.3144L26.9907 15.6483C26.6311 15.5963 26.32 15.37 26.1583 15.043L21 4.60788Z",
            fill: C
          }
        )
      ] }),
      /* @__PURE__ */ b.jsx("div", { style: z(H), children: /* @__PURE__ */ b.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: m, height: m, viewBox: "0 0 42 42", children: [
        /* @__PURE__ */ b.jsx(
          "path",
          {
            d: "M21.0139 33.4345L8.71768 39.8889L11.0666 26.2182L1.10526 16.5376L14.8519 14.5486L21 2.11111L27.1481 14.5486L40.8947 16.5376L30.9334 26.2182L33.2822 39.8889L21.0139 33.4345Z",
            fill: E
          }
        ),
        /* @__PURE__ */ b.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M21 1C21.4196 1 21.803 1.23888 21.9898 1.61665L27.8797 13.5319L41.0522 15.4378C41.4697 15.4982 41.8166 15.7923 41.9464 16.1957C42.0761 16.5992 41.9662 17.0417 41.6629 17.3365L32.1221 26.6085L34.3714 39.6998C34.443 40.1164 34.2732 40.5378 33.9333 40.7868C33.5934 41.0358 33.1424 41.0694 32.7698 40.8733L21.0134 34.6882L9.22929 40.8738C8.85665 41.0694 8.40588 41.0356 8.06628 40.7865C7.72668 40.5374 7.55703 40.1162 7.62858 39.6998L9.87792 26.6085L0.337096 17.3365C0.0338302 17.0417 -0.0761318 16.5992 0.0536519 16.1957C0.183436 15.7923 0.530334 15.4982 0.947835 15.4378L14.1202 13.5319L20.0102 1.61665C20.197 1.23888 20.5804 1 21 1ZM21 4.60788L15.8417 15.043C15.68 15.37 15.3689 15.5963 15.0093 15.6483L3.49484 17.3144L11.8348 25.4194C12.0978 25.675 12.218 26.0449 12.1557 26.4074L10.1873 37.8641L20.5024 32.4495C20.8232 32.2811 21.2057 32.2813 21.5264 32.45L31.8123 37.8615L29.8443 26.4074C29.782 26.0449 29.9022 25.675 30.1652 25.4194L38.5052 17.3144L26.9907 15.6483C26.6311 15.5963 26.32 15.37 26.1583 15.043L21 4.60788Z",
            fill: E
          }
        )
      ] }) })
    ] }, P);
  }) });
}
export {
  yr as StarRating,
  yr as default
};
