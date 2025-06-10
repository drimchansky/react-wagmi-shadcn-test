import { Connector, CreateConnectorFn } from 'wagmi'

export const isConnectorAvailable = (connector: Connector<CreateConnectorFn>) => {
  if (connector.name === 'MetaMask' && !window.ethereum?.isMetaMask) {
    return false
  }

  return true
}
