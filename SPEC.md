# SochauX - IT Company Website

## Concept & Vision

SochauX represents the convergence of strategic thinking and technical excellence. The website should feel like stepping into a modern tech studio — bold, confident, and forward-thinking. The experience conveys expertise through restraint and sophistication, not flashy gimmicks.

## Design Language

### Aesthetic Direction
**Neo-Industrial Tech** — Dark foundation with strategic warm accents. Clean geometric shapes, sharp lines, but softened by organic curves in key elements. Feels like a premium software studio.

### Color Palette
- **Background Dark**: `#0a0a0f`
- **Background Card**: `#12121a`
- **Primary Text**: `#f5f5f7`
- **Secondary Text**: `#8a8a8e`
- **Accent Gold**: `#d4a853`
- **Accent Glow**: `#d4a85333`
- **Border Subtle**: `#1f1f2e`

### Typography
- **Headings**: `Syne` (bold, geometric, tech feel)
- **Body**: `Inter` (clean, highly readable)
- **Monospace accent**: `JetBrains Mono` (for technical elements)

### Motion Philosophy
- Smooth entrance animations with staggered delays (100ms between elements)
- Subtle hover lifts on cards (translateY -4px, shadow expansion)
- Gradient text animations on hero
- Smooth scroll behavior throughout

## Layout & Structure

### Sections
1. **Hero** — Full viewport, bold headline with animated gradient text, tagline, CTA buttons, subtle grid pattern background
2. **Services** — 4-card grid showcasing: System Design, Web Development, SaaS Platforms, School Management
3. **About** — Split layout: company story on left, key stats/metrics on right
4. **Team** — Three founder cards with hover reveal of details
5. **Contact** — Simple contact form with company details
6. **Footer** — Minimal with logo, social links, copyright

### Responsive Strategy
- Desktop: Full layouts, generous spacing
- Tablet: Adjusted grid columns (2-col)
- Mobile: Single column, reduced spacing, hamburger nav

## Features & Interactions

### Navigation
- Fixed header with blur backdrop
- Smooth scroll to sections
- Active state highlighting based on scroll position

### Hero Section
- Large animated headline with gradient text effect
- Floating abstract shapes in background (CSS only)
- Two CTA buttons: "Get Started" (primary), "View Work" (secondary)

### Services Cards
- Icon + title + description
- Hover: card lifts, accent border appears, icon glows
- Staggered entrance animation

### Team Cards
- Photo placeholder (geometric pattern if no image)
- Name, role, brief bio
- Hover: overlay with social links appears

### Contact Form
- Fields: Name, Email, Subject, Message
- Validation on submit
- Success state with confirmation message

## Component Inventory

### NavBar
- Logo (text-based "SochauX")
- Nav links: Home, Services, About, Team, Contact
- States: default, scrolled (more opaque), mobile menu open

### ServiceCard
- Icon (Lucide icons)
- Title, description
- States: default, hover (lift + glow border)

### TeamCard
- Avatar placeholder
- Name, role, bio
- Social links on hover
- States: default, hover (overlay reveal)

### Button
- Primary: Gold background, dark text
- Secondary: Transparent with gold border
- States: default, hover (scale 1.02), active (scale 0.98)

### Input
- Dark background, subtle border
- Focus: gold border glow
- Error: red border, error message below

## Technical Approach

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Animations**: CSS transitions + Tailwind animate utilities
- **Single Page**: All sections in one page with smooth scroll navigation
