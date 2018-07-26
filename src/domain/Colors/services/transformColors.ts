import { kebabCase } from 'lodash'

export const transformColors = (c: any) => Object.keys(c).map(k => ({
  name: kebabCase(k),
  hex: c[k]
}))
