import { isEqual } from 'lodash'
import React, { useCallback, useState } from 'react'

import { FontAwesomeIcon } from '../../../Icons'
import { Collapsible } from '../Collapsible'
import {
  StyledCollapsibleChildren,
  StyledIcon,
  StyledLoadingIcon,
  StyledMenuItem,
  StyledMenuItemLabel
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
  isOpen?: boolean
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
  isLoading,
  isOpen
}) => {
  return (
    <StyledMenuItem
      isActive={isActive}
      href={href}
      anchorComponentProps={anchorComponentProps}
    >
      {icon !== undefined && (
        <StyledIcon isActive={isActive}>
          {icon}
        </StyledIcon>
      )}
      <StyledMenuItemLabel isActive={isActive} isOpen={isOpen}>
        {label}
      </StyledMenuItemLabel>
      {isLoading && (
        <StyledLoadingIcon>
          <FontAwesomeIcon
            type='solid'
            icon='circle-notch'
            isSpinning
          />
        </StyledLoadingIcon>
      )}
    </StyledMenuItem>
  )
}

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
  const [open, setOpen] = useState(isOpen || false)
  const onToggle = useCallback((type: 'open' | 'close') => {
    setOpen(type === 'open')
    if (handleSizeChange) {
      handleSizeChange()
    }
  }, [handleSizeChange])

  if (children) {
    return (
      <Collapsible
        isOpen={open}
        onToggle={onToggle}
        trigger={
          <MenuItemComponent
            label={label}
            isActive={isActive}
            isOpen={open}
            href={href}
            anchorComponentProps={anchorComponentProps}
            icon={icon}
            isLoading={isLoading}
          />
        }
      >
        <StyledCollapsibleChildren>
          {children}
        </StyledCollapsibleChildren>
      </Collapsible>
    )
  }
  return (
    <MenuItemComponent
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
    (prevProps.anchorComponentProps === nextProps.anchorComponentProps || isEqual(prevProps.anchorComponentProps, nextProps.anchorComponentProps))
})

export {
  MemoMenuItem as MenuItem
}
