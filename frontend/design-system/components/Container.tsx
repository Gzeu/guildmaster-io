'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

const containerVariants = cva(
  'w-full mx-auto',
  {
    variants: {
      size: {
        sm: 'max-w-screen-sm',      // 640px
        md: 'max-w-screen-md',      // 768px
        lg: 'max-w-screen-lg',      // 1024px
        xl: 'max-w-screen-xl',      // 1280px
        '2xl': 'max-w-screen-2xl',  // 1536px
        full: 'max-w-full',
      },
      padding: {
        none: '',
        sm: 'px-4 py-2',
        md: 'px-6 py-4',
        lg: 'px-8 py-6',
        xl: 'px-12 py-8',
      },
      center: {
        true: 'flex flex-col items-center justify-center',
      },
    },
    defaultVariants: {
      size: 'xl',
      padding: 'md',
    },
  }
)

export interface ContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  as?: 'div' | 'section' | 'main' | 'article'
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, padding, center, as: Component = 'div', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(containerVariants({ size, padding, center, className }))}
        {...props}
      />
    )
  }
)

Container.displayName = 'Container'
