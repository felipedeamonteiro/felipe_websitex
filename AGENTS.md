# AGENTS.md — Felipe Monteiro portfolio

Read this first on every task. It is the map of the project: what exists, where,
why, and the traps already found. `CLAUDE.md` imports this file.

## Rule: keep the docs current

Whenever you add a feature, change a feature's behaviour, add or move a route,
file, dependency, token, dictionary key or convention, **update this file in the
same change** (and `README.md` when setup, commands, env vars or routes change).
Docs that describe something the code no longer does are bugs. Before finishing
a task, re-read the sections you touched and fix anything now stale.

## What this is

Personal portfolio of **Felipe de Alcântara Monteiro** (full-stack engineer,
CEO/CTO of DojoFind). Single Next.js app, mostly static pages, one API route
for the contact form. Owner writes in Portuguese; the site is in 4 languages.

## Stack

- Next.js 16 **Pages Router** (`src/pages`), Turbopack, React 19, TypeScript 5 (strict)
- Tailwind CSS v4, CSS-first config in `src/styles/globals.css` (no tailwind.config)
- `motion` (`motion/react`) for scroll/parallax and reveal animations
- three.js + `@react-three/fiber` v9 + `@react-three/drei` v10 + `@react-three/postprocessing`, `maath`
- react-hook-form + zod (v4) for the contact form; Nodemailer in `/api/contact`
- react-icons; `clsx` (no tailwind-merge, so conflicting classes need `!` overrides)
- ESLint 9 (`eslint-config-next`), Prettier + `prettier-plugin-tailwindcss`
- Node >= 24 (`.nvmrc`), dev server on **port 3003**

## Commands

```bash
npm run dev          # http://localhost:3003 (the owner often already has it running: reuse it)
npm run typecheck    # tsc --noEmit
npm run lint         # eslint .
npm run build        # production build (all routes x 4 locales are static)
npx prettier --write <files>
```

There is no test suite. Verification = typecheck + lint + build + looking at
the pages in a browser (see "Verifying UI" below).

## Routes

| Route          | File                       | Purpose                                                                              | Indexed |
| -------------- | -------------------------- | ------------------------------------------------------------------------------------ | ------- |
| `/`            | `src/pages/index.tsx`      | **Main portfolio.** Neon-glass layout + 3D workstation, neon-city parallax, 3D globe | yes     |
| `/original`    | `src/pages/original.tsx`   | First version of the site (classic layout, Navbar/Sidebar, Card3D, timeline)         | noindex |
| `/glass`       | `src/pages/glass.tsx`      | Pure neon-glass redesign (no 3D, no parallax)                                        | noindex |
| `/cyber`       | `src/pages/cyber.tsx`      | Always-dark 3D page (PC, stars, tech balls, globe, tilt cards)                       | noindex |
| `/parallax`    | `src/pages/parallax.tsx`   | Always-dark neon-city parallax + chapter cards                                       | noindex |
| `/projects`    | `src/pages/projects.tsx`   | Legacy stub that links to `/#projects`                                               | yes     |
| `/api/contact` | `src/pages/api/contact.ts` | POST, validates with `src/schemas/contact.ts`, sends mail                            | —       |

The four alternative layouts are **reachable only by typing the URL**: nothing
on `/` links to them, they carry `<meta name="robots" content="noindex">`, and
their back links (`MiniHeader`, `ParallaxChapters` CTA) point to `/`. There is
no design switcher any more (it was removed on purpose; do not re-add it).

Every route also exists under `/en`, `/es`, `/ja` (see i18n).

## Main page (`/`) composition

`src/pages/index.tsx`, top to bottom:

1. `GlassHero` — name in chrome/gradient, photo in a rotating conic ring, HUD skills panel, stats bar
2. `AboutSection` — bio, `whoami.ts` terminal card, Unicamp education cards
3. `ServicesSection` — 4 glass service cards
4. `WorkstationSection` (`src/components/home/`) — 3D desktop PC on an always-dark stage + the tools grid (replaces the separate Tools section on `/`)
5. `ParallaxScene` (`headingLevel="h2" blend id="city"`) wrapped in `<div className="glass-theme dark">` — the neon city is a night scene in both themes and bridges into the career timeline
6. `ExperienceSection` — timeline, most recent first, "current" badge
7. `ProjectsSection` — flip cards
8. `ProcessSection` — 5 numbered steps
9. `ContactSection globe={webgl}` — info + 3D planet in a dashed orbit + form
10. `GlassFooter credits` — includes the CC BY model credits

Plus `GlassNavbar` (5 section links; neon buttons in dark, underline links in
light; mobile dialog menu; language menu; bulb theme switch) and `SideRail`
(icon rail on 2xl).

`useWebGLSupport()` runs once on the page and is passed down (`null` while
checking, `false` -> text fallback in the workstation, globe hidden).

## Directory map

```
src/
  pages/            routes (see table); _app.tsx = fonts + theme state; _document.tsx = <Html suppressHydrationWarning>
  components/
    glass/          neon-glass sections used by / and /glass (GlassNavbar exports glassSections + Logo)
    home/           sections that only exist on / (WorkstationSection)
    cyber/          /cyber sections (CyberSections.tsx), motion variants, tilt hook, SectionWrapper
      canvas/       three.js canvases, all client-only via next/dynamic (index.ts)
    parallax/       ParallaxScene (sticky 250vh scene), cityShapes (SVG skyline/towers/stars), ParallaxChapters
    shared/         ContactForm, LanguageSwitcher, MiniHeader, ModelCredits, SectionHeading, ShootingStars
    AboutMe, Card3D, ContactMe, Experience, Footer, IntroContainer, Navbar, Sidebar, Input, TextArea,
    Buttons/*, BulbSwitch  -> the original page (/original); Buttons + BulbSwitch are reused everywhere
  content/profile.ts   locale-independent data: profile, experiences, projects, skills, tools, getStats()
  i18n/                config.ts, useT.ts, contactSchema.ts, dictionaries/{pt-BR,en,es,ja}.ts
  schemas/contact.ts   server-side zod schema (Portuguese messages) used by /api/contact
  styles/globals.css   all global CSS: original theme + neon-glass design system
  utils/               intersectionMethod.ts (useInView, toggles), useOnceInView.ts (latches true), navigation.ts (original navbar links)
  hooks/useDeviceScreenSize.tsx  legacy, currently unused
public/
  models/desktop_pc.glb, planet.glb, LICENSES.txt   (CC BY 4.0, meshopt + webp compressed)
  tech/*.png                                        textures for the /cyber tech balls
  *.png|jpg                                         photos, company logos, project screenshots
```

## Content and data model

- **All visible text lives in the dictionaries**; `src/content/profile.ts`
  holds only locale-independent data (logos, links, dates, levels).
- Arrays are matched **by index**: `experiences[i]` <-> `dictionary.experience.items[i]`,
  `projects[i]` <-> `dictionary.projects.items[i]`. Adding a job or project means
  editing `profile.ts` **and all 4 dictionaries** in the same order.
- `experiences` is chronological (oldest first). Pages that show "most recent
  first" reverse it. `currentExperienceIndex` (last item, DojoFind) gets the
  "current" badge.
- Logo options per experience: `logoInset` shrinks the logo to 72% so a square
  logo isn't clipped by the circular frame (DojoFind, BairesDev, EBM);
  `logoBg` sets the circle colour (EBM uses near-black). All three timelines
  (`/original`, glass, cyber) honour both.
- `getStats()` derives the hero stats (years since `profile.devCareerStart`,
  distinct `work` companies, project and tool counts). Never hard-code stats.
- **Real data only**: no invented numbers, testimonials or clients.
- pt-BR experience descriptions are the owner's own wording; keep them.
- Project cards: `items[i].description` (short, glass/cyber) and
  `items[i].details` (long, original page's Card3D back).

## i18n

- Next built-in Pages-Router i18n in `next.config.mjs`: locales
  `pt-BR` (default, no prefix), `en`, `es`, `ja`; `localeDetection: false`.
  Next sets `<html lang>` per locale.
- `useT()` returns the active dictionary; `useLocale()` the locale.
  `localePath(locale, path)` builds prefixed hrefs for plain `<a>`
  (`next/link` handles locales itself).
- `pt-BR.ts` is the source of truth; `export type Dictionary = typeof ptBR`;
  other locales `satisfies Dictionary`, so a missing key is a type error.
- Namespaces: `meta, nav, hero, stats, about, services, experience, projects,
tools, workstation, process, contact, footer, original, cyber, parallax`.
  `original.*` holds strings only the `/original` page uses.
- Strings containing `'` must use double quotes (Prettier keeps them).
- Contact validation messages: `makeContactSchema(t.contact.errors)` on the
  client. The API replies in Portuguese, so both forms show
  `t.contact.success` / `t.contact.error` instead of the server message.
- `LanguageSwitcher` has `variant="glass"` (default, --g-* tokens) and
  `variant="classic"` (original page's --accent/--nav-background); `inline`
  renders a row for mobile menus. Its links use `asPath` **without the
  `#hash`** (the server never sees the hash, so keeping it caused a hydration
  mismatch on URLs like `/#home`).
- es/ja were machine-translated: flag uncertain wording to the owner rather
  than inventing.

## Design system (neon glass)

Defined at the end of `src/styles/globals.css`, scoped so the original page's
styles are untouched.

- **Theme**: `_app.tsx` keeps `light|dark` in state + localStorage and toggles
  `.dark` on `<html>`. Tailwind `dark:` = `@custom-variant dark (&:where(.dark, .dark *))`.
  The bulb switch (`BulbSwitch`, optional translated `labels`) toggles it.
- **Scope**: `.glass-theme` sets light tokens; `:where(.dark) .glass-theme` and
  `.glass-theme.dark` set dark ones. Wrap any subtree in
  `<div className="glass-theme dark">` to force dark tokens (used by /cyber,
  /parallax and the city on `/`).
- **Tokens**: `--g-bg`, `--g-bg-2`, `--g-surface(-strong)`, `--g-border`,
  `--g-highlight`, `--g-sheen`, `--g-text`, `--g-muted`, `--g-accent`
  (blue-violet), `--g-accent-2` (purple), `--g-accent-3` (cyan), `--g-glow`,
  `--g-grid`, `--g-shadow`, `--g-chrome`. `@theme` colours:
  `--color-neon-{magenta,violet,cyan,pink,blue,green}`, `--color-void`,
  `--color-ink`; breakpoint `xs` (28.125rem).
- **Palette rule (owner's request)**: purple and blue lead, pink is barely
  used. Gradients go **purple -> blue -> cyan** (`text-neon-gradient`), never
  pink -> cyan. Do not reintroduce `#ff2bd6`-style magenta as an accent.
- **Utilities** (`@utility`): `glass` (blur card with fallbacks for no
  backdrop-filter and reduced transparency), `glass-border` (masked gradient
  ring; `--ring-from/--ring-to`), `neon-glow` (`--glow`), `hud-corners`
  (corner brackets on `::after`; `--hud-color`), `text-neon-gradient`,
  `text-chrome`, `neon-pulse` (filter drop-shadow so it works on gradient
  text; `--pulse`), `blink-caret`.
- **Classes**: `.cyber-backdrop` (fixed glows + grid + dark scanlines; glass
  needs it behind to look like glass), `.glitch[data-text]`.
- **Fonts** (`_app.tsx`, next/font): Orbitron (`font-display`), Raleway
  (`font-body`), Roboto Slab (`font-sans`, original page), JetBrains Mono
  (`font-mono`), Noto Sans JP (fallback in all stacks, `preload:false`).
- Kept signature elements: shooting stars (`.shooting-stars` /
  `ShootingStars`), neon trace buttons (`NeonButtonReal`, `ButtonNeon3`),
  bulb switch, flip cards, timeline that lights up in view.
- **Tailwind class style**: the owner's tooling prefers the v4 canonical forms
  (`bg-(--g-bg)` over `bg-[var(--g-bg)]`, `max-w-337.5` over `max-w-[1350px]`).
  Use them in new code; both compile.

## 3D (three.js) rules — learned the hard way

- Every canvas is client-only through `components/cyber/canvas/index.ts`
  (`next/dynamic`, `ssr:false`). Never import a canvas file directly from a page.
- On `/` the canvases mount only when near the viewport (`useOnceInView`), so
  three.js (~1 MB) and the models are not in the initial load. Keep it that way.
- **Never use drei `<Html>`**: with React 19 it throws "Failed to execute
  'removeChild'" / "synchronously unmount a root" during Suspense swaps. Use
  DOM overlays outside `<Canvas>` (`CanvasLoader` uses `useProgress`).
- Browsers cap live WebGL contexts (~8-16). `/cyber` renders all tech balls in
  **one** canvas. Don't add a canvas per item.
- `ComputersCanvas`: `shadows="percentage"` (PCFSoftShadowMap is deprecated),
  `frameloop="demand"`, `PerspectiveCamera makeDefault`. On <=640px there are no
  OrbitControls (so touch can scroll the page) and `AimCamera` must call
  `camera.lookAt(0,0,0)` or the model is off-screen.
- `EarthCanvas` pauses (`frameloop="never"`) when out of view; it accepts a
  `className` for sizing (must stay `relative` for the loader overlay).
- Models were compressed with
  `npx @gltf-transform/cli optimize in.glb out.glb --compress meshopt --texture-compress webp --texture-size 1024`
  (desktop PC 15.8 MB -> 1.4 MB). drei `useGLTF` decodes meshopt automatically.
- **Licence**: both models are CC BY 4.0. Any page that shows one must render
  `<ModelCredits />` (main footer via `GlassFooter credits`, /cyber footer).

## Parallax rules

- `ParallaxScene` is a 250vh section with a sticky viewport; layers move with
  `useScroll` + `useTransform` (+ `useSpring`) at different speeds plus a small
  pointer parallax. `useReducedMotion()` makes every layer static.
- Props: `headingLevel` (`h1` on /parallax, `h2` on `/` because the hero owns
  the h1), `blend` (CSS mask on the tall section fades entry/exit edges into
  whatever is behind; the pinned middle stays opaque), `id`.
- The city art is generated SVG (`cityShapes.tsx`, seeded `mulberry32`), so
  it is deterministic between server and client renders.

## Accessibility and quality floor

- One `h1` per page; sections use `aria-labelledby` with their heading id.
- Visible focus rings (`focus-visible:outline-*`) on every interactive element.
- Decorative layers are `aria-hidden`; 3D stages are `<figure>` with an
  `sr-only` `<figcaption>`.
- Respect `prefers-reduced-motion` (CSS block in globals.css + motion's
  `useReducedMotion`) and `prefers-reduced-transparency` (glass fallback).
- No horizontal overflow at 390px and 1440px.

## Verifying UI

- Build, then serve the production build on another port so the Next dev
  overlay doesn't cover screenshots:
  `npm run build && npx next start -p 3004` (stop it afterwards; a stale server
  on the port serves an old build id and every chunk 404s).
- The chrome-devtools MCP profile is often locked on this machine. Fallback:
  `npm i puppeteer-core` in the session scratchpad (never in the repo) and
  launch `/usr/bin/google-chrome` headless with
  `--use-angle=swiftshader --enable-unsafe-swiftshader` so WebGL renders.
  Set `localStorage.theme` before load to test light/dark.
- Check: dark + light, 390px and 1440px, at least one non-default locale,
  console errors, `document.documentElement.scrollWidth - innerWidth === 0`.
- If `next build`/`next dev` stops with a "known security vulnerability"
  notice, rerunning continues. Check `npm audit --omit=dev`; a patch bump of
  `next` + `eslint-config-next` (same version) is the usual fix, but upgrading
  is the owner's call — mention it, don't do it unasked. Never run
  `npm audit fix --force` (it "fixes" lint advisories by downgrading
  `eslint-config-next` to 14).

## Gotchas

- `clsx` doesn't merge Tailwind conflicts: use `!` (e.g. `bg-[...]!`) to override.
- `next dev` writes the managed block at the bottom of this file. Leave it.
- Keep `.env.local` out of git (Gmail app password for Nodemailer).
- Don't commit unless the owner asks.

## Change log (high level)

- Original site (now `/original`): classic layout, Tailwind v4 migration.
- Added `/glass`, `/cyber`, `/parallax` redesigns; i18n (pt-BR/en/es/ja);
  `content/profile.ts` + dictionaries as single source of content.
- Palette shifted from pink to purple -> blue -> cyan.
- Original page translated + language menu; added EBM Group, BairesDev,
  DojoFind experiences; logo inset/background options.
- `/` became the main page combining glass + 3D workstation + neon city +
  3D globe; old layouts moved to URL-only, noindex routes; design switcher removed.
- Next 16.4.4 -> 16.4.6 (security: GHSA-mfr8-8qww-v76h, GHSA-vc7v-qv4w-wrv8);
  production deps audit clean. Remaining advisories are dev-only lint tooling
  via `picomatch` <=4.0.7 (no fixed release yet). Fixed the language-menu
  hydration mismatch on hash URLs.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
