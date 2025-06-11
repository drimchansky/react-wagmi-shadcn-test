import { Link } from 'react-router-dom'
import { useAccount } from 'wagmi'

import { WagmiTestContract } from '@/features/read-contract/contracts/WagmiTestContract'
import { Container } from '@/shared/ui/Container'

export const ReadContract = () => {
  const { isConnected } = useAccount()

  return (
    isConnected && (
      <main>
        <Container className="grid min-h-screen grid-rows-[min-content_1fr] content-center items-center">
          <div>
            <h1 className="text-heading-1">Read contract page</h1>
            <Link to="/account" className="underline">
              Back to Account
            </Link>
          </div>
          <WagmiTestContract />
        </Container>
      </main>
    )
  )
}
