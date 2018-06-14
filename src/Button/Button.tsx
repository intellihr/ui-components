import React from 'react'
import { buttonClass } from './ButtonHelper'
import { BaseButton, IBaseButton as ButtonProps } from './BaseButton'

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
      ...props
    } = this.props

    return (
      <BaseButton 
        {...this.props}
        render={(content) => (
          <button className={buttonClass(type, size, className)} {...props}>
            {content}
          </button>
        )}
      />
    )
  }
}
