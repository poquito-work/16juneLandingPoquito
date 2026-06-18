import { useState } from "react";
import { Check } from "lucide-react";
import { SectionEyebrow } from "./SectionEyebrow";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

function CancellationDialog({
  open,
  onClose,
  plan,
}: {
  open: boolean;
  onClose: () => void;
  plan: "monthly" | "annual";
}) {
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="modal-card max-w-sm border-0 p-0 overflow-hidden [&>button]:text-foreground [&>button]:hover:text-foreground/70" style={{ background: "var(--green)" }}>
        <div className=" flex flex-col gap-5">
          {/* Title */}
          <DialogHeader>
            <DialogTitle
              className="font-display font-bold uppercase tracking-[0.18em] text-rust"
              style={{ fontSize: "1rem" }}
            >
              Terms of Cancellation
            </DialogTitle>
            <DialogDescription className="sr-only">
              {plan === "monthly" ? "Monthly Plan" : "Annual Plan"} cancellation terms
            </DialogDescription>
          </DialogHeader>

          {/* Body */}
          <div className=" space-y-3 text-[0.95rem] text-cream/85 leading-relaxed">
            {plan === "monthly" ? (
              <>
                <p>
                  Monthly subscriptions can be cancelled at any time before your next billing date — no fees, no friction.
                </p>
                <p>
                  Once cancelled, your access remains active until the end of the current billing period. You will not be charged again after cancellation.
                </p>
                <p className="text-cream/55 text-[0.75rem]">
                  To cancel, go to account settings in the Pocket Dragon app and select "Manage Subscription."
                </p>
              </>
            ) : (
              <>
                <p>
                  Annual subscriptions are non-refundable. Upon cancellation, all benefits remain fully active until the end of the current subscription term.
                </p>
                <p>
                  You will not be billed again after cancellation, but no partial refunds are issued for unused months.
                </p>
                <p className="text-cream/55 text-[0.95rem]">
                  To cancel, go to account settings in the Pocket Dragon app and select "Manage Subscription."
                </p>
              </>
            )}
          </div>

          {/* Button */}
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer mt-2 inline-flex w-full items-center justify-center rounded-full bg-rust px-6 py-3 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-cream transition-opacity hover:opacity-90"
          >
            Understood
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function Subscriptions() {
  const [monthlyDialog, setMonthlyDialog] = useState(false);
  const [annualDialog, setAnnualDialog] = useState(false);

  return (
    <section id="plans" className="bg-background">
      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 md:py-16">

        <div className="flex flex-col items-center gap-3 text-center">
          <SectionEyebrow>Membership</SectionEyebrow>
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl md:text-[2rem]">
            Choose your <span style={{ color: 'var(--rust)',fontStyle:"italic" }}>Subscription</span>
          </h2>
        </div>

        <div className="articleClass mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-2">
          {/* Monthly */}
          <article className="plan-monthly-card relative flex flex-col rounded-2xl border border-foreground/15 bg-cream p-7">
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-foreground/70">
              Monthly
            </span>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-sm font-bold text-foreground/70">Rs</span>
              <span className="font-display text-5xl font-bold leading-none text-foreground">
                xxx
              </span>
              <span className="ml-1 text-sm text-foreground/65">/ month</span>
            </div>
            <p className="mt-2 text-xs text-foreground/65">
              Billed monthly. Cancel anytime.
            </p>

            <div className="my-6 h-px w-full bg-foreground/10" />

            {/* <ul className="space-y-2.5 text-sm text-foreground/80">
              {[
                "Unlimited ranked games",
                "All game modes included",
                "Monthly season rewards",
                "Priority matchmaking queue",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check size={14} className="mt-1 shrink-0 text-rust" strokeWidth={2.4} />
                  <span>{f}</span>
                </li>
              ))}
            </ul> */}

            <a
             style={{
                    // background: 'linear-gradient(135deg, #B65A2F 0%, #943f1e 100%)',
                    boxShadow: '0 8px 24px rgba(182,90,47,0.30)',
                  }}
              href="#"
              className="inline-flex items-center justify-center rounded-xl border-2 border-rust bg-transparent px-6 py-3 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-rust transition-colors hover:bg-rust hover:text-white"
            >
              Subscribe Now
            </a>

            {/* <button
              type="button"
              onClick={() => setMonthlyDialog(true)}
              className="mt-3 inline-flex items-center justify-center gap-1.5 text-[0.68rem] text-foreground/50 underline underline-offset-2 hover:text-foreground/75 transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              Terms of cancellation
            </button> */}
          </article>

          {/* Annual — Featured */}
          <article className="relative flex flex-col rounded-2xl bg-green-new p-7 text-cream">
            <div className="absolute right-5 -top-3">
              <span className="rounded-full bg-rust px-8 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-cream shadow-sm">
                Best Value
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-cream/85">
                Annual
              </span>
            </div>

            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-sm font-bold text-cream/85">Rs</span>
              <span className="font-display text-5xl font-bold leading-none">x,xxx</span>
              <span className="ml-1 text-sm text-cream/75">/ year</span>
            </div>
            <p className="mt-2 text-xs text-cream/75">Save Rs [x]/month </p>

            <div className="my-6 h-px w-full bg-cream/15" />

            {/* <ul className="space-y-2.5 text-sm text-cream/90">
              {[
                "Everything in Monthly",
                "Exclusive annual tile border",
                "Early access to new features",
                "Annual Dragon badge",
                "Extended stats & game history",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check size={14} className="mt-1 shrink-0 text-rust-soft" strokeWidth={2.4} />
                  <span>{f}</span>
                </li>
              ))}
            </ul> */}

              <a
               style={{
                    // background: 'linear-gradient(135deg, #B65A2F 0%, #943f1e 100%)',
                    boxShadow: '0 8px 24px rgba(182,90,47,0.30)',
                  }}
              href="#"
              className="inline-flex items-center justify-center rounded-xl border-2 border-cream bg-transparent px-6 py-3 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-cream transition-colors hover:bg-cream hover:text-green"
            >
              Subscribe Now
            </a>

            {/* <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl border-2 border-cream bg-transparent px-6 py-3 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-cream transition-colors hover:bg-cream hover:text-green"
            >
              Subscribe Now
            </a> */}

            <button
              type="button"
              onClick={() => setAnnualDialog(true)}
              className="mt-3 inline-flex items-center cursor-pointer justify-center gap-1.5 text-[0.80rem] text-cream/50  underline-offset-2 hover:text-cream/80 transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              Terms of cancellation
            </button>
          </article>
        </div>
      </div>

      <CancellationDialog
        open={monthlyDialog}
        onClose={() => setMonthlyDialog(false)}
        plan="monthly"
      />
      <CancellationDialog
        open={annualDialog}
        onClose={() => setAnnualDialog(false)}
        plan="annual"
      />
    </section>
  );
}
