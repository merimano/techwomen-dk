# TechWomen Cph — codebase notes for Claude Code

Stack: Vite 6 + React 18 + TypeScript 5.6 + Tailwind CSS v4 (CSS-first config,
no `tailwind.config.js` — tokens live in `src/index.css` under `@theme`).

This file is the quick-reference for working in this repo day to day. The
full design-system rationale (why each token/value is what it is, what
changed recently, what's still stale in the source Figma file) lives in
`Guidelines.md` in the TechWomen Cph Website Claude project — read that
before changing colors, type, spacing, radius, or shadows.

## Structure

- `src/data/*.ts` — all real copy (team, programs, pricing, sponsorship
  tiers, footer nav, stats). Content lives here, not inline in components —
  keep it that way so a copy change never touches JSX.
- `src/components/*` — small reusable pieces: `Button.tsx` (Primary/
  Secondary), `TeamCard.tsx`, `FormatCard.tsx`, `TierCard.tsx`,
  `SectionHeader.tsx`, `ImagePlaceholder.tsx`, `icons.tsx`.
- `src/sections/*` — one file per landing-page section, assembled in
  `src/App.tsx` in page order.

## Design tokens

All tokens are CSS custom properties defined once in `src/index.css`
(`--color-*`, `--radius-*`, `--shadow-*`) and consumed either as Tailwind
utilities (`bg-[var(--color-warm-50)]`) or inline `style={{ color: "var(--color-text-primary)" }}`
where Tailwind's arbitrary-value syntax got unwieldy with the escaped `/`
in the original Figma variable names. **Before hardcoding a hex value,
check this file for a token that already covers it.**

`.btn-primary` / `.btn-secondary` in `index.css` carry real `:hover`/
`:active` CSS — this is deliberate. The original Figma Make push of this
design shipped buttons with Hover/Active variants defined in Figma but
never wired into working CSS (documented in Guidelines.md). Don't
reintroduce that bug by moving button state handling into JS/React state.

## Known gaps (flagged, not silently patched over)

1. **"Networking App"** (`src/data/programs.ts`) has no matching card in
   the source Figma file — it's in the project brief but not yet designed.
   Rendered with a `comingSoon` badge rather than pretending it's real.
2. **Signup form fields** (`src/sections/SignupForm.tsx`) — "what do you
   want to get out of the community" and "do you want to get involved" are
   from the brief only; no such form exists in Figma yet. `onSubmit` is a
   stub — wire it to whatever backend TechWomen Cph adopts.
3. **Photography** — every photo slot (`ImagePlaceholder`) is a token-based
   gradient stand-in, not a real image. Figma's exported asset URLs expire
   ~7 days after export and this environment couldn't fetch/persist the
   originals. Slots that need real photos: 5 team headshots, 3 program
   card images (Panel Talks / AI Masterclasses / AI Lab), 1 mentorship
   visual. Drop files into `src/assets/images/` and swap
   `<ImagePlaceholder>` for `<img>` — nothing else needs to change.
4. **Mission section animation** — Figma has this as a word-by-word reveal
   (motion data available via `get_motion_context`, not yet pulled in).
   Rendered as static text for now.
5. `--bright/text-footer` in Figma still resolves to a stale pre-token-update
   hex (`#8c6e62`) — not carried over; the footer uses `text-secondary`-level
   contrast against the dark background instead.

## Commands

```
npm install
npm run dev       # local dev server
npm run build     # tsc -b && vite build — must pass with zero errors before shipping
npm run lint
npm run preview   # serve the production build locally
```
