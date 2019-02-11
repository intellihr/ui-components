import styled from 'styled-components'
import { Variables } from '../../../common'

export interface IExampleLayoutProps {
  size: Variables.Layout
}

const StyledExample = styled.div`
  width: ${(props: IExampleLayoutProps) => props.size}px;
  height: ${(props: IExampleLayoutProps) => props.size}px;
  background-color: ${Variables.Color.g300};
`

export {
  StyledExample
}
