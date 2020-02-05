import styled, { css } from 'styled-components'

import { Variables } from '../../../../common'

const MenuItemWrapper = styled.li<{isActive?: boolean}>`
  & > * {
    padding: 1rem;
    display: block;
    align-items: center;
    line-height: 1;
    text-decoration: none;
    height: 50px;

    &:hover {
      background-color: ${Variables.Color.n300};
      border-left: 3px solid ${Variables.Color.n300};
      margin-left: 0;
    }

    ${({isActive}) => {
      if (isActive) {
        return css`
          border-left: 3px solid ${Variables.Color.i400};
          margin-left: 0;
        `
      }

      return css`
        margin-left: 3px;
      `
    }}
  }
`

const IconWrapper = styled.span<{isActive?: boolean}>`
  margin-right: 0.25rem;
  vertical-align: top;

  &:hover {
    color: ${Variables.Color.n700};
  }

  ${({isActive}) => {
    if (isActive) {
      return css`
        color: ${Variables.Color.i400};
      `
    }

    return css`
      color: ${Variables.Color.n700};
    `
  }}
`

const LoadingIconWrapper = styled.span`
  float: right;
`

const MenuItemLabelWrapper = styled.span<{isActive?: boolean}>`
  margin-left: 7.5px;
  white-space: nowrap;
  vertical-align: top;

  &:hover {
    color: ${Variables.Color.n700};
  }

  ${({isActive}) => {
    if (isActive) {
     return css`
       color: ${Variables.Color.i400};
       font-weight: 600;
      `
    }

    return css`
      color: ${Variables.Color.n700};
    `
  }}
`

export {
  IconWrapper,
  MenuItemWrapper,
  LoadingIconWrapper,
  MenuItemLabelWrapper
}
