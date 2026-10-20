import { useState } from "react";
import { load } from "@cashfreepayments/cashfree-js";
import { getUserProfile } from "@/services/auth";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type PaymentGateway = "razorpay" | "cashfree";

interface PaymentGatewayDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (gateway: PaymentGateway) => void;
  loading?: boolean;
}

export function PaymentGatewayDialog({
  open,
  onClose,
  onConfirm,
  loading = false,
}: PaymentGatewayDialogProps) {
  const [selected, setSelected] = useState<PaymentGateway>("razorpay");

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v && !loading) onClose(); }}>
      <DialogContent
        className="max-w-sm"
        style={{
          background: "#0b2316",
          border: "1px solid rgba(249,242,228,0.15)",
          borderRadius: 16,
          color: "#F9F2E4",
        }}
      >
        <DialogHeader>
          <DialogTitle style={{ color: "#F9F2E4", fontSize: 18, fontWeight: 700 }}>
            Choose Payment Method
          </DialogTitle>
          <DialogDescription style={{ color: "rgba(249,242,228,0.6)", fontSize: 13 }}>
            Select how you'd like to complete your subscription payment.
          </DialogDescription>
        </DialogHeader>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 8 }}>
          {/* Razorpay option */}
          <label
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 12,
              padding: "14px 16px",
              borderRadius: 10,
              border: selected === "razorpay"
                ? "1.5px solid #b65a2f"
                : "1.5px solid rgba(249,242,228,0.15)",
              background: selected === "razorpay"
                ? "rgba(182,90,47,0.12)"
                : "rgba(249,242,228,0.04)",
              cursor: "pointer",
              transition: "all 0.18s ease",
            }}
            onClick={() => setSelected("razorpay")}
          >
            <div>
              <div style={{ fontWeight: 600, fontSize: 14, color: "#F9F2E4" }}>Razorpay</div>
              <div style={{ fontSize: 11, color: "rgba(249,242,228,0.55)", marginTop: 2 }}>
                Cards, Net Banking, Wallets &amp; UPI
              </div>
            </div>
          </label>

          {/* Cashfree option */}
          <label
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 12,
              padding: "14px 16px",
              borderRadius: 10,
              border: selected === "cashfree"
                ? "1.5px solid #b65a2f"
                : "1.5px solid rgba(249,242,228,0.15)",
              background: selected === "cashfree"
                ? "rgba(182,90,47,0.12)"
                : "rgba(249,242,228,0.04)",
              cursor: "pointer",
              transition: "all 0.18s ease",
            }}
            onClick={() => setSelected("cashfree")}
          >
            <div>
              <div style={{ fontWeight: 600, fontSize: 14, color: "#F9F2E4" }}>Cashfree</div>
              <div style={{ fontSize: 11, color: "rgba(249,242,228,0.55)", marginTop: 2 }}>
                UPI (recommended for UPI payments)
              </div>
            </div>
          </label>
        </div>

        <button
          onClick={() => onConfirm(selected)}
          disabled={loading}
          style={{
            marginTop: 8,
            width: "100%",
            padding: "12px 0",
            borderRadius: 50,
            background: loading ? "rgba(182,90,47,0.5)" : "#b65a2f",
            color: "#F9F2E4",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            border: "none",
            cursor: loading ? "not-allowed" : "pointer",
            transition: "opacity 0.18s ease",
          }}
        >
          {loading ? "Processing..." : "Continue"}
        </button>
      </DialogContent>
    </Dialog>
  );
}

/**
 * Cashfree flow:
 * 1. subscriptionsCheckout — mandate auth (redirects away)
 * 2. On return: if paymentSessionId was saved, calls checkout for the first payment.
 *    Pass paymentSessionId only when the user is NOT on a trial (new subscription, non-trial).
 *    For upgrades and trial users, omit paymentSessionId — only mandate auth is needed.
 */
export async function launchCashfreeFlow(subsSessionId: string, paymentSessionId?: string | null) {
  localStorage.setItem("cf_pending_return", "1");
  if (paymentSessionId) {
    localStorage.setItem("cf_payment_session_id", paymentSessionId);
  } else {
    localStorage.removeItem("cf_payment_session_id");
  }

  const cashfree = await load({ mode: "sandbox" });

  cashfree.subscriptionsCheckout({
    subsSessionId,
    redirectTarget: "_self",
  });
}

/**
 * Called on return from Cashfree mandate redirect.
 * Runs the payment checkout with the stored payment_session_id.
 */
export async function handleCashfreeReturn(): Promise<void> {
  localStorage.removeItem("cf_pending_return");

  const paymentSessionId = localStorage.getItem("cf_payment_session_id");
  localStorage.removeItem("cf_payment_session_id");

  if (!paymentSessionId) return;

  const cashfree = await load({ mode: "sandbox" });
  cashfree.checkout({
    paymentSessionId,
    redirectTarget: "_self",
  });
}
