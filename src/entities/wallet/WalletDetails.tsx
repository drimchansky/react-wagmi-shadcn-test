import { useAccount, useBalance, useChainId } from 'wagmi'

import { formatEthBalance } from '@/shared/functions/formatEthBalance'
import { formatUsdValue } from '@/shared/functions/formatUsdValue'
import { getNetworkName } from '@/shared/functions/getNetworkName'
import { useEthPrice } from '@/shared/hooks/useEthPrice'

export const WalletDetails = () => {
  const { address } = useAccount()
  const chainId = useChainId()
  const { data: balance } = useBalance({
    address
  })
  const ethPrice = useEthPrice()

  const usdValue = balance && ethPrice ? Number(balance.formatted) * ethPrice : null

  return (
    <div className="text-medium-normal grid w-full gap-4 text-wrap">
      <div>
        <span className="font-semibold">Network:</span>{' '}
        <span className="font-mono break-all">{getNetworkName(chainId)}</span>
      </div>

      <div>
        <span className="font-semibold">Balance:</span>{' '}
        <span className="font-mono break-all">
          {balance ? (
            <>
              {formatEthBalance(balance.value, balance.decimals)} {balance.symbol}
              {usdValue && <span className="ml-2 text-gray-600">{formatUsdValue(usdValue)}</span>}
            </>
          ) : (
            'Loading...'
          )}
        </span>
      </div>

      <div>
        <span className="font-semibold">Address:</span> <span className="font-mono break-all">{address}</span>
      </div>
    </div>
  )
}
