import { useState, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { PocketDragonLogo } from "./Logo";

// ─── City list ───────────────────────────────────────────────────────────────

const CITIES = [
  "Ahmedabad", "Bengaluru", "Bhopal", "Bhubaneswar", "Chandigarh",
  "Chennai", "Coimbatore", "Delhi", "Faridabad", "Ghaziabad",
  "Gurugram", "Hyderabad", "Indore", "Jaipur", "Kochi",
  "Kolkata", "Lucknow", "Ludhiana", "Mumbai", "Nagpur",
  "Nashik", "Noida", "Patna", "Pune", "Rajkot",
  "Surat", "Thane", "Vadodara", "Varanasi", "Visakhapatnam",
  "Other",
];

// ─── Register Header ─────────────────────────────────────────────────────────

function RegisterHeader() {
  return (
    <header
      className="register-header"
      style={{
        background: "rgba(249, 242, 228, 0.92)",
        backdropFilter: "blur(20px) saturate(180%)",
        borderBottom: "1px solid rgba(20, 51, 34, 0.09)",
      }}
    >
      <div className="register-header-inner">
        <Link to="/" aria-label="Back to home">
          <PocketDragonLogo size="lg" />
        </Link>
        <Link
          to="/"
          className="register-back-link text-xs tracking-[0.12em] uppercase transition-colors flex items-center gap-1.5 hover:opacity-70"
        >
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>
    </header>
  );
}

// ─── Register Footer ─────────────────────────────────────────────────────────

function RegisterFooter() {
  return (
    <footer className="border-t border-foreground/8 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs" style={{ color: "rgba(20,51,34,0.35)" }}>
          © 2026 [Pocket Dragon/Poquito]. All Rights Reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link to="/privacy" className="text-xs transition-colors hover:opacity-70" style={{ color: "rgba(20,51,34,0.4)" }}>
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-xs transition-colors hover:opacity-70" style={{ color: "rgba(20,51,34,0.4)" }}>
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}

// ─── Step Indicator (3 steps) ────────────────────────────────────────────────

type Step = 1 | 2 | 3;

const STEP_LABELS: Record<Step, string> = {
  1: "Account Details",
  2: "Verify OTP",
  3: "Choose Plan",
};

function StepIndicator({ step }: { step: Step }) {
  return (
    <div className="reg-stepper">
      {([1, 2, 3] as Step[]).map((s, i) => (
        <>
          <div key={s} className={`reg-step ${step >= s ? "reg-step-active" : "reg-step-inactive"}`}>
            <div className="reg-step-circle">
              {step > s ? (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <span>{s}</span>
              )}
            </div>
            <span className="reg-step-label">{STEP_LABELS[s]}</span>
          </div>
          {i < 2 && (
            <div key={`c${s}`} className={`reg-step-connector ${step > s ? "reg-step-connector-active" : ""}`} />
          )}
        </>
      ))}
    </div>
  );
}

// ─── Eye icon ────────────────────────────────────────────────────────────────

function EyeIcon({ visible }: { visible: boolean }) {
  return visible ? (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ) : (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

// ─── Step 1: Account Details ─────────────────────────────────────────────────

interface RegisterFormData {
  fullName: string;
  city: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  agreed: boolean;
}

interface RegisterFormErrors {
  fullName?: string;
  city?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
  agreed?: string;
}

function StepDetails({
  data,
  onChange,
  onNext,
}: {
  data: RegisterFormData;
  onChange: (field: keyof RegisterFormData, value: string | boolean) => void;
  onNext: () => void;
}) {
  const [errors, setErrors] = useState<RegisterFormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  function validate(): RegisterFormErrors {
    const e: RegisterFormErrors = {};
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

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) onNext();
  }

  return (
    <form className="reg-form" onSubmit={handleSubmit} noValidate>
      <div className="reg-form-grid">

      
        {/* Email */}
        <div className="reg-field">
          <label className="reg-label" htmlFor="reg-email">Email Address <span className="color-red">*</span></label>
          <input
            id="reg-email"
            type="email"
            className={`reg-input ${errors.email ? "reg-input-error" : ""}`}
            placeholder="you@example.com"
            value={data.email}
            onChange={(e) => onChange("email", e.target.value)}
            autoComplete="email"
          />
          {errors.email && <span className="reg-error">{errors.email}</span>}
        </div>

        {/* Phone */}
        <div className="reg-field">
          <label className="reg-label" htmlFor="reg-phone">Phone Number <span style={{ color: "rgba(20,51,34,0.4)", fontWeight: 400 }}></span></label>
          <input
            id="reg-phone"
            type="tel"
            className={`reg-input ${errors.phone ? "reg-input-error" : ""}`}
            placeholder="Your phone"
            value={data.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            autoComplete="tel"
          />
          {errors.phone && <span className="reg-error">{errors.phone}</span>}
        </div>

        {/* Full Name */}
        <div className="reg-field">
          <label className="reg-label" htmlFor="reg-fullname">Username <span className="color-red">*</span> </label>
          <input
            id="reg-fullname"
            type="text"
            className={`reg-input ${errors.fullName ? "reg-input-error" : ""}`}
            placeholder="Your username"
            value={data.fullName}
            onChange={(e) => onChange("fullName", e.target.value)}
            autoComplete="name"
          />
          {errors.fullName && <span className="reg-error">{errors.fullName}</span>}
        </div>

        {/* City dropdown */}
        <div className="reg-field">
          <label className="reg-label" htmlFor="reg-city">City <span className="color-red">*</span></label>
          <div className="reg-select-wrap">
            <select
              id="reg-city"
              className={`reg-input reg-select ${errors.city ? "reg-input-error" : ""} ${!data.city ? "reg-select-placeholder" : ""}`}
              value={data.city}
              onChange={(e) => onChange("city", e.target.value)}
            >
              <option value="" disabled>Select your city</option>
              {CITIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <span className="reg-select-arrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </div>
          {errors.city && <span className="reg-error">{errors.city}</span>}
        </div>


        {/* Password */}
        <div className="reg-field">
          <label className="reg-label" htmlFor="reg-password">Password <span className="color-red">*</span></label>
          <div className="reg-input-wrap">
            <input
              id="reg-password"
              type={showPassword ? "text" : "password"}
              className={`reg-input reg-input-padded ${errors.password ? "reg-input-error" : ""}`}
              placeholder="Min. 8 characters"
              value={data.password}
              onChange={(e) => onChange("password", e.target.value)}
              autoComplete="new-password"
            />
            <button type="button" className="reg-eye-btn" onClick={() => setShowPassword((v) => !v)} aria-label={showPassword ? "Hide password" : "Show password"}>
              <EyeIcon visible={showPassword} />
            </button>
          </div>
          {errors.password && <span className="reg-error">{errors.password}</span>}
        </div>

        {/* Confirm Password */}
        <div className="reg-field">
          <label className="reg-label" htmlFor="reg-confirm">Confirm Password <span className="color-red">*</span></label>
          <div className="reg-input-wrap">
            <input
              id="reg-confirm"
              type={showConfirm ? "text" : "password"}
              className={`reg-input reg-input-padded ${errors.confirmPassword ? "reg-input-error" : ""}`}
              placeholder="Re-enter your password"
              value={data.confirmPassword}
              onChange={(e) => onChange("confirmPassword", e.target.value)}
              autoComplete="new-password"
            />
            <button type="button" className="reg-eye-btn" onClick={() => setShowConfirm((v) => !v)} aria-label={showConfirm ? "Hide password" : "Show password"}>
              <EyeIcon visible={showConfirm} />
            </button>
          </div>
          {errors.confirmPassword && <span className="reg-error">{errors.confirmPassword}</span>}
        </div>

      </div>

      {/* T&C Checkbox — full width below grid */}
      <div className={`reg-checkbox-row ${errors.agreed ? "reg-checkbox-row-error" : ""}`}>
        <label className="reg-checkbox-label">
          <input
            type="checkbox"
            className="reg-checkbox"
            checked={data.agreed}
            onChange={(e) => onChange("agreed", e.target.checked)}
          />
          <span className="reg-checkbox-text">
            I agree to the{" "}
            <Link to="/terms" className="reg-signin-link" target="_blank">Terms of Use</Link>
            {" "}and{" "}
            <Link to="/privacy" className="reg-signin-link" target="_blank">Privacy Policy</Link>
          </span>
        </label>
        {errors.agreed && <span className="reg-error reg-error-checkbox">{errors.agreed}</span>}
      </div>

      <button type="submit" className="reg-next-btn">
        Continue
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
        </svg>
      </button>

      <p className="reg-signin-hint">
        Already have an account?{" "}
        <Link to="/" className="reg-signin-link">Sign In</Link>
      </p>
    </form>
  );
}

// ─── Step 2: OTP Verification ────────────────────────────────────────────────

function StepOTP({
  email,
  onBack,
  onVerified,
}: {
  email: string;
  onBack: () => void;
  onVerified: () => void;
}) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [resendSeconds, setResendSeconds] = useState(30);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Countdown timer for resend
  useEffect(() => {
    if (resendSeconds <= 0) return;
    const t = setTimeout(() => setResendSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [resendSeconds]);

  function handleOtpChange(i: number, val: string) {
    const digit = val.replace(/\D/g, "").slice(-1);
    const next = [...otp];
    next[i] = digit;
    setOtp(next);
    setError("");
    if (digit && i < 5) inputRefs.current[i + 1]?.focus();
  }

  function handleKeyDown(i: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !otp[i] && i > 0) {
      inputRefs.current[i - 1]?.focus();
    }
  }

  function handlePaste(e: React.ClipboardEvent<HTMLInputElement>) {
    e.preventDefault();
    const digits = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6).split("");
    const next = [...otp];
    digits.forEach((d, i) => { next[i] = d; });
    setOtp(next);
    const lastFilled = Math.min(digits.length, 5);
    inputRefs.current[lastFilled]?.focus();
  }

  async function handleVerify() {
    const code = otp.join("");
    if (code.length < 6) { setError("Please enter the 6-digit OTP."); return; }
    setVerifying(true);
    setError("");
    // TODO: call verify-OTP API
    await new Promise((r) => setTimeout(r, 900));
    setVerifying(false);
    onVerified();
  }

  function handleResend() {
    setOtp(["", "", "", "", "", ""]);
    setError("");
    setResendSeconds(30);
    inputRefs.current[0]?.focus();
    // TODO: call resend-OTP API
  }

  return (
    <div className="reg-otp-wrap">
      <div className="reg-otp-hint">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--rust)", flexShrink: 0 }}>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M22 7l-10 7L2 7" />
        </svg>
        <p>
          We sent a 6-digit code to <strong>{email || "your email"}</strong>.<br />
          Enter it below to verify your account.
        </p>
      </div>

      {/* OTP boxes */}
      <div className="reg-otp-boxes">
        {otp.map((digit, i) => (
          <input
            key={i}
            ref={(el) => { inputRefs.current[i] = el; }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            className={`reg-otp-box ${error ? "reg-otp-box-error" : ""} ${digit ? "reg-otp-box-filled" : ""}`}
            value={digit}
            onChange={(e) => handleOtpChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            onPaste={handlePaste}
            autoFocus={i === 0}
          />
        ))}
      </div>

      {error && <p className="reg-otp-error">{error}</p>}

      {/* Resend */}
      <div className="reg-otp-resend">
        {resendSeconds > 0 ? (
          <span className="reg-otp-resend-timer">Resend OTP in {resendSeconds}s</span>
        ) : (
          <button type="button" className="reg-otp-resend-btn" onClick={handleResend}>
            Resend OTP
          </button>
        )}
      </div>

      {/* Actions */}
      <div className="reg-plans-actions" style={{ marginTop: "1.5rem" }}>
        <button type="button" className="reg-back-btn" onClick={onBack} disabled={verifying}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" /><path d="M12 5l-7 7 7 7" />
          </svg>
          Back
        </button>
        <button type="button" className="reg-submit-btn" onClick={handleVerify} disabled={verifying || otp.join("").length < 6}>
          {verifying ? (
            <><span className="reg-spinner" />Verifying…</>
          ) : (
            <>Verify & Continue
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
              </svg>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

// ─── Step 3: Plan Selection ───────────────────────────────────────────────────

function StepPlans({
  onBack,
  onSubmit,
  isLoading,
}: {
  onBack: () => void;
  onSubmit: (plan: "monthly" | "annual") => void;
  isLoading: boolean;
}) {
  const [selected, setSelected] = useState<"monthly" | "annual">("annual");

  return (
    <div className="reg-plans">
      <div className="reg-plans-grid">
        {/* Monthly */}
        <button
          type="button"
          className={`reg-plan-card ${selected === "monthly" ? "reg-plan-card-selected" : ""}`}
          onClick={() => setSelected("monthly")}
        >
          <div className="reg-plan-radio">
            <div className={`reg-plan-radio-dot ${selected === "monthly" ? "reg-plan-radio-dot-active" : ""}`} />
          </div>
          <div className="reg-plan-body">
            <span className="reg-plan-label">Monthly Plan</span>
            <div className="reg-plan-price-row">
              <span className="reg-plan-currency">Rs</span>
              <span className="reg-plan-price">500</span>
              <span className="reg-plan-period">/ month</span>
            </div>
            <p className="reg-plan-note">Excl. GST · Cancel anytime</p>
          </div>
        </button>

        {/* Annual */}
        <button
          type="button"
          className={`reg-plan-card ${selected === "annual" ? "reg-plan-card-selected reg-plan-card-featured" : ""}`}
          onClick={() => setSelected("annual")}
        >
          <div className="reg-plan-badge">Best Value</div>
          <div className="reg-plan-radio">
            <div className={`reg-plan-radio-dot ${selected === "annual" ? "reg-plan-radio-dot-active" : ""}`} />
          </div>
          <div className="reg-plan-body">
            <span className="reg-plan-label">Annual Plan</span>
            <div className="reg-plan-price-row">
              <span className="reg-plan-currency">Rs</span>
              <span className="reg-plan-price">4,500</span>
              <span className="reg-plan-period">/ year</span>
            </div>
            <p className="reg-plan-note">Excl. GST · Save 25% (Rs 375/month)</p>
          </div>
        </button>
      </div>

      <div className="reg-plans-actions">
        <button type="button" className="reg-back-btn" onClick={onBack} disabled={isLoading}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" /><path d="M12 5l-7 7 7 7" />
          </svg>
          Back
        </button>
        <button type="button" className="reg-submit-btn" onClick={() => onSubmit(selected)} disabled={isLoading}>
          {isLoading ? (
            <><span className="reg-spinner" />Creating Account…</>
          ) : (
            <>Create Account
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
              </svg>
            </>
          )}
        </button>
      </div>

      {/* <p className="reg-terms-note">
        By creating an account you agree to our{" "}
        <Link to="/terms" className="reg-signin-link">Terms of Use</Link>
        {" "}and{" "}
        <Link to="/privacy" className="reg-signin-link">Privacy Policy</Link>.
      </p> */}
    </div>
  );
}

// ─── Step titles ─────────────────────────────────────────────────────────────

const STEP_TITLES: Record<Step, { title: string; sub: string }> = {
  1: { title: "Create Your Account", sub: "Fill in your details to join Pocket Dragon." },
  2: { title: "Verify Your Email", sub: "Enter the OTP we sent to your email address." },
  3: { title: "Choose Your Plan", sub: "Select the plan that works best for you." },
};

// ─── Main RegisterPage ────────────────────────────────────────────────────────

export function RegisterPage() {
  const [step, setStep] = useState<Step>(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<RegisterFormData>({
    fullName: "",
    city: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });

  function handleChange(field: keyof RegisterFormData, value: string | boolean) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(plan: "monthly" | "annual") {
    setIsLoading(true);
    // TODO: wire up to register API
    console.log("Register payload:", { ...formData, plan });
    await new Promise((r) => setTimeout(r, 1200));
    setIsLoading(false);
    // TODO: redirect on success
  }

  const { title, sub } = STEP_TITLES[step];

  return (
    <div className="register-page">
      <RegisterHeader />

      <main className="register-main">
        <div className="register-card">
          <div className="register-card-top">
            <span className="register-eyebrow">Get Started</span>
            <h1 className="register-title">{title}</h1>
            <p className="register-subtitle">{sub}</p>
          </div>

          <StepIndicator step={step} />

          <div className="register-step-body">
            {step === 1 && (
              <StepDetails
                data={formData}
                onChange={handleChange}
                onNext={() => setStep(2)}
              />
            )}
            {step === 2 && (
              <StepOTP
                email={formData.email}
                onBack={() => setStep(1)}
                onVerified={() => setStep(3)}
              />
            )}
            {step === 3 && (
              <StepPlans
                onBack={() => setStep(2)}
                onSubmit={handleSubmit}
                isLoading={isLoading}
              />
            )}
          </div>
        </div>
      </main>

      <RegisterFooter />
    </div>
  );
}


