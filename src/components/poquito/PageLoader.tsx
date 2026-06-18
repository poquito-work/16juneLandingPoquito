import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import tile1 from "@/assets/White Dragon.png";
import tile2 from "@/assets/red Dragon.png";
import tile3 from "@/assets/green Dragon.png";
import logoSrc from '@/assets/pocket-dragon-logo.png'
import { PocketDragonLogo } from "./Logo";

const OUTER_PATH =
  "M6,1 L54,1 Q59,1 59,6 L59,74 Q59,79 54,79 L6,79 Q1,79 1,74 L1,6 Q1,1 6,1 Z";
const INNER_PATH =
  "M9,5.5 L51,5.5 Q54.5,5.5 54.5,9 L54.5,71 Q54.5,74.5 51,74.5 L9,74.5 Q5.5,74.5 5.5,71 L5.5,9 Q5.5,5.5 9,5.5 Z";

const CYCLE = 8;

const TILE_SRCS = [tile1, tile2, tile3];

function TileOutlineReveal({ delay, tileSrc }: { delay: number; tileSrc: string }) {
  const base = {
    duration: CYCLE,
    repeat: Infinity,
    repeatDelay: 0,
    delay,
    ease: "easeInOut" as const,
  };

  return (
    <div style={{ position: "relative", width: 64, height: 84 }}>
      <svg
        width="64"
        height="84"
        viewBox="0 0 60 80"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        aria-hidden
      >
        <motion.path
          d={OUTER_PATH}
          fill="none"
          stroke="#b65a2f"
          strokeWidth="1.5"
          strokeLinecap="round"
          animate={{
            pathLength: [0, 1, 1, 0, 0],
            opacity: [0.85, 0.85, 0.4, 0, 0],
          }}
          transition={{ ...base, times: [0, 0.25, 0.42, 0.52, 1] }}
        />
        <motion.path
          d={INNER_PATH}
          fill="none"
          stroke="#d9a38a"
          strokeWidth="1"
          strokeLinecap="round"
          animate={{
            pathLength: [0, 0, 1, 1, 0, 0],
            opacity: [0, 0.7, 0.7, 0.35, 0, 0],
          }}
          transition={{ ...base, times: [0, 0.19, 0.40, 0.44, 0.52, 1] }}
        />
      </svg>

      <motion.div
        style={{ position: "absolute", inset: 0, borderRadius: 5, overflow: "hidden" }}
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{ ...base, times: [0, 0.44, 0.55, 0.78, 1] }}
      >
        <img
          src={tileSrc}
          alt="Mahjong tile"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </motion.div>
    </div>
  );
}

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 8000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "linear-gradient(145deg, #F9F2E4 0%, #EDE5D0 45%, #E5DABB 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          {/* Three tiles side by side */}
          {/* Logo */}
<motion.div
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
    <div className="mb-4 scale-[2]">
  <PocketDragonLogo />
</div>
 {/* <motion.img
  src={logoSrc}
  className="brightness-0 invert opacity-70"
  alt="Pocket Dragon"
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  style={{
    width: "220px",
    height: "auto",
    marginBottom: "1rem",
  }}
/> */}
</motion.div>

{/* Three tiles side by side */}
<div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "1.25rem",
  }}
>
  {TILE_SRCS.map((src, i) => (
    <TileOutlineReveal
      key={src}
      tileSrc={src}
      delay={(CYCLE / 3) * i}
    />
  ))}
</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
