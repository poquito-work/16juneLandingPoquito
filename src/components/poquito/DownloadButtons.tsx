import { motion } from "framer-motion";
import googlePlayLogo from '@/assets/googleplay.png'

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
          whileHover={{ scale: 1.04, boxShadow: "0 6px 18px rgba(20,51,34,0.08), " }}
          // whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 340, damping: 22 }}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 4,
            borderRadius: 10,
            overflow: "hidden",
            background: "linear-gradient(145deg, rgb(249, 242, 228) 0%, rgb(237, 229, 208) 45%, rgb(229, 218, 187) 100%)",
            backdropFilter: "blur(16px) saturate(180%)",
            WebkitBackdropFilter: "blur(16px) saturate(180%)",
            border: "1px solid rgb(20, 51, 34)",
            padding: "9px 14px",
            textDecoration: "none",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="rgb(20,51,34)" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{ fontSize: 9, fontWeight: 600, color: "rgb(20,51,34)"}}>Now on</span>
            <span style={{ fontSize: 15, fontWeight: 600, color: "rgb(20,51,34)", marginTop: 2 }}>App Store</span>
          </div>
        </motion.a>
        <motion.a
          href="#"
          whileHover={{ scale: 1.04, y: -2, boxShadow: "0 6px 18px rgba(20,51,34,0.08), " }}
          // whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 340, damping: 22 }}
          style={{
             cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 4,
            borderRadius: 10,
            overflow: "hidden",
            background: "linear-gradient(145deg, rgb(249, 242, 228) 0%, rgb(237, 229, 208) 45%, rgb(229, 218, 187) 100%)",
            backdropFilter: "blur(16px) saturate(180%)",
            WebkitBackdropFilter: "blur(16px) saturate(180%)",
            border: "1px solid rgb(20, 51, 34)",
            padding: "9px 14px",
            textDecoration: "none",
          }}
        >
          <img src={googlePlayLogo} alt="Get it on Google Play" style={{ height: 20, width: "auto", display: "block" }} />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{ fontSize: 9, fontWeight: 600, color: "rgb(20,51,34)"}}>Coming soon on</span>
            <span style={{ fontSize: 15, fontWeight: 600, color: "rgb(20,51,34)", marginTop: 2 }}>Play Store</span>
          </div>
        </motion.a>
     
      
      </div>
    </div>
  );
}
