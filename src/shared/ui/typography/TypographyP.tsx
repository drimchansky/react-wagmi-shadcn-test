import { HTMLAttributes } from 'react'

export const TypographyP = (props: HTMLAttributes<HTMLParagraphElement>) => {
  return <p className="leading-7 [&:not(:first-child)]:mt-6" {...props} />
}
