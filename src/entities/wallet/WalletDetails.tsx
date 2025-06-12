import { useEffect } from 'react'
import { toast } from 'sonner'
import { useAccount, useBalance, useChainId } from 'wagmi'

import { formatEthBalance } from '@/shared/functions/formatEthBalance'
import { formatUsdValue } from '@/shared/functions/formatUsdValue'
import { getNetworkName } from '@/shared/functions/getNetworkName'
import { log } from '@/shared/functions/log'
import { useEthPrice } from '@/shared/hooks/useEthPrice'

export const WalletDetails = () => {
  const { address } = useAccount()
  const chainId = useChainId()
  const { data: balance } = useBalance({
    address
  })
  const { price, error } = useEthPrice()

  const ethBalance = formatEthBalance(balance?.value, balance?.decimals)
  const usdValue = ethBalance && price ? Number(ethBalance) * price : null

  useEffect(() => {
    if (error) {
      log(error)
      toast('Unable to get balance in USD, please try later')
    }
  }, [error])

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
              {ethBalance} {balance.symbol}
              {usdValue && <span className="ml-2 text-gray-600">{formatUsdValue(usdValue)}</span>}
            </>
          ) : (
            'Loading price...'
          )}
        </span>
      </div>

      <div>
        <span className="font-semibold">Address:</span> <span className="font-mono break-all">{address}</span>
      </div>
    </div>
  )
}
