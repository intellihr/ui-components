import styled, { css, keyframes } from 'styled-components'

import { Variables } from '../../../common'
import { Anchor } from '../../Internals'

const StyledFlexContent = styled.div`
  display: flex;
  align-items: center;
`

const StyledAnchor = styled(Anchor)`
  position: absolute;
  width: 100%;
  height: 100%;
  margin-left: -${Variables.Spacing.sMedium}px;
`

const StyledPrimaryContent = styled.div`
  width: auto;
  flex: 1 1 0%;
`

const cardButtonStyle = css`
  outline: none;
  color: ${Variables.Color.n600};
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
`

const ChevronIconWrapper = styled.span`
  top: -1px;
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

const cardExpandAnimation = css`
  animation-name: ${AnimateIn};
  animation-duration: 0.6s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-timing-function: ease-in;
  animation-fill-mode: both;
  animation-delay: 0s;
`

const cardCollpaseAnimation = css`
  animation-name: ${AnimateOut};
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
  animation-delay: 0s;
`

export {
  StyledAnchor,
  StyledFlexContent,
  StyledPrimaryContent,
  cardButtonStyle,
  ChevronIconWrapper,
  cardExpandAnimation,
  cardCollpaseAnimation
}
