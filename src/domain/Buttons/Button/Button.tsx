import React from 'react'

import { Omit, Props } from '../../../common'
import { BaseButton, IBaseButtonProps } from '../BaseButton'
import { MarginButton } from './style'

export interface IButtonProps extends IBaseButtonProps, Props.IMarginProps {
  /** Button props passthrough */
  buttonOverrides?: Omit<React.HTMLProps<HTMLButtonElement>, 'ref'>
}

export class Button extends BaseButton<IButtonProps> {
  public render (): JSX.Element | null {
    const {
      buttonOverrides,
      onClick,
      disabled,
      innerRef,
      componentContext,
      margins
    } = this.props

    return (
      <MarginButton
        margins={margins}
        data-component-type={Props.ComponentType.Button}
        data-component-context={componentContext}
        innerRef={innerRef}
        className={this.buttonClass}
        onClick={onClick}
        disabled={disabled}
        type='button'
        {...buttonOverrides}
      >
        {this.buttonContent}
      </MarginButton>
    )
  }
}
