# Resonant Mindfulness — Funnel Site

## Overview

Convert the existing single-file landing page into a 3-page lead gen funnel with a shared CSS/JS architecture and Brevo email capture.

## Pages

| Page | File | Description |
|------|------|-------------|
| Landing | `index.html` | Existing page, renamed and refactored (CSS/JS extracted) |
| Registration | `register.html` | Minimal squeeze page — headline, email form, trust line |
| Thank-you | `thank-you.html` | Confirmation page — success message, next steps, social proof |

## Flow

```
index.html → [Save My Spot] → register.html → [submit email → Brevo] → thank-you.html
```

## File Structure

```
/
├── index.html
├── register.html
├── thank-you.html
├── css/
│   └── style.css              ← shared, used by all 3 pages
├── js/
│   └── main.js                ← shared, IntersectionObserver + form handler
├── assets/
│   └── images/                ← future
└── AGENTS.md
```

## Architecture

- **Static HTML only** — no build system, no framework, no server
- **Single shared stylesheet** (`css/style.css`) — all page styles in one file with labeled sections
- **Single shared JS** (`js/main.js`) — IntersectionObserver for scroll reveals + Brevo form POST
- **Colors, fonts, and variables** stay in `:root` as they are now
- **Brevo integration** — `register.html` form sends a POST to Brevo's API (form action or fetch), no backend

## Registration Page Layout

- Header (same wordmark + minimal nav)
- Single-column centered content:
  - Eyebrow: "reserve your spot"
  - Headline: short, benefit-driven
  - Subhead: 1-2 sentences
  - Email input + submit button
  - Trust line: "Free · No card · Unsubscribe anytime"
- Footer

## Thank-you Page Layout

- Header
- Centered content:
  - Check/confirmation icon
  - Headline: "You're in!"
  - Body: check email, workshop details, what to expect
  - CTA: "Add to Calendar" placeholder or check email reminder
- Footer

## Constraints

- No build tools, no package.json, no dependencies
- Must open directly in a browser without a dev server
- CSS custom properties (`:root`) remain the source of truth for all colors
- `prefers-reduced-motion` respected
- Brevo form uses their standard embed approach (form action POST or API)
