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
          className="cursor-none"
          style={{
            cursor:"auto",
            display: "block",
            borderRadius: 10,
            overflow: "hidden",
            background: "linear-gradient(145deg, rgb(249, 242, 228) 0%, rgb(237, 229, 208) 45%, rgb(229, 218, 187) 100%)",
            backdropFilter: "blur(16px) saturate(180%)",
            WebkitBackdropFilter: "blur(16px) saturate(180%)",
               border:" 1px solid rgb(20, 51, 34)",
              boxShadow: "rgb(0 0 0 / 14%) 0px 4px 24px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
            padding: "4px 10px",
          }}
        >
          <img src={appStoreBadge} alt="Download on the App Store" style={{ height: 36, width: "auto", display: "block" }} />
        </motion.a>
          <motion.a
          href="#"
           className="cursor-none"
          style={{
            cursor:"auto",
            display: "block",
            borderRadius: 10,
            overflow: "hidden",
            background: "linear-gradient(145deg, rgb(249, 242, 228) 0%, rgb(237, 229, 208) 45%, rgb(229, 218, 187) 100%)",
            backdropFilter: "blur(16px) saturate(180%)",
            WebkitBackdropFilter: "blur(16px) saturate(180%)",
            border:" 1px solid rgb(20, 51, 34)",
              boxShadow: "rgb(0 0 0 / 14%) 0px 4px 24px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
            padding: "4px 10px",
          }}
        >
          <img src={googlePlayBadge} alt="Get it on Google Play" style={{ height: 36, width: "auto", display: "block" }} />
        </motion.a>
     
      
      </div>
    </div>
  );
}
