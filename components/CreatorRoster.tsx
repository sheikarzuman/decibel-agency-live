"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

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

// Critically damped default — smooth settle, no overshoot.
const springSettle = { type: "spring", bounce: 0, duration: 0.4 } as const;
// Slight bounce reserved for the interactive tap itself.
const springTap = { type: "spring", bounce: 0.2, duration: 0.25 } as const;

type Creator = {
  name: string;
  handle: string;
  location: string;
  category?: string;
  photo: string;
  instagram: string;
  whatsapp: string;
};

function bookingLink(name: string, handle: string) {
  return (
    "https://wa.me/916369411388?text=" +
    encodeURIComponent(`Hi Decibel Team, I'd like to book ${name} (${handle}) for a campaign.`)
  );
}

const CREATORS: Creator[] = [
  {
    name: "Gagana",
    handle: "@gagana._xo",
    location: "Hyderabad, India",
    photo: "/gagana.jpg",
    instagram: "https://www.instagram.com/gagana._xo/",
    whatsapp: bookingLink("Gagana", "@gagana._xo"),
  },
  {
    name: "Juhi Murugeshan",
    handle: "@juhi.murugeshan",
    location: "Pune, India",
    category: "Lifestyle • Creator • Visuals",
    photo: "/juhi.jpg",
    instagram: "https://www.instagram.com/juhi.murugeshan/",
    whatsapp: bookingLink("Juhi Murugeshan", "@juhi.murugeshan"),
  },
];

export function CreatorRoster() {
  return (
    <section id="roster" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="eyebrow-text text-foreground-muted">From the Roster</p>
          <h2 className="display-title-sm mt-3 text-white">Featured Creators</h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
          {CREATORS.map((creator) => (
            <motion.div
              key={creator.handle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={springSettle}
              className="apple-glass flex w-full flex-col overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={springSettle}
                  className="absolute inset-0"
                >
                  <Image
                    src={creator.photo}
                    alt={creator.name}
                    fill
                    sizes="(max-width: 640px) 20rem, 24rem"
                    className="object-cover"
                  />
                </motion.div>
              </div>

              <div className="flex flex-col items-center gap-4 p-6 text-center">
                <div>
                  <h3 className="text-lg font-semibold text-white">{creator.name}</h3>
                  <p className="text-sm text-foreground-muted">{creator.handle}</p>
                  <p className="mt-1 text-xs text-foreground-muted/70">{creator.location}</p>
                  {creator.category && (
                    <p className="eyebrow-text mt-2 text-foreground-muted">{creator.category}</p>
                  )}
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <motion.a
                    href={creator.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.96 }}
                    transition={springTap}
                    className="apple-glass flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-white hover:bg-white/10 transition-colors"
                  >
                    <InstagramIcon size={14} />
                    Instagram
                  </motion.a>
                  <motion.a
                    href={creator.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.96 }}
                    transition={springTap}
                    className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black"
                  >
                    <MessageCircle size={14} />
                    Book on WhatsApp
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
