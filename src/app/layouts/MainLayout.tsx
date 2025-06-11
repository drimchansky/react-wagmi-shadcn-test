import { Outlet } from 'react-router-dom'

import { useWalletAuthRedirect } from '@/entities/wallet'

export const MainLayout = () => {
  useWalletAuthRedirect()

  return (
    <div className="bg-neutral-100">
      <Outlet />
    </div>
  )
}
