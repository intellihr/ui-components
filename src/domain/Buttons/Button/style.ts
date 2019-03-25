import React from 'react'
import styled from 'styled-components'

import { Props } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

const MarginButton = styled.button<React.HTMLProps<HTMLButtonElement> & Props.IMarginProps>`
   ${(props: Props.IMarginProps) => {
     console.log(props.margins)
     console.log(styleForMargins(props.margins))
     return styleForMargins(props.margins)
   }}
`

export {
  MarginButton
}
