# Symufolk — Landing Page (React)

The Symufolk marketing landing page, rebuilt from the original static design as a
component-based **React + Vite** app. Same visuals and behaviour, now maintainable.

## Run it

```bash
npm install
npm run dev        # dev server (http://localhost:5173)
npm run build      # production build → dist/
npm run preview    # serve the production build
```

## What's inside

- **Bilingual (EN / DE)** — toggle in the header, choice persisted to `localStorage`.
  All copy lives in [`src/i18n.jsx`](src/i18n.jsx).
- **Scroll reveal, count-up stats, and parallax** — implemented as hooks/components
  in [`src/hooks.jsx`](src/hooks.jsx) (respects `prefers-reduced-motion`).
- **Pricing modal** — full package detail opens from each plan's *Get Started*
  button ([`src/components/PricingModal.jsx`](src/components/PricingModal.jsx)).
- **Responsive** — grids collapse for tablet and mobile.

## Structure

```
src/
  main.jsx            App entry + LanguageProvider
  App.jsx             Section composition
  index.css           Design tokens, keyframes, reveal + hover, responsive
  i18n.jsx            EN/DE dictionary, LanguageContext, <T> / <TReveal>
  data.jsx            Content data (services, cases, pricing, faq, packages…)
  hooks.jsx           Reveal, CountUp, useParallax, useScrolled
  Icons.jsx           Inline line icons
  assets/             Logo + service icons (extracted from the original)
  components/         Header, Hero, Problem, About, Method, Services, Niches,
                      Cases, Testimonials, Guarantees, Process, Pricing,
                      PricingModal, Faq, FinalCta, Footer
```

## Notes

- Display font **Bricolage Grotesque** and body font **Hanken Grotesk** are loaded
  from Google Fonts in [`index.html`](index.html).
- Translated strings may contain trusted inline HTML (green highlights, arrows,
  `<br>`), rendered via the `<T>` / `<TReveal>` helpers.
- CTAs open a pre-filled email to `info@symufolk.com`.
