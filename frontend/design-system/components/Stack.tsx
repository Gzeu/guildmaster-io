'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

const stackVariants = cva(
  'flex',
  {
    variants: {
      direction: {
        horizontal: 'flex-row',
        vertical: 'flex-col',
      },
      spacing: {
        none: 'gap-0',
        xs: 'gap-1',
        sm: 'gap-2',
        md: 'gap-4',
        lg: 'gap-6',
        xl: 'gap-8',
        '2xl': 'gap-12',
      },
      align: {
        start: 'items-start',
        center: 'items-center',
        end: 'items-end',
        stretch: 'items-stretch',
        baseline: 'items-baseline',
      },
      justify: {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        between: 'justify-between',
        around: 'justify-around',
        evenly: 'justify-evenly',
      },
      wrap: {
        true: 'flex-wrap',
        false: 'flex-nowrap',
      },
    },
    defaultVariants: {
      direction: 'vertical',
      spacing: 'md',
    },
  }
)

export interface StackProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackVariants> {
  as?: 'div' | 'section' | 'ul' | 'nav'
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ className, direction, spacing, align, justify, wrap, as: Component = 'div', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(stackVariants({ direction, spacing, align, justify, wrap, className }))}
        {...props}
      />
    )
  }
)

Stack.displayName = 'Stack'

// Convenience components for common patterns
export const HStack = forwardRef<HTMLDivElement, Omit<StackProps, 'direction'>>(
  ({ ...props }, ref) => {
    return <Stack ref={ref} direction="horizontal" {...props} />
  }
)

HStack.displayName = 'HStack'

export const VStack = forwardRef<HTMLDivElement, Omit<StackProps, 'direction'>>(
  ({ ...props }, ref) => {
    return <Stack ref={ref} direction="vertical" {...props} />
  }
)

VStack.displayName = 'VStack'
