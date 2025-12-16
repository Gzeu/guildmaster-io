# 🎨 Guildmaster.io Design System

A production-ready design system for Web3 DeFi applications built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Comprehensive Component Library** - 8+ battle-tested components
- 🌙 **Dark Theme Optimized** - Built for extended viewing sessions
- ♿ **Accessible** - WCAG 2.1 AA compliant
- 🎭 **Animations** - Smooth micro-interactions
- 📱 **Responsive** - Mobile-first approach
- 🔧 **Customizable** - Design tokens for easy theming
- 📦 **Tree-shakeable** - Optimized bundle size

## Installation

```bash
npm install class-variance-authority clsx tailwind-merge
```

## Quick Start

```tsx
import { Button, Card, Badge } from '@/design-system';

function App() {
  return (
    <Card variant="glass" hover>
      <h2>Total Staked</h2>
      <Badge variant="success">Active</Badge>
      <Button variant="primary" size="lg">
        Stake EGLD
      </Button>
    </Card>
  );
}
```

## Components

### Button
6 variants × 4 sizes = 24 combinations

```tsx
<Button variant="primary" size="lg" isLoading>
  Connect Wallet
</Button>
```

### Card
Glassmorphism and gradient variants

```tsx
<Card variant="glass" padding="lg" hover>
  <CardHeader>
    <CardTitle>Dashboard</CardTitle>
  </CardHeader>
  <CardContent>{/* content */}</CardContent>
</Card>
```

### Badge
Status indicators with glow effects

```tsx
<Badge variant="success" dot>
  Live
</Badge>
```

### Input
Accessible form inputs with validation

```tsx
<Input
  label="Amount"
  placeholder="0.00"
  rightIcon="EGLD"
  error="Insufficient balance"
/>
```

### Modal
Accessible dialogs with ESC and backdrop close

```tsx
<Modal isOpen={isOpen} onClose={onClose} title="Confirm">
  {/* Modal content */}
</Modal>
```

### Progress
Animated progress bars with gradients

```tsx
<Progress value={75} variant="success" animated showLabel />
```

### Tooltip
Smart positioning tooltips

```tsx
<Tooltip content="View Details" position="top">
  <Button>Info</Button>
</Tooltip>
```

## Design Tokens

All design decisions are centralized in `tokens.ts`:

- Colors (primary, accent, semantic)
- Typography (font families, sizes, weights)
- Spacing (4px base scale)
- Shadows (including glow effects)
- Border radius
- Z-index layers
- Transitions

## Best Practices

✅ **Do:**
- Use design tokens for consistency
- Leverage component variants
- Test in dark theme
- Ensure keyboard accessibility

❌ **Don't:**
- Override with !important
- Use inline styles
- Skip responsive testing

## License

MIT - See LICENSE file
