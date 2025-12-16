import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
  'inline-flex items-center font-semibold rounded-full transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'bg-dark-bg-tertiary text-dark-text-secondary',
        primary: 'bg-primary-500/20 text-primary-400 border border-primary-500/30',
        success: 'bg-success-DEFAULT/20 text-success-DEFAULT border border-success-DEFAULT/30',
        warning: 'bg-warning-DEFAULT/20 text-warning-DEFAULT border border-warning-DEFAULT/30',
        error: 'bg-error-DEFAULT/20 text-error-DEFAULT border border-error-DEFAULT/30',
        info: 'bg-info-DEFAULT/20 text-info-DEFAULT border border-info-DEFAULT/30',
        glow: 'bg-primary-500/20 text-primary-400 border border-primary-500/30 shadow-glow',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-1.5 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode;
  dot?: boolean;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, icon, dot, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={badgeVariants({ variant, size, className })}
        {...props}
      >
        {dot && <span className="w-2 h-2 rounded-full bg-current mr-1.5" />}
        {icon && <span className="mr-1.5">{icon}</span>}
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
