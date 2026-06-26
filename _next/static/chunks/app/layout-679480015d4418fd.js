(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    2936: (e) => {
      e.exports = {
        style: {
          fontFamily: "'Open Sans', 'Open Sans Fallback'",
          fontWeight: 400,
          fontStyle: "normal",
        },
        className: "__className_422609",
        variable: "__variable_422609",
      };
    },
    4100: (e, r, t) => {
      Promise.resolve().then(t.bind(t, 7772)),
        Promise.resolve().then(t.t.bind(t, 6163, 23)),
        Promise.resolve().then(t.t.bind(t, 2936, 23)),
        Promise.resolve().then(t.t.bind(t, 9324, 23));
    },
    6163: (e) => {
      e.exports = {
        style: {
          fontFamily: "'Audiowide', 'Audiowide Fallback'",
          fontWeight: 400,
          fontStyle: "normal",
        },
        className: "__className_2d00a0",
        variable: "__variable_2d00a0",
      };
    },
    7772: (e, r, t) => {
      "use strict";
      t.d(r, { default: () => x });
      var a = t(5155),
        l = t(2115),
        s = t(6874),
        o = t.n(s);
      let n = (e) => {
          let r = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, r, t) =>
            t ? t.toUpperCase() : r.toLowerCase()
          );
          return r.charAt(0).toUpperCase() + r.slice(1);
        },
        i = function () {
          for (var e = arguments.length, r = Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          return r
            .filter((e, r, t) => !!e && "" !== e.trim() && t.indexOf(e) === r)
            .join(" ")
            .trim();
        };
      var c = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      let d = (0, l.forwardRef)((e, r) => {
          let {
            color: t = "currentColor",
            size: a = 24,
            strokeWidth: s = 2,
            absoluteStrokeWidth: o,
            className: n = "",
            children: d,
            iconNode: h,
            ...m
          } = e;
          return (0, l.createElement)(
            "svg",
            {
              ref: r,
              ...c,
              width: a,
              height: a,
              stroke: t,
              strokeWidth: o ? (24 * Number(s)) / Number(a) : s,
              className: i("lucide", n),
              ...(!d &&
                !((e) => {
                  for (let r in e)
                    if (r.startsWith("aria-") || "role" === r || "title" === r)
                      return !0;
                })(m) && { "aria-hidden": "true" }),
              ...m,
            },
            [
              ...h.map((e) => {
                let [r, t] = e;
                return (0, l.createElement)(r, t);
              }),
              ...(Array.isArray(d) ? d : [d]),
            ]
          );
        }),
        h = (e, r) => {
          let t = (0, l.forwardRef)((t, a) => {
            let { className: s, ...o } = t;
            return (0, l.createElement)(d, {
              ref: a,
              iconNode: r,
              className: i(
                "lucide-".concat(
                  n(e)
                    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
                    .toLowerCase()
                ),
                "lucide-".concat(e),
                s
              ),
              ...o,
            });
          });
          return (t.displayName = n(e)), t;
        },
        m = h("x", [
          ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
          ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
        ]),
        p = h("menu", [
          ["path", { d: "M4 12h16", key: "1lakjw" }],
          ["path", { d: "M4 18h16", key: "19g7jn" }],
          ["path", { d: "M4 6h16", key: "1o0s65" }],
        ]);
      function x() {
        let [e, r] = (0, l.useState)(!1),
          t = [
            { label: "Home", href: "#home" },
            { label: "About", href: "#about" },
            { label: "Tokenomics", href: "#tokenomics" },
            { label: "How To Buy", href: "#how-to-buy" },
          ];
        return (0, a.jsxs)("header", {
          className:
            "fixed top-0 left-0 w-full z-50 bg-background border-b border-[#313131] backdrop-blur-md  shadow-sm",
          children: [
            (0, a.jsx)("div", {
              className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
              children: (0, a.jsxs)("div", {
                className: "flex justify-between items-center h-12",
                children: [
                  (0, a.jsx)(o(), {
                    href: "/",
                    className: "  flex items-center space-x-2",
                    children: (0, a.jsxs)("h1", {
                      className:
                        "uppercase font-sans text-xl md:text-2xl font-bold flex flex-wrap justify-center gap-2",
                      children: [
                        (0, a.jsx)("span", {
                          style: { color: "var(--e-global-color-primary)" },
                          children: "星辰大海",
                        }),
                        (0, a.jsx)("span", {
                          style: {
                            WebkitTextStrokeWidth: "1px",
                            strokeWidth: "1px",
                            WebkitTextStrokeColor:
                              "var(--e-global-color-primary)",
                            stroke: "var(--e-global-color-primary)",
                            color: "var(--e-global-color-accent)",
                          },
                          children: "",
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)("nav", {
                    className: "hidden md:flex space-x-6",
                    children: t.map((e) =>
                      (0, a.jsx)(
                        o(),
                        {
                          href: e.href,
                          className:
                            "uppercase text-gray-200 font-sans hover:text-[#ffbb00] transition font-medium",
                          children: e.label,
                        },
                        e.label
                      )
                    ),
                  }),
                  (0, a.jsx)("button", {
                    onClick: () => r(!e),
                    className: "md:hidden text-gray-200",
                    children: e
                      ? (0, a.jsx)(m, { size: 28 })
                      : (0, a.jsx)(p, { size: 28 }),
                  }),
                ],
              }),
            }),
            e &&
              (0, a.jsx)("div", {
                className:
                  "md:hidden bg-yellow-500 border-t border-yellow-200 px-4 pb-4",
                children: (0, a.jsx)("nav", {
                  className: "flex flex-col space-y-2 mt-2",
                  children: t.map((e) =>
                    (0, a.jsx)(
                      o(),
                      {
                        href: e.href,
                        className:
                          "uppercase text-gray-800 hover:text-pink-600 transition font-medium",
                        onClick: () => r(!1),
                        children: e.label,
                      },
                      e.label
                    )
                  ),
                }),
              }),
          ],
        });
      }
    },
    9324: () => {},
  },
  (e) => {
    e.O(0, [340, 874, 441, 964, 358], () => e((e.s = 4100))), (_N_E = e.O());
  },
]);
