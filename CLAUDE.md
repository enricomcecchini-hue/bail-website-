# BAIL Website — Claude Reference

## What this is
Marketing website for BAIL (Bocconi AI Lab), a student association at Bocconi University. Built with Next.js, deployed on Vercel.

**Key messaging:** "AI as a professional skill, not a subject. Practical-first, always."
**Launch date:** September 2026

---

## Tech Stack
- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4 + inline styles (React `style` prop)
- **Font:** Inter (Google Fonts via `next/font`)
- **Analytics:** Vercel Analytics (`@vercel/analytics/react`)
- **Deployment:** Vercel (auto-deploys on push to `main`)
- **Package manager:** npm

---

## Project Structure
```
src/
  app/
    layout.tsx          # Root layout — Navbar, Footer, Analytics
    page.tsx            # Home page
    about/page.tsx      # About page
    blog/page.tsx       # Blog (coming soon placeholder)
    join/page.tsx       # Join/Applications page
    globals.css         # Global styles, Tailwind theme, CSS utility classes
  components/
    Navbar.tsx          # Sticky nav with mobile hamburger menu (client component)
    Footer.tsx          # Footer with nav links and social icons
```

---

## Pages
| Route | Status | Notes |
|-------|--------|-------|
| `/` | Live | Hero, approach cards, CTA |
| `/about` | Live | Mission, vision, differentiators |
| `/join` | Live | Application info (opens Sep 2026), benefits, who should apply |
| `/blog` | Placeholder | Coming Sep 2026; category filters and 3 preview cards shown |

---

## Design System

**Color palette (defined in `globals.css` via `@theme`):**
- Navy background: `#0B1120`
- Card background: `#0F1828`
- Border: `#1A2540`
- BAIL Blue (primary): `#1A56FF`
- BAIL Blue light: `#3B6FFF`
- Muted text: `#94A3B8`

**Reusable CSS classes (in `globals.css`):**
- `.btn-blue` — primary CTA button
- `.btn-ghost` — secondary outline button
- `.hover-card` / `.hover-lift` — card hover animations
- `.nav-link` / `.nav-link-active` — navbar link styles
- `.two-col-stack` — 2-column grid that stacks at 700px
- `.footer-link` / `.social-icon` — footer styles

**Styling convention:** Most pages use inline `style` props for layout and page-specific styles, combined with the global CSS classes above.

**Responsive breakpoints:** 680px (navbar collapses), 700px (two-col-stack)

---

## Key Details
- No API routes, no database, no auth — fully static
- No forms — the Join page links to external social channels
- Instagram: `https://www.instagram.com/bocconi.ai.lab/`
- LinkedIn: placeholder link (not set yet)
- Vercel Analytics is active — do not remove the `<Analytics />` component from `layout.tsx`

---

## Common Tasks

**Run dev server:**
```bash
npm run dev
```

**Deploy:** Push to `main` on GitHub — Vercel auto-deploys.

**Add a new page:**
Create `src/app/<name>/page.tsx` — Next.js App Router picks it up automatically. Add the route to the Navbar and Footer manually.

---

## Owner
Enrico Cecchini — founder of BAIL. Non-technical, so keep explanations simple and avoid jargon. He manages the site via Claude Code.
