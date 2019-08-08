import styled, { css } from 'styled-components'

import { Props, Utils } from '../../../common'

const StyledShowForSizes = styled.div<Props.IShowForSizes>`
  ${(props) => styleForShowForSizes(props)}
`

function styleForShowForSizes (sizes?: Props.IShowForSizes) {
  if (sizes) {
    return css`
      ${sizes.upper && css`
        ${Utils.mediaQueryBetweenSizes({minPx: sizes.upper})} {
          display: none;
        }
      `}

      ${sizes.lower && css`
        ${Utils.mediaQueryBetweenSizes({maxPx: sizes.lower})} {
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
