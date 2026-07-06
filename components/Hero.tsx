"use client";

import { motion, useReducedMotion } from "framer-motion";

// ── Timing constants ───────────────────────────────────────────────────────
const STAR_DELAY  = 0.1;
const STAR_DUR    = 1.2;
const STAR_END    = STAR_DELAY + STAR_DUR;           // 1.3s

const CHAR        = 0.048;                            // seconds per character
const L1          = "Little things.";
const L2          = "Memorable moments.";
const T_L1        = STAR_END + 0.2;                  // 1.5s — line 1 typewriter start
const T_L2        = T_L1 + L1.length * CHAR + 0.2;  // 2.37s — line 2 start
const T_KO        = T_L2 + L2.length * CHAR + 0.3;  // 3.53s — korean fade start
const T_BAND      = T_L2 + L2.length * CHAR + 0.5;  // 3.73s — band fade start

// Star keyframe times (within the 1.2s duration)
const STAR_TIMES  = [0, 0.28, 0.52, 0.68, 0.84, 1];
// ──────────────────────────────────────────────────────────────────────────

// Characters appear one-by-one via near-instant opacity flip
function Typewriter({ text, startDelay }: { text: string; startDelay: number }) {
  return (
    <>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.001, delay: startDelay + i * CHAR, ease: "linear" }}
        >
          {char}
        </motion.span>
      ))}
    </>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="min-h-[480px] md:min-h-[calc(100vh-4rem)] bg-white flex flex-col">

      {/* ── Main content area ─────────────────────────────────────────── */}
      <div className="flex-1 relative flex flex-col items-center justify-center px-6 py-16 md:py-0 overflow-hidden">

        {/* Star intro — one-shot, disappears before text appears */}
        {!reduceMotion && (
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
            aria-hidden="true"
          >
            {/* Glow — blurred yellow circle behind star */}
            <motion.div
              className="absolute rounded-full bg-yellow"
              style={{ width: 130, height: 130, filter: "blur(36px)" }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: [0,    0.55, 0.22, 0.72, 0.30, 0   ],
                scale:   [0.5,  1.3,  1.0,  1.6,  1.15, 0.5 ],
              }}
              transition={{
                duration: STAR_DUR,
                delay:    STAR_DELAY,
                ease:     "easeInOut",
                times:    STAR_TIMES,
              }}
            />

            {/* Star SVG */}
            <motion.img
              src="/trinkit-star.svg"
              alt=""
              className="relative w-16 h-16 md:w-[72px] md:h-[72px]"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{
                opacity: [0,    1,    0.48, 1,    0.55, 0   ],
                scale:   [0.6,  1.05, 1.0,  1.03, 1.0,  0.9 ],
              }}
              transition={{
                duration: STAR_DUR,
                delay:    STAR_DELAY,
                ease:     "easeInOut",
                times:    STAR_TIMES,
              }}
            />
          </div>
        )}

        {/* ── Headline + sub-copy ───────────────────────────────────── */}
        <div className="relative z-10 text-center">
          <h1
            className="font-semibold leading-[0.9] text-black text-[clamp(2rem,5.5vw,6.5rem)] tracking-[-0.025em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="block">
              {reduceMotion
                ? L1
                : <Typewriter text={L1} startDelay={T_L1} />}
            </span>
            <span className="block">
              {reduceMotion
                ? L2
                : <Typewriter text={L2} startDelay={T_L2} />}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: reduceMotion ? 0.2 : T_KO,
            }}
            className="mt-5 md:mt-6 font-sans text-sm md:text-base text-black/50 tracking-tight"
          >
            일상 속 작은 행복을 만드는 굿즈 브랜드
          </motion.p>
        </div>
      </div>

      {/* ── Yellow band ───────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: reduceMotion ? 0.4 : T_BAND,
        }}
        className="bg-yellow px-6 md:px-12 lg:px-16 py-4 md:py-5 flex items-center justify-between gap-4"
      >
        <span className="font-sans text-[9px] md:text-[10px] tracking-[0.12em] md:tracking-[0.25em] uppercase text-black/70 font-medium whitespace-nowrap">
          trinkit no.01 — coming soon
        </span>
        <a
          href="#product"
          className="hidden md:block shrink-0 font-sans text-[10px] tracking-[0.22em] uppercase text-black/60 hover:text-black transition-colors duration-200"
        >
          See what&apos;s coming ↓
        </a>
      </motion.div>

    </section>
  );
}
