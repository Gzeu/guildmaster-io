'use client'

import { useGetIsLoggedIn } from '@multiversx/sdk-dapp/hooks/account/useGetIsLoggedIn'
import { useGetAccountInfo } from '@multiversx/sdk-dapp/hooks/account/useGetAccountInfo'
import { logout } from '@multiversx/sdk-dapp/utils/logout'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/', label: 'Dashboard' },
  { href: '/staking', label: 'Staking' },
  { href: '/protocols', label: 'Protocols' },
  { href: '/analytics', label: 'Analytics' },
  { href: '/portfolio', label: 'Portfolio', authOnly: true },
  { href: '/alerts', label: 'Alerts' },
]

export function Header() {
  const isLoggedIn = useGetIsLoggedIn()
  const { address } = useGetAccountInfo()
  const pathname = usePathname()

  const handleLogout = () => {
    logout(window.location.origin)
  }

  const shortenAddress = (addr: string) => {
    if (!addr) return ''
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  return (
    <header className="border-b border-dark-border bg-dark-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">G</span>
            </div>
            <span className="text-xl font-bold">Guildmaster.io</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.filter((link) => !link.authOnly || isLoggedIn).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  pathname === link.href
                    ? 'text-primary-400 font-semibold'
                    : 'hover:text-primary-500 text-gray-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div>
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-400 font-mono">
                  {shortenAddress(address)}
                </span>
                <button onClick={handleLogout} className="btn-secondary text-sm">
                  Disconnect
                </button>
              </div>
            ) : (
              <Link href="/unlock" className="btn-primary">
                Connect Wallet
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
