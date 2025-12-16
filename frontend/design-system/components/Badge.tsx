'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center font-semibold transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-dark-card border border-dark-border text-gray-300',
        primary: 'bg-primary-500/20 border border-primary-500/50 text-primary-400',
        success: 'bg-success-DEFAULT/20 border border-success-DEFAULT/50 text-success-light',
        warning: 'bg-warning-DEFAULT/20 border border-warning-DEFAULT/50 text-warning-light',
        error: 'bg-error-DEFAULT/20 border border-error-DEFAULT/50 text-error-light',
        info: 'bg-info-DEFAULT/20 border border-info-DEFAULT/50 text-info-light',
        glow: 'bg-primary-500/10 border border-primary-500 text-primary-400 shadow-glow',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs rounded',
        md: 'px-2.5 py-1 text-sm rounded-md',
        lg: 'px-3 py-1.5 text-base rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode
  dot?: boolean
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, icon, dot, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, size, className }))}
        {...props}
      >
        {dot && (
          <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
        )}
        {icon && <span className="mr-1">{icon}</span>}
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'
