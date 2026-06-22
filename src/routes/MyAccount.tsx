import { createFileRoute, redirect } from "@tanstack/react-router";
import { DashboardPage } from "@/components/poquito/DashaboardPage";

export const Route = createFileRoute("/MyAccount")({
  head: () => ({
    meta: [{ title: "My Account — Pocket Dragon" }],
  }),
  beforeLoad: () => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("access_token");
      if (!token) {
        throw redirect({ to: "/" });
      }
    }
  },
  component: DashboardPage,
});
