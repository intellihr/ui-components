import React, {useState} from 'react'

import {Props} from '../../../common'
import {FontAwesomeIcon} from '../../Icons/FontAwesomeIcon'
import {FontAwesomeIconValue} from '../../Icons/Icon/FontAwesomeIconTypes'
import {TooltipPopover} from '../../Popovers/TooltipPopover'
import {Button} from '../Button'
import {IconButtonVariants} from './colors'
import {StyledIconButton} from './style'

interface IFontAwesomeIconButtonProps {
  /** Name of the icon */
  icon: FontAwesomeIconValue
  /** The alternative versions */
  type: 'solid' | 'regular' | 'light' | 'duotone'
  /** onClick event */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void,
  /** Background and Color of the button  */
  variant?: IconButtonVariants
  /** The margins around the component */
  margins?: Props.IMargins
  /** Text display in the column header tooltip */
  tooltipText?: string
  /** Whether the Icon Button is active/selected */
  isSelected?: boolean
}

const FontAwesomeIconButton: React.FC<IFontAwesomeIconButtonProps> = (props) => {
  const {
    icon,
    type,
    onClick,
    variant = IconButtonVariants.NEUTRAL,
    margins,
    tooltipText,
    isSelected = false
  } = props

  return (
    <TooltipPopover
      type='dark'
      toggleComponent={({ openMenu, closeMenu, toggleComponentRef, ariaProps }) =>
        <span
          onMouseEnter={openMenu}
          onMouseLeave={closeMenu}
          ref={toggleComponentRef}
          {...ariaProps}
        >
          <StyledIconButton
            onClick={onClick}
            variant={variant}
            margins={margins}
            isSelected={isSelected}
          >
          <FontAwesomeIcon
            icon={icon}
            type={type}
          />
        </StyledIconButton>
        </span>}
    >
      {tooltipText}
    </TooltipPopover>
  )
}

export {
  FontAwesomeIconButton
}
