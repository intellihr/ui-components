import React from 'react'
import styled from 'styled-components'

import { Props } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

const MarginCallout = styled.button<React.HTMLProps<HTMLDivElement> & Props.IMarginProps>`
   ${(props: Props.IMarginProps) => {
  console.log(props.margins)
  console.log(styleForMargins(props.margins))
  return styleForMargins(props.margins)
}}
`

export {
  MarginCallout
}
