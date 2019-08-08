import styled, { css } from 'styled-components'

import { Props } from '../../../common'

const StyledShowForSizes = styled.div<Props.IShowForSizes>`
  ${(props) => styleForShowForSizes(props)}
`

function styleForShowForSizes (sizes?: Props.IShowForSizes) {
  if (sizes) {
    return css`
      ${sizes.upper && css`
        @media only screen and (min-width: ${sizes.upper - 1}px) {
          display: none;
        }
      `}

      ${sizes.lower && css`
        @media only screen and (max-width: ${sizes.lower}px) {
          display: none;
        }
      `}
    `
  }

  return null
}

export {
  StyledShowForSizes,
  styleForShowForSizes
}
