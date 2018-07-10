import React from 'react'
import classNames from 'classnames'
import { includes } from 'lodash'
import { StyledIcon, BadgeWrapper } from './style'

export interface IIconProps {
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
  /** Custom sizes for icons */
  customSize?: number
  /** Enforced icon guideline sizes */
  tSize?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'
}

export class Icon extends React.PureComponent<IIconProps> {
  public static defaultProps: Partial<IIconProps> = {
    isStacked: false,
    isLarge: false,
    isSmall: false,
    isSpinning: false
  }

  get sizeClass (): string {
    const {
      size,
      isStacked,
      isLarge,
      customSize,
      tSize
    } = this.props

    if (customSize || tSize) {
      return ''
    }

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
      tSize
    } = this.props

    const newBadgeSize: { [i:string]: string } = {
      large: 'small',
      xlarge: 'medium',
      xxlarge: 'large'
    }

    return tSize && newBadgeSize[tSize]
  }

  get badge () {
    const {
      badge,
      tSize
    } = this.props

    if (badge && tSize && includes(['large', 'xlarge', 'xxlarge'], tSize)) {
      return (
        <BadgeWrapper
          tSize={tSize}
        >
          {React.cloneElement(badge, { tSize: this.badgeSize })}
        </BadgeWrapper>
      )
    }
  }

  public render (): JSX.Element {
    const {
      color,
      customSize,
      tSize
    } = this.props

    return (
      <React.Fragment>
        <StyledIcon
          className={this.classNames}
          aria-hidden
          color={color}
          customSize={customSize}
          tSize={tSize}
        />

        {this.badge}
      </React.Fragment>
    )
  }
}
