import Ie, { useId as V, useState as pr } from "react";
var ie = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function br() {
  if (Pe) return M;
  Pe = 1;
  var x = Ie, g = Symbol.for("react.element"), R = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, h = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, k = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(p, s, m) {
    var b, v = {}, O = null, D = null;
    m !== void 0 && (O = "" + m), s.key !== void 0 && (O = "" + s.key), s.ref !== void 0 && (D = s.ref);
    for (b in s) f.call(s, b) && !k.hasOwnProperty(b) && (v[b] = s[b]);
    if (p && p.defaultProps) for (b in s = p.defaultProps, s) v[b] === void 0 && (v[b] = s[b]);
    return { $$typeof: g, type: p, key: O, ref: D, props: v, _owner: h.current };
  }
  return M.Fragment = R, M.jsx = _, M.jsxs = _, M;
}
var q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function gr() {
  return De || (De = 1, process.env.NODE_ENV !== "production" && function() {
    var x = Ie, g = Symbol.for("react.element"), R = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), p = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), w = Symbol.iterator, U = "@@iterator";
    function J(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = w && e[w] || e[U];
      return typeof r == "function" ? r : null;
    }
    var N = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        $e("error", e, t);
      }
    }
    function $e(e, r, t) {
      {
        var n = N.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var l = t.map(function(i) {
          return String(i);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var Fe = !1, Ne = !1, Ae = !1, Le = !1, We = !1, oe;
    oe = Symbol.for("react.module.reference");
    function Ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === f || e === k || We || e === h || e === m || e === b || Le || e === D || Fe || Ne || Ae || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === v || e.$$typeof === _ || e.$$typeof === p || e.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === oe || e.getModuleId !== void 0));
    }
    function Me(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function se(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case f:
          return "Fragment";
        case R:
          return "Portal";
        case k:
          return "Profiler";
        case h:
          return "StrictMode";
        case m:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            var r = e;
            return se(r) + ".Consumer";
          case _:
            var t = e;
            return se(t._context) + ".Provider";
          case s:
            return Me(e, e.render, "ForwardRef");
          case v:
            var n = e.displayName || null;
            return n !== null ? n : S(e.type) || "Memo";
          case O: {
            var o = e, l = o._payload, i = o._init;
            try {
              return S(i(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, W = 0, le, ue, ce, fe, de, ve, _e;
    function pe() {
    }
    pe.__reactDisabledLog = !0;
    function qe() {
      {
        if (W === 0) {
          le = console.log, ue = console.info, ce = console.warn, fe = console.error, de = console.group, ve = console.groupCollapsed, _e = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: pe,
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
    function Ve() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, e, {
              value: le
            }),
            info: I({}, e, {
              value: ue
            }),
            warn: I({}, e, {
              value: ce
            }),
            error: I({}, e, {
              value: fe
            }),
            group: I({}, e, {
              value: de
            }),
            groupCollapsed: I({}, e, {
              value: ve
            }),
            groupEnd: I({}, e, {
              value: _e
            })
          });
        }
        W < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = N.ReactCurrentDispatcher, H;
    function B(e, r, t) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            H = n && n[1] || "";
          }
        return `
` + H + e;
      }
    }
    var Z = !1, z;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      z = new Ue();
    }
    function be(e, r) {
      if (!e || Z)
        return "";
      {
        var t = z.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Z = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = X.current, X.current = null, qe();
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
            } catch (j) {
              n = j;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (j) {
              n = j;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (j) {
            n = j;
          }
          e();
        }
      } catch (j) {
        if (j && n && typeof j.stack == "string") {
          for (var a = j.stack.split(`
`), E = n.stack.split(`
`), c = a.length - 1, d = E.length - 1; c >= 1 && d >= 0 && a[c] !== E[d]; )
            d--;
          for (; c >= 1 && d >= 0; c--, d--)
            if (a[c] !== E[d]) {
              if (c !== 1 || d !== 1)
                do
                  if (c--, d--, d < 0 || a[c] !== E[d]) {
                    var C = `
` + a[c].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && z.set(e, C), C;
                  }
                while (c >= 1 && d >= 0);
              break;
            }
        }
      } finally {
        Z = !1, X.current = l, Ve(), Error.prepareStackTrace = o;
      }
      var L = e ? e.displayName || e.name : "", $ = L ? B(L) : "";
      return typeof e == "function" && z.set(e, $), $;
    }
    function Be(e, r, t) {
      return be(e, !1);
    }
    function ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function G(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return be(e, ze(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case m:
          return B("Suspense");
        case b:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            return Be(e.render);
          case v:
            return G(e.type, r, t);
          case O: {
            var n = e, o = n._payload, l = n._init;
            try {
              return G(l(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, ge = {}, he = N.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    function Ge(e, r, t, n, o) {
      {
        var l = Function.call.bind(Y);
        for (var i in e)
          if (l(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var E = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              a = c;
            }
            a && !(a instanceof Error) && (K(o), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), K(null)), a instanceof Error && !(a.message in ge) && (ge[a.message] = !0, K(o), y("Failed %s type: %s", t, a.message), K(null));
          }
      }
    }
    var Ke = Array.isArray;
    function Q(e) {
      return Ke(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Xe(e) {
      try {
        return me(e), !1;
      } catch {
        return !0;
      }
    }
    function me(e) {
      return "" + e;
    }
    function ye(e) {
      if (Xe(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), me(e);
    }
    var Ee = N.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, ke;
    function Ze(e) {
      if (Y.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (Y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      typeof e.ref == "string" && Ee.current;
    }
    function rr(e, r) {
      {
        var t = function() {
          Re || (Re = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          ke || (ke = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, t, n, o, l, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: g,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: l
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
    function ar(e, r, t, n, o) {
      {
        var l, i = {}, a = null, E = null;
        t !== void 0 && (ye(t), a = "" + t), Qe(r) && (ye(r.key), a = "" + r.key), Ze(r) && (E = r.ref, er(r, o));
        for (l in r)
          Y.call(r, l) && !He.hasOwnProperty(l) && (i[l] = r[l]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (l in c)
            i[l] === void 0 && (i[l] = c[l]);
        }
        if (a || E) {
          var d = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && rr(i, d), E && tr(i, d);
        }
        return nr(e, a, E, o, n, Ee.current, i);
      }
    }
    var ee = N.ReactCurrentOwner, je = N.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        je.setExtraStackFrame(t);
      } else
        je.setExtraStackFrame(null);
    }
    var re;
    re = !1;
    function te(e) {
      return typeof e == "object" && e !== null && e.$$typeof === g;
    }
    function xe() {
      {
        if (ee.current) {
          var e = S(ee.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ir(e) {
      return "";
    }
    var Te = {};
    function or(e) {
      {
        var r = xe();
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
        var t = or(r);
        if (Te[t])
          return;
        Te[t] = !0;
        var n = "";
        e && e._owner && e._owner !== ee.current && (n = " It was passed a child from " + S(e._owner.type) + "."), A(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), A(null);
      }
    }
    function Oe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            te(n) && Ce(n, r);
          }
        else if (te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = J(e);
          if (typeof o == "function" && o !== e.entries)
            for (var l = o.call(e), i; !(i = l.next()).done; )
              te(i.value) && Ce(i.value, r);
        }
      }
    }
    function sr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === v))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = S(r);
          Ge(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !re) {
          re = !0;
          var o = S(r);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            A(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    var we = {};
    function Se(e, r, t, n, o, l) {
      {
        var i = Ye(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = ir();
          E ? a += E : a += xe();
          var c;
          e === null ? c = "null" : Q(e) ? c = "array" : e !== void 0 && e.$$typeof === g ? (c = "<" + (S(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, a);
        }
        var d = ar(e, r, t, o, l);
        if (d == null)
          return d;
        if (i) {
          var C = r.children;
          if (C !== void 0)
            if (n)
              if (Q(C)) {
                for (var L = 0; L < C.length; L++)
                  Oe(C[L], e);
                Object.freeze && Object.freeze(C);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Oe(C, e);
        }
        if (Y.call(r, "key")) {
          var $ = S(e), j = Object.keys(r).filter(function(_r) {
            return _r !== "key";
          }), ne = j.length > 0 ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!we[$ + ne]) {
            var vr = j.length > 0 ? "{" + j.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ne, $, vr, $), we[$ + ne] = !0;
          }
        }
        return e === f ? lr(d) : sr(d), d;
      }
    }
    function ur(e, r, t) {
      return Se(e, r, t, !0);
    }
    function cr(e, r, t) {
      return Se(e, r, t, !1);
    }
    var fr = cr, dr = ur;
    q.Fragment = f, q.jsx = fr, q.jsxs = dr;
  }()), q;
}
process.env.NODE_ENV === "production" ? ie.exports = br() : ie.exports = gr();
var u = ie.exports;
const hr = "_button_dqbt6_2", ae = {
  button: hr,
  "size-sm": "_size-sm_dqbt6_24",
  "size-md": "_size-md_dqbt6_29",
  "size-lg": "_size-lg_dqbt6_34",
  "variant-primary": "_variant-primary_dqbt6_40",
  "variant-secondary": "_variant-secondary_dqbt6_55",
  "variant-danger": "_variant-danger_dqbt6_66",
  "variant-warning": "_variant-warning_dqbt6_75"
}, Gr = ({
  children: x,
  variant: g = "primary",
  size: R = "md",
  disabled: f = !1,
  href: h,
  type: k = "button",
  onClick: _,
  className: p = "",
  ariaLabel: s
}) => {
  const m = [
    ae.button,
    ae[`variant-${g}`],
    ae[`size-${R}`],
    p
  ].filter(Boolean).join(" "), b = (v) => {
    f || (v.key === " " || v.key === "Enter") && (v.preventDefault(), _ && _(v));
  };
  return h ? /* @__PURE__ */ u.jsx(
    "a",
    {
      href: f ? void 0 : h,
      className: m,
      onClick: f ? (v) => v.preventDefault() : _,
      onKeyDown: b,
      "aria-disabled": f ? "true" : void 0,
      "aria-label": s,
      tabIndex: f ? -1 : 0,
      role: "button",
      children: x
    }
  ) : /* @__PURE__ */ u.jsx(
    "button",
    {
      type: k,
      className: m,
      disabled: f,
      onClick: _,
      "aria-disabled": f ? "true" : void 0,
      "aria-label": s,
      children: x
    }
  );
}, mr = "_card_ftk3p_2", yr = "_shadow_ftk3p_14", Er = "_border_ftk3p_23", Rr = "_header_ftk3p_27", kr = "_title_ftk3p_31", jr = "_subtitle_ftk3p_38", xr = "_body_ftk3p_44", Tr = "_actions_ftk3p_51", P = {
  card: mr,
  shadow: yr,
  border: Er,
  header: Rr,
  title: kr,
  subtitle: jr,
  body: xr,
  actions: Tr
}, Kr = ({
  children: x,
  title: g,
  subtitle: R,
  tag: f = "article",
  border: h = !1,
  actions: k,
  className: _ = ""
}) => {
  const p = f, s = V(), m = [
    P.card,
    h ? P.border : P.shadow,
    _
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ u.jsxs(
    p,
    {
      className: m,
      "aria-labelledby": g ? s : void 0,
      children: [
        (g || R) && /* @__PURE__ */ u.jsxs("div", { className: P.header, children: [
          g && /* @__PURE__ */ u.jsx("h3", { id: s, className: P.title, children: g }),
          R && /* @__PURE__ */ u.jsx("p", { className: P.subtitle, children: R })
        ] }),
        /* @__PURE__ */ u.jsx("div", { className: P.body, children: x }),
        k && /* @__PURE__ */ u.jsx("div", { className: P.actions, children: k })
      ]
    }
  );
}, Cr = "_navbar_10kav_2", Or = "_container_10kav_11", wr = "_brandContainer_10kav_20", Sr = "_toggler_10kav_30", Pr = "_togglerIcon_10kav_45", Dr = "_open_10kav_72", Ir = "_navLinks_10kav_84", $r = "_list_10kav_90", Fr = "_link_10kav_99", Nr = "_activeLink_10kav_117", Ar = "_rightContent_10kav_122", Lr = "_openLinks_10kav_145", T = {
  navbar: Cr,
  container: Or,
  brandContainer: wr,
  toggler: Sr,
  togglerIcon: Pr,
  open: Dr,
  navLinks: Ir,
  list: $r,
  link: Fr,
  activeLink: Nr,
  rightContent: Ar,
  openLinks: Lr
}, Jr = ({
  brand: x,
  links: g,
  rightContent: R,
  ariaLabel: f = "Main Navigation"
}) => {
  const [h, k] = pr(!1), _ = V(), p = () => {
    k(!h);
  };
  return /* @__PURE__ */ u.jsx("nav", { className: T.navbar, "aria-label": f, children: /* @__PURE__ */ u.jsxs("div", { className: T.container, children: [
    /* @__PURE__ */ u.jsx("div", { className: T.brandContainer, children: x }),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        className: T.toggler,
        type: "button",
        "aria-expanded": h,
        "aria-controls": _,
        "aria-label": "Toggle navigation menu",
        onClick: p,
        children: /* @__PURE__ */ u.jsx("span", { className: `${T.togglerIcon} ${h ? T.open : ""}` })
      }
    ),
    /* @__PURE__ */ u.jsxs(
      "div",
      {
        id: _,
        className: `${T.navLinks} ${h ? T.openLinks : ""}`,
        children: [
          /* @__PURE__ */ u.jsx("ul", { className: T.list, children: g.map((s, m) => /* @__PURE__ */ u.jsx("li", { className: T.item, children: /* @__PURE__ */ u.jsx(
            "a",
            {
              href: s.href,
              className: `${T.link} ${s.active ? T.activeLink : ""}`,
              "aria-current": s.active ? "page" : void 0,
              children: s.label
            }
          ) }, m)) }),
          R && /* @__PURE__ */ u.jsx("div", { className: T.rightContent, children: R })
        ]
      }
    )
  ] }) });
}, Wr = "_fieldGroup_sdnas_2", Yr = "_label_sdnas_11", Mr = "_requiredAsterisk_sdnas_17", qr = "_input_sdnas_21", Vr = "_inputError_sdnas_40", Ur = "_errorMsg_sdnas_49", Br = "_helperText_sdnas_55", F = {
  fieldGroup: Wr,
  label: Yr,
  requiredAsterisk: Mr,
  input: qr,
  inputError: Vr,
  errorMsg: Ur,
  helperText: Br
}, Xr = ({
  label: x,
  type: g = "text",
  name: R,
  placeholder: f = "",
  value: h,
  error: k,
  helperText: _,
  required: p = !1,
  autocomplete: s = "off",
  onChange: m,
  className: b = ""
}) => {
  const v = V(), O = V(), D = V(), w = !!k, U = !!_, J = [
    w ? O : "",
    U ? D : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ u.jsxs("div", { className: `${F.fieldGroup} ${b}`, children: [
    x && /* @__PURE__ */ u.jsxs("label", { htmlFor: v, className: F.label, children: [
      x,
      p && /* @__PURE__ */ u.jsx("span", { className: F.requiredAsterisk, "aria-hidden": "true", children: " *" })
    ] }),
    /* @__PURE__ */ u.jsx(
      "input",
      {
        id: v,
        type: g,
        name: R,
        placeholder: f,
        value: h,
        required: p,
        "aria-required": p ? "true" : void 0,
        autoComplete: s,
        onChange: m,
        className: `${F.input} ${w ? F.inputError : ""}`,
        "aria-invalid": w ? "true" : "false",
        "aria-describedby": J || void 0
      }
    ),
    w && /* @__PURE__ */ u.jsx("span", { id: O, className: F.errorMsg, role: "alert", children: k }),
    !w && U && /* @__PURE__ */ u.jsx("span", { id: D, className: F.helperText, children: _ })
  ] });
};
export {
  Gr as Button,
  Kr as Card,
  Xr as FormField,
  Jr as Navbar
};
//# sourceMappingURL=index.js.map
