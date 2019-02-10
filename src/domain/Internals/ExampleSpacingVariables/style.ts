import styled from 'styled-components'
import { Variables } from '../../../common'

export interface IExampleSpacingProps {
  size: Variables.Spacing
}

const StyledExample = styled.div`
  width: ${(props: IExampleSpacingProps) => props.size}px;
  height: ${(props: IExampleSpacingProps) => props.size}px;
  background-color: ${Variables.Color.i300};
`

export {
  StyledExample
}
