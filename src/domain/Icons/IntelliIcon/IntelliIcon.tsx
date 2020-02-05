import { isEqual } from 'lodash'
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

const MemoIntelliIcon = React.memo(IntelliIcon, ((prevProps, nextProps) => {
  return prevProps.icon === nextProps.icon &&
    prevProps.size === nextProps.size &&
    prevProps.customSize === nextProps.customSize &&
    prevProps.color === nextProps.color &&
    prevProps.className === nextProps.className &&
    prevProps.isSpinning === nextProps.isSpinning &&
    prevProps.badge === nextProps.badge &&
    prevProps.width === nextProps.width &&
    isEqual(prevProps.margins, nextProps.margins) &&
    isEqual(prevProps.showForSizes, nextProps.showForSizes)
}))

export {
  MemoIntelliIcon as IntelliIcon
}
