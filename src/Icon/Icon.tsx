import React from 'react'
import classNames from 'classnames'

export interface IconProps {
  type: string
  size?: 1 | 2 | 3 | 4 | 5
  isStacked?: boolean
  isLarge?: boolean
  color?: string
  className?: string
  isSpinning?: boolean
  isFontAwesome?: boolean
}

export class Icon extends React.Component<IconProps> {
  public static defaultProps: IconProps = {
    type: '',
    isStacked: false,
    isLarge: false,
    isSpinning: false,
    isFontAwesome: true
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

  get type (): string {
    const {
      isFontAwesome,
      type
    } = this.props

    if (isFontAwesome) {
      return `fa-${type}`
    }

    return type
  }

  get classNames (): string {
    const {
      className,
      isSpinning
    } = this.props

    return classNames(
      className,
      'fa',
      this.type,
      this.sizeClass,
      {'fa-spin': isSpinning}
    )
  }

  public render (): JSX.Element {
    const {
      color
    } = this.props

    return (
      <i
        className={this.classNames}
        aria-hidden
        style={{color}}
      />
    )
  }
}
