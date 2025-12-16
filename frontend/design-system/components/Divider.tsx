'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

const dividerVariants = cva(
  'shrink-0 bg-dark-border',
  {
    variants: {
      orientation: {
        horizontal: 'h-px w-full',
        vertical: 'w-px h-full',
      },
      variant: {
        solid: '',
        dashed: 'border-dashed',
        dotted: 'border-dotted',
        gradient: 'bg-gradient-to-r from-transparent via-dark-border to-transparent',
      },
      spacing: {
        none: '',
        sm: '',
        md: '',
        lg: '',
        xl: '',
      },
    },
    compoundVariants: [
      {
        orientation: 'horizontal',
        spacing: 'sm',
        className: 'my-2',
      },
      {
        orientation: 'horizontal',
        spacing: 'md',
        className: 'my-4',
      },
      {
        orientation: 'horizontal',
        spacing: 'lg',
        className: 'my-6',
      },
      {
        orientation: 'horizontal',
        spacing: 'xl',
        className: 'my-8',
      },
      {
        orientation: 'vertical',
        spacing: 'sm',
        className: 'mx-2',
      },
      {
        orientation: 'vertical',
        spacing: 'md',
        className: 'mx-4',
      },
      {
        orientation: 'vertical',
        spacing: 'lg',
        className: 'mx-6',
      },
      {
        orientation: 'vertical',
        spacing: 'xl',
        className: 'mx-8',
      },
    ],
    defaultVariants: {
      orientation: 'horizontal',
      variant: 'solid',
      spacing: 'md',
    },
  }
)

export interface DividerProps
  extends Omit<HTMLAttributes<HTMLHRElement>, 'children'>,
    VariantProps<typeof dividerVariants> {
  label?: string
}

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ className, orientation, variant, spacing, label, ...props }, ref) => {
    if (label && orientation === 'horizontal') {
      return (
        <div className={cn('flex items-center', spacing && `my-${spacing}`)}>
          <hr
            ref={ref}
            className={cn(dividerVariants({ orientation, variant, spacing: 'none', className }))}
            {...props}
          />
          <span className="px-4 text-sm text-gray-400 whitespace-nowrap">{label}</span>
          <hr
            className={cn(dividerVariants({ orientation, variant, spacing: 'none', className }))}
          />
        </div>
      )
    }

    return (
      <hr
        ref={ref}
        className={cn(dividerVariants({ orientation, variant, spacing, className }))}
        {...props}
      />
    )
  }
)

Divider.displayName = 'Divider'
