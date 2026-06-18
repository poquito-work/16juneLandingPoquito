import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PocketDragonLogo } from "./Logo";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#playground" },
  { label: "Contact Us", href: "#login" },
];

export function Header({ onLoginClick }: { onLoginClick?: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={scrolled ? {
          background: "rgba(249, 242, 228, 0.82)",
          backdropFilter: "blur(20px) saturate(180%)",
          borderBottom: "1px solid rgba(20, 51, 34, 0.09)",
          boxShadow: "rgba(20, 51, 34, 0.06) 0px 4px 20px",
          opacity: 1,
          transform: "none",
        } : {
          background: "transparent",
          backdropFilter: "none",
          borderBottom: "none",
          boxShadow: "none",
          opacity: 1,
          transform: "none",
        }}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center px-5 sm:px-8">

          {/* Logo */}
          <a href="#home" aria-label="Go to home" className="shrink-0">
            <PocketDragonLogo size="lg" />
          </a>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Right side */}
          <div className="flex items-center gap-5">

            {/* Desktop only: inline nav links slide in when hamburger is open */}
            <AnimatePresence>
              {open && (
                <motion.nav
                  key="inline-nav"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.22, ease: [0.22, 0.61, 0.36, 1] }}
                  className="hidden md:flex items-center gap-6 headerNav"
                  aria-label="Primary"
                >
                  {NAV.map((item, i) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.18, ease: "easeOut" }}
                      className="text-sm font-normal text-foreground/80 transition-colors hover:text-rust whitespace-nowrap hover:font-bold hover:scale-[1.03]"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </motion.nav>
              )}
            </AnimatePresence>

            <button
              type="button"
              onClick={onLoginClick}
              className="inline-flex items-center justify-center rounded-full bg-rust px-5 py-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-cream transition-opacity hover:opacity-90"
            >
              Login
            </button>
              
          <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="flex items-center justify-center w-8 h-8 cursor-pointer"
            >
              {open ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* X with center at (14,10) — left arms long, right arms short */}
                  <line x1="2" y1="3" x2="14" y2="10" stroke="#494949" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="14" y1="10" x2="18" y2="5" stroke="#494949" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="3" y1="17" x2="14" y2="10" stroke="#494949" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="14.5" y1="11" x2="22" y2="15" stroke="#494949" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="1" x2="20" y2="1" stroke="#494949" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="0" y1="7" x2="20" y2="7" stroke="#494949" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="0" y1="13" x2="20" y2="13" stroke="#494949" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile only: slide-down menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.38, ease: [0.22, 0.61, 0.36, 1] }}
            className="md:hidden fixed inset-x-0 top-0 z-50 backdrop-blur-xl backdrop-saturate-150"
            style={{ background: "rgba(249, 242, 228, 0.95)" }}
          >
            <div className="flex h-16 items-center justify-between px-6 border-b border-foreground/10">
              <PocketDragonLogo size="md" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex flex-col gap-1.5 p-2 z-50"
              >
                <span className="block w-6 h-[1.5px] origin-center bg-foreground" style={{ transform: "translateY(5px) rotate(45deg)" }} />
                <span className="block w-6 h-[1.5px] origin-center bg-foreground" style={{ opacity: 0 }} />
                <span className="block w-6 h-[1.5px] origin-center bg-foreground" style={{ transform: "translateY(-5px) rotate(-45deg)" }} />
              </button>
            </div>

            <nav className="flex flex-col px-6 pt-2 pb-6">
              {NAV.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.12 + i * 0.07, duration: 0.28, ease: "easeOut" }}
                  className="border-b border-foreground/8 py-4 font-display font-medium uppercase tracking-widest text-foreground hover:text-rust transition-colors"
                  style={{ fontSize: "0.95rem", letterSpacing: "0.14em" }}
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.28, ease: "easeOut" }}
                className="mt-8 flex justify-center"
              >
                <button
                  type="button"
                  onClick={() => { setOpen(false); onLoginClick?.(); }}
                  className="inline-flex items-center justify-center rounded-full bg-rust px-10 py-3 text-sm font-bold uppercase tracking-[0.18em] text-cream transition-opacity hover:opacity-90"
                >
                  Login
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile only: backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 z-30 bg-black/20"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
