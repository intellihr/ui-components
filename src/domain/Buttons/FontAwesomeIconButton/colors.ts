import { Variables } from '../../../common'

enum IconButtonVariants {
  Neutral = 'neutral',
  Red = 'red'
}

enum StatusDotVariants {
  Info = 'indigo',
  Critical = 'red',
  Warning = 'yellow'
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
  [IconButtonVariants.Neutral]: {
    iconColor: Variables.Color.n600,
    hoverIconColor: Variables.Color.n700,
    selectedIconColor: Variables.Color.n800,
    hoverBackground: Variables.Color.n250,
    selectedBackground: Variables.Color.n400
  },
  [IconButtonVariants.Red]: {
    iconColor: Variables.Color.r400,
    hoverIconColor: Variables.Color.r500,
    selectedIconColor: Variables.Color.r600,
    hoverBackground: Variables.Color.r200,
    selectedBackground: Variables.Color.r200
  }
}

const statusDotVariantsOptions: {[K in StatusDotVariants]: Variables.Color} = {
  [StatusDotVariants.Critical]: Variables.Color.r400,
  [StatusDotVariants.Warning]: Variables.Color.o400,
  [StatusDotVariants.Info]: Variables.Color.i400
}

export {
  IconButtonVariants,
  variantOptions,
  statusDotVariantsOptions,
  StatusDotVariants
}
