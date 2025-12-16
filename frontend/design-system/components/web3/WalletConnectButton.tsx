'use client'

import { useState } from 'react'
import { Button, type ButtonProps } from '../Button'
import { Modal, ModalFooter } from '../Modal'
import { VStack, HStack } from '../Stack'
import { cn } from '@/lib/utils'

interface WalletOption {
  id: string
  name: string
  description: string
  disabled?: boolean
}

const walletOptions: WalletOption[] = [
  {
    id: 'maiar',
    name: 'xPortal',
    description: 'Connect with xPortal mobile app',
  },
  {
    id: 'defi',
    name: 'DeFi Wallet',
    description: 'Browser extension wallet',
  },
  {
    id: 'ledger',
    name: 'Ledger',
    description: 'Hardware wallet',
  },
  {
    id: 'web',
    name: 'Web Wallet',
    description: 'MultiversX web wallet',
  },
]

export interface WalletConnectButtonProps extends Omit<ButtonProps, 'onClick'> {
  onConnect?: (walletId: string) => void
  address?: string
  balance?: string
}

export function WalletConnectButton({
  onConnect,
  address,
  balance,
  className,
  ...props
}: WalletConnectButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null)

  const handleWalletSelect = async (walletId: string) => {
    setSelectedWallet(walletId)
    setIsConnecting(true)
    
    try {
      await onConnect?.(walletId)
      setIsModalOpen(false)
    } catch (error) {
      console.error('Wallet connection failed:', error)
    } finally {
      setIsConnecting(false)
      setSelectedWallet(null)
    }
  }

  if (address) {
    return (
      <Button
        variant="secondary"
        className={cn('font-mono', className)}
        {...props}
      >
        <HStack spacing="sm" align="center">
          <div className="h-2 w-2 rounded-full bg-success-DEFAULT animate-pulse" />
          <span>{address.slice(0, 6)}...{address.slice(-4)}</span>
          {balance && (
            <span className="text-primary-400 font-semibold">
              {balance} EGLD
            </span>
          )}
        </HStack>
      </Button>
    )
  }

  return (
    <>
      <Button
        variant="primary"
        onClick={() => setIsModalOpen(true)}
        className={className}
        {...props}
      >
        Connect Wallet
      </Button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Connect Your Wallet"
        size="md"
      >
        <VStack spacing="md">
          <p className="text-gray-400 text-sm">
            Choose your preferred wallet to connect to Guildmaster.io
          </p>

          <VStack spacing="sm">
            {walletOptions.map((wallet) => (
              <button
                key={wallet.id}
                onClick={() => handleWalletSelect(wallet.id)}
                disabled={wallet.disabled || isConnecting}
                className={cn(
                  'w-full p-4 rounded-lg border transition-all duration-300',
                  'hover:border-primary-500 hover:bg-dark-cardHover',
                  'disabled:opacity-50 disabled:cursor-not-allowed',
                  wallet.disabled
                    ? 'border-dark-border bg-dark-card cursor-not-allowed'
                    : 'border-dark-border bg-dark-card',
                  selectedWallet === wallet.id && 'border-primary-500 bg-dark-cardHover'
                )}
              >
                <HStack justify="between" align="center">
                  <VStack spacing="xs" align="start">
                    <span className="font-semibold text-white">{wallet.name}</span>
                    <span className="text-sm text-gray-400">{wallet.description}</span>
                  </VStack>
                  {selectedWallet === wallet.id && isConnecting && (
                    <svg
                      className="animate-spin h-5 w-5 text-primary-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                  )}
                </HStack>
              </button>
            ))}
          </VStack>
        </VStack>

        <ModalFooter>
          <Button
            variant="secondary"
            onClick={() => setIsModalOpen(false)}
            fullWidth
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}
