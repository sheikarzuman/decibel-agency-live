"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X } from "lucide-react";

const MotionLink = motion.create(Link);

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#roster", label: "Talent" },
  { href: "#performance-data", label: "Performance" },
  { href: "#about", label: "About" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white transition-colors duration-150">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <MotionLink
            href="/contact"
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.2 }}
            className="bg-white text-black font-semibold text-xs px-4 py-2 rounded-full hover:bg-[#e8e8ed]"
          >
            Book a Call
          </MotionLink>

          {/* Mobile menu toggle — the four section links have no other way
              to reach a visitor on a narrow viewport once they're hidden above. */}
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="flex h-8 w-8 items-center justify-center rounded-full text-white md:hidden"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
            className="apple-glass-strong mt-2 flex flex-col gap-1 rounded-3xl p-2 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm text-foreground-muted transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
