import styled, { css } from 'styled-components'

import { Variables } from '../../../common'

interface IStylePaginationButton {
  isCurrent?: boolean
  chevron?: 'left' | 'right'
}

interface IStyleChevronIcon {
  arrowDirection: 'left' | 'right'
}

const EllipsisWrapper = styled.div`
  color: ${Variables.Color.n800};
  cursor: not-allowed;
  width: 28px;
  height: 28px;
  display: inline-block;
  text-align: center;
`

const ChevronIconWrapper = styled.span`
  ${(props: IStyleChevronIcon) => {
    if (props.arrowDirection === 'left') {
      return css`
        position: relative;
        top: 1px;
        right: 1px;
      `
    }

    if (props.arrowDirection === 'right') {
      return css`
        position: relative;
        top: 1px;
        left: 1px;
      `
    }
}}
`

const StylePaginationButton = styled.button`
  border: 0;
  border-radius: 28px;
  color: ${Variables.Color.n700};
  cursor: pointer;
  font-size: ${Variables.FontSize.fzSmall}px;
  line-height: ${Variables.LineHeight.lhSmall}px;
  height: 28px;
  margin-left: ${Variables.Spacing.s2XSmall}px;
  margin-right: ${Variables.Spacing.s2XSmall}px;
  min-width: 28px;
  outline: none;
  transition: color, background-color .1s ease;
  display: inline-block;
  text-align: center;
  padding: ${Variables.Spacing.s2XSmall}px;

  &:disabled {
     color: ${Variables.Color.n400};
     cursor: not-allowed;
     background: transparent;
  }

  ${(props: IStylePaginationButton) => {
    if (props.chevron === 'left') {
      return css `
          margin-left: 0;
        `
    }

    if (props.chevron === 'right') {
      return css `
            margin-right: 0;
          `
    }
  }}

  ${(props: IStylePaginationButton) => {
    if (props.isCurrent) {
      return css`
        background-color: ${Variables.Color.i400};
        font-weight: ${Variables.FontWeight.fwHeavy};
        color: ${Variables.Color.n100};
        `
    }
    return css `
      &:hover, &:focus {
         background-color: ${Variables.Color.n300};
      }
    `
  }}
`

export {
  EllipsisWrapper,
  StylePaginationButton,
  ChevronIconWrapper
}
