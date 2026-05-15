# Ravijeet Chandra — Portfolio

Personal portfolio website showcasing enterprise AI engineering work, built with **Next.js 14** and **Tailwind CSS**.

## Live Site

[https://ravijeetchandra.github.io/ravijeet-portfolio/](https://ravijeetchandra.github.io/ravijeet-portfolio/)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Deployment | GitHub Pages (via GitHub Actions) |

## Scripts

```bash
npm run dev      # Start dev server
npm run build    # Static export to out/
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
src/
  app/           # App router pages & layout
    globals.css  # Global styles & theme variables
    layout.tsx   # Root layout with metadata
    page.tsx     # Main page composing all sections
  components/   # Section components
    Hero.tsx        # Hero section with typing animation
    About.tsx       # About me & core expertise
    Skills.tsx      # Technical skills grid
    Experience.tsx  # Career timeline
    Projects.tsx    # Featured projects
    Achievements.tsx # Impact metrics with counters
    Blog.tsx        # Blog/thoughts section
    Contact.tsx     # Contact form (Web3Forms) & social links
    Navigation.tsx  # Top navigation bar
    Footer.tsx      # Footer
public/         # Static assets
  resume.html   # Printable resume page
```

## Deployment

Push to `main` → GitHub Actions workflow builds the site → deploys to `gh-pages` branch → GitHub Pages serves it.

## Features

- Dark/light theme with CSS variables
- Smooth scroll navigation
- Animated counters and typing effects
- Responsive design across all devices
- Contact form via Web3Forms (250 submissions/month free)
- Downloadable resume with print-to-PDF support
