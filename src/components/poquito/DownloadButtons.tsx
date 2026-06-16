import { Apple, Play } from "lucide-react";
import { SectionEyebrow } from "./SectionEyebrow";

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
      {showDivider && (
        <div className="mb-5 flex flex-col items-center gap-3">
          <SectionEyebrow>Download the App</SectionEyebrow>
        </div>
      )}
      <div className={`flex flex-wrap items-center gap-3 ${justify}`}>
        {/* App Store — filled Rust */}
        <a
          href="#"
          aria-label="Download Pocket Dragon on the App Store"
          className="inline-flex items-center gap-2.5 rounded-full bg-rust px-5 py-3 text-cream transition-opacity hover:opacity-90"
        >
          <Apple size={20} strokeWidth={1.6} className="-mt-0.5" />
          <span className="flex flex-col items-start leading-none">
            <span className="text-[0.6rem] uppercase tracking-[0.18em] opacity-85">
              Download on the
            </span>
            <span className="mt-1 text-sm font-bold tracking-tight">App Store</span>
          </span>
        </a>

        {/* Google Play — outlined Rust */}
        <a
          href="#"
          aria-label="Get Pocket Dragon on Google Play"
          className="inline-flex items-center gap-2.5 rounded-full border-2 border-rust bg-transparent px-5 py-3 text-rust transition-colors hover:bg-rust/10"
        >
          <Play size={18} strokeWidth={1.6} fill="currentColor" className="-mt-0.5" />
          <span className="flex flex-col items-start leading-none">
            <span className="text-[0.6rem] uppercase tracking-[0.18em] opacity-85">
              Get it on
            </span>
            <span className="mt-1 text-sm font-bold tracking-tight">Google Play</span>
          </span>
        </a>
      </div>
    </div>
  );
}
