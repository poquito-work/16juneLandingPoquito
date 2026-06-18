"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const EASE = [0.22, 0.61, 0.36, 1] as const;

const faqs = [
  {
    q: "What is Poquito Mahjong?",
    a: "Poquito Mahjong is a premium mobile app that brings Traditional Mahjong to your fingertips. Play in real-time against players worldwide, practice against intelligent bots, or challenge friends in private tables. Every element — from matchmaking to ranked progression — is designed to honour the depth of Traditional Mahjong while making it effortless to enjoy anywhere.",
    defaultOpen: true,
  },
  {
    q: "What Mahjong variant does Poquito support?",
    a: "Poquito focuses exclusively on Traditional Mahjong — the authentic four-player tile game rooted in centuries of heritage. We've implemented rigorous rules covering draws, discards, winning hands, and scoring to ensure the experience feels true to the game you know and love, with modern clarity and interface polish.",
    defaultOpen: true,
  },
  {
    q: "Can I cancel my monthly subscription at any time?",
    a: "Yes. Monthly subscriptions can be cancelled at any time before your next billing date — no fees, no friction. Annual subscriptions are non-refundable, but all your benefits remain fully active until the end of the subscription term.",
    defaultOpen: false,
  },
  {
    q: "How does Smart Matchmaking work?",
    a: "Our matchmaking engine considers your current Ranked Points, recent win-rate, average game duration, and preferred play times to assemble tables where every seat is competitive. The goal is simple: every game should feel like it could go either way right until the final tile.",
    defaultOpen: false,
  },
  {
    q: "Is there a free trial available?",
    a: "We're actively working on a trial period for new players. Currently, the monthly plan at $9.99 offers full access with the freedom to cancel before your next billing date — making it a low-commitment way to experience everything Poquito has to offer.",
    defaultOpen: false,
  },
  {
    q: "How many players are needed to start a game?",
    a: "Traditional Mahjong requires four players. In Practice Mode, intelligent bots fill any open seats instantly so you can always get a full table. In Public Lobby, the matchmaking system fills your table within seconds. Private Tables allow you to wait for friends or let bots fill empty seats.",
    defaultOpen: false,
  },
];

export function FAQ() {
  return <FAQSection />;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(() => {
    const firstOpen = faqs.findIndex((f) => f.defaultOpen);
    return firstOpen >= 0 ? firstOpen : null;
  });
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? faqs : faqs.slice(0, 3);

  return (
    <section
      id="faq"
      className="section-pad mt-15 faqWrap"
      style={{ background: "linear-gradient(180deg, #F9F2E4 0%, #EDE5D0 100%)" }}
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="h-[1px] w-8 bg-pq-rust/60" />
            <span className="text-[0.72rem] font-bold uppercase tracking-[0.32em] text-rust">Questions</span>
          </div>
          <h2
            className="font-hero font-bold text-pq leading-tight tracking-tight text-balance"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
          >
            FREQUENTLY ASKED
          </h2>
        </motion.div>

        {/* FAQ items */}
        <div className="flex flex-col">
          {visible.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* View More */}
        {!expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 text-center"
          >
            <motion.button
              onClick={() => setExpanded(true)}
              className="inline-flex text-bold items-center gap-3 text-pq text-sm tracking-[0.14em] uppercase font-normal border-b border-pq-green/20 pb-0.5 hover:border-pq-green/50 transition-all duration-300 group"
              whileHover={{ letterSpacing: "0.18em" }}
            >
              <span>View More Questions</span>
              <motion.svg
                className="w-4 h-4 text-pq-rust"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </motion.svg>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.6, ease: EASE, delay: index * 0.08 }}
      className={`border-b transition-colors duration-300 ${isOpen ? "border-pq-green/20" : "border-pq-green/10"}`}
    >
      <button onClick={onToggle} className="w-full text-medium flex items-center justify-between gap-6 py-6 text-left group">
        <span
          className={`font-hero font-bold text-base leading-snug transition-all duration-300 ${
            isOpen ? "text-pq" : "text-pq"
          } group-hover:text-pq-green`}
          style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}
        >
          {faq.q}
        </span>

        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.35, ease: EASE }}
          className={`faqbtn flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "border-pq-rust/50 bg-pq-rust/10"
              : "border-pq-green/15 bg-transparent group-hover:border-pq-green/30"
          }`}
        >
          <svg
            className={`w-3 h-3 transition-colors duration-300 ${isOpen ? "text-pq-rust" : "text-pq-green"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            style={{ overflow: "hidden" }}
          >
            <p className="text-pq text-sm font-medium leading-relaxed pb-6 max-w-2xl transition-all duration-200">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}











// import { useState } from "react";
// import { Plus, Minus } from "lucide-react";
// import { SectionEyebrow } from "./SectionEyebrow";

// const FAQS = [
//   {
//     q: "Do I need to create a new account on the website?",
//     a: "No. Log in with the same username and password as the App.",
//   },
//   {
//     q: "Can I still play without subscribing?",
//     a: "Yes. New accounts receive a free 2-week trial with full access to the app. After the trial ends, you can continue playing by subscribing to our monthly or annual plans.",
//   },
//   {
//     q: "What is Traditional Mahjong?",
//     a: "Traditional Mahjong is a four-player tile-based game where players build a complete winning hand (of 14 tiles) by forming specific tile combinations. The traditional format includes variations such as Passport (East Wind Round), Goulash (West Wind Round), and more.",
//   },
//   {
//     q: "What happens if a table doesn't fill up?",
//     a: "If a player has joined a table and there are one or more seats still open, the host may choose to begin the game with bots.",
//   },
//   {
//     q: "Will my subscription auto-renew?",
//     a: "Yes — subscriptions are set to auto-renew by default, but you can turn off auto-renewal at any time through your account settings.",
//   },
//   {
//     q: "Can I switch between monthly and annual plans?",
//     a: "Yes — you can switch from a monthly plan to an annual plan at any time. Your annual subscription will begin once your current monthly billing period ends.",
//   },
//   {
//     q: "Can I customize my gameplay experience?",
//     a: "Yes. In Practice Mode and Create a Table Mode, you can customize game variants, number of games, and turn timer settings to match your preferred style of play.",
//   },
//   {
//     q: "How do I report bugs or unfair behavior?",
//     a: "You may contact us at support@pocketdragon.app.",
//   },
//   {
//     q: "What happens to my progress if I switch devices?",
//     a: "No problem. Simply log in with the same account credentials on your new device to continue with your current rank, stats, and progress.",
//   },
// ];

// export function FAQ() {
//   const [open, setOpen] = useState<number | null>(0);
//   const [expanded, setExpanded] = useState(false);
//   const visible = expanded ? FAQS : FAQS.slice(0, 3);

//   return (
//     <section id="faq" className="bg-background">
//       <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 md:py-16">
//         <div className="flex flex-col items-center gap-3 text-center">
//           <SectionEyebrow>Questions</SectionEyebrow>
//           <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl md:text-[2rem]">
//             Frequently Asked
//           </h2>
//         </div>

//         <ul className="mt-12 divide-y divide-foreground/10 border-y border-foreground/10">
//           {visible.map((item, idx) => {
//             const isOpen = open === idx;
//             return (
//               <li key={item.q}>
//                 <button
//                   type="button"
//                   onClick={() => setOpen(isOpen ? null : idx)}
//                   aria-expanded={isOpen}
//                   className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-rust"
//                 >
//                   <span className="text-sm font-bold text-foreground sm:text-base">{item.q}</span>
//                   <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-foreground/30 text-foreground/70">
//                     {isOpen ? <Minus size={14} /> : <Plus size={14} />}
//                   </span>
//                 </button>
//                 {isOpen && (
//                   <p className="pb-6 pr-12 text-sm leading-relaxed text-foreground/75 text-justify">{item.a}</p>
//                 )}
//               </li>
//             );
//           })}
//         </ul>

//         <div className="mt-10 flex justify-center">
//           <button
//             type="button"
//             onClick={() => {
//               setExpanded((v) => !v);
//               if (expanded) setOpen(0);
//             }}
//             className="inline-flex items-center gap-2 rounded-full border-2 border-rust bg-transparent px-5 py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-rust transition-colors hover:bg-rust/10"
//           >
//             {expanded ? "View Less" : "View More FAQs"}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

