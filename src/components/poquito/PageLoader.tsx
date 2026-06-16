import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoSrc from "@/assets/pocket-dragon-logo.png";

const EASE = [0.22, 0.61, 0.36, 1] as const;

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  // After fill + shimmer finishes (~2.2s), start fading the overlay out
  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "var(--cream)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Logo wrapper — same proportions as hero "xl" size */}
          <div style={{ position: "relative", width: "min(340px, 72vw)", height: "auto" }}>

            {/* Dimmed ghost logo underneath for reference */}
            <img
              src={logoSrc}
              alt=""
              aria-hidden
              draggable={false}
              style={{ width: "100%", height: "auto", opacity: 0.08, display: "block", userSelect: "none" }}
            />

            {/* Fill-up: clip from bottom, revealing upward */}
            <motion.div
              aria-hidden
              style={{ position: "absolute", inset: 0, overflow: "hidden" }}
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
            >
              <img
                src={logoSrc}
                alt="Pocket Dragon"
                draggable={false}
                style={{ width: "100%", height: "auto", display: "block", userSelect: "none" }}
              />
            </motion.div>

            {/* Shimmer sweep after fill completes */}
            <motion.div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background:
                  "linear-gradient(105deg, transparent 30%, rgba(249,242,228,0.75) 50%, transparent 70%)",
              }}
              initial={{ opacity: 0, x: "-110%" }}
              animate={{ opacity: [0, 0.6, 0], x: ["-110%", "210%"] }}
              transition={{ duration: 0.55, delay: 1.3, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
