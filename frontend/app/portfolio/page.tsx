'use client'

import Link from 'next/link'
import { useGetAccountInfo } from '@multiversx/sdk-dapp/hooks/account/useGetAccountInfo'
import { useGetIsLoggedIn } from '@multiversx/sdk-dapp/hooks/account/useGetIsLoggedIn'
import { StatCard } from '@/components/StatCard'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const portfolioHistory = [
  { date: 'Jan 1', value: 1200 },
  { date: 'Jan 8', value: 1215 },
  { date: 'Jan 15', value: 1228 },
  { date: 'Jan 22', value: 1240 },
  { date: 'Jan 29', value: 1236 },
  { date: 'Feb 5', value: 1248 },
  { date: 'Feb 12', value: 1262 },
  { date: 'Feb 19', value: 1250 },
]

const positions = [
  {
    protocol: 'xExchange',
    type: 'Liquidity Pool',
    deposited: '500 EGLD',
    currentValue: '547.2 EGLD',
    apy: 12.5,
    pnl: '+47.2 EGLD',
    pnlPositive: true,
    riskScore: 25,
  },
  {
    protocol: 'Hatom',
    type: 'Lending',
    deposited: '300 EGLD',
    currentValue: '324.9 EGLD',
    apy: 8.3,
    pnl: '+24.9 EGLD',
    pnlPositive: true,
    riskScore: 30,
  },
  {
    protocol: 'AshSwap',
    type: 'Yield Farming',
    deposited: '200 EGLD',
    currentValue: '230.4 EGLD',
    apy: 15.2,
    pnl: '+30.4 EGLD',
    pnlPositive: true,
    riskScore: 45,
  },
]

export default function PortfolioPage() {
  const isLoggedIn = useGetIsLoggedIn()
  const { address } = useGetAccountInfo()

  const shortenAddress = (addr: string) =>
    addr ? `${addr.slice(0, 8)}...${addr.slice(-6)}` : ''

  if (!isLoggedIn) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <div className="w-16 h-16 bg-primary-600/20 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-3">Connect Wallet to View Portfolio</h2>
          <p className="text-gray-400 mb-8 max-w-md">
            Connect your MultiversX wallet to see your DeFi positions, earnings, and performance analytics.
          </p>
          <Link href="/unlock" className="btn-primary">
            Connect Wallet
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Portfolio</h1>
        <p className="text-gray-400 font-mono text-sm">{shortenAddress(address)}</p>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <StatCard
          icon={
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          }
          label="Total Value"
          value="1,250 EGLD"
          trend={{ value: '+4.2%', isPositive: true }}
          color="blue"
        />
        <StatCard
          icon={
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          }
          label="Total P&L"
          value="+102.5 EGLD"
          trend={{ value: '+8.7%', isPositive: true }}
          color="green"
        />
        <StatCard
          icon={
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          label="Est. Annual Yield"
          value="137 EGLD"
          color="purple"
        />
        <StatCard
          icon={
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          }
          label="Active Positions"
          value={`${positions.length}`}
          color="orange"
        />
      </div>

      {/* Portfolio value chart */}
      <div className="card mb-6">
        <h2 className="text-xl font-semibold mb-6">Portfolio Value (EGLD)</h2>
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={portfolioHistory}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e2442" />
            <XAxis dataKey="date" stroke="#6b7280" tick={{ fontSize: 12 }} />
            <YAxis stroke="#6b7280" tick={{ fontSize: 12 }} tickFormatter={(v) => `${v}`} domain={['auto', 'auto']} />
            <Tooltip
              contentStyle={{ backgroundColor: '#151932', border: '1px solid #1e2442', borderRadius: '8px' }}
              formatter={(value: number) => [`${value} EGLD`, 'Value']}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#10b981"
              fill="#10b981"
              fillOpacity={0.15}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Positions */}
      <div className="card">
        <h2 className="text-xl font-semibold mb-6">Active Positions</h2>
        <div className="space-y-3">
          {positions.map((pos, idx) => (
            <div key={idx} className="bg-dark-bg rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-600/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary-500 font-bold">{pos.protocol[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold">{pos.protocol}</p>
                    <p className="text-xs text-gray-400">{pos.type}</p>
                  </div>
                </div>
                <span
                  className={`text-sm font-bold ${
                    pos.pnlPositive ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {pos.pnl}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm border-t border-dark-border pt-3">
                <div>
                  <p className="text-xs text-gray-400">Deposited</p>
                  <p className="font-medium">{pos.deposited}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Current Value</p>
                  <p className="font-medium text-green-400">{pos.currentValue}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">APY / Risk</p>
                  <p className="font-medium">
                    {pos.apy}%
                    <span className="text-gray-500"> · </span>
                    <span
                      className={`${
                        pos.riskScore < 30
                          ? 'text-green-500'
                          : pos.riskScore < 60
                          ? 'text-yellow-500'
                          : 'text-red-500'
                      }`}
                    >
                      {pos.riskScore < 30 ? 'Low' : pos.riskScore < 60 ? 'Med' : 'High'}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
