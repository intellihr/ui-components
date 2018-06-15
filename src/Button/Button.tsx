import React from 'react'
import { buttonClass, IButtonProps } from './ButtonHelper'
import { BaseButton } from './BaseButton'

export class Button extends React.PureComponent<IButtonProps> {
  public static defaultProps: Partial<IButtonProps> = {
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
