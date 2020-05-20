import React from 'react'

import { Props } from '../../../common'
import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'
import { FontAwesomeIconValue } from '../../Icons/Icon/FontAwesomeIconTypes'
import { ITooltipPopoverToggleComponentProps, TooltipPopover } from '../../Popovers/TooltipPopover'
import { TooltipPopoverVariant } from '../../Popovers/TooltipPopover/TooltipPopover'
import { IconButtonVariants } from './colors'
import { StyledIconButton } from './style'

enum Size {
  Small = 'small',
  Large = 'large'
}

interface IFontAwesomeIconButtonProps {
  /** Name of the icon */
  icon: FontAwesomeIconValue
  /** Size of the icon */
  size?: Size
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
  /** Whether the Icon Button is hovered */
  isHovered?: boolean
  /** Whether the Icon Button is active/selected */
  isSelected?: boolean
  /** Whether the Icon Button is disabled */
  isDisabled?: boolean
  /** The component context */
  componentContext?: string
}

const FontAwesomeIconButton = (props: IFontAwesomeIconButtonProps) => {
  const {
    icon,
    type,
    onClick,
    variant = IconButtonVariants.Neutral,
    margins,
    tooltipText,
    isSelected = false,
    isHovered = false,
    isDisabled = false,
    componentContext,
    size = Size.Small
  } = props

  const toggleComponent = ({ openMenu, closeMenu, toggleComponentRef, ariaProps }: ITooltipPopoverToggleComponentProps) => (
    <span
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
      ref={toggleComponentRef}
      {...ariaProps}
    >
      <StyledIconButton
        size={size}
        onClick={onClick}
        variant={variant}
        margins={margins}
        isSelected={isSelected}
        isHovered={isHovered}
        isDisabled={isDisabled}
      >
        <FontAwesomeIcon
          icon={icon}
          type={type}
        />
      </StyledIconButton>
    </span>
  )

  return (
    tooltipText && !isDisabled
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
          size={size}
          onClick={onClick}
          variant={variant}
          margins={margins}
          isSelected={isSelected}
          isHovered={isHovered}
          isDisabled={isDisabled}
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

FontAwesomeIconButton.Size = Size

export {
  FontAwesomeIconButton,
  Size as FontAwesomeIconButtonSize,
  IFontAwesomeIconButtonProps
}
