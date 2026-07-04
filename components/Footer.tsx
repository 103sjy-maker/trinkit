"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const nav = ["About", "Collection", "Story", "Contact"];
const social = ["Instagram", "Newsletter"];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      {/* Main footer */}
      <div className="px-8 md:px-16 lg:px-20 pt-20 pb-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-0"
        >
          {/* Brand */}
          <div className="md:col-span-5">
            <p className="font-serif font-light text-3xl tracking-[0.25em] text-ivory mb-4">
              trinket
            </p>
            <p className="font-sans font-light text-sm text-ivory/40 leading-loose mb-6 max-w-xs">
              일상의 작은 행복을 더하는 굿즈.<br />
              Small things that make everyday life more beautiful.
            </p>
            <div className="flex gap-4">
              {social.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-sans text-[9px] tracking-[0.25em] uppercase text-ivory/30 hover:text-ivory/70 transition-colors duration-400 border border-ivory/10 hover:border-ivory/30 px-3 py-2"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-3" />

          {/* Nav */}
          <div className="md:col-span-2">
            <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-ivory/25 mb-6">
              Navigate
            </p>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="font-sans font-light text-xs text-ivory/50 hover:text-ivory transition-colors duration-400 tracking-wide"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-ivory/25 mb-6">
              Contact
            </p>
            <ul className="space-y-3">
              {["hello@trinket.kr", "Press & Media", "Wholesale"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-sans font-light text-xs text-ivory/50 hover:text-ivory transition-colors duration-400 tracking-wide"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ivory/[0.06] px-8 md:px-16 lg:px-20 py-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="font-sans text-[10px] text-ivory/25 tracking-wide">
            © 2026 trinket. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["Privacy", "Terms"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-sans text-[10px] text-ivory/25 hover:text-ivory/50 transition-colors duration-400 tracking-wide"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
