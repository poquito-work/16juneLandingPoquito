import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage } from "@/components/poquito/DashaboardPage";

export const Route = createFileRoute("/myaccount/profile")({
  head: () => ({ meta: [{ title: "Profile — Pocket Dragon" }] }),
  component: () => <DashboardPage activeTab="profile" />,
});
