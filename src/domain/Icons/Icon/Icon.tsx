import classNames from 'classnames'
import React from 'react'

import { Props } from '../../../common'
import { BadgeWrapper, StyledIcon } from './style'

interface IIconProps {
  /** FontAwesome or alternate name of the icon to display */
  icon: string
  /** Multiplies icon size by this amount */
  size?: 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'
  /** Custom sizes for icons */
  customSize?: number
  /** Colour of the icon */
  color?: string
  /** Additional class name to pass to the icon */
  className?: string
  /** Adds FontAwesome `fa-spin` class to icon */
  isSpinning?: boolean
  /** Badge to display on the icon */
  badge?: JSX.Element
  /** Margins around the component */
  margins?: Props.IMargins
  /** Width of the icon */
  width?: number
  /** Shows the component only between these provided screen sizes */
  showForSizes?: Props.IShowForSizes
}

const Icon: React.FC<IIconProps> = ({
  isSpinning = false,
  size = 'medium',
  className,
  color,
  customSize,
  icon,
  badge,
  margins,
  width,
  showForSizes
}) => {
  const classes = classNames(
    className,
    'icon',
    icon,
    {
      'fa-spin': isSpinning
    }
  )

  const newBadgeSize: { [i: string]: string } = {
    large: 'small',
    xlarge: 'medium',
    xxlarge: 'large'
  }

  return (
    <React.Fragment>
      <StyledIcon
        className={classes}
        aria-hidden
        color={color}
        customSize={customSize}
        size={size}
        showForSizes={showForSizes}
        margins={margins}
        width={width}
      />
      {badge && ['large', 'xlarge', 'xxlarge'].includes(size) && (
        <BadgeWrapper
          size={size}
          showForSizes={showForSizes}
        >
          {React.cloneElement(badge, { size: size && newBadgeSize[size] })}
        </BadgeWrapper>
      )}
    </React.Fragment>
  )
}

export {
  IIconProps,
  Icon
}
