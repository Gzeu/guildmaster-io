import useSWR from 'swr'
import { api, Protocol } from '@/lib/api'

export function useProtocols() {
  const { data, error, isLoading, mutate } = useSWR<Protocol[]>(
    '/protocols',
    api.getProtocols,
    {
      refreshInterval: 30000,
      revalidateOnFocus: true,
    }
  )

  return {
    protocols: data || [],
    isLoading,
    isError: error,
    refresh: mutate,
  }
}

export function useProtocol(id: string | null) {
  const { data, error, isLoading } = useSWR<Protocol>(
    id ? `/protocols/${id}` : null,
    () => (id ? api.getProtocolById(id) : null),
    {
      refreshInterval: 30000,
    }
  )

  return {
    protocol: data,
    isLoading,
    isError: error,
  }
}
