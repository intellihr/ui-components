import React from 'react'

import { IIconProps, Icon } from '../Icon'
import { FontAwesomeIconValue } from '../Icon/types'

interface IFontAwesomeIconProps extends IIconProps {
  /** Name of the icon */
  icon: FontAwesomeIconValue
  /** The alternative versions */
  type: 'solid' | 'regular' | 'light' | 'duotone'
}

const FontAwesomeIcon: React.FC<IFontAwesomeIconProps> = ({ icon, type, ...props }) => {
  let cssClassName
  switch (type) {
    case 'light':
      cssClassName = 'fal'
      break
    case 'regular':
      cssClassName = 'far'
      break
    case 'solid':
      cssClassName = 'fas'
      break
    case 'duotone':
      cssClassName = 'fad'
      break
  }
  cssClassName = `${cssClassName} fa-${icon}`

  return (
    <Icon
      {...props}
      icon={cssClassName}
    />
  )
}

export {
  FontAwesomeIcon
}
