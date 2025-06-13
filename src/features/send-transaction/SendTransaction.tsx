import { useEffect } from 'react'
import * as React from 'react'
import { toast } from 'sonner'
import { parseEther } from 'viem'
import { type BaseError, useSendTransaction, useWaitForTransactionReceipt } from 'wagmi'

import { log } from '@/shared/functions/log'
import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'

type Props = React.HTMLAttributes<HTMLFormElement>

export const SendTransaction = ({ ...props }: Props) => {
  const { data: hash, error, isPending, sendTransaction } = useSendTransaction()
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash
  })
  const isDisabled = isPending || isConfirming

  useEffect(() => {
    if (error) {
      log(error)
      toast((error as BaseError).shortMessage || error.message)
    }
  }, [error])

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isDisabled) return

    const formData = new FormData(event.target as HTMLFormElement)
    const to = formData.get('address') as `0x${string}`
    const value = formData.get('value') as string

    sendTransaction({ to, value: parseEther(value) })
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto flex w-full flex-col gap-4 rounded-lg bg-white p-6 shadow-md"
      {...props}
    >
      <div className="flex flex-col gap-2">
        <Input disabled={isDisabled} type="text" name="address" autoComplete="off" required placeholder="0xA0Cf…251e" />
        <Input disabled={isDisabled} name="value" autoComplete="off" placeholder="0.05" />
      </div>

      <Button disabled={isDisabled} type="submit" className="mt-3 w-full!">
        {isPending ? 'Confirming...' : 'Send'}
      </Button>

      <div className="mt-3 grid gap-2 text-sm">
        {hash && (
          <div className="rounded-md bg-gray-50 p-2 break-all">
            Transaction Hash: <span className="font-mono">{hash}</span>
          </div>
        )}

        {isConfirming && <div className="rounded-md bg-blue-50 p-2 text-blue-700">Waiting for confirmation...</div>}

        {isConfirmed && <div className="rounded-md bg-green-50 p-2 text-green-700">Transaction confirmed.</div>}
      </div>
    </form>
  )
}
