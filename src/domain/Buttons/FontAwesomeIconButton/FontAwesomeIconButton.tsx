import React from 'react'

import { Omit, Props } from '../../../common'
import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'
import { FontAwesomeIconValue } from '../../Icons/Icon/FontAwesomeIconTypes'
import { ITooltipPopoverToggleComponentProps, TooltipPopover } from '../../Popovers/TooltipPopover'
import { TooltipPopoverVariant } from '../../Popovers/TooltipPopover/TooltipPopover'
import { IconButtonVariants, StatusDotVariants } from './colors'
import { StyledIconButton, StyledStatusDot, TooltipPopoverWrapper } from './style'

enum Size {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

enum IconSize {
  Small = 'small',
  Large = 'large'
}

interface IFontAwesomeIconButtonProps {
  /** Button props passthrough */
  buttonOverrides?: Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'ref'>
  /** Name of the icon */
  icon: FontAwesomeIconValue
  /** Size of the button */
  size?: Size
  /** Size of the icon */
  iconSize?: IconSize
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
  /** Variant of the status dot */
  statusDotVariant?: StatusDotVariants
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
    iconSize = IconSize.Small,
    size = Size.Small,
    buttonOverrides,
    statusDotVariant
  } = props

  const hasStatusDot = !!statusDotVariant && iconSize === IconSize.Large

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
        type='button'
        {...buttonOverrides}
      >
        <FontAwesomeIcon
          size={iconSize === IconSize.Large ? 'large' : 'medium'}
          icon={icon}
          type={type}
        />
        {
          hasStatusDot && (
            <StyledStatusDot
              variant={statusDotVariant}
            />
          )
        }
      </StyledIconButton>
    </span>
  )

  return (
    tooltipText && !isDisabled
    ? (
       <TooltipPopoverWrapper
         size={size}
         data-component-type={Props.ComponentType.FontAwesomeIconButton}
         data-component-context={componentContext}
       >
         <TooltipPopover
           variant={TooltipPopoverVariant.Dark}
           toggleComponent={toggleComponent}
         >
           {tooltipText}
         </TooltipPopover>
       </TooltipPopoverWrapper>
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
          type='button'
          {...buttonOverrides}
          data-component-type={Props.ComponentType.FontAwesomeIconButton}
          data-component-context={componentContext}
        >
          <FontAwesomeIcon
            size={iconSize === IconSize.Large ? 'large' : 'medium'}
            icon={icon}
            type={type}
          />
          {
            hasStatusDot && (
              <StyledStatusDot
                variant={statusDotVariant}
              />
            )
          }
        </StyledIconButton>
      )
  )
}

FontAwesomeIconButton.Size = Size
FontAwesomeIconButton.IconSize = IconSize
FontAwesomeIconButton.StatusDotVariants = StatusDotVariants
FontAwesomeIconButton.IconButtonVariants = IconButtonVariants

export {
  FontAwesomeIconButton,
  Size as FontAwesomeIconButtonSize,
  IFontAwesomeIconButtonProps
}
