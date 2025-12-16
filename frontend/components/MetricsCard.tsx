interface MetricsCardProps {
  title: string
  value: string
  change: string
  positive: boolean
  subtitle?: string
}

export function MetricsCard({ title, value, change, positive, subtitle }: MetricsCardProps) {
  return (
    <div className="card">
      <h3 className="text-sm text-gray-400 mb-2">{title}</h3>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-2xl font-bold">{value}</p>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <span className={`text-sm font-semibold ${
          positive ? 'text-green-500' : 'text-red-500'
        }`}>
          {change}
        </span>
      </div>
    </div>
  )
}
