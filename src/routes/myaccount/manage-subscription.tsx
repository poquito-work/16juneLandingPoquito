import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage } from "@/components/poquito/DashaboardPage";

export const Route = createFileRoute("/myaccount/manage-subscription")({
  head: () => ({ meta: [{ title: "Subscription — Pocket Dragon" }] }),
  component: () => <DashboardPage activeTab="subscription" />,
});
