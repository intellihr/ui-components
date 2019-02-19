import classNames from 'classnames'
import { includes } from 'lodash'
import React from 'react'

import { BadgeWrapper, StyledIcon } from './style'
import { IconType } from './types'

interface IIconProps {
  /** FontAwesome or alternate name of the icon to display */
  type: IconType
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
}

class Icon extends React.PureComponent<IIconProps> {
  public static defaultProps: Partial<IIconProps> = {
    isSpinning: false,
    size: 'medium'
  }

  get classNames (): string {
    const {
      className,
      type,
      isSpinning
    } = this.props

    return classNames(
      className,
      'icon',
      'fa',
      type,
      {
        'fa-spin': isSpinning
      }
    )
  }

  get badgeSize (): string | undefined {
    const {
      size
    } = this.props

    const newBadgeSize: { [i: string]: string } = {
      large: 'small',
      xlarge: 'medium',
      xxlarge: 'large'
    }

    return size && newBadgeSize[size]
  }

  get badge (): JSX.Element | undefined {
    const {
      badge,
      size
    } = this.props

    if (badge && includes(['large', 'xlarge', 'xxlarge'], size)) {
      return (
        <BadgeWrapper
          size={size}
        >
          {React.cloneElement(badge, { size: this.badgeSize })}
        </BadgeWrapper>
      )
    }
  }

  public render (): JSX.Element {
    const {
      color,
      customSize,
      size
    } = this.props

    return (
      <React.Fragment>
        <StyledIcon
          className={this.classNames}
          aria-hidden
          color={color}
          customSize={customSize}
          size={size}
        />

        {this.badge}
      </React.Fragment>
    )
  }
}

export {
  IIconProps,
  Icon
}
