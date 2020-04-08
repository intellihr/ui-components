import { Variables } from '../../../../common'

enum RowVariant {
  Neutral = 'neutral',
  Red = 'red'
}

interface IVariantOption {
  hoverBackground: Variables.Color
  selectBackground: Variables.Color
}

type VariantOptions = {
  [K in RowVariant]: IVariantOption
}

const variantOptions: VariantOptions = {
  [RowVariant.Neutral]: {
    hoverBackground: Variables.Color.n150,
    selectBackground: Variables.Color.i100
  },
  [RowVariant.Red]: {
    hoverBackground: Variables.Color.r100,
    selectBackground: Variables.Color.r100
  }
}

export {
  variantOptions,
  RowVariant
}
