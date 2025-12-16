'use client'

import { useState } from 'react'
import { useGetAccountInfo } from '@multiversx/sdk-dapp/hooks/account/useGetAccountInfo'
import { sendTransactions } from '@multiversx/sdk-dapp/services/transactions/sendTransactions'
import { refreshAccount } from '@multiversx/sdk-dapp/utils/account/refreshAccount'

interface StakingProvider {
  address: string
  name: string
  apy: number
  tvl: string
  commission: number
}

export function StakingOptimizer() {
  const { address } = useGetAccountInfo()
  const [amount, setAmount] = useState('')
  const [loading, setLoading] = useState(false)
  const [providers] = useState<StakingProvider[]>([
    {
      address: 'erd1qqqqqqqqqqqqqpgq...',
      name: 'Provider A',
      apy: 11.5,
      tvl: '2.5M',
      commission: 10
    },
    {
      address: 'erd1qqqqqqqqqqqqqpgq...',
      name: 'Provider B',
      apy: 10.8,
      tvl: '3.2M',
      commission: 12
    },
    {
      address: 'erd1qqqqqqqqqqqqqpgq...',
      name: 'Provider C',
      apy: 12.1,
      tvl: '1.8M',
      commission: 8
    },
  ])

  const bestProvider = providers.reduce((best, current) => 
    current.apy > best.apy ? current : best
  )

  const handleOptimizeStake = async () => {
    if (!amount || parseFloat(amount) <= 0) return
    
    setLoading(true)
    try {
      const tx = {
        value: amount,
        receiver: 'erd1qqqqqqqqqqqqqpgq...', // Replace with actual contract address
        data: 'optimizeStake',
        gasLimit: 60000000,
      }

      await sendTransactions({
        transactions: [tx],
        transactionsDisplayInfo: {
          processingMessage: 'Optimizing stake...',
          errorMessage: 'Staking failed',
          successMessage: 'Stake optimized successfully!'
        }
      })

      await refreshAccount()
      setAmount('')
    } catch (error) {
      console.error('Staking error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="card">
      <h2 className="text-2xl font-bold mb-4">Staking Optimizer</h2>
      
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-400">Best Provider</span>
          <span className="text-sm font-semibold text-green-500">{bestProvider.apy}% APY</span>
        </div>
        <div className="bg-dark-bg rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">{bestProvider.name}</p>
              <p className="text-sm text-gray-400">TVL: {bestProvider.tvl} EGLD</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">Commission</p>
              <p className="font-semibold">{bestProvider.commission}%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Amount to Stake</label>
          <div className="relative">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500"
            />
            <span className="absolute right-4 top-3 text-gray-400">EGLD</span>
          </div>
        </div>

        <button
          onClick={handleOptimizeStake}
          disabled={loading || !address || !amount}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Processing...' : 'Optimize & Stake'}
        </button>
      </div>

      <div className="mt-6 pt-6 border-t border-dark-border">
        <h3 className="text-sm font-semibold mb-3">All Providers</h3>
        <div className="space-y-2">
          {providers.map((provider, idx) => (
            <div key={idx} className="flex items-center justify-between text-sm">
              <span className="text-gray-400">{provider.name}</span>
              <span className="font-semibold">{provider.apy}% APY</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
