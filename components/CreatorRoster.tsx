"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

// lucide-react dropped brand/logo icons (incl. Instagram) — inline glyph instead,
// matching the same stroke-based style as the rest of the icon set.
function InstagramIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const CREATORS = [
  {
    name: "Gagana",
    handle: "@gagana._xo",
    image: "/gagana.jpg",
    url: "https://www.instagram.com/gagana._xo/",
    category: "Fashion • Lifestyle • Beauty",
    location: "Hyderabad",
    bio: "Curating high-aesthetic fashion, everyday style essentials, and authentic lifestyle storytelling for contemporary consumer brands."
  },
  {
    name: "Juhi Murugeshan",
    handle: "@juhi.murugeshan",
    image: "/juhi.jpg",
    url: "https://www.instagram.com/juhi.murugeshan/",
    category: "Lifestyle • Creator • Visuals",
    location: "Pune",
    bio: "Creating visually engaging lifestyle content, aesthetic brand showcases, and high-retention creator formats for modern audiences."
  },
  {
    name: "Rishi",
    handle: "@ii_imrishi_.xo",
    image: "/rishi.jpg",
    url: "https://www.instagram.com/ii_imrishi_.xo",
    category: "Fashion • Lifestyle • Visuals",
    location: "Coimbatore",
    bio: "Creating high-impact fashion edits, everyday aesthetic style, and engaging lifestyle storytelling for forward-thinking brands."
  }
];

// Slight vertical stagger per card — an asymmetric rhythm instead of a flat,
// database-like grid. Purely decorative; wraps if there are ever more cards.
const OFFSET_CLASSES = ["sm:mt-0", "sm:mt-10", "sm:mt-3"];

function CreatorCard({ creator, index }: { creator: (typeof CREATORS)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ type: "spring", bounce: 0, duration: 0.5, delay: index * 0.06 }}
      className={`group relative w-[76vw] shrink-0 snap-start sm:w-[320px] ${OFFSET_CLASSES[index % OFFSET_CLASSES.length]}`}
    >
      <div className="apple-glass flex flex-col overflow-hidden rounded-3xl">
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-900">
          <Image
            src={creator.image}
            alt={creator.name}
            fill
            sizes="(max-width: 640px) 76vw, 320px"
            priority={index === 0}
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          />
          {/* Editorial name treatment — set directly into the image via a
              gradient, not a separate caption block underneath it. */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent px-5 pb-5 pt-16">
            <p className="eyebrow-text text-white/70">{creator.location}</p>
            <h3 className="mt-1 text-2xl font-semibold tracking-tight text-white">{creator.name}</h3>
            <p className="mt-1 text-xs font-medium text-white/70">{creator.category}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-5">
          <p className="text-[13px] leading-relaxed text-foreground-muted">{creator.bio}</p>

          <div className="flex items-center justify-between border-t border-white/5 pt-4">
            <motion.a
              href={creator.url}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-white transition-colors hover:text-foreground-muted"
            >
              <InstagramIcon size={14} />
              <span>{creator.handle}</span>
              <ArrowUpRight size={13} className="text-foreground-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>

            <motion.a
              href={`https://wa.me/916369411388?text=Hi%20Decibel%2C%20we%20want%20to%20collaborate%20with%20${encodeURIComponent(creator.name)}%20(${encodeURIComponent(creator.handle)})`}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.96 }}
              className="rounded-full bg-white px-3.5 py-1.5 text-[11px] font-semibold text-black transition-colors hover:bg-[#e8e8ed]"
            >
              Book
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function CreatorRoster() {
  return (
    <section id="roster" className="pt-8 pb-24 sm:pb-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="eyebrow-text text-foreground-muted">Talent Roster</p>
        <h2 className="display-title-sm mt-3 text-white">Creators, not database records.</h2>
        <p className="body-text mx-auto mt-4 max-w-xl text-[15px] text-foreground-muted">
          A small, deliberately curated roster — every creator here is exclusively represented, not one of thousands in a spreadsheet.
        </p>
      </div>

      {/* Horizontal editorial gallery — scroll-snapped, full-bleed to the
          viewport edge, wide enough on desktop to feel like flipping through
          a lookbook rather than scanning a grid. */}
      <div className="hide-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 sm:justify-center">
        {CREATORS.map((creator, i) => (
          <CreatorCard key={creator.handle} creator={creator} index={i} />
        ))}
      </div>
    </section>
  );
}
