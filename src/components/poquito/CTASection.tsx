import { motion } from 'framer-motion'
import { Apple, Play } from 'lucide-react'

const EASE = [0.22, 0.61, 0.36, 1] as const

export function CTASection() {
  return (
    <section
      id="download"
      className="relative overflow-hidden"
      style={{ padding: '9rem 0' }}
    >
      {/* Gradient: deep green top → rich green mid → dark green bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(160deg, #143322 0%, #1a4530 35%, #0e2a1c 65%, #091a12 100%)',
        }}
      />

      {/* Rust radial glow top-left — echoes LoginSection's green bottom-right */}
      <div
        aria-hidden
        className="absolute top-0 left-0 w-[600px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(182,90,47,0.22) 0%, transparent 60%)' }}
      />

      {/* Subtle cream glow centre-right */}
      <div
        aria-hidden
        className="absolute top-1/2 right-0 w-[400px] h-[400px] -translate-y-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(249,242,228,0.05) 0%, transparent 65%)' }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative z-10">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="h-[1px] w-8 bg-pq-rust/60" />
          <span className="text-pq-rust text-xs tracking-[0.22em] uppercase">Get Started</span>
          <span className="h-[1px] w-8 bg-pq-rust/60" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: EASE, delay: 0.1 }}
          className="font-hero font-bold text-pq-cream leading-tight tracking-tight text-balance mb-6"
          style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5.8rem)' }}
        >
          YOUR SEAT IS{' '}
          <span className="text-pq-rust">WAITING.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          className="text-pq-cream leading-relaxed max-w-xl mx-auto mb-12"
          style={{ fontSize: '1.1rem' }}
        >
          Thousands of tables are live right now. Download Poquito and make your first move.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          className="text-pq-cream leading-relaxed max-w-xl mx-auto mb-12"
          style={{ fontSize: '1.1rem' }}
        >
          Coming Soon On
          </motion.p>
        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm tracking-[0.1em] uppercase font-bold"
            style={{
              background: 'rgba(249,242,228,0.12)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1.5px solid rgba(249,242,228,0.35)',
              color: '#F9F2E4',
              boxShadow: '0 4px 24px rgba(0,0,0,0.18), inset 0 1px 0 rgba(249,242,228,0.15)',
            }}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 40px rgba(249,242,228,0.14), inset 0 1px 0 rgba(249,242,228,0.2)' } as never}
            whileTap={{ scale: 0.98 }}
          >
            <Apple size={18} strokeWidth={1.6} />
            App Store
          </motion.a>

          <motion.a
            href="#"
            className="inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm tracking-[0.1em] uppercase font-bold"
            style={{
              background: 'rgba(249,242,228,0.07)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1.5px solid rgba(249,242,228,0.2)',
              color: '#F9F2E4',
              boxShadow: '0 4px 24px rgba(0,0,0,0.14), inset 0 1px 0 rgba(249,242,228,0.08)',
            }}
            whileHover={{ scale: 1.04, background: 'rgba(249,242,228,0.13)' } as never}
            whileTap={{ scale: 0.97 }}
          >
            <Play size={16} strokeWidth={1.6} fill="currentColor" />
            Google Play
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="flex items-center justify-center gap-10 mt-16 flex-wrap"
        >
          {[
            { label: '10,000+', sub: 'Active Players' },
            { label: '4.8★',    sub: 'App Store Rating' },
            { label: '120+',    sub: 'Countries' },
          ].map(({ label, sub }) => (
            <div key={sub} className="text-center">
              <p className="font-hero font-bold text-pq-cream text-2xl">{label}</p>
              <p className="text-pq-cream text-xs tracking-[0.12em] uppercase mt-0.5">{sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
