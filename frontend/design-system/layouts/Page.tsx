'use client'

import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { Container } from '../components/Container'

export interface PageProps extends HTMLAttributes<HTMLElement> {
  title?: string
  description?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
}

/**
 * Page component provides consistent layout for all pages
 * with optional title, description, and max-width control
 */
export const Page = forwardRef<HTMLElement, PageProps>(
  ({ className, title, description, maxWidth = 'xl', children, ...props }, ref) => {
    return (
      <main ref={ref} className={cn('min-h-screen py-8', className)} {...props}>
        <Container size={maxWidth}>
          {(title || description) && (
            <div className="mb-8">
              {title && <h1 className="text-4xl font-bold mb-2">{title}</h1>}
              {description && <p className="text-gray-400 text-lg">{description}</p>}
            </div>
          )}
          {children}
        </Container>
      </main>
    )
  }
)

Page.displayName = 'Page'
