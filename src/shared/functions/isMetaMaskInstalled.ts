export const isMetaMaskInstalled = (): boolean => {
  return !!window.ethereum?.isMetaMask
}
