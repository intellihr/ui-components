import React from 'react'
import { buttonClass, IBaseButtonProps } from '../services/buttonHelper'
import { BaseButton } from '../BaseButton'

export interface IButtonProps extends IBaseButtonProps {
  /** Button props passthrough */
  buttonOverrides?: React.HTMLProps<HTMLButtonElement>
}

export class Button extends BaseButton<IButtonProps> {
  public static defaultProps: Partial<IButtonProps> = {
    type: 'neutral',
    iconAlignment: 'left'
  }

  public render (): JSX.Element | null {
    const {
      size,
      type,
      className,
      buttonOverrides,
      onClick,
      disabled,
      fullWidth
    } = this.props

    return (
      <button
        className={buttonClass(type!, size, className, { 'full-width': fullWidth })}
        onClick={onClick}
        disabled={disabled}
        {...buttonOverrides}
      >
        {this.buttonContent}
      </button>
    )
  }
}
