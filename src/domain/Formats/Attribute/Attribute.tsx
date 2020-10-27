import React from 'react'

import { Props, Variables } from '../../../common'
import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'
import { FontAwesomeIconValue } from '../../Icons/Icon/FontAwesomeIconTypes'
import { ITooltipPopoverToggleComponentProps, TooltipPopover } from '../../Popovers/TooltipPopover'
import { Text } from '../../Typographies'
import { AttributeContentWrapper, FontAwesomeIconWrapper, StyledAttribute } from './style'

enum Variant {
  True = 'true',
  False = 'false',
  Optional = 'optional'
}

interface IVariantOption {
  iconColor: Variables.Color
  labelColor?: Variables.Color
}

const variantOptions: {[K in Variant]: IVariantOption} = {
  [Variant.True]: {
    iconColor: Variables.Color.n600,
    labelColor: Variables.Color.n600
  },
  [Variant.False]: {
    iconColor: Variables.Color.n400
  },
  [Variant.Optional]: {
    iconColor: Variables.Color.n400,
    labelColor: Variables.Color.n500
  }
}

interface IAttributeProps {
  /** The data-component-context */
  componentContext?: string
  /** The margins around the component */
  margins?: Props.IMargins
  variant: Variant
  isCollapsed?: boolean
  primaryLabel: string
  secondaryLabel?: string
  /** Name of the icon */
  icon: FontAwesomeIconValue
  /** The alternative font awesome icon versions */
  iconType: 'solid' | 'regular' | 'light' | 'duotone'
}

const Attribute: React.FC<IAttributeProps> & { Variant: typeof Variant} = ({ variant, iconType, margins, componentContext, isCollapsed = false, primaryLabel, secondaryLabel, icon}) => {
  if (variant === Variant.False) {
    return null
  }

  const toggleComponent = ({ openMenu, closeMenu, toggleComponentRef, ariaProps }: ITooltipPopoverToggleComponentProps) => (
    <span
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
      ref={toggleComponentRef}
      {...ariaProps}
    >
      <FontAwesomeIcon
        type={iconType}
        icon={icon}
        color={variantOptions[variant].iconColor}
      />
    </span>
  )

  return (
    <StyledAttribute
      data-component-type={Props.ComponentType.Attribute}
      data-component-context={componentContext}
      margins={margins}
      isCollapsed={isCollapsed}
    >
      {
        isCollapsed ? (
          <TooltipPopover
            variant={TooltipPopover.Variant.Dark}
            toggleComponent={toggleComponent}
          >
            {primaryLabel}
            <br/>
            {secondaryLabel}
          </TooltipPopover>

        ) : (
          <>
            <AttributeContentWrapper>
              <FontAwesomeIconWrapper>
                <FontAwesomeIcon
                  type={iconType}
                  icon={icon}
                  color={variantOptions[variant].iconColor}
                />
              </FontAwesomeIconWrapper>
              <Text
                isInline={false}
                type={Props.TypographyType.XSmall}
                color={variantOptions[variant].labelColor}
              >
                {primaryLabel}
              </Text>
            </AttributeContentWrapper>
            {
              secondaryLabel && (
                <Text
                  isInline={false}
                  margins={{ left: Variables.Spacing.sMedium + Variables.Spacing.sXSmall, top: -Variables.Spacing.s3XSmall }}
                  type={Props.TypographyType.XSmall}
                  color={Variables.Color.n500}
                >
                  {secondaryLabel}
                </Text>
              )
            }
          </>
        )
      }
    </StyledAttribute>
  )
}

Attribute.Variant = Variant

export {
  Attribute
}
