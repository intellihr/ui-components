import React from 'react'
import styled from 'styled-components'

import { Props } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

const MarginButton = styled.button<{margins?: Props.IMargins}>`
   ${(props: {margins?: Props.IMargins}) => styleForMargins(props.margins)}
`

export {
  MarginButton
}
