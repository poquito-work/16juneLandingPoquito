import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { Link, Navigate, useNavigate } from "@tanstack/react-router";
import { cancelSubscription, getPackageList, getPredefinedListByType, getTransactionList, getUserProfile, updateUserProfile, upgradeSubscription } from "@/services/auth";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Swal from "sweetalert2";

// ─── Types ───────────────────────────────────────────────────────────────────

interface UserProfile {
  id?: string;
  name?: string;
  username?: string;
  email?: string;
  phone_number?: string;
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
}

interface Transaction {
  id: string;
  created_at: string;
  failure_reason: string;
  amount: number;
  razorpay_payment_id:number;
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
    phone_number: (payload?.phone_number as string) ?? "—",
    city: (payload?.city as string) ?? "",
    avatar_url: (payload?.picture as string) ?? "",
    joined_at: payload?.iat
      ? new Date((payload.iat as number) * 1000).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })
      : "—",
  };
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────

type Tab = "profile" | "transactions" | "subscription";

const TABS: { id: Tab; label: string; href: string; icon: ReactNode }[] = [
  {
    id: "profile",
    label: "Profile",
    href: "/myaccount/profile",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
      </svg>
    ),
  },
];

function Sidebar({ active, onSelect }: { active: Tab; onSelect: (t: Tab) => void }) {
  return (
    <aside className="dash-sidebar">
      <p className="dash-sidebar-label">My Account</p>
      <nav className="dash-sidebar-nav">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`dash-sidebar-item ${active === tab.id ? "dash-sidebar-item-active" : ""}`}
            onClick={() => onSelect(tab.id)}
          >
            <span className="dash-sidebar-icon">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}

// ─── Mobile Tab Bar ────────────────────────────────────────────────────────────

function MobileTabBar({ active, onSelect }: { active: Tab; onSelect: (t: Tab) => void }) {
  return (
    <div className="dash-mobile-tabs mt-7">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={`dash-mobile-tab ${active === tab.id ? "dash-mobile-tab-active" : ""}`}
          onClick={() => onSelect(tab.id)}
        >
          <span className="dash-mobile-tab-icon">{tab.icon}</span>
          <span className="dash-mobile-tab-label">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}

// ─── Profile Tab ──────────────────────────────────────────────────────────────

function ProfileTab({ user }: { user: UserProfile }) {
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
  });
  const [cityList, setCityList] = useState<{ id: number; uuid: string; name: string }[]>([]);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    getPredefinedListByType("city")
      .then((res) => setCityList(res.data.content ?? []))
      .catch(() => {});
  }, []);


  // Sync when parent user data loads
  useEffect(() => {
  const matchedCity = cityList.find((c) => c.id === user.city_id);
  setForm((prev) => ({
    ...prev,
    name: user.name ?? prev.name,
    username: user.username ?? prev.username,
    email: user.email ?? prev.email,
    phone_number: user.phone_number ?? prev.phone_number,
    city: matchedCity?.name ?? prev.city,
  }));
}, [user.name, user.username, user.email, user.phone_number, user.city_id, cityList]);
  function validate() {
    const e: Record<string, string> = {};
    // if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.username.trim()) e.username = "Username is required.";
    else if (form.username.trim().length < 3) e.username = "Min. 3 characters.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Enter a valid email.";
    if (form.phone_number && !/^\+?[\d\s\-()]{7,15}$/.test(form.phone_number.trim())) e.phone_number = "Enter a valid phone number.";
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
      phone_number: form.phone_number,
      city_id: selectedCity?.id,
    });

    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
    await getUserProfile();
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
          {user.avatar_url ? (
            <img src={user.avatar_url} alt={user.name ?? "Avatar"} className="dash-avatar-img" />
          ) : (
            <span className="dash-avatar-initials">{initials}</span>
          )}
        </div>
        <div>
          <p className="dash-profile-name">{form.name || user.name || "—"}</p>
          <p className="dash-profile-handle">@{form.username || user.username || "—"}</p>
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
            <label className="dash-field-label" htmlFor="dp-username">Username</label>
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
            <label className="dash-field-label" htmlFor="dp-email">Email Address</label>
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

          <div className="dash-field">
            <label className="dash-field-label" htmlFor="dp-phone">Phone Number</label>
            <input
              id="dp-phone"
              type="tel"
              className={`dash-input ${errors.phone_number ? "dash-input-error" : ""}`}
              value={form.phone_number}
              maxLength={10}
              onChange={(e) => setForm((p) => ({ ...p, phone_number: e.target.value }))}
              placeholder="+91 98765 43210"
            />
            {errors.phone_number && <span className="dash-field-error">{errors.phone_number}</span>}
          </div>

          <div className="dash-field">
            <label className="dash-field-label" htmlFor="dp-city">City</label>
            <div className="reg-select-wrap">
              <select
                id="dp-city"
                className={`dash-input reg-select ${!form.city ? "reg-select-placeholder" : ""}`}
                value={form.city}
                onChange={(e) => setForm((p) => ({ ...p, city: e.target.value }))}
              >
                <option value="" disabled>Select your city</option>
                {cityList.map((c) => (
                  <option key={c.uuid} value={c.name}>{c.name}</option>
                ))}
              </select>
              <span className="reg-select-arrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </div>
          </div>

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
              <><span className="reg-spinner" />Saving…</>
            ) : saved ? (
              <>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Saved
              </>
            ) : (
              "Save Changes"
            )}
          </button>
        </div>
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

  useEffect(() => {
    getTransactionList()
      .then((res) => {
        setTransactionList(res.data.content ?? []);
      })
      .catch((err) => {
        console.error("Failed to load transactions", err);
      })
      // .finally(() => setLoading(false));
  }, []);
function handleDownloadInvoice(invoiceUrl: string, txId: string) {
  const link = document.createElement("a");
  link.href = invoiceUrl;
  link.download = `invoice-${txId}.pdf`;
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
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ color: "rgba(20,51,34,0.2)" }}>
            <rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" />
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
                    <td>{tx.failure_reason}</td>

                  <td>{statusChip(tx.status)}</td>
                  <td>
          {tx.invoice_url ? (
            <button
              type="button"
              className="dash-invoice-btn"
              onClick={() => handleDownloadInvoice(tx.invoice_url!, tx.id)}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        </div>

        
      )}

      <p className="dash-info-note">
        For billing disputes or refund requests, contact{" "}
        <a href="mailto:hello@pocketdragon.app" className="dash-link">hello@pocketdragon.app</a>.
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
  return new Date(iso).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" });
}

const SUB_STATUS_MAP: Record<string, { label: string; cls: string }> = {
  active: { label: "Active", cls: "dash-chip-success" },
  trialing: { label: "Trial", cls: "dash-chip-pending" },
  stopped: { label: "Stopped", cls: "dash-chip-failed" },
  cancelled: { label: "Cancelled", cls: "dash-chip-failed" },
  expired: { label: "Expired", cls: "dash-chip-pending" },
};
function SubscriptionTab({
  trialEndedWithoutSubscription,
  subscription,
  isTrialActive,
  trialDaysLeft,
   trialEndAt,            
  onSubscriptionChanged,
}: {
  trialEndedWithoutSubscription: boolean;
  subscription: UserSubscription | null;
  isTrialActive: boolean;
  trialDaysLeft: number;
   trialEndAt: string | null;  
  onSubscriptionChanged?: () => Promise<void>;
})  {
  console.log("trialEndAt:", trialEndAt);
  // const [sub] = useState<Subscription>(MOCK_SUB);
  // const [selectedPlan, setSelectedPlan] = useState<"monthly" | "annual">(
  //   sub.plan !== "none" ? sub.plan : "annual"
  // );
  const [selectedPlanId, setSelectedPlanId] = useState<number | null>(null);

  const [changing, setChanging] = useState(false);
  const [changed, setChanged] = useState(false);
  const [plans, setPlans] = useState<Plan[]>([]);

  function daysUntil(dateStr: string | null): number | null {
  if (!dateStr) return null;
  const diffMs = new Date(dateStr).getTime() - Date.now();
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

async function handleChangePlan() {
  const planToApply = plans.find((p) => p.id === selectedPlanId);
  if (!planToApply) return;

  setChanging(true);
  try {
    await upgradeSubscription(planToApply.uuid);
    setChanged(true);
    setTimeout(() => setChanged(false), 3000);
    Swal.fire({ icon: "success",title:"Subscription upgraded successfully."});
    // refresh subscription state from server
    await onSubscriptionChanged?.();
  } catch (err:any) {
   if (err?.response?.data?.errorCode === "400" || err?.response?.data?.errorCode === "404") {
  Swal.fire({
    icon: "error",
    title: "Upgrade Failed",
    text: err.response.data.message,
  });
}
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
    title: "Cancel Subscription?",
html: `If your next renewal is 3 or more days away, your subscription will end on your current renewal date.<br><br>If your next renewal is less than 3 days away, your upcoming payment will still be processed, and your subscription will end after the following billing cycle.`,    // html: withinRenewalWindow
    //   ? `If your next renewal is 3 or more days away, your subscription will end on your current renewal date.`
    //   : `You're about to cancel your <b>${subscription.plan.name}</b> plan. You'll continue to have access until ${formatDate(subscription.current_period_end)}.`,
    showCancelButton: true,
    confirmButtonText: "Yes, cancel",
    cancelButtonText: "Keep my plan",
    confirmButtonColor: "#b3261e",
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
    const message = err?.response?.data?.message ?? err?.message ?? "Failed to cancel subscription. Please try again.";
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
        setPlans(res.data?.content ?? []);
      })
      .catch((err) => console.error("Failed to load plans", err));
  }, []);

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

  return (
    <div className="dash-section">
      <div className="dash-section-head">
        <h2 className="dash-section-title">Subscription</h2>
        <p className="dash-section-sub">
          {trialEndedWithoutSubscription ? "Choose a plan to continue." : "Manage your current plan."}
        </p>
      </div>

      {/* Current plan card — hidden once trial ended with no subscription */}
    {!trialEndedWithoutSubscription && subscription && (
  <div className="dash-sub-current">
    <div className="dash-sub-current-left">
      <span className="dash-sub-plan-eyebrow">Current Plan</span>
      <p className="dash-sub-plan-name">{subscription.plan?.name}</p>
      <p className="dash-sub-plan-price">
        ₹{subscription.total_amount.toLocaleString("en-IN")} /{" "}
        {subscription.plan.billing_cycle === "monthly" ? "month" : "year"}
        {subscription.plan.gst_excluded && (
          <span className="dash-sub-gst-note"> (incl. ₹{subscription.gst} GST)</span>
        )}
      </p>

      {isTrialActive ? (
        <div className="dash-sub-meta">
          <h3 className="">Free trial active</h3>
          <p className="">
            Your {trialDaysLeft}-day trial ends {formatDate(subscription.trial_end_at)}.
          </p>
        </div>
      ) : (
        <div className="dash-sub-meta">
          {subscription.current_period_end && (
            <span>Renews/ends: {formatDate(subscription.current_period_end)}</span>
          )}
        </div>
      )}
    </div>
    <div>
      <span className={`dash-chip ${(SUB_STATUS_MAP[subscription.status] ?? { label: subscription.status, cls: "dash-chip-pending" }).cls}`}>
        {(SUB_STATUS_MAP[subscription.status] ?? { label: subscription.status, cls: "dash-chip-pending" }).label}
      </span>
    </div>
  </div>
)}


{!trialEndedWithoutSubscription && !subscription && isTrialActive && (
  <div className="dash-sub-current">
    <div className="dash-sub-current-left">
      <span className="dash-sub-plan-eyebrow">Current Plan</span>
      <p className="dash-sub-plan-name">Free Trial</p>
      <div className="dash-sub-meta">
        <h3 className="">Free trial active</h3>
        <p className="">
          Your {trialDaysLeft}-day trial ends {formatDate(trialEndAt)}.
        </p>
      </div>
    </div>
    <div>
      <span className="dash-chip dash-chip-pending">Trial</span>
    </div>
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
     <div className="dash-sub-plans-grid">
  {plans.map((plan) => {
    const isSelected = selectedPlanId !== null
      ? selectedPlanId === plan.id
      : subscription?.plan.id === plan.id;
    const isBestValue = plan.billing_cycle === "annual";

    return (
      <button
        key={plan.id}
        type="button"
        className={`reg-plan-card  ${isSelected ? "reg-plan-card-selected" : ""} ${isBestValue ? "reg-plan-card-featured" : "regMonthly"}`}
        onClick={() => setSelectedPlanId(plan.id)}
      >
        {isBestValue && <div className="reg-plan-badge">Best Value</div>}
        <div className="reg-plan-radio">
          <div className={`reg-plan-radio-dot ${isSelected ? "reg-plan-radio-dot-active" : ""}`} />
        </div>
        <div>
          <p className="reg-plan-label">{plan.name}</p>
          <p className="reg-plan-price-row">
            <span className="reg-plan-currency">Rs</span>
            <span className="reg-plan-price">{plan.price.toLocaleString("en-IN")}</span>
            <span className="reg-plan-period">
              / {plan.billing_cycle === "monthly" ? "month" : plan.billing_cycle === "annual" ? "year" : plan.billing_cycle}
            </span>
          </p>
          <p className="reg-plan-note">
            {plan.gst_excluded ? "Excl. GST" : "Incl. GST"}
            {plan.discount_percent ? ` · Save ${plan.discount_percent}%` : ""}
          </p>
        </div>
      </button>
    );
  })}
</div>

        <div className="dash-sub-actions">
          <div className="flex gap-2">
            {trialEndedWithoutSubscription || isTrialActive ? (
              <button
                type="button"
                className="dash-cta-btn"
                // onClick={handleChangePlan}
                disabled={changing || !selectedPlanId}
              >
                {changing ? (
                  <><span className="reg-spinner" />Activating Plan…</>
                ) : changed ? (
                  <>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Plan Activated
                  </>
                ) : (
                  "Subscribe now"
                )}
              </button>
            ) : (
              <>
                <button
                  type="button"
                  className="dash-cta-btn"
                  onClick={handleChangePlan}
                  disabled={changing || !selectedPlanId || isCurrentPlanSelected}
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
          {!trialEndedWithoutSubscription && subscription && selectedPlanId === subscription.plan.id && (
  <p className="dash-sub-same-note">This is your current plan.</p>
)}
        </div>
      </div>

      <p className="dash-info-note">
        To cancel your subscription, go to Account Settings in the Pocket Dragon app and select "Manage Subscription".
        See our{" "}
        <Link to="/terms" className="dash-link">Terms of Use</Link>{" "}
        for cancellation policy.
      </p>
    </div>
  );
}

// ─── Main DashboardPage ───────────────────────────────────────────────────────

const TAB_ROUTES: Record<Tab, "/myaccount/profile" | "/myaccount/transaction-history" | "/myaccount/manage-subscription"> = {
  profile: "/myaccount/profile",
  transactions: "/myaccount/transaction-history",
  subscription: "/myaccount/manage-subscription",
};

export function DashboardPage({ activeTab: initialTab }: { activeTab: Tab }) {
  const [activeTab, setActiveTab] = useState<Tab>(initialTab);
  const [user, setUser] = useState<UserProfile>({});
  const navigate = useNavigate();


function fetchUserProfile() {
  
  return  getUserProfile()
    .then((res) => {
      const data = res.data;

      setUser((prev) => ({
       ...prev,
      id: data.id != null ? String(data.id) : prev.id,
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
    setActiveTab(tab);
    navigate({ to: TAB_ROUTES[tab] });
  }

  return (
    <div className="dash-page">
      <Header onLoginClick={() => navigate({ to: "/" })} />

      <MobileTabBar active={activeTab} onSelect={handleTabSelect} />

      <div className="dash-body">
        <Sidebar active={activeTab} onSelect={handleTabSelect} />

        <main className="dash-main">
          {activeTab === "profile" && <ProfileTab user={user} />}
          {activeTab === "transactions" && <TransactionsTab />}
         {activeTab === "subscription" && (
  <SubscriptionTab
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
    </div>
  );
}
