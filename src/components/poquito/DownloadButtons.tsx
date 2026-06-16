import { Apple, Play } from "lucide-react";

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
        {showDivider && (
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-rust opacity-80">
            Coming Soon
          </span>
        )}

        {/* App Store — glass */}
        <a
          href="#"
          aria-label="Download Pocket Dragon on the App Store"
          className="inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-bold tracking-tight transition-all duration-200 hover:scale-[1.03]"
          style={{
            background: 'rgba(182,90,47,0.15)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            border: '1.5px solid rgba(182,90,47,0.45)',
            color: 'var(--rust)',
            boxShadow: '0 4px 20px rgba(182,90,47,0.12), inset 0 1px 0 rgba(255,255,255,0.08)',
          }}
        >
          <Apple size={20} strokeWidth={1.6} className="-mt-0.5" />
          App Store
        </a>

        {/* Google Play — glass */}
        <a
          href="#"
          aria-label="Get Pocket Dragon on Google Play"
          className="inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-bold tracking-tight transition-all duration-200 hover:scale-[1.03]"
          style={{
            background: 'rgba(182,90,47,0.08)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            border: '1.5px solid rgba(182,90,47,0.28)',
            color: 'var(--rust)',
            boxShadow: '0 4px 20px rgba(182,90,47,0.08), inset 0 1px 0 rgba(255,255,255,0.06)',
          }}
        >
          <Play size={18} strokeWidth={1.6} fill="currentColor" className="-mt-0.5" />
          Google Play
        </a>
      </div>
    </div>
  );
}
