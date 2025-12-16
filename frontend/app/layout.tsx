import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Guildmaster.io - MultiversX DeFi Intelligence Platform',
  description: 'AI-powered protocol monitoring, guardrails, and staking yield optimization for MultiversX blockchain',
  keywords: ['MultiversX', 'DeFi', 'Staking', 'EGLD', 'Blockchain', 'AI', 'Protocol Monitoring'],
  authors: [{ name: 'Guildmaster.io Team' }],
  openGraph: {
    title: 'Guildmaster.io - MultiversX DeFi Intelligence',
    description: 'AI-powered DeFi intelligence platform for MultiversX',
    url: 'https://guildmaster.io',
    siteName: 'Guildmaster.io',
    images: [
      {
        url: '/images/brand/dashboard-viz.png',
        width: 1200,
        height: 630,
        alt: 'Guildmaster.io Dashboard',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guildmaster.io - MultiversX DeFi Intelligence',
    description: 'AI-powered protocol monitoring and staking optimization',
    images: ['/images/brand/dashboard-viz.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
