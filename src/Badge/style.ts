import styled, { css } from 'styled-components'

interface IBadgeWrapper {
  backgroundColor?: string,
  color?: string,
  tSize?: 's' | 'm' | 'l'
}

const BadgeWrapper = styled.span`
  ${(props: IBadgeWrapper) => props.backgroundColor && css`
    background-color: ${props.backgroundColor};  
  `}
  
  ${(props: IBadgeWrapper) => props.color && css`
    color: ${props.color};
  `}
  
  ${(props: IBadgeWrapper) => {
    switch (props.tSize) {
      case 's':
        return `
          width: 20px;
          height: 20px;
          line-height: 20px;
          font-size: 12px
        `
      case 'm':
        return `
          width: 30px;
          height: 30px;
          line-height: 30px;
          font-size: 18px
        `
      case 'l':
        return `
          width: 45px;
          height: 45px;
          line-height: 45px;
          font-size: 24px
        `
    }
  }}
  
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
