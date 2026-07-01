import { createFileRoute, Link } from "@tanstack/react-router";
import { PocketDragonLogo } from "@/components/poquito/Logo";
import { useEffect, useRef, useState } from "react";
import { forgotPassword, resetPassword } from "@/services/auth";
import { EyeIcon } from "lucide-react";

export const Route = createFileRoute("/forgot-password")({
  component: RouteComponent,
});

function RouteComponent() {
  const [step, setStep] = useState<"email" | "otp">("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [resending, setResending] = useState(false);
  const [resendSeconds, setResendSeconds] = useState(30);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [apiError, setApiError] = useState("");
   const [apiOTPError, setApiOtpError] = useState("");
  
  const [showPassword, setShowPassword] = useState(false);

  function EyeIcon({ visible }: { visible: boolean }) {
    return visible ? (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ) : (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
    );
  }

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

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail()) return;

    try {
      setLoading(true);
      setApiOtpError("");

      await forgotPassword(email);

      setStep("otp");
      // setResendSeconds(30);
    } catch (err: any) {
      setApiOtpError(err?.response?.data?.message || "Failed to send OTP.");
    } finally {
      setLoading(false);
    }
  };

  function handlePaste(e: React.ClipboardEvent<HTMLInputElement>) {
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

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateReset()) return;

    // await resetPassword(email, otp.join(""), newPassword);

    try {
  await resetPassword(email, otp.join(""), newPassword);
} catch (err: any) {
  setApiError(
    err?.response?.data?.message ||
    "Something went wrong."
  );
}

  };

  const validateReset = () => {
    let valid = true;

    setEmailError("");
    setOtpError("");
    setPasswordError("");

    // Email
    if (!email.trim()) {
      setEmailError("Email is required.");
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    }

    // OTP
    if (otp.join("").length !== 6) {
      setOtpError("Please enter the 6-digit OTP.");
      valid = false;
    }

    // Password
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

  return (
    <div className="min-h-screen flex flex-col">
      {/* <RegisterHeader /> */}
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
            <svg
              width="14"
              height="14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6">
        <div className="forgot-wrap w-full max-w-md rounded-2xl bg-white/50 backdrop-blur-xl p-8">
          <h1 className="register-title text-center  mb-4">Forgot Password</h1>

          {step === "email" ? (
            <form className="space-y-5 mt-4" onSubmit={handleSendOtp}>
              <p className="reg-label mt-6">Enter your email address</p>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                  setApiOtpError("");
                }}
                placeholder="Email Address"
                className={`dash-input w-full rounded-xl border px-4 py-3 outline-none ${
                  emailError ? "border-red-500" : "border-pq-green/15"
                }`}
              />

              {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

                 {apiOTPError && (  <div className="rounded-lg px-4 py-3 text-sm mb-2" style={{ background: "#FEE2E2", color: "#DC2626", border: "1px solid #FCA5A5" }}>
          {apiOTPError}
        </div>
          )}

              <button
                type="submit"
                className="w-full reg-next-btn rounded-xl bg-[#B65A2F] py-3 text-white"
                disabled={loading}
              >
                Continue{" "}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          ) : (
            <form onSubmit={handleResetPassword} className="space-y-5 mt-4">
              <div className="space-y-5">
                {/* Email */}
                <div>
                  <label className="reg-label">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError("");
                    }}
                    className={`dash-input w-full rounded-xl border px-4 py-3 outline-none ${
                      emailError ? "border-red-500" : "border-pq-green/15"
                    }`}
                    placeholder="Enter email"
                  />
                  {emailError && <p className="mt-1 text-sm text-red-500">{emailError}</p>}
                </div>

                {/* OTP */}
                <div>
                  <label className="reg-label">OTP</label>

                  <div className="reg-otp-boxes">
                    {otp.map((digit, i) => (
                      <input
                        key={i}
                        ref={(el) => {
                          inputRefs.current[i] = el;
                        }}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => {
                          handleOtpChange(i, e.target.value);
                          setOtpError("");
                        }}
                        onKeyDown={(e) => handleKeyDown(i, e)}
                        onPaste={handlePaste}
                        className={`reg-otp-box ${otpError ? "border-red-500" : ""}`}
                      />
                    ))}
                  </div>

                  {otpError && <p className="mt-1 text-sm text-red-500">{otpError}</p>}
                </div>

                {/* New Password */}
                <div>
                  <label className="reg-label">New Password</label>
                  <div className="reg-input-wrap">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => {
                        setNewPassword(e.target.value);
                        setPasswordError("");
                      }}
                      className={`dash-input w-full rounded-xl border px-4 py-3 outline-none ${
                        passwordError ? "border-red-500" : "border-pq-green/15"
                      }`}
                      placeholder="Enter new password"
                    />
                    <button
                      type="button"
                      className="reg-eye-btn"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      <EyeIcon visible={showPassword} />
                    </button>
                  </div>
                  {passwordError && <p className="mt-1 text-sm text-red-500">{passwordError}</p>}
                </div>

                {apiError && (
                       <div className="rounded-lg px-4 py-3 text-sm mb-2" style={{ background: "#FEE2E2", color: "#DC2626", border: "1px solid #FCA5A5" }}>
          {apiError}
        </div>
                )}
              </div>

              {/* <div className="reg-otp-boxes">
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
      </div> */}

              {/* <button
      type="submit"
      className="w-full rounded-xl bg-[#B65A2F] py-3 text-white"
    >
      Verify OTP
    </button> */}

              {/* <button
      type="button"
      onClick={() => setStep("email")}
      className="cursor-pointer w-full text-sm text-pq-green hover:underline"
    >
      Change Email
    </button> */}
              {/* <div className="reg-otp-resend">
        {resendSeconds > 0 ? (
          <span className="reg-otp-resend-timer">Resend OTP in {resendSeconds}s</span>
        ) : (
          <button type="button" className="reg-otp-resend-btn">
            Resend OTP
          </button>
        )}
      </div> */}

              <div className="reg-plans-actions" style={{ marginTop: "1.5rem" }}>
                <button
                  type="button"
                  className="reg-back-btn"
                  onClick={() => setStep("email")}
                  disabled={verifying}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 12H5" />
                    <path d="M12 5l-7 7 7 7" />
                  </svg>
                  Change Email
                </button>
                <button
                  type="submit"
                  className="reg-submit-btn"
                  disabled={verifying || otp.join("").length < 6}
                >
                  {verifying ? (
                    <>
                      <span className="reg-spinner" />
                      Verifying…
                    </>
                  ) : (
                    <>
                      Continue
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </main>

      <footer className="border-t border-foreground/8 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "rgba(20,51,34,0.35)" }}>
            © 2026  Poquito Project LLP. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-xs transition-colors hover:opacity-70"
              style={{ color: "rgba(20,51,34,0.4)" }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-xs transition-colors hover:opacity-70"
              style={{ color: "rgba(20,51,34,0.4)" }}
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
