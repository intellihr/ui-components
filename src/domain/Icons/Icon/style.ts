import styled, { css } from 'styled-components'

type size = 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'

interface IStyledIconProps {
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
        return css`
          margin-top: -10px;
          margin-left: -14px;
        `
      case 'xlarge':
        return css`
          margin-top: -9px;
          margin-left: -15px;
        `
      case 'xxlarge':
        return css`
          margin-top: -9px;
          margin-left: -22px;
        `
    }
  }}
`

const StyledIcon = styled.i`
   width: 1.28571em;
 
  ${(props: IStyledIconProps) => props.color && css`
    color: ${props.color};
  `}

  &.icon {
    text-align: center;
  
  ${(props: IStyledIconProps) => {
    if (props.customSize) {
      return css`
        font-size: ${props.customSize}rem;
      `
    }

    switch (props.size) {
      case 'xxsmall':
        return css`
          font-size: .55rem; // 8.8px
        `
      case 'xsmall':
        return css`
          font-size: .75rem; // 12px
        `
      case 'small':
        return css`
          font-size: .85rem; // 14px
        `
      case 'medium':
        return css`
          font-size: 1rem; // 16px
        `
      case 'large':
        return css`
          font-size: 1.3125rem; // 21px
        `
      case 'xlarge':
        return css`
          font-size: 2rem; // 32px
        `
      case 'xxlarge':
        return css`
          font-size: 3rem; // 48px
        `
    }
  }}
  }
`

export {
  BadgeWrapper,
  StyledIcon,
  IStyledIconProps
}
