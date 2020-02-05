import { isEqual } from 'lodash'
import React from 'react'

import { FontAwesomeIcon } from '../../../Icons'
import { UnstyledLink } from '../../../Links/UnstyledLink'
import { Collapsible } from '../Collapsible'
import {
  IconWrapper,
  LoadingIconWrapper,
  MenuItemLabelWrapper,
  MenuItemWrapper
} from './style'

export interface IMenuItemProps<TAnchorProps extends Record<string, any> = Record<string, any>> {
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
  /** Children components */
  children?: React.ReactNode
}

const MenuItemComponent: React.FC<{
  isActive?: boolean
  href?: string
  anchorComponentProps?: object
  icon?: JSX.Element
  label: string
  isLoading?: boolean
}> = ({
  href,
  isActive,
  anchorComponentProps,
  icon,
  label,
  isLoading
}) => {
  return (
      <MenuItemWrapper isActive={isActive}>
      <UnstyledLink
        href={href}
        anchorComponentProps={anchorComponentProps}
      >
        {icon !== undefined && (
          <IconWrapper isActive={isActive}>
            {icon}
          </IconWrapper>
        )}
        <MenuItemLabelWrapper isActive={isActive}>
          {label}
        </MenuItemLabelWrapper>
        {isLoading && (
          <LoadingIconWrapper>
            <FontAwesomeIcon
              type='solid'
              icon='circle-notch'
              isSpinning
            />
          </LoadingIconWrapper>
        )}
      </UnstyledLink>
      </MenuItemWrapper>
  )
}

const MemoMenuItemComponent = React.memo(MenuItemComponent,(prevProps, nextProps) => {
  return nextProps.href === prevProps.href &&
    nextProps.label === prevProps.label &&
    prevProps.icon === nextProps.icon &&
    nextProps.isLoading === prevProps.isLoading &&
    nextProps.isActive === prevProps.isActive &&
    isEqual(prevProps.anchorComponentProps, nextProps.anchorComponentProps)
})

const MenuItem: React.FC<IMenuItemProps> = (
  {
    children,
    isOpen,
    handleSizeChange,
    anchorComponentProps,
    href,
    icon,
    isActive,
    isLoading,
    label
  }) => {
  if (children) {
    return (
      <Collapsible
        isOpen={isOpen}
        onToggle={handleSizeChange}
        trigger={
          <MemoMenuItemComponent
            label={label}
            isActive={isActive}
            href={href}
            anchorComponentProps={anchorComponentProps}
            icon={icon}
            isLoading={isLoading}
          />
        }
      >
        {children}
      </Collapsible>
    )
  }
  return (
    <MemoMenuItemComponent
      label={label}
      isActive={isActive}
      href={href}
      anchorComponentProps={anchorComponentProps}
      icon={icon}
      isLoading={isLoading}
    />
  )
}

const MemoMenuItem = React.memo(MenuItem,(prevProps, nextProps) => {
  return nextProps.href === prevProps.href &&
    nextProps.label === prevProps.label &&
    prevProps.icon === nextProps.icon &&
    nextProps.isLoading === prevProps.isLoading &&
    nextProps.isActive === prevProps.isActive &&
    nextProps.isOpen === prevProps.isOpen &&
    prevProps.children === nextProps.children &&
    isEqual(prevProps.handleSizeChange, nextProps.handleSizeChange) &&
    isEqual(prevProps.anchorComponentProps, nextProps.anchorComponentProps)
})

export {
  MemoMenuItem as MenuItem
}
