'use client'

import { useGetIsLoggedIn } from '@multiversx/sdk-dapp/hooks/account/useGetIsLoggedIn'
import { useGetAccountInfo } from '@multiversx/sdk-dapp/hooks/account/useGetAccountInfo'
import { logout } from '@multiversx/sdk-dapp/utils/logout'
import Link from 'next/link'

export function Header() {
  const isLoggedIn = useGetIsLoggedIn()
  const { address } = useGetAccountInfo()

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
            <Link href="/" className="hover:text-primary-500 transition-colors">
              Dashboard
            </Link>
            <Link href="/staking" className="hover:text-primary-500 transition-colors">
              Staking
            </Link>
            <Link href="/protocols" className="hover:text-primary-500 transition-colors">
              Protocols
            </Link>
            <Link href="/analytics" className="hover:text-primary-500 transition-colors">
              Analytics
            </Link>
          </nav>

          <div>
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-400">{shortenAddress(address)}</span>
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
