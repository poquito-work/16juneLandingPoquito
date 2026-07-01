import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PocketDragonLogo, f as forgotPassword, e as resetPassword } from "./Logo-BV4hGwA1.mjs";
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
import "../_libs/axios.mjs";
import "../_libs/form-data.mjs";
import "fs";
import "../_libs/combined-stream.mjs";
import "../_libs/delayed-stream.mjs";
import "path";
import "http";
import "https";
import "url";
import "../_libs/mime-types.mjs";
import "../_libs/mime-db.mjs";
import "../_libs/asynckit.mjs";
import "../_libs/es-set-tostringtag.mjs";
import "../_libs/get-intrinsic.mjs";
import "../_libs/es-object-atoms.mjs";
import "../_libs/es-errors.mjs";
import "../_libs/math-intrinsics.mjs";
import "../_libs/gopd.mjs";
import "../_libs/es-define-property.mjs";
import "../_libs/has-symbols.mjs";
import "../_libs/get-proto.mjs";
import "../_libs/dunder-proto.mjs";
import "../_libs/call-bind-apply-helpers.mjs";
import "../_libs/function-bind.mjs";
import "../_libs/hasown.mjs";
import "../_libs/has-tostringtag.mjs";
import "../_libs/proxy-from-env.mjs";
import "../_libs/https-proxy-agent.mjs";
import "net";
import "tls";
import "assert";
import "../_libs/debug.mjs";
import "../_libs/ms.mjs";
import "tty";
import "../_libs/supports-color.mjs";
import "os";
import "../_libs/has-flag.mjs";
import "../_libs/agent-base.mjs";
import "events";
import "http2";
import "../_libs/follow-redirects.mjs";
import "zlib";
import "./pocket-dragon-logo-B1TjRRiN.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function RouteComponent() {
  const [step, setStep] = reactExports.useState("email");
  const [email, setEmail] = reactExports.useState("");
  const [otp, setOtp] = reactExports.useState(["", "", "", "", "", ""]);
  const [error, setError] = reactExports.useState("");
  const [verifying, setVerifying] = reactExports.useState(false);
  const [resending, setResending] = reactExports.useState(false);
  const [resendSeconds, setResendSeconds] = reactExports.useState(30);
  const inputRefs = reactExports.useRef([]);
  const [newPassword, setNewPassword] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [emailError, setEmailError] = reactExports.useState("");
  const [otpError, setOtpError] = reactExports.useState("");
  const [passwordError, setPasswordError] = reactExports.useState("");
  const [apiError, setApiError] = reactExports.useState("");
  const [apiOTPError, setApiOtpError] = reactExports.useState("");
  const [showPassword, setShowPassword] = reactExports.useState(false);
  function EyeIcon2({
    visible
  }) {
    return visible ? /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "3" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "1", y1: "1", x2: "23", y2: "23" })
    ] });
  }
  reactExports.useEffect(() => {
    if (resendSeconds <= 0) return;
    const t = setTimeout(() => setResendSeconds((s) => s - 1), 1e3);
    return () => clearTimeout(t);
  }, [resendSeconds]);
  function handleOtpChange(i, val) {
    const digit = val.replace(/\D/g, "").slice(-1);
    const next = [...otp];
    next[i] = digit;
    setOtp(next);
    setError("");
    if (digit && i < 5) inputRefs.current[i + 1]?.focus();
  }
  function handleKeyDown(i, e) {
    if (e.key === "Backspace" && !otp[i] && i > 0) {
      inputRefs.current[i - 1]?.focus();
    }
  }
  const validateEmail = () => {
    setEmailError("");
    if (!email.trim()) {
      setEmailError("Email is required.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return false;
    }
    return true;
  };
  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!validateEmail()) return;
    try {
      setLoading(true);
      setApiOtpError("");
      await forgotPassword(email);
      setStep("otp");
    } catch (err) {
      setApiOtpError(err?.response?.data?.message || "Failed to send OTP.");
    } finally {
      setLoading(false);
    }
  };
  function handlePaste(e) {
    e.preventDefault();
    const digits = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6).split("");
    const next = [...otp];
    digits.forEach((d, i) => {
      next[i] = d;
    });
    setOtp(next);
    const lastFilled = Math.min(digits.length, 5);
    inputRefs.current[lastFilled]?.focus();
  }
  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!validateReset()) return;
    try {
      await resetPassword(email, otp.join(""), newPassword);
    } catch (err) {
      setApiError(err?.response?.data?.message || "Something went wrong.");
    }
  };
  const validateReset = () => {
    let valid = true;
    setEmailError("");
    setOtpError("");
    setPasswordError("");
    if (!email.trim()) {
      setEmailError("Email is required.");
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    }
    if (otp.join("").length !== 6) {
      setOtpError("Please enter the 6-digit OTP.");
      valid = false;
    }
    if (!newPassword) {
      setPasswordError("Password is required.");
      valid = false;
    } else if (newPassword.length < 8) {
      setPasswordError("Must be at least 8 characters.");
      valid = false;
    } else if (!/[A-Z]/.test(newPassword)) {
      setPasswordError("Must include at least one uppercase letter.");
      valid = false;
    } else if (!/[a-z]/.test(newPassword)) {
      setPasswordError("Must include at least one lowercase letter.");
      valid = false;
    } else if (!/[0-9]/.test(newPassword)) {
      setPasswordError("Must include at least one digit.");
      valid = false;
    } else if (!/[^A-Za-z0-9]/.test(newPassword)) {
      setPasswordError("Must include at least one special character.");
      valid = false;
    }
    return valid;
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 flex items-center justify-center px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "forgot-wrap w-full max-w-md rounded-2xl bg-white/50 backdrop-blur-xl p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "register-title text-center  mb-4", children: "Forgot Password" }),
      step === "email" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "space-y-5 mt-4", onSubmit: handleSendOtp, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "reg-label mt-6", children: "Enter your email address" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", value: email, onChange: (e) => {
          setEmail(e.target.value);
          setEmailError("");
          setApiOtpError("");
        }, placeholder: "Email Address", className: `dash-input w-full rounded-xl border px-4 py-3 outline-none ${emailError ? "border-red-500" : "border-pq-green/15"}` }),
        emailError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-sm", children: emailError }),
        apiOTPError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg px-4 py-3 text-sm mb-2", style: {
          background: "#FEE2E2",
          color: "#DC2626",
          border: "1px solid #FCA5A5"
        }, children: apiOTPError }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "w-full reg-next-btn rounded-xl bg-[#B65A2F] py-3 text-white", disabled: loading, children: [
          "Continue",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 12h14" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 5l7 7-7 7" })
          ] })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleResetPassword, className: "space-y-5 mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "reg-label", children: "Email Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", value: email, onChange: (e) => {
              setEmail(e.target.value);
              setEmailError("");
            }, className: `dash-input w-full rounded-xl border px-4 py-3 outline-none ${emailError ? "border-red-500" : "border-pq-green/15"}`, placeholder: "Enter email" }),
            emailError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-red-500", children: emailError })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "reg-label", children: "OTP" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reg-otp-boxes", children: otp.map((digit, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: (el) => {
              inputRefs.current[i] = el;
            }, type: "text", inputMode: "numeric", maxLength: 1, value: digit, onChange: (e) => {
              handleOtpChange(i, e.target.value);
              setOtpError("");
            }, onKeyDown: (e) => handleKeyDown(i, e), onPaste: handlePaste, className: `reg-otp-box ${otpError ? "border-red-500" : ""}` }, i)) }),
            otpError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-red-500", children: otpError })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "reg-label", children: "New Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reg-input-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: showPassword ? "text" : "password", value: newPassword, onChange: (e) => {
                setNewPassword(e.target.value);
                setPasswordError("");
              }, className: `dash-input w-full rounded-xl border px-4 py-3 outline-none ${passwordError ? "border-red-500" : "border-pq-green/15"}`, placeholder: "Enter new password" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "reg-eye-btn", onClick: () => setShowPassword((v) => !v), "aria-label": showPassword ? "Hide password" : "Show password", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EyeIcon2, { visible: showPassword }) })
            ] }),
            passwordError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-red-500", children: passwordError })
          ] }),
          apiError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg px-4 py-3 text-sm mb-2", style: {
            background: "#FEE2E2",
            color: "#DC2626",
            border: "1px solid #FCA5A5"
          }, children: apiError })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reg-plans-actions", style: {
          marginTop: "1.5rem"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "reg-back-btn", onClick: () => setStep("email"), disabled: verifying, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19 12H5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 5l-7 7 7 7" })
            ] }),
            "Change Email"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "reg-submit-btn", disabled: verifying || otp.join("").length < 6, children: verifying ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reg-spinner" }),
            "Verifying…"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "Continue",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 12h14" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 5l7 7-7 7" })
            ] })
          ] }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-foreground/8 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", style: {
        color: "rgba(20,51,34,0.35)"
      }, children: "© 2026  Poquito Project LLP. All Rights Reserved." }),
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
