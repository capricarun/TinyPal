# TinyPal — Parenting Moment Tracker

A mobile-first React prototype that helps parents track moments and discover behavioural patterns in their child's development.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Routes](#routes)
- [Pages](#pages)
- [Design System](#design-system)
- [Fonts](#fonts)
- [Assets](#assets)
- [Developer Notes](#developer-notes)

---

## Overview

TinyPal is a mobile prototype built from Figma designs. It includes:

- **Home screen** – hero card, parenting goals, bottom navigation
- **Story screen** – moments feed with "What's a Pattern?" entry point
- **Onboarding (4 slides)** – auto-advancing pattern education with shimmer progress bars
- **Patterns Info** – explainer page for the pattern system
- **Moment Entry** – text capture with moment-type dropdown and date picker
- **Processing** – 4-step animated AI processing screen + "Moment Saved! 🎉" confetti screen

---

## Tech Stack

| Layer        | Library / Tool                          |
|--------------|-----------------------------------------|
| Framework    | React 18 + TypeScript                   |
| Bundler      | Vite 6                                  |
| Styling      | Tailwind CSS v4                         |
| Routing      | React Router v7 (Data Mode)             |
| UI Primitives| Radix UI (via shadcn/ui patterns)       |
| Animation    | Motion (formerly Framer Motion)         |
| Icons        | Material Icons ligature font (Google)   |
| Fonts        | Inter, Roboto, Noto Sans (Google Fonts) |

---

## Project Structure

```
tinypal/
├── index.html                     # Vite HTML entry point
├── vite.config.ts                 # Vite config + figma:asset resolver plugin
├── tsconfig.json                  # TypeScript config
├── package.json
├── postcss.config.mjs
│
└── src/
    ├── main.tsx                   # React root render
    ├── styles/
    │   ├── index.css              # Imports all CSS in order
    │   ├── fonts.css              # Font-face declarations (Material Icons, Inter, Roboto)
    │   ├── tailwind.css           # Tailwind v4 + tw-animate-css
    │   ├── theme.css              # CSS custom properties (design tokens, dark mode)
    │   └── interactive.css        # Hover/active states for interactive elements
    │
    ├── app/
    │   ├── App.tsx                # Root component — mounts RouterProvider
    │   ├── routes.tsx             # All React Router route definitions
    │   │
    │   ├── pages/                 # One file per route
    │   │   ├── Home.tsx           # /
    │   │   ├── Story.tsx          # /story
    │   │   ├── PatternsInfo.tsx   # /story/patterns-info
    │   │   ├── Pattern1.tsx       # /patterns/1  (onboarding slide 1)
    │   │   ├── Pattern2.tsx       # /patterns/2  (onboarding slide 2)
    │   │   ├── Pattern3.tsx       # /patterns/3  (onboarding slide 3)
    │   │   ├── Pattern4.tsx       # /patterns/4  (onboarding slide 4 — CTA)
    │   │   ├── MomentEntry.tsx    # /moment-entry
    │   │   └── Processing.tsx     # /processing  (+ Moment Saved screen)
    │   │
    │   └── components/
    │       ├── figma/
    │       │   └── ImageWithFallback.tsx  # <img> with graceful error state
    │       └── ui/                        # shadcn/ui component library
    │
    └── imports/                   # Auto-generated Figma → React components
        ├── 00Home/
        ├── 01PatternsFromHome/
        ├── 02PatternsFromStory/
        ├── 03PatternsFromStory/
        ├── 04PatternsFromStory/
        ├── 05Story/
        ├── 06PatternsFromStory-1/
        ├── 07MomentEntry/
        ├── 08MomentEntry/
        ├── 09MomentEntry/
        ├── 10Processing/
        ├── 11Processing/
        ├── 12Processing/
        ├── 13Processing/
        ├── 14MomentsSaved/
        └── Combobox/
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm**, **pnpm**, or **yarn**

### Install & Run

```bash
# 1. Clone the repository
git clone https://github.com/your-org/tinypal.git
cd tinypal

# 2. Install dependencies
npm install
# or: pnpm install / yarn install

# 3. Start the dev server
npm run dev
# App opens at http://localhost:5173
```

### Other Scripts

```bash
npm run build      # Production build → dist/
npm run preview    # Preview the production build locally
npm run typecheck  # TypeScript type-check without emitting files
```

---

## Routes

| Path                    | Component      | Description                                      |
|-------------------------|----------------|--------------------------------------------------|
| `/`                     | Home           | Main home screen with hero card and goals        |
| `/story`                | Story          | Child's story / moments feed                     |
| `/story/patterns-info`  | PatternsInfo   | Explainer: "What is a Pattern?"                  |
| `/patterns/1`           | Pattern1       | Onboarding slide 1 — auto-advances after 3 s     |
| `/patterns/2`           | Pattern2       | Onboarding slide 2 — auto-advances after 3 s     |
| `/patterns/3`           | Pattern3       | Onboarding slide 3 — auto-advances after 3 s     |
| `/patterns/4`           | Pattern4       | Onboarding slide 4 — "Start Adding Moments" CTA  |
| `/moment-entry`         | MomentEntry    | Full-screen moment text capture                  |
| `/processing`           | Processing     | 4-step AI processing animation + success screen  |

---

## Pages

### Home (`/`)
Renders the Figma-imported `Component00Home`. Click delegation handles:
- **Add Moment** → navigates to `/moment-entry`
- **How patterns work?** → navigates to `/patterns/1`
- **Bottom nav** → Story, Ask Tinu (stub), Notifications (stub), Profile (stub)

### Story (`/story`)
Renders `Component05Story`. Click delegation handles:
- **Add a Moment** → `/moment-entry`
- **What's a Pattern?** → `/story/patterns-info`
- **Home nav** → `/`

### Pattern Onboarding (`/patterns/1–4`)
Slides 1–3 auto-advance to the next slide after 3 seconds using `setInterval`. A thin purple progress bar at the bottom of the screen shows elapsed time. Slide 4 has a manual CTA that returns to home.

### Moment Entry (`/moment-entry`)
Fully interactive, hand-written component (not a Figma import):
- **Moment-type dropdown** — combobox with 10 moment categories
- **Date dropdown** — lists Today, Yesterday, and the past 5 days; updates pill label on selection
- **Textarea** — free-form text; enables the Save button when non-empty
- **Cancel modal** — shown when navigating away with unsaved text
- **Save** → navigates to `/processing`

### Processing (`/processing`)
- Steps 0–3: shimmer progress bars advance every 3 seconds with a floating mascot
- Step 4: confetti animation + "Moment Saved! 🎉" with CTAs to Story

---

## Design System

Design tokens live in `src/styles/theme.css`. Key brand colours:

| Token / Hex     | Usage                        |
|-----------------|------------------------------|
| `#6c4dc4`       | Primary purple — buttons, active states |
| `#2d2047`       | Dark heading text            |
| `#d9c8ff`       | Light purple borders         |
| `#b49ae8`       | Medium purple borders        |
| `#7b6e8f`       | Secondary / muted text       |
| `#ff8e6e`       | Accent orange (logo "T")     |
| `#ffd566`       | Accent yellow (logo "n")     |
| `#5ec28b`       | Accent green (logo "y")      |

Background gradient: `linear-gradient(to bottom, #f6edf7, #fefaf6)`

---

## Fonts

Fonts are loaded from **Google Fonts CDN** and require internet access during development. For production, consider self-hosting them.

### Font family → CSS name mapping

Figma exports fonts with colon-style weight suffixes. The `@font-face` declarations in `src/styles/fonts.css` create aliases so the generated code works unchanged:

| Tailwind class fragment               | Resolves to       | Weight |
|---------------------------------------|-------------------|--------|
| `font-['Inter:Regular',sans-serif]`   | Inter             | 400    |
| `font-['Inter:Medium',sans-serif]`    | Inter             | 500    |
| `font-['Inter:Semi_Bold',sans-serif]` | Inter             | 600    |
| `font-['Inter:Bold',sans-serif]`      | Inter             | 700    |
| `font-['Inter:Extra_Bold',sans-serif]`| Inter             | 800    |
| `font-['Roboto:Regular',sans-serif]`  | Roboto            | 400    |
| `font-['Roboto:Bold',sans-serif]`     | Roboto            | 700    |
| `font-['Material_Icons:Regular',sans-serif]` | Material Icons (ligature) | 400 |
| `font-['Material Icons_Outlined:Regular',sans-serif]` | Material Icons Outlined | 400 |

> **Self-hosting fonts:** Download the WOFF2 files and place them in `src/assets/fonts/`, then update the `src:` URLs in `fonts.css`.

---

## Assets

### Image assets (PNG)

Image files are stored alongside their Figma import components:

```
src/imports/00Home/27b53ab8...png        # Goal card illustrations
src/imports/00Home/50ebb93b...png
src/imports/05Story/771cb07...png        # Story screen illustration
src/imports/10Processing/9ae95f1...png   # TinyPal mascot (used in all Processing screens)
```

### figma:asset imports

Figma Make generates imports like:
```ts
import mascot from "figma:asset/9ae95f1586357c068ebf21aa31af5d656f0795b3.png";
```

The custom `figmaAssetPlugin` in `vite.config.ts` resolves these virtual paths by scanning `src/imports/**` recursively for a matching filename. No manual path changes are needed.

---

## Developer Notes

### Adding a new page

1. Create `src/app/pages/NewPage.tsx`
2. Add the route to `src/app/routes.tsx`
3. Wire up any navigation click handlers

### Replacing Figma imports with real components

The files in `src/imports/` are auto-generated from Figma and contain inline styles and Figma-specific naming. For production:
- Replace them with purpose-built components
- Swap Material Icons font-based icons for `lucide-react` SVG icons
- Replace hardcoded strings (child's name "Jiyu", time "10:01") with props/state

### Material Icons

Icons render as ligature text inside elements with the Material Icons font:
```jsx
<span className="font-['Material_Icons:Regular',sans-serif]">home</span>
```
To replace with Lucide icons:
```jsx
import { Home } from 'lucide-react';
<Home size={24} />
```

### State management

The prototype uses local component state only (no global store). For a production app, consider:
- **Zustand** or **Jotai** for lightweight global state
- **TanStack Query** for server-state / API calls
- **Supabase** for backend persistence (moments, user profiles, patterns)

### Mobile viewport

The app is optimised for a 390 px wide mobile viewport. The root wrapper uses `max-w-md mx-auto` to constrain width on desktop. For native mobile, this codebase is portable to **React Native** / **Expo** with UI component replacements.
