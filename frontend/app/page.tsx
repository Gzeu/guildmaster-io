import { Dashboard } from '@/components/Dashboard'
import { StakingOptimizer } from '@/components/StakingOptimizer'
import { ProtocolMonitor } from '@/components/ProtocolMonitor'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Guildmaster.io</h1>
        <p className="text-gray-400">MultiversX DeFi Intelligence Platform</p>
      </div>

      <Dashboard />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <StakingOptimizer />
        <ProtocolMonitor />
      </div>
    </div>
  )
}
