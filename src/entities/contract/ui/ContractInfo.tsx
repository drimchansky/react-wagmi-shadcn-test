import { HTMLAttributes } from 'react'
import { type BaseError, useReadContracts } from 'wagmi'

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

  if (isPending) return <div>Loading...</div>

  if (error) return <div>Error: {(error as BaseError).shortMessage || error.message}</div>

  return (
    <div {...args}>
      {data?.map((result, index) => (
        <div key={calls[index].functionName}>
          {calls[index].label || calls[index].functionName}: {result?.result?.toString()}
        </div>
      ))}
    </div>
  )
}
