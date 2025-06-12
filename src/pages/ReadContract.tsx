import { Link } from 'react-router-dom'
import { useAccount } from 'wagmi'

import { WagmiTestContract } from '@/features/read-contract/contracts/WagmiTestContract'
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

export const ReadContract = () => {
  const { isConnected } = useAccount()

  return (
    isConnected && (
      <main>
        <Container className="grid min-h-screen grid-rows-[min-content_1fr] content-center items-center">
          <div>
            <TypographyH1>Read contract page</TypographyH1>

            <Breadcrumb className="mt-3">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/account">Account</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator />

                <BreadcrumbItem>
                  <BreadcrumbPage>Read contract</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <WagmiTestContract />
        </Container>
      </main>
    )
  )
}
