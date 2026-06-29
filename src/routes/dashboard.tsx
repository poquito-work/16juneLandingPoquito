import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "My Account — Pocket Dragon" }] }),
  // beforeLoad: () => {
  //   throw redirect({ to: "/myaccount/profile" });
  // },
  component: () => null,
});
