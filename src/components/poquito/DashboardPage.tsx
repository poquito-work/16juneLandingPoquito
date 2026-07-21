import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { Link, Navigate, useNavigate } from "@tanstack/react-router";
import {
  cancelSubscription,
  getPackageList,
  getPredefinedListByType,
  getTransactionList,
  getUserProfile,
  initializeSubscription,
  updateUserProfile,
  upgradeSubscription,
} from "@/services/auth";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Swal from "sweetalert2";
import { Mail, Smartphone, MapPin, User, Lock, Trash2} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";

import { Check, ChevronsUpDown } from "lucide-react";
import { ScrollBar,ScrollArea } from "../ui/scroll-area";

// ─── Types ───────────────────────────────────────────────────────────────────

interface UserProfile {
  id?: string;
  uuid?: string;
  name?: string;
  username?: string;
  email?: string;
  phone_number?: string | null;
  city?: string;
  city_id?: number | null;
  avatar_url?: string;
  joined_at?: string;
  has_active_subscription?: boolean;
  trial_ended_without_subscription?: boolean;
  is_trial_active?: boolean;
  trial_days_left?: number;
  subscription?: UserSubscription | null;
  trial_end_at?: string | null;
  other_city?: string | null;
}

interface Transaction {
  id: string;
  created_at: string;
  failure_reason: string;
  amount: number;
  razorpay_payment_id: number;
  status: "success" | "pending" | "failed";
  type: "subscription" | "renewal" | "refund";
  invoice_url?: string | null;
}

// interface Subscription {
//   plan: "monthly" | "annual" | "none";
//   status: "active" | "cancelled" | "expired";
//   next_billing?: string;
//   started_at?: string;
// }

interface SubscriptionPlan {
  id: number;
  uuid: string;
  name: string;
  billing_cycle: "monthly" | "annual";
  price: number;
  price_per_month_equiv: number | null;
  discount_percent: number | null;
  gst_excluded: boolean;
  is_active: boolean;
  trial_days: number;
}

interface UserSubscription {
  uuid: string;
  status: "active" | "trialing" | "stopped" | "cancelled" | "expired" | string;
  base_amount: number;
  gst: number;
  total_amount: number;
  trial_start_at: string | null;
  trial_end_at: string | null;
  current_period_start: string | null;
  current_period_end: string | null;
  canceled_at: string | null;
  ended_at: string | null;
  cancel_deferred_to_next_cycle: boolean;
  plan: SubscriptionPlan;
  next_billing_date:string | null
}
// ─── Mock/fallback data helpers ───────────────────────────────────────────────

function decodeJwtPayload(token: string): Record<string, unknown> | null {
  try {
    const base64 = token.split(".")[1];
    const json = atob(base64.replace(/-/g, "+").replace(/_/g, "/"));
    return JSON.parse(json);
  } catch {
    return null;
  }
}

function getUserFromToken(): UserProfile {
  const token = localStorage.getItem("access_token") ?? "";
  const payload = decodeJwtPayload(token);
  return {
    id: (payload?.sub as string) ?? (payload?.id as string) ?? "—",
    name: (payload?.name as string) ?? (payload?.full_name as string) ?? "Player",
    username: (payload?.username as string) ?? (payload?.preferred_username as string) ?? "—",
    email: (payload?.email as string) ?? "—",
    phone_number: payload?.phone_number as string,
    other_city: payload?.other_city as string,
    city: (payload?.city as string) ?? "",
    avatar_url: (payload?.picture as string) ?? "",
    joined_at: payload?.iat
      ? new Date((payload.iat as number) * 1000).toLocaleDateString("en-IN", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "—",
  };
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────

type Tab = "profile" | "transactions" | "subscription" | "delete-account";

const TABS: { id: Tab; label: string; href: string; icon: ReactNode }[] = [
  {
    id: "profile",
    label: "Profile",
    href: "/myaccount/profile",
    icon: (
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    id: "transactions",
    label: "Transactions",
    href: "/myaccount/transaction",
    icon: (
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  {
    id: "subscription",
    label: "Subscription",
    href: "/myaccount/subscription",
    icon: (
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
      </svg>
    ),
  },
  {
    id: "delete-account",
    label: "Delete Account",
    href: "/myaccount/delete-account",
    icon: (
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
        <path d="M10 11v6" />
        <path d="M14 11v6" />
        <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
      </svg>
    ),
  },
];



function Sidebar({
  active,
  onSelect,
  onDeleteClick,
}: {
  active: Tab;
  onSelect: (t: Tab) => void;
   onDeleteClick: () => void;
}) {

  return (
    <>
      <aside className="dash-sidebar">
        <p className="dash-sidebar-label">My Account</p>

        <nav className="dash-sidebar-nav">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`dash-sidebar-item ${
                active === tab.id ? "dash-sidebar-item-active" : ""
              }`}
              onClick={() => {
                if (tab.id === "delete-account") {
                   onDeleteClick();
                  return;
                }

                onSelect(tab.id);
              }}
            >
              <span className="dash-sidebar-icon">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>
      </aside>

  
    </>
  );
}


// ─── Mobile Tab Bar ────────────────────────────────────────────────────────────

function MobileTabBar({
  active,
  onSelect,
  onDeleteClick,
}: {
  active: Tab;
  onSelect: (t: Tab) => void;
  onDeleteClick: () => void;
}) {
  return (
    <div className="dash-mobile-tabs mt-7">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={`dash-mobile-tab ${
            active === tab.id ? "dash-mobile-tab-active" : ""
          }`}
          onClick={() => {
            if (tab.id === "delete-account") {
              onDeleteClick();
              return;
            }

            onSelect(tab.id);
          }}
        >
          <span className="dash-mobile-tab-icon">{tab.icon}</span>
          <span className="dash-mobile-tab-label">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}

// ─── Profile Tab ──────────────────────────────────────────────────────────────

function ProfileTab({
  user,
  onProfileUpdated,
}: {
  user: UserProfile;
  onProfileUpdated?: () => Promise<any>;
}) {
  const initials = (user.username ?? "P")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const [form, setForm] = useState({
    name: user.name ?? "",
    username: user.username ?? "",
    email: user.email ?? "",
    phone_number: user.phone_number ?? "",
    city: user.city ?? "",
    avatar_url: user.avatar_url ?? "",
    other_city: user.other_city ?? "",
  });
  const [cityList, setCityList] = useState<{ id: number; uuid: string; name: string }[]>([]);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [avatarList, setAvatarList] = useState<any[]>([]);
  const [showAvatarDialog, setShowAvatarDialog] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(user.avatar_url);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    getPredefinedListByType("CITY",true)
      .then((res) => setCityList(res.data.content ?? []))
      .catch(() => {});
  }, []);

  const openAvatarDialog = () => {
    setSelectedAvatar(user.avatar_url); // current avatar
    setShowAvatarDialog(true);
  };

  useEffect(() => {
    const fetchAvtarList = async () => {
      try {
        const response = await getPredefinedListByType("AVATAR",true);
        setAvatarList(response.data.content);
      } catch (error) {
        console.error("Error fetching city list:", error);
      }
    };
    fetchAvtarList();
  }, []);

  // Sync when parent user data loads
  useEffect(() => {
    console.log("Effect user.other_city:", user.other_city);
    const matchedCity = cityList.find((c) => c.id === user.city_id);
    setForm((prev) => ({
      ...prev,
      name: user.name ?? prev.name,
      username: user.username ?? prev.username,
      email: user.email ?? prev.email,
      phone_number: user.phone_number !== undefined ? (user.phone_number ?? "") : prev.phone_number,
      city: matchedCity?.name ?? prev.city,
      avatar_url: user.avatar_url ?? prev.avatar_url,
      other_city: user.other_city !== undefined ? (user.other_city ?? "") : prev.other_city,
    }));
    console.log({
      city: form.city,
      other_city: form.other_city,
      userOtherCity: user.other_city,
      matchedCity,
    });
  }, [
    user.name,
    user.username,
    user.email,
    user.phone_number,
    user.other_city,
    user.city_id,
    cityList,
  ]);
  function validate() {
    const e: Record<string, string> = {};
    // if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.username.trim()) e.username = "Username is required.";
    else if (form.username.trim().length < 3) e.username = "Min. 3 characters.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = "Enter a valid email.";
    if (form.phone_number && !/^\+?[\d\s\-()]{7,15}$/.test(form.phone_number.trim()))
      e.phone_number = "Enter a valid phone number.";
    return e;
  }

  async function handleSave(e: React.SyntheticEvent<HTMLFormElement>) {
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
        avatar_url: form.avatar_url,
        other_city: form.other_city,
      });

      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
      await onProfileUpdated?.();
      Swal.fire({
        icon: "success",
        title: "Profile Updated",
        // text: "Your changes have been saved successfully.",
        confirmButtonColor: "#143322",
        timer: 2500,
        timerProgressBar: true,
      });
    } catch (err) {
      console.error("Failed to update profile", err);
      // optionally setErrors({ form: "Failed to save changes. Please try again." })
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="dash-section">
      <div className="dash-section-head">
        <h2 className="dash-section-title">Profile Details</h2>
        <p className="dash-section-sub">Update your account information.</p>
      </div>

      {/* Avatar card */}
      <div className="dash-profile-hero">
        <div className="dash-avatar">
          <span className="dash-avatar-initials">{initials}</span>
          {form.avatar_url ? (
            <>
              <div className="avatar-wrapper">
                <img src={form.avatar_url || user.avatar_url} alt="Avatar" className="uploadLogo" />

                <button
                  type="button"
                  className="avatar-plus"
                  // onClick={() => setShowAvatarDialog(true)}
                  onClick={openAvatarDialog}
                >
                  +
                </button>
              </div>
            </>
          ) : (
            // <img src={user.avatar_url} alt={user.name ?? "Avatar"} className="dash-avatar-img" />
            <span className="dash-avatar-initials">{initials}</span>
          )}
        </div>
        <div>
          {/* <p className="dash-profile-name">{form.name || user.name || "—"}</p> */}
          <p className="dash-profile-name">{form.username || user.username || "—"}</p>
        </div>
      </div>

      {/* Editable fields */}
      <form className="dash-profile-form" onSubmit={handleSave} noValidate>
        <div className="dash-fields-grid">
          {/* <div className="dash-field">
            <label className="dash-field-label" htmlFor="dp-name">Full Name</label>
            <input
              id="dp-name"
              type="text"
              className={`dash-input ${errors.name ? "dash-input-error" : ""}`}
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              placeholder="Your full name"
            />
            {errors.name && <span className="dash-field-error">{errors.name}</span>}
          </div> */}

          <div className="dash-field">
            <label className="dash-field-label" htmlFor="dp-username">
              Username
            </label>
            <User className="reg-input-icon" size={18} />
            <input
              id="dp-username"
              type="text"
              className={`dash-input ${errors.username ? "dash-input-error" : ""}`}
              value={form.username}
              disabled
              onChange={(e) => setForm((p) => ({ ...p, username: e.target.value }))}
              placeholder="username"
            />
            {errors.username && <span className="dash-field-error">{errors.username}</span>}
          </div>

          <div className="dash-field">
            <label className="dash-field-label" htmlFor="dp-email">
              Email Address
            </label>
            <Mail className="reg-input-icon" size={18} />
            <input
              id="dp-email"
              disabled
              type="email"
              className={`dash-input ${errors.email ? "dash-input-error" : ""}`}
              value={form.email}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              placeholder="you@example.com"
            />
            {errors.email && <span className="dash-field-error">{errors.email}</span>}
          </div>

          <div className="dash-field password">
            <label className="dash-field-label" htmlFor="dp-phone">
              Phone Number{" "}
              <span style={{ color: "rgba(20,51,34,0.4)", marginLeft: "5px", fontWeight: 400 }}>
                Optional
              </span>
            </label>
            <div className="reg-input phone-input">
              <Smartphone className="reg-input-icon" size={18} />
              <span className="country-code">+91</span>

              <span className="phone-divider"></span>
              <input
                id="dp-phone"
                type="tel"
                className={`inputPhn ${errors.phone_number ? "dash-input-error" : ""}`}
                value={form.phone_number}
                maxLength={10}
                onChange={(e) => setForm((p) => ({ ...p, phone_number: e.target.value }))}
                placeholder="+91 98765 43210"
              />
            </div>
            {errors.phone_number && <span className="dash-field-error">{errors.phone_number}</span>}
          </div>

          <div className="dash-field password">
            <label className="dash-field-label" htmlFor="dp-city">
              City
            </label>

            <div className="reg-select-wrap">
              <MapPin className="reg-input-icon" size={18} />
              <Popover open={open} onOpenChange={setOpen}>
  <PopoverTrigger asChild>
    <Button
      variant="outline"
      className="dash-input justify-between"
    >
      {form.city || "Select your city"}
      <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
    </Button>
  </PopoverTrigger>

  <PopoverContent className="w-[350px] p-0" side="bottom"
  align="start"
  sideOffset={4}
  avoidCollisions={false}
  >
    <Command>
      <CommandInput placeholder="Search city..." />

      <CommandEmpty>No city found.</CommandEmpty>
            <ScrollArea className="h-64">
      <CommandGroup className="max-h-64 overflow-y-auto custom-scrollbar">
        {cityList.map((city) => (
          <CommandItem
          className={city.name === "Other" ? "text-[#b65a2f] font-semibold" : ""}
            key={city.uuid}
            value={city.name}
            onSelect={(value) => {
              setForm((p) => ({
                ...p,
                city: value,
              }));
              setOpen(false);
            }}
          >
            {city.name}
          </CommandItem>
        ))}
      </CommandGroup>
        <ScrollBar className="w-1" orientation="vertical" />
        </ScrollArea>
    </Command>
  </PopoverContent>
</Popover>
              {/* <select
                id="dp-city"
                className={`dash-input reg-select ${!form.city ? "reg-select-placeholder" : ""}`}
                value={form.city}
                onChange={(e) => setForm((p) => ({ ...p, city: e.target.value }))}
              >
                <option value="" disabled>
                  Select your city
                </option>
                {cityList.map((c) => (
                  <option key={c.uuid} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select> */}
              {/* <span className="reg-select-arrow">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span> */}
            </div>
          </div>

          {form.city.toLowerCase() === "other" && (
            <div className="reg-field">
              <label className="reg-label" htmlFor="reg-city">
                Other City
              </label>
              <MapPin className="reg-input-icon" size={18} />
              <input
                type="text"
                className="reg-input"
                placeholder="Enter other city"
                value={form.other_city}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    other_city: e.target.value,
                  }))
                }
              />
              {errors.other_city && <span className="reg-error">{errors.other_city}</span>}
            </div>
          )}

          {/* Read-only fields */}
          {/* <div className="dash-field">
            <span className="dash-field-label">Member Since</span>
            <span className="dash-field-value">{user.joined_at ?? "—"}</span>
          </div>

          <div className="dash-field">
            <span className="dash-field-label">Account ID</span>
            <span className="dash-field-value dash-field-mono">{user.id ?? "—"}</span>
          </div> */}
        </div>

        <div className="dash-profile-actions">
          <button type="submit" className="dash-cta-btn" disabled={saving}>
            {saving ? (
              <>
                <span className="reg-spinner" />
                Saving…
              </>
            ) : saved ? (
              <>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Saved
              </>
            ) : (
              "Save Changes"
            )}
          </button>
        </div>
        {showAvatarDialog && (
          <div
            className="avatar-modal-overlay"
            onClick={() => {
              setSelectedAvatar(user.avatar_url);
              setShowAvatarDialog(false);
            }}
          >
            <div className="avatar-modal" onClick={(e) => e.stopPropagation()}>
              <div className="avatar-modal-header">
                <h3>CHOOSE AVATAR</h3>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedAvatar(user.avatar_url);
                    setShowAvatarDialog(false);
                  }}
                >
                  ✕
                </button>
              </div>

              <div className="avatar-grid">
                {avatarList.map((avatar) => (
                  <img
                    key={avatar.id}
                    src={avatar.url}
                    alt="Avatar"
                    className={`avatar-item ${selectedAvatar === avatar.url ? "selected" : ""}`}
                    onClick={() => setSelectedAvatar(avatar.url)}
                  />
                ))}
              </div>

              <button
                type="button"
                className="avatar-save-btn"
                onClick={() => {
                  setForm((prev) => ({
                    ...prev,
                    avatar_url: selectedAvatar || prev.avatar_url,
                  }));
                  setShowAvatarDialog(false);
                }}
              >
                <span className="avatar-save-title">FEELS CUTE</span>
                <span className="avatar-save-subtitle">Might change later</span>
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

// ─── Transactions Tab ─────────────────────────────────────────────────────────

// const MOCK_TRANSACTIONS: Transaction[] = [
//   {
//     id: "TXN-20260601",
//     date: "1 Jun 2026",
//     description: "Annual Plan Subscription",
//     amount: 4500,
//     status: "success",
//     type: "subscription",
//   },
//   {
//     id: "TXN-20260501",
//     date: "1 May 2026",
//     description: "Monthly Plan Renewal",
//     amount: 500,
//     status: "success",
//     type: "renewal",
//   },
//   {
//     id: "TXN-20260401",
//     date: "1 Apr 2026",
//     description: "Monthly Plan Renewal",
//     amount: 500,
//     status: "success",
//     type: "renewal",
//   },
//   {
//     id: "TXN-20260301",
//     date: "1 Mar 2026",
//     description: "Monthly Plan — First Subscription",
//     amount: 500,
//     status: "success",
//     type: "subscription",
//   },
// ];

function statusChip(status: Transaction["status"]) {
  const map = {
    success: { label: "Paid", cls: "dash-chip-success" },
    pending: { label: "Pending", cls: "dash-chip-pending" },
    failed: { label: "Failed", cls: "dash-chip-failed" },
  };
  const { label, cls } = map[status];
  return <span className={`dash-chip ${cls}`}>{label}</span>;
}

function TransactionsTab() {
  const [transactionList, setTransactionList] = useState<Transaction[]>([]);
  const [page, setPage] = useState(0);
  const [pageSize] = useState(10);

  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  useEffect(() => {
    loadTransactions(page);
  }, [page]);

  const loadTransactions = async (pageNumber: number) => {
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
  function handleDownloadInvoice(invoiceUrl: string, txId: string) {
    const link = document.createElement("a");
    link.href = invoiceUrl;
    link.download = `invoice.pdf`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div className="dash-section">
      <div className="dash-section-head">
        <h2 className="dash-section-title">Transactions</h2>
        <p className="dash-section-sub">Your payment history.</p>
      </div>

      {transactionList?.length === 0 ? (
        <div className="dash-empty">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: "rgba(20,51,34,0.2)" }}
          >
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <line x1="2" y1="10" x2="22" y2="10" />
          </svg>
          <p>No transactions yet.</p>
        </div>
      ) : (
        <div className="dash-table-wrap">
          <table className="dash-table">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Date</th>
                {/* <th>Description</th> */}
                <th>Amount</th>
                <th>Reason</th>
                <th>Status</th>
                <th>Invoice</th>
              </tr>
            </thead>
            <tbody>
              {transactionList?.map((tx) => (
                <tr key={tx.id}>
                  <td className="dash-td-mono">{tx.razorpay_payment_id}</td>
                  <td>{tx.created_at}</td>
                  <td className="dash-td-amount">₹{tx.amount.toLocaleString("en-IN")}</td>
                  <td>{tx.failure_reason || "-"}</td>

                  <td>{statusChip(tx.status)}</td>
                  <td>
                    {tx.invoice_url ? (
                      <button
                        type="button"
                        className="dash-invoice-btn cursor-pointer"
                        onClick={() => handleDownloadInvoice(tx.invoice_url!, tx.id)}
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Download
                      </button>
                    ) : (
                      <span className="dash-invoice-none">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {totalPages > 1 && (
            <div className="dash-pagination">
              <button onClick={() => setPage((p) => p - 1)} disabled={page === 0}>
                Previous
              </button>

              <span>
                Page {page + 1} of {totalPages}
              </span>

              <button onClick={() => setPage((p) => p + 1)} disabled={page + 1 >= totalPages}>
                Next
              </button>
            </div>
          )}
        </div>
      )}

      <p className="dash-info-note">
        For any issues regarding billing, please contact us at{" "}
        <a href="mailto:support@pocketdragon.in" className="dash-link">
          support@pocketdragon.in
        </a>
        .
      </p>
    </div>
  );
}

// ─── Subscription Tab ─────────────────────────────────────────────────────────

// const MOCK_SUB: Subscription = {
//   plan: "annual",
//   status: "active",
//   next_billing: "1 Jun 2027",
//   started_at: "1 Jun 2026",
// };

interface Plan {
  id: number;
  uuid: string;
  name: string;
  billing_cycle: "monthly" | "annual";
  price: number;
  price_per_month_equiv: number | null;
  discount_percent: number | null;
  gst_excluded: boolean;
  is_active: boolean;
  trial_days: number;
}
function formatDate(iso: string | null) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const SUB_STATUS_MAP: Record<string, { label: string; cls: string }> = {
  active: { label: "Active", cls: "dash-chip-success" },
  trialing: { label: "Trial", cls: "dash-chip-pending" },
  stopped: { label: "Stopped", cls: "dash-chip-failed" },
  cancelled: { label: "Cancelled", cls: "dash-chip-failed" },
  expired: { label: "Expired", cls: "dash-chip-pending" },
};
function SubscriptionTab({
  userUuid,
  trialEndedWithoutSubscription,
  subscription,
  isTrialActive,
  trialDaysLeft,
  trialEndAt,
  onSubscriptionChanged,
}: {
  userUuid?: string;
  trialEndedWithoutSubscription: boolean;
  subscription: UserSubscription | null;
  isTrialActive: boolean;
  trialDaysLeft: number;
  trialEndAt: string | null;
  onSubscriptionChanged?: () => Promise<void>;
}) {
  console.log("trialEndAt:", trialEndAt);
  // const [sub] = useState<Subscription>(MOCK_SUB);
  // const [selectedPlan, setSelectedPlan] = useState<"monthly" | "annual">(
  //   sub.plan !== "none" ? sub.plan : "annual"
  // );
  const [selectedPlanId, setSelectedPlanId] = useState<number | null>(null);

  const [changing, setChanging] = useState(false);
  const [changed, setChanged] = useState(false);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [monthlyDialog, setMonthlyDialog] = useState(false);
  const [annualDialog, setAnnualDialog] = useState(false);

  function CancellationDialog({
    open,
    onClose,
    plan,
  }: {
    open: boolean;
    onClose: () => void;
    plan: "monthly" | "annual";
  }) {
    return (
      <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
        <DialogContent
          className="modal-card max-w-sm border-0 p-0 overflow-hidden [&>button]:text-foreground [&>button]:hover:text-foreground/70"
          style={{ background: "var(--green)" }}
        >
          <div className=" flex flex-col gap-5">
            {/* Title */}
            <DialogHeader>
              <DialogTitle
                className="font-display font-bold uppercase tracking-[0.18em] text-rust"
                style={{ fontSize: "1rem" }}
              >
                Terms of Cancellation
              </DialogTitle>
              <DialogDescription className="sr-only">
                {plan === "monthly" ? "Monthly Plan" : "Annual Plan"} cancellation terms
              </DialogDescription>
            </DialogHeader>

            {/* Body */}
            <div className=" space-y-3 text-[0.95rem] text-cream/85 leading-relaxed">
              {plan === "monthly" ? (
                <>
                  <p>
                    Subscriptions are non-refundable. Upon cancellation, benefits will remain active
                    until the end of the current subscription term and subscription will not renew
                    automatically thereafter
                  </p>
                  <p>
                    No refunds or credits will be issued for any partially used or unused portion of
                    a monthly or annual subscription term
                  </p>
                  <p className="text-cream/55 text-[0.95rem]">
                    To cancel, go to 'My Account' and select 'Subscription'
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Subscriptions are non-refundable. Upon cancellation, benefits will remain active
                    until the end of the current subscription term and subscription will not renew
                    automatically thereafter
                  </p>
                  <p>
                    No refunds or credits will be issued for any partially used or unused portion of
                    a monthly or annual subscription term
                  </p>
                  <p className="text-cream/55 text-[0.95rem]">
                    To cancel, go to 'My Account' and select 'Subscription'
                  </p>
                </>
              )}
            </div>

            {/* Button */}
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer mt-2 inline-flex w-full items-center justify-center rounded-full bg-rust px-6 py-3 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-cream transition-opacity hover:opacity-90"
            >
              Got It
            </button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  function daysUntil(dateStr: string | null): number | null {
    if (!dateStr) return null;
    const diffMs = new Date(dateStr).getTime() - Date.now();
    return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  }

  const showSubscribeButton =
    !subscription || ["stopped", "expired", "cancelling"].includes(subscription.status);

  async function handleSubscribe(planId: number) {
    const selectedPlan = plans.find((p) => p.id === planId);
    if (!selectedPlan) return;

    setChanging(true);
    const profileRes = await getUserProfile();

    const userUuid = profileRes.data.uuid;
    try {
      const res = await initializeSubscription(
        userUuid, // current logged in user uuid
        selectedPlan.uuid,
      );

      const paymentUrl = res.data.razorpay_short_url;

      const paymentWindow = window.open(paymentUrl, "_blank", "width=900,height=700");

      pollSubscriptionStatus(paymentWindow, selectedPlan.uuid);
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: err?.response?.data?.message ?? "Unable to initialize subscription.",
      });
    } finally {
      setChanging(false);
    }
  }

  async function pollSubscriptionStatus(paymentWindow: Window | null, targetPlanUuid?: string) {
    if (!paymentWindow) return;

    const interval = setInterval(async () => {
      try {
        // user closed popup manually
        if (paymentWindow.closed) {
          clearInterval(interval);
          return;
        }

        const profile = await getUserProfile();

        const sub = profile.data.subscription;
        const hasActive = profile.data.has_active_subscription;
        const isPlanActive = sub && (sub.status === "active" || sub.status === "trialing");
        // const isPlanActive = hasActive || (sub && (sub.status === "active" || sub.status === "trialing"));
        const isTargetPlan = targetPlanUuid ? sub?.plan?.uuid === targetPlanUuid : true;

        if (isPlanActive && isTargetPlan) {
          clearInterval(interval);

          paymentWindow.close();

          await onSubscriptionChanged?.();

          Swal.fire({
            icon: "success",
            title: "Subscription Activated",
          });
        }
      } catch (e) {
        console.log(e);
      }
    }, 3000);
  }

  async function handleChangePlan(planId: number) {
    const planToApply = plans.find((p) => p.id === planId);

    if (!planToApply || !subscription) return;
    //  <strong>Rs ${planToApply.price.toLocaleString()}/${planToApply.billing_cycle}</strong>
    const confirm = await Swal.fire({
      icon: "question",
      title: `Switch to ${planToApply.billing_cycle === "annual" ? "Annual" : "Monthly"} Plan?`,
      html: `
      <div style="text-align:center; line-height:1.6">
        <p>
          
          ${
            planToApply.billing_cycle === "annual"
              ? "<br><span style='color:#666'>Save 25% | Rs 375/month</span>"
              : ""
          }
        </p>

       

        <p>
          Your current <strong>${subscription.plan.name}</strong> will remain active until
          <strong>${formatDate(subscription.current_period_end)}.</strong>.
        </p>

      

        <p>
          Starting <strong>${addOneDay(subscription?.current_period_end ?? null)}</strong>,
          your subscription will automatically switch to the
          <strong>${planToApply.billing_cycle === "annual" ? "Annual" : "Monthly"}</strong> Plan.
        </p>
      </div>
    `,
      showCancelButton: true,
      confirmButtonText: "Yes, Switch",
      cancelButtonText: "No, Go back",
      confirmButtonColor: "#b65a2f",
      cancelButtonColor: "#143322",
      // reverseButtons: true,
    });

    if (!confirm.isConfirmed) return;

    setChanging(true);

    try {
      const res = await upgradeSubscription(planToApply.uuid);

      // const paymentUrl = res.data.data?.razorpay_short_url;

      // const paymentWindow = window.open(paymentUrl, "_blank", "width=900,height=700");

      // pollSubscriptionStatus(paymentWindow, planToApply.uuid);
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title: "Upgrade Failed",
        text: err?.response?.data?.message ?? "Unable to upgrade your subscription.",
      });
    } finally {
      setChanging(false);
    }
  }

  async function handleCancelPlan() {
    if (!subscription) return;

    const remaining = daysUntil(subscription.current_period_end);
    const withinRenewalWindow = remaining !== null && remaining <= 3;

    const confirmResult = await Swal.fire({
      icon: "warning",
      title: "We are sorry to see you go",
      html: `
    <div style="text-align:center; line-height:1.6;">
      <p>
        Your subscription will remain active until
        <b>${formatDate(subscription.current_period_end)}</b>.
      </p>
      <p>
        Afterwhich it will not automatically renew
      </p>
     
    </div>
  `,
      showCancelButton: true,
      confirmButtonText: "Cancel Subscription",
      cancelButtonText: "Stay Subscribed",
      confirmButtonColor: "#b65a2f",
      cancelButtonColor: "#143322",
    });

    if (!confirmResult.isConfirmed) return;

    setChanging(true);
    try {
      await cancelSubscription();
      Swal.fire({
        icon: "success",
        title: "Subscription Cancelled",
        text: "Your subscription has been cancelled successfully.",
        confirmButtonColor: "#143322",
      });
      await onSubscriptionChanged?.();
    } catch (err: any) {
      console.error("Failed to cancel subscription", err);
      const message =
        err?.response?.data?.message ??
        err?.message ??
        "Failed to cancel subscription. Please try again.";
      Swal.fire({
        icon: "error",
        title: "Cancellation Failed",
        text: message,
        confirmButtonColor: "#143322",
      });
    } finally {
      setChanging(false);
    }
  }

  useEffect(() => {
    getPackageList()
      .then((res) => {
        const loadedPlans = res.data?.content ?? [];
        setPlans(loadedPlans);

        if (subscription?.plan?.id) {
          setSelectedPlanId(subscription.plan.id);
        } else if (loadedPlans.length > 0) {
          setSelectedPlanId(loadedPlans[0].id);
        }
      })
      .catch((err) => console.error("Failed to load plans", err));
  }, [subscription]);

  const monthlyPlan = plans.find((p) => p.billing_cycle === "monthly");
  const annualPlan = plans.find((p) => p.billing_cycle === "annual");

  const planLabel = { monthly: "Monthly Plan", annual: "Annual Plan", none: "No Active Plan" };
  const planPrice = { monthly: "₹500 / month", annual: "₹4,500 / year", none: "—" };
  const isCurrentPlanSelected = !!subscription && selectedPlanId === subscription.plan.id;
  const isDifferentPlanSelected = !!selectedPlanId && !isCurrentPlanSelected;

  const statusMap = {
    active: { label: "Active", cls: "dash-chip-success" },
    cancelled: { label: "Cancelled", cls: "dash-chip-failed" },
    expired: { label: "Expired", cls: "dash-chip-pending" },
  };

  const selectedPlan = plans.find((p) => p.id === selectedPlanId);

  const isSubscriptionActive =
    subscription?.status === "active" || subscription?.status === "trialing";
  function addOneDay(date: string | null) {
    if (!date) return "—";

    const nextDate = new Date(date);
    nextDate.setDate(nextDate.getDate() + 1);

    return nextDate.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  // const isDowngrade =
  //    isSubscriptionActive &&
  //   subscription?.plan?.billing_cycle === "annual" &&
  //   selectedPlan?.billing_cycle === "monthly";

  return (
    <div className="dash-section">
      <div className="dash-section-head">
        <h2 className="dash-section-title">Subscription</h2>
        <p className="dash-section-sub">
          {trialEndedWithoutSubscription
            ? "Choose a plan to continue."
            : "Manage your current plan."}
        </p>
      </div>

      {/* Current plan card — hidden once trial ended with no subscription */}
      {!trialEndedWithoutSubscription && subscription && (
        <div className="dash-sub-current">
          <div className="dash-sub-current-left">
            <span className="dash-sub-plan-eyebrow">Current Plan</span>
            <p className="dash-sub-plan-name">{subscription.plan?.name}</p>
            <p className="dash-sub-plan-price">Next billing on {formatDate(subscription?.next_billing_date)}</p>
            {/* <p className="dash-sub-plan-price">
              ₹{subscription.total_amount.toLocaleString("en-IN")} /{" "}
              {subscription.plan.billing_cycle === "monthly" ? "month" : "year"}
              {subscription.plan.gst_excluded && (
                <span className="dash-sub-gst-note"> (incl. ₹{subscription.gst} GST)</span>
              )}
            </p> */}

            {isTrialActive ? (
              <></>
            ) : (
              // <div className="dash-sub-meta">
              //   <h3 className="">Free trial active</h3>
              //   <p className="">
              //     Your {trialDaysLeft}-day trial ends {formatDate(subscription.trial_end_at)}.
              //   </p>
              // </div>
              <div className="dash-sub-meta">
                {subscription.current_period_end && (
                  <span>Renews/ends: {formatDate(subscription.current_period_end)}</span>
                )}
              </div>
            )}
          </div>
          {/* <div>
            <span
              className={`dash-chip ${(SUB_STATUS_MAP[subscription.status] ?? { label: subscription.status, cls: "dash-chip-pending" }).cls}`}
            >
              {
                (
                  SUB_STATUS_MAP[subscription.status] ?? {
                    label: subscription.status,
                    cls: "dash-chip-pending",
                  }
                ).label
              }
            </span>
          </div> */}
        </div>
      )}

      {!trialEndedWithoutSubscription && !subscription && isTrialActive && (
        <div className="dash-sub-current">
          <div className="dash-sub-current-left">
            <span className="dash-sub-plan-eyebrow">Current Plan</span>
            <p className="dash-sub-plan-name">Free Trial</p>
            <div className="dash-sub-meta trialText">
              <h3 className="">Trial end at {formatDate(trialEndAt)}.</h3>
              {/* <p className="">
                Your {trialDaysLeft}-day trial ends {formatDate(trialEndAt)}.
              </p> */}
            </div>
          </div>
          {/* <div>
            <span className="dash-chip dash-chip-pending">Trial</span>
          </div> */}
        </div>
      )}

      {/* {!trialEndedWithoutSubscription && !subscription && (
  <div className="dash-sub-current">
    <div className="dash-sub-current-left">
      <span className="dash-sub-plan-eyebrow">Current Plan</span>
      <p className="dash-sub-plan-name">No Active Plan</p>
    </div>
  </div>
)} */}

      {/* Change plan */}
      <div className="dash-sub-change">
        <p className="dash-sub-change-title">
          {trialEndedWithoutSubscription || isTrialActive ? "Choose a Plan" : "Change Plan"}
        </p>
        {subscription && (
          <p className="mb-8">
            If you want to switch to the{" "}
            <strong>{subscription?.plan.billing_cycle === "monthly" ? "Annual" : "Monthly"}</strong>{" "}
            Plan, your current{" "}
            <strong>
              {subscription?.plan.billing_cycle === "monthly" ? "Annual" : "Monthly"} plan
            </strong>{" "}
            will remain active until{" "}
            <strong>{formatDate(subscription?.current_period_end ?? null)}</strong>. Starting{" "}
            <strong>{addOneDay(subscription?.current_period_end ?? null)}</strong>, your
            subscription will automatically switch to the{" "}
            <strong>
              {subscription?.plan.billing_cycle === "monthly" ? "Annual" : "Monthly"} plan
            </strong>
          </p>
        )}
        <div className="">
          <div className="dash-sub-plans-grid">
            {plans
              .filter((plan) => {
                if (!subscription) {
                  return true;
                }

                if (subscription.plan.billing_cycle === "monthly") {
                  return plan.billing_cycle === "annual";
                }

                if (subscription.plan.billing_cycle === "annual") {
                  return plan.billing_cycle === "monthly";
                }

                return true;
              })
              .map((plan) => {
                const isCurrentPlan = subscription?.plan.id === plan.id;

                const isDowngrade =
                  subscription?.plan.billing_cycle === "annual" && plan.billing_cycle === "monthly";

                const isUpgrade =
                  subscription?.plan.billing_cycle === "monthly" && plan.billing_cycle === "annual";
                const isSelected = selectedPlanId === plan.id;
                const isBestValue = plan.billing_cycle === "annual";

                return (
                  <div
                    key={plan.id}
                    className={`reg-plan-card
    ${plan.billing_cycle === "annual" ? "reg-plan-card-featured" : "regMonthly"}
    ${subscription?.plan.id === plan.id ? "reg-plan-card-selected" : ""}`}
                    onClick={() => setSelectedPlanId(plan.id)}
                  >
                    {isBestValue && (
                      <div className="reg-plan-badge rounded-full bg-rust px-8 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-cream shadow-sm">
                        BEST VALUE
                      </div>
                    )}

                    {!trialEndedWithoutSubscription &&
                      subscription &&
                      (subscription.status === "active" || subscription.status === "trialing") &&
                      plan.id === subscription.plan.id && (
                        <p
                          className={
                            plan.billing_cycle === "annual"
                              ? "dash-sub-same-note annual"
                              : "dash-sub-same-note monthly"
                          }
                        >
                          Active
                        </p>
                      )}
                    {plan.billing_cycle === "annual" ? (
                      <p className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-cream/85 mb-4">
                        {plan.name}
                      </p>
                    ) : (
                      <p className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-foreground/70 mb-4">
                        {plan.name}
                      </p>
                    )}

                    <div>
                      <p className="reg-plan-price-row">
                        <span
                          className={`reg-plan-currency ${
                            plan.billing_cycle === "monthly"
                              ? "text-sm font-bold"
                              : "text-sm font-bold text-cream/85"
                          }`}
                        >
                          Rs
                        </span>
                        {plan.billing_cycle === "annual" && (
                          <span className="font-display text-5xl font-bold leading-none text-cream">
                            {plan.price.toLocaleString("en-IN")}
                          </span>
                        )}

                        {plan.billing_cycle === "monthly" && (
                          <span
                            className="font-display text-5xl font-bold leading-none"
                            style={{ color: "var(--foreground)" }}
                          >
                            {plan.price.toLocaleString("en-IN")}
                          </span>
                        )}
                        <span
                          className={`reg-plan-period ${
                            plan.billing_cycle === "monthly"
                              ? "ml-1 text-sm text-foreground/65"
                              : "ml-1 text-sm text-cream/75"
                          }`}
                        >
                          / {plan.billing_cycle === "monthly" ? "month" : "year"}
                        </span>
                      </p>

                      {plan.billing_cycle === "annual" && (
                        // <p className="reg-plan-save">
                        //   Save {plan.discount_percent}% | Rs{" "}
                        //   {plan.price_per_month_equiv}/month
                        // </p>

                        <p className="mt-2 text-xs text-cream/75">Save 25% | Rs 375/month</p>
                      )}

                      {plan.billing_cycle === "annual" && (
                        <p className="mt-2 text-xs text-cream/75">
                          {plan.gst_excluded ? "Excl GST" : "Incl GST"}
                        </p>
                      )}

                      {plan.billing_cycle === "monthly" && (
                        <p className="mt-2 text-xs text-foreground/65">
                          {plan.gst_excluded ? "Excl GST" : "Incl GST"}
                        </p>
                      )}

                      {plan.billing_cycle === "monthly" && (
                        <p className="mt-2 text-xs text-foreground/65">
                          Billed monthly. Cancel anytime.
                        </p>
                      )}
                    </div>
                    {plan.billing_cycle === "annual" ? (
                      <hr className="reg-plan-divider" />
                    ) : (
                      <hr className="reg-plan-divider monthlyHr" />
                    )}

                    {showSubscribeButton ? (
                      <button
                        type="button"
                        className="reg-plan-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSubscribe(plan.id);
                        }}
                        disabled={changing}
                      >
                        SUBSCRIBE NOW
                        {/* {changing ? "Redirecting..." : "SUBSCRIBE NOW"} */}
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="reg-plan-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleChangePlan(plan.id);
                        }}
                        disabled={changing}
                      >
                        SUBSCRIBE NOW
                        {/* {changing ? "Redirecting..." : "SUBSCRIBE NOW"} */}
                      </button>
                    )}

                    {/* <button
          type="button"
          className="reg-plan-btn"
          onClick={(e) => {
            e.stopPropagation();
            setSelectedPlanId(plan.id);

            if (showSubscribeButton) {
              handleSubscribe();
            } else {
              handleChangePlan();
            }
          }}
         disabled={
  changing ||
  (!!subscription && selectedPlanId === subscription.plan.id)
}
        >
          {showSubscribeButton
            ? "SUBSCRIBE NOW"
            : subscription?.plan.id === plan.id
            ? "CURRENT PLAN"
            : "UPGRADE"}
        </button> */}

                    {/* <p className="reg-plan-terms">
          ⓘ Terms of cancellation
        </p> */}
                    {plan.billing_cycle === "monthly" ? (
                      <div className="w-full text-center">
                        <button
                          type="button"
                          onClick={() => setMonthlyDialog(true)}
                          className="cursor-pointer mt-3 inline-flex items-center justify-center gap-1.5 text-[0.80rem] text-foreground/50  underline-offset-2 hover:text-foreground/75 transition-colors"
                        >
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="16" x2="12" y2="12" />
                            <line x1="12" y1="8" x2="12.01" y2="8" />
                          </svg>
                          Terms of cancellation
                        </button>
                      </div>
                    ) : (
                      <div className="w-full text-center">
                        <button
                          type="button"
                          onClick={() => setAnnualDialog(true)}
                          className="mt-3 inline-flex items-center cursor-pointer justify-center gap-1.5 text-[0.80rem] text-cream/50  underline-offset-2 hover:text-cream/80 transition-colors"
                        >
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="16" x2="12" y2="12" />
                            <line x1="12" y1="8" x2="12.01" y2="8" />
                          </svg>
                          Terms of cancellation
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>

          {subscription &&
            (subscription.status === "active" || subscription.status === "trialing") && (
              <p className="dash-info-note">
                To cancel your subscription,&nbsp;
                <button
                  type="button"
                  onClick={handleCancelPlan}
                  className="dash-link-btn"
                  disabled={changing}
                >
                  click here
                </button>
                .
              </p>
            )}
        </div>

        <CancellationDialog
          open={monthlyDialog}
          onClose={() => setMonthlyDialog(false)}
          plan="monthly"
        />
        <CancellationDialog
          open={annualDialog}
          onClose={() => setAnnualDialog(false)}
          plan="annual"
        />

        {/* <div className="dash-sub-actions">
               {isDowngrade && (
  <p className="text-sm text-red-500 mb-3">
    You cannot downgrade from the Annual plan to the Monthly plan.
  </p>
)}
          <div className="flex gap-2">
  
            {showSubscribeButton ? (
              <button
                type="button"
                className="dash-cta-btn"
                onClick={handleSubscribe}
                disabled={changing || !selectedPlanId}
              >
                {changing ? (
                  <>
                    <span className="reg-spinner" />
                    Redirecting...
                  </>
                ) : (
                  "Subscribe now"
                )}
              </button>
            ) : (
              <>
                <button
                  type="button"
                  className={`dash-cta-btn ${isDowngrade ? "noUpgrade" : ""}`}
                  onClick={handleChangePlan}
                    disabled={
    changing ||
    !selectedPlanId ||
    isCurrentPlanSelected
  }
                >
                  {changing ? (
                    <><span className="reg-spinner" />Updating Plan…</>
                  ) : changed ? (
                    <>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Plan Updated
                    </>
                  ) : (
                    "Upgrade Subscription"
                  )}
                </button>

                <button type="button" disabled={changing || !subscription || isDifferentPlanSelected} className="dash-cancel-btn" onClick={handleCancelPlan}>
                  Cancel Subscription
                </button>
              </>
            )}
          </div>
         {!trialEndedWithoutSubscription &&
  subscription &&
  (subscription.status === "active" ||
    subscription.status === "trialing") &&
  selectedPlanId === subscription.plan.id && (
    <p className="dash-sub-same-note">This is your current plan.</p>
)}
        </div> */}
      </div>

      {/* <p className="dash-info-note">
        To cancel your subscription, go to Account Settings in the Pocket Dragon app and select
        "Manage Subscription". See our{" "}
        <Link to="/terms" className="dash-link">
          Terms of Use
        </Link>{" "}
        for cancellation policy.
      </p> */}
    </div>
  );
}

// ─── Main DashboardPage ───────────────────────────────────────────────────────

const TAB_ROUTES: Record<
  Exclude<Tab, "delete-account">,
  | "/myaccount/profile"
  | "/myaccount/transaction-history"
  | "/myaccount/manage-subscription"
> = {
  profile: "/myaccount/profile",
  transactions: "/myaccount/transaction-history",
  subscription: "/myaccount/manage-subscription",
};

export function DashboardPage({ activeTab: initialTab }: { activeTab: Tab }) {
  const [activeTab, setActiveTab] = useState<Tab>(initialTab);
  const [user, setUser] = useState<UserProfile>({});
  const navigate = useNavigate();
   const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  function fetchUserProfile() {
    return getUserProfile()
      .then((res) => {
        const data = res.data;

        setUser((prev) => ({
          ...prev,
          id: data.id != null ? String(data.id) : prev.id,
          uuid: data.uuid ?? prev.uuid,
          username: data.username ?? prev.username,
          email: data.email ?? prev.email,
          phone_number: data.phone_number ?? prev.phone_number,
          city_id: data.city_id ?? prev.city_id,
          other_city: data.other_city !== undefined ? data.other_city : prev.other_city,
          avatar_url: data.avatar_url ?? prev.avatar_url,
          joined_at: data.joined_at ?? prev.joined_at,
          has_active_subscription: data.has_active_subscription ?? prev.has_active_subscription,
          trial_ended_without_subscription:
            data.trial_ended_without_subscription ?? prev.trial_ended_without_subscription,
          is_trial_active: data.is_trial_active ?? prev.is_trial_active,
          trial_days_left: data.trial_days_left ?? prev.trial_days_left,
          trial_end_at: data.trial_end_at ?? prev.trial_end_at,
          subscription: data.subscription ?? null,
        }));
      })
      .catch((err) => {
        console.error("Failed to load profile", err);
        if (err?.response?.status === 401) {
          localStorage.removeItem("access_token");
          // toast.error("Session expired. Please log in again.");
          navigate({ to: "/" });
        }
      });
  }

  useEffect(() => {
    setUser(getUserFromToken());
    fetchUserProfile();
  }, []);

  // Sync if the prop changes (e.g. direct URL navigation)
  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

 function handleTabSelect(tab: Tab) {
  if (tab === "delete-account") {
    return; // Dialog is handled in Sidebar
  }

  setActiveTab(tab);
  navigate({ to: TAB_ROUTES[tab] });
}

  return (
    <div className="dash-page">
      <Header onLoginClick={() => navigate({ to: "/" })} />

      <MobileTabBar
  active={activeTab}
  onSelect={handleTabSelect}
  onDeleteClick={() => setShowDeleteDialog(true)}
/>

      <div className="dash-body">
        <Sidebar active={activeTab} onSelect={handleTabSelect}  onDeleteClick={() => setShowDeleteDialog(true)}/>

        <main className="dash-main">
          {activeTab === "profile" && (
            <ProfileTab user={user} onProfileUpdated={fetchUserProfile} />
          )}
          {activeTab === "transactions" && <TransactionsTab />}
          {activeTab === "subscription" && (
            <SubscriptionTab
              userUuid={user.uuid}
              trialEndedWithoutSubscription={!!user.trial_ended_without_subscription}
              subscription={user.subscription ?? null}
              isTrialActive={!!user.is_trial_active}
              trialDaysLeft={user.trial_days_left ?? 0}
              trialEndAt={user.trial_end_at ?? null}
              onSubscriptionChanged={fetchUserProfile}
            />
          )}
        </main>
      </div>

      <Footer />
        <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
  <DialogContent className=" rounded-[32px] border-0 p-0 overflow-hidden">
    <div className="bg-[#F8F1E7] px-8 py-6 text-center">

      {/* Handle */}
      <div className="mx-auto mb-6  rounded-full bg-[#D9CCB9]" />

      {/* Icon */}
      <div className="mx-auto flex h-12 w-12 items-center justify-center radius-full rounded-full border border-[#b65a2f]">
        <Trash2 className="h-6 w-6 text-[#b65a2f]" />
      </div>

      {/* Title */}
      <h2 className="mt-6 text-2xl font-bold tracking-wide text-[#2E2A24]">
        DELETE ACCOUNT
      </h2>

      {/* Description */}
      <p className="mt-5 text-[15px] leading-7 text-[#6A625A]">
        Deleting your account is permanent and cannot be undone.
        Your profile, game history, statistics, friends,
        achievements, and all associated data will be permanently deleted.
      </p>

      <p className="mt-6 text-lg font-medium text-[#2E2A24]">
        Are you sure?
      </p>

      {/* Buttons */}
      <div className="mt-8  flex items-center gap-4">
        <button
          className="dash-delete-btns w-full rounded-xl bg-[#b65a2f] py-4 font-semibold uppercase tracking-wide text-white transition hover:bg-[#b65a2f] hover:opacity-[0.9]"
          // onClick={handleDeleteAccount}
        >
          Yes, I'm Sure
        </button>

        <button
          className="dash-cancel-btns w-full rounded-xl border border-[#b65a2f] py-4 font-semibold uppercase tracking-wide text-[#b65a2f] transition hover:bg-[#f9f2e4] hover:opacity-[0.9]"
          onClick={() => setShowDeleteDialog(false)}
        >
          No, I Change My Mind
        </button>
      </div>
    </div>
  </DialogContent>
</Dialog>
    </div>
  );
}
