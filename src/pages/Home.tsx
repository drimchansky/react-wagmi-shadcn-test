import { ConnectWallet } from '@/features/connect-wallet'
import { Container } from '@/shared/ui/Container'
import { TypographyH1 } from '@/shared/ui/typography'

export const Home = () => {
  return (
    <main>
      <Container className="grid min-h-screen grid-rows-[min-content_1fr] items-center">
        <TypographyH1>Home page</TypographyH1>
        <ConnectWallet />
      </Container>
    </main>
  )
}
