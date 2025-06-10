import { useConnect } from 'wagmi'

import { Badge } from '@/shared/ui/Badge'
import { Button } from '@/shared/ui/Button'

import { isConnectorAvailable } from './lib/isConnectorAvailable'

export const ConnectWallet = () => {
  const { connectors, connect, status, error: wagmiError } = useConnect()

  const handleConnect = async (connector: ReturnType<typeof useConnect>['connectors'][0]) => {
    try {
      connect({ connector })
    } catch (err) {
      console.error('Connection failed:', err)
    }
  }

  return (
    <div className="grid gap-3 text-center">
      <h2 className="text-heading-2">Connect Your Wallet</h2>

      {status === 'pending' && <Badge text="Connecting..." color="grey" />}

      {wagmiError && (
        <Badge text={`Connection Error. Full message:\n ${JSON.stringify(wagmiError, null, 2)}`} color="red" />
      )}

      <div className="flex flex-col justify-center gap-3">
        {connectors.map(
          connector =>
            isConnectorAvailable(connector) && (
              <Button
                variant="primary"
                key={connector.uid}
                onClick={() => handleConnect(connector)}
                disabled={status === 'pending'}
              >
                {connector.name}
                {status === 'pending' ? ' Connecting...' : ''}
              </Button>
            )
        )}
      </div>
    </div>
  )
}
