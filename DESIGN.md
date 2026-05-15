# Design Documentation

## Overview

This portfolio website is designed to showcase the professional profile of **Ravijeet Chandra**, a Lead Data Scientist with expertise in AI, Machine Learning, and Generative AI solutions.

## Design Principles

### 1. Modern & Professional
- Clean, minimal design with generous whitespace
- Dark theme as default (common in tech portfolios)
- Gradient accents to add visual interest without overwhelming

### 2. Content-Focused
- Clear hierarchy emphasizing work experience and skills
- Projects displayed with real business impact metrics
- Achievements section with animated counters

### 3. Responsive & Accessible
- Mobile-first approach
- Proper contrast ratios for readability
- Smooth animations that don't distract

## Color Palette

### Dark Mode (Default)
| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#0a0a0a` | Main background |
| Primary | `#3b82f6` | Links, accents, buttons |
| Accent Purple | `#8b5cf6` | Secondary accents |
| Accent Cyan | `#06b6d4` | Tertiary accents |
| Charcoal | `#1a1a1a` | Cards, containers |
| Text Primary | `#ededed` | Main text |
| Text Secondary | `#9ca3af` | Muted text |

### Light Mode
| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#f9fafb` | Main background |
| Primary | `#2563eb` | Links, accents |
| Charcoal | `#ffffff` | Cards |

## Typography

- **Headings**: Bold, large (text-4xl to text-5xl)
- **Body**: Regular weight, good line-height for readability
- **Monospace**: Not used (pure portfolio, no code snippets inline)

## Component Details

### Navigation
- Fixed position with blur effect on scroll
- Responsive hamburger menu on mobile
- Smooth scroll to sections

### Hero Section
- Profile image in circular frame with subtle vignette
- Animated typing effect for subtitle
- Floating icons (Brain, Sparkles) for visual interest

### Skills Section
- Grid layout with 5 categories
- Skill tags with hover effects
- Icons for each category (Brain, Box, Database, Cloud, Code)
- Light/dark mode specific colors

### Experience Section
- Timeline layout (alternating on desktop)
- Company logos with fallback icons
- Detailed achievements for each role

### Projects Section
- Card grid layout
- Tech stack tags
- Impact metrics prominently displayed

### Achievements Section
- Animated counters for key stats
- Icons for each metric
- Gradient backgrounds

### Contact Section
- Contact form (non-functional, for display)
- Social links (LinkedIn, GitHub, Email)
- Resume download button

## Animations

### Framer Motion
- **Entrance**: Fade in + slide up on scroll
- **Hover**: Scale effects on cards and buttons
- **Typing**: Character-by-character subtitle animation
- **Floating**: Subtle up/down on decorative elements
- **Counting**: Number animation in achievements

### CSS Transitions
- Theme toggle: Smooth color transitions
- Hover states: 200-300ms ease transitions

## Theme Toggle Implementation

The theme toggle uses both:
1. **Tailwind's `dark:` class** - For component-specific styles
2. **`data-theme` attribute** - For global CSS overrides

```tsx
// In ThemeToggle.tsx
document.documentElement.setAttribute("data-theme", theme);
if (theme === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
```

## Responsive Breakpoints

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile | < 640px | Single column, stacked |
| Tablet | 640px - 1024px | 2 columns where applicable |
| Desktop | > 1024px | Full layout, side-by-side |

## Performance Considerations

- Static export for GitHub Pages (`output: "export"`)
- Local images (no external image loading)
- Minimal JavaScript (Next.js optimized)
- CSS purging via Tailwind

## Future Improvements

- [ ] Add blog functionality with MDX
- [ ] Add actual contact form backend
- [ ] Add more project details with screenshots
- [ ] Add certifications section
- [ ] Add language selector for multilingual support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

- Semantic HTML5 elements
- Proper heading hierarchy
- Alt text for images
- Focus states for interactive elements
- Reduced motion support (via CSS media query)