import React from 'react'
import { ButtonProps, buttonClass } from './ButtonHelper'
import { BaseButton } from './BaseButton'

export class Button extends BaseButton<ButtonProps> {
  public static defaultProps: Partial<ButtonProps> = {
    type: 'neutral',
    iconAlignment: 'left'
  }

  public render (): JSX.Element | null {
    const {
      size,
      type,
      className,
      ...props
    } = this.props

    return (
      <button className={buttonClass(type, size, className)} {...props}>
        {this.buttonContent}
      </button>
    )
  }
}
