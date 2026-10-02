# Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build fast static portfolio — Hero, About, Projects, Experience, Skills, Contact — 0 JS default, animasi GPU, Lighthouse 95+.

**Architecture:** Astro 5 static output. `index.astro` composes sections from typed `src/data/*.ts`. `AnimatedWrapper` islands isolate Motion. No backend, no CMS.

**Tech Stack:** Astro 5, TypeScript strict, Tailwind 4, Motion, pnpm

**Spec:** `docs/superpowers/specs/2026-10-02-portfolio-design.md`

## Global Constraints

- Static output, deploy Vercel/Cloudflare Pages
- JS <50KB, CSS <100KB
- Animate only opacity/transform, respect prefers-reduced-motion
- No GSAP/parallax/3D in v1
- Strict TS, semantic HTML, keyboard focus visible
- Images via astro:assets, lazy below fold, AVIF/WebP
- Empty data → section hidden

## Review Focus

- Missing project image breaks grid — expect placeholder or no broken img icon
- Empty arrays render empty headings — expect section hidden
- 360px viewport horizontal scroll — expect no overflow
- prefers-reduced-motion ignored — expect animation disabled
- Mailto link missing/broken on mobile — expect valid href and fallback text

---

### Task 1: Scaffolding Astro + Tailwind

**Files:**
- Create: `package.json`, `astro.config.mjs`, `tailwind.config.mjs`, `tsconfig.json`, `src/styles/global.css`, `src/pages/index.astro` (placeholder)
- Test: `verify: pnpm build`

**Interfaces:**
- Consumes: nothing
- Produces: Astro dev/build pipeline, Tailwind processing

- [ ] **Step 1: Scaffold Astro**
  Run: `pnpm create astro@latest . -- --template minimal --yes --no-git --install` then `pnpm add -D tailwindcss @tailwindcss/vite` + `pnpm add motion`
  Add `astro.config.mjs` with `vite.plugins: [tailwindcss()]` and `output: "static"`

- [ ] **Step 2: Verify build fails before fix / passes after**
  Run: `pnpm build` Expected: PASS, `dist/index.html` exists

- [ ] **Step 3: Commit**
  ```bash
  git add -A && git commit -m "chore: scaffold astro tailwind motion"
  ```

### Task 2: Base Layout + Global Styles + SEO

**Files:**
- Create: `src/layouts/Base.astro`
- Modify: `src/pages/index.astro`, `src/styles/global.css`
- Test: `pnpm build` + manual check view-source

**Interfaces:**
- Consumes: Task 1 pipeline
- Produces: `Base.astro` props `{ title: string, description: string }` → HTML shell

- [ ] **Step 1: Write Base.astro**
  `<html lang>`, `<meta charset viewport>`, `<title>`, `<meta description>`, canonical, OG minimal, slot, global.css import

- [ ] **Step 2: Wire index.astro into Base**
  `index.astro` → `Base title="Portfolio — Nama" description="..."` → "Hello" placeholder

- [ ] **Step 3: Add global.css**
  Tailwind import, system font stack, focus-visible ring, `prefers-reduced-motion` reduce, no horizontal overflow

- [ ] **Step 4: Verify**
  Run: `pnpm build` Expected: PASS, view-source has title/description

- [ ] **Step 5: Commit**
  ```bash
  git add src/layouts/Base.astro src/pages/index.astro src/styles/global.css && git commit -m "feat: base layout seo"
  ```

### Task 3: Typed Data Layer

**Files:**
- Create: `src/data/projects.ts`, `src/data/experience.ts`, `src/data/skills.ts`
- Test: `pnpm build` (TS strict)

**Interfaces:**
- Consumes: nothing
- Produces:
  - `Project { id, title, desc, tags: string[], link?: string, image?: string }`
  - `Experience { id, role, org, period, bullets: string[] }`
  - `SkillGroup { category, items: string[] }`

- [ ] **Step 1: Create data files with 2-3 dummy entries each, exported const arrays**

- [ ] **Step 2: Verify TS strict**
  Run: `pnpm build` Expected: PASS (no type errors)

- [ ] **Step 3: Commit**
  ```bash
  git add src/data && git commit -m "feat: typed data arrays"
  ```

### Task 4: UI Primitives — Section + AnimatedWrapper

**Files:**
- Create: `src/components/ui/Section.astro`, `src/components/ui/AnimatedWrapper.astro`
- Test: `pnpm build` + reduced-motion check

**Interfaces:**
- Consumes: Task 2 layout
- Produces:
  - `Section Props { id: string, title: string, subtitle?: string }`
  - `AnimatedWrapper` wraps slot, `client:visible`, motion `initial {opacity:0,y:24} animate {opacity:1,y:0} transition {duration:0.5} viewport {once:true}`

- [ ] **Step 1: Implement Section.astro** — container max-w, padding, heading hierarchy

- [ ] **Step 2: Implement AnimatedWrapper.astro** — `import { motion } from "motion"` → `motion.div` with reveal props, respects `prefers-reduced-motion` (CSS media query disables transform)

- [ ] **Step 3: Verify empty section hidden pattern** — test `{arr.length>0 && <Section>}` in index.astro temporary, build

- [ ] **Step 4: Commit**
  ```bash
  git add src/components/ui && git commit -m "feat: section animatedwrapper"
  ```

### Task 5: Hero + About

**Files:**
- Create: `src/components/Hero.astro`, `src/components/About.astro`
- Modify: `src/pages/index.astro`
- Test: `pnpm build` + 360px no overflow

**Interfaces:**
- Consumes: Section, AnimatedWrapper, data (About static text)
- Produces: hero with stagger, about with prose

- [ ] **Step 1: Hero.astro** — name, role, tagline, 2 CTA (Projects link #projects, Contact mailto), stagger via AnimatedWrapper per line `delay: i*0.08`

- [ ] **Step 2: About.astro** — 2-3 paragraph placeholder + Section wrapper

- [ ] **Step 3: Compose in index.astro** — import Hero About, verify order Hero→About

- [ ] **Step 4: Verify**
  Run: `pnpm build` Expected: PASS, no horizontal scroll at 360px

- [ ] **Step 5: Commit**
  ```bash
  git add src/components/Hero.astro src/components/About.astro src/pages/index.astro && git commit -m "feat: hero about"
  ```

### Task 6: Projects + Experience + Skills

**Files:**
- Create: `src/components/Projects.astro`, `src/components/Experience.astro`, `src/components/Skills.astro`
- Modify: `src/pages/index.astro`
- Test: `pnpm build` + missing image fallback

**Interfaces:**
- Consumes: Section, AnimatedWrapper, Task 3 data
- Produces: grid cards, timeline, skill groups

- [ ] **Step 1: Projects.astro** — grid `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`, card hover `hover:-translate-y-1 hover:shadow-lg transition`, image `onerror` hide fallback, empty array → return null

- [ ] **Step 2: Experience.astro** — vertical timeline `border-l`, dots, period + role/org + bullets

- [ ] **Step 3: Skills.astro** — groups `category` heading + pill grid `flex flex-wrap gap-2`

- [ ] **Step 4: Verify hiding + image fallback**
  Temporarily set `projects = []` in `index.astro`, run `pnpm build`, confirm no Projects heading in `dist/index.html`. Set one project `image` to bogus path, confirm grid doesn't break. Revert temp changes. Expected: PASS, section hidden, layout intact

- [ ] **Step 5: Commit**
  ```bash
  git add src/components/Projects.astro src/components/Experience.astro src/components/Skills.astro src/pages/index.astro && git commit -m "feat: projects experience skills"
  ```

### Task 7: Contact + Polish + Final Verification

**Files:**
- Create: `src/components/Contact.astro`
- Modify: `src/pages/index.astro`, `src/layouts/Base.astro` (footer)
- Test: Lighthouse + keyboard nav

**Interfaces:**
- Consumes: Section, all prior
- Produces: mailto CTA, footer, final page

- [ ] **Step 1: Contact.astro** — heading, email `mailto:` button + copy fallback text, no form backend. Props: `email: string`

- [ ] **Step 2: Add footer to Base.astro** — copyright + social links placeholder

- [ ] **Step 3: Final compose index.astro** — order Hero About Projects Experience Skills Contact

- [ ] **Step 4: Verify**
  Run: `pnpm build` Expected: PASS
  Manual: keyboard Tab through all links, check focus ring, toggle prefers-reduced-motion, run Lighthouse mobile

- [ ] **Step 5: Commit**
  ```bash
  git add -A && git commit -m "feat: contact polish final"
  ```
