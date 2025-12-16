# 🎨 Guildmaster.io Design System

**Production-ready design system for Web3 DeFi applications built with React, TypeScript, and Tailwind CSS.**

## 🚀 Quick Start

```bash
npm install
```

```tsx
import { Button, Card, WalletConnectButton } from '@/design-system'

function App() {
  return (
    <Card variant="glass" hover>
      <h2>Welcome to Guildmaster.io</h2>
      <WalletConnectButton onConnect={(wallet) => console.log(wallet)} />
    </Card>
  )
}
```

## 📦 What's Included

### Core UI Components (15)
- ✅ **Button** - 6 variants × 4 sizes
- ✅ **Card** - Glassmorphism support
- ✅ **Badge** - Status indicators
- ✅ **Input** - Validation states
- ✅ **Modal** - Accessible dialogs
- ✅ **Tooltip** - Smart positioning
- ✅ **Progress** - Animated bars
- ✅ **Toast** - Notification system
- ✅ **Dropdown** - Select component
- ✅ **Table** - Data display
- ✅ **Tabs** - Navigation
- ✅ **Switch** - Toggle
- ✅ **Accordion** - Expandable
- ✅ **Skeleton** - Loading states

### Web3 Components (4)
- ✅ **WalletConnectButton** - xPortal, DeFi Wallet, Ledger, Web Wallet
- ✅ **AddressDisplay** - Copy & Explorer links
- ✅ **TokenInput** - Balance & USD value
- ✅ **TransactionStatus** - Progress tracking

### Layout System (8)
- ✅ **Container** - Responsive wrapper
- ✅ **Grid** - Auto-responsive grid
- ✅ **Stack/HStack/VStack** - Flexbox layouts
- ✅ **Flex** - Low-level control
- ✅ **Divider** - Visual separators
- ✅ **Spacer** - Invisible spacing
- ✅ **Box** - Fundamental primitive

### Layout Templates (2)
- ✅ **Page** - Consistent page structure
- ✅ **Section** - Content sections

### Design Tokens
- ✅ **Colors** - Dark theme optimized
- ✅ **Typography** - Font system
- ✅ **Spacing** - 4px base scale
- ✅ **Shadows** - Including glow effects
- ✅ **Animations** - Smooth transitions

### Brand Assets
- ✅ **Logo** - Professional gradient design
- ✅ **Hero Visual** - 3D blockchain visualization
- ✅ **Dashboard Graphic** - Glassmorphism mockup

## 🎨 Design Philosophy

1. **Dark-First** - Optimized for extended viewing
2. **Web3 Native** - Built for blockchain interactions
3. **Accessible** - WCAG 2.1 AA compliant
4. **Performant** - Tree-shakeable, optimized bundles
5. **Type-Safe** - Full TypeScript support

## 📚 Documentation

- [Component API](./components/README.md)
- [Layout System](./layouts/README.md)
- [Design Tokens](./tokens.ts)
- [Brand Guidelines](../public/images/brand/README.md)

## 🔧 Configuration

### PostCSS
```js
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### Tailwind
```ts
// tailwind.config.ts
import { designTokens } from './design-system/tokens'

export default {
  theme: {
    extend: {
      colors: designTokens.colors,
      // ...
    },
  },
}
```

## 🎯 Usage Examples

### Web3 Wallet Connection
```tsx
import { WalletConnectButton } from '@/design-system'

<WalletConnectButton
  onConnect={(walletId) => console.log(walletId)}
  address={userAddress}
  balance="1234.56"
/>
```

### Toast Notifications
```tsx
import { useToast } from '@/design-system'

const { showToast } = useToast()

showToast({
  type: 'success',
  title: 'Transaction Complete',
  description: 'Your tokens have been staked',
})
```

### Data Table
```tsx
import { Table } from '@/design-system'

const columns = [
  { key: 'name', header: 'Protocol' },
  { key: 'tvl', header: 'TVL', render: (item) => `$${item.tvl}M` },
]

<Table
  data={protocols}
  columns={columns}
  keyExtractor={(item) => item.id}
  striped
  hoverable
/>
```

### Responsive Grid
```tsx
import { Grid, GridItem } from '@/design-system'

<Grid cols={3} gap="lg">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <GridItem colSpan="full">
    <Card>Full width</Card>
  </GridItem>
</Grid>
```

## ♿ Accessibility

- Keyboard navigation support
- Focus states with ring indicators
- Semantic HTML elements
- ARIA attributes
- Color contrast WCAG AA
- Screen reader friendly

## 🎨 Customization

```tsx
import { designTokens } from '@/design-system/tokens'

const customTokens = {
  ...designTokens,
  colors: {
    ...designTokens.colors,
    primary: {
      ...designTokens.colors.primary,
      500: '#your-color',
    },
  },
}
```

## 📊 Bundle Size

- **Tree-shakeable**: Import only what you use
- **Optimized**: Minimal runtime overhead
- **No dependencies**: Core components use only React

## 🚦 Status

- ✅ **Production Ready**
- ✅ **TypeScript Support**
- ✅ **Dark Theme Optimized**
- ✅ **Mobile Responsive**
- ✅ **Accessibility Tested**

## 📄 License

MIT License - See LICENSE file

---

**Built with ❤️ for the MultiversX Ecosystem**
