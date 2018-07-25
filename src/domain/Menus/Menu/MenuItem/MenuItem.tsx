import React from 'react'
import { MenuItemAnchorWrapper, IconWrapper, LoadingIconWrapper, MenuItemWrapper } from './style'
import { FontAwesomeIcon } from '@Domain/Icons'

export interface IMenuItemProps {
  /** HTML id to use for the menu */
  url?: string
  label: string
  icon?: JSX.Element
  render?: (label: string, iconContent: JSX.Element | null, url?: string) => JSX.Element
  className?: string
  isLoading?: boolean
}

export class MenuItem extends React.PureComponent<IMenuItemProps> {
  get icon (): JSX.Element | null {
    const { icon } = this.props

    if (icon) {
      return (
        <IconWrapper>
          {icon}
        </IconWrapper>
      )
    }
    return null
  }

  get loadingIcon (): JSX.Element | undefined {
    const {
      isLoading
    } = this.props

    if (isLoading) {
      return (
        <LoadingIconWrapper>
          <FontAwesomeIcon
            type='circle-o-notch'
            isSpinning
          />
        </LoadingIconWrapper>
      )
    }
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
      <MenuItemAnchorWrapper href={url}>
        {this.icon}
        {label}
        {this.loadingIcon}
      </MenuItemAnchorWrapper>
    )
  }

  public render (): JSX.Element {
    const {
      children,
      className
    } = this.props

    return (
      <MenuItemWrapper className={className}>
        {this.component}
        {children}
      </MenuItemWrapper>
    )
  }
}
