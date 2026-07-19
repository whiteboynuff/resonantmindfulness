# Resonant Mindfulness — AGENTS.md

## Project type
Single static HTML landing page (`resonant-mindfulness-landing.html`). No build system, no dependencies, no package manager.

## How to view
Open `resonant-mindfulness-landing.html` in any browser — no dev server needed.

## Architecture
- **Single file**: all HTML, CSS (embedded `<style>`), and JS (embedded `<script>`) in one file
- **Fonts**: Google Fonts via `<link>` — Fraunces (display), Spectral (body), Caveat (handwriting/accents)
- **Animations**: IntersectionObserver triggers `.fade-up → .is-visible` for scroll reveals; SVG loop icon has CSS `breathe` keyframe animation
- **No framework, no router, no assets folder** — everything including SVG icons is inline
- **Responsive** via CSS media queries at 860px, 600px, 360px breakpoints
- **Accessibility**: `prefers-reduced-motion` respected for both CSS animations and JS scroll-behavior

## Conventions
- CSS custom properties (`--paper`, `--teal`, etc.) define the full color palette and typography — never hardcode color values
- Class naming is descriptive lowercase with hyphens (`.hero-grid`, `.btn-primary`, `.who-yes`)
- SVG loop icon is reused as the visual motif; uses class `.loop` with `.loop-small` and `.loop-breathe` variants
- All section content is prose-driven marketing copy — edits are text changes, not template logic

## Common tasks
- **Edit copy**: find the section by class name (`.hero h1`, `.mirror p`, `.card h3`, etc.) and update text directly
- **Change colors**: edit `:root` CSS variables at lines 11-28
- **Add a section**: copy an existing `<section>` block, adapt class / content, and add its `.fade-up` observer will auto-register
- **Update CTA link**: `#signup` anchors in the header and hero point to the `#signup` section at line 602; the final CTA button (`#signup` section) has `href="#"` — update to actual signup URL when live
