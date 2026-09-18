import { DashboardPage } from "@/components/poquito/DashboardPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/myaccount/transaction-history")({
  head: () => ({ meta: [{ title: "Transactions — Pocket Dragon" }], links: [
      {
        rel: "canonical",
        href: "https://www.pocketdragon.in/myaccount/transaction-history",
      },
    ],}),
  component: () => <DashboardPage activeTab="transactions" />,
});
