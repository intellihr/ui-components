import React from 'react'

interface IMenuItemProps<TAnchorProps extends Record<string, any> = Record<string, any>> {
  /** The URL which the user will be navigated to when this item is clicked */
  href?: string
  /** The label of this item */
  label: string
  /** The icon of this item */
  icon?: JSX.Element
  /** A flag indicating whether this item should show the loading state */
  isLoading?: boolean
  /** if this is a selected menu item */
  isActive?: boolean
  /** A flag indicating whether this item should show the children if any */
  isOpen?: boolean
  /** A handler to handle when this item shows or hides the children */
  handleSizeChange?: () => void
  /** The properties to be passed on to the custom anchor component if provided in the Provider */
  anchorComponentProps?: TAnchorProps
  /** Open a new tab. Default is false */
  openInNewTab?: boolean
  /** Children components */
  children?: React.ReactNode
}

type IMenuItemContent = Pick<IMenuItemProps, 'isActive' | 'isOpen' | 'href' | 'anchorComponentProps' | 'icon' | 'label' | 'isLoading'| 'openInNewTab'>

export {
  IMenuItemProps,
  IMenuItemContent
}
