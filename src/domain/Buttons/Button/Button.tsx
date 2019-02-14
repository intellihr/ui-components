import React from 'react'

import { Props } from '../../../common'
import { BaseButton, IBaseButtonProps } from '../BaseButton'

export interface IButtonProps extends IBaseButtonProps {
  /** Button props passthrough */
  buttonOverrides?: React.HTMLProps<HTMLButtonElement>
}

export class Button extends BaseButton<IButtonProps> {
  public render (): JSX.Element | null {
    const {
      buttonOverrides,
      onClick,
      disabled,
      innerRef,
      componentContext
    } = this.props

    return (
      <button
        data-component-type={Props.ComponentType.Button}
        data-component-context={componentContext}
        ref={innerRef}
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
