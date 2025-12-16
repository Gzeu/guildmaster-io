'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

const progressVariants = cva(
  'relative w-full overflow-hidden rounded-full bg-dark-card',
  {
    variants: {
      size: {
        sm: 'h-1',
        md: 'h-2',
        lg: 'h-3',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

const progressBarVariants = cva(
  'h-full transition-all duration-500 ease-out rounded-full',
  {
    variants: {
      variant: {
        default: 'bg-gradient-to-r from-primary-500 to-accent-cyan',
        success: 'bg-gradient-to-r from-success-DEFAULT to-success-light',
        warning: 'bg-gradient-to-r from-warning-DEFAULT to-warning-light',
        error: 'bg-gradient-to-r from-error-DEFAULT to-error-light',
      },
      animated: {
        true: 'animate-pulse',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface ProgressProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'>,
    VariantProps<typeof progressVariants> {
  value: number
  max?: number
  variant?: 'default' | 'success' | 'warning' | 'error'
  animated?: boolean
  showLabel?: boolean
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, size, variant, animated, value, max = 100, showLabel, ...props }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

    return (
      <div ref={ref} className="w-full">
        {showLabel && (
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-300">Progress</span>
            <span className="text-sm font-semibold text-primary-400">{Math.round(percentage)}%</span>
          </div>
        )}
        
        <div className={cn(progressVariants({ size, className }))} {...props}>
          <div
            className={cn(progressBarVariants({ variant, animated }))}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    )
  }
)

Progress.displayName = 'Progress'
