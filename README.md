# 🎮 Guildmaster.io

**MultiversX DeFi Intelligence Platform** - AI-powered protocol monitoring, guardrails, and staking yield optimization.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![MultiversX](https://img.shields.io/badge/MultiversX-Blockchain-blue)](https://multiversx.com)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org)
[![Rust](https://img.shields.io/badge/Rust-Smart_Contracts-orange)](https://www.rust-lang.org)

## 🌟 Features

### Smart Contract Suite
- **Staking Optimizer**: Automatically routes EGLD to highest-yield staking providers
- **Protocol Monitor**: Real-time DeFi protocol tracking with AI-powered risk assessment
- **Guardrails System**: Automated alerts and safeguards for portfolio protection

### Web Application
- **Live Dashboard**: Real-time metrics, APY trends, and portfolio overview
- **One-Click Optimization**: Seamlessly stake with best providers
- **Protocol Intelligence**: Monitor 10+ DeFi protocols with risk scoring
- **Wallet Integration**: DeFi Wallet, xPortal, Web Wallet support

## 🚀 Quick Start

### Prerequisites
```bash
# Required
Node.js 18+
Rust 1.70+
multiversx-sc-meta
```

### Frontend Setup
```bash
cd frontend
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Access at `http://localhost:3000`

### Smart Contracts
```bash
cd contracts/staking-optimizer
sc-meta build

cd ../protocol-monitor
sc-meta build
```

## 📁 Project Structure

```
guildmaster-io/
├── contracts/
│   ├── staking-optimizer/     # Auto-staking optimization
│   └── protocol-monitor/      # DeFi protocol tracking
├── frontend/
│   ├── app/                   # Next.js pages
│   ├── components/            # React components
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utilities & API clients
│   └── types/                 # TypeScript definitions
├── backend/
│   ├── api/                   # GCP Cloud Run services
│   └── ai/                    # Risk analysis models
└── scripts/                   # Deployment automation
```

## 🛠️ Technology Stack

### Blockchain
- **Smart Contracts**: Rust + MultiversX SC Framework
- **Network**: MultiversX (DevNet/MainNet)

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Blockchain**: @multiversx/sdk-dapp

### Backend
- **Cloud**: Google Cloud Platform
- **Compute**: Cloud Run
- **Database**: Firestore
- **AI/ML**: Vertex AI

## 🔧 Configuration

### Environment Variables

```env
# Network
NEXT_PUBLIC_ENVIRONMENT=devnet

# Contracts
NEXT_PUBLIC_STAKING_CONTRACT_ADDRESS=erd1...
NEXT_PUBLIC_MONITOR_CONTRACT_ADDRESS=erd1...

# API
NEXT_PUBLIC_API_URL=https://api.guildmaster.io

# WalletConnect
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id
```

## 📊 Smart Contract Details

### Staking Optimizer

**Endpoints:**
- `addStakingProvider(provider, apy)` - Register new staking provider
- `updateProviderAPY(provider, apy)` - Update APY rates
- `getBestProvider()` - Query optimal provider
- `optimizeStake()` - Payable endpoint for automated staking

**Events:**
- `optimization_event` - Emitted on successful stake optimization

### Protocol Monitor

**Endpoints:**
- `addProtocol(protocol_id)` - Register protocol for monitoring
- `updateMetrics(id, tvl, apy, risk)` - Update protocol metrics
- `setAlertThreshold(threshold)` - Configure risk alerts
- `getProtocolRisk(id)` - Query risk score

**Events:**
- `risk_alert_event` - Triggered on high-risk detection

## 🎯 Roadmap

### Phase 1: MVP ✅
- [x] Smart contract architecture
- [x] Core frontend components
- [x] Wallet integration
- [x] Basic staking optimization

### Phase 2: Intelligence (In Progress)
- [ ] AI risk analysis engine
- [ ] Historical data aggregation
- [ ] Advanced analytics dashboard
- [ ] Multi-protocol yield farming

### Phase 3: Scale
- [ ] Mobile app (React Native)
- [ ] Automated rebalancing
- [ ] Social features & guilds
- [ ] Governance token

## 🤝 Contributing

Contributions welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) first.

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing`)
5. Open Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Website**: https://guildmaster.io (coming soon)
- **Documentation**: https://docs.guildmaster.io (coming soon)
- **Twitter**: [@guildmaster_io](https://twitter.com/guildmaster_io)
- **Discord**: [Join Community](https://discord.gg/guildmaster)

## 💬 Support

- Open an [Issue](https://github.com/Gzeu/guildmaster-io/issues)
- Join our [Discord](https://discord.gg/guildmaster)
- Email: support@guildmaster.io

---

**Built with ❤️ for the MultiversX Ecosystem**
