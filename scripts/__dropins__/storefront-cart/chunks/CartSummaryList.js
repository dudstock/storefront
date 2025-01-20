/*! Copyright 2025 Adobe
All Rights Reserved. */
import {jsx as n, jsxs as h, Fragment as X} from "@dropins/tools/preact-jsx-runtime.js";
import *as o from "@dropins/tools/preact-compat.js";
import {useState as N, useCallback as Ft, useEffect as ot} from "@dropins/tools/preact-compat.js";
import {classes as L, VComponent as b, Slot as w} from "@dropins/tools/lib.js";
import {E as Mt} from "./EmptyCart.js";/* empty css                 */
import {
  Divider as st,
  Skeleton as zt,
  SkeletonRow as Ut,
  InLineAlert as qt,
  Icon as z,
  CartList as lt,
  Button as U,
  Accordion as Tt,
  AccordionSection as Wt,
  CartItem as Jt,
  Price as O,
  Image as Kt
} from "@dropins/tools/components.js";
import {g as Rt} from "./persisted-data.js";
import {events as Yt} from "@dropins/tools/event-bus.js";
import {s as Ht} from "./resetCart.js";
import {u as ut} from "./updateProductsFromCart.js";
import {S as Dt} from "./ChevronDown.js";
import {useText as te} from "@dropins/tools/i18n.js";

const ee = d => o.createElement("svg", {
  id: "Icon_Chevron_right_Base",
  "data-name": "Icon \\u2013 Chevron right \\u2013 Base",
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24", ...d
}, o.createElement("g", {id: "Large"}, o.createElement("rect", {
  id: "Placement_area",
  "data-name": "Placement area",
  width: 24,
  height: 24,
  fill: "#fff",
  opacity: 0
}), o.createElement("g", {
  id: "Chevron_right_icon",
  "data-name": "Chevron right icon"
}, o.createElement("path", {
  vectorEffect: "non-scaling-stroke",
  id: "chevron",
  d: "M199.75,367.5l4.255,-4.255-4.255,-4.255",
  transform: "translate(-189.25 -351.0)",
  fill: "none",
  stroke: "currentColor"
})))), dt = d => o.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg", ...d
}, o.createElement("g", {clipPath: "url(#clip0_4797_15331)"}, o.createElement("path", {
  vectorEffect: "non-scaling-stroke",
  d: "M10.25 20.91L1.5 17.55V6.51996L10.25 9.92996V20.91Z",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), o.createElement("path", {
  vectorEffect: "non-scaling-stroke",
  d: "M6.24023 4.64001L14.9902 8.06001V11.42",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), o.createElement("path", {
  className: "error-icon",
  vectorEffect: "non-scaling-stroke",
  d: "M19 13.31L15.5 19.37H22.5L19 13.31Z",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), o.createElement("path", {
  className: "error-icon",
  vectorEffect: "non-scaling-stroke",
  d: "M19.0202 17.11H18.9802L18.9502 15.56H19.0502L19.0202 17.11ZM18.9602 18.29V18.06H19.0502V18.29H18.9602Z",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), o.createElement("path", {
  vectorEffect: "non-scaling-stroke",
  d: "M19 12.16V6.51996L10.25 9.92996V20.91L14.27 19.37L14.4 19.32",
  stroke: "currentColor",
  strokeLinejoin: "round"
}), o.createElement("path", {
  vectorEffect: "non-scaling-stroke",
  d: "M1.5 6.51999L10.25 3.04999L19 6.51999L10.25 9.92999L1.5 6.51999Z",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round"
})), o.createElement("defs", null, o.createElement("clipPath", {id: "clip0_4797_15331"}, o.createElement("rect", {
  width: 22,
  height: 18.86,
  fill: "white",
  transform: "translate(1 2.54999)"
})))), ne = d => o.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg", ...d
}, o.createElement("path", {
  vectorEffect: "non-scaling-stroke",
  d: "M0.75 12C0.75 5.78421 5.78421 0.75 12 0.75C18.2158 0.75 23.25 5.78421 23.25 12C23.25 18.2158 18.2158 23.25 12 23.25C5.78421 23.25 0.75 18.2158 0.75 12Z",
  stroke: "currentColor"
}), o.createElement("path", {
  vectorEffect: "non-scaling-stroke",
  d: "M11.75 5.88423V4.75H12.25V5.88423L12.0485 13.0713H11.9515L11.75 5.88423ZM11.7994 18.25V16.9868H12.2253V18.25H11.7994Z",
  stroke: "currentColor"
})), gt = ({
             className: d,
             children: q,
             heading: k,
             footer: y,
             emptyCart: _,
             products: u,
             outOfStockMessage: v,
             variant: S = "primary",
             loading: m = !0,
             ...c
           }) => n("div", {
  ...c,
  className: L(["cart-cart-summary-list", d, `cart-cart-summary-list__background--${S}`]),
  children: m ? n(re, {}) : h(X, {
    children: [(k || v) && h("div", {
      "data-testid": "cart-summary-list-heading-wrapper",
      className: L(["cart-cart-summary-list__heading", ["cart-cart-summary-list__heading--full-width", !u]]),
      children: [k && h(X, {
        children: [n(b, {
          node: k,
          className: "cart-cart-summary-list__heading-text"
        }), n(st, {variant: "primary", className: L(["cart-cart-summary-list__heading-divider"])})]
      }), v && n(b, {node: v, className: "cart-cart-summary-list__out-of-stock-message"})]
    }), n("div", {
      className: L(["cart-cart-summary-list__content", ["cart-cart-summary-list__content--empty", !u]]),
      children: u || n(b, {node: _, className: "cart-cart-summary-list__empty-cart"})
    }), y && h(X, {
      children: [n(st, {
        variant: "primary",
        className: L(["cart-cart-summary-list__footer-divider"])
      }), n(b, {node: y, className: "cart-cart-summary-list__footer-text"})]
    })]
  })
}), re = () => n(zt, {
  "data-testid": "cart-summary-list-skeleton",
  className: "cart-cart-summary-list__skeleton",
  rowGap: "medium",
  children: n(Ut, {variant: "row", size: "xlarge", fullWidth: !0, lines: 3, multilineGap: "small"})
}), ae = ({
            initialData: d = null,
            hideHeading: q,
            hideFooter: k,
            routeProduct: y,
            routeEmptyCartCTA: _,
            routeCart: u,
            onItemUpdate: v,
            onItemRemove: S,
            maxItems: m,
            slots: c,
            attributesToHide: l = [],
            enableRemoveItem: j,
            enableUpdateItemQuantity: T,
            onItemsErrorsChange: $,
            accordion: ft = !1,
            variant: Z = "primary",
            isLoading: mt,
            showMaxItems: W,
            showDiscount: ht,
            showSavings: yt,
            quantityType: vt,
            dropdownOptions: pt,
            ...J
          }) => {
  var rt;
  const [B, kt] = N(!d), [a, Ct] = N(d), [E, wt] = N(new Set), [A, Lt] = N(new Map),
    s = (rt = Ht.config) == null ? void 0 : rt.shoppingCartDisplaySetting, [Q, _t] = N(W ? !0 : !m && !W), i = te({
      file: "Cart.CartItem.file",
      files: "Cart.CartItem.files",
      heading: "Cart.Cart.heading",
      message: "Cart.CartItem.message",
      recipient: "Cart.CartItem.recipient",
      regularPrice: "Cart.CartItem.regularPrice",
      discountedPrice: "Cart.CartItem.discountedPrice",
      sender: "Cart.CartItem.sender",
      lowInventory: "Cart.CartItem.lowInventory",
      insufficientQuantity: "Cart.CartItem.insufficientQuantity",
      insufficientQuantityGeneral: "Cart.CartItem.insufficientQuantityGeneral",
      outOfStockHeading: "Cart.OutOfStockMessage.heading",
      outOfStockDescription: "Cart.OutOfStockMessage.message",
      outOfStockAlert: "Cart.OutOfStockMessage.alert",
      removeAction: "Cart.OutOfStockMessage.action",
      notAvailableMessage: "Cart.CartItem.notAvailableMessage",
      viewMore: "Cart.Cart.viewMore",
      viewAll: "Cart.Cart.viewAll",
      discountPercent: "Cart.CartItem.discountPercentage",
      savingsAmount: "Cart.CartItem.savingsAmount"
    }), F = (t, e) => {
      wt(r => (e ? r.add(t) : r.delete(t), new Set(r)))
    }, K = (t, e) => {
      Lt(r => (e ? r.set(t, e) : r.delete(t), new Map(r)))
    }, M = (t, e) => {
      F(t.uid, !0), K(t.uid), j && e === 0 ? ut([{uid: t.uid, quantity: e}]).then(() => {
        S == null || S({item: t})
      }).finally(() => {
        F(t.uid, !1)
      }).catch(r => {
        console.warn(r)
      }) : T && ut([{uid: t.uid, quantity: e}]).then(() => {
        v == null || v({item: t})
      }).finally(() => {
        F(t.uid, !1)
      }).catch(r => {
        console.warn(r), K(t.uid, r.message)
      })
    }, St = Ft(() => {
      _t(t => !t)
    }, []);
  ot(() => {
    const t = Yt.on("cart/data", e => {
      Ct(e), kt(!!mt)
    }, {eager: !0});
    return () => {
      t == null || t.off()
    }
  }, []), ot(() => {
    $ && $(A)
  }, [A, $]);
  const Et = (t, e) => {
      if (l.includes("image")) return;
      const r = n(Kt, {
        "data-testid": "cart-list-item-image",
        loading: e < 4 ? "eager" : "lazy",
        src: t.image.src,
        alt: t.image.alt,
        width: "300",
        height: "300",
        params: {width: 300}
      });
      return n(w, {
        name: "Thumbnail",
        slot: c == null ? void 0 : c.Thumbnail,
        context: {item: t},
        children: y ? n("a", {href: y(t), children: r}) : r
      })
    }, It = t => {
      if (!l.includes("name")) return n("span", {
        "data-testid": "cart-list-item-title",
        children: y ? n("a", {href: y(t), children: t.name}) : t.name
      })
    }, xt = t => {
      if (l.includes("configurations")) return;
      const e = {...t.bundleOptions, ...t.selectedOptions, ...t.customizableOptions, ...t.recipient ? {[i.recipient]: t.recipient} : null, ...t.recipientEmail && t.recipient ? {[i.recipient]: `${t.recipient} (${t.recipientEmail})`} : null, ...t.sender ? {[i.sender]: t.sender} : null, ...t.senderEmail && t.sender ? {[i.sender]: `${t.sender} (${t.senderEmail})`} : {}, ...t.message ? {[i.message]: t.message} : null, ...t.links && t.links.count ? t.links.count > 1 ? {[i.files.replace("{count}", t.links.count.toString())]: t.links.result} : {[i.file.replace("{count}", t.links.count.toString())]: t.links.result} : null};
      if (Object.keys(e).length !== 0) return e
    }, Pt = t => {
      var e, r, f, g;
      return (s == null ? void 0 : s.price) === "INCLUDING_TAX" ? t.discounted ? {
        amount: t.regularPrice.value,
        currency: t.regularPrice.currency,
        style: {font: "inherit"},
        "data-testid": "including-tax-item-price"
      } : {
        amount: (e = t.taxedPrice) == null ? void 0 : e.value,
        currency: (r = t.taxedPrice) == null ? void 0 : r.currency,
        style: {font: "inherit"},
        "data-testid": "including-tax-item-price"
      } : {
        amount: (f = t.regularPrice) == null ? void 0 : f.value,
        currency: (g = t.regularPrice) == null ? void 0 : g.currency,
        style: {font: "inherit"},
        "data-testid": "regular-item-price"
      }
    }, Nt = t => {
      var e, r;
      return {
        amount: (e = t.savingsAmount) == null ? void 0 : e.value,
        currency: (r = t.savingsAmount) == null ? void 0 : r.currency,
        style: {font: "inherit"},
        "data-testid": "item-savings-amount"
      }
    }, Ot = t => (s == null ? void 0 : s.price) === "INCLUDING_EXCLUDING_TAX" ? n(O, {
      amount: t.rowTotal.value,
      currency: t.rowTotal.currency,
      "data-testid": "excluding-tax-total",
      "aria-label": i.regularPrice
    }) : void 0, At = t => {
      var f, g, p, C, I, x, P, at, it, ct;
      const e = {"aria-label": i.regularPrice}, r = t.discounted ? {} : null;
      return ["INCLUDING_TAX", "INCLUDING_EXCLUDING_TAX"].includes(s == null ? void 0 : s.price) ? (e.amount = (f = t.rowTotalIncludingTax) == null ? void 0 : f.value, e.currency = (g = t.rowTotalIncludingTax) == null ? void 0 : g.currency, e.variant = t.discounted ? "strikethrough" : "default", e["data-testid"] = "including-tax-item-total", r && (e.amount = (p = t.total) == null ? void 0 : p.value, e.currency = (C = t.total) == null ? void 0 : C.currency, r.amount = (I = t.rowTotalIncludingTax) == null ? void 0 : I.value, r.currency = (x = t.rowTotalIncludingTax) == null ? void 0 : x.currency, r.sale = !0, r["aria-label"] = i.discountedPrice, r["data-testid"] = "discount-total")) : (e.amount = (P = t.total) == null ? void 0 : P.value, e.currency = (at = t.total) == null ? void 0 : at.currency, e.variant = t.discounted ? "strikethrough" : "default", e["data-testid"] = "regular-item-total", r && (r.amount = (it = t.discountedTotal) == null ? void 0 : it.value, r.currency = (ct = t.discountedTotal) == null ? void 0 : ct.currency, r.sale = !0, r["aria-label"] = i.regularPrice, r["data-testid"] = "discount-total")), {
        totalProps: e,
        discountProps: r
      }
    }, Qt = t => {
      var I, x, P;
      if (l.includes("warning")) return;
      const e = A.get(t.uid), r = (I = A.get(t.uid)) == null ? void 0 : I.includes("The requested qty is not available"),
        f = E.has(t.uid),
        g = t.insufficientQuantity && t.stockLevel ? t.stockLevel === "noNumber" ? i.insufficientQuantityGeneral : i.insufficientQuantity.replace("{inventory}", (x = t.stockLevel) == null ? void 0 : x.toString()).replace("{count}", t.quantity.toString()) : "",
        p = t.lowInventory && t.onlyXLeftInStock && i.lowInventory.replace("{count}", (P = t.onlyXLeftInStock) == null ? void 0 : P.toString()),
        C = !t.outOfStock && e && r ? i.notAvailableMessage : e;
      return !f && (e || t.insufficientQuantity || t.lowInventory) ? h("span", {
        "data-testid": "item-warning",
        children: [n(z, {source: ne, size: "16"}), C || g || p]
      }) : void 0
    }, Gt = t => l != null && l.includes("alert") ? void 0 : !E.has(t.uid) && t.outOfStock ? h("span", {
      "data-testid": "item-alert",
      children: [n(z, {source: dt, size: "16"}), i.outOfStockAlert]
    }) : void 0,
    Vt = t => n(w, {name: "ProductAttributes", slot: c == null ? void 0 : c.ProductAttributes, context: {item: t}}),
    bt = t => {
      if (!l.includes("sku")) return n("span", {"data-testid": "cart-list-item-sku", children: t.sku})
    }, Xt = t => n(w, {name: "Footer", slot: c == null ? void 0 : c.Footer, context: {item: t}}),
    R = t => a != null && a.totalQuantity ? a.items.filter(t).map((e, r) => {
      var p;
      const {totalProps: f, discountProps: g} = At(e);
      return n(Jt, {
        updating: E == null ? void 0 : E.has(e.uid),
        loading: B,
        "data-testid": `cart-list-item-entry-${e.uid}`,
        image: Et(e, r),
        title: It(e),
        sku: bt(e),
        price: l.includes("price") ? void 0 : n(O, {...Pt(e)}),
        quantity: l.includes("quantity") ? void 0 : e.quantity,
        total: h(X, {children: [l.includes("total") ? void 0 : n(O, {...f}), l.includes("totalDiscount") ? void 0 : g && n(O, {...g})]}),
        attributes: Vt(e),
        configurations: xt(e),
        totalExcludingTax: l.includes("totalExcludingTax") ? void 0 : Ot(e),
        taxIncluded: (s == null ? void 0 : s.price) === "INCLUDING_TAX",
        taxExcluded: !l.includes("totalExcludingTax") && (s == null ? void 0 : s.price) === "INCLUDING_EXCLUDING_TAX",
        warning: Qt(e),
        alert: Gt(e),
        quantityType: vt,
        dropdownOptions: pt,
        onQuantity: T ? C => {
          M(e, C)
        } : void 0,
        onRemove: j ? () => M(e, 0) : void 0,
        discount: ht && e.discounted && e.discountPercentage ? n("div", {
          "data-testid": "item-discount-percent",
          children: i.discountPercent.replace("{discount}", ((p = e.discountPercentage) == null ? void 0 : p.toString()) ?? "")
        }) : void 0,
        savings: yt && e.discounted && e.savingsAmount ? h("div", {children: [n("span", {children: n(O, {...Nt(e)})}), " ", i.savingsAmount]}) : void 0,
        footer: Xt(e)
      }, e.uid)
    }) : null, Y = n(w, {
      name: "EmptyCart",
      slot: c == null ? void 0 : c.EmptyCart,
      context: {},
      children: n(Mt, {"data-testid": "empty-cart", ctaLinkURL: _ == null ? void 0 : _()})
    }), H = n(w, {
      name: "Heading",
      slot: c == null ? void 0 : c.Heading,
      context: {count: a == null ? void 0 : a.totalQuantity},
      children: n("div", {
        "data-testid": "default-cart-heading",
        children: i.heading.replace("({count})", a != null && a.totalQuantity ? `(${a == null ? void 0 : a.totalQuantity.toString()})` : "")
      })
    }), jt = H.props.children.props.children, $t = () => {
      const t = a == null ? void 0 : a.items.filter(e => e.outOfStock);
      t == null || t.forEach(e => {
        M(e, 0)
      })
    }, Zt = R(t => t.outOfStock || t.insufficientQuantity || !1), D = a != null && a.hasOutOfStockItems ? n(qt, {
      "data-testid": "cart-out-of-stock-message",
      icon: n(z, {source: dt, size: "16"}),
      itemList: n(lt, {"data-testid": "out-of-stock-cart-items", children: Zt}),
      type: "warning",
      heading: i.outOfStockHeading,
      description: i.outOfStockDescription,
      variant: "primary",
      actionButtonPosition: "bottom",
      additionalActions: a != null && a.hasFullyOutOfStockItems && j ? [{label: i.removeAction, onClick: $t}] : void 0
    }) : void 0, G = R(t => !t.outOfStock && !t.insufficientQuantity),
    tt = Q ? Math.max(m || 5, 5) : Math.min((a == null ? void 0 : a.totalQuantity) || 5, 5),
    et = (a == null ? void 0 : a.totalQuantity) > tt, Bt = et && !Q && tt != m,
    V = a != null && a.totalQuantity && G ? n(w, {
      name: "Footer",
      slot: c == null ? void 0 : c.CartSummaryFooter,
      context: {displayMaxItems: Q, routeCart: u},
      "data-testid": "cart-cart-summary-footer-slot",
      children: n("div", {
        "data-testid": "cart-cart-summary-footer",
        children: et ? Bt ? n(U, {
          className: "cart-cart-summary-list-footer__action",
          onClick: St,
          "data-testid": "view-more-items-button",
          variant: "tertiary",
          children: i.viewMore
        }) : u && n(U, {
          className: "cart-cart-summary-list-footer__action",
          href: u(),
          variant: "tertiary",
          "data-testid": "view-cart-or-less-items-button",
          children: i.viewAll
        }) : u && n(U, {
          className: "cart-cart-summary-list-footer__action",
          href: u(),
          variant: "tertiary",
          "data-testid": "view-cart-button",
          children: i.viewAll
        })
      })
    }) : null, nt = a != null && a.totalQuantity ? n(lt, {
      "data-testid": "cart-list",
      children: G == null ? void 0 : G.slice(0, Q ? Math.max(m || (a == null ? void 0 : a.totalQuantity), 5) : Math.min(m ?? 5, 5))
    }) : null;
  return ft ? n(Tt, {
    "data-testid": "cart-summary-list-accordion",
    className: L(["cart-cart-summary-list-accordion", `cart-cart-summary-list__background--${Z}`]),
    iconOpen: ee,
    iconClose: Dt,
    children: n(Wt, {
      title: jt,
      "data-testid": "cart-summary-list-accordion__section",
      open: !0,
      renderContentWhenClosed: !0,
      children: n(gt, {
        ...J,
        "aria-expanded": !0,
        "aria-label": "TEST",
        className: "cart-cart-summary-list-accordion__list",
        loading: B,
        footer: k ? void 0 : V || (u ? V : void 0),
        emptyCart: Y,
        products: nt,
        outOfStockMessage: D,
        variant: Z
      })
    })
  }) : n(gt, {
    ...J,
    heading: q ? void 0 : H,
    footer: k ? void 0 : V || (u ? V : void 0),
    loading: B,
    emptyCart: Y,
    products: nt,
    outOfStockMessage: D,
    variant: Z
  })
};
ae.getInitialData = async function () {
  return Rt()
};
export {ae as C};
