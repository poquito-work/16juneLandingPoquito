import { createFileRoute } from "@tanstack/react-router";
import { RegisterPage } from "@/components/poquito/RegisterPage";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Create Account — Pocket Dragon" },
      {
        name: "description",
        content: "Create your Pocket Dragon account and choose your plan.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://pocketdragon.in/register",
      },
    ],
  }),
  component: RegisterPage,
});
