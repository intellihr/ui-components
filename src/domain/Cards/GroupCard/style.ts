import styled, { css } from 'styled-components'

import { Props, Utils, Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'
import { colorOptions } from '../services/colors'
import { cardButtonStyle, cardCollpaseAnimation, cardExpandAnimation } from '../services/style'
import { CardColors } from '../Card/Card'

interface IStyleActionButtonProps {
  hasRightMargin: boolean
  color: CardColors
}

interface IStyledGroupExtraCardProps {
  isExpanded: boolean
  color: CardColors
}

interface IStyledGroupMainCardProps {
  isExpanded: boolean
  hasHoverStyle: boolean
  margins?: Props.IMargins
  color: CardColors
}

interface IStyledGroupCardToggleButtonProps {
  isExpanded: boolean
  color: CardColors
}

interface IStyledGroupCardProps {
  margins?: Props.IMargins
  color: CardColors
}

interface IStyledBodyContentProps {
  color: CardColors
}

const StyledGroupCard = styled.div`
  margin: 0;
  ${(props: IStyledGroupCardProps) => styleForMargins(props.margins)}

  background-color: ${(props: IStyledGroupCardProps) => colorOptions[props.color].background};
`

const StyledGroupMainCard = styled.div`
  margin: 0;
  padding: ${Variables.Spacing.sMedium}px;
  border: 1px solid ${(props: IStyledGroupMainCardProps) => colorOptions[props.color].border};
  border-radius: ${Variables.Style.borderRadius}px;

  ${(props: IStyledGroupMainCardProps) => props.hasHoverStyle && css`
      cursor: pointer;

      &:hover {
        background-color: ${colorOptions[props.color].hoverBackground};
        transition: background-color .25s ease-out;
      }
  `}

  ${(props: IStyledGroupMainCardProps) => props.isExpanded && css`
      border-radius: ${Variables.Style.borderRadius}px ${Variables.Style.borderRadius}px 0 0;
  `}
`

const StyledGroupCardToggleButton = styled.button<IStyledGroupCardToggleButtonProps>`
  ${cardButtonStyle};
  transition: all .25s ease-out;

  ${(props: IStyledGroupCardToggleButtonProps) => props.isExpanded && css`
      transform: rotate(180deg);
      transition: all .25s ease-out;
  `}

  ${StyledGroupMainCard}:hover & {
    color: ${Variables.Color.n800};
    background-color: ${(props: IStyledGroupCardToggleButtonProps) => colorOptions[props.color].hoverButtonBackground};
    transition: all .25s ease-out;
  }

  ${Utils.mediaQueryBetweenSizes({ maxPx: Variables.Breakpoint.breakpointTablet })} {
    display: none;
  }
`

const StyledBodyActionButton = styled.button`
  ${cardButtonStyle};

  &:hover {
    background-color: ${(props: IStyleActionButtonProps) => colorOptions[props.color].hoverButtonBackground};
  }

  ${(props: IStyleActionButtonProps) => props.hasRightMargin && css`
      margin-right: ${Variables.Spacing.sMedium}px;
  `}
`

const StyledGroupExtraCard = styled.div`
  padding: 0;
  border: 1px solid ${Variables.Color.n250};
  border-top: 0;
  border-radius: 0 0 ${Variables.Style.borderRadius}px ${Variables.Style.borderRadius}px;
  height: auto;
  max-height: 0;
  overflow: hidden;
  transition: max-height .5s;
  background-color: ${(props: IStyledGroupExtraCardProps) => colorOptions[props.color].extraContentBackground};
  ${cardCollpaseAnimation}

  ${(props: IStyledGroupExtraCardProps) => props.isExpanded && css`
      max-height: 9999px; // Magic number to keep animation working when expanding
      ${cardExpandAnimation}
  `}
`

const StyledBodyContent = styled.div`
  background-color: ${(props: IStyledBodyContentProps) => colorOptions[props.color].background};
  border-bottom: 1px solid ${Variables.Color.n250};
  padding: ${Variables.Spacing.sLarge}px;

  :last-child {
    border-bottom: 0;
  }
`
export {
  StyledGroupMainCard,
  StyledGroupExtraCard,
  StyledBodyActionButton,
  StyledGroupCardToggleButton,
  StyledGroupCard,
  StyledBodyContent
}
