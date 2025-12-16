'use client'

import { StakingOptimizer } from '@/components/StakingOptimizer'
import { StatCard } from '@/components/StatCard'
import { useGetAccountInfo } from '@multiversx/sdk-dapp/hooks/account/useGetAccountInfo'

export default function StakingPage() {
  const { address } = useGetAccountInfo()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Staking Optimizer</h1>
        <p className="text-gray-400">Maximize your EGLD staking rewards automatically</p>
      </div>

      {address && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <StatCard
            icon={
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            label="Your Staked"
            value="1,250 EGLD"
            trend={{ value: '+12.5%', isPositive: true }}
            color="green"
          />
          <StatCard
            icon={
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            }
            label="Current APY"
            value="11.2%"
            trend={{ value: '+0.8%', isPositive: true }}
            color="blue"
          />
          <StatCard
            icon={
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            label="Est. Rewards"
            value="140 EGLD/year"
            color="purple"
          />
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <StakingOptimizer />
        </div>
        <div className="space-y-6">
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">How It Works</h3>
            <ol className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-500 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                <span>Our AI scans all staking providers in real-time</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-500 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                <span>We identify the provider with the highest APY</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-500 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                <span>Your EGLD is automatically staked for maximum returns</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-500 rounded-full flex items-center justify-center text-xs font-bold">4</span>
                <span>We continuously monitor and alert you to better opportunities</span>
              </li>
            </ol>
          </div>

          <div className="card bg-gradient-to-br from-primary-500/10 to-purple-500/10 border-primary-500/20">
            <h3 className="text-lg font-semibold mb-2">🎉 Pro Tip</h3>
            <p className="text-sm text-gray-300">
              Compound your rewards regularly to maximize earnings through the power of compound interest!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
