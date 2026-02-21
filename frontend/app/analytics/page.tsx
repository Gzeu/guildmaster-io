'use client'

import { useState } from 'react'
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import { StatCard } from '@/components/StatCard'

const apyHistoryData = [
  { date: 'Jan 1', xExchange: 12.1, Hatom: 7.8, AshSwap: 14.2, avg: 11.4 },
  { date: 'Jan 8', xExchange: 12.5, Hatom: 8.0, AshSwap: 14.8, avg: 11.8 },
  { date: 'Jan 15', xExchange: 11.9, Hatom: 8.3, AshSwap: 15.1, avg: 11.8 },
  { date: 'Jan 22', xExchange: 12.8, Hatom: 7.9, AshSwap: 13.9, avg: 11.5 },
  { date: 'Jan 29', xExchange: 13.2, Hatom: 8.1, AshSwap: 15.5, avg: 12.3 },
  { date: 'Feb 5', xExchange: 12.7, Hatom: 8.5, AshSwap: 15.2, avg: 12.1 },
  { date: 'Feb 12', xExchange: 13.5, Hatom: 8.8, AshSwap: 16.0, avg: 12.8 },
  { date: 'Feb 19', xExchange: 12.9, Hatom: 8.4, AshSwap: 15.7, avg: 12.3 },
]

const tvlData = [
  { date: 'Jan 1', tvl: 82.1 },
  { date: 'Jan 8', tvl: 85.4 },
  { date: 'Jan 15', tvl: 88.9 },
  { date: 'Jan 22', tvl: 91.2 },
  { date: 'Jan 29', tvl: 89.5 },
  { date: 'Feb 5', tvl: 93.7 },
  { date: 'Feb 12', tvl: 96.1 },
  { date: 'Feb 19', tvl: 97.3 },
]

const riskData = [
  { name: 'xExchange', risk: 25, tvl: 45.2 },
  { name: 'Hatom', risk: 30, tvl: 28.7 },
  { name: 'AshSwap', risk: 45, tvl: 15.3 },
  { name: 'JEXchange', risk: 68, tvl: 8.1 },
]

const PERIODS = ['7D', '30D', '90D', 'ALL'] as const
type Period = (typeof PERIODS)[number]

export default function AnalyticsPage() {
  const [activePeriod, setActivePeriod] = useState<Period>('30D')

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Analytics</h1>
        <p className="text-gray-400">Historical data and performance insights across MultiversX DeFi</p>
      </div>

      {/* Period selector */}
      <div className="flex items-center space-x-2 mb-8">
        {PERIODS.map((p) => (
          <button
            key={p}
            onClick={() => setActivePeriod(p)}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              activePeriod === p
                ? 'bg-primary-600 text-white'
                : 'bg-dark-card border border-dark-border text-gray-400 hover:text-white'
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Top stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <StatCard
          icon={
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          }
          label="Best APY Now"
          value="16.0%"
          trend={{ value: '+0.8%', isPositive: true }}
          color="green"
        />
        <StatCard
          icon={
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          label="Total TVL"
          value="$97.3M"
          trend={{ value: '+18.6%', isPositive: true }}
          color="blue"
        />
        <StatCard
          icon={
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          }
          label="Avg Risk Score"
          value="42 / 100"
          trend={{ value: '-3', isPositive: true }}
          color="purple"
        />
        <StatCard
          icon={
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          }
          label="Active Protocols"
          value="4 / 8"
          color="orange"
        />
      </div>

      {/* APY History */}
      <div className="card mb-6">
        <h2 className="text-xl font-semibold mb-6">APY History by Protocol</h2>
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={apyHistoryData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e2442" />
            <XAxis dataKey="date" stroke="#6b7280" tick={{ fontSize: 12 }} />
            <YAxis stroke="#6b7280" tick={{ fontSize: 12 }} tickFormatter={(v) => `${v}%`} />
            <Tooltip
              contentStyle={{ backgroundColor: '#151932', border: '1px solid #1e2442', borderRadius: '8px' }}
              formatter={(value: number) => [`${value}%`]}
            />
            <Legend />
            <Line type="monotone" dataKey="xExchange" stroke="#0ea5e9" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="Hatom" stroke="#8b5cf6" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="AshSwap" stroke="#f59e0b" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="avg" stroke="#10b981" strokeWidth={2} strokeDasharray="4 4" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* TVL & Risk side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* TVL Over Time */}
        <div className="card">
          <h2 className="text-xl font-semibold mb-6">Total Value Locked (M EGLD)</h2>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={tvlData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e2442" />
              <XAxis dataKey="date" stroke="#6b7280" tick={{ fontSize: 12 }} />
              <YAxis stroke="#6b7280" tick={{ fontSize: 12 }} tickFormatter={(v) => `$${v}M`} />
              <Tooltip
                contentStyle={{ backgroundColor: '#151932', border: '1px solid #1e2442', borderRadius: '8px' }}
                formatter={(value: number) => [`$${value}M`]}
              />
              <Area type="monotone" dataKey="tvl" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.15} strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Risk vs TVL */}
        <div className="card">
          <h2 className="text-xl font-semibold mb-6">Risk Score by Protocol</h2>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={riskData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#1e2442" horizontal={false} />
              <XAxis type="number" stroke="#6b7280" tick={{ fontSize: 12 }} domain={[0, 100]} />
              <YAxis type="category" dataKey="name" stroke="#6b7280" tick={{ fontSize: 12 }} width={80} />
              <Tooltip
                contentStyle={{ backgroundColor: '#151932', border: '1px solid #1e2442', borderRadius: '8px' }}
                formatter={(value: number) => [value, 'Risk Score']}
              />
              <Bar
                dataKey="risk"
                radius={[0, 4, 4, 0]}
                fill="#0ea5e9"
                label={{ position: 'right', fontSize: 11, fill: '#9ca3af', formatter: (v: number) => `${v}/100` }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
