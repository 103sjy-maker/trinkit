"use client";

import { motion, useReducedMotion } from "framer-motion";

// ── timing constants ───────────────────────────────────────────────────────
const CHAR_EN = 0.045; // seconds per English char
const CHAR_KO = 0.035; // seconds per Korean char
const START   = 0.2;   // initial delay before first char
const GAP     = 0.2;   // pause between lines

const L1  = "Little things.";
const L2  = "Memorable";
const L3  = "moments.";
const KO1 = "일상 속 작은 행복을 만드는";
const KO2 = " 굿즈 브랜드, Trinkit.";

const t1    = START;
const t2    = t1  + L1.length  * CHAR_EN + GAP;
const t3    = t2  + L2.length  * CHAR_EN;           // no gap between L2→L3
const t4    = t3  + L3.length  * CHAR_EN + GAP;
const t5    = t4  + KO1.length * CHAR_KO;
const tStar = t5  + KO2.length * CHAR_KO + 0.15;
const tBand = tStar + 0.25;
// ──────────────────────────────────────────────────────────────────────────

function Typewriter({
  text,
  startDelay,
  charDelay,
}: {
  text: string;
  startDelay: number;
  charDelay: number;
}) {
  return (
    <>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.001, delay: startDelay + i * charDelay, ease: "linear" }}
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
    <section className="md:min-h-[calc(100vh-4rem)] bg-white flex flex-col">

      {/* Content area */}
      <div className="flex-1 flex flex-col px-6 md:px-12 lg:px-16 pt-10 md:pt-18 lg:pt-24">

        {/* Headline */}
        <h1
          className="font-semibold leading-[0.88] text-black"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="block text-[clamp(3rem,8vw,10rem)] tracking-[-0.025em]">
            {reduceMotion
              ? L1
              : <Typewriter text={L1} startDelay={t1} charDelay={CHAR_EN} />}
          </span>
          <span className="block text-[clamp(3rem,8vw,10rem)] tracking-[-0.025em]">
            {reduceMotion
              ? L2
              : <Typewriter text={L2} startDelay={t2} charDelay={CHAR_EN} />}
          </span>
          <span className="block text-[clamp(3rem,8vw,10rem)] tracking-[-0.025em]">
            {reduceMotion
              ? L3
              : <Typewriter text={L3} startDelay={t3} charDelay={CHAR_EN} />}
            <motion.span
              className="text-yellow"
              style={{ fontSize: "0.28em", verticalAlign: "super", marginLeft: "0.12em", display: "inline-block" }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={reduceMotion
                ? { opacity: 1, scale: 1 }
                : { opacity: [0, 1, 1], scale: [0.6, 1.2, 1] }}
              transition={reduceMotion
                ? { duration: 0 }
                : { duration: 0.35, ease: "easeOut", delay: tStar, times: [0, 0.6, 1] }}
              aria-hidden="true"
            >
              ✳
            </motion.span>
          </span>
        </h1>

        {/* Korean sub-copy */}
        <p className="mt-8 md:mt-11 font-sans text-base md:text-lg text-black/50 leading-relaxed tracking-tight">
          {reduceMotion ? (
            <>일상 속 작은 행복을 만드는<br className="sm:hidden" />{" "}굿즈 브랜드, Trinkit.</>
          ) : (
            <>
              <Typewriter text={KO1} startDelay={t4} charDelay={CHAR_KO} />
              <br className="sm:hidden" />
              <Typewriter text={KO2} startDelay={t5} charDelay={CHAR_KO} />
            </>
          )}
        </p>

        {/* Spacer: fixed on mobile, flex-grow on desktop */}
        <div className="h-12 md:flex-1 md:min-h-[48px]" />
      </div>

      {/* Yellow band — full-width, anchors the first screen */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: reduceMotion ? 0.5 : tBand }}
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
