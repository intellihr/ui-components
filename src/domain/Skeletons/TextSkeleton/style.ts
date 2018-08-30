import styled, { css, keyframes } from 'styled-components'
import { Variables } from '../../../common'

export interface ITextSkeletonWrapperProps {
  width?: number,
  type?: 'xsmall' | 'small' | 'body' | 'heading' | 'display' | 'display-large'
}

const progress = keyframes`
  0% {
    background-position: -200px 0;
  }

  100% {
    background-position: calc(200px + 100%) 0;
  }
`

export const TextSkeletonWrapper = styled.span`
  animation: ${progress} 1.2s ease-in-out infinite;
  background-color: ${Variables.Color.n200};
  background-image: linear-gradient(90deg, ${Variables.Color.n200}, ${Variables.Color.n300}, ${Variables.Color.n200});
  background-repeat: no-repeat;
  background-size: 200px 100%;
  border: 1px solid ${Variables.Color.n200};
  border-radius: 4px;
  display: inline-flex;
  width: ${(props: ITextSkeletonWrapperProps) => props.width ? `${props.width}px` : '100%'};
  font-family: 'Open Sans', Arial, sans-serif;

  ${(props: ITextSkeletonWrapperProps) => {
    switch (props.type) {
      case 'xsmall':
        return css`
          font-size: ${Variables.FontSize.fzXSmall}px;
          line-height: ${Variables.LineHeight.lhXSmall}px;
        `
      case 'small':
        return css`
          font-size: ${Variables.FontSize.fzSmall}px;
          line-height: ${Variables.LineHeight.lhSmall}px;
        `
      case 'heading':
        return css`
          font-size: ${Variables.FontSize.fzHeading}px;
          line-height: ${Variables.LineHeight.lhHeading}px;
        `
      case 'display':
        return css`
          font-size: ${Variables.FontSize.fzDisplay}px;
          line-height: ${Variables.LineHeight.lhDisplay}px;
        `
      case 'display-large':
        return css`
          font-size: ${Variables.FontSize.fzDisplayLarge}px;
          line-height: ${Variables.LineHeight.lhDisplayLarge}px;
        `
      case 'body':
      default:
        return css`
          font-size: ${Variables.FontSize.fzBody}px;
          line-height: ${Variables.LineHeight.lhBody}px;
        `
    }
  }}
`
