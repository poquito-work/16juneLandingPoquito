import { DashboardPage } from "@/components/poquito/DashboardPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/myaccount/profile")({
  head: () => ({ meta: [{ title: "Profile — Pocket Dragon" }] }),
  component: () => <DashboardPage activeTab="profile" />,
});
