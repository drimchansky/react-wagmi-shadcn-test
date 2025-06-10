import { type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  children: ReactNode
  className?: string
} // html div attrs

export const Container = ({ children, className }: Props) => {
  return <div className={twMerge('mx-auto w-full max-w-[95%] px-4 sm:max-w-[600px]', className)}>{children}</div>
}
