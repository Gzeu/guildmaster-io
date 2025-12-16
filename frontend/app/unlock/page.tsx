'use client'

import { ExtensionLoginButton } from '@multiversx/sdk-dapp/UI/extension/ExtensionLoginButton'
import { WebWalletLoginButton } from '@multiversx/sdk-dapp/UI/webWallet/WebWalletLoginButton'
import { WalletConnectLoginButton } from '@multiversx/sdk-dapp/UI/walletConnect/WalletConnectLoginButton'
import { useRouter } from 'next/navigation'

export default function UnlockPage() {
  const router = useRouter()
  const callbackRoute = '/'

  const onLoginRedirect = () => {
    router.push(callbackRoute)
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card max-w-md w-full">
        <h1 className="text-3xl font-bold mb-2 text-center">Connect Wallet</h1>
        <p className="text-gray-400 text-center mb-8">
          Choose your preferred wallet to connect to Guildmaster.io
        </p>

        <div className="space-y-4">
          <ExtensionLoginButton
            callbackRoute={callbackRoute}
            loginButtonText="DeFi Wallet"
            onLoginRedirect={onLoginRedirect}
            className="w-full btn-primary flex items-center justify-center"
          />

          <WalletConnectLoginButton
            callbackRoute={callbackRoute}
            loginButtonText="xPortal Mobile"
            onLoginRedirect={onLoginRedirect}
            className="w-full btn-primary flex items-center justify-center"
          />

          <WebWalletLoginButton
            callbackRoute={callbackRoute}
            loginButtonText="Web Wallet"
            onLoginRedirect={onLoginRedirect}
            className="w-full btn-secondary flex items-center justify-center"
          />
        </div>

        <div className="mt-8 pt-8 border-t border-dark-border">
          <p className="text-xs text-gray-500 text-center">
            By connecting your wallet, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  )
}
