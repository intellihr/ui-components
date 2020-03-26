import styled, {css} from 'styled-components'

import {Props, Variables} from '../../../common'
import {styleForMargins} from '../../Spacers/services/margins'
import {IconButtonVariants, variantOptions} from './colors'

interface IStyledIconButton {
  variant: IconButtonVariants
  isSelected: boolean
  margins?: Props.IMargins
}

const StyledIconButton = styled.button`
  ${(props: IStyledIconButton) => styleForMargins(props.margins)};
  ${(props: IStyledIconButton) => css`
    color: ${variantOptions[props.variant].iconColor};
    &:hover {
      color: ${variantOptions[props.variant].hoverIconColor};
      background: ${variantOptions[props.variant].hoverBackground};
      transition: color .25s ease-out, background .25s ease-out;
    }
  `}
  ${(props: IStyledIconButton) => props.isSelected && css`
    color: ${variantOptions[props.variant].selectedIconColor};
    background: ${variantOptions[props.variant].selectedBackground};
  `}
  width: ${Variables.Spacing.sLarge}px;
  height: ${Variables.Spacing.sLarge}px;
  border-radius: ${Variables.Spacing.sLarge}px;
`

export {
  StyledIconButton
}
