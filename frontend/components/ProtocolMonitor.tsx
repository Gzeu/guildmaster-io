'use client'

import { useState, useEffect } from 'react'

interface Protocol {
  id: string
  name: string
  tvl: string
  apy: number
  riskScore: number
  status: 'healthy' | 'warning' | 'critical'
}

export function ProtocolMonitor() {
  const [protocols, setProtocols] = useState<Protocol[]>([])
  const [selectedProtocol, setSelectedProtocol] = useState<Protocol | null>(null)

  useEffect(() => {
    // Simulate fetching protocol data
    setProtocols([
      {
        id: 'xexchange',
        name: 'xExchange',
        tvl: '45.2M',
        apy: 12.5,
        riskScore: 25,
        status: 'healthy'
      },
      {
        id: 'hatom',
        name: 'Hatom',
        tvl: '28.7M',
        apy: 8.3,
        riskScore: 30,
        status: 'healthy'
      },
      {
        id: 'ashswap',
        name: 'AshSwap',
        tvl: '15.3M',
        apy: 15.2,
        riskScore: 45,
        status: 'warning'
      },
      {
        id: 'jexchange',
        name: 'JEXchange',
        tvl: '8.1M',
        apy: 18.7,
        riskScore: 68,
        status: 'warning'
      },
    ])
  }, [])

  const getRiskColor = (score: number) => {
    if (score < 30) return 'text-green-500'
    if (score < 60) return 'text-yellow-500'
    return 'text-red-500'
  }

  const getRiskLabel = (score: number) => {
    if (score < 30) return 'Low'
    if (score < 60) return 'Medium'
    return 'High'
  }

  const getStatusBadge = (status: string) => {
    const colors = {
      healthy: 'bg-green-500/20 text-green-500',
      warning: 'bg-yellow-500/20 text-yellow-500',
      critical: 'bg-red-500/20 text-red-500'
    }
    return colors[status as keyof typeof colors] || colors.healthy
  }

  return (
    <div className="card">
      <h2 className="text-2xl font-bold mb-4">Protocol Monitor</h2>
      
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search protocols..."
              className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary-500"
            />
          </div>
          <button className="btn-secondary text-sm">
            Filter
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {protocols.map((protocol) => (
          <div
            key={protocol.id}
            onClick={() => setSelectedProtocol(protocol)}
            className="bg-dark-bg rounded-lg p-4 cursor-pointer hover:bg-dark-border/50 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-600/20 rounded-lg flex items-center justify-center">
                  <span className="text-primary-500 font-bold">{protocol.name[0]}</span>
                </div>
                <div>
                  <p className="font-semibold">{protocol.name}</p>
                  <p className="text-xs text-gray-400">TVL: {protocol.tvl} EGLD</p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusBadge(protocol.status)}`}>
                {protocol.status.toUpperCase()}
              </span>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-3 pt-3 border-t border-dark-border">
              <div>
                <p className="text-xs text-gray-400">APY</p>
                <p className="font-semibold">{protocol.apy}%</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Risk Score</p>
                <p className={`font-semibold ${getRiskColor(protocol.riskScore)}`}>
                  {protocol.riskScore} ({getRiskLabel(protocol.riskScore)})
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Status</p>
                <p className="font-semibold text-xs">{protocol.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProtocol && (
        <div className="mt-6 pt-6 border-t border-dark-border">
          <h3 className="text-sm font-semibold mb-3">Protocol Details: {selectedProtocol.name}</h3>
          <div className="bg-dark-bg rounded-lg p-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Total Value Locked</span>
              <span className="font-semibold">{selectedProtocol.tvl} EGLD</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Current APY</span>
              <span className="font-semibold">{selectedProtocol.apy}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Risk Assessment</span>
              <span className={`font-semibold ${getRiskColor(selectedProtocol.riskScore)}`}>
                {getRiskLabel(selectedProtocol.riskScore)} Risk
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
