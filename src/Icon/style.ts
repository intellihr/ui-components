import styled, { css } from 'styled-components'

interface StyledIconProps {
  color?: string
  customSize?: number
  tSize?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
}

interface IBadgeWrapper {
  tSize?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
}

const BadgeWrapper = styled.span`
  position: absolute;
  
  ${(props: IBadgeWrapper) => {
    switch (props.tSize) {
      case 'l':
        return `
          margin-top: -10px;
          margin-left: -10px;
        `
      case 'xl':
        return `
          margin-top: -9px;
          margin-left: -15px;
        `
      case 'xxl':
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
      case 'xs':
        return `
          font-size: .75rem; // 12px
       `
      case 's':
        return `
          font-size: .85rem; // 14px
        `
      case 'm':
        return `
          font-size: 1rem; // 16px
        `
      case 'l':
        return `
          font-size: 1.5rem; // 24px
        `
      case 'xl':
        return `
          font-size: 2rem; // 32px
        `
      case 'xxl':
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
