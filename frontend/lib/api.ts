import axios from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export interface StakingProvider {
  address: string
  name: string
  apy: number
  tvl: string
  commission: number
  status: 'active' | 'inactive'
}

export interface Protocol {
  id: string
  name: string
  tvl: string
  apy: number
  riskScore: number
  status: 'healthy' | 'warning' | 'critical'
  lastUpdate: string
}

export interface DashboardMetrics {
  totalStaked: string
  averageAPY: string
  protocolsMonitored: number
  riskScore: number
  apyHistory: Array<{ date: string; value: number }>
}

export const api = {
  // Dashboard
  getDashboardMetrics: async (): Promise<DashboardMetrics> => {
    const { data } = await apiClient.get('/metrics/dashboard')
    return data
  },

  // Staking
  getStakingProviders: async (): Promise<StakingProvider[]> => {
    const { data } = await apiClient.get('/staking/providers')
    return data
  },

  getBestProvider: async (): Promise<StakingProvider> => {
    const { data } = await apiClient.get('/staking/best-provider')
    return data
  },

  // Protocols
  getProtocols: async (): Promise<Protocol[]> => {
    const { data } = await apiClient.get('/protocols')
    return data
  },

  getProtocolById: async (id: string): Promise<Protocol> => {
    const { data } = await apiClient.get(`/protocols/${id}`)
    return data
  },

  // Analytics
  getAPYHistory: async (days: number = 7): Promise<Array<{ date: string; value: number }>> => {
    const { data } = await apiClient.get(`/analytics/apy-history?days=${days}`)
    return data
  },

  getRiskAnalysis: async (protocolId: string): Promise<any> => {
    const { data } = await apiClient.get(`/analytics/risk/${protocolId}`)
    return data
  },
}

export default api
