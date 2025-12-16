'use client'

import { useState } from 'react'
import { Input, type InputProps } from '../Input'
import { Button } from '../Button'
import { HStack, VStack } from '../Stack'
import { cn } from '@/lib/utils'

export interface Token {
  id: string
  symbol: string
  name: string
  decimals: number
  balance?: string
  usdValue?: number
}

export interface TokenInputProps extends Omit<InputProps, 'rightIcon' | 'value' | 'onChange'> {
  tokens?: Token[]
  selectedToken?: Token
  onTokenSelect?: (token: Token) => void
  value?: string
  onChange?: (value: string) => void
  onMax?: () => void
  showBalance?: boolean
  showUsdValue?: boolean
}

export function TokenInput({
  tokens = [],
  selectedToken,
  onTokenSelect,
  value,
  onChange,
  onMax,
  showBalance = true,
  showUsdValue = true,
  className,
  ...props
}: TokenInputProps) {
  const [isTokenSelectorOpen, setIsTokenSelectorOpen] = useState(false)

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    // Allow only numbers and decimal point
    if (newValue === '' || /^\d*\.?\d*$/.test(newValue)) {
      onChange?.(newValue)
    }
  }

  const calculateUsdValue = () => {
    if (!value || !selectedToken?.usdValue) return null
    const amount = parseFloat(value)
    if (isNaN(amount)) return null
    return (amount * selectedToken.usdValue).toFixed(2)
  }

  return (
    <VStack spacing="xs" className={className}>
      <div className="relative">
        <Input
          type="text"
          inputMode="decimal"
          placeholder="0.00"
          value={value}
          onChange={handleValueChange}
          className="pr-32 text-2xl font-semibold"
          {...props}
        />

        {/* Token Selector */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <HStack spacing="xs">
            {onMax && selectedToken?.balance && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onMax}
                className="h-8"
              >
                MAX
              </Button>
            )}
            
            {selectedToken && (
              <button
                onClick={() => setIsTokenSelectorOpen(!isTokenSelectorOpen)}
                className={cn(
                  'flex items-center gap-2 px-3 py-1.5 rounded-lg',
                  'bg-dark-cardHover hover:bg-dark-border transition-colors',
                  'font-semibold text-white'
                )}
              >
                <span>{selectedToken.symbol}</span>
                <svg
                  className={cn(
                    'w-4 h-4 transition-transform',
                    isTokenSelectorOpen && 'rotate-180'
                  )}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            )}
          </HStack>
        </div>
      </div>

      {/* Info Row */}
      <HStack justify="between" className="text-sm">
        <div className="text-gray-400">
          {showUsdValue && calculateUsdValue() && (
            <span>≈ ${calculateUsdValue()}</span>
          )}
        </div>
        <div className="text-gray-400">
          {showBalance && selectedToken?.balance && (
            <span>Balance: {selectedToken.balance} {selectedToken.symbol}</span>
          )}
        </div>
      </HStack>

      {/* Token Selector Dropdown */}
      {isTokenSelectorOpen && tokens.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 z-10">
          <div className="bg-dark-card border border-dark-border rounded-lg shadow-xl max-h-60 overflow-y-auto">
            {tokens.map((token) => (
              <button
                key={token.id}
                onClick={() => {
                  onTokenSelect?.(token)
                  setIsTokenSelectorOpen(false)
                }}
                className={cn(
                  'w-full p-3 flex items-center justify-between',
                  'hover:bg-dark-cardHover transition-colors',
                  'border-b border-dark-border last:border-b-0',
                  selectedToken?.id === token.id && 'bg-dark-cardHover'
                )}
              >
                <VStack spacing="xs" align="start">
                  <span className="font-semibold text-white">{token.symbol}</span>
                  <span className="text-xs text-gray-400">{token.name}</span>
                </VStack>
                {token.balance && (
                  <span className="text-sm text-gray-400">{token.balance}</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </VStack>
  )
}
