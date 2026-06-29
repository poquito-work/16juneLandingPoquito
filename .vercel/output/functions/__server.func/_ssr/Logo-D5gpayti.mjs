import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { l as logoSrc } from "./pocket-dragon-logo-B1TjRRiN.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
const sizeClasses = {
  sm: "h-14 w-auto",
  md: "h-14 w-auto",
  lg: "h-20 w-auto",
  xl: "h-28 w-auto md:h-36",
  hero: "h-40 w-auto sm:h-56 md:h-72 lg:h-80"
};
const wrapperSizeClasses = {
  sm: "h-10 w-40",
  md: "h-14 w-56",
  lg: "h-20 w-80",
  xl: "h-28 w-auto md:h-36",
  hero: "h-40 sm:h-56 md:h-72 lg:h-80 w-full max-w-[480px]"
};
const EASE = [0.22, 0.61, 0.36, 1];
function PocketDragonLogo({
  className = "",
  size = "sm",
  animate = false,
  light = false
}) {
  const lightFilter = "brightness(0) invert(1)";
  if (!animate) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: logoSrc,
        alt: "Pocket Dragon",
        width: 1024,
        height: 768,
        decoding: "async",
        className: `${sizeClasses[size]} object-contain shrink-0 select-none transition-all duration-500 ${className}`,
        style: light ? { filter: lightFilter } : void 0,
        draggable: false
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `relative ${wrapperSizeClasses[size]} shrink-0 select-none ${className}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            "aria-hidden": true,
            className: "absolute inset-0 overflow-hidden",
            initial: { clipPath: "inset(0% 0% 100% 0%)" },
            animate: { clipPath: "inset(0% 0% 0% 0%)" },
            transition: { duration: 1.1, ease: EASE, delay: 0.1 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: logoSrc,
                alt: "Pocket Dragon",
                width: 1024,
                height: 768,
                decoding: "async",
                draggable: false,
                className: "w-full h-full object-contain"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            "aria-hidden": true,
            className: "absolute inset-0 pointer-events-none",
            initial: { opacity: 0, x: "-110%" },
            animate: { opacity: [0, 0.4, 0], x: ["-110%", "210%"] },
            transition: { duration: 0.55, delay: 1.2, ease: "easeInOut" },
            style: {
              background: "linear-gradient(105deg, transparent 30%, rgba(249,242,228,0.6) 50%, transparent 70%)"
            }
          }
        )
      ]
    }
  );
}
export {
  PocketDragonLogo as P
};
