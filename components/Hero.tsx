"use client";
import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const CAPABILITIES = ["Talent Management", "Influencer Marketing", "UGC Studio", "ROI Attribution"];

export function Hero() {
  // See hooks/usePrefersReducedMotion.ts — motion/react's own
  // useReducedMotion() can resolve to the client's true value before
  // hydration reconciles, which throws a real hydration-mismatch error the
  // moment it's fed into an `initial` value like this one.
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="text-center pt-28 pb-24 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0, duration: 0.5 }}
      >
        {/* Eyebrow */}
        <p className="eyebrow-text text-foreground-muted mb-6">
          Creator Marketing &amp; Talent Management — Bengaluru
        </p>

        {/* Display Headline — states what Decibel is and what makes it
            different in two short clauses, one accent word doing the work. */}
        <h1 className="display-title font-semibold text-white">
          <span className="text-foreground-muted">Creators, managed.</span> <br />
          Campaigns, <span className="text-accent">measured</span>.
        </h1>

        {/* Subhead */}
        <p className="body-text text-base md:text-lg text-foreground-muted max-w-2xl mx-auto mt-6 leading-relaxed">
          Decibel represents creators and runs the campaigns built around them —
          from talent negotiation to UGC production to verified attribution,
          under one roof.
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

      {/* Capability strip — states the full scope in one glance, no paragraph required. */}
      <motion.div
        className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {CAPABILITIES.map((label, i) => (
          <React.Fragment key={label}>
            {i > 0 && <span className="hidden h-1 w-1 rounded-full bg-foreground-muted/40 sm:block" aria-hidden="true" />}
            <span className="eyebrow-text text-foreground-muted/80">{label}</span>
          </React.Fragment>
        ))}
      </motion.div>
    </section>
  );
}
