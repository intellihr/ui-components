import React from 'react'
import styled, {css} from 'styled-components'

import { Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

const StyledProgressTracker = styled.div`
  display: flex;
  ${({ isMobile }) => isMobile && css`
    align-items: baseline;
  `}
  ${({ margins }) => styleForMargins(margins)}
`

const StyledProgressStepItemDivider = styled.div`
  flex: 1 1 0%;
  width: auto;
  width: 100%;
  height: ${Variables.Spacing.s3XSmall}px;
  background-color: ${Variables.Color.n300};
  margin: ${Variables.Spacing.sMedium}px;
`

export {
  StyledProgressTracker,
  StyledProgressStepItemDivider
}
