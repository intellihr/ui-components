import styled, { css } from 'styled-components'
import { Variables } from '../../../common'

export interface IBrickWrapperProps {
  color: Variables.Color
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
    return css`
      background: ${props.color};
    `
  }}
`
