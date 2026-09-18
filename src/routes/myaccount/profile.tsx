import { DashboardPage } from "@/components/poquito/DashboardPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/myaccount/profile")({
  head: () => ({ meta: [{ title: "Profile — Pocket Dragon" }],links: [
      {
        rel: "canonical",
        href: "https://www.pocketdragon.in/myaccount/profile",
      },
    ], }),
  component: () => <DashboardPage activeTab="profile" />,
});
