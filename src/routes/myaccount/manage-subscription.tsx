import { DashboardPage } from "@/components/poquito/DashboardPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/myaccount/manage-subscription")({
  head: () => ({ meta: [{ title: "Subscription — Pocket Dragon" }] }),
  component: () => <DashboardPage activeTab="subscription" />,
});
