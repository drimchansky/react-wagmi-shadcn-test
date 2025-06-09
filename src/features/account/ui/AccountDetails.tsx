import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'

import { Button } from '@/shared/ui/Button'

export const AccountDetails = () => {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address })

  return (
    <div className="grid gap-3">
      Your address: <span className="text-medium-bold">{ensName ? `${ensName} (${address})` : address}</span>
      <Button variant="neutral" type="button" onClick={() => disconnect()}>
        Disconnect
      </Button>
    </div>
  )
}
