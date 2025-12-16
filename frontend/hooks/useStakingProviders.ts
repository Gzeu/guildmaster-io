import useSWR from 'swr'
import { api, StakingProvider } from '@/lib/api'

export function useStakingProviders() {
  const { data, error, isLoading, mutate } = useSWR<StakingProvider[]>(
    '/staking/providers',
    api.getStakingProviders,
    {
      refreshInterval: 30000, // Refresh every 30 seconds
      revalidateOnFocus: true,
    }
  )

  return {
    providers: data || [],
    isLoading,
    isError: error,
    refresh: mutate,
  }
}

export function useBestProvider() {
  const { data, error, isLoading } = useSWR<StakingProvider>(
    '/staking/best-provider',
    api.getBestProvider,
    {
      refreshInterval: 60000, // Refresh every minute
    }
  )

  return {
    bestProvider: data,
    isLoading,
    isError: error,
  }
}
