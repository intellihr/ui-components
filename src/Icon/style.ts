import styled, { css } from 'styled-components'

export interface StyledIconProps {
  color?: string
}

export const StyledIcon = styled.span`
  ${(props: StyledIconProps) => props.color && css`
    color: ${props.color};  
  `}
  
  &.icon-small {
    bottom: 2px;
    font-size: xx-small;
    position: relative;
  }
`
