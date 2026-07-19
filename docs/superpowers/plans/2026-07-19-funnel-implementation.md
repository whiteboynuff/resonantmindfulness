# Resonant Mindfulness Funnel Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure single-file landing page into a professional 3-page funnel with shared CSS/JS and Brevo email capture.

**Architecture:** Static HTML pages in `site/` directory, shared `css/style.css` and `js/main.js`, Brevo form POST for email capture. No build tools.

**Tech Stack:** Pure HTML/CSS/JS, Brevo (email form), Netlify-ready.

---

### Task 1: Create directory structure

**Files:**
- Create: `site/css/`
- Create: `site/js/`
- Create: `site/assets/images/`
- Create: `site/assets/`

- [ ] **Step 1: Create directories**

```bash
New-Item -ItemType Directory -Path "site/css","site/js","site/assets/images" -Force
```

- [ ] **Step 2: Create `.gitkeep` in empty folders**

```bash
New-Item -ItemType File -Path "site/assets/images/.gitkeep" -Force
```

- [ ] **Step 3: Commit**

```bash
git add site/
git commit -m "chore: create site directory structure"
```

---

### Task 2: Extract and write shared CSS (`site/css/style.css`)

**Files:**
- Create: `site/css/style.css`

- [ ] **Step 1: Write the shared stylesheet**

Content is all CSS from `resonant-mindfulness-landing.html` lines 10-453 (`<style>` block), exactly as-is. No changes.

- [ ] **Step 2: Verify file written correctly**

```bash
Get-ChildItem -LiteralPath "site/css/style.css"
```

- [ ] **Step 3: Commit**

```bash
git add site/css/style.css
git commit -m "feat: extract shared stylesheet from landing page"
```

---

### Task 3: Extract and write shared JS (`site/js/main.js`)

**Files:**
- Create: `site/js/main.js`

- [ ] **Step 1: Write the shared JS**

Content is the IntersectionObserver script from `resonant-mindfulness-landing.html` lines 616-621:

```js
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); });
}, { threshold: 0.15 });
document.querySelectorAll('.fade-up').forEach(el => io.observe(el));
```

- [ ] **Step 2: Commit**

```bash
git add site/js/main.js
git commit -m "feat: extract shared JS from landing page"
```

---

### Task 4: Create `site/index.html` (refactored landing page)

**Files:**
- Create: `site/index.html`

- [ ] **Step 1: Write `site/index.html`**

Same HTML body as `resonant-mindfulness-landing.html` (lines 1-624) with these changes:
- Remove inline `<style>` block (lines 10-453), replace with `<link rel="stylesheet" href="css/style.css">`
- Remove inline `<script>` block (lines 616-621), replace with `<script src="js/main.js" defer></script>`
- Update CTA button `href` in header (line 460): `href="#signup"` → `href="register.html"`
- Update hero CTA (line 476): `href="#signup"` → `href="register.html"`
- Update CTA in bonus section (line 574): `href="#signup"` → `href="register.html"`
- Update final CTA button (line 606): `href="#"` → `href="register.html"`
- Keep `<link>` to Google Fonts in `<head>`

- [ ] **Step 2: Verify page opens without errors**

Open in browser, check for 404s on CSS/JS paths.

- [ ] **Step 3: Commit**

```bash
git add site/index.html
git commit -m "feat: create index.html with external CSS/JS and updated CTA links"
```

---

### Task 5: Create `site/register.html` (squeeze page)

**Files:**
- Create: `site/register.html`

- [ ] **Step 1: Write `site/register.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Resonant Mindfulness — Reserve Your Spot</title>
<meta name="description" content="Join the free Nervous System Reset workshop. Register for the next session.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Spectral:ital,wght@0,400;0,500;0,600;1,400&family=Caveat:wght@500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/style.css">
<style>
  .squeeze {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .squeeze-main {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 0;
  }
  .squeeze-card {
    background: var(--cream);
    border-radius: 26px;
    padding: 52px 44px;
    max-width: 520px;
    width: 100%;
    text-align: center;
    box-shadow: 0 12px 40px rgba(36,72,77,0.12);
  }
  .squeeze-card h1 {
    font-size: clamp(1.6rem, 3vw, 2rem);
    margin-bottom: 12px;
  }
  .squeeze-card p {
    color: var(--ink-soft);
    font-size: 1.05rem;
    margin-bottom: 28px;
  }
  .form-group {
    margin-bottom: 18px;
    text-align: left;
  }
  .form-group label {
    display: block;
    font-family: var(--body);
    font-weight: 500;
    font-size: 0.9rem;
    color: var(--ink);
    margin-bottom: 6px;
  }
  .form-group input {
    width: 100%;
    padding: 14px 18px;
    border: 2px solid var(--paper-line);
    border-radius: 12px;
    font-family: var(--body);
    font-size: 1rem;
    color: var(--ink);
    background: var(--paper);
    transition: border-color .25s ease;
    box-sizing: border-box;
  }
  .form-group input:focus {
    outline: none;
    border-color: var(--teal);
  }
  .squeeze-card .btn {
    width: 100%;
    justify-content: center;
    font-size: 1.05rem;
    margin-top: 6px;
  }
  .form-trust {
    font-family: var(--hand);
    font-size: 1rem;
    color: var(--ink-soft);
    margin-top: 18px;
  }
  .form-error {
    color: var(--rose);
    font-size: 0.85rem;
    margin-top: 10px;
    display: none;
  }
  .form-error.is-visible { display: block; }
  .squeeze-card .loop-breathe {
    width: 52px;
    height: 52px;
    margin: 0 auto 18px;
  }
  @media (max-width: 600px) {
    .squeeze-card { padding: 36px 24px; }
  }
</style>
</head>
<body class="squeeze">

<header>
  <div class="wrap">
    <div class="wordmark">Resonant <span>Mindfulness</span></div>
    <a class="btn btn-primary" href="index.html">Back to Home</a>
  </div>
</header>

<main class="squeeze-main">
  <div class="wrap">
    <div class="squeeze-card fade-up is-visible">

      <svg class="loop loop-breathe" viewBox="0 0 120 120"><path d="M60,14 C92,14 108,40 108,62 C108,90 84,108 55,108 C26,108 8,90 8,60 C8,34 26,11 51,9"/></svg>

      <span class="eyebrow" style="display:block;text-align:center;">Reserve Your Free Spot</span>
      <h1>Your Nervous System Reset</h1>
      <p>Enter your email below and we'll send you the workshop details plus your free copy of the Resonant Mindfulness book.</p>

      <!-- ============================================ -->
      <!-- BREVO FORM — replace action URL with your     -->
      <!-- Brevo list form action when live              -->
      <!-- ============================================ -->
      <form id="register-form" action="#" method="POST">
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" id="email" name="EMAIL" placeholder="you@example.com" required autocomplete="email">
        </div>
        <button class="btn btn-primary" type="submit">Reserve My Free Spot →</button>
        <p class="form-error" id="form-error">Please enter a valid email address.</p>
      </form>
      <!-- ============================================ -->

      <p class="form-trust">Free live workshop · Runs every two weeks · Unsubscribe anytime</p>

    </div>
  </div>
</main>

<footer>
  <div class="wrap">Resonant Mindfulness — a practice older than written history, made to fit inside your ordinary Tuesday.</div>
</footer>

<script src="js/main.js" defer></script>
</body>
</html>
```

- [ ] **Step 2: Commit**

```bash
git add site/register.html
git commit -m "feat: create registration squeeze page with email form"
```

---

### Task 6: Create `site/thank-you.html`

**Files:**
- Create: `site/thank-you.html`

- [ ] **Step 1: Write `site/thank-you.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Resonant Mindfulness — You're Registered!</title>
<meta name="description" content="You're registered for the Nervous System Reset workshop.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Spectral:ital,wght@0,400;0,500;0,600;1,400&family=Caveat:wght@500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/style.css">
<style>
  .thanks {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .thanks-main {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 0;
  }
  .thanks-card {
    background: var(--cream);
    border-radius: 26px;
    padding: 52px 44px;
    max-width: 560px;
    width: 100%;
    text-align: center;
    box-shadow: 0 12px 40px rgba(36,72,77,0.12);
  }
  .thanks-card h1 {
    font-size: clamp(1.8rem, 3.4vw, 2.4rem);
    margin-bottom: 12px;
  }
  .thanks-card .sub {
    color: var(--ink-soft);
    font-size: 1.08rem;
    margin-bottom: 24px;
  }
  .thanks-card .check-wrap {
    width: 72px;
    height: 72px;
    margin: 0 auto 22px;
    border-radius: 50%;
    background: var(--sage-panel);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .thanks-card .check-wrap svg {
    width: 36px;
    height: 36px;
  }
  .thanks-details {
    background: var(--sage-panel);
    border-radius: 16px;
    padding: 24px;
    margin: 24px 0;
    text-align: left;
  }
  .thanks-details h3 {
    font-size: 1rem;
    margin-bottom: 6px;
  }
  .thanks-details p {
    font-size: 0.95rem;
    color: var(--ink-soft);
    margin: 0 0 12px;
  }
  .thanks-details p:last-child { margin-bottom: 0; }
  .thanks-card .btn { margin-top: 6px; }
  @media (max-width: 600px) {
    .thanks-card { padding: 36px 24px; }
  }
</style>
</head>
<body class="thanks">

<header>
  <div class="wrap">
    <div class="wordmark">Resonant <span>Mindfulness</span></div>
    <a class="btn btn-primary" href="index.html">Back to Home</a>
  </div>
</header>

<main class="thanks-main">
  <div class="wrap">
    <div class="thanks-card fade-up is-visible">

      <div class="check-wrap">
        <svg viewBox="0 0 36 36" fill="none" stroke="var(--teal)" stroke-width="3" stroke-linecap="round">
          <path d="M8 19l6 6 14-14"/>
        </svg>
      </div>

      <h1>You're in!</h1>
      <p class="sub">Check your inbox for the workshop link and your free book download.</p>

      <div class="thanks-details">
        <h3>What happens next</h3>
        <p><strong>The workshop link</strong> — You'll receive an email with the Zoom link and calendar invite within the next few minutes.</p>
        <p><strong>Your free book</strong> — The same email includes a download link for "Resonant Mindfulness," yours to keep.</p>
        <p><strong>Can't make it?</strong> — The workshop runs every two weeks. Reply to the confirmation email and we'll move you to the next session.</p>
      </div>

      <p class="sub" style="font-size:0.95rem;">In the meantime, explore the method on the home page.</p>
      <a class="btn btn-primary" href="index.html">Back to Home →</a>

    </div>
  </div>
</main>

<footer>
  <div class="wrap">Resonant Mindfulness — a practice older than written history, made to fit inside your ordinary Tuesday.</div>
</footer>

<script src="js/main.js" defer></script>
</body>
</html>
```

- [ ] **Step 2: Commit**

```bash
git add site/thank-you.html
git commit -m "feat: create thank-you confirmation page"
```

---

### Task 7: Add form submission handler to `site/js/main.js`

**Files:**
- Modify: `site/js/main.js`

- [ ] **Step 1: Append Brevo form handler to main.js**

After the existing IntersectionObserver code, add:

```js
// Brevo form submission — fallback to thank-you page on success
(function() {
  const form = document.getElementById('register-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const errorEl = document.getElementById('form-error');

    if (!email || !email.includes('@')) {
      errorEl.classList.add('is-visible');
      return;
    }
    errorEl.classList.remove('is-visible');

    // TODO: Replace with Brevo form action POST when live
    // For now, redirect to thank-you page after brief delay
    setTimeout(function() {
      window.location.href = 'thank-you.html';
    }, 300);
  });
})();
```

- [ ] **Step 2: Commit**

```bash
git add site/js/main.js
git commit -m "feat: add form submission handler with thank-you redirect"
```

---

### Task 8: Create `_redirects` for Netlify

**Files:**
- Create: `site/_redirects`

- [ ] **Step 1: Write `_redirects`**

```
/register  /register.html  200
/thank-you  /thank-you.html  200
```

- [ ] **Step 2: Commit**

```bash
git add site/_redirects
git commit -m "feat: add Netlify _redirects for clean URLs"
```

---

### Task 9: Update root `AGENTS.md`

**Files:**
- Modify: `AGENTS.md`

- [ ] **Step 1: Rewrite AGENTS.md**

Replace with content reflecting new structure (the existing AGENTS.md content already matches the new structure well — update any stale paths).

- [ ] **Step 2: Commit**

```bash
git add AGENTS.md
git commit -m "docs: update AGENTS.md for new site structure"
```

---

### Task 10: Verify the full funnel

- [ ] **Step 1: Open pages in browser and verify**

1. Open `site/index.html` in browser — page renders correctly with styles and animations
2. Click "Save My Spot" — navigates to `site/register.html`
3. Submit email on register page — redirects to `site/thank-you.html`
4. Open `site/register.html` directly — form renders, validation works
5. Open `site/thank-you.html` directly — confirmation renders

- [ ] **Step 2: Remove old single-file (optional)**

```bash
git rm resonant-mindfulness-landing.html
git commit -m "chore: remove legacy single-file landing page"
```

---

### Task 11: Push to GitHub

- [ ] **Step 1: Push master branch**

```bash
git push origin master
```
