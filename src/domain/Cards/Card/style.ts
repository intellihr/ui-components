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
  hasParentHoverStyle: boolean
}

export interface IStyleActionButtonProps {
  hasRightMargin: boolean
}

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`

const CollapsedComponentWrapper = styled.div`
    width: auto;
    flex: 1 1 0%;
`

const CardWrapper = styled.div`
  margin: 0;

  ${(props: ICardWrapperProps) => styleForMargins(props.margins)}}

  padding: ${Variables.Spacing.sMedium}px ${Variables.Spacing.sMedium}px ${Variables.Spacing.sMedium}px ${Variables.Spacing.sMedium}px;
  background-color: ${Variables.Color.n100};
  border: 1px solid ${Variables.Color.n250};
  border-radius: ${Variables.Style.borderRadius}px;

  ${(props: ICardWrapperProps) => props.hasHoverStyle && css`
      cursor: pointer;
      &:hover {
      background-color: ${Variables.Color.n200};
      transition: background-color .25s ease-out;
    }
  `}
`

const ButtonStyle = css`
  outline: none;
  color: ${Variables.Color.n600};
  width: 28px;
  height: 28px;
  border-radius: 50%;

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

  ${(props: IStyleToggleButtonProps) => props.hasParentHoverStyle && css`
    ${CardWrapper}:hover & {
      color: ${Variables.Color.n800};
      background-color: ${Variables.Color.n300};
    }
  `}
`

const StyleActionButton = styled.button`
  ${ButtonStyle};

  &:hover ${StyleToggleButton} {
    background-color: transparent;
    color: ${Variables.Color.n600};
  }

  &:hover ${CardWrapper} {
    background-color: ${Variables.Color.n100};
  }

  ${(props: IStyleActionButtonProps) => props.hasRightMargin && css`

      margin-right: ${Variables.Spacing.sMedium}px;
  `}
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

const ExpandComponentWrapper = styled.div`
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
      max-height: 999px;
      animation-name: ${AnimateIn};
      animation-duration: 0.6s;
      animation-iteration-count: 1;
      animation-direction: normal;
      animation-timing-function: ease-in;
      animation-fill-mode: both;
      animation-delay: 0s;
  `}
`

export {
  CardWrapper,
  ExpandComponentWrapper,
  StyleActionButton,
  StyleToggleButton,
  ContentWrapper,
  CollapsedComponentWrapper
}
