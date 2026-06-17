import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header bar */}
      <div className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-foreground/10 px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xs font-bold uppercase tracking-[0.22em] text-rust hover:opacity-75 transition-opacity">
          ← Back to Poquito
        </Link>
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-foreground/50">Privacy Policy</span>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-10">
        <h1 className="font-display text-3xl font-bold uppercase tracking-tight text-foreground mb-2">
          Privacy Policy
        </h1>
        <p className="text-xs uppercase tracking-[0.18em] text-foreground/50 mb-12">Last updated: June 2026</p>

        <div className="flex flex-col gap-10 text-sm leading-relaxed text-foreground/80">

          <section>
            <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">1. Information We Collect</h2>
            <p>When you register and use Pocket Dragon, we collect the following types of information:</p>
            <ul className="mt-3 list-disc pl-5 flex flex-col gap-2 text-foreground/70">
              <li>Account information: username, email address, and password (hashed)</li>
              <li>Gameplay data: match history, ranking, and in-game activity</li>
              <li>Device information: device type, OS version, and IP address</li>
              <li>Payment information: processed securely via Razorpay — we do not store card details</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">2. How We Use Your Information</h2>
            <p>Your data is used solely to operate and improve Pocket Dragon. Specifically:</p>
            <ul className="mt-3 list-disc pl-5 flex flex-col gap-2 text-foreground/70">
              <li>Authenticate your identity and manage your account</li>
              <li>Facilitate matchmaking and rank progression</li>
              <li>Process subscription billing securely</li>
              <li>Detect and prevent cheating, fraud, or abuse</li>
              <li>Send service-related communications (never marketing without consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">3. Data Sharing</h2>
            <p>We do not sell, rent, or trade your personal information to any third party. Data may be shared with:</p>
            <ul className="mt-3 list-disc pl-5 flex flex-col gap-2 text-foreground/70">
              <li>Razorpay — for payment processing</li>
              <li>Cloud infrastructure providers — for secure data storage</li>
              <li>Law enforcement — only when legally required</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">4. Data Security</h2>
            <p>We implement industry-standard security measures including encrypted storage, secure HTTPS transmission, and access control to protect your data. No method of transmission over the internet is 100% secure, but we take every reasonable precaution.</p>
          </section>

          <section>
            <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">5. Data Retention</h2>
            <p>Your data is retained for as long as your account remains active. Upon account deletion, personal data is permanently removed within 30 days, except where retention is required by law.</p>
          </section>

          <section>
            <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">6. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal data at any time. To exercise these rights, contact us at <a href="mailto:hello@pocketdragon.app" className="text-rust hover:opacity-75 transition-opacity">hello@pocketdragon.app</a>.</p>
          </section>

          <section>
            <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">7. Cookies</h2>
            <p>Pocket Dragon uses essential cookies only — for session management and authentication. We do not use tracking or advertising cookies.</p>
          </section>

          <section>
            <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">8. Updates to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of significant changes via email or in-app notification. Continued use of the app constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">9. Contact</h2>
            <p>For privacy-related questions, reach us at <a href="mailto:hello@pocketdragon.app" className="text-rust hover:opacity-75 transition-opacity">hello@pocketdragon.app</a>.</p>
          </section>

        </div>
      </div>
    </div>
  );
}
