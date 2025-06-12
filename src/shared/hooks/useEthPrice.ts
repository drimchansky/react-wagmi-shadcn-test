import { useEffect, useState, useCallback } from 'react'

import { tryCatch } from '@/shared/functions/tryCatch'

interface EthPriceResponse {
  ethereum: {
    usd: number
  }
}

export const useEthPrice = () => {
  const [price, setPrice] = useState<number | null>(null)
  const [error, setError] = useState<Error | null>(null)

  const fetchPrice = useCallback(async () => {
    try {
      setError(null)

      const result = await tryCatch<EthPriceResponse>(
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd').then(res => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`)
          }
          return res.json()
        })
      )

      if (result.error) {
        throw result.error
      }

      setPrice(result.data.ethereum.usd)
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch ETH price'))
    }
  }, [])

  useEffect(() => {
    fetchPrice()
    const interval = setInterval(fetchPrice, 30 * 1000)
    return () => clearInterval(interval)
  }, [])

  return {
    price,
    error
  }
}
