import React from 'react'
import { Omit } from 'src/common/types/utilityTypes'

import { IIconProps, Icon } from '../Icon'
import { IntelliIconValue } from '../Icon/types'

interface IIntelliIconProps extends Omit<IIconProps, 'duotoneColors' | 'duotoneOpacity'> {
  icon: IntelliIconValue
}

const IntelliIcon: React.FC<IIntelliIconProps> = ({ icon, ...props }) => (
  <Icon
    {...props}
    icon={`intelli-icon-${icon}`}
  />
)

export {
  IntelliIcon
}
