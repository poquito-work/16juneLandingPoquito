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
const CITIES = [
  "Ahmedabad",
  "Bengaluru",
  "Bhopal",
  "Bhubaneswar",
  "Chandigarh",
  "Chennai",
  "Coimbatore",
  "Delhi",
  "Faridabad",
  "Ghaziabad",
  "Gurugram",
  "Hyderabad",
  "Indore",
  "Jaipur",
  "Kochi",
  "Kolkata",
  "Lucknow",
  "Ludhiana",
  "Mumbai",
  "Nagpur",
  "Nashik",
  "Noida",
  "Patna",
  "Pune",
  "Rajkot",
  "Surat",
  "Thane",
  "Vadodara",
  "Varanasi",
  "Visakhapatnam",
  "Other"
];
function RegisterHeader() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "header",
    {
      className: "register-header",
      style: {
        background: "rgba(249, 242, 228, 0.92)",
        backdropFilter: "blur(20px) saturate(180%)",
        borderBottom: "1px solid rgba(20, 51, 34, 0.09)"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "register-header-inner", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", "aria-label": "Back to home", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PocketDragonLogo, { size: "lg" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/",
            className: "register-back-link text-xs tracking-[0.12em] uppercase transition-colors flex items-center gap-1.5 hover:opacity-70",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "14", height: "14", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M10 19l-7-7m0 0l7-7m-7 7h18" }) }),
              "Back to Home"
            ]
          }
        )
      ] })
    }
  );
}
function RegisterFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-foreground/8 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", style: { color: "rgba(20,51,34,0.35)" }, children: "© 2026 [Pocket Dragon/Poquito]. All Rights Reserved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy", className: "text-xs transition-colors hover:opacity-70", style: { color: "rgba(20,51,34,0.4)" }, children: "Privacy Policy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/terms", className: "text-xs transition-colors hover:opacity-70", style: { color: "rgba(20,51,34,0.4)" }, children: "Terms of Use" })
    ] })
  ] }) });
}
const STEP_LABELS = {
  1: "Account Details",
  2: "Verify OTP",
  3: "Choose Plan"
};
function StepIndicator({ step }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reg-stepper", children: [1, 2, 3].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `reg-step ${step >= s ? "reg-step-active" : "reg-step-inactive"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reg-step-circle", children: step > s ? /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "20 6 9 17 4 12" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reg-step-label", children: STEP_LABELS[s] })
    ] }, s),
    i < 2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `reg-step-connector ${step > s ? "reg-step-connector-active" : ""}` }, `c${s}`)
  ] })) });
}
function EyeIcon({ visible }) {
  return visible ? /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "3" })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "1", y1: "1", x2: "23", y2: "23" })
  ] });
}
function StepDetails({
  data,
  onChange,
  onNext
}) {
  const [errors, setErrors] = reactExports.useState({});
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [showConfirm, setShowConfirm] = reactExports.useState(false);
  function validate() {
    const e = {};
    if (!data.fullName.trim()) e.fullName = "Username is required.";
    if (!data.city) e.city = "Please select your city.";
    if (!data.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) e.email = "Please enter a valid email.";
    if (data.phone.trim() && !/^\+?[\d\s\-()]{7,15}$/.test(data.phone.trim())) e.phone = "Please enter a valid phone number.";
    if (!data.password) e.password = "Password is required.";
    else if (data.password.length < 8) e.password = "Password must be at least 8 characters.";
    if (!data.confirmPassword) e.confirmPassword = "Please confirm your password.";
    else if (data.password !== data.confirmPassword) e.confirmPassword = "Passwords do not match.";
    if (!data.agreed) e.agreed = "You must agree to the Terms & Privacy Policy to continue.";
    return e;
  }
  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) onNext();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "reg-form", onSubmit: handleSubmit, noValidate: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reg-form-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reg-field", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "reg-label", htmlFor: "reg-email", children: [
          "Email Address ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "color-red", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            id: "reg-email",
            type: "email",
            className: `reg-input ${errors.email ? "reg-input-error" : ""}`,
            placeholder: "you@example.com",
            value: data.email,
            onChange: (e) => onChange("email", e.target.value),
            autoComplete: "email"
          }
        ),
        errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reg-error", children: errors.email })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reg-field", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "reg-label", htmlFor: "reg-phone", children: [
          "Phone Number ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "rgba(20,51,34,0.4)", fontWeight: 400 } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            id: "reg-phone",
            type: "tel",
            className: `reg-input ${errors.phone ? "reg-input-error" : ""}`,
            placeholder: "Your phone",
            value: data.phone,
            onChange: (e) => onChange("phone", e.target.value),
            autoComplete: "tel"
          }
        ),
        errors.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reg-error", children: errors.phone })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reg-field", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "reg-label", htmlFor: "reg-fullname", children: [
          "Username ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "color-red", children: "*" }),
          " "
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            id: "reg-fullname",
            type: "text",
            className: `reg-input ${errors.fullName ? "reg-input-error" : ""}`,
            placeholder: "Your username",
            value: data.fullName,
            onChange: (e) => onChange("fullName", e.target.value),
            autoComplete: "name"
          }
        ),
        errors.fullName && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reg-error", children: errors.fullName })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reg-field", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "reg-label", htmlFor: "reg-city", children: [
          "City ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "color-red", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reg-select-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              id: "reg-city",
              className: `reg-input reg-select ${errors.city ? "reg-input-error" : ""} ${!data.city ? "reg-select-placeholder" : ""}`,
              value: data.city,
              onChange: (e) => onChange("city", e.target.value),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Select your city" }),
                CITIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c, children: c }, c))
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reg-select-arrow", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "6 9 12 15 18 9" }) }) })
        ] }),
        errors.city && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reg-error", children: errors.city })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reg-field", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "reg-label", htmlFor: "reg-password", children: [
          "Password ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "color-red", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reg-input-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "reg-password",
              type: showPassword ? "text" : "password",
              className: `reg-input reg-input-padded ${errors.password ? "reg-input-error" : ""}`,
              placeholder: "Min. 8 characters",
              value: data.password,
              onChange: (e) => onChange("password", e.target.value),
              autoComplete: "new-password"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "reg-eye-btn", onClick: () => setShowPassword((v) => !v), "aria-label": showPassword ? "Hide password" : "Show password", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EyeIcon, { visible: showPassword }) })
        ] }),
        errors.password && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reg-error", children: errors.password })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reg-field", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "reg-label", htmlFor: "reg-confirm", children: [
          "Confirm Password ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "color-red", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reg-input-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "reg-confirm",
              type: showConfirm ? "text" : "password",
              className: `reg-input reg-input-padded ${errors.confirmPassword ? "reg-input-error" : ""}`,
              placeholder: "Re-enter your password",
              value: data.confirmPassword,
              onChange: (e) => onChange("confirmPassword", e.target.value),
              autoComplete: "new-password"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "reg-eye-btn", onClick: () => setShowConfirm((v) => !v), "aria-label": showConfirm ? "Hide password" : "Show password", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EyeIcon, { visible: showConfirm }) })
        ] }),
        errors.confirmPassword && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reg-error", children: errors.confirmPassword })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `reg-checkbox-row ${errors.agreed ? "reg-checkbox-row-error" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "reg-checkbox-label", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "checkbox",
            className: "reg-checkbox",
            checked: data.agreed,
            onChange: (e) => onChange("agreed", e.target.checked)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "reg-checkbox-text", children: [
          "I agree to the",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/terms", className: "reg-signin-link", target: "_blank", children: "Terms of Use" }),
          " ",
          "and",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy", className: "reg-signin-link", target: "_blank", children: "Privacy Policy" })
        ] })
      ] }),
      errors.agreed && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reg-error reg-error-checkbox", children: errors.agreed })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "reg-next-btn", children: [
      "Continue",
      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 12h14" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 5l7 7-7 7" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "reg-signin-hint", children: [
      "Already have an account?",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "reg-signin-link", children: "Sign In" })
    ] })
  ] });
}
function StepOTP({
  email,
  onBack,
  onVerified
}) {
  const [otp, setOtp] = reactExports.useState(["", "", "", "", "", ""]);
  const [error, setError] = reactExports.useState("");
  const [verifying, setVerifying] = reactExports.useState(false);
  const [resendSeconds, setResendSeconds] = reactExports.useState(30);
  const inputRefs = reactExports.useRef([]);
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
  async function handleVerify() {
    const code = otp.join("");
    if (code.length < 6) {
      setError("Please enter the 6-digit OTP.");
      return;
    }
    setVerifying(true);
    setError("");
    await new Promise((r) => setTimeout(r, 900));
    setVerifying(false);
    onVerified();
  }
  function handleResend() {
    setOtp(["", "", "", "", "", ""]);
    setError("");
    setResendSeconds(30);
    inputRefs.current[0]?.focus();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reg-otp-wrap", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reg-otp-hint", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", style: { color: "var(--rust)", flexShrink: 0 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22 7l-10 7L2 7" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "We sent a 6-digit code to ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: email || "your email" }),
        ".",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Enter it below to verify your account."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reg-otp-boxes", children: otp.map((digit, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        ref: (el) => {
          inputRefs.current[i] = el;
        },
        type: "text",
        inputMode: "numeric",
        maxLength: 1,
        className: `reg-otp-box ${error ? "reg-otp-box-error" : ""} ${digit ? "reg-otp-box-filled" : ""}`,
        value: digit,
        onChange: (e) => handleOtpChange(i, e.target.value),
        onKeyDown: (e) => handleKeyDown(i, e),
        onPaste: handlePaste,
        autoFocus: i === 0
      },
      i
    )) }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "reg-otp-error", children: error }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reg-otp-resend", children: resendSeconds > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "reg-otp-resend-timer", children: [
      "Resend OTP in ",
      resendSeconds,
      "s"
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "reg-otp-resend-btn", onClick: handleResend, children: "Resend OTP" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reg-plans-actions", style: { marginTop: "1.5rem" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "reg-back-btn", onClick: onBack, disabled: verifying, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19 12H5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 5l-7 7 7 7" })
        ] }),
        "Back"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "reg-submit-btn", onClick: handleVerify, disabled: verifying || otp.join("").length < 6, children: verifying ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reg-spinner" }),
        "Verifying…"
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Verify & Continue",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 12h14" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 5l7 7-7 7" })
        ] })
      ] }) })
    ] })
  ] });
}
function StepPlans({
  onBack,
  onSubmit,
  isLoading
}) {
  const [selected, setSelected] = reactExports.useState("annual");
  const billingDate = (() => {
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() + 15);
    return d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
  })();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reg-plans", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reg-plans-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: `reg-plan-card ${selected === "monthly" ? "reg-plan-card-selected" : ""}`,
          onClick: () => setSelected("monthly"),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reg-plan-radio", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `reg-plan-radio-dot ${selected === "monthly" ? "reg-plan-radio-dot-active" : ""}` }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reg-plan-body", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reg-plan-label", children: "Monthly Plan" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reg-plan-price-row", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reg-plan-currency", children: "Rs" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reg-plan-price", children: "500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reg-plan-period", children: "/ month" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "reg-plan-note", children: "Excl. GST · Cancel anytime" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "reg-plan-trial", children: [
                "15-days free trial · Billed from ",
                billingDate
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: `reg-plan-card ${selected === "annual" ? "reg-plan-card-selected reg-plan-card-featured" : ""}`,
          onClick: () => setSelected("annual"),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reg-plan-badge", children: "Best Value" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reg-plan-radio", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `reg-plan-radio-dot ${selected === "annual" ? "reg-plan-radio-dot-active" : ""}` }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reg-plan-body", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reg-plan-label", children: "Annual Plan" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reg-plan-price-row", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reg-plan-currency", children: "Rs" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reg-plan-price", children: "4,500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reg-plan-period", children: "/ year" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "reg-plan-note", children: "Excl. GST · Save 25% (Rs 375/month)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "reg-plan-trial", children: [
                "15-days free trial · Billed from ",
                billingDate
              ] })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reg-plans-actions", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "reg-back-btn", onClick: onBack, disabled: isLoading, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19 12H5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 5l-7 7 7 7" })
        ] }),
        "Back"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "reg-submit-btn", onClick: () => onSubmit(selected), disabled: isLoading, children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reg-spinner" }),
        "Creating Account…"
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Create Account",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 12h14" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 5l7 7-7 7" })
        ] })
      ] }) })
    ] })
  ] });
}
const STEP_TITLES = {
  1: { title: "Create Your Account", sub: "Fill in your details to join Pocket Dragon." },
  2: { title: "Verify Your Email", sub: "Enter the OTP we sent to your email address." },
  3: { title: "Choose Your Plan", sub: "Select the plan that works best for you." }
};
function RegisterPage() {
  const [step, setStep] = reactExports.useState(1);
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [formData, setFormData] = reactExports.useState({
    fullName: "",
    city: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreed: false
  });
  function handleChange(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }
  async function handleSubmit(plan) {
    setIsLoading(true);
    console.log("Register payload:", { ...formData, plan });
    await new Promise((r) => setTimeout(r, 1200));
    setIsLoading(false);
  }
  const { title, sub } = STEP_TITLES[step];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "register-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(RegisterHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "register-main", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "register-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "register-card-top", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "register-eyebrow", children: "Get Started" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "register-title", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "register-subtitle", children: sub })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StepIndicator, { step }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "register-step-body", children: [
        step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          StepDetails,
          {
            data: formData,
            onChange: handleChange,
            onNext: () => setStep(2)
          }
        ),
        step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          StepOTP,
          {
            email: formData.email,
            onBack: () => setStep(1),
            onVerified: () => setStep(3)
          }
        ),
        step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          StepPlans,
          {
            onBack: () => setStep(2),
            onSubmit: handleSubmit,
            isLoading
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RegisterFooter, {})
  ] });
}
const SplitComponent = RegisterPage;
export {
  SplitComponent as component
};
