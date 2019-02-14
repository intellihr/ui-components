import { css } from 'styled-components'

import { Props, Variables } from '../../../common'

function styleForTypographyType (type?: Props.TypographyType): any {
  switch (type) {
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
}

function styleForTruncatedText (): any {
  return css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `
}

function styleForLineBreakText (): any {
  return css`
    overflow-wrap: break-word;
    word-wrap: break-word;
  `
}

export {
  styleForTypographyType,
  styleForTruncatedText,
  styleForLineBreakText
}
