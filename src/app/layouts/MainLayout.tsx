import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <div className="bg-neutral-100">
      <Outlet />
    </div>
  )
}
