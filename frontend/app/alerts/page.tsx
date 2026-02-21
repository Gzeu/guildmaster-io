'use client'

import { useState } from 'react'

type AlertSeverity = 'critical' | 'warning' | 'info'
type AlertStatus = 'active' | 'resolved'

interface Alert {
  id: string
  title: string
  description: string
  protocol: string
  severity: AlertSeverity
  status: AlertStatus
  timestamp: string
}

const INITIAL_ALERTS: Alert[] = [
  {
    id: '1',
    title: 'High Risk Score Detected',
    description: 'JEXchange risk score crossed the 65 threshold. Consider reducing exposure.',
    protocol: 'JEXchange',
    severity: 'critical',
    status: 'active',
    timestamp: '2026-02-21T16:44:00Z',
  },
  {
    id: '2',
    title: 'APY Drop — AshSwap',
    description: 'AshSwap APY dropped by 2.3% in the last 24h. From 17.5% → 15.2%.',
    protocol: 'AshSwap',
    severity: 'warning',
    status: 'active',
    timestamp: '2026-02-21T12:10:00Z',
  },
  {
    id: '3',
    title: 'Better APY Available',
    description: 'Provider C now offers 12.1% APY — higher than your current staking provider (10.8%).',
    protocol: 'Staking',
    severity: 'info',
    status: 'active',
    timestamp: '2026-02-20T09:00:00Z',
  },
  {
    id: '4',
    title: 'TVL Recovery — xExchange',
    description: 'xExchange TVL recovered above $45M after a temporary dip.',
    protocol: 'xExchange',
    severity: 'info',
    status: 'resolved',
    timestamp: '2026-02-19T14:30:00Z',
  },
]

const SEVERITY_STYLES: Record<AlertSeverity, { bg: string; text: string; border: string; dot: string }> = {
  critical: {
    bg: 'bg-red-500/10',
    text: 'text-red-400',
    border: 'border-red-500/30',
    dot: 'bg-red-500',
  },
  warning: {
    bg: 'bg-yellow-500/10',
    text: 'text-yellow-400',
    border: 'border-yellow-500/30',
    dot: 'bg-yellow-500',
  },
  info: {
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    border: 'border-blue-500/30',
    dot: 'bg-blue-500',
  },
}

function formatTs(ts: string) {
  return new Date(ts).toLocaleString('en-GB', {
    day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit',
  })
}

export default function AlertsPage() {
  const [alerts, setAlerts] = useState<Alert[]>(INITIAL_ALERTS)
  const [filter, setFilter] = useState<AlertStatus | 'all'>('all')

  const displayed = filter === 'all' ? alerts : alerts.filter((a) => a.status === filter)
  const activeCount = alerts.filter((a) => a.status === 'active').length

  const resolve = (id: string) =>
    setAlerts((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: 'resolved' } : a))
    )

  const resolveAll = () =>
    setAlerts((prev) => prev.map((a) => ({ ...a, status: 'resolved' })))

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Alerts</h1>
          <p className="text-gray-400">Real-time risk and opportunity notifications</p>
        </div>
        {activeCount > 0 && (
          <button
            onClick={resolveAll}
            className="btn-secondary text-sm"
          >
            Resolve All ({activeCount})
          </button>
        )}
      </div>

      {/* Summary chips */}
      <div className="flex items-center space-x-3 mb-6">
        {(['all', 'active', 'resolved'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors capitalize ${
              filter === f
                ? 'bg-primary-600 text-white'
                : 'bg-dark-card border border-dark-border text-gray-400 hover:text-white'
            }`}
          >
            {f === 'all' ? `All (${alerts.length})` : f === 'active' ? `Active (${activeCount})` : `Resolved (${alerts.length - activeCount})`}
          </button>
        ))}
      </div>

      {/* Alert list */}
      {displayed.length === 0 ? (
        <div className="card flex flex-col items-center justify-center py-16 text-center">
          <div className="w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
            <svg className="w-7 h-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-gray-300 font-semibold text-lg">All clear!</p>
          <p className="text-gray-500 text-sm mt-1">No alerts to show.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {displayed.map((alert) => {
            const style = SEVERITY_STYLES[alert.severity]
            const isResolved = alert.status === 'resolved'
            return (
              <div
                key={alert.id}
                className={`card border ${
                  isResolved ? 'opacity-50 border-dark-border' : style.border
                } transition-opacity`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start space-x-4">
                    {/* Severity dot */}
                    <div className="mt-1 flex-shrink-0">
                      <div className={`w-3 h-3 rounded-full ${isResolved ? 'bg-gray-500' : style.dot}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-1">
                        <p className="font-semibold">{alert.title}</p>
                        <span
                          className={`px-2 py-0.5 rounded text-xs font-semibold ${
                            isResolved
                              ? 'bg-gray-500/20 text-gray-400'
                              : `${style.bg} ${style.text}`
                          }`}
                        >
                          {isResolved ? 'RESOLVED' : alert.severity.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-2">{alert.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span className="flex items-center space-x-1">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                          <span>{alert.protocol}</span>
                        </span>
                        <span>{formatTs(alert.timestamp)}</span>
                      </div>
                    </div>
                  </div>
                  {!isResolved && (
                    <button
                      onClick={() => resolve(alert.id)}
                      className="flex-shrink-0 text-xs text-gray-400 hover:text-white border border-dark-border hover:border-gray-500 rounded-lg px-3 py-1.5 transition-colors"
                    >
                      Resolve
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
