import React from 'react'

import { Omit } from '../../../common'
import { IIconProps, Icon } from '../Icon'
import { FontAwesomeIconType  } from '../Icon/types'

interface IFontAwesomeIconProps extends Omit<IIconProps, 'type'> {
  type: FontAwesomeIconType
}

const FontAwesomeIcon: React.FC<IFontAwesomeIconProps> = ({ type, ...props }) => (
  <Icon
    {...props}
    prefix='fa-'
    type={type}
  />
)

export {
  FontAwesomeIcon
}
