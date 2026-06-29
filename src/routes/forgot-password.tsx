import { createFileRoute, Link } from "@tanstack/react-router";
import { PocketDragonLogo } from "@/components/poquito/Logo";
import { useState } from "react";

export const Route = createFileRoute("/forgot-password")({
  component: RouteComponent,
});

function RouteComponent() {
    const [step, setStep] = useState<"email" | "otp">("email");
const [email, setEmail] = useState("");
const [otp, setOtp] = useState("");

const handleSendOtp = async (e: React.FormEvent) => {
  e.preventDefault();

  // await forgotPassword(email);

  setStep("otp");
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
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>
    </header>


      <main className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-md rounded-2xl bg-white/50 backdrop-blur-xl p-8">
          <h1 className="register-title text-center  mb-4">Forgot Password</h1>

         
           {step === "email" ? (
          <form className="space-y-5"  onSubmit={handleSendOtp} >
             <p className="reg-label mt-6">
            Enter your email address 
          </p>
            <input
              type="email"
               value={email}
                onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full rounded-xl border border-pq-green/15 bg-white/60 px-4 py-3 outline-none"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-[#B65A2F] py-3 text-white"
            >
              Send OTP
            </button>
          </form>
          ) : (
            <form
    onSubmit={(e) => {
      e.preventDefault();
      // Verify OTP
    }}
    className="space-y-5"
  >
    <p className="text-sm text-pq-green/70">
      We've sent a verification code to <b>{email}</b>.
    </p>

    <input
      type="text"
      placeholder="Enter OTP"
      value={otp}
      onChange={(e) => setOtp(e.target.value)}
      className="w-full rounded-xl border border-pq-green/15 bg-white/60 px-4 py-3 outline-none text-center tracking-[0.5em]"
      maxLength={6}
    />

    <button
      type="submit"
      className="w-full rounded-xl bg-[#B65A2F] py-3 text-white"
    >
      Verify OTP
    </button>

    <button
      type="button"
      onClick={() => setStep("email")}
      className="w-full text-sm text-pq-green hover:underline"
    >
      Change Email
    </button>
  </form>
  )}
        </div>
      </main>

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
    </div>
  );
}