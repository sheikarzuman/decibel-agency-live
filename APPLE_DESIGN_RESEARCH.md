# Apple.com Design Research

Reverse-engineering the design LANGUAGE and UX PRINCIPLES behind Apple.com's
premium feel — not for cloning, but as an input to the Decibel redesign.

**Sources (via Firecrawl):**
- `https://www.apple.com/` — branding/token extraction + full-page screenshot (1920×7281)
- `https://www.apple.com/mac-mini/` — product-page screenshot (1920×29560), for storytelling/chapter pacing
- Captured 2026-08-27. Screenshots saved to `.firecrawl/` (gitignored, local reference only — not shipped).

Static screenshots and DOM/CSS extraction can't observe live scroll/hover
motion. Everything below marked **(observed)** comes directly from scrape
evidence; everything marked **(known pattern)** is well-documented,
widely-written-about Apple.com behavior supplementing what a static capture
can show — used here only to describe *principles*, never exact
implementations to copy.

---

## 1. Homepage structure (observed)

Top to bottom, apple.com/ is a strict rhythm of **one idea per section**:

1. Thin utility bar (donation banner) — tiny centered text link, barely-there gray-on-white strip.
2. Global nav — ~44px tall, white, tiny (~12px) text logo + text links, no visual weight.
3. **Full-bleed hero** — single gradient-blue background, centered glowing logo mark, one short headline, one line of subtext, ONE pill button. Nothing else in the viewport.
4. A sequence of **full-width single-product chapters** — alternating light-gray/white backgrounds, each: eyebrow-less headline + one-line subhead + two pill buttons (filled + outline), then a large centered product image floating in generous negative space. One product per screen.
5. A **2-column promo grid** — 6 cards, edge-to-edge (no gaps or hairline gaps only), each card a self-contained color story (pastel gradient background matched to the product), headline+subhead+buttons at top, image bleeding to the card edge at bottom.
6. A **cinematic full-bleed carousel** ("Endless entertainment") — dark, photographic, oversized bold title text overlaid directly on the imagery (not in a separate text block), horizontal row of smaller content tiles beneath.
7. **Dense, plain-text footer** — small multi-column link lists, legal fine print paragraph, copyright line. Zero visual flourish; pure utility, sharply contrasting with the airy body above it.

**Principle:** information density is inverted from what you'd expect — the
selling sections are the *most* sparse (one product, acres of whitespace),
and only the footer is dense. Density is a deliberate signal of importance/finality, not clutter.

## 2. Product-page chapter pacing (observed, mac-mini page)

A single product page is a long vertical sequence of **chapters**, each with
its own emotional beat:

- Tiny centered eyebrow label → huge bold headline (2 short clauses) → single hero shot, then a LONG stretch of empty space before the next chapter begins.
- Headlines almost always mix plain black text with **one accent-colored word or clause** per headline (e.g. a phrase in teal, another chapter in orange, another in pink) — never more than one accent per headline, never a fully-colored headline.
- Chapters **alternate background value** — white/near-white, then near-black/dark, then light gray, then a soft tint — so scrolling reads as moving between distinct "rooms," each resetting visual energy.
- Supporting copy per chapter is 1–2 sentences max, small, centered, directly under the headline — never a paragraph competing with the headline for attention.
- A dense comparison/spec strip appears once, near the very bottom, just before the footer — the one place small multi-column text/data is allowed, mirroring the footer's density.

**Principle:** editorial pacing = decompress, state one idea, show one image,
give it room to breathe, then reset. The "chapter" is the atomic unit of the
page, not the section or the component.

## 3. Design tokens (observed, from branding extraction)

| Token | Value | Note |
|---|---|---|
| Primary accent | `#0071E3` | Used almost exclusively for CTAs/links — not decoration |
| Link | `#0066CC` | Slightly darker, for inline text links |
| Body text | `#333336` | Near-black, not pure black |
| Background | `#FFFFFF` / light gray | Sections alternate white ↔ `#F5F5F7`-family grays ↔ near-black |
| Button radius | `980px` (i.e. fully pill-shaped) | Every CTA, filled or outline, is a pill |
| Input/card radius | `0px` | Cards and content blocks stay square — **only buttons are round** |
| Spacing base unit | `4px` | Consistent small increment underlying the whole grid |
| Heading font | SF Pro Display | Tight tracking, heavy weight at display sizes |
| Body font | SF Pro Text | Falls back to Helvetica Neue → Helvetica → Arial → sans-serif |
| Shadows | `none` on buttons/inputs | Depth comes from layout and imagery, never drop-shadows |

**Principle worth stealing (not the tokens themselves):** exactly one accent
color, used sparingly and consistently for interactive elements only;
sharp/square content blocks paired with fully-pill interactive elements as
the *only* rounded shape in the system — a strong, simple rule rather than
mixed radii everywhere.

## 4. Typography hierarchy (observed + known pattern)

- Display headlines: large, bold, tight negative letter-spacing, 1–2 short clauses, frequently with one colored accent word.
- Section/product headlines: smaller than hero display type but still oversized relative to body copy — the jump from headline to body is drastic, there is no "medium" heading size doing much work.
- Body/support copy: small (relative to headline), centered under the headline it supports, never justified, short line lengths.
- Eyebrow labels: tiny, uppercase-or-caps-adjacent, used sparingly to name a chapter before the big headline lands.
- Footer/legal text: smallest size on the page, dense, plain gray — the one place text is allowed to be "a lot."

## 5. Buttons & CTAs (observed)

- Two-tier system only: a filled pill (primary, accent-colored, white text) and an outline pill (secondary, white/light fill, accent-colored text and border). No third button style.
- Never more than two CTAs together in one chapter, usually side by side, small gap.
- CTA copy is action-first and short: "Learn more", "Pre-order", "Shop", "Buy" — never a full sentence.

## 6. Imagery & video treatment (observed)

- Product shots are large, centered, shot on a clean seamless background (studio-lit, no environment clutter) — the product itself is the only subject.
- Human presence (a hand holding a product) is used sparingly, purely for scale/relatability, never as a "lifestyle stock photo" filler.
- The one cinematic/entertainment section breaks this rule intentionally — full-bleed photographic imagery with text burned into the composition — signaling "this section is different in kind" (entertainment, not hardware).
- Images always have enormous surrounding negative space; nothing is ever cropped tight to its container.

## 7. Motion & interaction principles (known pattern — not visible in a static screenshot, stated here as principle only)

Apple.com is well-documented as using:
- Scroll-triggered opacity/translate reveals on chapter entry — text and imagery fade/rise in as they cross into view, never bounce.
- Subtle scale-up on hero/product imagery tied to scroll position (not click), reinforcing depth without being a "game engine" effect.
- A secondary sticky sub-nav that appears on product pages only after scrolling past the primary nav — condensed, low-height, high-contrast.
- Hover states are minimal: slight opacity shift or underline on links, no scale-bounce, no shadow-pop.
- Section-to-section transitions rely on background-color changes and generous whitespace gaps rather than animated wipes/reveals.
- Easing is calm — smooth ease-out curves, moderate durations (roughly 300–600ms for reveals) — nothing snappy or elastic.

**Principle to carry forward, explicitly not the implementation:** motion
exists to support hierarchy and pacing (this chapter has arrived; look here
now), never as decoration for its own sake. If a motion effect doesn't serve
"reveal," "connect," or "emphasize," Apple doesn't use it.

## 8. Accessibility & responsive patterns (known pattern, informed by observed structure)

- High text/background contrast throughout (near-black text on white/light, white text on near-black) — no low-contrast gray-on-gray body text.
- Every interactive element is a real link/button (footer link lists, nav items) — no div-as-button patterns.
- Mobile collapses the 2-column promo grid to a single column, but preserves the same one-idea-per-screen density — it does not try to cram desktop density into a narrower column.
- Generous tap targets on pill buttons (padding, not just font-size) carry through at mobile sizes.

---

## Principles to apply to Decibel (not to copy verbatim)

1. **One idea per viewport.** Each section states one thing, shows one strong image, and stops — not four bullet points and a paragraph.
2. **Chapter-based pacing**, alternating light/dark backgrounds between major sections, to keep scroll energy resetting rather than fatiguing.
3. **Exactly one accent color** used only on interactive/emphasis elements (Decibel already has a white/dark obsidian palette — the accent should stay minimal, e.g. a single considered color reserved for CTAs and 1-word headline emphasis, not sprinkled everywhere).
4. **Two-tier CTA system** — one filled, one outline/glass, both short action-first copy, never three styles competing.
5. **Drastic type-scale jump** between headline and body — no crowded medium-heading tier doing filler work.
6. **Negative space is the flex**, not decoration. Product/talent imagery gets room to breathe; nothing is cropped tight by default.
7. **Motion serves hierarchy** — reveal on scroll, gentle, no bounce, no gratuitous parallax; used to say "look here now," not to entertain.
8. **Footer earns the only real density** on the page — everywhere else stays sparse.
