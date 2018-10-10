import React, { MouseEvent } from 'react'
import classNames from 'classnames'
import { Anchor } from '../../Internals'
import { BaseButton, IBaseButtonProps } from '../BaseButton'

export interface ILinkButtonProps extends IBaseButtonProps {
  /** Weather the button is clickable or not */
  disabled?: boolean,
  /** Destination url */
  href?: string,
  /** Anchor props passthrough */
  anchorComponentProps?: {
    [i: string]: any
  }
}

export class LinkButton extends BaseButton<ILinkButtonProps> {
  public static defaultProps: Partial<ILinkButtonProps> = {
    ...BaseButton.defaultProps,
    disabled: false
  }

  public render (): JSX.Element | null {
    const {
      disabled,
      href,
      anchorComponentProps,
      innerRef
    } = this.props

    return (
      <Anchor
        href={href}
        anchorComponentProps={anchorComponentProps}
        onClick={this.handleClick}
      >
        <span
          className={classNames(this.buttonClass, { disabled })}
          ref={innerRef}
        >
          {this.buttonContent}
        </span>
      </Anchor>
    )
  }

  private handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const {
      disabled,
      onClick
    } = this.props

    if (onClick) {
      onClick(event)
    }

    if (disabled) {
      event.preventDefault()
    }
  }
}
