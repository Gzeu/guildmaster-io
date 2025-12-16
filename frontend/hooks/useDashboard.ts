import useSWR from 'swr'
import { api, DashboardMetrics } from '@/lib/api'

export function useDashboard() {
  const { data, error, isLoading, mutate } = useSWR<DashboardMetrics>(
    '/metrics/dashboard',
    api.getDashboardMetrics,
    {
      refreshInterval: 30000,
      revalidateOnFocus: true,
    }
  )

  return {
    metrics: data || {
      totalStaked: '0',
      averageAPY: '0',
      protocolsMonitored: 0,
      riskScore: 0,
      apyHistory: [],
    },
    isLoading,
    isError: error,
    refresh: mutate,
  }
}
