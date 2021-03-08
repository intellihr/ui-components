import React from 'react'

import { FontAwesomeIcon } from '../../../../Icons/FontAwesomeIcon'
import { IMenuItemContent } from '../interfaces'
import {
  StyledIcon,
  StyledLoadingIcon,
  StyledMenuItem,
  StyledMenuItemLabel
} from './style'

const MenuItemContent: React.FC<IMenuItemContent> = ({
        href,
        isActive,
        anchorComponentProps,
        icon,
        label,
        isLoading,
        isOpen,
        openInNewTab
      }) => {
  return (
    <StyledMenuItem
      isActive={isActive}
      href={href}
      anchorComponentProps={anchorComponentProps}
      openInNewTab={openInNewTab}
    >
      {icon && (
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

export {
  MenuItemContent
}
