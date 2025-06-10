import { useEffect, useState } from 'react'

import { tryCatch } from '@/shared/functions/tryCatch'

export const useEthPrice = () => {
  const [price, setPrice] = useState<number | null>(null)

  useEffect(() => {
    const fetchPrice = async () => {
      const result = await tryCatch(
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd').then(res => res.json())
      )

      if (result.error) {
        return price
      }

      setPrice(result.data.ethereum.usd)
    }

    fetchPrice()
    const interval = setInterval(fetchPrice, 30 * 1000)
    return () => clearInterval(interval)
  }, [])

  return price
}
