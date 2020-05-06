import styled, { css } from 'styled-components'

import { Props, Utils, Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

interface IStylePaginationButton {
  isCurrent?: boolean
  chevron?: 'left' | 'right'
}

interface IStyleChevronIcon {
  arrowDirection: 'left' | 'right'
}

interface IButtonWrapperProps {
  margins?: Props.IMargins
}

const ButtonsWrapper = styled.div`
  ${(props: IButtonWrapperProps) => styleForMargins(props.margins)}
`

const EllipsisWrapper = styled.div`
  color: ${Variables.Color.n800};
  cursor: not-allowed;
  width: ${Variables.Spacing.sLarge}px;
  height: ${Variables.Spacing.sLarge}px;

  ${Utils.mediaQueryBetweenSizes({ maxPx: Variables.Breakpoint.breakpointTablet })} {
    width: ${Variables.Spacing.s3XLarge}px;
    height: ${Variables.Spacing.s3XLarge}px;
  }
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
  color: ${Variables.Color.n700};
  cursor: pointer;
  font-size: ${Variables.FontSize.fzSmall}px;
  min-width: ${Variables.Spacing.sLarge}px;
  height: ${Variables.Spacing.sLarge}px;
  border-radius: ${Variables.Spacing.sLarge}px;
  margin-left: ${Variables.Spacing.s2XSmall}px;
  margin-right: ${Variables.Spacing.s2XSmall}px;
  outline: none;
  transition: color, background-color .1s ease;
  display: inline-block;
  text-align: center;
  padding: ${Variables.Spacing.s2XSmall}px;

  ${Utils.mediaQueryBetweenSizes({ maxPx: Variables.Breakpoint.breakpointTablet })} {
    width: ${Variables.Spacing.s3XLarge}px;
    height: ${Variables.Spacing.s3XLarge}px;
    border-radius: ${Variables.Spacing.s3XLarge}px;
    font-size: ${Variables.FontSize.fzBody}px;
  }

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
        font-weight: ${Variables.FontWeight.fwSemiBold};
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
  ChevronIconWrapper,
  ButtonsWrapper
}
