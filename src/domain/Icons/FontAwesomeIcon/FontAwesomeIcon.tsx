import React from 'react'

import { IIconProps, Icon } from '../Icon'

export class FontAwesomeIcon extends React.PureComponent<IIconProps> {
  public render (): JSX.Element {
    const {
      type
    } = this.props

    return (
      <Icon
        {...this.props}
        type={`fa-${type}`}
      />
    )
  }
}
