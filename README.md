# Flagswitch

A modern SaaS landing page for **Flagswitch** - a developer-first feature flag platform. Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Features

- **Clean modern SaaS design** with professional spacing and typography
- **Dark + light theme** with system preference detection and toggle
- **Fully responsive** layout with mobile navigation
- **Smooth scroll** for in-page anchor links
- **Reusable Astro components**: Header, Footer, Hero, Features, CodeExample, HowItWorks, Pricing
- **Syntax-highlighted code block** (Python SDK example)
- **SEO**: meta title, description, Open Graph, Twitter cards, canonical URL

## Get started

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Commands

| Command       | Action                                      |
| -------------| ------------------------------------------- |
| `npm run dev`| Start dev server at `localhost:4321`        |
| `npm run build` | Build for production to `./dist/`        |
| `npm run preview` | Preview production build locally       |

## Project structure

```
src/
  components/   # Reusable UI (Header, Footer, Hero, Features, etc.)
  layouts/      # Layout.astro (theme + SEO)
  pages/        # index.astro
  styles/       # global.css (Tailwind + smooth scroll)
```

## Customization

- **Site URL**: Set `site` in `astro.config.mjs` for canonical and OG URLs.
- **Theme**: Theme toggle and `dark` class on `<html>`; Tailwind `dark:` utilities throughout.
- **Brand color**: Tailwind `brand-*` palette in `tailwind.config.mjs` (sky blue). Change as needed.
