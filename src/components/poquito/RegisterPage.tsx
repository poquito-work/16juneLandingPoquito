import { useState, useRef, useEffect } from "react";
import { Link, Navigate, useNavigate } from "@tanstack/react-router";
import { checkEmailExists, checkUserExists, getPredefinedListByType, getPrivacyPolicy, getTermsCondition, registerUser, sendOtp, verifyOtp } from "@/services/auth";
import { PocketDragonLogo } from "./Logo";
import uploadLogo from "@/assets/poquito-boy.png";



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

type Step = 1 | 2 ;

// const STEP_LABELS: Record<Step, string> = {
//   1: "Account Details",
//   2: "Verify OTP",
//   // 3: "Choose Plan",
// };

// function StepIndicator({ step }: { step: Step }) {
//   return (
//     <div className="reg-stepper">
//       {([1, 2] as Step[]).map((s, i) => (
//         <>
//           <div key={s} className={`reg-step ${step >= s ? "reg-step-active" : "reg-step-inactive"}`}>
//             <div className="reg-step-circle">
//               {step > s ? (
//                 <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                   <polyline points="20 6 9 17 4 12" />
//                 </svg>
//               ) : (
//                 <span>{s}</span>
//               )}
//             </div>
//             <span className="reg-step-label">{STEP_LABELS[s]}</span>
//           </div>
//           {i < 1 && (
//             <div key={`c${s}`} className={`reg-step-connector ${step > s ? "reg-step-connector-active" : ""}`} />
//           )}
//         </>
//       ))}
//     </div>
//   );
// }

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
  cityId: number;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  agreed: boolean;
  avatar_url: string,
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
  apiError,
  isLoading,
  termsUrl,
  privacyUrl,
}: {
  data: RegisterFormData;
  onChange: (field: keyof RegisterFormData, value: string | boolean | number) => void;
  onNext: () => void;
  apiError: string;
  isLoading: boolean;
  termsUrl: string;
  privacyUrl: string;
}) {
  const [errors, setErrors] = useState<RegisterFormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [cityList, setCityList] = useState([]);
const fileInputRef = useRef<HTMLInputElement>(null);
const [avatarList, setAvatarList] = useState<any[]>([]);
const [showAvatarDialog, setShowAvatarDialog] = useState(false);
  useEffect(() => {
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


   useEffect(() => {
    const fetchAvtarList = async () => {
      try {
        const response = await getPredefinedListByType("AVATAR");
        setAvatarList(response.data.content);
      } catch (error) {
        console.error("Error fetching city list:", error);
      }
    };
    fetchAvtarList();
  }, []);

  function validate(): RegisterFormErrors {
    const e: RegisterFormErrors = {};
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

  const isFormValid =
  data.fullName.trim() !== "" &&
  data.city !== "" &&
  data.email.trim() !== "" &&
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()) &&
  (
    data.phone.trim() === "" ||
    /^\+?[\d\s\-()]{7,15}$/.test(data.phone.trim())
  ) &&
  data.password.length >= 8 &&
  /[A-Z]/.test(data.password) &&
  /[a-z]/.test(data.password) &&
  /[0-9]/.test(data.password) &&
  /[^A-Za-z0-9]/.test(data.password) &&
  data.confirmPassword !== "" &&
  data.password === data.confirmPassword &&
  data.agreed;

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) onNext();
  }

 

  return (
    
    <form className="reg-form" onSubmit={handleSubmit} noValidate>
 {/* <div className="avatar-wrapper">
  <img
    src={data.avatar_url || uploadLogo}
    alt="Avatar"
    className="uploadLogo"
  />

  <button
    type="button"
    className="avatar-plus"
    onClick={() => setShowAvatarDialog(true)}
  >
    +
  </button>
</div>

<p className="avatar-text">
  Tap to choose your avatar
</p> */}

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
            maxLength={10}
          />
          {errors.phone && <span className="reg-error">{errors.phone}</span>}
        </div>

            <div className="reg-field">
          <label className="reg-label" htmlFor="reg-city">City <span className="color-red">*</span></label>
          <div className="reg-select-wrap">
            <select
              id="reg-city"
              className={`reg-input reg-select ${errors.city ? "reg-input-error" : ""} ${!data.city ? "reg-select-placeholder" : ""}`}
              value={data.city}
              onChange={(e) => {
                const selected = cityList.find((c: any) => c.name === e.target.value) as any;
                onChange("city", e.target.value);
                onChange("cityId", selected?.id ?? 0);
              }}
            >
              <option value="" disabled>Select your city</option>
              {cityList?.map((c: any) => (
                <option key={c.uuid} value={c.name}>{c.name}</option>
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
    


        {/* Password */}
        <div className="reg-field">
          <label className="reg-label" htmlFor="reg-password">Password <span className="color-red">*</span></label>
          <div className="reg-input-wrap">
            <input
              id="reg-password"
              type={showPassword ? "text" : "password"}
              className={`reg-input reg-input-padded ${errors.password ? "reg-input-error" : ""}`}
              placeholder="Min. 8 chars, A-Z, a-z, 0-9, @#$…"
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
            <a href={termsUrl || "/terms"} className="reg-signin-link" target="_blank" rel="noreferrer">Terms & Conditions </a>
            {" "}and{" "}
            <a href={privacyUrl || "/privacy"} className="reg-signin-link" target="_blank" rel="noreferrer">Privacy Policy</a>
          </span>
        </label>
        {errors.agreed && <span className="reg-error reg-error-checkbox">{errors.agreed}</span>}
      </div>

      {apiError && (
        <div className="rounded-lg px-4 py-3 text-sm mb-2" style={{ background: "#FEE2E2", color: "#DC2626", border: "1px solid #FCA5A5" }}>
          {apiError}
        </div>
      )}

      <button type="submit" className="reg-next-btn"  disabled={isLoading || !isFormValid}>
        {isLoading ? (
          <><span className="reg-spinner" />Registering…</>
        ) : (
          <>Get Started
            {/* <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
            </svg> */}
          </>
        )}
      </button>

      <p className="reg-signin-hint">
        Already have an account?{" "}
        <Link to="/" className="reg-signin-link">Sign In</Link>
      </p>


       {showAvatarDialog && (
  <div
    className="avatar-modal-overlay"
    onClick={() => setShowAvatarDialog(false)}
  >
    <div
      className="avatar-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="avatar-modal-header">
        <h3>Select Avatar</h3>

        <button
          type="button"
          onClick={() => setShowAvatarDialog(false)}
        >
          ✕
        </button>
      </div>

      <div className="avatar-grid">
        {avatarList.map((avatar) => (
          <img
            key={avatar.id}
            src={avatar.url}
            className={`avatar-item ${
              data.avatar_url === avatar.url ? "selected" : ""
            }`}
            onClick={() => {
              onChange("avatar_url", avatar.url);
              setShowAvatarDialog(false);
            }}
          />
        ))}
      </div>
    </div>
  </div>
)}

    </form>



  );

  
  
}

// ─── Step 2: OTP Verification ────────────────────────────────────────────────

function StepOTP({
  email,
  formData,
  onBack,
  onVerified,
}: {
  email: string;
  formData: RegisterFormData;
  onBack: () => void;
  onVerified: () => void;
}) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [resending, setResending] = useState(false);
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
    try {
      // await verifyOtp({ identifier: email, otp: code, otp_type: "EMAIL_OTP" });
      const response = await registerUser({
        username: formData.fullName,
        email: formData.email,
        phone_number: formData.phone.trim() || null,
        password: formData.password,
        city_id: formData.cityId,
        otp: code,
        role_name: "user",
        is_terms_condition_accepted: true,
        is_privacy_policy: true,
        avatar_url: formData.avatar_url,
      });

     if (response?.data?.access_token) {
      localStorage.setItem("access_token", response.data?.access_token);
      localStorage.setItem("userData", JSON.stringify(response));
      window.dispatchEvent(new Event("auth-change"));
    }

      onVerified();
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        "Verification failed. Please try again."
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
      // silently ignore resend errors
    } finally {
      setResending(false);
    }
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
  const billingDate = (() => {
    const d = new Date();
    d.setDate(d.getDate() + 15);
    return d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
  })();
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
             <p className="reg-plan-trial">15-days free trial · Billed from {billingDate}</p>
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
                         <p className="reg-plan-trial">15-days free trial · Billed from {billingDate}</p>

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
  1: { title: "Create  Account", sub: "Email verification is required before your account goes live" },
  2: { title: "Verify Your Email", sub: "Enter the OTP we sent to your email address." },
  // 3: { title: "Choose Your Plan", sub: "Select the plan that works best for you." },
};

// ─── Main RegisterPage ────────────────────────────────────────────────────────

export function RegisterPage() {
  const [step, setStep] = useState<Step>(1);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [termsUrl, setTermsUrl] = useState("");
  const [privacyUrl, setPrivacyUrl] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegisterFormData>({
    fullName: "",
    city: "",
    cityId: 0,
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreed: false,
    avatar_url:"http://13.207.123.199/avatar/poquito-boy.png"
  });

  useEffect(() => {
    const fetchComplianceDocs = async () => {
      try {
        const [termsRes, privacyRes] = await Promise.all([
          getTermsCondition(),
          getPrivacyPolicy(),
        ]);
        if (termsRes?.data?.content_url) setTermsUrl(termsRes.data.content_url);
        if (privacyRes?.data?.content_url) setPrivacyUrl(privacyRes.data.content_url);
      } catch (error) {
        console.error("Error fetching compliance docs:", error);
      }
    };
    fetchComplianceDocs();
  }, []);

  function handleChange(field: keyof RegisterFormData, value: string | boolean | number) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleStep1Next() {
    setIsLoading(true);
    setApiError("");
    try {
      const [emailRes, usernameRes] = await Promise.all([
        checkEmailExists(formData.email),
        checkUserExists(formData.fullName),
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
    } catch (err: any) {
      setApiError(
        err?.response?.data?.message ||
        err?.response?.data?.error
      );
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSubmit(plan: "monthly" | "annual") {
    setIsLoading(true);
    // TODO: wire up to plan selection API
    console.log("Plan selected:", plan);
    await new Promise((r) => setTimeout(r, 800));
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
            {/* <span className="register-eyebrow">Get Started</span> */}
            <h1 className="register-title">{title}</h1>
            <p className="register-subtitle mb-5">{sub}</p>
          </div>

          {/* <StepIndicator step={step} /> */}

          <div className="register-step-body">
            {step === 1 && (
              <StepDetails
                data={formData}
                onChange={handleChange}
                onNext={handleStep1Next}
                apiError={apiError}
                isLoading={isLoading}
                termsUrl={termsUrl}
                privacyUrl={privacyUrl}
              />
            )}
            {step === 2 && (
              <StepOTP
                email={formData.email}
                formData={formData}
                onBack={() => setStep(1)}
                // onVerified={() => setStep(3)}
               onVerified={() => navigate({ to: "/myaccount/profile" })}
              />
            )}
            {/* {step === 3 && (
              <StepPlans
                onBack={() => setStep(2)}
                onSubmit={handleSubmit}
                isLoading={isLoading}
              />
            )} */}
          </div>
        </div>
      </main>

      <RegisterFooter />
    </div>
  );
}