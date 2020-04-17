import { Variables } from '../../../../common'

enum TableRowVariant {
  Neutral = 'neutral',
  Error = 'error'
}

const variantOptions = {
  [TableRowVariant.Neutral]: {
    hoverBackground: Variables.Color.n150,
    selectBackground: Variables.Color.i100
  },
  [TableRowVariant.Error]: {
    hoverBackground: Variables.Color.r100,
    selectBackground: Variables.Color.r100
  }
}

export {
  variantOptions,
  TableRowVariant
}
