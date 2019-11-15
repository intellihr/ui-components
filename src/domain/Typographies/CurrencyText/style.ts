import styled, { css } from 'styled-components'

import { Props } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'
import { Text } from '../Text'

export interface IStyledCurrencyTextProps {
  flexAlign?: boolean
  margins?: Props.IMargins
  isInline?: boolean
}

const StyledPrefixText = styled(Text)`
  margin-right: 8px;
`

const StyledCurrencyText = styled.span`
  ${(props: IStyledCurrencyTextProps) => {
  if (!props.isInline) {
    return (css`
        display: block;
        `
      )
    }
  }}

  ${(props: IStyledCurrencyTextProps) => styleForMargins(props.margins)}

  ${(props: IStyledCurrencyTextProps) => {
    if (props.flexAlign) {
      return (css`
        display: flex;
        align-items: center;
        `
      )
    }
  }}
`

export {
  StyledPrefixText,
  StyledCurrencyText
}
