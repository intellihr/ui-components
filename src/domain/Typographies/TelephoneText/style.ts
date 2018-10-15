import styled, { css } from 'styled-components'
import { Text } from '../Text'

interface ICountryCodeWrapperProps {
  isFlagDisplayed: boolean
}

const CountryCodeWrapper = styled(Text)`
  
  margin-right: 4px;
  
  ${(props: ICountryCodeWrapperProps) => props.isFlagDisplayed && css`
     margin-left: 8px;
  `}

}}
`

const DialCodeWrapper = styled(Text)`
  margin-right: 4px;
`
export {
  CountryCodeWrapper,
  DialCodeWrapper
}
