"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

const MotionLink = motion.create(Link);

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8);
  });

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", bounce: 0, duration: 0.4 }}
      className="fixed top-4 inset-x-0 max-w-4xl mx-auto z-50 px-4"
    >
      <nav
        className={`rounded-full px-6 py-3.5 flex items-center justify-between transition-all duration-200 ${
          scrolled ? "apple-glass-strong shadow-2xl" : "apple-glass shadow-lg"
        }`}
      >
        <a href="#" className="flex items-center">
          <div className="bg-white h-7.5 w-24 rounded-full flex items-center justify-center overflow-hidden px-1.5 shadow-sm">
            <Image
              src="/logo.png"
              alt="DECIBEL"
              width={180}
              height={45}
              priority
              className="scale-[2.1] object-contain select-none pointer-events-none"
            />
          </div>
        </a>

        <div className="hidden md:flex items-center gap-6 text-xs tracking-wider uppercase text-foreground-muted">
          <a href="#roster" className="hover:text-white transition-colors duration-150">Roster</a>
          <a href="#ugc" className="hover:text-white transition-colors duration-150">UGC Studio</a>
          <a href="#performance" className="hover:text-white transition-colors duration-150">ROI Analytics</a>
          <a href="#about" className="hover:text-white transition-colors duration-150">Leadership</a>
        </div>

        <MotionLink
          href="/contact"
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.2 }}
          className="bg-white text-black font-semibold text-xs px-4 py-2 rounded-full hover:bg-[#e8e8ed]"
        >
          Book a Call
        </MotionLink>
      </nav>
    </motion.header>
  );
}
