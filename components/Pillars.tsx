"use client";
import React from "react";
import { motion } from "motion/react";
import { Handshake, Target, Film, BarChart3 } from "lucide-react";

const PILLARS = [
  {
    id: "talent",
    icon: Handshake,
    title: "Talent Management",
    desc: "End-to-end creator representation — commercial negotiations, contract terms, and long-term career growth handled on the talent's behalf."
  },
  {
    icon: Target,
    title: "Influencer Strategy",
    desc: "Direct access to vetted lifestyle, fashion, and tech creators across South India with zero middleman markup."
  },
  {
    id: "ugc",
    icon: Film,
    title: "UGC Studio",
    desc: "Ad-ready user generated content and authentic reel formats engineered specifically for high engagement and conversions."
  },
  {
    id: "performance",
    icon: BarChart3,
    title: "Quantified ROI Analytics",
    desc: "Transparent post-campaign reporting covering verified impressions, cost-per-view, link traffic, and audience attribution."
  }
];

export function Pillars() {
  return (
    <section id="services" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 pb-20">
      {PILLARS.map((pillar, i) => (
        <motion.div
          key={i}
          id={"id" in pillar ? pillar.id : undefined}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0, duration: 0.4, delay: i * 0.1 }}
          whileHover={{ y: -4 }}
          className="apple-glass rounded-2xl p-6 relative overflow-hidden"
        >
          <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-white mb-5">
            <pillar.icon size={20} />
          </div>
          <h3 className="text-white font-semibold text-base mb-2">{pillar.title}</h3>
          <p className="text-sm text-foreground-muted leading-relaxed">{pillar.desc}</p>
        </motion.div>
      ))}
    </section>
  );
}
