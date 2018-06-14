import React from 'react'
import { buttonClass } from './ButtonHelper'
import { Anchor } from '../Anchor'
import { BaseButton, IBaseButton } from './BaseButton'

export interface LinkButtonProps extends IBaseButton{
  /** Weather the button is clickable or not */
  disabled?: boolean
  /** Destination url */
  href: string
}

export class LinkButton extends React.PureComponent<LinkButtonProps> {
  public static defaultProps: Partial<LinkButtonProps & IBaseButton> = {
    disabled: false,
    type: 'neutral'
  }

  public render (): JSX.Element | null {
    const {
      className,
      size,
      type,
      disabled,
      href,
      ...props
    } = this.props

    return (
      <BaseButton
        {...this.props}
        render={(content: any) => (
          <Anchor href={disabled ? '#' : href} {...props}>
            <span className={buttonClass(type, size, className, { disabled: disabled })}>
              {content}
            </span>
          </Anchor>
        )}
      />
    )
  }
}
