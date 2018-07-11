import styled, { css } from 'styled-components'

interface IBadgeWrapper {
  backgroundColor?: string
  color?: string
  size?: 'small' | 'medium' | 'large'
}

const BadgeWrapper = styled.span`
  ${(props: IBadgeWrapper) => props.backgroundColor && css`
    background-color: ${props.backgroundColor};  
  `}
  
  ${(props: IBadgeWrapper) => props.color && css`
    color: ${props.color};
  `}
  
  ${(props: IBadgeWrapper) => {
    switch (props.size) {
      case 'small':
        return `
          &, .fa {
            font-size: 12px;
            width: 20px;
            height: 20px;
            line-height: 20px;
          }
        `
      case 'medium':
        return `
          &, .fa {
            font-size: 15px;
            width: 24px;
            height: 24px;
            line-height: 24px;
          }
        `
      case 'large':
        return `
          &, .fa {
            font-size: 21px;
            width: 30px;
            height: 30px;
            line-height: 30px;
          }
        `
    }
  }}
  
  box-shadow: 0 2px 2px rgba(0,0,0,0.24);
  border: 1px solid $neutral-base;
  border-radius: 50%;
  color: $neutral-text;
  display: inline-block;
  font-weight: 600;
  text-align: center;
  
  .refresh-icon {
    background-color: $main-background;
    color: $primary-base;
  }
`

export {
  BadgeWrapper
}
