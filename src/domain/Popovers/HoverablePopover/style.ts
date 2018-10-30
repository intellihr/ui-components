import styled, { css } from 'styled-components'
import { Variables } from '../../../common'

interface IStyledPopoverProps {
  width?: number
}

const StyledTooltipContent = styled.div`
 background-color: ${Variables.Color.n100};
  border: 1px solid ${Variables.Color.n400};
  border-radius: ${Variables.Style.borderRadius};
  box-shadow: 0 2px 4px rgba(38, 45, 51, 0.1);
  padding: 16px; 
  
  ${(props: IStyledPopoverProps) => props.width && css`width: ${props.width}px`}
`

export {
  StyledTooltipContent
}
