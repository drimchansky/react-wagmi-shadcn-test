import { Link } from 'react-router-dom'
import { useAccount } from 'wagmi'

import { WalletDetails } from '@/entities/wallet'
import { DisconnectWallet } from '@/features/disconnect-wallet'
import { Button } from '@/shared/ui/Button'
import { Container } from '@/shared/ui/Container'
import { TypographyH1 } from '@/shared/ui/typography'

export const Account = () => {
  const { isConnected } = useAccount()

  return (
    isConnected && (
      <main>
        <Container className="grid min-h-screen grid-rows-[min-content_1fr] items-center">
          <TypographyH1>Account page</TypographyH1>

          <div>
            <div className="text-medium-normal grid w-full gap-4 text-wrap">
              <WalletDetails />

              <div className="grid w-full gap-3 sm:flex sm:justify-start">
                <Button variant="default" asChild>
                  <Link to="/send">Send money</Link>
                </Button>

                <Button variant="default" asChild>
                  <Link to="/read-contract">Read contract</Link>
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
