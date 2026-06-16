import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LoginDialog } from "./LoginDialog";
import { PocketDragonLogo } from "./Logo";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background/85 backdrop-blur-md md:bg-background/85 md:shadow-none md:border-0 max-md:bg-white/55 max-md:backdrop-blur-xl max-md:backdrop-saturate-150 max-md:border-b max-md:border-white/40 max-md:shadow-[0_1px_12px_rgba(20,51,34,0.06)]">
        <div className="mx-auto flex h-12 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          {/* Mobile: logo on the left */}
          <div className="md:hidden">
            <PocketDragonLogo size="sm" />
          </div>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex ml-auto" aria-label="Primary">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-normal text-foreground/80 transition-colors hover:text-rust"
              >
                {item.label}
              </a>
            ))}
            <LoginDialog>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-rust px-5 py-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-cream transition-opacity hover:opacity-90"
              >
                Login
              </button>
            </LoginDialog>
          </nav>

          {/* Mobile: hamburger only */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="relative flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-black/5"
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 top-0 block h-[2px] w-5 rounded-full bg-current transition-transform duration-300 ease-out ${
                    open ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 -mt-[1px] block h-[2px] w-5 rounded-full bg-current transition-opacity duration-200 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 block h-[2px] w-5 rounded-full bg-current transition-transform duration-300 ease-out ${
                    open ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — slides down from top */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.38, ease: [0.22, 0.61, 0.36, 1] }}
            className="fixed inset-x-0 top-0 z-50 md:hidden backdrop-blur-xl backdrop-saturate-150"
            style={{ background: "rgba(249, 242, 228, 0.48)" }}
          >
            {/* Top bar: logo + close */}
            <div className="flex h-16 items-center justify-between px-6 border-b border-foreground/10">
              <PocketDragonLogo size="md" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full text-foreground hover:bg-black/5 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="3" x2="15" y2="15" />
                  <line x1="15" y1="3" x2="3" y2="15" />
                </svg>
              </button>
            </div>

            {/* Nav items */}
            <nav className="flex flex-col px-6 pt-2 pb-6">
              {NAV.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.12 + i * 0.07, duration: 0.28, ease: "easeOut" }}
                  className="border-b border-foreground/8 py-4 font-display font-medium uppercase tracking-widest text-foreground"
                  style={{ fontSize: "0.95rem", letterSpacing: "0.14em" }}
                >
                  {item.label}
                </motion.a>
              ))}

              {/* Login button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.28, ease: "easeOut" }}
                className="mt-8 flex justify-center"
              >
                <LoginDialog>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center rounded-full bg-rust px-10 py-3 text-sm font-bold uppercase tracking-[0.18em] text-cream transition-opacity hover:opacity-90"
                  >
                    Login
                  </button>
                </LoginDialog>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 bg-black/20 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
