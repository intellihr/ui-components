import styled, {css} from 'styled-components'

export interface ICurrencyWrapperProps {
  prefixType?: 'small' | 'medium' | 'large'
}

export const CurrencyWrapper = styled.span`

  ${(props: ICurrencyWrapperProps) => {
  if (props.prefixType) {
    switch (props.prefixType) {
      case 'small':
        return css`
          .currency-prefix {
            font-size: 12px;
            line-height: 18px;
            font-weight: 600;
          }
        `
      case 'medium':
        return css`
          .currency-prefix {
            font-size: 16px;
            line-height: 24px;
            font-weight: 600;
          }
        `
      case 'large':
        return css`
          .currency-prefix {
            font-size: 24px;
            line-height: 32px;
            font-weight: 600;
            position: relative;
            margin-right: .25rem;
            bottom: .25rem;
          }
        `
    }
  }
  
}}
`

