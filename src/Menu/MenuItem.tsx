import React from 'react'
import styled, { StyledComponentClass } from 'styled-components'
import { IntelliIcon } from '../Icon'
import { MenuItemAnchor, MenuIcon } from './style'

export interface MenuItemProps {
  /** HTML id to use for the menu */
  url?: string
  label: string
}

export class MenuItem extends React.PureComponent<MenuItemProps> {
  public render (): JSX.Element {
    const {
      url,
      label,
      children
    } = this.props

    const MenuIcon = styled(IntelliIcon)`
      margin-right: 0.1825rem;
      width: 1.28571em;
      text-align: center;
      vertical-align: top;
    `

    return (
      <li>
        <MenuItemAnchor href={url}>
          <MenuIcon type={'clock'} />
          {label}
        </MenuItemAnchor>
      </li>
    )
  }
}
