import { HTMLAttributes, useEffect } from 'react'
import { toast } from 'sonner'
import { type BaseError, useReadContracts } from 'wagmi'

import { log } from '@/shared/functions/log'

type ContractCall = {
  functionName: string
  args?: readonly unknown[]
  label?: string
}

type ContractInfoProps = {
  contractConfig: {
    address: `0x${string}`
    abi: readonly any[]
  }
  calls: ContractCall[]
} & HTMLAttributes<HTMLDivElement>

export const ContractInfo = ({ contractConfig, calls, ...args }: ContractInfoProps) => {
  const { data, error, isPending } = useReadContracts({
    contracts: calls.map(call => ({
      ...contractConfig,
      functionName: call.functionName,
      args: call.args
    }))
  })

  useEffect(() => {
    if (error) {
      log(error)
      toast((error as BaseError).shortMessage || error.message)
    }

    if (!isPending && data?.some(e => e.status === 'failure')) {
      log(data)
      data.forEach(e => {
        e.status === 'failure' && toast('The contract function returned no data')
      })
    }
  }, [error, isPending])

  if (isPending) return <div>Loading...</div>

  return (
    data && (
      <div {...args}>
        {data?.map((result, index) => (
          <div key={calls[index].functionName}>
            {calls[index].label || calls[index].functionName}: {result?.result?.toString()}
          </div>
        ))}
      </div>
    )
  )
}
