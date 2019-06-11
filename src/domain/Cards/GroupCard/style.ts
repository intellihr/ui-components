import styled, { css, keyframes } from 'styled-components'

import { Props, Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

export interface IExpandComponentWrapperProps {
  isExpanded: boolean
}

export interface ICardWrapperProps {
  isExpanded: boolean,
  hasHoverStyle: boolean,
  margins?: Props.IMargins
}

export interface IStyleToggleButtonProps {
  isExpanded: boolean,
}

export interface IGroupCardWrapperProps {
  margins?: Props.IMargins
}

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`

const HeadingContentWrapper = styled.div`
    width: auto;
    flex: 1 1 0%;
`

const MainContentWrapper = styled.div`
    width: auto;
    flex: 1 1 0%;
`

const GroupCardWrapper = styled.div`
  margin: 0;
  ${(props: IGroupCardWrapperProps) => styleForMargins(props.margins)}}
`

const GroupWrapper = styled.div`
  margin: 0;
  padding: ${Variables.Spacing.sMedium}px ${Variables.Spacing.sMedium}px ${Variables.Spacing.sMedium}px ${Variables.Spacing.sMedium}px;
  background-color: ${Variables.Color.n150};
  border: 1px solid ${Variables.Color.n250};
  border-radius: ${Variables.Style.borderRadius}px;

  ${(props: ICardWrapperProps) => props.hasHoverStyle && css`
      cursor: pointer;
      &:hover {
      background-color: ${Variables.Color.n200};
      transition: background-color .25s ease-out;
    }
  `}

  ${(props: ICardWrapperProps) => props.isExpanded && css`
      border-radius: ${Variables.Style.borderRadius}px ${Variables.Style.borderRadius}px 0 0;
  `}
`
const ChevronIconWrapper = styled.span`
  top: -1px;
`
const ButtonStyle = css`
  outline: none;
  color: ${Variables.Color.n600};
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    color: ${Variables.Color.n800};
    background-color: ${Variables.Color.n300};
    transition: all .25s ease-out;
  }
`

const StyleToggleButton = styled.button`
  ${ButtonStyle};
  transition: all .25s ease-out;

  ${(props: IStyleToggleButtonProps) => props.isExpanded && css`
      transform: rotate(180deg);
      transition: all .25s ease-out;
  `}

  ${GroupWrapper}:hover & {
    color: ${Variables.Color.n800};
    background-color: ${Variables.Color.n300};
    transition: all .25s ease-out;
  }
`

const StyleActionButton = styled.button`
  ${ButtonStyle};
`

const AnimateIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-${Variables.Spacing.s3XSmall});
  }

  50% {
    transform: translateY(0);
  }

  100% {
    opacity: 1;
  }
`

const AnimateOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  50% {
    transform: translateY(-${Variables.Spacing.s3XSmall});
  }

  100% {
    opacity: 0;
  }
`

const BodyContentsWrapper = styled.div`
  padding: 0;
  border: 1px solid ${Variables.Color.n250};
  border-top: 0;
  border-radius: 0 0 ${Variables.Style.borderRadius}px ${Variables.Style.borderRadius}px;
  height: auto;
  max-height: 0;
  overflow: hidden;
  transition: max-height .5s;
  max-height: 0;
  animation-name: ${AnimateOut};
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
  animation-delay: 0s;

  ${(props: IExpandComponentWrapperProps) => props.isExpanded && css`
      max-height: 999px; // Magic number to keep animation working when expanding
      animation-name: ${AnimateIn};
      animation-duration: 0.6s;
      animation-iteration-count: 1;
      animation-direction: normal;
      animation-timing-function: ease-in;
      animation-fill-mode: both;
      animation-delay: 0s;
  `}
`

const BodyContentsDetailsWrapper = styled.div`
  padding: ${Variables.Spacing.sMedium}px ${Variables.Spacing.sMedium}px ${Variables.Spacing.sMedium}px ${Variables.Spacing.sMedium}px;
`

const BodyContentWrapper = styled.div`
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
  GroupWrapper,
  BodyContentsWrapper,
  StyleActionButton,
  StyleToggleButton,
  ContentWrapper,
  HeadingContentWrapper,
  ChevronIconWrapper,
  MainContentWrapper,
  GroupCardWrapper,
  BodyContentsDetailsWrapper,
  BodyContentWrapper
}
