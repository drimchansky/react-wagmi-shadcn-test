import { useState } from 'react'
import { useConnect } from 'wagmi'

import { Badge } from '@/shared/ui/Badge'
import { Button } from '@/shared/ui/Button'

import { isMetaMaskInstalled } from '../lib/isMetaMaskInstalled'

export const WalletSelector = () => {
  const { connectors, connect, status, error: wagmiError } = useConnect()
  const [warning, setWarning] = useState<string | null>(null)

  const handleConnect = async (connector: ReturnType<typeof useConnect>['connectors'][0]) => {
    setWarning(null)

    if (connector.name === 'MetaMask' && !isMetaMaskInstalled()) {
      setWarning('Please install MetaMask extension')
      return
    }

    try {
      connect({ connector })
    } catch (err) {
      console.error('Connection failed:', err)
    }
  }

  return (
    <div className="grid gap-3 text-center">
      <h2 className="text-heading-2">Connect Your Wallet</h2>

      {warning && <Badge text={warning} color="yellow" />}

      {status === 'pending' && <Badge text="Connecting..." color="grey" />}

      {wagmiError && (
        <Badge text={`Connection Error. Full message:\n ${JSON.stringify(wagmiError, null, 2)}`} color="red" />
      )}

      <div className="flex flex-col justify-center">
        {connectors.map(connector => (
          <Button
            variant="primary"
            type="button"
            key={connector.uid}
            onClick={() => handleConnect(connector)}
            disabled={status === 'pending'}
          >
            {connector.name}
            {status === 'pending' ? ' Connecting...' : ''}
          </Button>
        ))}
      </div>
    </div>
  )
}
