import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { DownloadButtons } from "./DownloadButtons";
import heroVideo from "@/assets/IMG_6280.mp4";
import tile1 from "@/assets/Mpt1z.png";
import tile2 from "@/assets/Mpt3z.png";
import avtarBoy from "@/assets/poquito-boy.png";
import avtarGirl from "@/assets/poquito-girl.png";
import avtarBunny from "@/assets/poquito-owl.png";


const EASE = [0.22, 0.61, 0.36, 1] as const;

const bgTiles = [
  { src: tile1, left: "4%", top: "14%", w: 54, rot: -12, op: 0.13, dur: 7.5, delay: 0 },
  { src: tile2, left: "10%", top: "72%", w: 44, rot: 20, op: 0.10, dur: 8.5, delay: 1.2 },
  { src: tile1, left: "32%", top: "91%", w: 38, rot: -22, op: 0.08, dur: 8.0, delay: 2.4 },
  { src: tile2, left: "1%", top: "42%", w: 46, rot: 15, op: 0.12, dur: 9.5, delay: 0.3 },
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

export function Hero({ isLoaderFinished = false }: { isLoaderFinished?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isLoaderFinished && videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn("Video play failed or was interrupted:", err);
      });
    }
  }, [isLoaderFinished]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen overflow-hidden"
      // style={{ background: "linear-gradient(145deg, #F9F2E4 0%, #EDE5D0 45%, #E5DABB 100%)" }}
      style={{ background: "#ebe3d1db" }}
    >
      {/* Video — right half, full height, absolutely positioned */}
      <div
        aria-hidden
        className="absolute top-0 right-0 h-full hidden lg:block"
        style={{
          width: "50%", zIndex: 0, background: "transparent",
          boxShadow: "none",
          filter: "none",
        }}
      >
        <video
          ref={videoRef}
          src={heroVideo}
          autoPlay={isLoaderFinished}
          muted
          playsInline
          loop
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            filter: "brightness(1.08) contrast(1.03)",
          }}
        />
        {/* Fade left edge so it blends into the text area */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `
               linear-gradient(to right, #EDE5D0 0%, rgba(237,229,208,.8) 15%, transparent 55%),
  linear-gradient(to bottom, rgba(249,242,228,.25) 0%, transparent 10%),
  linear-gradient(to top, rgba(229,218,187,.25) 0%, transparent 10%)
            `,
          }}
        />
        {/* Fade left edge so it blends into the text area */}
        
      </div>

      {/* Ambient background tiles — left side only */}
      {/* {bgTiles.map((t, i) => (
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
      ))} */}

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
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="h-px w-8" style={{ background: "var(--rust)" }} />
              <span className="text-[0.72rem] uppercase tracking-[0.22em]" style={{ color: "var(--rust)" }}>
                Play through tunnels, clouds, and signal tantrums
              </span>
              {/* <span className="h-px w-8" style={{ background: "var(--rust)" }} /> */}
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-bold uppercase leading-tight tracking-tight"
              style={{
                fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
                color: "var(--foreground)",
                lineHeight: 1.05,
              }}
            >
              Mahjong on{" "}
              <span style={{ color: "var(--rust)" }}>your time,</span>{" "}
              <span style={{ color: "var(--rust)" }}>anywhere</span>  you are!
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
             Practice, play, and compete your way to the top! Enjoy real-time and offline Mahjong action at your fingertips
            </motion.p>

            {/* Download buttons */}
            <motion.div variants={itemVariants}>
              <DownloadButtons align="start" />
            </motion.div>

            {/* Social proof */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 pt-1 heroText">
              {/* <span className="text-sm" style={{ color: "var(--foreground)", opacity: 0.7 }}>
                 <strong>10,000+ Players</strong>
              </span> */}
              <div className="flex -space-x-2 socialRound">
                <img src={avtarBoy} className="height-30" />
                <img src={avtarGirl} />
                <img src={avtarBunny} />
                {/* {avatarGradients.map((g, i) => (
                  <div 
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white/80 flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ background: g }}
                  >
                    <img src={avtarBoy}/>
                     <img src={avtarGirl}/>
                      <img src={avtarBunny}/>
                    {["A", "M", "R"][i]}
                  </div>
                ))} */}
              </div>
              <span className="text-sm" style={{ color: "var(--foreground)", opacity: 0.7 }}>
                <span> Join our growing community</span>
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
