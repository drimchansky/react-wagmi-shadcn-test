import { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type TProps = {
  variant: 'neutral' | 'primary' | 'danger'
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ variant, ...props }: TProps) => {
  return (
    <button
      className={twMerge(
        'flex justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2',
        variant === 'primary' && 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600',
        variant === 'neutral' && 'bg-white text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50',
        variant === 'danger' && 'bg-red-600 text-white hover:bg-red-500'
      )}
      type="button"
      {...props}
    ></button>
  )
}
