import { Variables } from '../../../../common'

enum TableRowVariant {
  Neutral = 'neutral',
  Red = 'red'
}

interface IVariantOption {
  hoverBackground: Variables.Color
  selectBackground: Variables.Color
}

type VariantOptions = {
  [K in TableRowVariant]: IVariantOption
}

const variantOptions: VariantOptions = {
  [TableRowVariant.Neutral]: {
    hoverBackground: Variables.Color.n150,
    selectBackground: Variables.Color.i100
  },
  [TableRowVariant.Red]: {
    hoverBackground: Variables.Color.r100,
    selectBackground: Variables.Color.r100
  }
}

export {
  variantOptions,
  TableRowVariant
}
