import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { metaMask, walletConnect } from 'wagmi/connectors'

const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    return window.location.origin
  }
  return 'http://localhost:5173'
}

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    metaMask({
      dappMetadata: {
        name: 'React Wagmi Test',
        url: getBaseUrl(),
        iconUrl: 'https://wagmi.sh/icon.png'
      }
    }),
    walletConnect({
      projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID,
      metadata: {
        name: 'React Wagmi Test',
        description: 'React Wagmi Test App',
        url: getBaseUrl(),
        icons: ['https://wagmi.sh/icon.png']
      }
    })
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http()
  }
})
