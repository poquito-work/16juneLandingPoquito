import { useState, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL ?? "/api";

export function LoginDialog({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setApiError("");

    // Validate upfront — collect both errors before setting state
    let eErr = "";
    let pErr = "";
    if (!email.trim()) {
      eErr = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      eErr = "Please enter a valid email.";
    }
    if (!password) {
      pErr = "Password is required.";
    }

    setEmailError(eErr);
    setPasswordError(pErr);

    if (eErr || pErr) return;

    setLoading(true);
    try {
      const response = await axios.post(
        `${API_BASE}/v1/auth/login/password`,
        {
          email: email.trim(),
          password,
          username: "",
          phone_number: "",
          device_id: "",
        }
      );

      const data = response.data;
      if (data?.token) {
        localStorage.setItem("auth_token", data.token);
      }
      setOpen(false);
    } catch (err: unknown) {
      const msg =
        (err as { response?: { data?: { message?: string } } })?.response?.data?.message;
      setApiError(msg ?? "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  }

  function handleOpenChange(val: boolean) {
    setOpen(val);
    if (!val) {
      setEmail("");
      setPassword("");
      setEmailError("");
      setPasswordError("");
      setApiError("");
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-md border-foreground/12 bg-cream p-8 sm:p-10">
        <DialogHeader>
          <DialogTitle className="text-center font-display text-2xl font-bold uppercase tracking-tight text-foreground">
            {mode === "login" ? "Member Login" : "Create Account"}
          </DialogTitle>
          <DialogDescription className="text-center text-xs text-foreground/65">
            Use the same credentials as the Pocket Dragon mobile app.
          </DialogDescription>
        </DialogHeader>

        <form className="mt-4 space-y-4" onSubmit={handleSubmit} noValidate>
          <div>
            <label
              htmlFor="login-email"
              className="block text-[0.7rem] font-bold uppercase tracking-[0.18em] text-foreground/75"
            >
              Email
            </label>
            <input
              id="login-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
              className={`mt-2 w-full rounded-md border bg-transparent px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-rust ${emailError ? "border-red-500" : "border-foreground/20"}`}
            />
            {emailError && (
              <p className="mt-1 text-xs text-red-600">{emailError}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="login-password"
              className="block text-[0.7rem] font-bold uppercase tracking-[0.18em] text-foreground/75"
            >
              Password
            </label>
            <input
              id="login-password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setPasswordError(""); }}
              className={`mt-2 w-full rounded-md border bg-transparent px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-rust ${passwordError ? "border-red-500" : "border-foreground/20"}`}
            />
            {passwordError && (
              <p className="mt-1 text-xs text-red-600">{passwordError}</p>
            )}
          </div>

          {apiError && (
            <p className="text-xs text-red-600">{apiError}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-rust px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-cream transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Please wait…" : mode === "login" ? "Login" : "Sign Up"}
          </button>

          <div className="flex items-center justify-between pt-1 text-xs text-foreground/70">
            <button
              type="button"
              onClick={() => { setMode(mode === "login" ? "signup" : "login"); setApiError(""); }}
              className="font-bold uppercase tracking-[0.16em] text-foreground hover:text-rust"
            >
              {mode === "login" ? "Sign Up" : "Login"}
            </button>
            <a href="#" className="hover:text-rust">
              Forgot password?
            </a>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
