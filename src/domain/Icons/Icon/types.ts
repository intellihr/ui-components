import { BrandIcon, RegularIcon, SolidIcon } from './FontAwesomeIconTypes'
import { IntelliIcon } from './IntelliIconTypes'

const Icons = {
  FontAwesome: {
    Solid: SolidIcon,
    Regular: RegularIcon,
    Brand: BrandIcon
  },
  Intelli: IntelliIcon
}
Object.freeze(Icons)

type FontAwesomeIconValue = SolidIcon | RegularIcon | BrandIcon
type IntelliIconValue = IntelliIcon

type IconValue = FontAwesomeIconValue | IntelliIcon

export {
  FontAwesomeIconValue,
  IconValue,
  Icons,
  IntelliIconValue
}
