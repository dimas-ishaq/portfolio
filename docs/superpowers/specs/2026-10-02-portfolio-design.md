# Portfolio Design Spec

**Date:** 2026-10-02
**Status:** Design approved in chat; awaiting written-spec review

## Goal

Build a fast, animated static portfolio that can later support dynamic content and a blog without a structural rewrite.

## Scope

Included:

- Hero
- About
- Projects
- Experience / Timeline
- Skills / Tech Stack
- Contact
- Responsive layout
- SEO metadata
- Accessible motion preferences

Deferred:

- Blog
- Authentication
- Database
- CMS
- Backend contact processing
- Heavy parallax and 3D effects

## Technology

- Astro 5
- TypeScript with strict checking
- Tailwind CSS 4
- Motion for lightweight interactive animation
- System fonts plus, at most, one self-hosted display font
- Static output deployed to Vercel or Cloudflare Pages

Astro renders the portfolio without client JavaScript by default. Motion is isolated to interactive or animated islands.

## Structure

```text
src/
  layouts/Base.astro
  pages/index.astro
  components/
    Hero.astro
    About.astro
    Projects.astro
    Experience.astro
    Skills.astro
    Contact.astro
    ui/Section.astro
    ui/AnimatedWrapper.astro
  data/
    projects.ts
    experience.ts
    skills.ts
  styles/global.css
astro.config.mjs
```

`Base.astro` owns document metadata, canonical URL, global styles, and Astro view-transition configuration if enabled. `index.astro` composes sections and passes typed data. Content stays in typed TypeScript arrays initially.

The future blog can use Astro Content Collections with Markdown/MDX and schema validation. This is a planned extension, not part of the first implementation.

## Component Design

- `Section.astro`: shared section ID, heading, spacing, and container layout.
- `AnimatedWrapper.astro`: one reveal behavior using opacity and transform; runs once when visible.
- Section components: mostly static Astro components with typed props.
- `Projects.astro`: responsive project-card grid. No client-side filter until filtering is required.
- `Experience.astro`: accessible vertical timeline.
- `Skills.astro`: semantic grouped list/grid; icons remain optional and decorative.
- `Contact.astro`: accessible email CTA using `mailto:`; no server dependency.

Data flow:

```text
index.astro -> typed data arrays -> section components -> static HTML
                                  \-> AnimatedWrapper islands where needed
```

Empty data arrays must not render empty sections.

## Visual and Motion Behavior

- Hero: heading and CTA stagger animation.
- Sections: reveal from `opacity: 0` and `translateY(24px)` once on viewport entry.
- Project cards: subtle hover lift and shadow change.
- Animate only `opacity` and `transform` for smooth rendering.
- Disable or reduce nonessential animation under `prefers-reduced-motion: reduce`.
- No GSAP, parallax, or 3D in the initial release.

## Performance and Accessibility

Targets:

- Lighthouse mobile score: 95+ where content and hosting permit.
- Initial JavaScript: under 50 KB.
- CSS: under 100 KB.
- No horizontal overflow at 360px viewport width.
- Images use Astro asset processing, responsive dimensions, AVIF/WebP where useful, and lazy loading below the fold.
- Image alt text is required for meaningful images; decorative images use empty alt text.
- Semantic headings, landmarks, keyboard-visible focus, sufficient contrast, and accessible link labels.
- Contact action has a non-JavaScript fallback.

## Error and Content Handling

- Strict TypeScript catches invalid component props and data shapes.
- Missing optional project images use a visual placeholder or omit the image region; they must not break layout.
- Empty collections suppress their section.
- `mailto:` is intentionally backend-free; transactional contact handling is deferred until a backend requirement exists.

## Verification

Initial verification:

1. Run `pnpm build`.
2. Check output for TypeScript/build errors.
3. Check responsive layouts at 360px, tablet, and desktop widths.
4. Check keyboard navigation and reduced-motion behavior.
5. Run one mobile Lighthouse audit.
6. Confirm animation remains smooth and does not cause layout shift.

No test framework is required for the static first release. The build plus accessibility/performance checks are the verification ceiling for this scope.

## Deliberate Simplifications

- No CMS or database until content-management needs are real.
- No client-side project filter until the project count justifies it.
- No GSAP until parallax or timeline choreography requires it.
- No server contact form until spam protection, delivery, or analytics requires backend processing.
