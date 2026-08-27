"use client";
import dynamic from "next/dynamic";

// `next/dynamic` with `ssr: false` must live in a Client Component — this
// tiny wrapper is what lets the root layout (a Server Component, so it can
// keep exporting metadata) render the ambient background without pulling
// the three.js/react-three-fiber bundle into the initial page load.
const AmbientBackground = dynamic(() => import("./AmbientBackground"), {
  ssr: false,
  loading: () => null,
});

export function SiteBackground() {
  return <AmbientBackground />;
}
