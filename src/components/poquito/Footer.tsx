// import { Instagram, Twitter, Facebook, Mail } from "lucide-react";
// import { Link } from "@tanstack/react-router";
// import { PocketDragonLogo } from "./Logo";

// export function Footer() {
//   return (
//     <footer id="contact" className="bg-background scroll-mt-20">
//       {/* Centered logo on cream background */}
//       <div className="mx-auto flex max-w-5xl flex-col items-center px-5 pt-10 pb-8 sm:px-8 md:pt-12">
//         <PocketDragonLogo size="lg" />
//       </div>

//       {/* Rust footer block */}
//       <div className="bg-rust text-cream">
//         <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8 md:py-12">
//           {/* Contact + Follow */}
//           <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-12">
//             <a
//               href="mailto:hello@pocketdragon.app"
//               className="inline-flex items-center gap-2.5 text-sm text-cream/95 transition-opacity hover:opacity-80"
//             >
//               <Mail size={15} />
//               hello@pocketdragon.app
//             </a>

//             <div className="flex items-center gap-5">
//               <a href="#" aria-label="Instagram" className="text-cream/90 transition-opacity hover:opacity-80">
//                 <Instagram size={18} />
//               </a>
//               <a href="#" aria-label="Twitter" className="text-cream/90 transition-opacity hover:opacity-80">
//                 <Twitter size={18} />
//               </a>
//               <a href="#" aria-label="Facebook" className="text-cream/90 transition-opacity hover:opacity-80">
//                 <Facebook size={18} />
//               </a>
//             </div>
//           </div>

//           {/* Legal */}
//           <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-cream/95">
//             <Link to="/terms" className="hover:opacity-80">Terms &amp; Conditions</Link>
//             <Link to="/privacy" className="hover:opacity-80">Privacy Policy</Link>
//           </div>

//           {/* Copyright */}
//           <p className="mt-5 text-center text-[0.68rem] uppercase tracking-[0.22em] text-cream/75">
//             © 2026 Pocket Dragon. All Rights Reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }



'use client'

import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import logoSrc from '@/assets/pocket-dragon-logo.png'
import tile1 from "@/assets/White Dragon.png";
import tile2 from "@/assets/red Dragon.png";
import tile3 from "@/assets/green Dragon.png";

const EASE = [0.22, 0.61, 0.36, 1] as const


const OUTER_PATH =
  'M6,1 L54,1 Q59,1 59,6 L59,74 Q59,79 54,79 L6,79 Q1,79 1,74 L1,6 Q1,1 6,1 Z'
const INNER_PATH =
  'M9,5.5 L51,5.5 Q54.5,5.5 54.5,9 L54.5,71 Q54.5,74.5 51,74.5 L9,74.5 Q5.5,74.5 5.5,71 L5.5,9 Q5.5,5.5 9,5.5 Z'

// Three tiles to cycle through
const TILE_SRCS = [tile1, tile2, tile3]

// Cycle: 8s, stagger: 8/3 ≈ 2.67s between tiles
// Within each cycle:
//   0–0.25  : outer border draws
//   0.19–0.4: inner border draws (overlaps slightly)
//   0.4–0.52: both outlines fade, tile image fades in
//   0.52–0.78: hold image
//   0.78–1.0 : image fades out
const CYCLE = 8

function TileOutlineReveal({ delay, tileSrc }: { delay: number; tileSrc: string }) {
  const base = {
    duration: CYCLE,
    repeat: Infinity,
    repeatDelay: 0,
    delay,
    ease: 'easeInOut' as const,
  }

  return (
    <div style={{ position: 'relative', width: 44, height: 58 }}>
      {/* SVG outline layer */}
      <svg
        width="44" height="58" viewBox="0 0 60 80"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        aria-hidden
      >
        {/* Outer border — draws first */}
        <motion.path
          d={OUTER_PATH}
          fill="none"
          stroke="rgba(249,242,228,0.55)"
          strokeWidth="1.5"
          strokeLinecap="round"
          animate={{
            pathLength: [0, 1, 1, 0, 0],
            opacity: [0.85, 0.85, 0.4, 0, 0],
          }}
          transition={{ ...base, times: [0, 0.25, 0.42, 0.52, 1] }}
        />
        {/* Inner border — follows with a short lag */}
        <motion.path
          d={INNER_PATH}
          fill="none"
          stroke="rgba(249,242,228,0.32)"
          strokeWidth="1"
          strokeLinecap="round"
          animate={{
            pathLength: [0, 0, 1, 1, 0, 0],
            opacity: [0, 0.7, 0.7, 0.35, 0, 0],
          }}
          transition={{ ...base, times: [0, 0.19, 0.40, 0.44, 0.52, 1] }}
        />
      </svg>

      {/* Real tile image — materializes as outlines fade */}
      <motion.div
        style={{ position: 'absolute', inset: 0, borderRadius: 3, overflow: 'hidden' }}
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{ ...base, times: [0, 0.44, 0.55, 0.78, 1] }}
      >
        <img
          src={tileSrc}
          alt="Mahjong tile"
          width={44}
          height={58}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </motion.div>
    </div>
  )
}

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/5 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0c2318 0%, #071610 100%)' }}
    >
      {/* Grain overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* ── Main footer row: brand · links · tiles ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 py-10 border-b border-white/5 items-center md:justify-items-center md:text-left"
        >
          {/* Brand — left on both mobile and desktop */}
          <div className="flex flex-col items-start md:items-start gap-3">
            <img
              src={logoSrc}
              alt="Poquito Mahjong"
              width={150}
              height={34}
              className="brightness-0 invert opacity-70"
            />
          </div>

          {/* Links: email · socials · Privacy · Terms — stacked on mobile, single row on desktop */}
          <div className="flex flex-col items-end gap-3 text-xs text-pq-cream md:col-start-2 md:flex-row md:items-center md:gap-6 md:justify-self-center">
            <a
              href="mailto:hello@pocketdragon.app"
              className="hover:text-pq-cream hover:font-bold transition-all duration-200 font-normal whitespace-nowrap"
            >
              hello@pocketdragon.app
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com/pocketdragonapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:opacity-80 transition-opacity"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="https://twitter.com/pocketdragonapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:opacity-80 transition-opacity"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a
                href="https://instagram.com/pocketdragonapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:opacity-80 transition-opacity"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
            <span className="hidden md:inline text-pq-cream/40">|</span>
            <div className="flex items-center gap-4">
              <Link
                to="/privacy"
                className="hover:text-pq-cream hover:font-bold transition-all duration-200 font-normal whitespace-nowrap"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-pq-cream hover:font-bold transition-all duration-200 font-normal whitespace-nowrap"
              >
                Terms of Use
              </Link>
            </div>
          </div>

          {/* Animated tiles column — centered on mobile, right-aligned on desktop */}
          <div className="col-span-2 md:col-span-1 flex items-center justify-center md:justify-end gap-3 md:justify-self-end w-full md:w-auto">
            {TILE_SRCS.map((src, i) => (
              <TileOutlineReveal
                key={src}
                tileSrc={src}
                delay={(CYCLE / 3) * i}
              />
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center justify-center py-5"
        >
          <p className="text-pq-cream text-xs font-normal tracking-wide hover:font-bold hover:scale-[1.03] transition-all duration-200">
            © 2026 Poquito Mahjong. All Rights Reserved.
          </p>
        </motion.div>

      </div>
    </footer>
  )
}
