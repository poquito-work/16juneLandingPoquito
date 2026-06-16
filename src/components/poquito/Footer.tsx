import { Instagram, Twitter, Facebook, Mail } from "lucide-react";
import { PocketDragonLogo } from "./Logo";

export function Footer() {
  return (
    <footer id="contact" className="bg-background scroll-mt-20">
      {/* Centered logo on cream background */}
      <div className="mx-auto flex max-w-5xl flex-col items-center px-5 pt-10 pb-8 sm:px-8 md:pt-12">
        <PocketDragonLogo size="lg" />
      </div>

      {/* Rust footer block */}
      <div className="bg-rust text-cream">
        <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8 md:py-12">
          {/* Contact + Follow */}
          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-12">
            <a
              href="mailto:hello@pocketdragon.app"
              className="inline-flex items-center gap-2.5 text-sm text-cream/95 transition-opacity hover:opacity-80"
            >
              <Mail size={15} />
              hello@pocketdragon.app
            </a>

            <div className="flex items-center gap-5">
              <a href="#" aria-label="Instagram" className="text-cream/90 transition-opacity hover:opacity-80">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="text-cream/90 transition-opacity hover:opacity-80">
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="text-cream/90 transition-opacity hover:opacity-80">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-cream/95">
            <a href="#" className="hover:opacity-80">Terms &amp; Conditions</a>
            <a href="#" className="hover:opacity-80">Privacy Policy</a>
          </div>

          {/* Copyright */}
          <p className="mt-5 text-center text-[0.68rem] uppercase tracking-[0.22em] text-cream/75">
            © 2026 Pocket Dragon. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
