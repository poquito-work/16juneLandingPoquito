import heroVideo from "@/assets/Studio_product_photography_vid.mp4";
import { DownloadButtons } from "./DownloadButtons";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Video background */}
      <div className="hero-bg">
        <video
          className="hero-bg-video"
          id="hero-video"
          src={heroVideo}
          autoPlay
          muted
          playsInline
          loop
        />
        {/* Dark overlay — near-black for strong text contrast */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'rgba(0,0,0,0.62)' }}
        />
        {/* Bottom fade into next section */}
        <div
          className="absolute bottom-0 left-0 w-full pointer-events-none"
          style={{
            height: '22%',
            background: 'linear-gradient(to top, #0a0a0a 0%, transparent 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10 mx-auto flex max-w-7xl flex-col items-start justify-center px-6 sm:px-10"
        style={{ minHeight: '100vh', paddingTop: '6rem', paddingBottom: '5rem' }}
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8" style={{ background: 'var(--rust)' }} />
          <span
            className="font-bold uppercase"
            style={{ color: 'var(--rust)', fontSize: '0.68rem', letterSpacing: '0.26em' }}
          >
            Introducing Pocket Dragon
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-display font-bold uppercase leading-tight tracking-tight text-pq-cream mb-6"
          style={{ fontSize: 'clamp(2rem, 4vw, 5rem)', maxWidth: '14ch' }}
        >
          Mahjong on{' '}
          <span style={{ color: 'var(--rust)' }}>your time</span>,{' '}
          anywhere you are!
        </h1>

        {/* Subtext */}
        <p
          className="text-pq-cream leading-relaxed mb-10"
          style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)', maxWidth: '48ch' }}
        >
          Practice, play, and compete your way to the top. Enjoy real-time
          Traditional Mahjong action at your fingertips — built for serious
          players who value the craft of the classic game.
        </p>

        {/* Download buttons */}
        <DownloadButtons align="start" showDivider />
      </div>
    </section>
  );
}
