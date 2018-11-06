import styled, { css } from 'styled-components'
import { Variables } from '../../../common'

export interface IFormattedCurrencyPrefixWrapperProps {
  prefixType?: 'xsmall' | 'body' | 'display'
}

const FormattedCurrencyPrefixWrapper = styled.span`
  margin-right: 8px;

  ${(props: IFormattedCurrencyPrefixWrapperProps) => {
  if (props.prefixType) {
    switch (props.prefixType) {
      case 'xsmall':
        return css`
            font-size: ${Variables.FontSize.fzXSmall}px;
            line-height: ${Variables.LineHeight.lhXSmall}px;
            font-weight: ${Variables.FontWeight.fwMedium};
        `
      case 'body':
        return css`
            font-size: ${Variables.FontSize.fzBody}px;
            line-height: ${Variables.LineHeight.lhBody}px;
            font-weight: ${Variables.FontWeight.fwMedium};
        `
      case 'display':
        return css`
            font-size: ${Variables.FontSize.fzDisplay}px;
            line-height: ${Variables.LineHeight.lhDisplay}px;
            font-weight: ${Variables.FontWeight.fwMedium};
            position: relative;
            margin-right: .25rem;
            bottom: .25rem;
        `
    }
  }
}}
`

export {
  FormattedCurrencyPrefixWrapper
}
