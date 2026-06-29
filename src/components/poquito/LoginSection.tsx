import { motion } from 'framer-motion'
import logoSrc from '@/assets/pocket-dragon-logo.png'
import { useState } from 'react'
import { loginUser } from "@/services/auth";
import { Link, useNavigate } from '@tanstack/react-router'
import { Radar, Trophy, WifiOff } from 'lucide-react';
const EASE = [0.22, 0.61, 0.36, 1] as const

export function LoginSection() {
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [focused, setFocused]   = useState<string | null>(null)
  const [showPass, setShowPass] = useState(false)
  const navigate = useNavigate()
const features = [
  {
    title: "Offline Supported",
    icon: <WifiOff className="h-5 w-5 text-offwhite" />,
  },
  {
    title: "5 Ranked Tiers",
    icon: <Trophy className="h-5 w-5 text-offwhite" />,
  },
  {
    title: "Smart Matchmaking",
    icon: <Radar className="h-5 w-5 text-offwhite" />,
  },
];
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
  const handleLogin = async () => {
  setError("");

  if (!email.trim()) {
    setError("Please enter your email");
    return;
  }

  if (!password.trim()) {
    setError("Please enter your password");
    return;
  }

  try {
    setLoading(true);

    const response = await loginUser(
      email.trim(),
      password
    );

    console.log("Login Success:", response);

    if (response?.data?.access_token) {
      localStorage.setItem("access_token", response.data?.access_token);
      localStorage.setItem("userData", response.data);
      window.dispatchEvent(new Event("auth-change"));
      navigate({ to: "/myaccount/profile" });
    }

  } catch (err: any) {
    console.error("Login Error:", err);

    setError(
      err?.response?.data?.message ||
      err?.response?.data?.error ||
      "Invalid email or password"
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <section id="login" className="relative overflow-hidden pt-15">

      {/* Gradient: beige top-left → rust mid → deep green bottom-right */}
      <div
        className="absolute inset-0"
        style={{
    background:
          // 'linear-gradient(110deg, #E7B59B 0%, #D48A63 30%, #B65A2F 65%, #8F3F1E 100%)'
      // 'linear-gradient(110deg, rgba(10, 28, 18, 0.95) 0%, rgba(12, 35, 24, 0.90) 35%, rgba(20, 51, 34, 0.75) 65%, rgba(20, 51, 34, 0.55) 100%)',
        'linear-gradient(110deg,rgba(94, 45, 23, 0.98) 0%,rgba(122, 59, 31, 0.95) 25%,rgba(154, 76, 40, 0.90) 50%,rgba(182, 90, 47, 0.85) 75%,rgba(214, 122, 76, 0.80) 100%)',
          
    }}
      />

      {/* Radial cream highlight top-left */}
      <div
        aria-hidden
        className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none"
      />

      {/* Radial rust highlight center */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT — Editorial copy */}
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-pq-white" />
              <span className="text-[0.72rem] font-bold text-offwhite uppercase tracking-[0.32em]">Member Access</span>
              <span className="h-px w-8 bg-pq-white" />

            </div>

            {/* Headline */}
            <h2
              className="font-hero font-bold text-offwhite leading-tight tracking-tight text-balance mb-6"
              style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)' }}
            >
              READY WHEN YOU ARE
            </h2>

            <p className="text-offwhite leading-relaxed mb-10 max-w-sm font-normal">
              Connect with friends and to-be friends. Enjoy the game at your pace. 
            </p>

            {/* Stats */}
            {/* <div className="flex items-center gap-8">
              {[
                { label: 'Players',     value: '10K+' },
                { label: 'Tables Live', value: '340+' },
                // { label: 'Avg. Game',   value: '22 min' },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="font-hero font-bold text-offwhite text-2xl">{value}</span>
                  <span className="text-offwhite text-[10px] tracking-[0.14em] uppercase font-normal">{label}</span>
                </div>
              ))}
            </div> */}

            <div className="flex flex-wrap items-center gap-6">
  {features.map(({ title, icon }) => (
    <div
      key={title}
      className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rust/15">
        {icon}
      </div>

      <span className="font-medium text-offwhite">
        {title}
      </span>
    </div>
  ))}
</div>
          </motion.div>

          {/* RIGHT — Login form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          >
            <div
              className="rounded-2xl p-8 lg:p-10 border"
              style={{
                background: 'rgb(249 242 228 / 53%)',
                borderColor: 'rgba(20,51,34,0.10)',
                backdropFilter: 'blur(24px)',
                boxShadow: '0 24px 64px rgba(20,51,34,0.10)',
              }}
            >
              {/* Logo */}
              <div className="mb-7">
                <img src={logoSrc} alt="Poquito" width={110} height={38} className="opacity-90 logoSign" />
              </div>

              <h3
                className="font-hero font-bold  mb-1.5"
                style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)',color: 'var(--foreground)' }}
              >
                <span style={{ color: 'var(--foreground)' }}>Sign</span> In
              </h3>
              <p className="text-green text-sm mb-8 font-normal">
                Enter your world of Mahjong
              </p>

              <form className="flex flex-col gap-5"  onSubmit={async (e) => {
    e.preventDefault();
    // await handleLogin();
  }}>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-green text-xs tracking-[0.14em] uppercase font-normal">
                    Email Address
                  </label>
                  <div
                    className="relative rounded-xl transition-all duration-300"
                    style={{
                        background: "rgba(249,242,228,0.12)",
  border: "1px solid rgba(20,51,34,0.15)",
  backdropFilter: "blur(8px)",
                      // border: `1.5px solid ${focused === 'email' ? 'rgba(20,51,34,0.45)' : 'rgba(20,51,34,0.15)'}`,
                      // background: focused === 'email' ? 'rgba(255,255,255,0.80)' : 'rgba(255,255,255,0.55)',
                      // boxShadow: focused === 'email' ? '0 0 0 3px rgba(20,51,34,0.06)' : 'none',
                    }}
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3.5 bg-transparent text-pq-green text-sm placeholder:text-pq-green/30 outline-none font-hero"
                    />
                  </div>
                  
                </div>
                

                {/* Password */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <label className="text-green text-xs tracking-[0.14em] uppercase font-normal">
                      Password
                    </label>
                    <a href="#" className="text-offwhite text-xs hover:underline underline-offset-2 font-normal">
                      Forgot password?
                    </a>
                  </div>
                  <div
                    className="relative rounded-xl transition-all duration-300"
                    style={{
                             background: "rgba(249,242,228,0.12)",
  border: "1px solid rgba(20,51,34,0.15)",
  backdropFilter: "blur(8px)",
                      // border: `1.5px solid ${focused === 'password' ? 'rgba(20,51,34,0.45)' : 'rgba(20,51,34,0.15)'}`,
                      // background: focused === 'password' ? 'rgba(255,255,255,0.80)' : 'rgba(255,255,255,0.55)',
                      // boxShadow: focused === 'password' ? '0 0 0 3px rgba(20,51,34,0.06)' : 'none',
                    }}
                  >
                    <input
                      type={showPass ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => setFocused('password')}
                      onBlur={() => setFocused(null)}
                      placeholder="••••••••"
                      className="w-full px-4 py-3.5 bg-transparent text-pq-green text-sm placeholder:text-pq-green/30 outline-none font-hero pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass(!showPass)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-pq-green/40 hover:text-pq-green transition-colors"
                    >
                      {showPass ? (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {error && (
  <div
    className="rounded-lg px-4 py-3 text-sm"
    style={{
      background: "#FEE2E2",
      color: "#DC2626",
      border: "1px solid #FCA5A5",
    }}
  >
    {error}
  </div>
)}

                {/* Submit */}
                <motion.button
                  type="submit"
                  className="w-full py-4 text-pq-cream text-sm tracking-[0.12em] uppercase rounded-xl mt-1 font-normal"
                  style={{
                    background: 'linear-gradient(135deg, #B65A2F 0%, #943f1e 88%)',
                    boxShadow: '0 8px 24px rgba(182,90,47,0.30)',
                  }}
                  whileHover={{ scale: 1.01, boxShadow: '0 12px 36px rgba(182,90,47,0.45)' }}
                  whileTap={{ scale: 0.99 }}
                >
                  Sign In
                </motion.button>
              </form>

              <div className="flex items-center gap-3 my-6">
                <div className="flex-1 h-[1px]" style={{ background: 'rgba(20,51,34,0.12)' }} />
                <span className="text-pq-green/40 text-xs tracking-[0.1em] font-normal">or</span>
                <div className="flex-1 h-[1px]" style={{ background: 'rgba(20,51,34,0.12)' }} />
              </div>

              <p className="text-center text-pq-green/70 text-sm font-normal">
                New to Poquito?{' '}
                <Link   to="/register" className="text-offwhite font-normal hover:underline underline-offset-2">
                  Create an account
                </Link>
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
