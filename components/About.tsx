"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-white py-36 md:py-48 px-8 md:px-16 lg:px-20 border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-0 items-center">

        {/* Left: text */}
        <div className="md:col-span-5 md:col-start-1">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-sans text-[10px] tracking-[0.35em] uppercase text-black/40 mb-10"
          >
            Our Philosophy
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            className="font-serif font-light text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.01em] text-black mb-8"
          >
            The beauty<br />
            of small<br />
            things
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-10 h-px bg-yellow mb-10 origin-left"
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="space-y-5"
          >
            <p className="font-sans font-light text-sm leading-[1.9] text-black/40 max-w-sm">
              We believe the most meaningful experiences come from the smallest details.
              A perfectly weighted pen. A mug that warms your hands just right.
              Objects that don&apos;t just function — they feel.
            </p>
            <p className="font-sans font-light text-sm leading-[1.9] text-black/40 max-w-sm">
              trinkit was born from a simple conviction: everyday objects deserve
              to be beautiful, and beauty deserves to be everyday.
            </p>
          </motion.div>
        </div>

        {/* Right: visual */}
        <div className="md:col-span-6 md:col-start-7 relative">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
            className="relative aspect-[4/5] bg-light overflow-hidden"
          >
            {/* Abstract shape inside image placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-56 rounded-full bg-yellow/10 blur-2xl" />
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <p className="font-semibold text-2xl text-black/15 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                &ldquo;Things worth keeping.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Offset accent square */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.35 }}
            className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow/15"
          />

          {/* Floating label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
            className="absolute -top-5 -right-4 md:-right-8 bg-white border border-black/10 px-4 py-3"
          >
            <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-black/40">
              Est. 2024
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
