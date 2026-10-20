# Developer Portfolio

A portfolio template for developers and people working in IT. Every page is prerendered to static HTML, light and dark modes are both first-class, and all the content lives in one folder you replace with your own.

Built on Next.js 16 (App Router, Cache Components), React 19, Tailwind CSS v4 and Motion.

```bash
bun install
bun run dev
```

---

## Make it yours

Three edits cover almost everything.

### 1. Replace the content

Everything written on the site lives in [`src/content/`](src/content/). Nothing else needs touching to change the words, the projects or the links.

| File | What it holds |
| --- | --- |
| [site.ts](src/content/site.ts) | Name, URL, nav items, SEO defaults, copyright start year |
| [profile.ts](src/content/profile.ts) | Headline, role, bio paragraphs, stats, availability, location |
| [socials.ts](src/content/socials.ts) | Social links shown in the header, footer and contact page |
| [skills.ts](src/content/skills.ts) | Skill groups, each item tagged `strong` / `working` / `learning` |
| [experience.ts](src/content/experience.ts) | Work history for the About timeline |
| [education.ts](src/content/education.ts) | Education entries |
| [projects.ts](src/content/projects.ts) | Every project; each one generates its own detail page |
| [contact.ts](src/content/contact.ts) | Contact copy and channels |

The shapes these files must satisfy are in [`src/types/content.ts`](src/types/content.ts). Leave that file alone and TypeScript will tell you the moment your content is missing a field.

Four rules worth knowing:

- **Dates are `"YYYY-MM"` strings**, never `Date` objects. Use `end: null` for "present".
- **Keep `satisfies`, don't switch to `:`.** `satisfies readonly Project[]` checks your data while preserving literal types.
- **No Tailwind classes in content.** Content carries meaning (`status: "live"`); components decide how that looks.
- **`projects.ts` must never be empty.** An empty project list fails the build, because the detail route needs at least one path to prerender.

### 2. Change the brand colors

Two numbers at the top of [`src/app/globals.css`](src/app/globals.css) drive the entire palette:

```css
:root {
  --hue-brand: 272;   /* violet */
  --hue-accent: 196;  /* cyan */
}
```

Every color is OKLCH with its hue pulled from one of these, so changing `--hue-brand` to `150` re-skins the whole site — light and dark — in one edit. Lightness and chroma are already tuned for contrast in both themes, so you keep accessible text without re-checking anything.

Need more than a hue shift? The raw ramps live in `:root` and `.dark` just below. `@theme inline` maps them to Tailwind's `--color-*` names.

> **Keep the `inline` keyword on `@theme`.** Without it Tailwind bakes the light value into every utility and dark mode stops working, with no error to tell you why.

### 3. Swap the display font

[`src/app/layout.tsx`](src/app/layout.tsx) loads three fonts: Bricolage Grotesque for display, Geist for body, Geist Mono for labels and eyebrows. Changing the display font is usually enough to make the site feel like yours:

```ts
import { Outfit } from "next/font/google";

const display = Outfit({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});
```

Keep the `variable` name as-is and the rest of the design system picks it up.

### Replace the images

Swap the files in [`public/images/`](public/images/) (avatar and project covers) and [`src/app/opengraph-image.png`](src/app/) for your own. The placeholders are plain SVGs you can open and edit. Paths and dimensions are declared alongside each project in `projects.ts`.

---

## How it is organised

```
src/
├── app/              Routes, the token system, sitemap/robots/OG
├── components/
│   ├── providers.tsx The single root client boundary
│   ├── layout/       Header, nav, mobile sheet, theme toggle, footer
│   ├── sections/     Page-level blocks composed from primitives
│   ├── ui/           Reusable primitives (Container, Section, Button, Card…)
│   ├── motion/       Four animation wrappers
│   └── seo/          Structured data
├── content/          ← your content goes here
├── lib/              Selectors, formatting, metadata builder
└── types/            The content contract
```

Pages are deliberately thin. `app/about/page.tsx` composes four sections and exports metadata; the sections compose primitives. To add a page, add a folder under `app/`, compose sections, and add a nav entry to `site.ts`.

Files and folders are kebab-case; exported components are PascalCase. That single rule avoids the class of bug where an import resolves on a Mac or Windows machine and 404s on a case-sensitive Linux deploy.

### Animation

Four wrappers in [`src/components/motion/`](src/components/motion/) cover everything:

- `Reveal` — fade and rise on scroll into view. The workhorse.
- `Stagger` / `StaggerItem` — sequenced children. Works around server-rendered content, because the wrapper is the client component and your markup is just `children`.
- `TextReveal` — masked per-word headline reveal. Used twice on purpose; it stops feeling intentional if it's everywhere.
- `HoverLift` — hover and press micro-interaction.

Reduced motion is respected in three layers: `MotionConfig reducedMotion="user"`, a CSS media block for what Motion doesn't control, and an explicit bail-out in `TextReveal` (its mask would otherwise leave text clipped and invisible). If you add a mask-based animation, give it the same bail-out.

### Theme

`next-themes` with `attribute="class"`, matched by one line in `globals.css`:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

The theme is applied by a script that runs while the HTML is still parsing, so there's no flash on load and the server output stays fully static. The toggle reads the current theme only inside its click handler, which is why it needs no `mounted` flag or placeholder.

---

## Working with Next.js 16 Cache Components

This template runs with `cacheComponents: true`, which is stricter than older Next.js. If you extend it, four rules will save you time:

1. **Never read the clock during render.** `new Date()`, `Date.now()`, `Math.random()` and `crypto.randomUUID()` are build errors in prerendered code and cannot be suppressed. The one clock read in this project is isolated in [`src/lib/time.ts`](src/lib/time.ts) behind `"use cache"`. Follow that pattern.
2. **Client hooks that read the URL need a `<Suspense>` boundary** when the pathname isn't known at build time. `usePathname` in the header sits behind one for exactly this reason — it also renders during the prerender of the `/projects/[slug]` fallback shell. `useSearchParams` always needs one.
3. **State survives navigation.** Routes are hidden rather than unmounted, so dropdowns and sheets stay open unless you close them. The mobile nav closes both on hide and on navigate.
4. **Dynamic routes need a non-empty `generateStaticParams`**, and with Partial Prefetching enabled you `await params` *inside* the Suspense boundary, not above it.

The root layout exports `ensureStatic = "navigation"`, which fails the build if a change quietly introduces request-time server work. If it ever blocks something you intend, remove it rather than working around it.

---

## Scripts

```bash
bun run dev     # dev server with Cache Components validation in the overlay
bun run build   # production build; check the route table is all ○ and ◐
bun run lint
```

Cache Components insights appear only in the dev overlay or the dev-server log — an affected route still returns `200`, so the browser alone won't tell you.

## Deploying

Works on any Node host. On Vercel it needs no configuration. Set `url` in `site.ts` to your real domain before deploying, or canonical URLs, the sitemap and OG tags will all point at `example.com`.
