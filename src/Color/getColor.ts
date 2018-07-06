import colours from '../sass/resources/js/colours'

export const getColor = (name: string): string => {
  if (!colours[name]) {
    throw new Error(`Unknown Colour Name '${name}'`)
  }

  return colours[name]
}
