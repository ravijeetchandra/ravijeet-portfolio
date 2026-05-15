# Design Document

## Overview

This document describes the architecture, design decisions, and component structure for the Ravijeet Chandra portfolio website — a static Next.js site deployed on GitHub Pages.

---

## Architecture

### Static Export

The site uses Next.js `output: "export"` to generate a fully static HTML site. This means:
- No server-side rendering or API routes
- All assets are pre-built at compile time
- Deployment is pure file hosting (no Node.js server needed)
- Compatible with GitHub Pages out of the box

### Base Path

The site is deployed at a sub-path: `https://ravijeetchandra.github.io/ravijeet-portfolio/`. This requires:

```js
// next.config.js
basePath: "/ravijeet-portfolio"
```

All internal image paths (`<img src>`) and asset references (`<link>`, `<a>`) must include this prefix. Next.js components like `next/image` and `next/link` handle this automatically, but native HTML elements require manual prefixing.

---

## Component Tree

```
Layout (RootLayout)
  └── globals.css (theme variables)
  └── Navigation (sticky top bar)
  └── Hero (profile image, title, typing subtitles)
  └── About (bio, highlights, core expertise)
  └── Skills (categorized tech stack)
  └── Experience (career timeline, alternating layout)
  └── Projects (enterprise project cards)
  └── Achievements (animated counter metrics)
  └── Blog (placeholder section)
  └── Contact (form + social links + resume download)
  └── Footer
```

---

## Theme System

### CSS Variables

Two color schemes are defined via CSS custom properties on `:root` (dark) and `[data-theme="light"]`.

```css
:root {
  --background: #0a0a0a;
  --foreground: #ededed;
  --primary: #3b82f6;
  --charcoal: #1a1a1a;
  /* ... */
}
[data-theme="light"] {
  --background: #f9fafb;
  --foreground: #111827;
  /* ... */
}
```

### Theme Toggle

The `ThemeToggle` component (inside `Navigation`) applies `.dark` class to the `<html>` element, which Tailwind uses for dark-mode variants. Tailwind is configured with `darkMode: "class"`.

---

## Key Components

### Hero

- Full-viewport section with gradient background
- Left side: text content with typing animation for rotating subtitles
- Right side: circular profile image with radial gradient overlay
- Scroll-down indicator at bottom

### Experience

- Vertical timeline with alternating left/right cards on desktop
- Each card shows role, company, period, location, description, and bullet achievements
- Company logos rendered from PNG files in `/public`

### Achievements

- Animated counter numbers using `requestAnimationFrame` with easing
- Grid of 6 metric cards (years, stores, markets, systems, clients, data)

### Contact

- Left panel: form with Name, Email, Subject, Message fields
- Submits to **Web3Forms** API (free tier, 250 submissions/month)
- Inline success/error feedback with loading spinner
- Right panel: social links (LinkedIn, GitHub, Email) + resume download

---

## Styling Approach

- **Tailwind CSS** for utility-first styling
- **Custom CSS** in `globals.css` for:
  - Theme variables
  - `.gradient-text` — gradient text across sections
  - `.gradient-border` — gradient bordered cards with transparent inner background
  - `.noise-bg` — subtle noise texture overlay
  - `[data-theme="light"]` overrides for dark-origin classes
- **Framer Motion** for scroll-triggered animations (`whileInView`)

---

## Deployment Pipeline

```yaml
on: push → main
  ├── actions/checkout@v4
  ├── actions/setup-node@v4 (Node 22)
  ├── npm install
  ├── npm run build (→ out/)
  ├── actions/upload-pages-artifact@v3
  └── actions/deploy-pages@v4
```

GitHub Pages source must be set to **"GitHub Actions"** (not "Deploy from a branch").

---

## Resume PDF

The resume (`public/resume.html`) is a standalone HTML page optimized for browser **Print → Save as PDF**. It uses `@media print` CSS for A4 formatting. When the user clicks "Download Resume":

1. `resume.html` opens in a new tab
2. `window.print()` triggers the browser's native print dialog
3. User selects "Save as PDF" and saves

This approach produces higher-quality PDFs than JavaScript-based libraries (html2pdf.js, jsPDF) because the browser's native print engine handles text rendering and page breaks correctly.

---

## Performance Considerations

- **Static export** means zero server overhead
- **No external fonts** — uses system font stack (`Segoe UI`, -apple-system, Roboto)
- **Images are unoptimized** (`images.unoptimized: true`) since static export doesn't support Next.js image optimization
- **Client components** (`"use client"`) are used where interactivity is needed (animations, form state, theme toggle)
