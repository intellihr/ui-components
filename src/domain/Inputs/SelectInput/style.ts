import styled, { css } from 'styled-components'

import { Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

const StyledSelectInputWrapper = styled.div`
  ${(props) => (
    props.margins
      ? styleForMargins(props.margins)
      : css`
          .Select-control {
            margin-bottom: ${Variables.Spacing.sMedium}px;
          }
        `
  )
}
`

export {
  StyledSelectInputWrapper
}
