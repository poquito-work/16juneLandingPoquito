import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { SectionEyebrow } from "./SectionEyebrow";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { getPackageList, getTransactionList } from "@/services/auth";

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
                 Subscriptions are non-refundable. Upon cancellation, benefits will remain active until the end of the current subscription term and subscription will not renew automatically thereafter
                </p>
                <p>
                  No refunds or credits will be issued for any partially used or unused portion of a monthly or annual subscription term 
                </p>
                <p className="text-cream/55 text-[0.95rem]">
                  To cancel, go to account settings in the Pocket Dragon app and select ‘Manage Subscription’
                </p>
              </>
            ) : (
              <>
                <p>
Subscriptions are non-refundable. Upon cancellation, benefits will remain active until the end of the current subscription term and subscription will not renew automatically thereafter</p>
                <p>
                 No refunds or credits will be issued for any partially used or unused portion of a monthly or annual subscription term 
                </p>
                <p className="text-cream/55 text-[0.95rem]">
                  To cancel, go to account settings in the Pocket Dragon app and select ‘Manage Subscription’ 
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
            Got It
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function Subscriptions() {
  const [monthlyDialog, setMonthlyDialog] = useState(false);
  const [annualDialog, setAnnualDialog] = useState(false);

  interface Plan {
  id: number;
  uuid: string;
  name: string;
  billing_cycle: "monthly" | "annual";
  price: number;
  price_per_month_equiv: number | null;
  discount_percent: number | null;
  gst_excluded: boolean;
  is_active: boolean;
  trial_days: number;
}

    const [plans, setPlans] = useState<Plan[]>([]);
    useEffect(() => {
      getPackageList()
        .then((res) => {
          setPlans(res.data?.content ?? []);
        })
        .catch((err) => console.error("Failed to load plans", err));
    }, []);

const monthlyPlan = plans.find((p) => p.billing_cycle === "monthly");
const annualPlan = plans.find((p) => p.billing_cycle === "annual");
  return (
    <section id="plans"  style={{ background: "linear-gradient(145deg, rgb(249, 242, 228) 0%, rgb(237, 229, 208) 45%, rgb(229, 218, 187) 100%)" }}>
      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 md:py-16">

        <div className="flex flex-col items-center gap-3 text-center">
          <SectionEyebrow>Membership</SectionEyebrow>
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight  sm:text-3xl md:text-[2rem]" style={{ color: 'var(--foreground)' }}>
            Choose your <span style={{ color: 'var(--rust)' }}>Plan</span>
          </h2>
        </div>

        <div className="articleClass mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-2">
          {/* Monthly */}
           {monthlyPlan && (
          <article className="plan-monthly-card relative flex flex-col rounded-2xl border border-foreground/15  p-7">
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-foreground/70">
              Monthly Plan
            </span>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-sm font-bold" style={{ color: 'var(--foreground)' }}>Rs</span>
              <span className="font-display text-5xl font-bold leading-none" style={{ color: 'var(--foreground)' }}>
                 {monthlyPlan.price.toLocaleString("en-IN")}
              </span>
              <span className="ml-1 text-sm text-foreground/65">/ month</span>
            </div>
             <p className="mt-2 text-xs text-foreground/65">
              Excl GST
            </p>
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
                    // boxShadow: '0 8px 24px rgba(182,90,47,0.30)',
                  }}
              href="#"
              className="inline-flex items-center justify-center rounded-xl border-2 border-rust bg-transparent px-6 py-3 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-rust transition-colors hover:bg-rust hover:text-white"
            >
              Subscribe Now
            </a>

            <button
              type="button"
              onClick={() => setMonthlyDialog(true)}
              className="cursor-pointer mt-3 inline-flex items-center justify-center gap-1.5 text-[0.80rem] text-foreground/50  underline-offset-2 hover:text-foreground/75 transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              Terms of cancellation
            </button>
          </article>
           )}

             {annualPlan && (
        
          <article className="relative flex flex-col rounded-2xl bg-green-new p-7 text-cream">
            <div className="absolute right-5 -top-3">
              <span className="rounded-full bg-rust px-8 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-cream shadow-sm">
                Best Value
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-cream/85">
                Annual Plan
              </span>
            </div>

            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-sm font-bold text-cream/85">Rs</span>
              <span className="font-display text-5xl font-bold leading-none"> {annualPlan.price.toLocaleString("en-IN")}
</span>
              <span className="ml-1 text-sm text-cream/75">/ year</span>
            </div>
            <p className="mt-2 text-xs text-cream/75">Save 25% | Rs 375/month </p> 
            {/* <p className="mt-2 text-xs text-cream/75">Save Rs {annualPlan.discount_percent}% | Rs 375/month </p> */}
                        {/* <p className="mt-2 text-xs text-cream/75">Save Rs {annualPlan.discount_percent}%  {annualPlan.price_per_month_equiv ? ` | Rs ${annualPlan.price_per_month_equiv}/month` : ""} */}

            <p className="mt-2 text-xs text-cream/75">Excl GST</p>

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
               
              href="#"
              className="inline-flex  items-center justify-center rounded-xl border-2 bg-rust px-6 py-3 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-cream transition-colors hover:bg-cream hover:text-green"
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
          )}
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
