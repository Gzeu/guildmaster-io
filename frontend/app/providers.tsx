'use client'

import { DappProvider } from '@multiversx/sdk-dapp/wrappers/DappProvider'
import { NotificationModal } from '@multiversx/sdk-dapp/UI/NotificationModal'
import { SignTransactionsModals } from '@multiversx/sdk-dapp/UI/SignTransactionsModals'
import { TransactionsToastList } from '@multiversx/sdk-dapp/UI/TransactionsToastList'

const environment = process.env.NEXT_PUBLIC_NETWORK || 'devnet'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <DappProvider
      environment={environment}
      customNetworkConfig={{
        name: 'customConfig',
        apiTimeout: 10000,
        walletConnectV2ProjectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID || '',
      }}
    >
      {children}
      <NotificationModal />
      <SignTransactionsModals />
      <TransactionsToastList />
    </DappProvider>
  )
}
