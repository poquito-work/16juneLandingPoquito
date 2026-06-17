import { useRef } from "react";
import { motion } from "framer-motion";
import { DownloadButtons } from "./DownloadButtons";
import heroVideo from "@/assets/Studio_product_photography_vid.mp4";
import tile1 from "@/assets/Mpt1z.png";
import tile2 from "@/assets/Mpt3z.png";

const EASE = [0.22, 0.61, 0.36, 1] as const;

const bgTiles = [
  { src: tile1, left: "4%",  top: "14%", w: 54, rot: -12, op: 0.13, dur: 7.5, delay: 0   },
  { src: tile2, left: "10%", top: "72%", w: 44, rot: 20,  op: 0.10, dur: 8.5, delay: 1.2 },
  { src: tile1, left: "32%", top: "91%", w: 38, rot: -22, op: 0.08, dur: 8.0, delay: 2.4 },
  { src: tile2, left: "1%",  top: "42%", w: 46, rot: 15,  op: 0.12, dur: 9.5, delay: 0.3 },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

const avatarGradients = [
  "linear-gradient(135deg, #143322, #2a6042)",
  "linear-gradient(135deg, #B65A2F, #d4793e)",
  "linear-gradient(135deg, #2a4a1a, #4a7a2a)",
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen overflow-hidden"
      style={{ background: "linear-gradient(145deg, #F9F2E4 0%, #EDE5D0 45%, #E5DABB 100%)" }}
    >
      {/* Video — right half, full height, absolutely positioned */}
      <div
        aria-hidden
        className="absolute top-0 right-0 h-full hidden lg:block"
        style={{ width: "50%", zIndex: 0 }}
      >
        <video
          src={heroVideo}
          autoPlay
          muted
          playsInline
          loop
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        {/* Fade left edge so it blends into the text area */}
        <div
          style={{
            position: "absolute",
            inset: 0,
             background: `
              linear-gradient(to right,  #EDE5D0 0%, #EDE5D0cc 15%, transparent 55%),
              linear-gradient(to bottom, #F9F2E4 0%, transparent 18%),
              linear-gradient(to top,    #E5DABB 0%, transparent 18%)
            `,
          }}
        />
      </div>

      {/* Ambient background tiles — left side only */}
      {bgTiles.map((t, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="absolute pointer-events-none"
          style={{ left: t.left, top: t.top, zIndex: 1, opacity: t.op, rotate: t.rot }}
          animate={{ y: [0, -10, 0], rotate: [t.rot, t.rot + 2.5, t.rot] }}
          transition={{ duration: t.dur, repeat: Infinity, ease: "easeInOut", delay: t.delay }}
        >
          <img src={t.src} alt="" width={t.w} style={{ display: "block" }} />
        </motion.div>
      ))}

      {/* Text content — left half */}
      <div
        className="relative z-10 mx-auto flex min-h-screen items-center max-w-7xl"
        style={{ paddingTop: "6rem", paddingBottom: "5rem" }}
      >
        <div className="px-6 sm:px-10 lg:px-16 max-w-2xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8 lg:gap-10"
          >
            {/* Overline */}
            {/* <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="h-px w-10" style={{ background: "var(--rust)" }} />
              <span className="text-xs uppercase tracking-[0.22em]" style={{ color: "var(--rust)" }}>
                Traditional Mahjong · Reimagined
              </span>
            </motion.div> */}

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-bold uppercase leading-tight tracking-tight"
              style={{
                fontSize: "clamp(2.4rem, 5.5vw, 5rem)",
                color: "var(--foreground)",
                lineHeight: 1.05,
              }}
            >
              Mahjong on{" "}
              <span style={{ color: "var(--rust)" }}>your time</span>,{" "}
              anywhere you are!
            </motion.h1>

            {/* Body */}
            <motion.p
              variants={itemVariants}
              className="leading-relaxed"
              style={{
                fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
                color: "var(--foreground)",
                opacity: 0.75,
                maxWidth: "44ch",
              }}
            >
              Practice, play, and compete your way to the top.
              Enjoy real-time Traditional Mahjong action at your fingertips.
            </motion.p>

            {/* Download buttons */}
            <motion.div variants={itemVariants}>
              <DownloadButtons align="start" />
            </motion.div>

            {/* Social proof */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-1">
              <div className="flex -space-x-2">
                {avatarGradients.map((g, i) => (
                  <div 
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white/80 flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ background: g }}
                  >
                    {["A", "M", "R"][i]}
                  </div>
                ))}
              </div>
              <span className="text-sm" style={{ color: "var(--foreground)", opacity: 0.7 }}>
                 <strong>10,000+</strong> players waiting worldwide
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span
          className="text-xs uppercase tracking-[0.2em]"
          style={{ color: "var(--foreground)", opacity: 0.4 }}
        >
          Scroll
        </span>
        <motion.div
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, rgba(20,51,34,0.35), transparent)" }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />
      </motion.div>
    </section>
  );
}
