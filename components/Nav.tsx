"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const links = ["About", "Collection", "Story", "Contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 lg:px-20 py-6 transition-all duration-700 ${
        scrolled
          ? "bg-ivory/90 backdrop-blur-lg border-b border-charcoal/[0.06]"
          : "bg-transparent"
      }`}
    >
      <Link
        href="/"
        className="font-serif text-xl font-light tracking-[0.25em] text-charcoal hover:text-stone transition-colors duration-500"
      >
        trinket
      </Link>

      <div className="hidden md:flex items-center gap-10">
        {links.map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="group relative font-sans text-[10px] tracking-[0.2em] uppercase text-stone hover:text-charcoal transition-colors duration-400"
          >
            {item}
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-amber group-hover:w-full transition-all duration-500 ease-out" />
          </Link>
        ))}
      </div>

      {/* Mobile menu icon */}
      <button className="md:hidden flex flex-col gap-1.5 p-1" aria-label="Menu">
        <span className="w-5 h-px bg-charcoal block" />
        <span className="w-3 h-px bg-charcoal block" />
      </button>
    </motion.nav>
  );
}
