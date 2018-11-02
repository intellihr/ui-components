import styled, { css } from 'styled-components'
import { Variables } from '../../../common'
import { styleForLineBreakText } from '../../Typographies/services/textStyles'

interface IStyledPopoverProps {
  width?: number
}

const StyledTooltipContent = styled.div`
  background-color: ${Variables.Color.n100};
  border-radius: ${Variables.Style.borderRadius}px;
  border: 1px solid ${Variables.Color.n400};
  box-shadow: 0 2px 4px rgba(38, 45, 51, 0.1);
  padding: 16px; 
  width: max-content;
  
  ${styleForLineBreakText()}
  ${(props: IStyledPopoverProps) => props.width && css`max-width: ${props.width}px`}
`

export {
  StyledTooltipContent
}
