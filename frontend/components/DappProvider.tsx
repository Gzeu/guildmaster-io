'use client'

import { DappProvider as MultiversXDappProvider } from '@multiversx/sdk-dapp/wrappers/DappProvider'
import { NotificationModal, SignTransactionsModals, TransactionsToastList } from '@multiversx/sdk-dapp/UI'

const environment = 'devnet' // Change to 'mainnet' for production

export function DappProvider({ children }: { children: React.ReactNode }) {
  return (
    <MultiversXDappProvider
      environment={environment}
      customNetworkConfig={{
        name: 'customConfig',
        apiTimeout: 6000,
        walletConnectV2ProjectId: '9b1a9564f91cb6...' // Replace with your WalletConnect project ID
      }}
    >
      {children}
      <NotificationModal />
      <SignTransactionsModals />
      <TransactionsToastList />
    </MultiversXDappProvider>
  )
}
