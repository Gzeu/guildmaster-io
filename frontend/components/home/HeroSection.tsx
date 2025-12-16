'use client'

import { Button } from '@/design-system'
import { VStack, HStack } from '@/design-system'
import { Container } from '@/design-system'

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Visual */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'url(/images/brand/hero-visual.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/60 via-dark-bg/80 to-dark-bg" />

      {/* Content */}
      <Container size="xl" className="relative z-10">
        <VStack spacing="xl" align="center" className="text-center max-w-4xl mx-auto py-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            AI-Powered DeFi Intelligence
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Master Your{' '}
            <span className="bg-gradient-to-r from-primary-500 to-accent-cyan bg-clip-text text-transparent">
              MultiversX
            </span>
            {' '}Portfolio
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl">
            Real-time protocol monitoring, intelligent guardrails, and optimized staking yields.
            All in one powerful platform.
          </p>

          {/* CTA Buttons */}
          <HStack spacing="md" className="pt-4">
            <Button variant="primary" size="xl">
              Launch Dashboard
            </Button>
            <Button variant="outline" size="xl">
              Explore Protocols
            </Button>
          </HStack>

          {/* Stats */}
          <HStack spacing="xl" className="pt-8">
            <VStack spacing="xs" align="center">
              <div className="text-3xl font-bold text-white">$12M+</div>
              <div className="text-sm text-gray-400">TVL Monitored</div>
            </VStack>
            <div className="h-12 w-px bg-dark-border" />
            <VStack spacing="xs" align="center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-gray-400">AI Monitoring</div>
            </VStack>
            <div className="h-12 w-px bg-dark-border" />
            <VStack spacing="xs" align="center">
              <div className="text-3xl font-bold text-white">15+</div>
              <div className="text-sm text-gray-400">Protocols Tracked</div>
            </VStack>
          </HStack>
        </VStack>
      </Container>
    </section>
  )
}
