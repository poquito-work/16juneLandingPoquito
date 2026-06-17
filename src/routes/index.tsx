import { createFileRoute } from "@tanstack/react-router";
import { useCallback } from "react";
import { Header } from "@/components/poquito/Header";
import { Hero } from "@/components/poquito/Hero";
import { Subscriptions } from "@/components/poquito/Subscriptions";
import { Playground } from "@/components/poquito/Playground";
import { FAQ } from "@/components/poquito/FAQ";
import { LoginSection } from "@/components/poquito/LoginSection";
import { CTASection } from "@/components/poquito/CTASection";
import { Footer } from "@/components/poquito/Footer";
import { BackToTop } from "@/components/poquito/BackToTop";
import { PageLoader } from "@/components/poquito/PageLoader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pocket Dragon — Traditional Mahjong On Your Time, Anywhere" },
      {
        name: "description",
        content:
          "Pocket Dragon is a subscription Traditional Mahjong app for mobile. Practice, play, and compete in real-time matches. Now on iOS & Android.",
      },
      { property: "og:title", content: "Pocket Dragon — Traditional Mahjong, Anywhere" },
      {
        property: "og:description",
        content:
          "Real-time Traditional Mahjong on iOS & Android. Practice with bots, play private tables, climb ranked tiers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const handleLoginClick = useCallback(() => {
    document.getElementById("login")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageLoader />
      <Header onLoginClick={handleLoginClick} />
      <main>
        <Hero />
        <Playground />
        <Subscriptions />
         <LoginSection />
        <FAQ />
       
        <CTASection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
