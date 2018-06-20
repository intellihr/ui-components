import React, { Children } from 'react'
import classNames from 'classnames'
import { MenuItemAnchor, StyledIcon } from './style'

export interface MenuItemProps {
  /** HTML id to use for the menu */
  url?: string
  label: string
  icon?: JSX.Element,
  isActive?: boolean
}

export class MenuItem extends React.PureComponent<MenuItemProps> {
  public defaultProps: Partial<MenuItemProps> = {
    isActive: false
  }

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
  public render (): JSX.Element {
    const {
      url,
      label,
      isActive,
      children
    } = this.props

    return (
      <li>
        <MenuItemAnchor href={url} className={classNames({active: isActive})}>
          {this.icon}
          {label}
        </MenuItemAnchor>
        {children}
      </li>
    )
  }
}
