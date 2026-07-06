"use client";

import { motion, useReducedMotion } from "framer-motion";

// ── Timing (all in seconds) ────────────────────────────────────────────────
const STAR_DELAY = 0.1;
const STAR_DUR   = 1.5;                                       // star + glow total
const STAR_END   = STAR_DELAY + STAR_DUR;                     // 1.6s

const CHAR       = 0.048;                                     // seconds per char
const L1         = "Little things.";
const L2         = "Memorable moments.";
const T_L1       = STAR_END + 0.15;                          // 1.75s
const T_L2       = T_L1 + L1.length * CHAR + 0.18;          // 2.60s
const T_KO       = T_L2 + L2.length * CHAR + 0.28;          // 3.74s
const T_BAND     = T_KO + 0.18;                              // 3.92s
// ──────────────────────────────────────────────────────────────────────────

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

  // Common transition base for star elements
  const starTransition = (customTimes: number[]) => ({
    duration: STAR_DUR,
    delay:    STAR_DELAY,
    ease:     "easeOut" as const,
    times:    customTimes,
  });

  return (
    <section className="min-h-[480px] md:min-h-[calc(100vh-4rem)] bg-white flex flex-col">

      {/* ── Main content ───────────────────────────────────────────── */}
      <div className="flex-1 relative flex flex-col items-center justify-center px-6 py-16 md:py-0 overflow-hidden">

        {/* ── Star intro (one-shot, ref: small star + radial glow burst) ── */}
        {!reduceMotion && (
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
            aria-hidden="true"
          >
            {/*
              Two-layer glow structure (ref-inspired):
              Layer A — outer diffuse halo, peaks then fades
              Layer B — inner concentrated glow, slightly faster
              Star    — on top, solid yellow
            */}
            <div className="relative flex items-center justify-center">

              {/* Layer A — outer halo (large, soft) */}
              <motion.div
                className="absolute rounded-full
                           w-[300px] h-[300px] md:w-[420px] md:h-[420px]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,205,0,0.38) 0%, rgba(255,205,0,0) 68%)",
                  filter: "blur(22px)",
                }}
                initial={{ opacity: 0, scale: 0.25 }}
                animate={{
                  opacity: [0,    0.9,  0.55, 0.2,  0   ],
                  scale:   [0.25, 1.3,  1.15, 1.0,  0.55],
                }}
                transition={starTransition([0, 0.28, 0.52, 0.76, 1])}
              />

              {/* Layer B — inner glow (tighter, brighter, faster peak) */}
              <motion.div
                className="absolute rounded-full
                           w-[150px] h-[150px] md:w-[210px] md:h-[210px]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,205,0,0.9) 0%, rgba(255,205,0,0) 65%)",
                  filter: "blur(14px)",
                }}
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{
                  opacity: [0,    1,    0.7,  0.25, 0   ],
                  scale:   [0.3,  1.1,  1.0,  0.85, 0.4 ],
                }}
                transition={starTransition([0, 0.24, 0.50, 0.76, 1])}
              />

              {/* Star SVG — small brand symbol */}
              <motion.img
                src="/trinkit-star.svg"
                alt=""
                className="relative z-10 w-[48px] h-[48px] md:w-[60px] md:h-[60px]"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: [0,    1,    1,    0.5,  0   ],
                  scale:   [0.5,  1.08, 1.0,  0.97, 0.88],
                }}
                transition={starTransition([0, 0.24, 0.55, 0.78, 1])}
              />

            </div>
          </div>
        )}

        {/* ── Headline + sub-copy ─────────────────────────────────── */}
        <div className="relative z-10 text-center">
          <h1
            className="font-semibold leading-[0.9] text-black
                       text-[clamp(2rem,5.5vw,6.5rem)] tracking-[-0.025em]"
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

      {/* ── Yellow band ───────────────────────────────────────────── */}
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
