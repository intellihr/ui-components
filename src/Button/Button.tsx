import React from 'react'
import { buttonClass, ButtonProps } from './ButtonHelper'
import { BaseButton } from './BaseButton'

export class Button extends React.PureComponent<ButtonProps> {
  public static defaultProps: Partial<ButtonProps> = {
    type: 'neutral',
    iconAlignment: 'left'
  }

  public render (): JSX.Element | null {
    const {
      size,
      type,
      className,
      iconAlignment,
      ...props
    } = this.props

    return (
      <BaseButton
        {...this.props}
        render={(content) => (
          <button className={buttonClass(type!, size, className)} {...props}>
            {content}
          </button>
        )}
      />
    )
  }
}
