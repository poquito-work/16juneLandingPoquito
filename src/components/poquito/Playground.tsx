import { GraduationCap, UsersRound, LayoutGrid, Crown, Target } from "lucide-react";
import { SectionEyebrow } from "./SectionEyebrow";

const FEATURES = [
  { icon: GraduationCap, title: "Practice Mode with Bots", body: "Sharpen your skills with endless practice rounds" },
  { icon: UsersRound, title: "Private Tables with Friends", body: "Round up your crew and deal in" },
  { icon: LayoutGrid, title: "Public Lobby Tables", body: "The lobby is buzzing — grab a seat" },
  { icon: Crown, title: "Ranked Points & Tiers", body: "Earn points, reach new tiers and unlock exclusive rewards" },
  { icon: Target, title: "Smart Matchmaking", body: "The right table, right away" },
];

export function Playground() {
  return (
    <section id="about" className="bg-green text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <div className="flex flex-col items-center gap-3 text-center">
          <SectionEyebrow>What We Offer</SectionEyebrow>
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-cream sm:text-3xl md:text-[2rem]">
            The Complete Mahjong Playground
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <button
              type="button"
              key={title}
              className="group relative flex flex-col items-center gap-3 rounded-2xl border border-cream/15 bg-cream/[0.04] p-6 text-center transition-all duration-300 ease-out hover:-translate-y-1 hover:border-rust hover:bg-cream hover:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.55)] active:scale-[0.98] focus-visible:outline-none focus-visible:border-rust focus-visible:bg-cream"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 transition-colors duration-300 group-hover:bg-rust/15 group-focus-visible:bg-rust/15">
                <Icon size={26} strokeWidth={1.7} className="text-rust transition-transform duration-300 group-hover:scale-110" />
              </span>
              <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-cream transition-colors duration-300 group-hover:text-green group-focus-visible:text-green">
                {title}
              </h3>
              <p className="max-w-xs text-sm leading-relaxed text-cream/70 transition-colors duration-300 group-hover:text-green/75 group-focus-visible:text-green/75">
                {body}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
