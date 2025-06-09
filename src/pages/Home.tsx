import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'

import { WalletSelector } from '@/features/connect-wallet'

export const Home = () => {
  const { isConnected } = useAccount()
  const navigate = useNavigate()

  useEffect(() => {
    if (isConnected) {
      navigate('/account')
    }
  }, [isConnected])

  return (
    <main className="grid min-h-screen grid-rows-[min-content_1fr] content-center items-center justify-center bg-neutral-100 p-2">
      <h1 className="text-heading-1">Home page</h1>
      <div>
        <WalletSelector />
      </div>
    </main>
  )
}
