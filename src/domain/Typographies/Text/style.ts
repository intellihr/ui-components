import styled, { css } from 'styled-components'

import { Props, Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'
import { styleForTruncatedText, styleForTypographyType } from '../services/textStyles'

export interface ITextWrapperProps {
  color?: Variables.Color
  isInline?: boolean
  isUpper?: boolean
  weight?: Variables.FontWeight
  textType?: Props.TypographyType
  isTruncated?: boolean
  isItalic?: boolean
  margins?: Props.IMargins
}

export const TextWrapper = styled.span`

  ${(props: ITextWrapperProps) => styleForMargins(props.margins)}

  ${(props: ITextWrapperProps) => styleForTypographyType(props.textType)}

  ${(props: ITextWrapperProps) => {
    if (props.color) {
      return css`
        color: ${props.color};
      `
    }

    switch (props.textType) {
      case 'xsmall':
      case 'small':
        return css`
          color: ${Variables.Color.n800};
        `
      case 'body':
      case 'heading':
      case 'display':
      case 'display-large':
      default:
        return css`
          color: ${Variables.Color.n700};
        `
    }
  }}

  ${(props: ITextWrapperProps) => {
    if (props.weight) {
      return css`
        font-weight: ${props.weight};
      `
    }

    switch (props.textType) {
      case 'heading':
      case 'display':
      case 'display-large':
        return css`
          font-weight: ${Variables.FontWeight.fwSemiBold};
        `

      case 'xsmall':
      case 'small':
      case 'body':
      default:
        return css`
          font-weight: ${Variables.FontWeight.fwNormal};
        `
    }
  }}

  ${(props: ITextWrapperProps) => props.isUpper && css`
    text-transform: uppercase;
  `}

  ${(props: ITextWrapperProps) => props.isTruncated && css`
    ${styleForTruncatedText()}
  `}

  ${(props: ITextWrapperProps) => !props.isInline && css`
    display: block;
  `}

  ${(props: ITextWrapperProps) => props.isItalic && css`
    font-style: italic;
  `}
`
