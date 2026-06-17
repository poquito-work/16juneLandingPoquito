import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header bar */}
      <div className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-foreground/10 px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-xs font-bold uppercase tracking-[0.22em] text-rust hover:opacity-75 transition-opacity"
        >
          ← Back to Poquito
        </Link>
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-foreground/50">
          Privacy Policy
        </span>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-10">
        <h1 className="font-display text-3xl font-bold uppercase tracking-tight text-foreground mb-2">
          Privacy Policy
        </h1>
        <p className="mb-2">Work in Progress Notice </p>
        <p className="text-xs uppercase tracking-[0.18em] text-foreground/50 mb-12">
          Last updated: 8th June 2026
        </p>

        <div className="flex flex-col gap-10 text-sm leading-relaxed text-foreground/80">
          <section className="flex flex-col gap-2 text-sm leading-relaxed text-foreground/80">
            <p>
              This Privacy Policy explains how <b>Pocket Dragon</b> (“we,” “our,” or “us”) collects,
              uses, stores, and protects information when you use our Mahjong app and related
              services (the “App”).{" "}
            </p>
            <p>
              This Privacy Policy is a <b>work in progress.</b> We are developing the App alongside
              this document, and we may update this Privacy Policy from time to time as features,
              services, and data practices evolve. When we make changes, we will revise the “Last
              Updated” date and post the updated version here. Your continued use of the App means
              you accept the updated policy{" "}
            </p>
          </section>

          <section>
            <p className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">
              Information We Collect{" "}
            </p>
            <p>We may collect the following categories of information: </p>
          </section>
          <section>
            <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">
              1. Information you provide directly{" "}
            </h2>
            <p>
              When you register, create an account, subscribe, contact support, or use features in
              the App, we may collect:
            </p>
            <ul className="mt-3 list-disc pl-5 flex flex-col gap-2 text-foreground/70">
              <li>Name </li>
              <li>City </li>
              <li>Email address </li>
              <li>Phone number (optional) </li>
              <li>Username and password </li>
              <li>Phone number (optional) </li>
              <li>Payment-related account identifiers used to verify your subscription status </li>
              <li>
                Any information you choose to send us when you contact support or report an
                issue{" "}
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">
              2. Gameplay and usage data{" "}
            </h2>
            <p>When you play the App, we may collect: :</p>
            <ul className="mt-3 list-disc pl-5 flex flex-col gap-2 text-foreground/70">
              <li>Game results and room outcomes </li>
              <li>Ranked points / RP-related activity </li>
              <li>Match history </li>
              <li>MMR-related matchmaking data </li>
              <li>Actions taken during gameplay </li>
              <li>Practice mode activity </li>
              <li>Game variant selected </li>
              <li>Session duration and frequency </li>
              <li>In-app progress and feature usage </li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">
              3. Device and technical information{" "}
            </h2>
            <p>We may automatically collect certain device and technical data, such as:</p>
            <ul className="mt-3 list-disc pl-5 flex flex-col gap-2 text-foreground/70">
              <li>Device model and operating system </li>
              <li>App version </li>
              <li>Device identifiers or similar technical identifiers </li>
              <li>IP address </li>
              <li>Language settings </li>
              <li>Crash reports and diagnostic information </li>
              <li>Network connection details </li>
              <li>Log data showing how the App is being used </li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">
              {" "}
              Why We Collect This Information{" "}
            </h2>
            <p>We collect this information to: </p>
            <ul className="mt-3 list-disc pl-5 flex flex-col gap-2 text-foreground/70">
              <li>Create and manage your account </li>
              <li>Enable login and account synchronization across app and website </li>
              <li>Provide access to gameplay, practice mode, and subscription features </li>
              <li>Match players into rooms and manage multiplayer gameplay </li>
              <li>
                Calculate and display gameplay-related progress such as tiers, ranked points, and
                matchmaking ratings
              </li>
              <li>Improve the App, fix bugs, and monitor performance </li>
              <li>Prevent misuse, cheating, fraud, and unauthorized access  </li>
              <li>Provide customer support </li>
               <li>Send service-related notices such as account, subscription, or policy updates </li>
                <li>Analyze how players use the App so we can improve the experience </li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">
             How We Use the Information 
            </h2>
           <p>We may use your data to:  </p>
            <ul className="mt-3 list-disc pl-5 flex flex-col gap-2 text-foreground/70">
              <li>Authenticate your account </li>
              <li>Allow you to play and continue your game progress  </li>
              <li>Match you with other players based on gameplay rules and ranking logic  </li>
              <li>Store and display your gameplay history, tier progress, and related statistics </li>
              <li>
               Process and verify subscription status 
              </li>
              <li>Personalize and improve gameplay experience </li>
              <li>Detect technical issues, abuse, and suspicious activity </li>
              <li>Respond to your requests and support questions </li>
               
            </ul>
          </section>

          <section>
           <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">
            What We Will Not Do 
            </h2>
           <p>We want to be clear about what we <b>will not</b> do with your data: </p>
            <ul className="mt-3 list-disc pl-5 flex flex-col gap-2 text-foreground/70">
              <li>We will <b>not sell</b> your personal data.  </li>
              <li>We will <b>not share</b> your personal data with advertisers for ad targeting. </li>
              <li>We will <b>not publicly display</b> your private contact details such as email address or phone number.  </li>
              <li>We will <b>not use</b> your data for unrelated purposes outside the App experience, account management, support, or service operations.  </li>
              <li>
              We will <b>not intentionally collect</b> more personal information than is reasonably needed for the App to function. 
              </li>
              <li>We will <b>not knowingly allow</b> unauthorized access to your information.  </li>
             
               
            </ul>
          </section>

          <section>
           <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">
            Data Sharing 
            </h2>
           <p>We may share limited information only when necessary to operate the App, such as with: </p>
            <ul className="mt-3 list-disc pl-5 flex flex-col gap-2 text-foreground/70">
              <li>We will <b>not sell</b> your personal data.  </li>
              <li>We will <b>not share</b> your personal data with advertisers for ad targeting. </li>
              <li>We will <b>not publicly display</b> your private contact details such as email address or phone number.  </li>
              <li>We will <b>not use</b> your data for unrelated purposes outside the App experience, account management, support, or service operations.  </li>
              <li>
              We will <b>not intentionally collect</b> more personal information than is reasonably needed for the App to function. 
              </li>
              <li>We will <b>not knowingly allow</b> unauthorized access to your information.  </li>
             
               
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">
              8. Updates to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant
              changes via email or in-app notification. Continued use of the app constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold uppercase tracking-[0.12em] text-foreground mb-3">
              9. Contact
            </h2>
            <p>
              For privacy-related questions, reach us at{" "}
              <a
                href="mailto:hello@pocketdragon.app"
                className="text-rust hover:opacity-75 transition-opacity"
              >
                hello@pocketdragon.app
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
