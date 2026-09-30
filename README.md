# TechWomen Cph

Marketing site for TechWomen Cph — a professional tech community in
Copenhagen. Built from the team's real Figma design system ("Bright
Coral") and landing-page frames.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Local dev server with hot reload |
| `npm run build` | Type-checks (`tsc -b`) then builds for production into `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | ESLint |

## What's real vs. placeholder

Every piece of copy — the board team, sponsorship tiers, membership
pricing, program descriptions, footer links — is pulled directly from the
TechWomen Cph Figma file, not invented. The exceptions, clearly marked in
code comments (see `CLAUDE.md` for the full list), are: the "Networking
App" card (in the brief, not yet in Figma) and all photography (gradient
placeholders — see `src/components/ImagePlaceholder.tsx` for why and how
to swap in real photos).

## Pushing to GitHub

This project was built locally and hasn't been pushed anywhere yet. To put
it on GitHub:

```bash
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```

Then open the folder in VS Code and continue from there with Claude Code —
`CLAUDE.md` at the repo root gives it the same design-system context this
session used.
