'use client'

import { useState, ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface AccordionItem {
  id: string
  title: string
  content: ReactNode
  disabled?: boolean
}

export interface AccordionProps {
  items: AccordionItem[]
  defaultOpen?: string[]
  multiple?: boolean
  className?: string
}

export function Accordion({
  items,
  defaultOpen = [],
  multiple = false,
  className,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(defaultOpen))

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(itemId)) {
        newSet.delete(itemId)
      } else {
        if (!multiple) {
          newSet.clear()
        }
        newSet.add(itemId)
      }
      return newSet
    })
  }

  return (
    <div className={cn('w-full space-y-2', className)}>
      {items.map((item) => (
        <AccordionItemComponent
          key={item.id}
          item={item}
          isOpen={openItems.has(item.id)}
          onToggle={() => !item.disabled && toggleItem(item.id)}
        />
      ))}
    </div>
  )
}

function AccordionItemComponent({
  item,
  isOpen,
  onToggle,
}: {
  item: AccordionItem
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      className={cn(
        'rounded-lg border bg-dark-card overflow-hidden transition-all duration-300',
        isOpen ? 'border-primary-500/50' : 'border-dark-border'
      )}
    >
      <button
        onClick={onToggle}
        disabled={item.disabled}
        className={cn(
          'w-full px-4 py-3 flex items-center justify-between',
          'text-left font-medium transition-colors',
          item.disabled
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:bg-dark-cardHover cursor-pointer'
        )}
      >
        <span className="text-white">{item.title}</span>
        <svg
          className={cn(
            'w-5 h-5 text-gray-400 transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-4 py-3 border-t border-dark-border text-gray-300">
          {item.content}
        </div>
      </div>
    </div>
  )
}
