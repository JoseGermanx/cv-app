# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start development server (port 3000)
npm run build      # Production build
npm run lint       # Run ESLint
npm run test       # Run Jest test suite
npm run test:watch # Run Jest in watch mode
```

## Architecture

This is a **Next.js 14 App Router** personal portfolio/CV website with TypeScript and Tailwind CSS.

### Key paths

- `src/app/` — All routes and pages (App Router)
- `src/app/ui/` — Reusable React components (Navbar, Hero, Contact, Terminal, etc.)
- `src/app/lib/` — Utilities: `article.ts` handles markdown parsing/sorting; `hooks/use-scroll.ts` for scroll detection
- `src/app/articles/` — Markdown blog posts (parsed with gray-matter + remark)
- `types/index.ts` — Shared types (`ArticleItem`)

### Path alias

`@/*` maps to `./src/*` (configured in `tsconfig.json`).

### Routing

- `/` — Home (Hero, TechStack, Contact)
- `/blog` — Article listing (reads from `src/app/articles/*.md`)
- `/post/[slug]` — Dynamic article page
- `/projects`, `/links`, `/links/[id]`, `/terminal` — Additional pages

### Content (blog)

Articles are `.md` files in `src/app/articles/`. Each file has front matter with `title` and `date`. The `lib/article.ts` utilities read, sort, and convert them to HTML using remark.

### Notable integrations

- **Framer Motion** — page/component animations
- **Typed.js** — typewriter effect in Hero
- **EmailJS** — contact form (no backend needed)
- **react-terminal-ui** — interactive terminal on `/terminal`
- **Socket.io-client** — included as dependency

### Image domains

Remote images allowed from: `upload.wikimedia.org`, `tailwindui.com`, `res.cloudinary.com` (configured in `next.config.mjs`).

### ESLint

`eslint.ignoreDuringBuilds: true` is set — builds succeed even with lint warnings.
