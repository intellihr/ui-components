import React from 'react'

import { IIconProps, Icon } from '../Icon'
import { IntelliIconValue } from '../Icon/types'

interface IIntelliIconProps extends IIconProps {
  icon: IntelliIconValue
}

const IntelliIcon: React.FC<IIntelliIconProps> = ({ icon, ...props }) => (
  <Icon
    {...props}
    icon={icon}
  />
)

export {
  IntelliIcon
}
