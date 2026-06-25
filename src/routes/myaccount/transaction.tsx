import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage } from "@/components/poquito/DashaboardPage";

export const Route = createFileRoute("/myaccount/transaction")({
  head: () => ({ meta: [{ title: "Transactions — Pocket Dragon" }] }),
  component: () => <DashboardPage activeTab="transactions" />,
});
