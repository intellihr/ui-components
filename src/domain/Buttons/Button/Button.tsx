import React from 'react'
import { buttonClass, IBaseButtonProps } from '../services/buttonHelper'
import { BaseButton } from '../BaseButton'

export interface IButtonProps extends IBaseButtonProps {
  /** Button props passthrough */
  buttonComponentProps?: {
    [i: string]: any
  }
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
      buttonComponentProps,
      onClick,
      disabled
    } = this.props

    return (
      <button
        className={buttonClass(type!, size, className)}
        {...buttonComponentProps}
        onClick={onClick}
        disabled={disabled}
      >
        {this.buttonContent}
      </button>
    )
  }
}
