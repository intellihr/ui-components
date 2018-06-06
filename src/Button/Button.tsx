import React from 'react'
import {ButtonProps, buttonClass} from './ButtonHelper'

export class Button extends React.PureComponent<ButtonProps> {
  public static defaultProps: Partial<ButtonProps> = {
    type: 'neutral'
  }

  public render (): JSX.Element | null {
    const {
      size,
      type,
      className,
      children,
      ...props
    } = this.props

    return (
      <button className={buttonClass(type, size, className)} {...props}>{children}</button>
    )
  }
}
