import styled, { css } from 'styled-components'

type tSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'

interface StyledIconProps {
  color?: string
  customSize?: number
  tSize?: tSize
}

interface IBadgeWrapper {
  tSize?: tSize
}

const BadgeWrapper = styled.span`
  position: absolute;
  
  ${(props: IBadgeWrapper) => {
    switch (props.tSize) {
      case 'large':
        return `
          margin-top: -10px;
          margin-left: -10px;
        `
      case 'xlarge':
        return `
          margin-top: -9px;
          margin-left: -15px;
        `
      case 'xxlarge':
        return `
          margin-top: -9px;
          margin-left: -22px;
        `
    }
  }}
`

const StyledIcon = styled.i`
  ${(props: StyledIconProps) => props.color && css`
    color: ${props.color};  
  `}
  
  ${(props: StyledIconProps) => props.customSize && css`
    font-size: ${props.customSize}rem;  
  `}
  
  ${(props: StyledIconProps) => {
    switch (props.tSize) {
      case 'xsmall':
        return `
          font-size: .75rem; // 12px
        `
      case 'small':
        return `
          font-size: .85rem; // 14px
        `
      case 'medium':
        return `
          font-size: 1rem; // 16px
        `
      case 'large':
        return `
          font-size: 1.5rem; // 24px
        `
      case 'xlarge':
        return `
          font-size: 2rem; // 32px
        `
      case 'xxlarge':
        return `
          font-size: 3rem; // 48px
        `
    }
  }}

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
