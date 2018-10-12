import styled, { css } from 'styled-components'
import { Text } from '../Text'

interface ICountryCodeWrapperProps {
  isDisplayFlag?: boolean
}

const CountryCodeWrapper = styled(Text)`
  
  margin-right: 4px;
  
  ${(props: ICountryCodeWrapperProps) => {
  if (props.isDisplayFlag) {
    return css`
    margin-left: 8px;
    `
  }
}}
`

const DialCodeWrapper = styled(Text)`
  margin-right: 4px;
`
export {
  CountryCodeWrapper,
  DialCodeWrapper
}
