import colours from '../sass/resources/js/colours'

export const getColor = (name: string | undefined): string | null => {
  if (!name) {
    return null
  }

  if (!colours[name]) {
    throw new Error(`Unknown Colour Name '${name}'`)
  }

  return colours[name]
}
