import React from 'react'

import { Omit, Props } from '../../../common'
import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'
import { FontAwesomeIconValue } from '../../Icons/Icon/FontAwesomeIconTypes'
import { Anchor } from '../../Internals'
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
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  /** A link that will be navigated to on click */
  href?: string
  /** Pass through for anchor props when using href */
  anchorComponentProps?: {
    [i: string]: any
  }
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
    statusDotVariant,
    href,
    anchorComponentProps
  } = props

  const hasStatusDot = !!statusDotVariant && iconSize === IconSize.Large
  const showTooltip = tooltipText && !isDisabled

  const iconButtonBase = (
    <StyledIconButton
      size={size}
      onClick={href ? undefined : onClick}
      variant={variant}
      margins={margins}
      isSelected={isSelected}
      isHovered={isHovered}
      isDisabled={isDisabled}
      type='button'
      {...buttonOverrides}
      data-component-type={showTooltip ? undefined : Props.ComponentType.FontAwesomeIconButton}
      data-component-context={showTooltip ? undefined : componentContext}
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

  const iconButtonWithLink = (
    <Anchor
      href={href}
      anchorComponentProps={anchorComponentProps}
    >
      {iconButtonBase}
    </Anchor>
  )

  const iconButton = href ? iconButtonWithLink : iconButtonBase

  return (
    !showTooltip
    ? iconButton
    : (
       <TooltipPopoverWrapper
         size={size}
         data-component-type={Props.ComponentType.FontAwesomeIconButton}
         data-component-context={componentContext}
       >
         <TooltipPopover
           variant={TooltipPopoverVariant.Dark}
           noHelpCursor
           // tslint:disable-next-line:jsx-no-lambda
           toggleComponent={({ openMenu, closeMenu, toggleComponentRef, ariaProps }: ITooltipPopoverToggleComponentProps) => (
             <div
               onMouseEnter={openMenu}
               onMouseLeave={closeMenu}
               ref={toggleComponentRef}
               {...ariaProps}
               style={{borderRadius: '50%'}}
             >
               {iconButton}
             </div>
           )}
         >
           {tooltipText}
         </TooltipPopover>
       </TooltipPopoverWrapper>
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
