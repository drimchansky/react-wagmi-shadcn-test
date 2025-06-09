import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'

import { AccountDetails } from '@/features/account'

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
      <main className="grid min-h-screen grid-rows-[min-content_1fr] content-center items-center justify-center bg-neutral-100 p-2">
        <h1 className="text-heading-1">Account page</h1>
        <div>
          <AccountDetails />
        </div>
      </main>
    )
  )
}
