import React from 'react'
import Collapsible from 'react-collapsible'
import { MenuItemAnchorWrapper, IconWrapper, LoadingIconWrapper, MenuItemWrapper, SubMenuWrapper } from './style'
import { FontAwesomeIcon } from '@Domain/Icons'

export interface IMenuItemProps {
  /** HTML id to use for the menu */
  url?: string
  label: string
  icon?: JSX.Element
  render?: (label: string, iconContent: JSX.Element | null, url?: string) => JSX.Element
  className?: string
  isLoading?: boolean
  isOpen?: boolean
  handleSizeChange?: () => void
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
      label,
      className
    } = this.props

    if (render) {
      return render(label, this.icon, url)
    }

    return (
      <MenuItemWrapper className={className}>
        <MenuItemAnchorWrapper href={url}>
          {this.icon}
          {label}
          {this.loadingIcon}
        </MenuItemAnchorWrapper>
      </MenuItemWrapper>
    )
  }

  public render (): JSX.Element {
    const {
      children,
      isOpen,
      handleSizeChange
    } = this.props

    if (children) {
      return (
        <Collapsible
          trigger={this.component}
          open={isOpen}
          transitionTime={250}
          onOpen={handleSizeChange}
          onClose={handleSizeChange}
        >
          <SubMenuWrapper>
            {children}
          </SubMenuWrapper>
        </Collapsible>
      )
    }

    return this.component
  }
}
