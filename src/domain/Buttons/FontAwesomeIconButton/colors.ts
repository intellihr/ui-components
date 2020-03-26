import { Variables } from '../../../common'

enum IconButtonVariants {
  NEUTRAL = 'neutral',
  RED = 'red'
}

interface IVariantOption {
  iconColor: Variables.Color
  hoverIconColor: Variables.Color,
  selectedIconColor: Variables.Color,
  hoverBackground: Variables.Color
  selectedBackground: Variables.Color
}

type VariantOptions = {
  [K in IconButtonVariants]: IVariantOption
}

const variantOptions: VariantOptions = {
  [IconButtonVariants.NEUTRAL]: {
    iconColor: Variables.Color.n600,
    hoverIconColor: Variables.Color.n700,
    selectedIconColor: Variables.Color.n800,
    hoverBackground: Variables.Color.n250,
    selectedBackground: Variables.Color.n400
  },
  [IconButtonVariants.RED]: {
    iconColor: Variables.Color.r400,
    hoverIconColor: Variables.Color.r500,
    selectedIconColor: Variables.Color.r600,
    hoverBackground: Variables.Color.r100,
    selectedBackground: Variables.Color.r200
  }
}

export {
  IconButtonVariants,
  variantOptions
}
