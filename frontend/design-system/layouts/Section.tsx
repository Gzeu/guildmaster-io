'use client'

import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  title?: string
  description?: string
  spacing?: 'sm' | 'md' | 'lg' | 'xl'
}

const spacingClasses = {
  sm: 'py-4',
  md: 'py-8',
  lg: 'py-12',
  xl: 'py-16',
}

/**
 * Section component for organizing page content into logical blocks
 * with optional titles and descriptions
 */
export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, title, description, spacing = 'md', children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(spacingClasses[spacing], className)}
        {...props}
      >
        {(title || description) && (
          <div className="mb-6">
            {title && <h2 className="text-2xl font-bold mb-2">{title}</h2>}
            {description && <p className="text-gray-400">{description}</p>}
          </div>
        )}
        {children}
      </section>
    )
  }
)

Section.displayName = 'Section'
