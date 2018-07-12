import React from 'react'
import { Icon, IIconProps } from './Icon'

export class IntelliIcon extends React.PureComponent<IIconProps> {
  public render (): JSX.Element {
    const {
      type
    } = this.props

    return (
      <Icon
        {...this.props}
        type={`intelli-icon-${type}`}
      />
    )
  }
}
