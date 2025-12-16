interface ErrorMessageProps {
  message: string
  onRetry?: () => void
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="card border-red-500/20 bg-red-500/5">
      <div className="flex items-start space-x-3">
        <svg className="w-6 h-6 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div className="flex-1">
          <h3 className="text-red-500 font-semibold mb-1">Error</h3>
          <p className="text-sm text-gray-300">{message}</p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="mt-3 text-sm btn-secondary"
            >
              Try Again
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
