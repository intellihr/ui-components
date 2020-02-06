import React from 'react'
import Collapsible from 'react-collapsible'

import { FontAwesomeIcon } from '../../../Icons'
import { Anchor } from '../../../Internals'
import { IconWrapper, LoadingIconWrapper, MenuItemLabelWrapper, MenuItemWrapper, SubMenuWrapper } from './style'

export interface IMenuItemProps<TAnchorProps extends Record<string, any> = Record<string, any>> {
  /** (Deprecated - please use `href`) The URL which the user will be navigated to when this item is clicked */
  url?: string
  /** The URL which the user will be navigated to when this item is clicked */
  href?: string
  /** The label of this item */
  label: string
  /** The icon of this item */
  icon?: JSX.Element
  /** A render prop to override the default rendering behaviors of the anchor element */
  render?: (label: JSX.Element, iconContent?: JSX.Element, href?: string) => JSX.Element
  /** The HTML class name of this item */
  className?: string
  /** A flag indicating whether this item should show the loading state */
  isLoading?: boolean
  /** A flag indicating whether this item should show the children if any */
  isOpen?: boolean
  /** A handler to handle when this item shows or hides the children */
  handleSizeChange?: () => void
  /** A property determining what to do when a child's content is too big to fit in this item */
  overflowWhenOpen?: 'hidden' | 'visible' | 'auto' | 'scroll' | 'inherit' | 'initial' | 'unset'
  /** The properties to be passed on to the custom anchor component if provided in the Provider */
  anchorComponentProps?: TAnchorProps
}

export class MenuItem<TAnchorProps extends Record<string, any> = Record<string, any>> extends React.PureComponent<IMenuItemProps<TAnchorProps>> {
  public static defaultProps: Pick<IMenuItemProps, 'overflowWhenOpen'> = {
    overflowWhenOpen: 'hidden'
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
            type='solid'
            icon='circle-notch'
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
      href,
      className,
      anchorComponentProps
    } = this.props

    if (render) {
      return (
        <MenuItemWrapper className={className}>
          {render(this.label, this.icon, href || url)}
        </MenuItemWrapper>
      )
    }

    return (
      <MenuItemWrapper className={className}>
        <Anchor
          href={href || url}
          anchorComponentProps={anchorComponentProps}
        >
          {this.icon}
          {this.label}
          {this.loadingIcon}
        </Anchor>
      </MenuItemWrapper>
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
