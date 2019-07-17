import React from 'react'

import { IIconProps, Icon } from '../Icon'
import { FontAwesomeIconValue } from '../Icon/types'

interface IFontAwesomeIconProps extends IIconProps {
  /** Name of the icon */
  icon: FontAwesomeIconValue
  /** One of three alternative versions */
  type: 'solid' | 'regular' | 'light'
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
