import styled, { css } from 'styled-components'
import { Variables } from '../../../../common'

export interface IVerticalStackStyleProps {
  /** how much padding given between each stack item on mobile. */
  mobilePadding: number,
  /** how much padding given between each stack item on desktop. */
  desktopPadding: number
}

const StyledVerticalStack = styled.div`
  display: flex;
  flex-direction: column; 
`

const StyledVerticalStackItem = styled.div<IVerticalStackStyleProps>`
 ${(props: IVerticalStackStyleProps) => css`   
    :first-child {
      padding-top: 0;
    }
    
    :last-child {
      padding-bottom: 0;
    }
    
    @media only screen and (max-width: ${Variables.Breakpoint.breakpointTablet - 1}px) {
      padding: ${props.mobilePadding/2}px 0px;
    }
    
    @media only screen and (min-width: ${Variables.Breakpoint.breakpointTablet}px) {
      padding: ${props.desktopPadding/2}px 0px;
    }
  `}
`

export {
  StyledVerticalStack,
  StyledVerticalStackItem
}
