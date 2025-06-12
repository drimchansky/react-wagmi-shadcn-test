import { useEffect } from 'react'
import { toast } from 'sonner'
import { useConnect } from 'wagmi'

import { log } from '@/shared/functions/log'
import { Button } from '@/shared/ui/Button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/shared/ui/Card'
import { TypographyH2, TypographyP } from '@/shared/ui/typography'

import { isConnectorAvailable } from '../lib/isConnectorAvailable'

export const ConnectWallet = () => {
  const { connectors, connect, status, error: wagmiError } = useConnect()

  const handleConnect = async (connector: ReturnType<typeof useConnect>['connectors'][0]) => {
    try {
      connect({ connector })
    } catch (err) {
      log(err)
      toast('Someting went wrong, please try again')
    }
  }

  useEffect(() => {
    if (wagmiError) {
      log(wagmiError)
      toast('Someting went wrong, please try again')
    }
  }, [wagmiError])

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <TypographyH2>Connect Your Wallet</TypographyH2>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <TypographyP>You can choose between WalletConnect and MetaMask (browser extention required)</TypographyP>
      </CardContent>

      <CardFooter className="justify-center">
        <div className="flex justify-center gap-3">
          {connectors.map(
            connector =>
              isConnectorAvailable(connector) && (
                <Button key={connector.uid} onClick={() => handleConnect(connector)} disabled={status === 'pending'}>
                  {connector.name}
                  {status === 'pending' ? ' Connecting...' : ''}
                </Button>
              )
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
