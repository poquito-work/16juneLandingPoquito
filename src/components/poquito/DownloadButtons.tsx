import { motion } from "framer-motion";
import appStoreLogo from "@/assets/appstore.png";
import googlePlayLogo from "@/assets/googleplay.png";

interface StoreBadgeProps {
  icon: string;
  label: string;
  sub: string;
}

function StoreBadge({ icon, label, sub }: StoreBadgeProps) {
  return (
    <motion.a
      href="#"
      className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 rounded-xl px-4 py-2 text-left text-pq-cream"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <img src={icon} alt={label} className="w-6 h-6 object-contain animate-none" />
      <div className="flex flex-col">
        <span className="text-pq-cream text-[9px] tracking-[0.12em] uppercase leading-none">{sub}</span>
        <span className="text-pq-cream text-xs leading-tight mt-0.5">{label}</span>
      </div>
    </motion.a>
  );
}

export function DownloadButtons({
  className = "",
  align = "start",
  showDivider = false,
}: {
  className?: string;
  align?: "start" | "center";
  showDivider?: boolean;
}) {
  const justify = align === "center" ? "justify-center" : "justify-start";
  return (
    <div className={className}>
      <div className={`flex flex-wrap items-center gap-3 ${justify}`}>
        {/* Coming Soon label — left side inline */}
        {/* {showDivider && (
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-rust opacity-80 mr-2">
            Coming Soon
          </span>
        )} */}

        <StoreBadge icon={appStoreLogo} label="App Store" sub="Coming Soon on" />
        <StoreBadge icon={googlePlayLogo} label="Google Play" sub="Coming Soon on" />
      </div>
    </div>
  );
}

