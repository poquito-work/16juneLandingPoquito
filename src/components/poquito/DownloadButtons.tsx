import { motion } from "framer-motion";
import appStoreBadge from "@/assets/download-apple-app-store.svg";
import googlePlayBadge from "@/assets/download-google-play-store.svg";

export function DownloadButtons({
  className = "",
  align = "start",
}: {
  className?: string;
  align?: "start" | "center";
}) {
  const justify = align === "center" ? "justify-center" : "justify-start";
  return (
    <div className={className}>
      <div className={`flex flex-wrap items-center gap-3 ${justify}`}>
        <motion.a
          href="#"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: "block",
            borderRadius: 10,
            overflow: "hidden",
            background: "rgba(10,28,18,0.72)",
            backdropFilter: "blur(16px) saturate(180%)",
            WebkitBackdropFilter: "blur(16px) saturate(180%)",
            border: "1px solid rgba(255,255,255,0.14)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
            padding: "4px 10px",
          }}
        >
          <img src={appStoreBadge} alt="Download on the App Store" style={{ height: 36, width: "auto", display: "block" }} />
        </motion.a>
        <motion.a
          href="#"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: "block",
            borderRadius: 10,
            overflow: "hidden",
            background: "rgba(10,28,18,0.72)",
            backdropFilter: "blur(16px) saturate(180%)",
            WebkitBackdropFilter: "blur(16px) saturate(180%)",
            border: "1px solid rgba(255,255,255,0.14)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
            padding: "4px 10px",
          }}
        >
          <img src={googlePlayBadge} alt="Get it on Google Play" style={{ height: 36, width: "auto", display: "block" }} />
        </motion.a>
      </div>
    </div>
  );
}
