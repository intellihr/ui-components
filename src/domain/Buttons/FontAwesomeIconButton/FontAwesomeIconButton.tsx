import React, {useState} from 'react'

import {Props} from '../../../common'
import {FontAwesomeIcon} from '../../Icons/FontAwesomeIcon'
import {FontAwesomeIconValue} from '../../Icons/Icon/FontAwesomeIconTypes'
import {ITooltipPopoverToggleComponentProps, TooltipPopover} from '../../Popovers/TooltipPopover'
import {TooltipPopoverVariant} from '../../Popovers/TooltipPopover/TooltipPopover'
import {IconButtonVariants} from './colors'
import {StyledIconButton} from './style'

interface IFontAwesomeIconButtonProps {
  /** Name of the icon */
  icon: FontAwesomeIconValue
  /** The alternative font awesome icon versions */
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
  /** The component context */
  componentContext?: string
}

const FontAwesomeIconButton: React.FC<IFontAwesomeIconButtonProps> = (props) => {
  const {
    icon,
    type,
    onClick,
    variant = IconButtonVariants.Neutral,
    margins,
    tooltipText,
    isSelected = false,
    componentContext
  } = props

  const toggleComponent = ({ openMenu, closeMenu, toggleComponentRef, ariaProps }: ITooltipPopoverToggleComponentProps) => (
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
    </span>
  )

  return (
    tooltipText
    ? (
        <TooltipPopover
          variant={TooltipPopoverVariant.Dark}
          toggleComponent={toggleComponent}
          data-component-type={Props.ComponentType.FontAwesomeIconButton}
          data-component-context={componentContext}
        >
          {tooltipText}
        </TooltipPopover>
      )
    : (
        <StyledIconButton
          onClick={onClick}
          variant={variant}
          margins={margins}
          isSelected={isSelected}
          data-component-type={Props.ComponentType.FontAwesomeIconButton}
          data-component-context={componentContext}
        >
          <FontAwesomeIcon
            icon={icon}
            type={type}
          />
        </StyledIconButton>
      )
  )
}

export {
  FontAwesomeIconButton,
  IFontAwesomeIconButtonProps
}
