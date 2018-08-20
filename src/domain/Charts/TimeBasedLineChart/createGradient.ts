// This is just a fn that is using in unit testing to generate gradient
import Color from 'color'

export const createGradient = (lineColor: string) => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  const gradient = ctx!.createLinearGradient(0, 0, 0, 400)
  gradient.addColorStop(0, Color(lineColor).alpha(0.3).toString())
  gradient.addColorStop(0.9,  'rgba(0,0,0,0)')
  return gradient
}
