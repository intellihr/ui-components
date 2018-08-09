import colors from './colors'

export const getColor = (name: string): string => {
  if (!colors[name]) {
    throw new Error(`Unknown color Name '${name}'`)
  }

  return colors[name]
}
