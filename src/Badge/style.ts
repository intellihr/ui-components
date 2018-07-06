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
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 25px
      `
    }

    return `
      width: 30px;
      height: 30px;
      line-height: 30px;
      font-size: 18px
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
