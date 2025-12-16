# Guildmaster.io Brand Assets

Professional graphics and visual assets for the Guildmaster.io DeFi Intelligence Platform.

## Brand Identity

### Logo
- **Primary Logo**: `logo-main.png` - Full logo with emblem and wordmark
- **Usage**: Headers, navigation, marketing materials
- **Colors**: Blue to Cyan gradient (#0088e6 → #00d4ff)
- **Minimum Size**: 120px width for digital, 1 inch for print

### Hero Visuals
- **Hero Section**: `hero-visual.png` - Abstract blockchain data visualization
- **Usage**: Landing page hero, about sections
- **Style**: 3D particles, flowing data streams, deep navy background
- **Format**: 16:9 landscape

### Dashboard Graphics
- **Dashboard Viz**: `dashboard-viz.png` - Interface mockup with glassmorphism
- **Usage**: Feature showcases, presentations, marketing
- **Style**: Semi-transparent cards, gradient charts, modern fintech aesthetic
- **Format**: 16:9 landscape

## Brand Guidelines

### Color Palette
- **Primary**: Blue (#0088e6) to Cyan (#00d4ff) gradients
- **Background**: Deep Navy (#0a0e27)
- **Success**: Green (#22c55e)
- **Surfaces**: Dark Card (#151932)

### Typography
- **Wordmark**: Bold sans-serif, clean and modern
- **Hierarchy**: Strong contrast between logo and extension
- **Style**: Professional, trustworthy, forward-thinking

### Visual Style
- **Aesthetic**: Contemporary fintech meets Web3
- **Elements**: Glassmorphism, gradients, glow effects
- **Mood**: Sophisticated, intelligent, trustworthy
- **Approach**: Data-driven, technical yet accessible

## Usage Guidelines

### Do's ✅
- Maintain clear space around logo (minimum 1/4 of logo height)
- Use on dark backgrounds for optimal visibility
- Keep gradient direction consistent (diagonal top-left to bottom-right)
- Preserve aspect ratios when scaling

### Don'ts ❌
- Don't distort or stretch the logo
- Don't change brand colors
- Don't add effects or outlines
- Don't use on busy backgrounds without proper contrast

## File Organization

```
frontend/public/images/
├── brand/
│   ├── logo-main.png          # Primary logo
│   ├── hero-visual.png        # Hero section graphic
│   └── dashboard-viz.png      # Dashboard showcase
├── og/
│   └── (Social media sharing images)
└── assets/
    └── (Additional visual elements)
```

## Implementation

### Next.js Image Component
```tsx
import Image from 'next/image'

<Image
  src="/images/brand/logo-main.png"
  alt="Guildmaster.io"
  width={200}
  height={60}
  priority
/>
```

### CSS Background
```css
.hero {
  background-image: url('/images/brand/hero-visual.png');
  background-size: cover;
  background-position: center;
}
```

## Brand Assets Download

For high-resolution versions or additional formats:
1. Contact the design team
2. Request specific sizes or formats
3. Receive brand package with full asset library

---

**Created**: December 2025  
**Version**: 1.0  
**Status**: Production Ready  
**Designer**: AI-Generated Professional Grade
