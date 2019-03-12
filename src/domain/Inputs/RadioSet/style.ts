import styled, {css} from 'styled-components'

import { Props } from '../../../common'
import { RadioInput } from '../../Inputs'

interface IRadioSetWrapperProps {
  orientation: Props.Orientation
}

interface IStyledRadioInputProps {
  spacing?: 'normal' | 'tight'
}

export const RadioSetWrapper = styled.div`
  display: inline-flex;
  max-width: 100%;

  ${(props: IRadioSetWrapperProps) => {
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

export const StyledRadioInput = styled(RadioInput)`
  margin-bottom: 8px;

  ${(props: IStyledRadioInputProps) => {
  switch (props.spacing) {
    case 'normal':
      return css`
          margin-bottom: 8px;
        `
    case 'tight':
      return css`
        margin-bottom: 0;
      `
    }
  }}
`
