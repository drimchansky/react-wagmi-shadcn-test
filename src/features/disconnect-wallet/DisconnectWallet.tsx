import { useDisconnect } from 'wagmi'

import { Button } from '@/shared/ui/Button'

export const DisconnectWallet = () => {
  const { disconnect } = useDisconnect()

  return (
    <Button variant="danger" onClick={() => disconnect()}>
      Disconnect
    </Button>
  )
}
