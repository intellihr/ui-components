import React from 'react'
import { MenuWrapper } from './style'

export class Menu extends React.PureComponent<{}> {
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
