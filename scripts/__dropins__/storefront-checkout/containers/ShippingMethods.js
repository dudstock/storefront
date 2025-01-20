/*! Copyright 2024 Adobe
All Rights Reserved. */
import {jsx as n, jsxs as v, Fragment as T} from "@dropins/tools/preact-jsx-runtime.js";
import "../chunks/store-config.js";
import {s as k, e as S, c as W} from "../chunks/transform-store-config.js";
import "../chunks/ServerErrorSignal.js";
import {events as H} from "@dropins/tools/event-bus.js";
import {classes as x, Slot as z} from "@dropins/tools/lib.js";
import {s as B} from "../chunks/setShippingMethods.js";/* empty css                       */
import {
  IllustratedMessage as R,
  Icon as V,
  ProgressSpinner as A,
  RadioButton as O,
  Price as P,
  Skeleton as D,
  SkeletonRow as L
} from "@dropins/tools/components.js";
import *as p from "@dropins/tools/preact-compat.js";
import {useCallback as Z, useMemo as $, useEffect as q} from "@dropins/tools/preact-compat.js";
import {useText as F} from "@dropins/tools/i18n.js";
import {useState as N, useEffect as _} from "@dropins/tools/preact-hooks.js";
import {w as G} from "../chunks/withConditionalRendering.js";
import "@dropins/tools/signals.js";
import "@dropins/tools/fetch-graphql.js";
import "../chunks/errors.js";
import "../chunks/synchronizeCheckout.js";
import "../fragments.js";

const J = e => ({
  countryCode: e.country_id,
  postCode: e.postcode || "", ...e.region_id ? {regionId: Number(e.region_id)} : {...e.region ? {region: e.region} : {}}
}), K = e => ({
  carrierCode: e.carrier.code || "",
  methodCode: e.code || "",
  amount: e.amount,
  amountExclTax: e.amountExclTax,
  amountInclTax: e.amountInclTax
}), Q = e => p.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg", ...e
}, p.createElement("path", {
  vectorEffect: "non-scaling-stroke",
  d: "M2.47266 4.90002H15.1851V10.9645H21.2495L23 12.715V17.6124H20.073",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), p.createElement("path", {
  vectorEffect: "non-scaling-stroke",
  d: "M15.1758 5.87573H19.0019L21.0394 10.7636",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), p.createElement("path", {
  vectorEffect: "non-scaling-stroke",
  d: "M9.76151 16.7898C9.76151 18.0525 8.72845 19.076 7.46582 19.076C6.20318 19.076 5.17969 18.0429 5.17969 16.7803C5.17969 15.5176 6.20318 14.4941 7.46582 14.4941C8.72845 14.4941 9.75195 15.5176 9.76151 16.7803C9.76151 16.7803 9.76151 16.7803 9.76151 16.7898Z",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), p.createElement("path", {
  vectorEffect: "non-scaling-stroke",
  d: "M19.8726 16.7898C19.8726 18.062 18.8491 19.0855 17.5769 19.0855C16.3047 19.0855 15.2812 18.062 15.2812 16.7898C15.2812 15.5176 16.3047 14.4941 17.5769 14.4941C18.8491 14.4941 19.8726 15.5176 19.8726 16.7898Z",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), p.createElement("path", {
  vectorEffect: "non-scaling-stroke",
  d: "M8.08792 7.63574H1.69824",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), p.createElement("path", {
  vectorEffect: "non-scaling-stroke",
  d: "M7.11229 10.3619H1",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), p.createElement("path", {
  vectorEffect: "non-scaling-stroke",
  d: "M5.16084 13.0402H1.92773",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), p.createElement("path", {
  vectorEffect: "non-scaling-stroke",
  d: "M9.76172 16.7611H15.2809",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), p.createElement("path", {
  vectorEffect: "non-scaling-stroke",
  d: "M2.38672 16.7611H5.17025",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round",
  strokeLinejoin: "round"
})), U = ({
            className: e, isLoading: t = !1, onSelectionChange: s = () => {
  }, options: c, selection: l, ...u
          }) => {
  const i = F({Title: "Checkout.ShippingMethods.title", EmptyState: "Checkout.ShippingMethods.emptyState"});
  return c === void 0 ? n(X, {}) : v("div", {
    ...u,
    className: x(["checkout-shipping-methods", e]),
    children: [n("h3", {
      className: "checkout-shipping-methods__title",
      children: i.Title
    }), !t && c.length === 0 && n(R, {
      icon: n(V, {source: Q}),
      message: n("p", {children: i.EmptyState})
    }), v("div", {
      className: x(["checkout-shipping-methods__content"]),
      children: [t && n(A, {className: "checkout-shipping-methods__spinner"}), n("div", {
        className: x(["checkout-shipping-methods__options", ["checkout-shipping-methods__options--loading", t]]),
        children: c.map(o => n(O, {
          "data-testid": "shipping-method-radiobutton",
          "aria-busy": t,
          id: o.value,
          name: "shipping-method",
          className: "checkout-shipping-methods__method",
          label: v(T, {
            children: [n(P, {
              amount: o.amount.value,
              currency: o.amount.currency
            }), " ", n("span", {children: o.carrier.title})]
          }),
          description: o.title,
          value: o.value,
          checked: (l == null ? void 0 : l.value) === o.value,
          onChange: () => s(o)
        }, o.value))
      })]
    })]
  })
}, X = () => v(D, {
  "data-testid": "shipping-methods-skeleton",
  children: [n(L, {variant: "heading", size: "small"}), n(L, {variant: "empty", size: "small"}), n(L, {
    size: "medium",
    fullWidth: !0
  }), n(L, {size: "medium", fullWidth: !0})]
});

function Y() {
  var a;
  const [e, t] = N(), [s, c] = N();
  _(() => {
    H.on("checkout/estimate-shipping-address", ({address: E, isValid: M}) => {
      t({address: E, isValid: M})
    })
  }, []), _(() => {
    c(k.value)
  }, [k.value]), _(() => {
    S.value.pending ? c(void 0) : c(k.value)
  }, [S.value.pending]);
  const {country_id: l, region_id: u, region: i, postcode: o} = (e == null ? void 0 : e.address) || {}, r = !!e,
    g = W.value.data, C = !!((a = g == null ? void 0 : g.shippingAddresses) != null && a[0]),
    d = e == null ? void 0 : e.isValid;
  _(() => {
    C || d || !s || !r || H.emit("shipping/estimate", {
      address: J({
        country_id: l,
        region_id: u,
        region: i,
        postcode: o
      }), shippingMethod: K(s)
    })
  }, [s, l, u, i, o, r, C, d])
}

const j = (e, t) => e.code === t.code && e.carrier.code === t.carrier.code;

function ee({preSelectedMethod: e, onShippingMethodSelect: t}) {
  const s = W.value.data, c = W.value.pending, l = S.value.data, u = S.value.pending, i = k.value,
    o = s == null ? void 0 : s.shippingAddresses, r = o == null ? void 0 : o[0], g = !!r,
    C = r == null ? void 0 : r.availableShippingMethods, d = r == null ? void 0 : r.selectedShippingMethod, a = C || l,
    E = Z(m => {
      if (!g) return;
      const f = {method_code: m.code, carrier_code: m.carrier.code};
      B([f]).catch(b => {
        console.error("Setting shipping methods on cart failed:", b)
      })
    }, [g]), M = m => {
      k.value = m, t == null || t(m)
    }, h = $(() => {
      if (!(a != null && a.length)) return;
      const m = a[0], f = i || d;
      return f ? a.some(w => j(w, f)) ? f : m : a.find(y => y.carrier.code === (e == null ? void 0 : e.carrierCode) && y.code === (e == null ? void 0 : e.methodCode)) || m
    }, [i, d, a, e]);
  return q(() => {
    h && ((!i || !j(h, i)) && (k.value = h, t == null || t(h)), (!d || !j(h, d)) && E(h))
  }, [h, i, d, E, t]), {isLoading: c || u, options: a, selection: h, onSelectionChange: M}
}

const I = ({preSelectedMethod: e, shippingMethodsSlot: t, onShippingMethodSelect: s, initialData: c, ...l}) => {
  const {isLoading: u, options: i, selection: o, onSelectionChange: r} = ee({
    preSelectedMethod: e,
    onShippingMethodSelect: s
  });
  return Y(), v(T, {
    children: [n(U, {
      ...l,
      isLoading: u,
      onSelectionChange: r,
      options: i,
      selection: o
    }), !u && t && n(z, {name: "ShippingMethods", slot: t})]
  })
};
I.displayName = "ShippingMethodsContainer";
const Ce = G(I);
export {Ce as ShippingMethods, Ce as default};
