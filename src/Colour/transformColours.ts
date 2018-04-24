import { kebabCase } from 'lodash'

export const transformColours = (c: any) => Object.keys(c).map(k => ({
  name: kebabCase(k),
  hex: c[k]
}))
