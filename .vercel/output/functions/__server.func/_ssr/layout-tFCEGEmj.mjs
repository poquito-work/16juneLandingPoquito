import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { l as logoSrc } from "./pocketdragon-tm-d0kS12XR.mjs";
const sidebarLinks = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Use", to: "/terms" }
];
function LegalLayout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", style: { background: "linear-gradient(160deg, #F9F2E4 0%, #EDE5D0 100%)" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "header",
      {
        className: "border-b border-foreground/8 sticky top-0 z-50",
        style: { background: "rgba(249,242,228,0.85)", backdropFilter: "blur(20px)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-6 py-4 flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoSrc, alt: "Pocket Dragon", style: { height: 50, width: "auto", opacity: 0.9 } }) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 py-14 lg:py-20 flex gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "hidden md:flex flex-col gap-1 w-48 shrink-0 pt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.65rem] font-bold uppercase tracking-[0.22em] mb-3", style: { color: "rgba(20,51,34,0.35)" }, children: "Legal" }),
        sidebarLinks.map(({ label, to }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to,
            className: "text-sm py-1.5 transition-colors hover:opacity-80",
            style: { color: "rgba(20,51,34,0.6)" },
            activeProps: { style: { color: "rgba(20,51,34,1)", fontWeight: 600 } },
            children: label
          },
          to
        ))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 min-w-0", children })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-foreground/8 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", style: { color: "#6e6a5e" }, children: "© 2026  Poquito Project LLP. All Rights Reserved." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "mailto:support@pocketdragon.in",
            className: "text-xs transition-colors hover:opacity-70",
            style: { color: "#6e6a5e" },
            children: "support@pocketdragon.in"
          }
        ),
        sidebarLinks.map(({ label, to }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to, className: "text-xs transition-colors hover:opacity-70", style: { color: "#6e6a5e" }, children: label }, to))
      ] })
    ] }) })
  ] });
}
export {
  LegalLayout as L
};
