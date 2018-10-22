import styled, { css } from 'styled-components'
import { Text } from '../Text'

interface ICountryCodeWrapperProps {
  showFlag: boolean
}

const CountryCodeWrapper = styled(Text)`
  
  margin-right: 4px;
  
  ${(props: ICountryCodeWrapperProps) => props.showFlag && css`
     margin-left: 8px;
  `}

}}
`

export {
  CountryCodeWrapper
}
