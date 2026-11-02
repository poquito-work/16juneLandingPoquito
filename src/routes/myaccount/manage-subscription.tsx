import { DashboardPage } from "@/components/poquito/DashboardPage";
import { handleCashfreeReturn } from "@/components/poquito/PaymentGatewayDialog";
import Swal from "sweetalert2";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/myaccount/manage-subscription")({
  head: () => ({ meta: [{ title: "Subscription — Pocket Dragon" }], links: [
      {
        rel: "canonical",
        href: "https://pocketdragon.in/myaccount/manage-subscription",
      },
    ], }),
  component: ManageSubscription,
});

function ManageSubscription() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has("order_id") || localStorage.getItem("cf_pending_return")) {
      const cleanUrl = window.location.pathname + window.location.hash;
      window.history.replaceState({}, "", cleanUrl);
      handleCashfreeReturn();
      // handleCashfreeReturn().then((status) => {
      //   if (status === "active") {
      //     Swal.fire({ icon: "success", title: "Subscription Activated!", confirmButtonColor: "#b65a2f" });
      //   } else {
      //     Swal.fire({ icon: "info", title: "Payment Pending", text: "Your subscription is being processed. Please check back shortly.", confirmButtonColor: "#b65a2f" });
      //   }
      // });
    }
  }, []);

  return <DashboardPage activeTab="subscription" />;
}
