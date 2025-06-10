import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'

import { ConnectWallet } from '@/features/connect-wallet'
import { Container } from '@/shared/ui/Container'

export const Home = () => {
  const { isConnected } = useAccount()
  const navigate = useNavigate()

  useEffect(() => {
    if (isConnected) {
      navigate('/account')
    }
  }, [isConnected])

  return (
    <main>
      <Container className="grid min-h-screen grid-rows-[min-content_1fr] items-center">
        <h1 className="text-heading-1">Home page</h1>

        <div className="justify-self-center">
          <ConnectWallet />
        </div>
      </Container>
    </main>
  )
}
