import { mainnet, sepolia } from 'wagmi/chains'

export const getNetworkName = (chainId: number) => {
  switch (chainId) {
    case mainnet.id:
      return 'Ethereum Mainnet'
    case sepolia.id:
      return 'Sepolia Testnet'
    default:
      return 'Unknown Network'
  }
}
