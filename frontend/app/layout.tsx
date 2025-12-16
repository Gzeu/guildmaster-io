import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { DappProvider } from '@/components/DappProvider'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Guildmaster.io - MultiversX DeFi Intelligence',
  description: 'AI-powered protocol monitoring and staking optimization for MultiversX',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DappProvider>
          <Header />
          <main className="min-h-screen bg-dark-bg">
            {children}
          </main>
        </DappProvider>
      </body>
    </html>
  )
}
