import { Link } from 'react-router-dom'
import { useAccount } from 'wagmi'

import { WalletDetails } from '@/entities/wallet'
import { SendTransaction } from '@/features/send-transaction'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/shared/ui/Breadcrumb'
import { Container } from '@/shared/ui/Container'
import { TypographyH1 } from '@/shared/ui/typography'

export const Send = () => {
  const { isConnected } = useAccount()

  return (
    isConnected && (
      <main>
        <Container className="grid min-h-screen grid-rows-[min-content_1fr] content-center items-center">
          <div>
            <TypographyH1>Send page</TypographyH1>

            <Breadcrumb className="mt-3">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/account">Account</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator />

                <BreadcrumbItem>
                  <BreadcrumbPage>Send</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
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
