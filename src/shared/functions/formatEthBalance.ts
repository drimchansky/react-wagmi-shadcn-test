export const formatEthBalance = (value: bigint | undefined, decimals: number = 18) => {
  if (!value) return 'Loading...'

  const formatted = Number(value) / Math.pow(10, decimals)

  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 4,
    maximumFractionDigits: 4
  }).format(formatted)
}
