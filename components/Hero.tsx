"use client";
import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import dynamic from "next/dynamic";

// Lazy-loaded, client-only, and never blocks Hero's initial paint — this is a
// purely decorative, ambient background layer (see HeroBackground.tsx).
const HeroBackground = dynamic(() => import("./HeroBackground"), {
  ssr: false,
  loading: () => null,
});

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative text-center pt-24 pb-20 max-w-4xl mx-auto">
      <HeroBackground />

      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0, duration: 0.5 }}
      >
        {/* Service Badge */}
        <div className="inline-flex items-center gap-2 apple-glass px-4 py-1.5 rounded-full text-xs font-medium text-foreground-muted mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          <span>Influencer Marketing • Talent Management • UGC Studio</span>
        </div>

        {/* Display Headline */}
        <h1 className="display-title font-semibold text-white">
          <span className="text-foreground-muted">Creator marketing,</span> <br />
          engineered for brand growth.
        </h1>

        {/* Subhead with UGC and Influencer Agency Positioning */}
        <p className="body-text text-base md:text-lg text-foreground-muted max-w-2xl mx-auto mt-6 leading-relaxed">
          Decibel is a dedicated creator marketing and talent agency. We engineer high-converting creator campaigns, authentic UGC production, and verified performance attribution for modern brands.
        </p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        className="mt-10 flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.4 }}
      >
        <motion.a
          href="mailto:sheik@decibel.co"
          whileTap={{ scale: 0.96 }}
          className="bg-white text-black font-medium text-sm px-6 py-3 rounded-full flex items-center gap-2 shadow-lg hover:bg-[#e8e8ed] transition-colors"
        >
          Book a Strategy Call <ArrowUpRight size={16} />
        </motion.a>

        <motion.a
          href="https://wa.me/916369411388"
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.96 }}
          className="apple-glass text-white font-medium text-sm px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/10 transition-colors"
        >
          <MessageCircle size={16} />
          Chat on WhatsApp
        </motion.a>
      </motion.div>
    </section>
  );
}
