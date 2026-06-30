import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { g as getTermsCondition, a as getPrivacyPolicy, P as PocketDragonLogo, c as checkEmailExists, b as checkUserExists, s as sendOtp, d as getPredefinedListByType, r as registerUser } from "./Logo-DfoIx9ag.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "crypto";
import "async_hooks";
import "util";
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
  onNext,
  apiError,
  isLoading,
  termsUrl,
  privacyUrl
}) {
  const [errors, setErrors] = reactExports.useState({});
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [showConfirm, setShowConfirm] = reactExports.useState(false);
  const [cityList, setCityList] = reactExports.useState([]);
  reactExports.useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await getPredefinedListByType("city");
        setCityList(response.data.content);
      } catch (error) {
        console.error("Error fetching city list:", error);
      }
    };
    fetchCities();
  }, []);
  function validate() {
    const e = {};
    if (!data.fullName.trim()) e.fullName = "Username is required.";
    if (!data.city) e.city = "Please select your city.";
    if (!data.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) e.email = "Please enter a valid email.";
    if (data.phone.trim() && !/^\+?[\d\s\-()]{7,15}$/.test(data.phone.trim())) e.phone = "Please enter a valid phone number.";
    if (!data.password) e.password = "Password is required.";
    else if (data.password.length < 8) e.password = "Must be at least 8 characters.";
    else if (!/[A-Z]/.test(data.password)) e.password = "Must include at least one uppercase letter.";
    else if (!/[a-z]/.test(data.password)) e.password = "Must include at least one lowercase letter.";
    else if (!/[0-9]/.test(data.password)) e.password = "Must include at least one digit.";
    else if (!/[^A-Za-z0-9]/.test(data.password)) e.password = "Must include at least one special character.";
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
            autoComplete: "tel",
            maxLength: 10
          }
        ),
        errors.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reg-error", children: errors.phone })
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
              onChange: (e) => {
                const selected = cityList.find((c) => c.name === e.target.value);
                onChange("city", e.target.value);
                onChange("cityId", selected?.id ?? 0);
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Select your city" }),
                cityList?.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c.name, children: c.name }, c.uuid))
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reg-select-arrow", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "6 9 12 15 18 9" }) }) })
        ] }),
        errors.city && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reg-error", children: errors.city })
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
              placeholder: "Min. 8 chars, A-Z, a-z, 0-9, @#$…",
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: termsUrl || "/terms", className: "reg-signin-link", target: "_blank", rel: "noreferrer", children: "Terms & Conditions " }),
          " ",
          "and",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: privacyUrl || "/privacy", className: "reg-signin-link", target: "_blank", rel: "noreferrer", children: "Privacy Policy" })
        ] })
      ] }),
      errors.agreed && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reg-error reg-error-checkbox", children: errors.agreed })
    ] }),
    apiError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg px-4 py-3 text-sm mb-2", style: { background: "#FEE2E2", color: "#DC2626", border: "1px solid #FCA5A5" }, children: apiError }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "reg-next-btn", disabled: isLoading, children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reg-spinner" }),
      "Registering…"
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "Get Started" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "reg-signin-hint", children: [
      "Already have an account?",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "reg-signin-link", children: "Sign In" })
    ] })
  ] });
}
function StepOTP({
  email,
  formData,
  onBack,
  onVerified
}) {
  const [otp, setOtp] = reactExports.useState(["", "", "", "", "", ""]);
  const [error, setError] = reactExports.useState("");
  const [verifying, setVerifying] = reactExports.useState(false);
  const [resending, setResending] = reactExports.useState(false);
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
    try {
      const response = await registerUser({
        username: formData.fullName,
        email: formData.email,
        phone_number: formData.phone.trim() || null,
        password: formData.password,
        city_id: formData.cityId,
        otp: code,
        role_name: "user",
        is_terms_condition_accepted: true,
        is_privacy_policy: true
      });
      if (response?.data?.access_token) {
        localStorage.setItem("access_token", response.data?.access_token);
        localStorage.setItem("userData", JSON.stringify(response));
        window.dispatchEvent(new Event("auth-change"));
      }
      onVerified();
    } catch (err) {
      setError(
        err?.response?.data?.message || err?.response?.data?.error || "Verification failed. Please try again."
      );
    } finally {
      setVerifying(false);
    }
  }
  async function handleResend() {
    setOtp(["", "", "", "", "", ""]);
    setError("");
    setResendSeconds(30);
    inputRefs.current[0]?.focus();
    setResending(true);
    try {
      await sendOtp(email, "EMAIL_OTP");
    } catch {
    } finally {
      setResending(false);
    }
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
const STEP_TITLES = {
  1: { title: "Create  Account", sub: "Email verification is required before your account goes live" },
  2: { title: "Verify Your Email", sub: "Enter the OTP we sent to your email address." }
  // 3: { title: "Choose Your Plan", sub: "Select the plan that works best for you." },
};
function RegisterPage() {
  const [step, setStep] = reactExports.useState(1);
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [apiError, setApiError] = reactExports.useState("");
  const [termsUrl, setTermsUrl] = reactExports.useState("");
  const [privacyUrl, setPrivacyUrl] = reactExports.useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = reactExports.useState({
    fullName: "",
    city: "",
    cityId: 0,
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreed: false
  });
  reactExports.useEffect(() => {
    const fetchComplianceDocs = async () => {
      try {
        const [termsRes, privacyRes] = await Promise.all([
          getTermsCondition(),
          getPrivacyPolicy()
        ]);
        if (termsRes?.data?.content_url) setTermsUrl(termsRes.data.content_url);
        if (privacyRes?.data?.content_url) setPrivacyUrl(privacyRes.data.content_url);
      } catch (error) {
        console.error("Error fetching compliance docs:", error);
      }
    };
    fetchComplianceDocs();
  }, []);
  function handleChange(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }
  async function handleStep1Next() {
    setIsLoading(true);
    setApiError("");
    try {
      const [emailRes, usernameRes] = await Promise.all([
        checkEmailExists(formData.email),
        checkUserExists(formData.fullName)
      ]);
      if (emailRes?.data?.is_available === false) {
        setApiError("An account with this email already exists. Please sign in.");
        return;
      }
      if (usernameRes?.data?.is_available === false) {
        setApiError("An account with this username already exists. Please sign in.");
        return;
      }
      await sendOtp(formData.email, "EMAIL_OTP");
      setStep(2);
    } catch (err) {
      setApiError(
        err?.response?.data?.message || err?.response?.data?.error
      );
    } finally {
      setIsLoading(false);
    }
  }
  const { title, sub } = STEP_TITLES[step];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "register-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(RegisterHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "register-main", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "register-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "register-card-top", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "register-title", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "register-subtitle mb-5", children: sub })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "register-step-body", children: [
        step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          StepDetails,
          {
            data: formData,
            onChange: handleChange,
            onNext: handleStep1Next,
            apiError,
            isLoading,
            termsUrl,
            privacyUrl
          }
        ),
        step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          StepOTP,
          {
            email: formData.email,
            formData,
            onBack: () => setStep(1),
            onVerified: () => navigate({ to: "/myaccount/profile" })
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
