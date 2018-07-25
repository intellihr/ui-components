import React from 'react'
import { Menu, MenuProps } from './Menu'

export class SubMenu extends React.PureComponent<MenuProps> {
  public render (): JSX.Element {
    return (
      <Menu
        {...this.props}
        isNested
      />
    )
  }
}
