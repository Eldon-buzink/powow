import React from "react";
import { motion } from "framer-motion";

// Usage:
// <LogoCarousel logos={[logo1, logo2, logo3, logo4, logo5]} />
// The component will repeat the array internally for seamless effect.

export default function LogoCarousel({
  logos = Array.from({ length: 5 }), // 5 placeholder logos by default
}: {
  logos?: any[];
}) {
  const setLength = logos.length;
  const LOGO_WIDTH = 120; // px (w-30)
  const GAP = 32; // px (gap-8)
  const ANIMATION_DURATION = 12; // seconds for one full loop
  const CAROUSEL_WIDTH = setLength * LOGO_WIDTH + (setLength - 1) * GAP;
  // Repeat the logos 3 times for seamless effect
  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="w-full flex flex-col items-center mt-4 mb-20 px-4">
      <div
        className="mx-auto w-full max-w-6xl"
        style={{
          maxWidth: `${CAROUSEL_WIDTH}px`,
        }}
      >
        <h3 className="text-sm font-semibold text-gray-400 mb-2 text-center tracking-wide uppercase">For companies like</h3>
        <div className="relative w-full overflow-hidden">
          {/* Fade overlays */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="w-full py-2">
            <motion.div
              className="flex items-center gap-8"
              animate={{ x: [0, -CAROUSEL_WIDTH] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: ANIMATION_DURATION,
                ease: "linear",
              }}
              style={{ width: `${repeatedLogos.length * (LOGO_WIDTH + GAP) - GAP}px` }}
            >
              {repeatedLogos.map((logo, i) => (
                <div
                  key={i}
                  className="w-30 h-16 flex items-center justify-center flex-shrink-0"
                >
                  {/* If logo is a JSX element, render it; otherwise, render placeholder */}
                  {logo && React.isValidElement(logo) ? (
                    logo
                  ) : (
                    <svg width="90" height="40" viewBox="0 0 90 40" fill="none">
                      <rect x="5" y="5" width="80" height="30" rx="6" fill="#E5E7EB" />
                      <text x="50%" y="60%" textAnchor="middle" fontSize="14" fill="#A1A1AA" fontFamily="sans-serif">Logo</text>
                    </svg>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 