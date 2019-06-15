import styled, { css } from 'styled-components'

import { Props, Utils, Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'
import { cardButtonStyle, cardCollpaseAnimation, cardExpandAnimation } from '../services/style'

interface IStyledGroupExtraCardProps {
  isExpanded: boolean
}

interface IStyledGroupMainCardProps {
  isExpanded: boolean,
  hasHoverStyle: boolean,
  margins?: Props.IMargins
}

interface IStyledGroupCardToggleButtonProps {
  isExpanded: boolean
}

interface IStyledGroupCardProps {
  margins?: Props.IMargins
}

const StyledGroupCard = styled.div`
  margin: 0;
  ${(props: IStyledGroupCardProps) => styleForMargins(props.margins)}}
`

const StyledGroupMainCard = styled.div`
  margin: 0;
  padding: ${Variables.Spacing.sMedium}px ${Variables.Spacing.sMedium}px ${Variables.Spacing.sMedium}px ${Variables.Spacing.sMedium}px;
  background-color: ${Variables.Color.n150};
  border: 1px solid ${Variables.Color.n250};
  border-radius: ${Variables.Style.borderRadius}px;

  ${(props: IStyledGroupMainCardProps) => props.hasHoverStyle && css`
      cursor: pointer;
      &:hover {
      background-color: ${Variables.Color.n200};
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
    background-color: ${Variables.Color.n300};
    transition: all .25s ease-out;
  }

  ${Utils.mediaQueryBetweenSizes({ maxPx: Variables.Breakpoint.breakpointTablet })} {
    display: none;
  }
`

const StyledBodyActionButton = styled.button`
  ${cardButtonStyle};
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
  ${cardCollpaseAnimation}

  ${(props: IStyledGroupExtraCardProps) => props.isExpanded && css`
      max-height: 9999px; // Magic number to keep animation working when expanding
      ${cardExpandAnimation}
  `}
`

const StyledBodyContents = styled.div`
  padding: ${Variables.Spacing.sMedium}px ${Variables.Spacing.sMedium}px ${Variables.Spacing.sMedium}px ${Variables.Spacing.sMedium}px;
`

const StyledBodyContent = styled.div`
  border-bottom: 1px solid ${Variables.Color.n250};
  padding: ${Variables.Spacing.sLarge}px 0;

  :first-child {
    padding-top: 0;
  }

  :last-child {
    border-bottom: 0;
    padding-bottom: ${Variables.Spacing.sXSmall}px;
  }
`
export {
  StyledGroupMainCard,
  StyledGroupExtraCard,
  StyledBodyActionButton,
  StyledGroupCardToggleButton,
  StyledGroupCard,
  StyledBodyContents,
  StyledBodyContent
}
