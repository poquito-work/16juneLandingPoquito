import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

// ─── Types ───────────────────────────────────────────────────────────────────

interface UserProfile {
  id?: string;
  name?: string;
  username?: string;
  email?: string;
  phone_number?: string;
  avatar_url?: string;
  joined_at?: string;
}

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  status: "success" | "pending" | "failed";
  type: "subscription" | "renewal" | "refund";
}

interface Subscription {
  plan: "monthly" | "annual" | "none";
  status: "active" | "cancelled" | "expired";
  next_billing?: string;
  started_at?: string;
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
    avatar_url: (payload?.picture as string) ?? "",
    joined_at: payload?.iat
      ? new Date((payload.iat as number) * 1000).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })
      : "—",
  };
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────

type Tab = "profile" | "transactions" | "subscription";

const TABS: { id: Tab; label: string; icon: ReactNode }[] = [
  {
    id: "profile",
    label: "Profile",
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
    <div className="dash-mobile-tabs">
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
  const initials = (user.name ?? "P")
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
  });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Sync when parent user data loads
  useEffect(() => {
    setForm({
      name: user.name ?? "",
      username: user.username ?? "",
      email: user.email ?? "",
      phone_number: user.phone_number ?? "",
    });
  }, [user.name, user.username, user.email, user.phone_number]);

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Full name is required.";
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
    // TODO: wire to profile update API
    await new Promise((r) => setTimeout(r, 900));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
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

          <div className="dash-field">
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
          </div>

          <div className="dash-field">
            <label className="dash-field-label" htmlFor="dp-username">Username</label>
            <input
              id="dp-username"
              type="text"
              className={`dash-input ${errors.username ? "dash-input-error" : ""}`}
              value={form.username}
              onChange={(e) => setForm((p) => ({ ...p, username: e.target.value }))}
              placeholder="username"
            />
            {errors.username && <span className="dash-field-error">{errors.username}</span>}
          </div>

          <div className="dash-field">
            <label className="dash-field-label" htmlFor="dp-email">Email Address</label>
            <input
              id="dp-email"
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
              onChange={(e) => setForm((p) => ({ ...p, phone_number: e.target.value }))}
              placeholder="+91 98765 43210"
            />
            {errors.phone_number && <span className="dash-field-error">{errors.phone_number}</span>}
          </div>

          {/* Read-only fields */}
          <div className="dash-field">
            <span className="dash-field-label">Member Since</span>
            <span className="dash-field-value">{user.joined_at ?? "—"}</span>
          </div>

          <div className="dash-field">
            <span className="dash-field-label">Account ID</span>
            <span className="dash-field-value dash-field-mono">{user.id ?? "—"}</span>
          </div>

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

const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: "TXN-20260601",
    date: "1 Jun 2026",
    description: "Annual Plan Subscription",
    amount: 4500,
    status: "success",
    type: "subscription",
  },
  {
    id: "TXN-20260501",
    date: "1 May 2026",
    description: "Monthly Plan Renewal",
    amount: 500,
    status: "success",
    type: "renewal",
  },
  {
    id: "TXN-20260401",
    date: "1 Apr 2026",
    description: "Monthly Plan Renewal",
    amount: 500,
    status: "success",
    type: "renewal",
  },
  {
    id: "TXN-20260301",
    date: "1 Mar 2026",
    description: "Monthly Plan — First Subscription",
    amount: 500,
    status: "success",
    type: "subscription",
  },
];

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
  return (
    <div className="dash-section">
      <div className="dash-section-head">
        <h2 className="dash-section-title">Transactions</h2>
        <p className="dash-section-sub">Your payment history.</p>
      </div>

      {MOCK_TRANSACTIONS.length === 0 ? (
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
                <th>Description</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_TRANSACTIONS.map((tx) => (
                <tr key={tx.id}>
                  <td className="dash-td-mono">{tx.id}</td>
                  <td>{tx.date}</td>
                  <td>{tx.description}</td>
                  <td className="dash-td-amount">₹{tx.amount.toLocaleString("en-IN")}</td>
                  <td>{statusChip(tx.status)}</td>
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

const MOCK_SUB: Subscription = {
  plan: "annual",
  status: "active",
  next_billing: "1 Jun 2027",
  started_at: "1 Jun 2026",
};

function SubscriptionTab() {
  const [sub] = useState<Subscription>(MOCK_SUB);
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "annual">(
    sub.plan !== "none" ? sub.plan : "annual"
  );
  const [changing, setChanging] = useState(false);
  const [changed, setChanged] = useState(false);

  async function handleChangePlan() {
    setChanging(true);
    // TODO: wire to plan-change API
    await new Promise((r) => setTimeout(r, 1000));
    setChanging(false);
    setChanged(true);
    setTimeout(() => setChanged(false), 3000);
  }

  const planLabel = { monthly: "Monthly Plan", annual: "Annual Plan", none: "No Active Plan" };
  const planPrice = { monthly: "₹500 / month", annual: "₹4,500 / year", none: "—" };
  const statusMap = {
    active: { label: "Active", cls: "dash-chip-success" },
    cancelled: { label: "Cancelled", cls: "dash-chip-failed" },
    expired: { label: "Expired", cls: "dash-chip-pending" },
  };

  return (
    <div className="dash-section">
      <div className="dash-section-head">
        <h2 className="dash-section-title">Subscription</h2>
        <p className="dash-section-sub">Manage your current plan.</p>
      </div>

      {/* Current plan card */}
      <div className="dash-sub-current">
        <div className="dash-sub-current-left">
          <span className="dash-sub-plan-eyebrow">Current Plan</span>
          <p className="dash-sub-plan-name">{planLabel[sub.plan]}</p>
          <p className="dash-sub-plan-price">{planPrice[sub.plan]}</p>
          {sub.plan !== "none" && (
            <div className="dash-sub-meta">
              {sub.started_at && <span>Started: {sub.started_at}</span>}
              {sub.next_billing && sub.status === "active" && (
                <span>Next billing: {sub.next_billing}</span>
              )}
            </div>
          )}
        </div>
        <div>
          <span className={`dash-chip ${statusMap[sub.status].cls}`}>
            {statusMap[sub.status].label}
          </span>
        </div>
      </div>

      {/* Change plan */}
      <div className="dash-sub-change">
        <p className="dash-sub-change-title">Change Plan</p>
        <div className="dash-sub-plans-grid">
          {/* Monthly */}
          <button
            type="button"
            className={`dash-plan-card ${selectedPlan === "monthly" ? "dash-plan-card-selected" : ""}`}
            onClick={() => setSelectedPlan("monthly")}
          >
            <div className="dash-plan-radio">
              <div className={`dash-plan-radio-dot ${selectedPlan === "monthly" ? "dash-plan-radio-dot-active" : ""}`} />
            </div>
            <div>
              <p className="dash-plan-label">Monthly Plan</p>
              <p className="dash-plan-price-row">
                <span className="dash-plan-currency">Rs</span>
                <span className="dash-plan-price">500</span>
                <span className="dash-plan-period">/ month</span>
              </p>
              <p className="dash-plan-note">Excl. GST · Cancel anytime</p>
            </div>
          </button>

          {/* Annual */}
          <button
            type="button"
            className={`dash-plan-card ${selectedPlan === "annual" ? "dash-plan-card-selected dash-plan-card-featured" : ""}`}
            onClick={() => setSelectedPlan("annual")}
          >
            <div className="dash-plan-badge">Best Value</div>
            <div className="dash-plan-radio">
              <div className={`dash-plan-radio-dot ${selectedPlan === "annual" ? "dash-plan-radio-dot-active" : ""}`} />
            </div>
            <div>
              <p className="dash-plan-label">Annual Plan</p>
              <p className="dash-plan-price-row">
                <span className="dash-plan-currency">Rs</span>
                <span className="dash-plan-price">4,500</span>
                <span className="dash-plan-period">/ year</span>
              </p>
              <p className="dash-plan-note">Excl. GST · Save 25%</p>
            </div>
          </button>
        </div>

        <div className="dash-sub-actions">
          <button
            type="button"
            className="dash-cta-btn"
            onClick={handleChangePlan}
            disabled={changing || selectedPlan === sub.plan}
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
              "Confirm Plan Change"
            )}
          </button>
          {selectedPlan === sub.plan && (
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

export function DashboardPage() {
  const [activeTab, setActiveTab] = useState<Tab>("profile");
  const [user, setUser] = useState<UserProfile>({});
  const navigate = useNavigate();

  useEffect(() => {
    setUser(getUserFromToken());
  }, []);

  function handleLogout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("auth_token");
    navigate({ to: "/" });
  }

  return (
    <div className="dash-page">
      <Header onLoginClick={() => navigate({ to: "/" })} />

      <MobileTabBar active={activeTab} onSelect={setActiveTab} />

      <div className="dash-body">
        <Sidebar active={activeTab} onSelect={setActiveTab} />

        <main className="dash-main">
          {/* <div className="dash-logout-bar">
            <button type="button" className="dash-logout-btn" onClick={handleLogout}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              Sign Out
            </button>
          </div> */}
          {activeTab === "profile" && <ProfileTab user={user} />}
          {activeTab === "transactions" && <TransactionsTab />}
          {activeTab === "subscription" && <SubscriptionTab />}
        </main>
      </div>

      <Footer />
    </div>
  );
}
