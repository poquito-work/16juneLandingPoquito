import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { H as Header, F as Footer, t as tile1, a as tile2, b as tile3 } from "./Footer-Db9icIKz.mjs";
import { R as Root, P as Portal, C as Content, a as Close, T as Title, D as Description, O as Overlay } from "../_libs/radix-ui__react-dialog.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { P as PocketDragonLogo, h as getPackageList } from "./Logo-taAcf7RK.mjs";
import { l as logoSrc } from "./pocket-dragon-logo-B1TjRRiN.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { A as ArrowUp, W as WifiOff, T as Trophy, R as Radar, X } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "async_hooks";
import "util";
import "crypto";
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
import "../_libs/axios.mjs";
import "../_libs/form-data.mjs";
import "fs";
import "../_libs/combined-stream.mjs";
import "../_libs/delayed-stream.mjs";
import "path";
import "http";
import "https";
import "url";
import "../_libs/mime-types.mjs";
import "../_libs/mime-db.mjs";
import "../_libs/asynckit.mjs";
import "../_libs/es-set-tostringtag.mjs";
import "../_libs/get-intrinsic.mjs";
import "../_libs/es-object-atoms.mjs";
import "../_libs/es-errors.mjs";
import "../_libs/math-intrinsics.mjs";
import "../_libs/gopd.mjs";
import "../_libs/es-define-property.mjs";
import "../_libs/has-symbols.mjs";
import "../_libs/get-proto.mjs";
import "../_libs/dunder-proto.mjs";
import "../_libs/call-bind-apply-helpers.mjs";
import "../_libs/function-bind.mjs";
import "../_libs/hasown.mjs";
import "../_libs/has-tostringtag.mjs";
import "../_libs/proxy-from-env.mjs";
import "../_libs/https-proxy-agent.mjs";
import "net";
import "tls";
import "assert";
import "../_libs/debug.mjs";
import "../_libs/ms.mjs";
import "tty";
import "../_libs/supports-color.mjs";
import "os";
import "../_libs/has-flag.mjs";
import "../_libs/agent-base.mjs";
import "events";
import "http2";
import "../_libs/follow-redirects.mjs";
import "zlib";
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
const appStoreBadge = "/assets/download-apple-app-store-CQp-Xo94.svg";
const googlePlayBadge = "/assets/download-google-play-store-DNXn7dBx.svg";
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
        whileHover: { scale: 1.04, boxShadow: "0 6px 18px rgba(20,51,34,0.08), " },
        transition: { type: "spring", stiffness: 340, damping: 22 },
        style: {
          cursor: "pointer",
          display: "block",
          borderRadius: 10,
          overflow: "hidden",
          background: "linear-gradient(145deg, rgb(249, 242, 228) 0%, rgb(237, 229, 208) 45%, rgb(229, 218, 187) 100%)",
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          border: "1px solid rgb(20, 51, 34)",
          padding: "4px 10px"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: appStoreBadge, alt: "Download on the App Store", style: { height: 36, width: "auto", display: "block" } })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.a,
      {
        href: "#",
        whileHover: { scale: 1.04, y: -2, boxShadow: "0 6px 18px rgba(20,51,34,0.08), " },
        transition: { type: "spring", stiffness: 340, damping: 22 },
        style: {
          cursor: "pointer",
          display: "block",
          borderRadius: 10,
          overflow: "hidden",
          background: "linear-gradient(145deg, rgb(249, 242, 228) 0%, rgb(237, 229, 208) 45%, rgb(229, 218, 187) 100%)",
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          border: "1px solid rgb(20, 51, 34)",
          padding: "4px 10px"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: googlePlayBadge, alt: "Get it on Google Play", style: { height: 36, width: "auto", display: "block" } })
      }
    )
  ] }) });
}
const heroVideo = "/assets/1782469897969_original-c7032776-010c-49e4-8b35-e7234191ebb3-CFy0k-JJ.mp4";
const EASE$3 = [0.22, 0.61, 0.36, 1];
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE$3 } }
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
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[0.72rem] uppercase tracking-[0.22em]", style: { color: "var(--rust)" }, children: "Play through tunnels, clouds, and signal tantrums" })
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
                      children: "Practice, play, and compete your way to the top! Enjoy real-time Traditional Mahjong action at your fingertips"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DownloadButtons, { align: "start" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "flex items-center gap-2 pt-1 heroText", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", style: { color: "var(--foreground)", opacity: 0.7 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "10,000+ Players" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex -space-x-2 socialRound", children: avatarGradients.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-8 h-8 rounded-full border-2 border-white/80 flex items-center justify-center text-[10px] font-bold text-white",
                        style: { background: g },
                        children: ["A", "M", "R"][i]
                      },
                      i
                    )) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", style: { color: "var(--foreground)", opacity: 0.7 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: " ‘Join our growing community’" }) })
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Subscriptions are non-refundable. Upon cancellation, benefits will remain active until the end of the current subscription term and subscription will not renew automatically thereafter" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No refunds or credits will be issued for any partially used or unused portion of a monthly or annual subscription term" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-cream/55 text-[0.95rem]", children: "To cancel, go to account settings in the Pocket Dragon app and select ‘Manage Subscription’" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Subscriptions are non-refundable. Upon cancellation, benefits will remain active until the end of the current subscription term and subscription will not renew automatically thereafter" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No refunds or credits will be issued for any partially used or unused portion of a monthly or annual subscription term" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-cream/55 text-[0.95rem]", children: "To cancel, go to account settings in the Pocket Dragon app and select ‘Manage Subscription’" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: onClose,
        className: "cursor-pointer mt-2 inline-flex w-full items-center justify-center rounded-full bg-rust px-6 py-3 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-cream transition-opacity hover:opacity-90",
        children: "Got It"
      }
    )
  ] }) }) });
}
function Subscriptions() {
  const [monthlyDialog, setMonthlyDialog] = reactExports.useState(false);
  const [annualDialog, setAnnualDialog] = reactExports.useState(false);
  const [plans, setPlans] = reactExports.useState([]);
  reactExports.useEffect(() => {
    getPackageList().then((res) => {
      setPlans(res.data?.content ?? []);
    }).catch((err) => console.error("Failed to load plans", err));
  }, []);
  plans.find((p) => p.billing_cycle === "monthly");
  plans.find((p) => p.billing_cycle === "annual");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "plans", style: { background: "linear-gradient(145deg, rgb(249, 242, 228) 0%, rgb(237, 229, 208) 45%, rgb(229, 218, 187) 100%)" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-5 py-14 sm:px-8 md:py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionEyebrow, { children: "Membership" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl font-bold uppercase tracking-tight  sm:text-3xl md:text-[2rem]", style: { color: "var(--foreground)" }, children: [
          "Choose your ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--rust)" }, children: "Plan" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "articleClass mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "plan-monthly-card relative flex flex-col rounded-2xl border border-foreground/15  p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[0.7rem] font-bold uppercase tracking-[0.28em] text-foreground/70", children: "Monthly Plan" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-baseline gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold", style: { color: "var(--foreground)" }, children: "Rs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-5xl font-bold leading-none", style: { color: "var(--foreground)" }, children: " 500" }),
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-5xl font-bold leading-none", children: " 4,500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-sm text-cream/75", children: "/ year" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-cream/75", children: "Save 25% | Rs 375/month " }),
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
    let resumeTimer = null;
    const stopAuto = () => {
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
    cards.forEach((card) => {
      card.addEventListener("click", () => {
        playTick();
        stopAuto();
        const screenId = card.dataset.screen ?? "";
        setTimeout(() => switchTo(screenId), 100);
      });
      card.addEventListener("mouseenter", () => {
        stopAuto();
      });
      card.addEventListener("mouseleave", () => {
        resumeTimer = setTimeout(() => {
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
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "26", height: "26", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-graduation-cap text-rust transition-transform duration-300 group-hover:scale-110", "aria-hidden": "true", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22 10v6" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ofc-text-content", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ofc-overline", children: "SOLO PLAY" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "ofc-title", children: "Practice Mode with Bots" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ofc-desc", children: "Sharpen your skills with endless practice rounds" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ofc-tags", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ofc-tag", children: "Unranked" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ofc-tag", children: "Online" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ofc-tag", children: "Offline" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "orbit-feature-card", id: "ofc-salon", "data-screen": "salon", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ofc-connector ofc-connector-right" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ofc-text", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "26", height: "26", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-users-round text-rust transition-transform duration-300 group-hover:scale-110", "aria-hidden": "true", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 21a8 8 0 0 0-16 0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "10", cy: "8", r: "5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ofc-text-content", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ofc-overline", children: "SOCIAL" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "ofc-title", children: "Private Tables with Friends" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ofc-desc", children: "Round up your crew and deal in" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ofc-tags", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ofc-tag", children: "INVITE LINK" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ofc-tag", children: "Custom Sessions " })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "orbit-feature-card", id: "ofc-match", "data-screen": "match", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ofc-connector ofc-connector-right" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ofc-text", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "26", height: "26", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-target text-rust transition-transform duration-300 group-hover:scale-110", "aria-hidden": "true", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "10" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "6" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "2" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ofc-text-content", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ofc-overline", children: "INTELLIGENCE" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "ofc-title", children: "Smart Matchmaking" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ofc-desc", children: "The right table, right away. Skill-based matching finds your perfect game in seconds " }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ofc-tags", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ofc-tag", children: "SKILL-BASED" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ofc-tag", children: "INSTANT" })
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
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "26", height: "26", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-layout-grid text-rust transition-transform duration-300 group-hover:scale-110", "aria-hidden": "true", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "7", height: "7", x: "3", y: "3", rx: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "7", height: "7", x: "14", y: "3", rx: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "7", height: "7", x: "14", y: "14", rx: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ofc-text-content", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ofc-overline", children: "LIVE" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "ofc-title", children: "Public Lobby Tables" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ofc-desc", children: "The lobby’s buzzing — grab a seat" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ofc-tags", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ofc-tag", children: "REAL-TIME" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ofc-tag", children: " All Skill levels " })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "orbit-feature-card", id: "ofc-league", "data-screen": "league", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ofc-connector ofc-connector-left" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ofc-text", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "26", height: "26", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-crown text-rust transition-transform duration-300 group-hover:scale-110", "aria-hidden": "true", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 21h14" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ofc-text-content", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ofc-overline", children: "COMPETITIVE" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "ofc-title", children: "Ranked Points & Tiers" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ofc-desc", children: "Earn points, unlock new tiers, and chase the top spot" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ofc-tags", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ofc-tag", children: "Leaderboard" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ofc-tag", children: "Season Progress " })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
const EASE$2 = [0.22, 0.61, 0.36, 1];
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
      className: "section-pad pt-15 faqWrap",
      style: { background: "linear-gradient(145deg, rgb(249, 242, 228) 0%, rgb(237, 229, 208) 45%, rgb(229, 218, 187) 100%)" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 36 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-80px" },
            transition: { duration: 0.7, ease: EASE$2 },
            className: "mb-14 text-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5 justify-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[1px] w-8 bg-pq-rust/60" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[0.72rem] font-bold uppercase tracking-[0.32em] text-rust", children: "Questions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[1px] w-8 bg-pq-rust/60" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "h2",
                {
                  className: "sm:text-3xl md:text-[2rem] text-2xl text-rust font-hero font-bold text-pq leading-tight tracking-tight text-balance",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--foreground)" }, children: "FREQUENTLY" }),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-rust", children: "ASKED" })
                  ]
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
      transition: { duration: 0.6, ease: EASE$2, delay: index * 0.08 },
      className: `border-b transition-colors duration-300 ${isOpen ? "border-pq-green/20" : "border-pq-green/10"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onToggle, className: "w-full text-medium flex items-center justify-between gap-6 py-6 text-left group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `font-hero font-bold text-base leading-snug transition-all duration-300 ${isOpen ? "text-green" : "text-green"} group-hover:text-pq-green`,
              style: { fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" },
              children: faq.q
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              animate: { rotate: isOpen ? 45 : 0 },
              transition: { duration: 0.35, ease: EASE$2 },
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
            transition: { duration: 0.45, ease: EASE$2 },
            style: { overflow: "hidden" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-green text-sm font-medium leading-relaxed pb-6 max-w-2xl transition-all duration-200",
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
const EASE$1 = [0.22, 0.61, 0.36, 1];
function LoginSection() {
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [focused, setFocused] = reactExports.useState(null);
  const [showPass, setShowPass] = reactExports.useState(false);
  useNavigate();
  const features = [
    {
      title: "Offline Supported",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(WifiOff, { className: "h-5 w-5 text-offwhite" })
    },
    {
      title: "5 Ranked Tiers",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-5 w-5 text-offwhite" })
    },
    {
      title: "Smart Matchmaking",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Radar, { className: "h-5 w-5 text-offwhite" })
    }
  ];
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
          transition: { duration: 0.9, ease: EASE$1 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-pq-white" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[0.72rem] font-bold text-offwhite uppercase tracking-[0.32em]", children: "Member Access" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-pq-white" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "font-hero font-bold text-offwhite leading-tight tracking-tight text-balance mb-6",
                style: { fontSize: "clamp(2.4rem, 4.5vw, 4rem)" },
                children: "READY WHEN YOU ARE"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-offwhite leading-relaxed mb-10 max-w-sm font-normal", children: "Connect with friends and to-be friends. Enjoy the game at your pace." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-6", children: features.map(({ title, icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-rust/15", children: icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-offwhite", children: title })
                ]
              },
              title
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 40 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.9, ease: EASE$1, delay: 0.15 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-2xl p-8 lg:p-10 border",
              style: {
                background: "rgb(249 242 228 / 53%)",
                borderColor: "rgba(20,51,34,0.10)",
                backdropFilter: "blur(24px)",
                boxShadow: "0 24px 64px rgba(20,51,34,0.10)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoSrc, alt: "Poquito", width: 110, height: 38, className: "opacity-90 logoSign" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h3",
                  {
                    className: "font-hero font-bold  mb-1.5",
                    style: { fontSize: "clamp(1.6rem, 2.5vw, 2.1rem)", color: "var(--foreground)" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--foreground)" }, children: "Sign" }),
                      " In"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-green text-sm mb-8 font-normal", children: "Enter your world of Mahjong" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "flex flex-col gap-5", onSubmit: async (e) => {
                  e.preventDefault();
                }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-green text-xs tracking-[0.14em] uppercase font-normal", children: "Email Address" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "relative rounded-xl transition-all duration-300",
                        style: {
                          background: "rgba(249,242,228,0.12)",
                          border: "1px solid rgba(20,51,34,0.15)",
                          backdropFilter: "blur(8px)"
                          // border: `1.5px solid ${focused === 'email' ? 'rgba(20,51,34,0.45)' : 'rgba(20,51,34,0.15)'}`,
                          // background: focused === 'email' ? 'rgba(255,255,255,0.80)' : 'rgba(255,255,255,0.55)',
                          // boxShadow: focused === 'email' ? '0 0 0 3px rgba(20,51,34,0.06)' : 'none',
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
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-green text-xs tracking-[0.14em] uppercase font-normal", children: "Password" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-offwhite text-xs hover:underline underline-offset-2 font-normal", children: "Forgot password?" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "relative rounded-xl transition-all duration-300",
                        style: {
                          background: "rgba(249,242,228,0.12)",
                          border: "1px solid rgba(20,51,34,0.15)",
                          backdropFilter: "blur(8px)"
                          // border: `1.5px solid ${focused === 'password' ? 'rgba(20,51,34,0.45)' : 'rgba(20,51,34,0.15)'}`,
                          // background: focused === 'password' ? 'rgba(255,255,255,0.80)' : 'rgba(255,255,255,0.55)',
                          // boxShadow: focused === 'password' ? '0 0 0 3px rgba(20,51,34,0.06)' : 'none',
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/register", className: "text-offwhite font-normal hover:underline underline-offset-2", children: "Create an account" })
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
const EASE = [0.22, 0.61, 0.36, 1];
function StoreBadge({ icon, label, sub }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.a,
    {
      href: "#",
      className: "cursor-none flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 rounded-xl px-4 py-2 text-left text-pq-cream",
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
      style: { padding: "4rem 0" },
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
              transition: { duration: 0.7, ease: EASE },
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
              transition: { duration: 0.85, ease: EASE, delay: 0.1 },
              className: "font-hero font-bold text-pq-cream leading-tight tracking-tight text-balance mb-6",
              style: { fontSize: "clamp(2.8rem, 6.5vw, 5.8rem)" },
              children: [
                "YOUR  ",
                "",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pq-rust", children: "MOVE" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-60px" },
              transition: { duration: 0.7, ease: EASE, delay: 0.2 },
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
              transition: { duration: 0.7, ease: EASE, delay: 0.3 },
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      style: { position: "relative", width: 64, height: 84 },
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0, delay },
      children: [
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
      ]
    }
  );
}
function PageLoader() {
  const [visible, setVisible] = reactExports.useState(() => {
    return !sessionStorage.getItem("loader_shown");
  });
  reactExports.useEffect(() => {
    if (!visible) return;
    sessionStorage.setItem("loader_shown", "1");
    const t = setTimeout(() => setVisible(false), 8e3);
    return () => clearTimeout(t);
  }, [visible]);
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
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8 scale-[3]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PocketDragonLogo, {}) })
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
