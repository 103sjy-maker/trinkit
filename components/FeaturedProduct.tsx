"use client";

import { motion } from "framer-motion";

export default function FeaturedProduct() {
  return (
    <section id="collection" className="bg-cream py-36 md:py-48">
      {/* Section header */}
      <div className="px-8 md:px-16 lg:px-20 mb-20 md:mb-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex items-center gap-6"
        >
          <div className="w-8 h-px bg-stone/40" />
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-stone">
            Featured Collection
          </p>
        </motion.div>
      </div>

      {/* Product layout */}
      <div className="px-8 md:px-16 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Product visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative aspect-square group cursor-pointer"
          >
            <div className="w-full h-full bg-ivory overflow-hidden transition-transform duration-700 group-hover:scale-[0.99]">
              {/* Abstract product placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full border border-charcoal/10" />
                  <div className="absolute inset-4 rounded-full border border-amber/30" />
                  <div className="absolute inset-8 rounded-full bg-amber/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-amber/60" />
                  </div>
                </div>
              </div>
              {/* Corner label */}
              <div className="absolute top-6 left-6">
                <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-stone/50">
                  No. 01
                </p>
              </div>
            </div>
            {/* Hover overlay line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </motion.div>

          {/* Product copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            className="space-y-0"
          >
            <div className="mb-8">
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-stone mb-5">
                New Arrival
              </p>
              <h3 className="font-serif font-light text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] tracking-[-0.01em] text-charcoal">
                The Daily<br />
                <em>Companion</em>
              </h3>
            </div>

            <div className="w-8 h-px bg-amber mb-8" />

            <p className="font-sans font-light text-sm leading-[1.9] text-stone max-w-xs mb-4">
              Designed for the pause between moments.
              Crafted to make that pause worth keeping.
            </p>
            <p className="font-sans font-light text-sm leading-[1.9] text-stone max-w-xs">
              Warm matte finish. Minimal in form.
              Generous in feeling.
            </p>

            {/* Material spec */}
            <div className="pt-10 pb-6 flex gap-8 border-y border-charcoal/10 mt-10">
              {[
                { label: "Material", value: "Porcelain" },
                { label: "Origin", value: "Seoul" },
                { label: "Weight", value: "220g" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-stone/60 mb-1">
                    {label}
                  </p>
                  <p className="font-sans text-xs text-charcoal font-light">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <button className="group inline-flex items-center gap-5 font-sans text-[10px] tracking-[0.25em] uppercase text-charcoal">
                <span>Discover More</span>
                <span className="h-px bg-charcoal w-8 group-hover:w-16 transition-all duration-500 ease-out" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full-width editorial strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
        className="mt-28 md:mt-36 overflow-hidden border-y border-charcoal/10 py-6"
      >
        <div className="flex whitespace-nowrap animate-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="font-serif italic text-2xl text-charcoal/20 mx-10 shrink-0"
            >
              Little things. Memorable moments.
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
