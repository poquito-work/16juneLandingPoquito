import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { Q as redirect } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/react-dom.mjs";
import "crypto";
import "async_hooks";
import "util";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
const appCss = "/assets/styles-BXjdXuov.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$c = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Pocket Dragon — Mahjong on your time, anywhere you are!" },
      { name: "description", content: "Practice, play, and complete your way to the top! Enjoy real-time Traditional Mahjong action at your fingertips" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Pocket Dragon — Mahjong on your time, anywhere you are!" },
      { property: "og:description", content: "Practice, play, and complete your way to the top! Enjoy real-time Traditional Mahjong action at your fingertips" },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://pocketdragon.in/"
      },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Pocket Dragon — Mahjong on your time, anywhere you are!" },
      { name: "twitter:description", content: "Practice, play, and complete your way to the top! Enjoy real-time Traditional Mahjong action at your fingertips" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9c0c8e13-e83f-4e5d-9cea-2039c1d937a9/id-preview-fa053274--f6866870-e808-4724-a4cd-a8f7aec82a5a.lovable.app-1780846784316.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9c0c8e13-e83f-4e5d-9cea-2039c1d937a9/id-preview-fa053274--f6866870-e808-4724-a4cd-a8f7aec82a5a.lovable.app-1780846784316.png" }
    ],
    links: [
      {
        rel: "canonical",
        href: "https://pocketdragon.in/"
      },
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,100..1000&family=Open+Sans:wght@300..800&display=swap"
      },
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
  //   beforeLoad: ({ location }) => {
  //   const publicRoutes = [
  //     "/",
  //     "/register",
  //     "/forgot-password",
  //     "/privacy",
  //     "/terms",
  //   ];
  //   if (publicRoutes.includes(location.pathname)) {
  //     return;
  //   }
  //   const token = localStorage?.getItem("access_token");
  //   console.log(token,"token")
  //   if (!token) {
  //     throw redirect({
  //       to: "/",
  //     });
  //   }
  // }
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$c.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$b = () => import("./terms-CqGbugcS.mjs");
const Route$b = createFileRoute("/terms")({
  head: () => ({
    links: [{
      rel: "canonical",
      href: "https://pocketdragon.in/terms"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./register-goFoi-LE.mjs");
const Route$a = createFileRoute("/register")({
  head: () => ({
    meta: [{
      title: "Create Account — Pocket Dragon"
    }, {
      name: "description",
      content: "Create your Pocket Dragon account and choose your plan."
    }],
    links: [{
      rel: "canonical",
      href: "https://pocketdragon.in/register"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./privacy-DnSHASsj.mjs");
const Route$9 = createFileRoute("/privacy")({
  head: () => ({
    links: [{
      rel: "canonical",
      href: "https://pocketdragon.in/privacy"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./forgot-password-0_OYMHZN.mjs");
const Route$8 = createFileRoute("/forgot-password")({
  head: () => ({
    links: [{
      rel: "canonical",
      href: "https://pocketdragon.in/forgot-password"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./dashboard-BTU5dmpx.mjs");
const Route$7 = createFileRoute("/dashboard")({
  head: () => ({
    meta: [{
      title: "My Account — Pocket Dragon"
    }]
  }),
  beforeLoad: () => {
    throw redirect({
      to: "/myaccount/profile"
    });
  },
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./MyAccount-BFsOu0JM.mjs");
const Route$6 = createFileRoute("/MyAccount")({
  head: () => ({
    meta: [{
      title: "My Account — Pocket Dragon"
    }],
    links: [{
      rel: "canonical",
      href: "https://pocketdragon.in/myaccount"
    }]
  }),
  beforeLoad: () => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("access_token");
      if (!token) {
        throw redirect({
          to: "/"
        });
      }
    }
  },
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("../_-CYYLdHfV.mjs");
const Route$5 = createFileRoute("/$")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./index-CSC3-mQc.mjs");
const Route$4 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Pocket Dragon — Mahjong on your time, anywhere you are!"
    }, {
      name: "description",
      content: "Practice, play, and complete your way to the top! Enjoy real-time Traditional Mahjong action at your fingertips"
    }, {
      property: "og:title",
      content: "Pocket Dragon — Mahjong on your time, anywhere you are!"
    }, {
      property: "og:description",
      content: "Practice, play, and complete your way to the top! Enjoy real-time Traditional Mahjong action at your fingertips"
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./transaction-history-6p5_nRXw.mjs");
const Route$3 = createFileRoute("/myaccount/transaction-history")({
  head: () => ({
    meta: [{
      title: "Transactions — Pocket Dragon"
    }],
    links: [{
      rel: "canonical",
      href: "https://pocketdragon.in/myaccount/transaction-history"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./profile-Cs0ckuZJ.mjs");
const Route$2 = createFileRoute("/myaccount/profile")({
  head: () => ({
    meta: [{
      title: "Profile — Pocket Dragon"
    }],
    links: [{
      rel: "canonical",
      href: "https://pocketdragon.in/myaccount/profile"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./manage-subscription-B3X-TWzS.mjs");
const Route$1 = createFileRoute("/myaccount/manage-subscription")({
  head: () => ({
    meta: [{
      title: "Subscription — Pocket Dragon"
    }],
    links: [{
      rel: "canonical",
      href: "https://pocketdragon.in/myaccount/manage-subscription"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("../_referralCode-BTU5dmpx.mjs");
const Route = createFileRoute("/join/$referralCode")({
  beforeLoad: () => {
    throw redirect({
      to: "/"
    });
  },
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TermsRoute = Route$b.update({
  id: "/terms",
  path: "/terms",
  getParentRoute: () => Route$c
});
const RegisterRoute = Route$a.update({
  id: "/register",
  path: "/register",
  getParentRoute: () => Route$c
});
const PrivacyRoute = Route$9.update({
  id: "/privacy",
  path: "/privacy",
  getParentRoute: () => Route$c
});
const ForgotPasswordRoute = Route$8.update({
  id: "/forgot-password",
  path: "/forgot-password",
  getParentRoute: () => Route$c
});
const DashboardRoute = Route$7.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => Route$c
});
const MyAccountRoute = Route$6.update({
  id: "/MyAccount",
  path: "/MyAccount",
  getParentRoute: () => Route$c
});
const SplatRoute = Route$5.update({
  id: "/$",
  path: "/$",
  getParentRoute: () => Route$c
});
const IndexRoute = Route$4.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$c
});
const MyaccountTransactionHistoryRoute = Route$3.update({
  id: "/myaccount/transaction-history",
  path: "/myaccount/transaction-history",
  getParentRoute: () => Route$c
});
const MyaccountProfileRoute = Route$2.update({
  id: "/myaccount/profile",
  path: "/myaccount/profile",
  getParentRoute: () => Route$c
});
const MyaccountManageSubscriptionRoute = Route$1.update({
  id: "/myaccount/manage-subscription",
  path: "/myaccount/manage-subscription",
  getParentRoute: () => Route$c
});
const JoinReferralCodeRoute = Route.update({
  id: "/join/$referralCode",
  path: "/join/$referralCode",
  getParentRoute: () => Route$c
});
const rootRouteChildren = {
  IndexRoute,
  SplatRoute,
  MyAccountRoute,
  DashboardRoute,
  ForgotPasswordRoute,
  PrivacyRoute,
  RegisterRoute,
  TermsRoute,
  JoinReferralCodeRoute,
  MyaccountManageSubscriptionRoute,
  MyaccountProfileRoute,
  MyaccountTransactionHistoryRoute
};
const routeTree = Route$c._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: false,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
