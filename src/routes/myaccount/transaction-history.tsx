import { DashboardPage } from "@/components/poquito/DashboardPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/myaccount/transaction-history")({
  head: () => ({ meta: [{ title: "Transactions — Pocket Dragon" }] }),
  component: () => <DashboardPage activeTab="transactions" />,
});
