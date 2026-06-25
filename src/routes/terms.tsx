import { createFileRoute } from "@tanstack/react-router";
import LegalLayout from "@/components/poquito/layout";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalLayout>
      <div className="terms">
      <h1 className="font-display text-3xl font-bold uppercase tracking-tight text-foreground mb-4">
        TERMS OF USE
      </h1>
      <p className="text-md font-medium text-foreground mb-12">Pocket Dragon is built on skill, strategy, and the love of a game that has brought people together for centuries. These Terms exist not to intimidate you, but to ensure that every player at our table — from a first-time Firefly to a seasoned Dragon — plays in a fair, safe, and transparent environment. By creating an account or playing on Pocket Dragon you agree to these terms. If something doesn't sit right with you, please reach out to us before playing. We're a small team and we actually read our emails.</p>

      <div className="privacyDiv flex flex-col gap-10 text-sm leading-relaxed text-foreground/80">

        <section>
          <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">1. About Pocket Dragon</h2>
          <p>Pocket Dragon is a digital platform for Traditional Mahjong, operated by Poquito Project LLP, a limited liability partnership firm incorporated under the laws of India. The app is available on Android and iOS and is designed purely for entertainment and skill-based play.</p>
          <p>Pocket Dragon does not involve real-money gaming, betting, or gambling of any kind. All in-app currency and rewards are virtual and hold no monetary value.</p>
        </section>

        <section>
          <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">2. Eligibility</h2>
          <p>To use Pocket Dragon, you must:</p>
          <ul className="listUl flex flex-col gap-2">
            <li>Be a resident of a jurisdiction where skill-based gaming apps are permitted</li>
            <li>Provide accurate information during account registration</li>
            <li>Not have been previously suspended or banned from the platform</li>
          </ul>
          <p>By registering, you confirm that you meet all of the above criteria. Pocket Dragon reserves the right to verify eligibility at any time.</p>
        </section>

        <section>
          <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">3. Your Account</h2>
          <p>You are responsible for maintaining the confidentiality of your login credentials. Each player is permitted one account only. You may not share, sell, or transfer your account to another person.</p>
          <p>Pocket Dragon reserves the right to suspend or permanently ban accounts found to be in violation of these terms, including but not limited to:</p>
          <ul className="listUl flex flex-col gap-2">
            <li>Use of bots, scripts, or automated tools</li>
            <li>Collusion with other players</li>
            <li>Abusive, offensive, or discriminatory behaviour</li>
            <li>Multiple accounts operated by the same individual</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">4. Gameplay &amp; Fair Play</h2>
          <p>Pocket Dragon is a skill-based game governed by Traditional Mahjong rules. All players are expected to play in good faith.</p>
          <p>Cheating, exploiting bugs, or using third-party software to gain an unfair advantage is strictly prohibited and will result in immediate account termination. If you discover a bug or exploit, please report it to us immediately at <a href="mailto:admin@pocketdragon.in" className="text-rust hover:opacity-75 transition-opacity">admin@pocketdragon.in</a></p>
        </section>

        <section>
          <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">5. In-App Purchases &amp; Subscriptions</h2>
          <p>Pocket Dragon may offer optional paid features including subscriptions and cosmetic upgrades. All purchases are:</p>
          <ul className="listUl flex flex-col gap-2">
            <li>Processed securely via Razorpay or the respective app store payment gateway</li>
            <li>Non-refundable unless required by applicable law</li>
            <li>Not transferable between accounts</li>
          </ul>
          <p>All in-app currency is virtual. It cannot be redeemed for real money, transferred, or withdrawn under any circumstances.</p>
          <p>Subscription plans will auto-renew unless cancelled at least 24 hours before the renewal date. You can manage or cancel subscriptions through your device's app store settings.</p>
        </section>

        <section>
          <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">6. Privacy &amp; Data</h2>
          <p>We collect and process your personal data in accordance with our Privacy Policy and in compliance with India's Digital Personal Data Protection (DPDP) Act, 2023.</p>
          <p>By using Pocket Dragon, you consent to the collection of:</p>
          <ul className="listUl flex flex-col gap-2">
            <li>Account information (name, email, phone number, city)</li>
            <li>Gameplay data and statistics</li>
            <li>Device information and usage analytics</li>
          </ul>
          <p>We do not sell your personal data to third parties. Data is used solely to operate, improve, and personalise your Pocket Dragon experience.</p>
          <p>For full details please see the <a href="/privacy" className="text-rust hover:opacity-75 transition-opacity">Privacy Policy</a>.</p>
        </section>

        <section>
          <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">7. Intellectual Property</h2>
          <p>All content on Pocket Dragon — including the name, logo, tile designs, animations, tier system, copy, and gameplay mechanics — is the exclusive intellectual property of Poquito Project LLP.</p>
          <p>You may not reproduce, redistribute, reverse-engineer, or create derivative works from any part of Pocket Dragon without prior written consent from the company.</p>
          <p>User-generated content (profile names, avatars) remains your property. By uploading it, you grant Pocket Dragon a non-exclusive licence to display it within the platform.</p>
        </section>

        <section>
          <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">8. Prohibited Conduct</h2>
          <p>The following are strictly prohibited on Pocket Dragon:</p>
          <ul className="listUl flex flex-col gap-2">
            <li>Harassment, bullying, or threatening other players</li>
            <li>Sharing offensive, obscene, or discriminatory content</li>
            <li>Impersonating Pocket Dragon staff or other players</li>
            <li>Attempting to hack, disrupt, or interfere with platform operations</li>
            <li>Using the platform for any commercial purpose without written authorisation</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">9. Disclaimers &amp; Limitation of Liability</h2>
          <p>Pocket Dragon is provided "as is." While we work hard to keep the platform running smoothly, we do not guarantee uninterrupted or error-free service.</p>
          <p>To the maximum extent permitted by law, Pocket Dragon and its directors, employees, and partners shall not be liable for:</p>
          <ul className="listUl flex flex-col gap-2">
            <li>Loss of virtual currency or progress due to technical issues</li>
            <li>Indirect, incidental, or consequential damages arising from use of the app</li>
            <li>Third-party actions, including payment processing errors</li>
          </ul>
          <p>Nothing in these terms limits liability for fraud, death, or personal injury caused by our negligence.</p>
        </section>

        <section>
          <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">10. Governing Law &amp; Disputes</h2>
          <p>These Terms are governed by the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Mumbai, India.</p>
          <p>We encourage you to contact us first at <a href="mailto:admin@pocketdragon.in" className="text-rust hover:opacity-75 transition-opacity">admin@pocketdragon.in</a> before initiating any legal proceedings. Most issues can be resolved quickly and fairly.</p>
        </section>

        <section>
          <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">11. Changes to These Terms</h2>
          <p>Pocket Dragon reserves the right to update these Terms at any time. When we do, we will notify you via in-app notification and update the effective date above.</p>
          <p>Continued use of the platform after changes are posted constitutes your acceptance of the revised Terms.</p>
        </section>

        <section>
          <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">12. Contact</h2>
          <p>If you have any questions about these Terms, please reach out to <a href="mailto:hello@pocketdragon.app" className="text-rust hover:opacity-75 transition-opacity">hello@pocketdragon.app</a>.</p>
        </section>

      </div>
      </div>
    </LegalLayout>
  );
}
