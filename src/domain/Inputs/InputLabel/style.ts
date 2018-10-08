import React from 'react'
import styled, { StyledComponentClass, css } from 'styled-components'
import { Variables } from '../../../common'

interface IStyledInputLabelProps extends React.HTMLProps<HTMLLabelElement> {
  isRequired: boolean
}

const StyledInputLabel = styled.label`
  color: ${Variables.Color.n600};
  font-size: ${Variables.FontSize.fzSmall}px;
  line-height: ${Variables.LineHeight.lhDisplay}px;

  ${(props: IStyledInputLabelProps) => props.isRequired && css`
      &::after {
        color: ${Variables.Color.n400};
        content: ' - required';
        font-size: ${Variables.FontSize.fzSmall}px;
        font-style: italic;
      }
    `
  }}
`

export {
  StyledInputLabel
}
