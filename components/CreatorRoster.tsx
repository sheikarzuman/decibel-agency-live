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

export function CreatorRoster() {
  return (
    <section id="roster" className="pt-8 pb-20 max-w-5xl mx-auto px-4">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-widest text-neutral-400 font-medium">
          Talent Roster
        </span>
        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-2 tracking-tight">
          Exclusively managed & represented creators.
        </h2>
      </div>

      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {CREATORS.map((creator, i) => (
          <motion.div
            key={creator.handle}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0, duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="apple-glass rounded-2xl p-4 flex flex-col justify-between group overflow-hidden"
          >
            <div>
              {/* Creator Image Card */}
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden mb-4 bg-neutral-900 border border-white/10">
                <Image
                  src={creator.image}
                  alt={creator.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  priority={i === 0}
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-medium text-white border border-white/10 tracking-wide uppercase">
                  {creator.location}
                </div>
              </div>

              {/* Creator Info */}
              <h3 className="text-lg font-semibold text-white tracking-tight">{creator.name}</h3>
              <p className="text-xs font-medium text-neutral-400 mt-0.5">{creator.category}</p>
              <p className="text-xs text-[#8e8e93] mt-3 leading-relaxed">{creator.bio}</p>
            </div>

            {/* Actions */}
            <div className="mt-5 pt-3.5 border-t border-white/5 flex items-center justify-between">
              <motion.a
                href={creator.url}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:text-neutral-300 transition-colors"
              >
                <InstagramIcon size={14} />
                <span>{creator.handle}</span>
                <ArrowUpRight size={13} className="text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>

              <a
                href={`https://wa.me/916369411388?text=Hi%20Decibel%2C%20we%20want%20to%20collaborate%20with%20${encodeURIComponent(creator.name)}%20(${encodeURIComponent(creator.handle)})`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-semibold text-black bg-white px-3.5 py-1.5 rounded-full hover:bg-neutral-200 transition-colors"
              >
                Book
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
