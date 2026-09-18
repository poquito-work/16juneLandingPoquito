import { DashboardPage } from "@/components/poquito/DashboardPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/myaccount/manage-subscription")({
  head: () => ({ meta: [{ title: "Subscription — Pocket Dragon" }],links: [
      {
        rel: "canonical",
        href: "https://pocketdragon.in/myaccount/manage-subscription",
      },
    ], }),
  component: () => <DashboardPage activeTab="subscription" />,
});
