import { useDisconnect } from 'wagmi'

import { Button } from '@/shared/ui/Button'

export const DisconnectWallet = () => {
  const { disconnect } = useDisconnect()

  return (
    <Button variant="destructive" onClick={() => disconnect()}>
      Disconnect
    </Button>
  )
}
