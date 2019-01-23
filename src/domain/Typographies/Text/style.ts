import styled, { css } from 'styled-components'
import { Props, Variables } from '../../../common'
import { styleForTypographyType, styleForTruncatedText } from '../services/textStyles'

export interface ITextWrapperProps {
  color?: Variables.Color
  isInline?: boolean
  isUpper?: boolean
  weight?: 'normal' | 'heavy'
  textType?: Props.TypographyType
  isTruncated?: boolean
  isItalic?: boolean
}

export const TextWrapper = styled.span`
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
      switch (props.weight) {
        case 'normal':
          return css`
            font-weight: ${Variables.FontWeight.fwNormal};
          `
        case 'heavy':
          return css`
            font-weight: ${Variables.FontWeight.fwHeavy};
          `
      }
    }

    switch (props.textType) {
      case 'heading':
      case 'display':
      case 'display-large':
        return css`
          font-weight: ${Variables.FontWeight.fwHeavy};
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
