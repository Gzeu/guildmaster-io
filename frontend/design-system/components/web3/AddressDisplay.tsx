'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Tooltip } from '../Tooltip'

export interface AddressDisplayProps {
  address: string
  length?: 'short' | 'medium' | 'long' | 'full'
  copyable?: boolean
  explorerUrl?: string
  className?: string
  showCopyFeedback?: boolean
}

const lengthConfigs = {
  short: { start: 6, end: 4 },
  medium: { start: 10, end: 6 },
  long: { start: 16, end: 8 },
  full: null,
}

export function AddressDisplay({
  address,
  length = 'short',
  copyable = true,
  explorerUrl,
  className,
  showCopyFeedback = true,
}: AddressDisplayProps) {
  const [copied, setCopied] = useState(false)

  const formatAddress = () => {
    if (length === 'full') return address
    const config = lengthConfigs[length]
    if (!config) return address
    return `${address.slice(0, config.start)}...${address.slice(-config.end)}`
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy address:', error)
    }
  }

  const handleExplorerClick = () => {
    if (explorerUrl) {
      window.open(`${explorerUrl}/accounts/${address}`, '_blank')
    }
  }

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1.5 rounded-lg',
        'bg-dark-card border border-dark-border font-mono text-sm',
        className
      )}
    >
      <span className="text-gray-300">{formatAddress()}</span>

      {copyable && (
        <Tooltip content={copied ? 'Copied!' : 'Copy address'}>
          <button
            onClick={handleCopy}
            className="text-gray-400 hover:text-primary-400 transition-colors"
            aria-label="Copy address"
          >
            {copied ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            )}
          </button>
        </Tooltip>
      )}

      {explorerUrl && (
        <Tooltip content="View in Explorer">
          <button
            onClick={handleExplorerClick}
            className="text-gray-400 hover:text-primary-400 transition-colors"
            aria-label="View in explorer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </button>
        </Tooltip>
      )}
    </div>
  )
}
