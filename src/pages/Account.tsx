import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'

import { WalletDetails } from '@/entities/wallet'
import { DisconnectWallet } from '@/features/disconnect-wallet'
import { Button } from '@/shared/ui/Button'
import { Container } from '@/shared/ui/Container'

export const Account = () => {
  const { isConnected } = useAccount()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isConnected) {
      navigate('/')
    }
  }, [isConnected])

  return (
    isConnected && (
      <main>
        <Container className="grid min-h-screen grid-rows-[min-content_1fr] items-center">
          <h1 className="text-heading-1">Account page</h1>

          <div>
            <div className="text-medium-normal grid w-full gap-4 text-wrap">
              <WalletDetails />

              <div className="grid w-full gap-3 sm:flex sm:justify-start">
                <Button variant="primary" href="/send">
                  Send money
                </Button>

                <DisconnectWallet />
              </div>
            </div>
          </div>
        </Container>
      </main>
    )
  )
}
