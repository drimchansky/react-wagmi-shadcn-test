import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'

export const useWalletAuthRedirect = () => {
  const { isConnected } = useAccount()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/' && isConnected) {
      navigate('/account')
      return
    }

    if (!isConnected && location.pathname !== '/') {
      navigate('/')
    }
  }, [isConnected, location.pathname, navigate])
}
