'use client'

import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface SpacerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  axis?: 'horizontal' | 'vertical' | 'both'
}

const sizeClasses = {
  xs: 1,
  sm: 2,
  md: 4,
  lg: 6,
  xl: 8,
  '2xl': 12,
}

export const Spacer = forwardRef<HTMLDivElement, SpacerProps>(
  ({ className, size = 'md', axis = 'both', ...props }, ref) => {
    const space = sizeClasses[size]
    
    const classes = cn(
      axis === 'horizontal' && `w-${space}`,
      axis === 'vertical' && `h-${space}`,
      axis === 'both' && `w-${space} h-${space}`,
      'shrink-0',
      className
    )

    return <div ref={ref} className={classes} {...props} />
  }
)

Spacer.displayName = 'Spacer'
