"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.4 },
  },
};

const line: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen bg-ivory overflow-hidden flex flex-col"
    >
      {/* Top accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
        className="absolute top-0 left-0 right-0 h-px bg-amber origin-left"
      />

      {/* Parallax content wrapper */}
      <motion.div
        style={{ y, opacity }}
        className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-20 pt-24 pb-20"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-6xl"
        >
          {/* Eyebrow label */}
          <motion.p
            variants={fade}
            className="font-sans text-[10px] tracking-[0.35em] uppercase text-stone mb-14"
          >
            Premium Lifestyle Goods
          </motion.p>

          {/* Main display headline */}
          <h1 className="font-serif font-light leading-[0.88] text-charcoal">
            <motion.span
              variants={line}
              className="block text-[clamp(4rem,11vw,11rem)] tracking-[-0.02em]"
            >
              Little things.
            </motion.span>
            <motion.span
              variants={line}
              className="block text-[clamp(4rem,11vw,11rem)] tracking-[-0.02em] italic text-charcoal/90"
            >
              Memorable
            </motion.span>
            <motion.span
              variants={line}
              className="block text-[clamp(4rem,11vw,11rem)] tracking-[-0.02em]"
            >
              moments.
            </motion.span>
          </h1>

          {/* Korean subtitle */}
          <motion.p
            variants={line}
            className="font-sans font-light text-sm md:text-base text-stone mt-10 mb-14 tracking-wide"
          >
            일상의 작은 행복을 더하는 굿즈
          </motion.p>

          {/* CTA */}
          <motion.div variants={line}>
            <a
              href="#collection"
              className="group inline-flex items-center gap-5 font-sans text-[10px] tracking-[0.25em] uppercase text-charcoal"
            >
              <span>Explore the Collection</span>
              <span className="h-px bg-charcoal w-10 group-hover:w-20 transition-all duration-600 ease-out" />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Faint watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1.5 }}
        className="absolute bottom-8 right-8 md:right-16 lg:right-20 pointer-events-none select-none"
      >
        <span className="font-serif font-light text-[clamp(5rem,12vw,12rem)] leading-none text-charcoal/[0.035] tracking-widest">
          trinket
        </span>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-stone/50">
          Scroll
        </span>
        <motion.div
          className="w-px h-8 bg-stone/30 origin-top"
          animate={{ scaleY: [1, 1.6, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
