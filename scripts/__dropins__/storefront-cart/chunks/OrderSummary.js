/*! Copyright 2025 Adobe
All Rights Reserved. */
import {jsxs as E, jsx as r, Fragment as We} from "@dropins/tools/preact-jsx-runtime.js";
import *as Ie from "@dropins/tools/preact-compat.js";
import {useState as M, useEffect as ae, useCallback as Fe} from "@dropins/tools/preact-compat.js";
import {VComponent as D, classes as ke, Slot as we} from "@dropins/tools/lib.js";
import {events as Ee} from "@dropins/tools/event-bus.js";
import {g as Ge} from "./persisted-data.js";
import {s as Oe} from "./resetCart.js";
import {g as ze} from "./getEstimatedTotals.js";
import {p as Ve} from "./acdl.js";
import {
  Accordion as Ne,
  AccordionSection as Be,
  ProgressSpinner as Ze,
  Divider as je,
  Price as l,
  Icon as Ue,
  Button as Qe
} from "@dropins/tools/components.js";/* empty css                 */
import {O as v} from "./OrderSummaryLine.js";
import {S as Le} from "./ChevronDown.js";
import {useText as Ae} from "@dropins/tools/i18n.js";
import {S as Xe} from "./Coupon.js";

const De = O => Ie.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg", ...O
}, Ie.createElement("path", {
  d: "M7.74512 14.132L12.0001 9.87701L16.2551 14.132",
  stroke: "#2B2B2B",
  strokeWidth: 1.5,
  strokeLinecap: "square",
  strokeLinejoin: "round"
})), $e = ({
             className: O,
             children: A,
             variant: P = "primary",
             heading: s,
             loading: N = !0,
             subTotal: g,
             shipping: m,
             discounts: _,
             taxTotal: x,
             taxesApplied: e,
             total: p,
             primaryAction: B,
             coupons: o,
             totalSaved: y,
             updateLineItems: I = T => T,
             ...t
           }) => {
  const [T, L] = M(!1), i = Ae({
    checkout: "Cart.PriceSummary.checkout",
    discountedPrice: "Cart.CartItem.discountedPrice",
    download: "Cart.CartItem.download",
    heading: "Cart.Cart.heading",
    message: "Cart.CartItem.message",
    regularPrice: "Cart.CartItem.regularPrice",
    recipient: "Cart.CartItem.recipient",
    sender: "Cart.CartItem.sender",
    file: "Cart.CartItem.file",
    files: "Cart.CartItem.files",
    orderSummary: "Cart.PriceSummary.orderSummary",
    taxesBreakdownTitle: "Cart.PriceSummary.taxes.breakdown",
    taxTotal: "Cart.PriceSummary.taxes.total",
    taxEstimated: "Cart.PriceSummary.taxes.estimated",
    taxTotalOnly: "Cart.PriceSummary.taxes.totalOnly",
    showTaxBreakdown: "Cart.PriceSummary.taxes.showBreakdown",
    hideTaxBreakdown: "Cart.PriceSummary.taxes.hideBreakdown",
    taxToBeDetermined: "Cart.PriceSummary.taxToBeDetermined",
    subtotalLabel: "Cart.PriceSummary.subTotal.label",
    subtotalWithTaxes: "Cart.PriceSummary.subTotal.withTaxes",
    subtotalWithoutTaxes: "Cart.PriceSummary.subTotal.withoutTaxes",
    totalEstimated: "Cart.PriceSummary.total.estimated",
    totalLabel: "Cart.PriceSummary.total.label",
    totalWithoutTax: "Cart.PriceSummary.total.withoutTax",
    totalSaved: "Cart.PriceSummary.total.saved",
    shippingLabel: "Cart.PriceSummary.shipping.label",
    zipPlaceholder: "Cart.PriceSummary.shipping.zipPlaceholder",
    editZipAction: "Cart.PriceSummary.shipping.editZipAction",
    shippingWithTaxes: "Cart.PriceSummary.shipping.withTaxes",
    shippingWithoutTaxes: "Cart.PriceSummary.shipping.withoutTaxes",
    shippingEstimated: "Cart.PriceSummary.shipping.estimated",
    shippingEstimatedByState: "Cart.PriceSummary.shipping.alternateField.state",
    shippingEstimatedByZip: "Cart.PriceSummary.shipping.alternateField.zip",
    destinationLinkAriaLabel: "Cart.PriceSummary.shipping.destinationLinkAriaLabel",
    applyButton: "Cart.PriceSummary.estimatedShippingForm.apply.label",
    countryField: "Cart.PriceSummary.estimatedShippingForm.country.placeholder",
    freeShipping: "Cart.PriceSummary.freeShipping",
    stateField: "Cart.PriceSummary.estimatedShippingForm.state.placeholder",
    zipField: "Cart.PriceSummary.estimatedShippingForm.zip.placeholder"
  }), k = g && E(v, {
    label: i.subtotalLabel,
    price: g.price,
    classSuffixes: ["subTotal"],
    children: [g.taxIncluded && r("div", {
      "data-testid": "sub-total-tax-caption",
      className: "cart-order-summary__caption",
      children: r("span", {children: i.subtotalWithTaxes})
    }), g.taxExcluded ? r("div", {
      "data-testid": "sub-total-tax-caption-excluded",
      className: "cart-order-summary__caption",
      children: E("span", {children: [g.priceExcludingTax, " ", i.subtotalWithoutTaxes]})
    }) : void 0]
  }), w = _ && _.length > 0 && r(We, {
    children: _.map(n => E(v, {
      label: n.label,
      price: n.price,
      classSuffixes: ["discount"],
      children: [n.coupon && r(D, {
        node: n.coupon,
        className: "cart-order-summary__coupon__code"
      }), n.caption && r(D, {node: n.caption, className: "cart-order-summary__caption"})]
    }))
  }), S = e && e.length > 0 ? r(Ne, {
    "data-testid": "tax-breakdown",
    className: "cart-order-summary__taxes",
    iconOpen: Le,
    iconClose: De,
    children: E(Be, {
      title: i.taxesBreakdownTitle,
      secondaryText: !T && x ? r(D, {node: x.price, className: "cart-order-summary__price"}) : void 0,
      renderContentWhenClosed: !1,
      onStateChange: L,
      children: [r("div", {
        className: "cart-order-summary__appliedTaxes",
        children: e.map(n => r(v, {
          label: n.label,
          price: n.price,
          classSuffixes: ["taxEntry"],
          labelClassSuffix: "muted"
        }))
      }), x && r(v, {label: i.taxTotal, price: x.price, classSuffixes: ["taxTotal"], labelClassSuffix: "muted"})]
    })
  }) : x && r(v, {
    label: x.estimated ? i.taxEstimated : i.taxTotalOnly,
    price: x.price,
    classSuffixes: ["taxTotal"],
    testId: "tax-total-only"
  }), d = [{key: "subTotalContent", sortOrder: 200, content: k}, ...m ? [{
    key: "shippingContent",
    sortOrder: 300,
    content: r(D, {node: m, className: "cart-order-summary__shipping"})
  }] : [], {key: "discountsContent", sortOrder: 400, content: w}, {
    key: "taxContent",
    sortOrder: 500,
    content: S
  }, ...p ? [{
    key: "taxContent",
    sortOrder: 600,
    content: r(v, {
      label: p.estimated ? i.totalEstimated : i.totalLabel,
      price: p.price,
      classSuffixes: ["total", "total--padded"],
      testId: "total-content",
      labelClassSuffix: "bold"
    })
  }] : [], ...p && p.priceWithoutTax ? [{
    key: "totalWithoutTaxContent",
    sortOrder: 700,
    content: r(v, {
      label: i.totalWithoutTax,
      price: p.priceWithoutTax,
      classSuffixes: ["totalWithoutTax"],
      testId: "total-without-tax",
      labelClassSuffix: "muted"
    })
  }] : [], ...y ? [{
    key: "totalSavedContent",
    sortOrder: 800,
    content: r(v, {
      label: i.totalSaved,
      price: y,
      classSuffixes: ["saved"],
      testId: "total-saved",
      labelClassSuffix: "muted"
    })
  }] : [], ...B ? [{
    key: "primaryActionContent",
    sortOrder: 900,
    content: r("div", {className: ke(["cart-order-summary__entry", "cart-order-summary__primaryAction"]), children: B})
  }] : [], ...o ? [{
    key: "couponsContent",
    sortOrder: 100,
    content: r(D, {node: o, className: "cart-order-summary__coupons"})
  }] : []], h = I(d).sort((n, C) => n.sortOrder - C.sortOrder);
  return E("div", {
    ...t,
    className: ke(["cart-order-summary", ["cart-order-summary--loading", N], [`cart-order-summary__${P}`, P], O]),
    children: [N && r(Ze, {className: "cart-order-summary__spinner"}), E("div", {
      className: "cart-order-summary__heading",
      children: [s && r(D, {node: s, className: "cart-order-summary__heading-text"}), r(je, {
        variant: "primary",
        className: "cart-order-summary__divider-primary"
      })]
    }), r("div", {
      className: "cart-order-summary__content",
      children: h.map(n => Array.isArray(n.content) ? r(Ne, {
        className: n.className,
        actionIconPosition: "right",
        iconOpen: Le,
        iconClose: De,
        children: r(Be, {
          defaultOpen: !1,
          title: n.title,
          renderContentWhenClosed: !1,
          children: n.content.map(C => C.content)
        })
      }) : n.content)
    })]
  })
}, qe = () => {
  const [O, A] = M(!1), [P, s] = M();
  return {
    handleEstimateTotals: (g, m) => {
      A(!0);
      const {shippingCountry: _, shippingState: x = "", shippingStateId: e, shippingZip: p = ""} = g, B = {
        countryCode: _,
        postcode: p,
        region: {region: x, id: e},
        shipping_method: {
          carrier_code: (m == null ? void 0 : m.carrier_code) || "",
          method_code: (m == null ? void 0 : m.method_code) || ""
        }
      };
      ze(B).then(o => {
        var y, I, t, T, L, i, k, w, S, d, h, n, C, ee, W, F, G, z, V, Z;
        o && s({
          estimatedTaxTotal: {
            amount: (y = o.totalTax) == null ? void 0 : y.value,
            currency: (I = o.totalTax) == null ? void 0 : I.currency
          },
          estimatedSubTotal: {
            excludingTax: {
              amount: (T = (t = o.subtotal) == null ? void 0 : t.excludingTax) == null ? void 0 : T.value,
              currency: (i = (L = o.subtotal) == null ? void 0 : L.excludingTax) == null ? void 0 : i.currency
            },
            includingTax: {
              amount: (w = (k = o.subtotal) == null ? void 0 : k.includingTax) == null ? void 0 : w.value,
              currency: (d = (S = o.subtotal) == null ? void 0 : S.includingTax) == null ? void 0 : d.currency
            },
            includingDiscountOnly: {
              amount: (n = (h = o.subtotal) == null ? void 0 : h.includingDiscountOnly) == null ? void 0 : n.value,
              currency: (ee = (C = o.subtotal) == null ? void 0 : C.includingDiscountOnly) == null ? void 0 : ee.currency
            }
          },
          estimatedGrandTotalPrice: {
            includingTax: {
              amount: (W = o.total) == null ? void 0 : W.includingTax.value,
              currency: (F = o.total) == null ? void 0 : F.includingTax.currency
            },
            excludingTax: {
              amount: (G = o.total) == null ? void 0 : G.excludingTax.value,
              currency: (z = o.total) == null ? void 0 : z.excludingTax.currency
            }
          },
          estimatedAppliedTaxes: {
            taxes: (V = o.appliedTaxes) == null ? void 0 : V.map(u => {
              var b, f;
              return {
                label: u.label,
                amount: {
                  value: (b = u.amount) == null ? void 0 : b.value,
                  currency: (f = u.amount) == null ? void 0 : f.currency
                }
              }
            })
          },
          estimatedItems: {
            items: (Z = o.items) == null ? void 0 : Z.map(u => {
              var b, f, j, U, Q, X, $, q, H, R;
              return {
                uid: u.uid,
                price: {
                  amount: (b = u.price) == null ? void 0 : b.value,
                  currency: (f = u.price) == null ? void 0 : f.currency
                },
                taxedPrice: {
                  amount: (j = u.taxedPrice) == null ? void 0 : j.value,
                  currency: (U = u.taxedPrice) == null ? void 0 : U.currency
                },
                rowTotal: {
                  amount: (Q = u.rowTotal) == null ? void 0 : Q.value,
                  currency: (X = u.rowTotal) == null ? void 0 : X.currency
                },
                rowTotalIncludingTax: {
                  amount: ($ = u.rowTotalIncludingTax) == null ? void 0 : $.value,
                  currency: (q = u.rowTotalIncludingTax) == null ? void 0 : q.currency
                },
                regularPrice: {
                  amount: (H = u.regularPrice) == null ? void 0 : H.value,
                  currency: (R = u.regularPrice) == null ? void 0 : R.currency
                }
              }
            })
          }
        })
      }).finally(() => {
        A(!1)
      })
    }, estimatedTotals: P, setEstimatedTotals: s, loading: O
  }
}, He = ({
           children: O,
           initialData: A = null,
           routeCheckout: P,
           slots: s,
           errors: N,
           showTotalSaved: g,
           enableCoupons: m,
           updateLineItems: _ = e => e,
           ...x
         }) => {
  var W, F, G, z, V, Z, u, b, f, j, U, Q, X, $, q, H, R, ie, ne, ce, oe, ue, se, le, me, de, xe, pe, he, ge, ye, Te, Se,
    Ce, be, fe;
  const [e, p] = M(A), [B, o] = M(!1), y = e == null ? void 0 : e.isVirtual;
  m = m ?? !0;
  const {handleEstimateTotals: I, estimatedTotals: t, setEstimatedTotals: T, loading: L} = qe(),
    i = (W = Oe.config) == null ? void 0 : W.shoppingCartDisplaySetting,
    k = (i == null ? void 0 : i.subtotal) === "INCLUDING_TAX",
    w = (i == null ? void 0 : i.subtotal) === "INCLUDING_EXCLUDING_TAX", S = i == null ? void 0 : i.zeroTax;
  ae(() => {
    const c = Ee.on("cart/data", a => {
      var J, K, Y;
      p(a);
      const te = (J = a == null ? void 0 : a.addresses) == null ? void 0 : J.shipping,
        re = a == null ? void 0 : a.isVirtual;
      (te || re) && T(null), t == null && T({
        estimatedTaxTotal: {
          amount: (K = a == null ? void 0 : a.totalTax) == null ? void 0 : K.value,
          currency: (Y = a == null ? void 0 : a.totalTax) == null ? void 0 : Y.currency
        }
      })
    }, {eager: !0});
    return () => {
      c == null || c.off()
    }
  }, []), ae(() => {
    o(N)
  }, [N]), ae(() => {
    const c = Ee.on("shipping/estimate", a => {
      var J, K, Y, ve, Pe, _e;
      const te = {
        shippingCountry: (J = a == null ? void 0 : a.address) == null ? void 0 : J.countryCode,
        shippingState: (K = a == null ? void 0 : a.address) == null ? void 0 : K.region,
        shippingStateId: (Y = a == null ? void 0 : a.address) == null ? void 0 : Y.regionId,
        shippingZip: (ve = a == null ? void 0 : a.address) == null ? void 0 : ve.postCode
      }, re = {
        carrier_code: ((Pe = a == null ? void 0 : a.shippingMethod) == null ? void 0 : Pe.carrierCode) || "",
        method_code: ((_e = a == null ? void 0 : a.shippingMethod) == null ? void 0 : _e.methodCode) || ""
      };
      I(te, re)
    });
    return () => {
      c == null || c.off()
    }
  }, [I]);
  const d = Ae({
    checkout: "Cart.PriceSummary.checkout",
    free: "Cart.PriceSummary.total.free",
    orderSummary: "Cart.PriceSummary.orderSummary",
    taxToBeDetermined: "Cart.PriceSummary.taxToBeDetermined"
  }), h = (e == null ? void 0 : e.hasOutOfStockItems) || B, n = Fe(() => {
    !h && e && Ve(e, Oe.locale)
  }, [h, e]), C = !y && (s != null && s.EstimateShipping) ? r(we, {
    name: "EstimateShipping",
    slot: s.EstimateShipping
  }, "estimateShippingId") : void 0;
  if (!Object.keys(e ?? {}).length || (e == null ? void 0 : e.totalQuantity) === 0) return null;
  const ee = m && (s != null && s.Coupons) ? r(we, {name: "Coupons", slot: s.Coupons}, "couponsId") : void 0;
  return r($e, {
    ...x,
    "data-testid": "cart-order-summary",
    heading: r("div", {children: d.orderSummary}),
    shipping: C,
    coupons: ee,
    loading: L,
    updateLineItems: _,
    subTotal: {
      taxIncluded: k && !S,
      taxExcluded: w,
      zeroTaxSubtotal: S,
      priceExcludingTax: (F = t == null ? void 0 : t.estimatedSubTotal) != null && F.excludingTax ? r(l, {"data-testid": "subtotal", ...(G = t == null ? void 0 : t.estimatedSubTotal) == null ? void 0 : G.excludingTax}) : r(l, {
        "data-testid": "subtotal",
        amount: (V = (z = e == null ? void 0 : e.subtotal) == null ? void 0 : z.excludingTax) == null ? void 0 : V.value,
        currency: (u = (Z = e == null ? void 0 : e.subtotal) == null ? void 0 : Z.excludingTax) == null ? void 0 : u.currency
      }),
      price: !S && k || !S && w ? (b = t == null ? void 0 : t.estimatedSubTotal) != null && b.includingTax ? r(l, {"data-testid": "subtotal", ...(f = t == null ? void 0 : t.estimatedSubTotal) == null ? void 0 : f.includingTax}) : r(l, {
        "data-testid": "subtotal",
        amount: (j = e == null ? void 0 : e.subtotal.includingTax) == null ? void 0 : j.value,
        currency: (U = e == null ? void 0 : e.subtotal.includingTax) == null ? void 0 : U.currency
      }) : r(l, {
        "data-testid": "subtotal",
        amount: (X = (Q = e == null ? void 0 : e.subtotal) == null ? void 0 : Q.excludingTax) == null ? void 0 : X.value,
        currency: (q = ($ = e == null ? void 0 : e.subtotal) == null ? void 0 : $.excludingTax) == null ? void 0 : q.currency
      })
    },
    discounts: (H = e == null ? void 0 : e.appliedDiscounts) == null ? void 0 : H.map(c => {
      var a;
      return {
        label: c.label,
        price: r(l, {
          "data-testid": "summary-discount-total",
          amount: -c.amount.value,
          currency: c.amount.currency,
          sale: !0
        }),
        coupon: c != null && c.coupon ? E("span", {
          children: [r(Ue, {
            source: Xe,
            size: "16"
          }), (a = c == null ? void 0 : c.coupon) == null ? void 0 : a.code]
        }) : void 0
      }
    }),
    taxTotal: y || t && t.estimatedTaxTotal == null ? {
      price: r("span", {
        "data-testid": "tax-total-tbd",
        children: d.taxToBeDetermined
      })
    } : {
      price: t != null && t.estimatedTaxTotal ? r(l, {"data-testid": "tax-total-estimated", ...t == null ? void 0 : t.estimatedTaxTotal}) : r(l, {
        "data-testid": "tax-total-actual",
        amount: (R = e == null ? void 0 : e.totalTax) == null ? void 0 : R.value,
        currency: (ie = e == null ? void 0 : e.totalTax) == null ? void 0 : ie.currency
      }), estimated: (!t || !t.estimatedTaxTotal) && !((ne = e == null ? void 0 : e.addresses) != null && ne.shipping)
    },
    taxesApplied: y ? void 0 : i != null && i.fullSummary ? (oe = ((ce = t == null ? void 0 : t.estimatedAppliedTaxes) == null ? void 0 : ce.taxes) || (e == null ? void 0 : e.appliedTaxes)) == null ? void 0 : oe.map(c => ({
      label: c.label,
      price: r(l, {"data-testid": "applied-taxes", amount: c.amount.value, currency: c.amount.currency})
    })) : void 0,
    total: {
      price: t != null && t.estimatedGrandTotalPrice ? ((se = (ue = t == null ? void 0 : t.estimatedGrandTotalPrice) == null ? void 0 : ue.includingTax) == null ? void 0 : se.amount) === 0 ? r("span", {
        "data-testid": "total-including-tax",
        children: d.free
      }) : r(l, {"data-testid": "total-including-tax-estimated", ...(le = t == null ? void 0 : t.estimatedGrandTotalPrice) == null ? void 0 : le.includingTax}) : ((me = e == null ? void 0 : e.total) == null ? void 0 : me.includingTax.value) === 0 ? r("span", {
        "data-testid": "total-including-tax",
        children: d.free
      }) : r(l, {
        "data-testid": "total-including-tax-actual",
        amount: (de = e == null ? void 0 : e.total) == null ? void 0 : de.includingTax.value,
        currency: (xe = e == null ? void 0 : e.total) == null ? void 0 : xe.includingTax.currency
      }),
      estimated: (!t || !!(t != null && t.estimatedTaxTotal)) && !((pe = e == null ? void 0 : e.addresses) != null && pe.shipping),
      priceWithoutTax: i != null && i.grandTotal ? t != null && t.estimatedAppliedTaxes ? ((ge = (he = t == null ? void 0 : t.estimatedGrandTotalPrice) == null ? void 0 : he.excludingTax) == null ? void 0 : ge.amount) === 0 ? r("span", {
        "data-testid": "total-excluding-tax",
        children: d.free
      }) : r(l, {"data-testid": "total-excluding-tax", ...(ye = t == null ? void 0 : t.estimatedGrandTotalPrice) == null ? void 0 : ye.excludingTax}) : ((Te = e == null ? void 0 : e.total) == null ? void 0 : Te.excludingTax.value) === 0 ? r("span", {
        "data-testid": "total-excluding-tax",
        children: d.free
      }) : r(l, {
        "data-testid": "total-excluding-tax",
        amount: (Se = e == null ? void 0 : e.total) == null ? void 0 : Se.excludingTax.value,
        currency: (Ce = e == null ? void 0 : e.total) == null ? void 0 : Ce.excludingTax.currency
      }) : void 0
    },
    primaryAction: P && r(Qe, {
      "data-testid": "checkout-button",
      variant: "primary",
      disabled: h,
      "aria-disabled": h,
      href: h ? void 0 : P({cartId: e.id}),
      onClick: n,
      children: d.checkout
    }),
    totalSaved: g ? r(l, {
      amount: (be = e == null ? void 0 : e.discount) == null ? void 0 : be.value,
      currency: (fe = e == null ? void 0 : e.total) == null ? void 0 : fe.includingTax.currency
    }) : void 0
  })
};
He.getInitialData = async function () {
  return Ge()
};
export {He as O};
