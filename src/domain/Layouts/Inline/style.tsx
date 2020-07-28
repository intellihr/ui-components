import React from 'react'
import styled, { css } from 'styled-components'

import { Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'
import { Align, Inline } from './Inline'

interface IStyledInlineGroupWrapperProps {
  spacing?: Variables.Spacing
}

/* This styled component is a hack to get the top margin to hide properly  */
const StyledInlineGroupWrapper = styled(({ spacing, ...rest }: IStyledInlineGroupWrapperProps) => <div {...rest} />)`
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

  ${({ margins }) => styleForMargins(margins)}
`

interface IStyledInlineGroupProps {
  spacing?: Variables.Spacing
  align?: Align
  collapse?: boolean
}

const StyledInlineGroup = styled(({ spacing, collapse, align, ...rest }: IStyledInlineGroupProps) => <div {...rest} />)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    ${({ spacing }) => {
      return css`
        margin-left: -${spacing}px;
      `
    }}

    ${({ collapse }) => collapse && css`
      flex-direction: column;
    `}

    ${({ align }) => {
      switch (align) {
        case Inline.Align.Right:
          return css`
            justify-content: flex-end;
          `
        case Inline.Align.Center:
          return css`
            justify-content: center;
          `
        case Inline.Align.Left:
        default:
          return css`
            justify-content: flex-start;
          `
      }
    }}
  `

interface IStyledInlineElementProps {
  spacing?: Variables.Spacing
  fill?: boolean
}

const StyledInlineElement = styled(({ spacing, fill, ...rest }: IStyledInlineElementProps) => <div {...rest} />)`
  ${({ spacing }) => {
    return css`
      margin-left: ${spacing}px;
      margin-top: ${spacing}px;
    `
  }}

  ${({ fill }) => fill && css`
    flex: 1 1 auto;
  `}
`

export {
  StyledInlineGroupWrapper,
  StyledInlineGroup,
  StyledInlineElement
}
