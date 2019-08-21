import styled, { css } from 'styled-components'

import { Props, Utils, Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'
import { cardButtonStyle, cardCollpaseAnimation, cardExpandAnimation } from '../services/style'

import {
  StyledFlexContent
} from '../services/style'

interface IStyledExtraContentProps {
  isExpanded: boolean
}

interface IStyledCardProps {
  margins?: Props.IMargins
}

interface IStyledCardToggleButtonProps {
  isExpanded: boolean,
  hasParentHoverStyle: boolean
}

interface IStyleActionButtonProps {
  hasRightMargin: boolean
}

interface IStyledCardHeader {
  isExpanded: boolean
  hasHoverStyle: boolean
}

const StyledCard = styled.div`
  margin: 0;

  ${(props: IStyledCardProps) => styleForMargins(props.margins)}

  background-color: ${Variables.Color.n100};
`
const StyledCardHeader = styled(StyledFlexContent)`
  padding: ${Variables.Spacing.sMedium}px;
  border: 1px solid ${Variables.Color.n250};
  border-radius: ${Variables.Style.borderRadius}px;

  ${(props: IStyledCardHeader) => props.hasHoverStyle && css`
      cursor: pointer;

      &:hover {
        background-color: ${Variables.Color.n200};
        transition: background-color .25s ease-out;
      }
  `}

  ${(props: IStyledCardHeader) => props.isExpanded && css`
      border-radius: ${Variables.Style.borderRadius}px ${Variables.Style.borderRadius}px 0 0;
  `}
`

const StyledCardToggleButton = styled.button`
  ${cardButtonStyle};
  transition: all .25s ease-out;

  ${(props: IStyledCardToggleButtonProps) => props.isExpanded && css`
      transform: rotate(180deg);
      transition: all .25s ease-out;
  `}

  ${(props: IStyledCardToggleButtonProps) => props.hasParentHoverStyle && css`
    ${StyledCard}:hover & {
      color: ${Variables.Color.n800};
      background-color: ${Variables.Color.n300};
    }
  `}

  ${Utils.mediaQueryBetweenSizes({ maxPx: Variables.Breakpoint.breakpointTablet })} {
    display: none;
  }
`

const StyledActionButton = styled.button<IStyleActionButtonProps>`
  ${cardButtonStyle};

  &:hover ${StyledCardToggleButton} {
    background-color: transparent;
    color: ${Variables.Color.n600};
  }

  &:hover ${StyledCard} {
    background-color: ${Variables.Color.n100};
  }

  ${(props: IStyleActionButtonProps) => props.hasRightMargin && css`

      margin-right: ${Variables.Spacing.sMedium}px;
  `}

  ${Utils.mediaQueryBetweenSizes({ maxPx: Variables.Breakpoint.breakpointTablet })} {
    margin-right: 0
  }
`

const StyledExtraContent = styled.div`
  padding: 0;
  height: auto;
  max-height: 0;
  overflow: hidden;
  transition: max-height .5s;
  ${cardCollpaseAnimation}
  border: 1px solid ${Variables.Color.n250};
  border-top: 0;
  border-radius: 0 0 ${Variables.Style.borderRadius}px ${Variables.Style.borderRadius}px;
  background-color: ${Variables.Color.n150};

  ${(props: IStyledExtraContentProps) => props.isExpanded && css`
      max-height: 999px; // Magic number to keep animation working when expanding
      ${cardExpandAnimation}
  `}
`

const StyledBodyContents = styled.div`
  padding: ${Variables.Spacing.sMedium}px;
`

export {
  StyledBodyContents,
  StyledCard,
  StyledCardHeader,
  StyledExtraContent,
  StyledActionButton,
  StyledCardToggleButton
}
