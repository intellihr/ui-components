import styled, { css } from 'styled-components'

interface IBadgeWrapper {
  backgroundColor?: string
  color?: string
  isSmall?: boolean
  isLarge?: boolean
}

const BadgeWrapper = styled.span`
  border: 1px solid $neutral-base;
  border-radius: 50%;
  color: $neutral-text;
  display: inline-block;
  font-weight: 600;
  text-align: center;
  
  ${(props: IBadgeWrapper) => props.backgroundColor && css`
    background-color: ${props.backgroundColor};  
  `}
  
  ${(props: IBadgeWrapper) => props.color && css`
    color: ${props.color};
  `}
  
  ${(props: IBadgeWrapper) => {
    if (props.isSmall) {
      return `
        width: 25px;
        height: 25px;
        line-height: 25px;
        font-size: 14px
      `
    }

    if (props.isLarge) {
      return `
        width: 50px;
        height: 50px;
        line-height: 50px;
        font-size: 30px
      `
    }

    return `
      width: 35px;
      height: 35px;
      line-height: 35px;
      font-size: 20px
    `
  }}
  
  .refresh-icon {
    background-color: $main-background;
    color: $primary-base;
  }
`

export {
  BadgeWrapper
}
