import styled, { css } from 'styled-components'
import { Variables } from '../../../common'

export interface IBrickWrapperProps {
  color: Variables.Color
}

export const BrickWrapper = styled.span`
  border-radius: ${Variables.Style.borderRadius}px;
  padding: 2px 4px;
  display: inline-block;
  word-break: break-word;

  ${(props: IBrickWrapperProps) => {
    return css`
      background: ${props.color};
    `
  }}
`
