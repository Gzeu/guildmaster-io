export interface Transaction {
  hash: string
  timestamp: number
  status: 'pending' | 'success' | 'failed'
  type: 'stake' | 'unstake' | 'claim'
  amount: string
}

export interface UserStats {
  totalStaked: string
  totalRewards: string
  activePositions: number
  estimatedAPY: number
}

export interface ProtocolAlert {
  id: string
  protocolId: string
  protocolName: string
  type: 'risk' | 'opportunity' | 'warning'
  message: string
  timestamp: number
  severity: 'low' | 'medium' | 'high'
}

export interface StakingPosition {
  provider: string
  amount: string
  apy: number
  startDate: number
  estimatedRewards: string
}
