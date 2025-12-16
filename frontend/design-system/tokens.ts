/**
 * Design Tokens for Guildmaster.io
 * Single source of truth for all design decisions
 */

export const designTokens = {
  colors: {
    // Primary brand colors
    primary: {
      50: '#e0f2fe',
      100: '#bae6fd',
      200: '#7dd3fc',
      300: '#38bdf8',
      400: '#0ea5e9',
      500: '#0088e6', // Main brand color
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
    },
    
    // Accent colors
    accent: {
      cyan: '#00d4ff',
      purple: '#a855f7',
      pink: '#ec4899',
      orange: '#f97316',
    },
    
    // Semantic colors
    success: {
      light: '#86efac',
      DEFAULT: '#22c55e',
      dark: '#16a34a',
    },
    warning: {
      light: '#fcd34d',
      DEFAULT: '#f59e0b',
      dark: '#d97706',
    },
    error: {
      light: '#fca5a5',
      DEFAULT: '#ef4444',
      dark: '#dc2626',
    },
    info: {
      light: '#93c5fd',
      DEFAULT: '#3b82f6',
      dark: '#2563eb',
    },
    
    // Dark theme backgrounds
    dark: {
      bg: '#0a0e27',        // Main background
      card: '#151932',      // Card/panel background
      cardHover: '#1a1f3a', // Card hover state
      border: '#1e2442',    // Border color
      divider: '#252a47',   // Divider lines
    },
    
    // Text colors
    text: {
      primary: '#f9fafb',
      secondary: '#9ca3af',
      tertiary: '#6b7280',
      inverse: '#1f2937',
    },
    
    // Gradients
    gradients: {
      primary: 'linear-gradient(135deg, #0088e6 0%, #00d4ff 100%)',
      success: 'linear-gradient(135deg, #22c55e 0%, #10b981 100%)',
      warning: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
      purple: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
      dark: 'linear-gradient(135deg, #1a1f3a 0%, #0a0e27 100%)',
    },
  },
  
  typography: {
    fontFamily: {
      sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      mono: '"JetBrains Mono", "Fira Code", "Courier New", monospace',
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  
  spacing: {
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
  },
  
  borderRadius: {
    none: '0',
    sm: '0.25rem',
    DEFAULT: '0.5rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    glow: '0 0 20px rgba(0, 136, 230, 0.3)',
    glowStrong: '0 0 30px rgba(0, 136, 230, 0.5)',
  },
  
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },
  
  transitions: {
    duration: {
      fast: '150ms',
      default: '300ms',
      slow: '500ms',
    },
    timing: {
      ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;

export type DesignTokens = typeof designTokens;
