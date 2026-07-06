"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "@/components/Logo";

export default function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 h-16 bg-white border-b border-black/[0.07] flex items-center justify-between px-6 md:px-12 lg:px-16"
    >
      <Link href="/" aria-label="trinkit">
        <Logo width={110} />
      </Link>

      <div className="flex items-center gap-3 md:gap-7">
        {/* Hidden on mobile — not enough space at 375px */}
        <a
          href="https://www.instagram.com/trinkit.kr"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block font-sans text-[10px] tracking-[0.2em] uppercase text-black/50 hover:text-black transition-colors duration-200"
        >
          Instagram
        </a>

        {/* Coming soon badge — whitespace-nowrap prevents wrapping */}
        <span className="inline-flex items-center gap-1.5 bg-yellow px-2.5 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-black/50 shrink-0" />
          <span className="font-sans text-[9px] md:text-[10px] tracking-[0.12em] md:tracking-[0.18em] uppercase text-black font-medium whitespace-nowrap">
            Coming Soon
          </span>
        </span>
      </div>
    </motion.header>
  );
}
