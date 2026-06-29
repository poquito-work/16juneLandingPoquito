import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PocketDragonLogo } from "./Logo-D5gpayti.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./pocket-dragon-logo-B1TjRRiN.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function RouteComponent() {
  const [step, setStep] = reactExports.useState("email");
  const [email, setEmail] = reactExports.useState("");
  const [otp, setOtp] = reactExports.useState("");
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setStep("otp");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "register-header", style: {
      background: "rgba(249, 242, 228, 0.92)",
      backdropFilter: "blur(20px) saturate(180%)",
      borderBottom: "1px solid rgba(20, 51, 34, 0.09)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "register-header-inner", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", "aria-label": "Back to home", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PocketDragonLogo, { size: "lg" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "register-back-link text-xs tracking-[0.12em] uppercase transition-colors flex items-center gap-1.5 hover:opacity-70", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "14", height: "14", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M10 19l-7-7m0 0l7-7m-7 7h18" }) }),
        "Back to Home"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 flex items-center justify-center px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md rounded-2xl bg-white/50 backdrop-blur-xl p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "register-title text-center  mb-4", children: "Forgot Password" }),
      step === "email" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "space-y-5", onSubmit: handleSendOtp, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "reg-label mt-6", children: "Enter your email address" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "Email Address", className: "w-full rounded-xl border border-pq-green/15 bg-white/60 px-4 py-3 outline-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full rounded-xl bg-[#B65A2F] py-3 text-white", children: "Send OTP" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
      }, className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-pq-green/70", children: [
          "We've sent a verification code to ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: email }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Enter OTP", value: otp, onChange: (e) => setOtp(e.target.value), className: "w-full rounded-xl border border-pq-green/15 bg-white/60 px-4 py-3 outline-none text-center tracking-[0.5em]", maxLength: 6 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full rounded-xl bg-[#B65A2F] py-3 text-white", children: "Verify OTP" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setStep("email"), className: "w-full text-sm text-pq-green hover:underline", children: "Change Email" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-foreground/8 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", style: {
        color: "rgba(20,51,34,0.35)"
      }, children: "© 2026 [Pocket Dragon/Poquito]. All Rights Reserved." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy", className: "text-xs transition-colors hover:opacity-70", style: {
          color: "rgba(20,51,34,0.4)"
        }, children: "Privacy Policy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/terms", className: "text-xs transition-colors hover:opacity-70", style: {
          color: "rgba(20,51,34,0.4)"
        }, children: "Terms of Use" })
      ] })
    ] }) })
  ] });
}
export {
  RouteComponent as component
};
