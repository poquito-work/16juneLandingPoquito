import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header bar */}
      <div className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-foreground/10 px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xs font-bold uppercase tracking-[0.22em] text-rust hover:opacity-75 transition-opacity">
          ← Back to Poquito
        </Link>
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-foreground/50">Terms &amp; Conditions</span>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-10">
        <h1 className="font-display text-3xl font-bold uppercase tracking-tight text-foreground mb-2">
          Terms &amp; Conditions
        </h1>
        <p className="text-xs uppercase tracking-[0.18em] text-foreground/50 mb-12">Last updated: June 2026</p>

        <div className="flex flex-col gap-10 text-sm leading-relaxed text-foreground/80">

          <section>
            <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">1. Acceptance of Terms</h2>
            <p>By registering for or using Pocket Dragon, you agree to be bound by these Terms &amp; Conditions. If you do not agree, please do not use the app or any associated services.</p>
          </section>

          <section>
            <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">2. Eligibility</h2>
            <p>You must be at least 13 years of age to use Pocket Dragon. By using the service, you represent that you meet this requirement.</p>
          </section>

          <section>
            <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">3. Fair Play</h2>
            <p>Pocket Dragon is a competitive platform built on integrity. The following are strictly prohibited and will result in permanent suspension of your account and rank:</p>
            <ul className="mt-3 list-disc pl-5 flex flex-col gap-2 text-foreground/70">
              <li>Exploiting bugs or glitches to gain an unfair advantage</li>
              <li>Using third-party software, bots, or automation tools</li>
              <li>Deliberately manipulating match outcomes</li>
              <li>Account sharing or playing on behalf of another user</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">4. Subscriptions &amp; Billing</h2>
            <p>Pocket Dragon offers subscription plans billed monthly or annually. By subscribing, you authorise us to charge your payment method on a recurring basis. Subscriptions can be cancelled at any time from your account settings — cancellations take effect at the end of the current billing period.</p>
          </section>

          <section>
            <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">5. Intellectual Property</h2>
            <p>All content within Pocket Dragon — including graphics, game logic, tile designs, UI elements, and brand assets — is the exclusive property of Pocket Dragon and may not be reproduced, distributed, or used without prior written consent.</p>
          </section>

          <section>
            <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">6. Limitation of Liability</h2>
            <p>Pocket Dragon is provided "as is" without warranties of any kind. We are not liable for any loss of data, rank, or in-game progress resulting from outages, bugs, or account suspensions due to violation of these terms.</p>
          </section>

          <section>
            <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">7. Changes to Terms</h2>
            <p>We reserve the right to update these Terms at any time. Continued use of the app after changes are posted constitutes acceptance of the revised Terms.</p>
          </section>

          <section>
            <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">8. Contact</h2>
            <p>For any queries regarding these Terms, contact us at <a href="mailto:hello@pocketdragon.app" className="text-rust hover:opacity-75 transition-opacity">hello@pocketdragon.app</a>.</p>
          </section>

        </div>
      </div>
    </div>
  );
}
