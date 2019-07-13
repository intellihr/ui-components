import React from 'react'

import { Omit } from '../../../common'
import { IIconProps, Icon } from '../Icon'
import { IntelliIconType } from '../Icon/types'

interface IIntelliIconProps extends Omit<IIconProps, 'type'> {
  type: IntelliIconType
}

const IntelliIcon: React.FC<IIntelliIconProps> = ({ type, ...props }) => (
  <Icon
    {...props}
    prefix='intelli-icon-'
    type={type}
  />
)

export {
  IntelliIcon
}
