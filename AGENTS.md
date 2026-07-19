# Resonant Mindfulness — AGENTS.md

## Project type
Static HTML funnel site in `site/` directory. No build system, no dependencies, no package manager.

## How to view
Open `site/index.html` in any browser — no dev server needed.

## File structure
```
/
├── site/                    ← deployable website root
│   ├── index.html           ← landing page (entry point)
│   ├── register.html        ← squeeze page (email capture)
│   ├── thank-you.html       ← confirmation page
│   ├── css/style.css        ← shared stylesheet
│   ├── js/main.js           ← shared JS (scroll reveals only)
│   └── assets/images/       ← images
├── docs/superpowers/        ← specs and plans
└── AGENTS.md
```

## Funnel flow
```
index.html → [Save My Spot] → register.html → [submit email → Brevo] → thank-you.html
```

## Architecture
- **Shared CSS/JS** — one `style.css` and one `main.js` used by all 3 pages
- **Fonts**: Google Fonts via `<link>` — Fraunces (display), Spectral (body), Caveat (handwriting/accents)
- **Animations**: IntersectionObserver triggers `.fade-up → .is-visible` for scroll reveals; SVG loop icon has CSS `breathe` keyframe animation
- **Form**: `register.html` POSTs directly to Brevo's form action URL (standard HTML form, no JS)
- **No framework, no build step** — pure static HTML
- **Responsive** via CSS media queries at 860px, 600px, 360px breakpoints
- **Accessibility**: `prefers-reduced-motion` respected for both CSS animations and JS scroll-behavior

## Conventions
- CSS custom properties (`:root` variables) define the full color palette and typography — never hardcode color values
- Class naming is descriptive lowercase with hyphens (`.hero-grid`, `.btn-primary`, `.who-yes`, `.squeeze-card`, `.thanks-card`)
- SVG loop icon is reused as the visual motif; uses class `.loop` with `.loop-small` and `.loop-breathe` variants

## Common tasks
- **Edit copy**: find the section by class name (`.hero h1`, `.mirror p`, `.card h3`, etc.) and update text directly
- **Change colors**: edit `:root` CSS variables in `site/css/style.css`
- **Add a page**: create `.html` file in `site/`, reference shared CSS/JS same as existing pages
- **Deploy**: upload `site/` folder to Cloudflare (Pages or Workers static assets)
