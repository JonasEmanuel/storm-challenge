"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (e) {
  function t(t) {
    for (var n, o, i = t[0], u = t[1], c = t[2], d = 0, f = []; d < i.length; d++) {
      o = i[d], a[o] && f.push(a[o][0]), a[o] = 0;
    }for (n in u) {
      Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
    }l && l(t);while (f.length) {
      f.shift()();
    }return s.push.apply(s, c || []), r();
  }function r() {
    for (var e, t = 0; t < s.length; t++) {
      for (var r = s[t], n = !0, i = 1; i < r.length; i++) {
        var u = r[i];0 !== a[u] && (n = !1);
      }n && (s.splice(t--, 1), e = o(o.s = r[0]));
    }return e;
  }var n = {},
      a = { app: 0 },
      s = [];function o(t) {
    if (n[t]) return n[t].exports;var r = n[t] = { i: t, l: !1, exports: {} };return e[t].call(r.exports, r, r.exports, o), r.l = !0, r.exports;
  }o.m = e, o.c = n, o.d = function (e, t, r) {
    o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
  }, o.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
  }, o.t = function (e, t) {
    if (1 & t && (e = o(e)), 8 & t) return e;if (4 & t && "object" === (typeof e === "undefined" ? "undefined" : _typeof(e)) && e && e.__esModule) return e;var r = Object.create(null);if (o.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var n in e) {
      o.d(r, n, function (t) {
        return e[t];
      }.bind(null, n));
    }return r;
  }, o.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };return o.d(t, "a", t), t;
  }, o.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, o.p = "/";var i = window["webpackJsonp"] = window["webpackJsonp"] || [],
      u = i.push.bind(i);i.push = t, i = i.slice();for (var c = 0; c < i.length; c++) {
    t(i[c]);
  }var l = u;s.push([0, "chunk-vendors"]), r();
})({ 0: function _(e, t, r) {
    e.exports = r("56d7");
  }, "0a32": function a32(e, t, r) {}, "17d8": function d8(e, t, r) {}, 2115: function _(e, t, r) {}, "2a2d": function a2d(e, t, r) {}, "3ec8": function ec8(e, t, r) {
    "use strict";
    var n = r("2a2d"),
        a = r.n(n);a.a;
  }, "56d7": function d7(e, t, r) {
    "use strict";
    r.r(t);r("cadf"), r("551c"), r("f751"), r("097d");var n = r("2b0e"),
        a = r("8c4f"),
        s = function s() {
      var e = this,
          t = e.$createElement,
          r = e._self._c || t;return r("div", { attrs: { id: "app" } }, [r("NavBar"), r("div", { staticClass: "content" }, [r("transition", { attrs: { name: "fade", mode: "out-in" } }, [r("router-view")], 1)], 1)], 1);
    },
        o = [],
        i = (r("f27b"), r("7dd0"), function () {
      var e = this,
          t = e.$createElement,
          r = e._self._c || t;return r("div", { attrs: { id: "navbar" } }, [e._v("\n    Desafio - Storm Security\n")]);
    }),
        u = [],
        c = {},
        l = c,
        d = (r("f97d"), r("2877")),
        f = Object(d["a"])(l, i, u, !1, null, "3237f9df", null),
        p = f.exports,
        v = { name: "app", components: { NavBar: p } },
        m = v,
        h = (r("5c0b"), Object(d["a"])(m, s, o, !1, null, null, null)),
        g = h.exports,
        b = function b() {
      var e = this,
          t = e.$createElement,
          r = e._self._c || t;return r("div", { attrs: { id: "order" } }, [r("div", { directives: [{ name: "show", rawName: "v-show", value: !e.flags.isLoading, expression: "!flags.isLoading" }], staticClass: "resources-box" }, [r("div", { directives: [{ name: "show", rawName: "v-show", value: !e.flags.isLoading, expression: "!flags.isLoading" }], staticClass: "resources" }, e._l(e.order.itens, function (t) {
        return r("div", { key: t.resourceTypeName, staticClass: "resource" }, [r("div", [e._v("\n                    Nível " + e._s(t.resourceTypeName) + "\n                ")]), r("div", [r("label", [e._v("Período em meses")]), r("input", { directives: [{ name: "model", rawName: "v-model", value: t.period, expression: "orderItem.period" }], staticClass: "custom-form", attrs: { type: "number", min: "0" }, domProps: { value: t.period }, on: { change: function change(r) {
              return e.calcOrderValue(t);
            }, input: function input(r) {
              r.target.composing || e.$set(t, "period", r.target.value);
            } } })]), r("div", [r("label", [e._v("Quantidade")]), r("input", { directives: [{ name: "model", rawName: "v-model", value: t.resourceQuantity, expression: "orderItem.resourceQuantity" }], staticClass: "custom-form", attrs: { type: "number", min: "0" }, domProps: { value: t.resourceQuantity }, on: { change: function change(r) {
              return e.calcOrderValue(t);
            }, input: function input(r) {
              r.target.composing || e.$set(t, "resourceQuantity", r.target.value);
            } } })]), r("div", [r("b", [e._v("Total: " + e._s(e._f("toCurrency")(t.total)))])])]);
      }), 0)]), r("div", { directives: [{ name: "show", rawName: "v-show", value: e.flags.isLoading, expression: "flags.isLoading" }], staticClass: "resources-box justify-center" }, [r("Spinner")], 1), r("div", { staticClass: "button-box" }, [r("button", { staticClass: "btn primary", on: { click: e.saveOrder } }, [r("i", { staticClass: "fas fa-plus" }), e._v("Concluir")])])]);
    },
        _ = [],
        y = r("59ad"),
        w = r.n(y),
        x = r("e814"),
        O = r.n(x),
        C = (r("7f7f"), r("ac6a"), r("3846"), r("96cf"), r("3b8d")),
        L = r("72f9"),
        j = r.n(L),
        N = r("bc3a"),
        R = r.n(N),
        $ = r("d3c1"),
        k = r.n($),
        P = function P() {
      var e = this,
          t = e.$createElement;e._self._c;return e._m(0);
    },
        S = [function () {
      var e = this,
          t = e.$createElement,
          r = e._self._c || t;return r("div", [r("div", { staticClass: "spinner" }, [r("div"), r("div"), r("div"), r("div")])]);
    }],
        T = {},
        Q = T,
        E = (r("fb4d"), Object(d["a"])(Q, P, S, !1, null, "990b33d6", null)),
        V = E.exports,
        M = { data: function data() {
        return { resources: [], order: { itens: [], totalResources: 0, total: 0 }, resourceTypes: [], flags: { isLoading: !1 } };
      }, components: { Spinner: V }, created: function () {
        var e = Object(C["a"])(regeneratorRuntime.mark(function e() {
          var t,
              r = this;return regeneratorRuntime.wrap(function (e) {
            while (1) {
              switch (e.prev = e.next) {case 0:
                  return this.flags.isLoading = !0, e.next = 3, R.a.get("/resource");case 3:
                  t = e.sent, this.flags.isLoading = !1, this.resourceTypes = t.data, this.resourceTypes.forEach(function (e) {
                    r.order.itens.push({ resourceTypeName: e.name, resourceValue: e.value, resourceQuantity: 0, total: 0, period: 1 });
                  });case 7:case "end":
                  return e.stop();}
            }
          }, e, this);
        }));function t() {
          return e.apply(this, arguments);
        }return t;
      }(), methods: { saveOrder: function () {
          var e = Object(C["a"])(regeneratorRuntime.mark(function e() {
            return regeneratorRuntime.wrap(function (e) {
              while (1) {
                switch (e.prev = e.next) {case 0:
                    if (this.order.totalResources = k()(this.order.itens, function (e) {
                      return O()(e.resourceQuantity);
                    }), this.order.total = k()(this.order.itens, function (e) {
                      return w()(e.total);
                    }), !(this.order.totalResources > 0)) {
                      e.next = 8;break;
                    }return e.next = 5, R.a.put("/order", this.order);case 5:
                    this.$router.push("/"), e.next = 9;break;case 8:
                    alert("Nenhum recurso selecionado");case 9:case "end":
                    return e.stop();}
              }
            }, e, this);
          }));function t() {
            return e.apply(this, arguments);
          }return t;
        }(), calcOrderValue: function calcOrderValue(e) {
          if (e.period && e.resourceQuantity) {
            var t = 0;e.period <= 3 ? t = .2 : e.period >= 4 && e.period <= 6 && (t = .1), e.total = e.period * w()(e.resourceValue) + e.resourceValue * t, e.total = e.total * e.resourceQuantity;
          }
        } }, filters: { toCurrency: function toCurrency(e) {
          return j()(e, { symbol: "R$", precision: 2 }).format(!0);
        } } },
        I = M,
        B = (r("6820"), Object(d["a"])(I, b, _, !1, null, "01e37c52", null)),
        D = B.exports,
        J = function J() {
      var e = this,
          t = e.$createElement,
          r = e._self._c || t;return r("div", [r("div", { staticClass: "title-and-button" }, [r("h1", [e._v("Pedidos realizados")]), r("button", { staticClass: "btn primary", on: { click: function click(t) {
            return e.$router.push("/order");
          } } }, [r("i", { staticClass: "fas fa-plus" }), e._v("Novo Pedido")])]), r("table", [e._m(0), r("tbody", [e._l(e.orders, function (t) {
        return r("tr", { directives: [{ name: "show", rawName: "v-show", value: !e.flags.isLoading && e.orders.length > 0, expression: "!flags.isLoading && orders.length > 0" }], key: t._id }, [r("td", [e._v(e._s(t._id))]), r("td", [e._v(e._s(t.totalResources))]), r("td", [e._v(e._s(e._f("toCurrency")(t.total)))])]);
      }), r("tr", { directives: [{ name: "show", rawName: "v-show", value: 0 == e.orders.length && !e.flags.isLoading, expression: "orders.length == 0 && !flags.isLoading" }] }, [r("td", { attrs: { colspan: "3" } }, [e._v("Nenhum pedido cadastrado")])]), r("tr", { directives: [{ name: "show", rawName: "v-show", value: e.flags.isLoading, expression: "flags.isLoading" }] }, [r("td", { staticClass: "center", attrs: { colspan: "3" } }, [r("Spinner")], 1)])], 2)])]);
    },
        z = [function () {
      var e = this,
          t = e.$createElement,
          r = e._self._c || t;return r("thead", [r("th", [e._v("ID")]), r("th", [e._v("Quantidade de Recursos")]), r("th", [e._v("Valor Total")])]);
    }],
        U = { data: function data() {
        return { orders: [], flags: { isLoading: !1 } };
      }, components: { Spinner: V }, created: function () {
        var e = Object(C["a"])(regeneratorRuntime.mark(function e() {
          var t;return regeneratorRuntime.wrap(function (e) {
            while (1) {
              switch (e.prev = e.next) {case 0:
                  return this.flags.isLoading = !0, e.next = 3, R.a.get("/order");case 3:
                  t = e.sent, this.flags.isLoading = !1, this.orders = t.data;case 6:case "end":
                  return e.stop();}
            }
          }, e, this);
        }));function t() {
          return e.apply(this, arguments);
        }return t;
      }(), methods: {}, filters: { toCurrency: function toCurrency(e) {
          return j()(e, { symbol: "R$", precision: 2 }).format(!0);
        } } },
        q = U,
        A = (r("3ec8"), Object(d["a"])(q, J, z, !1, null, "3c93c80b", null)),
        F = A.exports,
        G = [{ path: "/", component: F }, { path: "/order", component: D }],
        H = G;n["a"].config.productionTip = !1, n["a"].use(a["a"]), R.a.defaults.baseURL = "".concat(window.location.origin, "/api"), new n["a"]({ router: new a["a"]({ routes: H }), render: function render(e) {
        return e(g);
      } }).$mount("#app");
  }, "5c0b": function c0b(e, t, r) {
    "use strict";
    var n = r("5e27"),
        a = r.n(n);a.a;
  }, "5e27": function e27(e, t, r) {}, 6820: function _(e, t, r) {
    "use strict";
    var n = r("17d8"),
        a = r.n(n);a.a;
  }, "7dd0": function dd0(e, t, r) {}, f27b: function f27b(e, t, r) {}, f97d: function f97d(e, t, r) {
    "use strict";
    var n = r("2115"),
        a = r.n(n);a.a;
  }, fb4d: function fb4d(e, t, r) {
    "use strict";
    var n = r("0a32"),
        a = r.n(n);a.a;
  } });
//# sourceMappingURL=app.1a7fbb0b.js.map