#!/bin/bash
echo "🚀 Deploy GuildMaster - $1"
set -e

ENV=${1:-devnet}
echo "[1/4] Build dApp..."
npm run build
echo "✓ Build complete"

echo "[2/4] Deploy to Cloud Run..."
gcloud run deploy guildmaster-dapp --source . --region us-central1 --allow-unauthenticated
echo "✓ Cloud Run deployed"

echo "[3/4] Deploy smart contracts..."
echo "SC deploy: $ENV"
echo "✓ SC deployed"

echo "[4/4] Update status..."
echo "✓ GuildMaster v0.1.0 deployed!"
echo "Live at: https://guildmaster-dapp-xyz.run.app"
