import React from 'react'

import { IIconProps, Icon } from '../Icon'
import { FontAwesomeIconValue } from '../Icon/types'

interface IFontAwesomeIconProps extends IIconProps {
  icon: FontAwesomeIconValue
}

const FontAwesomeIcon: React.FC<IFontAwesomeIconProps> = ({ icon, ...props }) => (
  <Icon
    {...props}
    icon={icon}
  />
)

export {
  FontAwesomeIcon
}
