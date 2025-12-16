import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const progressVariants = cva(
  'relative overflow-hidden rounded-full bg-dark-bg-tertiary',
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
);

const progressBarVariants = cva(
  'h-full rounded-full transition-all duration-500 ease-out',
  {
    variants: {
      variant: {
        default: 'bg-gradient-to-r from-primary-500 to-accent-cyan',
        success: 'bg-gradient-to-r from-success-DEFAULT to-green-400',
        warning: 'bg-gradient-to-r from-warning-DEFAULT to-orange-400',
        error: 'bg-gradient-to-r from-error-DEFAULT to-red-400',
      },
      animated: {
        true: 'animate-pulse',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface ProgressProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'>,
    VariantProps<typeof progressVariants> {
  value: number;
  max?: number;
  variant?: 'default' | 'success' | 'warning' | 'error';
  animated?: boolean;
  showLabel?: boolean;
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, size, value, max = 100, variant = 'default', animated, showLabel, ...props }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
      <div ref={ref} {...props}>
        {showLabel && (
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-dark-text-secondary">Progress</span>
            <span className="text-sm font-semibold text-white">{percentage.toFixed(0)}%</span>
          </div>
        )}
        <div className={progressVariants({ size, className })}>
          <div
            className={progressBarVariants({ variant, animated })}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  }
);

Progress.displayName = 'Progress';
