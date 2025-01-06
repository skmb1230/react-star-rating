import je, { useState as cr, useEffect as dr } from "react";
var B = { exports: {} }, $ = {};
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
function vr() {
  if (Se) return $;
  Se = 1;
  var D = je, _ = Symbol.for("react.element"), T = Symbol.for("react.fragment"), b = Object.prototype.hasOwnProperty, S = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function L(m, c, E) {
    var d, R = {}, p = null, F = null;
    E !== void 0 && (p = "" + E), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (F = c.ref);
    for (d in c) b.call(c, d) && !O.hasOwnProperty(d) && (R[d] = c[d]);
    if (m && m.defaultProps) for (d in c = m.defaultProps, c) R[d] === void 0 && (R[d] = c[d]);
    return { $$typeof: _, type: m, key: p, ref: F, props: R, _owner: S.current };
  }
  return $.Fragment = T, $.jsx = L, $.jsxs = L, $;
}
var M = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function pr() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var D = je, _ = Symbol.for("react.element"), T = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), L = Symbol.for("react.provider"), m = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), W = Symbol.iterator, J = "@@iterator";
    function q(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = W && e[W] || e[J];
      return typeof r == "function" ? r : null;
    }
    var g = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function s(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        G("error", e, t);
      }
    }
    function G(e, r, t) {
      {
        var n = g.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Pe = !1, ke = !1, De = !1, Fe = !1, Ae = !1, te;
    te = Symbol.for("react.module.reference");
    function Ie(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === b || e === O || Ae || e === S || e === E || e === d || Fe || e === F || Pe || ke || De || typeof e == "object" && e !== null && (e.$$typeof === p || e.$$typeof === R || e.$$typeof === L || e.$$typeof === m || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function w(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && s("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case b:
          return "Fragment";
        case T:
          return "Portal";
        case O:
          return "Profiler";
        case S:
          return "StrictMode";
        case E:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var r = e;
            return ne(r) + ".Consumer";
          case L:
            var t = e;
            return ne(t._context) + ".Provider";
          case c:
            return $e(e, e.render, "ForwardRef");
          case R:
            var n = e.displayName || null;
            return n !== null ? n : w(e.type) || "Memo";
          case p: {
            var o = e, u = o._payload, i = o._init;
            try {
              return w(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var x = Object.assign, A = 0, ae, ie, oe, ue, se, le, fe;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function Me() {
      {
        if (A === 0) {
          ae = console.log, ie = console.info, oe = console.warn, ue = console.error, se = console.group, le = console.groupCollapsed, fe = console.groupEnd;
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
        A++;
      }
    }
    function We() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: x({}, e, {
              value: ae
            }),
            info: x({}, e, {
              value: ie
            }),
            warn: x({}, e, {
              value: oe
            }),
            error: x({}, e, {
              value: ue
            }),
            group: x({}, e, {
              value: se
            }),
            groupCollapsed: x({}, e, {
              value: le
            }),
            groupEnd: x({}, e, {
              value: fe
            })
          });
        }
        A < 0 && s("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = g.ReactCurrentDispatcher, Z;
    function Y(e, r, t) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            Z = n && n[1] || "";
          }
        return `
` + Z + e;
      }
    }
    var X = !1, V;
    {
      var Ye = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Ye();
    }
    function de(e, r) {
      if (!e || X)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      X = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = K.current, K.current = null, Me();
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
            } catch (h) {
              n = h;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (h) {
              n = h;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (h) {
            n = h;
          }
          e();
        }
      } catch (h) {
        if (h && n && typeof h.stack == "string") {
          for (var a = h.stack.split(`
`), v = n.stack.split(`
`), l = a.length - 1, f = v.length - 1; l >= 1 && f >= 0 && a[l] !== v[f]; )
            f--;
          for (; l >= 1 && f >= 0; l--, f--)
            if (a[l] !== v[f]) {
              if (l !== 1 || f !== 1)
                do
                  if (l--, f--, f < 0 || a[l] !== v[f]) {
                    var y = `
` + a[l].replace(" at new ", " at ");
                    return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, y), y;
                  }
                while (l >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        X = !1, K.current = u, We(), Error.prepareStackTrace = o;
      }
      var k = e ? e.displayName || e.name : "", j = k ? Y(k) : "";
      return typeof e == "function" && V.set(e, j), j;
    }
    function Ve(e, r, t) {
      return de(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return de(e, Ue(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case E:
          return Y("Suspense");
        case d:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Ve(e.render);
          case R:
            return U(e.type, r, t);
          case p: {
            var n = e, o = n._payload, u = n._init;
            try {
              return U(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var I = Object.prototype.hasOwnProperty, ve = {}, pe = g.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    function Ne(e, r, t, n, o) {
      {
        var u = Function.call.bind(I);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var v = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              a = l;
            }
            a && !(a instanceof Error) && (N(o), s("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), N(null)), a instanceof Error && !(a.message in ve) && (ve[a.message] = !0, N(o), s("Failed %s type: %s", t, a.message), N(null));
          }
      }
    }
    var Be = Array.isArray;
    function z(e) {
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
        return he(e), !1;
      } catch {
        return !0;
      }
    }
    function he(e) {
      return "" + e;
    }
    function ge(e) {
      if (qe(e))
        return s("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), he(e);
    }
    var ye = g.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, Ee;
    function Ke(e) {
      if (I.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (I.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      typeof e.ref == "string" && ye.current;
    }
    function ze(e, r) {
      {
        var t = function() {
          Re || (Re = !0, s("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Ee || (Ee = !0, s("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
        $$typeof: _,
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
        t !== void 0 && (ge(t), a = "" + t), Ze(r) && (ge(r.key), a = "" + r.key), Ke(r) && (v = r.ref, Xe(r, o));
        for (u in r)
          I.call(r, u) && !Ge.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (u in l)
            i[u] === void 0 && (i[u] = l[u]);
        }
        if (a || v) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && ze(i, f), v && He(i, f);
        }
        return Qe(e, a, v, o, n, ye.current, i);
      }
    }
    var H = g.ReactCurrentOwner, _e = g.ReactDebugCurrentFrame;
    function P(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(t);
      } else
        _e.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === _;
    }
    function be() {
      {
        if (H.current) {
          var e = w(H.current.type);
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
    var me = {};
    function tr(e) {
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
        var t = tr(r);
        if (me[t])
          return;
        me[t] = !0;
        var n = "";
        e && e._owner && e._owner !== H.current && (n = " It was passed a child from " + w(e._owner.type) + "."), P(e), s('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), P(null);
      }
    }
    function Le(e, r) {
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
          var o = q(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              ee(i.value) && Ce(i.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = w(r);
          Ne(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var o = w(r);
          s("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && s("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ar(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            P(e), s("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), P(null);
            break;
          }
        }
        e.ref !== null && (P(e), s("Invalid attribute `ref` supplied to `React.Fragment`."), P(null));
      }
    }
    var we = {};
    function Te(e, r, t, n, o, u) {
      {
        var i = Ie(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = rr();
          v ? a += v : a += be();
          var l;
          e === null ? l = "null" : z(e) ? l = "array" : e !== void 0 && e.$$typeof === _ ? (l = "<" + (w(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, s("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, a);
        }
        var f = er(e, r, t, o, u);
        if (f == null)
          return f;
        if (i) {
          var y = r.children;
          if (y !== void 0)
            if (n)
              if (z(y)) {
                for (var k = 0; k < y.length; k++)
                  Le(y[k], e);
                Object.freeze && Object.freeze(y);
              } else
                s("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Le(y, e);
        }
        if (I.call(r, "key")) {
          var j = w(e), h = Object.keys(r).filter(function(fr) {
            return fr !== "key";
          }), re = h.length > 0 ? "{key: someKey, " + h.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!we[j + re]) {
            var lr = h.length > 0 ? "{" + h.join(": ..., ") + ": ...}" : "{}";
            s(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, re, j, lr, j), we[j + re] = !0;
          }
        }
        return e === b ? ar(f) : nr(f), f;
      }
    }
    function ir(e, r, t) {
      return Te(e, r, t, !0);
    }
    function or(e, r, t) {
      return Te(e, r, t, !1);
    }
    var ur = or, sr = ir;
    M.Fragment = b, M.jsx = ur, M.jsxs = sr;
  }()), M;
}
var xe;
function hr() {
  return xe || (xe = 1, process.env.NODE_ENV === "production" ? B.exports = vr() : B.exports = pr()), B.exports;
}
var C = hr();
function yr({
  maxStars: D = 5,
  currentScore: _ = 0,
  size: T = 24,
  starEmptyColor: b = "#D2D2D2",
  starFillColor: S = "#FF501B",
  onClick: O,
  isClickable: L = !0,
  containerStyle: m,
  starStyle: c
}) {
  const [E, d] = cr(_);
  dr(() => {
    d(_);
  }, [_]);
  const R = (g) => {
    O ? O(g + 1) : d(g + 1);
  }, p = T, W = {
    display: "inline-flex",
    gap: `${Math.floor(T / 4)}px`,
    height: `${T}px`,
    alignItems: "center"
  }, J = {
    position: "relative",
    width: p,
    height: p,
    cursor: L ? "pointer" : "default"
  }, q = (g) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: `${g}%`,
    height: "100%",
    overflow: "hidden"
  });
  return /* @__PURE__ */ C.jsx("div", { style: { ...W, ...m }, children: Array.from({ length: D }, (g, s) => {
    const G = E >= s + 1 ? 100 : E > s ? (E - s) * 100 : 0;
    return /* @__PURE__ */ C.jsxs("div", { style: { ...J, ...c }, onClick: () => L && R(s), children: [
      /* @__PURE__ */ C.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: p, height: p, viewBox: "0 0 42 42", children: [
        /* @__PURE__ */ C.jsx(
          "path",
          {
            d: "M21.0139 33.4345L8.71768 39.8889L11.0666 26.2182L1.10526 16.5376L14.8519 14.5486L21 2.11111L27.1481 14.5486L40.8947 16.5376L30.9334 26.2182L33.2822 39.8889L21.0139 33.4345Z",
            fill: b
          }
        ),
        /* @__PURE__ */ C.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M21 1C21.4196 1 21.803 1.23888 21.9898 1.61665L27.8797 13.5319L41.0522 15.4378C41.4697 15.4982 41.8166 15.7923 41.9464 16.1957C42.0761 16.5992 41.9662 17.0417 41.6629 17.3365L32.1221 26.6085L34.3714 39.6998C34.443 40.1164 34.2732 40.5378 33.9333 40.7868C33.5934 41.0358 33.1424 41.0694 32.7698 40.8733L21.0134 34.6882L9.22929 40.8738C8.85665 41.0694 8.40588 41.0356 8.06628 40.7865C7.72668 40.5374 7.55703 40.1162 7.62858 39.6998L9.87792 26.6085L0.337096 17.3365C0.0338302 17.0417 -0.0761318 16.5992 0.0536519 16.1957C0.183436 15.7923 0.530334 15.4982 0.947835 15.4378L14.1202 13.5319L20.0102 1.61665C20.197 1.23888 20.5804 1 21 1ZM21 4.60788L15.8417 15.043C15.68 15.37 15.3689 15.5963 15.0093 15.6483L3.49484 17.3144L11.8348 25.4194C12.0978 25.675 12.218 26.0449 12.1557 26.4074L10.1873 37.8641L20.5024 32.4495C20.8232 32.2811 21.2057 32.2813 21.5264 32.45L31.8123 37.8615L29.8443 26.4074C29.782 26.0449 29.9022 25.675 30.1652 25.4194L38.5052 17.3144L26.9907 15.6483C26.6311 15.5963 26.32 15.37 26.1583 15.043L21 4.60788Z",
            fill: b
          }
        )
      ] }),
      /* @__PURE__ */ C.jsx("div", { style: q(G), children: /* @__PURE__ */ C.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: p, height: p, viewBox: "0 0 42 42", children: [
        /* @__PURE__ */ C.jsx(
          "path",
          {
            d: "M21.0139 33.4345L8.71768 39.8889L11.0666 26.2182L1.10526 16.5376L14.8519 14.5486L21 2.11111L27.1481 14.5486L40.8947 16.5376L30.9334 26.2182L33.2822 39.8889L21.0139 33.4345Z",
            fill: S
          }
        ),
        /* @__PURE__ */ C.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M21 1C21.4196 1 21.803 1.23888 21.9898 1.61665L27.8797 13.5319L41.0522 15.4378C41.4697 15.4982 41.8166 15.7923 41.9464 16.1957C42.0761 16.5992 41.9662 17.0417 41.6629 17.3365L32.1221 26.6085L34.3714 39.6998C34.443 40.1164 34.2732 40.5378 33.9333 40.7868C33.5934 41.0358 33.1424 41.0694 32.7698 40.8733L21.0134 34.6882L9.22929 40.8738C8.85665 41.0694 8.40588 41.0356 8.06628 40.7865C7.72668 40.5374 7.55703 40.1162 7.62858 39.6998L9.87792 26.6085L0.337096 17.3365C0.0338302 17.0417 -0.0761318 16.5992 0.0536519 16.1957C0.183436 15.7923 0.530334 15.4982 0.947835 15.4378L14.1202 13.5319L20.0102 1.61665C20.197 1.23888 20.5804 1 21 1ZM21 4.60788L15.8417 15.043C15.68 15.37 15.3689 15.5963 15.0093 15.6483L3.49484 17.3144L11.8348 25.4194C12.0978 25.675 12.218 26.0449 12.1557 26.4074L10.1873 37.8641L20.5024 32.4495C20.8232 32.2811 21.2057 32.2813 21.5264 32.45L31.8123 37.8615L29.8443 26.4074C29.782 26.0449 29.9022 25.675 30.1652 25.4194L38.5052 17.3144L26.9907 15.6483C26.6311 15.5963 26.32 15.37 26.1583 15.043L21 4.60788Z",
            fill: S
          }
        )
      ] }) })
    ] }, s);
  }) });
}
export {
  yr as StarRating,
  yr as default
};
