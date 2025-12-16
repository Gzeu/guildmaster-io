'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/design-system'
import { HStack } from '@/design-system'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-dark-border bg-dark-bg/80 backdrop-blur-lg">
      <nav className="container mx-auto px-4 h-16">
        <HStack justify="between" align="center" className="h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image
              src="/images/brand/logo-main.png"
              alt="Guildmaster.io"
              width={180}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Navigation */}
          <HStack spacing="lg" align="center" className="hidden md:flex">
            <Link
              href="/protocols"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Protocols
            </Link>
            <Link
              href="/staking"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Staking
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Dashboard
            </Link>
          </HStack>

          {/* CTA */}
          <HStack spacing="sm">
            <Button variant="outline" size="sm" className="hidden sm:inline-flex">
              Launch App
            </Button>
            <Button variant="primary" size="sm">
              Connect Wallet
            </Button>
          </HStack>
        </HStack>
      </nav>
    </header>
  )
}
