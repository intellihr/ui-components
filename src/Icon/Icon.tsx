import React from 'react'
import classNames from 'classnames'
import { StyledIcon, BadgeWrapper } from './style'

export interface IconProps {
  /** FontAwesome or alternate name of the icon to display */
  type: string
  /** Multiplies icon size by this amount (max 5) */
  size?: 1 | 2 | 3 | 4 | 5
  /** Adds FontAwesome stacked class to icon */
  isStacked?: boolean
  /** Adds FontAwesome `fa-lg` class to icon */
  isLarge?: boolean
  /** Adds a class to reduce the font size of the icon */
  isSmall?: boolean
  /** Colour of the icon */
  color?: string
  /** Additional class name to pass to the icon */
  className?: string
  /** Adds FontAwesome `fa-spin` class to icon */
  isSpinning?: boolean
  /** Badge to display on the icon */
  badge?: JSX.Element
}

export class Icon extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    isStacked: false,
    isLarge: false,
    isSmall: false,
    isSpinning: false
  }

  get sizeClass (): string {
    const {
      size,
      isStacked,
      isLarge
    } = this.props

    if (isLarge) {
      return `fa-lg`
    }

    if (size) {
      if (isStacked) {
        return `fa-stack-${size}x`
      }

      return `fa-${size}x`
    }

    return ''
  }

  get classNames (): string {
    const {
      className,
      type,
      isSpinning,
      isSmall
    } = this.props

    return classNames(
      className,
      'icon',
      'fa',
      type,
      this.sizeClass,
      {
        'fa-spin': isSpinning,
        'icon-small': isSmall
      }
    )
  }

  get badgeSize () {
    const {
      size
    } = this.props

    if (size === 3) {
      return {
        isSmall: true
      }
    }

    if (size === 5) {
      return {
        isLarge: true
      }
    }
  }

  get badge () {
    const {
      badge,
      size
    } = this.props

    if (badge && size && size >= 3) {
      return (
        <BadgeWrapper
          size={size}
        >
          {React.cloneElement(badge, {
            isSmall: size === 3,
            isLarge: size === 5
          })}
        </BadgeWrapper>
      )
    }
  }

  public render (): JSX.Element {
    const {
      color
    } = this.props

    return (
      <React.Fragment>
        <StyledIcon
          className={this.classNames}
          aria-hidden
          color={color}
        />

        {this.badge}
      </React.Fragment>
    )
  }
}
