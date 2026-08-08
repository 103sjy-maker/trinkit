"use client";

import { motion, useReducedMotion } from "framer-motion";

// ── Timing ────────────────────────────────────────────────────────────────
const STAR_DELAY = 0.1;
const STAR_DUR   = 1.2;                                  // star visible for 1.2s (slowed ~20%)
const STAR_END   = STAR_DELAY + STAR_DUR;                // 1.3s

const CHAR       = 0.048;
const L1         = "Little things.";
const L2         = "Memorable moments.";
const T_L1       = STAR_END + 0.15;                     // 1.45s — line 1 start
const T_L2       = T_L1 + L1.length * CHAR + 0.18;     // 2.30s — line 2 start
const T_KO       = T_L2 + L2.length * CHAR + 0.28;     // 3.45s — korean fade
const T_BAND     = T_KO + 0.18;                         // 3.63s — band fade
// ──────────────────────────────────────────────────────────────────────────

// 10 particles evenly around a circle, each flies 22px outward
const PARTICLES = Array.from({ length: 10 }, (_, i) => {
  const rad = ((360 / 10) * i * Math.PI) / 180;
  return { x: Math.cos(rad) * 30, y: Math.sin(rad) * 30 };
});

// Inline centering helper for absolutely positioned elements
function centered(w: number, h: number) {
  return { left: "50%", top: "50%", marginLeft: -w / 2, marginTop: -h / 2 } as const;
}

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
    <section className="min-h-[calc(100dvh-4rem)] md:min-h-[calc(100vh-4rem)] bg-white flex flex-col">

      <div className="flex-1 relative flex flex-col items-center justify-center px-6 py-10 md:py-0 overflow-hidden">

        {/* ── Star intro: ring + glow + particles + star ───────── */}
        {!reduceMotion && (
          <div
            className="absolute inset-0 pointer-events-none select-none"
            aria-hidden="true"
          >
            {/* Ring — thin border circle, bursts outward */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: 102,
                height: 102,
                border: "1.5px solid rgba(255, 205, 0, 0.75)",
                ...centered(102, 102),
              }}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: [0, 0.55, 0], scale: [0.3, 1, 2.1] }}
              transition={{
                duration: 0.75,
                delay: STAR_DELAY,
                ease: "easeOut",
                times: [0, 0.2, 1],
              }}
            />

            {/* Glow — soft inner light (reduced, minimal) */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: 132,
                height: 132,
                background:
                  "radial-gradient(circle, rgba(255,205,0,0.32) 0%, rgba(255,205,0,0) 70%)",
                filter: "blur(10px)",
                ...centered(132, 132),
              }}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: [0, 0.65, 0], scale: [0.4, 1, 0.7] }}
              transition={{
                duration: 0.85,
                delay: STAR_DELAY,
                ease: "easeOut",
                times: [0, 0.25, 1],
              }}
            />

            {/* Particles — 10 dots that shoot outward */}
            {PARTICLES.map((p, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-yellow"
                style={{ width: 5, height: 5, ...centered(5, 5) }}
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                animate={{
                  opacity: [0, 0.85, 0],
                  scale:   [0, 1.1,  0.5],
                  x: p.x,
                  y: p.y,
                }}
                transition={{
                  duration: 0.72,
                  delay: STAR_DELAY + 0.12,
                  ease: "easeOut",
                  times: [0, 0.3, 1],
                }}
              />
            ))}

            {/* Star SVG — small, bright, then fade out */}
            <motion.img
              src="/trinkit-star.svg"
              alt=""
              className="absolute"
              style={{ width: 75, height: 75, ...centered(75, 75) }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{
                opacity: [0,   1,   1,   0  ],
                scale:   [0.6, 1.1, 1.0, 0.9],
              }}
              transition={{
                duration: STAR_DUR,
                delay: STAR_DELAY,
                ease: "easeOut",
                times: [0, 0.28, 0.58, 1],
              }}
            />
          </div>
        )}

        {/* ── Text ─────────────────────────────────────────────── */}
        <div className="relative z-10 text-center">
          <h1
            className="font-sans font-semibold leading-[1.1] md:leading-[0.9] text-black
                       text-[1.75rem] md:text-[clamp(2rem,5.5vw,6.5rem)] tracking-[-0.025em]"
          >
            <span className="block">
              {reduceMotion ? L1 : <Typewriter text={L1} startDelay={T_L1} />}
            </span>
            <span className="block">
              {reduceMotion ? L2 : <Typewriter text={L2} startDelay={T_L2} />}
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
            className="mt-4 md:mt-8 text-[0.95rem] md:text-[clamp(1.2rem,2.8vw,2rem)] text-black/50 leading-snug"
          >
            일상 속 작은 행복을 더하는 굿즈
          </motion.p>
        </div>
      </div>

      {/* ── Yellow band ──────────────────────────────────────────── */}
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
