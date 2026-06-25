import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as axios } from "../_libs/axios.mjs";
import { H as Header, F as Footer } from "./Footer-7jRsXtTO.mjs";
const API_BASE_URL = "http://13.207.123.199:8080";
const getPredefinedListByType = async (entity_type) => {
  const response = await axios.get(
    `${API_BASE_URL}/api/v1/admin/predefined/?entity_type=${entity_type}`
  );
  return response.data;
};
function decodeJwtPayload(token) {
  try {
    const base64 = token.split(".")[1];
    const json = atob(base64.replace(/-/g, "+").replace(/_/g, "/"));
    return JSON.parse(json);
  } catch {
    return null;
  }
}
function getUserFromToken() {
  const token = localStorage.getItem("access_token") ?? "";
  const payload = decodeJwtPayload(token);
  return {
    id: payload?.sub ?? payload?.id ?? "—",
    name: payload?.name ?? payload?.full_name ?? "Player",
    username: payload?.username ?? payload?.preferred_username ?? "—",
    email: payload?.email ?? "—",
    phone_number: payload?.phone_number ?? "—",
    city: payload?.city ?? "",
    avatar_url: payload?.picture ?? "",
    joined_at: payload?.iat ? new Date(payload.iat * 1e3).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" }) : "—"
  };
}
const TABS = [
  {
    id: "profile",
    label: "Profile",
    href: "/myaccount/profile",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "17", height: "17", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "8", r: "4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 20c0-4 3.6-7 8-7s8 3 8 7" })
    ] })
  },
  {
    id: "transactions",
    label: "Transactions",
    href: "/myaccount/transaction",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "17", height: "17", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "2", y1: "10", x2: "22", y2: "10" })
    ] })
  },
  {
    id: "subscription",
    label: "Subscription",
    href: "/myaccount/subscription",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "17", height: "17", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" }) })
  }
];
function Sidebar({ active, onSelect }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "dash-sidebar", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "dash-sidebar-label", children: "My Account" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "dash-sidebar-nav", children: TABS.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: `dash-sidebar-item ${active === tab.id ? "dash-sidebar-item-active" : ""}`,
        onClick: () => onSelect(tab.id),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dash-sidebar-icon", children: tab.icon }),
          tab.label
        ]
      },
      tab.id
    )) })
  ] });
}
function MobileTabBar({ active, onSelect }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dash-mobile-tabs mt-7", children: TABS.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      className: `dash-mobile-tab ${active === tab.id ? "dash-mobile-tab-active" : ""}`,
      onClick: () => onSelect(tab.id),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dash-mobile-tab-icon", children: tab.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dash-mobile-tab-label", children: tab.label })
      ]
    },
    tab.id
  )) });
}
function ProfileTab({ user }) {
  const initials = (user.name ?? "P").split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);
  const [form, setForm] = reactExports.useState({
    name: user.name ?? "",
    username: user.username ?? "",
    email: user.email ?? "",
    phone_number: user.phone_number ?? "",
    city: user.city ?? ""
  });
  const [cityList, setCityList] = reactExports.useState([]);
  const [saving, setSaving] = reactExports.useState(false);
  const [saved, setSaved] = reactExports.useState(false);
  const [errors, setErrors] = reactExports.useState({});
  reactExports.useEffect(() => {
    getPredefinedListByType("city").then((res) => setCityList(res.data.content ?? [])).catch(() => {
    });
  }, []);
  reactExports.useEffect(() => {
    setForm({
      name: user.name ?? "",
      username: user.username ?? "",
      email: user.email ?? "",
      phone_number: user.phone_number ?? "",
      city: user.city ?? ""
    });
  }, [user.name, user.username, user.email, user.phone_number, user.city]);
  function validate() {
    const e = {};
    if (!form.username.trim()) e.username = "Username is required.";
    else if (form.username.trim().length < 3) e.username = "Min. 3 characters.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Enter a valid email.";
    if (form.phone_number && !/^\+?[\d\s\-()]{7,15}$/.test(form.phone_number.trim())) e.phone_number = "Enter a valid phone number.";
    return e;
  }
  async function handleSave(e) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSaving(true);
    await new Promise((r) => setTimeout(r, 900));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3e3);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-section-head", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "dash-section-title", children: "Profile Details" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "dash-section-sub", children: "Update your account information." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-profile-hero", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dash-avatar", children: user.avatar_url ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: user.avatar_url, alt: user.name ?? "Avatar", className: "dash-avatar-img" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dash-avatar-initials", children: initials }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "dash-profile-name", children: form.name || user.name || "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "dash-profile-handle", children: [
          "@",
          form.username || user.username || "—"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "dash-profile-form", onSubmit: handleSave, noValidate: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-fields-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-field", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "dash-field-label", htmlFor: "dp-username", children: "Username" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "dp-username",
              type: "text",
              className: `dash-input ${errors.username ? "dash-input-error" : ""}`,
              value: form.username,
              onChange: (e) => setForm((p) => ({ ...p, username: e.target.value })),
              placeholder: "username"
            }
          ),
          errors.username && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dash-field-error", children: errors.username })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-field", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "dash-field-label", htmlFor: "dp-email", children: "Email Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "dp-email",
              type: "email",
              className: `dash-input ${errors.email ? "dash-input-error" : ""}`,
              value: form.email,
              onChange: (e) => setForm((p) => ({ ...p, email: e.target.value })),
              placeholder: "you@example.com"
            }
          ),
          errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dash-field-error", children: errors.email })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-field", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "dash-field-label", htmlFor: "dp-phone", children: "Phone Number" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "dp-phone",
              type: "tel",
              className: `dash-input ${errors.phone_number ? "dash-input-error" : ""}`,
              value: form.phone_number,
              onChange: (e) => setForm((p) => ({ ...p, phone_number: e.target.value })),
              placeholder: "+91 98765 43210"
            }
          ),
          errors.phone_number && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dash-field-error", children: errors.phone_number })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-field", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "dash-field-label", htmlFor: "dp-city", children: "City" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reg-select-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                id: "dp-city",
                className: `dash-input reg-select ${!form.city ? "reg-select-placeholder" : ""}`,
                value: form.city,
                onChange: (e) => setForm((p) => ({ ...p, city: e.target.value })),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Select your city" }),
                  cityList.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c.name, children: c.name }, c.uuid))
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reg-select-arrow", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "6 9 12 15 18 9" }) }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dash-profile-actions", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "dash-cta-btn", disabled: saving, children: saving ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reg-spinner" }),
        "Saving…"
      ] }) : saved ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "20 6 9 17 4 12" }) }),
        "Saved"
      ] }) : "Save Changes" }) })
    ] })
  ] });
}
const MOCK_TRANSACTIONS = [
  {
    id: "TXN-20260601",
    date: "1 Jun 2026",
    description: "Annual Plan Subscription",
    amount: 4500,
    status: "success",
    type: "subscription"
  },
  {
    id: "TXN-20260501",
    date: "1 May 2026",
    description: "Monthly Plan Renewal",
    amount: 500,
    status: "success",
    type: "renewal"
  },
  {
    id: "TXN-20260401",
    date: "1 Apr 2026",
    description: "Monthly Plan Renewal",
    amount: 500,
    status: "success",
    type: "renewal"
  },
  {
    id: "TXN-20260301",
    date: "1 Mar 2026",
    description: "Monthly Plan — First Subscription",
    amount: 500,
    status: "success",
    type: "subscription"
  }
];
function statusChip(status) {
  const map = {
    success: { label: "Paid", cls: "dash-chip-success" },
    pending: { label: "Pending", cls: "dash-chip-pending" },
    failed: { label: "Failed", cls: "dash-chip-failed" }
  };
  const { label, cls } = map[status];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `dash-chip ${cls}`, children: label });
}
function TransactionsTab() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-section-head", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "dash-section-title", children: "Transactions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "dash-section-sub", children: "Your payment history." })
    ] }),
    MOCK_TRANSACTIONS.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-empty", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "40", height: "40", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round", style: { color: "rgba(20,51,34,0.2)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "2", y1: "10", x2: "22", y2: "10" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No transactions yet." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dash-table-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "dash-table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Transaction ID" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Amount" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Status" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: MOCK_TRANSACTIONS.map((tx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "dash-td-mono", children: tx.id }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: tx.date }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: tx.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "dash-td-amount", children: [
          "₹",
          tx.amount.toLocaleString("en-IN")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: statusChip(tx.status) })
      ] }, tx.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "dash-info-note", children: [
      "For billing disputes or refund requests, contact",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hello@pocketdragon.app", className: "dash-link", children: "hello@pocketdragon.app" }),
      "."
    ] })
  ] });
}
const MOCK_SUB = {
  plan: "annual",
  status: "active",
  next_billing: "1 Jun 2027",
  started_at: "1 Jun 2026"
};
function SubscriptionTab() {
  const [sub] = reactExports.useState(MOCK_SUB);
  const [selectedPlan, setSelectedPlan] = reactExports.useState(
    sub.plan !== "none" ? sub.plan : "annual"
  );
  const [changing, setChanging] = reactExports.useState(false);
  const [changed, setChanged] = reactExports.useState(false);
  async function handleChangePlan() {
    setChanging(true);
    await new Promise((r) => setTimeout(r, 1e3));
    setChanging(false);
    setChanged(true);
    setTimeout(() => setChanged(false), 3e3);
  }
  const planLabel = { monthly: "Monthly Plan", annual: "Annual Plan", none: "No Active Plan" };
  const planPrice = { monthly: "₹500 / month", annual: "₹4,500 / year", none: "—" };
  const statusMap = {
    active: { label: "Active", cls: "dash-chip-success" },
    cancelled: { label: "Cancelled", cls: "dash-chip-failed" },
    expired: { label: "Expired", cls: "dash-chip-pending" }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-section-head", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "dash-section-title", children: "Subscription" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "dash-section-sub", children: "Manage your current plan." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-sub-current", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-sub-current-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dash-sub-plan-eyebrow", children: "Current Plan" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "dash-sub-plan-name", children: planLabel[sub.plan] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "dash-sub-plan-price", children: planPrice[sub.plan] }),
        sub.plan !== "none" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-sub-meta", children: [
          sub.started_at && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Started: ",
            sub.started_at
          ] }),
          sub.next_billing && sub.status === "active" && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Next billing: ",
            sub.next_billing
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `dash-chip ${statusMap[sub.status].cls}`, children: statusMap[sub.status].label }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-sub-change", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "dash-sub-change-title", children: "Change Plan" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-sub-plans-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: `reg-plan-card ${selectedPlan === "monthly" ? "reg-plan-card-selected" : ""}`,
            onClick: () => setSelectedPlan("monthly"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reg-plan-radio", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `reg-plan-radio-dot ${selectedPlan === "monthly" ? "reg-plan-radio-dot-active" : ""}` }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "reg-plan-label", children: "Monthly Plan" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "reg-plan-price-row", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reg-plan-currency", children: "Rs" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reg-plan-price", children: "500" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reg-plan-period", children: "/ month" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "reg-plan-note", children: "Excl. GST · Cancel anytime" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: `reg-plan-card  ${selectedPlan === "annual" ? "reg-plan-card-selected reg-plan-card-featured" : ""}`,
            onClick: () => setSelectedPlan("annual"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reg-plan-badge", children: "Best Value" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reg-plan-radio", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `reg-plan-radio-dot ${selectedPlan === "annual" ? "reg-plan-radio-dot-active" : ""}` }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "reg-plan-label", children: "Annual Plan" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "reg-plan-price-row", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reg-plan-currency", children: "Rs" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reg-plan-price", children: "4,500" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reg-plan-period", children: "/ year" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "reg-plan-note", children: "Excl. GST · Save 25%" })
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-sub-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "dash-cta-btn",
            onClick: handleChangePlan,
            disabled: changing || selectedPlan === sub.plan,
            children: changing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "reg-spinner" }),
              "Updating Plan…"
            ] }) : changed ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "20 6 9 17 4 12" }) }),
              "Plan Updated"
            ] }) : "Cancel Subscription"
          }
        ),
        selectedPlan === sub.plan && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "dash-sub-same-note", children: "This is your current plan." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "dash-info-note", children: [
      'To cancel your subscription, go to Account Settings in the Pocket Dragon app and select "Manage Subscription". See our',
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/terms", className: "dash-link", children: "Terms of Use" }),
      " ",
      "for cancellation policy."
    ] })
  ] });
}
const TAB_ROUTES = {
  profile: "/myaccount/profile",
  transactions: "/myaccount/transaction",
  subscription: "/myaccount/subscription"
};
function DashboardPage({ activeTab: initialTab }) {
  const [activeTab, setActiveTab] = reactExports.useState(initialTab);
  const [user, setUser] = reactExports.useState({});
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    setUser(getUserFromToken());
  }, []);
  reactExports.useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);
  function handleTabSelect(tab) {
    setActiveTab(tab);
    navigate({ to: TAB_ROUTES[tab] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { onLoginClick: () => navigate({ to: "/" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MobileTabBar, { active: activeTab, onSelect: handleTabSelect }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-body", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sidebar, { active: activeTab, onSelect: handleTabSelect }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "dash-main", children: [
        activeTab === "profile" && /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileTab, { user }),
        activeTab === "transactions" && /* @__PURE__ */ jsxRuntimeExports.jsx(TransactionsTab, {}),
        activeTab === "subscription" && /* @__PURE__ */ jsxRuntimeExports.jsx(SubscriptionTab, {})
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  DashboardPage as D
};
