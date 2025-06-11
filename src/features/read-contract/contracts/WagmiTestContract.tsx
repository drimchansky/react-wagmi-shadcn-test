import { useAccount } from 'wagmi'

import { ContractInfo } from '@/entities/contract'
import { wagmiContractConfig } from '@/entities/contract/configs/wagmi'

export const WagmiTestContract = () => {
  const { address } = useAccount()

  if (!address) return null

  return (
    <div>
      <h2 className="text-heading-2">Wagmi Test Contract Info</h2>

      <ContractInfo
        contractConfig={wagmiContractConfig}
        calls={[
          {
            functionName: 'balanceOf',
            args: [address],
            label: 'Your Balance'
          },
          {
            functionName: 'totalSupply',
            label: 'Total Supply'
          }
        ]}
        className="mt-3"
      />
    </div>
  )
}
