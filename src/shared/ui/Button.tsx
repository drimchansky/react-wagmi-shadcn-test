import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

type BaseProps = {
  variant: 'neutral' | 'primary' | 'danger'
}

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never
  }

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type TProps = ButtonProps | LinkProps

export const Button = ({ variant, href, className, ...props }: TProps) => {
  const baseStyles = twMerge(
    'flex justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 w-full sm:w-auto',
    variant === 'primary' && 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600',
    variant === 'neutral' && 'bg-white text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50',
    variant === 'danger' && 'bg-red-600 text-white hover:bg-red-500'
  )

  if (href) {
    return (
      <Link
        className={twMerge(baseStyles, className)}
        to={href}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    )
  }

  return (
    <button
      className={twMerge('cursor-pointer disabled:cursor-default', baseStyles, className)}
      type="button"
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  )
}
