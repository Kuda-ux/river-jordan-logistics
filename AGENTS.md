<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project: River Jordan Logistics Consultancy Website

**Stack:** Next.js 16.2.10 · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion 12

### Commands
- `npm run dev` — start development server (http://localhost:3000)
- `npm run build` — production build (must pass before committing)
- `npm run lint` — ESLint check

### Key Architecture Notes
- **Tailwind v4**: Custom colors are in `src/app/globals.css` inside `@theme {}`. No `tailwind.config.ts` needed.
  - Brand tokens: `navy`, `royal`, `brand`, `accent`, `surface`, `surface-dark`, `muted`, `muted-light`
  - Utility classes: `.glass`, `.glass-dark`, `.glass-white`, `.gradient-text`, `.gradient-text-white`, `.btn-primary`, `.btn-accent`, `.btn-outline`, `.shimmer-card`, `.animate-float`
- **App Router only** — all interactive components use `'use client'`
- **Fonts**: Inter (`--font-inter`) for body, Sora (`--font-sora`) for headings
- **Images**: Unsplash remote patterns configured in `next.config.ts`; logo at `public/logo.jpeg`
- **JSON-LD**: Injected in `src/app/layout.tsx` body via `<script type="application/ld+json">`
- **No `<head>` tags in layout** — use Next.js `Metadata` API instead

### Page Sections (in order)
1. `Hero` — full-screen parallax hero with CTAs
2. `Partners` — accreditation/association strip
3. `Statistics` — animated number counters (dark navy bg)
4. `About` — company overview + 6 Rights of Logistics
5. `Services` — 18 service cards with category filter
6. `WhyChooseUs` — 8 feature cards (dark navy bg)
7. `Process` — 7-step animated timeline
8. `Industries` — 10 industry cards
9. `DigitalInnovation` — tech roadmap (dark bg)
10. `Testimonials` — client carousel
11. `CTABanner` — mid-page conversion banner
12. `FAQ` — 8-item accordion
13. `Contact` — form + Google Maps + office info

### Contact Details
- Office: 408, 4th Floor, Equity House, Corner Jason Moyo & Rezende Street, Harare
- Phone: +263 242 757034 / +263 710 781705 (WhatsApp) / +44 7979 696097 (UK)
- WhatsApp link: https://wa.me/263710781705
