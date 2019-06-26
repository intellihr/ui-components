import React from 'react'

import { Omit, Props } from '../../../common'
import { BaseButton, IBaseButtonProps } from '../BaseButton'
import { MarginButton } from './style'

export interface IButtonProps extends IBaseButtonProps {
  /** Button props passthrough */
  buttonOverrides?: Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'ref'>
  /** The margins around the component */
  margins?: Props.IMargins
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
        ref={innerRef}
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
