import React from 'react'

import { MenuWrapper } from './style'
import { MenuItem } from './MenuItem'

export class Menu extends React.PureComponent<{}> {
  public static Item = MenuItem

  public render (): JSX.Element {
    const {
      children
    } = this.props

    return (
      <MenuWrapper>
        {children}
      </MenuWrapper>
    )
  }
}
