import React from 'react'
import styled, { StyledComponentClass, css } from 'styled-components'
import { Variables } from '../../../common'

interface IStyledInputLabelProps extends React.HTMLProps<HTMLLabelElement> {
  isRequired: boolean
}

const StyledInputLabel = styled.label`
  color: ${Variables.Color.n600};
  font-size: 0.9375rem;
  line-height: 1.8;


  ${(props: IStyledInputLabelProps) => {
    if (props.isRequired) {
      return css`
        &::after {
          color: ${Variables.Color.n400};
          content: ' - required';
          font-size: .9em;
          font-style: italic;
        }
      `
    }
  }}
`

export {
  StyledInputLabel
}
