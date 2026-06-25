import { createFileRoute, redirect, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/myaccount")({
  head: () => ({
    meta: [{ title: "My Account — Pocket Dragon" }],
  }),
  // beforeLoad: () => {
  //   if (typeof window !== "undefined") {
  //     const token = localStorage.getItem("access_token");
  //     if (!token) {
  //       throw redirect({ to: "/" });
  //     }
  //   }
  // },
  component: () => <Outlet />,
});
