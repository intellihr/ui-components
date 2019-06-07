import styled, { css, keyframes } from 'styled-components'

import { Variables } from '../../../common'

export interface IExpandComponentWrapperProps {
  isExpanded: boolean
}

export interface ICardWrapperProps {
  isExpanded: boolean,
  hasHoverStyle: boolean
}

export interface IStyleToggleButtonProps {
  isExpanded: boolean,
  hasParentHoverStyle: boolean
}

const CardWrapper = styled.div`
  height: auto;
  margin-bottom: 8px;
  padding: ${Variables.Spacing.sMedium}px ${Variables.Spacing.sMedium}px ${Variables.Spacing.sMedium}px ${Variables.Spacing.sMedium}px
  background-color: ${Variables.Color.n100};
  border: 1px solid ${Variables.Color.n250};
  border-radius: ${Variables.Style.borderRadius}px;
  transition: height .5s;

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

  ${(props: IStyleToggleButtonProps) => props.isExpanded && css`
      transform: rotate(180deg);
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
  display: none;
  animation-name: ${AnimateOut};
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
  animation-delay: 0s;

  ${(props: IExpandComponentWrapperProps) => props.isExpanded && css`
      display: block;
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
  StyleToggleButton
}
