import logoSrc from "@/assets/pocket-dragon-logo.png";
import { motion } from "framer-motion";

type Size = "sm" | "md" | "lg" | "xl" | "hero";

const sizeClasses: Record<Size, string> = {
  sm: "h-14 w-auto",
  md: "h-14 w-auto",
  lg: "h-20 w-auto",
  xl: "h-28 w-auto md:h-36",
  hero: "h-40 w-auto sm:h-56 md:h-72 lg:h-80",
};

// Wrapper needs explicit sizes since w-auto doesn't work on block divs
const wrapperSizeClasses: Record<Size, string> = {
  sm: "h-10 w-40",
  md: "h-14 w-56",
  lg: "h-20 w-80",
  xl: "h-28 w-auto md:h-36",
  hero: "h-40 sm:h-56 md:h-72 lg:h-80 w-full max-w-[480px]",
};

const EASE = [0.22, 0.61, 0.36, 1] as const;

export function PocketDragonLogo({
  className = "",
  size = "sm",
  animate = false,
  light = false,
}: {
  className?: string;
  size?: Size;
  animate?: boolean;
  light?: boolean;
}) {
  const lightFilter = "brightness(0) invert(1)";

  if (!animate) {
    return (
      <img
        src={logoSrc}
        alt="Pocket Dragon"
        width={1024}
        height={768}
        decoding="async"
        className={`${sizeClasses[size]} object-contain shrink-0 select-none transition-all duration-500 ${className}`}
        style={light ? { filter: lightFilter } : undefined}
        draggable={false}
      />
    );
  }

  return (
    <div
      className={`relative ${wrapperSizeClasses[size]} shrink-0 select-none ${className}`}
    >
      {/* Fill-up: clip from bottom, revealing upward */}
      <motion.div
        aria-hidden
        className="absolute inset-0 overflow-hidden"
        initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
      >
        <img
          src={logoSrc}
          alt="Pocket Dragon"
          width={1024}
          height={768}
          decoding="async"
          draggable={false}
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Shimmer sweep after fill completes */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0, x: "-110%" }}
        animate={{ opacity: [0, 0.4, 0], x: ["-110%", "210%"] }}
        transition={{ duration: 0.55, delay: 1.2, ease: "easeInOut" }}
        style={{
          background:
            "linear-gradient(105deg, transparent 30%, rgba(249,242,228,0.6) 50%, transparent 70%)",
        }}
      />
    </div>
  );
}

// Back-compat alias
export const PoquitoLogo = PocketDragonLogo;
