import styled, { css } from 'styled-components'

import { Props } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

interface ICheckboxSetWrapperProps {
  orientation: Props.Orientation
  margins?: Props.IMargins
}

export const CheckboxSetWrapper = styled.div`
  display: inline-flex;
  max-width: 100%;

  ${(props: ICheckboxSetWrapperProps) => styleForMargins(props.margins)}

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
