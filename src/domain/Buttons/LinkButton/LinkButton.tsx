import classNames from 'classnames'
import React, { MouseEvent } from 'react'

import { Props } from '../../../common'
import { Anchor } from '../../Internals/Anchor'
import { BaseButton, IBaseButtonProps } from '../BaseButton'
import { StyledSpan } from './style'

interface ILinkButtonProps extends IBaseButtonProps {
  /** Weather the button is clickable or not */
  disabled?: boolean,
  /** Destination url */
  href?: string,
  /** Anchor props passthrough */
  anchorComponentProps?: {
    [i: string]: any
  }
  /** The margins around the component */
  margins?: Props.IMargins
}

class LinkButton extends BaseButton<ILinkButtonProps> {
  public static defaultProps: Partial<ILinkButtonProps> = {
    ...BaseButton.defaultProps,
    disabled: false
  }

  public render (): JSX.Element | null {
    const {
      disabled,
      href,
      anchorComponentProps,
      innerRef,
      componentContext,
      margins
    } = this.props

    return (
      <Anchor
        href={href}
        anchorComponentProps={anchorComponentProps}
        onClick={this.handleClick}
      >
        <StyledSpan
          data-component-type={Props.ComponentType.LinkButton}
          data-component-context={componentContext}
          className={classNames(this.buttonClass, { disabled })}
          ref={innerRef}
          margins={margins}
        >
          {this.buttonContent}
        </StyledSpan>
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

    event.stopPropagation()
  }
}

export {
  ILinkButtonProps,
  LinkButton
}
