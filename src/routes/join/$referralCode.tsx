import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/join/$referralCode")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
  component: () => null,
});
