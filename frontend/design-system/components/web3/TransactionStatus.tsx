'use client'

import { Badge } from '../Badge'
import { Progress } from '../Progress'
import { VStack, HStack } from '../Stack'
import { cn } from '@/lib/utils'

export type TransactionState =
  | 'pending'
  | 'processing'
  | 'success'
  | 'failed'
  | 'cancelled'

export interface TransactionStatusProps {
  state: TransactionState
  txHash?: string
  explorerUrl?: string
  message?: string
  progress?: number
  className?: string
}

const stateConfig: Record<TransactionState, {
  label: string
  variant: 'default' | 'primary' | 'success' | 'warning' | 'error'
  icon: React.ReactNode
}> = {
  pending: {
    label: 'Pending',
    variant: 'warning',
    icon: (
      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    ),
  },
  processing: {
    label: 'Processing',
    variant: 'primary',
    icon: (
      <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 11a1 1 0 112 0 1 1 0 01-2 0zm5-1a1 1 0 11-2 0 1 1 0 012 0z" />
      </svg>
    ),
  },
  success: {
    label: 'Success',
    variant: 'success',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  failed: {
    label: 'Failed',
    variant: 'error',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
  },
  cancelled: {
    label: 'Cancelled',
    variant: 'default',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
  },
}

export function TransactionStatus({
  state,
  txHash,
  explorerUrl,
  message,
  progress,
  className,
}: TransactionStatusProps) {
  const config = stateConfig[state]

  const handleViewExplorer = () => {
    if (txHash && explorerUrl) {
      window.open(`${explorerUrl}/transactions/${txHash}`, '_blank')
    }
  }

  return (
    <div
      className={cn(
        'p-4 rounded-lg border bg-dark-card border-dark-border',
        className
      )}
    >
      <VStack spacing="md">
        <HStack justify="between" align="center">
          <Badge variant={config.variant} icon={config.icon}>
            {config.label}
          </Badge>
          
          {txHash && explorerUrl && (
            <button
              onClick={handleViewExplorer}
              className="text-sm text-primary-400 hover:text-primary-300 transition-colors flex items-center gap-1"
            >
              View in Explorer
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </button>
          )}
        </HStack>

        {message && (
          <p className="text-sm text-gray-400">{message}</p>
        )}

        {txHash && (
          <div className="font-mono text-xs text-gray-500 break-all">
            {txHash}
          </div>
        )}

        {(state === 'pending' || state === 'processing') && progress !== undefined && (
          <Progress
            value={progress}
            variant="primary"
            animated
            showLabel
          />
        )}
      </VStack>
    </div>
  )
}
