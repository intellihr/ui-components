import styled, { css } from 'styled-components'
import { Variables } from '../../../common'

interface IBadgeWrapper {
  backgroundColor?: Variables.Color
  color?: Variables.Color
  size?: 'small' | 'medium' | 'large'
}

const BadgeWrapper = styled.span`
  ${(props: IBadgeWrapper) => props.backgroundColor && css`
    background-color: ${props.backgroundColor};
  `}

  ${(props: IBadgeWrapper) => props.color && css`
    color: ${props.color};
  `}

  &, .fa {
  ${(props: IBadgeWrapper) => {
    switch (props.size) {
      case 'small':
        return `
          font-size: 12px;
          width: 20px;
          height: 20px;
          line-height: 20px;
        `
      case 'medium':
        return `
          font-size: 15px;
          width: 24px;
          height: 24px;
          line-height: 24px;
        `
      case 'large':
        return `
          font-size: 21px;
          width: 30px;
          height: 30px;
          line-height: 30px;
        `
    }
  }}
  }

  box-shadow: 0 2px 2px rgba(0,0,0,0.24);
  border: 1px solid ${Variables.Color.n400};
  border-radius: 50%;
  color: ${Variables.Color.n100};
  display: inline-block;
  font-weight: 600;
  text-align: center;
  user-select: none;

  .refresh-icon {
    background-color: transparent;
    color: ${Variables.Color.n700};
  }
`

export {
  BadgeWrapper
}
