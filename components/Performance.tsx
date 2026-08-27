"use client";
import React from "react";
import { motion } from "motion/react";

const METRICS = [
  {
    name: "Reach",
    desc: "Unique audience size across every creator activated on a campaign, deduplicated across platforms.",
  },
  {
    name: "Impressions",
    desc: "Total content views, tracked per post and per creator, not rolled up into a single vague figure.",
  },
  {
    name: "Engagement",
    desc: "Likes, comments, saves, and shares weighted by relevance to the campaign objective — not raw volume.",
  },
  {
    name: "Cost-per-view",
    desc: "Spend divided by verified views, benchmarked against the tier and category of each creator.",
  },
  {
    name: "Attribution",
    desc: "Link clicks, promo-code redemptions, and store visits traced back to the specific creator and post.",
  },
  {
    name: "ROI",
    desc: "Campaign outcome measured against spend — reported in the same language your finance team already uses.",
  },
];

export function Performance() {
  return (
    <section id="performance-data" className="surface-elevated px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-text text-foreground-muted">Performance &amp; Attribution</p>
          <h2 className="display-title-sm mt-3 text-white">
            Reported like <span className="text-accent">media spend</span>, not influencer folklore.
          </h2>
          <p className="body-text mt-4 text-[15px] text-foreground-muted">
            Every campaign closes with a report built on these six numbers —
            not a screenshot of good comments.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
          {METRICS.map((metric, i) => (
            <motion.div
              key={metric.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4, delay: (i % 3) * 0.07 }}
              className="border-t border-white/[0.07] py-7"
            >
              <span className="eyebrow-text text-accent/80">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-xl font-semibold text-white">{metric.name}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-foreground-muted">{metric.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
