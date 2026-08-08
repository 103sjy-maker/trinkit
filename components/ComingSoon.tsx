"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ComingSoon() {
  return (
    <section
      id="product"
      className="bg-white border-t border-black/[0.08] px-6 md:px-12 lg:px-16 py-24 md:py-36"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row md:items-center gap-12 md:gap-16 lg:gap-20"
      >

        {/* Image — left on desktop, top on mobile */}
        <div className="w-full md:w-[55%] shrink-0 md:flex md:justify-center">
          <Image
            src="/image/first-trinkit-soju-glass.jpg"
            alt="첫 번째 트링킷 소주잔"
            width={900}
            height={900}
            className="w-full h-auto object-contain md:w-auto md:max-w-[220px]"
            priority
          />
        </div>

        {/* Text — right on desktop, bottom on mobile */}
        <div className="w-full md:w-[45%]">

          {/* Label */}
          <div className="mb-10 md:mb-14">
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-black/35">
              First Trinkit
            </span>
          </div>

          {/* Section heading */}
          <h2
            className="font-semibold leading-[1.1] text-black mb-8 md:mb-10 text-[clamp(2rem,4.5vw,3.5rem)] tracking-[-0.01em]"
          >
            첫 번째 트링킷은<br />소주잔입니다.
          </h2>

          {/* Supporting copy */}
          <p className="font-light text-sm md:text-base text-black/45 leading-relaxed mb-10 md:mb-12 max-w-xs md:max-w-sm">
            차가운 술을 만나면 볼이 빨개지는<br />꿈돌이 꿈순이 소주잔을 곧 만나보세요.
          </p>

          {/* CTA */}
          <a
            href="https://instagram.com/trinkit.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-black px-5 py-3 font-sans text-[11px] tracking-[0.18em] uppercase text-black hover:bg-yellow hover:border-yellow transition-colors duration-200"
          >
            @trinkit.kr 팔로우하기
          </a>

        </div>
      </motion.div>
    </section>
  );
}
