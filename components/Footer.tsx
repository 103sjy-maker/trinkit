"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white border-t border-black/[0.08] px-6 md:px-12 lg:px-16 py-12 md:py-16"
    >
      <div className="flex flex-col gap-10">

        {/* Top row — logo + brand line */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <Image
              src="/trinkit-logo.svg"
              alt="trinkit"
              width={120}
              height={27}
              className="w-[100px] md:w-[120px] mb-4"
            />
            <p className="font-light text-sm text-black/40 max-w-xs leading-relaxed">
              일상 속 작은 행복을 더하는 굿즈
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 md:gap-8">
            <a
              href="https://www.instagram.com/trinkit.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[10px] tracking-[0.2em] uppercase text-black/50 hover:text-black transition-colors duration-200"
            >
              Instagram
            </a>
            <span className="inline-flex items-center gap-2 bg-yellow px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-black/50" />
              <span className="font-sans text-[10px] tracking-[0.18em] uppercase text-black font-medium">
                Coming Soon
              </span>
            </span>
          </div>
        </div>

        {/* Bottom row — copyright */}
        <div className="border-t border-black/[0.06] pt-6">
          <p className="font-sans text-[10px] tracking-wide text-black/30">
            © 2026 trinkit. All rights reserved.
          </p>
        </div>

      </div>
    </motion.footer>
  );
}
