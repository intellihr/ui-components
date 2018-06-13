import React from 'react'
import {ButtonProps, buttonClass} from './ButtonHelper'
import {Anchor} from '../Anchor'
import { BaseButton } from './BaseButton'

export interface LinkButtonProps extends ButtonProps {
  /** Weather the button is clickable or not */
  disabled?: boolean
  /** Destination url */
  href: string
}

export class LinkButton extends BaseButton<LinkButtonProps> {
  public static defaultProps: Partial<LinkButtonProps> = {
    disabled: false,
    type: 'neutral'
  }

  public render (): JSX.Element | null {
    const {
      size,
      type,
      className,
      disabled,
      href,
      ...props
    } = this.props

    return (
      <Anchor href={disabled ? '#' : href} {...props}>
        <span className={buttonClass(type, size, className, { disabled: disabled })}>
          {this.buttonContent}
        </span>
      </Anchor>
    )
  }
}
