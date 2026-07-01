import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { h as getUserProfile, d as getPredefinedListByType, i as getTransactionList, j as getPackageList, u as updateUserProfile, k as initializeSubscription, m as cancelSubscription, n as upgradeSubscription } from "./Logo-D1Pjw3z4.mjs";
import { H as Header, F as Footer } from "./Footer-dvOUueAr.mjs";
import { S as Swal } from "../_libs/sweetalert2.mjs";
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
    phone_number: payload?.phone_number,
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
  const initials = (user.username ?? "P").split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);
  const [form, setForm] = reactExports.useState({
    name: user.name ?? "",
    username: user.username ?? "",
    email: user.email ?? "",
    phone_number: user.phone_number ?? "",
    city: user.city ?? "",
    avatar_url: user.avatar_url ?? ""
  });
  const [cityList, setCityList] = reactExports.useState([]);
  const [saving, setSaving] = reactExports.useState(false);
  const [saved, setSaved] = reactExports.useState(false);
  const [errors, setErrors] = reactExports.useState({});
  const [avatarList, setAvatarList] = reactExports.useState([]);
  const [showAvatarDialog, setShowAvatarDialog] = reactExports.useState(false);
  const [selectedAvatar, setSelectedAvatar] = reactExports.useState(user.avatar_url);
  reactExports.useEffect(() => {
    getPredefinedListByType("city").then((res) => setCityList(res.data.content ?? [])).catch(() => {
    });
  }, []);
  const openAvatarDialog = () => {
    setSelectedAvatar(user.avatar_url);
    setShowAvatarDialog(true);
  };
  reactExports.useEffect(() => {
    const fetchAvtarList = async () => {
      try {
        const response = await getPredefinedListByType("AVATAR");
        setAvatarList(response.data.content);
      } catch (error) {
        console.error("Error fetching city list:", error);
      }
    };
    fetchAvtarList();
  }, []);
  reactExports.useEffect(() => {
    const matchedCity = cityList.find((c) => c.id === user.city_id);
    setForm((prev) => ({
      ...prev,
      name: user.name ?? prev.name,
      username: user.username ?? prev.username,
      email: user.email ?? prev.email,
      phone_number: user.phone_number ?? prev.phone_number,
      city: matchedCity?.name ?? prev.city,
      avatar_url: user.avatar_url ?? prev.avatar_url
    }));
  }, [user.name, user.username, user.email, user.phone_number, user.city_id, cityList]);
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
    try {
      const selectedCity = cityList.find((c) => c.name === form.city);
      await updateUserProfile({
        name: form.name,
        username: form.username,
        phone_number: form.phone_number.trim() || null,
        city_id: selectedCity?.id,
        avatar_url: form.avatar_url
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 3e3);
      await getUserProfile();
      Swal.fire({
        icon: "success",
        title: "Profile Updated",
        // text: "Your changes have been saved successfully.",
        confirmButtonColor: "#143322",
        timer: 2500,
        timerProgressBar: true
      });
    } catch (err) {
      console.error("Failed to update profile", err);
    } finally {
      setSaving(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-section-head", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "dash-section-title", children: "Profile Details" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "dash-section-sub", children: "Update your account information." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-profile-hero", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-avatar", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dash-avatar-initials", children: initials }),
        form.avatar_url ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "avatar-wrapper", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: form.avatar_url || user.avatar_url,
              alt: "Avatar",
              className: "uploadLogo"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "avatar-plus",
              onClick: openAvatarDialog,
              children: "+"
            }
          )
        ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dash-avatar-initials", children: initials })
      ] }),
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
              disabled: true,
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
              disabled: true,
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
              maxLength: 10,
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
      ] }) : "Save Changes" }) }),
      showAvatarDialog && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "avatar-modal-overlay",
          onClick: () => {
            setSelectedAvatar(user.avatar_url);
            setShowAvatarDialog(false);
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "avatar-modal",
              onClick: (e) => e.stopPropagation(),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "avatar-modal-header", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "CHOOSE AVATAR" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        setSelectedAvatar(user.avatar_url);
                        setShowAvatarDialog(false);
                      },
                      children: "✕"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "avatar-grid", children: avatarList.map((avatar) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: avatar.url,
                    alt: "Avatar",
                    className: `avatar-item ${selectedAvatar === avatar.url ? "selected" : ""}`,
                    onClick: () => setSelectedAvatar(avatar.url)
                  },
                  avatar.id
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "avatar-save-btn",
                    onClick: () => {
                      setForm((prev) => ({
                        ...prev,
                        avatar_url: selectedAvatar || prev.avatar_url
                      }));
                      setShowAvatarDialog(false);
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "avatar-save-title", children: "FEELS CUTE" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "avatar-save-subtitle", children: "Might change later" })
                    ]
                  }
                )
              ]
            }
          )
        }
      )
    ] })
  ] });
}
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
  const [transactionList, setTransactionList] = reactExports.useState([]);
  const [page, setPage] = reactExports.useState(0);
  const [pageSize] = reactExports.useState(10);
  const [totalPages, setTotalPages] = reactExports.useState(0);
  const [totalElements, setTotalElements] = reactExports.useState(0);
  reactExports.useEffect(() => {
    loadTransactions(page);
  }, [page]);
  const loadTransactions = async (pageNumber) => {
    try {
      const res = await getTransactionList(pageNumber, pageSize);
      console.log(res, "res");
      setTransactionList(res.data.data.content ?? []);
      setTotalPages(res.data.data.totalPages);
      setTotalElements(res.data.data.totalElements);
    } catch (err) {
      console.error(err);
    }
  };
  function handleDownloadInvoice(invoiceUrl, txId) {
    const link = document.createElement("a");
    link.href = invoiceUrl;
    link.download = `invoice-${txId}.pdf`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-section-head", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "dash-section-title", children: "Transactions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "dash-section-sub", children: "Your payment history." })
    ] }),
    transactionList?.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-empty", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "40", height: "40", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round", style: { color: "rgba(20,51,34,0.2)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "2", y1: "10", x2: "22", y2: "10" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No transactions yet." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-table-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "dash-table", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Transaction ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Amount" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Reason" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Invoice" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: transactionList?.map((tx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "dash-td-mono", children: tx.razorpay_payment_id }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: tx.created_at }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "dash-td-amount", children: [
            "₹",
            tx.amount.toLocaleString("en-IN")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: tx.failure_reason }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: statusChip(tx.status) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: tx.invoice_url ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: "dash-invoice-btn",
              onClick: () => handleDownloadInvoice(tx.invoice_url, tx.id),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "7 10 12 15 17 10" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" })
                ] }),
                "Download"
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dash-invoice-none", children: "—" }) })
        ] }, tx.id)) })
      ] }),
      totalPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-pagination", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setPage((p) => p - 1),
            disabled: page === 0,
            children: "Previous"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Page ",
          page + 1,
          " of ",
          totalPages
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setPage((p) => p + 1),
            disabled: page + 1 >= totalPages,
            children: "Next"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "dash-info-note", children: [
      "For billing disputes or refund requests, contact",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hello@pocketdragon.app", className: "dash-link", children: "hello@pocketdragon.app" }),
      "."
    ] })
  ] });
}
function formatDate(iso) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" });
}
const SUB_STATUS_MAP = {
  active: { label: "Active", cls: "dash-chip-success" },
  trialing: { label: "Trial", cls: "dash-chip-pending" },
  stopped: { label: "Stopped", cls: "dash-chip-failed" },
  cancelled: { label: "Cancelled", cls: "dash-chip-failed" },
  expired: { label: "Expired", cls: "dash-chip-pending" }
};
function SubscriptionTab({
  userUuid,
  trialEndedWithoutSubscription,
  subscription,
  isTrialActive,
  trialDaysLeft,
  trialEndAt,
  onSubscriptionChanged
}) {
  console.log("trialEndAt:", trialEndAt);
  const [selectedPlanId, setSelectedPlanId] = reactExports.useState(null);
  const [changing, setChanging] = reactExports.useState(false);
  const [changed, setChanged] = reactExports.useState(false);
  const [plans, setPlans] = reactExports.useState([]);
  function daysUntil(dateStr) {
    if (!dateStr) return null;
    const diffMs = new Date(dateStr).getTime() - Date.now();
    return Math.ceil(diffMs / (1e3 * 60 * 60 * 24));
  }
  const showSubscribeButton = !subscription || ["stopped", "expired", "cancelling"].includes(subscription.status);
  async function handleSubscribe(planId) {
    const selectedPlan2 = plans.find((p) => p.id === planId);
    if (!selectedPlan2) return;
    setChanging(true);
    const profileRes = await getUserProfile();
    const userUuid2 = profileRes.data.uuid;
    try {
      const res = await initializeSubscription(
        userUuid2,
        // current logged in user uuid
        selectedPlan2.uuid
      );
      const paymentUrl = res.data.razorpay_short_url;
      const paymentWindow = window.open(
        paymentUrl,
        "_blank",
        "width=900,height=700"
      );
      pollSubscriptionStatus(paymentWindow, selectedPlan2.uuid);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: err?.response?.data?.message ?? "Unable to initialize subscription."
      });
    } finally {
      setChanging(false);
    }
  }
  async function pollSubscriptionStatus(paymentWindow, targetPlanUuid) {
    if (!paymentWindow) return;
    const interval = setInterval(async () => {
      try {
        if (paymentWindow.closed) {
          clearInterval(interval);
          return;
        }
        const profile = await getUserProfile();
        const sub = profile.data.subscription;
        const hasActive = profile.data.has_active_subscription;
        const isPlanActive = sub && (sub.status === "active" || sub.status === "trialing");
        const isTargetPlan = targetPlanUuid ? sub?.plan?.uuid === targetPlanUuid : true;
        if (isPlanActive && isTargetPlan) {
          clearInterval(interval);
          paymentWindow.close();
          await onSubscriptionChanged?.();
          Swal.fire({
            icon: "success",
            title: "Subscription Activated"
          });
        }
      } catch (e) {
        console.log(e);
      }
    }, 3e3);
  }
  async function handleChangePlan(planId) {
    const planToApply = plans.find((p) => p.id === planId);
    if (!planToApply || !subscription) return;
    const confirm = await Swal.fire({
      icon: "question",
      title: `Switch to ${planToApply.billing_cycle === "annual" ? "Annual" : "Monthly"} Plan?`,
      html: `
      <div style="text-align:center; line-height:1.6">
        <p>
          <strong>Rs ${planToApply.price.toLocaleString()}/${planToApply.billing_cycle}</strong>
          ${planToApply.billing_cycle === "annual" ? "<br><span style='color:#666'>Save 25% | Rs 375/month</span>" : ""}
        </p>

        <br>

        <p>
          Your current <strong>${subscription.plan.name}</strong> will remain active until
          <strong>${formatDate(subscription.current_period_end)}</strong>.
        </p>

        <br>

        <p>
          Starting <strong>${formatDate(subscription.current_period_end)}</strong>,
          your subscription will automatically switch to the
          <strong>${planToApply.billing_cycle === "annual" ? "Annual" : "Monthly"}</strong> Plan.
        </p>
      </div>
    `,
      showCancelButton: true,
      confirmButtonText: "Yes, Switch",
      cancelButtonText: "No, Go back",
      confirmButtonColor: "#b65a2f",
      cancelButtonColor: "#143322"
      // reverseButtons: true,
    });
    if (!confirm.isConfirmed) return;
    setChanging(true);
    try {
      const res = await upgradeSubscription(planToApply.uuid);
      const paymentUrl = res.data.data?.razorpay_short_url;
      const paymentWindow = window.open(
        paymentUrl,
        "_blank",
        "width=900,height=700"
      );
      pollSubscriptionStatus(paymentWindow, planToApply.uuid);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Upgrade Failed",
        text: err?.response?.data?.message ?? "Unable to upgrade your subscription."
      });
    } finally {
      setChanging(false);
    }
  }
  async function handleCancelPlan() {
    if (!subscription) return;
    daysUntil(subscription.current_period_end);
    const confirmResult = await Swal.fire({
      icon: "warning",
      title: "Cancel Subscription?",
      html: `
    <div style="text-align:center; line-height:1.6;">
      <p>
        Your subscription will remain active until
        <b>${formatDate(subscription.current_period_end)}</b>.
      </p>
      <p>
        After this date, your plan will not renew automatically.
      </p>
      <p style="margin-top:16px;">
        Come back anytime.
      </p>
    </div>
  `,
      showCancelButton: true,
      confirmButtonText: "Yes Cancel",
      cancelButtonText: "No, Go Back",
      confirmButtonColor: "#b65a2f",
      cancelButtonColor: "#143322"
    });
    if (!confirmResult.isConfirmed) return;
    setChanging(true);
    try {
      await cancelSubscription();
      Swal.fire({
        icon: "success",
        title: "Subscription Cancelled",
        text: "Your subscription has been cancelled successfully.",
        confirmButtonColor: "#143322"
      });
      await onSubscriptionChanged?.();
    } catch (err) {
      console.error("Failed to cancel subscription", err);
      const message = err?.response?.data?.message ?? err?.message ?? "Failed to cancel subscription. Please try again.";
      Swal.fire({
        icon: "error",
        title: "Cancellation Failed",
        text: message,
        confirmButtonColor: "#143322"
      });
    } finally {
      setChanging(false);
    }
  }
  reactExports.useEffect(() => {
    getPackageList().then((res) => {
      const loadedPlans = res.data?.content ?? [];
      setPlans(loadedPlans);
      if (subscription?.plan?.id) {
        setSelectedPlanId(subscription.plan.id);
      } else if (loadedPlans.length > 0) {
        setSelectedPlanId(loadedPlans[0].id);
      }
    }).catch((err) => console.error("Failed to load plans", err));
  }, [subscription]);
  plans.find((p) => p.billing_cycle === "monthly");
  plans.find((p) => p.billing_cycle === "annual");
  !!subscription && selectedPlanId === subscription.plan.id;
  plans.find((p) => p.id === selectedPlanId);
  subscription?.status === "active" || subscription?.status === "trialing";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-section-head", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "dash-section-title", children: "Subscription" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "dash-section-sub", children: trialEndedWithoutSubscription ? "Choose a plan to continue." : "Manage your current plan." })
    ] }),
    !trialEndedWithoutSubscription && subscription && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-sub-current", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-sub-current-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dash-sub-plan-eyebrow", children: "Current Plan" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "dash-sub-plan-name", children: subscription.plan?.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "dash-sub-plan-price", children: [
          "₹",
          subscription.total_amount.toLocaleString("en-IN"),
          " /",
          " ",
          subscription.plan.billing_cycle === "monthly" ? "month" : "year",
          subscription.plan.gst_excluded && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "dash-sub-gst-note", children: [
            " (incl. ₹",
            subscription.gst,
            " GST)"
          ] })
        ] }),
        isTrialActive ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-sub-meta", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "", children: "Free trial active" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "", children: [
            "Your ",
            trialDaysLeft,
            "-day trial ends ",
            formatDate(subscription.trial_end_at),
            "."
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dash-sub-meta", children: subscription.current_period_end && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Renews/ends: ",
          formatDate(subscription.current_period_end)
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `dash-chip ${(SUB_STATUS_MAP[subscription.status] ?? { label: subscription.status, cls: "dash-chip-pending" }).cls}`, children: (SUB_STATUS_MAP[subscription.status] ?? { label: subscription.status }).label }) })
    ] }),
    !trialEndedWithoutSubscription && !subscription && isTrialActive && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-sub-current", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-sub-current-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dash-sub-plan-eyebrow", children: "Current Plan" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "dash-sub-plan-name", children: "Free Trial" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-sub-meta", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "", children: "Free trial active" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "", children: [
            "Your ",
            trialDaysLeft,
            "-day trial ends ",
            formatDate(trialEndAt),
            "."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dash-chip dash-chip-pending", children: "Trial" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dash-sub-change", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "dash-sub-change-title", children: trialEndedWithoutSubscription || isTrialActive ? "Choose a Plan" : "Change Plan" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dash-sub-plans-grid", children: plans.map((plan) => {
        subscription?.plan.id === plan.id;
        const isDowngrade = subscription?.plan.billing_cycle === "annual" && plan.billing_cycle === "monthly";
        subscription?.plan.billing_cycle === "monthly" && plan.billing_cycle === "annual";
        selectedPlanId === plan.id;
        const isBestValue = plan.billing_cycle === "annual";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `reg-plan-card
    ${plan.billing_cycle === "annual" ? "reg-plan-card-featured" : "regMonthly"}
    ${subscription?.plan.id === plan.id ? "reg-plan-card-selected" : ""}`,
            onClick: () => setSelectedPlanId(plan.id),
            children: [
              isBestValue && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reg-plan-badge rounded-full bg-rust px-8 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-cream shadow-sm", children: "BEST VALUE" }),
              !trialEndedWithoutSubscription && subscription && (subscription.status === "active" || subscription.status === "trialing") && plan.id === subscription.plan.id && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: plan.billing_cycle === "annual" ? "dash-sub-same-note annual" : "dash-sub-same-note monthly",
                  children: "Active"
                }
              ),
              plan.billing_cycle === "annual" ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.7rem] font-bold uppercase tracking-[0.28em] text-cream/85 mb-4", children: plan.name }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.7rem] font-bold uppercase tracking-[0.28em] text-foreground/70 mb-4", children: plan.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "reg-plan-price-row", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `reg-plan-currency ${plan.billing_cycle === "monthly" ? "text-sm font-bold" : "text-sm font-bold text-cream/85"}`,
                      children: "Rs"
                    }
                  ),
                  plan.billing_cycle === "annual" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-5xl font-bold leading-none text-cream", children: plan.price.toLocaleString("en-IN") }),
                  plan.billing_cycle === "monthly" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-5xl font-bold leading-none", style: { color: "var(--foreground)" }, children: plan.price.toLocaleString("en-IN") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: `reg-plan-period ${plan.billing_cycle === "monthly" ? "ml-1 text-sm text-foreground/65" : "ml-1 text-sm text-cream/75"}`,
                      children: [
                        "/ ",
                        plan.billing_cycle === "monthly" ? "month" : "year"
                      ]
                    }
                  )
                ] }),
                plan.billing_cycle === "annual" && // <p className="reg-plan-save">
                //   Save {plan.discount_percent}% | Rs{" "}
                //   {plan.price_per_month_equiv}/month
                // </p>
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-cream/75", children: "Save 25% | Rs 375/month" }),
                plan.billing_cycle === "annual" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-cream/75", children: plan.gst_excluded ? "Excl GST" : "Incl GST" }),
                plan.billing_cycle === "monthly" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-foreground/65", children: plan.gst_excluded ? "Excl GST" : "Incl GST" }),
                plan.billing_cycle === "monthly" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-foreground/65", children: "Billed monthly. Cancel anytime." })
              ] }),
              plan.billing_cycle === "annual" ? /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "reg-plan-divider" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "reg-plan-divider monthlyHr" }),
              showSubscribeButton ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "reg-plan-btn",
                  onClick: (e) => {
                    e.stopPropagation();
                    setSelectedPlanId(plan.id);
                    handleSubscribe(plan.id);
                  },
                  disabled: changing,
                  children: changing ? "Redirecting..." : "SUBSCRIBE NOW"
                }
              ) : subscription?.plan.id === plan.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "reg-plan-btn",
                  disabled: changing,
                  onClick: (e) => {
                    e.stopPropagation();
                    handleCancelPlan();
                  },
                  children: changing ? "Cancelling..." : "Cancel Subscription"
                }
              ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: `reg-plan-btn ${isDowngrade ? "opacity-50 cursor-not-allowed disabled" : ""}`,
                  onClick: (e) => {
                    e.stopPropagation();
                    handleChangePlan(plan.id);
                  },
                  disabled: changing,
                  children: changing ? "Updating..." : isDowngrade ? "DOWNGRADE" : "UPGRADE"
                }
              )
            ]
          },
          plan.id
        );
      }) }) })
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
  transactions: "/myaccount/transaction-history",
  subscription: "/myaccount/manage-subscription"
};
function DashboardPage({ activeTab: initialTab }) {
  const [activeTab, setActiveTab] = reactExports.useState(initialTab);
  const [user, setUser] = reactExports.useState({});
  const navigate = useNavigate();
  function fetchUserProfile() {
    return getUserProfile().then((res) => {
      const data = res.data;
      setUser((prev) => ({
        ...prev,
        id: data.id != null ? String(data.id) : prev.id,
        uuid: data.uuid ?? prev.uuid,
        username: data.username ?? prev.username,
        email: data.email ?? prev.email,
        phone_number: data.phone_number ?? prev.phone_number,
        city_id: data.city_id ?? prev.city_id,
        avatar_url: data.avatar_url ?? prev.avatar_url,
        joined_at: data.joined_at ?? prev.joined_at,
        has_active_subscription: data.has_active_subscription ?? prev.has_active_subscription,
        trial_ended_without_subscription: data.trial_ended_without_subscription ?? prev.trial_ended_without_subscription,
        is_trial_active: data.is_trial_active ?? prev.is_trial_active,
        trial_days_left: data.trial_days_left ?? prev.trial_days_left,
        trial_end_at: data.trial_end_at ?? prev.trial_end_at,
        subscription: data.subscription ?? null
      }));
    }).catch((err) => {
      console.error("Failed to load profile", err);
      if (err?.response?.status === 401) {
        localStorage.removeItem("access_token");
        navigate({ to: "/" });
      }
    });
  }
  reactExports.useEffect(() => {
    setUser(getUserFromToken());
    fetchUserProfile();
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
        activeTab === "subscription" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          SubscriptionTab,
          {
            userUuid: user.uuid,
            trialEndedWithoutSubscription: !!user.trial_ended_without_subscription,
            subscription: user.subscription ?? null,
            isTrialActive: !!user.is_trial_active,
            trialDaysLeft: user.trial_days_left ?? 0,
            trialEndAt: user.trial_end_at ?? null,
            onSubscriptionChanged: fetchUserProfile
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  DashboardPage as D
};
