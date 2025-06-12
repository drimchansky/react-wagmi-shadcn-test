import { useAccount } from 'wagmi'

import { ContractInfo } from '@/entities/contract'
import { wagmiContractConfig } from '@/entities/contract/configs/wagmi'
import { TypographyH2 } from '@/shared/ui/typography'

export const WagmiTestContract = () => {
  const { address } = useAccount()

  if (!address) return null

  return (
    <div>
      <TypographyH2>Wagmi Test Contract Info</TypographyH2>

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
