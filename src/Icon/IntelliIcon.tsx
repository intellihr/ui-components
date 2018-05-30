import React from 'react'
import { Icon, IconProps } from './Icon'

export class IntelliIcon extends React.PureComponent<IconProps> {
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
