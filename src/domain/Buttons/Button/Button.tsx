import React from 'react'
import { BaseButton, IBaseButtonProps } from '../BaseButton'

export interface IButtonProps extends IBaseButtonProps {
  /** Button props passthrough */
  buttonOverrides?: React.HTMLProps<HTMLButtonElement>
}

export class Button extends BaseButton<IButtonProps> {
  public static defaultProps = {
    ...BaseButton.defaultProps,
    type: 'neutral',
    iconAlignment: 'left'
  }

  public render (): JSX.Element | null {
    const {
      buttonOverrides,
      onClick,
      disabled
    } = this.props

    return (
      <button
        className={this.buttonClass}
        onClick={onClick}
        disabled={disabled}
        {...buttonOverrides}
      >
        {this.buttonContent}
      </button>
    )
  }
}
