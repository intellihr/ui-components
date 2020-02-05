import { isEqual } from 'lodash'
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

const MemoFontAwesomeIcon = React.memo(FontAwesomeIcon, ((prevProps, nextProps) => {
  return prevProps.icon === nextProps.icon &&
    prevProps.size === nextProps.size &&
    prevProps.customSize === nextProps.customSize &&
    prevProps.color === nextProps.color &&
    prevProps.className === nextProps.className &&
    prevProps.isSpinning === nextProps.isSpinning &&
    prevProps.badge === nextProps.badge &&
    prevProps.width === nextProps.width &&
    isEqual(prevProps.margins, nextProps.margins) &&
    isEqual(prevProps.showForSizes, nextProps.showForSizes) &&
    isEqual(prevProps.duotoneColors, nextProps.duotoneColors) &&
    isEqual(prevProps.duotoneOpacity, nextProps.duotoneOpacity)
}))

export {
  MemoFontAwesomeIcon as FontAwesomeIcon
}
