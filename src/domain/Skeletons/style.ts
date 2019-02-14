import styled, { keyframes } from 'styled-components'

import { Variables } from '../../common'

const progress = keyframes`
  0% {
    opacity: .45;
  }

  to {
    opacity: .9;
  }
`

export const SkeletonWrapper = styled.span`
  animation: ${progress} .8s linear infinite alternate;
  backface-visibility: hidden;
  will-change: opacity;
  background-color: ${Variables.Color.n300};
  border: 1px solid ${Variables.Color.n300};
  display: inline-flex;
`
