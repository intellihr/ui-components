import styled, { css } from 'styled-components'

type size = 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'

interface StyledIconProps {
  color?: string
  customSize?: number
  size?: size
}

interface IBadgeWrapper {
  size?: size
}

const BadgeWrapper = styled.span`
  position: absolute;
  
  ${(props: IBadgeWrapper) => {
    switch (props.size) {
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
  
  &.fa {
    margin-right: 3px;
  ${(props: StyledIconProps) => {
    if (props.customSize) {
      return `
        font-size: ${props.customSize}rem;
      `
    }

    switch (props.size) {
      case 'xxsmall':
        return `
          font-size: .55rem; // 8.8px
        `
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
          font-size: 1.3125rem; // 21px
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
  }
`

export {
  BadgeWrapper,
  StyledIcon,
  StyledIconProps
}
