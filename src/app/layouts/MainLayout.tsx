import { Outlet } from 'react-router-dom'

import { useWalletAuthRedirect } from '@/entities/wallet'
import { Toaster } from '@/shared/ui/Sonner'

export const MainLayout = () => {
  useWalletAuthRedirect()

  return (
    <div className="bg-neutral-100">
      <Outlet />
      <Toaster />
    </div>
  )
}
