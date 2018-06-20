import React, { Children } from 'react'
import { MenuItemAnchor, StyledIcon } from './style'

export interface MenuItemProps {
  /** HTML id to use for the menu */
  url?: string
  label: string
  icon?: JSX.Element
  render?: (label: string, iconContent: JSX.Element | null, url?: string) => JSX.Element
}

export interface AnchorProps {
  href?: string
}

export class MenuItem extends React.PureComponent<MenuItemProps> {
  get icon (): JSX.Element | null {
    const { icon } = this.props

    if (icon) {
      return (
        <StyledIcon>
          {icon}
        </StyledIcon>
      )
    }
    return null
  }

  get component () {
    const {
      render,
      url,
      label
    } = this.props

    if (render) {
      return render(label, this.icon, url)
    }

    return (
      <MenuItemAnchor href={url}>
        {this.icon}
        {label}
      </MenuItemAnchor>
    )
  }
  
  public render (): JSX.Element {
    const {
      children
    } = this.props

    return (
      <li>
        {this.component}
        {children}
      </li>
    )
  }
}
