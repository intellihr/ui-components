import React from 'react'

import { Omit } from '../../../common'
import { IIconProps, Icon } from '../Icon'
import { FontAwesomeIconType, FontAwesomeIconTypeNoPrefix } from '../Icon/types'

interface IFontAwesomeIconProps extends Omit<IIconProps, 'type'> {
  type: FontAwesomeIconTypeNoPrefix
}

export class FontAwesomeIcon extends React.PureComponent<IFontAwesomeIconProps> {
  public render (): JSX.Element {
    const {
      type
    } = this.props

    return (
      <Icon
        {...this.props}
        type={`fa-${type}` as FontAwesomeIconType}
      />
    )
  }
}
