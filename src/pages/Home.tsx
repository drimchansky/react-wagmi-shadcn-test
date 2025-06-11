import { ConnectWallet } from '@/features/connect-wallet'
import { Container } from '@/shared/ui/Container'

export const Home = () => {
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
