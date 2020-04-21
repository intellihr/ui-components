import styled, {css} from 'styled-components'

import {Props, Variables} from '../../../common'
import {styleForMargins} from '../../Spacers/services/margins'
import {IconButtonVariants, variantOptions} from './colors'

interface IStyledIconButton {
  variant: IconButtonVariants
  isSelected: boolean
  isHovered: boolean
  isDisabled: boolean
  margins?: Props.IMargins
  size: Props.FontAwesomeIconButtonSize
}

const iconButtonHoverStyle = (props: IStyledIconButton) => css`
  color: ${variantOptions[props.variant].hoverIconColor};
  background: ${variantOptions[props.variant].hoverBackground};
  transition: 0.2s ease-out;
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

  ${(props: IStyledIconButton) => props.size === Props.FontAwesomeIconButtonSize.Large && css`
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
  StyledIconButton
}
