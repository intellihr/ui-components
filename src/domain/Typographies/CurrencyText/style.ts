import styled, { css } from 'styled-components'

import { Text } from '../Text'

export interface IStyledCurrencyTextProps {
  flexAlign?: boolean
}

const StyledPrefixText = styled(Text)`
  margin-right: 8px;
`

const StyledCurrencyText = styled.span`
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
