import styled, { css } from 'styled-components'

interface StyledIconProps {
  color?: string
}

interface IBadgeWrapper {
  size?: 1 | 2 | 3 | 4 | 5
}

const BadgeWrapper = styled.span`
  position: absolute;

  ${(props: IBadgeWrapper) => {
    switch (props.size) {
      case 3:
        return `
          margin-top: -8px;
          margin-left: -20px;
        `
      case 4:
        return `
          margin-top: -4px;
          margin-left: -22px;
        `
      case 5:
        return `
          margin-top: -5px;
          margin-left: -30px;
        `
    }
  }}
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
