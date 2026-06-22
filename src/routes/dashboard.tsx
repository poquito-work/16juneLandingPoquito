import { createFileRoute, redirect } from "@tanstack/react-router";
import { DashboardPage } from "@/components/poquito/DashaboardPage";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "My Account — Pocket Dragon" }] }),
  beforeLoad: () => {
    throw redirect({ to: "/MyAccount" });
  },
  component: DashboardPage,
});
