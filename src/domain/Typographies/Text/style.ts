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
        return `
          font-size: ${Variables.FontSize.fzXSmall}px;
          line-height: ${Variables.LineHeight.lhXSmall}px;
          letter-spacing: .02em;
        `
      case 'small':
        return `
          font-size: ${Variables.FontSize.fzSmall}px;
          line-height: ${Variables.LineHeight.lhSmall}px;
          letter-spacing: normal;
        `
      case 'body':
        return `
          font-size: ${Variables.FontSize.fzBody}px;
          line-height: ${Variables.LineHeight.lhBody}px;
          letter-spacing: normal;
        `
      case 'heading':
        return `
          font-size: ${Variables.FontSize.fzHeading}px;
          line-height: ${Variables.LineHeight.lhHeading}px;
          letter-spacing: -.02em;
        `
      case 'display':
        return `
          font-size: ${Variables.FontSize.fzDisplay}px;
          line-height: ${Variables.LineHeight.lhDisplay}px;
          letter-spacing: -.02em;
        `
      case 'display-large':
        return `
          font-size: ${Variables.FontSize.fzDisplayLarge}px;
          line-height: ${Variables.LineHeight.lhDisplayLarge}px;
          letter-spacing: -.02em;
        `
    }
  }}

  ${(props: ITextWrapperProps) => {
    if (props.color) {
      return `
        color: ${props.color};
      `
    } else {
      switch (props.type) {
        case 'xsmall' || 'small':
          return `
            color: ${Variables.Color.n800};
          `
        case 'body' || 'heading' || 'display' || 'display-large':
          return `
            color: ${Variables.Color.n700};
          `
      }
    }
  }}

  ${(props: ITextWrapperProps) => {
    if (props.weight) {
      switch (props.weight) {
        case 'normal':
          return `
            font-weight: ${Variables.FontWeight.fwRegular};
          `
        case 'heavy':
          return `
            font-weight: ${Variables.FontWeight.fwMedium};
          `
      }
    } else {
      switch (props.type) {
        case 'xsmall' || 'small' || 'body':
          return `
            font-weight: ${Variables.FontWeight.fwRegular};
          `
        case 'heading' || 'display' || 'display-large':
          return `
            font-weight: ${Variables.FontWeight.fwMedium};
          `
      }
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
