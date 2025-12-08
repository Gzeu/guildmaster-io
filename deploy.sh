#!/bin/bash
set -e

# ============================================
# GuildMaster-IO: Complete Deploy Orchestration
# ============================================

echo "" && echo "🚀 STARTING FULL DEPLOY SEQUENCE..." && echo ""

# STEP 1: Make all scripts executable
echo "[1/5] Making scripts executable..."
chmod +x scripts/*.sh
chmod +x deploy.sh

# STEP 2: Git operations
echo "[2/5] Committing executable permissions..."
git add . && git commit -m "Make deploy scripts executable" || true
echo "[2/5] Pushing to GitHub..."
git push origin main

# STEP 3: Initialize GCP
echo "[3/5] Setting up Google Cloud Platform..."
PROJECT_ID="${1:-guildmaster-io}"
REGION="${2:-us-central1}"
bash scripts/setup-gcp.sh "$PROJECT_ID" "$REGION"

# STEP 4: Install toolchain & create contract
echo "[4/5] Installing MultiversX toolchain & creating contract..."
bash scripts/install-toolchain.sh
bash scripts/create-contract.sh defi-pool

# STEP 5: Deploy to Cloud Run
echo "[5/5] Deploying to Google Cloud Run..."
bash scripts/deploy.sh

# Final summary
echo ""
echo "✅ DEPLOYMENT COMPLETE!"
echo ""
echo "Project: guildmaster-io"
echo "Repository: https://github.com/Gzeu/guildmaster-io"
echo "GCP Project: $PROJECT_ID"
echo "Region: $REGION"
echo ""
echo "Next steps:"
echo "1. Monitor with: bash scripts/monitor.sh"
echo "2. View logs: gcloud run logs read guildmaster-dapp"
echo "3. Visit: https://console.cloud.google.com"
echo ""
echo "=================================================="
echo "    MultiversX DeFi Platform - Go Live! 🎯"
echo "=================================================="
