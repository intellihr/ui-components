import React from 'react'

import { Omit } from '../../../common'
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
