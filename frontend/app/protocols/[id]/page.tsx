'use client'

import { useParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

interface Protocol {
  id: string
  name: string
  tvl: string
  apy: number
  riskScore: number
  status: 'healthy' | 'warning' | 'critical'
  description: string
  website: string
  category: string
  launchDate: string
  audits: string[]
}

const PROTOCOL_DB: Record<string, Protocol> = {
  xexchange: {
    id: 'xexchange',
    name: 'xExchange',
    tvl: '45.2M',
    apy: 12.5,
    riskScore: 25,
    status: 'healthy',
    description: 'The main DEX on MultiversX, offering swaps, liquidity provision, and yield farming with deep liquidity.',
    website: 'https://xexchange.com',
    category: 'DEX / AMM',
    launchDate: '2022-04',
    audits: ['CertiK', 'Trail of Bits'],
  },
  hatom: {
    id: 'hatom',
    name: 'Hatom',
    tvl: '28.7M',
    apy: 8.3,
    riskScore: 30,
    status: 'healthy',
    description: 'Decentralized money market protocol on MultiversX. Lend and borrow EGLD and other tokens.',
    website: 'https://hatom.com',
    category: 'Lending / Borrowing',
    launchDate: '2023-02',
    audits: ['CertiK'],
  },
  ashswap: {
    id: 'ashswap',
    name: 'AshSwap',
    tvl: '15.3M',
    apy: 15.2,
    riskScore: 45,
    status: 'warning',
    description: 'Stable-asset exchange optimised for low slippage. Offers boosted yields via vote-locking mechanics.',
    website: 'https://ashswap.io',
    category: 'Stable DEX',
    launchDate: '2022-11',
    audits: ['Hacken'],
  },
  jexchange: {
    id: 'jexchange',
    name: 'JEXchange',
    tvl: '8.1M',
    apy: 18.7,
    riskScore: 68,
    status: 'warning',
    description: 'Community-driven DEX with high-yield incentive pools. Higher risk due to smaller TVL and newer codebase.',
    website: 'https://jexchange.io',
    category: 'DEX',
    launchDate: '2023-06',
    audits: [],
  },
}

const generateHistory = (base: number) =>
  Array.from({ length: 14 }, (_, i) => ({
    date: `D-${13 - i}`,
    apy: parseFloat((base + (Math.random() * 2 - 1)).toFixed(2)),
  }))

export default function ProtocolDetailPage() {
  const params = useParams()
  const router = useRouter()
  const id = params?.id as string
  const protocol = PROTOCOL_DB[id]

  const [history] = useState(() => (protocol ? generateHistory(protocol.apy) : []))

  useEffect(() => {
    if (!protocol) router.replace('/protocols')
  }, [protocol, router])

  if (!protocol) return null

  const getRiskColor = (score: number) =>
    score < 30 ? 'text-green-500' : score < 60 ? 'text-yellow-500' : 'text-red-500'

  const getRiskLabel = (score: number) =>
    score < 30 ? 'Low Risk' : score < 60 ? 'Medium Risk' : 'High Risk'

  const getStatusBadge = (status: string) => {
    const map = {
      healthy: 'bg-green-500/20 text-green-500 border-green-500/30',
      warning: 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30',
      critical: 'bg-red-500/20 text-red-500 border-red-500/30',
    }
    return map[status as keyof typeof map] || map.healthy
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/protocols" className="hover:text-primary-400 transition-colors">
          Protocols
        </Link>
        <span className="mx-2">/</span>
        <span className="text-white">{protocol.name}</span>
      </nav>

      {/* Protocol Header */}
      <div className="card mb-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-primary-600/20 rounded-xl flex items-center justify-center">
              <span className="text-primary-400 font-bold text-2xl">{protocol.name[0]}</span>
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-1">
                <h1 className="text-3xl font-bold">{protocol.name}</h1>
                <span
                  className={`px-2.5 py-0.5 rounded border text-xs font-semibold ${
                    getStatusBadge(protocol.status)
                  }`}
                >
                  {protocol.status.toUpperCase()}
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-2">{protocol.category}</p>
              <p className="text-gray-300 max-w-xl">{protocol.description}</p>
            </div>
          </div>
          <a
            href={protocol.website}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm flex items-center space-x-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span>Visit</span>
          </a>
        </div>

        {/* Key metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-dark-border">
          <div>
            <p className="text-xs text-gray-400 mb-1">Total Value Locked</p>
            <p className="text-xl font-bold">${protocol.tvl}</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-1">Current APY</p>
            <p className="text-xl font-bold text-green-400">{protocol.apy}%</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-1">Risk Score</p>
            <p className={`text-xl font-bold ${getRiskColor(protocol.riskScore)}`}>
              {protocol.riskScore} <span className="text-sm font-normal">({getRiskLabel(protocol.riskScore)})</span>
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-1">Launch Date</p>
            <p className="text-xl font-bold">{protocol.launchDate}</p>
          </div>
        </div>
      </div>

      {/* APY History chart */}
      <div className="card mb-6">
        <h2 className="text-xl font-semibold mb-6">APY — Last 14 Days</h2>
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={history}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e2442" />
            <XAxis dataKey="date" stroke="#6b7280" tick={{ fontSize: 12 }} />
            <YAxis stroke="#6b7280" tick={{ fontSize: 12 }} tickFormatter={(v) => `${v}%`} />
            <Tooltip
              contentStyle={{ backgroundColor: '#151932', border: '1px solid #1e2442', borderRadius: '8px' }}
              formatter={(value: number) => [`${value}%`, 'APY']}
            />
            <Area
              type="monotone"
              dataKey="apy"
              stroke="#0ea5e9"
              fill="#0ea5e9"
              fillOpacity={0.15}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Security & Audits */}
      <div className="card">
        <h2 className="text-xl font-semibold mb-4">Security & Audits</h2>
        {protocol.audits.length > 0 ? (
          <div className="flex flex-wrap gap-3">
            {protocol.audits.map((audit) => (
              <div
                key={audit}
                className="flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-2"
              >
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-green-400 text-sm font-medium">{audit}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center space-x-3 text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span className="text-sm">No public audit available. Exercise extra caution.</span>
          </div>
        )}
      </div>
    </div>
  )
}
