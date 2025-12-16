'use client'

import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  as?: 'div' | 'section' | 'article' | 'aside' | 'main' | 'header' | 'footer' | 'nav'
}

/**
 * Box is the most fundamental layout component.
 * It's a simple div with semantic HTML element support.
 * Use it as a building block for other layouts.
 */
export const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ as: Component = 'div', className, ...props }, ref) => {
    return <Component ref={ref} className={cn(className)} {...props} />
  }
)

Box.displayName = 'Box'
