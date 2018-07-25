import colors from '@Common/sass/resources/js/colours'

export const getColor = (name: string): string => {
  if (!colors[name]) {
    throw new Error(`Unknown Colour Name '${name}'`)
  }

  return colors[name]
}
