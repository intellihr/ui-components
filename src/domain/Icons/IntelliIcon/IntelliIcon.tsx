import React from 'react'

import { Omit } from '../../../common'
import { IIconProps, Icon } from '../Icon'
import { IntelliIconType, IntelliIconTypeNoPrefix } from '../Icon/types'

interface IIntelliIconProps extends Omit<IIconProps, 'type'> {
  type: IntelliIconTypeNoPrefix
}

export class IntelliIcon extends React.PureComponent<IIntelliIconProps> {
  public render (): JSX.Element {
    const {
      type
    } = this.props

    return (
      <Icon
        {...this.props}
        type={`intelli-icon-${type}` as IntelliIconType}
      />
    )
  }
}
