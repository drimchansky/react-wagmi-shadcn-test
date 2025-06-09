import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  text: string
  color: 'grey' | 'red' | 'green' | 'yellow'
} & HTMLAttributes<HTMLSpanElement>

export const Badge = ({ text, color, ...props }: Props) => {
  return (
    <span
      className={twMerge(
        'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset',
        color === 'grey' && 'bg-gray-50 text-gray-600 ring-gray-500/10',
        color === 'red' && 'bg-red-50 text-red-700 ring-red-600/10',
        color === 'green' && 'bg-green-50 text-green-700 ring-green-600/20',
        color === 'yellow' && 'bg-yellow-50 text-yellow-800 ring-yellow-600/20'
      )}
      {...props}
    >
      {text}
    </span>
  )
}
