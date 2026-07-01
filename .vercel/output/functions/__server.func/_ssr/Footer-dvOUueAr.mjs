import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PocketDragonLogo } from "./Logo-D1Pjw3z4.mjs";
import { l as logoSrc } from "./pocket-dragon-logo-B1TjRRiN.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
const NAV = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#playground" },
  { label: "Contact Us", href: "#contact" }
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
  const [isLoggedIn, setIsLoggedIn] = reactExports.useState(() => !!localStorage.getItem("access_token"));
  const navigate = useNavigate();
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
  reactExports.useEffect(() => {
    function onAuthChange() {
      setIsLoggedIn(!!localStorage.getItem("access_token"));
    }
    window.addEventListener("storage", onAuthChange);
    window.addEventListener("auth-change", onAuthChange);
    return () => {
      window.removeEventListener("storage", onAuthChange);
      window.removeEventListener("auth-change", onAuthChange);
    };
  }, []);
  function handleSignOut() {
    localStorage.removeItem("access_token");
    setIsLoggedIn(false);
    setOpen(false);
    navigate({ to: "/" });
  }
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "/",
              "aria-label": "Go to home",
              className: "shrink-0",
              onClick: (e) => {
                e.preventDefault();
                navigate({ to: "/" });
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(PocketDragonLogo, { size: "lg", light: logoLight })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.nav,
              {
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: 20 },
                transition: { duration: 0.22, ease: [0.22, 0.61, 0.36, 1] },
                className: "hidden md:flex items-center gap-6 headerNav",
                "aria-label": "Primary",
                children: [
                  NAV.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
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
                  )),
                  isLoggedIn && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.button,
                    {
                      type: "button",
                      onClick: () => {
                        setOpen(false);
                        navigate({ to: "/myaccount/profile" });
                      },
                      initial: { opacity: 0, y: -4 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: NAV.length * 0.05, duration: 0.18, ease: "easeOut" },
                      className: "text-sm font-normal transition-colors hover:text-rust whitespace-nowrap hover:font-bold hover:scale-[1.03] bg-transparent border-0 p-0 cursor-pointer",
                      style: { color: textColor },
                      children: "My Account"
                    }
                  )
                ]
              },
              "inline-nav"
            ) }),
            isLoggedIn ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: handleSignOut,
                className: "cursor-pointer inline-flex items-center justify-center rounded-full bg-rust px-5 py-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-cream transition-opacity hover:opacity-90",
                children: "Log Out"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: onLoginClick,
                className: "cursor-pointer inline-flex items-center justify-center rounded-full bg-rust px-5 py-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-cream transition-opacity hover:opacity-90",
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
        style: {
          background: "rgba(249, 242, 228, 0.85)",
          backdropFilter: "blur(20px) saturate(180%)",
          borderBottom: "1px solid rgba(20, 51, 34, 0.09)",
          opacity: 1,
          transform: "none"
        },
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
                className: "flex flex-col items-center gap-3",
                children: isLoggedIn ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        setOpen(false);
                        navigate({ to: "/myaccount/profile" });
                      },
                      className: "w-full text-left border-b border-foreground/8 py-4 font-display font-medium uppercase tracking-widest text-foreground hover:text-rust transition-colors",
                      children: "My Account"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: handleSignOut,
                      className: "inline-flex items-center justify-center rounded-full bg-rust px-10 py-3 text-sm font-bold uppercase tracking-[0.18em] text-cream transition-opacity hover:opacity-90",
                      children: "Log Out"
                    }
                  )
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
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
const tile1 = "/assets/White%20Dragon-CK92c6Sd.png";
const tile2 = "/assets/Red%20Dragon-75AvbVbU.png";
const tile3 = "/assets/Green%20Dragon-SwrH8Vri.png";
const EASE = [0.22, 0.61, 0.36, 1];
const OUTER_PATH = "M6,1 L54,1 Q59,1 59,6 L59,74 Q59,79 54,79 L6,79 Q1,79 1,74 L1,6 Q1,1 6,1 Z";
const INNER_PATH = "M9,5.5 L51,5.5 Q54.5,5.5 54.5,9 L54.5,71 Q54.5,74.5 51,74.5 L9,74.5 Q5.5,74.5 5.5,71 L5.5,9 Q5.5,5.5 9,5.5 Z";
const TILE_SRCS = [tile1, tile2, tile3];
const CYCLE = 8;
function TileOutlineReveal({ delay, tileSrc }) {
  const base = {
    duration: CYCLE,
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
              d: OUTER_PATH,
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
              d: INNER_PATH,
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 pl-30 lg:px-10 relative z-10", id: "smallFooter", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-60px" },
              transition: { duration: 0.8, ease: EASE },
              className: "grid flex justify-between grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 py-10 border-b border-white/5 items-center md:justify-items-between md:text-left",
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2 md:col-span-1 flex items-center justify-center md:justify-end gap-3 md:justify-self-end w-full md:w-auto", children: TILE_SRCS.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TileOutlineReveal,
                  {
                    tileSrc: src,
                    delay: CYCLE / 3 * i
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
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-pq-cream text-xs font-normal tracking-wide hover:font-bold hover:scale-[1.03] transition-all duration-200", children: "© 2026  Poquito Project LLP. All Rights Reserved." })
            }
          )
        ] })
      ]
    }
  );
}
export {
  Footer as F,
  Header as H,
  tile2 as a,
  tile3 as b,
  tile1 as t
};
