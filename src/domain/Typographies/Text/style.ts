import styled, { css } from 'styled-components'
import { Variables } from '../../../common'

export interface ITextWrapperProps {
  color?: Variables.Color
  isInline?: boolean
  isUpper?: boolean
  weight?: 'normal' | 'heavy'
  type?: 'xsmall' | 'small' | 'body' | 'heading' | 'display' | 'display-large'
  isTruncated?: boolean
}

export const TextWrapper = styled.span`
  font-family: 'Open Sans', Arial, sans-serif;

  ${(props: ITextWrapperProps) => {
    switch (props.type) {
      case 'xsmall':
        return css`
          font-size: ${Variables.FontSize.fzXSmall}px;
          line-height: ${Variables.LineHeight.lhXSmall}px;
          letter-spacing: .02em;
        `
      case 'small':
        return css`
          font-size: ${Variables.FontSize.fzSmall}px;
          line-height: ${Variables.LineHeight.lhSmall}px;
          letter-spacing: normal;
        `
      case 'heading':
        return css`
          font-size: ${Variables.FontSize.fzHeading}px;
          line-height: ${Variables.LineHeight.lhHeading}px;
          letter-spacing: -.02em;
        `
      case 'display':
        return css`
          font-size: ${Variables.FontSize.fzDisplay}px;
          line-height: ${Variables.LineHeight.lhDisplay}px;
          letter-spacing: -.02em;
        `
      case 'display-large':
        return css`
          font-size: ${Variables.FontSize.fzDisplayLarge}px;
          line-height: ${Variables.LineHeight.lhDisplayLarge}px;
          letter-spacing: -.02em;
        `
      case 'body':
      default:
        return css`
          font-size: ${Variables.FontSize.fzBody}px;
          line-height: ${Variables.LineHeight.lhBody}px;
          letter-spacing: normal;
        `
    }
  }}

  ${(props: ITextWrapperProps) => {
    if (props.color) {
      return css`
        color: ${props.color};
      `
    }

    switch (props.type) {
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

    switch (props.type) {
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
