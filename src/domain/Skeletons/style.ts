import { css, keyframes } from 'styled-components'

import { Props, Variables } from '../../common'
import { styleForMargins } from '../Spacers/services/margins'

const progress = keyframes`
  0% {
    opacity: .45;
  }

  to {
    opacity: .9;
  }
`

function styleForSkeletons (margins?: Props.IMargins) {
 return (
   css`
    animation: ${progress} .8s linear infinite alternate;
    backface-visibility: hidden;
    will-change: opacity;
    background-color: ${Variables.Color.n300};
    border: 1px solid ${Variables.Color.n300};
    display: inline-flex;
    ${() => styleForMargins(margins)};
  `
 )
}

export {
  styleForSkeletons
}
