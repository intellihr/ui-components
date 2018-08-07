import React from 'react'
import { buttonClass, IButtonProps } from '../services/buttonHelper'
import { Anchor } from '@Domain/Internals'
import { BaseButton } from '../BaseButton'

export interface LinkButtonProps extends IButtonProps {
  /** Weather the button is clickable or not */
  disabled?: boolean,
  /** Destination url */
  href?: string,
  /** Anchor props passthrough */
  anchorComponentProps?: any
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
      anchorComponentProps
    } = this.props

    return (
      <BaseButton
        {...this.props}
        render={(content: any) => (
          <Anchor
            href={disabled ? '#' : href}
            anchorComponentProps={anchorComponentProps}
          >
            <span className={buttonClass(type!, size, className, { disabled: disabled })}>
              {content}
            </span>
          </Anchor>
        )}
      />
    )
  }
}
