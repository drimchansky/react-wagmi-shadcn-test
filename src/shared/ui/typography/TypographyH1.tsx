import { HTMLAttributes } from 'react'

export const TypographyH1 = (props: HTMLAttributes<HTMLHeadingElement>) => {
  return <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance" {...props} />
}
