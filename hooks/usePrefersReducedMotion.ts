"use client";
import { useSyncExternalStore } from "react";

/**
 * SSR-safe `prefers-reduced-motion` read. motion/react's own
 * `useReducedMotion()` can already resolve to the client's true value on
 * the very first client render — before hydration is even reconciled —
 * while the server (no `window`) always renders as if motion were not
 * reduced. Using that value to branch a whole subtree (as opposed to just
 * an animation value) makes that first client render disagree with the
 * server's markup and throws a real hydration error.
 *
 * `useSyncExternalStore`'s server-snapshot argument is React's built-in
 * answer to exactly this: it returns `false` for hydration's first pass on
 * both sides, then updates on the client through the normal external-store
 * subscription path — never a same-pass mismatch. (Contrast with
 * AmbientBackground.tsx's `useFinePointer`, a plain useState+useEffect
 * matchMedia listener — safe there only because that component is loaded
 * with `ssr: false` and never renders on the server at all.)
 */
function subscribe(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}
function getSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function getServerSnapshot() {
  return false;
}

export function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
