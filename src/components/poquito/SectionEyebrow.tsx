export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span aria-hidden className="h-px w-8 bg-rust/70" />
      <span className="text-[0.72rem] font-bold uppercase tracking-[0.32em] text-rust">
        {children}
      </span>
      <span aria-hidden className="h-px w-8 bg-rust/70" />
    </div>
  );
}
