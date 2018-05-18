export const createGradient = (lineColor: string) => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  const gradient = ctx!.createLinearGradient(0, 0, 0, 400)
  gradient.addColorStop(0, lineColor.replace(')', ', 0.3)').replace('rgb', 'rgba'))
  gradient.addColorStop(0.9, lineColor.replace(')', ', 0)').replace('rgb', 'rgba'))
  return gradient
}
