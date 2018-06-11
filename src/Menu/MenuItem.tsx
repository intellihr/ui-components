import React from 'react'

export interface MenuItemProps {
  /** HTML id to use for the menu */
  url?: string
  label: string
  children?: JSX.Element
}

export class MenuItem extends React.PureComponent<MenuItemProps> {
  public render (): JSX.Element {
    const {
      url,
      label,
      children
    } = this.props

    return (
      <li>
        <a href={url}>{label}</a>
        {children}
      </li>
    )
  }
}
