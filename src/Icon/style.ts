import styled, { css } from 'styled-components'

interface StyledIconProps {
  color?: string
}

const BadgeWrapper = styled.span`
  position: absolute;
  margin-top: -10px;
  margin-left: -15px;
  
  .refresh-icon {
    background-color: $main-background;
    border-radius: 16px;
    color: $primary-base;
    font-size: 16px;
    height: 16px;
    margin: 0;
    position: relative;
    right: 2px;
    top: 2px;
    width: 16px;
  }
`

const StyledIcon = styled.i`
  ${(props: StyledIconProps) => props.color && css`
    color: ${props.color};  
  `}
  
  &.icon-small {
    bottom: 2px;
    font-size: xx-small;
    position: relative;
  }
`

export {
  BadgeWrapper,
  StyledIcon,
  StyledIconProps
}
