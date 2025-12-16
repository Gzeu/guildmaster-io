'use client'

import { cn } from '@/lib/utils'

export interface SkeletonProps {
  variant?: 'text' | 'rectangular' | 'circular'
  width?: string | number
  height?: string | number
  className?: string
  count?: number
}

export function Skeleton({
  variant = 'rectangular',
  width,
  height,
  className,
  count = 1,
}: SkeletonProps) {
  const baseStyles = 'animate-pulse bg-dark-border'

  const variantStyles = {
    text: 'h-4 rounded',
    rectangular: 'rounded-lg',
    circular: 'rounded-full',
  }

  const style = {
    width: width ? (typeof width === 'number' ? `${width}px` : width) : undefined,
    height: height ? (typeof height === 'number' ? `${height}px` : height) : undefined,
  }

  if (count > 1) {
    return (
      <div className="space-y-2">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={cn(baseStyles, variantStyles[variant], className)}
            style={style}
          />
        ))}
      </div>
    )
  }

  return (
    <div
      className={cn(baseStyles, variantStyles[variant], className)}
      style={style}
    />
  )
}

// Predefined skeleton patterns
export function SkeletonCard() {
  return (
    <div className="p-6 bg-dark-card rounded-lg border border-dark-border space-y-4">
      <Skeleton variant="text" width="60%" />
      <Skeleton variant="text" width="100%" count={3} />
      <div className="flex gap-2 pt-2">
        <Skeleton variant="rectangular" width={80} height={32} />
        <Skeleton variant="rectangular" width={80} height={32} />
      </div>
    </div>
  )
}

export function SkeletonTable({ rows = 5 }: { rows?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} className="flex gap-4">
          <Skeleton variant="text" width="25%" />
          <Skeleton variant="text" width="40%" />
          <Skeleton variant="text" width="20%" />
          <Skeleton variant="text" width="15%" />
        </div>
      ))}
    </div>
  )
}
