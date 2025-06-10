import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'

import { WalletDetails } from '@/entities/wallet'
import { SendTransaction } from '@/features/send-transaction'
import { Container } from '@/shared/ui/Container'

export const Send = () => {
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
        <Container className="grid min-h-screen grid-rows-[min-content_1fr] content-center items-center">
          <div>
            <h1 className="text-heading-1">Send page</h1>

            <Link to="/account" className="underline">
              Back to Account
            </Link>
          </div>

          <div className="w-full justify-self-center">
            <WalletDetails />
            <SendTransaction className="mt-3" />
          </div>
        </Container>
      </main>
    )
  )
}
