interface StatCardProps {
  icon: React.ReactNode
  label: string
  value: string
  trend?: {
    value: string
    isPositive: boolean
  }
  color?: 'blue' | 'green' | 'purple' | 'orange'
}

export function StatCard({ icon, label, value, trend, color = 'blue' }: StatCardProps) {
  const colorClasses = {
    blue: 'bg-blue-500/10 text-blue-500',
    green: 'bg-green-500/10 text-green-500',
    purple: 'bg-purple-500/10 text-purple-500',
    orange: 'bg-orange-500/10 text-orange-500',
  }

  return (
    <div className="card hover:border-primary-500/30 transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg ${colorClasses[color]} flex items-center justify-center group-hover:scale-110 transition-transform`}>
          {icon}
        </div>
        {trend && (
          <span className={`text-sm font-semibold ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {trend.isPositive ? '+' : ''}{trend.value}
          </span>
        )}
      </div>
      <p className="text-sm text-gray-400 mb-1">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  )
}
