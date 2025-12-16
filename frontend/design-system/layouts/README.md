# Layout System

Comprehensive layout primitives for building consistent, responsive interfaces.

## Components

### Container

Centered content container with responsive max-widths.

```tsx
<Container size="xl" padding="lg">
  {/* Content */}
</Container>
```

**Props:**
- `size`: `sm | md | lg | xl | 2xl | full`
- `padding`: `none | sm | md | lg | xl`
- `center`: Boolean - Centers content vertically and horizontally
- `as`: HTML element to render as

### Grid

Responsive grid system with auto-responsive columns.

```tsx
<Grid cols={3} gap="lg">
  <GridItem colSpan={2}>
    {/* Spans 2 columns */}
  </GridItem>
  <GridItem>
    {/* Spans 1 column */}
  </GridItem>
</Grid>
```

**Grid Props:**
- `cols`: `1 | 2 | 3 | 4 | 5 | 6 | auto`
- `gap`: `none | xs | sm | md | lg | xl | 2xl`
- `align`: `start | center | end | stretch`
- `justify`: `start | center | end | stretch`

**GridItem Props:**
- `colSpan`: `1 | 2 | 3 | 4 | 5 | 6 | full`
- `rowSpan`: `1 | 2 | 3 | 4 | 5 | 6 | full`

**Auto-responsive behavior:**
- `cols={2}`: 1 col on mobile, 2 cols on tablet+
- `cols={3}`: 1 col on mobile, 2 on tablet, 3 on desktop
- `cols={4}`: 1 col on mobile, 2 on tablet, 4 on desktop

### Stack

Flexbox-based layout for arranging items with consistent spacing.

```tsx
// Vertical stack (default)
<VStack spacing="md" align="center">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
</VStack>

// Horizontal stack
<HStack spacing="sm" justify="between">
  <Button>Cancel</Button>
  <Button>Confirm</Button>
</HStack>
```

**Props:**
- `direction`: `horizontal | vertical`
- `spacing`: `none | xs | sm | md | lg | xl | 2xl`
- `align`: `start | center | end | stretch | baseline`
- `justify`: `start | center | end | between | around | evenly`
- `wrap`: Boolean - Enable flex wrapping

**Shortcuts:**
- `HStack` = `<Stack direction="horizontal" />`
- `VStack` = `<Stack direction="vertical" />`

### Flex

Low-level flexbox primitive with full control.

```tsx
<Flex direction="row" justify="between" align="center" gap="md">
  {/* Content */}
</Flex>
```

**Props:**
- `direction`: `row | row-reverse | col | col-reverse`
- `wrap`: `wrap | wrap-reverse | nowrap`
- `align`: `start | center | end | stretch | baseline`
- `justify`: `start | center | end | between | around | evenly`
- `gap`: `none | xs | sm | md | lg | xl`

### Divider

Visual separator with multiple styles.

```tsx
<Divider />
<Divider variant="gradient" spacing="lg" />
<Divider label="or" />
<Divider orientation="vertical" />
```

**Props:**
- `orientation`: `horizontal | vertical`
- `variant`: `solid | dashed | dotted | gradient`
- `spacing`: `none | sm | md | lg | xl`
- `label`: String - Text label centered on divider

### Spacer

Invisible spacing element.

```tsx
<Spacer size="lg" />
<Spacer size="md" axis="horizontal" />
```

**Props:**
- `size`: `xs | sm | md | lg | xl | 2xl`
- `axis`: `horizontal | vertical | both`

### Box

Most fundamental layout primitive.

```tsx
<Box as="section" className="custom-class">
  {/* Content */}
</Box>
```

**Props:**
- `as`: Any HTML element (`div`, `section`, `article`, etc.)
- All standard HTML attributes

## Layout Templates

### Page

Consistent page layout with optional title and description.

```tsx
<Page
  title="Dashboard"
  description="Monitor your DeFi portfolio"
  maxWidth="xl"
>
  {/* Page content */}
</Page>
```

**Props:**
- `title`: String - Page title
- `description`: String - Page description
- `maxWidth`: `sm | md | lg | xl | 2xl | full`

### Section

Logical content sections with spacing.

```tsx
<Section
  title="Staking Opportunities"
  description="Available providers"
  spacing="lg"
>
  {/* Section content */}
</Section>
```

**Props:**
- `title`: String - Section title
- `description`: String - Section description
- `spacing`: `sm | md | lg | xl`

## Common Patterns

### Dashboard Layout

```tsx
<Page title="Dashboard" maxWidth="2xl">
  <Section>
    <Grid cols={4} gap="md">
      <StatCard />
      <StatCard />
      <StatCard />
      <StatCard />
    </Grid>
  </Section>
  
  <Section title="Charts">
    <Grid cols={2} gap="lg">
      <Card>Chart 1</Card>
      <Card>Chart 2</Card>
    </Grid>
  </Section>
</Page>
```

### Form Layout

```tsx
<Container size="md">
  <VStack spacing="lg">
    <Input label="Name" />
    <Input label="Email" />
    
    <Divider />
    
    <HStack justify="end" spacing="sm">
      <Button variant="secondary">Cancel</Button>
      <Button variant="primary">Submit</Button>
    </HStack>
  </VStack>
</Container>
```

### Card Grid

```tsx
<Grid cols={3} gap="lg">
  <Card>Content 1</Card>
  <Card>Content 2</Card>
  <GridItem colSpan="full">
    <Card>Full width content</Card>
  </GridItem>
</Grid>
```

### Responsive Sidebar

```tsx
<Grid cols={4} gap="lg">
  <GridItem colSpan={3}>
    <Card>Main content</Card>
  </GridItem>
  <GridItem>
    <Card>Sidebar</Card>
  </GridItem>
</Grid>
```

## Best Practices

1. **Use semantic HTML**: Choose appropriate `as` prop values
2. **Prefer Stack over Flex**: Stack has better defaults for common patterns
3. **Use Grid for card layouts**: Responsive columns are handled automatically
4. **Container for page-level layouts**: Centers and constrains content width
5. **Compose layouts**: Build complex layouts from simple primitives

## Accessibility

- All layout components support semantic HTML elements
- Use appropriate heading hierarchy in Page/Section titles
- Ensure sufficient color contrast for Divider components
- Test keyboard navigation through stacked elements
