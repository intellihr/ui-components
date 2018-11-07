import styled, { css } from 'styled-components'
import { Variables } from '../../../common'

export interface IBrickWrapperProps {
  color?: 'alert' | 'success' | 'warning' | 'primary' | 'neutral' | 'secondary' | 'highlight' | 'dark'
}

export const BrickWrapper = styled.span`
  border-radius: 4px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 4px;
  padding-right: 4px;
  display: inline-block;
  word-break: break-word;

  ${(props: IBrickWrapperProps) => {
    switch (props.color) {
      case 'alert':
        return css`
          background: ${Variables.Color.r100};
        `
      case 'success':
        return css`
          background: ${Variables.Color.g100};
        `
      case 'warning':
        return css`
          background: ${Variables.Color.o100};
        `
      case 'primary':
        return css`
          background: ${Variables.Color.i100};
        `
      case 'secondary':
        return css`
          background: ${Variables.Color.b100};
        `
      case 'highlight':
        return css`
          background: ${Variables.Color.c100};
        `
      case 'dark':
        return css`
          background: ${Variables.Color.n700};
        `
      default:
        return css`
          background: ${Variables.Color.n200};
        `
    }
  }}
`
