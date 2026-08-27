"use client";
import React from "react";
import { motion } from "motion/react";
import { Handshake, Target, Film, BarChart3, type LucideIcon } from "lucide-react";

type Chapter = {
  id?: string;
  index: string;
  icon: LucideIcon;
  eyebrow: string;
  headline: React.ReactNode;
  desc: string;
  align: "left" | "right";
};

const CHAPTERS: Chapter[] = [
  {
    id: "talent",
    index: "01",
    icon: Handshake,
    eyebrow: "Talent Management",
    headline: <>Representation that <span className="text-accent">negotiates</span>, not just introduces.</>,
    desc: "End-to-end creator representation — commercial negotiations, contract terms, and long-term career growth handled on the talent's behalf.",
    align: "left",
  },
  {
    index: "02",
    icon: Target,
    eyebrow: "Influencer Marketing",
    headline: <>Direct access, <span className="text-accent">zero</span> middleman markup.</>,
    desc: "Vetted lifestyle, fashion, and tech creators matched to your brand — no agency-of-agencies pricing, no guesswork on fit.",
    align: "right",
  },
  {
    id: "ugc",
    index: "03",
    icon: Film,
    eyebrow: "UGC & Content",
    headline: <>Ad-ready content, built for the <span className="text-accent">feed</span> it lives in.</>,
    desc: "Authentic reel formats and ad-ready UGC engineered specifically for high engagement and conversions — not repurposed brand film.",
    align: "left",
  },
  {
    id: "performance",
    index: "04",
    icon: BarChart3,
    eyebrow: "Performance & ROI",
    headline: <>Every campaign, <span className="text-accent">attributed</span>.</>,
    desc: "Transparent post-campaign reporting covering verified impressions, cost-per-view, link traffic, and audience attribution — no vanity metrics.",
    align: "right",
  },
];

function ChapterRow({ chapter, index }: { chapter: Chapter; index: number }) {
  const textFirst = chapter.align === "left";

  const text = (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ type: "spring", bounce: 0, duration: 0.5 }}
      className="relative z-10 max-w-xl"
    >
      <p className="eyebrow-text text-foreground-muted">{chapter.eyebrow}</p>
      <h3 className="display-title-sm mt-4 text-white">{chapter.headline}</h3>
      <p className="body-text mt-5 text-[15px] text-foreground-muted leading-relaxed sm:text-base">
        {chapter.desc}
      </p>
    </motion.div>
  );

  const visual = (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 0.1 }}
      className="relative flex items-center justify-center"
    >
      <div
        className="absolute h-56 w-56 rounded-full blur-2xl"
        style={{ background: "var(--accent-glow)" }}
        aria-hidden="true"
      />
      <div className="apple-glass relative flex h-40 w-40 items-center justify-center rounded-[2rem] sm:h-48 sm:w-48">
        <chapter.icon size={40} className="text-accent" strokeWidth={1.5} />
      </div>
    </motion.div>
  );

  return (
    <div
      id={chapter.id}
      className={`relative overflow-hidden px-6 py-20 sm:py-28 ${index % 2 === 1 ? "surface-elevated" : ""}`}
    >
      {/* Oversized faint chapter number — decorative pacing marker, not content. */}
      <span
        className="chapter-index pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 select-none sm:left-6 sm:translate-x-0"
        aria-hidden="true"
      >
        {chapter.index}
      </span>

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 sm:gap-16 md:flex-row md:items-center md:justify-between">
        {textFirst ? (
          <>
            {text}
            {visual}
          </>
        ) : (
          <>
            <div className="order-2 md:order-1">{visual}</div>
            <div className="order-1 md:order-2">{text}</div>
          </>
        )}
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" aria-label="Services">
      <div className="px-6 pt-6 pb-12 text-center">
        <p className="eyebrow-text text-foreground-muted">What We Do</p>
        <h2 className="display-title-sm mt-3 text-white">Four disciplines, one accountable team.</h2>
      </div>

      {CHAPTERS.map((chapter, i) => (
        <ChapterRow key={chapter.eyebrow} chapter={chapter} index={i} />
      ))}
    </section>
  );
}
