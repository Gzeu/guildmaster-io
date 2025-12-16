'use client'

import { useState, ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface Tab {
  id: string
  label: string
  content: ReactNode
  disabled?: boolean
  badge?: string | number
}

export interface TabsProps {
  tabs: Tab[]
  defaultTab?: string
  onChange?: (tabId: string) => void
  variant?: 'default' | 'pills'
  className?: string
}

export function Tabs({
  tabs,
  defaultTab,
  onChange,
  variant = 'default',
  className,
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    onChange?.(tabId)
  }

  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content

  return (
    <div className={cn('w-full', className)}>
      {/* Tab Headers */}
      <div
        className={cn(
          'flex gap-1',
          variant === 'default' && 'border-b border-dark-border',
          variant === 'pills' && 'bg-dark-card p-1 rounded-lg'
        )}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => !tab.disabled && handleTabChange(tab.id)}
            disabled={tab.disabled}
            className={cn(
              'px-4 py-2 font-medium text-sm transition-all duration-300',
              'focus:outline-none',
              tab.disabled && 'opacity-50 cursor-not-allowed',
              variant === 'default' && [
                'border-b-2',
                activeTab === tab.id
                  ? 'border-primary-500 text-white'
                  : 'border-transparent text-gray-400 hover:text-white',
              ],
              variant === 'pills' && [
                'rounded-md',
                activeTab === tab.id
                  ? 'bg-dark-bg text-white shadow-sm'
                  : 'text-gray-400 hover:text-white hover:bg-dark-cardHover',
              ]
            )}
          >
            <span className="flex items-center gap-2">
              {tab.label}
              {tab.badge && (
                <span className="px-1.5 py-0.5 text-xs rounded-full bg-primary-500/20 text-primary-400">
                  {tab.badge}
                </span>
              )}
            </span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="pt-4">{activeTabContent}</div>
    </div>
  )
}
