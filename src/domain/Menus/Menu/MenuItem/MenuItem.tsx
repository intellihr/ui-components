import React from 'react'
import Collapsible from 'react-collapsible'
import { FontAwesomeIcon } from '../../../Icons'
import {
  IconWrapper,
  LoadingIconWrapper,
  CustomMenuItemWrapper,
  TextMenuItemWrapper,
  SubMenuWrapper,
  MenuItemLabelWrapper
} from './style'

export interface IMenuItemProps {
  /** HTML id to use for the menu */
  url?: string
  label: string
  icon?: JSX.Element
  render?: (label: string, iconContent?: JSX.Element, url?: string) => JSX.Element
  menuWrapperStyle?: 'text' | 'custom'
  className?: string
  isLoading?: boolean
  isOpen?: boolean
  handleSizeChange?: () => void
  overflowWhenOpen?: 'hidden' | 'visible' | 'auto' | 'scroll' | 'inherit' | 'initial' | 'unset'
}

export class MenuItem extends React.PureComponent<IMenuItemProps> {
  public static defaultProps: Partial<IMenuItemProps> = {
    overflowWhenOpen: 'hidden',
    menuWrapperStyle: 'text'
  }

  get icon (): JSX.Element | undefined {
    const { icon } = this.props

    if (icon) {
      return (
        <IconWrapper>
          {icon}
        </IconWrapper>
      )
    }
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

  get label (): JSX.Element {
    const {
      label
    } = this.props

    return (
      <MenuItemLabelWrapper>
        {label}
      </MenuItemLabelWrapper>
    )
  }

  get component () {
    const {
      render,
      url,
      label,
      className,
      menuWrapperStyle
    } = this.props

    if (render) {
      if (menuWrapperStyle === 'custom') {
        return(
          <CustomMenuItemWrapper className={className}>
            {render(label, this.icon, url)}
          </CustomMenuItemWrapper>
        )
      }

      return (
        <TextMenuItemWrapper className={className}>
          {render(label, this.icon, url)}
        </TextMenuItemWrapper>
      )
    }

    return (
      <TextMenuItemWrapper className={className}>
        <a href={url}>
          {this.icon}
          {this.label}
          {this.loadingIcon}
        </a>
      </TextMenuItemWrapper>
    )
  }

  public render (): JSX.Element {
    const {
      children,
      isOpen,
      handleSizeChange,
      overflowWhenOpen
    } = this.props

    if (children) {
      return (
        <Collapsible
          trigger={this.component}
          open={isOpen}
          transitionTime={250}
          onOpen={handleSizeChange}
          onClose={handleSizeChange}
          overflowWhenOpen={overflowWhenOpen}
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
