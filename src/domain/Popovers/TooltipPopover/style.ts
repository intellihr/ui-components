import styled, { css } from 'styled-components'
import { Variables } from '../../../common'

interface IStyledPopoverProps {
  width?: number
}

const StyledTooltipContent = styled.div`
  background-color: ${Variables.Color.n100};
  border-radius: ${Variables.Style.borderRadius}px;
  border: 1px solid ${Variables.Color.n400};
  box-shadow: 0 2px 4px rgba(38, 45, 51, 0.1);
  hyphens: auto;
  overflow-wrap: break-word;
  padding: 16px; 
  width: max-content;
  word-break: break-word;
  word-wrap: break-word;
  
  ${(props: IStyledPopoverProps) => props.width && css`max-width: ${props.width}px`}
`

export {
  StyledTooltipContent
}
