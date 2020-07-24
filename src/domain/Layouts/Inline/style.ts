import styled, { css } from 'styled-components'

import { InlineAlign } from './Inline'

/* This styled component is a hack to get the top margin to hide properly  */
const StyledInlineGroupWrapper = styled.div`
  padding-top: 1px;

  ${({ spacing }) => {

    return css`
      &::before {
        margin-top: -${spacing}px;
        content: "";
        display: block;
      }
    `
  }}
`

const StyledInlineGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  ${({ spacing }) => {
    return css`
      margin-left: -${spacing}px;
    `
  }}

  ${({ align }) => {
    switch (align) {
      case InlineAlign.Right:
        return css`
          justify-content: flex-end;
        `
      case InlineAlign.Center:
        return css`
          justify-content: center;
        `
      case InlineAlign.Left:
      default:
        return css`
          justify-content: flex-start;
        `
    }

  }}
`

const StyledInlineElement = styled.div`
  ${({ spacing }) => {
    return css`
      margin-left: ${spacing}px;
      margin-top: ${spacing}px;
    `
  }}
`

export {
  StyledInlineGroupWrapper,
  StyledInlineGroup,
  StyledInlineElement
}
