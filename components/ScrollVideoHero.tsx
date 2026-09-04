"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

// Confirmed via `ffprobe public/decibel-scroll.mp4` — update this if the
// source video is ever re-exported at a different length. Hardcoded rather
// than read from `video.duration` at runtime so scroll-scrubbing doesn't
// have to wait on a metadata-load race before it can compute a target time.
const VIDEO_DURATION = 18;

/**
 * "How It Works" — the site's produced cinematic reel (creators, content,
 * and campaign metrics assembling into one network, bookended by the
 * Decibel wordmark), scrubbed directly by scroll position rather than
 * autoplaying. It replaces an earlier CSS/motion-built version of this
 * section (see git history) now that a real edited video exists — the
 * video already carries its own titles and narrative beats, so this
 * component deliberately adds no caption overlay of its own on top of it
 * (see APPLE_DESIGN_RESEARCH.md §1: the one cinematic/full-bleed section is
 * allowed to break the "eyebrow + headline" pattern every other section
 * uses, because the text is already burned into the composition).
 *
 * Mechanically this is the same pinned-track / scroll-scrubbed pattern as
 * the rest of the site's scroll work (see Navbar.tsx's useScroll usage),
 * and follows the same hydration-safety rule the HowItWorks bug taught:
 * the `useScroll` target ref stays permanently mounted across the
 * reduced-motion branch — only its class and children swap.
 */
export function ScrollVideoHero() {
  const showStatic = usePrefersReducedMotion();

  const trackRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start start", "end end"] });
  const time = useTransform(scrollYProgress, [0, 1], [0, VIDEO_DURATION]);

  useMotionValueEvent(time, "change", (latest) => {
    const video = videoRef.current;
    // readyState check guards the rare case a scroll event fires before the
    // browser has parsed the video's metadata (currentTime is otherwise
    // safe to set early — most browsers just queue it — but this avoids
    // relying on that instead of a real check).
    if (video && video.readyState >= 1 && !Number.isNaN(latest)) {
      video.currentTime = latest;
    }
  });

  return (
    <section id="how-it-works" aria-label="How Decibel Works">
      {/* Sighted visitors get the full-bleed cinematic reel; screen readers
          get its equivalent in text, matching the "text burned into the
          composition, no separate caption block" treatment. */}
      <h2 className="sr-only">
        How Decibel works: creators, content, and campaign performance, connected into one network.
      </h2>

      <div ref={trackRef} className={showStatic ? "relative" : "relative h-[400vh] sm:h-[480vh]"}>
        {showStatic ? (
          <div className="relative mx-auto aspect-video w-full max-w-5xl overflow-hidden sm:rounded-[2rem]">
            <Image
              src="/decibel-scroll-poster.jpg"
              alt="A constellation of creator profiles, content, and performance metrics connected around the Decibel wordmark."
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
            />
          </div>
        ) : (
          <div className="sticky top-0 h-dvh w-full overflow-hidden">
            <video
              ref={videoRef}
              src="/decibel-scroll.mp4"
              poster="/decibel-scroll-poster.jpg"
              muted
              playsInline
              preload="auto"
              // The current export has no audio track at all, but `muted`
              // stays regardless — correct, standard practice for any
              // background/hero video, and cheap insurance if a future
              // re-export adds a sound-design bed. It's also never actually
              // autoplayed: currentTime is driven entirely by scroll
              // position above.
              aria-hidden="true"
              className="h-full w-full object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
