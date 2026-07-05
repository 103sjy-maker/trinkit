"use client";

import { motion } from "framer-motion";

const cells = [
  { tone: "bg-light", label: "Morning ritual", shape: "circle" },
  { tone: "bg-yellow/15", label: "Detail", shape: "line" },
  { tone: "bg-black/[0.04]", label: "Texture", shape: "square" },
  { tone: "bg-light", label: "Still life", shape: "circle" },
  { tone: "bg-yellow/10", label: "Daily carry", shape: "line" },
  { tone: "bg-white border border-black/10", label: "Form", shape: "square" },
];

export default function Instagram() {
  return (
    <section id="story" className="bg-white py-36 md:py-48 px-8 md:px-16 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <h2 className="font-serif font-light text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] tracking-[-0.01em] text-black">
            A daily collection<br />
            of small moments
          </h2>
          <div className="text-left md:text-right">
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-black/40 mb-1">
              Follow along
            </p>
            <a
              href="#"
              className="group inline-flex items-center gap-3 font-sans text-xs text-black"
            >
              <span>@trinkit</span>
              <span className="w-0 h-px bg-black group-hover:w-8 transition-all duration-500" />
            </a>
          </div>
        </motion.div>

        {/* Grid: 2 cols mobile, 3 cols desktop — all square */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {cells.map((cell, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: i * 0.08,
              }}
              className={`${cell.tone} aspect-square group relative overflow-hidden cursor-pointer`}
            >
              {/* Hover tint */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.04] transition-colors duration-500" />

              {/* Abstract shape placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                {cell.shape === "circle" && (
                  <div className="w-14 h-14 rounded-full border border-black/10 group-hover:border-black/20 transition-colors duration-500" />
                )}
                {cell.shape === "line" && (
                  <div className="w-20 h-px bg-yellow/50 group-hover:w-28 transition-all duration-500" />
                )}
                {cell.shape === "square" && (
                  <div className="w-10 h-10 bg-black/[0.05] group-hover:bg-black/[0.08] transition-colors duration-500" />
                )}
              </div>

              {/* Label on hover */}
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-black/40">
                  {cell.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-10 text-center font-sans text-[10px] tracking-[0.25em] uppercase text-black/40/50"
        >
          Real objects. Real moments.
        </motion.p>
      </div>
    </section>
  );
}
