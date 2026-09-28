"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface Brand {
  name: string;
  // Omitted when no official asset exists — falls back to a plain text
  // wordmark instead of an invented logo.
  logo?: string;
}

// Order is the source of truth for display order — reorder or extend this
// array only, the grid and reveal below are fully data-driven.
const BRANDS: Brand[] = [
  { name: "Spotify", logo: "/spotify-logo.webp" },
  { name: "Uber", logo: "/uber-logo.webp" },
  { name: "Samsung", logo: "/samsung-logo.png" },
  { name: "Amazon", logo: "/amazon-logo.jpg" },
  { name: "Skin Inspired", logo: "/skin-inspired-logo.jpeg" },
  { name: "POP Club" },
];

// Scroll-reveal tuning, isolated here so direction/timing can be swapped
// later without touching the grid markup below.
const REVEAL_Y = 18;
const REVEAL_DURATION = 0.45;
const REVEAL_STAGGER = 0.06;

function BrandTile({ brand, index }: { brand: Brand; index: number }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.li
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : REVEAL_Y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        type: "spring",
        bounce: 0,
        duration: REVEAL_DURATION,
        delay: prefersReducedMotion ? 0 : index * REVEAL_STAGGER,
      }}
      className="apple-glass group flex items-center justify-center rounded-3xl p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6"
    >
      {/* Source logos vary wildly in native background (some ship on white,
          some on black) — a uniform white chip, the same treatment Navbar.tsx
          already uses for the Decibel wordmark, normalizes all of them into
          one consistent "logo wall" tile instead of branching per-asset. */}
      <div className="flex h-16 w-full items-center justify-center overflow-hidden rounded-2xl bg-white px-5 transition-transform duration-300 group-hover:scale-[1.03] sm:h-20 sm:px-6">
        {brand.logo ? (
          <div className="relative h-9 w-full sm:h-11">
            <Image
              src={brand.logo}
              alt={`${brand.name} logo`}
              fill
              sizes="(max-width: 640px) 40vw, 220px"
              className="object-contain"
            />
          </div>
        ) : (
          <span className="text-lg font-bold tracking-tight text-black sm:text-xl">
            {brand.name}
          </span>
        )}
      </div>
    </motion.li>
  );
}

export function BrandRoster() {
  return (
    <section id="brands" aria-label="Brands" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-text text-foreground-muted">Brand Partnerships</p>
          <h2 className="display-title-sm mt-3 text-white">Brands we&apos;ve actually worked with.</h2>
          <p className="body-text mx-auto mt-4 max-w-xl text-[15px] text-foreground-muted">
            A short list, kept honest — every name below is a real campaign, not a wishlist.
          </p>
        </div>

        <ul role="list" className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {BRANDS.map((brand, i) => (
            <BrandTile key={brand.name} brand={brand} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
