import { useState, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

export function LoginDialog({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <Dialog>
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

        <form className="mt-4 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="login-username" className="block text-[0.7rem] font-bold uppercase tracking-[0.18em] text-foreground/75">
              Username
            </label>
            <input
              id="login-username"
              type="text"
              autoComplete="username"
              className="mt-2 w-full rounded-md border border-foreground/20 bg-transparent px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-rust"
            />
          </div>
          <div>
            <label htmlFor="login-password" className="block text-[0.7rem] font-bold uppercase tracking-[0.18em] text-foreground/75">
              Password
            </label>
            <input
              id="login-password"
              type="password"
              autoComplete="current-password"
              className="mt-2 w-full rounded-md border border-foreground/20 bg-transparent px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-rust"
            />
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-rust px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-cream transition-opacity hover:opacity-90"
          >
            {mode === "login" ? "Login" : "Sign Up"}
          </button>

          <div className="flex items-center justify-between pt-1 text-xs text-foreground/70">
            <button
              type="button"
              onClick={() => setMode(mode === "login" ? "signup" : "login")}
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
