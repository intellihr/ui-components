import React from 'react'
import { buttonClass, IButtonProps } from '../services/buttonHelper'
import { Anchor, AnchorProps } from '@Domain/Anchors'
import { BaseButton } from '../BaseButton'

export interface LinkButtonProps extends IButtonProps, AnchorProps {
  /** Weather the button is clickable or not */
  disabled?: boolean
  /** Destination url */
  href: string
}

export class LinkButton extends React.PureComponent<LinkButtonProps> {
  public static defaultProps: Partial<LinkButtonProps & IButtonProps> = {
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
            <span className={buttonClass(type!, size, className, { disabled: disabled })}>
              {content}
            </span>
          </Anchor>
        )}
      />
    )
  }
}
