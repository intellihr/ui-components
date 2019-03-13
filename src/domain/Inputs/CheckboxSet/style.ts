import styled, { css } from 'styled-components'

import { Props, Variables } from '../../../common'
import { CheckboxInput } from '../../Inputs'

interface ICheckboxSetWrapperProps {
  orientation: Props.Orientation
}

interface IStyledCheckboxInputProps {
  spacing?: 'normal' | 'tight'
}

export const CheckboxSetWrapper = styled.div`
  display: inline-flex;
  max-width: 100%;

  ${(props: ICheckboxSetWrapperProps) => {
  if (props.orientation === Props.Orientation.Vertical) {
    return css`
        flex-direction: column
      `
  }
  return css`
      flex-direction: row;
      flex-wrap: wrap;

    `
}}
`

export const StyledCheckboxInput = styled(CheckboxInput)`
  ${(props: IStyledCheckboxInputProps) => {
  switch (props.spacing) {
    case 'normal':
      return css`
          margin-bottom: ${Variables.Spacing.sXSmall}px;
        `
    case 'tight':
      return css`
        margin-bottom: 0;
      `
    }
  }}
`
