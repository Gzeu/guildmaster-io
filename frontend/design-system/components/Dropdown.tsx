'use client'

import { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

export interface DropdownOption {
  value: string
  label: string
  disabled?: boolean
}

export interface DropdownProps {
  options: DropdownOption[]
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  disabled?: boolean
  className?: string
}

export function Dropdown({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  disabled,
  className,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const selectedOption = options.find((opt) => opt.value === value)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleSelect = (optionValue: string) => {
    onChange?.(optionValue)
    setIsOpen(false)
  }

  return (
    <div ref={dropdownRef} className={cn('relative', className)}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={cn(
          'w-full h-10 px-4 rounded-lg border bg-dark-bg text-left',
          'flex items-center justify-between',
          'transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500',
          disabled
            ? 'opacity-50 cursor-not-allowed border-dark-border'
            : 'border-dark-border hover:border-primary-500 cursor-pointer'
        )}
      >
        <span className={cn('text-base', !selectedOption && 'text-gray-500')}>
          {selectedOption?.label || placeholder}
        </span>
        <svg
          className={cn(
            'w-5 h-5 transition-transform text-gray-400',
            isOpen && 'rotate-180'
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          className={cn(
            'absolute top-full left-0 right-0 mt-2 z-50',
            'bg-dark-card border border-dark-border rounded-lg shadow-xl',
            'max-h-60 overflow-y-auto',
            'animate-in fade-in zoom-in-95 duration-200'
          )}
        >
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => !option.disabled && handleSelect(option.value)}
              disabled={option.disabled}
              className={cn(
                'w-full px-4 py-2.5 text-left transition-colors',
                'border-b border-dark-border last:border-b-0',
                option.disabled
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-dark-cardHover cursor-pointer',
                option.value === value && 'bg-dark-cardHover text-primary-400'
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
