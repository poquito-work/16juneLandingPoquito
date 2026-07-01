import { Link } from '@tanstack/react-router'
import logoSrc from '@/assets/pocket-dragon-logo.png'

const sidebarLinks = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Use',   to: '/terms'   },
]

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(160deg, #F9F2E4 0%, #EDE5D0 100%)' }}>

      {/* Minimal header */}
      <header
        className="border-b border-foreground/8 sticky top-0 z-50"
        style={{ background: 'rgba(249,242,228,0.85)', backdropFilter: 'blur(20px)' }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/">
            <img src={logoSrc} alt="Pocket Dragon" style={{ height: 70, width: 'auto', opacity: 0.9 }} />
          </Link>
          <Link
            to="/"
            className="text-xs tracking-[0.12em] uppercase transition-colors flex items-center gap-1.5 hover:opacity-70"
            style={{ color: 'rgba(20,51,34,0.5)' }}
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      {/* Body: sidebar + content */}
      <div className="max-w-6xl mx-auto px-6 py-14 lg:py-20 flex gap-16">

        {/* Sidebar */}
        <aside className="hidden md:flex flex-col gap-1 w-48 shrink-0 pt-1">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] mb-3" style={{ color: 'rgba(20,51,34,0.35)' }}>
            Legal
          </p>
          {sidebarLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="text-sm py-1.5 transition-colors hover:opacity-80"
              style={{ color: 'rgba(20,51,34,0.6)' }}
              activeProps={{ style: { color: 'rgba(20,51,34,1)', fontWeight: 600 } }}
            >
              {label}
            </Link>
          ))}
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-foreground/8 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: 'rgba(20,51,34,0.35)' }}>© 2026  Poquito Project LLP. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            {sidebarLinks.map(({ label, to }) => (
              <Link key={to} to={to} className="text-xs transition-colors hover:opacity-70" style={{ color: 'rgba(20,51,34,0.4)' }}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </footer>

    </div>
  )
}
