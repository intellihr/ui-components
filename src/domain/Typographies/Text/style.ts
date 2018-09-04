import styled, { css } from 'styled-components'
import { Props, Variables } from '../../../common'
import { styleForTypographyType } from '../services/textStyles'

export interface ITextWrapperProps {
  color?: Variables.Color
  isInline?: boolean
  isUpper?: boolean
  weight?: 'normal' | 'heavy'
  textType?: Props.TypographyType
  isTruncated?: boolean
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
            font-weight: ${Variables.FontWeight.fwRegular};
          `
        case 'heavy':
          return css`
            font-weight: ${Variables.FontWeight.fwMedium};
          `
      }
    }

    switch (props.textType) {
      case 'heading':
      case 'display':
      case 'display-large':
        return css`
          font-weight: ${Variables.FontWeight.fwMedium};
        `

      case 'xsmall':
      case 'small':
      case 'body':
      default:
        return css`
          font-weight: ${Variables.FontWeight.fwRegular};
        `
    }
  }}

  ${(props: ITextWrapperProps) => props.isUpper && css`
    text-transform: uppercase;
  `}

  ${(props: ITextWrapperProps) => props.isTruncated && css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}

  ${(props: ITextWrapperProps) => !props.isInline && css`
    display: block;
  `}
`
