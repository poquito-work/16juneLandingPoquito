import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { l as logoSrc } from "./pocket-dragon-logo-B1TjRRiN.mjs";
import { R as Root, P as Portal, C as Content, a as Close, T as Title, D as Description, O as Overlay } from "../_libs/radix-ui__react-dialog.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { A as ArrowUp, X } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
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
const EASE$5 = [0.22, 0.61, 0.36, 1];
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
            transition: { duration: 1.1, ease: EASE$5, delay: 0.1 },
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
const NAV = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#playground" },
  { label: "Contact Us", href: "#login" }
];
const DARK_SECTION_IDS = ["playground", "download", "contact"];
const RUST_SECTION_IDS = ["login"];
function getCurrentSectionId() {
  const headerHeight = 64;
  const scrollY = window.scrollY + headerHeight + 1;
  const ids = ["home", "playground", "plans", "login", "faq", "download", "contact"];
  let current = ids[0];
  for (const id of ids) {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= scrollY) current = id;
  }
  return current;
}
function Header({ onLoginClick }) {
  const [open, setOpen] = reactExports.useState(false);
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [sectionId, setSectionId] = reactExports.useState("home");
  const isDark = DARK_SECTION_IDS.includes(sectionId);
  const isRust = RUST_SECTION_IDS.includes(sectionId);
  reactExports.useEffect(() => {
    function update() {
      setScrolled(window.scrollY > 0);
      setSectionId(getCurrentSectionId());
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  const lightStyle = {
    background: "rgba(249, 242, 228, 0.85)",
    backdropFilter: "blur(20px) saturate(180%)",
    borderBottom: "1px solid rgba(20, 51, 34, 0.09)"
    // boxShadow: "rgba(20, 51, 34, 0.06) 0px 4px 20px",
  };
  const darkStyle = {
    background: "rgba(13, 31, 21, 0.88)",
    backdropFilter: "blur(20px) saturate(180%)",
    borderBottom: "1px solid rgba(249, 242, 228, 0.06)",
    boxShadow: "rgba(0, 0, 0, 0.3) 0px 4px 20px"
  };
  const rustStyle = {
    background: "rgba(122, 50, 20, 0.88)",
    backdropFilter: "blur(20px) saturate(180%)",
    borderBottom: "1px solid rgba(249, 242, 228, 0.08)",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 20px"
  };
  const atTopStyle = {
    background: "transparent",
    backdropFilter: "none",
    borderBottom: "none",
    boxShadow: "none"
  };
  const headerStyle = !scrolled ? atTopStyle : isDark ? darkStyle : isRust ? rustStyle : lightStyle;
  const onDarkBg = scrolled && (isDark || isRust);
  const textColor = onDarkBg ? "rgba(249,242,228,0.85)" : "#494949";
  const hamburgerColor = onDarkBg ? "#f9f2e4" : "#494949";
  const logoLight = onDarkBg;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "header",
      {
        className: "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
        style: { ...headerStyle, opacity: 1, transform: "none" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center px-5 sm:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#home", "aria-label": "Go to home", className: "shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PocketDragonLogo, { size: "lg", light: logoLight }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.nav,
              {
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: 20 },
                transition: { duration: 0.22, ease: [0.22, 0.61, 0.36, 1] },
                className: "hidden md:flex items-center gap-6 headerNav",
                "aria-label": "Primary",
                children: NAV.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.a,
                  {
                    href: item.href,
                    onClick: () => setOpen(false),
                    initial: { opacity: 0, y: -4 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: i * 0.05, duration: 0.18, ease: "easeOut" },
                    className: "text-sm font-normal transition-colors hover:text-rust whitespace-nowrap hover:font-bold hover:scale-[1.03]",
                    style: { color: textColor },
                    children: item.label
                  },
                  item.label
                ))
              },
              "inline-nav"
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: onLoginClick,
                className: "inline-flex items-center justify-center rounded-full bg-rust px-5 py-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-cream transition-opacity hover:opacity-90",
                children: "Login"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setOpen((v) => !v),
                "aria-label": "Toggle menu",
                "aria-expanded": open,
                className: "flex items-center justify-center w-8 h-8 cursor-pointer",
                children: open ? /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "2", y1: "3", x2: "14", y2: "10", stroke: hamburgerColor, strokeWidth: "1.5", strokeLinecap: "round" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "14", y1: "10", x2: "18", y2: "5", stroke: hamburgerColor, strokeWidth: "1.5", strokeLinecap: "round" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "3", y1: "17", x2: "14", y2: "10", stroke: hamburgerColor, strokeWidth: "1.5", strokeLinecap: "round" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "14.5", y1: "11", x2: "22", y2: "15", stroke: hamburgerColor, strokeWidth: "1.5", strokeLinecap: "round" })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "20", height: "14", viewBox: "0 0 20 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "0", y1: "1", x2: "20", y2: "1", stroke: hamburgerColor, strokeWidth: "1.5", strokeLinecap: "round" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "0", y1: "7", x2: "20", y2: "7", stroke: hamburgerColor, strokeWidth: "1.5", strokeLinecap: "round" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "0", y1: "13", x2: "20", y2: "13", stroke: hamburgerColor, strokeWidth: "1.5", strokeLinecap: "round" })
                ] })
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { y: "-100%" },
        animate: { y: 0 },
        exit: { y: "-100%" },
        transition: { duration: 0.38, ease: [0.22, 0.61, 0.36, 1] },
        className: "md:hidden fixed inset-x-0 top-0 z-50 backdrop-blur-xl backdrop-saturate-150",
        style: { background: "rgba(249, 242, 228, 0.95)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-16 items-center justify-between px-6 border-b border-foreground/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PocketDragonLogo, { size: "md" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setOpen(false),
                "aria-label": "Close menu",
                className: "flex flex-col gap-1.5 p-2 z-50",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block w-6 h-[1.5px] origin-center bg-foreground", style: { transform: "translateY(5px) rotate(45deg)" } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block w-6 h-[1.5px] origin-center bg-foreground", style: { opacity: 0 } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block w-6 h-[1.5px] origin-center bg-foreground", style: { transform: "translateY(-5px) rotate(-45deg)" } })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col px-6 pt-2 pb-6", children: [
            NAV.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.a,
              {
                href: item.href,
                onClick: () => setOpen(false),
                initial: { opacity: 0, x: -18 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: 0.12 + i * 0.07, duration: 0.28, ease: "easeOut" },
                className: "border-b border-foreground/8 py-4 font-display font-medium uppercase tracking-widest text-foreground hover:text-rust transition-colors",
                style: { fontSize: "0.95rem", letterSpacing: "0.14em" },
                children: item.label
              },
              item.label
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.35, duration: 0.28, ease: "easeOut" },
                className: "mt-8 flex justify-center",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setOpen(false);
                      onLoginClick?.();
                    },
                    className: "inline-flex items-center justify-center rounded-full bg-rust px-10 py-3 text-sm font-bold uppercase tracking-[0.18em] text-cream transition-opacity hover:opacity-90",
                    children: "Login"
                  }
                )
              }
            )
          ] })
        ]
      },
      "menu"
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.25 },
        className: "md:hidden fixed inset-0 z-30 bg-black/20",
        onClick: () => setOpen(false)
      },
      "backdrop"
    ) })
  ] });
}
const appStoreBadge = "/assets/download-apple-app-store-BqueXrOt.svg";
const googlePlayBadge = "/assets/download-google-play-store-Dij1jSIb.svg";
function DownloadButtons({
  className = "",
  align = "start"
}) {
  const justify = align === "center" ? "justify-center" : "justify-start";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-wrap items-center gap-3 ${justify}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.a,
      {
        href: "#",
        whileHover: { scale: 1.04 },
        whileTap: { scale: 0.97 },
        style: {
          display: "block",
          borderRadius: 10,
          overflow: "hidden",
          background: "#143322",
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
          padding: "4px 10px"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: appStoreBadge, alt: "Download on the App Store", style: { height: 36, width: "auto", display: "block" } })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.a,
      {
        href: "#",
        whileHover: { scale: 1.04 },
        whileTap: { scale: 0.97 },
        style: {
          display: "block",
          borderRadius: 10,
          overflow: "hidden",
          background: "#143322",
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
          padding: "4px 10px"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: googlePlayBadge, alt: "Get it on Google Play", style: { height: 36, width: "auto", display: "block" } })
      }
    )
  ] }) });
}
const heroVideo = "/assets/Studio_product_photography_vid-CwT2O4A8.mp4";
const EASE$4 = [0.22, 0.61, 0.36, 1];
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE$4 } }
};
const avatarGradients = [
  "linear-gradient(135deg, #143322, #2a6042)",
  "linear-gradient(135deg, #B65A2F, #d4793e)",
  "linear-gradient(135deg, #2a4a1a, #4a7a2a)"
];
function Hero() {
  const ref = reactExports.useRef(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "home",
      ref,
      className: "relative min-h-screen overflow-hidden",
      style: { background: "linear-gradient(145deg, #F9F2E4 0%, #EDE5D0 45%, #E5DABB 100%)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "aria-hidden": true,
            className: "absolute top-0 right-0 h-full hidden lg:block",
            style: { width: "50%", zIndex: 0 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "video",
                {
                  src: heroVideo,
                  autoPlay: true,
                  muted: true,
                  playsInline: true,
                  loop: true,
                  style: {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    inset: 0,
                    background: `
              linear-gradient(to right,  #EDE5D0 0%, #EDE5D0cc 15%, transparent 55%),
              linear-gradient(to bottom, #F9F2E4 0%, transparent 18%),
              linear-gradient(to top,    #E5DABB 0%, transparent 18%)
            `
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "relative z-10 mx-auto flex min-h-screen items-center max-w-7xl",
            style: { paddingTop: "6rem", paddingBottom: "5rem" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 sm:px-10 lg:px-16 max-w-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                variants: containerVariants,
                initial: "hidden",
                animate: "visible",
                className: "flex flex-col gap-8 lg:gap-10",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8", style: { background: "var(--rust)" } }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[0.72rem] uppercase tracking-[0.22em]", style: { color: "var(--rust)" }, children: "Play through tunnels, clouds, and signal tantrums" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8", style: { background: "var(--rust)" } })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.h1,
                    {
                      variants: itemVariants,
                      className: "font-display font-bold uppercase leading-tight tracking-tight",
                      style: {
                        fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
                        color: "var(--foreground)",
                        lineHeight: 1.05
                      },
                      children: [
                        "Mahjong on",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--rust)" }, children: "your time," }),
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--rust)" }, children: "anywhere" }),
                        "  you are!"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.p,
                    {
                      variants: itemVariants,
                      className: "leading-relaxed",
                      style: {
                        fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
                        color: "var(--foreground)",
                        opacity: 0.75,
                        maxWidth: "44ch"
                      },
                      children: "Practice, play, and complete your way to the top! Enjoy real-time Traditional Mahjong action at your fingertips"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DownloadButtons, { align: "start" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "flex items-center gap-4 pt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex -space-x-2 socialRound", children: avatarGradients.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-8 h-8 rounded-full border-2 border-white/80 flex items-center justify-center text-[10px] font-bold text-white",
                        style: { background: g },
                        children: ["A", "M", "R"][i]
                      },
                      i
                    )) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm", style: { color: "var(--foreground)", opacity: 0.7 }, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "10,000+" }),
                      " players waiting worldwide"
                    ] })
                  ] })
                ]
              }
            ) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 2, duration: 0.8 },
            className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-xs uppercase tracking-[0.2em]",
                  style: { color: "var(--foreground)", opacity: 0.4 },
                  children: "Scroll"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "w-px h-8",
                  style: { background: "linear-gradient(to bottom, rgba(20,51,34,0.35), transparent)" },
                  animate: { scaleY: [0, 1, 0] },
                  transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  "aria-hidden": true
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function SectionEyebrow({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "h-px w-8 bg-rust/70" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[0.72rem] font-bold uppercase tracking-[0.32em] text-rust", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "h-px w-8 bg-rust/70" })
  ] });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Dialog = Root;
const DialogPortal = Portal;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = Overlay.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = Content.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = Title.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = Description.displayName;
function CancellationDialog({
  open,
  onClose,
  plan
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { className: "modal-card max-w-sm border-0 p-0 overflow-hidden [&>button]:text-foreground [&>button]:hover:text-foreground/70", style: { background: "var(--green)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: " flex flex-col gap-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        DialogTitle,
        {
          className: "font-display font-bold uppercase tracking-[0.18em] text-rust",
          style: { fontSize: "1rem" },
          children: "Terms of Cancellation"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogDescription, { className: "sr-only", children: [
        plan === "monthly" ? "Monthly Plan" : "Annual Plan",
        " cancellation terms"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " space-y-3 text-[0.95rem] text-cream/85 leading-relaxed", children: plan === "monthly" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Subscriptions are non-refundable. Upon cancellation, benefits will remain active until the end of the current subscription term and subscription will not renew automatically thereafter." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No refunds or credits will be issued for any partially used or unused portion of a monthly or annual subscription term" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-cream/55 text-[0.95rem]", children: 'To cancel, go to account settings in the Pocket Dragon app and select "Manage Subscription."' })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Subscriptions are non-refundable. Upon cancellation, benefits will remain active until the end of the current subscription term and subscription will not renew automatically thereafter.                  " }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No refunds or credits will be issued for any partially used or unused portion of a monthly or annual subscription term" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-cream/55 text-[0.95rem]", children: "To cancel, go to Account Settings in the Pocket Dragon app and select ‘Manage Subscription’" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: onClose,
        className: "cursor-pointer mt-2 inline-flex w-full items-center justify-center rounded-full bg-rust px-6 py-3 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-cream transition-opacity hover:opacity-90",
        children: "Understood"
      }
    )
  ] }) }) });
}
function Subscriptions() {
  const [monthlyDialog, setMonthlyDialog] = reactExports.useState(false);
  const [annualDialog, setAnnualDialog] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "plans", className: "bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-5 py-14 sm:px-8 md:py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionEyebrow, { children: "Membership" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl md:text-[2rem]", children: [
          "Choose your ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--rust)" }, children: "Plan" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "articleClass mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "plan-monthly-card relative flex flex-col rounded-2xl border border-foreground/15 bg-cream p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[0.7rem] font-bold uppercase tracking-[0.28em] text-foreground/70", children: "Monthly Plan" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-baseline gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-foreground/70", children: "Rs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-5xl font-bold leading-none text-foreground", children: "500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-sm text-foreground/65", children: "/ month" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-foreground/65", children: "Excl GST" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-foreground/65", children: "Billed monthly. Cancel anytime." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-6 h-px w-full bg-foreground/10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              style: {
                // background: 'linear-gradient(135deg, #B65A2F 0%, #943f1e 100%)',
                // boxShadow: '0 8px 24px rgba(182,90,47,0.30)',
              },
              href: "#",
              className: "inline-flex items-center justify-center rounded-xl border-2 border-rust bg-transparent px-6 py-3 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-rust transition-colors hover:bg-rust hover:text-white",
              children: "Subscribe Now"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setMonthlyDialog(true),
              className: "cursor-pointer mt-3 inline-flex items-center justify-center gap-1.5 text-[0.80rem] text-foreground/50  underline-offset-2 hover:text-foreground/75 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "10" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "16", x2: "12", y2: "12" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" })
                ] }),
                "Terms of cancellation"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "relative flex flex-col rounded-2xl bg-green-new p-7 text-cream", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-5 -top-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-rust px-8 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-cream shadow-sm", children: "Best Value" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[0.7rem] font-bold uppercase tracking-[0.28em] text-cream/85", children: "Annual Plan" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-baseline gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-cream/85", children: "Rs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-5xl font-bold leading-none", children: "4,500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-sm text-cream/75", children: "/ year" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-cream/75", children: "Save Rs 25% | Rs 375/month " }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-cream/75", children: "Excl GST" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-6 h-px w-full bg-cream/15" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#",
              className: "inline-flex  items-center justify-center rounded-xl border-2 bg-rust px-6 py-3 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-cream transition-colors hover:bg-cream hover:text-green",
              children: "Subscribe Now"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setAnnualDialog(true),
              className: "mt-3 inline-flex items-center cursor-pointer justify-center gap-1.5 text-[0.80rem] text-cream/50  underline-offset-2 hover:text-cream/80 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "10" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "16", x2: "12", y2: "12" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" })
                ] }),
                "Terms of cancellation"
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CancellationDialog,
      {
        open: monthlyDialog,
        onClose: () => setMonthlyDialog(false),
        plan: "monthly"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CancellationDialog,
      {
        open: annualDialog,
        onClose: () => setAnnualDialog(false),
        plan: "annual"
      }
    )
  ] });
}
const SCREEN_IDS = ["practice", "salon", "match", "lobby", "league"];
let audioCtx = null;
function playTick() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === "suspended") audioCtx.resume();
  const now = audioCtx.currentTime;
  const strike = (time, vol, pitch) => {
    const snap = audioCtx.createOscillator();
    const snapGain = audioCtx.createGain();
    snap.type = "sine";
    snap.frequency.setValueAtTime(pitch, time);
    snap.frequency.exponentialRampToValueAtTime(pitch * 0.25, time + 5e-3);
    snapGain.gain.setValueAtTime(vol * 0.9, time);
    snapGain.gain.exponentialRampToValueAtTime(1e-4, time + 7e-3);
    snap.connect(snapGain);
    snapGain.connect(audioCtx.destination);
    snap.start(time);
    snap.stop(time + 0.01);
    const res = audioCtx.createOscillator();
    const resGain = audioCtx.createGain();
    res.type = "triangle";
    res.frequency.setValueAtTime(pitch * 0.45, time);
    resGain.gain.setValueAtTime(vol * 0.4, time);
    resGain.gain.exponentialRampToValueAtTime(1e-4, time + 0.035);
    res.connect(resGain);
    resGain.connect(audioCtx.destination);
    res.start(time);
    res.stop(time + 0.04);
  };
  strike(now, 0.42, 3e3);
  strike(now + 0.014, 0.18, 2600);
}
function Playground() {
  reactExports.useEffect(() => {
    const cards = document.querySelectorAll(".orbit-feature-card");
    const screens = document.querySelectorAll("#orbit-screen .app-screen");
    if (!cards.length || !screens.length) return;
    let autoTimer = null;
    let resumeTimer = null;
    let currentIndex = 0;
    let isPaused = false;
    const stopAuto = () => {
      if (autoTimer) {
        clearInterval(autoTimer);
        autoTimer = null;
      }
      if (resumeTimer) {
        clearTimeout(resumeTimer);
        resumeTimer = null;
      }
    };
    const switchTo = (screenId) => {
      cards.forEach(
        (c) => c.classList.toggle("active", c.dataset.screen === screenId)
      );
      screens.forEach((s) => {
        const isTarget = s.id === `screen-${screenId}`;
        s.style.opacity = isTarget ? "1" : "0";
        s.style.pointerEvents = isTarget ? "auto" : "none";
        s.classList.toggle("active", isTarget);
      });
    };
    const startAuto = () => {
      stopAuto();
      autoTimer = setInterval(() => {
        currentIndex = (currentIndex + 1) % SCREEN_IDS.length;
        switchTo(SCREEN_IDS[currentIndex]);
      }, 5e3);
    };
    resumeTimer = setTimeout(startAuto, 2e3);
    cards.forEach((card) => {
      card.addEventListener("click", () => {
        playTick();
        stopAuto();
        const screenId = card.dataset.screen ?? "";
        currentIndex = SCREEN_IDS.indexOf(screenId);
        setTimeout(() => switchTo(screenId), 100);
        resumeTimer = setTimeout(startAuto, 1e4);
      });
      card.addEventListener("mouseenter", () => {
        isPaused = true;
        stopAuto();
      });
      card.addEventListener("mouseleave", () => {
        isPaused = false;
        resumeTimer = setTimeout(() => {
          if (!isPaused) startAuto();
        }, 800);
      });
    });
    return () => {
      stopAuto();
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "playground-section", id: "playground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "orbit-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "orbit-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center gap-3 text-center mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionEyebrow, { children: "IN THE APP" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "orbit-title", children: [
        "THE COMPLETE MAHJONG ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-rust", children: "PLAYGROUND" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "orbit-stage", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "orbit-features orbit-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "orbit-feature-card active", id: "ofc-practice", "data-screen": "practice", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ofc-connector ofc-connector-right" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ofc-text", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ofc-overline", children: "SOLO PLAY" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "ofc-title", children: "Practice Mode with Bots" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ofc-desc", children: "Sharpen your skills with endless practice rounds  " }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ofc-tags", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ofc-tag", children: "EASY" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ofc-tag", children: "MEDIUM" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ofc-tag", children: "HARD" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "orbit-feature-card", id: "ofc-salon", "data-screen": "salon", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ofc-connector ofc-connector-right" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ofc-text", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ofc-overline", children: "SOCIAL" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "ofc-title", children: "Private Tables with Friends" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ofc-desc", children: "Round up your crew and deal in" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ofc-tags", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ofc-tag", children: "INVITE LINK" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ofc-tag", children: "UP TO 4" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "orbit-feature-card", id: "ofc-match", "data-screen": "match", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ofc-connector ofc-connector-right" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ofc-text", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ofc-overline", children: "INTELLIGENCE" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "ofc-title", children: "Smart Matchmaking" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ofc-desc", children: "The right table, right away. Skill-based matching finds your perfect game in seconds " }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ofc-tags", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ofc-tag", children: "SKILL-BASED" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ofc-tag", children: "INSTANT" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "orbit-phone-wrap", id: "orbit-phone-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "orbit-phone-device", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "orbit-phone-inner", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "orbit-phone-speaker" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "orbit-phone-camera" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "orbit-phone-screen", id: "orbit-screen", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app-screen screen-practice active", id: "screen-practice", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app-statusbar", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "app-time", children: "9:41" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "app-signal", children: "●●●" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app-topbar", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "app-back", children: "←" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "app-heading", children: "SOLO PRACTICE" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "app-icon-right", children: "⚙" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "practice-diff-label", children: "SELECT DIFFICULTY" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "practice-diff-cards", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "diff-card diff-easy", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "diff-icon", children: "🌱" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "diff-name", children: "EASY" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "diff-sub", children: "Beginner AI" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "diff-card diff-medium active-diff", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "diff-icon", children: "⚔️" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "diff-name", children: "MED" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "diff-sub", children: "Club Player" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "diff-card diff-hard", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "diff-icon", children: "🐉" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "diff-name", children: "HARD" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "diff-sub", children: "Dragon AI" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "practice-board-preview", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mini-wall", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mini-tile" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mini-tile" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mini-tile" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mini-tile" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mini-tile" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mini-tile" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mini-tile" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mini-tile" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "practice-hand-label", children: "YOUR HAND" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "practice-hand", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hand-tile t-red", children: "中" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hand-tile", children: "一" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hand-tile", children: "二" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hand-tile t-red", children: "發" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hand-tile selected-hand", children: "九" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "app-cta-btn", children: "START GAME" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app-screen screen-salon", id: "screen-salon", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app-statusbar", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "app-time", children: "9:41" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "app-signal", children: "●●●" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app-topbar", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "app-back", children: "←" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "app-heading", children: "PRIVATE SALON" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "app-icon-right", children: "＋" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "salon-room-code-block", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "salon-code-label", children: "ROOM CODE" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "salon-code", children: "DRAGON-7749" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "salon-share", children: "⬆ SHARE" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "salon-seats", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "salon-seat occupied", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "seat-avatar", style: { background: "#1e4b33" }, children: "龍" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "seat-info", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "seat-name", children: "DragonMaster" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "seat-role", children: "HOST" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "salon-seat occupied", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "seat-avatar", style: { background: "#8c4220" }, children: "虎" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "seat-info", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "seat-name", children: "TigerClaw99" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "seat-role", children: "PLAYER" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "salon-seat empty", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "seat-avatar empty-avatar", children: "？" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "seat-info", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "seat-name", children: "Waiting..." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "seat-role", children: "OPEN" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "salon-seat empty", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "seat-avatar empty-avatar", children: "？" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "seat-info", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "seat-name", children: "Waiting..." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "seat-role", children: "OPEN" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "app-cta-btn", children: "START WITH BOTS" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app-screen screen-lobby", id: "screen-lobby", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app-statusbar", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "app-time", children: "9:41" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "app-signal", children: "●●●" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app-topbar", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "app-back", children: "←" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "app-heading", children: "PUBLIC LOBBY" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "app-icon-right", children: "◎" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lobby-radar-container", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lobby-radar", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "radar-ring r1" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "radar-ring r2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "radar-ring r3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "radar-sweep" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "radar-dot dot-1" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "radar-dot dot-2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "radar-dot dot-3" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lobby-status-text", children: "FINDING OPPONENTS" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lobby-dots", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", {})
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lobby-found-players", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "found-player", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "fp-flag", children: "🇨🇳" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "fp-name", children: "Shanghai_Pro" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "fp-rating", children: "★ 2,340" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "found-player", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "fp-flag", children: "🇸🇬" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "fp-name", children: "LionCity88" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "fp-rating", children: "★ 1,890" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "found-player fp-you", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "fp-flag", children: "YOU" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "fp-name", children: "—" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "fp-rating", children: "★ —" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "found-player fp-waiting", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "fp-flag", children: "⏳" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "fp-name", children: "Searching..." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "fp-rating" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app-screen screen-league", id: "screen-league", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app-statusbar", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "app-time", children: "9:41" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "app-signal", children: "●●●" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app-topbar", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "app-back", children: "←" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "app-heading", children: "RANKED LEAGUE" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "app-icon-right", children: "🏆" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "league-badge-block", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "league-badge", children: "🐉" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "league-rank-name", children: "GRAND MASTER" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "league-elo", children: "2,748 ELO" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "league-progress-bar", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "league-progress-fill", style: { width: "78%" } }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "league-progress-label", children: "78% TO LEGEND" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "league-leaderboard", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lb-header", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "RANK" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "PLAYER" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "ELO" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lb-row lb-top1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "lb-pos", children: "🥇" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "lb-name", children: "MasterKong" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "lb-elo", children: "3,212" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lb-row lb-top2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "lb-pos", children: "🥈" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "lb-name", children: "JadePhoenix" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "lb-elo", children: "3,044" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lb-row lb-top3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "lb-pos", children: "🥉" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "lb-name", children: "RedDragon88" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "lb-elo", children: "2,981" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lb-row lb-you", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "lb-pos", children: "#4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "lb-name", children: "YOU" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "lb-elo", children: "2,748" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app-screen screen-match", id: "screen-match", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app-statusbar", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "app-time", children: "9:41" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "app-signal", children: "●●●" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app-topbar", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "app-back", children: "←" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "app-heading", children: "SMART MATCH" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "app-icon-right", children: "⚡" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "match-skill-block", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "match-skill-label", children: "YOUR SKILL LEVEL" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "match-skill-bar", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "match-skill-fill", style: { width: "68%" } }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "match-skill-tier", children: "GOLD TIER · 1,842 PTS" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lobby-radar-container", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lobby-radar", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "radar-ring r1" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "radar-ring r2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "radar-ring r3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "radar-sweep" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "radar-dot dot-1" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "radar-dot dot-2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "radar-dot dot-3" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lobby-status-text", children: "FINDING BEST MATCH" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lobby-dots", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", {})
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "match-criteria", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "match-crit-row", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "crit-icon", children: "🎯" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "crit-text", children: "Skill range ±150 pts" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "crit-ok", children: "✓" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "match-crit-row", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "crit-icon", children: "🌏" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "crit-text", children: "Low ping servers" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "crit-ok", children: "✓" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "match-crit-row", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "crit-icon", children: "⏱" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "crit-text", children: "Est. wait: <10s" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "crit-ok", children: "⚡" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "orbit-phone-home" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "orbit-phone-reflection" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "orbit-phone-glow" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "orbit-features orbit-right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "orbit-feature-card", id: "ofc-lobby", "data-screen": "lobby", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ofc-connector ofc-connector-left" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ofc-text", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ofc-overline", children: "LIVE" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "ofc-title", children: "Public Lobby Tables" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ofc-desc", children: "The lobby’s buzzing — grab a seat " }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ofc-tags", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ofc-tag", children: "REAL-TIME" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ofc-tag", children: "GLOBAL" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "orbit-feature-card", id: "ofc-league", "data-screen": "league", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ofc-connector ofc-connector-left" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ofc-text", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ofc-overline", children: "COMPETITIVE" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "ofc-title", children: "Ranked Points & Tiers" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ofc-desc", children: "Earn points, reach new tiers and unlock exclusive rewards " }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ofc-tags", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ofc-tag", children: "🐉 GRAND MASTER" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ofc-tag", children: "REWARDS" })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
const EASE$3 = [0.22, 0.61, 0.36, 1];
const faqs = [
  {
    q: "Do I need to create a new account on the website?",
    a: "No. Log in with the same username and password as the App ",
    defaultOpen: true
  },
  {
    q: "Can I still play without subscribing?",
    a: "Yes! New accounts receive a free 2-week trial with full access to the app. After the trial ends, you can continue playing by subscribing to our monthly or annual plans",
    defaultOpen: true
  },
  {
    q: "What is Traditional Mahjong? ",
    a: "Traditional Mahjong is a four-player tile-based game where players build a complete winning hand (of 14 tiles) by forming specific tile combinations. The traditional format includes variations such as Passport (East Wind Round), Goulash (West Wind Round), and more.",
    defaultOpen: false
  },
  {
    q: "What happens if a table doesn’t fill up? ",
    a: "If a player has joined a table and there are one or more seats still open, the host may choose to begin the game with bots ",
    defaultOpen: false
  },
  {
    q: "Will my subscription auto-renew?",
    a: "Yes — subscriptions are set to auto-renew by default, but you can turn off auto-renewal at any time through your account settings",
    defaultOpen: false
  },
  {
    q: "Can I switch between monthly and annual plans?",
    a: "Yes — you can switch from a monthly plan to an annual plan at any time. Your annual subscription will begin once your current monthly billing period ends ",
    defaultOpen: false
  },
  {
    q: "Can I customize my gameplay experience?",
    a: "Yes. In Practice Mode and Create a Table Mode, you can customize game variants, number of games, and turn timer settings to match your preferred style of play",
    defaultOpen: false
  },
  {
    q: "How do I report bugs or unfair behavior?",
    a: "You may contact us at <a href='mailto:hello@pocketdragon.app' class='text-rust hover:opacity-75 transition-opacity'>hello@pocketdragon.app</a>",
    defaultOpen: false
  },
  {
    q: "What happens to my progress if I switch devices? ",
    a: "No problem! Simply log in with the same account credentials on your new device to continue with your current rank, stats, and progress. ",
    defaultOpen: false
  }
];
function FAQ() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FAQSection, {});
}
function FAQSection() {
  const [openIndex, setOpenIndex] = reactExports.useState(() => {
    const firstOpen = faqs.findIndex((f) => f.defaultOpen);
    return firstOpen >= 0 ? firstOpen : null;
  });
  const [expanded, setExpanded] = reactExports.useState(false);
  const visible = expanded ? faqs : faqs.slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "faq",
      className: "section-pad mt-15 faqWrap",
      style: { background: "linear-gradient(180deg, #F9F2E4 0%, #EDE5D0 100%)" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 36 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-80px" },
            transition: { duration: 0.7, ease: EASE$3 },
            className: "mb-14",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[1px] w-8 bg-pq-rust/60" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[0.72rem] font-bold uppercase tracking-[0.32em] text-rust", children: "Questions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[1px] w-8 bg-pq-rust/60" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "font-hero font-bold text-pq leading-tight tracking-tight text-balance",
                  style: { fontSize: "clamp(2.2rem, 4vw, 3.8rem)" },
                  children: "FREQUENTLY ASKED"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col", children: visible.map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          FAQItem,
          {
            faq,
            index: i,
            isOpen: openIndex === i,
            onToggle: () => setOpenIndex(openIndex === i ? null : i)
          },
          i
        )) }),
        !expanded && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            viewport: { once: true },
            transition: { delay: 0.3 },
            className: "mt-10 text-center",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.button,
              {
                onClick: () => setExpanded(true),
                className: "cursor-pointer inline-flex text-bold items-center gap-3 text-pq text-sm tracking-[0.14em] uppercase font-normal border-b border-pq-green/20 pb-0.5 hover:border-pq-green/50 transition-all duration-300 group",
                whileHover: { letterSpacing: "0.18em" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "View More" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.svg,
                    {
                      className: "w-4 h-4 text-pq-rust",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      strokeWidth: 2,
                      animate: { y: [0, 3, 0] },
                      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" })
                    }
                  )
                ]
              }
            )
          }
        )
      ] })
    }
  );
}
function FAQItem({
  faq,
  index,
  isOpen,
  onToggle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-20px" },
      transition: { duration: 0.6, ease: EASE$3, delay: index * 0.08 },
      className: `border-b transition-colors duration-300 ${isOpen ? "border-pq-green/20" : "border-pq-green/10"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onToggle, className: "w-full text-medium flex items-center justify-between gap-6 py-6 text-left group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `font-hero font-bold text-base leading-snug transition-all duration-300 ${isOpen ? "text-pq" : "text-pq"} group-hover:text-pq-green`,
              style: { fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" },
              children: faq.q
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              animate: { rotate: isOpen ? 45 : 0 },
              transition: { duration: 0.35, ease: EASE$3 },
              className: `cursor-pointer faqbtn flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? "border-pq-rust/50 bg-pq-rust/10" : "border-pq-green/15 bg-transparent group-hover:border-pq-green/30"}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "svg",
                {
                  className: `w-3 h-3 transition-colors duration-300 ${isOpen ? "text-pq-rust" : "text-pq-green"}`,
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  strokeWidth: 2.5,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4v16m8-8H4" })
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.45, ease: EASE$3 },
            style: { overflow: "hidden" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-pq text-sm font-medium leading-relaxed pb-6 max-w-2xl transition-all duration-200",
                dangerouslySetInnerHTML: { __html: faq.a }
              }
            )
          },
          "content"
        ) })
      ]
    }
  );
}
const EASE$2 = [0.22, 0.61, 0.36, 1];
function LoginSection() {
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [focused, setFocused] = reactExports.useState(null);
  const [showPass, setShowPass] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "login", className: "relative overflow-hidden pt-15", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0",
        style: {
          background: (
            // 'linear-gradient(110deg, #E7B59B 0%, #D48A63 30%, #B65A2F 65%, #8F3F1E 100%)'
            // 'linear-gradient(110deg, rgba(10, 28, 18, 0.95) 0%, rgba(12, 35, 24, 0.90) 35%, rgba(20, 51, 34, 0.75) 65%, rgba(20, 51, 34, 0.55) 100%)',
            "linear-gradient(110deg,rgba(94, 45, 23, 0.98) 0%,rgba(122, 59, 31, 0.95) 25%,rgba(154, 76, 40, 0.90) 50%,rgba(182, 90, 47, 0.85) 75%,rgba(214, 122, 76, 0.80) 100%)"
          )
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "absolute inset-0 pointer-events-none"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-6xl mx-auto px-6 lg:px-10 section-pad", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 48 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.9, ease: EASE$2 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-rust/70" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[0.72rem] font-bold uppercase tracking-[0.32em] text-rust", children: "Member Access" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-rust/70" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "font-hero font-bold text-offwhite leading-tight tracking-tight text-balance mb-6",
                style: { fontSize: "clamp(2.4rem, 4.5vw, 4rem)" },
                children: "READY WHEN YOU ARE."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-offwhite leading-relaxed mb-10 max-w-sm font-normal", children: "Connect with friends and to-be friends. Enjoy the game at your pace." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-8", children: [
              { label: "Players", value: "10K+" },
              { label: "Tables Live", value: "340+" }
              // { label: 'Avg. Game',   value: '22 min' },
            ].map(({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-hero font-bold text-offwhite text-2xl", children: value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-offwhite text-[10px] tracking-[0.14em] uppercase font-normal", children: label })
            ] }, label)) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 40 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.9, ease: EASE$2, delay: 0.15 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-2xl p-8 lg:p-10 border",
              style: {
                background: "#f9f2e4",
                borderColor: "rgba(20,51,34,0.10)",
                backdropFilter: "blur(24px)",
                boxShadow: "0 24px 64px rgba(20,51,34,0.10)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoSrc, alt: "Poquito", width: 110, height: 38, className: "opacity-90" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "font-hero font-bold text-pq-green mb-1.5",
                    style: { fontSize: "clamp(1.6rem, 2.5vw, 2.1rem)" },
                    children: "Sign In"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-pq-green/70 text-sm mb-8 font-normal", children: "Access your Poquito account to continue playing." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "flex flex-col gap-5", onSubmit: async (e) => {
                  e.preventDefault();
                }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-pq-green/70 text-xs tracking-[0.14em] uppercase font-normal", children: "Email Address" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "relative rounded-xl transition-all duration-300",
                        style: {
                          border: `1.5px solid ${focused === "email" ? "rgba(20,51,34,0.45)" : "rgba(20,51,34,0.15)"}`,
                          background: focused === "email" ? "rgba(255,255,255,0.80)" : "rgba(255,255,255,0.55)",
                          boxShadow: focused === "email" ? "0 0 0 3px rgba(20,51,34,0.06)" : "none"
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            type: "email",
                            value: email,
                            onChange: (e) => setEmail(e.target.value),
                            onFocus: () => setFocused("email"),
                            onBlur: () => setFocused(null),
                            placeholder: "you@example.com",
                            className: "w-full px-4 py-3.5 bg-transparent text-pq-green text-sm placeholder:text-pq-green/30 outline-none font-hero"
                          }
                        )
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-pq-green/70 text-xs tracking-[0.14em] uppercase font-normal", children: "Password" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-pq-rust text-xs hover:underline underline-offset-2 font-normal", children: "Forgot password?" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "relative rounded-xl transition-all duration-300",
                        style: {
                          border: `1.5px solid ${focused === "password" ? "rgba(20,51,34,0.45)" : "rgba(20,51,34,0.15)"}`,
                          background: focused === "password" ? "rgba(255,255,255,0.80)" : "rgba(255,255,255,0.55)",
                          boxShadow: focused === "password" ? "0 0 0 3px rgba(20,51,34,0.06)" : "none"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              type: showPass ? "text" : "password",
                              value: password,
                              onChange: (e) => setPassword(e.target.value),
                              onFocus: () => setFocused("password"),
                              onBlur: () => setFocused(null),
                              placeholder: "••••••••",
                              className: "w-full px-4 py-3.5 bg-transparent text-pq-green text-sm placeholder:text-pq-green/30 outline-none font-hero pr-12"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => setShowPass(!showPass),
                              className: "absolute right-3.5 top-1/2 -translate-y-1/2 text-pq-green/40 hover:text-pq-green transition-colors",
                              children: showPass ? /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5, children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" })
                              ] })
                            }
                          )
                        ]
                      }
                    )
                  ] }),
                  error && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "rounded-lg px-4 py-3 text-sm",
                      style: {
                        background: "#FEE2E2",
                        color: "#DC2626",
                        border: "1px solid #FCA5A5"
                      },
                      children: error
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.button,
                    {
                      type: "submit",
                      className: "w-full py-4 text-pq-cream text-sm tracking-[0.12em] uppercase rounded-xl mt-1 font-normal",
                      style: {
                        background: "linear-gradient(135deg, #B65A2F 0%, #943f1e 88%)",
                        boxShadow: "0 8px 24px rgba(182,90,47,0.30)"
                      },
                      whileHover: { scale: 1.01, boxShadow: "0 12px 36px rgba(182,90,47,0.45)" },
                      whileTap: { scale: 0.99 },
                      children: "Sign In"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 my-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-[1px]", style: { background: "rgba(20,51,34,0.12)" } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pq-green/40 text-xs tracking-[0.1em] font-normal", children: "or" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-[1px]", style: { background: "rgba(20,51,34,0.12)" } })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-pq-green/70 text-sm font-normal", children: [
                  "New to Poquito?",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-pq-rust font-normal hover:underline underline-offset-2", children: "Create an account" })
                ] })
              ]
            }
          )
        }
      )
    ] }) })
  ] });
}
const appStoreLogo = "/assets/appstore-CNw0Xi8t.png";
const googlePlayLogo = "/assets/googleplay-BxecJl1F.png";
const EASE$1 = [0.22, 0.61, 0.36, 1];
function StoreBadge({ icon, label, sub }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.a,
    {
      href: "#",
      className: "flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 rounded-xl px-4 py-2 text-left text-pq-cream",
      whileHover: { scale: 1.03 },
      whileTap: { scale: 0.98 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: icon, alt: label, className: "w-6 h-6 object-contain animate-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pq-cream text-[9px] tracking-[0.12em] uppercase leading-none", children: sub }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pq-cream text-xs leading-tight mt-0.5", children: label })
        ] })
      ]
    }
  );
}
function CTASection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "download",
      className: "relative overflow-hidden",
      style: { padding: "9rem 0" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              background: "linear-gradient(180deg, #143322 0%, #1a4530 21%, #0e2a1c 77%, #091a12 119%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute top-0 left-0 w-[600px] h-[500px] pointer-events-none",
            style: { background: "radial-gradient(ellipse, rgba(182,90,47,0.22) 0%, transparent 60%)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute top-1/2 right-0 w-[400px] h-[400px] -translate-y-1/2 pointer-events-none",
            style: { background: "radial-gradient(circle, rgba(249,242,228,0.05) 0%, transparent 65%)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-6 lg:px-10 text-center relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-60px" },
              transition: { duration: 0.7, ease: EASE$1 },
              className: "flex items-center justify-center gap-3 mb-6",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[1px] w-8 bg-pq-rust/60" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pq-rust text-xs tracking-[0.22em] uppercase", children: "Get Started" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[1px] w-8 bg-pq-rust/60" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.h2,
            {
              initial: { opacity: 0, y: 32 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-60px" },
              transition: { duration: 0.85, ease: EASE$1, delay: 0.1 },
              className: "font-hero font-bold text-pq-cream leading-tight tracking-tight text-balance mb-6",
              style: { fontSize: "clamp(2.8rem, 6.5vw, 5.8rem)" },
              children: [
                "YOUR  ",
                "",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pq-rust", children: "MOVE." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-60px" },
              transition: { duration: 0.7, ease: EASE$1, delay: 0.2 },
              className: "text-pq-cream leading-relaxed max-w-xl mx-auto mb-12",
              style: { fontSize: "1.1rem" },
              children: "A seat. A table. A game waiting to begin."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 24, scale: 0.96 },
              whileInView: { opacity: 1, y: 0, scale: 1 },
              viewport: { once: true, margin: "-60px" },
              transition: { duration: 0.7, ease: EASE$1, delay: 0.3 },
              className: "flex flex-col sm:flex-row items-center justify-center gap-4",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(StoreBadge, { icon: appStoreLogo, label: "App Store", sub: "Coming Soon on" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(StoreBadge, { icon: googlePlayLogo, label: "Google Play", sub: "Coming Soon on" })
              ] })
            }
          )
        ] })
      ]
    }
  );
}
const tile1 = "/assets/White%20Dragon-CK92c6Sd.png";
const tile2 = "/assets/Red%20Dragon-75AvbVbU.png";
const tile3 = "/assets/Green%20Dragon-SwrH8Vri.png";
const EASE = [0.22, 0.61, 0.36, 1];
const OUTER_PATH$1 = "M6,1 L54,1 Q59,1 59,6 L59,74 Q59,79 54,79 L6,79 Q1,79 1,74 L1,6 Q1,1 6,1 Z";
const INNER_PATH$1 = "M9,5.5 L51,5.5 Q54.5,5.5 54.5,9 L54.5,71 Q54.5,74.5 51,74.5 L9,74.5 Q5.5,74.5 5.5,71 L5.5,9 Q5.5,5.5 9,5.5 Z";
const TILE_SRCS$1 = [tile1, tile2, tile3];
const CYCLE$1 = 8;
function TileOutlineReveal$1({ delay, tileSrc }) {
  const base = {
    duration: CYCLE$1,
    repeat: Infinity,
    repeatDelay: 0,
    delay,
    ease: "easeInOut"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative", width: 44, height: 58 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "44",
        height: "58",
        viewBox: "0 0 60 80",
        style: { position: "absolute", inset: 0, width: "100%", height: "100%" },
        "aria-hidden": true,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.path,
            {
              d: OUTER_PATH$1,
              fill: "none",
              stroke: "rgba(249,242,228,0.55)",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              animate: {
                pathLength: [0, 1, 1, 0, 0],
                opacity: [0.85, 0.85, 0.4, 0, 0]
              },
              transition: { ...base, times: [0, 0.25, 0.42, 0.52, 1] }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.path,
            {
              d: INNER_PATH$1,
              fill: "none",
              stroke: "rgba(249,242,228,0.32)",
              strokeWidth: "1",
              strokeLinecap: "round",
              animate: {
                pathLength: [0, 0, 1, 1, 0, 0],
                opacity: [0, 0.7, 0.7, 0.35, 0, 0]
              },
              transition: { ...base, times: [0, 0.19, 0.4, 0.44, 0.52, 1] }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        style: { position: "absolute", inset: 0, borderRadius: 3, overflow: "hidden" },
        animate: { opacity: [0, 0, 1, 1, 0] },
        transition: { ...base, times: [0, 0.44, 0.55, 0.78, 1] },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: tileSrc,
            alt: "Mahjong tile",
            width: 44,
            height: 58,
            style: { objectFit: "cover", width: "100%", height: "100%" }
          }
        )
      }
    )
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "footer",
    {
      id: "contact",
      className: "border-t border-white/5 relative overflow-hidden",
      style: { background: "linear-gradient(180deg, #0c2318 0%, #071610 100%)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay",
            style: {
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-60px" },
              transition: { duration: 0.8, ease: EASE },
              className: "grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 py-10 border-b border-white/5 items-center md:justify-items-center md:text-left",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-start md:items-start gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: logoSrc,
                    alt: "Poquito Mahjong",
                    width: 150,
                    height: 34,
                    className: "brightness-0 invert opacity-70"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-3 text-xs text-pq-cream md:col-start-2 md:flex-row md:items-center md:gap-6 md:justify-self-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "mailto:hello@pocketdragon.app",
                      className: "hover:text-pq-cream hover:font-bold transition-all duration-200 font-normal whitespace-nowrap",
                      children: "hello@pocketdragon.app"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: "https://facebook.com/pocketdragonapp",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": "Facebook",
                        className: "hover:opacity-80 transition-opacity",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }) })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: "https://twitter.com/pocketdragonapp",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": "Twitter",
                        className: "hover:opacity-80 transition-opacity",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" }) })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: "https://instagram.com/pocketdragonapp",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": "Instagram",
                        className: "hover:opacity-80 transition-opacity",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" }) })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline text-pq-cream/40", children: "|" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Link,
                      {
                        to: "/privacy",
                        className: "hover:text-pq-cream hover:font-bold transition-all duration-200 font-normal whitespace-nowrap",
                        children: "Privacy Policy"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Link,
                      {
                        to: "/terms",
                        className: "hover:text-pq-cream hover:font-bold transition-all duration-200 font-normal whitespace-nowrap",
                        children: "Terms of Use"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2 md:col-span-1 flex items-center justify-center md:justify-end gap-3 md:justify-self-end w-full md:w-auto", children: TILE_SRCS$1.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TileOutlineReveal$1,
                  {
                    tileSrc: src,
                    delay: CYCLE$1 / 3 * i
                  },
                  src
                )) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: true },
              transition: { delay: 0.2, duration: 0.6 },
              className: "flex items-center justify-center py-5",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-pq-cream text-xs font-normal tracking-wide hover:font-bold hover:scale-[1.03] transition-all duration-200", children: "© 2026 [Pocket Dragon/Poquito]. All Rights Reserved." })
            }
          )
        ] })
      ]
    }
  );
}
function BackToTop() {
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      "aria-label": "Back to top",
      className: "border15 fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-rust text-cream shadow-lg transition-opacity hover:opacity-90",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { size: 18 })
    }
  );
}
const OUTER_PATH = "M6,1 L54,1 Q59,1 59,6 L59,74 Q59,79 54,79 L6,79 Q1,79 1,74 L1,6 Q1,1 6,1 Z";
const INNER_PATH = "M9,5.5 L51,5.5 Q54.5,5.5 54.5,9 L54.5,71 Q54.5,74.5 51,74.5 L9,74.5 Q5.5,74.5 5.5,71 L5.5,9 Q5.5,5.5 9,5.5 Z";
const CYCLE = 8;
const TILE_SRCS = [tile1, tile2, tile3];
function TileOutlineReveal({ delay, tileSrc }) {
  const base = {
    duration: CYCLE,
    repeat: Infinity,
    repeatDelay: 0,
    delay,
    ease: "easeInOut"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative", width: 64, height: 84 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "64",
        height: "84",
        viewBox: "0 0 60 80",
        style: { position: "absolute", inset: 0, width: "100%", height: "100%" },
        "aria-hidden": true,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.path,
            {
              d: OUTER_PATH,
              fill: "none",
              stroke: "#b65a2f",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              animate: {
                pathLength: [0, 1, 1, 0, 0],
                opacity: [0.85, 0.85, 0.4, 0, 0]
              },
              transition: { ...base, times: [0, 0.25, 0.42, 0.52, 1] }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.path,
            {
              d: INNER_PATH,
              fill: "none",
              stroke: "#d9a38a",
              strokeWidth: "1",
              strokeLinecap: "round",
              animate: {
                pathLength: [0, 0, 1, 1, 0, 0],
                opacity: [0, 0.7, 0.7, 0.35, 0, 0]
              },
              transition: { ...base, times: [0, 0.19, 0.4, 0.44, 0.52, 1] }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        style: { position: "absolute", inset: 0, borderRadius: 5, overflow: "hidden" },
        animate: { opacity: [0, 0, 1, 1, 0] },
        transition: { ...base, times: [0, 0.44, 0.55, 0.78, 1] },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: tileSrc,
            alt: "Mahjong tile",
            style: { objectFit: "cover", width: "100%", height: "100%" }
          }
        )
      }
    )
  ] });
}
function PageLoader() {
  const [visible, setVisible] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setVisible(false), 8e3);
    return () => clearTimeout(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: visible && /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.7, ease: "easeInOut" },
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "linear-gradient(145deg, #F9F2E4 0%, #EDE5D0 45%, #E5DABB 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 scale-[2]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PocketDragonLogo, {}) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "1.25rem"
            },
            children: TILE_SRCS.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              TileOutlineReveal,
              {
                tileSrc: src,
                delay: CYCLE / 3 * i
              },
              src
            ))
          }
        )
      ]
    },
    "page-loader"
  ) });
}
function Index() {
  const handleLoginClick = reactExports.useCallback(() => {
    document.getElementById("login")?.scrollIntoView({
      behavior: "smooth"
    });
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageLoader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { onLoginClick: handleLoginClick }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Playground, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Subscriptions, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoginSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackToTop, {})
  ] });
}
export {
  Index as component
};
