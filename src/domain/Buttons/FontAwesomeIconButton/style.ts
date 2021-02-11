import styled, { css } from 'styled-components'

import { Props, Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'
import {IconButtonVariants, StatusDotVariants, statusDotVariantsOptions, variantOptions} from './colors'
import {
  FontAwesomeIconButton,
  FontAwesomeIconButtonSize
} from './FontAwesomeIconButton'

interface IStyledIconButton {
  variant: IconButtonVariants
  isSelected: boolean
  isHovered: boolean
  isDisabled: boolean
  margins?: Props.IMargins
  size: FontAwesomeIconButtonSize
}

interface ITooltipPopoverWrapper {
  size: FontAwesomeIconButtonSize
}

interface IStyledStatusDot {
  variant: StatusDotVariants
}

console.log(statusDotVariantsOptions)

const StyledStatusDot = styled.span`
  border-radius: 50%;
  position: absolute;
  bottom: ${Variables.Spacing.s2XSmall}px;
  padding: ${Variables.Spacing.s2XSmall}px;
  right: ${Variables.Spacing.s2XSmall}px;
  border: 2px solid ${Variables.Color.n100};
  ${(props: IStyledStatusDot) => css`
    background: ${statusDotVariantsOptions[props.variant]};
  `};
`

const iconButtonHoverStyle = (props: IStyledIconButton) => css`
  color: ${variantOptions[props.variant].hoverIconColor};
  background: ${variantOptions[props.variant].hoverBackground};
  transition: 0.2s ease-out;
`

const TooltipPopoverWrapper = styled.span`
  position: relative;
  display: inline-block;
  width: ${Variables.Spacing.sXLarge}px;
  height: ${Variables.Spacing.sXLarge}px;

  ${(props: ITooltipPopoverWrapper) => props.size === FontAwesomeIconButton.Size.Medium && css`
    width: ${Variables.Spacing.s2XLarge}px;
    height: ${Variables.Spacing.s2XLarge}px;
  `}

  ${(props: ITooltipPopoverWrapper) => props.size === FontAwesomeIconButton.Size.Large && css`
    width: ${Variables.Spacing.s3XLarge}px;
    height: ${Variables.Spacing.s3XLarge}px;
  `}
`

const StyledIconButton = styled.button`
  outline: 0;
  cursor: pointer;
  width: ${Variables.Spacing.sXLarge}px;
  height: ${Variables.Spacing.sXLarge}px;
  border-radius: ${Variables.Spacing.sXLarge}px;
  transition: 0.15s ease-in;
  ${(props: IStyledIconButton) => styleForMargins(props.margins)};
  ${(props: IStyledIconButton) => !props.isDisabled && css`
    color: ${variantOptions[props.variant].iconColor};
    &:hover {
      ${iconButtonHoverStyle}
    }
  `}

  ${(props: IStyledIconButton) => props.isHovered && css`
    ${iconButtonHoverStyle}
  `}

  ${(props: IStyledIconButton) => props.isSelected && css`
    color: ${variantOptions[props.variant].selectedIconColor};
    background: ${variantOptions[props.variant].selectedBackground};
    transition: 0.2s ease-out;
  `}

  ${(props: IStyledIconButton) => props.size === FontAwesomeIconButton.Size.Medium && css`
    width: ${Variables.Spacing.s2XLarge}px;
    height: ${Variables.Spacing.s2XLarge}px;
    border-radius: ${Variables.Spacing.s2XLarge}px;
  `}

  ${(props: IStyledIconButton) => props.size === FontAwesomeIconButton.Size.Large && css`
    width: ${Variables.Spacing.s3XLarge}px;
    height: ${Variables.Spacing.s3XLarge}px;
    border-radius: ${Variables.Spacing.s3XLarge}px;
  `}

  ${(props: IStyledIconButton) => props.isDisabled && css`
    color: ${Variables.Color.n300};
    background: none;
    cursor: not-allowed;
    transition: 0.2s ease-out;
  `}
`

export {
  StyledIconButton,
  TooltipPopoverWrapper,
  StyledStatusDot
}
