'use client'

import { useEffect, useState } from 'react'
import { MetricsCard } from './MetricsCard'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface DashboardMetrics {
  totalStaked: string
  averageAPY: string
  protocolsMonitored: number
  riskScore: number
}

export function Dashboard() {
  const [metrics, setMetrics] = useState<DashboardMetrics>({
    totalStaked: '0',
    averageAPY: '0',
    protocolsMonitored: 0,
    riskScore: 0
  })

  const [chartData, setChartData] = useState([
    { date: '12/10', value: 8.5 },
    { date: '12/11', value: 9.2 },
    { date: '12/12', value: 8.8 },
    { date: '12/13', value: 10.1 },
    { date: '12/14', value: 9.5 },
    { date: '12/15', value: 11.2 },
    { date: '12/16', value: 10.8 },
  ])

  useEffect(() => {
    // Simulate fetching data
    setMetrics({
      totalStaked: '125,430',
      averageAPY: '10.8',
      protocolsMonitored: 8,
      riskScore: 32
    })
  }, [])

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricsCard
          title="Total Staked"
          value={`${metrics.totalStaked} EGLD`}
          change="+12.5%"
          positive={true}
        />
        <MetricsCard
          title="Average APY"
          value={`${metrics.averageAPY}%`}
          change="+0.8%"
          positive={true}
        />
        <MetricsCard
          title="Protocols Monitored"
          value={metrics.protocolsMonitored.toString()}
          change="+2"
          positive={true}
        />
        <MetricsCard
          title="Risk Score"
          value={metrics.riskScore.toString()}
          change="-5"
          positive={true}
          subtitle="Low Risk"
        />
      </div>

      <div className="card">
        <h3 className="text-xl font-semibold mb-4">APY Trend (7 days)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e2442" />
            <XAxis dataKey="date" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{ backgroundColor: '#151932', border: '1px solid #1e2442' }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#0ea5e9"
              fill="#0ea5e9"
              fillOpacity={0.2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
