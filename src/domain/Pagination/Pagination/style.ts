import styled, { css } from 'styled-components'

import { Variables } from '../../../common'

interface IStylePaginationPageButton {
  isCurrent?: boolean
}

const EllipsisWrapper = styled.div`
  color: ${Variables.Color.n800};
  cursor: not-allowed;
  width: 28px;
  height: 28px;
  display: inline-block;
  text-align: center;
`

const StylePaginationButton = styled.button`
  border: 0;
  border-radius: 28px;
  color: ${Variables.Color.n800};
  cursor: pointer;
  height: 28px;
  margin-left: ${Variables.Spacing.s2XSmall}px;
  margin-right: ${Variables.Spacing.s2XSmall}px;
  min-width: 28px;
  outline: none;
  transition: color, background-color .1s ease;
  display: inline-block;
  text-align: center;
  padding: ${Variables.Spacing.s2XSmall}px;

  ${(props: IStylePaginationPageButton) => {
    if (props.isCurrent) {
      return css`
        background-color: ${Variables.Color.i400};
        color: ${Variables.Color.n100};
        `
    }
    return css `
      &:hover {
         background-color: ${Variables.Color.n300};
      }
    `
  }}

  &:disabled {
     color: ${Variables.Color.n400};
     cursor: not-allowed;
     background: transparent;
  }
`

export {
  EllipsisWrapper,
  StylePaginationButton
}
